"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const allFaqs = [
    {
      category: "Founding Clinic Offer",
      question: "What does the founding clinic offer include?",
      answer:
        "The first 10 clinics in Colombo get 3 months free. After that, you continue at your locked price for as long as you stay. Founding clinics also get direct engineering support and tell us what features to build next.",
    },
    {
      category: "Clinic Fit & Practice Scope",
      question: "Who is Suwenzo built for?",
      answer:
        "Suwenzo is built for private clinics and outpatient practices in Sri Lanka, especially practices with an in-house dispensary where the doctor prescribes and the dispenser hands out medicine. It accommodates solo general practitioners, busy multi-doctor practices, and growing medical centres.",
    },
    {
      category: "Hardware & Installation",
      question: "What do I need to buy to get started?",
      answer:
        "You need a tablet for the doctor's desk, a label printer at the dispensary, and an internet connection. Before you buy anything, we share the list of printers that work with Suwenzo so nothing is wasted.",
    },
    {
      category: "Hardware & Installation",
      question: "How long does setup take, and who does it?",
      answer:
        "We do it with you. We enter your stock list, connect your printer and train your dispenser, so you start with a working system, not an empty one. Most clinics are ready within 48 hours of the demo, and we stay on WhatsApp for the first weeks to help your dispenser settle in.",
    },
    {
      category: "Dispensary & Team Adoption",
      question: "Will my dispenser be able to use it?",
      answer:
        "Yes. The dispenser's screen shows the prescription the moment you confirm it, so there is nothing to decode and nothing to re-type. We train your dispenser during setup and stay on WhatsApp for the first weeks.",
    },
    {
      category: "Connectivity & Offline Resilience",
      question: "Does Suwenzo work without internet?",
      answer:
        "Suwenzo needs an internet connection. A standard mobile hotspot or 4G clinic router is enough. If your connection temporarily drops, prescriptions are safely queued and resume the moment signal reconnects.",
    },
    {
      category: "Patient Records & History",
      question: "What does Suwenzo remember about my patients?",
      answer:
        "Suwenzo keeps each patient's visits, prescriptions and notes in one record, so any doctor in the clinic can see the history before the consultation starts. This includes past diagnoses, prescribed medicines, dosages, allergies, and vital signs, with nothing lost between visits.",
    },
    {
      category: "Patient Follow-Up & WhatsApp",
      question: "How do reminders work, and do patients have to agree?",
      answer:
        "When a patient's course is ending, Suwenzo sends a WhatsApp reminder, but only to patients who have agreed to receive them. Consent is captured with a single tap during consultation or registration, and reminder messaging is fully included in your subscription.",
    },
    {
      category: "Clinic Fit & Practice Scope",
      question: "Does Suwenzo support online consultations?",
      answer:
        "Not today. Suwenzo is built around the visit in your clinic: records, prescriptions, dispensary and follow-up. If online consultations matter to your practice, tell us on the demo, because founding clinics help decide what we build next.",
    },
  ];

  const categories = ["All", "Founding Clinic Offer", "Hardware & Installation", "Dispensary & Team Adoption", "Patient Records & History", "Patient Follow-Up & WhatsApp", "Connectivity & Offline Resilience", "Clinic Fit & Practice Scope"];

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((faq) => {
      const matchesCategory =
        selectedCategory === "All" || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [allFaqs, selectedCategory, searchQuery]);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  const whatsappUrl =
    "https://wa.me/94719382296?text=Hi%2C%20I%20have%20a%20question%20about%20Suwenzo%20for%20my%20clinic.";

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[120px] sm:pt-[140px] pb-[80px] px-4 sm:px-6 relative overflow-hidden">
        {/* Schema.org Complete 10-Question FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
        />

        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-blue-200/40 via-white/50 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-[1000px] mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">FAQ Directory</span>
          </div>

          {/* Page Header */}
          <div className="text-left mb-10 sm:mb-12">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 tracking-[0.02em] shadow-xs uppercase">
              Knowledge Base & FAQ
            </span>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.5rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-4 tracking-[-0.03em]">
              Frequently Asked Questions
            </h1>
            <p className="text-[1.1rem] sm:text-[1.2rem] text-[#475569] max-w-[760px] leading-[1.6]">
              Detailed answers to everything doctors, dispensers, and clinic managers ask about hardware setup, offline sync, WhatsApp reminders, and patient records.
            </p>
          </div>

          {/* Search Bar & Filter Strip */}
          <div className="bg-white border border-slate-200/90 rounded-[22px] p-3 sm:p-4 mb-8 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)] flex flex-col gap-3">
            {/* Search Input */}
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
                placeholder="Search questions (e.g., pricing, printer, WhatsApp, records, offline)..."
                className="w-full pl-11 pr-4 py-3 text-[14.5px] sm:text-[15px] text-[#0B1B3A] bg-slate-50 border border-slate-200 rounded-xl focus:outline-hidden focus:border-[#1D4ED8] focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-semibold px-2 py-1 bg-slate-200 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Category Chips */}
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

          {/* FAQ Accordion List */}
          <div className="flex flex-col gap-3.5 mb-14">
            {filteredFaqs.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-[20px] p-8 text-center text-slate-500">
                <p className="text-[16px] mb-2 font-medium text-[#0B1B3A]">No matching questions found.</p>
                <p className="text-[14px] text-slate-500 mb-4">
                  Have a question not listed here? Ask us directly on WhatsApp and we will answer right away.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1D4ED8] text-white rounded-full text-xs font-semibold hover:bg-blue-700 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                  <span>&rarr;</span>
                </a>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
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
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-hidden group cursor-pointer"
                      aria-expanded={isOpen}
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

          {/* Bottom Card: WhatsApp Direct Contact */}
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
                target="_blank"
                rel="noopener noreferrer"
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
      </main>

      <Footer />
    </>
  );
}
