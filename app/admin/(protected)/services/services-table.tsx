"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { RecordActions } from "@/components/admin/record-actions";
import { deleteService } from "../delete-actions";

export type ServiceRow = {
  id: string;
  name: string;
  slug: string;
  category: string | null;
  durationMinutes: number;
  price: { toString(): string } | number | null;
  isActive: boolean;
  _count: {
    Counsellors: number;
    appointments: number;
  };
};

const CATEGORIES = [
  "Comprehensive Psychological Services",
  "Comprehensive Psycho-Oncological Services",
  "Therapeutic Interventions",
  "Yoga, Physiotherapy & Nutrition Support",
];

export function ServicesTable({ rows }: { rows: ServiceRow[] }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRows = useMemo(() => {
    return rows.filter((service) => {
      if (selectedCategory) {
        if (selectedCategory === "unassigned") {
          if (service.category) return false;
        } else if (service.category !== selectedCategory) {
          return false;
        }
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = service.name.toLowerCase().includes(query);
        const matchesSlug = service.slug.toLowerCase().includes(query);
        if (!matchesName && !matchesSlug) return false;
      }

      return true;
    });
  }, [rows, selectedCategory, searchQuery]);

  return (
    <div className="space-y-4">
      {/* Category Filter & Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#f8f6f0] p-4 rounded-xl border border-[#e2ece6]">
        <div className="flex flex-wrap items-center gap-3 flex-1">
          <label className="text-xs font-bold text-[#0b3d30] flex items-center gap-2">
            <span>Filter by Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="h-10 px-3 py-1 bg-white border border-[#d2e4da] rounded-lg text-xs font-normal focus:outline-none focus:ring-1 focus:ring-[#0f4a3a]"
            >
              <option value="">All Categories ({rows.length})</option>
              {CATEGORIES.map((cat) => {
                const count = rows.filter((r) => r.category === cat).length;
                return (
                  <option key={cat} value={cat}>
                    {cat} ({count})
                  </option>
                );
              })}
              <option value="unassigned">
                Unassigned (
                {rows.filter((r) => !r.category).length})
              </option>
            </select>
          </label>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search service name..."
            className="h-10 px-3 py-1 bg-white border border-[#d2e4da] rounded-lg text-xs font-normal min-w-[200px] flex-1 max-w-sm focus:outline-none focus:ring-1 focus:ring-[#0f4a3a]"
          />
        </div>

        {(selectedCategory || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("");
              setSearchQuery("");
            }}
            className="text-xs font-bold text-[#8a5b00] hover:underline px-2 py-1"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Services Table */}
      <div className="admin-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>
                <div className="flex items-center gap-1.5">
                  <span>Category</span>
                </div>
              </th>
              <th>Duration</th>
              <th>Price</th>
              <th>Counsellors</th>
              <th>Bookings</th>
              <th>Status</th>
              <th className="text-right pr-6" style={{ textAlign: "right" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.length > 0 ? (
              filteredRows.map((x) => (
                <tr key={x.id}>
                  <td>
                    <b>{x.name}</b>
                    <small>{x.slug}</small>
                  </td>
                  <td>
                    {x.category ? (
                      <span className="inline-block text-[10px] font-semibold text-[#0f4a3a] bg-[#eaf4ef] border border-[#d2e4da] px-2 py-0.5 rounded">
                        {x.category}
                      </span>
                    ) : (
                      <span className="text-[#888] italic text-[11px]">—</span>
                    )}
                  </td>
                  <td>{x.durationMinutes} min</td>
                  <td>{x.price ? `₹${x.price}` : "—"}</td>
                  <td>{x._count.Counsellors}</td>
                  <td>{x._count.appointments}</td>
                  <td>
                    <span
                      className={`admin-status ${
                        x.isActive ? "" : "admin-status-inactive"
                      }`}
                    >
                      {x.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="text-right pr-6" style={{ textAlign: "right" }}>
                    <div className="flex items-center justify-end gap-3.5 ml-auto">
                      <RecordActions
                        viewHref={`/admin/services/${x.id}`}
                        editHref={`/admin/services/${x.id}/edit`}
                        id={x.id}
                        name={x.name}
                        action={deleteService}
                        deleteLabel="Delete Service"
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center py-8 text-[#666]">
                  No services found matching the selected filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
