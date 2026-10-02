export default function HowItWorks() {
  return (
    <section className="bg-white py-[96px] px-6 w-full flex flex-col items-center relative overflow-hidden" id="how-it-works">
      {/* Ambient background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-50/50 via-slate-50/20 to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* Centered Heading Block matching ProblemSection */}
      <div className="text-center mb-[60px] max-w-[700px] relative z-10">
        <span className="bg-[#0f172a] text-white py-2 px-5 rounded-full text-[0.875rem] font-medium inline-block mb-8 tracking-[0.02em]">
          HOW IT WORKS
        </span>
        <h2 className="text-[clamp(2.25rem,5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.1] mb-5 tracking-[-0.03em]">
          From prescription to packet in three steps
        </h2>
        <p className="text-[1.125rem] text-[#475569]">
          The same evening session, with the handwriting taken out.
        </p>
      </div>

      {/* ================= DESKTOP TRI-ORBITAL ARCHITECTURE (lg+) ================= */}
      <div className="hidden lg:flex flex-col items-center w-full max-w-[1240px] mx-auto relative z-10">
        {/* Top 3-Column Grid: Step 01 | Central Circular Node | Step 02 */}
        <div className="grid grid-cols-12 gap-6 items-center w-full">
          
          {/* STEP 01 (Left Column, 4 cols) */}
          <div className="col-span-4 flex flex-col items-end text-right pr-4 relative">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50/80 px-2.5 py-0.5 rounded-full border border-blue-100">
                Step 01
              </span>
              <div className="w-11 h-11 rounded-full bg-[#1D4ED8] text-white font-bold text-[16px] flex items-center justify-center shadow-[0_6px_16px_rgba(29,78,216,0.3)] ring-4 ring-blue-50">
                01
              </div>
            </div>

            <h3 className="text-[21px] font-bold text-[#0B1B3A] leading-snug mb-2.5">
              The doctor sees the history, then prescribes
            </h3>

            <p className="text-[15px] text-[#475569] leading-[1.6] mb-3.5 max-w-[340px]">
              Open the patient&apos;s past visits, then choose medicines from your own stock list with the quantity on the shelf beside each.
            </p>

            <div className="inline-flex items-center gap-2 text-[12.5px] font-medium text-[#1D4ED8] bg-blue-50/70 px-3 py-1.5 rounded-lg border border-blue-100/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
              <span>Past visits on file &middot; Shelf stock verified</span>
            </div>
          </div>

          {/* CENTRAL CIRCULAR HUB (Center Column, 4 cols) */}
          <div className="col-span-4 flex flex-col items-center justify-center relative">
            {/* Outer Circular Orbit Ring */}
            <div className="w-[360px] h-[360px] rounded-full border-2 border-dashed border-[#BFD7FF]/80 p-5 relative flex flex-col items-center justify-center bg-gradient-to-b from-blue-50/30 via-white to-blue-50/20 shadow-[0_20px_50px_-10px_rgba(29,78,216,0.12)]">
              {/* Concentric ambient ring */}
              <div className="absolute inset-3 rounded-full border border-slate-100 pointer-events-none" />

              {/* Orbital indicator nodes at cardinal points */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#1D4ED8] flex items-center justify-center shadow-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
              </div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#1D4ED8] flex items-center justify-center shadow-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-[#1D4ED8] flex items-center justify-center shadow-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
              </div>

              {/* Real Doctor Tablet Mockup */}
              <div className="w-[280px] bg-[#0F172A] rounded-[20px] p-2.5 shadow-[0_20px_45px_-10px_rgba(29,78,216,0.22)] border border-slate-700/90 z-10 transition-transform duration-300 hover:scale-[1.02]">
                <div className="bg-[#F8FAFC] rounded-[13px] p-3 text-left font-sans border border-slate-200/60 overflow-hidden">
                  {/* Tablet Top Bar */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span className="text-[11px] font-bold text-[#0B1B3A]">Suwenzo Rx &middot; Dr. Perera</span>
                    </div>
                    <span className="text-[10px] font-mono bg-blue-50 text-[#1D4ED8] px-1.5 py-0.5 rounded font-medium">
                      Kamal P. (48) &middot; Past visits live
                    </span>
                  </div>

                  {/* Medicine Row 1 */}
                  <div className="p-1.5 mb-1.5 rounded-md bg-white border border-blue-100 flex items-center justify-between shadow-2xs">
                    <div>
                      <div className="text-[11px] font-bold text-[#0B1B3A]">Amoxicillin 500mg</div>
                      <div className="text-[9.5px] text-slate-500">1 cap TDS &middot; 5 days</div>
                    </div>
                    <span className="text-[9.5px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                      120 on shelf
                    </span>
                  </div>

                  {/* Medicine Row 2 */}
                  <div className="p-1.5 mb-2 rounded-md bg-white border border-slate-100 flex items-center justify-between shadow-2xs">
                    <div>
                      <div className="text-[11px] font-medium text-slate-700">Paracetamol 500mg</div>
                      <div className="text-[9.5px] text-slate-400">2 tabs SOS</div>
                    </div>
                    <span className="text-[9.5px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                      480 on shelf
                    </span>
                  </div>

                  {/* Send Action */}
                  <div className="bg-[#1D4ED8] text-white text-[10.5px] font-semibold py-1.5 px-2 rounded-md text-center flex items-center justify-center gap-1">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Sent to Dispensary Screen</span>
                  </div>
                </div>
              </div>

              {/* Status Pill */}
              <div className="mt-3.5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/90 text-[11px] font-medium text-slate-600 z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Live Clinic Sync Active</span>
              </div>
            </div>
          </div>

          {/* STEP 02 (Right Column, 4 cols) */}
          <div className="col-span-4 flex flex-col items-start text-left pl-4 relative">
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-11 h-11 rounded-full bg-[#1D4ED8] text-white font-bold text-[16px] flex items-center justify-center shadow-[0_6px_16px_rgba(29,78,216,0.3)] ring-4 ring-blue-50">
                02
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50/80 px-2.5 py-0.5 rounded-full border border-blue-100">
                Step 02
              </span>
            </div>

            <h3 className="text-[21px] font-bold text-[#0B1B3A] leading-snug mb-2.5">
              The dispensary sees it within seconds
            </h3>

            <p className="text-[15px] text-[#475569] leading-[1.6] mb-3.5 max-w-[340px]">
              The prescription appears on the dispenser&apos;s screen the moment you confirm, with nothing to decode and nothing to re-type.
            </p>

            <div className="inline-flex items-center gap-2 text-[12.5px] font-medium text-emerald-700 bg-emerald-50/70 px-3 py-1.5 rounded-lg border border-emerald-100/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Instant screen transmission &middot; 0 errors</span>
            </div>
          </div>
        </div>

        {/* Vertical Connector Stem leading down to Step 03 */}
        <div className="w-[2px] h-10 border-l-2 border-dashed border-[#BFD7FF] my-2" />

        {/* STEP 03 (Centered Below, Max Width 480px) */}
        <div className="flex flex-col items-center text-center max-w-[500px] mx-auto pt-2">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-full bg-[#1D4ED8] text-white font-bold text-[16px] flex items-center justify-center shadow-[0_6px_16px_rgba(29,78,216,0.3)] ring-4 ring-blue-50">
              03
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
              Step 03
            </span>
          </div>

          <h3 className="text-[21px] font-[800] text-[#0B1B3A] leading-snug mb-2">
            The label prints, and the follow-up is set
          </h3>

          <p className="text-[15px] text-[#475569] leading-[1.6] mb-3.5 max-w-[450px]">
            Each packet gets a printed label, and with the patient&apos;s consent a WhatsApp reminder goes out when the course ends.
          </p>

          <div className="inline-flex items-center gap-2 text-[12.5px] font-medium text-slate-700 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            <span>Printed label &middot; Automated WhatsApp reminder</span>
          </div>
        </div>
      </div>

      {/* ================= MOBILE & TABLET LAYOUT (< lg) ================= */}
      <div className="lg:hidden flex flex-col items-center w-full max-w-[520px] mx-auto relative z-10 space-y-6">
        
        {/* STEP 01 CARD */}
        <div className="w-full bg-white border border-blue-100 rounded-[22px] p-5 sm:p-6 shadow-[0_8px_24px_-6px_rgba(29,78,216,0.06)] flex flex-col items-start text-left">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#1D4ED8] text-white font-bold text-[14px] flex items-center justify-center shadow-md ring-4 ring-blue-50">
              01
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
              Step 01
            </span>
          </div>

          <h3 className="text-[19px] font-bold text-[#0B1B3A] leading-snug mb-2">
            The doctor sees the history, then prescribes
          </h3>

          <p className="text-[14px] text-[#475569] leading-[1.6] mb-3">
            Open the patient&apos;s past visits, then choose medicines from your own stock list with the quantity on the shelf beside each.
          </p>

          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-[#1D4ED8] bg-blue-50/70 px-2.5 py-1 rounded-md border border-blue-100/70">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
            <span>Past visits on file &middot; Shelf stock verified</span>
          </div>
        </div>

        {/* Animated Connector Stem */}
        <div className="w-[2px] h-6 border-l-2 border-dashed border-[#BFD7FF]" />

        {/* CENTRAL CIRCULAR ORBIT HUB (Identical to Desktop, scaled for mobile) */}
        <div className="w-full flex flex-col items-center justify-center py-2">
          {/* Outer Circular Orbit Ring */}
          <div className="w-[310px] h-[310px] sm:w-[350px] sm:h-[350px] rounded-full border-2 border-dashed border-[#BFD7FF]/90 p-3 sm:p-4 relative flex flex-col items-center justify-center bg-gradient-to-b from-blue-50/40 via-white to-blue-50/20 shadow-[0_16px_40px_-10px_rgba(29,78,216,0.12)]">
            {/* Concentric ambient ring */}
            <div className="absolute inset-2.5 rounded-full border border-slate-100 pointer-events-none" />

            {/* Orbital indicator nodes at cardinal points */}
            <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1D4ED8] flex items-center justify-center shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
            </div>
            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1D4ED8] flex items-center justify-center shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
            </div>
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1D4ED8] flex items-center justify-center shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
            </div>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1D4ED8] flex items-center justify-center shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
            </div>

            {/* Doctor Tablet Mockup */}
            <div className="w-[260px] sm:w-[280px] bg-[#0F172A] rounded-[18px] p-2.5 shadow-[0_18px_40px_-8px_rgba(29,78,216,0.22)] border border-slate-700 z-10">
              <div className="bg-[#F8FAFC] rounded-[12px] p-2.5 text-left font-sans border border-slate-200/60">
                {/* Tablet Top Bar */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    <span className="text-[10.5px] font-bold text-[#0B1B3A]">Suwenzo Rx &middot; Dr. Perera</span>
                  </div>
                  <span className="text-[9.5px] font-mono bg-blue-50 text-[#1D4ED8] px-1.5 py-0.5 rounded font-medium">
                    Kamal P. (48) &middot; Past visits live
                  </span>
                </div>

                {/* Medicine Row 1 */}
                <div className="p-1.5 mb-1.5 rounded bg-white border border-blue-100 flex items-center justify-between shadow-2xs">
                  <div>
                    <div className="text-[10.5px] font-bold text-[#0B1B3A]">Amoxicillin 500mg</div>
                    <div className="text-[9px] text-slate-500">1 cap TDS &middot; 5 days</div>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                    120 on shelf
                  </span>
                </div>

                {/* Medicine Row 2 */}
                <div className="p-1.5 mb-2 rounded bg-white border border-slate-100 flex items-center justify-between shadow-2xs">
                  <div>
                    <div className="text-[10.5px] font-medium text-slate-700">Paracetamol 500mg</div>
                    <div className="text-[9px] text-slate-400">2 tabs SOS</div>
                  </div>
                  <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                    480 on shelf
                  </span>
                </div>

                {/* Action */}
                <div className="bg-[#1D4ED8] text-white text-[10px] font-semibold py-1.5 px-2 rounded-md text-center flex items-center justify-center gap-1">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Sent to Dispensary Screen</span>
                </div>
              </div>
            </div>

            {/* Status Pill */}
            <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[10.5px] font-medium text-slate-600 z-10 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Live Clinic Sync Active</span>
            </div>
          </div>
        </div>

        {/* Animated Connector Stem */}
        <div className="w-[2px] h-6 border-l-2 border-dashed border-[#BFD7FF]" />

        {/* STEP 02 CARD */}
        <div className="w-full bg-white border border-blue-100 rounded-[22px] p-5 sm:p-6 shadow-[0_8px_24px_-6px_rgba(29,78,216,0.06)] flex flex-col items-start text-left">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#1D4ED8] text-white font-bold text-[14px] flex items-center justify-center shadow-md ring-4 ring-blue-50">
              02
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
              Step 02
            </span>
          </div>

          <h3 className="text-[19px] font-bold text-[#0B1B3A] leading-snug mb-2">
            The dispensary sees it within seconds
          </h3>

          <p className="text-[14px] text-[#475569] leading-[1.6] mb-3">
            The prescription appears on the dispenser&apos;s screen the moment you confirm, with nothing to decode and nothing to re-type.
          </p>

          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-emerald-700 bg-emerald-50/70 px-2.5 py-1 rounded-md border border-emerald-100/70">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>Instant screen transmission &middot; 0 errors</span>
          </div>
        </div>

        {/* Animated Connector Stem */}
        <div className="w-[2px] h-6 border-l-2 border-dashed border-[#BFD7FF]" />

        {/* STEP 03 CARD */}
        <div className="w-full bg-white border border-slate-200/90 rounded-[22px] p-5 sm:p-6 shadow-[0_8px_24px_-6px_rgba(29,78,216,0.06)] flex flex-col items-start text-left">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-9 h-9 rounded-full bg-[#1D4ED8] text-white font-bold text-[14px] flex items-center justify-center shadow-md ring-4 ring-blue-50">
              03
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
              Step 03
            </span>
          </div>

          <h3 className="text-[19px] font-bold text-[#0B1B3A] leading-snug mb-2">
            The label prints, and the follow-up is set
          </h3>

          <p className="text-[14px] text-[#475569] leading-[1.6] mb-3">
            Each packet gets a printed label, and with the patient&apos;s consent a WhatsApp reminder goes out when the course ends.
          </p>

          <div className="inline-flex items-center gap-2 text-[12px] font-medium text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            <span>Printed label &middot; Automated WhatsApp reminder</span>
          </div>
        </div>

      </div>

      {/* ================= CLOSING UNIFIED CALLOUT CARD ================= */}
      <div className="mt-14 lg:mt-16 w-full max-w-[880px] mx-auto relative z-10 px-4">
        <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center shadow-xs">
          
          {/* Setup Included */}
          <div className="flex items-start gap-3 text-left">
            <div className="w-7 h-7 rounded-lg bg-blue-100/80 text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="text-[13.5px] leading-snug">
              <span className="font-bold text-[#0B1B3A] mr-1.5">Setup included:</span>
              <span className="text-[#475569]">We help you set up your stock list, so you start with a working system.</span>
            </div>
          </div>

          {/* No Dispensary */}
          <div className="flex items-start gap-3 text-left md:border-l md:border-slate-200/80 md:pl-6">
            <div className="w-7 h-7 rounded-lg bg-slate-200/70 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div className="text-[13.5px] leading-snug">
              <span className="font-bold text-[#0B1B3A] mr-1.5">No dispensary?</span>
              <span className="text-[#475569]">Prescribe from the full medicine list and give the patient a printed or WhatsApp prescription.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
