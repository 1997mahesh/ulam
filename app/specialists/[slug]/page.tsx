import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb, Button } from "@/components/ui";
import { specialists } from "@/data/site";
export function generateStaticParams(){return specialists.map(x=>({slug:x.slug}))}
export default async function Page({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const p=specialists.find(x=>x.slug===slug); if(!p)notFound();
 return <section className="section bg-[#f5f2eb]"><div className="container"><Breadcrumb current={p.name}/><div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]"><div className="image-cover aspect-[4/4.7]"><Image fill src={p.image} alt={p.name} className="object-cover"/></div><div><p className="eyebrow">{p.role}</p><h1 className="display mt-4">{p.name}</h1><p className="mt-4 text-sm">{p.qualification} · {p.experience}</p><div className="my-8 border-y py-6"><p className="eyebrow mb-3">Areas of expertise</p><p>{p.expertise.join(" · ")}</p></div><h2 className="text-3xl">Professional philosophy</h2><p className="lede mt-4">I believe therapy works best when it feels collaborative, clear and deeply respectful of each person&apos;s lived experience.</p><p className="mt-6 text-sm"><strong>Languages:</strong> {p.languages}</p><p className="mt-2 text-sm"><strong>Availability:</strong> Online and in-person · by appointment</p><div className="mt-8"><Button href={'/book-consultation?specialist='+p.slug}>Book with {p.name.split(" ")[1]}</Button></div><p className="mt-6 text-xs text-[#667873]">Demonstration profile. Credentials and availability are placeholders pending verification.</p></div></div></div></section>
}
