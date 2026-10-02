"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingSection() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Suwenzo",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": "Suwenzo costs LKR 3,500 to LKR 7,000 per month depending on your clinic setup: 3,500 for a clinic where the doctor prescribes, and 7,000 for a clinic with an in-house dispensary. Founding clinics get their first 3 months free.",
    "offers": [
      {
        "@type": "Offer",
        "name": "Consult",
        "price": "3500",
        "priceCurrency": "LKR",
        "billingDuration": "P1M",
        "description": "For clinics where the doctor prescribes and patients collect medicine elsewhere.",
        "url": "https://suwenzo.com/pricing"
      },
      {
        "@type": "Offer",
        "name": "Clinic",
        "price": "7000",
        "priceCurrency": "LKR",
        "billingDuration": "P1M",
        "description": "For clinics with an in-house dispensary. This is the full prescription-to-dispensary flow.",
        "url": "https://suwenzo.com/pricing"
      }
    ]
  };

  return (
    <section className="relative w-full py-[100px] sm:py-[120px] px-4 sm:px-6 flex flex-col items-center overflow-hidden bg-[radial-gradient(ellipse_100%_65%_at_50%_0%,#EDF5FE_0%,#F8FAFD_45%,#FFFFFF_100%)]" id="pricing">
      {/* Schema.org Offer Schema for AEO & Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Subtle Technical Dot Grid for visual depth */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.45]"
        style={{
          backgroundImage: "radial-gradient(#94A3B8 0.75px, transparent 0.75px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, black 40%, transparent 100%)"
        }}
      />

      {/* Ambient Blue Radial Glow */}
      <div className="absolute top-[180px] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-b from-blue-200/35 via-blue-100/20 to-transparent blur-[130px] pointer-events-none rounded-full" />

      {/* ================= SECTION HEADER ================= */}
      <div className="text-center mb-12 sm:mb-16 max-w-[760px] relative z-10">
        <span className="bg-[#0f172a] text-white py-1.5 sm:py-2 px-4 sm:px-5 rounded-full text-[0.8125rem] sm:text-[0.875rem] font-medium inline-block mb-6 sm:mb-8 tracking-[0.02em] shadow-xs">
          PRICING
        </span>
        <h2 className="text-[1.85rem] sm:text-[clamp(2.25rem,5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.15] sm:leading-[1.1] mb-5 tracking-[-0.03em]">
          Simple pricing for Sri Lankan clinics
        </h2>
        {/* Answer Paragraph for AI Engines and Search */}
        <p className="text-[1.05rem] sm:text-[1.125rem] text-[#475569] leading-[1.65]">
          Suwenzo costs LKR 3,500 to LKR 7,000 per month depending on your clinic setup: 3,500 for a clinic where the doctor prescribes, and 7,000 for a clinic with an in-house dispensary. Founding clinics get their first 3 months free.
        </p>
      </div>

      {/* ================= PRICING CARDS GRID ================= */}
      <div className="max-w-[960px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 relative z-10 items-stretch mb-8">
        
        {/* ================= CARD 1: CONSULT ================= */}
        <div className="order-2 md:order-1 bg-white border border-slate-200/90 rounded-[26px] p-7 sm:p-9 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_36px_-6px_rgba(29,78,216,0.08)] hover:border-slate-300">
          <div>
            <div className="mb-6">
              <span className="text-[11.5px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 inline-block mb-3.5">
                Consult Tier
              </span>
              <h3 className="text-[1.5rem] font-bold text-[#0B1B3A] mb-2 tracking-tight">
                Consult
              </h3>
              <p className="text-[0.9375rem] text-[#475569] leading-relaxed">
                For clinics where the doctor prescribes and patients collect medicine elsewhere.
              </p>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline mb-7 pb-6 border-b border-slate-100">
              <span className="text-[2.25rem] sm:text-[2.75rem] font-extrabold text-[#0B1B3A] tracking-tight">
                LKR 3,500
              </span>
              <span className="text-[1rem] font-normal text-slate-500 ml-2">
                /month
              </span>
            </div>

            {/* Feature List */}
            <div className="space-y-3.5 mb-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 shadow-2xs">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[0.9375rem] text-[#0B1B3A] font-medium leading-snug">
                  Digital prescriptions on a tablet
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 shadow-2xs">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[0.9375rem] text-[#0B1B3A] font-medium leading-snug">
                  Patient records
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 shadow-2xs">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[0.9375rem] text-[#0B1B3A] font-medium leading-snug">
                  WhatsApp medicine reminders
                </span>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 shadow-2xs">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[0.9375rem] text-[#0B1B3A] font-medium leading-snug">
                  Setup and training included
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/94719382296?text=Hi%2C%20I%20would%20like%20to%20book%20a%2020-minute%20demo%20for%20Suwenzo%20Consult."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-full bg-[#0F172A] text-white font-semibold text-[15px] text-center transition-all duration-200 hover:bg-[#1E293B] shadow-xs block"
          >
            Book a 20-minute demo
          </a>
        </div>

        {/* ================= CARD 2: CLINIC (RECOMMENDED) ================= */}
        <div className="order-1 md:order-2 bg-white border-2 border-[#1D4ED8] rounded-[26px] p-7 sm:p-9 shadow-[0_16px_45px_-8px_rgba(29,78,216,0.16),0_2px_4px_rgba(0,0,0,0.02)] flex flex-col justify-between relative md:-translate-y-2 transition-all duration-300 hover:shadow-[0_22px_55px_-10px_rgba(29,78,216,0.22)]">
          {/* Recommended Badge on Top */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1D4ED8] text-white text-[11px] sm:text-[12px] font-bold py-1 px-4 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
            Recommended for clinics with a dispensary
          </div>

          <div>
            <div className="mb-6 mt-1">
              <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full border border-blue-200 inline-block mb-3.5">
                Clinic Tier
              </span>
              <h3 className="text-[1.5rem] font-bold text-[#0B1B3A] mb-2 tracking-tight">
                Clinic
              </h3>
              <p className="text-[0.9375rem] text-[#475569] leading-relaxed">
                For clinics with an in-house dispensary. This is the full prescription-to-dispensary flow.
              </p>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline mb-7 pb-6 border-b border-blue-100">
              <span className="text-[2.25rem] sm:text-[2.75rem] font-extrabold text-[#0B1B3A] tracking-tight">
                LKR 7,000
              </span>
              <span className="text-[1rem] font-normal text-slate-500 ml-2">
                /month
              </span>
            </div>

            {/* Feature List */}
            <div className="space-y-3.5 mb-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[0.9375rem] text-[#0B1B3A] font-semibold leading-snug">
                  Everything in Consult
                </span>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 shadow-2xs">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[0.9375rem] text-[#0B1B3A] font-medium leading-snug">
                  Prescription appears on dispensary screen instantly
                </span>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 shadow-2xs">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[0.9375rem] text-[#0B1B3A] font-medium leading-snug">
                  Auto-printed dispensary labels
                </span>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 shadow-2xs">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[0.9375rem] text-[#0B1B3A] font-medium leading-snug">
                  Live stock visibility
                </span>
              </div>

              {/* Feature 5 */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 shadow-2xs">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[0.9375rem] text-[#0B1B3A] font-medium leading-snug">
                  Medicine expiry alerts
                </span>
              </div>

              {/* Feature 6 */}
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100 shadow-2xs">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-[0.9375rem] text-[#0B1B3A] font-medium leading-snug">
                  We set up your stock list for you
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/94719382296?text=Hi%2C%20I%20would%20like%20to%20book%20a%2020-minute%20demo%20for%20Suwenzo%20Clinic%20tier."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-6 rounded-full bg-[#1D4ED8] text-white font-semibold text-[15px] text-center transition-all duration-200 hover:bg-[#1e40af] shadow-[0_6px_20px_rgba(29,78,216,0.3)] block"
          >
            Book a 20-minute demo
          </a>
        </div>

      </div>

      {/* ================= NEED SOMETHING BIGGER (Subtle Pill Tag) ================= */}
      <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 border border-slate-200/80 text-[13.5px] sm:text-[14px] text-[#475569] mb-12 relative z-10 shadow-2xs backdrop-blur-xs">
        <span>Need something bigger?</span>
        <a
          href="https://wa.me/94719382296?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20custom%20clinic%20needs."
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1D4ED8] font-semibold hover:underline inline-flex items-center gap-1 ml-0.5"
        >
          Talk to us on WhatsApp &rarr;
        </a>
      </div>

      {/* ================= HIGH-END FOUNDING CLINIC PASS (Redesigned) ================= */}
      <div className="max-w-[820px] w-full bg-white border border-blue-200/90 rounded-[24px] p-6 sm:p-8 shadow-[0_12px_36px_-8px_rgba(29,78,216,0.1),0_1px_3px_rgba(0,0,0,0.02)] relative z-10 mb-12 overflow-hidden group">
        {/* Top Accent Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-blue-400 via-[#1D4ED8] to-blue-400" />
        
        {/* Background Soft Glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
          {/* Left Column: Offer Details */}
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Founding Clinic Offer
              </span>
              <span className="text-[11.5px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                10 Clinics in Colombo
              </span>
            </div>

            <h4 className="text-[1.15rem] sm:text-[1.25rem] font-bold text-[#0B1B3A] mb-1.5 leading-snug">
              First 3 months free, then locked monthly rate.
            </h4>

            <p className="text-[0.9375rem] text-[#475569] leading-relaxed">
              Price locked for as long as you stay subscribed. Full setup, stock list import, and staff training included.
            </p>
          </div>

          {/* Right Column: Hardware Tag */}
          <div className="sm:text-right shrink-0 sm:border-l sm:border-slate-100 sm:pl-6 flex flex-col sm:items-end justify-center">
            <div className="text-[11.5px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Required Hardware
            </div>
            <div className="text-[13.5px] font-medium text-[#0B1B3A] mb-2">
              Tablet &amp; thermal label printer
            </div>
            <Link
              href="/hardware"
              className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#1D4ED8] bg-blue-50/80 hover:bg-blue-100/70 border border-blue-200/80 px-3 py-1.5 rounded-lg transition-colors"
            >
              <span>See compatible devices</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= CLOSING LINK TO FULL PRICING ================= */}
      <div className="text-center relative z-10 mb-4">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 border border-slate-200 hover:border-blue-300 text-[#0B1B3A] hover:text-[#1D4ED8] font-semibold text-[14.5px] shadow-2xs hover:shadow-sm transition-all duration-200"
        >
          <span>See full pricing details</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

    </section>
  );
}
