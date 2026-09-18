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
  [
    "What happens during my first session, and why do you meet with me directly first?",
    "Your initial session is an intake consultation designed to understand your current concerns, background, and personal goals in a respectful, non-judgmental space. There is no pressure to share more than you feel ready to discuss. We meet with you directly rather than family members or third parties to establish direct trust, hear your personal perspective, protect privacy, and ensure your voice remains central to your care plan. (Note for Minors: For children and adolescents, parental/guardian involvement, consent, assent, and safeguarding protocols are carefully coordinated alongside the young person's care.)"
  ],
  [
    "What can I expect during ongoing sessions, and what is my role in therapy?",
    "Each session is a collaborative partnership guided by your goals. Therapy is dynamic—it goes beyond just 'venting' or receiving passive advice. Your therapist helps provide structure to explore thoughts, emotions, behaviors, and relationship dynamics. Your role involves showing up openly, reflecting on experiences, and actively practicing strategies and insights in your day-to-day life between sessions."
  ],
  [
    "Do I need a diagnosed mental illness or a clearly defined problem to start therapy?",
    "No. Seeking psychological support does not indicate the presence of a mental illness. Many clients engage in therapy for everyday stressors, grief, relationship difficulties, workplace burnout, major life transitions, or personal growth. You do not need a specific diagnosis; if you simply feel 'stuck' or overwhelmed, therapy provides a dedicated space to untangle your feelings and gain clarity."
  ],
  [
    "How long does therapy take, and how will I know if it is actually working?",
    "Duration varies based on individual needs—ranging from short-term, solution-focused support (a few weeks to months) to longer-term therapy for deeper self-exploration or chronic life stressors. Signs of progress include heightened self-awareness, improved emotional regulation, healthier communication, and a stronger ability to navigate challenges. We regularly review goals together to ensure sessions remain meaningful and effective."
  ],
  [
    "Is everything discussed confidential, and can family members speak to my therapist?",
    "Yes. Confidentiality is fundamental to our therapeutic relationship. What you share remains strictly private, subject to standard ethical and legal limits (such as immediate risk of harm to yourself or others, or mandated reporting requirements). For adult clients, information is not shared with family members without explicit consent. If family involvement is clinically beneficial, it is discussed and agreed upon with you beforehand."
  ],
  [
    "What if I feel anxious, nervous, or worried about being judged?",
    "Feeling nervous before starting therapy is entirely normal. Opening up to someone new can feel intimidating. Our psychologists are committed to providing a professional, compassionate, and non-judgmental environment. Your therapist will move at your pace, ensuring you feel grounded, respected, and in complete control of what you choose to share."
  ],
  [
    "What is psycho-oncology, and how does it support individuals navigating cancer?",
    "Psycho-oncology addresses the emotional, behavioral, and social challenges of a cancer diagnosis. It helps individuals process shock and anxiety, manage distress, improve communication with medical teams, and maintain quality of life across all stages of diagnosis and treatment."
  ],
  [
    "How does therapy support caregivers, and can family sessions be arranged?",
    "Caring for a loved one with chronic or life-limiting illness can cause significant physical and emotional strain. Caregiver support offers a space to manage burnout, chronic stress, role changes, and caregiver guilt, while establishing healthy coping mechanisms. Additionally, family sessions can be arranged to facilitate open communication, align expectations, resolve relationship strain, and help family members support each other through major health transitions."
  ],
  [
    "What support is available for palliative care, end-of-life care, and bereavement?",
    "Palliative and end-of-life psychological care focuses on comfort, dignity, emotional relief, and quality of life, supporting individuals and families through advanced illness, functional changes, and anticipatory grief alongside palliative medical teams. Bereavement support provides a compassionate space after loss. Counselling does not rush grief, but helps process painful emotions, honor memories, adapt to life changes, and rebuild a sense of meaning at your own pace."
  ],
  [
    "Can Ulam Seyal replace my oncologist, palliative-care doctor, or medical team?",
    "No. Psycho-oncology and psychological services complement medical and cancer care; they do not replace oncologists, palliative medicine specialists, surgical oncologists, radiation oncologists, physicians, chemotherapy, radiotherapy, or other medical treatment. Ulam Seyal does not provide medical oncology opinions or diagnostic assessments. Psychological support works alongside your existing healthcare providers to care for your emotional and mental well-being."
  ],
  [
    "Does Ulam Seyal have a referral pathway for oncology, psychiatry, and other specialist care?",
    "Yes. Ulam Seyal follows a referral-oriented and multidisciplinary approach when additional medical or specialist care is required. Psychologists generally do not prescribe psychiatric medication unless holding separate medical qualifications. Depending on your clinical needs, we facilitate referrals to medical, surgical, or radiation oncologists, psychiatrists, palliative-care specialists, and physicians. With appropriate client consent, we coordinate with your treating team to ensure psychological care is integrated with broader medical treatment."
  ],
  [
    "Is psychological counselling a substitute for emergency medical or psychiatric care?",
    "No. Psychological counselling is not an emergency service and cannot replace immediate medical or psychiatric intervention. CRITICAL SAFETY NOTICE: If you or someone else is at immediate risk of suicide, self-harm, serious harm, or experiencing a severe medical/mental health crisis, urgent local emergency medical assistance or emergency department care should be sought immediately without waiting for a scheduled session."
  ],
  [
    "Is online psychological or psycho-oncology consultation suitable for everyone and every location?",
    "Not always. While online consultations are convenient for many, suitability depends on presenting concerns, clinical severity, safety considerations, communication needs, and technical privacy setup. Furthermore, online care is subject to legal and jurisdictional rules. Clients may be asked for their physical location during sessions to confirm service eligibility and for emergency safety planning. If online care is not clinically appropriate, in-person assessment or external referral will be recommended."
  ],
  [
    "How are privacy and emergency situations managed during online sessions?",
    "Ulam Seyal employs secure digital tools and strict protocols to protect client privacy. Clients are encouraged to connect from a private, quiet space rather than a public environment. If an emergency arises during an online consultation, standard online care protocols dictate that urgent local emergency resources must be contacted immediately, as virtual sessions cannot substitute for emergency response teams."
  ]
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
