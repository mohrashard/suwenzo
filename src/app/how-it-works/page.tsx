import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, getFaqPageSchema } from "@/lib/schemas";
import { BRAND, DEFINITION, getFaqsByGroup } from "@/content/site";
import { getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "How Suwenzo Works: Prescription to Follow-up",
  description:
    "See how a prescription moves from the doctor's tablet to the dispensary screen, prints a label, deducts stock and triggers a WhatsApp reminder.",
  path: "/how-it-works",
  ogImage: "/og-how-it-works.png",
});

export default function HowItWorksPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("how-it-works-page", "demo");
  const setupFaqs = getFaqsByGroup("Hardware and setup").slice(0, 4);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "How It Works", item: "/how-it-works" },
  ]);

  const faqSchema = getFaqPageSchema(
    setupFaqs.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Navbar />

      <main
        id="main-content"
        className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[120px] sm:pt-[140px] pb-[80px] px-4 sm:px-6 relative overflow-hidden"
      >
        <div className="max-w-[960px] mx-auto relative z-10 text-left">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">How It Works</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              Clinical Process Walkthrough
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-tight">
              How Suwenzo works in a Sri Lankan clinic
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Verified outpatient workflow documentation
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              From the moment a patient steps into the consultation room to their follow-up reminder, Suwenzo connects all clinical stations in one flow.
            </p>
          </div>

          <div className="space-y-12">
            {/* H2 1: What happens during one consultation? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                What happens during one consultation?
              </h2>
              {/* Answer block: 40-60 words */}
              <p className="text-[15px] sm:text-[16px] text-[#1E293B] font-medium leading-[1.65] bg-blue-50/70 border border-blue-100 p-4 rounded-xl mb-6">
                During one consultation, Suwenzo displays the patient&apos;s past diagnoses and allergies on the doctor&apos;s tablet. The doctor prescribes medicines with live shelf stock visible beside each drug. Upon confirmation, the prescription appears on the dispensary screen within seconds, printing an automatic thermal packet label and deducting stock counts instantly.
              </p>

              <ol className="list-decimal pl-5 space-y-4 text-[14.5px] text-[#475569] leading-[1.6]">
                <li>
                  <strong className="text-[#0B1B3A]">Doctor reviews history and prescribes:</strong> The physician opens the patient dossier, checks past treatments and allergy flags, then selects medications from the clinic&apos;s loaded stock list.
                </li>
                <li>
                  <strong className="text-[#0B1B3A]">Dispensary receives and prints labels:</strong> The dispensary screen refreshes within seconds. The assistant reviews clear digital dosages and the thermal printer automatically prints adhesive packet labels.
                </li>
                <li>
                  <strong className="text-[#0B1B3A]">Stock deducts and reminder schedules:</strong> Quantities deduct from inventory balances in real time. If patient consent was captured, an automated WhatsApp reminder is queued for when the course concludes.
                </li>
              </ol>
            </section>

            {/* H2 2: A typical evening session with Suwenzo */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                A typical evening session with Suwenzo
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-5 leading-[1.6]">
                Sri Lankan evening clinics operate with high patient volume. Suwenzo organizes consultations chronologically without administrative bottlenecks:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <span className="text-[13px] font-bold text-[#1D4ED8] w-28 shrink-0">5:00 PM &bull; Start</span>
                  <p className="text-[13.5px] text-[#334155] m-0">
                    The dispensary logs in to view available shelf stock. The doctor opens the consultation screen on a tablet.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <span className="text-[13px] font-bold text-[#1D4ED8] w-28 shrink-0">5:15 PM &bull; Intake</span>
                  <p className="text-[13.5px] text-[#334155] m-0">
                    A returning patient arrives. The assistant or doctor verifies their record by phone number in under 10 seconds.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <span className="text-[13px] font-bold text-[#1D4ED8] w-28 shrink-0">7:00 PM &bull; Peak</span>
                  <p className="text-[13.5px] text-[#334155] m-0">
                    Consultations flow quickly. Prescriptions reach the dispensary screen instantly. There is no waiting for handwritten notes to be walked down the hall.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row gap-2 sm:gap-6">
                  <span className="text-[13px] font-bold text-[#1D4ED8] w-28 shrink-0">8:30 PM &bull; Closing</span>
                  <p className="text-[13.5px] text-[#334155] m-0">
                    Session concludes. Stock balances are automatically reconciled without manual tallies, and tomorrow&apos;s reminders are scheduled.
                  </p>
                </div>
              </div>
            </section>

            {/* H2 3: How setup works: from demo to first patient */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                How setup works: from demo to first patient
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                Most clinics are ready within 48 hours of the demo. Setup is handled directly with your team:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-[#475569]">
                <li><strong>Stock list entered for you:</strong> You send us your existing formulary or stock register, and our team enters all items, strengths, and initial quantities.</li>
                <li><strong>Printer connected and tested:</strong> We pair your thermal label printer with the dispensary browser and calibrate label margins.</li>
                <li><strong>Dispenser trained:</strong> We conduct a practical walk-through with your dispenser until they are comfortable issuing labels and verifying batches.</li>
                <li><strong>First session assisted:</strong> We remain available on WhatsApp during your first live clinical sessions to support your team.</li>
              </ul>
            </section>

            {/* H2 4: What you need to get started */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                What you need to get started
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <dt className="font-bold text-[#0B1B3A] mb-1">Doctor Desk Hardware</dt>
                  <dd className="text-[#475569]">Any modern tablet (iPad or Android tablet) or a desktop computer running a standard browser.</dd>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <dt className="font-bold text-[#0B1B3A] mb-1">Dispensary Hardware</dt>
                  <dd className="text-[#475569]">A tablet, laptop, or desktop computer, plus a compatible thermal label printer for packet stickers.</dd>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <dt className="font-bold text-[#0B1B3A] mb-1">Internet Connectivity</dt>
                  <dd className="text-[#475569]">A standard clinic 4G Wi-Fi router, fiber broadband, or smartphone hotspot. Active internet is required.</dd>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <dt className="font-bold text-[#0B1B3A] mb-1">Connection Drop Behavior</dt>
                  <dd className="text-[#475569]">If connection drops, prescriptions queue in the local browser buffer and resume upon signal reconnect. Not offline-capable.</dd>
                </div>
              </dl>
            </section>

            {/* FAQ Block */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-6">
                Frequently asked questions about setup and workflow
              </h2>
              <div className="space-y-4">
                {setupFaqs.map((faq) => (
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
              <div className="mt-4 pt-2">
                <Link href="/faq" className="text-[13.5px] text-[#1D4ED8] font-semibold hover:underline">
                  View all 20+ questions in FAQ directory &rarr;
                </Link>
              </div>
            </section>

            {/* Related Features & Demo CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  See how Suwenzo runs in your clinic
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Book a 20-minute demonstration. We can test tablet prescribing and label printing directly at your clinic in Colombo.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/features/digital-prescriptions" className="hover:underline">
                    &rarr; Digital Prescriptions
                  </Link>
                  <Link href="/features/stock-and-expiry" className="hover:underline">
                    &rarr; Stock and Expiry
                  </Link>
                  <Link href="/for/clinics-with-dispensary" className="hover:underline">
                    &rarr; For Dispensary Clinics
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
