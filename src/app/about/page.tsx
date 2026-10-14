import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getOrganizationSchema } from "@/lib/schemas";
import { SITE_URL, CANONICAL_DEFINITION, getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Suwenzo Clinic Software",
  description:
    "Learn about Suwenzo, the Colombo-based clinic software platform designed for private practices in Sri Lanka to connect consultations and dispensaries.",
  alternates: {
    canonical: `${SITE_URL}/about`,
    languages: {
      "en-LK": `${SITE_URL}/about`,
      "x-default": `${SITE_URL}/about`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: `${SITE_URL}/about`,
    siteName: "Suwenzo",
    title: "About Suwenzo | Clinic Software for Sri Lanka",
    description:
      "Learn about Suwenzo, the Colombo-based clinic software platform designed for private practices in Sri Lanka to connect consultations and dispensaries.",
    images: [
      {
        url: "/og-about.png",
        width: 1200,
        height: 630,
        alt: "About Suwenzo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Suwenzo | Clinic Software for Sri Lanka",
    description:
      "Learn about Suwenzo, the Colombo-based clinic software platform designed for private practices in Sri Lanka to connect consultations and dispensaries.",
    images: ["/og-about.png"],
  },
};

export default function AboutPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("about", "demo");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "About", item: "/about" },
  ]);
  const organizationSchema = getOrganizationSchema();

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={organizationSchema} />
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
            <span className="text-[#0B1B3A] font-semibold">About</span>
          </nav>

          {/* Header */}
          <div className="text-left mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 tracking-[0.02em] shadow-xs uppercase">
              About Us
            </span>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-4 tracking-[-0.03em]">
              About Suwenzo
            </h1>
          </div>

          {/* Answer-First Definition Block */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)] text-left">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {CANONICAL_DEFINITION}
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              Based in Colombo, Sri Lanka, Suwenzo was created specifically for the workflow of local private medical practices, replacing handwriting fatigue and lost paper charts with a fast, modern web platform.
            </p>
          </div>

          {/* Editorial Content Body */}
          <div className="space-y-10 text-left">
            {/* Section 1: Who We Are & Why Suwenzo Was Built */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                Why was Suwenzo built for Sri Lankan clinics?
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.7] mb-4">
                Most clinical software in the global market is engineered for multi-floor hospitals with massive billing departments and IT teams. Sri Lankan outpatient clinics operate very differently: doctors need to record consultations in under two minutes, coordinate with a fast-paced dispensary, and keep patients returning for follow-ups without administrative friction.
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.7]">
                The Suwenzo team designed the system from direct observations of Sri Lankan general practices and specialist rooms. By focusing strictly on what matters in daily outpatient care—patient history, prescription clarity, stock tracking, and WhatsApp follow-up reminders—Suwenzo keeps consultations personal and efficient.
              </p>
            </section>

            {/* Section 2: Who Suwenzo is For */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                Who does Suwenzo serve?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px]">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-semibold text-[#0B1B3A] mb-1">Solo General Practitioners</h3>
                  <p className="text-[#64748B]">Doctors running evening surgeries who need instant patient record lookup and fast prescription entry on a tablet.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-semibold text-[#0B1B3A] mb-1">Clinics with Attached Dispensaries</h3>
                  <p className="text-[#64748B]">Practices where prescriptions flow to the pharmacy counter within seconds for instant label printing and live stock tracking.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-semibold text-[#0B1B3A] mb-1">Consulting-Only Practices</h3>
                  <p className="text-[#64748B]">Urban consultation rooms generating clean printed prescription slips for external pharmacies without inventory management.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-semibold text-[#0B1B3A] mb-1">Multi-Doctor Group Clinics</h3>
                  <p className="text-[#64748B]">Group practices where doctors share patient history across shifts and route orders to a unified dispensary queue.</p>
                </div>
              </div>
            </section>

            {/* Section 3: Our Location and Deployment */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                Where is Suwenzo based and how quickly is it deployed?
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.7] mb-3">
                Suwenzo is based in Colombo, Sri Lanka. Our team provides hands-on onboarding for clinics across the Colombo district and remote setup assistance nationwide.
              </p>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.7]">
                Most clinics are ready within 48 hours of the demo. Setup includes pre-loading your clinic&apos;s standard drug formulary and configuring label printer settings so your consultation desk and dispensary are operational without disruption.
              </p>
            </section>

            {/* Related Features & CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  Meet with the Suwenzo team
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Book an in-person or remote 20-minute demonstration. Pricing is shared during the demo. The first 10 founding clinics in Colombo get 3 months free.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/facts" className="hover:underline">
                    &rarr; Clinic Fact Sheet
                  </Link>
                  <Link href="/faq" className="hover:underline">
                    &rarr; Clinic FAQ
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
