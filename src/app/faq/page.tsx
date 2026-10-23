import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FaqDirectoryClient from "@/components/FaqDirectoryClient";
import { buildMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getFaqPageSchema,
  getCollectionPageSchema,
  buildGraphSchema,
} from "@/lib/schemas";
import { BRAND, DEFINITION, FAQ_ITEMS } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Suwenzo FAQ: Setup, Hardware and WhatsApp Reminders",
  description:
    "Answers on setup time, hardware, internet, patient records, stock tracking and WhatsApp consent for Sri Lankan clinics using Suwenzo.",
  path: "/faq",
  ogImage: "/og-faq.png",
});

export default function FaqPage() {
  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "FAQ", item: "/faq" },
    ]),
    getCollectionPageSchema({
      name: "Suwenzo FAQ",
      description:
        "Answers on setup time, hardware, internet, patient records, stock tracking and WhatsApp consent for Sri Lankan clinics using Suwenzo.",
      url: "/faq",
    }),
    getFaqPageSchema(
      FAQ_ITEMS.map((f) => ({ question: f.question, answer: f.answer }))
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
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-blue-200/40 via-white/50 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-[1000px] mx-auto relative z-10 text-left">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">FAQ</span>
          </nav>

          {/* Page Header */}
          <div className="mb-10 sm:mb-12">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              Knowledge Base
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.5rem] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-tight">
              Suwenzo FAQ
            </h1>
            <p className="text-[1.1rem] sm:text-[1.15rem] text-[#475569] max-w-[760px] leading-[1.6] mb-2">
              Verified answers on setup time, clinic hardware, internet connectivity, patient records, and WhatsApp consent for Sri Lankan clinics.
            </p>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Maintained by the Suwenzo team
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Use the search bar below or browse by category to find specific guidance for your clinic desk and dispensary.
            </p>
          </div>

          {/* Interactive Client Search & Grouped Accordions */}
          <FaqDirectoryClient faqs={FAQ_ITEMS} />
        </div>
      </main>

      <Footer />
    </>
  );
}
