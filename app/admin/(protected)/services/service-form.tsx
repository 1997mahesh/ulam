"use client";

import { useState } from "react";
import { RichTextEditor } from "@/components/admin/rich-text-editor";
import { saveService } from "../content-actions";

type Service = {
  id: string;
  name: string;
  slug: string;
  category?: string | null;
  shortDescription: string;
  description: string;
  durationMinutes: number;
  price: { toString(): string } | null;
  isActive: boolean;
  displayOrder: number;
};

const CATEGORIES = [
  "Comprehensive Psychological Services",
  "Comprehensive Psycho-Oncological Services",
  "Therapeutic Interventions",
  "Yoga, Physiotherapy & Nutrition Support",
];

export function ServiceForm({
  service,
  defaultDuration = 50,
}: {
  service?: Service;
  defaultDuration?: number;
}) {
  const [category, setCategory] = useState(service?.category || "");
  const [descValue, setDescValue] = useState(service?.description || "");

  const handleCategoryChange = (newCat: string) => {
    setCategory(newCat);
    // If selecting Therapeutic Interventions and current description is empty
    if (newCat === "Therapeutic Interventions" && !descValue.trim()) {
      const template = `<p><strong>The Idea:</strong> Often, it’s not the event itself that causes our distress, but the story we tell ourselves about it.</p><p><strong>What it feels like:</strong> Imagine your mind is a filter that sometimes gets clogged with negative assumptions. In our sessions, we act as detectives to test thoughts and find clarity.</p>`;
      setDescValue(template);
    }
  };

  return (
    <form action={saveService} className="admin-panel admin-edit space-y-4">
      <input type="hidden" name="id" value={service?.id} />

      <div className="admin-form-row">
        <label>
          Service Name
          <input
            name="name"
            required
            defaultValue={service?.name}
            placeholder="e.g. Cognitive Behaviour Therapy (CBT) & REBT"
          />
        </label>
        <label>
          Slug (optional)
          <input
            name="slug"
            defaultValue={service?.slug}
            placeholder="e.g. cognitive-behaviour-therapy-cbt-rebt"
          />
        </label>
      </div>

      <label>
        Service Category
        <select
          name="category"
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="">-- Unassigned (No Category) --</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label>
        Short description (shown on cards &amp; overview)
        <input
          name="shortDescription"
          required
          defaultValue={service?.shortDescription}
          placeholder="Brief 1-2 sentence overview of the service"
        />
      </label>

      {/* Word-like Rich Text Description Field */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="font-bold text-xs text-[#0b3d30]">
            Detailed Description (Rich Text Editor)
          </label>
          <span className="text-[11px] text-[#556961]">
            Format with Bold, Italic, Headings, and Lists as needed
          </span>
        </div>

        <RichTextEditor
          name="description"
          defaultValue={service?.description || ""}
          value={descValue}
          onChange={setDescValue}
          category={category}
          placeholder="Enter service details, including 'The Idea' and 'What it feels like'..."
        />
      </div>

      <div className="admin-form-row">
        <label>
          Duration (minutes)
          <input
            name="durationMinutes"
            type="number"
            min="15"
            required
            defaultValue={service?.durationMinutes || defaultDuration}
          />
        </label>
        <label>
          Price (₹)
          <input
            name="price"
            type="number"
            min="0"
            step="1"
            defaultValue={service?.price?.toString() || "1699"}
          />
        </label>
        <label>
          Display order
          <input
            name="displayOrder"
            type="number"
            defaultValue={service?.displayOrder || 0}
          />
        </label>
      </div>

      <label className="admin-check flex items-center gap-2">
        <input
          name="isActive"
          type="checkbox"
          defaultChecked={service?.isActive ?? true}
        />
        <span>Active &amp; Available for Booking</span>
      </label>

      <button className="admin-primary">Save service</button>
    </form>
  );
}
