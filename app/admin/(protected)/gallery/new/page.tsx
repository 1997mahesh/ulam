import Link from "next/link";
import { GalleryForm } from "../gallery-form";

export const dynamic = "force-dynamic";

export default function NewGalleryItemPage() {
  return (
    <section className="admin-page">
      <div className="admin-page-title">
        <div>
          <p>Admin / Gallery / New</p>
          <h1>Add Media Item</h1>
        </div>
        <Link className="admin-secondary" href="/admin/gallery">
          ← Back to Gallery
        </Link>
      </div>

      <GalleryForm />
    </section>
  );
}
