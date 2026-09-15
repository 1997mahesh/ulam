import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Award,
  CalendarDays,
  CheckCircle2,
  Globe,
  GraduationCap,
  HeartPulse,
  Layers,
  Mail,
  Phone,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { Breadcrumb, Button } from "@/components/ui";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialist = await prisma.referralService.findFirst({
    where: { slug, isActive: true },
  });
  if (!specialist) return { title: "Specialist Not Found | Ulam Seyal" };

  return {
    title: `${specialist.name} | ${specialist.designation} | Ulam Seyal Referrals`,
    description: specialist.shortBio || specialist.bio.slice(0, 160),
  };
}

export default async function ReferralSpecialistPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const specialist = await prisma.referralService.findFirst({
    where: { slug, isActive: true },
  });

  if (!specialist) notFound();

  return (
    <div className="about-page">
      <section className="py-12 md:py-16 bg-[#fafcfb] border-b border-[#e2ece6]">
        <div className="container">
          <Breadcrumb
            current={specialist.name}
            parent={{ label: "Referrals Services", href: "/referrals" }}
          />

          <div className="mt-8 bg-white rounded-3xl border border-[#dce8e1] shadow-md p-6 sm:p-10 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-[340px_1fr] items-start">
              {/* Left Column: Portrait & Quick Stats */}
              <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
                <div className="relative w-full aspect-[4/5] max-w-[340px] rounded-2xl overflow-hidden border-2 border-[#dce8e1] shadow-md bg-[#f7faf8]">
                  {specialist.photo ? (
                    <Image
                      src={specialist.photo}
                      alt={specialist.name}
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 100vw, 340px"
                    />
                  ) : (
                    <div className="size-full flex flex-col items-center justify-center bg-gray-50 text-[#0f4a3a]">
                      <UserRound size={80} className="opacity-40" />
                      <span className="text-sm mt-3 text-gray-500 font-medium">Portrait coming soon</span>
                    </div>
                  )}
                </div>

                <div className="mt-6 w-full space-y-3 text-xs text-[#4a5c56]">
                  {specialist.experience && (
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eef5f1] text-[#0f4a3a] font-bold border border-[#d3e5dc] w-fit mx-auto lg:mx-0">
                      <Award size={15} />
                      <span>{specialist.experience}</span>
                    </div>
                  )}

                  {specialist.languages && specialist.languages.length > 0 && (
                    <div className="flex items-center gap-2 justify-center lg:justify-start pt-1 font-semibold text-[#1b2722]">
                      <Globe size={15} className="text-[#0f4a3a]" />
                      <span>Languages: {specialist.languages.join(", ")}</span>
                    </div>
                  )}

                  {specialist.hospitalAffiliation && (
                    <div className="flex items-center gap-2 justify-center lg:justify-start text-xs text-[#526b66]">
                      <Stethoscope size={15} className="text-[#0f4a3a]" />
                      <span>{specialist.hospitalAffiliation}</span>
                    </div>
                  )}

                  <div className="pt-4 w-full space-y-2.5">
                    <Link
                      href={`/contact?subject=${encodeURIComponent(`Referral Consultation - ${specialist.name}`)}`}
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-[#E9B12B] hover:bg-[#D9A01E] text-[#1b2722] font-bold text-sm tracking-wide shadow-sm transition-all"
                    >
                      <CalendarDays size={16} />
                      <span>Request Referral Consultation</span>
                    </Link>

                    <Link
                      href="/referrals"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#f5f8f6] hover:bg-[#eaf2ee] text-[#0f4a3a] font-semibold text-xs border border-[#d8e6de] transition-all"
                    >
                      <ArrowLeft size={14} />
                      <span>Back to All Referrals</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Comprehensive Details */}
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#E9B12B]">
                    {specialist.department || "Referral Specialist"}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-bold text-[#0b3d30] mt-2 font-serif">
                    {specialist.name}
                  </h1>
                  <p className="text-base font-bold text-[#0f4a3a] mt-1.5">
                    {specialist.designation}
                  </p>
                  {specialist.qualifications && (
                    <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-lg bg-[#f3f7f4] text-[#1b2722] text-xs font-semibold border border-[#e2ece6]">
                      <GraduationCap size={15} className="text-[#0f4a3a] shrink-0" />
                      <span>{specialist.qualifications}</span>
                    </div>
                  )}
                </div>

                {/* Biography */}
                <div>
                  <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#0b3d30] mb-3 flex items-center gap-2">
                    <HeartPulse size={16} className="text-[#0f4a3a]" />
                    <span>Clinical Background & Philosophy</span>
                  </h2>
                  <div className="space-y-4 text-sm text-[#384c46] leading-relaxed">
                    {specialist.bio.split("\n\n").map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Areas of Focus / Malignancies */}
                {specialist.areasOfFocus && specialist.areasOfFocus.length > 0 && (
                  <div className="pt-2 border-t border-[#edf3f0]">
                    <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#0b3d30] mb-3 flex items-center gap-2">
                      <Sparkles size={16} className="text-[#E9B12B]" />
                      <span>Areas of Clinical Care & Focus Malignancies</span>
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {specialist.areasOfFocus.map((area) => (
                        <span
                          key={area}
                          className="px-3 py-1.5 rounded-md bg-[#f1f6f3] text-[#244a44] text-xs font-medium border border-[#d8e6de]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Care Modalities / Services */}
                {specialist.therapeuticModalities && specialist.therapeuticModalities.length > 0 && (
                  <div className="pt-2 border-t border-[#edf3f0]">
                    <h2 className="text-sm font-extrabold uppercase tracking-wider text-[#0b3d30] mb-3 flex items-center gap-2">
                      <Layers size={16} className="text-[#0f4a3a]" />
                      <span>Clinical Modalities & Comprehensive Supportive Care</span>
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {specialist.therapeuticModalities.map((mod) => (
                        <span
                          key={mod}
                          className="px-3 py-1.5 rounded-md bg-[#eaf2ee] text-[#0f4a3a] text-xs font-semibold border border-[#cfe0d6]"
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
