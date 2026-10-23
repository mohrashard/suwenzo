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
  title: "Multi-Doctor Clinic Software in Sri Lanka | Suwenzo",
  description:
    "For shared centres and clinic groups: separate doctor logins, a shared dispensary queue, a central patient database and multi-branch setup.",
  path: "/for/multi-doctor-practices",
  ogImage: "/og-for.png",
});

export default function MultiDoctorPracticesPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("multi-branch", "multi-branch");
  const multiFaqs = getFaqsByGroup("Practice types").filter(
    (f) => f.id === "multi-doctor-setup" || f.id === "doctor-notes-sharing" || f.id === "change-practise-style"
  );

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Who It's For", item: "/for" },
      { name: "Multi-Doctor Centres", item: "/for/multi-doctor-practices" },
    ]),
    getFaqPageSchema(
      multiFaqs.map((f) => ({ question: f.question, answer: f.answer }))
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
            <Link href="/for" className="hover:text-[#1D4ED8] transition-colors">
              Who It&apos;s For
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">Multi-Doctor &amp; Branches</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              Practice Spoke &bull; Medical Centres and Groups
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-tight">
              Multi-doctor and multi-branch clinic software
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Practice coordination for group clinics and medical centres
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Provides separate doctor credentials, a shared front desk and dispensary queue, and multi-branch group configuration across Sri Lanka.
            </p>
          </div>

          <div className="space-y-12">
            {/* H2 1: How does Suwenzo work for several doctors? */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                How does Suwenzo work for several doctors?
              </h2>
              {/* Answer block: 40-60 words */}
              <p className="text-[15px] sm:text-[16px] text-[#1E293B] font-medium leading-[1.65] bg-blue-50/70 border border-blue-100 p-4 rounded-xl mb-6">
                Suwenzo works for several doctors by providing independent logins with private clinical observation notes, while routing all orders into a shared dispensary queue. Doctors review unified patient histories recorded across previous shifts, and dispensary staff fulfill prescriptions with clear attribution to the issuing physician.
              </p>

              <div className="mb-6 flex justify-center">
                <Image
                  src="/illustration-multi-doctor.png"
                  alt="Multi-doctor outpatient clinic architecture with independent doctor logins, central patient history, and shared dispensary order queue"
                  width={600}
                  height={450}
                  className="rounded-2xl border border-slate-200/90 shadow-xs max-w-full h-auto"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Logins</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Separate Doctor Logins</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Each physician accesses their personal desk and consultation queue.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Dispensary</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Unified Queue</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Prescriptions from all rooms route to a shared pharmacy counter.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-[#1D4ED8] mb-1">Patient History</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Central Database</div>
                  <p className="text-[12.5px] text-[#64748B] m-0">Patients registered once are accessible across all consulting rooms.</p>
                </div>
              </div>
            </section>

            {/* H2 2: Several branches: how we configure it */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                Several branches: how we configure it
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                For healthcare networks and clinic groups operating across multiple suburban or regional branches:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-[14.5px] text-[#475569] mb-5">
                <li><strong>Configured per group:</strong> We set up branch-specific stock lists, separate dispensary counters, and group-wide patient identity mapping.</li>
                <li><strong>Dedicated onboarding manager:</strong> An assigned Suwenzo onboarding specialist coordinates staff training and printer testing across all physical branches.</li>
                <li><strong>Centralized reporting:</strong> Clinic directors monitor aggregate consultation volumes and inventory health across the network.</li>
              </ul>
            </section>

            {/* H2 3: Private notes and shared history */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-4">
                Private notes and shared history
              </h2>
              <p className="text-[14.5px] text-[#475569] mb-4 leading-[1.6]">
                Multi-doctor practices need a balance between collegial collaboration and doctor-patient confidentiality:
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-[14px] text-[#0B1B3A] mb-1">Shared clinical facts</h3>
                  <p className="text-[13px] text-[#64748B] m-0">
                    Allergies, chronic conditions, vital signs, and current prescription courses are shared to protect patient safety.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h3 className="font-bold text-[14px] text-[#0B1B3A] mb-1">Private doctor notes</h3>
                  <p className="text-[13px] text-[#64748B] m-0">
                    Physicians can mark specific consultation observations as private to their doctor profile.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Block */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.45rem] sm:text-[1.7rem] font-bold text-[#0B1B3A] mb-6">
                Frequently asked questions on multi-doctor practices
              </h2>
              <div className="space-y-4">
                {multiFaqs.map((faq) => (
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

            {/* WhatsApp CTA (src=multi-branch) & Related Links */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  Discuss multi-doctor or branch setup
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Message our team directly on WhatsApp to plan separate doctor logins, shared dispensary routing, and multi-branch deployment.
                </p>
                {/* Related block: 3 links max */}
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/for" className="hover:underline">
                    &larr; All Practice Types
                  </Link>
                  <Link href="/for/clinics-with-dispensary" className="hover:underline">
                    &rarr; With Dispensary
                  </Link>
                  <Link href="/for/solo-doctors" className="hover:underline">
                    &rarr; Solo Practices
                  </Link>
                </div>
              </div>

              <a
                href={whatsappUrl}
                rel="nofollow noopener"
                className="w-full sm:w-auto bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-full text-[14px] text-center shadow-[0_4px_14px_rgba(29,78,216,0.25)] transition-all hover:scale-[1.02] shrink-0"
              >
                Discuss multi-branch on WhatsApp
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
