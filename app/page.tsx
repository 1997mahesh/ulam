import { HeroSlider } from "@/components/hero-slider";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Counsellorshowcase } from "@/components/counsellor-showcase";
import { CalendarDays, ClipboardList, CreditCard, HeartHandshake, Mail, Monitor, ShieldCheck, UserRound, UsersRound, Brain, Heart, HandHeart, Sprout, Headphones, Baby, Video } from "lucide-react";

const serviceGroups = [
  { title: "Our Psychological Support", items: [[Heart, "Cancer Adjustment Support"], [HandHeart, "Caregiver Support"], [Brain, "Treatment-related Anxiety"], [Sprout, "Survivorship Support"], [UserRound, "Individual Emotional Support"], [UsersRound, "Family Cancer Support"], [Baby, "Young Patient Support"], [Heart, "Grief & Loss Support"]] },
  { title: "Our Psychological Oncology Support", items: [[Brain, "Individual Counselling"], [Brain, "Stress & Anxiety Support"], [HandHeart, "Addiction Counselling"], [Sprout, "Personal Growth & Well-being"], [UserRound, "Emotional Wellness"], [Baby, "Child & Adolescent Counselling"], [Heart, "Grief Counselling"], [Monitor, "Online Counselling"]] },
  { title: "Dietician And Nutrition Services", items: [[UsersRound, "Relationship Counselling"], [Heart, "Marital Counselling"], [UserRound, "Family Counselling"], [HandHeart, "Conflict Resolution"], [UsersRound, "Communication Support"], [Heart, "Pre-marital Counselling"], [Baby, "Parenting Support"], [Sprout, "Relationship Growth"]] },
] as const;
const steps = [[ClipboardList,"Choose a Service","Select the type of support you need"],[UserRound,"Choose a Counsellor","View profiles and select your counsellor"],[CalendarDays,"Select Date & Time","Pick a convenient slot for you"],[CreditCard,"Make Payment","Pay securely online"],[Mail,"Receive Confirmation","Get appointment details instantly"],[Video,"Attend Your Session","Join through your secure session link"]] as const;
function OrnamentTitle({children}:{children:React.ReactNode}){return <div className="ornament-title"><span/><h2>{children}</h2><span/></div>}
export const dynamic="force-dynamic";
export default async function Home(){const featuredCounsellor=await prisma.counsellor.findFirst({where:{isActive:true},orderBy:[{displayOrder:"asc"},{name:"asc"}]});return <>
<HeroSlider />
{featuredCounsellor&&<section className="booking-wrap" aria-label="Counsellor and booking"><Counsellorshowcase counsellor={featuredCounsellor}/></section>}
<section className="services-section">{serviceGroups.map(group=><div className="service-group" key={group.title}><OrnamentTitle>{group.title}</OrnamentTitle><div className="service-grid">{group.items.map(([Icon,title])=><Link href="/services" className="service-tile" key={title}><Icon/><span>{title}</span></Link>)}</div><Link className="outline-button services-button" href="/services">View All Services</Link></div>)}</section>
<section className="process-section" id="how-it-works"><OrnamentTitle>How Online Counselling Works</OrnamentTitle><div className="steps">{steps.map(([Icon,title,text],i)=><div className="step" key={title}><div className="step-icon"><Icon/><span>{i+1}</span></div><h3>{title}</h3><p>{text}</p></div>)}</div><div className="support-strip"><div className="support-unit"><Headphones/><div><h3>Need Immediate Support?</h3><p>If you are experiencing an emergency or crisis, contact your local emergency service or a verified crisis support resource.</p></div></div><div className="support-unit resources"><HeartHandshake/><div><h3>Helpline Resources</h3><p>Mental health support and crisis resources are available in our resources section.</p></div><Link href="/resources">View Resources</Link></div></div></section>
</>}
