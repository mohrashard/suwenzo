import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getSoftwareApplicationSchema } from "@/lib/schemas";
import { SITE_URL, getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software for Multi-Doctor Clinics",
  description:
    "Shared patient records, cross-consultation continuity and centralized dispensary queue for multi-doctor practices and group clinics in Sri Lanka.",
  alternates: {
    canonical: `${SITE_URL}/for/multi-doctor-practices`,
    languages: {
      "en-LK": `${SITE_URL}/for/multi-doctor-practices`,
      "x-default": `${SITE_URL}/for/multi-doctor-practices`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: `${SITE_URL}/for/multi-doctor-practices`,
    siteName: "Suwenzo",
    title: "Software for Multi-Doctor Clinics | Suwenzo",
    description:
      "Shared patient records, cross-consultation continuity and centralized dispensary queue for multi-doctor practices and group clinics in Sri Lanka.",
    images: [
      {
        url: "/og-for-clinics.png",
        width: 1200,
        height: 630,
        alt: "Suwenzo for Multi-Doctor Practices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software for Multi-Doctor Clinics | Suwenzo",
    description:
      "Shared patient records, cross-consultation continuity and centralized dispensary queue for multi-doctor practices and group clinics in Sri Lanka.",
    images: ["/og-for-clinics.png"],
  },
};

export default function MultiDoctorPracticesPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("for-multi-doctor-practices", "demo");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "For Clinics", item: "/#who-and-why" },
    { name: "Multi-Doctor Practices", item: "/for/multi-doctor-practices" },
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
            <Link href="/#who-and-why" className="hover:text-[#1D4ED8] transition-colors">
              For Clinics
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">Multi-Doctor</span>
          </nav>

          {/* Header */}
          <div className="text-left mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 tracking-[0.02em] shadow-xs uppercase">
              Practice Type
            </span>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-4 tracking-[-0.03em]">
              Software for Multi-Doctor Practices in Sri Lanka
            </h1>
          </div>

          {/* Answer-First Definition Block */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)] text-left">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              Suwenzo enables seamless record sharing across doctors in group practices, providing continuity of care regardless of who is on duty.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              When multiple physicians share consultation rooms or cover different shifts, any doctor can instantly access past diagnoses, treatments, and visit notes, while all consultation rooms feed into a unified dispensary queue.
            </p>
          </div>

          {/* Editorial Content Body */}
          <div className="space-y-10 text-left">
            {/* Section 1 */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                Why group clinics need shared medical records
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.7] mb-4">
                In busy Sri Lankan medical centers where visiting consultants and resident doctors rotate through evening sessions, patients frequently see different physicians on each visit:
              </p>
              <ul className="space-y-3 text-[14px] sm:text-[14.5px] text-[#334155]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>Zero consultation handover gaps:</strong> Doctor B immediately sees the medication history and clinical findings recorded by Doctor A earlier in the week.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>Unified dispensary queue:</strong> Prescriptions from all active consultation rooms stream into the central pharmacy counter in chronological order.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>Consistent follow-up reminders:</strong> Patients receive timely WhatsApp reminders regardless of which doctor scheduled their next review.</span>
                </li>
              </ul>
            </section>

            {/* Comparison Table */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4 leading-snug">
                Fragmented paper charts vs. Suwenzo for group practices
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13.5px] sm:text-[14px] border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/70">
                      <th className="py-3 px-4 font-semibold text-[#0B1B3A]">Workflow Aspect</th>
                      <th className="py-3 px-4 font-semibold text-[#0B1B3A]">Separate Paper Folders</th>
                      <th className="py-3 px-4 font-semibold text-[#1D4ED8]">Suwenzo Group Clinic System</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#475569]">
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Cross-doctor visibility</td>
                      <td className="py-3 px-4">Locked in physical drawers or doctor&apos;s desk</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Shared digital file visible to authorized clinic doctors</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Dispensary workload</td>
                      <td className="py-3 px-4">Paper slips pile up at counter with unclear priority</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Centralized digital queue with live status</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Doctor onboarding</td>
                      <td className="py-3 px-4">Learning disparate filing cabinets</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Intuitive web interface mastered in minutes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Clinic deployment</td>
                      <td className="py-3 px-4">Physical infrastructure setup</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Ready within 48 hours of demo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Related Clinics & CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  Bring your clinic&apos;s medical team onto one system
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Schedule a demo for your medical team to see how multiple consultation rooms collaborate. Pricing is shared during the demo. The first 10 founding clinics in Colombo get 3 months free.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/for/clinics-with-dispensary" className="hover:underline">
                    &rarr; Clinics with Dispensary
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
