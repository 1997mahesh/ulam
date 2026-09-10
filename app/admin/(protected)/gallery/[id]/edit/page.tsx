import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { GalleryForm } from "../../gallery-form";

export const dynamic = "force-dynamic";

export default async function EditGalleryItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await prisma.galleryItem.findUnique({ where: { id } });

  if (!item) notFound();

  return (
    <section className="admin-page">
      <div className="admin-page-title">
        <div>
          <p>Admin / Gallery / Edit</p>
          <h1>Edit Media Item</h1>
        </div>
        <Link className="admin-secondary" href="/admin/gallery">
          ← Back to Gallery
        </Link>
      </div>

      <GalleryForm item={item} />
    </section>
  );
}
