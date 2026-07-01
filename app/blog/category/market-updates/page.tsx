import ContentLandingPage from "@/components/templates/ContentLandingPage";
import { landingPages } from "@/lib/landing-content";
import { buildPageMetadata } from "@/lib/seo";

const base = landingPages["centennial-hills-market-report"];

const page = {
  ...base,
  slug: "blog/category/market-updates",
  title: "Market Updates — Centennial Hills Real Estate Blog",
  description:
    "Current Centennial Hills and northwest Las Vegas real estate market trends, prices, and analysis.",
  breadcrumbs: [
    { name: "Blog", href: "/blog" },
    { name: "Market Updates", href: "/blog/category/market-updates" },
  ],
};

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: "/blog/category/market-updates",
  keywords: ["market updates", "Centennial Hills", "Las Vegas real estate", "Dr. Jan Duffy"],
});

export default function Page() {
  return <ContentLandingPage data={page} />;
}
