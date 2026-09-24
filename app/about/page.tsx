import Link from "next/link";
import { ArrowRight, Baby, BriefcaseBusiness, CheckCircle2, Compass, Ear, GraduationCap, HandHeart, HeartHandshake, Lightbulb, LockKeyhole, Map, MessageCircleHeart, Ribbon, Scale, ShieldCheck, Sparkles, UserRound, UsersRound } from "lucide-react";
import { AboutEditorialHero } from "@/components/about-editorial-hero";
import { Button, SectionTitle } from "@/components/ui";

export const metadata = {
  title: "About Ulam Seyal | Psychological Wellness & Psycho-Oncology",
  description:
    "Ulam Seyal, founded in 2026, is a professional psychological and psycho-oncology service committed to making quality emotional support accessible through virtual platforms.",
};

const subPages = [
  {
    number: "01",
    title: "Our Mission",
    href: "/about/mission",
    desc: "Making psychological and psycho-oncology care easier to access, understand, and trust through virtual platforms.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Our Vision",
    href: "/about/vision",
    desc: "Creating a world where accessible, compassionate, and evidence-informed care empowers every individual and family.",
    icon: Compass,
  },
  {
    number: "03",
    title: "Our Journey",
    href: "/about/journey",
    desc: "The milestones, growth, and continuous commitment shaping our clinical practice and community support.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Our Founders",
    href: "/about/founders",
    desc: "Meet our experienced clinical leadership uniting evidence-informed psychotherapy and oncology care.",
    icon: GraduationCap,
  },
];

const values = [
  [Ear, "Empathy", "We listen before we advise."],
  [LockKeyhole, "Confidentiality", "Privacy and trust are central to meaningful psychological care."],
  [Sparkles, "Individuality", "There is no one-size-fits-all path to wellbeing."],
  [Scale, "Professional Integrity", "Care should be thoughtful, ethical and evidence-informed."],
  [HandHeart, "Respect", "Every person's experience, identity and context deserves consideration."],
  [HeartHandshake, "Collaboration", "Therapy works best when care is built together, not imposed."],
] as const;

const approach = [
  [Ear, "Listen carefully", "Begin with attentive, unhurried conversation."],
  [Map, "Understand context", "Consider the experiences and relationships around the concern."],
  [MessageCircleHeart, "Build a shared plan", "Agree on goals and an approach that feels appropriate."],
  [Sparkles, "Support meaningful progress", "Review, adapt and build changes that can be sustained."],
] as const;

const expectations = [
  "Evidence-informed psychological approaches",
  "Respect for individual identity and lived experience",
  "Privacy-conscious and ethically grounded care",
  "Collaboration instead of one-size-fits-all advice",
  "Clear and considerate communication",
  "Care tailored to your needs",
];

const reasons = [
  [Ear, "Thoughtful Listening", "We begin by understanding your experience before deciding what support may help."],
  [ShieldCheck, "Qualified Professionals", "Care is delivered by appropriately trained psychological professionals."],
  [MessageCircleHeart, "Flexible Access", "Support can be accessed online or in-person where available."],
  [HeartHandshake, "Continuity of Care", "The focus is not only immediate relief, but healthier long-term patterns and wellbeing."],
] as const;

const audiences = [
  [UserRound, "Individuals"],
  [HeartHandshake, "Couples"],
  [UsersRound, "Families"],
  [Baby, "Children"],
  [UsersRound, "Teenagers"],
  [GraduationCap, "Students"],
  [BriefcaseBusiness, "Working Professionals"],
  [Ribbon, "Cancer Patients & Caregivers"],
] as const;

const oncology = [
  "Coping with diagnosis & emotional adjustment",
  "Treatment-related stress & uncertainty",
  "Caregiver burnout & family support",
  "Survivorship & post-treatment transition",
  "Palliative & end-of-life emotional care",
  "Body image & identity counselling",
];

