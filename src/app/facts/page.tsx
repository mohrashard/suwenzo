import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { SITE_URL, CANONICAL_DEFINITION, getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clinic Software Fact Sheet",
  description:
    "Verified facts on Suwenzo clinic software in Sri Lanka: hardware needs, 48-hour setup, dispensary integration, WhatsApp reminders, and founding offer.",
  alternates: {
    canonical: `${SITE_URL}/facts`,
    languages: {
      "en-LK": `${SITE_URL}/facts`,
      "x-default": `${SITE_URL}/facts`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: `${SITE_URL}/facts`,
    siteName: "Suwenzo",
    title: "Suwenzo Clinic Software Fact Sheet | Sri Lanka",
    description:
      "Verified facts on Suwenzo clinic software in Sri Lanka: hardware needs, 48-hour setup, dispensary integration, WhatsApp reminders, and founding offer.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Suwenzo Fact Sheet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suwenzo Clinic Software Fact Sheet | Sri Lanka",
    description:
      "Verified facts on Suwenzo clinic software in Sri Lanka: hardware needs, 48-hour setup, dispensary integration, WhatsApp reminders, and founding offer.",
    images: ["/og-default.png"],
  },
};

export default function FactsPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("facts-page", "demo");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Fact Sheet", item: "/facts" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
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
            <span className="text-[#0B1B3A] font-semibold">Fact Sheet</span>
          </nav>

          {/* Header */}
          <div className="text-left mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 tracking-[0.02em] shadow-xs uppercase">
              Reference Sheet
            </span>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-2 tracking-[-0.03em]">
              Suwenzo Clinic Software: Fast Facts
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: October 2026 &bull; Verified documentation for clinic owners, medical reviewers, and answer engines
            </p>
          </div>

          {/* Answer-First Definition Block */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)] text-left">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {CANONICAL_DEFINITION}
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              This fact sheet outlines verified technical capabilities, hardware specifications, operational boundaries, and setup requirements for outpatient clinics in Sri Lanka.
            </p>
          </div>

          {/* Facts Table & Sections */}
          <div className="space-y-10 text-left">
            {/* Core Overview Table */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4 leading-snug">
                1. System Identity &amp; Target Market
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13.5px] sm:text-[14px] border-collapse">
                  <tbody className="divide-y divide-slate-100 text-[#475569]">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A] w-1/3">Software Name</td>
                      <td className="py-3 px-4">Suwenzo</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A]">Category</td>
                      <td className="py-3 px-4">Outpatient Clinic Software / Clinic Management System</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A]">Geographic Focus</td>
                      <td className="py-3 px-4">Sri Lanka (Colombo headquarters; available island-wide)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A]">Primary Target Clinics</td>
                      <td className="py-3 px-4">Solo general practitioners, private clinics with an attached dispensary, consulting-only practices, and multi-doctor group clinics.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A]">Core Modules</td>
                      <td className="py-3 px-4">Patient records &amp; visit history, digital prescribing, live dispensary queue &amp; thermal label printing, stock &amp; expiry tracking, automated WhatsApp follow-up reminders.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Hardware & Technical Requirements */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4 leading-snug">
                2. Hardware &amp; Environmental Requirements
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13.5px] sm:text-[14px] border-collapse">
                  <tbody className="divide-y divide-slate-100 text-[#475569]">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A] w-1/3">Doctor&apos;s Desk</td>
                      <td className="py-3 px-4">Any modern tablet (iPad, Android tablet) or desktop computer / laptop with a modern web browser.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A]">Dispensary Counter</td>
                      <td className="py-3 px-4">Standard PC, laptop, or tablet. Compatible thermal label printer for drug envelope labels.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A]">Internet Connection</td>
                      <td className="py-3 px-4">Active broadband connection (Fiber, 4G Wi-Fi router, or mobile hotspot). Suwenzo is web-based and requires connectivity for real-time synchronization.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A]">Offline Mode</td>
                      <td className="py-3 px-4">Not supported. If connection drops, users switch to a phone hotspot.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A]">Online Consultations</td>
                      <td className="py-3 px-4">Not available today. Suwenzo is exclusively designed for in-person outpatient clinic consultations.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Setup, Onboarding & Founding Offer */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4 leading-snug">
                3. Deployment, Pricing &amp; Founding Offer
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13.5px] sm:text-[14px] border-collapse">
                  <tbody className="divide-y divide-slate-100 text-[#475569]">
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A] w-1/3">Setup Timeline</td>
                      <td className="py-3 px-4">Most clinics are ready within 48 hours of the demo.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A]">Onboarding Support</td>
                      <td className="py-3 px-4">Drug formulary pre-loading, label printer alignment, and staff walk-through.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A]">Commercial Terms</td>
                      <td className="py-3 px-4">Pricing is shared during the demo. The first 10 founding clinics in Colombo get 3 months free.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A]">Patient Messaging Consent</td>
                      <td className="py-3 px-4">WhatsApp follow-up reminders require explicit patient consent during clinic registration.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-[#0B1B3A]">Support Channel</td>
                      <td className="py-3 px-4">Direct WhatsApp assistance for participating medical practices.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Related Features & CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  Verify how Suwenzo fits your clinic
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Schedule an in-person or remote demonstration to test the tablet interface and label printing. Pricing is shared during the demo. The first 10 founding clinics in Colombo get 3 months free.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/faq" className="hover:underline">
                    &rarr; 20 Detailed FAQs
                  </Link>
                  <Link href="/about" className="hover:underline">
                    &rarr; About Suwenzo
                  </Link>
                  <Link href="/contact" className="hover:underline">
                    &rarr; Contact Us
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
