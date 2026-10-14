import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema, getSoftwareApplicationSchema } from "@/lib/schemas";
import { SITE_URL, getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Software for Consulting-Only Practices",
  description:
    "Modern clinical records and printed prescription slips for consulting-only practices in Sri Lanka without an internal dispensary or pharmacy.",
  alternates: {
    canonical: `${SITE_URL}/for/consulting-only-practices`,
    languages: {
      "en-LK": `${SITE_URL}/for/consulting-only-practices`,
      "x-default": `${SITE_URL}/for/consulting-only-practices`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: `${SITE_URL}/for/consulting-only-practices`,
    siteName: "Suwenzo",
    title: "Software for Consulting-Only Practices | Suwenzo",
    description:
      "Modern clinical records and printed prescription slips for consulting-only practices in Sri Lanka without an internal dispensary or pharmacy.",
    images: [
      {
        url: "/og-for-clinics.png",
        width: 1200,
        height: 630,
        alt: "Suwenzo for Consulting-Only Practices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software for Consulting-Only Practices | Suwenzo",
    description:
      "Modern clinical records and printed prescription slips for consulting-only practices in Sri Lanka without an internal dispensary or pharmacy.",
    images: ["/og-for-clinics.png"],
  },
};

export default function ConsultingOnlyPracticesPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("for-consulting-only", "demo");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "For Clinics", item: "/#who-and-why" },
    { name: "Consulting-Only Practices", item: "/for/consulting-only-practices" },
  ]);
  const softwareSchema = getSoftwareApplicationSchema();

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={softwareSchema} />
      <Navbar />

      <main className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[120px] sm:pt-[140px] pb-[80px] px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-blue-200/40 via-white/50 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-[960px] mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#who-and-why" className="hover:text-[#1D4ED8] transition-colors">
              For Clinics
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">Consulting-Only</span>
          </nav>

          {/* Header */}
          <div className="text-left mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 tracking-[0.02em] shadow-xs uppercase">
              Practice Type
            </span>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-4 tracking-[-0.03em]">
              Software for Consulting-Only Practices in Sri Lanka
            </h1>
          </div>

          {/* Answer-First Definition Block */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)] text-left">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              Suwenzo serves clinics without an attached pharmacy by focusing purely on clinical notes, printed prescriptions, and patient retention.
            </p>
            <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
              Practices that do not dispense medications can disable pharmacy views and use Suwenzo as a dedicated consultation workstation, generating clean printed prescription slips for outside pharmacies and queuing WhatsApp return reminders.
            </p>
          </div>

          {/* Editorial Content Body */}
          <div className="space-y-10 text-left">
            {/* Section 1 */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug">
                How Suwenzo adapts when your practice has no dispensary
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.7] mb-4">
                Many specialist rooms and urban consultation practices refer patients to neighborhood pharmacies. You do not need to manage medication stock or dispensary screens to gain the benefits of digital clinical records:
              </p>
              <ul className="space-y-3 text-[14px] sm:text-[14.5px] text-[#334155]">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>Clean printed prescription slips:</strong> Print legible prescriptions with your clinic header for external pharmacies.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>Comprehensive medical history:</strong> Track chronic illnesses, prior diagnoses, and lab notes in one ongoing timeline.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mt-2 shrink-0" />
                  <span><strong>WhatsApp follow-up reminders:</strong> Ensure patients return for scheduled reviews and test evaluations on time.</span>
                </li>
              </ul>
            </section>

            {/* Comparison Table */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4 leading-snug">
                Manual prescription pads vs. Suwenzo for consulting rooms
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[13.5px] sm:text-[14px] border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50/70">
                      <th className="py-3 px-4 font-semibold text-[#0B1B3A]">Feature</th>
                      <th className="py-3 px-4 font-semibold text-[#0B1B3A]">Handwritten Prescription Pad</th>
                      <th className="py-3 px-4 font-semibold text-[#1D4ED8]">Suwenzo Consulting System</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#475569]">
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Prescription record</td>
                      <td className="py-3 px-4">Carbon copy paper or no retained record</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Permanently saved to patient file</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">External pharmacy legibility</td>
                      <td className="py-3 px-4">Pharmacists frequently call doctor to verify</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Standardized, printed prescription slips</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Follow-up management</td>
                      <td className="py-3 px-4">Patient told &ldquo;come back in 2 weeks&rdquo;</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Automated WhatsApp reminder sent to patient</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#0B1B3A]">Setup process</td>
                      <td className="py-3 px-4">Ordering printed paper pads</td>
                      <td className="py-3 px-4 text-[#1D4ED8] font-medium">Ready within 48 hours of demo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Related Clinics & CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  Upgrade your consultation room workflow
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Experience a streamlined, records-first consultation setup. Pricing is shared during the demo. The first 10 founding clinics in Colombo get 3 months free.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/for/solo-doctors" className="hover:underline">
                    &rarr; Solo Doctors
                  </Link>
                  <Link href="/for/multi-doctor-practices" className="hover:underline">
                    &rarr; Multi-Doctor Practices
                  </Link>
                  <Link href="/features/patient-records" className="hover:underline">
                    &rarr; Patient Records
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
