"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getWhatsAppRedirectUrl } from "@/lib/site";

export interface FaqEntry {
  category: string;
  question: string;
  answer: string;
}

interface FaqDirectoryClientProps {
  faqs: FaqEntry[];
}

export default function FaqDirectoryClient({ faqs }: FaqDirectoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    faqs.forEach((f) => set.add(f.category));
    return ["All", ...Array.from(set)];
  }, [faqs]);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, selectedCategory, searchQuery]);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappUrl = getWhatsAppRedirectUrl("faq-page", "question");

  return (
    <div>
      {/* Search Bar & Filter Strip */}
      <div className="bg-white border border-slate-200/90 rounded-[22px] p-3 sm:p-4 mb-8 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)] flex flex-col gap-3">
        <div className="relative w-full">
          <svg
            className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g., setup, printer, WhatsApp, records, offline)..."
            className="w-full pl-11 pr-4 py-3 text-[14.5px] sm:text-[15px] text-[#0B1B3A] bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#1D4ED8] focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-semibold px-2 py-1 bg-slate-200 rounded-md cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[12.5px]">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#0B1B3A] text-white font-medium"
                  : "bg-slate-100 text-[#475569] hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-3.5 mb-14">
        {filteredFaqs.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-[20px] p-8 text-center text-slate-500">
            <p className="text-[16px] mb-2 font-medium text-[#0B1B3A]">No matching questions found.</p>
            <p className="text-[14px] text-slate-500 mb-4">
              Have a question not listed here? Ask us directly on WhatsApp and we will answer right away.
            </p>
            <a
              href={whatsappUrl}
              rel="nofollow noopener"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1D4ED8] text-white rounded-full text-xs font-semibold hover:bg-blue-700 transition-colors"
            >
              <span>Chat on WhatsApp</span>
              <span>&rarr;</span>
            </a>
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `faq-btn-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={faq.question}
                className={`bg-white border rounded-[20px] transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-blue-300 shadow-[0_12px_28px_-6px_rgba(29,78,216,0.1)]"
                    : "border-slate-200/90 shadow-[0_4px_16px_-4px_rgba(29,78,216,0.04)] hover:border-blue-200"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-hidden group cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <div className="flex flex-col gap-1 pr-2">
                    <span className="text-[11px] font-semibold text-[#1D4ED8] tracking-wider uppercase">
                      {faq.category}
                    </span>
                    <h2 className="text-[16px] sm:text-[17.5px] font-bold text-[#0B1B3A] leading-snug tracking-tight group-hover:text-[#1D4ED8] transition-colors">
                      {faq.question}
                    </h2>
                  </div>

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
                    <div className="px-6 pb-5 pt-2 text-[14.5px] sm:text-[15.5px] text-[#475569] leading-[1.68] border-t border-slate-100/90">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Direct Contact Card */}
      <div className="bg-white border border-blue-200 rounded-[24px] p-6 sm:p-8 shadow-[0_8px_30px_-6px_rgba(29,78,216,0.08)] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-[#0B1B3A] mb-1.5">
            Have a specific question about your clinic workflow?
          </h3>
          <p className="text-[14px] text-[#475569] leading-relaxed max-w-[550px]">
            We reply directly on WhatsApp with honest answers, hardware compatibility checks, and founding clinic onboarding timelines.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            rel="nofollow noopener"
            className="w-full sm:w-auto text-center bg-[#1D4ED8] hover:bg-[#1e40af] text-white text-[13.5px] font-semibold px-5 py-3 rounded-full shadow-[0_2px_8px_rgba(29,78,216,0.25)] transition-all hover:scale-[1.02]"
          >
            Chat on WhatsApp
          </a>
          <Link
            href="/"
            className="w-full sm:w-auto text-center bg-slate-100 hover:bg-slate-200 text-[#0B1B3A] text-[13.5px] font-semibold px-4.5 py-3 rounded-full transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
