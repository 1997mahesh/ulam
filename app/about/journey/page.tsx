import Link from "next/link";
import { ArrowRight, Heart, Lightbulb, Shield, Users } from "lucide-react";
import { AboutEditorialHero } from "@/components/about-editorial-hero";
import { Button, SectionTitle } from "@/components/ui";

export const metadata = {
  title: "Our Journey | Ulam Seyal",
  description:
    "Explore the journey and milestones of Ulam Seyal in psychological care, psycho-oncology, and mental wellness support.",
};

const journeyMilestones = [
  {
    year: "2026",
    phase: "Phase 01",
    badge: "The Beginning",
    title: "The Founding Vision",
    desc: "Ulam Seyal was founded with the intention of making quality psychological and psycho-oncology support more accessible through online and virtual platforms, removing stigma and barriers to professional care.",
    icon: Lightbulb,
  },
  {
    year: "2026",
    phase: "Phase 02",
    badge: "Specialised Oncology Support",
    title: "Pioneering Psycho-Oncology Care",
    desc: "Recognizing that medical cancer treatment requires vital emotional accompaniment, we established comprehensive psycho-oncological care for patients, survivors, and caregivers throughout their illness journey.",
    icon: Heart,
  },
  {
    year: "2026",
    phase: "Phase 03",
    badge: "Virtual Platform",
    title: "Multilingual Online Accessibility",
    desc: "To connect with individuals and families across different cities and linguistic backgrounds, we introduced secure online video consultations with multilingual mental health specialists.",
    icon: Users,
  },
  {
    year: "2026",
    phase: "Phase 04",
    badge: "Holistic Health",
    title: "Integrative Emotional & Physical Wellbeing",
    desc: "Advancing our holistic model of care by combining psychotherapy, family counselling, child and adolescent guidance, yoga therapeutic interventions, and physiotherapy rehabilitation.",
    icon: Shield,
  },
];

export default function JourneyPage() {
  return (
    <div className="about-page">
      {/* Editorial Hero */}
      <AboutEditorialHero
        prefix="OUR"
        title="JOURNEY"
        eyebrow="OUR JOURNEY"
        headline="A continuous journey of compassionate, accessible care."
        statement="Ulam Seyal was founded with the intention of making quality psychological and psycho-oncology support more accessible through online and virtual platforms."
        tagline="Ulam Seyal — Healing Minds. Restoring Hope. Inspiring Change."
        badgeType="orbit"
      />

      {/* Featured Journey Beginning Card */}
      <section className="about-section py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-white border border-[#e2ece6] rounded-2xl p-8 sm:p-12 md:p-16 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#eaf4ef] px-4 py-1.5 rounded-full border border-[#d2e4da]">
                The Beginning
              </span>
              <span className="font-serif text-3xl md:text-4xl font-bold text-[#0f4a3a]">
                2026
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#0f4a3a] mb-6 leading-snug">
              Founded on the belief that care begins with being heard.
            </h2>
            <p className="text-base sm:text-lg text-[#334b43] leading-relaxed mb-6">
              Ulam Seyal was founded with the intention of making quality psychological and psycho-oncology support more accessible through online and virtual platforms.
            </p>
            <p className="text-base sm:text-lg text-[#334b43] leading-relaxed">
              We continue to expand our therapeutic horizons to ensure that anyone facing emotional distress, health crises, or relationship transitions can find empathetic, evidence-informed guidance from wherever they are.
            </p>
          </div>
        </div>
      </section>

      {/* Vertical Timeline / Milestones */}
      <section className="about-section bg-[#f5f8f6] py-16 md:py-24 border-y border-[#e2ece6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow mb-3">Milestones</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1b2722] leading-snug">
              Milestones along our path of clinical and human care.
            </h2>
          </div>

          <div className="relative border-l-2 border-[#d2e4da] ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
            {journeyMilestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="relative group">
                  {/* Timeline Dot Indicator */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 size-8 sm:size-10 rounded-full bg-[#0f4a3a] text-white flex items-center justify-center font-mono text-xs font-bold ring-4 ring-white shadow-sm">
                    {idx + 1}
                  </div>

                  <div className="bg-white p-8 rounded-2xl border border-[#e2ece6] shadow-sm hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0f4a3a] bg-[#e6f0eb] px-3 py-1 rounded-full">
                          {m.phase}
                        </span>
                        <span className="text-xs text-[#4a5c56] font-medium">
                          {m.badge}
                        </span>
                      </div>
                      <span className="font-serif font-bold text-xl text-[#0f4a3a]">
                        {m.year}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#1b2722] mb-3">
                      {m.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#4a5c56] leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Action / Explore Links */}
      <section className="about-final">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <p className="eyebrow">Explore Further</p>
            <h2>Meet the professionals guiding our mission.</h2>
            <p>Read about our leadership team and their dedicated clinical experience.</p>
          </div>
          <div className="about-final-actions">
            <Button href="/book-consultation">Book a Consultation</Button>
            <Link className="about-secondary" href="/about/founders">
              Our Founders <ArrowRight size={16} />
            </Link>
            <Link className="about-secondary" href="/about/mission">
              Our Mission <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
