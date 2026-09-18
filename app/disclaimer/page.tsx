import Link from "next/link";
import { Breadcrumb, Button } from "@/components/ui";
import { AlertTriangle, HelpCircle, Mail, Phone, ShieldAlert, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Website & Clinical Disclaimer | Ulam Seyal",
  description:
    "Online counselling disclaimer, medical oncology boundaries, and emergency care notices for Ulam Seyal Psychological Wellness & Psycho-Oncology Services.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-[#fbf8f2] min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#e2ece6] bg-[#f8f6f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Breadcrumb current="Disclaimer" parent={{ label: "Legal", href: "/terms" }} />
            <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#e7f1ec] px-3.5 py-1 rounded-full border border-[#d2e4da]">
              DISCLAIMER
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0f4a3a] font-bold leading-tight mb-4">
              Website & Clinical Disclaimer
            </h1>
            <p className="text-base sm:text-lg text-[#4a5c56] leading-relaxed">
              Please read this disclaimer carefully regarding the scope, medical boundaries, and emergency protocols of services provided by Ulam Seyal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-10">
          {/* Critical Emergency Safety Notice */}
          <div className="p-8 rounded-2xl bg-[#fff5f5] border border-[#fed7d7] text-[#9b2c2c] space-y-3">
            <div className="flex items-center gap-3">
              <ShieldAlert size={24} className="text-[#c53030]" />
              <h2 className="text-xl font-bold text-[#c53030]">
                Critical Emergency & Crisis Notice
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#742a2a]">
              <strong>Ulam Seyal is NOT a 24-hour crisis or emergency intervention service.</strong>
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#742a2a]">
              If you or someone else is experiencing suicidal thoughts, self-harm impulses, severe psychiatric deterioration, or a medical emergency, please immediately contact your local hospital emergency department or a verified crisis helpline (such as Sneha Helpline: <strong>044 24640050</strong> or Vandrevala Foundation: <strong>+91 9999 666 555</strong>). Do not wait for a scheduled virtual consultation.
            </p>
          </div>

          {/* 1. Online Counselling Disclaimer */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                01
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Online Counselling Scope & Limitations
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Online counselling is intended to provide professional psychological support through electronic communication. It may not be appropriate for every person or clinical situation.
            </p>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Certain acute conditions require in-person clinical assessment, psychiatric evaluation, specialized medical treatment, hospitalization, or immediate physical intervention. Online counselling is not a substitute for emergency medical or psychiatric care.
            </p>
          </article>

          {/* 2. Medical Oncology Boundaries */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                02
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Medical Oncology & Healthcare Provider Boundaries
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Psycho-oncology and psychological services complement medical cancer care; they <strong>do not replace</strong> medical oncologists, surgical oncologists, radiation oncologists, palliative medicine specialists, physicians, chemotherapy, radiotherapy, or surgical procedures.
            </p>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Ulam Seyal does not provide medical oncology opinions or diagnostic assessments. Psychological support works in collaborative integration with your treating medical team.
            </p>
          </article>

          {/* 3. Educational Website Content */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                03
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Website Information & Non-Therapeutic Relationship
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              All content on this website—including articles, self-reflection questionnaires, and service overviews—is provided for educational and informational purposes. Accessing or viewing this content does not create a therapist–client or physician–patient relationship until a formal session is booked and confirmed with a practitioner.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
