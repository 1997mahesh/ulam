import { saveGalleryItem } from "../gallery-actions";

type GalleryItem = {
  id: string;
  title: string | null;
  caption: string | null;
  type: string;
  url: string;
  thumbnailUrl: string | null;
  displayOrder: number;
  isActive: boolean;
};

export function GalleryForm({ item }: { item?: GalleryItem }) {
  return (
    <form action={saveGalleryItem} className="admin-panel admin-edit">
      <input type="hidden" name="id" value={item?.id} />

      <label>
        Title
        <input name="title" defaultValue={item?.title || ""} placeholder="e.g. Clinic Reception / Awareness Workshop" />
      </label>

      <label>
        Caption / Description
        <textarea
          name="caption"
          rows={3}
          defaultValue={item?.caption || ""}
          placeholder="Brief description or context for this photo/video..."
        />
      </label>

      <div className="admin-form-row">
        <label>
          Media Type
          <select name="type" defaultValue={item?.type || "IMAGE"}>
            <option value="IMAGE">Image / Photo</option>
            <option value="VIDEO">Video</option>
          </select>
        </label>

        <label>
          Display Order
          <input name="displayOrder" type="number" defaultValue={item?.displayOrder || 0} />
        </label>
      </div>

      <label>
        Upload File (Image: JPG, PNG, WEBP | Video: MP4, WEBM up to 50MB)
        <input name="file" type="file" accept="image/*,video/*" />
        <small style={{ color: "#666", display: "block", marginTop: "4px" }}>
          Uploads directly to secure cloud storage.
        </small>
      </label>

      <label>
        Or External Media / Video URL (YouTube, Vimeo, or Direct Video URL)
        <input
          name="url"
          defaultValue={item?.url || ""}
          placeholder="https://www.youtube.com/watch?v=... or https://..."
        />
      </label>

      {item?.url && (
        <div style={{ margin: "16px 0", padding: "16px", background: "#f5f8f6", borderRadius: "8px" }}>
          <p style={{ fontSize: "13px", fontWeight: "bold", marginBottom: "8px", color: "#1b2722" }}>
            Current Media Preview:
          </p>
          {item.type === "VIDEO" || item.url.includes("youtu") || item.url.includes("vimeo") || item.url.endsWith(".mp4") ? (
            <p style={{ fontSize: "13px", color: "#0f4a3a" }}>
              Video Link: <a href={item.url} target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>{item.url}</a>
            </p>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.url}
              alt={item.title || "Preview"}
              style={{ maxHeight: "180px", borderRadius: "6px", objectFit: "cover" }}
            />
          )}
        </div>
      )}

      <label className="admin-check">
        <input name="isActive" type="checkbox" defaultChecked={item?.isActive ?? true} /> Active / Visible on public gallery
      </label>

      <button className="admin-primary">Save Media Item</button>
    </form>
  );
}
