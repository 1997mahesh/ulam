import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Brain,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  HandHeart,
  Headphones,
  HeartHandshake,
  Laptop,
  Lightbulb,
  Lock,
  Ribbon,
  Scale,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui";

export const metadata = {
  title: "Our Mission | Ulam Seyal Psychological & Psycho-Oncology Services",
  description:
    "Ulam Seyal is committed to providing accessible, ethical, confidential, and client-centred psychological and psycho-oncology services through online and virtual platforms.",
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

const missionPillars = [
  {
    number: "01",
    badge: "Accessibility",
    title: "Accessible Virtual Care",
    desc: "Making psychological and psycho-oncology support available online without geographical or physical constraints.",
    icon: Laptop,
    points: [
      "Secure online video and audio consultations from any private, comfortable location.",
      "Flexible appointment scheduling designed for individuals, students, and busy families.",
      "Eliminating travel time, transit stress, and geographical barriers to expert care.",
    ],
  },
  {
    number: "02",
    badge: "Clinical Integrity",
    title: "Ethical & Evidence-Informed",
    desc: "Delivering thoughtful psychological support grounded in scientific research and highest clinical standards.",
    icon: Scale,
    points: [
      "Evidence-based therapeutic modalities including CBT, REBT, SFBT, and Mindfulness.",
      "Adherence to established ethical guidelines, clinical supervision, and professional conduct.",
      "Non-judgmental, unbiased support respecting every client's unique pace and lived experience.",
    ],
  },
  {
    number: "03",
    badge: "Privacy First",
    title: "Strict Confidentiality",
    desc: "Protecting your personal narrative, records, and session discussions with absolute diligence.",
    icon: Lock,
    points: [
      "Encrypted digital sessions and secure documentation protocols for peace of mind.",
      "A safe, private sanctuary to discuss sensitive thoughts, fears, and vulnerabilities.",
      "Clear confidentiality boundaries respecting client autonomy and legal standards.",
    ],
  },
  {
    number: "04",
    badge: "Tailored Care",
    title: "Client-Centred & Psycho-Oncology",
    desc: "Shaping every therapeutic engagement around the specific needs of individuals and families.",
    icon: Ribbon,
    points: [
      "Personalised care plans co-created to align with your personal goals and life context.",
      "Specialised psycho-oncological care for cancer patients, survivors, and caregiving families.",
      "Holistic emotional support complementing ongoing medical treatments and wellness goals.",
    ],
  },
];

const whoWeSupport = [
  {
    title: "Individuals",
    icon: UserRound,
    category: "Personal Well-being",
    points: [
      "Anxiety, excessive worry & panic management",
      "Low mood, depression & emotional distress",
      "Workplace stress, burnout & self-esteem building",
    ],
  },
  {
    title: "Couples & Relationships",
    icon: HeartHandshake,
    category: "Relational Harmony",
    points: [
      "Communication breakdown & conflict resolution",
      "Trust building & emotional reconnection",
      "Premarital guidance & life transition support",
    ],
  },
  {
    title: "Children & Adolescents",
    icon: GraduationCap,
    category: "Young Minds",
    points: [
      "Academic stress, exam anxiety & performance pressure",
      "Emotional regulation, anger & behavioral difficulties",
      "Peer pressure, digital habits & self-confidence",
    ],
  },
  {
    title: "Parents & Families",
    icon: Baby,
    category: "Family Dynamics",
    points: [
      "Positive parenting strategies & guidance",
      "Family communication & intergenerational harmony",
      "Navigating life changes, grief & shared transitions",
    ],
  },
  {
    title: "Cancer Patients & Survivors",
    icon: Ribbon,
    category: "Psycho-Oncology",
    points: [
      "Coping with diagnosis shock & treatment anxiety",
      "Managing treatment fatigue & body image changes",
      "Cancer survivorship, emotional adjustment & hope",
    ],
  },
  {
    title: "Caregivers & Loved Ones",
    icon: HandHeart,
    category: "Caregiver Support",
    points: [
      "Caregiver burnout & emotional exhaustion",
      "Managing anticipatory grief, anxiety & guilt",
      "Developing sustainable self-care and coping routines",
    ],
  },
];

const threeFoldAims = [
  {
    step: "01",
    title: "Greater Understanding",
    subtitle: "Clarity & Insight",
    desc: "Unpacking underlying emotions, identifying unhelpful thought patterns, and gaining profound clarity on personal and relational experiences.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Adaptive Coping",
    subtitle: "Practical Tools",
    desc: "Equipping you with evidence-informed strategies and psychological coping mechanisms to effectively manage everyday distress and life transitions.",
    icon: Brain,
  },
  {
    step: "03",
    title: "Enduring Resilience",
    subtitle: "Restored Strength",
    desc: "Fostering long-term inner strength, emotional balance, renewed hope, and an enriched quality of life for you and your family.",
    icon: Sparkles,
  },
];

export default function MissionPage() {
  return (
    <div className="about-page bg-[#fffdf9]">
      {/* Top Breadcrumb Header Area */}
      <section className="border-b border-[#dce6e0] bg-[#fbf8f2] py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Breadcrumb current="Our Mission" parent={{ label: "About Ulam Seyal", href: "/about" }} />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
            <div>
              <p className="eyebrow mb-2">ABOUT ULAM SEYAL</p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b3d30] tracking-tight">
                Our Mission
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#eaf4ef] px-3.5 py-1.5 rounded-full border border-[#d2e4da]">
                Virtual & Online Care Platform
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Mission Statement Banner */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="bg-white border border-[#dce6e0] rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#eaf4ef] px-3.5 py-1.5 rounded-full border border-[#d2e4da] inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#0f4a3a] animate-pulse" />
                Our Core Mission Statement
              </span>
              <span className="text-xs font-mono font-semibold text-[#52635c]">
                Ulam Seyal · Founded 2026
              </span>
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl md:text-[27px] text-[#0b3d30] leading-relaxed font-normal mb-8">
              &ldquo;Ulam Seyal is committed to providing accessible, ethical, confidential, and client-centred psychological and psycho-oncology services through online and virtual platforms. We aim to support individuals, couples, families, children, adolescents, parents, cancer patients, survivors, caregivers, and families in navigating emotional, psychological, and life challenges with greater understanding, coping, and resilience.&rdquo;
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
                  href="/about/vision"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f4a3a] bg-[#eaf4ef] hover:bg-[#dce6e0] px-4 py-2.5 rounded-lg transition-colors"
                >
                  <span>Our Vision</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Core Pillars of Our Mission (Point to Point) */}
      <section className="py-12 md:py-16 bg-[#f5f8f5] border-y border-[#dce6e0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <OrnamentTitle>Core Pillars of Our Mission</OrnamentTitle>
            <p className="text-sm sm:text-base text-[#52635c] mt-3">
              How we translate our mission into ethical, accessible, and compassionate clinical care.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {missionPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="bg-white border border-[#dce6e0] rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
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
                        Pillar {pillar.number}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0b3d30] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#52635c] leading-relaxed mb-5">
                      {pillar.desc}
                    </p>

                    <div className="space-y-2.5 border-t border-[#f0f4f2] pt-4">
                      {pillar.points.map((point) => (
                        <div key={point} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4b4a45]">
                          <CheckCircle2 size={16} className="text-[#0f4a3a] shrink-0 mt-0.5" />
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

      {/* Section 2: Who We Support (Point to Point Groups) */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <OrnamentTitle>Who We Support</OrnamentTitle>
            <p className="text-sm sm:text-base text-[#52635c] mt-3">
              Comprehensive psychological accompaniment tailored for every life stage and health circumstance.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeSupport.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#dce6e0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-10 rounded-xl bg-[#eaf4ef] text-[#0f4a3a] flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#52635c] bg-[#f5f8f6] px-2.5 py-1 rounded-full border border-[#dce6e0]">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0b3d30] mb-3">
                      {item.title}
                    </h3>

                    <ul className="space-y-2 text-xs sm:text-sm text-[#4b4a45] list-none p-0 m-0">
                      {item.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 leading-relaxed">
                          <span className="size-1.5 rounded-full bg-[#0f4a3a] shrink-0 mt-2" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Our Three-Fold Aim (Point to Point Outcome Steps) */}
      <section className="py-12 md:py-16 bg-[#f5f8f5] border-t border-[#dce6e0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <OrnamentTitle>Our Three-Fold Aim for Every Client</OrnamentTitle>
            <p className="text-sm sm:text-base text-[#52635c] mt-3">
              Guiding individuals and families through emotional and life challenges toward sustainable strength.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {threeFoldAims.map((aim) => {
              const Icon = aim.icon;
              return (
                <div
                  key={aim.step}
                  className="bg-white border border-[#dce6e0] rounded-2xl p-7 shadow-sm text-center flex flex-col items-center justify-between"
                >
                  <div>
                    <div className="relative mb-5">
                      <div className="size-16 rounded-full bg-[#0f4a3a] text-white flex items-center justify-center mx-auto shadow-sm">
                        <Icon size={28} />
                      </div>
                      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 size-6 rounded-full bg-white border border-[#0f4a3a] text-[#0f4a3a] text-xs font-bold flex items-center justify-center">
                        {aim.step}
                      </span>
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#006d67] block mb-1">
                      {aim.subtitle}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-[#0b3d30] mb-3">
                      {aim.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52635c] leading-relaxed">
                      {aim.desc}
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
                  If you are in distress or crisis, reach out to verified helplines like Sneha Helpline (
                  <a href="tel:04424640050" className="underline font-bold text-white">044 24640050</a>) or TN Govt Helpline (<a href="tel:104" className="underline font-bold text-white">104</a>).
                </p>
              </div>
            </div>

            <div className="support-unit resources">
              <HeartHandshake />
              <div>
                <h3 className="font-serif text-lg font-bold text-white mb-1">
                  Ready to Begin Your Care?
                </h3>
                <p className="text-xs text-white/80 leading-relaxed mb-3">
                  Book a confidential virtual session with our qualified psychological consultants.
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
                    href="/services"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 hover:text-white underline underline-offset-4"
                  >
                    <span>View All Services</span>
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

