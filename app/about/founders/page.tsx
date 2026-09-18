import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, CalendarDays, CheckCircle2, Globe, GraduationCap, HeartHandshake, Layers, Sparkles } from "lucide-react";
import { AboutEditorialHero } from "@/components/about-editorial-hero";
import { Button, SectionTitle } from "@/components/ui";

export const metadata = {
  title: "Our Founders | Ulam Seyal",
  description: "Meet the founders and leadership behind Ulam Seyal Psychological Wellness & Psycho-Oncology Services.",
};

const founders = [
  {
    name: "Mr. Dhayanandhan Shanmugam",
    role: "Founder – ULAM SEYAL Psychological Wellness & Psycho-Oncology Services",
    designation: "Senior Psycho-Oncologist | Applied Psychologist | Certified CBT Therapist | Tobacco Cessation & Grief Therapist",
    qualification: "M.Sc. Applied Psychology | M.Phil. Psycho-Oncology",
    experience: "12+ Years of Professional Experience",
    image: "/img/dhaya.jpg",
    bio: [
      "Mr. Dhayanandhan Shanmugam is a Senior Psycho-Oncologist and Applied Psychologist with over 12 years of experience in psychological counselling, psycho-oncology, and psychosocial care. He provides compassionate, evidence-informed support to individuals, couples, and families navigating emotional, psychological, and relationship-related challenges.",
      "His areas of practice include depression, anxiety, stress, trauma, personality-related concerns, marital and relationship difficulties, and emotional adjustment. He provides Marital & Couple Therapy and uses Cognitive Behavioural Therapy (CBT) to support meaningful and sustainable psychological change. He also specialises in psycho-oncology, cancer patient and caregiver support, grief and bereavement therapy, tobacco cessation, palliative care counselling, and end-of-life support, offering sensitive care during periods of illness, loss, and major life transitions.",
    ],
    areasOfFocus: [
      "General Psychological Counselling",
      "Depression & Anxiety",
      "Stress Management",
      "CBT",
      "Marital & Couple Therapy",
      "Relationship Concerns",
      "Trauma & PTSD",
      "Personality-Related Concerns",
      "Psycho-Oncology",
      "Cancer & Caregiver Support",
      "Grief & Bereavement",
      "Tobacco Cessation",
      "Palliative & End-of-Life Counselling",
    ],
    therapeuticModalities: [
      "CBT",
      "REBT",
      "SFBT",
      "Mindfulness-Based & Trauma-Informed Therapy",
      "Gestalt Therapy",
      "Transactional Analysis",
      "Motivational Interviewing",
      "Family & Couple Therapy",
      "Supportive Psychotherapy",
    ],
    languages: "Tamil / English / Hindi",
  },
  {
    name: "Mr. Gopalakrishnan D.S.",
    role: "Managing Head – Ulam Seyal Psychological Wellness & Psycho-Oncology Services",
    designation: "Medical & Psychiatric Social Work Professional | Senior Counsellor | Psychotherapist | Crisis Intervention Specialist",
    qualification: "Master of Social Work (MSW) in Medical & Psychiatric Social Work – University of Madras",
    experience: "10+ Years of Professional Experience",
    image: "/img/gopi.png",
    bio: [
      "Gopalakrishnan D.S. is a Medical & Psychiatric Social Work Professional, Senior Counsellor, Psychotherapist, and Crisis Intervention Specialist with extensive experience across NGO programs, Central Government projects, and Tamil Nadu Government initiatives. He holds a Master of Social Work (MSW) in Medical & Psychiatric Social Work from the University of Madras.",
      "He possesses strong leadership and management skills, with experience in leading and managing large teams, staff supervision, mentoring, task allocation, program coordination, performance monitoring, field-level management, and crisis case management.",
      "He provides counselling support to children, adolescents, women, individuals, couples, families, and caregivers for concerns including anxiety, depression, stress, trauma, behavioral difficulties, relationship concerns, and emotional distresses. He has also conducted training and orientation programs on crisis intervention and crisis case handling, along with training on POCSO, child marriage, women and child protection, counselling, and social welfare interventions.",
      "As a Manager with the Tamil Nadu Women Helpline 181 under the Social Welfare Department, he handled crisis intervention, case management, referral coordination, monitoring, documentation, reporting, and stakeholder coordination, supporting women and children facing vulnerable and emergency situations.",
      "He has also worked as a Senior Counsellor with the Transgender community through HIV awareness programs and contributed to TB and community health programs through health education, sensitization, counselling, referrals, screening support, and follow-up activities. His professional contribution has been recognized with a Best Employee Award.",
      "In 2026, Gopalakrishnan D.S. joined Ulam Seyal Psychological Wellness & Psycho-Oncology Services as Managing Head, taking responsibility for professional service management, team coordination, counselling services, program development, staff mentoring, quality monitoring, and overall operational coordination. He contributes to developing accessible and client-centered psychological wellness services for individuals, children, adolescents, women, families, and caregivers.",
    ],
    areasOfFocus: [
      "Crisis Intervention & Emergency Case Handling",
      "Child & Adolescent Counselling",
      "Women & Child Protection (POCSO / Safety)",
      "Anxiety, Depression & Stress",
      "Trauma & Emotional Distress",
      "Behavioral Difficulties",
      "Relationship & Family Concerns",
      "Marital & Premarital Counselling",
      "Caregiver Support",
      "Vulnerable Community & Social Welfare Interventions",
    ],
    therapeuticModalities: [
      "Cognitive Behavioral Therapy (CBT)",
      "Rational Emotive Behavior Therapy (REBT)",
      "Supportive Counselling",
      "Solution-Focused Approaches",
      "Family Counselling",
      "Child-Centered Counselling",
      "Adolescent Counselling",
      "Marital & Premarital Counselling",
      "Caregiver Support",
      "Crisis Intervention & Case Management",
    ],
    languages: "Tamil | English",
  },
];

