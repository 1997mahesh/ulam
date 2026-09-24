import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Globe,
  GraduationCap,
  Headphones,
  HeartHandshake,
  Layers,
  Sparkles,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui";

export const metadata = {
  title: "Our Founders | Ulam Seyal Psychological & Psycho-Oncology Services",
  description:
    "Meet the visionary founders behind Ulam Seyal, uniting clinical excellence, compassionate listening, and evidence-informed mental health care.",
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

interface Founder {
  name: string;
  role: string;
  designation: string;
  qualification: string;
  award?: string;
  experience: string;
  image: string;
  bio: string[];
  areasOfFocus: string[];
  therapeuticModalities: string[];
  research?: string[];
  languages: string;
}

const founders: Founder[] = [
  {
    name: "Mr. Dhayanandhan Shanmugam",
    role: "Founder – Ulam Seyal Psychological Wellness & Psycho-Oncology Services",
    designation:
      "Professional Psychologist | Clinical Psycho-Oncologist | Tobacco Cessation Therapist",
    qualification:
      "M.Sc. in Applied Psychology | M.Phil. in Clinical Psycho-Oncology (Cancer Institute WIA, Chennai) | Clinical Psycho-Oncology Research Programme",
    award: "Dr. William James Award – All India Press and Media Council (April 2025)",
    experience: "12+ Years of Professional Experience",
    image: "/img/dhayanandan.jpg",
    bio: [
      "Dhayanandhan Shanmugam is a Professional Psychologist, Clinical Psycho-Oncologist, and Tobacco Cessation Therapist with over 12 years of varied experience in psychological therapies and psycho-oncological care. His clinical practice focuses on offering evidence-based psychological and emotional support to individuals, cancer patients, survivors, caregivers, and families across different stages of life and the cancer journey.",
      "He holds a Masters in Applied Psychology and an M.Phil. in Clinical Psycho-Oncology from the Cancer Institute (College of Oncological Sciences), WIA, Chennai. He has also completed a Clinical Psycho-Oncology Research Programme, further developing his expertise in psycho-oncology research and evidence-based psychological interventions.",
      "Dhayanandhan began his professional career as a Psychologist and Clinical Psycho-Oncologist at Madras Cancer Care Foundation, Chennai, and later worked with CanCare Foundation. His experiences include providing psychotherapeutic interventions for patients with different types of cancers, as well as their primary caregivers and family members. His experience is vast yet complete as it spans across cancer care, from diagnosis, treatment to survivorship, palliative care, end-of-life care, and bereavement.",
      "His areas of clinical expertise include anxiety and depression, stress management, relationship and marital counseling, family counseling, adolescent counseling, parenting support, tobacco cessation, addiction counseling, workplace counseling, and cancer-related psychological distress.",
      "He supports individuals and families in managing emotional distress, treatment-related challenges, uncertainty, adjustment to illness, and changes in everyday life. He has particular experience in survivorship supportive counseling and laryngectomy supportive counselling. It includes psychological support for adjustment to changes in communication, body image, social functioning, and quality of life. He has also been actively involved in facilitating cancer support groups for breast cancer, lymphoma, leukemia, and head and neck cancers, including groups for patients undergoing treatment and cancer survivors. These groups provide a safe and supportive space for sharing experiences, strengthening coping skills, and receiving psychological guidance.",
      "In 2026, he founded Ulam Seyal Psychological Wellness and Psycho-Oncology Services, with the aim of offering accessible psychological and psycho-oncology services through online and virtual consultations. The initiative facilitates professional support for people who need psychological and emotional assistance, including those experiencing mental health concerns, cancer-related distress, caregiver stress, survivorship concerns, and grief and bereavement.",
      "Dhayanandhan follows an individualized, person-centered, and integrative approach to psychotherapy. He is trained in Cognitive Behavioural Therapy (CBT), Rational Emotive Behaviour Therapy (REBT), Solution-Focused Brief Therapy (SFBT), Mindfulness-Based and Trauma-Informed Therapy, Gestalt Therapy, Transactional Analysis, Motivational Interviewing, Family and Couple Therapy, and Supportive Psychotherapy.",
      "Alongside his clinical practice, Dhayanandhan has contributed to psycho-oncology research and academic work. His research articles have been published in the Indian Journal of Surgical Oncology and the International Journal of Psycho-Oncology. His research interests include psychological distress among oncology patients, palliative psycho-oncology, survivorship, and bereavement care.",
      "He has also presented research papers at several national and international conferences. He is actively involved in professional education and has conducted training programmes for nursing, psychology, and psychiatric social work students, focusing on communication in cancer care, cancer psychology, counseling, and psycho-oncological interventions.",
      "In recognition of his professional contributions, Dhayanandhan Shanmugam received the Dr. William James Award from the All India Press and Media Council in April 2025.",
      "Dhayanandhan is committed to offering compassionate, ethical, and evidence-based psychological care. His work is centered on facilitating meaningful psychological and emotional support for individuals, cancer patients, survivors, caregivers, and families as they navigate treatment, challenges and integrate into normal life.",
    ],
    areasOfFocus: [
      "Anxiety & Depression",
      "Stress Management",
      "Relationship & Marital Counseling",
      "Family Counseling",
      "Adolescent Counseling",
      "Parenting Support",
      "Tobacco Cessation",
      "Addiction Counseling",
      "Workplace Counseling",
      "Cancer-Related Psychological Distress",
      "Survivorship Supportive Counseling",
      "Laryngectomy Supportive Counseling",
      "Cancer Support Groups (Breast, Lymphoma, Leukemia, Head & Neck)",
      "Palliative, End-of-Life & Bereavement Care",
    ],
    therapeuticModalities: [
      "Cognitive Behavioural Therapy (CBT)",
      "Rational Emotive Behaviour Therapy (REBT)",
      "Solution-Focused Brief Therapy (SFBT)",
      "Mindfulness-Based & Trauma-Informed Therapy",
      "Gestalt Therapy",
      "Transactional Analysis",
      "Motivational Interviewing",
      "Family and Couple Therapy",
      "Supportive Psychotherapy",
      "Person-Centered & Integrative Psychotherapy",
    ],
    research: [
      "Published in Indian Journal of Surgical Oncology",
      "Published in International Journal of Psycho-Oncology",
      "Research Focus: Psychological Distress in Oncology, Palliative Care & Bereavement",
      "National & International Conference Presenter & Academic Trainer",
    ],
    languages: "Tamil / English / Hindi",
  },
  {
    name: "Mr. Gopalakrishnan D.S.",
    role: "Managing Head – Ulam Seyal Psychological Wellness & Psycho-Oncology Services",
    designation:
      "Medical & Psychiatric Social Work Professional | Senior Counsellor | Psychotherapist | Crisis Intervention Specialist",
    qualification:
      "Master of Social Work (MSW) in Medical & Psychiatric Social Work – University of Madras",
    award: "Best Employee Award – Social Welfare Department Recognition",
    experience: "10+ Years of Professional Experience",
    image: "/img/gopi_2.jpeg",
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
    <div className="about-page bg-[#fffdf9]">
      {/* Top Breadcrumb Header Area (Matches Our Mission hero) */}
      <section className="border-b border-[#dce6e0] bg-[#fbf8f2] py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Breadcrumb current="Our Founders" parent={{ label: "About Ulam Seyal", href: "/about" }} />
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-2">
            <div>
              <p className="eyebrow mb-2">ABOUT ULAM SEYAL</p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b3d30] tracking-tight">
                Our Founders
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#eaf4ef] px-3.5 py-1.5 rounded-full border border-[#d2e4da]">
                Clinical Leadership & Vision
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Statement Banner */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="bg-white border border-[#dce6e0] rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#eaf4ef] px-3.5 py-1.5 rounded-full border border-[#d2e4da] inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-[#0f4a3a] animate-pulse" />
                The People Behind Ulam Seyal
              </span>
              <span className="text-xs font-mono font-semibold text-[#52635c]">
                Ulam Seyal · Founded 2026
              </span>
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl md:text-[26px] text-[#0b3d30] leading-relaxed font-normal mb-8">
              &ldquo;Meet the visionary founders behind Ulam Seyal, uniting clinical excellence, compassionate listening, and evidence-informed mental health care.&rdquo;
            </blockquote>

            <div className="border-t border-[#dce6e0] pt-6 flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm font-semibold text-[#006d67] italic">
                Ulam Seyal — Healing Minds. Restoring Hope. Inspiring Change.
              </span>
              <span className="text-xs font-semibold text-[#52635c]">
                22+ Years of Combined Clinical Experience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Founder Profiles Section */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="space-y-12 md:space-y-16">
            {founders.map((founder, idx) => (
              <div
                key={founder.name}
                className="bg-white rounded-2xl border border-[#dce6e0] shadow-sm overflow-hidden p-6 md:p-10 transition-all hover:shadow-md"
              >
                <div className="grid gap-10 lg:grid-cols-[300px_1fr] items-start">
                  {/* Left: Founder Photo & Quick Details */}
                  <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
                    <div className="relative size-64 sm:size-72 rounded-2xl overflow-hidden border-2 border-[#dce6e0] shadow-sm bg-[#f7faf8]">
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
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eaf4ef] text-[#0f4a3a] font-bold border border-[#d2e4da] w-fit mx-auto lg:mx-0">
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
                          className="nav-cta w-full justify-center"
                          style={{
                            backgroundColor: "var(--color-yellow, #E9B12B)",
                            color: "var(--color-charcoal, #2E2E2A)",
                          }}
                        >
                          <CalendarDays size={16} />
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
                      <p className="text-xs text-[#526b66] mt-1 font-medium leading-relaxed">
                        {founder.designation}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {founder.qualification && (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f3f7f4] text-[#1b2722] text-xs font-semibold border border-[#e2ece6]">
                            <GraduationCap size={13} className="text-[#0f4a3a]" />
                            <span>{founder.qualification}</span>
                          </div>
                        )}
                        {founder.award && (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#fef8eb] text-[#8a5b00] text-xs font-semibold border border-[#fae2ab]">
                            <Award size={13} className="text-[#E9B12B]" />
                            <span>{founder.award}</span>
                          </div>
                        )}
                      </div>
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
                        <span>Areas of Clinical Focus</span>
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

                    {/* Research & Publications (if present) */}
                    {founder.research && (
                      <div className="pt-1">
                        <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0b3d30] mb-2.5 flex items-center gap-1.5">
                          <BookOpen size={14} className="text-[#0f4a3a]" />
                          <span>Research & Academic Contributions</span>
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {founder.research.map((item) => (
                            <span
                              key={item}
                              className="px-2.5 py-1 rounded-md bg-[#f4f7fa] text-[#1f3a52] text-xs font-medium border border-[#d6e2eb]"
                            >
                              {item}
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
      <section className="py-12 md:py-16 bg-[#fbf8f2] border-t border-[#dce6e0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <OrnamentTitle>Guiding Pillars</OrnamentTitle>
            <p className="eyebrow mt-3 mb-2">OUR COMMITMENT</p>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0b3d30]">
              Pillars Established by Our Founders
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#dce6e0] shadow-sm hover:shadow-md transition-shadow">
              <div className="size-12 rounded-xl bg-[#eaf4ef] text-[#0f4a3a] border border-[#d2e4da] flex items-center justify-center mb-5">
                <GraduationCap size={24} />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0b3d30] mb-2">
                Clinical Excellence
              </h4>
              <p className="text-xs sm:text-sm text-[#52635c] leading-relaxed">
                Combining extensive academic qualifications with ongoing evidence-based training to ensure the highest standards of mental healthcare.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#dce6e0] shadow-sm hover:shadow-md transition-shadow">
              <div className="size-12 rounded-xl bg-[#eaf4ef] text-[#0f4a3a] border border-[#d2e4da] flex items-center justify-center mb-5">
                <HeartHandshake size={24} />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0b3d30] mb-2">
                Compassionate Partnership
              </h4>
              <p className="text-xs sm:text-sm text-[#52635c] leading-relaxed">
                Viewing therapy as a collaborative, respectful journey that honors individual dignity, cultural context, and personal life experience.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#dce6e0] shadow-sm hover:shadow-md transition-shadow">
              <div className="size-12 rounded-xl bg-[#eaf4ef] text-[#0f4a3a] border border-[#d2e4da] flex items-center justify-center mb-5">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="font-serif text-lg font-bold text-[#0b3d30] mb-2">
                Ethical Integrity
              </h4>
              <p className="text-xs sm:text-sm text-[#52635c] leading-relaxed">
                Ensuring complete confidentiality, compassionate boundaries, and professional integrity across every consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support & Action Strip (Matching Home & Mission Page Aesthetic) */}
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
                    href="/counsellors"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 hover:text-white underline underline-offset-4"
                  >
                    <span>Meet All Consultants</span>
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
