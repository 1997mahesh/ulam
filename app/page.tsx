import { HeroSlider } from "@/components/hero-slider";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Counsellorshowcase } from "@/components/counsellor-showcase";
import {
  Activity,
  Apple,
  Baby,
  Brain,
  CalendarDays,
  ClipboardList,
  CreditCard,
  GraduationCap,
  HandHeart,
  Headphones,
  Heart,
  HeartHandshake,
  Mail,
  Moon,
  Ribbon,
  Smartphone,
  Sprout,
  UserRound,
  UsersRound,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

function getServiceIcon(slug: string, name: string = ""): LucideIcon {
  const s = (slug + " " + name).toLowerCase();
  if (
    s.includes("cancer") ||
    s.includes("oncology") ||
    s.includes("chemo") ||
    s.includes("survivor") ||
    s.includes("stoma") ||
    s.includes("laryngectomy") ||
    s.includes("surgery")
  ) {
    return Ribbon;
  }
  if (s.includes("nutrition") || s.includes("diet") || s.includes("eating") || s.includes("food")) return Apple;
  if (s.includes("yoga") || s.includes("mind-body")) return Sprout;
  if (
    s.includes("physio") ||
    s.includes("rehab") ||
    s.includes("posture") ||
    s.includes("gait") ||
    s.includes("orthopaedic") ||
    s.includes("mobility") ||
    s.includes("movement") ||
    s.includes("stroke") ||
    s.includes("balance") ||
    s.includes("pelvic") ||
    s.includes("hand") ||
    s.includes("pain") ||
    s.includes("sports") ||
    s.includes("obesity") ||
    s.includes("exercise")
  ) {
    return Activity;
  }
  if (
    s.includes("antenatal") ||
    s.includes("postnatal") ||
    s.includes("child") ||
    s.includes("baby") ||
    s.includes("pediatric") ||
    s.includes("paediatric") ||
    s.includes("parent")
  ) {
    return Baby;
  }
  if (
    s.includes("couple") ||
    s.includes("marital") ||
    s.includes("marriage") ||
    s.includes("family") ||
    s.includes("infidelity") ||
    s.includes("divorce") ||
    s.includes("breakup") ||
    s.includes("relationship")
  ) {
    return UsersRound;
  }
  if (
    s.includes("caregiver") ||
    s.includes("support") ||
    s.includes("bereavement") ||
    s.includes("palliative") ||
    s.includes("addiction")
  ) {
    return HandHeart;
  }
  if (
    s.includes("grief") ||
    s.includes("loss") ||
    s.includes("emotional") ||
    s.includes("mood") ||
    s.includes("depression") ||
    s.includes("women") ||
    s.includes("men")
  ) {
    return Heart;
  }
  if (s.includes("sleep")) return Moon;
  if (
    s.includes("academic") ||
    s.includes("exam") ||
    s.includes("school") ||
    s.includes("learning") ||
    s.includes("career")
  ) {
    return GraduationCap;
  }
  if (
    s.includes("game") ||
    s.includes("gaming") ||
    s.includes("media") ||
    s.includes("phone") ||
    s.includes("online") ||
    s.includes("tele")
  ) {
    return Smartphone;
  }
  if (
    s.includes("trauma") ||
    s.includes("stress") ||
    s.includes("anxiety") ||
    s.includes("panic") ||
    s.includes("phobia") ||
    s.includes("adhd") ||
    s.includes("autism") ||
    s.includes("obsessive") ||
    s.includes("psych") ||
    s.includes("thought")
  ) {
    return Brain;
  }
  return HeartHandshake;
}

const defaultPsychological = [
  { name: "Addiction Counselling", slug: "addiction-counselling" },
  { name: "ADHD (Attention-Deficit/Hyperactivity Difficulties)", slug: "adhd-attention-deficit-hyperactivity-difficulties" },
  { name: "Adolescent Exam Stress & Academic Pressure Counselling", slug: "adolescent-exam-stress-academic-pressure-counselling" },
  { name: "Adolescent Relationship Concerns Counselling", slug: "adolescent-relationship-concerns-counselling" },
  { name: "Gaming-Related Addiction Counselling", slug: "aming-related-addiction-counselling" },
  { name: "Anger Management Counselling", slug: "anger-management-counselling" },
  { name: "Anxiety and Excessive Worry", slug: "anxiety-and-excessive-worry" },
  { name: "Anxiety Counselling", slug: "anxiety-counselling" },
];

const defaultPsychoOncological = [
  { name: "Anxiety, Depression & Emotional Distress", slug: "anxiety-depression-emotional-distress" },
  { name: "Bereavement Counselling & Support Groups", slug: "bereavement-counselling-support-groups" },
  { name: "Body Image, Self-Esteem & Adjustment Counselling", slug: "body-image-self-esteem-adjustment-counselling" },
  { name: "Body Image, Self-Esteem & Identity", slug: "body-image-self-esteem-identity" },
  { name: "Cancer Diagnosis & Emotional Adjustment", slug: "cancer-diagnosis-emotional-adjustment" },
  { name: "Cancer Survivorship & Life Beyond Treatment", slug: "cancer-survivorship-life-beyond-treatment" },
  { name: "Cancer Survivorship Counselling", slug: "cancer-survivorship-counselling" },
  { name: "Caregiver Stress, Burnout & Emotional Support", slug: "caregiver-stress-burnout-emotional-support" },
];

const defaultYogaPhysioNutrition = [
  { name: "Antenatal Physiotherapy", slug: "antenatal-physiotherapy" },
  { name: "Balance & Coordination Training", slug: "balance-coordination-training" },
  { name: "Geriatric Physiotherapy & Rehabilitation", slug: "geriatric-physiotherapy-rehabilitation" },
  { name: "Hand Strengthening & Functional Rehabilitation", slug: "hand-strengthening-functional-rehabilitation" },
  { name: "Musculoskeletal & Orthopaedic Physiotherapy", slug: "musculoskeletal-orthopaedic-physiotherapy" },
  { name: "Neurological Rehabilitation & Stroke Rehabilitation", slug: "neurological-rehabilitation-stroke-rehabilitation" },
  { name: "Obesity Management & Exercise Therapy", slug: "obesity-management-exercise-therapy" },
  { name: "Oncology Rehabilitation / Onco Rehabilitation", slug: "oncology-rehabilitation-onco-rehabilitation" },
];

const steps = [
  [ClipboardList, "Choose a Service", "Select the type of support you need"],
  [UserRound, "Choose a Counsellor", "View profiles and select your counsellor"],
  [CalendarDays, "Select Date & Time", "Pick a convenient slot for you"],
  [CreditCard, "Make Payment", "Pay securely online"],
  [Mail, "Receive Confirmation", "Get appointment details instantly"],
  [Video, "Attend Your Session", "Join through your secure session link"],
] as const;

function OrnamentTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="ornament-title">
      <span />
      <h2>{children}</h2>
      <span />
    </div>
  );
}

