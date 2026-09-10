import Link from "next/link";
import { ArrowRight, CheckCircle2, Lock, Monitor, Sparkles } from "lucide-react";
import { PageHero } from "@/components/inner";
import { Button, SectionTitle } from "@/components/ui";

export const metadata = {
  title: "How Online & Virtual Sessions Work | Ulam Seyal",
  description: "Learn how private, secure online video consultations work, technical requirements, and how to prepare for your session.",
};

const virtualBenefits = [
  {
    title: "End-to-End Privacy",
    desc: "All virtual sessions take place over encrypted, secure video links. No sessions are ever recorded, ensuring 100% confidentiality.",
    icon: Lock,
  },
  {
    title: "Comfort of Your Home",
    desc: "Engage in meaningful therapy from your private sanctuary, eliminating travel time and allowing you to feel relaxed in your own space.",
    icon: Monitor,
  },
  {
    title: "Continuity of Care",
    desc: "Stay connected with your chosen psychologist even while traveling, relocating, or managing busy work and family commitments.",
    icon: Sparkles,
  },
];

const preparationTips = [
  "Find a quiet, private room where you can speak freely without interruptions.",
  "Use a reliable device (laptop, tablet, or smartphone) with a functioning camera and microphone.",
  "Ensure a stable internet connection for smooth video and clear audio quality.",
  "Consider using headphones or earphones for enhanced privacy and audio clarity.",
  "Join 2–3 minutes early to test your setup and settle into a calm headspace.",
];

export default function OnlineVirtualSessionsPage() {
  return (
    <div className="about-page">
      <PageHero
        eyebrow="How It Works"
        breadcrumb="Online Sessions"
        breadcrumbParent={{ label: "Home", href: "/" }}
        title="How Online & Virtual Sessions Work"
        text="Private, secure, and compassionate psychological consultations from anywhere you feel comfortable."
      />

      <section className="about-section">
        <div className="container">
          <SectionTitle eyebrow="Seamless Care" title="Therapy designed for flexibility and privacy." />
          <div className="grid gap-8 md:grid-cols-3 mt-10">
            {virtualBenefits.map((item) => {
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

      <section className="about-section bg-[#f5f8f6] py-16">
        <div className="container expect-panel">
          <div>
            <p className="eyebrow">Preparing for your session</p>
            <h2>Tips for a Smooth Experience</h2>
            <p>
              A few simple preparations can help make your online session comfortable, focused, and productive.
            </p>
            <Button href="/book-consultation">Book an Online Slot</Button>
          </div>
          <div className="expect-list">
            {preparationTips.map((tip) => (
              <p key={tip}>
                <CheckCircle2 />
                {tip}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="about-final">
        <div className="container">
          <div>
            <p className="eyebrow">Begin Your Care</p>
            <h2>Schedule your private virtual consultation today.</h2>
            <p>Connect with a compassionate mental health professional from anywhere.</p>
          </div>
          <div className="about-final-actions">
            <Button href="/book-consultation">Book a Consultation</Button>
            <Link className="about-secondary" href="/contact">
              Ask a Question <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
