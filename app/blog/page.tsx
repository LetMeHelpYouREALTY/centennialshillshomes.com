import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import PageBreadcrumbs from "@/components/seo/PageBreadcrumbs";
import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { gbpPostTemplates } from "@/lib/gbp-posts";
import { agentInfo, siteConfig } from "@/lib/site-config";

function normalizeCtaUrl(url: string): string {
  if (url.startsWith(siteConfig.url)) {
    return url.slice(siteConfig.url.length) || "/";
  }
  return url;
}

export const metadata: Metadata = buildPageMetadata({
  title: "Centennial Hills Real Estate Blog",
  description:
    "Expert insights, market updates, and local real estate news for Centennial Hills and northwest Las Vegas from Dr. Jan Duffy.",
  path: "/blog",
  keywords: [
    "Centennial Hills real estate blog",
    "Las Vegas market updates",
    "Dr. Jan Duffy",
    "northwest Las Vegas news",
  ],
});

const categories = [
  {
    emoji: "🏠",
    title: "Buyer's Guide",
    description: "Everything you need to know about buying a home in Centennial Hills",
    href: "/buyers",
  },
  {
    emoji: "💰",
    title: "Seller's Guide",
    description: "Expert tips for selling your Centennial Hills home at the best price",
    href: "/sellers",
  },
  {
    emoji: "📊",
    title: "Market Updates",
    description: "Current trends and analysis for northwest Las Vegas real estate",
    href: "/centennial-hills-market-report",
  },
];

export default function BlogPage() {
  const posts = [...gbpPostTemplates].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-50 pt-20">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
        </div>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                Centennial Hills Real Estate Blog
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Expert insights, market updates, and local real estate news for Centennial Hills and
                northwest Las Vegas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-4">{cat.emoji}</div>
                  <h2 className="text-xl font-semibold mb-3 text-slate-900">{cat.title}</h2>
                  <p className="text-slate-600 mb-4">{cat.description}</p>
                  <span className="text-blue-600 hover:text-blue-800 font-medium">Read More →</span>
                </Link>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-8">Latest Updates</h2>
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md p-6 md:p-8"
                >
                  <time
                    dateTime={post.publishDate}
                    className="text-sm text-slate-500"
                  >
                    {new Date(post.publishDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-4">{post.title}</h3>
                  <div className="text-slate-700 whitespace-pre-line leading-relaxed">
                    {post.content}
                  </div>
                  {post.cta ? (
                    <Link
                      href={normalizeCtaUrl(post.cta.url)}
                      className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {post.cta.text} →
                    </Link>
                  ) : null}
                </article>
              ))}
            </div>

            <div className="mt-12 text-center bg-blue-50 rounded-lg p-8">
              <p className="text-slate-700 mb-4">
                Questions about the Centennial Hills market? Dr. Jan Duffy is available daily.
              </p>
              <Link
                href={agentInfo.phoneTel}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Call {agentInfo.phone}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
