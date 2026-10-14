import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getSoftwareApplicationSchema } from "@/lib/schemas";
import { SITE_URL, getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clinic Software for Solo Doctors",
  description:
    "Streamline your solo medical practice in Sri Lanka. Manage patient records, quick prescription entry and WhatsApp follow-up reminders on a single tablet.",
  alternates: {
    canonical: `${SITE_URL}/for/solo-doctors`,
    languages: {
      "en-LK": `${SITE_URL}/for/solo-doctors`,
      "x-default": `${SITE_URL}/for/solo-doctors`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: `${SITE_URL}/for/solo-doctors`,
    siteName: "Suwenzo",
    title: "Clinic Software for Solo Doctors in Sri Lanka | Suwenzo",
    description:
      "Streamline your solo medical practice in Sri Lanka. Manage patient records, quick prescription entry and WhatsApp follow-up reminders on a single tablet.",
    images: [
      {
        url: "/og-for-clinics.png",
        width: 1200,
        height: 630,
        alt: "Suwenzo for Solo Doctors in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic Software for Solo Doctors in Sri Lanka | Suwenzo",
    description:
      "Streamline your solo medical practice in Sri Lanka. Manage patient records, quick prescription entry and WhatsApp follow-up reminders on a single tablet.",
    images: ["/og-for-clinics.png"],
  },
};

export default function SoloDoctorsPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("for-solo-doctors", "demo");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "For Clinics", item: "/#who-and-why" },
    { name: "Solo Doctors", item: "/for/solo-doctors" },
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
            <span className="text-[#0B1B3A] font-semibold">Solo Doctors</span>
          </nav>

          {/* Header */}
          <div className="text-left mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 tracking-[0.02em] shadow-xs uppercase">
              Practice Type
            </span>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-4 tracking-[-0.03em]">
              Clinic Software for Solo Doctors in Sri Lanka
            </h1>
          </div>

          {/* Answer-First Definition Block */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)] text-left">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              Suwenzo gives solo practitioners a lightweight clinical system to record consultations, issue prescriptions, and schedule follow-ups without complex IT overhead.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              Designed for individual general practitioners and specialists in Sri Lanka, the interface runs smoothly on a single tablet or laptop. Consultations stay fast, patient records are instantly retrievable, and patient return visits are managed via WhatsApp.
            </p>
          </div>

          {/* Editorial Content Body */}
          <div className="space-y-10 text-left">
            {/* Section 1 */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                Why solo doctors need software built for consultation speed
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.7] mb-4">
                Solo practitioners handle consultations, examinations, and note-taking entirely on their own during peak evening sessions. Traditional hospital software is cluttered with dozens of unnecessary billing and administrative menus that slow doctors down:
              </p>
              <ul className="space-y-3 text-[14px] sm:text-[14.5px] text-[#334155]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>Single-screen consultation:</strong> Diagnosis, past history, and medications reside on one clean view with minimal typing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>Past visit memory:</strong> Instantly look up what antibiotic or dose was given during the patient&apos;s previous visit.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>Automated follow-up scheduling:</strong> Click a review interval (e.g. 7 days) to queue a WhatsApp reminder for the patient.</span>
                </li>
              </ul>
            </section>

            {/* Comparison Table */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4 leading-snug">
                Paper files vs. Suwenzo for solo practitioners
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13.5px] sm:text-[14px] border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/70">
                      <th className="py-3 px-4 font-semibold text-[#0B1B3A]">Practice Need</th>
                      <th className="py-3 px-4 font-semibold text-[#0B1B3A]">Handwritten Paper Notes</th>
                      <th className="py-3 px-4 font-semibold text-[#1D4ED8]">Suwenzo for Solo Doctors</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#475569]">
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Hardware needed</td>
                      <td className="py-3 px-4">Filing cabinets, binders, physical slips</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Any tablet or laptop with web browser</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Patient visit retrieval</td>
                      <td className="py-3 px-4">Searching physical folders between consultations</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Search by name or mobile number in seconds</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Review visit return rate</td>
                      <td className="py-3 px-4">Patients forget verbal instructions</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">WhatsApp reminders ensure timely returns</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Onboarding time</td>
                      <td className="py-3 px-4">Manual setup</td>
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
                  Modernize your solo practice in under 48 hours
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Book a quick 20-minute demonstration tailored to solo doctors. Pricing is shared during the demo. The first 10 founding clinics in Colombo get 3 months free.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/for/clinics-with-dispensary" className="hover:underline">
                    &rarr; Clinics with Dispensary
                  </Link>
                  <Link href="/for/consulting-only-practices" className="hover:underline">
                    &rarr; Consulting-Only Practices
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
