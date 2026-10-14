import Image from "next/image";

export default function VideoSection() {
  const stations = [
    {
      id: "doctor",
      title: "Doctor's Desk",
      role: "Prescribe",
      summary: "Doctor prescribes digitally on tablet. Real-time stock check before signing off.",
      snippet: "Amoxicillin 500mg · 1 cap TDS · In stock: 120",
      accent: "text-[#1D4ED8] bg-blue-50 border-blue-100",
    },
    {
      id: "dispensary",
      title: "Dispensary",
      role: "Labels & Stock",
      summary: "Screen sync in seconds. Thermal packet labels auto-print with dosage instructions.",
      snippet: "Packet sticker auto-printed · Stock deducted live",
      accent: "text-[#1D4ED8] bg-blue-50 border-blue-100",
    },
    {
      id: "records",
      title: "Patient Record",
      role: "History",
      summary: "Every visit and prescription stays on file. Consultations don't start from scratch.",
      snippet: "Sample patient (48) · 4 prior visits · Full history on file",
      accent: "text-emerald-700 bg-emerald-50 border-emerald-100",
    },
    {
      id: "reminders",
      title: "Reminders",
      role: "WhatsApp",
      summary: "Automated follow-up message when medicine ends, ensuring patients return on time.",
      snippet: "“Hello, your 5-day course ends tomorrow.”",
      accent: "text-emerald-700 bg-emerald-50 border-emerald-100",
    },
  ];

  return (
    <section
      id="what-is-suwenzo"
      className="relative bg-[#FAFCFF] w-full flex flex-col items-center px-4 sm:px-6 pt-14 sm:pt-16 pb-20 sm:pb-28 overflow-hidden"
    >
      {/* Soft continuous ambient gradient tone bridging seamlessly from Hero */}
      <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-[#EBF3FE]/35 via-[#FAFCFF]/60 to-transparent pointer-events-none" />

      {/* ================= HEADER BLOCK ================= */}
      <div className="relative z-10 text-center mb-[48px] sm:mb-[56px] max-w-[760px] mx-auto">
        <span className="bg-[#0f172a] text-white py-2 px-5 rounded-full text-[0.875rem] font-medium inline-block mb-6 sm:mb-8 tracking-[0.02em] shadow-xs uppercase">
          WHAT IS SUWENZO?
        </span>

        <h2 className="text-[clamp(2.25rem,5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.1] mb-5 tracking-[-0.03em]">
          One system for the desk, the records, and the dispensary
        </h2>

        <p className="text-[1.125rem] text-[#475569] leading-[1.65]">
          Suwenzo is clinic software for Sri Lanka that connects the doctor&apos;s desk,
          patient records and dispensary in one system, with WhatsApp reminders so patients return on time.
        </p>
      </div>

      {/* ================= UNIFIED RESPONSIVE ARCHITECTURE (Rendered Once) ================= */}
      <div className="w-full max-w-[1140px] mx-auto relative z-10 flex flex-col gap-5 sm:gap-6">
        {/* Central Hub Connector Bar */}
        <div className="bg-white border border-slate-200/90 rounded-[22px] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-[0_4px_20px_-4px_rgba(29,78,216,0.06)]">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-[12px] p-[1.5px] bg-gradient-to-tr from-[#1D4ED8] via-[#3B82F6] to-[#93C5FD] shadow-[0_2px_8px_rgba(29,78,216,0.2)] shrink-0 flex items-center justify-center">
              <div className="w-full h-full rounded-[10.5px] bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src="/swlogocopy.svg"
                  alt="Suwenzo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="text-left">
              <div className="text-[16px] font-extrabold text-[#0B1B3A] tracking-tight">
                Suwenzo Connected Core
              </div>
              <div className="text-[12px] text-slate-500">
                Single clinic file &middot; Continuous outpatient workflow
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11.5px] font-semibold text-[#1D4ED8] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              4 Core Stations
            </span>
            <span className="text-[11.5px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              Live Clinic Sync
            </span>
          </div>
        </div>

        {/* 4 Connected Stations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stations.map((s, index) => (
            <div
              key={s.id}
              className="bg-white border border-slate-200/90 hover:border-blue-200 rounded-[20px] p-5 shadow-[0_4px_16px_-4px_rgba(29,78,216,0.04)] hover:shadow-[0_10px_28px_-6px_rgba(29,78,216,0.09)] transition-all duration-200 flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    0{index + 1}
                  </span>
                  <span
                    className={`text-[10.5px] font-semibold px-2 py-0.5 rounded border ${s.accent}`}
                  >
                    {s.role}
                  </span>
                </div>

                <h3 className="text-[16px] font-bold text-[#0B1B3A] mb-2 leading-snug">
                  {s.title}
                </h3>

                <p className="text-[13px] text-slate-600 leading-relaxed mb-4">
                  {s.summary}
                </p>
              </div>

              <div className="text-[11px] font-mono text-slate-500 bg-slate-50 border border-slate-100 p-2.5 rounded-xl">
                {s.snippet}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
