import Link from "next/link";
import Image from "next/image";

export default function WhoAndWhySection() {
  const whatsappNumber = "94719382296";
  const whatsappGeneralMessage = encodeURIComponent("Hi, I would like to inquire about Suwenzo for our medical practice.");
  const whatsappBranchesMessage = encodeURIComponent("Hi, I would like to discuss Suwenzo for our multi-branch / larger medical centre.");
  const whatsappBranchesUrl = `https://wa.me/${whatsappNumber}?text=${whatsappBranchesMessage}`;
  const whatsappDemoUrl = `https://wa.me/${whatsappNumber}?text=${whatsappGeneralMessage}`;

  const clinicalProfiles = [
    {
      badge: "In-House Dispensary",
      badgeColor: "bg-blue-50 text-[#1D4ED8] border-blue-100",
      tier: "Suwenzo Clinic",
      headline: "Dispensary → Clinic",
      description:
        "For clinics that stock and dispense their own medicines. Doctor prescribes on tablet, live stock deducts instantly, and clear thermal dosage stickers print automatically.",
      features: ["Live shelf stock tracking", "Automatic thermal packet stickers", "Zero handwritten dose mistakes"],
      status: "360° Closed Loop",
      highlight: true,
    },
    {
      badge: "Consulting Only",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
      tier: "Suwenzo Consult",
      headline: "No dispensary → Consult",
      description:
        "For doctors who diagnose and prescribe without keeping medicine stock. Choose from the full Sri Lankan medicine directory and give patients a clean printed or WhatsApp prescription.",
      features: ["Full Sri Lankan medicine list", "Patient visit & history on file", "Printed or WhatsApp prescription"],
      status: "Pure Consultation",
      highlight: false,
    },
    {
      badge: "Practice Size",
      badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
      tier: "Flexible Workflows",
      headline: "Single & multi-doctor practices",
      description:
        "Works smoothly whether you run an evening solo clinic or share a busy daytime centre. Individual doctor logins keep patient notes organized while sharing the front desk and dispensary.",
      features: ["Separate doctor logins", "Shared dispensary queue", "Private patient notes & history"],
      status: "Solo or Group Practice",
      highlight: false,
    },
    {
      badge: "Larger Operations",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
      tier: "Enterprise Network",
      headline: "Larger centres or several branches",
      description:
        "Managing multiple branches, higher consultation volume, or multiple dispensary counters? We configure dedicated cross-branch sync and tailored workflow routing for your group.",
      features: ["Multi-branch stock visibility", "Centralized patient database", "Dedicated onboarding manager"],
      status: "Custom Deployment",
      highlight: false,
      ctaLink: whatsappBranchesUrl,
      ctaText: "Talk to us on WhatsApp",
    },
  ];

  return (
    <section className="bg-white py-[84px] sm:py-[112px] px-4 sm:px-6 w-full flex flex-col items-center relative overflow-hidden" id="who-and-why">
      {/* Ambient soft glow */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[500px] bg-gradient-to-b from-blue-50/50 via-slate-50/20 to-transparent blur-[130px] pointer-events-none rounded-full" />

      {/* ========================================================================= */}
      {/* PART 1: WHO IT'S FOR */}
      {/* ========================================================================= */}
      <div className="max-w-[1180px] w-full flex flex-col items-center relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-10 sm:mb-[56px] max-w-[820px] mx-auto">
          <span className="bg-[#0f172a] text-white py-1.5 sm:py-2 px-4 sm:px-5 rounded-full text-[0.8125rem] sm:text-[0.875rem] font-medium inline-block mb-5 sm:mb-8 tracking-[0.02em] shadow-xs uppercase">
            WHO IT&apos;S FOR
          </span>
          <h2 className="text-[1.85rem] sm:text-[clamp(2.25rem,4.5vw,3.15rem)] font-normal text-[#0B1B3A] leading-[1.18] sm:leading-[1.14] mb-3.5 sm:mb-5 tracking-[-0.03em]">
            Built for how Sri Lankan clinics actually run
          </h2>
          <p className="text-[1rem] sm:text-[1.125rem] text-[#475569] leading-[1.6] max-w-[660px] mx-auto">
            Whether you run a full dispensary or a consulting practice, Suwenzo fits your workflow without forcing you to change how you practice medicine.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 w-full mb-16 sm:mb-24">
          {clinicalProfiles.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                item.highlight
                  ? "bg-gradient-to-b from-white via-blue-50/20 to-blue-50/40 border-2 border-blue-200/90 shadow-[0_12px_35px_-8px_rgba(29,78,216,0.12)] hover:border-blue-300"
                  : "bg-white border border-slate-200/90 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.04)] hover:border-slate-300 hover:shadow-[0_16px_36px_-10px_rgba(0,0,0,0.07)]"
              }`}
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[11px] sm:text-[11.5px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <span className="text-[11.5px] font-medium text-slate-500">
                    {item.tier}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug tracking-tight">
                  {item.headline}
                </h3>

                {/* Description */}
                <p className="text-[0.9375rem] sm:text-[1rem] text-[#475569] leading-[1.6] mb-6">
                  {item.description}
                </p>

                {/* Feature Bullets */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center text-[13px] sm:text-[13.5px] text-[#1E293B]">
                      <svg className="w-4 h-4 text-[#1D4ED8] mr-2.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="pt-4 border-t border-slate-100/90 flex items-center justify-between">
                <span className="text-[12px] font-semibold text-slate-500">
                  {item.status}
                </span>

                {item.ctaLink && (
                  <a
                    href={item.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-bold text-[#1D4ED8] hover:text-[#1e40af] transition-colors"
                  >
                    <span>{item.ctaText}</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="w-full max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-16 sm:mb-24" />

        {/* ========================================================================= */}
        {/* PART 2: WHY WE BUILT IT */}
        {/* ========================================================================= */}
        <div className="w-full max-w-[960px] mx-auto flex flex-col items-center">
          
          {/* Header Block */}
          <div className="text-center mb-8 sm:mb-12 max-w-[760px] mx-auto">
            <span className="bg-[#0f172a] text-white py-1.5 sm:py-2 px-4 sm:px-5 rounded-full text-[0.8125rem] sm:text-[0.875rem] font-medium inline-block mb-5 sm:mb-8 tracking-[0.02em] shadow-xs uppercase">
              WHY WE BUILT IT
            </span>
            <h2 className="text-[1.85rem] sm:text-[clamp(2.25rem,4.5vw,3.15rem)] font-normal text-[#0B1B3A] leading-[1.18] sm:leading-[1.14] mb-3.5 sm:mb-5 tracking-[-0.03em]">
              Medicine shouldn&apos;t rely on guesswork and carbon paper
            </h2>
            <p className="text-[1rem] sm:text-[1.125rem] text-[#475569] leading-[1.6]">
              A personal note from our team on why we started Suwenzo in Sri Lanka.
            </p>
          </div>

          {/* Founder Editorial Letter Card */}
          <article className="w-full bg-[#F8FAFC] border border-blue-100/90 rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-[0_12px_40px_-10px_rgba(29,78,216,0.08)] relative overflow-hidden">
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-[80px] pointer-events-none" />

            {/* Core Anchor Pull-Quote */}
            <blockquote className="border-l-4 border-[#1D4ED8] pl-5 sm:pl-6 py-2 mb-8 bg-white/70 rounded-r-2xl border border-blue-50 shadow-2xs">
              <p className="text-[1.08rem] sm:text-[1.28rem] font-semibold text-[#0B1B3A] leading-[1.55] italic">
                &ldquo;...watching the same prescription written twice, patients sent elsewhere for medicine the clinic had run out of, and doctors starting every consultation from a blank page.&rdquo;
              </p>
            </blockquote>

            {/* Letter Body in Founder's Voice */}
            <div className="text-[0.95rem] sm:text-[1.0625rem] text-[#334155] leading-[1.75] space-y-4 sm:space-y-5">
              <p>
                In private medical practices across Sri Lanka, evening consultation sessions are intense. A doctor routinely sees thirty to fifty patients in three hours. Every minute spent searching a drawer for a past prescription or scribbling notes is a minute stolen from diagnosis and patient care.
              </p>
              <p>
                Meanwhile, at the dispensary counter, a dedicated assistant is left squinting at rushed cursive handwriting, manually rewriting dosages onto paper envelopes, and hoping the patient doesn&apos;t return confused. And when regular patients come back three months later, nobody knows which antibiotic or antihypertensive worked best, because the consultation starts from scratch.
              </p>
              <p>
                Paper wasn&apos;t failing because doctors or dispensers were careless. It was failing because three separate people were forced to operate from disconnected fragments of information.
              </p>
              <p className="font-medium text-[#0B1B3A]">
                We built Suwenzo to give private clinics one calm, connected system. Setup takes less than a day, training is provided in-person at your clinic, and your stock list is loaded before you see your first patient.
              </p>
            </div>

            {/* Founder Sign-off Block */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#1D4ED8] via-[#3B82F6] to-[#93C5FD] shadow-[0_4px_14px_rgba(29,78,216,0.22)] shrink-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/swlogocopy.jpeg"
                      alt="The Suwenzo Clinical Team"
                      width={44}
                      height={44}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-[15px] sm:text-[16px] font-bold text-[#0B1B3A]">
                    The Suwenzo Clinical Team
                  </div>
                  <div className="text-[12.5px] sm:text-[13px] text-slate-500">
                    Founded in Colombo · Built specifically for Sri Lankan Healthcare
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1D4ED8] text-[12.5px] font-semibold self-start sm:self-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D4ED8]" />
                <span>3 Months Free for Founding Clinics</span>
              </div>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
