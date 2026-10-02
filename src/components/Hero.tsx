import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const whatsappNumber = "94719382296";
  const whatsappMessage = encodeURIComponent("Hi, I would like to book a 20-minute demo for Suwenzo.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const gpStatement =
    "For private clinics and medical practices, with or without an in-house dispensary · Setup and training included · 3 months free for founding clinics";

  return (
    <section
      id="home"
      className="relative w-full flex flex-col items-center justify-start pt-[115px] md:pt-[135px] px-6 pb-16 md:pb-24 overflow-hidden scroll-mt-24"
    >
      {/* Full-width Clinic Photograph Background */}
      <Image
        src="/clinic-hero.jpg"
        alt="Doctor using a computer while a nurse uses a tablet in a clinic"
        fill
        priority
        className="object-cover object-[center_60%] md:object-[center_45%] z-0"
      />

      {/* Signature White & Blue Gradient overlay spread across the entire Hero section */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-85">
        <Image
          src="/bluewhite.jpg"
          alt=""
          fill
          priority
          className="w-full h-full object-fill"
        />
      </div>

      {/* Subtle text halo strictly behind the headline for clarity */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[80%] max-w-[760px] h-[220px] bg-white/30 blur-[60px] rounded-full pointer-events-none z-[2]" />

      {/* Seamless transition shade into What is Suwenzo section */}
      <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-36 bg-gradient-to-b from-transparent via-[#FAFCFF]/40 to-[#FAFCFF] pointer-events-none z-[2]" />

      <div className="relative z-10 w-full max-w-[1000px] text-center flex flex-col items-center">
        {/* Eyebrow row */}
        <div className="flex flex-row items-center gap-3 mb-6 justify-center flex-wrap">
          <span className="text-[13px] md:text-[14px] font-bold text-[#1D4ED8] tracking-[0.1em] uppercase">
            Clinic Software for Sri Lanka
          </span>
          <div className="bg-white text-[#1D4ED8] px-3.5 py-1 rounded-full text-[13px] font-medium shadow-sm border border-blue-100 whitespace-nowrap">
            Onboarding 10 founding clinics in Colombo
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-[38px] sm:text-[50px] md:text-[58px] lg:text-[64px] font-[800] leading-[1.08] tracking-tight text-[#0B1B3A] mb-5 max-w-[1000px] w-full text-center">
          Prescribe once. <br className="hidden sm:inline" />
          <span className="whitespace-normal md:whitespace-nowrap">Remember every patient.</span>
        </h1>

        {/* Subtitle */}
        <div className="text-[16.5px] sm:text-[18px] md:text-[19px] text-[#0A192F] mb-8 max-w-[880px] leading-[1.6] font-medium mx-auto text-center space-y-1 sm:space-y-1.5">
          <p className="whitespace-normal md:whitespace-nowrap">
            Suwenzo connects your doctor&apos;s desk, records, and dispensary in one system.
          </p>
          <p className="whitespace-normal md:whitespace-nowrap text-[#132A4D]">
            Prescriptions sync in seconds, and patients get reminded when it&apos;s time to return.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-row items-center gap-4 w-full md:w-auto justify-center flex-wrap">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#1D4ED8] hover:bg-[#1e40af] text-white h-[52px] px-8 rounded-full text-[15px] md:text-[16px] font-semibold transition-all duration-300 shadow-[0_8px_20px_rgba(29,78,216,0.25)] hover:shadow-[0_12px_24px_rgba(29,78,216,0.35)] hover:-translate-y-[1px] whitespace-nowrap"
            >
              Book a 20-minute demo
            </a>

            <a
              href="#how-it-works"
              className="flex items-center justify-center gap-2 bg-white hover:bg-[#F8FAFC] text-[#1D4ED8] border border-[#1D4ED8] h-[52px] px-8 rounded-full text-[15px] md:text-[16px] font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-[1px] whitespace-nowrap group"
            >
              <span>See how it works</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <div className="mt-5 text-[14px] md:text-[15px] text-[#132A4D] font-medium text-center max-w-[760px] leading-relaxed">
            {gpStatement}
          </div>
        </div>

        {/* Static 3-Column Value Cards: Remembered · Reminded · Recommended */}
        <section
          aria-label="Core Patient Experience Pillars"
          className="w-full max-w-[1000px] mt-9 md:mt-11 grid grid-cols-1 md:grid-cols-3 gap-4 text-left"
        >
          {/* Card 1: Remembered */}
          <article className="bg-white/95 backdrop-blur-md border border-blue-100/90 rounded-2xl p-5 sm:p-5.5 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06),0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <polyline points="16 11 18 13 22 9" />
                </svg>
              </div>
              <h3 className="text-[16px] sm:text-[16.5px] font-bold text-[#0B1B3A] tracking-tight">
                Remembered.
              </h3>
            </div>
            <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.6]">
              Greet every patient like you&apos;ve never forgotten them.
            </p>
          </article>

          {/* Card 2: Reminded */}
          <article className="bg-white/95 backdrop-blur-md border border-blue-100/90 rounded-2xl p-5 sm:p-5.5 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06),0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </div>
              <h3 className="text-[16px] sm:text-[16.5px] font-bold text-[#0B1B3A] tracking-tight">
                Reminded.
              </h3>
            </div>
            <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.6]">
              No patient slips away after the first visit. A gentle reminder brings them back on time.
            </p>
          </article>

          {/* Card 3: Recommended */}
          <article className="bg-white/95 backdrop-blur-md border border-blue-100/90 rounded-2xl p-5 sm:p-5.5 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06),0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-start">
            <div className="flex items-center gap-3 mb-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1D4ED8] shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-[16px] sm:text-[16.5px] font-bold text-[#0B1B3A] tracking-tight">
                Recommended.
              </h3>
            </div>
            <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.6]">
              Patients who feel known are the ones who tell their neighbours.
            </p>
          </article>
        </section>
      </div>
    </section>
  );
}
