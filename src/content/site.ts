export const DEFINITION =
  "Suwenzo is clinic software for Sri Lanka that connects the doctor's desk, patient records and dispensary in one system, with WhatsApp reminders so patients return on time.";

export const TAGLINE = "Remembered. Reminded. Recommended.";

export const BRAND = {
  name: "Suwenzo",
  siteUrl: "https://www.suwenzo.com",
  canonicalUrl: "https://www.suwenzo.com",
  tagline: TAGLINE,
  city: "Colombo",
  country: "Sri Lanka",
  locale: "en_LK",
  foundingOffer: "First 10 founding clinics in Colombo get 3 months free.",
  setupTime: "Most clinics are ready within 48 hours of the demo.",
  demoDuration: "20 minutes",
  phoneSchema: "+94719382296",
  founderName: "Mohamed Rashard Rizmi",
  lastUpdated: "2026-10-23",
} as const;

export const SOCIALS = {
  facebook: "https://web.facebook.com/profile.php?id=61595082452726",
  instagram: "https://www.instagram.com/suwenzo",
  tiktok: "https://www.tiktok.com/@suwenzo",
  linkedin: "https://www.linkedin.com/company/suwenzo/",
} as const;

export interface FeatureItem {
  id: string;
  slug: string;
  name: string;
  path: string;
  shortDescription: string;
  fullDescription: string;
  bullets: [string, string];
}

export const FEATURES: FeatureItem[] = [
  {
    id: "patient-records",
    slug: "patient-records",
    name: "Patient records and visit history",
    path: "/features/patient-records",
    shortDescription: "Keep every visit, diagnosis, allergy and prescription in one patient record, so no consultation starts from zero.",
    fullDescription: "Access past diagnoses, prescribed medicines, consultation notes, allergy safety flags, and vitals in one timeline before prescribing.",
    bullets: [
      "Past diagnoses, notes and allergy flags visible before consultation",
      "Instant lookup by patient name or phone number",
    ],
  },
  {
    id: "digital-prescriptions",
    slug: "digital-prescriptions",
    name: "Digital prescriptions to dispensary",
    path: "/features/digital-prescriptions",
    shortDescription: "Prescribe on a tablet with live stock beside each medicine, reaching the dispensary screen within seconds.",
    fullDescription: "The prescription appears on the dispensary screen within seconds of confirmation, automatically printing clear thermal packet labels.",
    bullets: [
      "Prescription reaches the dispensary screen within seconds",
      "Auto-printed thermal packet labels eliminate cursive handwriting",
    ],
  },
  {
    id: "stock-and-expiry",
    slug: "stock-and-expiry",
    name: "Live stock and 60-day expiry tracking",
    path: "/features/stock-and-expiry",
    shortDescription: "See shelf stock before you prescribe, deduct inventory automatically, and get 60-day expiry warnings.",
    fullDescription: "Real-time stock deduction keeps shelf balances accurate without manual register tallies, warning staff 60 days before batch expiry.",
    bullets: [
      "Live shelf stock counts visible beside each medicine while prescribing",
      "Automatic 60-day expiry alerts prevent dispensing expired batches",
    ],
  },
  {
    id: "whatsapp-reminders",
    slug: "whatsapp-reminders",
    name: "WhatsApp patient reminders",
    path: "/features/whatsapp-reminders",
    shortDescription: "Send consent-based WhatsApp reminders when a medicine course ends, so patients return for follow-up on time.",
    fullDescription: "Consent is captured in a single tap during consultation. When the patient's medicine course ends, an automated reminder is sent to guide their follow-up.",
    bullets: [
      "Consent captured in one tap during consultation or registration",
      "Automated follow-up messages sent when medicine courses conclude",
    ],
  },
];

export interface PracticeTypeItem {
  id: string;
  slug: string;
  name: string;
  path: string;
  badge: string;
  shortDescription: string;
  whoItFits: string;
}

