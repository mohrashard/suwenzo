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
  title: "Software for Consulting-Only Doctors | Suwenzo",
  description:
    "No dispensary? Prescribe from the Sri Lankan medicine list, keep visit history on file and give a printed or WhatsApp prescription.",
  path: "/for/consulting-only-practices",
  ogImage: "/og-for.png",
});

export default function ConsultingOnlyPracticesPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("for-consulting-only", "demo");
  const consultingFaqs = getFaqsByGroup("Practice types").filter(
    (f) => f.id === "consulting-practice-fit" || f.id === "change-practise-style" || f.id === "online-consultations"
  );

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Who It's For", item: "/for" },
      { name: "Consulting Only", item: "/for/consulting-only-practices" },
    ]),
    getFaqPageSchema(
      consultingFaqs.map((f) => ({ question: f.question, answer: f.answer }))
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
            <span className="text-[#0B1B3A] font-semibold">Consulting Only</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              Practice Spoke &bull; Pure Consultation
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-tight">
              Clinic software for consulting-only practices
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Practice workflow for doctors without an in-house dispensary
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Designed for specialist and general practices that diagnose and prescribe without maintaining physical medicine inventory on the premises.
            </p>
          </div>

          <div className="space-y-12">
            {/* H2 1: Does Suwenzo work without a dispensary? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                Does Suwenzo work without a dispensary?
              </h2>
              {/* Answer block: 40-60 words */}
              <p className="text-[15px] sm:text-[16px] text-[#1E293B] font-medium leading-[1.65] bg-blue-50/70 border border-blue-100 p-4 rounded-xl mb-6">
                Yes, Suwenzo works completely without a dispensary. When dispensary mode is turned off, Suwenzo removes all inventory features and gives the doctor access to the pre-loaded Sri Lankan medicine directory. The doctor records visits, reviews patient history, and generates clean printed or WhatsApp prescriptions for external retail pharmacies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Drug Directory</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Sri Lankan Medicine List</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Pre-loaded generics and common brands available across local pharmacies.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Patient History</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Complete Electronic File</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Diagnoses, allergy warnings, and past notes stored securely on file.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Output Format</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Printed or WhatsApp</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Give patients a printed prescription slip or send it to their phone.</p>
                </div>
              </div>
            </section>

            {/* H2 2: Prescribing from the Sri Lankan medicine list */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                Prescribing from the Sri Lankan medicine list
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                Consulting doctors do not need to build a drug database from scratch. Suwenzo comes configured with local market medications:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-[#475569] mb-5">
                <li><strong>Instant search by generic or brand:</strong> Search for paracetamol or popular brand names in fewer keystrokes.</li>
                <li><strong>Standard clinical strengths:</strong> Dosage strengths and administration routes match commercial pharmaceutical availability in Sri Lanka.</li>
                <li><strong>Favorites list:</strong> Save your most common clinical treatment protocols for single-tap prescribing during busy consultation hours.</li>
              </ul>
            </section>

            {/* H2 3: Printed or WhatsApp prescriptions */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                Printed or WhatsApp prescriptions
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                Provide patients with unambiguous prescriptions that any retail pharmacy can fill without handwriting guesswork:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-[14px] text-[#0B1B3A] mb-1">Printed Prescription Slips</h3>
                  <p className="text-[13px] text-[#64748B] m-0">
                    Print directly to standard office paper or thermal receipt rolls with your clinic header, doctor registration, and date.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-[14px] text-[#0B1B3A] mb-1">WhatsApp Digital Prescriptions</h3>
                  <p className="text-[13px] text-[#64748B] m-0">
                    Send a formatted prescription summary directly to the patient&apos;s phone via WhatsApp for convenience and paperless filing.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Block */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-6">
                Frequently asked questions for consulting practices
              </h2>
              <div className="space-y-4">
                {consultingFaqs.map((faq) => (
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
                  See consulting-only mode in 20 minutes
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Book an in-person or remote demo. We will show you electronic patient filing, national medicine prescribing, and digital prescription dispatch.
                </p>
                {/* Related block: 3 links max */}
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/for" className="hover:underline">
                    &larr; All Practice Types
                  </Link>
                  <Link href="/for/solo-doctors" className="hover:underline">
                    &rarr; Solo Practices
                  </Link>
                  <Link href="/for/clinics-with-dispensary" className="hover:underline">
                    &rarr; With Dispensary
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
