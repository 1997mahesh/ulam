import { PageHero } from "@/components/inner";
import { Counsellorshowcase } from "@/components/counsellor-showcase";
import { prisma } from "@/lib/prisma";
export const dynamic="force-dynamic";
export default async function Counsellors(){const rows=await prisma.counsellor.findMany({where:{isActive:true},orderBy:[{displayOrder:"asc"},{name:"asc"}]});return <><PageHero eyebrow="Our team" breadcrumb="Mental Health Consultant" title="Professionals who listen before they guide" text="Meet experienced professionals and choose support that feels right for you."/><section className="section Counsellors-listing"><div className="container">{rows.length?<div className="counsellor-showcase-grid">{rows.map(c=><Counsellorshowcase key={c.id} counsellor={c} compact/>)}</div>:<p className="admin-empty">Counsellor profiles will be available soon.</p>}</div></section></>}
