import Link from "next/link";
import { ArrowRight, ArrowUpRight, Brain, Clock3, HandHeart, HeartHandshake, Ribbon, UsersRound } from "lucide-react";
import { PageHero } from "@/components/inner";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Comprehensive Psychological Services | Ulam Seyal",
  description: "Evidence-informed psychological support for individuals, couples, and families navigating emotional, behavioral, and life challenges.",
};

const CATEGORY_NAME = "Comprehensive Psychological Services";

function serviceIcon(slug: string) {
  if (slug.includes("couple") || slug.includes("family")) return UsersRound;
  if (slug.includes("oncology") || slug.includes("cancer")) return Ribbon;
  if (slug.includes("individual")) return Brain;
  if (slug.includes("child") || slug.includes("adolescent")) return HandHeart;
  return HeartHandshake;
}

export default async function PsychologicalServicesPage() {
  const rows = await prisma.service.findMany({
    where: { category: CATEGORY_NAME, isActive: true },
    orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
  });

  return (
    <>
      <PageHero
        eyebrow="Service Category"
        breadcrumb="Psychological Services"
        breadcrumbParent={{ label: "Services", href: "/services" }}
        title="Comprehensive Psychological Services"
        text="Compassionate, evidence-informed psychotherapy and counselling designed to help individuals, couples, and families understand their experiences and build emotional resilience."
      />
      <section className="services-page-section">
        <div className="container">
          <div className="services-page-intro">
            <div>
              <p className="eyebrow">Category Overview</p>
              <h2>Specialized Psychological Care</h2>
            </div>
            <p>
              From personal emotional wellbeing and anxiety to relationship dynamics and family communication, explore our psychological services tailored to your individual needs.
            </p>
          </div>

          {rows.length > 0 ? (
            <div className="services-page-grid">
              {rows.map((service, index) => {
                const Icon = serviceIcon(service.slug);
                return (
                  <Link className="service-page-card" href={`/services/${service.slug}`} key={service.id}>
                    <div className="service-card-top">
                      <span className="service-card-icon">
                        <Icon />
                      </span>
                      <span className="service-card-number">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="service-duration">
                      <Clock3 />
                      {service.durationMinutes} minutes
                    </p>
                    <h2>{service.name}</h2>
                    <p className="service-description">{service.shortDescription}</p>
                    <span className="service-explore">
                      Explore service <ArrowUpRight />
                    </span>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="bg-[#fbfaf7] border border-[#e2ece6] rounded-xl p-10 text-center max-w-xl mx-auto my-8">
              <Brain className="mx-auto size-12 text-[#0f4a3a] mb-4 opacity-70" />
              <h3 className="text-xl font-bold text-[#1b2722] mb-2">Services in this category</h3>
              <p className="text-sm text-[#4a5c56] mb-6">
                Our team offers comprehensive psychological care. Schedule a general consultation and we will match you with the appropriate specialist.
              </p>
              <Link className="nav-cta inline-flex" href="/book-consultation">
                Book a Consultation
              </Link>
            </div>
          )}

          <div className="services-guidance">
            <div>
              <p className="eyebrow">Not sure which service is right?</p>
              <h2>Let&apos;s find a thoughtful next step together.</h2>
              <p>Tell us a little about what you are experiencing and our care team can help guide you towards an appropriate consultation.</p>
            </div>
            <Link href="/book-consultation">
              Book a Consultation <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