export default function About() {
  return (
    <div className="about-page">
      {/* Editorial Hero */}
      <AboutEditorialHero
        prefix="ABOUT"
        title="ULAM SEYAL"
        eyebrow="ABOUT US"
        headline="Where care begins with being heard, understood, and valued."
        statement="Ulam Seyal, founded in 2026, is a professional psychological and psycho-oncology service committed to making quality emotional and psychological support accessible through online and virtual platforms."
        tagline="Ulam Seyal — Healing Minds. Restoring Hope. Inspiring Change."
        badgeType="starburst"
      />

      {/* Explore Standalone About Pages */}
      <section className="about-section py-16 md:py-24 bg-[#f5f8f6] border-b border-[#e2ece6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="eyebrow mb-3">Explore Our Organisation</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#1b2722] leading-snug">
              Discover the principles, story, and people behind Ulam Seyal.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {subPages.map((sub) => {
              const Icon = sub.icon;
              return (
                <Link
                  key={sub.number}
                  href={sub.href}
                  className="group bg-white p-8 rounded-2xl border border-[#e2ece6] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-3 py-1 rounded-full">
                        {sub.number}
                      </span>
                      <div className="size-10 rounded-xl bg-[#f5f8f6] text-[#0f4a3a] flex items-center justify-center group-hover:bg-[#0f4a3a] group-hover:text-white transition-colors">
                        <Icon size={20} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#1b2722] group-hover:text-[#0f4a3a] transition-colors mb-2">
                      {sub.title}
                    </h3>
                    <p className="text-sm text-[#4a5c56] leading-relaxed mb-4">
                      {sub.desc}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f4a3a] group-hover:translate-x-1 transition-transform">
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Narrative / Brand Story */}
      <section className="about-section about-story py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="about-story-grid">
            <div>
              <p className="eyebrow">Our Narrative</p>
              <h2>Care begins with being heard.</h2>
              <div className="story-mark" aria-hidden="true">
                <Ear />
                <span>
                  Healing Minds.
                  <br />
                  Restoring Hope.
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

      {/* Values */}
      <section className="about-section about-values bg-[#f5f8f6] py-16 md:py-24 border-y border-[#e2ece6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="What guides us" title="Our values shape every conversation." />
          <div className="value-grid mt-12">
            {values.map(([Icon, title, text]) => (
              <article key={title} className="bg-white p-8 rounded-2xl border border-[#e2ece6]">
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

      {/* Our Approach */}
      <section className="about-section approach-section py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="approach-intro mb-12">
            <SectionTitle eyebrow="Our approach" title="Care shaped around the whole person." />
            <div className="about-prose mt-6">
              <p>
                Mental health concerns rarely exist in isolation. Personal history, relationships, work, physical health, identity, family dynamics and life experiences can all influence emotional wellbeing.
              </p>
              <p>
                Our approach begins with understanding the individual rather than reducing them to a label or symptom. Through assessment, conversation and collaborative planning, care is tailored to what feels appropriate, useful and sustainable.
              </p>
            </div>
          </div>
          <div className="approach-steps">
            {approach.map(([Icon, title, text], index) => (
              <article key={title} className="bg-white p-8 rounded-2xl border border-[#e2ece6]">
                <span className="step-number">0{index + 1}</span>
                <Icon className="text-[#0f4a3a] mb-3" size={24} />
                <h3 className="text-lg font-bold text-[#1b2722] mb-2">{title}</h3>
                <p className="text-sm text-[#4a5c56] leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="about-section expect-section bg-[#f5f8f6] py-16 md:py-24 border-y border-[#e2ece6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 expect-panel">
          <div>
            <p className="eyebrow">Your care experience</p>
            <h2>What you can expect</h2>
            <p>
              Professional support should feel clear, respectful and grounded in a genuine understanding of you.
            </p>
            <div className="mt-8">
              <Button href="/book-consultation">Book a Consultation</Button>
            </div>
          </div>
          <div className="expect-list">
            {expectations.map((item) => (
              <p key={item}>
                <CheckCircle2 />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ulam Seyal */}
      <section className="about-section why-section py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Why Ulam Seyal" title="Professional care. Human connection." />
          <div className="why-grid mt-12">
            {reasons.map(([Icon, title, text]) => (
              <article key={title} className="bg-[#fbfaf7] p-8 rounded-2xl border border-[#e2ece6]">
                <Icon className="text-[#0f4a3a] mb-4" size={24} />
                <h3 className="text-lg font-bold text-[#1b2722] mb-2">{title}</h3>
                <p className="text-sm text-[#4a5c56] leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Support */}
      <section className="about-section support-section bg-[#f5f8f6] py-16 md:py-24 border-y border-[#e2ece6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Who we support"
            title="Support for different stages of life."
            text="Care can respond to different relationships, responsibilities and moments of change."
          />
          <div className="audience-grid mt-12">
            {audiences.map(([Icon, label]) => (
              <article key={label} className="bg-white p-6 rounded-2xl border border-[#e2ece6] flex items-center gap-3">
                <Icon className="text-[#0f4a3a]" size={20} />
                <span className="font-semibold text-sm text-[#1b2722]">{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Psycho-Oncology Section */}
      <section className="about-section oncology-section py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 oncology-grid">
          <div>
            <p className="eyebrow">Psycho-oncology care</p>
            <h2>Psychological support alongside the cancer journey.</h2>
            <p>
              A cancer diagnosis can affect emotional wellbeing, relationships, family life and a person&apos;s sense of control. Psycho-oncology support focuses on the psychological and emotional needs that may arise during diagnosis, treatment, recovery and caregiving.
            </p>
            <small className="flex items-center gap-2 mt-4 text-xs text-[#526b66]">
              <ShieldCheck size={16} className="text-[#0f4a3a] shrink-0" />
              Psycho-oncology support complements medical care and does not replace treatment from oncology professionals.
            </small>
          </div>
          <div className="oncology-points">
            {oncology.map((item) => (
              <p key={item}>
                <CheckCircle2 />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="about-final">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <p className="eyebrow">Not sure where to begin?</p>
            <h2>A simple conversation can help clarify your next step.</h2>
            <p>Tell us what you&apos;re looking for and our team can help you understand which service or professional may be appropriate.</p>
          </div>
          <div className="about-final-actions">
            <Button href="/book-consultation">Book a Consultation</Button>
            <Link className="about-secondary" href="/contact">
              Talk to Our Care Team <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