export const PRACTICE_TYPES: PracticeTypeItem[] = [
  {
    id: "clinics-with-dispensary",
    slug: "clinics-with-dispensary",
    name: "Clinics with an in-house dispensary",
    path: "/for/clinics-with-dispensary",
    badge: "Dispensary Clinics",
    shortDescription: "For clinics that stock and dispense medicines on site with instant thermal packet labels and live inventory counts.",
    whoItFits: "General practices and specialist outpatient clinics dispensing medicine directly to patients.",
  },
  {
    id: "consulting-only-practices",
    slug: "consulting-only-practices",
    name: "Consulting-only practices",
    path: "/for/consulting-only-practices",
    badge: "Consulting Only",
    shortDescription: "For doctors prescribing from the Sri Lankan medicine list with printed or WhatsApp prescriptions and zero inventory tracking.",
    whoItFits: "Specialist consultation rooms and doctors whose patients purchase drugs from retail pharmacies.",
  },
  {
    id: "solo-doctors",
    slug: "solo-doctors",
    name: "Solo practices",
    path: "/for/solo-doctors",
    badge: "Solo Practices",
    shortDescription: "For solo general practitioners running fast evening sessions without carbon paper or lost record folders.",
    whoItFits: "Solo practitioners seeking rapid tablet prescribing and continuous patient histories.",
  },
  {
    id: "multi-doctor-practices",
    slug: "multi-doctor-practices",
    name: "Multi-doctor centres and branches",
    path: "/for/multi-doctor-practices",
    badge: "Multi-Doctor & Branches",
    shortDescription: "For shared medical centres with separate doctor logins, a shared dispensary queue, and multi-branch group setup.",
    whoItFits: "Group practices and clinic networks requiring centralized records and coordinated dispensary counters.",
  },
];

export interface FaqItem {
  id: string;
  slug: string;
  group:
    | "Getting started"
    | "Hardware and setup"
    | "Patient records"
    | "Prescriptions and dispensary"
    | "Stock and expiry"
    | "WhatsApp reminders"
    | "Practice types";
  question: string;
  answer: string;
  relatedPage?: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  // Getting started
  {
    id: "founding-offer",
    slug: "what-does-founding-offer-include",
    group: "Getting started",
    question: "What does the founding clinic offer include?",
    answer:
      "The first 10 founding clinics in Colombo get 3 months free. We set up your stock list, configure your thermal printer, train your dispensary staff, and provide direct engineering support. Pricing is shared during the demo.",
    relatedPage: "/facts",
  },
  {
    id: "setup-timeline",
    slug: "how-long-does-setup-take",
    group: "Getting started",
    question: "How long does setup take, and who does it?",
    answer:
      "We complete setup with you. Our team enters your clinic stock list, connects your thermal label printer, and trains your dispenser. Most clinics are ready within 48 hours of the demo.",
    relatedPage: "/how-it-works",
  },
  {
    id: "book-demo",
    slug: "how-do-i-book-a-demo",
    group: "Getting started",
    question: "How do I book a demo?",
    answer:
      "You can book a 20-minute demo directly through WhatsApp. We demonstrate the system on a tablet, test thermal label printing, and can visit your clinic in Colombo in person.",
    relatedPage: "/contact",
  },
  {
    id: "hospital-software-difference",
    slug: "is-suwenzo-hospital-management-software",
    group: "Getting started",
    question: "Is Suwenzo hospital management software?",
    answer:
      "No. Suwenzo is clinic software built strictly for private outpatient clinics and medical practices in Sri Lanka. It does not manage inpatient beds, hospital wards, or laboratory analyzer integrations.",
    relatedPage: "/facts",
  },
  {
    id: "change-practise-style",
    slug: "do-i-need-to-change-how-i-practise",
    group: "Getting started",
    question: "Do I need to change how I practise?",
    answer:
      "No. Suwenzo follows the natural flow of your clinical consultation. You examine the patient, review their past visit history, select medicines from your pre-loaded list, and send orders to the dispensary without altering your clinical habits.",
    relatedPage: "/how-it-works",
  },

