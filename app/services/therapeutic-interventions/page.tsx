import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3, Sparkles, UserRound } from "lucide-react";
import { PageHero } from "@/components/inner";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Therapeutic Interventions | Ulam Seyal",
  description: "Evidence-based therapeutic modalities, psychological approaches, and structured intervention programs.",
};

const CATEGORY_NAME = "Therapeutic Interventions";

function serviceIcon(slug: string) {
  if (slug.includes("couple") || slug.includes("family")) return UserRound;
  return Sparkles;
}

export default async function TherapeuticInterventionsPage() {
  const rows = await prisma.service.findMany({
    where: { category: CATEGORY_NAME, isActive: true },
    orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
  });

  return (
    <>
      <PageHero
        eyebrow="Service Category"
        breadcrumb="Therapeutic Interventions"
        breadcrumbParent={{ label: "Services", href: "/services" }}
        title="Therapeutic Interventions"
        text="Structured, scientifically backed therapeutic modalities customized to help address specific psychological patterns, emotional regulation, and cognitive growth."
      />
      <section className="services-page-section">
        <div className="container">
          <div className="services-page-intro">
            <div>
              <p className="eyebrow">Modalities & Approaches</p>
              <h2>Targeted Clinical Interventions</h2>
            </div>
            <p>
              Our practitioners employ integrated modalities including Cognitive Behavioral Therapy (CBT), Acceptance and Commitment approaches, mindfulness-based stress reduction, and systemic family therapies.
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
              <Sparkles className="mx-auto size-12 text-[#0f4a3a] mb-4 opacity-70" />
              <h3 className="text-xl font-bold text-[#1b2722] mb-2">Services in this category</h3>
              <p className="text-sm text-[#4a5c56] mb-6">
                Our consultants utilize a wide array of evidence-based interventions. Book an initial consultation to formulate your tailored care plan.
              </p>
              <Link className="nav-cta inline-flex" href="/book-consultation">
                Book a Consultation
              </Link>
            </div>
          )}

          <div className="services-guidance">
            <div>
              <p className="eyebrow">Explore which therapy fits you best</p>
              <h2>Individualized Therapy Planning</h2>
              <p>Speak with our senior psychotherapists to identify the therapeutic approaches most aligned with your goals.</p>
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
