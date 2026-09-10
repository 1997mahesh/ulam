import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, Globe2, Languages as LanguagesIcon, UserRound } from "lucide-react";
import { PageHero } from "@/components/inner";
import { Button, SectionTitle } from "@/components/ui";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Languages We Support | Ulam Seyal",
  description: "Explore multilingual psychological support at Ulam Seyal. Connect with therapists in English, Tamil, Hindi, and regional languages.",
};

export default async function LanguagesPage() {
  const counsellors = await prisma.counsellor.findMany({
    where: { isActive: true },
    orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
  });

  // Extract all unique languages
  const languageSet = new Set<string>();
  counsellors.forEach((c) => {
    c.languages.forEach((lang) => languageSet.add(lang));
  });
  const allLanguages = Array.from(languageSet);
  if (allLanguages.length === 0) {
    allLanguages.push("English", "Tamil", "Hindi");
  }

  return (
    <div className="about-page">
      <PageHero
        eyebrow="Multilingual Care"
        breadcrumb="Languages"
        breadcrumbParent={{ label: "Home", href: "/" }}
        title="Therapy in Your Preferred Language"
        text="Expressing emotions and vulnerabilities is easiest when speaking the language of your heart. Our team provides attentive consultations across multiple languages."
      />

      <section className="about-section">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <p className="eyebrow">Why Language Matters</p>
              <h2 className="text-3xl font-bold text-[#0b3d30] mb-5">
                The Comfort of Being Understood in Your Mother Tongue
              </h2>
              <p className="text-base text-[#4a5c56] leading-relaxed mb-4">
                Nuance, cultural idioms, and emotional depths are intimately tied to language. When you articulate grief, relationship concerns, or stress in a familiar tongue, you don&apos;t have to search for translations—you can just be yourself.
              </p>
              <p className="text-base text-[#4a5c56] leading-relaxed">
                At Ulam Seyal, our multilingual counsellors and psychotherapists are fluent in several languages, enabling culturally grounded, deeply empathetic conversations.
              </p>
            </div>
            <div className="bg-[#f5f9f6] p-8 rounded-2xl border border-[#dce8e1]">
              <div className="flex items-center gap-3 mb-5">
                <Globe2 className="text-[#0f4a3a]" size={28} />
                <h3 className="text-xl font-bold text-[#1b2722]">Supported Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {allLanguages.map((lang) => (
                  <span
                    key={lang}
                    className="px-4 py-2 bg-white text-[#0f4a3a] border border-[#d0dfd7] font-semibold text-sm rounded-lg shadow-xs"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <p className="text-xs text-[#64746e] mt-4">
                * Select your language preference during consultant selection or session booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section bg-[#f5f8f6] py-16">
        <div className="container">
          <SectionTitle eyebrow="Our Consultants" title="Find a therapist by language spoken." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {counsellors.map((c) => (
              <article key={c.id} className="card p-6 bg-white border border-[#e2ece6] rounded-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative size-16 rounded-full overflow-hidden bg-[#e8f0ec] shrink-0">
                      {c.photo ? (
                        <Image src={c.photo} alt={c.name} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#0f4a3a]">
                          <UserRound size={28} />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1b2722] text-lg leading-tight">{c.name}</h3>
                      <p className="text-xs text-[#52645f] mt-1">{c.designation}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0f4a3a] mb-2 flex items-center gap-1.5">
                      <LanguagesIcon size={14} /> Languages:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {c.languages.map((l) => (
                        <span key={l} className="text-xs px-2.5 py-1 bg-[#eef5f1] text-[#0f4a3a] font-medium rounded-md">
                          {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#eaf0ec] flex items-center justify-between">
                  <Link href={`/counsellors/${c.slug}`} className="text-xs font-bold text-[#0f4a3a] hover:underline">
                    View Profile ↗
                  </Link>
                  <Link
                    href={`/book-consultation?counsellor=${encodeURIComponent(c.slug)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#0f4a3a] text-white px-3 py-1.5 rounded-md"
                  >
                    <CalendarDays size={13} /> Book Slot
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-final">
        <div className="container">
          <div>
            <p className="eyebrow">Speak freely</p>
            <h2>Book a session in the language you feel most at ease with.</h2>
            <p>Our care team is here to assist you in connecting with the right consultant.</p>
          </div>
          <div className="about-final-actions">
            <Button href="/book-consultation">Book a Consultation</Button>
            <Link className="about-secondary" href="/contact">
              Contact Team <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
