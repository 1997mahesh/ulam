import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { phoneHref, type SiteSettings } from "@/lib/site-settings-shared";

const counsellingServicesCol1 = [
  ["Indians Living Abroad Counseling", "/services/online-therapy"],
  ["Online Video Homeopathic Consultation", "/services"],
  ["Adolescent/Teenage Counselling", "/services/child-adolescent-therapy"],
  ["Study Skills Counselling", "/services"],
  ["Relationship/Marriage/Family Counselling", "/services/family-therapy"],
  ["Suicidal Ideation/Self-Harm Behaviour Counselling", "/services"],
  ["Stress Counselling", "/services"],
  ["Extra-Marital Affair Counselling", "/services/couples-therapy"],
  ["Anxiety/Concentration Issues Counselling", "/services"],
  ["Phobia Counselling", "/services"],
  ["LGBTQ Counselling", "/services"],
  ["Sexual Counselling", "/services"],
];

const counsellingServicesCol2 = [
  ["Online Video Psychiatric Consultation", "/services"],
  ["Top-Rated Psychologist for Hospital/Home Visit Counselling/Therapy in Chennai", "/counsellors"],
  ["Career Counselling", "/services"],
  ["Pre-Marital Counselling", "/services/couples-therapy"],
  ["Bullying/Ragging/School Refusal Counselling", "/services/child-adolescent-therapy"],
  ["Healthcare Problems Counselling", "/services/psycho-oncological"],
  ["Depression Counselling", "/services"],
  ["Break-up/Divorce Counselling", "/services/couples-therapy"],
  ["Anger Management Counselling", "/services"],
  ["OCD Counselling", "/services"],
  ["Geriatric Counselling", "/services"],
  ["Cognitive Behaviour Therapy – CBT", "/services/therapeutic-interventions"],
  ["Behaviour Therapy", "/services/psychological"],
];

const quickLinks = [
  ["Careers", "/contact"],
  ["Test your Mental Health", "/assessments"],
  ["Photo Gallery", "/gallery"],
  ["Research Articles", "/resources"],
  ["Blog", "/resources"],
  ["Materials for Clients", "/resources"],
  ["Verify Your Certificate", "/about"],
  ["Contact Us", "/contact"],
];

const customerSupportLinks = [
  ["Terms and Conditions", "/terms"],
  ["Disclaimer", "/disclaimer"],
  ["Privacy Policy", "/privacy"],
  ["Refund And Cancellation Policy", "/terms"],
  ["Shipping and Exchange", "/terms"],
];

const languageLinks = [
  ["English Counselling", "/languages"],
  ["Tamil Counselling", "/languages"],
  ["Hindi Counselling", "/languages"],
  ["Telugu Counselling", "/languages"],
  ["Kannada Counselling", "/languages"],
  ["Malayalam Counselling", "/languages"],
  ["Urdu Counselling", "/languages"],
];

const socialDefinitions = [
  ["◎", "Instagram", "socialInstagram"],
  ["in", "LinkedIn", "socialLinkedIn"],
  ["▶", "YouTube", "socialYouTube"],
  ["f", "Facebook", "socialFacebook"],
  ["𝕏", "X", "socialX"],
] as const;

export function Footer({ settings }: { settings: SiteSettings }) {
  const socials = socialDefinitions
    .map(([icon, name, key]) => ({ icon, name, url: settings[key] }))
    .filter((item) => item.url);

  return (
    <footer className="site-footer">
      {/* 1. Top Emergency / Helpline Disclaimer */}
      <div className="footer-top-disclaimer">
        <div className="footer-disclaimer-content">
          <p>
            <span>
              We are NOT a suicide prevention helpline. If you are feeling suicidal, we would suggest you immediately call up a suicide prevention helpline such as
            </span>
            <span className="disclaimer-line-break">
              Sneha Helpline:{" "}
              <a href="tel:04424640050" className="disclaimer-phone-link">
                044 24640050
              </a>{" "}
              or{" "}
              <a href="tel:104" className="disclaimer-phone-link">
                104
              </a>{" "}
              (TN Govt. Helpline)
            </span>
          </p>
        </div>
        <div className="footer-top-divider" />
      </div>

      {/* 2. Main Footer Layout */}
      <div className="footer-main-layout">
        {/* Left Column: Logo & Brand Card */}
        <div className="footer-brand-box">
          <div className="footer-brand-logo">
            <Image
              src="/img/logo_2.png"
              alt={settings.siteName}
              width={260}
              height={100}
              priority={false}
            />
          </div>
          <p className="footer-brand-tagline">{settings.tagline}</p>
          {socials.length > 0 && (
            <div className="footer-socials">
              {socials.map((item) => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  key={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          )}
          <div className="footer-brand-copyright">
            <p>© {new Date().getFullYear()} {settings.siteName}. All Rights Reserved.</p>
          </div>
        </div>

        {/* Right Content Columns */}
        <div className="footer-columns-container">
          {/* Section 1: Counselling Services (Spanning 2 sub-columns) */}
          <div className="footer-col-counselling">
            <h2 className="footer-col-title">Counselling Services</h2>
            <div className="counselling-subcols-grid">
              <nav className="footer-link-list">
                {counsellingServicesCol1.map(([label, href]) => (
                  <Link href={href} key={label}>
                    {label}
                  </Link>
                ))}
              </nav>
              <nav className="footer-link-list">
                {counsellingServicesCol2.map(([label, href]) => (
                  <Link href={href} key={label}>
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Section 2: Quick Links & Customer Support */}
          <div className="footer-col-stack">
            <div className="footer-sub-section">
              <h2 className="footer-col-title">Quick Links</h2>
              <nav className="footer-link-list">
                {quickLinks.map(([label, href]) => (
                  <Link href={href} key={label}>
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="footer-sub-section mt-6">
              <h2 className="footer-col-title">Customer Support</h2>
              <nav className="footer-link-list">
                {customerSupportLinks.map(([label, href]) => (
                  <Link href={href} key={label}>
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Section 3: Languages & Locate Us */}
          <div className="footer-col-stack">
            <div className="footer-sub-section">
              <h2 className="footer-col-title">Languages</h2>
              <nav className="footer-link-list">
                {languageLinks.map(([label, href]) => (
                  <Link href={href} key={label}>
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="footer-sub-section mt-6">
              <h2 className="footer-col-title">Locate Us</h2>
              <div className="locate-us-block">
                <h3 className="locate-branch-name">CHENNAI COUNSELLING CENTRE</h3>
                <p className="locate-address">
                  13, Basement Section, off Bazulla Road, Parthasarathi Puram, T. Nagar, Chennai, Tamil Nadu 600017.
                </p>
                <p className="locate-landmark">
                  <span className="landmark-label">Landmark:</span> On the way from Jeeva Park.
                </p>
                <div className="locate-contacts">
                  <a href={phoneHref(settings.phone)} className="locate-contact-link">
                    <Phone size={14} />
                    <span>{settings.phone}</span>
                  </a>
                  <a href={`mailto:${settings.email}`} className="locate-contact-link">
                    <Mail size={14} />
                    <span>{settings.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
