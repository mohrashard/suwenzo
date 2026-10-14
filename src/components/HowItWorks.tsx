export default function HowItWorks() {
  return (
    <section
      className="bg-white py-[96px] px-4 sm:px-6 w-full flex flex-col items-center relative overflow-hidden"
      id="how-it-works"
    >
      {/* Ambient background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-50/50 via-slate-50/20 to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* Centered Heading Block matching site typography */}
      <div className="text-center mb-[50px] sm:mb-[60px] max-w-[700px] relative z-10">
        <span className="bg-[#0f172a] text-white py-2 px-5 rounded-full text-[0.875rem] font-medium inline-block mb-6 sm:mb-8 tracking-[0.02em]">
          HOW IT WORKS
        </span>
        <h2 className="text-[clamp(2.25rem,5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.1] mb-5 tracking-[-0.03em]">
          From prescription to packet in three steps
        </h2>
        <p className="text-[1.125rem] text-[#475569]">
          The same evening session, with the handwriting taken out.
        </p>
      </div>

      {/* ================= UNIFIED RESPONSIVE ARCHITECTURE (Rendered Once) ================= */}
      <div className="flex flex-col items-center w-full max-w-[1240px] mx-auto relative z-10">
        {/* Top 3-Station Flow: Step 01 | Central Circular Orbit Node | Step 02 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* STEP 01 */}
          <div className="order-1 lg:col-span-4 flex flex-col items-start lg:items-end text-left lg:text-right px-2 lg:pr-4 relative">
            <div className="flex items-center gap-3 mb-3.5">
              <span className="order-2 lg:order-1 text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50/80 px-2.5 py-0.5 rounded-full border border-blue-100">
                Step 01
              </span>
              <div className="order-1 lg:order-2 w-11 h-11 rounded-full bg-[#1D4ED8] text-white font-bold text-[16px] flex items-center justify-center shadow-[0_6px_16px_rgba(29,78,216,0.3)] ring-4 ring-blue-50 shrink-0">
                01
              </div>
            </div>

            <h3 className="text-[20px] sm:text-[21px] font-bold text-[#0B1B3A] leading-snug mb-2.5">
              The doctor sees the history, then prescribes
            </h3>

            <p className="text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.6] mb-3.5 max-w-[340px]">
              Open the patient&apos;s past visits, then choose medicines from your own stock list with the quantity on the shelf beside each.
            </p>

            <div className="inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] font-medium text-[#1D4ED8] bg-blue-50/70 px-3 py-1.5 rounded-lg border border-blue-100/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
              <span>Past visits on file &middot; Shelf stock verified</span>
            </div>
          </div>

          {/* CENTRAL CIRCULAR HUB (Mockup) */}
          <div className="order-2 lg:col-span-4 flex flex-col items-center justify-center relative py-4 lg:py-0">
            {/* Outer Circular Orbit Ring */}
            <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full border-2 border-dashed border-[#BFD7FF]/80 p-4 sm:p-5 relative flex flex-col items-center justify-center bg-gradient-to-b from-blue-50/30 via-white to-blue-50/20 shadow-[0_20px_50px_-10px_rgba(29,78,216,0.12)]">
              {/* Concentric ambient ring */}
              <div className="absolute inset-2.5 sm:inset-3 rounded-full border border-slate-100 pointer-events-none" />

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

              {/* Doctor Tablet Mockup */}
              <div className="w-[260px] sm:w-[280px] bg-[#0F172A] rounded-[20px] p-2.5 shadow-[0_20px_45px_-10px_rgba(29,78,216,0.22)] border border-slate-700/90 z-10 transition-transform duration-300 hover:scale-[1.02]">
                <div className="bg-[#F8FAFC] rounded-[13px] p-3 text-left font-sans border border-slate-200/60 overflow-hidden">
                  {/* Tablet Top Bar */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      <span className="text-[11px] font-bold text-[#0B1B3A]">
                        Suwenzo Rx &middot; Dr. Perera
                      </span>
                    </div>
                    <span className="text-[9.5px] font-mono bg-blue-50 text-[#1D4ED8] px-1.5 py-0.5 rounded font-medium">
                      Sample patient (48)
                    </span>
                  </div>

                  {/* Medicine Row 1 */}
                  <div className="p-1.5 mb-1.5 rounded-md bg-white border border-blue-100 flex items-center justify-between shadow-2xs">
                    <div>
                      <div className="text-[11px] font-bold text-[#0B1B3A]">
                        Amoxicillin 500mg
                      </div>
                      <div className="text-[9.5px] text-slate-500">
                        1 cap TDS &middot; 5 days
                      </div>
                    </div>
                    <span className="text-[9.5px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                      120 on shelf
                    </span>
                  </div>

                  {/* Medicine Row 2 */}
                  <div className="p-1.5 mb-2 rounded-md bg-white border border-slate-100 flex items-center justify-between shadow-2xs">
                    <div>
                      <div className="text-[11px] font-medium text-slate-700">
                        Paracetamol 500mg
                      </div>
                      <div className="text-[9.5px] text-slate-400">
                        2 tabs SOS
                      </div>
                    </div>
                    <span className="text-[9.5px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                      480 on shelf
                    </span>
                  </div>

                  {/* Send Action */}
                  <div className="bg-[#1D4ED8] text-white text-[10.5px] font-semibold py-1.5 px-2 rounded-md text-center flex items-center justify-center gap-1">
                    <svg
                      className="w-3 h-3 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Sent to Dispensary Screen</span>
                  </div>
                </div>
              </div>

              {/* Status Pill */}
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/90 text-[11px] font-medium text-slate-600 z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Live Clinic Sync Active</span>
              </div>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="order-3 lg:col-span-4 flex flex-col items-start text-left px-2 lg:pl-4 relative">
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-11 h-11 rounded-full bg-[#1D4ED8] text-white font-bold text-[16px] flex items-center justify-center shadow-[0_6px_16px_rgba(29,78,216,0.3)] ring-4 ring-blue-50 shrink-0">
                02
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50/80 px-2.5 py-0.5 rounded-full border border-blue-100">
                Step 02
              </span>
            </div>

            <h3 className="text-[20px] sm:text-[21px] font-bold text-[#0B1B3A] leading-snug mb-2.5">
              The dispensary sees it within seconds
            </h3>

            <p className="text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.6] mb-3.5 max-w-[340px]">
              The prescription appears on the dispenser&apos;s screen the moment you confirm, with nothing to decode and nothing to re-type.
            </p>

            <div className="inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] font-medium text-emerald-700 bg-emerald-50/70 px-3 py-1.5 rounded-lg border border-emerald-100/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Prescriptions appear on dispensary screen within seconds</span>
            </div>
          </div>
        </div>

        {/* Vertical Connector Stem leading down to Step 03 */}
        <div className="w-[2px] h-10 border-l-2 border-dashed border-[#BFD7FF] my-4" />

        {/* STEP 03 */}
        <div className="flex flex-col items-center text-center max-w-[500px] mx-auto pt-2 px-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-11 h-11 rounded-full bg-[#1D4ED8] text-white font-bold text-[16px] flex items-center justify-center shadow-[0_6px_16px_rgba(29,78,216,0.3)] ring-4 ring-blue-50 shrink-0">
              03
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
              Step 03
            </span>
          </div>

          <h3 className="text-[20px] sm:text-[21px] font-[800] text-[#0B1B3A] leading-snug mb-2">
            The label prints, and the follow-up is set
          </h3>

          <p className="text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.6] mb-3.5 max-w-[450px]">
            Each packet gets a printed label, and with the patient&apos;s consent a WhatsApp reminder goes out when the course ends.
          </p>

          <div className="inline-flex items-center gap-2 text-[12px] sm:text-[12.5px] font-medium text-slate-700 bg-slate-50 px-3.5 py-1.5 rounded-lg border border-slate-200/80">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            <span>Printed label &middot; Automated WhatsApp reminder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
