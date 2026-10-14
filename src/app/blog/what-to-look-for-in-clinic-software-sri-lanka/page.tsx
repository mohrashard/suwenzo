import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getBlogPostingSchema } from "@/lib/schemas";
import { SITE_URL, getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "What to Look for in Clinic Software",
  description:
    "A practical checklist for Sri Lankan doctors choosing clinic software: consultation speed, dispensary label printing, WhatsApp reminders and rapid setup.",
  alternates: {
    canonical: `${SITE_URL}/blog/what-to-look-for-in-clinic-software-sri-lanka`,
    languages: {
      "en-LK": `${SITE_URL}/blog/what-to-look-for-in-clinic-software-sri-lanka`,
      "x-default": `${SITE_URL}/blog/what-to-look-for-in-clinic-software-sri-lanka`,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_LK",
    url: `${SITE_URL}/blog/what-to-look-for-in-clinic-software-sri-lanka`,
    siteName: "Suwenzo",
    title: "What to Look for in Clinic Software in Sri Lanka | Suwenzo",
    description:
      "A practical checklist for Sri Lankan doctors choosing clinic software: consultation speed, dispensary label printing, WhatsApp reminders and rapid setup.",
    images: [
      {
        url: "/og-blog.png",
        width: 1200,
        height: 630,
        alt: "What to Look for in Clinic Software in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What to Look for in Clinic Software in Sri Lanka | Suwenzo",
    description:
      "A practical checklist for Sri Lankan doctors choosing clinic software: consultation speed, dispensary label printing, WhatsApp reminders and rapid setup.",
    images: ["/og-blog.png"],
  },
};

export default function WhatToLookForPost() {
  const whatsappUrl = getWhatsAppRedirectUrl("blog-software-checklist", "demo");
  const postUrl = `${SITE_URL}/blog/what-to-look-for-in-clinic-software-sri-lanka`;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: "Clinic Software Guide", item: "/blog/what-to-look-for-in-clinic-software-sri-lanka" },
  ]);
  const articleSchema = getBlogPostingSchema({
    title: "What to Look for in Clinic Software in Sri Lanka",
    description:
      "A practical checklist for Sri Lankan doctors choosing clinic software: consultation speed, dispensary label printing, WhatsApp reminders and rapid setup.",
    url: postUrl,
    datePublished: "2026-10-04T08:00:00+05:30",
    dateModified: "2026-10-04T08:00:00+05:30",
    image: `${SITE_URL}/og-blog.png`,
  });

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <Navbar />

      <main className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[120px] sm:pt-[140px] pb-[80px] px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-blue-200/40 via-white/50 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-[860px] mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#1D4ED8] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">Software Guide</span>
          </nav>

          {/* Article Header */}
          <div className="text-left mb-8">
            <div className="flex items-center gap-3 text-[12px] text-slate-500 mb-3">
              <span className="bg-blue-50 text-[#1D4ED8] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Software Guide
              </span>
              <span>&bull;</span>
              <span>October 4, 2026</span>
              <span>&bull;</span>
              <span>6 min read</span>
            </div>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-4 tracking-[-0.03em]">
              What to Look for in Clinic Software in Sri Lanka
            </h1>
          </div>

          {/* Answer-First Summary Block */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)] text-left">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              Private practitioners in Sri Lanka should evaluate clinic software based on consultation speed, tight dispensary integration, local communication channels, and minimal hardware requirements.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              Large hospital systems are too bloated for rapid outpatient consultations. An effective private clinic platform runs on standard tablets, transmits prescriptions to dispensary screens within seconds, prints envelope labels, and sends follow-up reminders over WhatsApp.
            </p>
          </div>

          {/* Article Content */}
          <article className="space-y-8 text-left text-[15px] sm:text-[16px] text-[#334155] leading-[1.75]">
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                Why hospital software fails in private outpatient practices
              </h2>
              <p className="mb-4">
                Many private medical centers in Sri Lanka attempt to install software designed for tertiary hospitals. Within weeks, doctors abandon the software and return to pen and paper.
              </p>
              <p className="mb-4">
                The reason is workflow mismatch. Hospital software is optimized for complex billing, ward admissions, insurance coding, and nursing shifts. An outpatient doctor in a private surgery needs to see the patient, review their past visits, select 3 or 4 medications, and move to the next patient without clicking through nested menus.
              </p>
            </section>

            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                Four essential criteria for Sri Lankan clinic software
              </h2>
              <ul className="space-y-4 text-[#475569]">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <div>
                    <strong className="text-[#0B1B3A]">1. Tablet-first consultation interface:</strong> Doctors should be able to tap to prescribe rather than typing exhaustive medical narratives. Finding a returning patient by mobile number must take seconds.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <div>
                    <strong className="text-[#0B1B3A]">2. Real-time dispensary queue &amp; label printing:</strong> Prescriptions should appear on the dispensary screen within seconds. One-click thermal printing for medicine envelope stickers prevents dosage confusion for patients.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <div>
                    <strong className="text-[#0B1B3A]">3. WhatsApp follow-up reminders:</strong> SMS messages and patient portal apps suffer from low engagement in Sri Lanka. WhatsApp is the trusted channel for reminders, provided patients give explicit consent.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <div>
                    <strong className="text-[#0B1B3A]">4. Lightweight hardware footprint:</strong> The software must work on standard consumer hardware—such as an iPad, Android tablet, or existing desktop PC—without expensive local servers.
                  </div>
                </li>
              </ul>
            </section>

            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                How fast should clinic onboarding take?
              </h2>
              <p className="mb-4">
                A system that takes months to configure will disrupt your clinical schedule. Look for platforms that can be fully deployed in under 48 hours, including pre-loaded drug formularies and printer testing.
              </p>
              <p>
                With Suwenzo, most clinics are ready within 48 hours of the demo. Pricing is shared during the demo, and the first 10 founding clinics in Colombo get 3 months free.
              </p>
            </section>
          </article>

          {/* Related Articles & CTA */}
          <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div>
              <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                Evaluate Suwenzo for your practice
              </h3>
              <p className="text-[14px] text-[#475569] max-w-[500px]">
                Book a 20-minute demonstration tailored to your clinic setup. Pricing is shared during the demo. The first 10 founding clinics in Colombo get 3 months free.
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                <Link href="/facts" className="hover:underline">
                  &rarr; Clinic Fact Sheet
                </Link>
                <Link href="/for/solo-doctors" className="hover:underline">
                  &rarr; Solo Doctors
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
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
