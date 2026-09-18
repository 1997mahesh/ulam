import Link from "next/link";
import { ArrowRight, Heart, Lock, ShieldCheck, Sparkles, Users, Video } from "lucide-react";
import { AboutEditorialHero } from "@/components/about-editorial-hero";
import { Button, SectionTitle } from "@/components/ui";

export const metadata = {
  title: "Our Mission | Ulam Seyal",
  description:
    "Ulam Seyal is committed to providing accessible, ethical, confidential, and client-centred psychological and psycho-oncology services through online and virtual platforms.",
};

const missionPillars = [
  {
    number: "01",
    title: "Accessible Care",
    desc: "Psychological and psycho-oncology support should be easier to access through online and virtual platforms, removing geographical, transit, and scheduling barriers.",
    icon: Video,
  },
  {
    number: "02",
    title: "Ethical & Confidential",
    desc: "Every interaction is anchored in strict privacy, client dignity, ethical standards, and a secure, non-judgmental environment.",
    icon: Lock,
  },
  {
    number: "03",
    title: "Client-Centred Support",
    desc: "Care is thoughtfully shaped to respect each person's unique experiences, relationships, identity, and personal pace without rigid templates.",
    icon: Users,
  },
  {
    number: "04",
    title: "Psycho-Oncology Support",
    desc: "Specialised emotional and psychological accompaniment for cancer patients, survivors, caregivers, and families throughout diagnosis, treatment, and recovery.",
    icon: Heart,
  },
  {
    number: "05",
    title: "Building Resilience",
    desc: "Equipping individuals and families with practical coping mechanisms to navigate emotional, health, and life challenges with sustainable inner strength.",
    icon: Sparkles,
  },
];

export default function MissionPage() {
  return (
    <div className="about-page">
      {/* Editorial Hero */}
      <AboutEditorialHero
        prefix="OUR"
        title="MISSION"
        eyebrow="OUR MISSION"
        headline="Making psychological care easier to access, understand, and trust."
        statement="Ulam Seyal is committed to providing accessible, ethical, confidential, and client-centred psychological and psycho-oncology services through online and virtual platforms."
        tagline="Ulam Seyal — Healing Minds. Restoring Hope. Inspiring Change."
        badgeType="starburst"
      />

      {/* Large Featured Mission Statement */}
      <section className="about-section py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="bg-white border border-[#e2ece6] rounded-2xl p-8 sm:p-12 md:p-16 shadow-sm relative overflow-hidden">
            <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#eaf4ef] px-4 py-1.5 rounded-full border border-[#d2e4da] inline-block mb-6">
              The Mission Statement
            </span>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0f4a3a] leading-relaxed mb-8">
              &ldquo;Ulam Seyal is committed to providing accessible, ethical, confidential, and client-centred psychological and psycho-oncology services through online and virtual platforms. We aim to support individuals, couples, families, children, adolescents, parents, cancer patients, survivors, caregivers, and families in navigating emotional, psychological, and life challenges with greater understanding, coping, and resilience.&rdquo;
            </p>
            <div className="border-t border-[#e2ece6] pt-6 flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#006d67] italic">
                Ulam Seyal — Healing Minds. Restoring Hope. Inspiring Change.
              </span>
              <span className="text-xs font-mono font-bold text-[#0f4a3a]/60 uppercase tracking-widest">
                Founded 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Numbered Pillars Around the Mission */}
      <section className="about-section bg-[#f5f8f6] py-16 md:py-24 border-y border-[#e2ece6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Core Pillars of Action</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1b2722] leading-snug">
              How we translate our mission into compassionate, everyday care.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {missionPillars.map((p) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.number}
                  className="bg-white p-8 rounded-2xl border border-[#e2ece6] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-lg font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] size-10 rounded-full flex items-center justify-center">
                        {p.number}
                      </span>
                      <div className="size-10 rounded-xl bg-[#f5f8f6] text-[#0f4a3a] flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1b2722] mb-3">{p.title}</h3>
                    <p className="text-sm text-[#4a5c56] leading-relaxed">{p.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strong Closing Statement & CTA */}
      <section className="about-section py-20 md:py-28 bg-[#fbf8f2]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="eyebrow mb-4">Our Guiding Promise</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0f4a3a] leading-tight mb-8">
            &ldquo;Care begins with being heard, understood, and supported.&rdquo;
          </h2>
          <p className="text-base sm:text-lg text-[#4a5c56] max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you are navigating emotional distress, relationship transitions, caregiver exhaustion, or the psychological impact of cancer, our compassionate team is here to accompany you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/book-consultation">Book a Consultation</Button>
            <Link className="about-secondary" href="/about/vision">
              Explore Our Vision <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
