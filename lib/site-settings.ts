import "server-only";
import {cache} from "react";
import {prisma} from "@/lib/prisma";
import {siteSettingDefaults,type SiteSettings} from "@/lib/site-settings-shared";

export const getSiteSettings=cache(async():Promise<SiteSettings>=>{const rows=await prisma.siteSetting.findMany({select:{key:true,value:true}}),stored=Object.fromEntries(rows.map(row=>[row.key,row.value]));return Object.fromEntries(Object.entries(siteSettingDefaults).map(([key,fallback])=>[key,stored[key]?.trim()||fallback])) as SiteSettings});