  // Hardware and setup
  {
    id: "hardware-needed",
    slug: "what-hardware-do-i-need-to-get-started",
    group: "Hardware and setup",
    question: "What hardware do I need to get started?",
    answer:
      "You need a tablet or computer for the doctor's desk, a thermal label printer at the dispensary, and an active internet connection. We provide a list of verified compatible label printers before you purchase anything.",
    relatedPage: "/how-it-works",
  },
  {
    id: "internet-connection",
    slug: "does-suwenzo-work-without-internet",
    group: "Hardware and setup",
    question: "Does Suwenzo work without internet?",
    answer:
      "Suwenzo requires an active internet connection, such as fiber, a 4G clinic Wi-Fi router, or a mobile hotspot. If internet temporarily drops, prescriptions queue safely and resume synchronizing automatically upon reconnection. Suwenzo is not offline-capable.",
    relatedPage: "/how-it-works",
  },
  {
    id: "device-compatibility",
    slug: "can-i-use-an-ipad-android-tablet-or-laptop",
    group: "Hardware and setup",
    question: "Can I use an iPad, Android tablet, or laptop?",
    answer:
      "Yes. Suwenzo runs in any modern web browser. Doctors can prescribe using an iPad, an Android tablet, or a laptop at the consultation desk with zero local software installation.",
    relatedPage: "/how-it-works",
  },

  // Patient records
  {
    id: "patient-records-stored",
    slug: "what-does-suwenzo-remember-about-my-patients",
    group: "Patient records",
    question: "What does Suwenzo remember about my patients?",
    answer:
      "Suwenzo records patient visit history, past diagnoses, prescribed medicines, dosages, clinical notes, vital signs, and allergy safety flags in one central file so no consultation starts from zero.",
    relatedPage: "/features/patient-records",
  },
  {
    id: "switch-from-paper",
    slug: "how-do-we-switch-from-old-paper-files",
    group: "Patient records",
    question: "How do we switch from our old paper files?",
    answer:
      "You do not need to scan old paper files. Clinics start fresh with returning patients as they arrive, creating comprehensive digital records in under 30 seconds during regular reception check-in.",
    relatedPage: "/features/patient-records",
  },
  {
    id: "doctor-notes-sharing",
    slug: "can-another-doctor-in-our-clinic-see-past-notes",
    group: "Patient records",
    question: "Can another doctor in our clinic see the patient's past notes?",
    answer:
      "Yes. In multi-doctor practices, doctors can review previous clinical notes, prescribed treatments, and allergy warnings across shifts to ensure patient continuity.",
    relatedPage: "/features/patient-records",
  },

  // Prescriptions and dispensary
  {
    id: "prescription-delivery-speed",
    slug: "how-does-a-prescription-reach-the-dispensary",
    group: "Prescriptions and dispensary",
    question: "How does a prescription reach the dispensary?",
    answer:
      "When the doctor taps prescribe, the prescription appears on the dispensary screen within seconds. The dispenser immediately prepares the medicine without needing to decipher handwritten notes.",
    relatedPage: "/features/digital-prescriptions",
  },
  {
    id: "packet-label-printing",
    slug: "how-are-medicine-packet-labels-printed",
    group: "Prescriptions and dispensary",
    question: "How are medicine packet labels printed?",
    answer:
      "A compatible thermal label printer automatically produces adhesive packet labels containing patient name, drug details, dosage frequency, and duration as soon as the dispenser reviews the order.",
    relatedPage: "/features/digital-prescriptions",
  },
  {
    id: "consulting-prescriptions",
    slug: "how-do-prescriptions-work-without-a-dispensary",
    group: "Prescriptions and dispensary",
    question: "How do prescriptions work without a dispensary?",
    answer:
      "Consulting-only doctors select medicines from the pre-loaded Sri Lankan drug list and generate a clean printed prescription slip or send it to the patient via WhatsApp for external fulfillment.",
    relatedPage: "/for/consulting-only-practices",
  },
  {
    id: "billing-receipts",
    slug: "does-suwenzo-handle-billing-and-receipts",
    group: "Prescriptions and dispensary",
    question: "Does Suwenzo handle billing and receipts?",
    answer:
      "Yes. For clinics that collect consultation and medicine payments at the front desk, Suwenzo calculates totals and supports thermal receipt printing as an outpatient workflow feature.",
    relatedPage: "/features",
  },

