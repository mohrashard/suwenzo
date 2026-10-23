import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  getBreadcrumbSchema,
  getBlogPostingSchema,
  buildGraphSchema,
} from "@/lib/schemas";
import { BRAND } from "@/content/site";
import { getBlogPost } from "@/content/blog";
import { getWhatsAppRedirectUrl } from "@/lib/site";

const post = getBlogPost("how-to-bring-patients-back-medicine-course-ends")!;

export const metadata: Metadata = buildMetadata({
  title: "How to Bring Patients Back When Medicine Ends",
  description: post.description,
  path: `/blog/${post.slug}`,
  ogImage: "/og-blog.png",
  noindex: !post.published,
});

export default function HowToBringPatientsBackPostPage() {
  const whatsappUrl = getWhatsAppRedirectUrl("blog-retention", "demo");
  const postUrl = `${BRAND.canonicalUrl}/blog/${post.slug}`;

  const graphSchema = buildGraphSchema([
    getBreadcrumbSchema([
      { name: "Home", item: "/" },
      { name: "Blog", item: "/blog" },
      { name: post.title, item: `/blog/${post.slug}` },
    ]),
    getBlogPostingSchema({
      headline: post.title,
      description: post.description,
      url: postUrl,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      image: `${BRAND.canonicalUrl}/og-blog.png`,
    }),
  ]);

  return (
    <>
      <JsonLd data={graphSchema} />
      <Navbar />

      <main
        id="main-content"
        className="min-h-screen bg-[linear-gradient(180deg,#F0F7FF_0%,#E6F1FE_60%,#FAFCFF_100%)] pt-[120px] sm:pt-[140px] pb-[80px] px-4 sm:px-6 relative overflow-hidden"
      >
        <div className="max-w-[840px] mx-auto relative z-10 text-left">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#1D4ED8] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#1D4ED8] transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-[#0B1B3A] font-semibold">Patient Retention Guide</span>
          </nav>

          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2.5 mb-3 flex-wrap">
              <span className="bg-[#0f172a] text-white py-1 px-3.5 rounded-full text-[0.75rem] font-medium uppercase tracking-wider">
                Patient Retention
              </span>
              <span className="text-[12.5px] text-slate-500">
                {post.readingTime} &bull; Published October 2026
              </span>
            </div>
            <h1 className="text-[2.1rem] sm:text-[3rem] font-bold text-[#0B1B3A] leading-[1.16] mb-4 tracking-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-[13px] text-slate-600 pb-5 border-b border-slate-200">
              <span>Author: <strong>{post.author}</strong></span>
              <span>&bull;</span>
              <span>Last updated: {BRAND.lastUpdated}</span>
            </div>
          </header>

          {/* Answer-First Introduction */}
          <div className="bg-white/95 border border-blue-100 rounded-2xl p-5 sm:p-6 mb-8 shadow-xs">
            <p className="text-[15.5px] sm:text-[16.5px] text-[#1E293B] font-medium leading-[1.7] m-0">
              Sri Lankan private clinics bring patients back for necessary follow-ups by capturing one-tap WhatsApp consent during consultations and triggering automated reminders when their prescribed medication course ends.
            </p>
          </div>

          {/* Article Outline and Section Stubs */}
          <article className="bg-white border border-slate-200/90 rounded-[24px] p-6 sm:p-10 shadow-xs space-y-8 text-[15px] sm:text-[16px] text-[#334155] leading-[1.8] text-left">
            <p>
              In Sri Lankan outpatient care, patients frequently stop taking maintenance drugs or skip scheduled reviews once their acute symptoms ease. Without manual phone calls, automated messaging bridges this follow-up gap.
            </p>

            <div className="space-y-6">
              {post.outline?.map((sec, idx) => (
                <section key={idx} className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70">
                  <h2 className="text-[1.2rem] font-bold text-[#0B1B3A] mb-2">
                    {sec.heading}
                  </h2>
                  <p className="text-[14px] text-[#475569] leading-relaxed m-0">
                    {sec.summary}
                  </p>
                </section>
              ))}
            </div>

            {/* Related Spoke Links & Demo CTA */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-[13.5px] text-[#475569]">
                <span>Related solutions: </span>
                <Link href={post.relatedFeaturePath} className="text-[#1D4ED8] font-semibold hover:underline">
                  {post.relatedFeatureAnchor}
                </Link>
                <span> &bull; </span>
                <Link href={post.relatedPracticePath} className="text-[#1D4ED8] font-semibold hover:underline">
                  {post.relatedPracticeAnchor}
                </Link>
              </div>

              <a
                href={whatsappUrl}
                rel="nofollow noopener"
                className="w-full sm:w-auto bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-6 py-2.5 rounded-full text-[13.5px] text-center shadow-xs transition-all"
              >
                Book a 20-minute demo
              </a>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
