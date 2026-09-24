import Link from "next/link";
import {
  Activity,
  Apple,
  ArrowRight,
  Baby,
  Brain,
  Briefcase,
  CalendarDays,
  CigaretteOff,
  Compass,
  Eye,
  HandHeart,
  HeartHandshake,
  LifeBuoy,
  Moon,
  Ribbon,
  Scale,
  ShieldCheck,
  Smile,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";

export function getServiceIcon(slug = "", name = "") {
  const s = (slug + " " + name).toLowerCase();
  if (
    s.includes("cancer") ||
    s.includes("oncol") ||
    s.includes("chemo") ||
    s.includes("palliative") ||
    s.includes("bereave") ||
    s.includes("laryngect")
  ) {
    return Ribbon;
  }
  if (
    s.includes("couple") ||
    s.includes("marit") ||
    s.includes("premarital") ||
    s.includes("relationship")
  ) {
    return HeartHandshake;
  }
  if (
    s.includes("child") ||
    s.includes("adolescent") ||
    s.includes("parent") ||
    s.includes("pediatric")
  ) {
    return Baby;
  }
  if (s.includes("family")) {
    return Users;
  }
  if (
    s.includes("tobacco") ||
    s.includes("smoking") ||
    s.includes("addiction") ||
    s.includes("substance")
  ) {
    return CigaretteOff;
  }
  if (
    s.includes("work") ||
    s.includes("burnout") ||
    s.includes("career") ||
    s.includes("corporate") ||
    s.includes("executive")
  ) {
    return Briefcase;
  }
  if (
    s.includes("nutrition") ||
    s.includes("diet") ||
    s.includes("weight") ||
    s.includes("metabolic")
  ) {
    return Apple;
  }
  if (
    s.includes("physio") ||
    s.includes("rehab") ||
    s.includes("movement") ||
    s.includes("posture")
  ) {
    return Activity;
  }
  if (
    s.includes("yoga") ||
    s.includes("vitality") ||
    s.includes("pranayama") ||
    s.includes("meditation")
  ) {
    return Sun;
  }
  if (
    s.includes("sleep") ||
    s.includes("insomnia") ||
    s.includes("panic") ||
    s.includes("phobia")
  ) {
    return Moon;
  }
  if (
    s.includes("body image") ||
    s.includes("identity") ||
    s.includes("self-esteem")
  ) {
    return Eye;
  }
  if (
    s.includes("trauma") ||
    s.includes("ptsd") ||
    s.includes("crisis") ||
    s.includes("abuse")
  ) {
    return ShieldCheck;
  }
  if (
    s.includes("depression") ||
    s.includes("mood") ||
    s.includes("sadness") ||
    s.includes("grief")
  ) {
    return Smile;
  }
  if (
    s.includes("cbt") ||
    s.includes("rebt") ||
    s.includes("sfbt") ||
    s.includes("gestalt") ||
    s.includes("mindfulness")
  ) {
    return Sparkles;
  }
  if (
    s.includes("guidance") ||
    s.includes("transition") ||
    s.includes("clarity") ||
    s.includes("decision")
  ) {
    return Compass;
  }
  if (
    s.includes("anxiety") ||
    s.includes("stress") ||
    s.includes("worry") ||
    s.includes("neuro")
  ) {
    return Brain;
  }
  return HandHeart;
}

export interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    slug: string;
    shortDescription?: string | null;
    durationMinutes?: number;
    price?: unknown;
    category?: string | null;
  };
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = getServiceIcon(service.slug, service.name);

  return (
    <article className="bg-white rounded-2xl border border-[#dce6e0] p-6 text-center shadow-sm hover:shadow-md transition-all flex flex-col justify-between items-center group h-full">
      {/* Icon Top */}
      <div className="size-16 rounded-2xl bg-[#f5f9f6] text-[#0f4a3a] border border-[#d8e6de] flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform shrink-0">
        <Icon size={30} strokeWidth={1.75} />
      </div>

      {/* Service Name & Optional Short text */}
      <div className="w-full flex-1 flex flex-col items-center justify-center mb-5">
        <h3 className="font-serif text-base sm:text-lg font-bold text-[#0b3d30] line-clamp-2 leading-snug">
          {service.name}
        </h3>
        {service.shortDescription && (
          <p className="text-xs text-[#52635c] line-clamp-2 mt-2 leading-relaxed max-w-[240px]">
            {service.shortDescription}
          </p>
        )}
      </div>

      {/* Bottom Actions: Book a Slot & View Details (Sample 1 Match) */}
      <div className="grid grid-cols-2 gap-2.5 w-full pt-3 border-t border-[#edf3ef] mt-auto">
        <Link
          href={`/book-consultation?service=${encodeURIComponent(service.slug)}`}
          className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg font-bold text-xs shadow-xs transition-colors hover:brightness-95 whitespace-nowrap"
          style={{
            backgroundColor: "var(--color-yellow, #E9B12B)",
            color: "var(--color-charcoal, #2E2E2A)",
          }}
        >
          <CalendarDays size={13} />
          <span>Book a Slot</span>
        </Link>
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center justify-center gap-1 py-2.5 px-2 rounded-lg font-bold text-xs text-[#0f4a3a] bg-[#fbf8f2] border border-[#d2e4da] hover:bg-[#eef5f1] transition-colors whitespace-nowrap"
        >
          <span>View Details</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </article>
  );
}
