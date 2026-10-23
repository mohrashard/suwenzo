import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getBlogPostingSchema,
  getFaqPageSchema,
  buildGraphSchema,
} from "@/lib/schemas";
import { BRAND, DEFINITION } from "@/content/site";
import { getBlogPost } from "@/content/blog";
import { getWhatsAppRedirectUrl } from "@/lib/site";

const post = getBlogPost("how-to-choose-clinic-software-sri-lanka")!;

export const metadata: Metadata = buildMetadata({
  title: "How to Choose Clinic Software in Sri Lanka: Checklist",
  description: post.description,
  path: `/blog/${post.slug}`,
  ogImage: "/og-blog.png",
});

export default function HowToChooseClinicSoftwarePage() {
  const whatsappUrl = getWhatsAppRedirectUrl("blog-checklist", "demo");
  const postUrl = `${BRAND.canonicalUrl}/blog/${post.slug}`;

  const postFaqs = [
    {
      question: "How fast should prescribing take in outpatient clinic software?",
      answer:
        "Prescribing on a clinic system should take less than 30 seconds per consultation. If entering a prescription requires navigating multiple nested tabs or typing identical instructions repeatedly, the software will slow down busy evening outpatient sessions in Sri Lanka.",
    },
    {
      question: "Do Sri Lankan clinics need complex hospital management software?",
      answer:
        "No. Private outpatient medical practices in Sri Lanka do not need hospital management systems built for multi-floor inpatient wards and billing departments. They need focused clinic software that connects the doctor's desk, patient records and dispensary in one system.",
    },
    {
      question: "Can clinic software operate without local desktop installation?",
      answer:
        "Yes. Modern clinic software runs directly inside standard web browsers on tablets and laptops. This eliminates local server maintenance, operating system installation issues, and manual backup routines.",
    },
  ];

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Blog", item: "/blog" },
      { name: post.title, item: `/blog/${post.slug}` },
    ]),
    getBlogPostingSchema({
      headline: post.title,
      description: post.description,
      url: postUrl,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      image: `${BRAND.canonicalUrl}/og-blog.png`,
    }),
    getFaqPageSchema(postFaqs),
  ]);

  return (
    <>
      <JsonLd data={graphSchema} />
      <Navbar />

      <main
        id="main-content"
        className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[120px] sm:pt-[140px] pb-[80px] px-4 sm:px-6 relative overflow-hidden"
      >
        <div className="max-w-[840px] mx-auto relative z-10 text-left">
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
            <span className="text-[#0B1B3A] font-semibold">Clinic Software Checklist</span>
          </nav>

          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2.5 mb-3 flex-wrap">
              <span className="bg-[#0f172a] text-white py-1 px-3.5 rounded-full text-[0.75rem] font-medium uppercase tracking-wider">
                Practice Operations
              </span>
              <span className="text-[12.5px] text-slate-500">
                {post.readingTime} &bull; Published October 2026
              </span>
            </div>
            <h1 className="text-[2.1rem] sm:text-[3rem] font-bold text-[#0B1B3A] leading-[1.16] mb-4 tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-[13px] text-slate-600 pb-5 border-b border-slate-200">
              <span>Author: <strong>{post.author}</strong></span>
              <span>&bull;</span>
              <span>Last updated: {BRAND.lastUpdated}</span>
            </div>
          </header>

          {/* Answer-First Introduction Block */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-8 shadow-xs">
            <p className="text-[15.5px] sm:text-[16.5px] text-[#1E293B] font-medium leading-[1.7] m-0">
              Choosing clinic software in Sri Lanka requires evaluating five core capabilities: rapid tablet prescribing in under thirty seconds, instant patient history search by mobile number, automated thermal packet label printing, real-time dispensary shelf stock visibility, and consent-based WhatsApp reminders. Selecting lightweight outpatient software instead of bloated hospital hospital management systems prevents consultation slowdowns and ensures your dispenser adopts the system smoothly within 48 hours.
            </p>
          </div>

          {/* Table of Contents */}
          <nav aria-label="Table of Contents" className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 mb-10 text-left">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-[#0B1B3A] mb-3">
              Table of Contents
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5 text-[14px] text-[#1D4ED8]">
              <li><a href="#outpatient-reality" className="hover:underline">The outpatient consultation reality in Sri Lanka</a></li>
              <li><a href="#speed-test" className="hover:underline">Requirement 1: The 30-second prescribing speed test</a></li>
              <li><a href="#dispensary-loop" className="hover:underline">Requirement 2: Closed-loop dispensary and thermal label printing</a></li>
              <li><a href="#stock-visibility" className="hover:underline">Requirement 3: Live shelf stock visibility before prescribing</a></li>
              <li><a href="#patient-retention" className="hover:underline">Requirement 4: Follow-up continuity and WhatsApp messaging</a></li>
              <li><a href="#onboarding-support" className="hover:underline">Requirement 5: Hands-on onboarding and hardware compatibility</a></li>
              <li><a href="#evaluation-checklist" className="hover:underline">Summary evaluation checklist for doctors</a></li>
              <li><a href="#faqs" className="hover:underline">Frequently asked questions</a></li>
            </ol>
          </nav>

          {/* Article Body */}
          <article className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-10 shadow-xs space-y-8 text-[15px] sm:text-[16px] text-[#334155] leading-[1.8] text-left">
            <section id="outpatient-reality">
              <h2 className="text-[1.4rem] sm:text-[1.65rem] font-bold text-[#0B1B3A] mb-3">
                The outpatient consultation reality in Sri Lanka
              </h2>
              <p>
                Private medical practices across Sri Lanka operate under distinct physical constraints. Unlike institutional government teaching hospitals or multi-story private hospital complexes with dedicated IT teams and billing clerks, private outpatient clinics thrive on personal physician efficiency. A solo general practitioner in Colombo, Gampaha, or Kandy frequently examines thirty to fifty patients during a single evening surgery lasting three to four hours.
              </p>
              <p>
                In this demanding environment, software that introduces cumbersome modal dialogs, mandatory diagnostic coding trees, or delayed search bars will fail immediately. A doctor cannot spend three minutes clicking check-boxes while an anxious patient describes symptoms across the desk. For general practitioners, selecting the right{" "}
                <Link href="/for/solo-doctors" className="text-[#1D4ED8] font-semibold hover:underline">
                  solo doctor software in Sri Lanka
                </Link>{" "}
                is about protecting consultation flow rather than collecting bureaucratic administrative metrics.
              </p>
            </section>

            <section id="speed-test">
              <h2 className="text-[1.4rem] sm:text-[1.65rem] font-bold text-[#0B1B3A] mb-3">
                Requirement 1: The 30-second prescribing speed test
              </h2>
              <p>
                The first criterion when evaluating clinic software is prescribing velocity. A viable system must allow a doctor to retrieve the patient dossier and finalize a three-drug prescription in under thirty seconds.
              </p>
              <p>
                Test this directly during your product demonstration:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Mobile number search:</strong> Can you look up a patient simply by typing the last four digits of their phone number, or does the system force you to search through slow dropdown lists?</li>
                <li><strong>Fuzzy generic and brand search:</strong> If you begin typing &quot;amox&quot;, does the system instantly suggest Amoxicillin 500mg capsules with standard dosage options?</li>
                <li><strong>Single-tap confirmation:</strong> Can you select dosage frequency and treatment duration without navigating through multiple sub-menus?</li>
              </ul>
              <p>
                If a platform requires more than thirty seconds of typing per patient, your waiting room queue will back up into the street before the first hour of your evening surgery finishes.
              </p>
            </section>

            <section id="dispensary-loop">
              <h2 className="text-[1.4rem] sm:text-[1.65rem] font-bold text-[#0B1B3A] mb-3">
                Requirement 2: Closed-loop dispensary and thermal label printing
              </h2>
              <p>
                In Sri Lankan clinics with an attached pharmacy counter, handwriting errors between the consultation room and dispensary represent the single largest operational hazard. When doctors scribble rushed cursive instructions on paper pads, dispensary assistants are forced to interpret unclear abbreviations or rewrite dosage instructions manually onto paper envelopes.
              </p>
              <p>
                A modern{" "}
                <Link href="/features/digital-prescriptions" className="text-[#1D4ED8] font-semibold hover:underline">
                  digital prescription software
                </Link>{" "}
                system must create an instantaneous bridge between the doctor&apos;s tablet and the dispensary screen:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Instant transmission:</strong> The order must appear on the dispensary screen within seconds of the doctor tapping confirm.</li>
                <li><strong>Automatic thermal packet labels:</strong> The software must trigger clear, smudge-resistant thermal adhesive labels containing the patient name, drug name, dosage frequency, and duration.</li>
                <li><strong>Eliminating cursive handwriting:</strong> Clear printed labels ensure that elderly patients and parents understand exactly when and how to administer medications at home.</li>
              </ul>
            </section>

            <section id="stock-visibility">
              <h2 className="text-[1.4rem] sm:text-[1.65rem] font-bold text-[#0B1B3A] mb-3">
                Requirement 3: Live shelf stock visibility before prescribing
              </h2>
              <p>
                Few clinical occurrences are more disruptive than prescribing an antibiotic course only to have the dispensary assistant interrupt your next consultation five minutes later to inform you that the clinic ran out of that brand yesterday. The doctor must apologize to the current patient, recall the previous patient, and rewrite the prescription.
              </p>
              <p>
                Effective clinic management software avoids this embarrassment by displaying physical shelf counts directly beside each medication on the prescribing screen. As soon as the dispensary fulfills an order, inventory balances deduct automatically in real time. Furthermore, the system should monitor batch expiries, issuing 60-day warning alerts so near-expiry stock is rotated or returned to pharmaceutical suppliers before becoming a financial write-off.
              </p>
            </section>

            <section id="patient-retention">
              <h2 className="text-[1.4rem] sm:text-[1.65rem] font-bold text-[#0B1B3A] mb-3">
                Requirement 4: Follow-up continuity and WhatsApp messaging
              </h2>
              <p>
                In private practice, patient retention depends on perceived clinical care. When acute symptoms subside after three days of a five-day antibiotic regimen, many patients stop taking their medication. Similarly, hypertensive and diabetic patients frequently delay their monthly review consultations until they experience renewed discomfort.
              </p>
              <p>
                Your clinic software should provide automated follow-up communication through channels patients actually check:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>WhatsApp communication:</strong> In Sri Lanka, patients rarely check SMS or email. WhatsApp messages achieve near-universal open rates.</li>
                <li><strong>One-tap consent capture:</strong> Software must allow doctors or receptionists to capture explicit patient consent with a single tap during consultation to ensure regulatory compliance.</li>
                <li><strong>Course conclusion timing:</strong> Reminders should schedule automatically based on the duration of the prescription, sending polite return reminders when treatment ends.</li>
              </ul>
            </section>

            <section id="onboarding-support">
              <h2 className="text-[1.4rem] sm:text-[1.65rem] font-bold text-[#0B1B3A] mb-3">
                Requirement 5: Hands-on onboarding and hardware compatibility
              </h2>
              <p>
                The primary reason medical software deployments fail is lack of onboarding support. If a software vendor hands you an empty database and expects a busy doctor to spend entire weekends manually typing five hundred pharmaceutical brands and stock quantities, the system will never go live.
              </p>
              <p>
                Demand full-service onboarding:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Inventory entry assistance:</strong> Ensure the vendor enters your existing stock list and batch dates for you before your initial session.</li>
                <li><strong>Thermal printer pairing:</strong> The provider must configure thermal printer drivers and align label dimensions directly at your clinic.</li>
                <li><strong>In-person staff training:</strong> Your dispensary assistant must receive hands-on training so they feel confident operating the queue without panic during peak evening sessions.</li>
                <li><strong>Hardware freedom:</strong> Look for web-based software that runs on consumer iPads, Android tablets, or standard laptops rather than requiring expensive proprietary medical terminals.</li>
              </ul>
            </section>

            <section id="evaluation-checklist">
              <h2 className="text-[1.4rem] sm:text-[1.65rem] font-bold text-[#0B1B3A] mb-3">
                Summary evaluation checklist for doctors
              </h2>
              <p>
                Before signing a contract or paying upfront subscription fees, evaluate your prospective software vendor against this 10-point checklist:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[14px] border-collapse border border-slate-200">
                  <thead className="bg-slate-50 text-[#0B1B3A]">
                    <tr>
                      <th className="p-3 border border-slate-200 font-bold">Evaluation Criteria</th>
                      <th className="p-3 border border-slate-200 font-bold">Target Standard</th>
                      <th className="p-3 border border-slate-200 font-bold">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#475569]">
                    <tr>
                      <td className="p-3 border border-slate-200 font-semibold text-[#0B1B3A]">Prescribing Speed</td>
                      <td className="p-3 border border-slate-200">Under 30 seconds</td>
                      <td className="p-3 border border-slate-200">Prevents waiting room backlog</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 font-semibold text-[#0B1B3A]">Dispensary Queue</td>
                      <td className="p-3 border border-slate-200">Real-time sync</td>
                      <td className="p-3 border border-slate-200">Eliminates handwriting delays</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 font-semibold text-[#0B1B3A]">Label Printing</td>
                      <td className="p-3 border border-slate-200">Auto thermal sticker</td>
                      <td className="p-3 border border-slate-200">Legible patient instructions</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 font-semibold text-[#0B1B3A]">Stock Visibility</td>
                      <td className="p-3 border border-slate-200">On prescribing screen</td>
                      <td className="p-3 border border-slate-200">Avoids prescribing empty stock</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 font-semibold text-[#0B1B3A]">Expiry Alerts</td>
                      <td className="p-3 border border-slate-200">60-day early warnings</td>
                      <td className="p-3 border border-slate-200">Reduces drug wastage losses</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 font-semibold text-[#0B1B3A]">Follow-up Reminders</td>
                      <td className="p-3 border border-slate-200">Consent-based WhatsApp</td>
                      <td className="p-3 border border-slate-200">Improves care continuity</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 font-semibold text-[#0B1B3A]">Setup Speed</td>
                      <td className="p-3 border border-slate-200">Within 48 hours</td>
                      <td className="p-3 border border-slate-200">Minimizes clinic disruption</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Post FAQs */}
            <section id="faqs" className="pt-6 border-t border-slate-200">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4">
                Frequently asked questions about choosing clinic software
              </h2>
              <div className="space-y-4">
                {postFaqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-4">
                    <h3 className="text-[15px] font-bold text-[#0B1B3A] mb-1">
                      {faq.question}
                    </h3>
                    <p className="text-[14px] text-[#475569] leading-relaxed m-0">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Spoke Links & Demo CTA */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[13.5px] text-[#475569]">
                <span>Explore related solutions: </span>
                <Link href="/features/digital-prescriptions" className="text-[#1D4ED8] font-semibold hover:underline">
                  Digital Prescriptions
                </Link>
                <span> &bull; </span>
                <Link href="/for/solo-doctors" className="text-[#1D4ED8] font-semibold hover:underline">
                  Solo Doctor Software
                </Link>
              </div>

              <a
                href={whatsappUrl}
                rel="nofollow noopener"
                className="w-full sm:w-auto bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-6 py-2.5 rounded-full text-[13.5px] text-center shadow-xs transition-all"
              >
                Book a 20-minute demo
              </a>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
