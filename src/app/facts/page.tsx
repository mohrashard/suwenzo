import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema, buildGraphSchema } from "@/lib/schemas";
import { BRAND, DEFINITION, SOCIALS, FEATURES, PRACTICE_TYPES } from "@/content/site";
import { getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Suwenzo Fact Sheet: Clinic Software for Sri Lanka",
  description:
    "Quick facts about Suwenzo clinic software: what it is, who it is for, features, hardware, setup time, location and what it does not do.",
  path: "/facts",
  ogImage: "/og-default.png",
});

export default function FactsPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("facts-page", "demo");

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Fact Sheet", item: "/facts" },
    ]),
    {
      "@type": "WebPage",
      "@id": `${BRAND.siteUrl}/facts/#webpage`,
      url: `${BRAND.siteUrl}/facts`,
      name: "Suwenzo Fact Sheet: Clinic Software for Sri Lanka",
      description: DEFINITION,
      isPartOf: {
        "@id": `${BRAND.siteUrl}/#website`,
      },
    },
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
            <span className="text-[#0B1B3A] font-semibold">Fact Sheet</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              Entity Reference
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] font-normal text-[#0B1B3A] leading-[1.12] mb-2 tracking-tight">
              Suwenzo fact sheet
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Canonical factual reference for healthcare professionals, clinic managers, and AI knowledge engines
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              This page provides dry, verified facts about Suwenzo, its operational footprint, hardware specifications, and system boundaries.
            </p>
          </div>

          <div className="space-y-10">
            {/* Core Facts Definition List */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-6">
                System and Product Identity
              </h2>
              <dl className="divide-y divide-slate-100 text-[14px]">
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-[#0B1B3A]">Product Name</dt>
                  <dd className="text-[#475569] sm:col-span-2">Suwenzo</dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-[#0B1B3A]">Tagline</dt>
                  <dd className="text-[#475569] sm:col-span-2">{BRAND.tagline}</dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-[#0B1B3A]">Software Category</dt>
                  <dd className="text-[#475569] sm:col-span-2">Outpatient Clinic Software / Clinic Management System</dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-[#0B1B3A]">Founding City and Country</dt>
                  <dd className="text-[#475569] sm:col-span-2">Built in Colombo, Sri Lanka</dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-[#0B1B3A]">Target Audience</dt>
                  <dd className="text-[#475569] sm:col-span-2">
                    Private clinics and medical practices in Sri Lanka, with or without an in-house dispensary. Solo doctors, multi-doctor centres, multi-branch groups.
                  </dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-[#0B1B3A]">Live Features</dt>
                  <dd className="text-[#475569] sm:col-span-2">
                    <ul className="list-disc pl-5 space-y-1">
                      {FEATURES.map((f) => (
                        <li key={f.id}>
                          <strong>{f.name}:</strong> {f.shortDescription}
                        </li>
                      ))}
                      <li>
                        <strong>Billing and receipts:</strong> Minor front-desk billing and thermal receipt printing for clinics with front-desk payment collection.
                      </li>
                    </ul>
                  </dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-[#0B1B3A]">Hardware Requirements</dt>
                  <dd className="text-[#475569] sm:col-span-2">
                    A modern tablet (iPad or Android) or computer for the doctor&apos;s desk, a thermal label printer for the dispensary counter, and an active internet connection.
                  </dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-[#0B1B3A]">Setup and Onboarding</dt>
                  <dd className="text-[#475569] sm:col-span-2">
                    Completed with the clinic. Stock list entered, printer connected, and dispenser trained. Most clinics are ready within 48 hours of the demo.
                  </dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-[#0B1B3A]">Internet and Resilience</dt>
                  <dd className="text-[#475569] sm:col-span-2">
                    Suwenzo requires an active internet connection. If the connection temporarily drops, prescriptions queue in the local browser buffer and resume upon signal restoration. Suwenzo is not offline-capable.
                  </dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-[#0B1B3A]">Founding Offer</dt>
                  <dd className="text-[#475569] sm:col-span-2">
                    First 10 founding clinics in Colombo get 3 months free.
                  </dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-[#0B1B3A]">Demo Format</dt>
                  <dd className="text-[#475569] sm:col-span-2">
                    20 minutes, booked through WhatsApp (/go/whatsapp?src=...&amp;m=...). We can demo at your clinic in Colombo.
                  </dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-[#0B1B3A]">Languages</dt>
                  <dd className="text-[#475569] sm:col-span-2">
                    English software interface. (Sinhala and Tamil communication roadmap items to be confirmed).
                  </dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-[#0B1B3A]">Website and Canonical Host</dt>
                  <dd className="text-[#475569] sm:col-span-2">
                    https://www.suwenzo.com (www is canonical)
                  </dd>
                </div>
                <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold text-[#0B1B3A]">Social Profiles</dt>
                  <dd className="text-[#475569] sm:col-span-2 space-y-1">
                    <div>Facebook: <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" className="text-[#1D4ED8] hover:underline">{SOCIALS.facebook}</a></div>
                    <div>Instagram: <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="text-[#1D4ED8] hover:underline">{SOCIALS.instagram}</a></div>
                    <div>TikTok: <a href={SOCIALS.tiktok} target="_blank" rel="noopener noreferrer" className="text-[#1D4ED8] hover:underline">{SOCIALS.tiktok}</a></div>
                    <div>LinkedIn: <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#1D4ED8] hover:underline">{SOCIALS.linkedin}</a></div>
                  </dd>
                </div>
              </dl>
            </section>

            {/* What Suwenzo is not */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4">
                What Suwenzo is not
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                To maintain accurate expectations, Suwenzo explicitly defines what the system does not do:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#475569]">
                <li><strong>Not hospital management software (HMS):</strong> Does not manage inpatient wards, hospital beds, or surgical suites.</li>
                <li><strong>Not an offline system:</strong> Does not operate as an offline desktop installation. Requires internet connectivity.</li>
                <li><strong>Not a laboratory analyzer system (LIMS):</strong> Does not interface directly with hematology or clinical chemistry analyzers.</li>
                <li><strong>Not a retail pharmacy POS:</strong> Engineered for outpatient clinic dispensaries, not general retail retail stores selling non-medicinal items.</li>
                <li><strong>Not an online teleconsultation portal:</strong> Designed strictly for in-person outpatient clinic consultations.</li>
              </ul>
            </section>

            {/* Related Features & Demo CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  Verify how Suwenzo fits your clinic
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Book an in-person or remote 20-minute demo. We can demonstrate at your clinic in Colombo.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/faq" className="hover:underline">
                    &rarr; FAQ Directory
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
