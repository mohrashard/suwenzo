import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getSoftwareApplicationSchema,
  getCollectionPageSchema,
  getFaqPageSchema,
  buildGraphSchema,
} from "@/lib/schemas";
import { BRAND, DEFINITION, FEATURES, PRACTICE_TYPES, FAQ_ITEMS } from "@/content/site";
import { getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Clinic Management Software Features | Suwenzo",
  description:
    "Patient records, digital prescriptions, live stock and expiry alerts, and WhatsApp reminders: every Suwenzo feature for Sri Lankan clinics.",
  path: "/features",
  ogImage: "/og-features.png",
});

export default function FeaturesHubPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("features-hub", "demo");

  const featureFaqs = [
    FAQ_ITEMS.find((f) => f.id === "patient-records-stored")!,
    FAQ_ITEMS.find((f) => f.id === "prescription-delivery-speed")!,
    FAQ_ITEMS.find((f) => f.id === "live-stock-visibility")!,
    FAQ_ITEMS.find((f) => f.id === "whatsapp-reminders-consent")!,
    FAQ_ITEMS.find((f) => f.id === "billing-receipts")!,
  ];

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Features", item: "/features" },
    ]),
    getSoftwareApplicationSchema(),
    getCollectionPageSchema({
      name: "Clinic Management Software Features",
      description:
        "Patient records, digital prescriptions, live stock and expiry alerts, and WhatsApp reminders: every Suwenzo feature for Sri Lankan clinics.",
      url: "/features",
    }),
    getFaqPageSchema(
      featureFaqs.map((f) => ({ question: f.question, answer: f.answer }))
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
        <div className="max-w-[1040px] mx-auto relative z-10 text-left">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">Features</span>
          </nav>

          {/* Page Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              Clinical Modules
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-tight">
              Clinic management software features
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Verified outpatient capabilities for private medical practices
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Every feature in Suwenzo is engineered around the physical realities of Sri Lankan outpatient care: rapid tablet prescribing, accurate dispensary stock, and automated patient follow-ups.
            </p>
          </div>

          <div className="space-y-12">
            {/* H2 1: What does Suwenzo include? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                What does Suwenzo include?
              </h2>
              {/* Answer block: 40-60 words */}
              <p className="text-[15px] sm:text-[16px] text-[#1E293B] font-medium leading-[1.65] bg-blue-50/70 border border-blue-100 p-4 rounded-xl mb-6">
                Suwenzo includes four live outpatient features: patient records with visit history and allergy flags, digital prescriptions sent instantly to the dispensary with thermal packet labels, live shelf stock tracking with 60-day expiry warnings, and consent-based WhatsApp reminders when medicine courses conclude.
              </p>

              {/* 4 Linked Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {FEATURES.map((feat, idx) => (
                  <div
                    key={feat.id}
                    className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex flex-col justify-between hover:bg-white hover:border-blue-200 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8]">
                          Module 0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-[1.15rem] font-bold text-[#0B1B3A] mb-2">
                        {feat.name}
                      </h3>
                      <p className="text-[13.5px] text-[#475569] leading-relaxed mb-4">
                        {feat.shortDescription}
                      </p>
                      <ul className="space-y-1.5 text-[12.5px] text-[#334155] mb-4">
                        {feat.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-[#1D4ED8] font-bold">&bull;</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60">
                      <Link
                        href={feat.path}
                        className="text-[13px] font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Explore {feat.name.toLowerCase()}</span>
                        <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* H2 2: How the features work together */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                How the features work together
              </h2>
              <p className="text-[14.5px] text-[#475569] leading-[1.65] mb-5">
                In a typical practice, these modules operate as one continuous loop rather than disconnected tools:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center sm:text-left">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Station 1</div>
                  <div className="text-[14px] font-bold text-[#0B1B3A] mb-1">Doctor Desk</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Review past visits and prescribe with live shelf balances on screen.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Station 2</div>
                  <div className="text-[14px] font-bold text-[#0B1B3A] mb-1">Dispensary</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Prescription arrives within seconds. Auto-prints thermal dosage labels.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Station 3</div>
                  <div className="text-[14px] font-bold text-[#0B1B3A] mb-1">Inventory</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Deducts stock counts automatically and tracks 60-day expiry dates.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Station 4</div>
                  <div className="text-[14px] font-bold text-[#0B1B3A] mb-1">Reminders</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Consent-based WhatsApp follow-up triggers when the course ends.</p>
                </div>
              </div>

              {/* Minor billing line */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-[13.5px] text-[#475569]">
                <strong className="text-[#0B1B3A]">Front-desk billing:</strong> For clinics that collect consultation and medicine charges together, Suwenzo also includes simple billing and thermal receipt printing.
              </div>
            </section>

            {/* H2 3: Which features does my practice need? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                Which features does my practice need?
              </h2>
              <p className="text-[14.5px] text-[#475569] leading-[1.65] mb-6">
                Your clinic only activates the modules relevant to your clinical setup:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRACTICE_TYPES.map((pt) => (
                  <div key={pt.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider mb-1 block">
                      {pt.badge}
                    </span>
                    <h3 className="text-[15px] font-bold text-[#0B1B3A] mb-1.5">
                      {pt.name}
                    </h3>
                    <p className="text-[13px] text-[#64748B] leading-relaxed mb-3">
                      {pt.shortDescription}
                    </p>
                    <Link
                      href={pt.path}
                      className="text-[12.5px] font-semibold text-[#1D4ED8] hover:underline"
                    >
                      Read workflow guide &rarr;
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Block */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-6">
                Frequently asked questions about Suwenzo features
              </h2>
              <div className="space-y-4">
                {featureFaqs.map((faq) => (
                  <div key={faq.id} className="border-b border-slate-100 pb-4">
                    <h3 className="text-[15.5px] font-bold text-[#0B1B3A] mb-1.5">
                      {faq.question}
                    </h3>
                    <p className="text-[14px] text-[#475569] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-2">
                <Link href="/faq" className="text-[13.5px] text-[#1D4ED8] font-semibold hover:underline">
                  View full FAQ directory &rarr;
                </Link>
              </div>
            </section>

            {/* Demo CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  Test all features in a 20-minute demo
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Schedule an in-person or remote walk-through. The first 10 founding clinics in Colombo receive 3 months free with setup and training included.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/how-it-works" className="hover:underline">
                    &rarr; How It Works
                  </Link>
                  <Link href="/facts" className="hover:underline">
                    &rarr; Fact Sheet
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
