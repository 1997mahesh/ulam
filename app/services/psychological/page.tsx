import Link from "next/link";
import { ArrowRight, Brain, CalendarDays } from "lucide-react";
import { Breadcrumb } from "@/components/ui";
import { ServiceCard } from "@/components/service-card";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Comprehensive Psychological Services | Ulam Seyal",
  description:
    "Evidence-informed psychological support for individuals, couples, and families navigating emotional, behavioral, and life challenges.",
};

const CATEGORY_NAME = "Comprehensive Psychological Services";

export default async function PsychologicalServicesPage() {
  const rows = await prisma.service.findMany({
    where: { category: CATEGORY_NAME, isActive: true },
    orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
  });

  return (
    <div className="bg-[#fffdf9] min-h-screen">
      {/* Header Section (Sample 1 Match) */}
      <section className="border-b border-[#dce6e0] bg-[#fbf8f2] py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <Breadcrumb
            current="Psychological Services"
            parent={{ label: "Services", href: "/services" }}
          />
          <div className="text-center max-w-4xl mx-auto mt-2">
            <p className="eyebrow mb-2">SERVICE CATEGORY</p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b3d30] tracking-tight mb-4">
              Comprehensive Psychological Services
            </h1>
            <p className="text-sm sm:text-base text-[#4a5c56] leading-relaxed max-w-3xl mx-auto">
              Compassionate, evidence-informed psychotherapy and counselling designed to help individuals, couples, and families understand their experiences, navigate distress, and build emotional resilience.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Column Service Grid (Sample 1 Match) */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {rows.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {rows.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="bg-[#fbfaf7] border border-[#e2ece6] rounded-2xl p-10 text-center max-w-xl mx-auto my-8">
              <Brain className="mx-auto size-12 text-[#0f4a3a] mb-4 opacity-70" />
              <h3 className="text-xl font-bold text-[#1b2722] mb-2">
                Services in this category
              </h3>
              <p className="text-sm text-[#4a5c56] mb-6">
                Our team provides dedicated clinical and psychological support. Book a consultation to speak with our senior counsellors.
              </p>
              <Link
                className="nav-cta inline-flex items-center gap-2"
                href="/book-consultation"
                style={{
                  backgroundColor: "var(--color-yellow, #E9B12B)",
                  color: "var(--color-charcoal, #2E2E2A)",
                }}
              >
                <CalendarDays size={16} />
                <span>Book a Consultation</span>
              </Link>
            </div>
          )}

          {/* Bottom Guidance & Assistance Strip */}
          <div className="mt-16 bg-white border border-[#dce6e0] rounded-2xl p-8 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="eyebrow mb-1">LOOKING FOR THE RIGHT COUNSELLOR?</p>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0b3d30] mb-2">
                Find support tailored to your unique situation.
              </h3>
              <p className="text-xs sm:text-sm text-[#52635c] max-w-2xl leading-relaxed">
                Connect with our certified clinical psychologists and psychotherapists for virtual sessions across India and abroad.
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
