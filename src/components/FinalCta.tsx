"use client";

export default function FinalCta() {
  const whatsappUrl =
    "https://wa.me/94719382296?text=Hi%2C%20I%27d%20like%20a%2020-minute%20Suwenzo%20demo%20for%20my%20clinic.";

  const handleCtaClick = (buttonName: string) => {
    if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
      (window as unknown as { gtag: Function }).gtag("event", "demo_booking_click", {
        event_category: "Conversion",
        event_label: buttonName,
      });
    }
  };

  return (
    <section className="bg-white py-[96px] sm:py-[115px] px-4 sm:px-6 w-full flex flex-col items-center relative overflow-hidden" id="demo">
      {/* Ambient background soft glow matching other white sections */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-blue-50/50 blur-[130px] pointer-events-none rounded-full" />

      {/* Centered Heading Block matching Problem, HowItWorks, Features & Pricing */}
      <div className="text-center mb-10 sm:mb-12 max-w-[760px] relative z-10">
        <span className="bg-[#0f172a] text-white py-1.5 sm:py-2 px-4 sm:px-5 rounded-full text-[0.8125rem] sm:text-[0.875rem] font-medium inline-block mb-6 sm:mb-8 tracking-[0.02em] shadow-xs uppercase">
          DEMO
        </span>
        <h2 className="text-[1.85rem] sm:text-[clamp(2.25rem,5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.15] sm:leading-[1.1] mb-5 tracking-[-0.03em]">
          See it in your clinic in 20 minutes
        </h2>
        <p className="text-[1.05rem] sm:text-[1.125rem] text-[#475569] leading-[1.65]">
          Book a short demo and watch a prescription reach the dispensary screen, then the label print. No commitment. The first 10 founding clinics in Colombo get 3 months free.
        </p>
      </div>

      {/* Flagship Suwenzo Showcase Card (Consistent with site design language) */}
      <div className="max-w-[1040px] w-full bg-gradient-to-b from-[#F4F9FF] to-[#EAF3FE] border border-blue-200/90 rounded-[28px] sm:rounded-[36px] p-7 sm:p-12 shadow-[0_16px_45px_-8px_rgba(29,78,216,0.1),0_1px_3px_rgba(0,0,0,0.02)] relative overflow-hidden z-10">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-blue-200/35 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
          
          {/* Left Column: CTA Actions & Trust Badges (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Live Founder Badge */}
            <div className="inline-flex items-center gap-2 text-[12px] font-bold text-[#1D4ED8] bg-white border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Founding Clinic Offer &middot; 10 Seats Free</span>
            </div>

            <h3 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug tracking-tight">
              Ready to test the prescription-to-dispensary flow?
            </h3>

            <p className="text-[0.95rem] sm:text-[1rem] text-[#475569] leading-relaxed mb-6 max-w-[500px]">
              We walk you through the tablet, print a live thermal label, and answer any questions about your current setup.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCtaClick("Book Demo Primary")}
                className="w-full sm:w-auto bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-7 py-3.5 rounded-full text-[15px] sm:text-[15.5px] shadow-[0_6px_20px_rgba(29,78,216,0.3)] transition-all duration-200 hover:scale-[1.02] text-center"
              >
                Book a 20-minute demo
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCtaClick("Message WhatsApp Secondary")}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#0B1B3A] border border-slate-200/90 font-semibold px-6 py-3.5 rounded-full text-[15px] sm:text-[15.5px] transition-all duration-200 flex items-center justify-center gap-2 text-center shadow-2xs"
              >
                <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Message us on WhatsApp</span>
              </a>
            </div>

            {/* Small Line Under Buttons */}
            <p className="text-[12.5px] sm:text-[13px] text-[#475569] font-medium">
              Built for private clinics and medical practices with an in-house dispensary. We can demo at your clinic.
            </p>
          </div>

          {/* Right Column: 20-Minute Demo Timeline (5 cols) */}
          <div className="lg:col-span-5 w-full bg-white border border-blue-100 rounded-[22px] p-5 sm:p-6 shadow-sm text-left">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <span className="text-[11.5px] font-bold text-slate-400 uppercase tracking-wider">
                What to expect
              </span>
              <span className="text-[11px] font-semibold text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                20 mins
              </span>
            </div>

            <div className="space-y-3.5 text-[13.5px]">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5 border border-blue-100">
                  1
                </div>
                <div>
                  <div className="font-bold text-[#0B1B3A]">Prescribe on the tablet</div>
                  <div className="text-slate-500 text-[12.5px]">See live stock beside each medicine as you write.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-50 text-[#1D4ED8] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5 border border-blue-100">
                  2
                </div>
                <div>
                  <div className="font-bold text-[#0B1B3A]">Instant dispensary sync</div>
                  <div className="text-slate-500 text-[12.5px]">Appears on the screen in &lt; 0.2s with zero handwriting.</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5 border border-emerald-200">
                  3
                </div>
                <div>
                  <div className="font-bold text-[#0B1B3A]">Auto-print thermal label</div>
                  <div className="text-slate-500 text-[12.5px]">Clear patient name, medicine, dose &amp; instructions.</div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11.5px] text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Zero installation required &middot; Works in any browser</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
