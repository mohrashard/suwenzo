import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getSoftwareApplicationSchema } from "@/lib/schemas";
import { SITE_URL, getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "WhatsApp Patient Reminders for Clinics",
  description:
    "Send automated WhatsApp follow-up reminders to clinic patients with doctor consent. Reduce missed review visits and keep care on schedule for your clinic.",
  alternates: {
    canonical: `${SITE_URL}/features/whatsapp-reminders`,
    languages: {
      "en-LK": `${SITE_URL}/features/whatsapp-reminders`,
      "x-default": `${SITE_URL}/features/whatsapp-reminders`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: `${SITE_URL}/features/whatsapp-reminders`,
    siteName: "Suwenzo",
    title: "WhatsApp Patient Reminders for Clinics | Suwenzo",
    description:
      "Send automated WhatsApp follow-up reminders to clinic patients with doctor consent. Reduce missed review visits and keep care on schedule for your clinic.",
    images: [
      {
        url: "/og-features.png",
        width: 1200,
        height: 630,
        alt: "Suwenzo WhatsApp Reminders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Patient Reminders for Clinics | Suwenzo",
    description:
      "Send automated WhatsApp follow-up reminders to clinic patients with doctor consent. Reduce missed review visits and keep care on schedule for your clinic.",
    images: ["/og-features.png"],
  },
};

export default function WhatsAppRemindersPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("feature-whatsapp-reminders", "demo");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Features", item: "/#features" },
    { name: "WhatsApp Reminders", item: "/features/whatsapp-reminders" },
  ]);
  const softwareSchema = getSoftwareApplicationSchema();

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareSchema} />
      <Navbar />

      <main className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[120px] sm:pt-[140px] pb-[80px] px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-blue-200/40 via-white/50 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-[960px] mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#features" className="hover:text-[#1D4ED8] transition-colors">
              Features
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">WhatsApp Reminders</span>
          </nav>

          {/* Header */}
          <div className="text-left mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 tracking-[0.02em] shadow-xs uppercase">
              Retention Feature
            </span>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-4 tracking-[-0.03em]">
              WhatsApp Follow-Up Reminders
            </h1>
          </div>

          {/* Answer-First Definition Block */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)] text-left">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              Suwenzo delivers scheduled WhatsApp follow-up reminders to patients, prompting timely return visits for chronic reviews and prescription refills.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              When a doctor schedules a 5-day antibiotic check or a 30-day hypertension follow-up, the system queues a polite WhatsApp reminder sent ahead of the appointment date, ensuring full patient consent before delivery.
            </p>
          </div>

          {/* Editorial Content Body */}
          <div className="space-y-10 text-left">
            {/* Section 1 */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                Why WhatsApp is the primary communication channel in Sri Lanka
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.7] mb-4">
                In Sri Lanka, patients rarely check marketing emails or portal apps, while generic SMS messages are frequently ignored as spam. WhatsApp is the trusted channel that patients open daily:
              </p>
              <ul className="space-y-3 text-[14px] sm:text-[14.5px] text-[#334155]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>High open rates:</strong> Patients read WhatsApp messages promptly, ensuring they remember scheduled medical reviews.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>Doctor-initiated timing:</strong> Reminders trigger based on the exact review interval specified by the physician during the visit.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>Explicit patient consent:</strong> Reminders require the patient&apos;s opt-in during registration, protecting patient trust.</span>
                </li>
              </ul>
            </section>

            {/* Comparison Table */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4 leading-snug">
                Manual patient follow-up vs. Suwenzo WhatsApp queue
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13.5px] sm:text-[14px] border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/70">
                      <th className="py-3 px-4 font-semibold text-[#0B1B3A]">Follow-Up Step</th>
                      <th className="py-3 px-4 font-semibold text-[#0B1B3A]">Manual Appointment Diary</th>
                      <th className="py-3 px-4 font-semibold text-[#1D4ED8]">Suwenzo WhatsApp Reminders</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#475569]">
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Scheduling follow-up</td>
                      <td className="py-3 px-4">Patient told verbally or written on paper slip</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Doctor clicks review date during consultation</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Sending reminder</td>
                      <td className="py-3 px-4">Clinic receptionist calls or forgets</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Automatic dispatch ahead of due date</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Patient consent</td>
                      <td className="py-3 px-4">Informal or untracked</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Explicitly recorded in patient profile</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Channel used</td>
                      <td className="py-3 px-4">Phone calls or unanswered notes</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">WhatsApp direct messaging</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Related Features & CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  Improve patient return rates at your clinic
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  See sample reminder workflows and test notification dispatch during a demo. Pricing is shared during the demo. The first 10 founding clinics in Colombo get 3 months free.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/features/patient-records" className="hover:underline">
                    &rarr; Patient Records
                  </Link>
                  <Link href="/features/digital-prescriptions" className="hover:underline">
                    &rarr; Digital Prescriptions
                  </Link>
                  <Link href="/features/stock-and-expiry" className="hover:underline">
                    &rarr; Stock &amp; Expiry
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
