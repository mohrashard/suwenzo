"use client";

import { useState } from "react";
import Link from "next/link";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does setup take, and who does it?",
      answer:
        "We do it with you. We enter your stock list, connect your printer and train your dispenser, so you start with a working system, not an empty one. Most clinics are ready within 48 hours of the demo, and we stay on WhatsApp for the first weeks to help your dispenser settle in.",
    },
    {
      question: "What do I need to buy to get started?",
      answer:
        "You need a tablet for the doctor's desk, a label printer at the dispensary, and an internet connection. Before you buy anything, we share the list of printers that work with Suwenzo so nothing is wasted.",
    },
    {
      question: "Does Suwenzo work without internet?",
      answer:
        "Suwenzo needs an internet connection. A standard mobile hotspot or 4G clinic router is enough. If your connection temporarily drops, prescriptions are safely queued and resume the moment signal reconnects.",
    },
    {
      question: "What does Suwenzo remember about my patients?",
      answer:
        "Suwenzo keeps each patient's visits, prescriptions and notes in one record, so any doctor in the clinic can see the history before the consultation starts. This includes past diagnoses, prescribed medicines, dosages, allergies, and vital signs, with nothing lost between visits.",
    },
    {
      question: "How do reminders work, and do patients have to agree?",
      answer:
        "When a patient's course is ending, Suwenzo sends a WhatsApp reminder, but only to patients who have agreed to receive them. Consent is captured with a single tap during consultation or registration, and reminder messaging is fully included in your subscription.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <section className="bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_100%)] py-[96px] sm:py-[110px] px-4 sm:px-6 w-full flex flex-col items-center relative overflow-hidden" id="faq">
      {/* Schema.org FAQPage for AEO and Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Ambient background soft glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-200/30 via-white/40 to-transparent blur-[130px] pointer-events-none rounded-full" />

      {/* Main Two-Column Layout */}
      <div className="max-w-[1140px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10 items-start">
        
        {/* ================= LEFT COLUMN: HEADING & WHATSAPP NOTE ================= */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 text-left">
          <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-6 sm:mb-8 tracking-[0.02em] shadow-xs uppercase">
            FAQ
          </span>
          
          <h2 className="text-[2rem] sm:text-[clamp(2.25rem,4.5vw,3rem)] font-normal text-[#0B1B3A] leading-[1.15] mb-5 tracking-[-0.03em]">
            Questions doctors ask before they book a demo
          </h2>

          <p className="text-[1.05rem] text-[#475569] leading-[1.6] mb-8">
            Clear, honest answers about clinic hardware, stock setup, patient records, and day-to-day dispensary workflow.
          </p>

          {/* Refined Editorial Side Note */}
          <div className="pt-6 border-t border-blue-200/60">
            <a
              href="https://wa.me/94719382296?text=Hi%2C%20I%20have%20a%20question%20about%20Suwenzo%20for%20my%20clinic."
              target="_blank"
              rel="noopener noreferrer"
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

        {/* ================= RIGHT COLUMN: ACCORDION LIST ================= */}
        <div className="lg:col-span-7 flex flex-col gap-3.5 w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white border rounded-[20px] transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-blue-300 shadow-[0_12px_28px_-6px_rgba(29,78,216,0.1)]"
                    : "border-slate-200/90 shadow-[0_4px_16px_-4px_rgba(29,78,216,0.04)] hover:border-blue-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-hidden group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-[#0B1B3A] leading-snug tracking-tight group-hover:text-[#1D4ED8] transition-colors">
                    {faq.question}
                  </h3>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? "bg-[#1D4ED8] text-white"
                        : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#1D4ED8]"
                    }`}
                  >
                    <span className="text-[18px] font-medium leading-none select-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {/* CSS Grid Transition: Ensures answer is ALWAYS in HTML source for AI/Search engines */}
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-250 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 pt-1.5 text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.65] border-t border-slate-100/80">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Link to Full 10-Question FAQ Directory */}
          <div className="pt-2 px-1 flex items-center justify-between">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1D4ED8] hover:text-[#1e40af] group transition-colors"
            >
              <span className="group-hover:underline">Looking for more answers? View all questions in our full FAQ directory</span>
              <span aria-hidden="true" className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
