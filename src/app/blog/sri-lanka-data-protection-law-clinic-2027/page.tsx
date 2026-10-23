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

const post = getBlogPost("sri-lanka-data-protection-law-clinic-2027")!;

export const metadata: Metadata = buildMetadata({
  title: "Data Protection Law and Your Clinic: 1 Jan 2027 | Suwenzo",
  description: post.description,
  path: `/blog/${post.slug}`,
  ogImage: "/og-blog.png",
  noindex: !post.published,
});

export default function DataProtectionLawPostPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("blog-pdpa-2027", "demo");
  const postUrl = `${BRAND.canonicalUrl}/blog/${post.slug}`;

  const postFaqs = [
    {
      question: "When do the key provisions of Sri Lanka's Personal Data Protection Act come into effect?",
      answer:
        "Extraordinary Gazette No. 2498/16 dated 22 July 2026 establishes 1 January 2027 as the effective enforcement date for Part I (Processing of Personal Data) and Part III (Controllers and Processors) of the Personal Data Protection Act, No. 9 of 2022.",
    },
    {
      question: "Is a private clinic considered a Data Controller under the PDPA?",
      answer:
        "Yes. Under the Personal Data Protection Act, a private medical practitioner or clinic determines the purpose and means of collecting patient medical records, making the practice a Data Controller with statutory duties to protect health data.",
    },
    {
      question: "Can clinics still send WhatsApp reminders under the data protection law?",
      answer:
        "Yes, provided the clinic obtains and records explicit patient consent before dispatching automated notifications. Reminders should be limited to necessary follow-up care and must avoid disclosing sensitive diagnostic records in preview text.",
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
            <span className="text-[#0B1B3A] font-semibold">Data Protection Law Guide</span>
          </nav>

          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2.5 mb-3 flex-wrap">
              <span className="bg-[#0f172a] text-white py-1 px-3.5 rounded-full text-[0.75rem] font-medium uppercase tracking-wider">
                Legal Regulatory Guide
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

          {/* Legal Notice Disclaimer Box */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4 sm:p-5 mb-6 text-[13px] text-amber-900 leading-relaxed">
            <strong>Notice:</strong> This guide provides general informational analysis regarding Sri Lankan statutory developments and does not constitute formal legal counsel. For specific compliance assessments regarding your practice, consult a qualified attorney. This article makes no legal compliance claims about Suwenzo.
          </div>

          {/* Answer-First Introduction Block */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-8 shadow-xs">
            <p className="text-[15.5px] sm:text-[16.5px] text-[#1E293B] font-medium leading-[1.7] m-0">
              On 1 January 2027, key enforcement provisions of Sri Lanka&apos;s Personal Data Protection Act, No. 9 of 2022 (PDPA) will take effect under Extraordinary Gazette No. 2498/16. Private outpatient clinics will be legally designated as Data Controllers handling special category health data. To prepare, medical practices must establish lawful processing bases, capture verifiable patient consent for digital messaging, safeguard confidential consultation histories, and ensure third-party software processors adhere to strict confidentiality protocols.
            </p>
          </div>

          {/* Table of Contents */}
          <nav aria-label="Table of Contents" className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 mb-10 text-left">
            <h2 className="text-[14px] font-bold uppercase tracking-wider text-[#0B1B3A] mb-3">
              Table of Contents
            </h2>
            <ol className="list-decimal pl-5 space-y-1.5 text-[14px] text-[#1D4ED8]">
              <li><a href="#gazette-facts" className="hover:underline">Extraordinary Gazette No. 2498/16 and the 1 January 2027 deadline</a></li>
              <li><a href="#clinic-as-controller" className="hover:underline">Why your private clinic is classified as a Data Controller</a></li>
              <li><a href="#special-category" className="hover:underline">Medical records as special categories of personal data</a></li>
              <li><a href="#consent-protocols" className="hover:underline">Patient consent protocols for automated WhatsApp notifications</a></li>
              <li><a href="#paper-vs-digital" className="hover:underline">Physical paper vulnerabilities versus encrypted digital records</a></li>
              <li><a href="#action-checklist" className="hover:underline">Action checklist for clinic owners before 2027</a></li>
              <li><a href="#faqs" className="hover:underline">Frequently asked questions</a></li>
            </ol>
          </nav>

          {/* Article Body */}
          <article className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-10 shadow-xs space-y-8 text-[15px] sm:text-[16px] text-[#334155] leading-[1.8] text-left">
            <section id="gazette-facts">
              <h2 className="text-[1.4rem] sm:text-[1.65rem] font-bold text-[#0B1B3A] mb-3">
                Extraordinary Gazette No. 2498/16 and the 1 January 2027 deadline
              </h2>
              <p>
                Sri Lanka enacted the Personal Data Protection Act, No. 9 of 2022 to establish a comprehensive framework for the protection of personal data and to safeguard the rights of data subjects. While the Act was certified in March 2022, its implementation was designed to occur in phases to allow institutions time to adapt their data management operations.
              </p>
              <p>
                On 22 July 2026, the Minister published Extraordinary Gazette No. 2498/16 appointing <strong>1 January 2027</strong> as the date on which the substantive operational parts of the Act come into operation. Specifically, this gazette activates:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Part I (Processing of Personal Data):</strong> Defines lawful processing grounds, requirements for explicit consent, and conditions for processing special category health data.</li>
                <li><strong>Part III (Use of Personal Data by Controllers and Processors):</strong> Details the statutory obligations of data controllers, accountability standards, transparency requirements, and processor oversight.</li>
              </ul>
              <p>
                The Data Protection Authority of Sri Lanka (DPA) oversees enforcement across both public and private sectors. Clinic owners can inspect official regulations, guidelines, and gazette notifications directly on the official DPA portal at{" "}
                <a
                  href="https://www.dpa.gov.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1D4ED8] font-semibold underline"
                >
                  www.dpa.gov.lk
                </a>.
              </p>
            </section>

            <section id="clinic-as-controller">
              <h2 className="text-[1.4rem] sm:text-[1.65rem] font-bold text-[#0B1B3A] mb-3">
                Why your private clinic is classified as a Data Controller
              </h2>
              <p>
                A common misconception among healthcare providers is that data protection legislation applies only to multinational banks, telecommunications operators, or large private hospital chains. Under the PDPA, any person or entity that determines the purposes and means of processing personal data is designated as a <strong>Data Controller</strong>.
              </p>
              <p>
                When a private medical practitioner registers a patient, conducts a clinical examination, records diagnoses, and prescribes pharmaceutical treatments, the clinic is acting as a Data Controller. Regardless of whether you manage a single consulting room or operate a busy practice using{" "}
                <Link href="/for/multi-doctor-practices" className="text-[#1D4ED8] font-semibold hover:underline">
                  multi-doctor clinic software
                </Link>,
                your facility carries legal accountability for how patient information is gathered, accessed, and retained.
              </p>
            </section>

            <section id="special-category">
              <h2 className="text-[1.4rem] sm:text-[1.65rem] font-bold text-[#0B1B3A] mb-3">
                Medical records as special categories of personal data
              </h2>
              <p>
                The PDPA establishes stricter processing standards for &quot;special categories of personal data&quot;. Section 12 explicitly includes personal data revealing physical or mental health conditions, biometric data, and genetic information within this elevated classification.
              </p>
              <p>
                To lawfully process special category health data, a private medical practice must establish a recognized statutory exception:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Provision of healthcare:</strong> Processing necessary for the purposes of preventive medicine, medical diagnosis, the provision of care, or the treatment of a patient by a healthcare professional bound by ethical professional secrecy.</li>
                <li><strong>Explicit consent:</strong> Clear, unambiguous authorization granted by the patient for specific supplementary interactions, such as automated notifications or digital record sharing.</li>
                <li><strong>Vital interests:</strong> Emergency processing required to protect the immediate life or health of a patient when consent cannot be physically obtained.</li>
              </ul>
            </section>

            <section id="consent-protocols">
              <h2 className="text-[1.4rem] sm:text-[1.65rem] font-bold text-[#0B1B3A] mb-3">
                Patient consent protocols for automated WhatsApp notifications
              </h2>
              <p>
                Many outpatient clinics in Sri Lanka have begun utilizing automated WhatsApp messages to remind patients when their medicine courses end or when chronic disease reviews are due. Under the PDPA, sending automated messages to a patient&apos;s personal mobile device requires demonstrable consent.
              </p>
              <p>
                Practices must ensure their messaging protocols conform to three clear standards:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Verifiable capture:</strong> Consent cannot be assumed. The practice must record a clear affirmative action, such as a one-tap toggle confirmed by the patient during intake or consultation.</li>
                <li><strong>Purpose limitation:</strong> Contact numbers provided for clinical follow-up must not be repurposed for commercial marketing, pharmaceutical promotions, or unrelated third-party services.</li>
                <li><strong>Content minimization:</strong> Message copy should be polite and discrete. Automated notifications must never broadcast sensitive clinical details (such as psychiatric evaluations, cancer diagnoses, or STI treatments) in mobile lock-screen notifications where family members or colleagues might read them.</li>
              </ul>
            </section>

            <section id="paper-vs-digital">
              <h2 className="text-[1.4rem] sm:text-[1.65rem] font-bold text-[#0B1B3A] mb-3">
                Physical paper vulnerabilities versus encrypted digital records
              </h2>
              <p>
                Doctors often assume that retaining traditional paper files protects them from data privacy risks. In reality, paper medical records present severe security and confidentiality vulnerabilities under the accountability requirements of the PDPA:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Unrestricted physical access:</strong> Paper folders stacked behind reception desks can be browsed by non-clinical staff, cleaners, or curious waiting patients without creating an audit trail.</li>
                <li><strong>Loss and misfiling:</strong> Handwritten cards lost in drawers prevent patients from accessing their own verified visit history, conflicting with data subject access rights.</li>
                <li><strong>Legibility risks:</strong> Illegible handwriting leads to dispensing errors, directly violating the data quality and accuracy principles set forth in Part I of the Act.</li>
              </ul>
              <p>
                Transitioning to modern{" "}
                <Link href="/features/patient-records" className="text-[#1D4ED8] font-semibold hover:underline">
                  patient record software in Sri Lanka
                </Link>{" "}
                allows clinics to enforce individual staff logins, restrict medical notes strictly to examining doctors, and maintain comprehensive digital access logs.
              </p>
            </section>

            <section id="action-checklist">
              <h2 className="text-[1.4rem] sm:text-[1.65rem] font-bold text-[#0B1B3A] mb-3">
                Action checklist for clinic owners before 2027
              </h2>
              <p>
                Between now and 1 January 2027, private medical practices in Sri Lanka should systematically review their operational workflows:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[14px] border-collapse border border-slate-200">
                  <thead className="bg-slate-50 text-[#0B1B3A]">
                    <tr>
                      <th className="p-3 border border-slate-200 font-bold">Action Item</th>
                      <th className="p-3 border border-slate-200 font-bold">Implementation Step</th>
                      <th className="p-3 border border-slate-200 font-bold">PDPA Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#475569]">
                    <tr>
                      <td className="p-3 border border-slate-200 font-semibold text-[#0B1B3A]">Consent Recording</td>
                      <td className="p-3 border border-slate-200">Capture digital consent for patient messaging</td>
                      <td className="p-3 border border-slate-200">Section 6 (Lawful Processing)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 font-semibold text-[#0B1B3A]">Access Restriction</td>
                      <td className="p-3 border border-slate-200">Assign unique doctor credentials for consultation notes</td>
                      <td className="p-3 border border-slate-200">Section 22 (Security Measures)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 font-semibold text-[#0B1B3A]">Processor Agreements</td>
                      <td className="p-3 border border-slate-200">Ensure software vendors sign confidentiality clauses</td>
                      <td className="p-3 border border-slate-200">Section 24 (Processor Duties)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-slate-200 font-semibold text-[#0B1B3A]">Data Accuracy</td>
                      <td className="p-3 border border-slate-200">Replace illegible handwriting with typed prescriptions</td>
                      <td className="p-3 border border-slate-200">Section 8 (Accurate Records)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Post FAQs */}
            <section id="faqs" className="pt-6 border-t border-slate-200">
              <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-4">
                Frequently asked questions on healthcare data protection
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
                <Link href="/features/patient-records" className="text-[#1D4ED8] font-semibold hover:underline">
                  Patient Record Software
                </Link>
                <span> &bull; </span>
                <Link href="/for/multi-doctor-practices" className="text-[#1D4ED8] font-semibold hover:underline">
                  Multi-Doctor Practices
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
