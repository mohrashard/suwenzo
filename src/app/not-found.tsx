import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getWhatsAppRedirectUrl } from "@/lib/site";

export default function NotFound() {
  const whatsappUrl = getWhatsAppRedirectUrl("404", "question");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[140px] pb-[100px] px-4 sm:px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[360px] bg-gradient-to-b from-blue-200/40 via-white/50 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-[680px] mx-auto relative z-10 bg-white border border-slate-200/90 rounded-[28px] p-8 sm:p-12 shadow-[0_12px_40px_-10px_rgba(29,78,216,0.08)]">
          <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-5 uppercase tracking-[0.02em]">
            404 Error
          </span>

          <h1 className="text-[2.25rem] sm:text-[3rem] font-bold text-[#0B1B3A] leading-tight mb-4 tracking-[-0.03em]">
            Page Not Found
          </h1>

          <p className="text-[1.05rem] text-[#475569] leading-relaxed mb-8">
            The page you are looking for doesn&apos;t exist or may have been moved. You can navigate back to key parts of Suwenzo below:
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
            <Link
              href="/"
              className="w-full sm:w-auto bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-full text-[14px] shadow-[0_4px_14px_rgba(29,78,216,0.25)] transition-all hover:scale-[1.02]"
            >
              Back to Home
            </Link>
            <Link
              href="/#features"
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-[#0B1B3A] font-semibold px-5 py-3 rounded-full text-[14px] transition-colors"
            >
              Explore Features
            </Link>
            <Link
              href="/faq"
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-[#0B1B3A] font-semibold px-5 py-3 rounded-full text-[14px] transition-colors"
            >
              FAQ Directory
            </Link>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <p className="text-[13.5px] text-[#475569]">
              Need direct help with your clinic?{" "}
              <a
                href={whatsappUrl}
                rel="nofollow noopener"
                className="text-[#1D4ED8] font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Chat with us on WhatsApp</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
