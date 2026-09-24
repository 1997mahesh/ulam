import Link from "next/link";
import { Breadcrumb } from "@/components/ui";
import { Lock, Mail, Phone, ShieldCheck, Scale, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Ulam Seyal",
  description:
    "Privacy Policy and Data Protection Compliance for Ulam Seyal Comprehensive Psychological Wellness & Psycho-Oncology Services under applicable Indian laws.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#fbf8f2] min-h-screen">
      {/* Legal Hero Header */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20 border-b border-[#e2ece6] bg-[#f8f6f0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Breadcrumb current="Privacy Policy" parent={{ label: "Legal", href: "/terms" }} />
            <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#e7f1ec] px-3.5 py-1 rounded-full border border-[#d2e4da]">
              LEGAL & PRIVACY
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0f4a3a] font-bold leading-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-[#4a5c56] leading-relaxed">
              At Ulam Seyal – Comprehensive Psychological Wellness & Psycho-Oncology Services (&ldquo;Ulam Seyal&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), we respect the privacy, dignity, and confidentiality of individuals who access our services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Privacy Body */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-12">
          {/* Section 1: Information Collection */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                01
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Information We May Collect
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              We may collect personal information such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#384c46]">
              <li>Name, age, date of birth, and demographic details.</li>
              <li>Contact details including email address, phone number, and physical location for online care coordination.</li>
              <li>Appointment information and consultation scheduling preferences.</li>
              <li>Payment-related transaction details (processed securely via regulated third-party payment gateways).</li>
              <li>Emergency contact information where appropriate.</li>
              <li>Information voluntarily shared during psychological consultation, counselling, or psycho-oncology support sessions.</li>
            </ul>
          </article>

          {/* Section 2: Purpose and Legitimate Use */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                02
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Purpose and Use of Personal Information
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              We collect and use personal information only for clearly identified, lawful, and legitimate purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#384c46]">
              <li>Providing, scheduling, and coordinating clinical and psychological services.</li>
              <li>Communicating about appointment confirmations, reminders, and service updates.</li>
              <li>Maintaining appropriate, confidential professional clinical records.</li>
              <li>Processing consultation fee payments and issuing receipts.</li>
              <li>Meeting legal, regulatory, or professional code of ethics obligations.</li>
              <li>Improving service delivery, clinical standards, and administrative operations.</li>
            </ul>
          </article>

          {/* Section 3: Confidentiality & Safeguards */}
          <article className="bg-white rounded-2xl border border-[#e2ece6] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-md">
                03
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Confidentiality, Security Safeguards & Third Parties
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Psychological, counselling, and health-related information will be handled with appropriate confidentiality and security safeguards. Information will not ordinarily be disclosed to third parties without appropriate client consent, except where disclosure is required or permitted by applicable law or is necessary in a recognised safety or legal emergency (e.g. imminent harm to self or others).
            </p>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              Where third-party services are used for appointment booking, online consultation video software, email, messaging, cloud storage, website hosting, or payment processing, relevant information may be processed by those providers according to their applicable terms and standard privacy practices.
            </p>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              We take reasonable technical and organisational measures to protect personal information against unauthorised access, disclosure, alteration, misuse, loss, or destruction.
            </p>
          </article>

          {/* Section 4: Data Protection & Privacy Compliance (India) */}
          <article className="bg-[#f5f8f6] rounded-2xl border border-[#d2e4da] p-8 md:p-10 shadow-sm space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-white px-3 py-1 rounded-md border border-[#d2e4da]">
                04
              </span>
              <h2 className="text-xl font-bold text-[#1b2722]">
                Data Protection & Privacy Compliance (India)
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              <strong>Mental Healthcare Act, 2017:</strong> Provides confidentiality protections for persons receiving mental health support, including information stored in electronic or digital format. The Act recognizes circumstances in which limited disclosure may be permitted or required.
            </p>
            <p className="text-sm sm:text-base text-[#334b43] leading-relaxed">
              <strong>Digital Personal Data Protection Act, 2023 & Rules 2025:</strong> Ulam Seyal adheres to the statutory guidelines concerning clear notices, informed consent, lawful processing, and data security mechanisms.
            </p>
          </article>

          {/* Contact & Grievance Panel */}
          <div className="bg-white border border-[#e2ece6] rounded-2xl p-8 md:p-10 shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[#1b2722]">
              Privacy Inquiries & Grievance Contact
            </h3>
            <p className="text-sm sm:text-base text-[#4a5c56] leading-relaxed">
              Clients may contact Ulam Seyal regarding privacy, personal information, consent management, data updates, or complaints at:
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:care@ulamseyal.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-sm hover:brightness-95"
                style={{
                  backgroundColor: "var(--color-yellow, #E9B12B)",
                  color: "var(--color-charcoal, #2E2E2A)",
                }}
              >
                <Mail size={15} />
                <span>care@ulamseyal.com</span>
              </a>
              <a
                href="tel:+919769769521"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#f5f8f6] text-[#0f4a3a] border border-[#d8e6df] text-xs font-bold hover:bg-[#eaf4ef] transition-all"
              >
                <Phone size={15} />
                <span>+91 976 976 9521</span>
              </a>
            </div>
            <p className="text-xs text-[#6e857e] pt-4">
              This Privacy Policy is updated periodically. Effective date: 2026.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
