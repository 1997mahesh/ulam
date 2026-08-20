import { randomBytes, randomInt } from "crypto";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { bookingSchema } from "@/lib/validation/booking";
import { getSiteSettings } from "@/lib/site-settings";

const HOLD_MINUTES = 15;

export async function POST(request: Request) {
  try {
    const parsed = bookingSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Please check the submitted information.", issues: parsed.error.flatten().fieldErrors }, { status: 400 });
    }

    const data = parsed.data;
    const settings = await getSiteSettings();
    if (settings.paymentsEnabled !== "true") {
      return NextResponse.json({ error: "Online payment requests are currently unavailable. Please contact us for assistance." }, { status: 503 });
    }
    if (!data.serviceId) return NextResponse.json({ error: "Please select a service." }, { status: 400 });

    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const appointment = await prisma.$transaction(async (tx) => {
          const [service, counsellor] = await Promise.all([
            tx.service.findFirst({ where: { id: data.serviceId, isActive: true } }),
            data.counsellorId ? tx.counsellor.findFirst({ where: { id: data.counsellorId, isActive: true } }) : null,
          ]);
          if (!service) throw new BookingError("Selected service is unavailable.", 400);
          if (data.counsellorId && !counsellor) throw new BookingError("Selected counsellor is unavailable.", 400);
          if (!counsellor) throw new BookingError("Please select a counsellor so we can reserve your appointment slot.", 400);

          const offered = await tx.counsellorservice.findUnique({ where: { counsellorId_serviceId: { counsellorId: counsellor.id, serviceId: service.id } } });
          if (!offered) throw new BookingError("This counsellor does not offer the selected service.", 400);

          const [hours, blocked] = await Promise.all([
            tx.availability.findFirst({ where: { counsellorId: counsellor.id, dayOfWeek: data.appointmentDate.getUTCDay(), isActive: true, startTime: { lte: data.startTime }, endTime: { gt: data.startTime } } }),
            tx.blockedDate.findFirst({ where: { counsellorId: counsellor.id, date: data.appointmentDate, OR: [{ startTime: null }, { startTime: { lte: data.startTime }, OR: [{ endTime: null }, { endTime: { gt: data.startTime } }] }] } }),
          ]);
          if (!hours || blocked) throw new BookingError("The counsellor is unavailable at that date and time.", 409);

          const now = new Date();
          await tx.payment.updateMany({ where: { status: "PENDING", expiresAt: { lte: now } }, data: { status: "EXPIRED" } });
          const conflict = await tx.appointment.findFirst({
            where: {
              counsellorId: counsellor.id,
              appointmentDate: data.appointmentDate,
              startTime: data.startTime,
              OR: [
                { status: { in: ["CONFIRMED", "RESCHEDULED"] } },
                { payments: { some: { status: { in: ["PENDING", "SUBMITTED", "VERIFIED"] }, OR: [{ status: { not: "PENDING" } }, { expiresAt: { gt: now } }] } } },
              ],
            },
          });
          if (conflict) throw new BookingError("That appointment slot is no longer available.", 409);

          const duration = service.durationMinutes || Number(settings.defaultDuration);
          const [hour, minute] = data.startTime.split(":").map(Number);
          const endMinutes = hour * 60 + minute + duration;
          const endTime = `${String(Math.floor(endMinutes / 60)).padStart(2, "0")}:${String(endMinutes % 60).padStart(2, "0")}`;
          const amount = counsellor.consultationFee ?? service.price;
          if (!amount || Number(amount) <= 0) throw new BookingError("A consultation fee has not been configured for this selection.", 400);
          const expiresAt = new Date(now.getTime() + HOLD_MINUTES * 60_000);
          const paymentToken = randomBytes(32).toString("base64url");
          const bookingNumber = `ULAM-${String(randomInt(0, 1_000_000)).padStart(6, "0")}`;

          return tx.appointment.create({
            data: {
              ...data,
              serviceId: service.id,
              counsellorId: counsellor.id,
              patientAge: data.patientAge || null,
              endTime,
              bookingNumber,
              paymentToken,
              paymentExpiresAt: expiresAt,
              payments: { create: { amount, currency: settings.paymentCurrency, expiresAt } },
            },
          });
        }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable });

        return NextResponse.json({ success: true, bookingNumber: appointment.bookingNumber, paymentUrl: `/payment/${appointment.paymentToken}` }, { status: 201 });
      } catch (error) {
        if (error instanceof BookingError) return NextResponse.json({ error: error.message }, { status: error.status });
        if (error instanceof Prisma.PrismaClientKnownRequestError && ["P2002", "P2034"].includes(error.code) && attempt < 2) continue;
        throw error;
      }
    }
  } catch (error) {
    console.error("Booking creation failed", error);
    return NextResponse.json({ error: "Unable to prepare the booking right now." }, { status: 500 });
  }
}

class BookingError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
  }
}
