"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

interface HomeFaqAccordionProps {
  items?: FaqItem[];
  faqs?: FaqItem[];
}

export default function HomeFaqAccordion({ items, faqs }: HomeFaqAccordionProps) {
  const faqList = items || faqs || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3.5 w-full">
      {faqList.map((faq, index) => {
        const isOpen = openIndex === index;
        const buttonId = `home-faq-btn-${index}`;
        const panelId = `home-faq-panel-${index}`;

        return (
          <div
            key={faq.question}
            className={`bg-white border rounded-[20px] transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-blue-300 shadow-[0_10px_28px_-6px_rgba(29,78,216,0.1)]"
                : "border-slate-200/90 shadow-[0_4px_16px_-4px_rgba(29,78,216,0.04)] hover:border-blue-200"
            }`}
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => toggleFaq(index)}
              className="w-full px-5 sm:px-6 py-4.5 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-hidden group cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <h3 className="text-[15.5px] sm:text-[17px] font-bold text-[#0B1B3A] leading-snug tracking-tight group-hover:text-[#1D4ED8] transition-colors pr-2">
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

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows,opacity] duration-250 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 sm:px-6 pb-5 pt-2 text-[14px] sm:text-[15px] text-[#475569] leading-[1.65] border-t border-slate-100/90">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
