import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const whatsappUrl =
    "https://wa.me/94719382296?text=Hi%2C%20I%20have%20an%20inquiry%20about%20Suwenzo.";

  return (
    <footer className="w-full bg-[linear-gradient(180deg,#EBF3FE_0%,#E1EFFF_50%,#D4E6FD_100%)] border-t border-[#BFD7FF]/80 pt-10 sm:pt-14 pb-0 px-4 sm:px-6 relative overflow-hidden flex flex-col items-center">
      {/* Ambient soft blue lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[260px] bg-gradient-to-t from-blue-300/35 via-blue-200/20 to-transparent blur-[110px] pointer-events-none rounded-full" />

      {/* ================= COMPACT FLOATING FOOTER CARD (Graphy Style) ================= */}
      <div className="max-w-[1140px] w-full bg-white border border-slate-200/90 rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 lg:p-10 shadow-[0_10px_35px_-8px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Logo, Description & Socials */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-2.5 mb-2 no-underline group">
              <div className="w-8 h-8 rounded-[10px] p-[1.5px] bg-gradient-to-tr from-[#1D4ED8] via-[#3B82F6] to-[#93C5FD] shadow-[0_2px_8px_rgba(29,78,216,0.2)] shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full rounded-[8.5px] bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src="/swlogocopy.jpeg"
                    alt="Suwenzo"
                    width={32}
                    height={32}
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

            {/* Verbatim One-Liner */}
            <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-[#475569] mb-4 max-w-[360px]">
              Suwenzo is clinic software for Sri Lanka that connects the doctor, the dispensary and the stock list in one system.
            </p>

            {/* Social / Direct Connect Icons */}
            <div className="flex items-center gap-2.5 text-slate-700">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Support"
                title="Chat on WhatsApp"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-emerald-50 hover:text-emerald-600 flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:info@suwenzo.com"
                aria-label="Email Us"
                title="Send email inquiry"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-[#1D4ED8] flex items-center justify-center transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 text-left">
            {/* Product Navigation */}
            <div>
              <h4 className="text-[13.5px] font-bold text-[#0B1B3A] mb-3 tracking-tight">
                Product & System
              </h4>
              <ul className="space-y-2.5 text-[13.5px] text-[#475569]">
                <li>
                  <Link href="/#how-it-works" className="hover:text-[#1D4ED8] transition-colors">
                    How it works (3-step flow)
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="hover:text-[#1D4ED8] transition-colors">
                    Clinic features & records
                  </Link>
                </li>
                <li>
                  <Link href="/#who-and-why" className="hover:text-[#1D4ED8] transition-colors">
                    Who it&apos;s for & practice tiers
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-[#1D4ED8] transition-colors font-medium">
                    FAQ Directory (all answers)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Direct Clinic Contact */}
            <div>
              <h4 className="text-[13.5px] font-bold text-[#0B1B3A] mb-3 tracking-tight">
                Demo & Inquiries
              </h4>
              <ul className="space-y-2.5 text-[13.5px] text-[#475569]">
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1D4ED8] transition-colors inline-flex items-center gap-1.5 text-[#1D4ED8] font-medium"
                  >
                    <span>Book a 20-minute demo</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1D4ED8] transition-colors"
                  >
                    WhatsApp: 071 938 2296
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@suwenzo.com"
                    className="hover:text-[#1D4ED8] transition-colors"
                  >
                    Email: info@suwenzo.com
                  </a>
                </li>
                <li className="text-[12.5px] text-slate-500 pt-1">
                  Colombo, Sri Lanka · On-site setup included
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
            Clinic software built for Sri Lanka
          </div>
        </div>

      </div>

      {/* ================= COMPACT GIANT FAINT WATERMARK (75% Visible Signature) ================= */}
      <div className="w-full flex justify-center select-none pointer-events-none overflow-hidden mt-4 sm:mt-5 relative z-10">
        <span className="text-[clamp(4.5rem,14vw,11rem)] font-black tracking-[-0.04em] text-[#1D4ED8]/[0.08] leading-none inline-block whitespace-nowrap translate-y-[22%] sm:translate-y-[25%]">
          Suwenzo
        </span>
      </div>
    </footer>
  );
}
