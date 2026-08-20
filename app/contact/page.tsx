import {Mail,MapPin,Phone} from "lucide-react";
import {PageHero} from "@/components/inner";
import {ContactForm} from "@/components/contact-form";
import {getSiteSettings} from "@/lib/site-settings";

export const metadata={title:"Contact"};

export default async function Page(){
  const settings=await getSiteSettings();
  return <><PageHero eyebrow="Contact us" title="A human conversation, from the start" text="Ask about care, specialist matching, formats or institutional programs. Our team will help you find a sensible next step."/><section className="section"><div className="container"><ContactForm/><div className="mt-12 grid gap-5 md:grid-cols-3">{[[Phone,"Call",settings.phone],[Mail,"Email",settings.email],[MapPin,"Visit",settings.address]].map(([Icon,title,detail])=>{const ContactIcon=Icon as typeof Phone;return <div className="card p-8" key={title as string}><ContactIcon/><h2 className="mt-8 text-3xl">{title as string}</h2><p className="mt-3 text-sm">{detail as string}</p></div>})}</div></div></section></>;
}