  // Stock and expiry
  {
    id: "live-stock-visibility",
    slug: "how-does-live-stock-tracking-work",
    group: "Stock and expiry",
    question: "How does live stock tracking work?",
    answer:
      "Suwenzo displays current shelf stock counts directly beside each medicine on the doctor's prescribing screen. When a prescription is dispensed, stock quantities deduct automatically in real time.",
    relatedPage: "/features/stock-and-expiry",
  },
  {
    id: "expiry-warnings",
    slug: "how-do-60-day-expiry-warnings-work",
    group: "Stock and expiry",
    question: "How do 60-day expiry warnings work?",
    answer:
      "Suwenzo alerts dispensary staff 60 days before any medicine batch expires, highlighting batches in yellow and red so near-expiry stock is rotated or returned promptly.",
    relatedPage: "/features/stock-and-expiry",
  },
  {
    id: "stock-list-loading",
    slug: "who-loads-the-clinic-stock-list",
    group: "Stock and expiry",
    question: "Who loads the clinic stock list?",
    answer:
      "The Suwenzo team enters your complete medicine list, initial quantities, and batch expiry dates during onboarding so your dispensary is ready before your first digital session.",
    relatedPage: "/features/stock-and-expiry",
  },

  // WhatsApp reminders
  {
    id: "whatsapp-reminders-consent",
    slug: "how-do-whatsapp-reminders-work-and-is-consent-required",
    group: "WhatsApp reminders",
    question: "How do WhatsApp reminders work, and is consent required?",
    answer:
      "When a patient's medicine course ends, Suwenzo sends an automated WhatsApp reminder to prompt follow-up. Reminders are sent only after capturing explicit patient consent in one tap during check-in.",
    relatedPage: "/features/whatsapp-reminders",
  },
  {
    id: "patient-replies",
    slug: "can-patients-reply-to-whatsapp-reminders",
    group: "WhatsApp reminders",
    question: "Can patients reply to WhatsApp reminders?",
    answer:
      "Yes. Patients can reply to confirm their recovery or book a follow-up appointment, routing inquiries directly to your clinic reception desk.",
    relatedPage: "/features/whatsapp-reminders",
  },

  // Practice types
  {
    id: "consulting-practice-fit",
    slug: "can-i-use-suwenzo-if-i-do-not-have-a-dispensary",
    group: "Practice types",
    question: "Can I use Suwenzo if I do not have a dispensary?",
    answer:
      "Yes. Suwenzo offers a dedicated consulting-only mode. Doctors prescribe from the national drug list and issue clean printed or WhatsApp prescriptions while maintaining complete electronic visit records.",
    relatedPage: "/for/consulting-only-practices",
  },
  {
    id: "multi-doctor-setup",
    slug: "can-more-than-one-doctor-use-it",
    group: "Practice types",
    question: "Can more than one doctor use it?",
    answer:
      "Yes. Suwenzo supports multiple doctor logins with private consultation notes, routing all prescriptions into a shared dispensary queue and central patient database.",
    relatedPage: "/for/multi-doctor-practices",
  },
  {
    id: "solo-doctor-fit",
    slug: "is-suwenzo-suitable-for-a-solo-gp-practice",
    group: "Practice types",
    question: "Is Suwenzo suitable for a solo GP practice?",
    answer:
      "Yes. Suwenzo is optimized for solo general practitioners managing evening surgeries single-handedly or with one dispensary assistant, eliminating paper filing and illegible prescription carbon copies.",
    relatedPage: "/for/solo-doctors",
  },
  {
    id: "online-consultations",
    slug: "does-suwenzo-support-online-consultations",
    group: "Practice types",
    question: "Does Suwenzo support online consultations?",
    answer:
      "Not currently. Suwenzo is engineered specifically for in-person outpatient consultations in Sri Lanka. Feedback from founding clinics guides our upcoming product roadmap.",
    relatedPage: "/facts",
  },
];

export function getFaqsByGroup(group: FaqItem["group"]): FaqItem[] {
  return FAQ_ITEMS.filter((f) => f.group === group);
}

export function getFaqsByRelatedPage(path: string): FaqItem[] {
  return FAQ_ITEMS.filter((f) => f.relatedPage === path);
}

export function getHomepageFaqs(): FaqItem[] {
  // Exactly 6 representative questions for the homepage
  return [
    FAQ_ITEMS.find((f) => f.id === "founding-offer")!,
    FAQ_ITEMS.find((f) => f.id === "setup-timeline")!,
    FAQ_ITEMS.find((f) => f.id === "hardware-needed")!,
    FAQ_ITEMS.find((f) => f.id === "internet-connection")!,
    FAQ_ITEMS.find((f) => f.id === "patient-records-stored")!,
    FAQ_ITEMS.find((f) => f.id === "whatsapp-reminders-consent")!,
  ];
}
