import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  title: "Patient Records Software for Clinics in Sri Lanka",
  description:
    "Keep every visit, diagnosis, allergy and prescription in one patient record, so no consultation starts from zero. Built for Sri Lankan clinics.",
  path: "/features/patient-records",
  ogImage: "/og-features.png",
});

export default function PatientRecordsPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("feature-patient-records", "demo");
  const recordFaqs = getFaqsByGroup("Patient records").slice(0, 4);

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Features", item: "/features" },
      { name: "Patient Records", item: "/features/patient-records" },
    ]),
    getFaqPageSchema(
      recordFaqs.map((f) => ({ question: f.question, answer: f.answer }))
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
            <span className="text-[#0B1B3A] font-semibold">Patient Records</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              Feature Spoke &bull; Records First
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-tight">
              Patient records software for clinics in Sri Lanka
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Clinical record workflow for private practices
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Every visit, diagnosis, allergy and prescription stays in one secure patient file so no consultation starts from zero.
            </p>
          </div>

          <div className="space-y-12">
            {/* H2 1: What is a patient record in Suwenzo? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                What is a patient record in Suwenzo?
              </h2>
              {/* Answer block: 40-60 words */}
              <p className="text-[15px] sm:text-[16px] text-[#1E293B] font-medium leading-[1.65] bg-blue-50/70 border border-blue-100 p-4 rounded-xl mb-6">
                A patient record in Suwenzo is a single digital dossier that stores every clinical interaction between a patient and your practice. Suwenzo organizes past diagnoses, prescribed medications, dosages, doctor notes, vital signs, and allergy safety alerts into one chronological timeline accessible across consultations and doctor shifts.
              </p>

              <div className="mb-6 flex justify-center">
                <Image
                  src="/illustration-records.png"
                  alt="Suwenzo patient records screen showing allergy flag, vitals trend and visit history"
                  width={600}
                  height={450}
                  className="rounded-2xl border border-slate-200/90 shadow-xs max-w-full h-auto"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Diagnoses</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Chronic and Acute</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Tracks ongoing conditions like diabetes and hypertension across visits.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Safety</div>
                  <div className="font-bold text-amber-700 mb-1">Allergy Flag Alerts</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Highlights drug contraindications prominently before prescribing.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Timeline</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Prescription History</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Complete record of every drug, dosage, and duration issued.</p>
                </div>
              </div>
            </section>

            {/* H2 2: What the doctor sees before every consultation */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                What the doctor sees before every consultation
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                When a patient enters the room, typing their name, phone number, or national identity card number brings up their summary immediately:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-[#475569] mb-6">
                <li><strong>Previous visit notes:</strong> Review exactly what was observed, diagnosed, and prescribed during the last session.</li>
                <li><strong>Allergy alerts in red:</strong> Instant warnings if the patient has recorded sensitivities to penicillin, sulfa drugs, or NSAIDs.</li>
                <li><strong>Vital signs trend:</strong> Blood pressure, blood glucose, weight, and temperature recorded over previous visits.</li>
                <li><strong>Treatment response:</strong> Quick notation on whether previous antibiotic or antihypertensive regimens succeeded.</li>
              </ul>

              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-[13.5px] text-[#1E293B]">
                <strong className="text-[#1D4ED8]">Sample dossier:</strong> Sample patient data remains clearly labelled as sample during demonstrations to maintain clinical compliance.
              </div>
            </section>

            {/* H2 3: How records work with more than one doctor */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                How records work with more than one doctor
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                In shared centres or multi-doctor surgeries, Suwenzo ensures patient continuity while maintaining doctor confidentiality:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-[14px] text-[#0B1B3A] mb-1">
                    Central patient database
                  </h3>
                  <p className="text-[13px] text-[#64748B] m-0">
                    Patients are registered once. Any practicing doctor in the clinic can retrieve their past medical summary without paper folders.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-[14px] text-[#0B1B3A] mb-1">
                    Private consultation notes
                  </h3>
                  <p className="text-[13px] text-[#64748B] m-0">
                    Individual logins allow physicians to record private notes and observation logs associated with their doctor profile.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-[14px] text-[#0B1B3A] mb-1">
                    Shared dispensary queue
                  </h3>
                  <p className="text-[13px] text-[#64748B] m-0">
                    Prescriptions from all doctor desks route into a single coordinated dispensary queue with clear doctor attribution.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Block */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-6">
                Frequently asked questions on patient records
              </h2>
              <div className="space-y-4">
                {recordFaqs.map((faq) => (
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
                  See patient records in a 20-minute demo
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Schedule an in-person or remote walk-through. Test record lookups and tablet prescribing for your Sri Lankan clinic.
                </p>
                {/* Related block: 3 links max */}
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/features" className="hover:underline">
                    &larr; All Features
                  </Link>
                  <Link href="/features/digital-prescriptions" className="hover:underline">
                    &rarr; Digital Prescriptions
                  </Link>
                  <Link href="/features/stock-and-expiry" className="hover:underline">
                    &rarr; Stock and Expiry
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
