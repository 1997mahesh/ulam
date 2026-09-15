import Image from "next/image";
import Link from "next/link";
import { Stethoscope, UserRound } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { RecordActions } from "@/components/admin/record-actions";
import { deleteReferralService } from "../delete-actions";

export const dynamic = "force-dynamic";

export default async function ReferralsPage() {
  const rows = await prisma.referralService.findMany({
    orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
  });

  return (
    <section className="admin-page">
      <div className="admin-page-title">
        <div>
          <p>Admin / Referrals Services</p>
          <h1>Referrals Services & Specialists</h1>
        </div>
        <Link className="admin-primary" href="/admin/referrals/new">
          Add Referral Service
        </Link>
      </div>

      <div className="admin-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Doctor / Service</th>
              <th>Designation / Dept</th>
              <th>Qualifications</th>
              <th>Areas of Focus</th>
              <th>Order</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-8 text-gray-500">
                  No referral services or specialists found. Click "Add Referral Service" above to add one.
                </td>
              </tr>
            ) : (
              rows.map((x) => (
                <tr key={x.id}>
                  <td>
                    {x.photo ? (
                      <Image
                        className="admin-avatar"
                        src={x.photo}
                        width={46}
                        height={46}
                        alt=""
                      />
                    ) : (
                      <span className="admin-avatar admin-avatar-empty">
                        <UserRound />
                      </span>
                    )}
                  </td>
                  <td>
                    <b>{x.name}</b>
                    <small>{x.slug}</small>
                  </td>
                  <td>
                    <div>{x.designation}</div>
                    {x.department && <small className="text-[#006d67] font-semibold">{x.department}</small>}
                  </td>
                  <td>
                    <small>{x.qualifications || "—"}</small>
                  </td>
                  <td>
                    <div className="flex flex-wrap gap-1 max-w-[220px]">
                      {x.areasOfFocus.slice(0, 3).map((a) => (
                        <span key={a} className="inline-block px-1.5 py-0.5 rounded text-[11px] bg-gray-100 text-gray-700">
                          {a}
                        </span>
                      ))}
                      {x.areasOfFocus.length > 3 && (
                        <span className="text-[11px] text-gray-400">+{x.areasOfFocus.length - 3} more</span>
                      )}
                    </div>
                  </td>
                  <td>{x.displayOrder}</td>
                  <td>
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${x.isActive ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-700"}`}>
                      {x.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td>
                    <RecordActions
                      viewHref={`/admin/referrals/${x.id}`}
                      editHref={`/admin/referrals/${x.id}/edit`}
                      id={x.id}
                      name={x.name}
                      action={deleteReferralService}
                      deleteLabel="Delete Referral Service"
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
