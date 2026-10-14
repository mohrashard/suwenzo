import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getSoftwareApplicationSchema } from "@/lib/schemas";
import { SITE_URL, getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Digital Prescriptions for Sri Lanka Clinics",
  description:
    "Eliminate handwritten prescription errors in Sri Lankan clinics. Prescriptions appear on the dispensary screen within seconds for fast dispensing.",
  alternates: {
    canonical: `${SITE_URL}/features/digital-prescriptions`,
    languages: {
      "en-LK": `${SITE_URL}/features/digital-prescriptions`,
      "x-default": `${SITE_URL}/features/digital-prescriptions`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: `${SITE_URL}/features/digital-prescriptions`,
    siteName: "Suwenzo",
    title: "Digital Prescriptions for Sri Lankan Clinics | Suwenzo",
    description:
      "Eliminate handwritten prescription errors in Sri Lankan clinics. Prescriptions appear on the dispensary screen within seconds for fast dispensing.",
    images: [
      {
        url: "/og-features.png",
        width: 1200,
        height: 630,
        alt: "Suwenzo Digital Prescriptions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Prescriptions for Sri Lankan Clinics | Suwenzo",
    description:
      "Eliminate handwritten prescription errors in Sri Lankan clinics. Prescriptions appear on the dispensary screen within seconds for fast dispensing.",
    images: ["/og-features.png"],
  },
};

export default function DigitalPrescriptionsPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("feature-digital-prescriptions", "demo");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Features", item: "/#features" },
    { name: "Digital Prescriptions", item: "/features/digital-prescriptions" },
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
            <span className="text-[#0B1B3A] font-semibold">Digital Prescriptions</span>
          </nav>

          {/* Header */}
          <div className="text-left mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 tracking-[0.02em] shadow-xs uppercase">
              Clinic Feature
            </span>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-4 tracking-[-0.03em]">
              Digital Prescriptions &amp; Dispensing
            </h1>
          </div>

          {/* Answer-First Definition Block */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)] text-left">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              Suwenzo turns doctors&apos; prescription entries into instant dispensary orders, eliminating illegible handwriting and manual tallying.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              When the doctor selects a medication and frequency on a tablet, prescriptions appear on the dispensary screen within seconds. Dispensers see exact dosages, frequencies, and printed label instructions ready to pack.
            </p>
          </div>

          {/* Editorial Content Body */}
          <div className="space-y-10 text-left">
            {/* Section 1 */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                How digital prescriptions flow from doctor&apos;s desk to dispensary
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.7] mb-4">
                Rather than sending patients across the clinic holding handwritten paper chits, Suwenzo connects the consultation room directly to the pharmacy counter over your clinic network:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[13.5px]">
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center font-bold text-xs mb-2">1</div>
                  <h3 className="font-semibold text-[#0B1B3A] mb-1">Doctor selects drug</h3>
                  <p className="text-[#64748B]">Taps medication name, dosage frequency (e.g. BD, TDS), duration, and food timing on a tablet or PC.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center font-bold text-xs mb-2">2</div>
                  <h3 className="font-semibold text-[#0B1B3A] mb-1">Live queue update</h3>
                  <p className="text-[#64748B]">Prescriptions appear on the dispensary screen within seconds with patient name, age, and stock status.</p>
                </div>
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4">
                  <div className="w-7 h-7 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center font-bold text-xs mb-2">3</div>
                  <h3 className="font-semibold text-[#0B1B3A] mb-1">One-click label print</h3>
                  <p className="text-[#64748B]">Dispenser packs items, prints stick-on envelope labels with clear dosing instructions, and marks as ready.</p>
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4 leading-snug">
                Handwritten prescription slips vs. Suwenzo digital workflow
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13.5px] sm:text-[14px] border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/70">
                      <th className="py-3 px-4 font-semibold text-[#0B1B3A]">Dispensing Step</th>
                      <th className="py-3 px-4 font-semibold text-[#0B1B3A]">Handwritten Paper Slips</th>
                      <th className="py-3 px-4 font-semibold text-[#1D4ED8]">Suwenzo Digital Workflow</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#475569]">
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Doctor-dispenser transmission</td>
                      <td className="py-3 px-4">Carried physically by patient</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Appears on screen within seconds</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Legibility &amp; dosing errors</td>
                      <td className="py-3 px-4">Subject to misread handwritten instructions</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Typed dosages with pre-configured strengths</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Envelope labelling</td>
                      <td className="py-3 px-4">Handwritten per drug packet</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Clear label printed with one click</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Stock awareness</td>
                      <td className="py-3 px-4">Doctor prescribes unaware of stock out</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Live pill count badge next to drug name</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                What happens if the clinic internet disconnects?
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.7]">
                Suwenzo operates as a web-based clinical platform requiring an active internet connection (such as a 4G/fiber router or mobile hotspot). If connectivity drops, we recommend switching to a phone hotspot. No offline mode is currently supported, keeping all data synchronized in real time without conflicting version merges.
              </p>
            </section>

            {/* Related Features & CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  Ready to eliminate handwriting from your dispensary?
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Experience how digital prescribing streamlines outpatient consultations. Pricing is shared during the demo. The first 10 founding clinics in Colombo get 3 months free.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/features/patient-records" className="hover:underline">
                    &rarr; Patient Records
                  </Link>
                  <Link href="/features/stock-and-expiry" className="hover:underline">
                    &rarr; Stock &amp; Expiry
                  </Link>
                  <Link href="/features/whatsapp-reminders" className="hover:underline">
                    &rarr; WhatsApp Reminders
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
