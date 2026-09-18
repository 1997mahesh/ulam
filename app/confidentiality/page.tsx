import Link from "next/link";
import { Breadcrumb, Button } from "@/components/ui";
import { CheckCircle2, Lock, ShieldCheck, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Privacy & Confidentiality Policy | Ulam Seyal",
  description:
    "Confidentiality principles, legal limits, and data protection safeguards for psychological and psycho-oncology care at Ulam Seyal.",
};

export default function ConfidentialityPage() {
  return (
    <div className="bg-[#fbf8f2] min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#e2ece6] bg-[#f8f6f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Breadcrumb current="Confidentiality" parent={{ label: "Care Standards", href: "/about" }} />
            <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#e7f1ec] px-3.5 py-1 rounded-full border border-[#d2e4da]">
              CARE STANDARDS
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0f4a3a] font-bold leading-tight mb-4">
              Privacy & Confidentiality Policy
            </h1>
            <p className="text-base sm:text-lg text-[#4a5c56] leading-relaxed">
              Information shared during psychological and psycho-oncology consultations will be treated as strictly confidential and handled with professional care.
            </p>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
          {/* Section 1: Ethical Confidentiality */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                01
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Our Ethical Commitment to Privacy
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Confidentiality is fundamental to our therapeutic relationship. What you share with your therapist remains strictly private. For adult clients, session content is not shared with family members, employers, or third parties without your explicit, written consent.
            </p>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              If family or caregiver involvement is clinically indicated and beneficial, it is always discussed, planned, and agreed upon with you beforehand.
            </p>
          </article>

          {/* Section 2: Recognized Legal & Safety Exceptions */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                02
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Recognized Legal and Safety Limits
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Information will not ordinarily be shared without consent. In accordance with professional ethics and Indian law (including the Mental Healthcare Act, 2017), confidentiality is limited in the following extraordinary circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#384c46]">
              <li>Where there is serious, imminent risk of harm to the client&apos;s life or the safety of another person.</li>
              <li>Where disclosure is mandated by law, statutory child protection (POCSO), or a formal court order.</li>
              <li>In medical emergency situations where immediate intervention is required to safeguard life.</li>
            </ul>
          </article>

          {/* Section 3: Digital Records & Online Security */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                03
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Digital Record Safeguards & Client Environment
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Digital and electronic records are maintained using reasonable organizational safeguards consistent with the Digital Personal Data Protection Act, 2023.
            </p>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Clients are reminded that privacy during virtual consultations can also be affected by their own physical surroundings, device security, and internet network. We encourage clients to join sessions from a quiet, private space using headphones where possible.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
