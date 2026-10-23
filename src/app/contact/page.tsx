import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getContactPageSchema,
  buildGraphSchema,
} from "@/lib/schemas";
import { BRAND, DEFINITION } from "@/content/site";
import { getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Suwenzo | Book a Clinic Software Demo",
  description:
    "Contact the Suwenzo team to book a 20-minute demo or message us on WhatsApp. We can demonstrate at your private clinic in Colombo.",
  path: "/contact",
  ogImage: "/og-default.png",
});

export default function ContactPage() {
  const demoUrl = getWhatsAppRedirectUrl("contact-page-demo", "demo");
  const inquiryUrl = getWhatsAppRedirectUrl("contact-page-inquiry", "inquiry");

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Contact", item: "/contact" },
    ]),
    getContactPageSchema(),
  ]);

  return (
    <>
      <JsonLd data={graphSchema} />
      <Navbar />

      <main
        id="main-content"
        className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[120px] sm:pt-[140px] pb-[80px] px-4 sm:px-6 relative overflow-hidden"
      >
        <div className="max-w-[880px] mx-auto relative z-10 text-left">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">Contact</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-tight">
              Contact Suwenzo
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Clinical demonstrations and technical support in Sri Lanka
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Message us on WhatsApp or book a 20-minute demo. We can demonstrate at your private clinic in Colombo.
            </p>
          </div>

          {/* Main Contact Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Card 1: Book Demo */}
            <div className="bg-white border-2 border-blue-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11.5px] font-bold text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 uppercase tracking-wider inline-block mb-3">
                  Founding Clinic Demo
                </span>
                <h2 className="text-[1.35rem] font-bold text-[#0B1B3A] mb-2.5">
                  Book a 20-minute demo
                </h2>
                <p className="text-[14px] text-[#475569] leading-relaxed mb-4">
                  Watch prescriptions reach the dispensary screen in real time and test thermal packet label printing. We can visit your clinic in Colombo in person.
                </p>
                <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-xl text-[13px] text-[#1E293B] mb-5">
                  The first 10 founding clinics in Colombo get 3 months free with setup and training included.
                </div>
              </div>

              <a
                href={demoUrl}
                rel="nofollow noopener"
                className="w-full bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold py-3.5 px-6 rounded-full text-[14px] text-center shadow-[0_4px_14px_rgba(29,78,216,0.25)] transition-all hover:scale-[1.02]"
              >
                Book demo on WhatsApp
              </a>
            </div>

            {/* Card 2: General Inquiries */}
            <div className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-[11.5px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200 uppercase tracking-wider inline-block mb-3">
                  Quick Questions
                </span>
                <h2 className="text-[1.35rem] font-bold text-[#0B1B3A] mb-2.5">
                  Message our team
                </h2>
                <p className="text-[14px] text-[#475569] leading-relaxed mb-4">
                  Have a question about printer compatibility, medicine stock loading, multi-doctor logins, or WhatsApp reminder consent? Chat with us directly.
                </p>
                <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl text-[13px] text-[#475569] mb-5">
                  We respond promptly on WhatsApp, which is the channel Sri Lankan clinic teams already use every day.
                </div>
              </div>

              <a
                href={inquiryUrl}
                rel="nofollow noopener"
                className="w-full bg-white hover:bg-slate-50 text-[#0B1B3A] border border-slate-300 font-semibold py-3.5 px-6 rounded-full text-[14px] text-center shadow-2xs transition-all hover:scale-[1.02]"
              >
                Ask a question on WhatsApp
              </a>
            </div>
          </div>

          {/* Clinic Visit Note */}
          <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs mb-8">
            <h2 className="text-[1.25rem] font-bold text-[#0B1B3A] mb-2">
              We can demo at your clinic
            </h2>
            <p className="text-[14px] text-[#475569] leading-relaxed m-0">
              For medical practices located in the Colombo district, our team can visit your clinic during your non-consultation hours. We bring a demonstration tablet and a portable thermal label printer so you can see the complete workflow in your own practice environment.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
