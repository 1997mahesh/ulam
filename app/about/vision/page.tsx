import Link from "next/link";
import {
  ArrowRight,
  Brain,
  CalendarDays,
  CheckCircle2,
  Compass,
  Eye,
  HandHeart,
  Headphones,
  Heart,
  HeartHandshake,
  Laptop,
  Lock,
  Ribbon,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui";

export const metadata = {
  title: "Our Vision | Ulam Seyal Psychological & Psycho-Oncology Services",
  description:
    "To create a world where accessible, compassionate, and evidence-informed psychological care empowers individuals and families to achieve emotional well-being, resilience, and a meaningful quality of life.",
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

const visionPillars = [
  {
    number: "01",
    badge: "Accessibility",
    title: "Care Beyond Boundaries",
    desc: "Psychological and psycho-oncology support accessible across geographical, transit, and scheduling limitations.",
    icon: Laptop,
    points: [
      "Virtual and online consultation options accessible from any private and comfortable space.",
      "Flexible appointment hours designed for individuals, students, and working families.",
      "Multilingual therapeutic support connecting diverse communities across India and beyond.",
    ],
  },
  {
    number: "02",
    badge: "Deep Compassion",
    title: "Empathy at Every Step",
    desc: "Every individual, cancer patient, caregiver, and family is met with dignity, active listening, and understanding.",
    icon: Heart,
    points: [
      "A compassionate, non-judgmental environment where clients feel safe to share their vulnerability.",
      "Respecting each person's unique background, emotional pace, and lived experiences.",
      "Dedicated emotional accompaniment through illness, grief, life transitions, and caregiving.",
    ],
  },
  {
    number: "03",
    badge: "Clinical Rigour",
    title: "Evidence-Informed Care",
    desc: "Clinical practice grounded in scientific research, clinical expertise, and ethical psychological standards.",
    icon: Scale,
    points: [
      "Integration of proven therapies (CBT, REBT, SFBT, Mindfulness & Trauma-informed care).",
      "Strict professional protocols, clinical supervision, and continuous quality standards.",
      "Seamless multidisciplinary coordination with treating medical and oncology professionals.",
    ],
  },
  {
    number: "04",
    badge: "Empowerment",
    title: "Inner Resilience & Coping",
    desc: "Equipping individuals and families to navigate distress, uncertainty, and health challenges with confidence.",
    icon: Brain,
    points: [
      "Practical coping mechanisms tailored to daily emotional, behavioural, and relational needs.",
      "Strengthening adaptive coping habits that reduce emotional exhaustion and burnout.",
      "Restoring self-efficacy, inner calm, and healthy problem-solving abilities.",
    ],
  },
  {
    number: "05",
    badge: "Wellbeing",
    title: "Meaningful Quality of Life",
    desc: "Nurturing genuine emotional balance, purposeful living, and sustained long-term wellbeing.",
    icon: Sparkles,
    points: [
      "Moving beyond symptom relief towards lasting emotional health and personal growth.",
      "Strengthening relational bonds, family harmony, and meaningful connections.",
      "Restoring hope, purpose, and emotional vitality across every stage of life.",
    ],
  },
];

const coreValues = [
  {
    icon: Eye,
    title: "Empathetic Listening",
    desc: "We listen attentively and without judgment before offering therapeutic perspectives or guidance.",
  },
  {
    icon: Lock,
    title: "Strict Confidentiality",
    desc: "Privacy, client dignity, and trust form the sacred foundation of every clinical engagement.",
  },
  {
    icon: Sparkles,
    title: "Individuality First",
    desc: "Care is personalized to each unique person, lived context, and family dynamic without rigid molds.",
  },
  {
    icon: Scale,
    title: "Ethical Integrity",
    desc: "Grounded in scientific evidence, continuous clinical supervision, and honest, transparent practice.",
  },
  {
    icon: HeartHandshake,
    title: "Collaborative Healing",
    desc: "Therapy is a compassionate partnership where we work together towards your meaningful goals.",
  },
  {
    icon: Compass,
    title: "Continuity & Growth",
    desc: "Fostering long-term emotional resilience and healthier patterns that endure beyond the session.",
  },
];

export default function VisionPage() {
  return (
    <div className="about-page bg-[#fffdf9]">
      {/* Top Breadcrumb Header Area */}
      <section className="border-b border-[#dce6e0] bg-[#fbf8f2] py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Breadcrumb current="Our Vision" parent={{ label: "About Ulam Seyal", href: "/about" }} />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
            <div>
              <p className="eyebrow mb-2">ABOUT ULAM SEYAL</p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b3d30] tracking-tight">
                Our Vision
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#eaf4ef] px-3.5 py-1.5 rounded-full border border-[#d2e4da]">
                Long-Term Outlook & Aspirations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Vision Statement Banner */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="bg-white border border-[#dce6e0] rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#eaf4ef] px-3.5 py-1.5 rounded-full border border-[#d2e4da] inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#0f4a3a] animate-pulse" />
                Our Core Vision Statement
              </span>
              <span className="text-xs font-mono font-semibold text-[#52635c]">
                Aspiration for Mental Health
              </span>
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl md:text-[27px] text-[#0b3d30] leading-relaxed font-normal mb-8">
              &ldquo;To create a world where accessible, compassionate, and evidence-informed psychological care empowers individuals and families to achieve emotional well-being, resilience, and a meaningful quality of life.&rdquo;
            </blockquote>

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
                  href="/about/mission"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f4a3a] bg-[#eaf4ef] hover:bg-[#dce6e0] px-4 py-2.5 rounded-lg transition-colors"
                >
                  <span>Our Mission</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Five Pillars of Our Vision (Point to Point) */}
      <section className="py-12 md:py-16 bg-[#f5f8f5] border-y border-[#dce6e0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <OrnamentTitle>Five Pillars of Our Vision</OrnamentTitle>
            <p className="text-sm sm:text-base text-[#52635c] mt-3">
              Fundamental aspirations shaping the future of accessible and compassionate mental healthcare.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visionPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="bg-white border border-[#dce6e0] rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="size-11 rounded-xl bg-[#0f4a3a] text-white flex items-center justify-center shadow-sm">
                          <Icon size={22} />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0f4a3a] bg-[#eaf4ef] px-2.5 py-0.5 rounded border border-[#d2e4da]">
                            {pillar.badge}
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#52635c] bg-[#f5f8f6] px-2.5 py-1 rounded-full border border-[#dce6e0]">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#0b3d30] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#52635c] leading-relaxed mb-4">
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 border-t border-[#f0f4f2] pt-4">
                      {pillar.points.map((point) => (
                        <div key={point} className="flex items-start gap-2 text-xs sm:text-sm text-[#4b4a45]">
                          <CheckCircle2 size={15} className="text-[#0f4a3a] shrink-0 mt-0.5" />
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

      {/* Section 2: Core Values That Shape Our Vision (Point to Point Grid) */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <OrnamentTitle>Core Values Guiding Our Vision</OrnamentTitle>
            <p className="text-sm sm:text-base text-[#52635c] mt-3">
              Ethical and human principles embedded in every therapeutic conversation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white border border-[#dce6e0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="size-11 rounded-xl bg-[#eaf4ef] text-[#0f4a3a] flex items-center justify-center mb-4">
                      <Icon size={22} />
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0b3d30] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4b4a45] leading-relaxed">
                      {val.desc}
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
                  If you are experiencing an emotional emergency or crisis, contact Sneha Helpline (
                  <a href="tel:04424640050" className="underline font-bold text-white">044 24640050</a>) or TN Govt Helpline (<a href="tel:104" className="underline font-bold text-white">104</a>).
                </p>
              </div>
            </div>

            <div className="support-unit resources">
              <HeartHandshake />
              <div>
                <h3 className="font-serif text-lg font-bold text-white mb-1">
                  Connect with Our Care Team
                </h3>
                <p className="text-xs text-white/80 leading-relaxed mb-3">
                  Book a confidential virtual session with our senior mental health consultants.
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
                    href="/about/journey"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 hover:text-white underline underline-offset-4"
                  >
                    <span>Our Journey</span>
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

