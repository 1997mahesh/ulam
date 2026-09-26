import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Headphones,
  HeartHandshake,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui";
import { CertificateShowcase } from "@/components/certificate-showcase";

export const metadata = {
  title: "Our Journey | Ulam Seyal Psychological & Psycho-Oncology Services",
  description:
    "Our journey in psychological care began in 2012 with clinical experience in psychiatric counselling, expanding into cancer care, Nesam Family Counselling, and evolving into Ulam Seyal.",
};

const timelineMilestones = [
  {
    year: "2012",
    title: "Beginning of Our Clinical Journey",
    paragraphs: [
      "In 2012, our professional journey began with clinical experience in psychiatric counselling, supporting individuals experiencing neurotic and psychotic disorders.",
      "This early clinical experience provided a strong foundation in understanding diverse mental health concerns and the emotional, behavioural, relational, and social challenges that individuals and their families may experience.",
      "It was during these early years that our understanding of psychological care began to develop beyond the clinical presentation of mental health concerns, with greater attention to the individual, their family, relationships, life circumstances, and overall well-being.",
    ],
  },
  {
    year: "2015",
    title: "A New Journey into Cancer Care",
    paragraphs: [
      "In 2015, our professional journey expanded through clinical training and research at the Cancer Institute (WIA), Chennai.",
      "This experience deepened our understanding of cancer and its impact beyond physical health. We came to recognise the psychological, emotional, social, and family-related challenges that individuals and their loved ones may experience throughout the course of illness.",
    ],
  },
  {
    year: "2017",
    title: "Expanding into Psychological & Psycho-Oncological Care",
    paragraphs: [
      "Building on this foundation, we began providing psychological and psycho-oncological consultation services in collaboration with organisations including Madras Cancer Care Foundation and CanCare Foundation.",
      "Over time, our work expanded into Palliative Care, End-of-Life Care, Grief, and Bereavement Support. We worked with patients, families, and caregivers during some of the most challenging phases of illness, loss, and transition as palliative/end-of-life counsellors and grief therapists.",
    ],
  },
  {
    year: "2022",
    title: "Nesam Family Counselling and Psychotherapy Care",
    paragraphs: [
      "Building on this experience, Nesam Family Counselling and Psychotherapy Care was established in 2022 by Mr. Dhayanandhan Shanmugam and Mr. Gopalakrishnan D.S.",
      "Founded with the vision of making professional psychological counselling, psychotherapy, and psychological care more accessible to individuals and families across emotional, relational, cancer-related, grief, and palliative needs.",
    ],
  },
  {
    year: "2026",
    title: "Evolution to Ulam Seyal",
    paragraphs: [
      "Building on years of experience and our evolving vision, Nesam Family Counselling evolved into Ulam Seyal – Psychological and Psycho-Oncological Services.",
      "Ulam Seyal represents a broader vision of providing comprehensive psychological and psycho-oncological care through both online and offline services across Tamil Nadu and throughout India.",
    ],
  },
  {
    year: "Today",
    title: "A 15-Member Professional Team",
    paragraphs: [
      "Today, Ulam Seyal has grown into a 15-member professional team, bringing together diverse experience and expertise in psychological and psycho-oncological care.",
      "We support children, adolescents, adults, older adults, individuals, couples, families, cancer patients, cancer survivors, and caregivers, with services tailored to their psychological and emotional needs.",
    ],
  },
];

const philosophyPoints = [
  "To understand each person's experience with respect.",
  "To listen with empathy.",
  "To provide professional psychological support.",
  "To walk alongside individuals and families through challenging phases of life.",
];

