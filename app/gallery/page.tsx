import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/inner";
import { Button } from "@/components/ui";
import { prisma } from "@/lib/prisma";
import { GalleryClient } from "./gallery-client";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Gallery | Ulam Seyal",
  description: "Explore photos and videos from Ulam Seyal's clinic, workshops, awareness sessions, and mental healthcare media.",
};

export default async function GalleryPage() {
  const items = await prisma.galleryItem.findMany({
    where: { isActive: true },
    orderBy: [{ displayOrder: "asc" }, { createdAt: "desc" }],
  });

  return (
    <div className="about-page">
      <PageHero
        eyebrow="Media & Moments"
        breadcrumb="Gallery"
        breadcrumbParent={{ label: "Home", href: "/" }}
        title="Gallery & Media"
        text="A glimpse into our clinic environment, patient care initiatives, workshops, and educational videos."
      />

      <section className="about-section">
        <div className="container">
          <GalleryClient items={items} />
        </div>
      </section>

      <section className="about-final">
        <div className="container">
          <div>
            <p className="eyebrow">Connect With Us</p>
            <h2>Ready to experience thoughtful, compassionate care?</h2>
            <p>Schedule a consultation with our experienced team today.</p>
          </div>
          <div className="about-final-actions">
            <Button href="/book-consultation">Book a Consultation</Button>
            <Link className="about-secondary" href="/contact">
              Talk to Our Team <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
