import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FaqDirectoryClient, { FaqEntry } from "@/components/FaqDirectoryClient";
import { getFaqPageSchema, getBreadcrumbSchema } from "@/lib/schemas";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ | Clinic Software Questions Answered",
  description:
    "Detailed answers for Sri Lankan doctors on clinic hardware setup, stock tracking, WhatsApp reminders, and records. First 10 clinics get 3 months free.",
  alternates: {
    canonical: `${SITE_URL}/faq`,
    languages: {
      "en-LK": `${SITE_URL}/faq`,
      "x-default": `${SITE_URL}/faq`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: `${SITE_URL}/faq`,
    siteName: "Suwenzo",
    title: "FAQ | Clinic Software Questions Answered | Suwenzo",
    description:
      "Detailed answers for Sri Lankan doctors on clinic hardware setup, stock tracking, WhatsApp reminders, and records. First 10 clinics get 3 months free.",
    images: [
      {
        url: "/og-faq.png",
        width: 1200,
        height: 630,
        alt: "Suwenzo FAQ - Frequently Asked Questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Clinic Software Questions Answered | Suwenzo",
    description:
      "Detailed answers for Sri Lankan doctors on clinic hardware setup, stock tracking, WhatsApp reminders, and records. First 10 clinics get 3 months free.",
    images: ["/og-faq.png"],
  },
};

const allFaqs: FaqEntry[] = [
  {
    category: "Founding Offer & Pricing",
    question: "What does the founding clinic offer include?",
    answer:
      "The first 10 clinics in Colombo get 3 months free. Founding clinics also receive direct engineering support and help shape future software updates.",
  },
  {
    category: "Founding Offer & Pricing",
    question: "How much does Suwenzo cost after the free period?",
    answer:
      "Pricing is shared during the demo. The first 10 founding clinics in Colombo get 3 months free.",
  },
  {
    category: "Hardware & Setup",
    question: "What hardware do I need to buy to get started?",
    answer:
      "You need a tablet for the doctor's desk, a label printer at the dispensary, and an internet connection. Before you buy anything, we share the list of printers that work with Suwenzo so nothing is wasted.",
  },
  {
    category: "Hardware & Setup",
    question: "How long does setup take, and who does it?",
    answer:
      "We do it with you. We enter your stock list, connect your printer and train your dispenser, so you start with a working system, not an empty one. Most clinics are ready within 48 hours of the demo, and we stay on WhatsApp for the first weeks to help your dispenser settle in.",
  },
  {
    category: "Hardware & Setup",
    question: "Does Suwenzo require software installation on my computer?",
    answer:
      "No. Suwenzo works directly in any modern web browser. There is zero software installation required on your clinic computers or tablets.",
  },
  {
    category: "Hardware & Setup",
    question: "Can I use an iPad, Android tablet, or a laptop?",
    answer:
      "Yes. Because Suwenzo runs directly in standard web browsers, you can prescribe from an iPad, an Android tablet, or a laptop at the consultation desk.",
  },
  {
    category: "Connectivity & Offline Resilience",
    question: "Does Suwenzo work without internet?",
    answer:
      "Suwenzo needs an internet connection. A standard mobile hotspot or 4G clinic router is enough. If your connection temporarily drops, prescriptions are safely queued and resume the moment signal reconnects.",
  },
  {
    category: "Connectivity & Offline Resilience",
    question: "What happens if the clinic power or Wi-Fi cuts out mid-session?",
    answer:
      "Because doctors usually prescribe on battery-powered tablets with cellular backup or hotspot connectivity, consultations can continue smoothly while queues remain protected.",
  },
  {
    category: "Dispensary & Workflow",
    question: "Will my dispenser be able to use it without technical background?",
    answer:
      "Yes. The dispenser's screen shows the prescription the moment you confirm it, with nothing to decode and nothing to re-type. We train your dispenser during setup and stay on WhatsApp for the first weeks.",
  },
  {
    category: "Dispensary & Workflow",
    question: "How are medicine packet labels printed?",
    answer:
      "When the dispenser confirms the prescription, clear thermal stickers print automatically with patient name, medicine, dosage frequency, and duration, replacing handwritten envelopes.",
  },
  {
    category: "Dispensary & Workflow",
    question: "How does shelf stock deduction work?",
    answer:
      "Stock levels deduct automatically when a prescription is issued, allowing doctors to see exact shelf quantities before prescribing.",
  },
  {
    category: "Patient Records & Care",
    question: "What does Suwenzo remember about my patients?",
    answer:
      "Suwenzo keeps each patient's visits, prescriptions and notes in one record, so any doctor in the clinic can see the history before the consultation starts. This includes past diagnoses, prescribed medicines, dosages, allergies, and vital signs, with nothing lost between visits.",
  },
  {
    category: "Patient Records & Care",
    question: "Can another doctor in our clinic see the patient's past notes?",
    answer:
      "Yes. For multi-doctor practices, any doctor in the practice can open the patient's verified visit history before starting a consultation.",
  },
  {
    category: "Patient Records & Care",
    question: "How do we switch from our old paper files?",
    answer:
      "You do not need to scan mountains of old paper. Most clinics start fresh for returning patients as they walk through the door, creating digital records on the spot in under 30 seconds.",
  },
  {
    category: "WhatsApp Reminders & Consent",
    question: "How do WhatsApp reminders work, and do patients have to agree?",
    answer:
      "When a patient's course is ending, Suwenzo sends a WhatsApp reminder, but only to patients who have agreed to receive them. Consent is captured with a single tap during consultation or registration, and reminder messaging is fully included in your subscription.",
  },
  {
    category: "WhatsApp Reminders & Consent",
    question: "Can patients reply to the WhatsApp reminder?",
    answer:
      "Yes. Patients can reply to request a follow-up visit or confirm their recovery, allowing your clinic front desk to maintain patient continuity.",
  },
  {
    category: "Practice Scope & Fit",
    question: "Does Suwenzo work for solo doctors without a dispensary?",
    answer:
      "Yes. Doctors without an in-house dispensary can prescribe digitally from the full Sri Lankan medicine directory and provide clear printed or WhatsApp prescriptions for external pharmacies.",
  },
  {
    category: "Practice Scope & Fit",
    question: "Can Suwenzo handle multiple doctors sharing one dispensary?",
    answer:
      "Yes. Suwenzo supports separate doctor logins with private consultation notes, while channeling prescriptions into a unified dispensary queue.",
  },
  {
    category: "Practice Scope & Fit",
    question: "Does Suwenzo support online consultations?",
    answer:
      "Not today. Suwenzo is built around the visit in your clinic: records, prescriptions, dispensary and follow-up. If online consultations matter to your practice, tell us on the demo, because founding clinics help decide what we build next.",
  },
  {
    category: "Support & Demo",
    question: "How does customer support work once we are live?",
    answer:
      "Support is provided directly on WhatsApp, which is the channel Sri Lankan clinic teams already use daily. We respond promptly to help with dispenser questions, printer connectivity, or workflow adjustments.",
  },
];

export default function FaqPage() {
  const faqJsonLd = getFaqPageSchema(allFaqs);
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "FAQ Directory", item: "/faq" },
  ]);

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Navbar />

      <main className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[120px] sm:pt-[140px] pb-[80px] px-4 sm:px-6 relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-blue-200/40 via-white/50 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-[1000px] mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">FAQ Directory</span>
          </nav>

          {/* Page Header */}
          <div className="text-left mb-10 sm:mb-12">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 tracking-[0.02em] shadow-xs uppercase">
              Knowledge Base &amp; FAQ
            </span>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.5rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-4 tracking-[-0.03em]">
              Frequently Asked Questions
            </h1>
            <p className="text-[1.1rem] sm:text-[1.2rem] text-[#475569] max-w-[760px] leading-[1.6]">
              Detailed answers to everything doctors, dispensers, and clinic managers ask about hardware setup, offline sync, WhatsApp reminders, and patient records in Sri Lanka.
            </p>
          </div>

          {/* Interactive Client Search & Accordion */}
          <FaqDirectoryClient faqs={allFaqs} />
        </div>
      </main>

      <Footer />
    </>
  );
}
