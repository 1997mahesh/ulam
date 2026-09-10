import Link from "next/link";
import Image from "next/image";
import { Film, Image as ImageIcon } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { RecordActions } from "@/components/admin/record-actions";
import { deleteGallery } from "../delete-actions";

export const dynamic = "force-dynamic";

export default async function AdminGalleryPage() {
  const items = await prisma.galleryItem.findMany({
    orderBy: [{ displayOrder: "asc" }, { createdAt: "desc" }],
  });

  return (
    <section className="admin-page">
      <div className="admin-page-title">
        <div>
          <p>Admin / Gallery</p>
          <h1>Gallery & Media</h1>
        </div>
        <Link className="admin-primary" href="/admin/gallery/new">
          Add Media Item
        </Link>
      </div>

      <div className="admin-table-wrap">
        <table>
          <thead>
            <tr>
              <th>Preview</th>
              <th>Title & Caption</th>
              <th>Type</th>
              <th>Display Order</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "32px", color: "#666" }}>
                  No gallery items yet. Click &quot;Add Media Item&quot; to upload photos or videos.
                </td>
              </tr>
            ) : (
              items.map((item) => {
                const isVideo = item.type === "VIDEO";
                return (
                  <tr key={item.id}>
                    <td>
                      <div
                        style={{
                          width: "72px",
                          height: "48px",
                          borderRadius: "6px",
                          overflow: "hidden",
                          background: "#1b2722",
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {isVideo ? (
                          <Film size={20} color="#fff" />
                        ) : (
                          <Image src={item.url} alt={item.title || "Preview"} fill className="object-cover" />
                        )}
                      </div>
                    </td>
                    <td>
                      <b>{item.title || "(Untitled)"}</b>
                      {item.caption && <small style={{ display: "block", color: "#666", maxWidth: "260px" }}>{item.caption}</small>}
                    </td>
                    <td>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "12px",
                          fontWeight: 600,
                          padding: "2px 8px",
                          borderRadius: "4px",
                          background: isVideo ? "#edf2ff" : "#e6f5ea",
                          color: isVideo ? "#2b4c7e" : "#0f4a3a",
                        }}
                      >
                        {isVideo ? <Film size={12} /> : <ImageIcon size={12} />}
                        {item.type}
                      </span>
                    </td>
                    <td>{item.displayOrder}</td>
                    <td>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          fontSize: "12px",
                          fontWeight: 600,
                          background: item.isActive ? "#e6f5ea" : "#f5f5f5",
                          color: item.isActive ? "#0f4a3a" : "#777",
                        }}
                      >
                        {item.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td>
                      <RecordActions
                        viewHref={item.url}
                        editHref={`/admin/gallery/${item.id}/edit`}
                        id={item.id}
                        name={item.title || "Gallery Item"}
                        action={deleteGallery}
                        deleteLabel="Delete Item"
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
