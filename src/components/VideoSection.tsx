import Image from "next/image";

export default function VideoSection() {
  const stations = [
    {
      id: "doctor",
      title: "Doctor's Desk",
      role: "Prescribe",
      summary: "Doctor prescribes digitally on tablet. Real-time stock check before signing off.",
      snippet: "Amoxicillin 500mg · 1 cap TDS · In stock: 120",
    },
    {
      id: "dispensary",
      title: "Dispensary",
      role: "Labels & Stock",
      summary: "Screen sync in seconds. Thermal packet labels auto-print with dosage instructions.",
      snippet: "Packet sticker auto-printed · Stock deducted live",
    },
    {
      id: "records",
      title: "Patient Record",
      role: "History",
      summary: "Every visit and prescription stays on file. Consultations don't start from scratch.",
      snippet: "Kamal Perera (48) · 4 prior visits · Full history on file",
    },
    {
      id: "reminders",
      title: "Reminders",
      role: "WhatsApp",
      summary: "Automated follow-up message when medicine ends, ensuring patients return on time.",
      snippet: "“Hello Kamal, your 5-day course ends tomorrow.”",
    },
  ];

  return (
    <section
      id="what-is-suwenzo"
      className="relative bg-[#FAFCFF] w-full flex flex-col items-center px-4 sm:px-6 pt-14 sm:pt-16 pb-20 sm:pb-28 overflow-hidden"
    >
      {/* Soft continuous ambient gradient tone bridging seamlessly from Hero */}
      <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-[#EBF3FE]/35 via-[#FAFCFF]/60 to-transparent pointer-events-none" />

      {/* ================= HEADER BLOCK (MATCHING THE SITE DESIGN SYSTEM) ================= */}
      <div className="relative z-10 text-center mb-[56px] sm:mb-[60px] max-w-[760px] mx-auto">
        <span className="bg-[#0f172a] text-white py-2 px-5 rounded-full text-[0.875rem] font-medium inline-block mb-8 tracking-[0.02em] shadow-xs uppercase">
          WHAT IS SUWENZO?
        </span>

        <h2 className="text-[clamp(2.25rem,5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.1] mb-5 tracking-[-0.03em]">
          One system for the desk, the records, and the dispensary
        </h2>

        <p className="text-[1.125rem] text-[#475569] leading-[1.65]">
          Suwenzo is clinic software for Sri Lanka that connects the doctor&apos;s desk,
          patient records and dispensary in one system. Every visit stays on file, prescriptions
          reach the dispensary within seconds, and patients get a reminder when it&apos;s time
          to come back.
        </p>
      </div>

      {/* ================= THE CIRCLE & FOUR SPOKES ARCHITECTURAL INFOGRAPHIC ================= */}
      <div className="w-full max-w-[1060px] mx-auto">
        
        {/* DESKTOP & TABLET: THE 4-SPOKE RADIAL DIAGRAM (md+) */}
        <div className="hidden md:block relative w-full h-[500px] lg:h-[520px] bg-white rounded-3xl border border-slate-200/80 p-8 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.04)] overflow-hidden">
          
          {/* Subtle Hairline Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.4] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#CBD5E1 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* SVG Connector Spokes - Clean, Steady, Permanent */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Top-Left: Doctor */}
            <line
              x1="500"
              y1="250"
              x2="280"
              y2="110"
              stroke="#BFDBFE"
              strokeWidth="2"
            />
            {/* Top-Right: Dispensary */}
            <line
              x1="500"
              y1="250"
              x2="720"
              y2="110"
              stroke="#BFDBFE"
              strokeWidth="2"
            />
            {/* Bottom-Left: Records */}
            <line
              x1="500"
              y1="250"
              x2="280"
              y2="390"
              stroke="#BFDBFE"
              strokeWidth="2"
            />
            {/* Bottom-Right: Reminders */}
            <line
              x1="500"
              y1="250"
              x2="720"
              y2="390"
              stroke="#BFDBFE"
              strokeWidth="2"
            />
          </svg>

          {/* ================= CENTER NUCLEUS: SUWENZO CIRCLE ================= */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-[180px] h-[180px] rounded-full bg-white border-2 border-blue-100 shadow-[0_12px_32px_-6px_rgba(11,27,58,0.06)] flex flex-col items-center justify-center p-4 text-center">
              <div className="w-11 h-11 rounded-[12px] p-[1.5px] bg-gradient-to-tr from-[#1D4ED8] via-[#3B82F6] to-[#93C5FD] shadow-[0_4px_12px_rgba(29,78,216,0.2)] shrink-0 flex items-center justify-center mb-1.5">
                <div className="w-full h-full rounded-[10.5px] bg-white flex items-center justify-center p-1 overflow-hidden">
                  <Image
                    src="/logo-mark.png"
                    alt="Suwenzo"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <span className="text-[18px] font-extrabold text-[#0B1B3A] tracking-tight">
                Suwenzo
              </span>
              <span className="text-[11px] font-medium text-slate-500 mt-0.5">
                Single clinic file
              </span>
              <div className="mt-2 text-[10.5px] font-semibold text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                Connected Core
              </div>
            </div>
          </div>

          {/* SPOKE 1: DOCTOR'S DESK (Top-Left) */}
          <div className="absolute top-4 left-4 lg:left-8 w-[280px] lg:w-[300px] z-10">
            <div className="w-full text-left p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-[15px] font-bold text-[#0B1B3A]">Doctor&apos;s Desk</div>
                <span className="text-[11px] font-semibold text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded">
                  Prescribe
                </span>
              </div>
              <p className="text-[12.5px] text-slate-600 leading-snug mb-2.5">
                Doctor prescribes digitally on tablet. Real-time stock check before signing off.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded">
                Amoxicillin 500mg &middot; 1 cap TDS &middot; In stock: 120
              </div>
            </div>
          </div>

          {/* SPOKE 2: DISPENSARY (Top-Right) */}
          <div className="absolute top-4 right-4 lg:right-8 w-[280px] lg:w-[300px] z-10">
            <div className="w-full text-left p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-[15px] font-bold text-[#0B1B3A]">Dispensary</div>
                <span className="text-[11px] font-semibold text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded">
                  Labels &amp; Stock
                </span>
              </div>
              <p className="text-[12.5px] text-slate-600 leading-snug mb-2.5">
                Screen sync in seconds. Thermal packet labels auto-print with dosage instructions.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded">
                Packet sticker auto-printed &middot; Stock deducted live
              </div>
            </div>
          </div>

          {/* SPOKE 3: PATIENT RECORD (Bottom-Left) */}
          <div className="absolute bottom-4 left-4 lg:left-8 w-[280px] lg:w-[300px] z-10">
            <div className="w-full text-left p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-[15px] font-bold text-[#0B1B3A]">Patient Record</div>
                <span className="text-[11px] font-semibold text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded">
                  History
                </span>
              </div>
              <p className="text-[12.5px] text-slate-600 leading-snug mb-2.5">
                Every visit and prescription stays on file. Consultations don&apos;t start from scratch.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded">
                Kamal Perera (48) &middot; 4 prior visits &middot; Full history on file
              </div>
            </div>
          </div>

          {/* SPOKE 4: REMINDERS (Bottom-Right) */}
          <div className="absolute bottom-4 right-4 lg:right-8 w-[280px] lg:w-[300px] z-10">
            <div className="w-full text-left p-4.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="flex items-center justify-between mb-1.5">
                <div className="text-[15px] font-bold text-[#0B1B3A]">Reminders</div>
                <span className="text-[11px] font-semibold text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded">
                  WhatsApp
                </span>
              </div>
              <p className="text-[12.5px] text-slate-600 leading-snug mb-2.5">
                Automated follow-up message when medicine ends, ensuring patients return on time.
              </p>
              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded truncate">
                &ldquo;Hello Kamal, your 5-day course ends tomorrow.&rdquo;
              </div>
            </div>
          </div>

        </div>

        {/* MOBILE STACKED CLEAN ARCHITECTURE (< md) */}
        <div className="md:hidden flex flex-col gap-3.5">
          {/* Central Anchor */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4.5 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-[10px] p-[1.5px] bg-gradient-to-tr from-[#1D4ED8] via-[#3B82F6] to-[#93C5FD] shadow-[0_2px_8px_rgba(29,78,216,0.2)] shrink-0 flex items-center justify-center">
                <div className="w-full h-full rounded-[8.5px] bg-white flex items-center justify-center p-0.5 overflow-hidden">
                  <Image
                    src="/logo-mark.png"
                    alt="Suwenzo"
                    width={30}
                    height={30}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <div className="text-[15px] font-bold text-[#0B1B3A]">Suwenzo</div>
                <div className="text-[11px] text-slate-500">Connected Clinic File</div>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-[#1D4ED8] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              4 Touchpoints
            </span>
          </div>

          {/* The 4 Stations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stations.map((s) => (
              <div
                key={s.id}
                className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs text-left"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="text-[14px] font-bold text-[#0B1B3A]">{s.title}</div>
                  <span className="text-[10.5px] font-semibold text-[#1D4ED8] bg-blue-50 px-2 py-0.5 rounded">
                    {s.role}
                  </span>
                </div>
                <p className="text-[12.5px] text-slate-600 leading-snug mb-2.5">
                  {s.summary}
                </p>
                <div className="text-[10.5px] font-mono text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded truncate">
                  {s.snippet}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
