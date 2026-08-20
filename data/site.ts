import { Brain, BriefcaseBusiness, HeartHandshake, House, Laptop, SearchCheck, Sparkles, Users } from "lucide-react";

export const concerns = [
  ["anxiety", "Anxiety", "Understand persistent worry and build steadier ways to respond."],
  ["depression", "Depression", "Compassionate support for low mood, disconnection and loss of interest."],
  ["stress-burnout", "Stress & Burnout", "Restore sustainable rhythms when pressure begins to overwhelm."],
  ["trauma-ptsd", "Trauma & PTSD", "Safety-led care for difficult experiences and their lasting effects."],
  ["ocd", "OCD", "Evidence-informed support for intrusive thoughts and repetitive patterns."],
  ["relationships", "Relationship Difficulties", "Explore communication, trust and patterns of connection."],
  ["grief", "Grief & Loss", "A thoughtful space to process change, bereavement and transition."],
  ["self-esteem", "Self-esteem", "Develop a kinder, more grounded relationship with yourself."],
  ["child-behaviour", "Child Behaviour", "Support children and parents through emotional and behavioural concerns."],
  ["academic-stress", "Academic Stress", "Practical psychological support for pressure and performance anxiety."],
  ["workplace-stress", "Workplace Stress", "Navigate boundaries, demands and professional wellbeing."],
  ["emotional-regulation", "Emotional Regulation", "Learn to recognise, tolerate and respond to strong feelings."]
] as const;

export const services = [
  { slug: "individual-therapy", title: "Individual Therapy", text: "One-to-one professional therapy designed around your needs.", icon: Brain },
  { slug: "couples-therapy", title: "Couples Therapy", text: "Strengthen communication, rebuild trust and understand patterns.", icon: HeartHandshake },
  { slug: "child-adolescent-therapy", title: "Child & Adolescent Therapy", text: "Age-appropriate support for young people and parents.", icon: Sparkles },
  { slug: "family-therapy", title: "Family Therapy", text: "Navigate conflict and improve communication within families.", icon: House },
  { slug: "psychological-assessment", title: "Psychological Assessment", text: "Structured psychological and behavioural evaluation.", icon: SearchCheck },
  { slug: "corporate-wellness", title: "Corporate Mental Wellness", text: "Human-centred wellbeing programs for organisations.", icon: BriefcaseBusiness },
  { slug: "online-therapy", title: "Online Therapy", text: "Professional support wherever you feel comfortable.", icon: Laptop },
  { slug: "career-counselling", title: "Career Counselling", text: "Psychology-informed support for career decisions.", icon: Users }
];

