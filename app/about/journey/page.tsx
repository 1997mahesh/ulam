import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Building2,
  CalendarDays,
  CheckCircle2,
  FileCheck2,
  Heart,
  Headphones,
  HeartHandshake,
  Laptop,
  Lightbulb,
  Ribbon,
  ShieldCheck,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui";
import { CertificateShowcase } from "@/components/certificate-showcase";

export const metadata = {
  title: "Our Journey | Ulam Seyal Psychological & Psycho-Oncology Services",
  description:
    "Explore the milestones, growth, legal incorporation, and continuous commitment shaping the clinical practice and community support of Ulam Seyal.",
};

function OrnamentTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="ornament-title">
      <span />
      <h2>{children}</h2>
      <span />
    </div>
  );
}

const journeyPhases = [
  {
    phase: "01",
    badge: "Founding Inception & Incorporation",
    year: "2026",
    title: "The Founding Vision & Legal Inception",
    desc: "Ulam Seyal was established on the fundamental belief that care begins with being heard, understood, and valued, backed by complete statutory compliance.",
    icon: Lightbulb,
    points: [
      "Founded in 2026 to bridge crucial gaps in accessible and ethical psychological support.",
      "Legally incorporated as ULAM SEYAL (OPC) PRIVATE LIMITED under the Ministry of Corporate Affairs, Govt. of India (CIN: U86900TN2026OPC197513).",
      "Registered under Goods and Services Tax (GSTIN: 33AAECU2841E1ZO) ensuring transparent and accountable institutional operations.",
      "Formulated client-centred clinical protocols prioritising empathy, confidentiality, and trust.",
      "Designed a seamless virtual care framework removing geographic and transit barriers.",
    ],
  },
  {
    phase: "02",
    badge: "Oncology Support",
    year: "2026",
    title: "Pioneering Psycho-Oncology Care",
    desc: "Recognizing the profound emotional impact of cancer, we established specialised psycho-oncological care.",
    icon: Ribbon,
    points: [
      "Dedicated emotional accompaniment for cancer patients, survivors, caregivers, and families.",
      "Structured support for diagnosis shock, chemotherapy coping, body image, and anticipatory grief.",
      "Multidisciplinary collaboration aligning psychological care with treating oncology teams.",
    ],
  },
  {
    phase: "03",
    badge: "Digital Reach",
    year: "2026",
    title: "Multilingual Virtual Platform",
    desc: "Connecting with diverse communities across regions through secure, confidential online consultations.",
    icon: Laptop,
    points: [
      "Providing consultations in English, Tamil, Hindi, Telugu, Kannada, Malayalam, and Urdu.",
      "End-to-end private video and audio consultation infrastructure accessible anywhere.",
      "Flexible, prompt appointment scheduling designed for individuals, students, and busy families.",
    ],
  },
  {
    phase: "04",
    badge: "Integrative Wellness",
    year: "2026",
    title: "Holistic Health & Wellbeing",
    desc: "Advancing an integrative model combining psychotherapy, physiotherapy, and yoga support.",
    icon: Sprout,
    points: [
      "Integrating psychotherapy, yoga therapeutic interventions, and physiotherapy rehabilitation.",
      "Comprehensive care for relationship transitions, child & adolescent development, and burnout.",
      "Ongoing dedication to raising mental health awareness and fostering resilient communities.",
    ],
  },
];

const journeyCommitments = [
  {
    icon: HeartHandshake,
    title: "Client-Centred Compassion",
    desc: "Every therapeutic plan is built collaboratively around the client's lived experiences and goals.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical Rigour & Ethics",
    desc: "Anchored in evidence-informed practices (CBT, REBT, SFBT, Mindfulness) with strict confidentiality.",
  },
  {
    icon: Sparkles,
    title: "Restoring Hope & Resilience",
    desc: "Committed to fostering sustainable coping abilities, emotional healing, and enhanced quality of life.",
  },
];

