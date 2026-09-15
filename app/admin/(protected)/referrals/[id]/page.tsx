import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ViewReferralPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = await prisma.referralService.findUnique({
    where: { id },
  });

  if (!item) notFound();

  return (
    <section className="admin-page">
      <div className="admin-page-title">
        <div>
          <p>Admin / Referrals Services / View</p>
          <h1>{item.name}</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link className="admin-secondary" href={`/referrals/${item.slug}`} target="_blank">
            View on site ↗
          </Link>
          <Link className="admin-primary" href={`/admin/referrals/${item.id}/edit`}>
            Edit Referral Service
          </Link>
        </div>
      </div>

      <div className="admin-detail-grid">
        <section className="admin-panel">
          {item.photo && (
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 border border-[#dce8e1]">
              <Image src={item.photo} fill className="object-cover" alt={item.name} />
            </div>
          )}
          <dl>
            <dt>Slug</dt>
            <dd>{item.slug}</dd>
            <dt>Designation</dt>
            <dd>{item.designation}</dd>
            <dt>Department</dt>
            <dd>{item.department || "—"}</dd>
            <dt>Qualifications</dt>
            <dd>{item.qualifications || "—"}</dd>
            <dt>Experience Badge</dt>
            <dd>{item.experience || "—"}</dd>
            <dt>Hospital Affiliation</dt>
            <dd>{item.hospitalAffiliation || "—"}</dd>
            <dt>Languages</dt>
            <dd>{item.languages.join(", ") || "—"}</dd>
            <dt>Status</dt>
            <dd>{item.isActive ? "Active (Visible)" : "Inactive (Hidden)"}</dd>
            <dt>Display Order</dt>
            <dd>{item.displayOrder}</dd>
            <dt>Created</dt>
            <dd>{item.createdAt.toLocaleString("en-IN")}</dd>
            <dt>Updated</dt>
            <dd>{item.updatedAt.toLocaleString("en-IN")}</dd>
          </dl>
        </section>

        <section className="admin-panel">
          <h2>Profile & Biography</h2>
          {item.shortBio && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-700 italic border border-gray-100">
              <b>Summary:</b> {item.shortBio}
            </div>
          )}
          <div className="mt-4 whitespace-pre-wrap text-sm text-gray-700 leading-relaxed">
            {item.bio}
          </div>

          <h2 className="mt-8">Areas of Clinical Focus / Malignancies</h2>
          {item.areasOfFocus.length ? (
            <div className="flex flex-wrap gap-2 mt-2">
              {item.areasOfFocus.map((area) => (
                <span key={area} className="px-3 py-1 rounded-md bg-[#eef5f1] text-[#0f4a3a] text-xs font-semibold border border-[#d3e5dc]">
                  {area}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">None specified</p>
          )}

          <h2 className="mt-8">Care Modalities & Services</h2>
          {item.therapeuticModalities.length ? (
            <div className="flex flex-wrap gap-2 mt-2">
              {item.therapeuticModalities.map((mod) => (
                <span key={mod} className="px-3 py-1 rounded-md bg-[#f1f6f8] text-[#006d67] text-xs font-semibold border border-[#d0e4e2]">
                  {mod}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">None specified</p>
          )}
        </section>
      </div>
    </section>
  );
}
