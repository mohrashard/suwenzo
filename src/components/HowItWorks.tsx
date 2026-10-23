import Link from "next/link";

export default function HowItWorks() {
  return (
    <section
      className="bg-white py-[84px] sm:py-[104px] px-4 sm:px-6 w-full flex flex-col items-center relative overflow-hidden"
      id="how-it-works"
    >
      {/* Ambient background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-50/50 via-slate-50/20 to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* Centered Heading Block */}
      <div className="text-center mb-[40px] sm:mb-[52px] max-w-[800px] relative z-10">
        <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 sm:mb-6 tracking-[0.02em] uppercase">
          HOW IT WORKS
        </span>
        <h2 className="text-[clamp(2rem,4.5vw,3.15rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-4 tracking-[-0.03em]">
          How Suwenzo works: from prescription to follow-up
        </h2>
        <p className="text-[1.05rem] text-[#475569]">
          The same evening session, with handwriting and lost notes taken out.
        </p>
      </div>

      <div className="flex flex-col items-center w-full max-w-[1140px] mx-auto relative z-10">
        {/* H3: What is Suwenzo? Answer Block (40-60 words) */}
        <div className="w-full max-w-[860px] bg-blue-50/70 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-10 text-left">
          <h3 className="text-[17px] sm:text-[18px] font-bold text-[#0B1B3A] mb-2">
            What is Suwenzo?
          </h3>
          <p className="text-[14.5px] sm:text-[15.5px] text-[#1E293B] leading-[1.65]">
            Suwenzo replaces paper prescriptions, handwritten labels and the drawer of phone numbers. The doctor sees the patient&apos;s history and live stock, prescribes on a tablet, and the dispensary screen receives it within seconds. A label prints, and with consent a WhatsApp reminder goes out when the course ends.
          </p>
        </div>

        {/* 4-Station Connected Strip */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
            <span className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider block mb-1">
              Station 1
            </span>
            <div className="font-bold text-[14px] text-[#0B1B3A] mb-1">Doctor&apos;s Desk</div>
            <p className="text-[12.5px] text-[#64748B] m-0">Tablet prescribing with live stock visible beside each medicine.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
            <span className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider block mb-1">
              Station 2
            </span>
            <div className="font-bold text-[14px] text-[#0B1B3A] mb-1">Dispensary</div>
            <p className="text-[12.5px] text-[#64748B] m-0">Prescription arrives within seconds. Auto-prints thermal labels.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
            <span className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider block mb-1">
              Station 3
            </span>
            <div className="font-bold text-[14px] text-[#0B1B3A] mb-1">Patient Record</div>
            <p className="text-[12.5px] text-[#64748B] m-0">Complete visit timeline, past diagnoses, and allergy safety flags.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-left">
            <span className="text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider block mb-1">
              Station 4
            </span>
            <div className="font-bold text-[14px] text-[#0B1B3A] mb-1">Reminders</div>
            <p className="text-[12.5px] text-[#64748B] m-0">Consent-based WhatsApp reminders when the medicine course concludes.</p>
          </div>
        </div>

        {/* Before Suwenzo: 4 compact one-line chips */}
        <div className="w-full max-w-[960px] mb-12">
          <div className="text-center text-[12px] font-bold uppercase tracking-wider text-slate-400 mb-3">
            Before Suwenzo: The Cost of Fragmented Paper
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            <div className="py-2.5 px-3.5 rounded-xl bg-red-50/70 border border-red-100 text-left text-[12.5px] text-red-900 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              <span>Prescription written twice</span>
            </div>
            <div className="py-2.5 px-3.5 rounded-xl bg-red-50/70 border border-red-100 text-left text-[12.5px] text-red-900 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              <span>Prescribing without seeing stock</span>
            </div>
            <div className="py-2.5 px-3.5 rounded-xl bg-red-50/70 border border-red-100 text-left text-[12.5px] text-red-900 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              <span>Every visit starts from zero</span>
            </div>
            <div className="py-2.5 px-3.5 rounded-xl bg-red-50/70 border border-red-100 text-left text-[12.5px] text-red-900 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              <span>Phone numbers in a drawer</span>
            </div>
          </div>
        </div>

        {/* The 3 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mb-10">
          <div className="p-6 rounded-[22px] bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#1D4ED8] text-white font-bold text-[13px] flex items-center justify-center">
                  01
                </span>
                <span className="text-[12px] font-bold text-[#1D4ED8] uppercase tracking-wider">Step 1</span>
              </div>
              <div className="text-[17px] font-bold text-[#0B1B3A] mb-2">
                Doctor reviews history, then prescribes
              </div>
              <p className="text-[13.5px] text-[#475569] leading-relaxed">
                Open the patient&apos;s past visits and allergy flags, then choose medicines from your stock list with shelf counts beside each.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-[22px] bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#1D4ED8] text-white font-bold text-[13px] flex items-center justify-center">
                  02
                </span>
                <span className="text-[12px] font-bold text-[#1D4ED8] uppercase tracking-wider">Step 2</span>
              </div>
              <div className="text-[17px] font-bold text-[#0B1B3A] mb-2">
                Dispensary receives and prints label
              </div>
              <p className="text-[13.5px] text-[#475569] leading-relaxed">
                The prescription arrives on the dispensary screen within seconds. The thermal printer produces clear dosage stickers automatically.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-[22px] bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-8 h-8 rounded-full bg-[#1D4ED8] text-white font-bold text-[13px] flex items-center justify-center">
                  03
                </span>
                <span className="text-[12px] font-bold text-[#1D4ED8] uppercase tracking-wider">Step 3</span>
              </div>
              <div className="text-[17px] font-bold text-[#0B1B3A] mb-2">
                Stock deducts and reminder queues
              </div>
              <p className="text-[13.5px] text-[#475569] leading-relaxed">
                Inventory deducts in real time without manual tallies. With one-tap consent, a WhatsApp reminder goes out when the medicine course concludes.
              </p>
            </div>
          </div>
        </div>

        {/* Link to /how-it-works */}
        <div>
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-blue-200 text-[#1D4ED8] text-[14px] font-semibold shadow-xs hover:bg-blue-50 transition-colors"
          >
            <span>See the full walkthrough</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
