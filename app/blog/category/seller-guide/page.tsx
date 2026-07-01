import ContentLandingPage from "@/components/templates/ContentLandingPage";
import { landingPages } from "@/lib/landing-content";
import { buildPageMetadata } from "@/lib/seo";

const base = landingPages["selling-guide"];

const page = {
  ...base,
  slug: "blog/category/seller-guide",
  title: "Seller's Guide — Las Vegas Real Estate Blog",
  description:
    "Expert tips for selling your Centennial Hills home at the best price. Strategies from Dr. Jan Duffy.",
  breadcrumbs: [
    { name: "Blog", href: "/blog" },
    { name: "Seller's Guide", href: "/blog/category/seller-guide" },
  ],
};

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: "/blog/category/seller-guide",
  keywords: ["seller guide", "Centennial Hills", "Las Vegas real estate", "Dr. Jan Duffy"],
});

export default function Page() {
  return <ContentLandingPage data={page} />;
}
