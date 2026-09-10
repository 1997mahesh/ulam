import Link from "next/link";
import { ArrowRight, CalendarDays, ClipboardList, CreditCard, Mail, UserRound, Video } from "lucide-react";
import { PageHero } from "@/components/inner";
import { Button, SectionTitle } from "@/components/ui";

export const metadata = {
  title: "How to Book a Slot | Ulam Seyal",
  description: "Step-by-step guide on how to book a confidential psychological or psycho-oncology consultation at Ulam Seyal.",
};

const bookingSteps = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Select Your Service",
    text: "Browse our psychological, psycho-oncology, or integrative services and choose the option that aligns with your current needs.",
  },
  {
    step: 2,
    icon: UserRound,
    title: "Choose a Consultant",
    text: "View profiles of our senior psychotherapists and consultants, their qualifications, specializations, and languages spoken.",
  },
  {
    step: 3,
    icon: CalendarDays,
    title: "Pick Date & Time Slot",
    text: "Select a convenient date and time from the live availability calendar that fits your schedule.",
  },
  {
    step: 4,
    icon: CreditCard,
    title: "Secure Verification / Payment",
    text: "Complete the easy online booking process securely through our verified portal with clear confirmation instructions.",
  },
  {
    step: 5,
    icon: Mail,
    title: "Instant Confirmation",
    text: "Receive an immediate booking confirmation via email with appointment details and your private meeting link.",
  },
  {
    step: 6,
    icon: Video,
    title: "Attend Your Session",
    text: "Join your confidential one-on-one session at the scheduled time from the comfort of your private space.",
  },
];

const faqs = [
  {
    q: "Can I reschedule my appointment?",
    a: "Yes, you can request a reschedule prior to your session time by contacting our care team or through your booking reference.",
  },
  {
    q: "Are my booking details confidential?",
    a: "Absolutely. All personal information and consultation records are handled under strict ethical and confidentiality standards.",
  },
  {
    q: "Can I choose my preferred language?",
    a: "Yes, our consultants speak multiple languages including English, Tamil, Hindi, and regional languages. You can view each consultant's languages during selection.",
  },
];

export default function HowToBookPage() {
  return (
    <div className="about-page">
      <PageHero
        eyebrow="How It Works"
        breadcrumb="How to Book"
        breadcrumbParent={{ label: "Home", href: "/" }}
        title="How to Book a Slot"
        text="A transparent, hassle-free step-by-step process to connect you with our mental health consultants."
      />

      <section className="about-section">
        <div className="container">
          <SectionTitle eyebrow="Simple Steps" title="Your path to a confidential consultation." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {bookingSteps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="card p-8 bg-[#fbfaf7] border border-[#e6eee9] rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-12 rounded-lg bg-[#0f4a3a] text-white flex items-center justify-center font-bold text-lg">
                        {item.step}
                      </div>
                      <Icon className="text-[#0f4a3a] opacity-80" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#1b2722] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#4a5c56] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-section bg-[#f5f8f6] py-16">
        <div className="container max-w-4xl">
          <SectionTitle eyebrow="Frequently Asked Questions" title="Questions about booking a slot." />
          <div className="space-y-4 mt-8">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white p-6 rounded-xl border border-[#e2ece6]">
                <h3 className="text-base font-bold text-[#1b2722] mb-2">{f.q}</h3>
                <p className="text-sm text-[#4a5c56] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-final">
        <div className="container">
          <div>
            <p className="eyebrow">Ready to start?</p>
            <h2>Book your confidential session online.</h2>
            <p>Select your preferred slot and consultant in just a few minutes.</p>
          </div>
          <div className="about-final-actions">
            <Button href="/book-consultation">Book a Consultation</Button>
            <Link className="about-secondary" href="/counsellors">
              View Consultants <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
