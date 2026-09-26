import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ServiceForm } from "../../service-form";

export const dynamic = "force-dynamic";

export default async function Edit({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const s = await prisma.service.findUnique({ where: { id } });
  if (!s) notFound();

  const serializedService = {
    id: s.id,
    name: s.name,
    slug: s.slug,
    category: s.category,
    shortDescription: s.shortDescription,
    description: s.description,
    durationMinutes: s.durationMinutes,
    price: s.price ? s.price.toString() : null,
    isActive: s.isActive,
    displayOrder: s.displayOrder,
  };

  return (
    <section className="admin-page">
      <div className="admin-page-title">
        <div>
          <p>Admin / Services / Edit</p>
          <h1>{s.name}</h1>
        </div>
      </div>
      <ServiceForm service={serializedService} />
    </section>
  );
}