export default function JourneyPage() {
  return (
    <div className="about-page bg-[#fffdf9]">
      {/* Top Breadcrumb Header Area */}
      <section className="border-b border-[#dce6e0] bg-[#fbf8f2] py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Breadcrumb current="Our Journey" parent={{ label: "About Ulam Seyal", href: "/about" }} />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
            <div>
              <p className="eyebrow mb-2">ABOUT ULAM SEYAL</p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b3d30] tracking-tight">
                Our Journey
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#eaf4ef] px-3.5 py-1.5 rounded-full border border-[#d2e4da]">
                Milestones & Clinical Evolution
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Journey Founding Banner */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="bg-white border border-[#dce6e0] rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#eaf4ef] px-3.5 py-1.5 rounded-full border border-[#d2e4da] inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#0f4a3a] animate-pulse" />
                The Story Behind Our Growth
              </span>
              <span className="text-xs font-mono font-semibold text-[#52635c]">
                Established 2026 · Incorporated Entity
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-[27px] text-[#0b3d30] leading-relaxed font-normal mb-6">
              A continuous journey of compassionate, accessible, and evidence-informed psychological care.
            </h2>

            <p className="text-sm sm:text-base text-[#4b4a45] leading-relaxed mb-8">
              Founded in 2026, Ulam Seyal was built on the core conviction that every person facing emotional, health, or relationship challenges deserves a dedicated space to be heard, understood, and supported. Legally incorporated as <strong>ULAM SEYAL (OPC) PRIVATE LIMITED</strong> (CIN: <code className="text-xs font-bold text-[#0f4a3a] bg-[#eaf4ef] px-1.5 py-0.5 rounded">U86900TN2026OPC197513</code>) under the Ministry of Corporate Affairs and registered with GST, our journey is guided by institutional governance, clinical integrity, and heartfelt empathy.
            </p>

            <div className="border-t border-[#dce6e0] pt-6 flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#006d67] italic">
                Ulam Seyal — Healing Minds. Restoring Hope. Inspiring Change.
              </span>
              <div className="flex items-center gap-3">
                <Link
                  href="/book-consultation"
                  className="nav-cta"
                  style={{
                    backgroundColor: "var(--color-yellow, #E9B12B)",
                    color: "var(--color-charcoal, #2E2E2A)",
                  }}
                >
                  <CalendarDays size={16} />
                  <span>Book Consultation</span>
                </Link>
                <Link
                  href="/about/founders"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f4a3a] bg-[#eaf4ef] hover:bg-[#dce6e0] px-4 py-2.5 rounded-lg transition-colors"
                >
                  <span>Our Founders</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Key Milestones (Point to Point Progression) */}
      <section className="py-12 md:py-16 bg-[#f5f8f5] border-y border-[#dce6e0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <OrnamentTitle>Milestones of Our Practice</OrnamentTitle>
            <p className="text-sm sm:text-base text-[#52635c] mt-3">
              How our vision evolved into a comprehensive psychological and psycho-oncology care ecosystem.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {journeyPhases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.phase}
                  className="bg-white border border-[#dce6e0] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="size-11 rounded-xl bg-[#0f4a3a] text-white flex items-center justify-center shadow-sm">
                          <Icon size={22} />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0f4a3a] bg-[#eaf4ef] px-2.5 py-0.5 rounded border border-[#d2e4da]">
                            {phase.badge}
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#52635c] bg-[#f5f8f6] px-2.5 py-1 rounded-full border border-[#dce6e0]">
                        Phase {phase.phase} · {phase.year}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0b3d30] mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-[#52635c] leading-relaxed mb-5">
                      {phase.desc}
                    </p>

                    <div className="space-y-2.5 border-t border-[#f0f4f2] pt-4">
                      {phase.points.map((point) => (
                        <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4b4a45]">
                          <CheckCircle2 size={16} className="text-[#0f4a3a] shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Statutory Recognition & Legal Registrations (Incorporation & GST) */}
      <section className="py-14 md:py-20 bg-[#fbf8f2] border-b border-[#dce6e0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <OrnamentTitle>Statutory Certifications & Recognition</OrnamentTitle>
            <p className="eyebrow mt-3 mb-2">OFFICIAL GOVERNMENT CREDENTIALS</p>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#0b3d30]">
              Legal Inception & Government Registrations
            </h3>
            <p className="text-sm sm:text-base text-[#52635c] mt-3 leading-relaxed">
              Ulam Seyal is a legally incorporated Private Limited entity registered under the Ministry of Corporate Affairs, Government of India, and fully compliant with Goods & Services Tax (GST) regulations — ensuring the highest degree of transparency, clinical governance, and trust.
            </p>
          </div>

          {/* Certificate Showcase Component */}
          <CertificateShowcase />
        </div>
      </section>

      {/* Section 3: Guiding Commitments (Point to Point Cards) */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <OrnamentTitle>Core Commitments of Our Journey</OrnamentTitle>
            <p className="text-sm sm:text-base text-[#52635c] mt-3">
              Values that guide our clinical interactions, patient care, and community outreach.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {journeyCommitments.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#dce6e0] rounded-2xl p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="size-12 rounded-xl bg-[#eaf4ef] text-[#0f4a3a] flex items-center justify-center mb-4">
                      <Icon size={24} />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#0b3d30] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4b4a45] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support & Action Strip (Matching Home Page Aesthetic) */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="support-strip">
            <div className="support-unit">
              <Headphones />
              <div>
                <h3 className="font-serif text-lg font-bold text-white mb-1">
                  Need Immediate Support?
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  If you are experiencing a mental health emergency, reach out to Sneha Helpline (
                  <a href="tel:04424640050" className="underline font-bold text-white">044 24640050</a>) or TN Govt Helpline (<a href="tel:104" className="underline font-bold text-white">104</a>).
                </p>
              </div>
            </div>

            <div className="support-unit resources">
              <HeartHandshake />
              <div>
                <h3 className="font-serif text-lg font-bold text-white mb-1">
                  Start Your Healing Journey
                </h3>
                <p className="text-xs text-white/80 leading-relaxed mb-3">
                  Schedule a confidential online consultation with our senior psychological team.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href="/book-consultation"
                    className="nav-cta"
                    style={{
                      backgroundColor: "var(--color-yellow, #E9B12B)",
                      color: "var(--color-charcoal, #2E2E2A)",
                    }}
                  >
                    <CalendarDays size={16} />
                    <span>Book Consultation</span>
                  </Link>
                  <Link
                    href="/about/founders"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 hover:text-white underline underline-offset-4"
                  >
                    <span>Our Founders</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


