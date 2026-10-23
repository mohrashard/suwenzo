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
  title: "Digital Prescription Software for Sri Lankan Clinics",
  description:
    "Prescribe on a tablet with live stock beside each medicine. The prescription reaches the dispensary screen within seconds and the label prints.",
  path: "/features/digital-prescriptions",
  ogImage: "/og-features.png",
});

export default function DigitalPrescriptionsPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("feature-digital-prescriptions", "demo");
  const prescriptionFaqs = getFaqsByGroup("Prescriptions and dispensary").slice(0, 4);

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Features", item: "/features" },
      { name: "Digital Prescriptions", item: "/features/digital-prescriptions" },
    ]),
    getFaqPageSchema(
      prescriptionFaqs.map((f) => ({ question: f.question, answer: f.answer }))
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
            <span className="text-[#0B1B3A] font-semibold">Digital Prescriptions</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              Feature Spoke &bull; Connected Dispensary
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-tight">
              Digital prescription software for Sri Lankan clinics
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Prescription-to-dispensary workflow for private medical clinics
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Eliminate rushed handwriting and manual transcription. Prescriptions reach the dispensary counter in real time.
            </p>
          </div>

          <div className="space-y-12">
            {/* H2 1: How does a prescription reach the dispensary? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                How does a prescription reach the dispensary?
              </h2>
              {/* Answer block: 40-60 words */}
              <p className="text-[15px] sm:text-[16px] text-[#1E293B] font-medium leading-[1.65] bg-blue-50/70 border border-blue-100 p-4 rounded-xl mb-6">
                A prescription reaches the dispensary through real-time web synchronization the instant the doctor confirms it on their tablet. Suwenzo displays the complete order on the dispensary counter screen within seconds, eliminating paper slips and ensuring the assistant dispenses verified medications with exact dosage instructions.
              </p>

              <div className="mb-6 flex justify-center">
                <Image
                  src="/illustration-prescriptions.png"
                  alt="Doctor prescribing on tablet with prescription reaching dispensary counter screen and thermal label printer within seconds"
                  width={600}
                  height={450}
                  className="rounded-2xl border border-slate-200/90 shadow-xs max-w-full h-auto"
                />
              </div>

              <ol className="list-decimal pl-5 space-y-3 text-[14.5px] text-[#475569] leading-[1.6]">
                <li><strong>Doctor taps confirm:</strong> The order is instantly validated against available shelf stock and allergy alerts.</li>
                <li><strong>Dispensary screen alerts:</strong> The order appears at the top of the dispensary queue with patient details and doctor attribution.</li>
                <li><strong>Assistant prepares packets:</strong> With clear digital font on screen, there is zero handwriting ambiguity.</li>
              </ol>
            </section>

            {/* H2 2: Prescribing with live stock beside every medicine */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                Prescribing with live stock beside every medicine
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                Doctors frequently prescribe medicines only to hear later from the dispensary that stock ran out. Suwenzo solves this directly on the consultation screen:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-[#475569]">
                <li><strong>Real-time shelf counts:</strong> Each drug item displays current shelf quantities (for example: &quot;120 on shelf&quot;) right next to the search result.</li>
                <li><strong>No interrupted consultations:</strong> You never have to pause a patient visit to ask your dispensary assistant if a brand is in stock.</li>
                <li><strong>Automatic deduction:</strong> As soon as medicines are dispensed, balances update across the entire practice.</li>
              </ul>
            </section>

            {/* H2 3: Labels that print automatically */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                Labels that print automatically
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                Handwriting instructions on paper drug envelopes takes valuable time and leads to patient confusion. Suwenzo pairs with standard thermal label printers:
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 mb-5">
                <ul className="space-y-1.5 text-[13.5px] text-[#334155]">
                  <li>&bull; Patient full name and sample identification clearly printed</li>
                  <li>&bull; Drug generic name, brand, and exact strength</li>
                  <li>&bull; Formatted timing instructions (e.g., &quot;1 tablet after meals three times daily&quot;)</li>
                  <li>&bull; Duration of treatment and clinic contact details</li>
                </ul>
              </div>
              <p className="text-[13.5px] text-[#64748B]">
                Labels print on durable, smudge-resistant thermal adhesive paper sized for standard medicine envelopes.
              </p>
            </section>

            {/* H2 4: No dispensary? Printed and WhatsApp prescriptions */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                No dispensary? Printed and WhatsApp prescriptions
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                For consulting-only physicians whose patients fill prescriptions at retail pharmacies:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-[#475569]">
                <li><strong>Sri Lankan medicine list:</strong> Prescribe from the comprehensive national directory of approved generics and brands.</li>
                <li><strong>Printed slips:</strong> Print clean, legible prescription slips with your doctor header and registration details.</li>
                <li><strong>WhatsApp dispatch:</strong> Send digital prescription summaries directly to the patient&apos;s phone via WhatsApp.</li>
              </ul>
            </section>

            {/* FAQ Block */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-6">
                Frequently asked questions on digital prescribing
              </h2>
              <div className="space-y-4">
                {prescriptionFaqs.map((faq) => (
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
                  See digital prescriptions live in 20 minutes
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Book an in-person or remote demo. We can test tablet prescribing and automatic label printing directly at your clinic in Colombo.
                </p>
                {/* Related block: 3 links max */}
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/features" className="hover:underline">
                    &larr; All Features
                  </Link>
                  <Link href="/features/patient-records" className="hover:underline">
                    &rarr; Patient Records
                  </Link>
                  <Link href="/features/stock-and-expiry" className="hover:underline">
                    &rarr; Stock and Expiry
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
