"use client";

import { useState, useMemo, useEffect } from "react";
import { getWhatsAppRedirectUrl } from "@/lib/site";
import { FaqItem } from "@/content/site";

interface FaqDirectoryClientProps {
  faqs: FaqItem[];
}

export default function FaqDirectoryClient({ faqs }: FaqDirectoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [openSlugs, setOpenSlugs] = useState<Record<string, boolean>>({});
  const [selectedGroup, setSelectedGroup] = useState<string>("All");

  const groups: string[] = [
    "All",
    "Getting started",
    "Hardware and setup",
    "Patient records",
    "Prescriptions and dispensary",
    "Stock and expiry",
    "WhatsApp reminders",
    "Practice types",
  ];

  // Check URL hash on mount or hashchange to automatically open matching question
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setOpenSlugs((prev) => ({ ...prev, [hash]: true }));
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesGroup =
        selectedGroup === "All" || faq.group === selectedGroup;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGroup && matchesSearch;
    });
  }, [faqs, selectedGroup, searchQuery]);

  const groupedFaqs = useMemo(() => {
    const map = new Map<string, FaqItem[]>();
    const orderedGroups = groups.filter((g) => g !== "All");

    orderedGroups.forEach((g) => {
      const items = filteredFaqs.filter((f) => f.group === g);
      if (items.length > 0) {
        map.set(g, items);
      }
    });
    return map;
  }, [filteredFaqs, groups]);

  const toggleSlug = (slug: string) => {
    setOpenSlugs((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  const whatsappUrl = getWhatsAppRedirectUrl("faq-page", "question");

  return (
    <div>
      {/* Search Bar & Filter Strip */}
      <div className="bg-white border border-slate-200/90 rounded-[22px] p-3 sm:p-4 mb-8 shadow-xs flex flex-col gap-3">
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
            placeholder="Search questions (e.g., setup, printer, WhatsApp, records, offline, billing)..."
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

        {/* Group Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[12.5px]">
          {groups.map((grp) => (
            <button
              key={grp}
              type="button"
              onClick={() => setSelectedGroup(grp)}
              className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                selectedGroup === grp
                  ? "bg-[#0B1B3A] text-white font-medium"
                  : "bg-slate-100 text-[#475569] hover:bg-slate-200"
              }`}
            >
              {grp}
            </button>
          ))}
        </div>
      </div>

      {/* Grouped Accordions */}
      {groupedFaqs.size === 0 ? (
        <div className="bg-white border border-slate-200 rounded-[20px] p-8 text-center text-slate-500 mb-12">
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
        Array.from(groupedFaqs.entries()).map(([groupName, items]) => (
          <section key={groupName} className="mb-10 text-left">
            <h2 className="text-[1.35rem] sm:text-[1.5rem] font-bold text-[#0B1B3A] mb-4 pb-2 border-b border-slate-200/80">
              {groupName}
            </h2>

            <div className="flex flex-col gap-3">
              {items.map((faq) => {
                const isOpen = !!openSlugs[faq.slug];
                const buttonId = `btn-${faq.slug}`;
                const panelId = `panel-${faq.slug}`;

                return (
                  <div
                    key={faq.id}
                    id={faq.slug}
                    className={`bg-white border rounded-[20px] transition-all duration-200 overflow-hidden scroll-mt-28 ${
                      isOpen
                        ? "border-blue-300 shadow-[0_12px_28px_-6px_rgba(29,78,216,0.1)]"
                        : "border-slate-200/90 shadow-2xs hover:border-blue-200"
                    }`}
                  >
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggleSlug(faq.slug)}
                      className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 focus:outline-hidden group cursor-pointer"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#0B1B3A] leading-snug tracking-tight group-hover:text-[#1D4ED8] transition-colors m-0">
                        {faq.question}
                      </h3>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                          isOpen
                            ? "bg-[#1D4ED8] text-white"
                            : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#1D4ED8]"
                        }`}
                      >
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="px-5 sm:px-6 pb-5 pt-1 text-[14px] sm:text-[14.5px] text-[#475569] leading-relaxed border-t border-slate-100"
                      >
                        <p className="m-0 mb-3">{faq.answer}</p>
                        <div className="flex items-center gap-3 text-[12px] text-slate-400">
                          <a
                            href={`#${faq.slug}`}
                            className="hover:text-[#1D4ED8] underline"
                          >
                            Copy link to this answer
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
