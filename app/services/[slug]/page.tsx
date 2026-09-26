import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  Clock3,
  HelpCircle,
  IndianRupee,
  Monitor,
  UserRound,
} from "lucide-react";
import { Breadcrumb } from "@/components/ui";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await prisma.service.findFirst({
    where: { slug, isActive: true },
  });
  if (!item) return { title: "Service Not Found" };
  return {
    title: `${item.name} | Ulam Seyal`,
    description:
      item.shortDescription ||
      `Professional ${item.name} services at Ulam Seyal. Confidential and evidence-informed psychological care.`,
  };
}

function renderServiceDescription(
  rawDesc?: string | null,
  shortDesc?: string | null
) {
  const content =
    rawDesc?.trim() ||
    shortDesc?.trim() ||
    "Compassionate, confidential care tailored to your individual needs.";

  // Check if content contains HTML tags (e.g. <p>, <strong>, <b>, <ul>, etc.)
  const hasHtml = /<[a-z][\s\S]*>/i.test(content);
  if (hasHtml) {
    return (
      <div
        className="service-prose space-y-4 text-sm sm:text-base text-[#334b43] leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Plain text fallback: split by paragraphs and auto-bold key prefixes
  const paragraphs = content.split(/\n+/).filter(Boolean);

  return (
    <div className="space-y-4 text-sm sm:text-base text-[#334b43] leading-relaxed">
      {paragraphs.map((para, idx) => {
        const trimmed = para.trim();
        const ideaMatch = trimmed.match(/^(?:1\.\s*)?The Idea\s*:\s*([\s\S]*)$/i);
        const feelsMatch = trimmed.match(
          /^(?:2\.\s*)?What it feels like\s*:\s*([\s\S]*)$/i
        );

        if (ideaMatch) {
          return (
            <p key={idx}>
              <strong className="font-bold text-[#0b3d30]">The Idea:</strong>{" "}
              {ideaMatch[1]}
            </p>
          );
        }

        if (feelsMatch) {
          return (
            <p key={idx}>
              <strong className="font-bold text-[#0b3d30]">
                What it feels like:
              </strong>{" "}
              {feelsMatch[1]}
            </p>
          );
        }

        return <p key={idx}>{trimmed}</p>;
      })}
    </div>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const item = await prisma.service.findFirst({
    where: { slug, isActive: true },
    include: {
      Counsellors: {
        where: { counsellor: { isActive: true } },
        include: { counsellor: true },
        orderBy: { counsellor: { displayOrder: "asc" } },
      },
    },
  });

  if (!item) notFound();

  const providers = item.Counsellors.map((link) => link.counsellor);
  const basePrice = item.price ? Number(item.price) : 1699;

  // Thematic fallback image
  const serviceImage = item.image || "/img/hero-counselling-v2.png";

  return (
    <div className="bg-[#fffdf9] min-h-screen">
      {/* Top Header & Breadcrumb Area */}
      <section className="border-b border-[#dce6e0] bg-[#fbf8f2] py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <Breadcrumb
            current={item.name}
            parent={
              item.category
                ? {
                    label: item.category,
                    href:
                      item.category.includes("Oncol")
                        ? "/services/psycho-oncological"
                        : item.category.includes("Psychological")
                        ? "/services/psychological"
                        : item.category.includes("Therapeutic")
                        ? "/services/therapeutic-interventions"
                        : "/services/yoga-physiotherapy-nutrition",
                  }
                : { label: "Services", href: "/services" }
            }
          />

          {/* Centered Title & Tagline */}
          <div className="text-center max-w-4xl mx-auto mt-2">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b3d30] tracking-tight mb-3">
              {item.name}
            </h1>
            {item.shortDescription && (
              <p className="text-sm sm:text-base text-[#4a5c56] leading-relaxed max-w-2xl mx-auto">
                {item.shortDescription}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main 2-Column Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-[#dce6e0] bg-[#f7faf8]">
                <Image
                  src={serviceImage}
                  alt={item.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                />
              </div>

              {/* Quick Key Facts below image */}
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-[#4a5c56]">
                <div className="p-3 bg-white rounded-xl border border-[#e2ece6] flex items-center gap-2">
                  <Clock3 size={16} className="text-[#0f4a3a]" />
                  <span>
                    <strong>{item.durationMinutes} Mins</strong> / Session
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#e2ece6] flex items-center gap-2">
                  <Monitor size={16} className="text-[#0f4a3a]" />
                  <span>
                    <strong>Online / Virtual</strong> Care
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Flowing Description Text & Mode */}
            <div className="lg:col-span-7 space-y-5">
              {renderServiceDescription(item.description, item.shortDescription)}

              {/* Mode of Counselling Highlight */}
              <div className="pt-2">
                <p className="text-sm sm:text-base font-bold text-[#0b3d30]">
                  Mode of Counselling:{" "}
                  <span className="font-normal text-[#4a5c56]">
                    Both In-Person / Online Counselling (Secure Video &amp; Audio)
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Centered Large Booking Button */}
          <div className="my-12 text-center">
            <Link
              href={`/book-consultation?service=${encodeURIComponent(item.slug)}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold tracking-wider shadow-md hover:brightness-95 transition-all text-[#2E2E2A]"
              style={{
                backgroundColor: "var(--color-yellow, #E9B12B)",
              }}
            >
              <CalendarDays size={18} />
              <span>BOOK FOR 1-ON-1 COUNSELLING RIGHT AWAY &amp; PAY</span>
            </Link>
          </div>

          {/* Bottom 2-Column Fee & FAQ Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-10 border-t border-[#dce6e0]">
            {/* Left Column: Fee & Session Packages */}
            <div className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#dce6e0] shadow-xs">
              <div className="flex items-center gap-3">
                <span className="size-10 rounded-xl bg-[#fef8eb] text-[#8a5b00] border border-[#fae2ab] flex items-center justify-center shrink-0">
                  <IndianRupee size={20} className="text-[#E9B12B]" />
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0b3d30]">
                  Fee:
                </h2>
              </div>

              <div className="space-y-2 text-sm sm:text-base text-[#334b43] pt-1">
                <p>
                  <strong>50-minute session:</strong> Starting from ₹{basePrice.toLocaleString("en-IN")}/-
                </p>
                <p>
                  <strong>100-minute session:</strong> Starting from ₹3,200/-
                </p>
                <p>
                  <strong>150-minute session:</strong> Starting from ₹4,600/-
                </p>
              </div>

              <div className="pt-3 border-t border-[#edf3ef]">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#0b3d30] mb-2">
                  Session Packages:
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-[#4a5c56]">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#0f4a3a]" />
                    <span>
                      <strong>For 2 Session Package</strong> – ₹200 Discount
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#0f4a3a]" />
                    <span>
                      <strong>For 3 Session Package</strong> – ₹300 Discount
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#0f4a3a]" />
                    <span>
                      <strong>For 5 Session Package</strong> – ₹600 Discount
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: FAQ / Guidelines */}
            <div className="space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-[#dce6e0] shadow-xs">
              <div className="flex items-center gap-3">
                <span className="size-10 rounded-xl bg-[#fef8eb] text-[#8a5b00] border border-[#fae2ab] flex items-center justify-center shrink-0">
                  <HelpCircle size={20} className="text-[#E9B12B]" />
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0b3d30]">
                  FAQ
                </h2>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-[#4a5c56] leading-relaxed pt-1">
                <p>
                  Please read the{" "}
                  <Link href="/faqs" className="text-[#0f4a3a] font-bold underline">
                    Frequently Asked Questions
                  </Link>{" "}
                  section before booking an appointment.
                </p>
                <p>
                  <strong>Cancellation &amp; Policy:</strong> No refund is possible once the appointment slot is confirmed. Please ensure your/client&apos;s availability &amp; willingness before paying the fee. It cannot be rescheduled at short notice.
                </p>
                <p>
                  <strong>Confidentiality &amp; Punctuality:</strong> Only the client&apos;s agenda will be taken, and the client will be met first in a private, confidential setting. If the client is not in the session within 20 minutes from the scheduled appointment time, the session will be marked completed.
                </p>
              </div>
            </div>
          </div>

          {/* Assigned Counsellors for this Service */}
          {providers.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[#dce6e0]">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E9B12B] block mb-1">
                  Available Practitioners
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0b3d30]">
                  Meet the Mental Health Consultants for this Service
                </h2>
                <p className="text-xs sm:text-sm text-[#52635c] mt-1">
                  Explore consultant backgrounds and select a professional who feels right for your care journey.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {providers.map((c) => (
                  <article
                    key={c.id}
                    className="bg-white border border-[#dce6e0] rounded-2xl p-6 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative size-16 rounded-full overflow-hidden bg-[#e8f0ec] shrink-0 border border-[#dce6e0]">
                          {c.photo ? (
                            <Image
                              src={c.photo}
                              alt={c.name}
                              fill
                              sizes="64px"
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[#0f4a3a]">
                              <UserRound size={28} />
                            </div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1b2722] text-lg leading-tight">
                            {c.name}
                          </h3>
                          <p className="text-xs text-[#52645f] mt-1">
                            {c.designation}
                          </p>
                        </div>
                      </div>

                      {c.qualifications && (
                        <p className="text-xs text-[#4a5c56] mb-3 italic">
                          {c.qualifications}
                        </p>
                      )}

                      {c.languages.length > 0 && (
                        <div className="mb-4">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#0f4a3a] mb-1.5">
                            Languages:
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {c.languages.map((l) => (
                              <span
                                key={l}
                                className="text-[11px] px-2 py-0.5 bg-[#eef5f1] text-[#0f4a3a] font-medium rounded-md"
                              >
                                {l}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#edf3ef] flex items-center justify-between">
                      <Link
                        href={`/counsellors/${c.slug}`}
                        className="text-xs font-bold text-[#0f4a3a] hover:underline"
                      >
                        View Profile ↗
                      </Link>
                      <Link
                        href={`/book-consultation?service=${encodeURIComponent(
                          item.slug
                        )}&counsellor=${encodeURIComponent(c.slug)}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs transition-colors hover:brightness-95"
                        style={{
                          backgroundColor: "var(--color-yellow, #E9B12B)",
                          color: "var(--color-charcoal, #2E2E2A)",
                        }}
                      >
                        <CalendarDays size={13} />
                        <span>Book Slot</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