export default function FoundersPage() {
  return (
    <div className="about-page">
      <AboutEditorialHero
        prefix="OUR"
        title="FOUNDERS"
        eyebrow="OUR FOUNDERS"
        headline="The people behind Ulam Seyal."
        statement="Meet the visionary founders behind Ulam Seyal, uniting clinical excellence, compassionate listening, and evidence-informed mental health care."
        tagline="Ulam Seyal — Healing Minds. Restoring Hope. Inspiring Change."
        badgeType="starburst"
      />

      {/* Main Founder Profiles Section */}
      <section className="about-section py-16">
        <div className="container">
          <div className="space-y-16">
            {founders.map((founder, idx) => (
              <div
                key={founder.name}
                className="bg-white rounded-2xl border border-[#dce8e1] shadow-md overflow-hidden p-6 md:p-10 transition-all hover:shadow-lg"
              >
                <div className="grid gap-10 lg:grid-cols-[300px_1fr] items-start">
                  {/* Left: Founder Photo & Quick Details */}
                  <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
                    <div className="relative size-64 sm:size-72 rounded-2xl overflow-hidden border-2 border-[#dce8e1] shadow-md bg-[#f7faf8]">
                      <Image
                        src={founder.image}
                        alt={founder.name}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 300px"
                        priority={idx === 0}
                      />
                    </div>

                    <div className="mt-5 w-full space-y-2.5 text-xs text-[#4a5c56]">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eef5f1] text-[#0f4a3a] font-bold border border-[#d3e5dc] w-fit mx-auto lg:mx-0">
                        <Award size={14} />
                        <span>{founder.experience}</span>
                      </div>

                      <div className="flex items-center gap-2 justify-center lg:justify-start pt-1 font-semibold text-[#1b2722]">
                        <Globe size={14} className="text-[#0f4a3a]" />
                        <span>Languages: {founder.languages}</span>
                      </div>

                      <div className="pt-4 w-full">
                        <Link
                          href="/book-consultation"
                          className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-[#E9B12B] hover:bg-[#D9A01E] text-[#1b2722] font-bold text-xs tracking-wide shadow-sm transition-all"
                        >
                          <CalendarDays size={15} />
                          <span>Book Consultation</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right: Detailed Bio & Qualifications */}
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#E9B12B]">
                        Leadership Profile
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#0b3d30] mt-1 font-serif">
                        {founder.name}
                      </h2>
                      <p className="text-sm font-bold text-[#0f4a3a] mt-1">
                        {founder.role}
                      </p>
                      <p className="text-xs text-[#526b66] mt-1 italic leading-relaxed">
                        {founder.designation}
                      </p>
                      {founder.qualification && (
                        <div className="inline-flex items-center gap-1.5 mt-2.5 px-2.5 py-1 rounded bg-[#f3f7f4] text-[#1b2722] text-xs font-semibold border border-[#e2ece6]">
                          <GraduationCap size={13} className="text-[#0f4a3a]" />
                          <span>{founder.qualification}</span>
                        </div>
                      )}
                    </div>

                    {/* Bio Paragraphs */}
                    <div className="space-y-3.5 text-sm text-[#384c46] leading-relaxed">
                      {founder.bio.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>

                    {/* Areas of Focus */}
                    <div className="pt-2">
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0b3d30] mb-2.5 flex items-center gap-1.5">
                        <Sparkles size={14} className="text-[#E9B12B]" />
                        <span>Areas of Focus</span>
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {founder.areasOfFocus.map((area) => (
                          <span
                            key={area}
                            className="px-2.5 py-1 rounded-md bg-[#f1f6f3] text-[#244a44] text-xs font-medium border border-[#d8e6de]"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Therapeutic Modalities */}
                    {founder.therapeuticModalities && (
                      <div className="pt-1">
                        <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0b3d30] mb-2.5 flex items-center gap-1.5">
                          <Layers size={14} className="text-[#0f4a3a]" />
                          <span>Therapeutic Approaches & Modalities</span>
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {founder.therapeuticModalities.map((mod) => (
                            <span
                              key={mod}
                              className="px-2.5 py-1 rounded-md bg-[#eaf2ee] text-[#0f4a3a] text-xs font-semibold border border-[#cfe0d6]"
                            >
                              {mod}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section className="about-section bg-[#f5f8f6] py-16">
        <div className="container">
          <SectionTitle eyebrow="Our Commitment" title="Guiding pillars established by our founders." />
          <div className="grid gap-8 md:grid-cols-3 mt-10">
            <div className="bg-white p-8 rounded-xl border border-[#e2ece6] shadow-sm">
              <div className="size-12 rounded-lg bg-[#eaf2ee] text-[#0f4a3a] flex items-center justify-center mb-5">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1b2722] mb-3">Clinical Excellence</h3>
              <p className="text-sm text-[#4a5c56] leading-relaxed">
                Combining extensive academic qualifications with ongoing evidence-based training to ensure the highest standards of mental healthcare.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#e2ece6] shadow-sm">
              <div className="size-12 rounded-lg bg-[#eaf2ee] text-[#0f4a3a] flex items-center justify-center mb-5">
                <HeartHandshake size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1b2722] mb-3">Compassionate Partnership</h3>
              <p className="text-sm text-[#4a5c56] leading-relaxed">
                Viewing therapy as a collaborative, respectful journey that honors individual dignity, cultural context, and personal life experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#e2ece6] shadow-sm">
              <div className="size-12 rounded-lg bg-[#eaf2ee] text-[#0f4a3a] flex items-center justify-center mb-5">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1b2722] mb-3">Ethical Integrity</h3>
              <p className="text-sm text-[#4a5c56] leading-relaxed">
                Ensuring complete confidentiality, compassionate boundaries, and professional integrity across every consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="about-final">
        <div className="container">
          <div>
            <p className="eyebrow">Connect with us</p>
            <h2>Book a consultation with our qualified professionals.</h2>
            <p>Experience supportive, evidence-informed care designed around your needs.</p>
          </div>
          <div className="about-final-actions">
            <Button href="/book-consultation">Book a Consultation</Button>
            <Link className="about-secondary" href="/counsellors">
              Meet All Consultants <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
