import Link from "next/link";

export default function FeaturesSection() {
  const whatsappNumber = "94719382296";
  const whatsappMessage = encodeURIComponent("Hi, I would like to book a 20-minute demo for Suwenzo.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="bg-[linear-gradient(180deg,#F4F9FF_0%,#E6F0FD_100%)] pt-[72px] sm:pt-[100px] px-4 sm:px-6 pb-[80px] sm:pb-[110px] flex flex-col items-center relative overflow-hidden" id="features">
      {/* Ambient background glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[400px] sm:h-[600px] bg-gradient-to-b from-blue-100/40 via-blue-50/20 to-transparent blur-[120px] pointer-events-none rounded-full" />

      {/* Centered Heading Block matching design system */}
      <div className="text-center mb-10 sm:mb-[56px] max-w-[880px] mx-auto relative z-10">
        <span className="bg-[#0f172a] text-white py-1.5 sm:py-2 px-4 sm:px-5 rounded-full text-[0.8125rem] sm:text-[0.875rem] font-medium inline-block mb-5 sm:mb-8 tracking-[0.02em] shadow-xs uppercase">
          FEATURES
        </span>
        <h2 className="text-[1.85rem] sm:text-[clamp(2.25rem,4.5vw,3.15rem)] font-normal text-[#0B1B3A] leading-[1.18] sm:leading-[1.14] mb-3.5 sm:mb-5 tracking-[-0.03em] max-w-[880px] mx-auto">
          One system for the whole clinic, <br className="hidden sm:inline" />
          <span className="whitespace-normal sm:whitespace-nowrap">from the first visit to the follow-up</span>
        </h2>
        <p className="text-[1rem] sm:text-[1.125rem] text-[#475569] leading-[1.6] max-w-[620px] mx-auto">
          Start with the core flow. Add the rest when your clinic is ready.
        </p>
      </div>

      {/* Bento Grid Deck Architecture */}
      <div className="max-w-[1180px] w-full flex flex-col gap-5 sm:gap-6 relative z-10">

        {/* ================= TOP CARD: WIDE FLAGSHIP DECK (Feature 01: Records First!) ================= */}
        <div className="bg-white border border-blue-100/80 rounded-[22px] sm:rounded-[28px] p-5 sm:p-8 lg:p-10 shadow-[0_10px_35px_-8px_rgba(29,78,216,0.07),0_1px_3px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(29,78,216,0.12)] hover:border-blue-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full">
              <div>
                <span className="text-[11.5px] sm:text-[12px] font-bold text-[#1D4ED8] bg-blue-50 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-blue-100 inline-block mb-3.5 sm:mb-5 uppercase tracking-wider">
                  Feature / 01 · Records First
                </span>
                
                <h3 className="text-[1.5rem] sm:text-[1.85rem] lg:text-[2.1rem] font-bold text-[#0B1B3A] leading-[1.2] mb-3 sm:mb-4 tracking-[-0.02em]">
                  Patient records &amp; visit history
                </h3>
                
                <p className="text-[0.9375rem] sm:text-[1.05rem] text-[#475569] leading-[1.6] sm:leading-[1.65] mb-5 sm:mb-6">
                  Every visit on file, so no consultation starts from zero. See past diagnoses, prescriptions and notes in one place.
                </p>

                <div className="mb-6 sm:mb-8">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-5 py-3 rounded-full bg-[#1D4ED8] text-white font-semibold text-[14px] sm:text-[14.5px] shadow-[0_6px_20px_rgba(29,78,216,0.3)] hover:bg-[#1e40af] transition-all duration-200"
                  >
                    <span>See patient records demo</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

              {/* Bottom Specs Strip (Responsive Grid) */}
              <div className="pt-4 sm:pt-6 border-t border-slate-100 grid grid-cols-3 gap-2 sm:gap-3 text-center sm:text-left">
                <div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">Past Diagnoses</div>
                  <div className="text-[12.5px] sm:text-[14px] font-bold text-[#0B1B3A]">Chronic &amp; Acute</div>
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">Visit History</div>
                  <div className="text-[12.5px] sm:text-[14px] font-bold text-[#0B1B3A]">Full Timeline</div>
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5 sm:mb-1">Allergy Flag</div>
                  <div className="text-[12.5px] sm:text-[14px] font-bold text-amber-700">Safety Alerts</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Patient Dossier UI Mockup */}
            <div className="lg:col-span-7 flex flex-col items-center w-full">
              {/* Top Controls / Tabs */}
              <div className="flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 self-center lg:self-end">
                <span className="px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-medium bg-blue-50 text-[#1D4ED8] border border-blue-100 flex items-center gap-1.5 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  Patient Dossier
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-medium bg-slate-50 text-slate-600 border border-slate-200">
                  Past Diagnoses
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-medium bg-slate-50 text-slate-600 border border-slate-200">
                  Rx History
                </span>
              </div>

              {/* Realistic Patient File Card */}
              <div className="w-full max-w-[520px] bg-[#F8FAFC] border border-slate-200/90 rounded-[20px] p-4 sm:p-5 shadow-[0_16px_36px_-10px_rgba(29,78,216,0.12)]">
                {/* Header: Demographics */}
                <div className="flex items-start justify-between border-b border-slate-200 pb-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1D4ED8] font-bold flex items-center justify-center text-[13px] shrink-0 border border-blue-200">
                      KP
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-[14.5px] sm:text-[15.5px] font-bold text-[#0B1B3A]">Kamal Perera</h4>
                        <span className="text-[11px] bg-slate-100 text-slate-600 font-mono px-1.5 py-0.5 rounded">48 yrs · Male</span>
                        <span className="text-[10px] bg-blue-50 text-[#1D4ED8] font-mono px-1.5 py-0.5 rounded border border-blue-100">SUW-0428</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">+94 77 123 4567 · Colombo 05</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
                    Visit #4 Active
                  </span>
                </div>

                {/* Safety Alerts Strip */}
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <div className="bg-amber-50 border border-amber-200 text-amber-900 px-2.5 py-1 rounded-md text-[11px] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    <span><strong>Allergy:</strong> Penicillin (severe rash)</span>
                  </div>
                  <div className="bg-blue-50 border border-blue-100 text-[#1D4ED8] px-2.5 py-1 rounded-md text-[11px] font-medium">
                    <span><strong>Dx:</strong> Essential Hypertension (2024)</span>
                  </div>
                </div>

                {/* Chronological Visit Timeline */}
                <div className="space-y-2 mb-3">
                  {/* Current Visit */}
                  <div className="bg-white border border-blue-100 p-2.5 rounded-xl shadow-2xs">
                    <div className="flex items-center justify-between text-[11.5px] mb-1">
                      <span className="font-bold text-[#0B1B3A]">Visit 4 · Today (14:30)</span>
                      <span className="text-[10px] font-medium text-[#1D4ED8] bg-blue-50 px-1.5 py-0.2 rounded">Current Session</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mb-1.5">
                      <strong className="text-slate-800">Dx:</strong> Acute Bronchitis · <strong className="text-slate-800">Vitals:</strong> BP 128/82, HR 74, Temp 98.4°F
                    </p>
                    <div className="text-[10.5px] bg-slate-50 p-1.5 rounded border border-slate-100 flex items-center justify-between">
                      <span className="text-[#0B1B3A] font-medium">Azithromycin 500mg (1 OD) + Paracetamol (2 SOS)</span>
                      <span className="text-emerald-700 font-semibold text-[9.5px]">Stock on shelf (94)</span>
                    </div>
                  </div>

                  {/* Past Visit Record */}
                  <div className="bg-white/80 border border-slate-200/80 p-2 rounded-xl text-[11px] text-slate-500">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-semibold text-slate-700">Visit 3 · 18 Jul 2026</span>
                      <span className="text-[10px]">Dr. Perera</span>
                    </div>
                    <p className="text-[10.5px]">Routine review · BP 132/84 · Amlodipine 5mg renewed (30 tabs) · WhatsApp reminder completed</p>
                  </div>
                </div>

                {/* Doctor's Running Note */}
                <div className="bg-blue-50/60 border border-blue-100 rounded-lg p-2 text-[10.5px] text-slate-600 flex items-center justify-between">
                  <span><strong>Clinical note:</strong> Patient adherent to morning dose. Advised low salt diet.</span>
                  <span className="text-[#1D4ED8] font-semibold text-[10px] whitespace-nowrap ml-2">Synced</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ================= BOTTOM ROW: 3-COLUMN DECK ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {/* COLUMN 1: Feature / 02 (Digital prescription to dispensary - FLAGSHIP) */}
          <div className="bg-white border border-blue-100/80 rounded-[22px] sm:rounded-[28px] p-5 sm:p-7 shadow-[0_10px_35px_-8px_rgba(29,78,216,0.06),0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_45px_-10px_rgba(29,78,216,0.12)] hover:border-blue-200">
            <div>
              {/* Top Interactive UI Mockup */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-[18px] sm:rounded-[20px] p-3.5 sm:p-4 mb-5 sm:mb-6 shadow-2xs">
                {/* Tablet Rx Bar */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold text-[#0B1B3A]">Dispensary Queue</span>
                  </div>
                  <span className="text-[9.5px] font-mono bg-blue-50 text-[#1D4ED8] font-semibold px-1.5 py-0.5 rounded">
                    &lt; 0.2s sync
                  </span>
                </div>

                {/* Packet Label Preview */}
                <div className="bg-amber-50/70 border border-amber-200/90 rounded-xl p-2.5 mb-2.5 text-left shadow-2xs">
                  <div className="flex items-center justify-between border-b border-amber-200/60 pb-1 mb-1">
                    <span className="text-[9px] font-bold text-amber-800 uppercase tracking-wider">Thermal Packet Sticker</span>
                    <span className="text-[8.5px] font-mono text-amber-900 bg-white px-1 rounded border border-amber-200">Auto-Print</span>
                  </div>
                  <div className="text-[11px] font-bold text-slate-900">Amoxicillin 500mg</div>
                  <div className="text-[9px] text-slate-600 mt-0.5">1 cap TDS · After meals · 5 days</div>
                  <div className="text-[8.5px] text-slate-400 mt-1">Kamal Perera · Dr. Perera · Suwenzo</div>
                </div>

                <div className="bg-[#1D4ED8] text-white text-[10px] font-semibold py-1.5 px-2 rounded-lg text-center flex items-center justify-center gap-1 shadow-xs">
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Prescription confirmed · Label printed</span>
                </div>
              </div>

              {/* Eyebrow & Copy */}
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 inline-block mb-2 uppercase tracking-wider">
                Feature / 02 · Flagship
              </span>
              <h3 className="text-[1.2rem] sm:text-[1.28rem] font-bold text-[#0B1B3A] mb-2 leading-snug">
                Digital prescription to dispensary
              </h3>
              <p className="text-[0.9rem] sm:text-[0.9375rem] text-[#475569] leading-[1.6]">
                Write it once. It appears on the dispenser&apos;s screen within seconds, and a clear label prints for every packet.
              </p>
            </div>

            <div className="pt-3.5 sm:pt-4 mt-4 sm:mt-5 border-t border-slate-100 flex items-center text-[11.5px] sm:text-[12px] font-medium text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mr-2 shrink-0" />
              <span>Instant screen transmission · Zero handwriting to decode</span>
            </div>
          </div>

          {/* COLUMN 2: Feature / 03 (Live stock & expiry alerts) */}
          <div className="bg-white border border-blue-100/80 rounded-[22px] sm:rounded-[28px] p-5 sm:p-7 shadow-[0_10px_35px_-8px_rgba(29,78,216,0.06),0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_45px_-10px_rgba(29,78,216,0.12)] hover:border-blue-200">
            <div>
              {/* Top Interactive UI Mockup */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-[18px] sm:rounded-[20px] p-3.5 sm:p-4 mb-5 sm:mb-6 shadow-2xs">
                {/* Search Bar Mockup */}
                <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-2.5 sm:px-3 py-1.5 mb-2.5 sm:mb-3 text-[11.5px] sm:text-[12px] text-slate-400 shadow-2xs">
                  <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  <span className="text-[#0B1B3A] font-medium truncate">Search shelf stock...</span>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 mb-2.5 sm:mb-3">
                  <span className="text-[9.5px] sm:text-[10px] font-semibold bg-blue-50 text-[#1D4ED8] border border-blue-100 px-2 py-0.5 rounded-full">
                    In Stock (124)
                  </span>
                  <span className="text-[9.5px] sm:text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full">
                    Expiring &lt; 60d
                  </span>
                </div>

                {/* Medicine Items */}
                <div className="space-y-2">
                  <div className="bg-white p-2 sm:p-2.5 rounded-lg border border-slate-200 flex items-center justify-between shadow-2xs">
                    <div>
                      <div className="text-[11px] sm:text-[11.5px] font-bold text-[#0B1B3A]">Amoxicillin 500mg</div>
                      <div className="text-[9px] sm:text-[9.5px] text-slate-500">Shelf B-04 · 120 strips</div>
                    </div>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 shrink-0">
                      Live (120)
                    </span>
                  </div>

                  <div className="bg-white p-2 sm:p-2.5 rounded-lg border border-amber-200 flex items-center justify-between shadow-2xs">
                    <div>
                      <div className="text-[11px] sm:text-[11.5px] font-bold text-[#0B1B3A]">Ciprofloxacin 500</div>
                      <div className="text-[9px] sm:text-[9.5px] text-amber-600 font-medium">Expires in 28 days</div>
                    </div>
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 shrink-0">
                      Warning
                    </span>
                  </div>
                </div>
              </div>

              {/* Eyebrow & Copy */}
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 inline-block mb-2 uppercase tracking-wider">
                Feature / 03 · Inventory Safety
              </span>
              <h3 className="text-[1.2rem] sm:text-[1.28rem] font-bold text-[#0B1B3A] mb-2 leading-snug">
                Live stock &amp; expiry alerts
              </h3>
              <p className="text-[0.9rem] sm:text-[0.9375rem] text-[#475569] leading-[1.6]">
                See what&apos;s on the shelf before you prescribe, and get a warning before medicines expire.
              </p>
            </div>

            <div className="pt-3.5 sm:pt-4 mt-4 sm:mt-5 border-t border-slate-100 flex items-center text-[11.5px] sm:text-[12px] font-medium text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mr-2 shrink-0" />
              <span>Real-time shelf counts · 60-day auto warnings</span>
            </div>
          </div>

          {/* COLUMN 3: Feature / 04 (WhatsApp reminders) */}
          <div className="bg-white border border-blue-100/80 rounded-[22px] sm:rounded-[28px] p-5 sm:p-7 shadow-[0_10px_35px_-8px_rgba(29,78,216,0.06),0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_45px_-10px_rgba(29,78,216,0.12)] hover:border-blue-200">
            <div>
              {/* Top Interactive UI Mockup (WhatsApp Chat) */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-[18px] sm:rounded-[20px] p-3.5 sm:p-4 mb-5 sm:mb-6 shadow-2xs">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2.5 sm:mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold">
                      WA
                    </div>
                    <span className="text-[11px] sm:text-[11.5px] font-bold text-[#0B1B3A]">Kamal Perera (48)</span>
                  </div>
                  <span className="text-[9.5px] sm:text-[10px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Consent Active
                  </span>
                </div>

                {/* WhatsApp Message Preview Bubble */}
                <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-2.5 sm:p-3 text-left shadow-2xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9.5px] sm:text-[10px] font-bold text-emerald-800 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      WhatsApp Reminder
                    </span>
                    <span className="text-[8.5px] sm:text-[9px] text-emerald-700">09:30 AM</span>
                  </div>
                  <p className="text-[10.5px] sm:text-[11px] text-slate-700 leading-snug">
                    &ldquo;Hello Kamal, your 5-day Amoxicillin course ends tomorrow. Please reply if you need a follow-up review.&rdquo;
                  </p>
                </div>

                <div className="mt-2 sm:mt-2.5 flex items-center justify-between text-[9.5px] sm:text-[10px] text-slate-500 px-1">
                  <span>Delivered to +94 77 ••• ••••</span>
                  <span className="font-semibold text-emerald-700">✓✓ Read</span>
                </div>
              </div>

              {/* Eyebrow & Copy */}
              <span className="text-[11px] sm:text-[11.5px] font-bold text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100 inline-block mb-2 uppercase tracking-wider">
                Feature / 04 · Patient Retention
              </span>
              <h3 className="text-[1.2rem] sm:text-[1.28rem] font-bold text-[#0B1B3A] mb-2 leading-snug">
                WhatsApp reminders
              </h3>
              <p className="text-[0.9rem] sm:text-[0.9375rem] text-[#475569] leading-[1.6]">
                With the patient&apos;s consent, a reminder goes out when a course is ending, on the app patients already use.
              </p>
            </div>

            <div className="pt-3.5 sm:pt-4 mt-4 sm:mt-5 border-t border-slate-100 flex items-center text-[11.5px] sm:text-[12px] font-medium text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8] mr-2 shrink-0" />
              <span>Course completion nudge · Zero app download for patients</span>
            </div>
          </div>

        </div>

      </div>

      {/* Closing Link & Optional Billing Note */}
      <div className="text-center relative z-10 mt-10 sm:mt-14 space-y-2">
        <div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1D4ED8] font-semibold no-underline hover:underline inline-flex items-center gap-1.5 transition-colors text-[1rem] sm:text-[1.125rem]"
          >
            <span>See every feature in action</span> &rarr;
          </a>
        </div>
        <p className="text-[12.5px] sm:text-[13px] text-slate-400">
          Billing &amp; printed thermal receipts available for clinics requiring front-desk billing.
        </p>
      </div>
    </section>
  );
}
