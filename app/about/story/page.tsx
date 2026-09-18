import Link from "next/link";
import { ArrowRight, Ear, HeartHandshake, Sparkles } from "lucide-react";
import { AboutEditorialHero } from "@/components/about-editorial-hero";
import { Button, SectionTitle } from "@/components/ui";

export const metadata = {
  title: "Our Story | Ulam Seyal",
  description:
    "Where care begins with understanding. Learn the founding story, philosophy, and dedication of Ulam Seyal Psychological and Psycho-Oncology Services.",
};

const storyHighlights = [
  {
    title: "A Need for Attentive Listening",
    desc: "Too many individuals experience therapy as clinical, rigid, or detached. Ulam Seyal was born to create a warm, conversational space where you are genuinely heard before any diagnosis or advice is formulated.",
    icon: Ear,
  },
  {
    title: "Specialised Psycho-Oncology Focus",
    desc: "Recognizing the profound emotional strain on cancer patients, survivors, and caregivers, we integrated specialized psycho-oncological care to provide emotional accompaniment alongside medical journeys.",
    icon: HeartHandshake,
  },
  {
    title: "Respecting Individual Contexts",
    desc: "We understand that family dynamics, cultural background, language, and everyday realities deeply shape psychological health. Our therapy is crafted collaboratively to fit real lives.",
    icon: Sparkles,
  },
];

export default function StoryPage() {
  return (
    <div className="about-page">
      {/* Editorial Hero */}
      <AboutEditorialHero
        prefix="OUR"
        title="STORY"
        eyebrow="OUR STORY"
        headline="Where care begins with understanding."
        statement="Ulam Seyal, founded in 2026, is a professional psychological and psycho-oncology service committed to making quality emotional and psychological support accessible through online and virtual platforms."
        tagline="Ulam Seyal — Healing Minds. Restoring Hope. Inspiring Change."
        badgeType="starburst"
      />

      {/* Main Narrative Editorial Section */}
      <section className="about-section about-story py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="about-story-grid">
            <div>
              <p className="eyebrow">The Origin</p>
              <h2>Understanding the human behind the concern.</h2>
              <div className="story-mark" aria-hidden="true">
                <Ear />
                <span>
                  Listen first.
                  <br />
                  Understand fully.
                </span>
              </div>
            </div>
            <div className="about-prose">
              <p className="story-lead">
                Ulam Seyal, founded in 2026, is a professional psychological and psycho-oncology service committed to making quality emotional and psychological support accessible through online and virtual platforms.
              </p>
              <p>
                We provide confidential, client-centred support for <strong>individuals, couples, families, children and adolescents, and parents</strong>, as well as specialised psycho-oncology services for <strong>cancer patients, survivors, caregivers, and family members</strong>.
              </p>
              <p>
                Our services address a range of emotional, psychological, behavioural, and relationship concerns, while psycho-oncology care focuses on helping individuals and families cope with the psychological impact of cancer and its various stages.
              </p>
              <p>
                Ulam Seyal follows an <strong>ethical, compassionate, and evidence-informed approach</strong>, creating a safe space for clients to understand their concerns, strengthen coping abilities, improve emotional well-being, and navigate challenging life and health experiences with greater resilience.
              </p>
              <p className="italic text-[#006d67] font-semibold text-lg border-t border-[#d8e6df] pt-5 mt-6">
                Ulam Seyal — Healing Minds. Restoring Hope. Inspiring Change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Convictions */}
      <section className="about-section bg-[#f5f8f6] py-16 md:py-24 border-y border-[#e2ece6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Guiding Convictions" title="What shaped our therapeutic philosophy." />
          <div className="grid gap-8 md:grid-cols-3 mt-12">
            {storyHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="bg-white p-8 rounded-2xl border border-[#e2ece6] shadow-sm hover:shadow-md transition-all">
                  <div className="size-12 rounded-xl bg-[#eaf2ee] text-[#0f4a3a] flex items-center justify-center mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1b2722] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#4a5c56] leading-relaxed">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Action / Explore Links */}
      <section className="about-final">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <p className="eyebrow">Start your journey</p>
            <h2>Take the first step towards understanding and clarity.</h2>
            <p>Our experienced team is here to support you at every stage.</p>
          </div>
          <div className="about-final-actions">
            <Button href="/book-consultation">Book a Consultation</Button>
            <Link className="about-secondary" href="/about/journey">
              Our Journey <ArrowRight size={16} />
            </Link>
            <Link className="about-secondary" href="/about/founders">
              Our Founders <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
