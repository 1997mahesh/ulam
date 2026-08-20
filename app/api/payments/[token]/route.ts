import { PaymentMethod, Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { deletePaymentProof, uploadPaymentProof } from "@/lib/media-storage";
import { getSiteSettings } from "@/lib/site-settings";

const methodValues = Object.values(PaymentMethod);

export async function POST(request: Request, { params }: { params: Promise<{ token: string }> }) {
  let proofPath: string | null = null;
  try {
    const { token } = await params;
    const form = await request.formData();
    const method = String(form.get("paymentMethod") || "") as PaymentMethod;
    const utr = String(form.get("utr") || "").trim().toUpperCase();
    const confirmed = form.get("confirmation") === "yes";
    const file = form.get("proof");
    if (!methodValues.includes(method)) return fail("Please select a payment method.");
    if (!confirmed) return fail("Please confirm that the payment information is accurate.");
    if (!file || !(file instanceof File) || file.size === 0) return fail("Please upload payment proof.");
    const validUtr = method === "UPI" || method === "QR_CODE" ? /^\d{8,30}$/.test(utr) : /^[A-Z0-9][A-Z0-9/-]{5,39}$/.test(utr);
    if (!validUtr) return fail(method === "BANK_TRANSFER" ? "Enter a valid 6–40 character transaction reference." : "Enter a valid 8–30 digit UTR.");

    const settings = await getSiteSettings();
    if (settings.paymentsEnabled !== "true") return fail("Payments are currently unavailable.", 503);
    if ((method === "UPI" || method === "QR_CODE") && settings.upiEnabled !== "true") return fail("UPI payments are not currently enabled.");
    if (method === "BANK_TRANSFER" && settings.bankEnabled !== "true") return fail("Bank transfer is not currently enabled.");

    const appointment = await prisma.appointment.findUnique({
      where: { paymentToken: token },
      include: { payments: { orderBy: { createdAt: "desc" } } },
    });
    if (!appointment || !appointment.payments.length) return fail("This payment link is invalid.", 404);
    const latest = appointment.payments[0];
    if (["SUBMITTED", "VERIFIED"].includes(latest.status)) return fail("Payment has already been submitted for this booking.", 409);
    const now = new Date();
    if (latest.status === "PENDING" && latest.expiresAt <= now) {
      await prisma.payment.update({ where: { id: latest.id }, data: { status: "EXPIRED" } });
      return fail("This payment reservation has expired. Please create a new booking.", 410);
    }
    if (latest.status === "EXPIRED") return fail("This payment reservation has expired. Please create a new booking.", 410);

    proofPath = await uploadPaymentProof(file, appointment.bookingNumber);
    const duplicate = await prisma.payment.findUnique({ where: { utr } });
    if (duplicate && duplicate.id !== latest.id) {
      await deletePaymentProof(proofPath);
      proofPath = null;
      return fail("This transaction reference has already been used.", 409);
    }

    const submittedAt = new Date();
    const expiresAt = latest.status === "REJECTED" ? new Date(submittedAt.getTime() + 15 * 60_000) : latest.expiresAt;
    await prisma.$transaction(async (tx) => {
      if (latest.status === "REJECTED") {
        await tx.payment.create({ data: { appointmentId: appointment.id, paymentMethod: method, amount: latest.amount, currency: latest.currency, utr, proofImagePath: proofPath, status: "SUBMITTED", submittedAt, expiresAt } });
      } else {
        await tx.payment.update({ where: { id: latest.id }, data: { paymentMethod: method, utr, proofImagePath: proofPath, status: "SUBMITTED", submittedAt } });
      }
      await tx.appointment.update({ where: { id: appointment.id }, data: { paymentExpiresAt: expiresAt } });
    }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (proofPath) await deletePaymentProof(proofPath);
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") return fail("This transaction reference has already been used.", 409);
    console.error("Payment submission failed", error);
    return fail(error instanceof Error && error.message.includes("image") ? error.message : "Unable to submit payment right now.", 500);
  }
}

function fail(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}
