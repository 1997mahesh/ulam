import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Button({ href, children, light=false }: { href:string; children:ReactNode; light?:boolean }) {
  return <Link className={`btn ${light ? "btn-light" : "btn-primary"}`} href={href}>{children}<ArrowRight size={15}/></Link>;
}
export function SectionTitle({ eyebrow, title, text, center=false }: { eyebrow:string; title:string; text?:string; center?:boolean }) {
  return <div className={center ? "mx-auto mb-12 max-w-3xl text-center" : "mb-12 max-w-3xl"}><p className="eyebrow mb-4">{eyebrow}</p><h2 className="heading">{title}</h2>{text&&<p className="lede mt-5">{text}</p>}</div>;
}
export function Breadcrumb({current,parent}:{current:string;parent?:{label:string;href:string}}){return <div className="mb-8 flex items-center gap-2 text-xs text-[#647873]"><Link href="/">Home</Link><span>/</span>{parent&&<><Link href={parent.href}>{parent.label}</Link><span>/</span></>}<span>{current}</span></div>}
