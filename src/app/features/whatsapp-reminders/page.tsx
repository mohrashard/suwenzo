import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getFaqPageSchema,
  buildGraphSchema,
} from "@/lib/schemas";
import { BRAND, DEFINITION, getFaqsByGroup } from "@/content/site";
import { getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "WhatsApp Patient Reminders for Clinics | Suwenzo",
  description:
    "Send consent-based WhatsApp reminders when a medicine course ends, so patients return for follow-up. Built for private clinics in Sri Lanka.",
  path: "/features/whatsapp-reminders",
  ogImage: "/og-features.png",
});

export default function WhatsAppRemindersPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("feature-whatsapp-reminders", "demo");
  const reminderFaqs = getFaqsByGroup("WhatsApp reminders");

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Features", item: "/features" },
      { name: "WhatsApp Reminders", item: "/features/whatsapp-reminders" },
    ]),
    getFaqPageSchema(
      reminderFaqs.map((f) => ({ question: f.question, answer: f.answer }))
    ),
  ]);

  return (
    <>
      <JsonLd data={graphSchema} />
      <Navbar />

      <main
        id="main-content"
        className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[120px] sm:pt-[140px] pb-[80px] px-4 sm:px-6 relative overflow-hidden"
      >
        <div className="max-w-[960px] mx-auto relative z-10 text-left">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/features" className="hover:text-[#1D4ED8] transition-colors">
              Features
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">WhatsApp Reminders</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              Feature Spoke &bull; Patient Retention
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-tight">
              WhatsApp patient reminders for clinics
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Consent-based follow-up messaging for Sri Lankan practices
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Automated reminders guide patients to return on time when acute or chronic medicine courses conclude.
            </p>
          </div>

          <div className="space-y-12">
            {/* H2 1: How do WhatsApp reminders work? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                How do WhatsApp reminders work?
              </h2>
              {/* Answer block: 40-60 words */}
              <p className="text-[15px] sm:text-[16px] text-[#1E293B] font-medium leading-[1.65] bg-blue-50/70 border border-blue-100 p-4 rounded-xl mb-6">
                WhatsApp reminders work by scheduling an automated follow-up message based on the duration of the prescribed medicine course. Suwenzo monitors prescription end dates and sends a polite message to consenting patients, inviting them to check in on their recovery or schedule their return visit without manual reception phone calls.
              </p>

              <div className="mb-6 flex justify-center">
                <Image
                  src="/illustration-reminders.png"
                  alt="Consent capture on doctor tablet and automated WhatsApp patient follow-up reminder notification"
                  width={600}
                  height={450}
                  className="rounded-2xl border border-slate-200/90 shadow-xs max-w-full h-auto"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Trigger</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Prescription Duration</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Messages calculate automatically from treatment length (e.g. 5 days, 30 days).</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Channel</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">WhatsApp Message</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Sent through WhatsApp, where Sri Lankan patients communicate daily.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Two-Way</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Patient Replies</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Patients reply directly to the clinic front desk to confirm appointments.</p>
                </div>
              </div>
            </section>

            {/* H2 2: How is patient consent captured? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                How is patient consent captured?
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                Patient privacy and compliance with communication ethics are paramount. Suwenzo captures consent seamlessly:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-[#475569] mb-6">
                <li><strong>One-tap toggle:</strong> The doctor or front desk assistant records consent with a single tap during patient registration or consultation.</li>
                <li><strong>Consent audit trail:</strong> Suwenzo logs the consent status on the patient dossier before any automated notification can be queued.</li>
                <li><strong>Zero spam:</strong> If consent is not granted, no message is ever generated. Patients can opt out at any time by replying stop.</li>
              </ul>
            </section>

            {/* H2 3: What does a reminder look like? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                What does a reminder look like?
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                Reminders are polite, professional, and do not disclose sensitive clinical diagnoses:
              </p>

              {/* Sample Message Card */}
              <div className="max-w-[440px] bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 text-left mb-4 shadow-2xs font-sans">
                <div className="flex items-center justify-between text-[11px] font-semibold text-emerald-800 mb-2 border-b border-emerald-200/60 pb-1.5">
                  <span>SAMPLE REMINDER MESSAGE</span>
                  <span>Delivered via WhatsApp</span>
                </div>
                <p className="text-[13.5px] text-[#0B1B3A] leading-relaxed mb-3">
                  Dear [Sample patient], hope you are recovering well. Your prescribed medicine course from [Clinic Name] concludes today. If your symptoms persist or you need your regular follow-up review, please reply to this message to book an appointment with Dr. [Doctor Name].
                </p>
                <div className="text-[11px] text-slate-500 text-right">
                  10:30 AM &bull; Automated Follow-up
                </div>
              </div>
              <p className="text-[12.5px] text-slate-500">
                Notice: All demo messages are labelled sample patient and customized with your clinic name.
              </p>
            </section>

            {/* H2 4: Why follow-up matters for clinic retention */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                Why follow-up matters for clinic retention
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                In outpatient care, many patients discontinue chronic therapy or forget essential review visits once initial acute discomfort eases.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-[#475569]">
                <li><strong>Care continuity:</strong> Patients managing blood pressure, cholesterol, or asthma receive timely reminders to review medication tolerance.</li>
                <li><strong>Doctor-patient relationship:</strong> Proactive follow-up demonstrates that your clinic cares about long-term recovery, encouraging word-of-mouth recommendations.</li>
                <li><strong>No administrative burden:</strong> Reception staff do not need to spend hours checking paper appointment books or making manual calls.</li>
              </ul>
            </section>

            {/* FAQ Block */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-6">
                Frequently asked questions on WhatsApp reminders
              </h2>
              <div className="space-y-4">
                {reminderFaqs.map((faq) => (
                  <div key={faq.id} className="border-b border-slate-100 pb-4">
                    <h3 className="text-[15.5px] font-bold text-[#0B1B3A] mb-1.5">
                      {faq.question}
                    </h3>
                    <p className="text-[14px] text-[#475569] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Features & Demo CTA (Section 7 Internal Linking) */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  Test WhatsApp reminders in a 20-minute demo
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Book an in-person or remote demo. We will show you how consent is captured in one tap and how follow-up messages are scheduled.
                </p>
                {/* Related block: 3 links max */}
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/features" className="hover:underline">
                    &larr; All Features
                  </Link>
                  <Link href="/features/patient-records" className="hover:underline">
                    &rarr; Patient Records
                  </Link>
                  <Link href="/features/digital-prescriptions" className="hover:underline">
                    &rarr; Digital Prescriptions
                  </Link>
                </div>
              </div>

              <a
                href={whatsappUrl}
                rel="nofollow noopener"
                className="w-full sm:w-auto bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-full text-[14px] text-center shadow-[0_4px_14px_rgba(29,78,216,0.25)] transition-all hover:scale-[1.02] shrink-0"
              >
                Book a 20-minute demo
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
