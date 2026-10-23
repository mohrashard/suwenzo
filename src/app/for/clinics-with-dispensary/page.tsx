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
  title: "Clinic and Dispensary Software, Sri Lanka | Suwenzo",
  description:
    "For clinics that dispense their own medicines: digital prescriptions, auto-printed labels, live stock deduction and expiry alerts.",
  path: "/for/clinics-with-dispensary",
  ogImage: "/og-for.png",
});

export default function ClinicsWithDispensaryPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("for-clinics-with-dispensary", "demo");
  const dispensaryFaqs = getFaqsByGroup("Prescriptions and dispensary").slice(0, 4);

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Who It's For", item: "/for" },
      { name: "Clinics with Dispensary", item: "/for/clinics-with-dispensary" },
    ]),
    getFaqPageSchema(
      dispensaryFaqs.map((f) => ({ question: f.question, answer: f.answer }))
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
            <span className="text-[#0B1B3A] font-semibold">With Dispensary</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              Practice Spoke &bull; In-House Dispensary
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-tight">
              Clinic and dispensary software for Sri Lanka
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Closed-loop prescription-to-dispensary system
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Designed specifically for practices that stock and dispense their own medicines, eliminating handwriting bottlenecks between consultation desk and dispensary counter.
            </p>
          </div>

          <div className="space-y-12">
            {/* H2 1: How does Suwenzo work for a clinic with a dispensary? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                How does Suwenzo work for a clinic with a dispensary?
              </h2>
              {/* Answer block: 40-60 words */}
              <p className="text-[15px] sm:text-[16px] text-[#1E293B] font-medium leading-[1.65] bg-blue-50/70 border border-blue-100 p-4 rounded-xl mb-6">
                Suwenzo works for a clinic with a dispensary by connecting the doctor&apos;s prescribing tablet directly to the dispensary fulfillment screen in real time. The doctor prescribes with shelf stock visible, the dispensary screen updates within seconds, an auto-printed thermal label produces packet instructions, and inventory balances deduct automatically.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Prescribing</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Stock on Screen</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Doctors see physical shelf stock before confirming each medication.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Fulfillment</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Thermal Packet Labels</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Clear thermal adhesive stickers print automatically without handwriting.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Control</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">60-Day Expiry Alerts</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Highlights near-expiry medicine batches for timely rotation.</p>
                </div>
              </div>
            </section>

            {/* H2 2: From the doctor's tablet to the packet label */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                From the doctor&apos;s tablet to the packet label
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                In traditional clinics, patients carry paper slips to the dispensary, where assistants squint at rushed cursive writing. With Suwenzo:
              </p>

              <ol className="list-decimal pl-5 space-y-2 text-[14.5px] text-[#475569]">
                <li>The doctor selects the drug, dosage frequency, and duration on a tablet.</li>
                <li>The dispensary counter screen refreshes within seconds with complete patient and drug details.</li>
                <li>The assistant verifies the physical medication on the shelf.</li>
                <li>The thermal label printer prints an adhesive label with exact timing instructions.</li>
                <li>The patient receives clearly labelled packets that protect safety and prevent confusion.</li>
              </ol>
            </section>

            {/* H2 3: Stock and expiry at the dispensary counter */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                Stock and expiry at the dispensary counter
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                Managing dispensary inventory with notebooks and physical tallies results in stockouts and expired medicine write-offs. Suwenzo maintains automated ledger control:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-[#475569] mb-5">
                <li><strong>Automatic stock deduction:</strong> Every dispensed tablet or bottle immediately deducts from available inventory.</li>
                <li><strong>60-day expiry warning:</strong> Batches approaching expiration are highlighted in yellow and red on the dispenser&apos;s dashboard.</li>
                <li><strong>Onboarding included:</strong> Our team enters your stock list, strengths, and initial quantities before your first session.</li>
              </ul>
            </section>

            {/* FAQ Block */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-6">
                Frequently asked questions for dispensary clinics
              </h2>
              <div className="space-y-4">
                {dispensaryFaqs.map((faq) => (
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
                  See the dispensary flow live in 20 minutes
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Book an in-person or remote demo. We will show you tablet prescribing, live dispensary queueing, and thermal packet printing.
                </p>
                {/* Related block: 3 links max */}
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/for" className="hover:underline">
                    &larr; All Practice Types
                  </Link>
                  <Link href="/for/solo-doctors" className="hover:underline">
                    &rarr; Solo Practices
                  </Link>
                  <Link href="/for/multi-doctor-practices" className="hover:underline">
                    &rarr; Multi-Doctor Centres
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
