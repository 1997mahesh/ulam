import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock3 } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { getSiteSettings } from "@/lib/site-settings";
import { PaymentForm } from "@/components/payment-form";

export const dynamic = "force-dynamic";
export const metadata = { title: "Complete Consultation Payment" };

export default async function PaymentPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const [appointment, settings] = await Promise.all([
    prisma.appointment.findUnique({ where: { paymentToken: token }, include: { service: true, counsellor: true, payments: { orderBy: { createdAt: "desc" } } } }),
    getSiteSettings(),
  ]);
  if (!appointment || !appointment.payments.length) notFound();
  let payment = appointment.payments[0];
  if (payment.status === "PENDING" && payment.expiresAt <= new Date()) {
    payment = await prisma.payment.update({ where: { id: payment.id }, data: { status: "EXPIRED" } });
  }
  const amount = Number(payment.amount);
  const formattedAmount = new Intl.NumberFormat("en-IN", { style: "currency", currency: payment.currency, maximumFractionDigits: 2 }).format(amount);
  const dateTime = `${appointment.appointmentDate.toLocaleDateString("en-IN", { dateStyle: "long" })} at ${appointment.startTime}`;

  if (payment.status === "SUBMITTED" || payment.status === "VERIFIED") {
    return <section className="payment-page"><div className="payment-success"><CheckCircle2 aria-hidden="true" /><p className="payment-eyebrow">{payment.status === "VERIFIED" ? "Payment verified" : "Verification pending"}</p><h1>Payment submitted for verification</h1><p>Thank you. We have received your payment information. Your consultation will be confirmed after verification.</p><dl><dt>Booking number</dt><dd>{appointment.bookingNumber}</dd><dt>UTR</dt><dd>{payment.utr}</dd><dt>Amount</dt><dd>{formattedAmount}</dd><dt>Appointment</dt><dd>{dateTime}</dd><dt>Payment status</dt><dd><span className="payment-badge">{payment.status === "VERIFIED" ? "Verified" : "Payment Verification Pending"}</span></dd></dl><Link className="btn btn-primary" href="/">Return to Home</Link></div></section>;
  }
  if (payment.status === "EXPIRED") {
    return <section className="payment-page"><div className="payment-success"><Clock3 aria-hidden="true" /><h1>Payment reservation expired</h1><p>This appointment slot was held for 15 minutes and has now been released. Please start a new booking to choose an available time.</p><Link className="btn btn-primary" href="/book-consultation">Return to Booking</Link></div></section>;
  }

  const summary = { bookingNumber: appointment.bookingNumber, patientName: appointment.patientName, service: appointment.service?.name || "—", counsellor: appointment.counsellor?.name || "Unassigned", mode: appointment.consultationMode === "IN_PERSON" ? "In person" : "Online", date: appointment.appointmentDate.toLocaleDateString("en-IN", { dateStyle: "long" }), time: `${appointment.startTime}–${appointment.endTime}`, amount: formattedAmount };
  const paymentSettings = { upiEnabled: settings.upiEnabled === "true", payeeName: settings.upiPayeeName, upiId: settings.upiId, qrImage: settings.upiQrImage, bankEnabled: settings.bankEnabled === "true", accountName: settings.bankAccountName, bankName: settings.bankName, accountNumber: settings.bankAccountNumber, ifsc: settings.bankIfsc, accountType: settings.bankAccountType, instructions: settings.paymentInstructions };
  return <section className="payment-page"><div className="payment-shell"><Link className="payment-back" href="/book-consultation">← Back to Booking</Link><p className="payment-eyebrow">Secure manual payment</p><h1>Complete Your Consultation Payment</h1><p className="payment-intro">Your slot is reserved temporarily. Payment verification by our team is required before the consultation is confirmed.</p>{payment.status === "REJECTED" && <div className="payment-rejected"><strong>Previous payment was not verified.</strong><span>{payment.rejectionReason || "Please submit valid payment information again."}</span></div>}<PaymentForm token={token} summary={summary} settings={paymentSettings} /></div></section>;
}
