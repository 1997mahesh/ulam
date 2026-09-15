import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  Globe,
  GraduationCap,
  HeartPulse,
  Layers,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { PageHero } from "@/components/inner";
import { Button, SectionTitle } from "@/components/ui";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Referrals Services | Comprehensive Oncology & Medical Referrals | Ulam Seyal",
  description:
    "Explore specialist referral services connecting you with experienced medical oncologists, palliative care consultants, and multidisciplinary healthcare specialists.",
};

export default async function ReferralsPage() {
  const referrals = await prisma.referralService.findMany({
    where: { isActive: true },
    orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
  });

  return (
    <div className="about-page">
      <PageHero
        eyebrow="Referrals Services"
        breadcrumb="Referrals Services"
        breadcrumbParent={{ label: "Home", href: "/" }}
        title="Comprehensive Specialist & Oncology Referral Services"
        text="Connecting individuals and families with top medical oncologists, palliative care specialists, and clinical consultants for evidence-based, compassionate, and continuous care."
      />

      {/* Main Specialist Referral Profiles Section */}
      <section className="about-section py-16">
        <div className="container">
          {referrals.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-[#dce8e1] p-10">
              <p className="text-lg font-bold text-[#0b3d30]">Referral services are being updated.</p>
              <p className="text-sm text-[#526b66] mt-2">
                Please check back soon or contact our support team directly for referrals.
              </p>
              <div className="mt-6">
                <Button href="/contact">Contact Support</Button>
              </div>
            </div>
          ) : (
            <div className="space-y-16">
              {referrals.map((specialist, idx) => (
                <div
                  key={specialist.id}
                  id={specialist.slug}
                  className="bg-white rounded-2xl border border-[#dce8e1] shadow-md overflow-hidden p-6 md:p-10 transition-all hover:shadow-lg"
                >
                  <div className="grid gap-10 lg:grid-cols-[300px_1fr] items-start">
                    {/* Left: Specialist Photo & Key Details */}
                    <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
                      <div className="relative size-64 sm:size-72 rounded-2xl overflow-hidden border-2 border-[#dce8e1] shadow-md bg-[#f7faf8]">
                        {specialist.photo ? (
                          <Image
                            src={specialist.photo}
                            alt={specialist.name}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, 300px"
                            priority={idx === 0}
                          />
                        ) : (
                          <div className="size-full flex flex-col items-center justify-center bg-gray-50 text-[#0f4a3a]">
                            <UserRound size={64} className="opacity-40" />
                            <span className="text-xs mt-2 text-gray-500 font-medium">Portrait coming soon</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-5 w-full space-y-2.5 text-xs text-[#4a5c56]">
                        {specialist.experience && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eef5f1] text-[#0f4a3a] font-bold border border-[#d3e5dc] w-fit mx-auto lg:mx-0">
                            <Award size={14} />
                            <span>{specialist.experience}</span>
                          </div>
                        )}

                        {specialist.languages && specialist.languages.length > 0 && (
                          <div className="flex items-center gap-2 justify-center lg:justify-start pt-1 font-semibold text-[#1b2722]">
                            <Globe size={14} className="text-[#0f4a3a]" />
                            <span>Languages: {specialist.languages.join(" / ")}</span>
                          </div>
                        )}

                        {specialist.hospitalAffiliation && (
                          <div className="flex items-center gap-2 justify-center lg:justify-start text-xs text-[#526b66]">
                            <Stethoscope size={14} className="text-[#0f4a3a]" />
                            <span>{specialist.hospitalAffiliation}</span>
                          </div>
                        )}

                        <div className="pt-4 w-full space-y-2.5">
                          <Link
                            href={`/contact?subject=${encodeURIComponent(`Referral Consultation - ${specialist.name}`)}`}
                            className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl bg-[#E9B12B] hover:bg-[#D9A01E] text-[#1b2722] font-bold text-xs tracking-wide shadow-sm transition-all"
                          >
                            <CalendarDays size={15} />
                            <span>Request Referral / Consultation</span>
                          </Link>

                          <Link
                            href={`/referrals/${specialist.slug}`}
                            className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-[#f5f8f6] hover:bg-[#eaf2ee] text-[#0f4a3a] font-semibold text-xs border border-[#d8e6de] transition-all"
                          >
                            <span>View Full Profile</span>
                            <ArrowRight size={13} />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Right: Detailed Bio, Areas of Focus & Care Modalities */}
                    <div className="space-y-6">
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#E9B12B]">
                          {specialist.department || "Specialist Referral Profile"}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#0b3d30] mt-1 font-serif">
                          {specialist.name}
                        </h2>
                        <p className="text-sm font-bold text-[#0f4a3a] mt-1">
                          {specialist.designation}
                        </p>
                        {specialist.qualifications && (
                          <div className="inline-flex items-center gap-1.5 mt-2.5 px-2.5 py-1.5 rounded-lg bg-[#f3f7f4] text-[#1b2722] text-xs font-semibold border border-[#e2ece6] leading-relaxed">
                            <GraduationCap size={14} className="text-[#0f4a3a] shrink-0" />
                            <span>{specialist.qualifications}</span>
                          </div>
                        )}
                      </div>

                      {/* Bio Paragraphs */}
                      <div className="space-y-3.5 text-sm text-[#384c46] leading-relaxed">
                        {specialist.bio.split("\n\n").map((para, pIdx) => (
                          <p key={pIdx}>{para}</p>
                        ))}
                      </div>

                      {/* Areas of Focus / Malignancies */}
                      {specialist.areasOfFocus && specialist.areasOfFocus.length > 0 && (
                        <div className="pt-2">
                          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0b3d30] mb-2.5 flex items-center gap-1.5">
                            <Sparkles size={14} className="text-[#E9B12B]" />
                            <span>Areas of Clinical Care & Focus Malignancies</span>
                          </h3>
                          <div className="flex flex-wrap gap-1.5">
                            {specialist.areasOfFocus.map((area) => (
                              <span
                                key={area}
                                className="px-2.5 py-1 rounded-md bg-[#f1f6f3] text-[#244a44] text-xs font-medium border border-[#d8e6de]"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Therapeutic Modalities / Care Services */}
                      {specialist.therapeuticModalities && specialist.therapeuticModalities.length > 0 && (
                        <div className="pt-1">
                          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0b3d30] mb-2.5 flex items-center gap-1.5">
                            <Layers size={14} className="text-[#0f4a3a]" />
                            <span>Clinical Approaches & Supportive Care Services</span>
                          </h3>
                          <div className="flex flex-wrap gap-1.5">
                            {specialist.therapeuticModalities.map((mod) => (
                              <span
                                key={mod}
                                className="px-2.5 py-1 rounded-md bg-[#eaf2ee] text-[#0f4a3a] text-xs font-semibold border border-[#cfe0d6]"
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
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Guiding Principles / Referral Care Pillars */}
      <section className="about-section bg-[#f5f8f6] py-16">
        <div className="container">
          <SectionTitle
            eyebrow="Our Care Ecosystem"
            title="Integrated Oncology & Specialist Referral Pillars"
          />
          <div className="grid gap-8 md:grid-cols-3 mt-10">
            <div className="bg-white p-8 rounded-xl border border-[#e2ece6] shadow-sm">
              <div className="size-12 rounded-lg bg-[#eaf2ee] text-[#0f4a3a] flex items-center justify-center mb-5">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1b2722] mb-3">Multidisciplinary Continuity</h3>
              <p className="text-sm text-[#4a5c56] leading-relaxed">
                Seamless coordination from initial diagnostic evaluation and systemic therapy to survivorship, symptom relief, and supportive palliative care.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#e2ece6] shadow-sm">
              <div className="size-12 rounded-lg bg-[#eaf2ee] text-[#0f4a3a] flex items-center justify-center mb-5">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1b2722] mb-3">Personalized Precision</h3>
              <p className="text-sm text-[#4a5c56] leading-relaxed">
                Tailoring treatment strategies to individual disease biology, stage, overall well-being, and personal patient preferences with highest clinical excellence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-[#e2ece6] shadow-sm">
              <div className="size-12 rounded-lg bg-[#eaf2ee] text-[#0f4a3a] flex items-center justify-center mb-5">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#1b2722] mb-3">Holistic & Caregiver Support</h3>
              <p className="text-sm text-[#4a5c56] leading-relaxed">
                Uniting medical oncology with psycho-oncological wellness, psychological counseling, pain management, and dedicated family caregiver support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="about-final">
        <div className="container">
          <div>
            <p className="eyebrow">Connect with our network</p>
            <h2>Need a Specialist Referral or Second Opinion?</h2>
            <p>Our team is here to guide you toward experienced clinical consultants tailored to your medical and psychological care needs.</p>
          </div>
          <div className="about-final-actions">
            <Button href="/contact?subject=Specialist%20Referral%20Inquiry">Request a Referral</Button>
            <Link className="about-secondary" href="/counsellors">
              Meet Mental Health Consultants <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
