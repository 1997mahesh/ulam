import Link from "next/link";
import { ArrowRight, CalendarDays, Layers } from "lucide-react";
import { Breadcrumb } from "@/components/ui";
import { ServiceCard } from "@/components/service-card";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Our Services | Ulam Seyal Comprehensive Mental Health & Psycho-Oncology",
  description:
    "Explore comprehensive psychological, psycho-oncological, and integrative wellness services at Ulam Seyal.",
};

const CATEGORIES = [
  {
    title: "Comprehensive Psychological Services",
    subtitle: "Individual, relationship, and family emotional wellbeing.",
    href: "/services/psychological",
  },
  {
    title: "Comprehensive Psycho-Oncological Services",
    subtitle: "Specialized emotional care across all stages of the cancer journey.",
    href: "/services/psycho-oncological",
  },
  {
    title: "Therapeutic Interventions",
    subtitle: "Evidence-based modalities including CBT, REBT, SFBT, and Mindfulness.",
    href: "/services/therapeutic-interventions",
  },
  {
    title: "Yoga, Physiotherapy & Nutrition Support",
    subtitle: "Holistic mind-body rehabilitation, somatic balance, and diet counseling.",
    href: "/services/yoga-physiotherapy-nutrition",
  },
];

export default async function ServicesPage() {
  const allServices = await prisma.service.findMany({
    where: { isActive: true },
    orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
  });

  return (
    <div className="bg-[#fffdf9] min-h-screen">
      {/* Header Section (Sample 1 Match) */}
      <section className="border-b border-[#dce6e0] bg-[#fbf8f2] py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Breadcrumb current="Our Services" />
          <div className="text-center max-w-4xl mx-auto mt-2">
            <p className="eyebrow mb-2">CARE DOMAINS & SPECIALIZATIONS</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b3d30] tracking-tight mb-4">
              Comprehensive Services & Clinical Care
            </h1>
            <p className="text-sm sm:text-base text-[#4a5c56] leading-relaxed max-w-3xl mx-auto">
              Compassionate, evidence-informed psychological support, specialized psycho-oncology care, and integrative wellness therapies designed around your unique life circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Main Categories & Services */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl space-y-16">
          {CATEGORIES.map((cat) => {
            const categoryServices = allServices.filter(
              (s) => s.category?.toLowerCase() === cat.title.toLowerCase()
            );
            const servicesToRender =
              categoryServices.length > 0
                ? categoryServices
                : allServices.filter((s) => !s.category);

            if (categoryServices.length === 0 && cat.title !== CATEGORIES[0].title) {
              return null;
            }

            return (
              <div key={cat.title} className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#e2ece6] pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#E9B12B] block mb-1">
                      Service Category
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0b3d30]">
                      {cat.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#52635c] mt-1">
                      {cat.subtitle}
                    </p>
                  </div>
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f4a3a] hover:underline shrink-0"
                  >
                    <span>Explore Category</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>

                {/* 4-Column Card Grid (Sample 1 Match) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {servicesToRender.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            );
          })}

          {/* Bottom Guidance Banner */}
          <div className="bg-white border border-[#dce6e0] rounded-2xl p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="eyebrow mb-1">NOT SURE WHICH SERVICE TO CHOOSE?</p>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0b3d30] mb-2">
                Let&apos;s find a thoughtful next step together.
              </h3>
              <p className="text-xs sm:text-sm text-[#52635c] max-w-2xl leading-relaxed">
                Tell us a little about what you are going through, and our intake team will guide you to the appropriate specialist and service.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/book-consultation"
                className="nav-cta"
                style={{
                  backgroundColor: "var(--color-yellow, #E9B12B)",
                  color: "var(--color-charcoal, #2E2E2A)",
                }}
              >
                <CalendarDays size={16} />
                <span>Book a Consultation</span>
              </Link>
              <Link
                href="/counsellors"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#0f4a3a] hover:underline px-3 py-2"
              >
                <span>Meet All Consultants</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
