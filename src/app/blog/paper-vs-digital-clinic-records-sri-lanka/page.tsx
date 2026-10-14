import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getBlogPostingSchema } from "@/lib/schemas";
import { SITE_URL, getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Paper vs Digital Clinic Records",
  description:
    "Why Sri Lankan outpatient clinics are moving from physical paper files to tablet-based patient records that surface past visits and allergies in seconds.",
  alternates: {
    canonical: `${SITE_URL}/blog/paper-vs-digital-clinic-records-sri-lanka`,
    languages: {
      "en-LK": `${SITE_URL}/blog/paper-vs-digital-clinic-records-sri-lanka`,
      "x-default": `${SITE_URL}/blog/paper-vs-digital-clinic-records-sri-lanka`,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_LK",
    url: `${SITE_URL}/blog/paper-vs-digital-clinic-records-sri-lanka`,
    siteName: "Suwenzo",
    title: "Paper vs Digital Clinic Records in Sri Lanka | Suwenzo",
    description:
      "Why Sri Lankan outpatient clinics are moving from physical paper files to tablet-based patient records that surface past visits and allergies in seconds.",
    images: [
      {
        url: "/og-blog.png",
        width: 1200,
        height: 630,
        alt: "Paper vs Digital Clinic Records in Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paper vs Digital Clinic Records in Sri Lanka | Suwenzo",
    description:
      "Why Sri Lankan outpatient clinics are moving from physical paper files to tablet-based patient records that surface past visits and allergies in seconds.",
    images: ["/og-blog.png"],
  },
};

export default function PaperVsDigitalPost() {
  const whatsappUrl = getWhatsAppRedirectUrl("blog-paper-vs-digital", "demo");
  const postUrl = `${SITE_URL}/blog/paper-vs-digital-clinic-records-sri-lanka`;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: "Paper vs Digital Clinic Records", item: "/blog/paper-vs-digital-clinic-records-sri-lanka" },
  ]);
  const articleSchema = getBlogPostingSchema({
    title: "Paper vs Digital Clinic Records in Sri Lanka",
    description:
      "Why Sri Lankan outpatient clinics are moving from physical paper files to tablet-based patient records that surface past visits and allergies in seconds.",
    url: postUrl,
    datePublished: "2026-10-12T08:00:00+05:30",
    dateModified: "2026-10-12T08:00:00+05:30",
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
            <span className="text-[#0B1B3A] font-semibold">Paper vs Digital</span>
          </nav>

          {/* Article Header */}
          <div className="text-left mb-8">
            <div className="flex items-center gap-3 text-[12px] text-slate-500 mb-3">
              <span className="bg-blue-50 text-[#1D4ED8] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Clinical Workflow
              </span>
              <span>&bull;</span>
              <span>October 12, 2026</span>
              <span>&bull;</span>
              <span>5 min read</span>
            </div>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-4 tracking-[-0.03em]">
              Paper vs Digital Clinic Records in Sri Lanka
            </h1>
          </div>

          {/* Answer-First Summary Block */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)] text-left">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              Replacing paper files with digital records allows Sri Lankan outpatient clinics to retrieve patient history instantly, prevent adverse allergy events, and eliminate manual filing delays.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              When doctors transition from bulky folders to a touch-screen tablet, consultations stay personal. Instead of flipping through handwritten notes or questioning patients about prior prescriptions, the patient&apos;s complete medical timeline appears in seconds.
            </p>
          </div>

          {/* Article Content */}
          <article className="space-y-8 text-left text-[15px] sm:text-[16px] text-[#334155] leading-[1.75]">
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                What happens when outpatient clinics rely on paper files?
              </h2>
              <p className="mb-4">
                In Sri Lankan private medical clinics, outpatient consultation sessions are characterized by rapid patient turnover. General practitioners and consulting specialists frequently attend to dozens of patients within a two- to three-hour evening window.
              </p>
              <p className="mb-4">
                When clinics manage patient history using physical paper files, three recurring operational bottlenecks emerge:
              </p>
              <ul className="space-y-2.5 list-disc pl-5 mb-4 text-[#475569]">
                <li><strong>Search latency:</strong> Receptionists or doctors spend minutes rummaging through filing cabinets or asking returning patients if they brought their previous medical slips.</li>
                <li><strong>Fragmented medication memory:</strong> Patients rarely remember the exact brand name or dosage strength of their previous antibiotic or hypertension prescription.</li>
                <li><strong>Lost allergy documentation:</strong> Crucial adverse drug reactions recorded months ago can be buried under thick stacks of paper notes.</li>
              </ul>
            </section>

            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                How digital records accelerate consultations without extra typing
              </h2>
              <p className="mb-4">
                The primary fear many doctors express about digital health records is typing speed. Doctors do not want to spend their consultation staring at a computer screen typing lengthy narratives while the patient sits ignored across the desk.
              </p>
              <p className="mb-4">
                Modern clinical systems designed for outpatient practice solve this by prioritizing tap-based interaction over typing. When a returning patient presents their name or phone number, their entire history loads on a tablet:
              </p>
              <ul className="space-y-2.5 list-disc pl-5 text-[#475569]">
                <li><strong>Instant repeat prescribing:</strong> Past medications can be re-issued or adjusted with a single tap.</li>
                <li><strong>Prominent allergy flags:</strong> Documented allergies to penicillins or NSAIDs remain pinned prominently to the top of the consultation screen.</li>
                <li><strong>Immediate cross-doctor access:</strong> In group practices, any doctor covering a shift has immediate visibility into prior consultations.</li>
              </ul>
            </section>

            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                Key considerations before transitioning from paper to tablet
              </h2>
              <p className="mb-4">
                Switching from paper to a digital system does not require digitizing years of historical archives overnight. Most clinics begin by recording new visits digitally while keeping legacy paper folders as secondary reference.
              </p>
              <p>
                With Suwenzo, most clinics are ready within 48 hours of the demo. The setup includes pre-populating your standard drug formulary so prescribing is immediate from day one.
              </p>
            </section>
          </article>

          {/* Related Articles & CTA */}
          <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div>
              <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                See Suwenzo&apos;s digital patient records in action
              </h3>
              <p className="text-[14px] text-[#475569] max-w-[500px]">
                Book a 20-minute demonstration at your clinic to test digital consultation records on a tablet. The first 10 founding clinics in Colombo get 3 months free.
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                <Link href="/features/patient-records" className="hover:underline">
                  &rarr; Patient Records Feature
                </Link>
                <Link href="/for/solo-doctors" className="hover:underline">
                  &rarr; Solo Doctors Guide
                </Link>
                <Link href="/facts" className="hover:underline">
                  &rarr; Clinic Fact Sheet
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
