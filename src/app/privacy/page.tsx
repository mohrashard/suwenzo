import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { BRAND, DEFINITION } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Suwenzo Clinic Software",
  description:
    "Plain and truthful privacy policy for Suwenzo clinic software in Sri Lanka, explaining outpatient data handling and explicit WhatsApp reminder consent.",
  path: "/privacy",
});

export default function PrivacyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Privacy Policy", item: "/privacy" },
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
            <span className="text-[#0B1B3A] font-semibold">Privacy Policy</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1 px-3.5 rounded-full text-[0.75rem] font-medium inline-block mb-3 uppercase tracking-wider">
              Legal Documentation
            </span>
            <h1 className="text-[2.25rem] sm:text-[3rem] font-normal text-[#0B1B3A] leading-[1.15] mb-2 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; General privacy information for clinics and patients
            </p>
          </div>

          {/* Summary Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 mb-8 shadow-xs">
            <p className="text-[15px] font-semibold text-[#0B1B3A] mb-1">
              Summary of Our Data Philosophy
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              {DEFINITION}
            </p>
          </div>

          {/* Body Content */}
          <div className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-10 shadow-xs space-y-8 text-[14.5px] text-[#334155] leading-[1.7]">
            <section>
              <h2 className="text-[1.25rem] font-bold text-[#0B1B3A] mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                Suwenzo provides software used by licensed private healthcare practices in Sri Lanka. Information processed on behalf of subscribing clinics includes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#475569]">
                <li>Patient demographic data (name, contact phone number, age, gender) entered by the clinic front desk or doctor.</li>
                <li>Clinical encounter notes (diagnoses, vital signs, allergy warnings, and prescribed medications).</li>
                <li>Dispensary transaction logs (batch numbers, dispensed quantities, and thermal label timestamps).</li>
                <li>Clinic account credentials and administrative audit trails.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-[#0B1B3A] mb-3">
                2. WhatsApp Reminder Consent Handling
              </h2>
              <p className="mb-3">
                Patient communication via WhatsApp is strictly consent-based. Suwenzo enforces this protocol through our interface:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-[#475569]">
                <li>Consent must be explicitly recorded with a single tap by the doctor or clinic assistant during consultation or check-in.</li>
                <li>Automated reminders are queued and dispatched only when an active consent record is confirmed.</li>
                <li>Patients may revoke consent or request message cessation at any time by replying directly to the WhatsApp message or notifying their clinic.</li>
                <li>Reminder messages contain only necessary care follow-up information and never reveal confidential diagnostic history in preview text.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-[#0B1B3A] mb-3">
                3. Role as Data Processor
              </h2>
              <p>
                In the context of the Personal Data Protection Act (PDPA), No. 9 of 2022 of Sri Lanka, the private medical practice operates as the Data Controller responsible for lawful collection and consent. Suwenzo operates as a Data Processor acting solely on the written instruction and operational configuration of the subscribing practice.
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-[#0B1B3A] mb-3">
                4. Data Sharing and Third Parties
              </h2>
              <p>
                Suwenzo does not sell, rent, or monetize patient records or clinic operational data. Data is shared exclusively with technical infrastructure providers required to operate the service (such as telecommunications APIs for approved WhatsApp notifications) under confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-[1.25rem] font-bold text-[#0B1B3A] mb-3">
                5. Contact Us Regarding Privacy
              </h2>
              <p>
                If your clinic has questions regarding data handling or requires assistance with patient record deletion requests, please contact our team via WhatsApp or email info@suwenzo.com.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
