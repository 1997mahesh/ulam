import {cache} from "react";
import {prisma} from "@/lib/prisma";

export const siteSettingDefaults={siteName:"Ulam Seyal",tagline:"Mind. Behaviour. Wellbeing.",phone:"+91 976 976 9521",email:"care@ulamseyal.com",address:"Chennai, Tamil Nadu",supportNumber:"+91 976 976 9521",timezone:"Asia/Kolkata",defaultDuration:"60",socialInstagram:"",socialLinkedIn:"",socialYouTube:"",socialFacebook:"",socialX:"",metaTitle:"Ulam Seyal | Psychology, Therapy & Mental Wellness",metaDescription:"Private, professional and evidence-informed psychological care for individuals, couples, young people and organisations.",paymentsEnabled:"false",paymentCurrency:"INR",paymentInstructions:"Pay the exact consultation amount and keep the transaction reference for verification.",upiEnabled:"false",upiPayeeName:"Ulam Seyal",upiId:"",upiQrImage:"",bankEnabled:"false",bankAccountName:"",bankName:"",bankAccountNumber:"",bankIfsc:"",bankAccountType:""} as const;
export type SiteSettings={ [K in keyof typeof siteSettingDefaults]:string };

export const getSiteSettings=cache(async():Promise<SiteSettings>=>{const rows=await prisma.siteSetting.findMany({select:{key:true,value:true}}),stored=Object.fromEntries(rows.map(row=>[row.key,row.value]));return Object.fromEntries(Object.entries(siteSettingDefaults).map(([key,fallback])=>[key,stored[key]?.trim()||fallback])) as SiteSettings});
export const phoneHref=(phone:string)=>`tel:${phone.replace(/[^+\d]/g,"")}`;
