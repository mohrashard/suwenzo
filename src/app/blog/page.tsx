import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbSchema } from "@/lib/schemas";
import { SITE_URL, getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clinic Management Blog & Guides",
  description:
    "Practical guides and insights on outpatient clinic management, digital prescriptions, patient records, and dispensary workflows in Sri Lanka.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
    languages: {
      "en-LK": `${SITE_URL}/blog`,
      "x-default": `${SITE_URL}/blog`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: `${SITE_URL}/blog`,
    siteName: "Suwenzo",
    title: "Clinic Management Blog & Guides | Suwenzo Sri Lanka",
    description:
      "Practical guides and insights on outpatient clinic management, digital prescriptions, patient records, and dispensary workflows in Sri Lanka.",
    images: [
      {
        url: "/og-blog.png",
        width: 1200,
        height: 630,
        alt: "Suwenzo Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic Management Blog & Guides | Suwenzo Sri Lanka",
    description:
      "Practical guides and insights on outpatient clinic management, digital prescriptions, patient records, and dispensary workflows in Sri Lanka.",
    images: ["/og-blog.png"],
  },
};

const posts = [
  {
    slug: "paper-vs-digital-clinic-records-sri-lanka",
    title: "Paper vs Digital Clinic Records in Sri Lanka",
    excerpt:
      "Why outpatient medical practices in Sri Lanka are retiring physical filing cabinets in favor of tablet-based patient records that surface past visits in seconds.",
    date: "2026-10-12",
    readingTime: "5 min read",
    tag: "Clinical Practice",
  },
  {
    slug: "prescription-flow-doctor-to-dispensary",
    title: "How a Prescription Should Flow from Doctor to Dispensary",
    excerpt:
      "Examining the communication bottleneck between consultation desks and dispensary counters, and how digital order queues eliminate handwriting errors.",
    date: "2026-10-08",
    readingTime: "5 min read",
    tag: "Dispensary Operations",
  },
  {
    slug: "what-to-look-for-in-clinic-software-sri-lanka",
    title: "What to Look for in Clinic Software in Sri Lanka",
    excerpt:
      "A pragmatic evaluation checklist for private doctors: consultation speed, local dispensary label printing, WhatsApp follow-up reminders, and rapid 48-hour setup.",
    date: "2026-10-04",
    readingTime: "6 min read",
    tag: "Software Guide",
  },
];

export default function BlogIndexPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("blog-index", "demo");
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Navbar />

      <main className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[120px] sm:pt-[140px] pb-[80px] px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-blue-200/40 via-white/50 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-[960px] mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">Blog</span>
          </nav>

          {/* Header */}
          <div className="text-left mb-8">
            <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium inline-block mb-4 tracking-[0.02em] shadow-xs uppercase">
              Articles &amp; Guides
            </span>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-[-0.03em]">
              Sri Lankan Clinic Practice &amp; Technology
            </h1>
            <p className="text-[15px] sm:text-[16px] text-[#475569] max-w-[680px]">
              Practical operational insights for doctors, dispensary managers, and clinic owners looking to streamline outpatient workflow.
            </p>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 gap-6 text-left mb-12">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs hover:border-blue-300 transition-all group"
              >
                <div className="flex items-center gap-3 text-[12px] text-slate-500 mb-3">
                  <span className="bg-blue-50 text-[#1D4ED8] font-semibold px-2.5 py-1 rounded-full">
                    {post.tag}
                  </span>
                  <span>&bull;</span>
                  <span>{post.date}</span>
                  <span>&bull;</span>
                  <span>{post.readingTime}</span>
                </div>

                <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug group-hover:text-[#1D4ED8] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-[14.5px] sm:text-[15px] text-[#475569] leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#1D4ED8] hover:gap-2 transition-all"
                >
                  Read full article &rarr;
                </Link>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div>
              <h3 className="text-[17px] sm:text-[19px] font-bold text-[#0B1B3A] mb-2">
                See Suwenzo in action at your clinic
              </h3>
              <p className="text-[14px] text-[#475569] max-w-[500px]">
                Book a 20-minute demonstration to test digital prescriptions and label printing. Pricing is shared during the demo. The first 10 founding clinics in Colombo get 3 months free.
              </p>
            </div>

            <a
              href={whatsappUrl}
              rel="nofollow noopener"
              className="w-full sm:w-auto bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-full text-[14px] text-center shadow-[0_4px_14px_rgba(29,78,216,0.25)] transition-all hover:scale-[1.02] shrink-0"
            >
              Book a 20-minute demo
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
