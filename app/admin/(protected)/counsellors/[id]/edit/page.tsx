import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { CounsellorForm } from "../../counsellor-form";

export const dynamic = "force-dynamic";

export default async function Edit({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const [c, services] = await Promise.all([
    prisma.counsellor.findUnique({
      where: { id },
      include: { services: true },
    }),
    prisma.service.findMany({
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    }),
  ]);

  if (!c) notFound();

  const serializedCounsellor = {
    ...c,
    consultationFee: c.consultationFee ? c.consultationFee.toString() : null,
    createdAt: c.createdAt.toISOString(),
    updatedAt: c.updatedAt.toISOString(),
  };

  return (
    <section className="admin-page">
      <div className="admin-page-title">
        <div>
          <p>Admin / Counsellors / Edit</p>
          <h1>{c.name}</h1>
        </div>
      </div>
      <CounsellorForm counsellor={serializedCounsellor} services={services} />
    </section>
  );
}
