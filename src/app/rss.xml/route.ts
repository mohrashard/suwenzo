import { getPublishedBlogPosts } from "@/content/blog";
import { BRAND, DEFINITION } from "@/content/site";

export async function GET() {
  const rssItems = getPublishedBlogPosts().map((post) => {
    const pubDate = new Date(post.datePublished).toUTCString();
    return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BRAND.canonicalUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BRAND.canonicalUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${post.primaryKeyword}]]></category>
      <author>info@suwenzo.com (${post.author})</author>
    </item>`;
  }).join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Suwenzo Clinic Management Blog</title>
    <link>${BRAND.canonicalUrl}/blog</link>
    <description>${DEFINITION}</description>
    <language>en-lk</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BRAND.canonicalUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400",
    },
  });
}
