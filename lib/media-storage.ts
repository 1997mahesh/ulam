import "server-only";
import { randomUUID } from "crypto";
import { getSupabaseServerClient } from "@/lib/supabase/server";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const COUNSELLORS_BUCKET = "counsellors";
const PAYMENT_PROOFS_BUCKET = "payment-proofs";
const LEGACY_COUNSELLOR_PREFIX = "/img/counsellors/";
const LEGACY_PAYMENT_PROOF_PREFIX = "/img/payment-proofs/";
const formats = [
  { mime: "image/jpeg", ext: "jpg", matches: (bytes: Buffer) => bytes.length >= 3 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff },
  { mime: "image/png", ext: "png", matches: (bytes: Buffer) => bytes.length >= 8 && bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])) },
  { mime: "image/webp", ext: "webp", matches: (bytes: Buffer) => bytes.length >= 12 && bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP" },
];

const safeStem = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 70) || "upload";

async function validateImage(file: File, label: string) {
  if (file.size <= 0) throw new Error(`Please select ${label} to upload.`);
  if (file.size > MAX_IMAGE_SIZE) throw new Error(`${label[0].toUpperCase()}${label.slice(1)} must be 5 MB or smaller.`);
  const bytes = Buffer.from(await file.arrayBuffer());
  const format = formats.find((item) => item.matches(bytes));
  const declaredMime = file.type === "image/jpg" ? "image/jpeg" : file.type;
  if (!format || declaredMime !== format.mime) throw new Error("Only genuine JPG, JPEG, PNG, or WEBP images are allowed.");
  return { bytes, format };
}

async function upload(bucket: string, objectPath: string, bytes: Buffer, contentType: string) {
  const { error } = await getSupabaseServerClient().storage.from(bucket).upload(objectPath, bytes, { contentType, cacheControl: "3600", upsert: false });
  if (error) throw new Error("Unable to store the image. Please try again.");
}

export async function uploadCounsellorImage(file: File, counsellorSlug: string) {
  const { bytes, format } = await validateImage(file, "photo");
  const objectPath = `${safeStem(counsellorSlug)}/${Date.now()}-${randomUUID().slice(0, 8)}-photo.${format.ext}`;
  await upload(COUNSELLORS_BUCKET, objectPath, bytes, format.mime);
  return getSupabaseServerClient().storage.from(COUNSELLORS_BUCKET).getPublicUrl(objectPath).data.publicUrl;
}

function publicObjectPath(value: string) {
  if (value.startsWith("/img/")) return null;
  try {
    const url = new URL(value);
    const marker = `/storage/v1/object/public/${COUNSELLORS_BUCKET}/`;
    const index = url.pathname.indexOf(marker);
    return index < 0 ? null : decodeURIComponent(url.pathname.slice(index + marker.length));
  } catch {
    return value.includes("://") ? null : value.replace(/^\/+/, "");
  }
}

export async function deleteCounsellorImage(value: string | null | undefined) {
  if (!value || value.startsWith(LEGACY_COUNSELLOR_PREFIX)) return;
  const objectPath = publicObjectPath(value);
  if (!objectPath) return;
  const { error } = await getSupabaseServerClient().storage.from(COUNSELLORS_BUCKET).remove([objectPath]);
  if (error) throw new Error("Unable to remove the stored counsellor image.");
}

export async function uploadPaymentProof(file: File, bookingNumber: string) {
  const { bytes, format } = await validateImage(file, "payment proof");
  const objectPath = `${safeStem(bookingNumber)}/${Date.now()}-${randomUUID().slice(0, 8)}-proof.${format.ext}`;
  await upload(PAYMENT_PROOFS_BUCKET, objectPath, bytes, format.mime);
  return objectPath;
}

export async function deletePaymentProof(value: string | null | undefined) {
  if (!value || value.startsWith(LEGACY_PAYMENT_PROOF_PREFIX) || value.includes("://")) return;
  const { error } = await getSupabaseServerClient().storage.from(PAYMENT_PROOFS_BUCKET).remove([value.replace(/^\/+/, "")]);
  if (error) throw new Error("Unable to remove the stored payment proof.");
}

export async function getPaymentProofSignedUrl(value: string | null | undefined, expiresIn = 300) {
  if (!value) return null;
  if (value.startsWith(LEGACY_PAYMENT_PROOF_PREFIX)) return value;
  if (value.includes("://")) return null;
  const { data, error } = await getSupabaseServerClient().storage.from(PAYMENT_PROOFS_BUCKET).createSignedUrl(value.replace(/^\/+/, ""), expiresIn);
  if (error) throw new Error("Unable to load the payment proof.");
  return data.signedUrl;
}

export async function uploadPaymentQr(file: File) {
  const { bytes, format } = await validateImage(file, "payment QR image");
  const objectPath = `payment-settings/${Date.now()}-${randomUUID().slice(0, 8)}-upi-qr.${format.ext}`;
  await upload(COUNSELLORS_BUCKET, objectPath, bytes, format.mime);
  return getSupabaseServerClient().storage.from(COUNSELLORS_BUCKET).getPublicUrl(objectPath).data.publicUrl;
}

export async function uploadMediaImage(file: File) {
  const { bytes, format } = await validateImage(file, "image");
  const objectPath = `media/${Date.now()}-${randomUUID().slice(0, 8)}.${format.ext}`;
  await upload(COUNSELLORS_BUCKET, objectPath, bytes, format.mime);
  return {
    filename: objectPath.split("/").at(-1)!,
    mimeType: format.mime,
    size: bytes.length,
    url: getSupabaseServerClient().storage.from(COUNSELLORS_BUCKET).getPublicUrl(objectPath).data.publicUrl,
  };
}

const MAX_VIDEO_SIZE = 50 * 1024 * 1024;
const videoFormats: Record<string, string> = {
  "video/mp4": "mp4",
  "video/webm": "webm",
  "video/quicktime": "mov",
  "video/x-matroska": "mkv",
};

export async function uploadGalleryMedia(file: File) {
  if (file.size <= 0) throw new Error("Please select a file to upload.");
  const isVideo = file.type.startsWith("video/");
  if (isVideo) {
    if (file.size > MAX_VIDEO_SIZE) throw new Error("Video must be 50 MB or smaller.");
    const ext = videoFormats[file.type] || "mp4";
    const bytes = Buffer.from(await file.arrayBuffer());
    const objectPath = `gallery/${Date.now()}-${randomUUID().slice(0, 8)}.${ext}`;
    await upload(COUNSELLORS_BUCKET, objectPath, bytes, file.type || "video/mp4");
    return {
      type: "VIDEO" as const,
      url: getSupabaseServerClient().storage.from(COUNSELLORS_BUCKET).getPublicUrl(objectPath).data.publicUrl,
    };
  } else {
    const { bytes, format } = await validateImage(file, "gallery item");
    const objectPath = `gallery/${Date.now()}-${randomUUID().slice(0, 8)}.${format.ext}`;
    await upload(COUNSELLORS_BUCKET, objectPath, bytes, format.mime);
    return {
      type: "IMAGE" as const,
      url: getSupabaseServerClient().storage.from(COUNSELLORS_BUCKET).getPublicUrl(objectPath).data.publicUrl,
    };
  }
}

export async function deleteGalleryMedia(value: string | null | undefined) {
  if (!value) return;
  const objectPath = publicObjectPath(value);
  if (!objectPath) return;
  const { error } = await getSupabaseServerClient().storage.from(COUNSELLORS_BUCKET).remove([objectPath]);
  if (error) throw new Error("Unable to remove stored media.");
}

export const deletePublicImage = deleteCounsellorImage;

