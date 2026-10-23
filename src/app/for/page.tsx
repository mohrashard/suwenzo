import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getCollectionPageSchema,
  getFaqPageSchema,
  buildGraphSchema,
} from "@/lib/schemas";
import { BRAND, DEFINITION, PRACTICE_TYPES, getFaqsByGroup } from "@/content/site";
import { getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Software for Private Clinics in Sri Lanka | Suwenzo",
  description:
    "Suwenzo fits solo doctors, clinics with a dispensary, consulting-only practices and multi-doctor centres across Sri Lanka.",
  path: "/for",
  ogImage: "/og-for.png",
});

export default function ForClinicsHubPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("for-hub", "demo");
  const practiceFaqs = getFaqsByGroup("Practice types").slice(0, 4);

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Who It's For", item: "/for" },
    ]),
    getCollectionPageSchema({
      name: "Software for Private Clinics in Sri Lanka",
      description:
        "Suwenzo fits solo doctors, clinics with a dispensary, consulting-only practices and multi-doctor centres across Sri Lanka.",
      url: "/for",
    }),
    getFaqPageSchema(
      practiceFaqs.map((f) => ({ question: f.question, answer: f.answer }))
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
            <span className="text-[#0B1B3A] font-semibold">Who It&apos;s For</span>
          </nav>

          {/* Page Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              Practice Archetypes
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-tight">
              Clinic software for every kind of private practice
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Practice fit assessment for Sri Lankan doctors
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Whether your practice operates an attached dispensary or generates printed slips for external retail pharmacies, Suwenzo adapts without requiring you to remodel your consultation flow.
            </p>
          </div>

          <div className="space-y-12">
            {/* H2 1: Which Suwenzo setup fits my practice? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                Which Suwenzo setup fits my practice?
              </h2>
              {/* Answer block: 40-60 words */}
              <p className="text-[15px] sm:text-[16px] text-[#1E293B] font-medium leading-[1.65] bg-blue-50/70 border border-blue-100 p-4 rounded-xl mb-6">
                The right Suwenzo setup depends on whether your clinic dispenses medicines in-house and how many doctors share the facility. Practices with a dispensary use live stock tracking and thermal packet stickers, while consulting-only doctors use the pre-loaded Sri Lankan drug directory to generate printed or WhatsApp prescriptions.
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13.5px] sm:text-[14px] border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/80 text-[#0B1B3A]">
                      <th className="py-3 px-4 font-bold">Practice Archetype</th>
                      <th className="py-3 px-4 font-bold">Dispensary</th>
                      <th className="py-3 px-4 font-bold">Doctors</th>
                      <th className="py-3 px-4 font-bold">What is Used</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#475569]">
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-[#0B1B3A]">
                        <Link href="/for/solo-doctors" className="text-[#1D4ED8] hover:underline">
                          Solo Practices
                        </Link>
                      </td>
                      <td className="py-3.5 px-4">Optional (Yes/No)</td>
                      <td className="py-3.5 px-4">1 Doctor</td>
                      <td className="py-3.5 px-4">Patient records, rapid tablet prescribing, WhatsApp reminders</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-[#0B1B3A]">
                        <Link href="/for/clinics-with-dispensary" className="text-[#1D4ED8] hover:underline">
                          Clinics with Dispensary
                        </Link>
                      </td>
                      <td className="py-3.5 px-4">Yes (In-house)</td>
                      <td className="py-3.5 px-4">1 to 5+ Doctors</td>
                      <td className="py-3.5 px-4">Live shelf stock deduction, thermal packet labels, expiry warnings</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-[#0B1B3A]">
                        <Link href="/for/consulting-only-practices" className="text-[#1D4ED8] hover:underline">
                          Consulting-Only Practices
                        </Link>
                      </td>
                      <td className="py-3.5 px-4">No</td>
                      <td className="py-3.5 px-4">1 or more</td>
                      <td className="py-3.5 px-4">National drug list, printed/WhatsApp prescriptions, patient history</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-semibold text-[#0B1B3A]">
                        <Link href="/for/multi-doctor-practices" className="text-[#1D4ED8] hover:underline">
                          Multi-Doctor Centres and Branches
                        </Link>
                      </td>
                      <td className="py-3.5 px-4">Yes (Shared queue)</td>
                      <td className="py-3.5 px-4">Multiple &amp; branches</td>
                      <td className="py-3.5 px-4">Individual doctor logins, central patient DB, unified dispensary queue</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4 Cards Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRACTICE_TYPES.map((pt) => (
                <div
                  key={pt.id}
                  className="bg-white border border-slate-200/90 rounded-[22px] p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:border-blue-200 hover:shadow-sm transition-all"
                >
                  <div>
                    <span className="text-[11px] font-bold text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 inline-block mb-3 uppercase tracking-wider">
                      {pt.badge}
                    </span>
                    <h3 className="text-[1.35rem] font-bold text-[#0B1B3A] mb-2.5">
                      {pt.name}
                    </h3>
                    <p className="text-[14px] text-[#475569] leading-relaxed mb-4">
                      {pt.shortDescription}
                    </p>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-5">
                      <span className="text-[12px] font-bold text-[#0B1B3A] block mb-0.5">Who this fits:</span>
                      <span className="text-[13px] text-[#64748B]">{pt.whoItFits}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={pt.path}
                      className="text-[13px] font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Read practice workflow</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                    <a
                      href={whatsappUrl}
                      rel="nofollow noopener"
                      className="text-[12.5px] font-semibold text-slate-600 hover:text-[#1D4ED8]"
                    >
                      Book demo &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </section>

            {/* FAQ Block */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-6">
                Frequently asked questions on practice types
              </h2>
              <div className="space-y-4">
                {practiceFaqs.map((faq) => (
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
                  Find out how Suwenzo fits your practice
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Book an in-person or remote 20-minute demonstration. We can test tablet prescribing and label printing directly at your clinic in Colombo.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/how-it-works" className="hover:underline">
                    &rarr; How It Works
                  </Link>
                  <Link href="/features" className="hover:underline">
                    &rarr; All Features
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
