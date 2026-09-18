import Link from "next/link";
import { Breadcrumb, Button } from "@/components/ui";
import { AlertTriangle, CheckCircle2, FileText, Heart, Lock, ShieldCheck, Video } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Ulam Seyal",
  description:
    "Terms of Service, Informed Consent for Online Psychological Services, Consultation Boundaries, and Client Framework for Ulam Seyal.",
};

export default function TermsPage() {
  return (
    <div className="bg-[#fbf8f2] min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#e2ece6] bg-[#f8f6f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Breadcrumb current="Terms & Conditions" parent={{ label: "Legal", href: "/about" }} />
            <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#e7f1ec] px-3.5 py-1 rounded-full border border-[#d2e4da]">
              TERMS OF SERVICE
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0f4a3a] font-bold leading-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-base sm:text-lg text-[#4a5c56] leading-relaxed">
              By booking or using services provided by Ulam Seyal – Comprehensive Psychological Wellness & Psycho-Oncology Services, the client acknowledges that they have read, understood, and agreed to the applicable terms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Terms Body */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
          {/* 1. Scope of Services */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                01
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Scope of Psychological & Psycho-Oncology Services
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Services may include individual psychological counselling, psycho-oncology support, emotional support, caregiver support, bereavement counselling, stress management, behavioral interventions, and other supportive services within the practitioner&apos;s professional competence and lawful scope.
            </p>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Appointments are offered at an agreed date and time. Clients are expected to provide accurate information relevant to the service and to participate voluntarily, respectfully, and safely.
            </p>
          </article>

          {/* 2. Informed Consent for Online Psychological Services */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                02
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Informed Consent for Online Psychological Services
              </h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#384c46]">
              <li><strong>Voluntary Participation:</strong> Clients voluntarily seek psychological counselling, support, or psycho-oncology services from Ulam Seyal.</li>
              <li><strong>Nature & Limitations:</strong> Clients acknowledge that online psychological services have technical and practical limitations compared with in-person sessions.</li>
              <li><strong>Confidentiality Boundaries:</strong> Confidentiality is maintained within professional and legal boundaries and is limited where disclosure is required by law or in serious, imminent safety emergencies.</li>
              <li><strong>Non-Emergency Service:</strong> Online psychological counselling is not an emergency service. Clients may be advised to seek in-person medical, psychiatric, or hospital care when clinically indicated.</li>
              <li><strong>Opportunity to Clarify:</strong> Clients have the right to ask questions and may discontinue counselling subject to applicable appointment policies.</li>
            </ul>
          </article>

          {/* 3. Emergency & Crisis Policy */}
          <article className="bg-[#fff8f8] rounded-2xl border border-[#fed7d7] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#c53030] bg-white px-3 py-1 rounded-md border border-[#fed7d7]">
                03
              </span>
              <h2 className="text-xl font-bold text-[#9b2c2c]">
                Emergency & Crisis Policy
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#742a2a] leading-relaxed">
              <strong>Ulam Seyal is not a 24-hour emergency or crisis intervention service.</strong>
            </p>
            <p className="text-sm sm:text-base text-[#742a2a] leading-relaxed">
              If a client reports an immediate risk of suicide, serious self-harm, violence, severe psychiatric deterioration, or another medical emergency, the client or caregiver should immediately seek emergency medical assistance or attend the nearest suitable emergency department.
            </p>
          </article>

          {/* 4. Payment, Billing & Refund Links */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                04
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Payment, Billing & Cancellation Policy
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Consultation fees, session duration, and charges are clearly displayed prior to booking. Payments are processed securely through regulated payment gateways.
            </p>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Cancellations, rescheduling, 20-minute no-show rules, and refund criteria are strictly governed by our dedicated policy:
            </p>
            <div className="pt-2">
              <Link
                href="/refund-cancellation-policy"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0f4a3a] bg-[#eaf4ef] border border-[#d2e4da] px-4 py-2.5 rounded-xl hover:bg-[#d8eade] transition-colors"
              >
                <span>View Full Refund & Cancellation Policy</span>
                <FileText size={14} />
              </Link>
            </div>
          </article>

          {/* 5. Session Recording & Digital Communications */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                05
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Session Recording & Digital Communication Policy
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Sessions must not be audio- or video-recorded by the practitioner or client without explicit prior mutual consent and a clear agreement regarding storage, access, and deletion.
            </p>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              WhatsApp, email, and messaging platforms are reserved for administrative communication (e.g. appointment scheduling). Sensitive clinical information should not be transmitted over unencrypted ordinary messaging channels.
            </p>
          </article>

          {/* 6. Children & Adolescents Safeguarding Framework */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                06
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Children & Adolescents – Safeguarding & Consent Framework
              </h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#384c46]">
              <li><strong>Parent/Guardian Consent:</strong> Mandatory written consent is obtained from the legal guardian for minor clients.</li>
              <li><strong>Young Person&apos;s Assent:</strong> The service and limits of confidentiality are explained to minors in age-appropriate language.</li>
              <li><strong>Safeguarding & Escalation:</strong> Documented procedures are maintained for suspected abuse, neglect, severe self-harm, or child protection concerns.</li>
            </ul>
          </article>

          {/* 7. Professional Boundaries */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                07
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Professional Boundaries
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Ulam Seyal maintains clear professional communication hours and channels. Routine messaging is not a substitute for a scheduled counselling session or emergency service. Ulam Seyal reserves the right to discontinue services in instances of harassment, inappropriate conduct, or clinical incompatibility.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
