import Image from "next/image";
import Link from "next/link";
import {notFound} from "next/navigation";
import {Button,Breadcrumb} from "@/components/ui";
import {prisma} from "@/lib/prisma";

export const dynamic="force-dynamic";

export default async function Counsellor({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const c=await prisma.counsellor.findFirst({where:{slug,isActive:true},include:{services:{where:{service:{isActive:true}},include:{service:true},orderBy:{service:{displayOrder:"asc"}}}}});
  if(!c)notFound();
  return <section className="section"><div className="container"><Breadcrumb current={c.name} parent={{label:"Mental Health Consultant",href:"/counsellors"}}/><div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">{c.photo&&<div className="image-cover aspect-[4/4.7]"><Image src={c.photo} fill className="object-cover" alt={c.name}/></div>}<div><p className="eyebrow">{c.designation}</p><h1 className="display mt-4">{c.name}</h1><p className="mt-4">{c.qualifications} · {c.experienceYears} years</p><p className="lede mt-7">{c.bio}</p><div className="my-7 border-y py-5"><b>Specializations:</b>{" "}{c.services.length?c.services.map(({service},index)=><span key={service.id}>{index>0&&" · "}<Link className="specialization-link" href={`/services/${service.slug}`}>{service.name}</Link></span>):"Available on request"}</div><p><b>Languages:</b> {c.languages.join(", ")}</p><div className="mt-8"><Button href={`/book-consultation?counsellor=${encodeURIComponent(c.slug)}`}>Book a consultation</Button></div></div></div></div></section>;
}
