"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  FileQuestion,
  Heart,
  HelpCircle,
  Mail,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
  Video,
} from "lucide-react";
import { Breadcrumb, Button } from "@/components/ui";

interface FAQItem {
  number: string;
  question: string;
  answer: string;
  note?: string;
  safetyAlert?: string;
}

interface FAQSection {
  part: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  description: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    part: "PART 1",
    category: "General Psychological Therapy & First Sessions",
    icon: Users,
    description: "Guidance on intake consultations, session dynamics, and what to expect.",
    items: [
      {
        number: "01",
        question: "What happens during my first session, and why do you meet with me directly first?",
        answer:
          "Your initial session is an intake consultation designed to understand your current concerns, background, and personal goals in a respectful, non-judgmental space. There is no pressure to share more than you feel ready to discuss. We meet with you directly rather than family members or third parties to establish direct trust, hear your personal perspective, protect privacy, and ensure your voice remains central to your care plan.",
        note: "Note for Minors: For children and adolescents, parental/guardian involvement, consent, assent, and safeguarding protocols are carefully coordinated alongside the young person's care.",
      },
      {
        number: "02",
        question: "What can I expect during ongoing sessions, and what is my role in therapy?",
        answer:
          "Each session is a collaborative partnership guided by your goals. Therapy is dynamic—it goes beyond just 'venting' or receiving passive advice. Your therapist helps provide structure to explore thoughts, emotions, behaviors, and relationship dynamics. Your role involves showing up openly, reflecting on experiences, and actively practicing strategies and insights in your day-to-day life between sessions.",
      },
      {
        number: "03",
        question: "Do I need a diagnosed mental illness or a clearly defined problem to start therapy?",
        answer:
          "No. Seeking psychological support does not indicate the presence of a mental illness. Many clients engage in therapy for everyday stressors, grief, relationship difficulties, workplace burnout, major life transitions, or personal growth. You do not need a specific diagnosis; if you simply feel 'stuck' or overwhelmed, therapy provides a dedicated space to untangle your feelings and gain clarity.",
      },
      {
        number: "04",
        question: "How long does therapy take, and how will I know if it is actually working?",
        answer:
          "Duration varies based on individual needs—ranging from short-term, solution-focused support (a few weeks to months) to longer-term therapy for deeper self-exploration or chronic life stressors. Signs of progress include heightened self-awareness, improved emotional regulation, healthier communication, and a stronger ability to navigate challenges. We regularly review goals together to ensure sessions remain meaningful and effective.",
      },
      {
        number: "05",
        question: "Is everything discussed confidential, and can family members speak to my therapist?",
        answer:
          "Yes. Confidentiality is fundamental to our therapeutic relationship. What you share remains strictly private, subject to standard ethical and legal limits (such as immediate risk of harm to yourself or others, or mandated reporting requirements). For adult clients, information is not shared with family members without explicit consent. If family involvement is clinically beneficial, it is discussed and agreed upon with you beforehand.",
      },
      {
        number: "06",
        question: "What if I feel anxious, nervous, or worried about being judged?",
        answer:
          "Feeling nervous before starting therapy is entirely normal. Opening up to someone new can feel intimidating. Our psychologists are committed to providing a professional, compassionate, and non-judgmental environment. Your therapist will move at your pace, ensuring you feel grounded, respected, and in complete control of what you choose to share.",
      },
    ],
  },
  {
    part: "PART 2",
    category: "Psycho-Oncology, Caregiver Support & End-of-Life Care",
    icon: Heart,
    description: "Support for cancer patients, survivors, families, caregivers, and grief processing.",
    items: [
      {
        number: "07",
        question: "What is psycho-oncology, and how does it support individuals navigating cancer?",
        answer:
          "Psycho-oncology addresses the emotional, behavioral, and social challenges of a cancer diagnosis. It helps individuals process shock and anxiety, manage distress, improve communication with medical teams, and maintain quality of life across all stages of diagnosis and treatment.",
      },
      {
        number: "08",
        question: "How does therapy support caregivers, and can family sessions be arranged?",
        answer:
          "Caring for a loved one with chronic or life-limiting illness can cause significant physical and emotional strain. Caregiver support offers a space to manage burnout, chronic stress, role changes, and caregiver guilt, while establishing healthy coping mechanisms. Additionally, family sessions can be arranged to facilitate open communication, align expectations, resolve relationship strain, and help family members support each other through major health transitions.",
      },
      {
        number: "09",
        question: "What support is available for palliative care, end-of-life care, and bereavement?",
        answer:
          "Palliative and end-of-life psychological care focuses on comfort, dignity, emotional relief, and quality of life, supporting individuals and families through advanced illness, functional changes, and anticipatory grief alongside palliative medical teams. Bereavement support provides a compassionate space after loss. Counselling does not rush grief, but helps process painful emotions, honor memories, adapt to life changes, and rebuild a sense of meaning at your own pace.",
      },
    ],
  },
  {
    part: "PART 3",
    category: "Medical Boundaries & Integrated Referral Pathways",
    icon: Stethoscope,
    description: "Our collaborative multidisciplinary approach and critical emergency protocols.",
    items: [
      {
        number: "10",
        question: "Can Ulam Seyal replace my oncologist, palliative-care doctor, or medical team?",
        answer:
          "No. Psycho-oncology and psychological services complement medical and cancer care; they do not replace oncologists, palliative medicine specialists, surgical oncologists, radiation oncologists, physicians, chemotherapy, radiotherapy, or other medical treatment. Ulam Seyal does not provide medical oncology opinions or diagnostic assessments. Psychological support works alongside your existing healthcare providers to care for your emotional and mental well-being.",
      },
      {
        number: "11",
        question: "Does Ulam Seyal have a referral pathway for oncology, psychiatry, and other specialist care?",
        answer:
          "Yes. Ulam Seyal follows a referral-oriented and multidisciplinary approach when additional medical or specialist care is required. Psychologists generally do not prescribe psychiatric medication unless holding separate medical qualifications. Depending on your clinical needs, we facilitate referrals to medical, surgical, or radiation oncologists, psychiatrists, palliative-care specialists, and physicians. With appropriate client consent, we coordinate with your treating team to ensure psychological care is integrated with broader medical treatment.",
      },
      {
        number: "12",
        question: "Is psychological counselling a substitute for emergency medical or psychiatric care?",
        answer:
          "No. Psychological counselling is not an emergency service and cannot replace immediate medical or psychiatric intervention.",
        safetyAlert:
          "CRITICAL SAFETY NOTICE: If you or someone else is at immediate risk of suicide, self-harm, serious harm, or experiencing a severe medical/mental health crisis, urgent local emergency medical assistance or emergency department care should be sought immediately without waiting for a scheduled session.",
      },
    ],
  },
  {
    part: "PART 4",
    category: "Online Consultations & Digital Care Guidelines",
    icon: Video,
    description: "Privacy, connectivity setup, geographical rules, and emergency response.",
    items: [
      {
        number: "13",
        question: "Is online psychological or psycho-oncology consultation suitable for everyone and every location?",
        answer:
          "Not always. While online consultations are convenient for many, suitability depends on presenting concerns, clinical severity, safety considerations, communication needs, and technical privacy setup. Furthermore, online care is subject to legal and jurisdictional rules. Clients may be asked for their physical location during sessions to confirm service eligibility and for emergency safety planning. If online care is not clinically appropriate, in-person assessment or external referral will be recommended.",
      },
      {
        number: "14",
        question: "How are privacy and emergency situations managed during online sessions?",
        answer:
          "Ulam Seyal employs secure digital tools and strict protocols to protect client privacy. Clients are encouraged to connect from a private, quiet space rather than a public environment. If an emergency arises during an online consultation, standard online care protocols dictate that urgent local emergency resources must be contacted immediately, as virtual sessions cannot substitute for emergency response teams.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "01": true,
    "07": true,
    "10": true,
    "13": true,
  });

  const toggleItem = (num: string) => {
    setOpenItems((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  return (
    <div className="bg-[#fbf8f2] min-h-screen">
      {/* Editorial Hero */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 border-b border-[#e2ece6] bg-[#f8f6f0]">
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-80"
          style={{
            background: `
              radial-gradient(circle at 10% 85%, rgba(233, 177, 43, 0.22) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(0, 109, 103, 0.10) 0%, transparent 50%),
              radial-gradient(circle at 95% 90%, rgba(168, 180, 154, 0.25) 0%, transparent 45%)
            `,
          }}
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Breadcrumb current="FAQs" parent={{ label: "Patient Care", href: "/about" }} />
            <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#e7f1ec] px-3.5 py-1 rounded-full border border-[#d2e4da]">
              CARE GUIDE
            </span>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#0f4a3a] font-bold leading-tight mb-5">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-[#334b43] leading-relaxed">
              Complete guidelines covering therapy sessions, psycho-oncology, caregiver & family support, palliative and end-of-life care, medical referral pathways, and online consultations.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Categorized Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-16">
          {faqSections.map((sec) => {
            const Icon = sec.icon;
            return (
              <div key={sec.part} className="space-y-6">
                {/* Section Header */}
                <div className="border-b border-[#d8e6df] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="size-11 rounded-xl bg-[#0f4a3a] text-white flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0f4a3a]">
                        {sec.part}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#1b2722]">
                        {sec.category}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* FAQ Accordion Cards */}
                <div className="space-y-4">
                  {sec.items.map((item) => {
                    const isOpen = !!openItems[item.number];
                    return (
                      <article
                        key={item.number}
                        className="bg-white rounded-2xl border border-[#e2ece6] overflow-hidden shadow-sm transition-all hover:border-[#cfdfd6]"
                      >
                        <button
                          type="button"
                          onClick={() => toggleItem(item.number)}
                          aria-expanded={isOpen}
                          className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 cursor-pointer hover:bg-[#fafcfb] transition-colors"
                        >
                          <div className="flex items-start gap-3.5">
                            <span className="text-sm font-mono font-bold text-[#0f4a3a] bg-[#eaf4ef] px-2.5 py-1 rounded-md shrink-0 mt-0.5">
                              {item.number}
                            </span>
                            <h3 className="text-base sm:text-lg font-bold text-[#1b2722] leading-snug">
                              {item.question}
                            </h3>
                          </div>
                          <ChevronDown
                            size={20}
                            className={`shrink-0 text-[#0f4a3a] transition-transform duration-200 mt-1 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-6 pb-7 sm:px-7 pt-1 border-t border-[#f0f4f2] text-sm sm:text-base text-[#384c46] leading-relaxed space-y-4">
                            <p>{item.answer}</p>

                            {item.note && (
                              <div className="p-4 rounded-xl bg-[#f5f8f6] border border-[#e2ece6] text-xs sm:text-sm text-[#2b443d] font-medium">
                                {item.note}
                              </div>
                            )}

                            {item.safetyAlert && (
                              <div className="p-5 rounded-xl bg-[#fff5f5] border border-[#fed7d7] text-xs sm:text-sm text-[#9b2c2c] font-semibold flex items-start gap-3">
                                <AlertTriangle size={18} className="text-[#c53030] shrink-0 mt-0.5" />
                                <div>{item.safetyAlert}</div>
                              </div>
                            )}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Need More Assistance Panel */}
          <div className="mt-16 bg-[#eaf2ee] border border-[#cfe0d6] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#0f4a3a] mb-2">
                Have specific questions about beginning your care?
              </h3>
              <p className="text-sm text-[#4a5c56]">
                Our dedicated support team is here to guide you with complete confidentiality and care.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Button href="/book-consultation">Book a Consultation</Button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#0f4a3a] border border-[#cfe0d6] text-xs font-bold hover:bg-[#f5f8f6] transition-all shadow-sm"
              >
                <HelpCircle size={15} />
                <span>Contact Our Team</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
