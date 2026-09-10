import Link from "next/link";
import { ArrowRight, ArrowUpRight, Clock3, HeartHandshake, Ribbon, UsersRound } from "lucide-react";
import { PageHero } from "@/components/inner";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Comprehensive Psycho-Oncological Services | Ulam Seyal",
  description: "Specialized psychological and emotional care for cancer patients, survivors, families, and caregivers.",
};

const CATEGORY_NAME = "Comprehensive Psycho-Oncological Services";

function serviceIcon(slug: string) {
  if (slug.includes("couple") || slug.includes("family")) return UsersRound;
  if (slug.includes("oncology") || slug.includes("cancer")) return Ribbon;
  return HeartHandshake;
}

export default async function PsychoOncologicalServicesPage() {
  const rows = await prisma.service.findMany({
    where: { category: CATEGORY_NAME, isActive: true },
    orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
  });

  return (
    <>
      <PageHero
        eyebrow="Service Category"
        breadcrumb="Psycho-Oncological Services"
        breadcrumbParent={{ label: "Services", href: "/services" }}
        title="Comprehensive Psycho-Oncological Services"
        text="Specialized psychological accompaniment designed around the unique emotional, mental, and relational challenges of living with cancer, navigating treatment, and supporting loved ones."
      />
      <section className="services-page-section">
        <div className="container">
          <div className="services-page-intro">
            <div>
              <p className="eyebrow">Oncology Support</p>
              <h2>Emotional Care Alongside Medical Treatment</h2>
            </div>
            <p>
              A cancer diagnosis brings complex emotional hurdles for both patients and their families. Our psycho-oncology specialists provide gentle, evidence-based coping strategies, anxiety management, and ongoing survivorship support.
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
              <Ribbon className="mx-auto size-12 text-[#0f4a3a] mb-4 opacity-70" />
              <h3 className="text-xl font-bold text-[#1b2722] mb-2">Services in this category</h3>
              <p className="text-sm text-[#4a5c56] mb-6">
                Our team provides dedicated oncology-focused emotional support. Book a consultation to speak with our oncology counselling specialists.
              </p>
              <Link className="nav-cta inline-flex" href="/book-consultation">
                Book a Consultation
              </Link>
            </div>
          )}

          <div className="services-guidance">
            <div>
              <p className="eyebrow">Need guidance on oncology care?</p>
              <h2>We are here to walk alongside you.</h2>
              <p>Speak with our dedicated psycho-oncology consultants to understand how specialized counseling can support your healing journey.</p>
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
