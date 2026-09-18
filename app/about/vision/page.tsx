import Link from "next/link";
import { ArrowRight, Compass, Eye, HeartHandshake, LockKeyhole, Scale, Sparkles } from "lucide-react";
import { AboutEditorialHero } from "@/components/about-editorial-hero";
import { Button, SectionTitle } from "@/components/ui";

export const metadata = {
  title: "Our Vision | Ulam Seyal",
  description:
    "To create a world where accessible, compassionate, and evidence-informed psychological care empowers individuals and families to achieve emotional well-being, resilience, and a meaningful quality of life.",
};

const visionFlow = [
  {
    number: "01",
    label: "ACCESS",
    title: "Care Beyond Boundaries",
    desc: "Psychological and psycho-oncology care should be readily accessible to people regardless of geographical barriers, transit limitations, or physical distance.",
  },
  {
    number: "02",
    label: "COMPASSION",
    title: "Empathy at Every Step",
    desc: "Every individual, cancer patient, caregiver, and family member deserves to be met with deep empathy, dignity, active listening, and heartfelt understanding.",
  },
  {
    number: "03",
    label: "EVIDENCE-INFORMED CARE",
    title: "Clinical Grounding",
    desc: "Support should be firmly grounded in scientific research, clinical expertise, ongoing professional standards, and responsible psychological practice.",
  },
  {
    number: "04",
    label: "RESILIENCE",
    title: "Inner Strength & Coping",
    desc: "Helping individuals and families develop adaptive, sustainable ways of understanding distress and navigating life's most challenging transitions.",
  },
  {
    number: "05",
    label: "MEANINGFUL WELLBEING",
    title: "Quality of Life",
    desc: "The goal is not simply to manage acute symptoms, but to nurture genuine emotional wellbeing, purposeful living, and an enriched quality of life.",
  },
];

const coreValues = [
  [Eye, "Visionary Empathy", "We listen actively and openly before offering perspectives or guidance."],
  [LockKeyhole, "Strict Confidentiality", "Privacy and trust form the sacred foundation of every therapeutic engagement."],
  [Sparkles, "Individuality First", "Care is personalized to each unique person, context, and family dynamic."],
  [Scale, "Ethical Integrity", "Grounded in scientific evidence, ongoing clinical supervision, and honest practice."],
  [HeartHandshake, "Collaborative Healing", "Therapy is a compassionate partnership where we work together towards your goals."],
  [Compass, "Continuity & Growth", "Fostering long-term emotional resilience that endures well beyond the session."],
] as const;

export default function VisionPage() {
  return (
    <div className="about-page">
      {/* Editorial Hero */}
      <AboutEditorialHero
        prefix="OUR"
        title="VISION"
        eyebrow="OUR VISION"
        headline="Creating a world where psychological care is accessible, compassionate, and meaningful."
        statement="To create a world where accessible, compassionate, and evidence-informed psychological care empowers individuals and families to achieve emotional well-being, resilience, and a meaningful quality of life."
        tagline="Ulam Seyal — Healing Minds. Restoring Hope. Inspiring Change."
        badgeType="orbit"
      />

      {/* Featured Vision Statement */}
      <section className="about-section py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-white border border-[#e2ece6] rounded-2xl p-8 sm:p-12 md:p-16 shadow-sm">
            <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#eaf4ef] px-4 py-1.5 rounded-full border border-[#d2e4da] inline-block mb-6">
              The Vision Statement
            </span>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0f4a3a] leading-relaxed mb-8">
              &ldquo;To create a world where accessible, compassionate, and evidence-informed psychological care empowers individuals and families to achieve emotional well-being, resilience, and a meaningful quality of life.&rdquo;
            </p>
            <div className="border-t border-[#e2ece6] pt-6 flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#006d67] italic">
                Ulam Seyal — Healing Minds. Restoring Hope. Inspiring Change.
              </span>
              <span className="text-xs font-mono font-bold text-[#0f4a3a]/60 uppercase tracking-widest">
                Long-Term Outlook
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Editorial Flow (01 to 05) */}
      <section className="about-section bg-[#f5f8f6] py-16 md:py-24 border-y border-[#e2ece6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow mb-3">Our Vision Journey</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1b2722] leading-snug">
              Five fundamental aspirations shaping the future of mental healthcare.
            </h2>
          </div>

          <div className="space-y-6 max-w-5xl">
            {visionFlow.map((v) => (
              <div
                key={v.number}
                className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-[#e2ece6] shadow-sm hover:shadow-md transition-all grid md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-3 flex items-center gap-4">
                  <span className="font-serif text-3xl md:text-4xl font-bold text-[#0f4a3a] opacity-70">
                    {v.number}
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0f4a3a] bg-[#eaf4ef] px-2.5 py-1 rounded">
                      {v.label}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-9">
                  <h3 className="text-xl font-bold text-[#1b2722] mb-2">{v.title}</h3>
                  <p className="text-sm md:text-base text-[#4a5c56] leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-section about-values py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Core Values" title="Values that shape every client relationship." />
          <div className="value-grid mt-12">
            {coreValues.map(([Icon, title, text]) => (
              <article key={title} className="bg-[#fbfaf7] border border-[#e2ece6] p-8 rounded-2xl">
                <span className="size-12 rounded-xl bg-[#eaf4ef] text-[#0f4a3a] flex items-center justify-center mb-5">
                  <Icon size={22} />
                </span>
                <h3 className="text-lg font-bold text-[#1b2722] mb-2">{title}</h3>
                <p className="text-sm text-[#4a5c56] leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action / Explore Links */}
      <section className="about-final">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <p className="eyebrow">Explore Further</p>
            <h2>Discover our story and founding commitments.</h2>
            <p>Read about our origin, clinical approach, and dedicated leadership team.</p>
          </div>
          <div className="about-final-actions">
            <Button href="/book-consultation">Book a Consultation</Button>
            <Link className="about-secondary" href="/about/mission">
              Our Mission <ArrowRight size={16} />
            </Link>
            <Link className="about-secondary" href="/about/story">
              Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
