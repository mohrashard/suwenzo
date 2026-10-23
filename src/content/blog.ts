export interface BlogPost {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  primaryKeyword: string;
  author: string;
  relatedFeaturePath: string;
  relatedFeatureAnchor: string;
  relatedPracticePath: string;
  relatedPracticeAnchor: string;
  readingTime: string;
  isFull: boolean;
  published: boolean;
  outline?: Array<{ heading: string; summary: string }>;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "How to choose clinic software in Sri Lanka: a checklist",
    description:
      "A practical checklist for Sri Lankan doctors choosing clinic software: consultation speed, dispensary label printing, WhatsApp reminders and rapid setup.",
    slug: "how-to-choose-clinic-software-sri-lanka",
    datePublished: "2026-10-04T08:00:00+05:30",
    dateModified: "2026-10-23T08:00:00+05:30",
    primaryKeyword: "clinic software Sri Lanka",
    author: "Suwenzo team",
    relatedFeaturePath: "/features/digital-prescriptions",
    relatedFeatureAnchor: "digital prescription software",
    relatedPracticePath: "/for/solo-doctors",
    relatedPracticeAnchor: "solo doctor software in Sri Lanka",
    readingTime: "7 min read",
    isFull: true,
    published: true,
  },
  {
    title: "Paper vs digital prescriptions in a Sri Lankan clinic",
    description:
      "A comparison of handwriting prescriptions versus tablet prescribing with live stock deduction and automated thermal label printing in Sri Lanka.",
    slug: "paper-vs-digital-prescriptions-sri-lanka",
    datePublished: "2026-10-08T08:00:00+05:30",
    dateModified: "2026-10-23T08:00:00+05:30",
    primaryKeyword: "digital prescription Sri Lanka",
    author: "Suwenzo team",
    relatedFeaturePath: "/features/digital-prescriptions",
    relatedFeatureAnchor: "e-prescription and packet label printing",
    relatedPracticePath: "/for/clinics-with-dispensary",
    relatedPracticeAnchor: "clinic dispensary software",
    readingTime: "4 min read",
    isFull: false,
    published: false,
    outline: [
      {
        heading: "1. The handwriting bottleneck in Sri Lankan evening surgeries",
        summary: "How manual transcription on envelopes slows down high-volume outpatient sessions.",
      },
      {
        heading: "2. Eliminating transcription errors between doctor and dispenser",
        summary: "Digital transmission from tablet to dispensary screen in under two seconds.",
      },
      {
        heading: "3. Thermal packet labels versus ballpoint ink envelopes",
        summary: "Improving patient compliance through legible printed dosage and timing labels.",
      },
      {
        heading: "4. Calculating the cost of paper registers and lost records",
        summary: "Why digital prescribing pays for itself in reduced stock waste and faster consultations.",
      },
    ],
  },
  {
    title: "How to manage medicine stock and expiry in a clinic dispensary",
    description:
      "Best practices for tracking shelf inventory, setting 60-day expiry warnings, and rotating pharmaceutical batches in Sri Lankan clinic dispensaries.",
    slug: "manage-medicine-stock-expiry-clinic-dispensary",
    datePublished: "2026-10-12T08:00:00+05:30",
    dateModified: "2026-10-23T08:00:00+05:30",
    primaryKeyword: "dispensary stock management",
    author: "Suwenzo team",
    relatedFeaturePath: "/features/stock-and-expiry",
    relatedFeatureAnchor: "medicine stock and expiry tracking",
    relatedPracticePath: "/for/clinics-with-dispensary",
    relatedPracticeAnchor: "dispensary management system",
    readingTime: "4 min read",
    isFull: false,
    published: false,
    outline: [
      {
        heading: "1. Why manual inventory notebooks fail busy clinic dispensaries",
        summary: "Discrepancies between evening prescriptions and actual shelf counts.",
      },
      {
        heading: "2. Setting up FEFO (First-Expired, First-Out) rotation",
        summary: "Prioritizing older pharmaceutical batches to minimize expired drug write-offs.",
      },
      {
        heading: "3. Establishing 60-day expiry warning triggers",
        summary: "Early warning alerts that allow returning near-expiry stock to distributors.",
      },
      {
        heading: "4. Live stock visibility during physician prescribing",
        summary: "Preventing consultations from stalling when physical inventory runs out.",
      },
    ],
  },
  {
    title: "Sri Lanka's data protection law and your clinic: what changes on 1 January 2027",
    description:
      "What the Personal Data Protection Act means for Sri Lankan private clinics: lawful processing, patient consent, controller duties and digital records.",
    slug: "sri-lanka-data-protection-law-clinic-2027",
    datePublished: "2026-10-16T08:00:00+05:30",
    dateModified: "2026-10-23T08:00:00+05:30",
    primaryKeyword: "patient data protection Sri Lanka",
    author: "Suwenzo team",
    relatedFeaturePath: "/features/patient-records",
    relatedFeatureAnchor: "patient record software in Sri Lanka",
    relatedPracticePath: "/for/multi-doctor-practices",
    relatedPracticeAnchor: "multi-doctor clinic software",
    readingTime: "8 min read",
    isFull: true,
    published: true,
  },
  {
    title: "How to bring patients back when a medicine course ends",
    description:
      "How Sri Lankan clinics use consent-based WhatsApp reminders to improve chronic disease follow-up and maintain patient retention without phone calls.",
    slug: "how-to-bring-patients-back-medicine-course-ends",
    datePublished: "2026-10-19T08:00:00+05:30",
    dateModified: "2026-10-23T08:00:00+05:30",
    primaryKeyword: "patient follow-up",
    author: "Suwenzo team",
    relatedFeaturePath: "/features/whatsapp-reminders",
    relatedFeatureAnchor: "WhatsApp reminder software for clinics",
    relatedPracticePath: "/for/solo-doctors",
    relatedPracticeAnchor: "software for doctors in Sri Lanka",
    readingTime: "4 min read",
    isFull: false,
    published: false,
    outline: [
      {
        heading: "1. The silent dropout in outpatient follow-up care",
        summary: "Why patients discontinue medication once initial discomfort abates.",
      },
      {
        heading: "2. Consent-first messaging protocols for private practices",
        summary: "Capturing explicit one-tap patient permission during clinic check-in.",
      },
      {
        heading: "3. Timing WhatsApp follow-up messages accurately",
        summary: "Triggering automated messages based on 3-day, 5-day, or monthly regimens.",
      },
      {
        heading: "4. Protecting patient privacy in mobile notifications",
        summary: "Crafting helpful reminder copy without exposing confidential diagnostic history.",
      },
    ],
  },
  {
    title: "What hardware a clinic needs for digital prescriptions",
    description:
      "A complete guide to tablets, thermal label printers and network setups required for digital prescribing in Sri Lankan outpatient practices.",
    slug: "clinic-hardware-digital-prescriptions",
    datePublished: "2026-10-22T08:00:00+05:30",
    dateModified: "2026-10-23T08:00:00+05:30",
    primaryKeyword: "thermal label printer clinic",
    author: "Suwenzo team",
    relatedFeaturePath: "/features/digital-prescriptions",
    relatedFeatureAnchor: "prescription label printing system",
    relatedPracticePath: "/for/consulting-only-practices",
    relatedPracticeAnchor: "doctor consultation software",
    readingTime: "4 min read",
    isFull: false,
    published: false,
    outline: [
      {
        heading: "1. Doctor desk hardware: iPad, Android tablet or laptop",
        summary: "Evaluating screen size, battery life, and browser responsiveness for consultations.",
      },
      {
        heading: "2. Choosing a reliable thermal label printer for packet stickers",
        summary: "Direct thermal technology, print resolution, and standard Sri Lankan drug envelope sizes.",
      },
      {
        heading: "3. Internet redundancy: 4G routers, mobile hotspots and power cuts",
        summary: "Ensuring prescriptions queue safely during temporary network interruptions.",
      },
      {
        heading: "4. Avoiding expensive proprietary healthcare hardware",
        summary: "Why modern browser-based clinic software runs on affordable consumer tablets.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPublishedBlogPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.published);
}
