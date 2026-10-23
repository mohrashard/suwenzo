import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Software for Solo Doctors in Sri Lanka | Suwenzo",
  description:
    "Run a solo practice with patient history, digital prescriptions and WhatsApp follow-ups, without paper files or carbon copies.",
  path: "/for/solo-doctors",
  ogImage: "/og-for.png",
});

export default function SoloDoctorsPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("for-solo-doctors", "demo");
  const soloFaqs = getFaqsByGroup("Practice types").filter(
    (f) => f.id === "solo-doctor-fit" || f.id === "change-practise-style" || f.id === "switch-from-paper"
  );

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Who It's For", item: "/for" },
      { name: "Solo Doctors", item: "/for/solo-doctors" },
    ]),
    getFaqPageSchema(
      soloFaqs.map((f) => ({ question: f.question, answer: f.answer }))
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
            <Link href="/for" className="hover:text-[#1D4ED8] transition-colors">
              Who It&apos;s For
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">Solo Doctors</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              Practice Spoke &bull; Solo General Practice
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-tight">
              Clinic software for solo doctors in Sri Lanka
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Clinical workflow for independent medical practitioners
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Designed for solo general practitioners managing evening surgeries without administrative staff or physical paper file cabinets.
            </p>
          </div>

          <div className="space-y-12">
            {/* H2 1: Is Suwenzo right for a solo practice? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                Is Suwenzo right for a solo practice?
              </h2>
              {/* Answer block: 40-60 words */}
              <p className="text-[15px] sm:text-[16px] text-[#1E293B] font-medium leading-[1.65] bg-blue-50/70 border border-blue-100 p-4 rounded-xl mb-6">
                Suwenzo is right for a solo practice if you want fast tablet prescribing, instant patient visit history by phone number, and automated WhatsApp follow-ups without managing paper files. It is not designed for hospital inpatient wards, surgical theatres, or large multi-department laboratory operations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100">
                  <h3 className="text-[14px] font-bold text-emerald-900 mb-1">Who it fits:</h3>
                  <ul className="space-y-1 text-[13px] text-emerald-800">
                    <li>&bull; Solo GPs running evening surgeries (30-50 patients in 3 hours)</li>
                    <li>&bull; Practices with or without an attached dispensary counter</li>
                    <li>&bull; Doctors wanting continuous patient records without paper clutter</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h3 className="text-[14px] font-bold text-slate-800 mb-1">Who it does not fit:</h3>
                  <ul className="space-y-1 text-[13px] text-slate-600">
                    <li>&bull; Multi-floor hospitals with inpatient ward management</li>
                    <li>&bull; Clinics requiring offline mode without internet</li>
                    <li>&bull; Retail pharmacies selling front-of-house consumer goods</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* H2 2: A solo doctor's session with Suwenzo */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                A solo doctor&apos;s session with Suwenzo
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                During a busy 3-hour evening session, every second saved on administration is time returned to patient examination:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-0.5">Lookup in 5 seconds</div>
                  <p className="text-[13.5px] text-[#334155] m-0">
                    Search the patient by mobile number. Past visit notes, allergies, and previous medications appear immediately.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-0.5">Prescribe with shelf stock on screen</div>
                  <p className="text-[13.5px] text-[#334155] m-0">
                    Choose medicines with shelf quantities visible. If you run your own dispensary, the label printer prints packet stickers automatically.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-0.5">Automated follow-up</div>
                  <p className="text-[13.5px] text-[#334155] m-0">
                    With one-tap consent, WhatsApp reminders are scheduled automatically when the prescribed course ends.
                  </p>
                </div>
              </div>
            </section>

            {/* H2 3: What a solo doctor needs to start */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                What a solo doctor needs to start
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-[#475569] mb-5">
                <li><strong>A tablet or computer:</strong> Prescribe from an iPad, an Android tablet, or your existing laptop.</li>
                <li><strong>An internet connection:</strong> Use a clinic 4G Wi-Fi router or phone mobile hotspot.</li>
                <li><strong>Optional thermal label printer:</strong> If you dispense medicines, we provide the list of compatible label printers.</li>
              </ul>
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-[13.5px] text-[#1E293B]">
                <strong>We set it up for you:</strong> Most solo clinics are ready within 48 hours of the demo. We load your medicine list and configure printer settings before your first session.
              </div>
            </section>

            {/* FAQ Block */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-6">
                Frequently asked questions for solo doctors
              </h2>
              <div className="space-y-4">
                {soloFaqs.map((faq) => (
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

            {/* Related Practices & Demo CTA (Section 7 Internal Linking) */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  See how Suwenzo runs in a solo practice
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Book an in-person or remote 20-minute demo. The first 10 founding clinics in Colombo receive 3 months free with setup and training included.
                </p>
                {/* Related block: 3 links max */}
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/for" className="hover:underline">
                    &larr; All Practice Types
                  </Link>
                  <Link href="/for/clinics-with-dispensary" className="hover:underline">
                    &rarr; With Dispensary
                  </Link>
                  <Link href="/for/consulting-only-practices" className="hover:underline">
                    &rarr; Consulting Only
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
