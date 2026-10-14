import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getSoftwareApplicationSchema } from "@/lib/schemas";
import { SITE_URL, getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Records Software for Sri Lankan Clinics",
  description:
    "Keep patient visits, diagnoses, prescriptions and allergy alerts in one digital record. Built for private clinics in Sri Lanka with instant retrieval.",
  alternates: {
    canonical: `${SITE_URL}/features/patient-records`,
    languages: {
      "en-LK": `${SITE_URL}/features/patient-records`,
      "x-default": `${SITE_URL}/features/patient-records`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: `${SITE_URL}/features/patient-records`,
    siteName: "Suwenzo",
    title: "Patient Records Software for Sri Lankan Clinics | Suwenzo",
    description:
      "Keep patient visits, diagnoses, prescriptions and allergy alerts in one digital record. Built for private clinics in Sri Lanka with instant retrieval.",
    images: [
      {
        url: "/og-features.png",
        width: 1200,
        height: 630,
        alt: "Suwenzo Patient Records Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Records Software for Sri Lankan Clinics | Suwenzo",
    description:
      "Keep patient visits, diagnoses, prescriptions and allergy alerts in one digital record. Built for private clinics in Sri Lanka with instant retrieval.",
    images: ["/og-features.png"],
  },
};

export default function PatientRecordsPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("feature-patient-records", "demo");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Features", item: "/#features" },
    { name: "Patient Records", item: "/features/patient-records" },
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
            <span className="text-[#0B1B3A] font-semibold">Patient Records</span>
          </nav>

          {/* Header */}
          <div className="text-left mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 tracking-[0.02em] shadow-xs uppercase">
              Clinic Feature
            </span>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-4 tracking-[-0.03em]">
              Patient Records &amp; Visit History
            </h1>
          </div>

          {/* Answer-First Definition Block */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)] text-left">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              Suwenzo keeps each patient&apos;s past visits, prescriptions, and clinical notes in one connected file, so doctors never start consultations from scratch.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              When a returning patient walks in, entering their name or phone number immediately displays past diagnoses, prior treatments, documented allergies, and dosage history in seconds.
            </p>
          </div>

          {/* Editorial Content Body */}
          <div className="space-y-10 text-left">
            {/* Section 1 */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                Why paper files slow down outpatient consultations
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.7] mb-4">
                In busy Sri Lankan outpatient clinics, doctors frequently see 30 to 50 patients during an evening session. Searching through paper folders, finding handwritten carbon copies, or asking patients to recall what was prescribed three months ago takes away valuable diagnostic time.
              </p>
              <ul className="space-y-2 text-[14px] sm:text-[14.5px] text-[#334155]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>Zero search delay:</strong> Find returning patients by mobile number or name in under two seconds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>Continuity of care:</strong> See which antibiotic or antihypertensive was previously prescribed and whether the dosage was adjusted.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>Prominent allergy flags:</strong> Critical allergies and chronic conditions stay pinned to the top of the consultation screen.</span>
                </li>
              </ul>
            </section>

            {/* Comparison Table */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4 leading-snug">
                Paper files vs. Suwenzo digital records
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13.5px] sm:text-[14px] border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/70">
                      <th className="py-3 px-4 font-semibold text-[#0B1B3A]">Workflow Factor</th>
                      <th className="py-3 px-4 font-semibold text-[#0B1B3A]">Traditional Paper Files</th>
                      <th className="py-3 px-4 font-semibold text-[#1D4ED8]">Suwenzo Digital Records</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#475569]">
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Finding past visits</td>
                      <td className="py-3 px-4">Manual search in folders or patient memory</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Instant lookup on doctor&apos;s tablet</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Allergy safety alerts</td>
                      <td className="py-3 px-4">Relies on written notes or patient reminder</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Visual safety banner on every visit</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Multi-doctor visibility</td>
                      <td className="py-3 px-4">Locked in physical filing cabinets</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Accessible to authorized practice doctors</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Setup time</td>
                      <td className="py-3 px-4">Years of accumulated cabinets</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Ready within 48 hours of demo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Related Features & CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  See how patient records connect with the dispensary
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Book a short demo at your clinic to test the digital consultation workflow on a tablet. The first 10 founding clinics in Colombo receive 3 months free.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/features/digital-prescriptions" className="hover:underline">
                    &rarr; Digital Prescriptions
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
