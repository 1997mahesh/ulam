"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { deleteGalleryMedia, uploadGalleryMedia } from "@/lib/media-storage";

const text = (f: FormData, k: string) => String(f.get(k) || "").trim();

export async function saveGalleryItem(f: FormData) {
  await requireAdmin();
  const id = text(f, "id");
  const title = text(f, "title") || null;
  const caption = text(f, "caption") || null;
  let type = text(f, "type") || "IMAGE";
  let url = text(f, "url");
  const displayOrder = Number(f.get("displayOrder")) || 0;
  const isActive = f.get("isActive") === "on";

  const file = f.get("file");
  let uploadedUrl: string | null = null;

  try {
    if (file instanceof File && file.size > 0) {
      const uploadRes = await uploadGalleryMedia(file);
      uploadedUrl = uploadRes.url;
      url = uploadRes.url;
      type = uploadRes.type;
    }

    if (!url) {
      throw new Error("Please provide a file upload or a valid media URL.");
    }

    // Auto-detect video from URL if selected type or URL extension/embed matches
    if (
      url.includes("youtube.com") ||
      url.includes("youtu.be") ||
      url.includes("vimeo.com") ||
      url.endsWith(".mp4") ||
      url.endsWith(".webm") ||
      url.endsWith(".mov")
    ) {
      type = "VIDEO";
    }

    const data = {
      title,
      caption,
      type,
      url,
      displayOrder,
      isActive,
    };

    if (id) {
      const current = await prisma.galleryItem.findUnique({ where: { id } });
      await prisma.galleryItem.update({ where: { id }, data });
      if (uploadedUrl && current?.url && current.url !== url) {
        await deleteGalleryMedia(current.url);
      }
    } else {
      await prisma.galleryItem.create({ data });
    }

    revalidatePath("/gallery");
    revalidatePath("/admin/gallery");
  } catch (error) {
    if (uploadedUrl) {
      await deleteGalleryMedia(uploadedUrl);
    }
    throw error;
  }

  redirect("/admin/gallery?notice=saved");
}

export async function deleteGalleryItem(id: string) {
  await requireAdmin();
  const current = await prisma.galleryItem.findUnique({ where: { id } });
  if (!current) return;

  await prisma.galleryItem.delete({ where: { id } });
  if (current.url) {
    await deleteGalleryMedia(current.url);
  }

  revalidatePath("/gallery");
  revalidatePath("/admin/gallery");
  redirect("/admin/gallery?notice=deleted");
}
