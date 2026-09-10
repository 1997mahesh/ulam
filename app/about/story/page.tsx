import Link from "next/link";
import { ArrowRight, Ear, HeartHandshake, Sparkles } from "lucide-react";
import { PageHero } from "@/components/inner";
import { Button, SectionTitle } from "@/components/ui";

export const metadata = {
  title: "Our Story | Ulam Seyal",
  description: "The story, motivation, and founding spirit behind Ulam Seyal's psychological and psycho-oncology care platform.",
};

const storyHighlights = [
  {
    title: "A Need for Attentive Listening",
    desc: "Too many individuals experience therapy as clinical, rigid, or detached. Ulam Seyal was born to create a warm, conversational space where you are genuinely heard before any diagnosis or advice is formulated.",
    icon: Ear,
  },
  {
    title: "Psycho-Oncology Focus",
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
      <PageHero
        eyebrow="Our Story"
        breadcrumb="Our Story"
        breadcrumbParent={{ label: "About Us", href: "/about" }}
        title="Care Begins With Being Heard"
        text="How Ulam Seyal grew from a simple belief into a compassionate platform for mental wellbeing and psycho-oncology support."
      />

      <section className="about-section about-story">
        <div className="container about-story-grid">
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
              Ulam Seyal was founded with a clear, heartfelt purpose: to make psychological and psycho-oncological care feel approachable, unhurried, and deeply humane.
            </p>
            <p>
              In Tamil and regional culture, the name <em>Ulam Seyal</em> evokes deep reflection and intentional inner action. For many people, acknowledging distress and seeking professional guidance can be daunting. Stigma, fear of judgment, or previous impersonal experiences often lead individuals to suffer in silence.
            </p>
            <p>
              We wanted to build an alternative—a space where vulnerability is met with respect, where sessions feel like thoughtful, collaborative conversations, and where care is tailored to the individual rather than forced into rigid categories.
            </p>
            <p>
              Over time, as we worked with clients navigating anxiety, relationship challenges, grief, and life-altering illnesses like cancer, our conviction grew stronger: when people feel truly heard, understood, and valued, meaningful healing begins.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section bg-[#f5f8f6] py-16">
        <div className="container">
          <SectionTitle eyebrow="Guiding Convictions" title="What shaped our therapeutic philosophy." />
          <div className="grid gap-8 md:grid-cols-3 mt-10">
            {storyHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white p-8 rounded-xl border border-[#e2ece6] shadow-sm">
                  <div className="size-12 rounded-lg bg-[#eaf2ee] text-[#0f4a3a] flex items-center justify-center mb-5">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1b2722] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#4a5c56] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-final">
        <div className="container">
          <div>
            <p className="eyebrow">Start your journey</p>
            <h2>Take the first step towards understanding and clarity.</h2>
            <p>Our experienced team is here to support you at every stage.</p>
          </div>
          <div className="about-final-actions">
            <Button href="/book-consultation">Book a Consultation</Button>
            <Link className="about-secondary" href="/services">
              Explore Services <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
