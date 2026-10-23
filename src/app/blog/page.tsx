import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  buildGraphSchema,
} from "@/lib/schemas";
import { BRAND } from "@/content/site";
import { getPublishedBlogPosts } from "@/content/blog";
import { getWhatsAppRedirectUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Clinic Management Blog for Sri Lankan Practices | Suwenzo",
  description:
    "Practical guides for private clinics in Sri Lanka: digital prescriptions, dispensary stock, patient follow-up and data protection.",
  path: "/blog",
  ogImage: "/og-blog.png",
});

export default function BlogIndexPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("blog-index", "demo");

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Blog", item: "/blog" },
    ]),
    {
      "@type": "CollectionPage",
      "@id": `${BRAND.canonicalUrl}/blog#webpage`,
      url: `${BRAND.canonicalUrl}/blog`,
      name: "Clinic management guides for Sri Lankan practices",
      description:
        "Practical guides for private clinics in Sri Lanka: digital prescriptions, dispensary stock, patient follow-up and data protection.",
      isPartOf: {
        "@id": `${BRAND.canonicalUrl}/#website`,
      },
    },
  ]);

  return (
    <>
      <JsonLd data={graphSchema} />
      <Navbar />

      <main
        id="main-content"
        className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[120px] sm:pt-[140px] pb-[80px] px-4 sm:px-6 relative overflow-hidden"
      >
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
            <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
              <span className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full text-[0.8125rem] font-medium tracking-[0.02em] uppercase">
                Articles &amp; Practical Guides
              </span>
              <a
                href="/rss.xml"
                target="_blank"
                rel="alternate"
                type="application/rss+xml"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1D4ED8] hover:underline"
              >
                <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93v-2.83Z" />
                </svg>
                RSS Feed
              </a>
            </div>
            <h1 className="text-[2.25rem] sm:text-[clamp(2.5rem,4.5vw,3.25rem)] font-normal text-[#0B1B3A] leading-[1.12] mb-3 tracking-[-0.03em]">
              Clinic management guides for Sri Lankan practices
            </h1>
            <p className="text-[15px] sm:text-[16px] text-[#475569] max-w-[680px]">
              Practical operational guides for doctors, clinic owners, and dispensaries in Sri Lanka, covering digital prescribing, shelf inventory, and patient follow-up.
            </p>
          </div>

          {/* Post Grid */}
          <div className="grid grid-cols-1 gap-6 text-left mb-12">
            {getPublishedBlogPosts().map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-8 shadow-xs hover:border-blue-300 transition-all group"
              >
                <div className="flex items-center gap-3 text-[12px] text-slate-500 mb-3 flex-wrap">
                  <span className="bg-blue-50 text-[#1D4ED8] font-semibold px-2.5 py-1 rounded-full">
                    {post.primaryKeyword}
                  </span>
                  <span>&bull;</span>
                  <span>{post.readingTime}</span>
                  <span>&bull;</span>
                  <span>By {post.author}</span>
                  {post.isFull && (
                    <>
                      <span>&bull;</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium text-[11px]">
                        Full guide
                      </span>
                    </>
                  )}
                </div>

                <h2 className="text-[1.35rem] sm:text-[1.55rem] font-bold text-[#0B1B3A] mb-3 leading-snug group-hover:text-[#1D4ED8] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-[14.5px] sm:text-[15px] text-[#475569] leading-relaxed mb-4">
                  {post.description}
                </p>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#1D4ED8] hover:gap-2 transition-all"
                  >
                    Read article &rarr;
                  </Link>
                  <span className="text-[12px] text-slate-400">
                    Updated {post.dateModified.split("T")[0]}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Hub Navigation Band */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
            <Link
              href="/features"
              className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 transition-all block group"
            >
              <h3 className="text-[15px] font-bold text-[#0B1B3A] group-hover:text-[#1D4ED8] mb-1">
                Explore Software Features &rarr;
              </h3>
              <p className="text-[13px] text-slate-600 m-0">
                Patient records, digital prescriptions, live stock tracking, and WhatsApp follow-up.
              </p>
            </Link>
            <Link
              href="/for"
              className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 transition-all block group"
            >
              <h3 className="text-[15px] font-bold text-[#0B1B3A] group-hover:text-[#1D4ED8] mb-1">
                Explore Practice Configurations &rarr;
              </h3>
              <p className="text-[13px] text-slate-600 m-0">
                Tailored setups for solo doctors, dispensary clinics, and multi-doctor centres.
              </p>
            </Link>
          </div>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50/40 border border-blue-200 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
            <div>
              <h2 className="text-[1.35rem] font-bold text-[#0B1B3A] mb-2">
                See Suwenzo in your clinic in 20 minutes
              </h2>
              <p className="text-[14px] text-[#475569] max-w-[520px] m-0">
                We configure your medicine list, set up the label printer, and train your staff. Most Colombo clinics start within 48 hours.
              </p>
            </div>
            <a
              href={whatsappUrl}
              rel="nofollow noopener"
              className="shrink-0 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-full text-[14px] shadow-xs transition-all"
            >
              Book a clinic demo
            </a>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
