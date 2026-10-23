import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getAboutPageSchema,
  buildGraphSchema,
} from "@/lib/schemas";
import { BRAND, DEFINITION } from "@/content/site";
import { getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "About Suwenzo | Clinic Software Built in Colombo",
  description:
    "Why Suwenzo exists: one connected system for private clinics in Sri Lanka, built in Colombo to replace paper, carbon copies and lost records.",
  path: "/about",
  ogImage: "/og-about.png",
});

export default function AboutPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("about", "demo");

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "About", item: "/about" },
    ]),
    getAboutPageSchema(),
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
            <span className="text-[#0B1B3A] font-semibold">About</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-tight">
              About Suwenzo
            </h1>
            <p className="text-[13px] text-slate-500">
              Last updated: {BRAND.lastUpdated} &bull; Built in Colombo for private medical practices
            </p>
          </div>

          {/* Canonical Definition Box */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 shadow-xs">
            <p className="text-[16px] sm:text-[17.5px] font-semibold text-[#0B1B3A] leading-snug mb-2">
              {DEFINITION}
            </p>
            <p className="text-[14px] text-[#475569] leading-relaxed">
              Based in Colombo, Sri Lanka, Suwenzo was created specifically for the workflow of local private medical practices, replacing handwriting fatigue and lost paper charts with a fast, modern web platform.
            </p>
          </div>

          <div className="space-y-10">
            {/* The Story in Full */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4">
                Why we built Suwenzo
              </h2>
              <div className="space-y-4 text-[14.5px] sm:text-[15.5px] text-[#334155] leading-[1.75]">
                <p>
                  In private medical practices across Sri Lanka, evening consultation sessions are intense. A doctor routinely sees thirty to fifty patients in three hours. Every minute spent searching a drawer for a past prescription or scribbling notes is a minute stolen from diagnosis and patient care.
                </p>
                <p>
                  Meanwhile, at the dispensary counter, a dedicated assistant is left squinting at rushed cursive handwriting, manually rewriting dosages onto paper envelopes, and hoping the patient does not return confused. And when regular patients come back three months later, nobody knows which antibiotic or antihypertensive worked best, because the consultation starts from scratch.
                </p>
                <p>
                  Paper was not failing because doctors or dispensers were careless. It was failing because three separate people were forced to operate from disconnected fragments of information. We built Suwenzo to give private clinics one calm, connected system.
                </p>
              </div>
            </section>

            {/* The Three Problems We Solve */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4">
                The three problems Suwenzo resolves
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-red-600 mb-1">Problem 1</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Prescriptions Written Twice</div>
                  <p className="text-[13px] text-[#64748B] m-0">
                    Doctors write on paper, then dispensers rewrite dosages on envelopes. Suwenzo prints thermal labels directly from the tablet order.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-red-600 mb-1">Problem 2</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Prescribing Without Seeing Stock</div>
                  <p className="text-[13px] text-[#64748B] m-0">
                    Doctors prescribe blindly, only to find out the shelf is empty. Suwenzo shows shelf balances beside each medicine on screen.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-[12px] font-bold text-red-600 mb-1">Problem 3</div>
                  <div className="font-bold text-[#0B1B3A] mb-1">Every Visit Starts from Zero</div>
                  <p className="text-[13px] text-[#64748B] m-0">
                    Past treatments and allergy reactions get lost in old drawers. Suwenzo maintains an instant patient visit history by phone number.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Work with Founding Clinics */}
            <section className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4">
                How we work with founding clinics
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.7] mb-4">
                We work directly with the first 10 founding clinics in Colombo. The offer includes 3 months free of licensing charges, direct engineering support, and full onboarding setup:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[14px] text-[#475569] mb-5">
                <li>We enter your entire clinic stock list and batch expiries before day one.</li>
                <li>We connect and test your dispensary thermal label printer.</li>
                <li>We train your dispenser in person until they are confident with the screen.</li>
                <li>We stay available on WhatsApp during your live evening sessions.</li>
              </ul>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[13px] font-semibold text-[#0B1B3A]">
                  Team: The Suwenzo team &bull; Colombo, Sri Lanka
                </span>
                <Link
                  href="/contact"
                  className="text-[13px] font-semibold text-[#1D4ED8] hover:underline"
                >
                  Contact our team &rarr;
                </Link>
              </div>
            </section>

            {/* Related Links & Demo CTA */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                  Meet with the Suwenzo team
                </h3>
                <p className="text-[14px] text-[#475569] max-w-[500px]">
                  Book a 20-minute demonstration. We can demo directly at your clinic in Colombo.
                </p>
                <div className="mt-3 flex flex-wrap gap-3 text-[13px] font-medium text-[#1D4ED8]">
                  <Link href="/facts" className="hover:underline">
                    &rarr; Fact Sheet
                  </Link>
                  <Link href="/faq" className="hover:underline">
                    &rarr; FAQ
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
