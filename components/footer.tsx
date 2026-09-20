import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { phoneHref, type SiteSettings } from "@/lib/site-settings-shared";

const counsellingServicesCol1 = [
  ["Anxiety and Excessive Worry", "/services/anxiety-and-excessive-worry"],
  ["Low Mood and Depression", "/services/low-mood-and-depression"],
  ["Stress and Coping Support", "/services/stress-and-coping-support"],
  ["Grief, Loss and Life Transitions", "/services/grief-loss-and-life-transitions"],
  ["Trauma and Post-Traumatic Stress", "/services/trauma-and-post-traumatic-stress"],
  ["Relationship & Premarital Counselling", "/services/relationship-premarital-counselling"],
  ["Family Counselling", "/services/family-counselling"],
  ["Parental Counselling", "/services/parental-counselling"],
  ["Obsessive Thoughts & Behaviours", "/services/obsessive-thoughts-and-repetitive-behaviours"],
  ["Panic and Fear Management", "/services/panic-and-fear-management"],
  ["Burnout & Emotional Exhaustion", "/services/burnout-and-emotional-exhaustion"],
  ["Work–Life Balance Counselling", "/services/work-life-balance-counselling"],
  ["Cancer Diagnosis & Adjustment", "/services/cancer-diagnosis-emotional-adjustment"],
  ["Cancer Survivorship Counselling", "/services/cancer-survivorship-counselling"],
  ["Caregiver Stress & Emotional Support", "/services/caregiver-stress-burnout-emotional-support"],
  ["Chemotherapy Counselling & Well-being", "/services/chemotherapy-counselling-emotional-well-being"],
];

const counsellingServicesCol2 = [
  ["Pre-Surgery Psycho-Oncology Support", "/services/pre-surgery-psycho-oncology-support"],
  ["Body Image & Identity Counselling", "/services/body-image-self-esteem-identity"],
  ["Bereavement & Support Groups", "/services/bereavement-counselling-support-groups"],
  ["Palliative Care Counselling", "/services/palliative-care-counselling"],
  ["Cognitive Behaviour Therapy (CBT) & REBT", "/services/cognitive-behaviour-therapy-cbt-rebt"],
  ["Mindfulness-Based & Trauma Therapy", "/services/mindfulness-based-trauma-informed-therapy"],
  ["Solution-Focused Brief Therapy (SFBT)", "/services/solution-focused-brief-therapy-sfbt"],
  ["Crisis Intervention & Psychotherapy", "/services/crisis-intervention-supportive-psychotherapy"],
  ["Gestalt Therapy & TA", "/services/gestalt-therapy-transactional-analysis-ta"],
  ["Motivational Interviewing (MI)", "/services/motivational-interviewing-mi"],
  ["Yoga Therapeutic Interventions", "/services/yoga-therapeutic-interventions"],
  ["Physiotherapy & Rehabilitation", "/services/physiotherapy-and-rehabilitation-services"],
  ["Musculoskeletal Physiotherapy", "/services/musculoskeletal-orthopaedic-physiotherapy"],
  ["Oncology Rehabilitation", "/services/oncology-rehabilitation-onco-rehabilitation"],
  ["Pain Management Physiotherapy", "/services/pain-management"],
  ["Posture Correction & Movement", "/services/posture-correction"],
];

const quickLinks = [
  ["Home", "/"],
  ["About Ulam Seyal", "/about"],
  ["Our Services", "/services"],
  ["Our Senior Mental Health Consultants", "/counsellors"],
  ["Referrals Services", "/referrals"],
  ["Languages", "/languages"],
  ["Gallery", "/gallery"],
  ["Contact Us", "/contact"],
  ["Book Consultation", "/book-consultation"],
];

const customerSupportLinks = [
  ["Terms and Conditions", "/terms"],
  ["Disclaimer", "/disclaimer"],
  ["Privacy Policy", "/privacy"],
  ["Refund And Cancellation Policy", "/refund-cancellation-policy"],
  ["Frequently Asked Questions", "/faqs"],
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
              Ulam Seyal is not a suicide prevention helpline. If you are in crisis or having suicidal thoughts, please contact:
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
              src="/img/ulamseyallogo.png"
              alt={settings.siteName}
              width={260}
              height={140}
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

            <div className="footer-sub-section">
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

            <div className="footer-sub-section">
              <h2 className="footer-col-title">Locate Us</h2>
              <div className="locate-us-block">
                <h3 className="locate-branch-name">Ulam Seyal</h3>
                <p className="locate-address">
                  Flat E, Rathnagardens, Guindy engineers colony, Thuraipakkam, Chennai 600097.
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
