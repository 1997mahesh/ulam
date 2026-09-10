import Link from "next/link";
import { Activity, Apple, ArrowRight, ArrowUpRight, Clock3, Sprout } from "lucide-react";
import { PageHero } from "@/components/inner";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Yoga, Physiotherapy & Nutrition Support | Ulam Seyal",
  description: "Integrative lifestyle and physical wellness support encompassing mind-body yoga, rehabilitation physiotherapy, and clinical nutrition.",
};

const CATEGORY_NAME = "Yoga, Physiotherapy & Nutrition Support";

function serviceIcon(slug: string) {
  if (slug.includes("nutrition") || slug.includes("diet")) return Apple;
  if (slug.includes("physio") || slug.includes("rehab")) return Activity;
  return Sprout;
}

export default async function YogaPhysioNutritionPage() {
  const rows = await prisma.service.findMany({
    where: { category: CATEGORY_NAME, isActive: true },
    orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
  });

  return (
    <>
      <PageHero
        eyebrow="Service Category"
        breadcrumb="Yoga & Nutrition"
        breadcrumbParent={{ label: "Services", href: "/services" }}
        title="Yoga, Physiotherapy & Nutrition Support"
        text="Holistic integrative care addressing the physical and nutritional dimensions of mental and emotional wellbeing."
      />
      <section className="services-page-section">
        <div className="container">
          <div className="services-page-intro">
            <div>
              <p className="eyebrow">Mind-Body Integration</p>
              <h2>Complementary Wellness Care</h2>
            </div>
            <p>
              True healing involves both mind and body. Our integrated services provide personalized dietary counseling, therapeutic restorative yoga, and physiotherapy support to enhance energy, reduce somatic tension, and bolster overall health.
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
              <Sprout className="mx-auto size-12 text-[#0f4a3a] mb-4 opacity-70" />
              <h3 className="text-xl font-bold text-[#1b2722] mb-2">Services in this category</h3>
              <p className="text-sm text-[#4a5c56] mb-6">
                Our integrative wellness practitioners are available for personalized consultations. Schedule an appointment to get started.
              </p>
              <Link className="nav-cta inline-flex" href="/book-consultation">
                Book a Consultation
              </Link>
            </div>
          )}

          <div className="services-guidance">
            <div>
              <p className="eyebrow">Holistic Wellbeing</p>
              <h2>Integrate Physical & Emotional Health</h2>
              <p>Discover how nutrition, mindful movement, and physical therapy work synergistically with psychological care.</p>
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
