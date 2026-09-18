import Link from "next/link";
import { Breadcrumb } from "./ui";

interface AboutEditorialHeroProps {
  prefix?: string; // e.g. "OUR"
  title: string; // e.g. "MISSION", "VISION", "STORY", "JOURNEY", "FOUNDERS", "POLICY"
  number?: string; // e.g. "01", "02"
  eyebrow?: string; // e.g. "OUR MISSION"
  headline?: string; // e.g. "Making psychological care easier to access, understand, and trust."
  statement?: string; // Primary statement or description
  tagline?: string; // e.g. "Ulam Seyal — Healing Minds. Restoring Hope. Inspiring Change."
  breadcrumb?: string;
  breadcrumbParent?: { label: string; href: string };
  badgeType?: "starburst" | "orbit" | "ring";
}

// 24-point zigzag starburst badge outline matching the reference design
function StarburstBadge({ className }: { className?: string }) {
  const points = Array.from({ length: 48 }, (_, i) => {
    const angle = (i * Math.PI) / 24;
    const radius = i % 2 === 0 ? 140 : 118;
    const x = 150 + radius * Math.cos(angle);
    const y = 150 + radius * Math.sin(angle);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");

  return (
    <svg
      viewBox="0 0 300 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon
        points={points}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

// Subtle organic rings badge variant
function OrbitBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="150" cy="150" r="130" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 6" />
      <circle cx="150" cy="150" r="95" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="150" cy="150" r="60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" />
    </svg>
  );
}

export function AboutEditorialHero({
  prefix = "OUR",
  title,
  number,
  eyebrow,
  headline,
  statement,
  tagline,
  breadcrumb,
  breadcrumbParent = { label: "About Us", href: "/about" },
  badgeType = "starburst",
}: AboutEditorialHeroProps) {
  const breadcrumbCurrent = breadcrumb || (prefix ? `${prefix} ${title}`.trim() : title);

  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-28 border-b border-[#e2ece6] bg-[#fbf8f2]">
      {/* Theme Ambient Radial Mesh Gradients */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
        style={{
          background: `
            radial-gradient(circle at 6% 88%, rgba(233, 177, 43, 0.24) 0%, transparent 42%),
            radial-gradient(circle at 68% 28%, rgba(0, 109, 103, 0.10) 0%, transparent 52%),
            radial-gradient(circle at 94% 8%, rgba(168, 180, 154, 0.32) 0%, transparent 45%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Decorative Accent in Top Right */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 md:-top-20 md:-right-20 z-0 text-[#2e2e2a]/15 md:text-[#2e2e2a]/20 animate-spin-very-slow select-none"
        aria-hidden="true"
      >
        {badgeType === "orbit" ? (
          <OrbitBadge className="size-64 sm:size-80 md:size-96 lg:size-[420px]" />
        ) : (
          <StarburstBadge className="size-64 sm:size-80 md:size-96 lg:size-[420px]" />
        )}
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Breadcrumb & Eyebrow Row */}
        <div className="mb-6 md:mb-10 flex flex-wrap items-center justify-between gap-4">
          <Breadcrumb current={breadcrumbCurrent} parent={breadcrumbParent} />
          <div className="flex items-center gap-3">
            {number && (
              <span className="text-xs font-mono font-bold text-[#0f4a3a] opacity-60">
                {number}
              </span>
            )}
            {eyebrow && (
              <span className="text-xs uppercase font-bold tracking-widest text-[#0f4a3a] bg-[#e7f1ec] px-3.5 py-1 rounded-full border border-[#d2e4da]">
                {eyebrow}
              </span>
            )}
          </div>
        </div>

        {/* Giant Editorial Heading: "OUR" / "MISSION" */}
        <div className="max-w-4xl">
          <h1 className="font-sans font-black tracking-tighter uppercase text-[#1b2722] leading-[0.88] select-none text-5xl sm:text-7xl md:text-8xl lg:text-[104px]">
            {prefix && <span className="block">{prefix}</span>}
            <span className="block mt-1 text-[#0f4a3a]">{title}</span>
          </h1>
          {headline && (
            <p className="mt-5 sm:mt-7 font-serif text-2xl sm:text-3xl md:text-4xl text-[#1b2722] leading-snug font-normal max-w-3xl">
              &ldquo;{headline}&rdquo;
            </p>
          )}
        </div>

        {/* Crisp Horizontal Divider Line */}
        <div className="my-8 md:my-12 border-b border-[#1b2722]/20" />

        {/* Bottom-Right Statement / Narrative Block */}
        {(statement || tagline) && (
          <div className="grid md:grid-cols-12 gap-6 items-start">
            <div className="hidden md:block md:col-span-4 lg:col-span-5">
              {tagline && (
                <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-[#006d67] bg-[#eaf4ef] border border-[#cfdfd6] px-4 py-2 rounded-full">
                  <span className="size-2 rounded-full bg-[#e9b12b] animate-pulse" />
                  {tagline}
                </div>
              )}
            </div>

            <div className="md:col-span-8 lg:col-span-7 md:pl-6">
              {statement && (
                <p className="text-base sm:text-lg md:text-xl text-[#2e2e2a] font-normal leading-relaxed">
                  {statement}
                </p>
              )}
              {tagline && (
                <p className="mt-4 md:hidden text-sm italic font-semibold text-[#006d67]">
                  {tagline}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
