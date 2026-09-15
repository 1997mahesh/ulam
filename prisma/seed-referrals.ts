import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const bio = `Dr. Suresh Kumar B is a Consultant Medical Oncologist with advanced training and clinical experience in the comprehensive management of cancer. He has completed his MBBS, MD in Internal Medicine and DM in Medical Oncology from Tata Memorial Hospital, Mumbai, and has additional training in medical oncology and palliative care. He provides evidence-based, individualized cancer care encompassing diagnostic evaluation, treatment planning, systemic anti-cancer therapy, treatment monitoring and supportive care.

His areas of clinical care include a broad spectrum of malignancies such as breast cancer, lung cancer, head and neck cancers, gastrointestinal cancers, genitourinary cancers and other solid tumours, as well as haematological malignancies including lymphoma. His approach integrates the cancer type, stage, disease biology, overall health and individual treatment goals of each patient to develop an appropriate and personalized management plan.

He also has specialized training in palliative care, providing holistic support for patients with advanced or life-limiting cancer. Palliative care focuses on effective symptom and pain management, psychological and emotional support, improving quality of life, supporting caregivers, and facilitating meaningful communication regarding treatment goals and future care. He works collaboratively with patients, families and multidisciplinary healthcare teams to ensure continuity of care throughout the cancer journey, from diagnosis and active treatment to survivorship, advanced disease and end-of-life care. His practice emphasizes clinical excellence, compassionate communication, patient-centred decision-making and holistic cancer care, with the aim of providing patients and their families with comprehensive medical and supportive care at every stage of the illness.`;

  const res = await prisma.referralService.upsert({
    where: { slug: "dr-sureshkumar-b" },
    update: {
      name: "Dr. Sureshkumar B",
      designation: "Consultant Medical Oncologist",
      qualifications: "MBBS, MD (Internal Medicine), DM (Medical Oncology - Tata Memorial Hospital, Mumbai), MRCP, CCEPC",
      department: "Medical Oncology & Palliative Care",
      experience: "Tata Memorial Hospital Alum | Advanced Clinical Training",
      shortBio: "Consultant Medical Oncologist with advanced training in comprehensive cancer management, systemic anti-cancer therapy, and palliative care.",
      bio: bio,
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
    create: {
      slug: "dr-sureshkumar-b",
      name: "Dr. Sureshkumar B",
      designation: "Consultant Medical Oncologist",
      qualifications: "MBBS, MD (Internal Medicine), DM (Medical Oncology - Tata Memorial Hospital, Mumbai), MRCP, CCEPC",
      department: "Medical Oncology & Palliative Care",
      experience: "Tata Memorial Hospital Alum | Advanced Clinical Training",
      shortBio: "Consultant Medical Oncologist with advanced training in comprehensive cancer management, systemic anti-cancer therapy, and palliative care.",
      bio: bio,
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

  console.log("Successfully upserted referral service:", res.name, res.slug);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
