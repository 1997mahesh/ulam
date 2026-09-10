import Link from "next/link";
import { ArrowRight, Heart, Lightbulb, Shield, Users } from "lucide-react";
import { PageHero } from "@/components/inner";
import { Button, SectionTitle } from "@/components/ui";

export const metadata = {
  title: "Our Journey | Ulam Seyal",
  description: "Explore the milestones and evolution of Ulam Seyal in psychological care, psycho-oncology, and mental wellness support.",
};

const milestones = [
  {
    phase: "Phase 01",
    title: "The Founding Vision",
    desc: "Ulam Seyal was established to bridge the gap between clinical psychological expertise and compassionate, accessible care for individuals seeking guidance without stigma.",
    icon: Lightbulb,
  },
  {
    phase: "Phase 02",
    title: "Pioneering Psycho-Oncology Care",
    desc: "Recognizing that medical cancer treatment requires emotional accompaniment, we launched specialized psycho-oncology support for patients, survivors, and caregivers.",
    icon: Heart,
  },
  {
    phase: "Phase 03",
    title: "Expanding Online Consultations",
    desc: "To reach clients across different cities and linguistic backgrounds, we introduced private, secure virtual consultation options with multilingual psychologists.",
    icon: Users,
  },
  {
    phase: "Phase 04",
    title: "Holistic Integrative Wellness",
    desc: "Today, we continue evolving with integrated care that encompasses psychotherapy, family counseling, child and adolescent guidance, and supportive therapies.",
    icon: Shield,
  },
];

export default function JourneyPage() {
  return (
    <div className="about-page">
      <PageHero
        eyebrow="Our Journey"
        breadcrumb="Our Journey"
        breadcrumbParent={{ label: "About Us", href: "/about" }}
        title="Growing Through Care & Compassion"
        text="A look at the path we have traveled in making psychological support thoughtful, accessible, and grounded in human connection."
      />

      <section className="about-section">
        <div className="container">
          <SectionTitle eyebrow="Milestones" title="How our care has expanded and evolved." />
          <div className="grid gap-8 md:grid-cols-2 mt-12">
            {milestones.map((m) => {
              const Icon = m.icon;
              return (
                <article key={m.title} className="card p-8 bg-[#fbfaf7] border border-[#e6eee9] rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0f4a3a] bg-[#e6f0eb] px-3 py-1 rounded-full">
                        {m.phase}
                      </span>
                      <Icon className="text-[#0f4a3a]" size={22} />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1b2722] mb-3">{m.title}</h3>
                    <p className="text-sm text-[#4a5c56] leading-relaxed">{m.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-section bg-[#f5f8f6] py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow">Looking Forward</p>
            <h2 className="text-3xl font-bold text-[#1b2722] mt-2 mb-6">Continual Learning & Commitment</h2>
            <p className="text-base text-[#4a5c56] leading-relaxed">
              Every consultation teaches us something new about human resilience. As we move forward, our commitment remains steadfast: to foster a healthcare culture where every story is heard, understood, and valued with total confidentiality.
            </p>
          </div>
        </div>
      </section>

      <section className="about-final">
        <div className="container">
          <div>
            <p className="eyebrow">Join Us</p>
            <h2>Be part of a compassionate care experience.</h2>
            <p>Schedule your session or talk with our team today.</p>
          </div>
          <div className="about-final-actions">
            <Button href="/book-consultation">Book a Consultation</Button>
            <Link className="about-secondary" href="/contact">
              Contact Us <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
