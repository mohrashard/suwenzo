import Link from "next/link";
import Image from "next/image";
import { getWhatsAppRedirectUrl } from "@/lib/site";

export default function WhoAndWhySection() {
  const whatsappDemoUrl = getWhatsAppRedirectUrl("who-its-for", "demo");
  const whatsappMultiBranchUrl = getWhatsAppRedirectUrl("who-its-for", "multi-branch");

  const clinicalProfiles = [
    {
      badge: "In-House Dispensary",
      badgeColor: "bg-blue-50 text-[#1D4ED8] border-blue-100",
      tier: "Dispensary Clinics",
      headline: "Clinics with an in-house dispensary",
      description:
        "For clinics that stock and dispense their own medicines. Doctor prescribes on tablet, live stock deducts instantly, and clear thermal packet labels print automatically.",
      features: [
        "Live shelf stock tracking while prescribing",
        "Automatic thermal packet labels at dispensary counter",
        "60-day expiry warning alerts",
      ],
      link: "/for/clinics-with-dispensary",
      ctaText: "Book demo",
      ctaLink: whatsappDemoUrl,
      highlight: true,
    },
    {
      badge: "Consulting Only",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      tier: "Consulting Only",
      headline: "Consulting-only practices",
      description:
        "For doctors who prescribe without keeping medicine stock. Choose from the full Sri Lankan medicine directory and give patients a clean printed or WhatsApp prescription.",
      features: [
        "Full Sri Lankan medicine directory pre-loaded",
        "Patient visit and allergy history on file",
        "Printed or WhatsApp prescription slip",
      ],
      link: "/for/consulting-only-practices",
      ctaText: "Book demo",
      ctaLink: whatsappDemoUrl,
      highlight: false,
    },
    {
      badge: "Solo Practices",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
      tier: "Solo Practices",
      headline: "Solo practices",
      description:
        "For solo general practitioners running fast evening surgeries. Single doctor login, instant patient history search, and rapid prescribing without carbon copies.",
      features: [
        "Fast tablet prescribing for evening sessions",
        "Instant patient history by phone or NIC",
        "WhatsApp reminders bring patients back on time",
      ],
      link: "/for/solo-doctors",
      ctaText: "Book demo",
      ctaLink: whatsappDemoUrl,
      highlight: false,
    },
    {
      badge: "Multi-Doctor & Branches",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      tier: "Centres & Branches",
      headline: "Multi-doctor centres and branches",
      description:
        "For shared medical centres and branch groups. Individual doctor logins keep patient notes organized while sharing the front desk and central dispensary queue.",
      features: [
        "Separate doctor logins with private notes",
        "Shared front desk and dispensary queue",
        "Multi-branch configuration with dedicated onboarding",
      ],
      link: "/for/multi-doctor-practices",
      ctaText: "Discuss multi-branch",
      ctaLink: whatsappMultiBranchUrl,
      highlight: false,
    },
  ];

  return (
    <div id="who-and-why">
      <section
        className="bg-white py-[84px] sm:py-[104px] px-4 sm:px-6 w-full flex flex-col items-center relative overflow-hidden"
        id="who-its-for"
      >
        {/* Ambient soft glow */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[500px] bg-gradient-to-b from-blue-50/50 via-slate-50/20 to-transparent blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-[1140px] w-full flex flex-col items-center relative z-10">
          {/* Header Block */}
          <div className="text-center mb-10 sm:mb-[48px] max-w-[820px] mx-auto">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 sm:mb-6 tracking-[0.02em] uppercase">
              WHO IT&apos;S FOR
            </span>
            <h2 className="text-[1.85rem] sm:text-[clamp(2.25rem,4.5vw,3.15rem)] font-normal text-[#0B1B3A] leading-[1.15] mb-3 sm:mb-4 tracking-[-0.03em]">
              Software for solo doctors, dispensary clinics and multi-doctor centres
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] text-[#475569] leading-[1.6] max-w-[660px] mx-auto">
              Suwenzo fits the outpatient workflow of your practice without forcing you to change how you practise medicine.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full mb-14 sm:mb-20">
            {clinicalProfiles.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-[22px] sm:rounded-[26px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 text-left ${
                  item.highlight
                    ? "bg-gradient-to-b from-white via-blue-50/20 to-blue-50/40 border-2 border-blue-200/90 shadow-[0_12px_35px_-8px_rgba(29,78,216,0.1)] hover:border-blue-300"
                    : "bg-white border border-slate-200/90 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.04)] hover:border-slate-300 hover:shadow-xs"
                }`}
              >
                <div>
                  {/* Card Top Row */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="text-[11.5px] font-medium text-slate-500">
                      {item.tier}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[1.3rem] sm:text-[1.45rem] font-bold text-[#0B1B3A] mb-2 leading-snug">
                    {item.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-[13.5px] sm:text-[14px] text-[#475569] leading-[1.6] mb-4">
                    {item.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 mb-5 pt-3 border-t border-slate-100">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center text-[13px] text-[#1E293B]">
                        <svg className="w-4 h-4 text-[#1D4ED8] mr-2 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={item.link}
                    className="text-[13px] font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Read workflow</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>

                  <a
                    href={item.ctaLink}
                    rel="nofollow noopener"
                    className="text-[13px] font-semibold text-[#1D4ED8] hover:text-[#1e40af] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{item.ctaText}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Founder Note (3 sentences max from Why we built it, no personal name) */}
          <div className="w-full max-w-[860px] bg-[#F8FAFC] border border-blue-100/90 rounded-[22px] p-6 sm:p-8 shadow-xs text-left">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#1D4ED8] mb-2">
              Our Perspective
            </div>
            <p className="text-[14.5px] sm:text-[15.5px] text-[#334155] leading-[1.7] mb-4">
              In private medical practices across Sri Lanka, doctors routinely see thirty to fifty patients in an evening surgery while dispensers decode rushed handwriting on paper envelopes. Paper fails because clinical notes, dispensary queues and patient follow-up operate as disconnected fragments. We built Suwenzo to give private clinics one calm, connected system that is configured with you before your first digital patient.
            </p>
            <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center p-1">
                  <Image
                    src="/swlogocopy.svg"
                    alt="Suwenzo"
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[13px] font-bold text-[#0B1B3A]">
                  The Suwenzo team
                </span>
                <span className="text-[12px] text-slate-500">
                  &bull; Colombo, Sri Lanka
                </span>
              </div>
              <Link
                href="/about"
                className="text-[13px] font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
              >
                <span>Read our story</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
