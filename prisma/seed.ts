import "dotenv/config";


import {PrismaClient} from "@prisma/client";
import {hash} from "bcryptjs";
const prisma=new PrismaClient();
async function main(){const email=process.env.ADMIN_EMAIL?.toLowerCase(),password=process.env.ADMIN_PASSWORD;if(!email||!password)throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD before seeding");if(password.length<12)throw new Error("ADMIN_PASSWORD must be at least 12 characters");await prisma.admin.upsert({where:{email},update:{name:process.env.ADMIN_NAME||"Website Administrator",passwordHash:await hash(password,12)},create:{email,name:process.env.ADMIN_NAME||"Website Administrator",passwordHash:await hash(password,12)}});const definitions=[["Individual Psychotherapy",50],["Psycho-oncology Support",50],["Couples Therapy",100],["Family Therapy",100]] as const;const services=[];for(const[name,durationMinutes]of definitions){const slug=name.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");services.push(await prisma.service.upsert({where:{slug},update:{},create:{name,slug,durationMinutes,shortDescription:`Professional ${name.toLowerCase()} at Ulam Seyal.`,description:`Compassionate, confidential ${name.toLowerCase()} tailored to individual needs.`}}))}const Counsellors=[{slug:"dhayanandan-sanmugam",name:"Dhayanandan Sanmugam",designation:"Senior Counsellor & Psychotherapist",experienceYears:10,specializations:["Psychotherapy","Psycho-oncology","Family counselling"]},{slug:"ananya-raman",name:"Ananya Raman",designation:"Counselling Psychologist",experienceYears:8,specializations:["Anxiety","Stress","Emotional regulation"]},{slug:"meera-krishnan",name:"Meera Krishnan",designation:"Family & Couples Therapist",experienceYears:9,specializations:["Relationships","Family communication","Grief"]}];for(const c of Counsellors){const saved=await prisma.counsellor.upsert({where:{slug:c.slug},update:{},create:{...c,bio:`${c.name} provides compassionate, evidence-informed psychological support in a private and collaborative setting.`,shortBio:"Compassionate support tailored to each person's needs.",languages:["English","Tamil"],qualifications:"Postgraduate qualification in Psychology",onlineEnabled:true,isActive:true}});for(const service of services)await prisma.counsellorservice.upsert({where:{counsellorId_serviceId:{counsellorId:saved.id,serviceId:service.id}},update:{},create:{counsellorId:saved.id,serviceId:service.id}});for(const dayOfWeek of[1,2,3,4,5]){const exists=await prisma.availability.findFirst({where:{counsellorId:saved.id,dayOfWeek,startTime:"10:00"}});if(!exists)await prisma.availability.create({data:{counsellorId:saved.id,dayOfWeek,startTime:"10:00",endTime:"18:00",slotDurationMinutes:60}})}}if(!await prisma.fAQ.count())await prisma.fAQ.createMany({data:[{question:"How do I book a consultation?",answer:"Choose a service, counsellor and available time through the booking page.",displayOrder:1},{question:"Are online sessions confidential?",answer:"Sessions are conducted using privacy-conscious processes and your information is handled carefully.",displayOrder:2}]});  if (!await prisma.testimonial.count()) await prisma.testimonial.create({ data: { nameOrAnonymousLabel: "Working Professional", testimonial: "I felt heard and supported throughout the process.", isPublished: true, displayOrder: 1 } });
  await prisma.referralService.upsert({
    where: { slug: "dr-sureshkumar-b" },
    update: {},
    create: {
      slug: "dr-sureshkumar-b",
      name: "Dr. Sureshkumar B",
      designation: "Consultant Medical Oncologist",
      qualifications: "MBBS, MD (Internal Medicine), DM (Medical Oncology - Tata Memorial Hospital, Mumbai), MRCP, CCEPC",
      department: "Medical Oncology & Palliative Care",
      experience: "Tata Memorial Hospital Alum | Advanced Clinical Training",
      shortBio: "Consultant Medical Oncologist with advanced training in comprehensive cancer management, systemic anti-cancer therapy, and palliative care.",
      bio: "Dr. Suresh Kumar B is a Consultant Medical Oncologist with advanced training and clinical experience in the comprehensive management of cancer. He has completed his MBBS, MD in Internal Medicine and DM in Medical Oncology from Tata Memorial Hospital, Mumbai, and has additional training in medical oncology and palliative care. He provides evidence-based, individualized cancer care encompassing diagnostic evaluation, treatment planning, systemic anti-cancer therapy, treatment monitoring and supportive care.\n\nHis areas of clinical care include a broad spectrum of malignancies such as breast cancer, lung cancer, head and neck cancers, gastrointestinal cancers, genitourinary cancers and other solid tumours, as well as haematological malignancies including lymphoma. His approach integrates the cancer type, stage, disease biology, overall health and individual treatment goals of each patient to develop an appropriate and personalized management plan.\n\nHe also has specialized training in palliative care, providing holistic support for patients with advanced or life-limiting cancer. Palliative care focuses on effective symptom and pain management, psychological and emotional support, improving quality of life, supporting caregivers, and facilitating meaningful communication regarding treatment goals and future care. He works collaboratively with patients, families and multidisciplinary healthcare teams to ensure continuity of care throughout the cancer journey, from diagnosis and active treatment to survivorship, advanced disease and end-of-life care. His practice emphasizes clinical excellence, compassionate communication, patient-centred decision-making and holistic cancer care, with the aim of providing patients and their families with comprehensive medical and supportive care at every stage of the illness.",
      photo: "/img/referrals/dr-sureshkumar-b.jpg",
      areasOfFocus: [
        "Breast Cancer",
        "Lung Cancer",
        "Head & Neck Cancers",
        "Gastrointestinal Cancers",
        "Genitourinary Cancers",
        "Solid Tumours",
        "Haematological Malignancies & Lymphoma",
        "Systemic Anti-Cancer Therapy",
        "Palliative Care & Pain Management",
        "End-of-Life & Supportive Care"
      ],
      therapeuticModalities: [
        "Diagnostic Evaluation & Staging",
        "Personalized Treatment Planning",
        "Systemic Chemotherapy & Targeted Therapy",
        "Holistic Palliative & Supportive Care",
        "Psychological & Caregiver Support",
        "Multidisciplinary Team Care"
      ],
      hospitalAffiliation: "Tata Memorial Hospital, Mumbai",
      languages: ["Tamil", "English", "Hindi"],
      isActive: true,
      displayOrder: 1,
    },
  });
  await prisma.siteSetting.upsert({ where: { key: "timezone" }, update: { value: "Asia/Kolkata" }, create: { key: "timezone", value: "Asia/Kolkata", group: "booking" } });
}
main().finally(() => prisma.$disconnect());

