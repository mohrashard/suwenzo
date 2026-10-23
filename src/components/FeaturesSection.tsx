import Link from "next/link";
import { FEATURES } from "@/content/site";

export default function FeaturesSection() {
  return (
    <section
      className="bg-[linear-gradient(180deg,#F4F9FF_0%,#E6F0FD_100%)] pt-[72px] sm:pt-[96px] px-4 sm:px-6 pb-[80px] sm:pb-[104px] flex flex-col items-center relative overflow-hidden"
      id="features"
    >
      {/* Ambient background glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[1000px] h-[400px] sm:h-[600px] bg-gradient-to-b from-blue-100/40 via-blue-50/20 to-transparent blur-[120px] pointer-events-none rounded-full" />

      {/* Centered Heading Block */}
      <div className="text-center mb-10 sm:mb-[48px] max-w-[880px] mx-auto relative z-10">
        <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 sm:mb-6 tracking-[0.02em] uppercase">
          FEATURES
        </span>
        <h2 className="text-[1.85rem] sm:text-[clamp(2.25rem,4.5vw,3.15rem)] font-normal text-[#0B1B3A] leading-[1.15] mb-3 sm:mb-4 tracking-[-0.03em]">
          Clinic software features: records, prescriptions, stock and reminders
        </h2>
        <p className="text-[1rem] sm:text-[1.125rem] text-[#475569] leading-[1.6] max-w-[620px] mx-auto">
          Start with the connected core. Every consultation, prescription and packet in one system.
        </p>
      </div>

      {/* Feature Blocks Deck */}
      <div className="max-w-[1140px] w-full flex flex-col gap-6 relative z-10">
        {/* Feature 1: Patient records first */}
        <div className="bg-white border border-blue-100/80 rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
              Feature 01 &bull; Records First
            </span>
          </div>
          <h3 className="text-[1.35rem] sm:text-[1.6rem] font-bold text-[#0B1B3A] mb-2.5">
            Patient records and visit history
          </h3>
          <p className="text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.6] mb-4 max-w-[760px]">
            Every past consultation, diagnosis, medication and allergy safety flag is stored in one continuous file so no visit starts from zero.
          </p>
          <ul className="space-y-2 text-[13.5px] text-[#1E293B] mb-5">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
              <span>Full past visit timeline, diagnoses and vitals accessible before prescribing</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
              <span>Instant patient record search by name, phone number, or national identity card</span>
            </li>
          </ul>
          <Link
            href="/features/patient-records"
            className="text-[13.5px] font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
          >
            <span>Learn about patient records</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Feature 2: Digital prescriptions (with single label-sticker mockup) */}
        <div className="bg-white border border-blue-100/80 rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                  Feature 02 &bull; Connected Dispensary
                </span>
              </div>
              <h3 className="text-[1.35rem] sm:text-[1.6rem] font-bold text-[#0B1B3A] mb-2.5">
                Digital prescriptions to the dispensary screen
              </h3>
              <p className="text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.6] mb-4">
                The doctor prescribes on a tablet, and the prescription reaches the dispensary screen within seconds, generating clean printed thermal packet labels.
              </p>
              <ul className="space-y-2 text-[13.5px] text-[#1E293B] mb-5">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  <span>Prescription appears on dispensary counter within seconds of confirmation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                  <span>Thermal adhesive packet labels print automatically without handwriting</span>
                </li>
              </ul>
              <Link
                href="/features/digital-prescriptions"
                className="text-[13.5px] font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
              >
                <span>Learn about digital prescriptions</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            {/* Label-sticker Mockup (Shown ONCE only as required) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[280px] sm:w-[300px] bg-white border-2 border-dashed border-slate-300 rounded-xl p-4 shadow-sm text-left font-mono">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2 text-[10px] text-slate-500">
                  <span className="font-bold text-[#0B1B3A]">SUWENZO CLINIC</span>
                  <span>SAMPLE PATIENT (48)</span>
                </div>
                <div className="text-[13px] font-bold text-[#0B1B3A] mb-0.5">
                  Amoxicillin 500mg
                </div>
                <div className="text-[11px] text-[#1D4ED8] font-bold mb-2">
                  1 Capsule three times daily (TDS)
                </div>
                <div className="text-[10px] text-slate-600 border-t border-slate-100 pt-1.5 flex justify-between">
                  <span>Take after meals</span>
                  <span>Qty: 15 caps &bull; 5 days</span>
                </div>
                <div className="mt-2 text-[10px] text-slate-600 font-medium text-center">
                  Thermal Adhesive Packet Label
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Live stock and expiry */}
        <div className="bg-white border border-blue-100/80 rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
              Feature 03 &bull; Shelf Visibility
            </span>
          </div>
          <h3 className="text-[1.35rem] sm:text-[1.6rem] font-bold text-[#0B1B3A] mb-2.5">
            Live stock visibility before prescribing and 60-day expiry warnings
          </h3>
          <p className="text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.6] mb-4 max-w-[760px]">
            Doctors see current shelf balances beside each medicine while prescribing, stock deducts automatically, and staff receive 60-day expiry warnings.
          </p>
          <ul className="space-y-2 text-[13.5px] text-[#1E293B] mb-5">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
              <span>Exact shelf stock counts visible before finalizing prescription items</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
              <span>Color-coded 60-day alerts highlight near-expiry batches for rotation</span>
            </li>
          </ul>
          <Link
            href="/features/stock-and-expiry"
            className="text-[13.5px] font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
          >
            <span>Learn about stock and expiry tracking</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Feature 4: WhatsApp reminders */}
        <div className="bg-white border border-blue-100/80 rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
              Feature 04 &bull; Patient Retention
            </span>
          </div>
          <h3 className="text-[1.35rem] sm:text-[1.6rem] font-bold text-[#0B1B3A] mb-2.5">
            Consent-based WhatsApp reminders when medicine courses conclude
          </h3>
          <p className="text-[14.5px] sm:text-[15px] text-[#475569] leading-[1.6] mb-4 max-w-[760px]">
            When a patient&apos;s treatment finishes, Suwenzo delivers an automated WhatsApp reminder to prompt review, sent only after one-tap consent.
          </p>
          <ul className="space-y-2 text-[13.5px] text-[#1E293B] mb-5">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
              <span>Patient consent recorded in one tap during check-in or consultation</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
              <span>Brings chronic and acute care patients back on time for their scheduled follow-up</span>
            </li>
          </ul>
          <Link
            href="/features/whatsapp-reminders"
            className="text-[13.5px] font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
          >
            <span>Learn about WhatsApp reminders</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Small billing line */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-[13.5px] text-[#475569] text-left">
          <strong className="text-[#0B1B3A]">Billing and receipts:</strong> For practices that need front-desk payment collection, Suwenzo includes simple billing calculations and printed thermal receipts.
        </div>

        {/* Compare all features link */}
        <div className="text-center mt-2">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-blue-200 text-[#1D4ED8] text-[14px] font-semibold shadow-xs hover:bg-blue-50 transition-colors"
          >
            <span>Compare all features</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