export default function JourneyPage() {
  return (
    <div className="about-page bg-[#fffdf9] min-h-screen text-[#2E2E2A]">
      {/* Top Header & Breadcrumb Area (Matches website theme) */}
      <section className="border-b border-[#dce6e0] bg-[#fbf8f2] py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <Breadcrumb current="Our Journey" parent={{ label: "About Ulam Seyal", href: "/about" }} />
          <div className="mt-3">
            <p className="eyebrow mb-2">PSYCHOLOGICAL &amp; PSYCHO-ONCOLOGICAL SERVICES</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b3d30] tracking-tight">
              Ulam Seyal
            </h1>
            <p className="text-sm sm:text-base text-[#4a5c56] mt-2 font-medium">
              Our Journey of Compassionate Clinical Care &amp; Psycho-Oncology
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8">
          {/* Intro Block with Theme Forest Green Accent Bar */}
          <div className="bg-white border border-[#dce6e0] rounded-2xl p-6 sm:p-8 shadow-xs border-l-4 border-l-[#0f4a3a]">
            <p className="text-base sm:text-lg text-[#334b43] leading-relaxed italic">
              <strong className="not-italic font-bold text-[#0b3d30]">Our Journey:</strong> Our journey in psychological care began in 2012 with clinical experience in psychiatric counselling. From the beginning, our work has been guided by a commitment to understanding people, their experiences, and the psychological and emotional challenges they face.
            </p>
          </div>

          {/* Timeline Milestones Cards */}
          <div className="space-y-6">
            {timelineMilestones.map((item) => (
              <article
                key={item.year}
                className="bg-white rounded-2xl border border-[#dce6e0] p-6 sm:p-8 shadow-xs hover:shadow-sm transition-shadow"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono font-bold text-sm text-[#0f4a3a] bg-[#eaf4ef] border border-[#d2e4da] px-3.5 py-1 rounded-lg">
                    {item.year}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0b3d30]">
                    {item.title}
                  </h2>
                </div>
                <div className="space-y-3 text-sm sm:text-base text-[#4a5c56] leading-relaxed">
                  {item.paragraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Core Purpose & Philosophy Box (Theme Soft Tint Panel) */}
          <section className="bg-[#f5f9f6] border border-[#dce6e0] rounded-2xl p-6 sm:p-8 md:p-10">
            <div className="text-center mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-full border border-[#d2e4da] inline-block mb-2">
                FOUNDATIONAL GUIDELINE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0b3d30]">
                Our Core Purpose &amp; Philosophy
              </h2>
            </div>
            <ul className="space-y-3 max-w-2xl mx-auto text-sm sm:text-base text-[#334b43]">
              {philosophyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="size-2 rounded-full bg-[#0f4a3a] shrink-0 mt-2" />
                  <span className="leading-relaxed font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Two Side-by-Side Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-[#dce6e0] p-6 sm:p-8 shadow-xs">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0b3d30] mb-2">
                Accessibility &amp; Compassion
              </h3>
              <p className="text-sm text-[#4a5c56] leading-relaxed">
                We believe that quality psychological and psycho-oncological care should be accessible, compassionate, comprehensive, and meaningful.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-[#dce6e0] p-6 sm:p-8 shadow-xs">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0b3d30] mb-2">
                Comprehensive Care
              </h3>
              <p className="text-sm text-[#4a5c56] leading-relaxed">
                Providing holistic care tailored across different stages of life, illness, recovery, caregiving, loss, and emotional adjustment.
              </p>
            </div>
          </div>

          {/* Closing Quote Banner */}
          <div className="bg-white rounded-2xl border border-[#dce6e0] p-8 sm:p-10 text-center shadow-xs">
            <blockquote className="font-serif text-lg sm:text-xl md:text-2xl font-bold italic text-[#0b3d30] leading-relaxed">
              &ldquo;This is Ulam Seyal — A professional space for psychological care, support, and healing.&rdquo;
            </blockquote>
            <p className="text-xs font-mono text-[#667873] mt-3 uppercase tracking-wider">
              Ulam Seyal – Psychological &amp; Psycho-Oncological Services
            </p>
          </div>
        </div>
      </main>

      {/* Statutory Recognition & Legal Registrations (Official MCA & GST Credentials) */}
      <section className="py-14 bg-[#fbf8f2] border-t border-[#dce6e0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#eaf4ef] px-3.5 py-1.5 rounded-full border border-[#d2e4da]">
              OFFICIAL GOVERNMENT CREDENTIALS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0b3d30] mt-3">
              Legal Inception &amp; Government Registrations
            </h2>
            <p className="text-xs sm:text-sm text-[#52635c] mt-2 leading-relaxed">
              Legally incorporated as <strong>ULAM SEYAL (OPC) PRIVATE LIMITED</strong> (CIN: <code className="font-bold text-[#0f4a3a] bg-[#eaf4ef] px-1.5 py-0.5 rounded">U86900TN2026OPC197513</code>) under the Ministry of Corporate Affairs, Govt. of India, and registered under GST (GSTIN: <code className="font-bold text-[#0f4a3a] bg-[#eaf4ef] px-1.5 py-0.5 rounded">33AAECU2841E1ZO</code>).
            </p>
          </div>

          {/* Certificate Showcase Component */}
          <CertificateShowcase />
        </div>
      </section>

      {/* Final Action / Consultation Strip */}
      <section className="py-12 bg-white border-t border-[#dce6e0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
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
                  Schedule a confidential online consultation with our 15-member psychological team.
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
