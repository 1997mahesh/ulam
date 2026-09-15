"use client";

import Image from "next/image";
import { useActionState, useEffect, useRef, useState } from "react";
import { saveReferralService, type ReferralFormState } from "../content-actions";

type ReferralItem = {
  id: string;
  name: string;
  slug: string;
  designation: string;
  qualifications: string | null;
  department: string | null;
  experience: string | null;
  bio: string;
  shortBio: string | null;
  photo: string | null;
  areasOfFocus: string[];
  therapeuticModalities: string[];
  hospitalAffiliation: string | null;
  languages: string[];
  consultationFee: { toString(): string } | null;
  contactPhone: string | null;
  contactEmail: string | null;
  isActive: boolean;
  displayOrder: number;
};

const initialState: ReferralFormState = null;

export function ReferralForm({ referral }: { referral?: ReferralItem }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, action, pending] = useActionState(saveReferralService, initialState);
  const [preview, setPreview] = useState<string | null>(referral?.photo || null);
  const [localPreview, setLocalPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [removePhoto, setRemovePhoto] = useState(false);

  useEffect(() => () => {
    if (localPreview) URL.revokeObjectURL(localPreview);
  }, [localPreview]);

  const choose = (file?: File) => {
    if (localPreview) URL.revokeObjectURL(localPreview);
    const next = file ? URL.createObjectURL(file) : null;
    setLocalPreview(next);
    setFileName(file?.name || null);
    setPreview(next || referral?.photo || null);
    setRemovePhoto(false);
  };

  const remove = () => {
    if (localPreview) URL.revokeObjectURL(localPreview);
    setLocalPreview(null);
    setFileName(null);
    setPreview(null);
    setRemovePhoto(true);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <form action={action} className="admin-panel admin-edit">
      <input type="hidden" name="id" value={referral?.id || ""} />

      <div className="admin-form-row">
        <label>
          Doctor / Specialist Name
          <input name="name" required defaultValue={referral?.name || ""} placeholder="e.g. Dr. Sureshkumar B" />
        </label>
        <label>
          URL Slug
          <input name="slug" defaultValue={referral?.slug || ""} placeholder="e.g. dr-sureshkumar-b (auto-generated if empty)" />
        </label>
      </div>

      <div className="admin-form-row">
        <label>
          Designation / Specialty
          <input name="designation" required defaultValue={referral?.designation || ""} placeholder="e.g. Consultant Medical Oncologist" />
        </label>
        <label>
          Department / Category
          <input name="department" defaultValue={referral?.department || ""} placeholder="e.g. Medical Oncology & Palliative Care" />
        </label>
      </div>

      <div className="admin-form-row">
        <label>
          Qualifications & Degrees
          <input name="qualifications" defaultValue={referral?.qualifications || ""} placeholder="e.g. MBBS, MD, DM, MRCP, CCEPC" />
        </label>
        <label>
          Experience / Background Badge
          <input name="experience" defaultValue={referral?.experience || ""} placeholder="e.g. Tata Memorial Hospital Alum | 12+ Years Experience" />
        </label>
      </div>

      <label>
        Short Summary Bio
        <input name="shortBio" defaultValue={referral?.shortBio || ""} placeholder="Brief 1-2 sentence overview for cards and meta descriptions" />
      </label>

      <label>
        Full Comprehensive Biography & Approach
        <textarea name="bio" rows={8} required defaultValue={referral?.bio || ""} placeholder="Detailed professional bio, clinical approach, background, and patient philosophy..." />
      </label>

      <section className="admin-photo-field">
        <div>
          <b>Specialist Portrait Photo</b>
          <small>JPG, JPEG, PNG or WEBP. Maximum 5 MB.</small>
        </div>
        {preview ? (
          <div className="admin-photo-preview">
            <Image
              src={preview}
              width={150}
              height={190}
              unoptimized={Boolean(localPreview)}
              alt="Referral doctor preview"
              className="rounded-lg object-cover"
            />
            <div>
              <span>{fileName || "Current photo"}</span>
              <button type="button" onClick={() => inputRef.current?.click()}>Replace Photo</button>
              <button type="button" className="remove-photo" onClick={remove}>Remove Photo</button>
            </div>
          </div>
        ) : (
          <button type="button" className="photo-picker" onClick={() => inputRef.current?.click()}>
            Choose Photo
          </button>
        )}
        <input
          ref={inputRef}
          className="sr-only"
          name="photo"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={(e) => choose(e.target.files?.[0])}
        />
        <input type="hidden" name="removePhoto" value={removePhoto ? "true" : "false"} />
      </section>

      <label>
        Areas of Clinical Focus / Malignancies (one per line or comma separated)
        <textarea
          name="areasOfFocus"
          rows={4}
          defaultValue={referral?.areasOfFocus?.join("\n") || ""}
          placeholder="Breast Cancer&#10;Lung Cancer&#10;Head & Neck Cancers&#10;Gastrointestinal Cancers&#10;Solid Tumours&#10;Palliative Care"
        />
      </label>

      <label>
        Clinical Care Services / Approaches / Modalities (one per line or comma separated)
        <textarea
          name="therapeuticModalities"
          rows={3}
          defaultValue={referral?.therapeuticModalities?.join("\n") || ""}
          placeholder="Diagnostic Evaluation & Staging&#10;Personalized Treatment Planning&#10;Systemic Chemotherapy & Targeted Therapy&#10;Holistic Palliative & Supportive Care"
        />
      </label>

      <div className="admin-form-row">
        <label>
          Hospital / Institution Affiliation
          <input name="hospitalAffiliation" defaultValue={referral?.hospitalAffiliation || ""} placeholder="e.g. Tata Memorial Hospital, Mumbai" />
        </label>
        <label>
          Languages Spoken (comma separated)
          <input name="languages" defaultValue={referral?.languages?.join(", ") || ""} placeholder="e.g. Tamil, English, Hindi" />
        </label>
      </div>

      <div className="admin-form-row">
        <label>
          Consultation / Referral Fee (optional)
          <input name="consultationFee" type="number" min="0" defaultValue={referral?.consultationFee?.toString() || ""} placeholder="Optional consultation fee" />
        </label>
        <label>
          Display Order (Priority ranking)
          <input name="displayOrder" type="number" defaultValue={referral?.displayOrder ?? 0} />
        </label>
      </div>

      <div className="admin-form-row">
        <label>
          Contact / Referral Phone (optional)
          <input name="contactPhone" defaultValue={referral?.contactPhone || ""} placeholder="Direct contact number if applicable" />
        </label>
        <label>
          Contact / Referral Email (optional)
          <input name="contactEmail" type="email" defaultValue={referral?.contactEmail || ""} placeholder="Direct contact email if applicable" />
        </label>
      </div>

      <div className="admin-checkboxes">
        <label>
          <input name="isActive" type="checkbox" defaultChecked={referral?.isActive ?? true} /> Active & Visible on Website
        </label>
      </div>

      {state?.error && <p className="admin-form-error" role="alert">{state.error}</p>}

      <button className="admin-primary" disabled={pending}>
        {pending ? "Saving…" : referral?.id ? "Update Referral Service" : "Save Referral Service"}
      </button>
    </form>
  );
}
