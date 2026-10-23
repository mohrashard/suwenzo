import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { getWhatsAppRedirectUrl } from "@/lib/site";
import { BRAND, DEFINITION } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | Suwenzo Clinic Software",
  description:
    "Plain and truthful terms of service governing software access, hardware requirements, and practice subscriptions for Suwenzo in Sri Lanka.",
  path: "/terms",
});

export default function TermsPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("terms", "inquiry");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Terms of Service", item: "/terms" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main
        id="main-content"
        className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[120px] sm:pt-[140px] pb-[80px] px-4 sm:px-6 relative overflow-hidden"
      >
        <div className="max-w-[860px] mx-auto relative z-10 text-left">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">Terms of Service</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1 px-3.5 rounded-full text-[0.75rem] font-medium inline-block mb-3 uppercase tracking-wider">
              Legal Documentation
            </span>
            <h1 className="text-[2.25rem] sm:text-[3rem] font-normal text-[#0B1B3A] leading-[1.15] mb-2 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; General terms for private practices and healthcare providers
            </p>
          </div>

          {/* Summary Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 mb-8 shadow-xs">
            <p className="text-[15px] font-semibold text-[#0B1B3A] mb-1">
              About Suwenzo Services
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              {DEFINITION}
            </p>
          </div>

          {/* Body Content */}
          <div className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-10 shadow-xs space-y-8 text-[14.5px] text-[#334155] leading-[1.7]">
            <section>
              <h2 className="text-[1.25rem] font-bold text-[#0B1B3A] mb-3">
                1. Service Scope and Intended Use
              </h2>
              <p>
                Suwenzo is licensed solely for professional administrative and clinical management use by registered medical doctors and healthcare staff in outpatient private practices within Sri Lanka. Suwenzo is not designed for hospital inpatient management or life-critical emergency room tracking.
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-[#0B1B3A] mb-3">
                2. Clinical Responsibility
              </h2>
              <p>
                Suwenzo provides digital organization, prescription recording, and inventory visibility. The practicing physician retains sole legal and professional responsibility for all clinical decisions, diagnoses, drug selections, and dosage recommendations. Suwenzo does not substitute for qualified medical judgment.
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-[#0B1B3A] mb-3">
                3. Hardware and Network Requirements
              </h2>
              <p>
                The subscribing clinic is responsible for providing functional hardware (tablets, computers, and compatible thermal label printers) and maintaining an active internet connection. If the connection temporarily drops, prescriptions queue locally in the browser buffer and resume upon signal restoration. Suwenzo is not an offline software system.
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-[#0B1B3A] mb-3">
                4. Founding Clinic Offer and Subscriptions
              </h2>
              <p>
                The first 10 founding clinics in Colombo receive 3 months of access free of software licensing charges. Setup, drug list loading, and printer pairing are included. Ongoing subscription terms and pricing are provided during the demonstration. Subscriptions may be cancelled by the clinic with 30 days written notice.
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-[#0B1B3A] mb-3">
                5. Data Controller Contact and Inquiries
              </h2>
              <p className="mb-3">
                For terms inquiries, onboarding agreements, practice subscription questions, or data governance queries, clinics may reach our Data Controller contact:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#475569]">
                <li>
                  Direct messaging:{" "}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1D4ED8] underline font-medium hover:text-blue-800"
                  >
                    Contact via WhatsApp
                  </a>
                </li>
                <li>
                  Web contact form:{" "}
                  <Link
                    href="/contact"
                    className="text-[#1D4ED8] underline font-medium hover:text-blue-800"
                  >
                    Submit an inquiry via our contact form
                  </Link>
                </li>
                <li>Email: info@suwenzo.com</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
