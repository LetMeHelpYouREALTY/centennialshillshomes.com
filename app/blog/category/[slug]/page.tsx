import ServiceLandingPage, { serviceMetadata } from "@/components/templates/ServiceLandingPage";
import { blogCategories } from "@/lib/blog-content";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(blogCategories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = blogCategories[slug];
  if (!page) return {};
  return serviceMetadata(
    `blog/category/${slug}`,
    page.title,
    page.description,
  );
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const page = blogCategories[slug];
  if (!page) notFound();

  return (
    <ServiceLandingPage
      {...page}
      slug={`blog/category/${slug}`}
    />
  );
}
