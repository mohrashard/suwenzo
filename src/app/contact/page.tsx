import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { SITE_URL, getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us & Clinic Demos",
  description:
    "Contact the Suwenzo team via WhatsApp or email for clinic demos, setup inquiries and support in Colombo and across Sri Lanka. We respond within hours.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
    languages: {
      "en-LK": `${SITE_URL}/contact`,
      "x-default": `${SITE_URL}/contact`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: `${SITE_URL}/contact`,
    siteName: "Suwenzo",
    title: "Contact Suwenzo | Clinic Software Support & Demos",
    description:
      "Contact the Suwenzo team via WhatsApp or email for clinic demos, setup inquiries and support in Colombo and across Sri Lanka. We respond within hours.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Contact Suwenzo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Suwenzo | Clinic Software Support & Demos",
    description:
      "Contact the Suwenzo team via WhatsApp or email for clinic demos, setup inquiries and support in Colombo and across Sri Lanka. We respond within hours.",
    images: ["/og-default.png"],
  },
};

export default function ContactPage() {
  const demoUrl = getWhatsAppRedirectUrl("contact-page", "demo");
  const inquiryUrl = getWhatsAppRedirectUrl("contact-page", "inquiry");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Contact", item: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[120px] sm:pt-[140px] pb-[80px] px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-blue-200/40 via-white/50 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-[800px] mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">Contact</span>
          </nav>

          {/* Header */}
          <div className="text-left mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 tracking-[0.02em] shadow-xs uppercase">
              Get in Touch
            </span>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-4 tracking-[-0.03em]">
              Contact Suwenzo
            </h1>
          </div>

          {/* Answer-First Definition Block */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)] text-left">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              Reach the Suwenzo team directly on WhatsApp or by email for clinic demonstrations, onboarding questions, and support.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              Based in Colombo, Sri Lanka, we provide active WhatsApp support so doctors and clinic staff can message us directly during surgery hours.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mb-10">
            {/* WhatsApp Card */}
            <div className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.969.539 1.77.818 2.791.818 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.804-5.767-5.804zm8.469 5.766c-.001 4.68-3.808 8.487-8.487 8.487-1.459 0-2.883-.375-4.137-1.085l-4.576 1.199 1.226-4.475c-.779-1.325-1.191-2.839-1.191-4.126.002-4.68 3.809-8.487 8.488-8.487 4.679 0 8.487 3.807 8.487 8.487z"/>
                  </svg>
                </div>
                <h2 className="text-[1.25rem] font-bold text-[#0B1B3A] mb-2">WhatsApp Channel</h2>
                <p className="text-[14px] text-[#475569] leading-relaxed mb-6">
                  Message us directly to book a demo or ask a question about your clinic setup. We respond promptly during clinic working hours.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={demoUrl}
                  rel="nofollow noopener"
                  className="block w-full bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold py-3 px-5 rounded-full text-[14px] text-center shadow-[0_4px_14px_rgba(29,78,216,0.25)] transition-all"
                >
                  Message us for a demo
                </a>
                <a
                  href={inquiryUrl}
                  rel="nofollow noopener"
                  className="block w-full bg-slate-100 hover:bg-slate-200 text-[#0B1B3A] font-semibold py-3 px-5 rounded-full text-[14px] text-center transition-all"
                >
                  General inquiry
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1D4ED8] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <h2 className="text-[1.25rem] font-bold text-[#0B1B3A] mb-2">Email Inquiries</h2>
                <p className="text-[14px] text-[#475569] leading-relaxed mb-6">
                  For formal correspondence, clinic management inquiries, or technical queries, email our team directly.
                </p>
              </div>

              <a
                href="mailto:info@suwenzo.com"
                className="block w-full border border-blue-200 hover:bg-blue-50 text-[#1D4ED8] font-semibold py-3 px-5 rounded-full text-[14px] text-center transition-all"
              >
                info@suwenzo.com
              </a>
            </div>
          </div>

          {/* Location & Response Note */}
          <div className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs text-left">
            <h2 className="text-[1.25rem] font-bold text-[#0B1B3A] mb-3">
              Where we are located
            </h2>
            <p className="text-[14.5px] text-[#475569] leading-relaxed mb-4">
              Suwenzo operates from Colombo, Sri Lanka. In-person demonstration visits and label printer setup sessions are conducted across clinics in Colombo and the Western Province, with online onboarding available across all districts in Sri Lanka.
            </p>
            <p className="text-[14px] text-[#64748B]">
              Note: Pricing is shared during the demo. The first 10 founding clinics in Colombo get 3 months free.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
