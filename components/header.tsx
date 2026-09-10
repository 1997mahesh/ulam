"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { CalendarDays, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { phoneHref, type SiteSettings } from "@/lib/site-settings-shared";

type NavChild = { label: string; href: string };
type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Ulam Seyal",
    href: "/about",
    children: [
      { label: "Our Mission", href: "/about/mission-vision" },
      { label: "Our Vision", href: "/about/mission-vision" },
      { label: "Our Story", href: "/about/story" },
      { label: "Our Journey", href: "/about/journey" },
      { label: "Our Founders", href: "/about/founders" },
    ],
  },
  {
    label: "Our Services",
    href: "/services",
    children: [
      { label: "Comprehensive Psychological Services", href: "/services/psychological" },
      { label: "Comprehensive Psycho-Oncological Services", href: "/services/psycho-oncological" },
      { label: "Therapeutic Interventions", href: "/services/therapeutic-interventions" },
      { label: "Yoga, Physiotherapy & Nutrition Support", href: "/services/yoga-physiotherapy-nutrition" },
    ],
  },
  { label: "Our Senior Mental Health Consultants", href: "/counsellors" },
  { label: "Referrals Services", href: "/services" },
  { label: "Languages", href: "/languages" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const socialDefinitions = [
  ["Instagram", "socialInstagram"],
  ["LinkedIn", "socialLinkedIn"],
  ["YouTube", "socialYouTube"],
  ["Facebook", "socialFacebook"],
  ["X", "socialX"],
] as const;

function SocialIcon({ name }: { name: string }) {
  return (
    <span aria-hidden className="grid size-6 place-items-center text-[14px] font-extrabold">
      {name === "Instagram" ? "◎" : name === "LinkedIn" ? "in" : name === "YouTube" ? "▶" : name === "Facebook" ? "f" : "𝕏"}
    </span>
  );
}

function UtilityBar({ settings }: { settings: SiteSettings }) {
  const socials = socialDefinitions
    .map(([name, key]) => ({ name, url: settings[key] }))
    .filter((item) => item.url);

  return (
    <div className="border-b border-[#d5e0e5] bg-[#f1f5f9] text-[#006d67]">
      <div className="mx-auto grid min-h-[92px] w-full max-w-[1560px] grid-cols-2 items-center gap-x-3 gap-y-2 px-6 py-2.5 md:min-h-[94px] xl:min-h-[58px] xl:grid-cols-[1fr_auto_1fr] xl:gap-0 xl:py-0">
        <div className="order-2 flex min-w-0 flex-wrap items-center gap-3 text-[11px] font-bold sm:gap-5 md:text-xs xl:order-1 xl:justify-self-end xl:flex-nowrap xl:gap-8 xl:pr-[200px]">
          <a href={phoneHref(settings.phone)} aria-label={`Call ${settings.phone}`} className="flex shrink-0 items-center gap-2 transition-colors hover:text-[#9a663c]">
            <Phone size={14} />
            <span className="hidden sm:inline">{settings.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a href={`mailto:${settings.email}`} aria-label={`Email ${settings.email}`} className="flex shrink-0 items-center gap-2 whitespace-nowrap transition-colors hover:text-[#9a663c]">
            <Mail size={14} />
            <span>{settings.email}</span>
          </a>
        </div>
        <a
          href={phoneHref(settings.supportNumber)}
          aria-label={`Call confidential support at ${settings.supportNumber}`}
          className="support-pulse order-1 col-span-2 flex h-10 w-full items-center justify-center gap-3 rounded-[22px] border border-[#2f918b] bg-[#8fc5c1] px-3 text-[#006d67] shadow-[0_12px_28px_rgba(0,109,103,.18)] sm:mx-auto sm:w-fit sm:px-7 xl:order-2 xl:col-span-1"
        >
          <span className="whitespace-nowrap text-[10px] font-extrabold tracking-[.08em] sm:text-[11px]">24/7 CONFIDENTIAL SUPPORT:</span>
          <span className="whitespace-nowrap text-xs font-extrabold sm:text-sm">{settings.supportNumber}</span>
        </a>
        <div className="order-3 flex items-center justify-end gap-2.5 xl:justify-self-start xl:gap-4 xl:pl-[350px]">
          <div className="hidden items-center gap-5 lg:flex" aria-label="Social media links">
            {socials.map((item) => (
              <a href={item.url} target="_blank" rel="noreferrer" aria-label={item.name} key={item.name}>
                <SocialIcon name={item.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header({ settings }: { settings: SiteSettings }) {
  const [mobile, setMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({});
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isLinkActive = (item: NavItem) => {
    if (item.label === "Home") return pathname === "/";
    if (item.label === "Our Senior Mental Health Consultants") return pathname.startsWith("/counsellors") || pathname.startsWith("/specialists");
    if (item.children) {
      return (
        item.children.some(
          (child) => pathname === child.href || (child.href !== "/" && pathname.startsWith(child.href))
        ) || (item.href ? pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) : false)
      );
    }
    if (!item.href) return false;
    const route = item.href.split("#")[0];
    return route !== "/" && pathname.startsWith(route);
  };

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpenDropdown(null);
    setMobile(false);
  }

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  return (
    <>
      <a href="#main" className="fixed left-3 top-3 z-[100] -translate-y-24 bg-white p-3 focus:translate-y-0">
        Skip to content
      </a>
      <UtilityBar settings={settings} />
      <header className="main-header">
        <div className="main-nav">
          <Link href="/" aria-label={`${settings.siteName} Home`} className="nav-logo-link">
            <Image src="/img/ulam_logo.png" alt={settings.siteName} width={500} height={180} priority className="nav-logo" />
          </Link>
          <nav aria-label="Main navigation" className="nav-links-wrapper">
            {navItems.map((item) => {
              const isActive = isLinkActive(item);
              if (item.children) {
                const isOpen = openDropdown === item.label;
                return (
                  <div
                    key={item.label}
                    className={`nav-dropdown-item ${isOpen ? "open" : ""}`}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      className={`nav-dropdown-trigger ${isActive ? "active" : ""} ${isOpen ? "open" : ""}`}
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={13} className={`nav-chevron ${isOpen ? "rotate" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="nav-dropdown-menu" role="menu">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            role="menuitem"
                            className={pathname === child.href ? "active" : ""}
                            onClick={() => setOpenDropdown(null)}
                          >
                            <span>{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  className={`nav-link-item ${isActive ? "active" : ""}`}
                  href={item.href || "#"}
                  key={item.label}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link className="nav-cta" href="/book-consultation">
            <CalendarDays size={16} />
            <span>Book Consultation</span>
          </Link>
          <button className="menu-button" onClick={() => setMobile(true)} aria-label="Open menu">
            <Menu />
          </button>
        </div>
      </header>
      {mobile && (
        <div className="mobile-menu">
          <div>
            <Image src="/img/ulam_logo.png" alt={settings.siteName} width={220} height={80} />
            <button onClick={() => setMobile(false)} aria-label="Close menu">
              <X />
            </button>
          </div>
          <nav>
            {navItems.map((item) => {
              if (item.children) {
                const isExpanded = !!mobileExpanded[item.label];
                return (
                  <div key={item.label} className="mobile-dropdown-item">
                    <button
                      type="button"
                      className="mobile-dropdown-header"
                      onClick={() => toggleMobileSubmenu(item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={16} className={`mobile-chevron ${isExpanded ? "rotate" : ""}`} />
                    </button>
                    {isExpanded && (
                      <div className="mobile-dropdown-sublist">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobile(false)}
                            className={pathname === child.href ? "active" : ""}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link onClick={() => setMobile(false)} href={item.href || "#"} key={item.label}>
                  {item.label}
                </Link>
              );
            })}
            <Link onClick={() => setMobile(false)} className="nav-cta" href="/book-consultation">
              <CalendarDays size={16} />
              <span>Book Consultation</span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
