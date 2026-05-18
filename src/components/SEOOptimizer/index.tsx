import { component$ } from "@builder.io/qwik";
import { SITE_IMAGES, siteImageUrl } from "~/config/site";

export interface SEOOptimizerProps {
	pageTitle: string;
	pageDescription: string;
	canonicalUrl: string;
	keywords?: string[];
	imageUrl?: string;
	articlePublishedDate?: string;
	articleModifiedDate?: string;
	author?: string;
	breadcrumbItems?: Array<{
		name: string;
		url: string;
	}>;
}

export const SEOOptimizer = component$<SEOOptimizerProps>((props) => {
	const {
		pageTitle,
		pageDescription,
		canonicalUrl,
		keywords = [],
		imageUrl = siteImageUrl(SITE_IMAGES.ogDefault),
		articlePublishedDate,
		articleModifiedDate,
		author = "Dr. Jan Duffy",
		breadcrumbItems = [],
	} = props;

	// Generate breadcrumb structured data
	const breadcrumbSchema =
		breadcrumbItems.length > 0
			? {
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: breadcrumbItems.map((item, index) => ({
						"@type": "ListItem",
						position: index + 1,
						name: item.name,
						item: item.url,
					})),
				}
			: null;

	// Generate article schema if dates are provided
	const articleSchema = articlePublishedDate
		? {
				"@context": "https://schema.org",
				"@type": "Article",
				headline: pageTitle,
				description: pageDescription,
				image: imageUrl,
				author: {
					"@type": "Person",
					name: author,
				},
				publisher: {
					"@type": "Organization",
					name: "Centennial Hills Real Estate | Homes by Dr. Jan Duffy",
					logo: {
						"@type": "ImageObject",
						url: siteImageUrl(SITE_IMAGES.logoRaster),
					},
				},
				datePublished: articlePublishedDate,
				dateModified: articleModifiedDate || articlePublishedDate,
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": canonicalUrl,
				},
			}
		: null;

	return (
		<>
			{/* Canonical URL */}
			<link rel="canonical" href={canonicalUrl} />

			{/* Meta Tags */}
			<meta name="description" content={pageDescription} />
			{keywords.length > 0 && (
				<meta name="keywords" content={keywords.join(", ")} />
			)}
			<meta name="author" content={author} />
			<meta name="robots" content="index, follow" />
			<meta name="googlebot" content="index, follow" />

			{/* Open Graph Tags */}
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={pageDescription} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:type" content="website" />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:site_name" content="Centennial Hills Real Estate" />
			<meta property="og:locale" content="en_US" />

			{/* Twitter Card Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={pageDescription} />
			<meta name="twitter:image" content={imageUrl} />

			{/* Geo Tags */}
			<meta name="geo.region" content="US-NV" />
			<meta name="geo.placename" content="Las Vegas" />
			<meta name="geo.position" content="36.1699;-115.1398" />
			<meta name="ICBM" content="36.1699, -115.1398" />

			{/* Language Tags */}
			<meta name="language" content="English" />
			<meta name="content-language" content="en" />

			{/* Mobile Optimization */}
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="mobile-web-app-capable" content="yes" />

			{/* Structured Data */}
			{breadcrumbSchema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={JSON.stringify(breadcrumbSchema)}
				/>
			)}
			{articleSchema && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={JSON.stringify(articleSchema)}
				/>
			)}
		</>
	);
});