export const specialists = [
  { slug:"ananya-raman", name:"Dr. Ananya Raman", role:"Clinical Psychologist", qualification:"M.Phil Clinical Psychology", experience:"12 years", languages:"English, Tamil", expertise:["Anxiety", "Trauma", "Emotional regulation"], image:"https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85" },
  { slug:"meera-krishnan", name:"Meera Krishnan", role:"Counselling Psychologist", qualification:"M.Sc Counselling Psychology", experience:"9 years", languages:"English, Tamil, Hindi", expertise:["Stress", "Grief", "Self-esteem"], image:"https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=900&q=85" },
  { slug:"arjun-nair", name:"Arjun Nair", role:"Relationship Therapist", qualification:"M.Sc Psychology, Couples Therapy", experience:"10 years", languages:"English, Malayalam, Tamil", expertise:["Couples", "Communication", "Family conflict"], image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85" },
  { slug:"kavya-sen", name:"Kavya Sen", role:"Child Psychologist", qualification:"M.Sc Child Psychology", experience:"8 years", languages:"English, Tamil, Bengali", expertise:["Child anxiety", "Behaviour", "Parent support"], image:"https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=85" },
  { slug:"rohan-iyer", name:"Dr. Rohan Iyer", role:"Consultant Psychiatrist", qualification:"MD Psychiatry", experience:"14 years", languages:"English, Tamil, Hindi", expertise:["Mood concerns", "OCD", "Integrated care"], image:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=85" },
  { slug:"nivedita-rao", name:"Nivedita Rao", role:"Behavioural Therapist", qualification:"M.Sc Applied Psychology", experience:"7 years", languages:"English, Kannada, Tamil", expertise:["Habits", "ADHD support", "Burnout"], image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85" }
];

export const resources = [
  ["when-do-you-need-therapy", "Therapy", "How to Know When You Need Therapy", "A practical guide to recognising when professional support may help."],
  ["anxiety-vs-worry", "Anxiety", "Anxiety vs Everyday Worry", "Understanding the difference between a normal response and a persistent pattern."],
  ["signs-of-burnout", "Workplace", "Recognising the Signs of Burnout", "What emotional exhaustion can look like—and what to do next."],
  ["understanding-panic-attacks", "Mental health", "Understanding Panic Attacks", "A calm, evidence-informed introduction to panic symptoms."],
  ["child-anxiety", "Parenting", "Helping a Child Manage Anxiety", "Ways parents can create safety, language and steady support."],
  ["how-therapy-works", "Therapy", "How Therapy Actually Works", "What happens in the room, and how meaningful change develops."],
  ["healthy-communication", "Relationships", "Healthy Communication in Relationships", "Small practices for clearer, safer conversations."],
  ["emotional-resilience", "Wellbeing", "Building Emotional Resilience", "Resilience is not toughness—it is the capacity to adapt and recover."]
] as const;

export const programs = [
  ["corporate-wellness", "Corporate Wellness", "Employee wellbeing, manager sensitisation and workplace support systems."],
  ["schools", "Schools", "Emotional literacy and behavioural support for students and educators."],
  ["colleges", "Colleges", "Student mental health, academic stress and career wellbeing."],
  ["workshops", "Workshops", "Focused sessions on awareness, communication and emotional resilience."]
] as const;

export const faqs = [
  ["What happens during the first therapy session?", "Your first session is a conversation about what brings you in, what you hope may change, and whether the therapist feels like a good fit."],
  ["How long does therapy take?", "There is no fixed timeline. It depends on your goals, context and preferred pace. Your therapist will review progress with you."],
  ["Is therapy confidential?", "Privacy is central to care. Your therapist will explain confidentiality and its safety or legal limits before you begin."],
  ["Can I choose my psychologist?", "Yes. You can browse profiles or ask our care team to help match you based on needs, preferences and availability."],
  ["Is online therapy available?", "Yes. Online and in-person consultation options are available, depending on the specialist and type of care."],
  ["Do I need therapy or psychiatry?", "Therapy focuses on psychological support; psychiatry includes medical evaluation. Our team can help identify a suitable starting point without diagnosing through the website."],
  ["Can children attend therapy?", "Yes. Child therapy is age-appropriate and often includes collaboration with parents or caregivers."],
  ["Can couples attend together?", "Yes. Couples therapy is designed for partners to explore interaction patterns and shared goals together."]
] as const;

export const nav = [
  { label:"About", href:"/about", groups:[{ title:"Ulam Seyal", items:["About Ulam Seyal","Our Philosophy","Our Approach","Vision & Mission"]},{ title:"Standards", items:["Clinical Ethics","Privacy & Confidentiality","Why Ulam Seyal"]}] },
  { label:"Mental Health", href:"/mental-health", groups:[{ title:"Emotional & Mood", items:["Anxiety","Depression","Stress & Burnout","Grief & Loss"]},{ title:"Psychological", items:["OCD","Trauma & PTSD","Panic Disorder","Self-esteem Issues"]},{ title:"Relationships", items:["Couples","Family Conflicts","Parenting Concerns"]},{ title:"Young People", items:["Child Psychology","Academic Stress","ADHD Support"]}] },
  { label:"Services", href:"/services", groups:[{ title:"Therapy", items:["Individual Therapy","Couples Therapy","Family Therapy","Child & Adolescent Therapy"]},{ title:"Flexible Care", items:["Online Therapy","Psychological Assessment","Career Counselling","Corporate Wellness"]}] },
  { label:"Specialists", href:"/specialists", groups:[{ title:"Find a professional", items:["Clinical Psychologists","Counselling Psychologists","Child Psychologists","Relationship Therapists","Psychiatrists"]}] },
  { label:"For You", href:"/for-you/adults", groups:[{ title:"Life stages", items:["Children","Teenagers","Students","Adults","Parents"]},{ title:"Relationships & work", items:["Couples","Working Professionals","Organisations"]}] },
  { label:"Resources", href:"/resources", groups:[{ title:"Learn", items:["Mental Health Guides","Articles","FAQs","Videos"]},{ title:"Check in", items:["Stress Check","Anxiety Check","Burnout Check"]}] },
  { label:"Programs", href:"/programs", groups:[{ title:"Institutions", items:["Corporate Wellness","Schools","Colleges","Workshops"]}] }
];
