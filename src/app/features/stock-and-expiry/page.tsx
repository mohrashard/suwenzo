import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getFaqPageSchema,
  buildGraphSchema,
} from "@/lib/schemas";
import { BRAND, DEFINITION, getFaqsByGroup } from "@/content/site";
import { getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Clinic Stock and Expiry Tracking Software | Suwenzo",
  description:
    "See shelf stock before you prescribe and get 60-day expiry warnings. Medicine stock tracking built for clinics with an in-house dispensary.",
  path: "/features/stock-and-expiry",
  ogImage: "/og-features.png",
});

export default function StockAndExpiryPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("feature-stock-and-expiry", "demo");
  const stockFaqs = getFaqsByGroup("Stock and expiry").slice(0, 4);

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Features", item: "/features" },
      { name: "Stock and Expiry", item: "/features/stock-and-expiry" },
    ]),
    getFaqPageSchema(
      stockFaqs.map((f) => ({ question: f.question, answer: f.answer }))
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
        <div className="max-w-[960px] mx-auto relative z-10 text-left">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/features" className="hover:text-[#1D4ED8] transition-colors">
              Features
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">Stock and Expiry</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              Feature Spoke &bull; Dispensary Inventory
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-tight">
              Medicine stock and expiry tracking for clinics
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Dispensary inventory management for Sri Lankan medical clinics
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Real-time shelf inventory prevents prescribing out-of-stock drugs and eliminates expired medicine waste.
            </p>
          </div>

          <div className="space-y-12">
            {/* H2 1: How does live stock tracking work? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                How does live stock tracking work?
              </h2>
              {/* Answer block: 40-60 words */}
              <p className="text-[15px] sm:text-[16px] text-[#1E293B] font-medium leading-[1.65] bg-blue-50/70 border border-blue-100 p-4 rounded-xl mb-6">
                Live stock tracking works by maintaining real-time quantity balances between the doctor&apos;s prescribing screen and the dispensary shelf. Suwenzo displays exact pill counts beside each medicine while prescribing. When the dispensary fulfills the order, stock levels deduct automatically, eliminating manual paper register tallies and stock discrepancies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Prescribing View</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Pill Counts on Screen</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Doctors see current physical shelf stock before confirming each item.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Fulfillment</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Instant Deduction</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Dispensary confirmations immediately deduct batch quantities.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Audit</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Zero Manual Registers</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">No evening notebook reconciliations or lost prescription counterfoils.</p>
                </div>
              </div>
            </section>

            {/* H2 2: How do 60-day expiry warnings work? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                How do 60-day expiry warnings work?
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                Expired medicine is a direct financial loss for clinics and a patient safety risk. Suwenzo continuously audits batch dates:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-[#475569] mb-6">
                <li><strong>60-day alert window:</strong> Batches reaching expiry within 60 days are highlighted on the dispensary dashboard.</li>
                <li><strong>Color-coded urgency:</strong> Yellow badges indicate batches expiring within 60 days; red flags indicate critical near-expiry.</li>
                <li><strong>First-expiry rotation:</strong> The system automatically suggests dispensing older batches first (FEFO method).</li>
                <li><strong>Supplier returns:</strong> Clinics can pull near-expiry batches early for credit returns to pharmaceutical distributors.</li>
              </ul>
            </section>

            {/* H2 3: Who loads the stock list? We do */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                Who loads the stock list? We do
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                The biggest hurdle in switching clinic software is manual data entry. With Suwenzo, you never start with an empty screen:
              </p>

              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-[14px] text-[#1E293B] space-y-2">
                <p>
                  <strong>Our team enters your full inventory:</strong> Hand us your existing stock register, drug list, or supplier invoices. Our onboarding specialists enter your brands, strengths, pack sizes, and batch dates.
                </p>
                <p>
                  Most clinics are ready within 48 hours of the demo, with their own physical shelf stock verified before opening the first digital patient consultation.
                </p>
              </div>
            </section>

            {/* FAQ Block */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-6">
                Frequently asked questions on clinic stock tracking
              </h2>
              <div className="space-y-4">
                {stockFaqs.map((faq) => (
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
            </section>

            {/* Related Features & Demo CTA (Section 7 Internal Linking) */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  See live stock tracking in a 20-minute demo
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Book an in-person or remote demo. We will show you shelf count visibility, automatic deduction, and expiry alert reports.
                </p>
                {/* Related block: 3 links max */}
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/features" className="hover:underline">
                    &larr; All Features
                  </Link>
                  <Link href="/features/digital-prescriptions" className="hover:underline">
                    &rarr; Digital Prescriptions
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
