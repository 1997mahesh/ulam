import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Eye, HeartHandshake, LockKeyhole, Scale, Sparkles } from "lucide-react";
import { PageHero } from "@/components/inner";
import { Button, SectionTitle } from "@/components/ui";

export const metadata = {
  title: "Our Mission & Our Vision | Ulam Seyal",
  description: "Learn about the mission, vision, and core values that guide psychological care at Ulam Seyal.",
};

const visionPillars = [
  {
    number: "01",
    title: "Destigmatizing Mental Healthcare",
    desc: "A world where seeking psychological and emotional support feels as normal, accessible, and respected as visiting a general physician.",
  },
  {
    number: "02",
    title: "Holistic & Contextual Care",
    desc: "Healthcare that looks beyond symptoms to understand the whole person—their environment, relationships, lived experiences, and individual strengths.",
  },
  {
    number: "03",
    title: "Everyday Accessibility",
    desc: "Ensuring high quality, evidence-informed psychological care is reachable for people across different walks of life, geographies, and linguistic backgrounds.",
  },
];

const missionCommitments = [
  "Providing compassionate, evidence-informed psychological and psycho-oncological care.",
  "Creating a safe, unhurried, and deeply confidential space for self-reflection and healing.",
  "Tailoring therapeutic plans collaboratively to respect individuality and autonomy.",
  "Bridging emotional and psychological wellness with accessible online consultations.",
  "Upholding the highest ethical standards, empathy, and professional integrity in every session.",
];

const coreValues = [
  [Eye, "Visionary Empathy", "We listen actively before offering perspectives or guidance."],
  [LockKeyhole, "Strict Confidentiality", "Privacy and trust are foundational to genuine therapeutic work."],
  [Sparkles, "Individuality First", "There is no rigid template; care is shaped to each person."],
  [Scale, "Ethical Integrity", "Grounded in scientific evidence, ongoing training, and honest practice."],
  [HeartHandshake, "Collaborative Healing", "Therapy is a partnership where we work together towards your goals."],
  [Compass, "Continuity & Growth", "Focusing on sustainable long-term emotional resilience."],
] as const;

export default function MissionVisionPage() {
  return (
    <div className="about-page">
      <PageHero
        eyebrow="Mission & Vision"
        breadcrumb="Mission & Vision"
        breadcrumbParent={{ label: "About Us", href: "/about" }}
        title="Our Mission & Our Vision"
        text="The guiding principles and commitments that define how we provide compassionate, ethical psychological care."
      />

      <section className="about-section vision-mission">
        <div className="container vision-grid">
          <article className="vision-card">
            <span>01</span>
            <p className="eyebrow">Our Vision</p>
            <h2>A world where psychological support is recognized as a vital pillar of everyday wellbeing.</h2>
            <p>
              We envision a society where individuals, couples, and families seek mental health support early, openly, and without fear of judgment. Mental wellbeing should be accessible, respected, and seamlessly integrated into healthcare.
            </p>
          </article>
          <article className="mission-card">
            <span>02</span>
            <p className="eyebrow">Our Mission</p>
            <h2>To make thoughtful, professional psychological care easier to access, understand, and trust.</h2>
            <p>
              Our mission is to deliver evidence-informed, compassionate psychological support while honoring the privacy, dignity, and lived experience of every person who walks through our doors.
            </p>
          </article>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <SectionTitle eyebrow="Strategic Pillars" title="How we translate our vision into practice." />
          <div className="grid gap-6 md:grid-cols-3 mt-8">
            {visionPillars.map((p) => (
              <div key={p.number} className="card p-8 bg-[#fbfaf7] border border-[#e6eee9] rounded-xl">
                <span className="text-2xl font-bold text-[#0f4a3a] opacity-60">{p.number}</span>
                <h3 className="text-xl font-bold text-[#1b2722] mt-3 mb-2">{p.title}</h3>
                <p className="text-sm text-[#4a5c56] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section bg-[#f5f8f6] py-16">
        <div className="container expect-panel">
          <div>
            <p className="eyebrow">Our Commitment</p>
            <h2>What Guides Our Daily Practice</h2>
            <p>
              Every conversation is anchored in thoughtful listening, clinical competence, and genuine human warmth.
            </p>
            <Button href="/book-consultation">Book a Consultation</Button>
          </div>
          <div className="expect-list">
            {missionCommitments.map((item) => (
              <p key={item}>
                <CheckCircle2 />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-values">
        <div className="container">
          <SectionTitle eyebrow="Core Values" title="Values that shape every client relationship." />
          <div className="value-grid">
            {coreValues.map(([Icon, title, text]) => (
              <article key={title}>
                <span>
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-final">
        <div className="container">
          <div>
            <p className="eyebrow">Ready to begin?</p>
            <h2>Connect with our caring professionals today.</h2>
            <p>Explore our consultations or reach out to our team to find the right support for your needs.</p>
          </div>
          <div className="about-final-actions">
            <Button href="/book-consultation">Book a Consultation</Button>
            <Link className="about-secondary" href="/counsellors">
              Meet Our Consultants <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
