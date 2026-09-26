import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ServicesTable } from "./services-table";

export const dynamic = "force-dynamic";

export default async function Services() {
  const rows = await prisma.service.findMany({
    orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
    include: {
      _count: {
        select: { Counsellors: true, appointments: true },
      },
    },
  });

  const serializedRows = rows.map((r) => ({
    id: r.id,
    name: r.name,
    slug: r.slug,
    category: r.category,
    durationMinutes: r.durationMinutes,
    price: r.price ? r.price.toString() : null,
    isActive: r.isActive,
    _count: r._count,
  }));

  return (
    <section className="admin-page">
      <div className="admin-page-title">
        <div>
          <p>Admin / Services</p>
          <h1>Services</h1>
        </div>
        <Link className="admin-primary" href="/admin/services/new">
          Add Service
        </Link>
      </div>

      <ServicesTable rows={serializedRows} />
    </section>
  );
}
