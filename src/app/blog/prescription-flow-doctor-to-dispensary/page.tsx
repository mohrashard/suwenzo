import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getBlogPostingSchema } from "@/lib/schemas";
import { SITE_URL, getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Prescription Flow to Dispensary",
  description:
    "Explore the optimal prescription flow from the doctor's desk to the dispensary screen in Sri Lankan clinics to eliminate handwriting errors and wait times.",
  alternates: {
    canonical: `${SITE_URL}/blog/prescription-flow-doctor-to-dispensary`,
    languages: {
      "en-LK": `${SITE_URL}/blog/prescription-flow-doctor-to-dispensary`,
      "x-default": `${SITE_URL}/blog/prescription-flow-doctor-to-dispensary`,
    },
  },
  openGraph: {
    type: "article",
    locale: "en_LK",
    url: `${SITE_URL}/blog/prescription-flow-doctor-to-dispensary`,
    siteName: "Suwenzo",
    title: "How Prescriptions Should Flow to Dispensaries | Suwenzo",
    description:
      "Explore the optimal prescription flow from the doctor's desk to the dispensary screen in Sri Lankan clinics to eliminate handwriting errors and wait times.",
    images: [
      {
        url: "/og-blog.png",
        width: 1200,
        height: 630,
        alt: "Prescription Flow from Doctor to Dispensary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Prescriptions Should Flow to Dispensaries | Suwenzo",
    description:
      "Explore the optimal prescription flow from the doctor's desk to the dispensary screen in Sri Lankan clinics to eliminate handwriting errors and wait times.",
    images: ["/og-blog.png"],
  },
};

export default function PrescriptionFlowPost() {
  const whatsappUrl = getWhatsAppRedirectUrl("blog-prescription-flow", "demo");
  const postUrl = `${SITE_URL}/blog/prescription-flow-doctor-to-dispensary`;
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
    { name: "Prescription Flow", item: "/blog/prescription-flow-doctor-to-dispensary" },
  ]);
  const articleSchema = getBlogPostingSchema({
    title: "How a Prescription Should Flow from Doctor to Dispensary",
    description:
      "Explore the optimal prescription flow from the doctor's desk to the dispensary screen in Sri Lankan clinics to eliminate handwriting errors and wait times.",
    url: postUrl,
    datePublished: "2026-10-08T08:00:00+05:30",
    dateModified: "2026-10-08T08:00:00+05:30",
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
            <span className="text-[#0B1B3A] font-semibold">Prescription Flow</span>
          </nav>

          {/* Article Header */}
          <div className="text-left mb-8">
            <div className="flex items-center gap-3 text-[12px] text-slate-500 mb-3">
              <span className="bg-blue-50 text-[#1D4ED8] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Dispensary Operations
              </span>
              <span>&bull;</span>
              <span>October 8, 2026</span>
              <span>&bull;</span>
              <span>5 min read</span>
            </div>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-4 tracking-[-0.03em]">
              How a Prescription Should Flow from Doctor to Dispensary
            </h1>
          </div>

          {/* Answer-First Summary Block */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)] text-left">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              In an ideal clinic workflow, prescriptions appear on the dispensary screen within seconds after being saved by the doctor, eliminating handwritten paper chits.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              When the consultation desk connects directly to the dispensing counter, pharmacy staff can prepare medications before the patient even walks out of the consultation room, print clear labels, and update stock counts automatically.
            </p>
          </div>

          {/* Article Content */}
          <article className="space-y-8 text-left text-[15px] sm:text-[16px] text-[#334155] leading-[1.75]">
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                Where do traditional dispensary workflows break down?
              </h2>
              <p className="mb-4">
                In many private medical practices across Sri Lanka, the journey of a prescription is fraught with manual friction:
              </p>
              <ul className="space-y-2.5 list-disc pl-5 mb-4 text-[#475569]">
                <li><strong>Illegible handwriting:</strong> Doctors writing quickly under heavy patient queues produce notes that dispensers must squint at or walk back to the doctor&apos;s desk to confirm.</li>
                <li><strong>Out-of-stock interruptions:</strong> A doctor prescribes a specific brand, only for the dispenser to discover the shelf is empty, requiring a back-and-forth consultation interruption to select an alternative.</li>
                <li><strong>Manual envelope labelling:</strong> Dispensers spend crucial minutes writing dosages (&ldquo;1 BD pc&rdquo;) with ballpoint pens on small paper envelopes, which patients frequently find difficult to decipher later at home.</li>
              </ul>
            </section>

            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                How digital order queues streamline medication dispensing
              </h2>
              <p className="mb-4">
                When a clinic transitions to a connected digital platform, the prescription moves electronically:
              </p>
              <ol className="space-y-2.5 list-decimal pl-5 text-[#475569] mb-4">
                <li><strong>Prescription creation:</strong> The doctor taps the drug name from a pre-configured formulary. Dosage strengths, duration, and meal timings are selected cleanly. Live stock counters notify the doctor immediately if a medication is low.</li>
                <li><strong>Instant transmission:</strong> The order transmits across the clinic network and prescriptions appear on the dispensary screen within seconds.</li>
                <li><strong>Order fulfillment:</strong> The dispenser sees the patient&apos;s name, age, and required medicines in a neat digital card, ready to dispense.</li>
              </ol>
            </section>

            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                The role of automated envelope label printing
              </h2>
              <p className="mb-4">
                A connected thermal label printer at the dispensary counter changes patient safety fundamentally. Instead of rushed pen markings, the dispenser clicks print, producing a standardized adhesive label with the patient&apos;s name, drug name, exact dose instructions, and precautions.
              </p>
              <p>
                As items are packed, inventory decrements automatically, ensuring your clinic&apos;s stock records match the physical shelf without end-of-day tallying.
              </p>
            </section>
          </article>

          {/* Related Articles & CTA */}
          <div className="mt-10 bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div>
              <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                Experience connected prescribing in your clinic
              </h3>
              <p className="text-[14px] text-[#475569] max-w-[500px]">
                Book a 20-minute demonstration to see how digital orders flow from doctor to dispensary. Pricing is shared during the demo. The first 10 founding clinics in Colombo get 3 months free.
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                <Link href="/features/digital-prescriptions" className="hover:underline">
                  &rarr; Digital Prescriptions
                </Link>
                <Link href="/for/clinics-with-dispensary" className="hover:underline">
                  &rarr; Clinics with Dispensary
                </Link>
                <Link href="/features/stock-and-expiry" className="hover:underline">
                  &rarr; Stock &amp; Expiry
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
