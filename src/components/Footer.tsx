import Link from "next/link";
import Image from "next/image";
import { CANONICAL_DEFINITION, SOCIAL_LINKS, getWhatsAppRedirectUrl } from "@/lib/site";

export default function Footer() {
  const whatsappUrl = getWhatsAppRedirectUrl("footer", "inquiry");
  const demoUrl = getWhatsAppRedirectUrl("footer-demo", "demo");

  return (
    <footer className="w-full bg-[linear-gradient(180deg,#EBF3FE_0%,#E1EFFF_50%,#D4E6FD_100%)] border-t border-[#BFD7FF]/80 pt-10 sm:pt-14 pb-0 px-4 sm:px-6 relative overflow-hidden flex flex-col items-center">
      {/* Ambient soft blue lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[260px] bg-gradient-to-t from-blue-300/35 via-blue-200/20 to-transparent blur-[110px] pointer-events-none rounded-full" />

      {/* Floating Footer Card */}
      <div className="max-w-[1140px] w-full bg-white border border-slate-200/90 rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_-8px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Logo, Description & Socials */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 mb-2 no-underline group">
              <div className="w-8 h-8 rounded-[10px] p-[1.5px] bg-gradient-to-tr from-[#1D4ED8] via-[#3B82F6] to-[#93C5FD] shadow-[0_2px_8px_rgba(29,78,216,0.2)] shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full rounded-[8.5px] bg-white flex items-center justify-center overflow-hidden p-0.5">
                  <Image
                    src="/suwenzo-mark.svg"
                    alt="Suwenzo"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span className="text-[19px] font-bold tracking-tight text-[#0B1B3A]">
                Suwenzo
              </span>
            </Link>

            {/* Tagline Strip */}
            <div className="text-[12px] font-semibold text-[#1D4ED8] tracking-wide mb-3 flex items-center gap-1.5">
              <span>Remembered</span>
              <span>&middot;</span>
              <span>Reminded</span>
              <span>&middot;</span>
              <span>Recommended</span>
            </div>

            {/* Canonical Definition Verbatim */}
            <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-[#475569] mb-5 max-w-[340px]">
              {CANONICAL_DEFINITION}
            </p>

            {/* Verified Social Media Icons */}
            <div className="flex items-center gap-2 text-slate-700">
              {/* Facebook */}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="me noopener"
                aria-label="Suwenzo on Facebook"
                title="Suwenzo Facebook"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-[#1D4ED8] flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="me noopener"
                aria-label="Suwenzo on Instagram"
                title="Suwenzo Instagram"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-pink-50 hover:text-pink-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="me noopener"
                aria-label="Suwenzo on TikTok"
                title="Suwenzo TikTok"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 hover:text-black flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3.1 15.68a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.87-4.5V8.62a8.18 8.18 0 0 0 4.8-1.54l-1-2.39z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="me noopener"
                aria-label="Suwenzo on LinkedIn"
                title="Suwenzo LinkedIn"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-[#1D4ED8] flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* WhatsApp direct redirect */}
              <a
                href={whatsappUrl}
                rel="nofollow noopener"
                aria-label="WhatsApp Support"
                title="Chat on WhatsApp"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 text-left">
            {/* Features Navigation */}
            <div>
              <h4 className="text-[13.5px] font-bold text-[#0B1B3A] mb-3 tracking-tight">
                Features
              </h4>
              <ul className="space-y-2 text-[13px] text-[#475569]">
                <li>
                  <Link href="/features/patient-records" className="hover:text-[#1D4ED8] transition-colors">
                    Patient Records
                  </Link>
                </li>
                <li>
                  <Link href="/features/digital-prescriptions" className="hover:text-[#1D4ED8] transition-colors">
                    Digital Prescriptions
                  </Link>
                </li>
                <li>
                  <Link href="/features/stock-and-expiry" className="hover:text-[#1D4ED8] transition-colors">
                    Stock &amp; Expiry
                  </Link>
                </li>
                <li>
                  <Link href="/features/whatsapp-reminders" className="hover:text-[#1D4ED8] transition-colors">
                    WhatsApp Reminders
                  </Link>
                </li>
              </ul>
            </div>

            {/* Practices Navigation */}
            <div>
              <h4 className="text-[13.5px] font-bold text-[#0B1B3A] mb-3 tracking-tight">
                Practice Types
              </h4>
              <ul className="space-y-2 text-[13px] text-[#475569]">
                <li>
                  <Link href="/for/solo-doctors" className="hover:text-[#1D4ED8] transition-colors">
                    Solo Doctors
                  </Link>
                </li>
                <li>
                  <Link href="/for/clinics-with-dispensary" className="hover:text-[#1D4ED8] transition-colors">
                    With Dispensary
                  </Link>
                </li>
                <li>
                  <Link href="/for/consulting-only-practices" className="hover:text-[#1D4ED8] transition-colors">
                    Consulting Only
                  </Link>
                </li>
                <li>
                  <Link href="/for/multi-doctor-practices" className="hover:text-[#1D4ED8] transition-colors">
                    Multi-Doctor Centres
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources & Contact */}
            <div>
              <h4 className="text-[13.5px] font-bold text-[#0B1B3A] mb-3 tracking-tight">
                Resources
              </h4>
              <ul className="space-y-2 text-[13px] text-[#475569]">
                <li>
                  <Link href="/faq" className="hover:text-[#1D4ED8] transition-colors">
                    FAQ Directory
                  </Link>
                </li>
                <li>
                  <Link href="/facts" className="hover:text-[#1D4ED8] transition-colors">
                    Fact Sheet
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#1D4ED8] transition-colors">
                    About Suwenzo
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#1D4ED8] transition-colors">
                    Contact Team
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#1D4ED8] transition-colors">
                    Clinical Blog
                  </Link>
                </li>
                <li>
                  <a
                    href={demoUrl}
                    rel="nofollow noopener"
                    className="text-[#1D4ED8] font-semibold hover:underline inline-flex items-center gap-1 pt-1"
                  >
                    <span>Book 20-min demo</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-100 my-6 sm:my-7" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Suwenzo. All rights reserved.
          </div>
          <div className="text-slate-500">
            Colombo, Sri Lanka &middot; Clinic software built for Sri Lanka
          </div>
        </div>

      </div>

      {/* Watermark Signature */}
      <div className="w-full flex justify-center select-none pointer-events-none overflow-hidden mt-4 sm:mt-5 relative z-10">
        <span className="text-[clamp(4.5rem,14vw,11rem)] font-black tracking-[-0.04em] text-[#1D4ED8]/[0.08] leading-none inline-block whitespace-nowrap translate-y-[22%] sm:translate-y-[25%]">
          Suwenzo
        </span>
      </div>
    </footer>
  );
}