export const dynamic = "force-dynamic";

export default async function Home() {
  const [featuredCounsellor, psychRows, oncoRows, yogaRows] = await Promise.all([
    prisma.counsellor.findFirst({
      where: { isActive: true },
      orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
    }),
    prisma.service.findMany({
      where: { category: "Comprehensive Psychological Services", isActive: true },
      orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
      take: 8,
      select: { name: true, slug: true },
    }),
    prisma.service.findMany({
      where: { category: "Comprehensive Psycho-Oncological Services", isActive: true },
      orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
      take: 8,
      select: { name: true, slug: true },
    }),
    prisma.service.findMany({
      where: { category: "Yoga, Physiotherapy & Nutrition Support", isActive: true },
      orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
      take: 8,
      select: { name: true, slug: true },
    }),
  ]);

  const serviceGroups = [
    {
      title: "Our Comprehensive Psychological Support",
      categoryUrl: "/services/psychological",
      items: psychRows.length > 0 ? psychRows : defaultPsychological,
    },
    {
      title: "Our Comprehensive Psycho-Oncological Support",
      categoryUrl: "/services/psycho-oncological",
      items: oncoRows.length > 0 ? oncoRows : defaultPsychoOncological,
    },
    {
      title: "Yoga, Physiotherapy & Nutrition Services",
      categoryUrl: "/services/yoga-physiotherapy-nutrition",
      items: yogaRows.length > 0 ? yogaRows : defaultYogaPhysioNutrition,
    },
  ];

  return (
    <>
      <HeroSlider />
      {featuredCounsellor && (
        <section className="booking-wrap" aria-label="Counsellor and booking">
          <Counsellorshowcase counsellor={featuredCounsellor} />
        </section>
      )}
      <section className="services-section">
        {serviceGroups.map((group) => (
          <div className="service-group" key={group.title}>
            <OrnamentTitle>{group.title}</OrnamentTitle>
            <div className="service-grid">
              {group.items.map((service) => {
                const Icon = getServiceIcon(service.slug, service.name);
                return (
                  <Link
                    href={`/services/${service.slug}`}
                    className="service-tile"
                    key={service.slug}
                  >
                    <Icon />
                    <span>{service.name}</span>
                  </Link>
                );
              })}
            </div>
            <Link className="outline-button services-button" href={group.categoryUrl}>
              View All Services
            </Link>
          </div>
        ))}
      </section>
      <section className="process-section" id="how-it-works">
        <OrnamentTitle>How Online Counselling Works</OrnamentTitle>
        <div className="steps">
          {steps.map(([Icon, title, text], i) => (
            <div className="step" key={title}>
              <div className="step-icon">
                <Icon />
                <span>{i + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <div className="support-strip">
          <div className="support-unit">
            <Headphones />
            <div>
              <h3>Need Immediate Support?</h3>
              <p>
                If you are experiencing an emergency or crisis, contact your local emergency service or a verified crisis support resource.
              </p>
            </div>
          </div>
          <div className="support-unit resources">
            <HeartHandshake />
            <div>
              <h3>Helpline Resources</h3>
              <p>Mental health support and crisis resources are available in our resources section.</p>
            </div>
            <Link href="/resources">View Resources</Link>
          </div>
        </div>
      </section>
    </>
  );
}
