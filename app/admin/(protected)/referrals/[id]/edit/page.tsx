import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ReferralForm } from "../../referral-form";

export const dynamic = "force-dynamic";

export default async function EditReferralPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await prisma.referralService.findUnique({
    where: { id },
  });

  if (!item) notFound();

  const serializedItem = {
    ...item,
    consultationFee: item.consultationFee ? item.consultationFee.toString() : null,
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
  };

  return (
    <section className="admin-page">
      <div className="admin-page-title">
        <div>
          <p>Admin / Referrals Services / Edit</p>
          <h1>Edit {item.name}</h1>
        </div>
      </div>
      <ReferralForm referral={serializedItem} />
    </section>
  );
}
