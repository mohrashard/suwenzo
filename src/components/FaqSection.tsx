import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import HomeFaqAccordion from "@/components/HomeFaqAccordion";
import { getFaqPageSchema, buildGraphSchema } from "@/lib/schemas";
import { getWhatsAppRedirectUrl } from "@/lib/site";
import { getHomepageFaqs } from "@/content/site";

export default function FaqSection() {
  const whatsappUrl = getWhatsAppRedirectUrl("faq-section", "question");
  const homeFaqs = getHomepageFaqs();

  const faqJsonLd = buildGraphSchema([
    getFaqPageSchema(
      homeFaqs.map((f) => ({ question: f.question, answer: f.answer }))
    ),
  ]);

  return (
    <section
      className="bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_100%)] py-[84px] sm:py-[104px] px-4 sm:px-6 w-full flex flex-col items-center relative overflow-hidden"
      id="faq"
    >
      <JsonLd data={faqJsonLd} />

      {/* Ambient background soft glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-200/30 via-white/40 to-transparent blur-[130px] pointer-events-none rounded-full" />

      {/* Main Two-Column Layout */}
      <div className="max-w-[1140px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10 items-start">
        
        {/* Left Column: Heading & Note */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 text-left">
          <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 sm:mb-6 tracking-[0.02em] uppercase">
            FAQ
          </span>
          
          <h2 className="text-[2rem] sm:text-[clamp(2.25rem,4.5vw,3rem)] font-normal text-[#0B1B3A] leading-[1.15] mb-4 tracking-[-0.03em]">
            Clinic software FAQ for Sri Lankan doctors
          </h2>

          <p className="text-[1.05rem] text-[#475569] leading-[1.6] mb-6">
            Clear, honest answers about clinic hardware, stock setup, patient records, and day-to-day dispensary workflow.
          </p>

          <div className="mb-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-blue-200 text-[#1D4ED8] text-[13.5px] font-semibold shadow-2xs hover:bg-blue-50 transition-colors"
            >
              <span>See all questions</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

          <div className="pt-6 border-t border-blue-200/60">
            <a
              href={whatsappUrl}
              rel="nofollow noopener"
              className="inline-flex items-center gap-3 text-left group transition-opacity hover:opacity-90"
            >
              <div className="w-8 h-8 rounded-full bg-white border border-blue-200/80 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-[#1D4ED8] transition-colors">
                <svg className="w-4 h-4 text-[#1D4ED8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-snug m-0">
                <span>Still have a question? </span>
                <span className="text-[#1D4ED8] font-semibold group-hover:underline inline-flex items-center gap-1">
                  <span>Message us on WhatsApp</span>
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </p>
            </a>
          </div>
        </div>

        {/* Right Column: 6 Interactive Accordion FAQs */}
        <div className="lg:col-span-7 w-full">
          <HomeFaqAccordion
            items={homeFaqs.map((f) => ({
              question: f.question,
              answer: f.answer,
            }))}
          />
        </div>

      </div>
    </section>
  );
}
