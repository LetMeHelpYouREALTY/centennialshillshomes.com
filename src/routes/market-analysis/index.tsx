import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { CTABanner } from "~/components/CTABanner";
import { SITE_IMAGES, siteImageUrl } from "~/config/site";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">Market Analysis</h1>
						<p class="text-xl text-indigo-100">
							Complimentary Market Analysis and Property Valuation for All
							Luxury Properties
						</p>
					</div>
				</div>
			</section>

			{/* Simple Search Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Explore Market Properties
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Before getting your market analysis, explore available luxury
							properties. Use our simple search to see current market inventory.
						</p>
						<div class="bg-gray-50 p-6 rounded-lg">
							<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
						</div>
					</div>
				</div>
			</section>

			{/* Service Overview */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
						<h2 class="text-3xl font-bold mb-6 text-gray-800">
							Professional Market Analysis Service
						</h2>
						<p class="text-lg text-gray-700 mb-6">
							Dr. Jan Duffy provides comprehensive market analysis and property
							valuation services for all luxury properties in West Summerlin.
							With 30+ years of research expertise and Top 1% Las Vegas REALTOR®
							status, Dr. Duffy delivers accurate, data-driven assessments to
							help you make informed real estate decisions.
						</p>
						<p class="text-lg text-gray-700">
							Our complimentary market analysis includes detailed market trends,
							comparable sales, neighborhood insights, and strategic
							recommendations tailored to your specific property and goals.
						</p>
					</div>

					{/* Analysis Components */}
					<div class="grid md:grid-cols-3 gap-8 mb-12">
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">📊</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Market Trends
							</h3>
							<p class="text-gray-600">
								Current market conditions and future projections
							</p>
						</div>
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">🏠</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Comparable Sales
							</h3>
							<p class="text-gray-600">
								Recent sales data and market comparisons
							</p>
						</div>
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">🎯</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Strategic Pricing
							</h3>
							<p class="text-gray-600">
								Optimal pricing strategy for maximum value
							</p>
						</div>
					</div>

					{/* Analysis Process */}
					<div class="bg-indigo-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Market Analysis Process
						</h3>
						<div class="grid md:grid-cols-4 gap-6">
							<div class="text-center">
								<div class="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">1</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Property Assessment
								</h4>
								<p class="text-sm text-gray-600">
									Detailed evaluation of property features and condition
								</p>
							</div>
							<div class="text-center">
								<div class="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">2</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Market Research
								</h4>
								<p class="text-sm text-gray-600">
									Comprehensive analysis of local market conditions
								</p>
							</div>
							<div class="text-center">
								<div class="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">3</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Comparable Analysis
								</h4>
								<p class="text-sm text-gray-600">
									Recent sales and active listings comparison
								</p>
							</div>
							<div class="text-center">
								<div class="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">4</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Report Delivery
								</h4>
								<p class="text-sm text-gray-600">
									Detailed report with recommendations and strategy
								</p>
							</div>
						</div>
					</div>

					{/* Analysis Types */}
					<div class="bg-white rounded-lg shadow-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Types of Market Analysis
						</h3>
						<div class="grid md:grid-cols-2 gap-8">
							<div>
								<h4 class="font-semibold text-gray-800 mb-3">
									Seller Market Analysis
								</h4>
								<ul class="space-y-2 text-gray-700">
									<li>• Current market value assessment</li>
									<li>• Optimal listing price recommendation</li>
									<li>• Market timing analysis</li>
									<li>• Competitive positioning strategy</li>
									<li>• Marketing recommendations</li>
								</ul>
							</div>
							<div>
								<h4 class="font-semibold text-gray-800 mb-3">
									Buyer Market Analysis
								</h4>
								<ul class="space-y-2 text-gray-700">
									<li>• Market conditions for buyers</li>
									<li>• Price trends and projections</li>
									<li>• Neighborhood value analysis</li>
									<li>• Investment potential assessment</li>
									<li>• Negotiation strategy guidance</li>
								</ul>
							</div>
							<div>
								<h4 class="font-semibold text-gray-800 mb-3">
									Investment Analysis
								</h4>
								<ul class="space-y-2 text-gray-700">
									<li>• ROI projections and calculations</li>
									<li>• Rental market analysis</li>
									<li>• Appreciation potential assessment</li>
									<li>• Tax implications and benefits</li>
									<li>• Portfolio diversification analysis</li>
								</ul>
							</div>
							<div>
								<h4 class="font-semibold text-gray-800 mb-3">
									Relocation Analysis
								</h4>
								<ul class="space-y-2 text-gray-700">
									<li>• Market comparison with origin location</li>
									<li>• Lifestyle and amenity assessment</li>
									<li>• School district and family considerations</li>
									<li>• Long-term value projections</li>
									<li>• Community integration factors</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Market Data Sources */}
					<div class="bg-gray-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Market Data Sources
						</h3>
						<div class="grid md:grid-cols-3 gap-6">
							<div class="text-center p-4">
								<h4 class="font-semibold text-gray-800 mb-2">MLS Data</h4>
								<p class="text-sm text-gray-600">
									Comprehensive Multiple Listing Service data
								</p>
							</div>
							<div class="text-center p-4">
								<h4 class="font-semibold text-gray-800 mb-2">Public Records</h4>
								<p class="text-sm text-gray-600">
									Official property records and tax assessments
								</p>
							</div>
							<div class="text-center p-4">
								<h4 class="font-semibold text-gray-800 mb-2">Market Reports</h4>
								<p class="text-sm text-gray-600">
									Industry reports and market intelligence
								</p>
							</div>
						</div>
					</div>

					{/* Related Services */}
					<div class="text-center">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Related Services
						</h3>
						<div class="flex flex-wrap justify-center gap-4">
							<Link
								href="/luxury-home-sales"
								class="bg-white text-indigo-600 px-6 py-3 rounded-lg border border-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
							>
								Luxury Home Sales
							</Link>
							<Link
								href="/investment-properties"
								class="bg-white text-indigo-600 px-6 py-3 rounded-lg border border-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
							>
								Investment Properties
							</Link>
							<Link
								href="/california-equity-buyers"
								class="bg-white text-indigo-600 px-6 py-3 rounded-lg border border-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
							>
								California Equity Buyers
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<CTABanner
				title="Get Your Complimentary Market Analysis"
				subtitle="Contact Dr. Jan Duffy for professional market analysis and property valuation"
				primaryButtonText="Request Market Analysis"
				primaryButtonLink="/contact"
				secondaryButtonText="View Sample Report"
				secondaryButtonLink="/contact"
				backgroundColor="blue"
			/>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Market Analysis | Dr. Jan Duffy | Complimentary Luxury Property Valuation | Top 1% REALTOR®",
	meta: [
		{
			name: "description",
			content:
				"Dr. Jan Duffy provides complimentary market analysis and property valuation for luxury properties in West Summerlin. Professional market trends, comparable sales, and strategic pricing recommendations for Red Rock Country Club, The Ridges & Summerlin West. Call (702) 903-1952.",
		},
		{
			name: "keywords",
			content:
				"market analysis Las Vegas, property valuation luxury homes, Dr. Jan Duffy market analysis, luxury real estate market trends, Red Rock Country Club market analysis, The Ridges property valuation, Summerlin West market data, free property valuation Las Vegas, luxury home appraisal, real estate market trends Las Vegas, property value analysis, home value estimator Las Vegas",
		},
		{
			property: "og:title",
			content:
				"Market Analysis | Dr. Jan Duffy | Complimentary Luxury Property Valuation | Top 1% REALTOR®",
		},
		{
			property: "og:description",
			content:
				"Professional market analysis and property valuation for luxury properties. Complimentary service with detailed market trends and strategic recommendations. Call (702) 903-1952.",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:url",
			content: "https://www.centennialhillshomesforsale.com/market-analysis",
		},
		{
			property: "og:image",
			content: "siteImageUrl(SITE_IMAGES.services.marketAnalysis)",
		},
		{
			property: "og:image:alt",
			content: "Dr. Jan Duffy - Market Analysis Specialist in Las Vegas",
		},
		{
			property: "og:site_name",
			content: "Centennial Hills Homes",
		},
		{
			property: "og:locale",
			content: "en_US",
		},
		{
			name: "twitter:card",
			content: "summary_large_image",
		},
		{
			name: "twitter:title",
			content:
				"Market Analysis | Dr. Jan Duffy | Complimentary Luxury Property Valuation",
		},
		{
			name: "twitter:description",
			content:
				"Professional market analysis and property valuation for luxury properties. Complimentary service with detailed market trends and strategic recommendations.",
		},
		{
			name: "twitter:image",
			content: "siteImageUrl(SITE_IMAGES.services.marketAnalysis)",
		},
		{
			name: "robots",
			content:
				"index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
		},
		{
			name: "author",
			content: "Dr. Jan Duffy",
		},
		{
			name: "geo.region",
			content: "US-NV",
		},
		{
			name: "geo.placename",
			content: "Las Vegas",
		},
		{
			name: "geo.position",
			content: "36.1699;-115.1398",
		},
		{
			name: "ICBM",
			content: "36.1699, -115.1398",
		},
		{
			name: "application/ld+json",
			content: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Service",
				name: "Market Analysis and Property Valuation",
				description:
					"Complimentary market analysis and property valuation for luxury properties in West Summerlin",
				provider: {
					"@type": "RealEstateAgent",
					name: "Dr. Jan Duffy",
					telephone: "(702) 903-1952",
					url: "https://www.centennialhillshomesforsale.com",
					email: "DrDuffy@CentennialHillsHomesForSale.com",
					foundingDate: "1993-09-01",
					description:
						"Luxury real estate specialist serving West Summerlin's premier neighborhoods including ZIP codes 89138, 89144, and 89135. Dr. Jan Duffy, REALTOR® offers 30+ years of research expertise in luxury homes $400K-$750K. Specializing in Red Rock Country Club, The Ridges, and Summerlin West communities for California equity buyers and corporate relocations. Top 1% Las Vegas REALTOR® providing same-day showings and complimentary market analysis. Available 24/7 for executive clients and luxury home investments.",
					address: {
						"@type": "PostalAddress",
						streetAddress: "1490 Center Crossing Rd",
						addressLocality: "Las Vegas",
						addressRegion: "NV",
						postalCode: "89144",
						addressCountry: "US",
					},
					openingHours: "Mo-Su 06:00-21:00",
					availableLanguage: [
						"English",
						"Mandarin",
						"Korean",
						"French",
						"American Sign Language",
						"Filipino",
						"Ukrainian",
						"Russian",
					],
					paymentAccepted: ["Cash", "Check", "Credit Card", "Wire Transfer"],
					currenciesAccepted: "USD",
					sameAs: [
						"https://www.linkedin.com/company/california-to-vegas-homes",
						"https://www.instagram.com/drjanduffy/",
						"https://www.facebook.com/SummerlinNewHomesBHHS",
						"https://www.youtube.com/@DrDuffy",
						"https://www.pinterest.com/DrJanDuffy/",
					],
					identifier: {
						"@type": "PropertyValue",
						name: "Google Business Profile ID",
						value: "Centennial Hills Real Estate | Homes by Dr. Jan Duffy",
					},
				},
				areaServed: [
					{ "@type": "City", name: "Lone Mountain, NV", postalCode: "89129" },
					{ "@type": "City", name: "North Las Vegas, NV", postalCode: "89030" },
					{
						"@type": "City",
						name: "Summerlin South, Las Vegas, NV",
						postalCode: "89135",
					},
					{
						"@type": "City",
						name: "Summerlin, Las Vegas, NV",
						postalCode: "89134",
					},
					{
						"@type": "City",
						name: "Providence, Las Vegas, NV",
						postalCode: "89138",
					},
					{
						"@type": "City",
						name: "Kyle Canyon, Las Vegas, NV",
						postalCode: "89124",
					},
					{
						"@type": "City",
						name: "Tule Springs, Las Vegas, NV",
						postalCode: "89131",
					},
					{
						"@type": "City",
						name: "Elkhorn, Las Vegas, NV",
						postalCode: "89131",
					},
					{
						"@type": "City",
						name: "Antelope, Las Vegas, NV",
						postalCode: "89149",
					},
					{
						"@type": "City",
						name: "Summerlin West, Las Vegas, NV",
						postalCode: "89138",
					},
					{
						"@type": "City",
						name: "Summerlin North, Las Vegas, NV",
						postalCode: "89144",
					},
					{
						"@type": "City",
						name: "Centennial Hills, Las Vegas, NV",
						postalCode: "89149",
					},
					{
						"@type": "City",
						name: "Los Prados, Las Vegas, NV",
						postalCode: "89130",
					},
					{
						"@type": "City",
						name: "The Springs, Las Vegas, NV",
						postalCode: "89130",
					},
					{
						"@type": "City",
						name: "Wyeth Ranch, Las Vegas, NV",
						postalCode: "89131",
					},
					{
						"@type": "City",
						name: "La Madre Foothills, Las Vegas, NV",
						postalCode: "89135",
					},
					{
						"@type": "City",
						name: "Carmel Canyon, Las Vegas, NV",
						postalCode: "89131",
					},
					{
						"@type": "City",
						name: "Silverstone Ranch, Las Vegas, NV",
						postalCode: "89131",
					},
					{
						"@type": "City",
						name: "Iron Mountain Ranch, Las Vegas, NV",
						postalCode: "89131",
					},
					{
						"@type": "City",
						name: "Lone Mountain Heights, Las Vegas, NV",
						postalCode: "89129",
					},
				],
				serviceType: "Market Analysis and Property Valuation",
				priceRange: "$400K-$750K",
				businessType: "Real Estate Agent",
				additionalType: [
					"Real Estate Agency",
					"Real Estate Consultant",
					"Property Management Company",
				],
				keywords:
					"market analysis, property valuation, luxury real estate, West Summerlin, Red Rock Country Club, The Ridges, Summerlin West, complimentary analysis",
				knowsAbout: [
					"Market Analysis",
					"Property Valuation",
					"Luxury Real Estate",
					"West Summerlin Properties",
					"Red Rock Country Club",
					"The Ridges",
					"Summerlin West",
					"Real Estate Trends",
				],
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: "Market Analysis Services",
					itemListElement: [
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Property Assessment",
								description:
									"Detailed evaluation of property features and condition",
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Market Research",
								description:
									"Comprehensive analysis of local market conditions",
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Comparable Analysis",
								description: "Recent sales and active listings comparison",
							},
						},
					],
				},
			}),
		},
	],
};
