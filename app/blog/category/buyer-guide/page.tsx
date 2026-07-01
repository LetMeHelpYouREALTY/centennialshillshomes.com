import ContentLandingPage from "@/components/templates/ContentLandingPage";
import { landingPages } from "@/lib/landing-content";
import { buildPageMetadata } from "@/lib/seo";

const base = landingPages["buying-guide"];

const page = {
  ...base,
  slug: "blog/category/buyer-guide",
  title: "Buyer's Guide — Las Vegas Real Estate Blog",
  description:
    "Comprehensive buyer's guide with tips and strategies for purchasing a home in Centennial Hills and Las Vegas.",
  breadcrumbs: [
    { name: "Blog", href: "/blog" },
    { name: "Buyer's Guide", href: "/blog/category/buyer-guide" },
  ],
};

export const metadata = buildPageMetadata({
  title: page.title,
  description: page.description,
  path: "/blog/category/buyer-guide",
  keywords: ["buyer guide", "Centennial Hills", "Las Vegas real estate", "Dr. Jan Duffy"],
});

export default function Page() {
  return <ContentLandingPage data={page} />;
}
