import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { CTABanner } from "~/components/CTABanner";
import { SITE_IMAGES, siteImageUrl } from "~/config/site";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Luxury Home Sales
						</h1>
						<p class="text-xl text-blue-100">
							Specializing in Luxury Homes $400K-$750K in West Summerlin's
							Premier Communities
						</p>
					</div>
				</div>
			</section>

			{/* Advanced Search Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Find Your Luxury Home
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Search luxury homes $400K-$750K in West Summerlin's premier
							communities. Use our advanced search to find properties that match
							your luxury lifestyle.
						</p>
						<div class="bg-gray-50 p-6 rounded-lg">
							<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
						</div>
					</div>
				</div>
			</section>

			{/* Service Overview */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
						<h2 class="text-3xl font-bold mb-6 text-gray-800">
							Expert Luxury Home Sales Service
						</h2>
						<p class="text-lg text-gray-700 mb-6">
							Dr. Jan Duffy specializes in luxury home sales ranging from $400K
							to $750K in West Summerlin's most exclusive communities. With over
							30 years of research expertise and Top 1% Las Vegas REALTOR®
							status, Dr. Duffy provides unmatched market insight and
							personalized service for discerning buyers and sellers.
						</p>
						<p class="text-lg text-gray-700">
							Whether you're selling a luxury estate or searching for your dream
							home, Dr. Duffy's comprehensive approach ensures optimal results
							with same-day showings, complimentary market analysis, and 24/7
							availability for executive clients.
						</p>
					</div>

					{/* Key Features */}
					<div class="grid md:grid-cols-3 gap-8 mb-12">
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">🏆</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Top 1% REALTOR®
							</h3>
							<p class="text-gray-600">
								Recognized expertise in luxury real estate
							</p>
						</div>
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">💰</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								$400K-$750K Range
							</h3>
							<p class="text-gray-600">
								Specialized focus on luxury market segment
							</p>
						</div>
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">⏰</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Same-Day Showings
							</h3>
							<p class="text-gray-600">
								Flexible scheduling for busy executives
							</p>
						</div>
					</div>

					{/* Community Specializations */}
					<div class="bg-white rounded-lg shadow-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Luxury Community Specializations
						</h3>
						<div class="grid md:grid-cols-3 gap-6">
							<div class="text-center p-4 border border-gray-200 rounded-lg">
								<h4 class="font-semibold text-gray-800 mb-2">
									Red Rock Country Club
								</h4>
								<p class="text-sm text-gray-600">
									Golf course estates and custom luxury homes
								</p>
							</div>
							<div class="text-center p-4 border border-gray-200 rounded-lg">
								<h4 class="font-semibold text-gray-800 mb-2">The Ridges</h4>
								<p class="text-sm text-gray-600">
									Modern executive properties with mountain views
								</p>
							</div>
							<div class="text-center p-4 border border-gray-200 rounded-lg">
								<h4 class="font-semibold text-gray-800 mb-2">Summerlin West</h4>
								<p class="text-sm text-gray-600">
									Established luxury communities with mature amenities
								</p>
							</div>
						</div>
					</div>

					{/* Process */}
					<div class="bg-blue-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Our Luxury Sales Process
						</h3>
						<div class="grid md:grid-cols-4 gap-6">
							<div class="text-center">
								<div class="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">1</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Market Analysis
								</h4>
								<p class="text-sm text-gray-600">
									Complimentary property valuation and market assessment
								</p>
							</div>
							<div class="text-center">
								<div class="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">2</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Strategic Pricing
								</h4>
								<p class="text-sm text-gray-600">
									Data-driven pricing strategy for optimal market positioning
								</p>
							</div>
							<div class="text-center">
								<div class="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">3</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Premium Marketing
								</h4>
								<p class="text-sm text-gray-600">
									Professional photography, virtual tours, and luxury marketing
								</p>
							</div>
							<div class="text-center">
								<div class="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">4</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Transaction Management
								</h4>
								<p class="text-sm text-gray-600">
									Complete transaction support from offer to closing
								</p>
							</div>
						</div>
					</div>

					{/* Interactive Las Vegas Experience */}
					<div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800 text-center">
							Experience Las Vegas Luxury Living
						</h3>
						<p class="text-center text-gray-600 mb-6">
							Explore the vibrant Las Vegas Strip and discover why luxury living
							in West Summerlin offers the perfect balance of excitement and
							tranquility.
						</p>
						<div class="max-w-4xl mx-auto">
							<div class="sketchfab-embed-wrapper bg-white rounded-lg shadow-lg p-4">
								<iframe
									title="Las Vegas strip, Las Vegas, NV, USA"
									frameBorder="0"
									allowFullscreen
									width="100%"
									height="480"
									src="https://sketchfab.com/models/1e035d7ccbb340db98fe0346afd01a29/embed?autostart=1&camera=0"
									class="rounded-lg"
								></iframe>
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
								href="/california-equity-buyers"
								class="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
							>
								California Equity Buyers
							</Link>
							<Link
								href="/corporate-relocations"
								class="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
							>
								Corporate Relocations
							</Link>
							<Link
								href="/market-analysis"
								class="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
							>
								Market Analysis
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<CTABanner
				title="Ready to Sell Your Luxury Home?"
				subtitle="Get your complimentary market analysis and expert guidance from Dr. Jan Duffy"
				primaryButtonText="Schedule Market Analysis"
				primaryButtonLink="/contact"
				secondaryButtonText="View Luxury Properties"
				secondaryButtonLink="/properties"
				backgroundColor="blue"
			/>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Luxury Home Sales | Dr. Jan Duffy | $400K-$750K West Summerlin Specialist | Top 1% Las Vegas REALTOR®",
	meta: [
		{
			name: "description",
			content:
				"Dr. Jan Duffy specializes in luxury home sales $400K-$750K in Red Rock Country Club, The Ridges & Summerlin West. Top 1% Las Vegas REALTOR® with 30+ years expertise. Same-day showings & complimentary market analysis. Call (702) 903-1952.",
		},
		{
			name: "keywords",
			content:
				"luxury home sales Las Vegas, Dr. Jan Duffy luxury real estate, Red Rock Country Club homes for sale, The Ridges luxury properties, Summerlin West luxury homes, Top 1% Las Vegas REALTOR, luxury homes $400K-$750K, luxury real estate agent Las Vegas, high-end homes Las Vegas, executive homes Las Vegas, luxury property specialist, golf course homes Las Vegas, mountain view homes Las Vegas, luxury communities Las Vegas",
		},
		{
			property: "og:title",
			content:
				"Luxury Home Sales | Dr. Jan Duffy | $400K-$750K West Summerlin Specialist | Top 1% Las Vegas REALTOR®",
		},
		{
			property: "og:description",
			content:
				"Top 1% Las Vegas REALTOR® specializing in luxury home sales $400K-$750K. Red Rock Country Club, The Ridges & Summerlin West expert. Same-day showings available. Call (702) 903-1952.",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:url",
			content: "https://www.centennialhillshomesforsale.com/luxury-home-sales",
		},
		{
			property: "og:image",
			content: "siteImageUrl(SITE_IMAGES.services.luxuryHomeSales)",
		},
		{
			property: "og:image:alt",
			content: "Dr. Jan Duffy - Luxury Home Sales Specialist in Las Vegas",
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
				"Luxury Home Sales | Dr. Jan Duffy | $400K-$750K West Summerlin Specialist",
		},
		{
			name: "twitter:description",
			content:
				"Top 1% Las Vegas REALTOR® specializing in luxury home sales $400K-$750K. Red Rock Country Club, The Ridges & Summerlin West expert.",
		},
		{
			name: "twitter:image",
			content: "siteImageUrl(SITE_IMAGES.services.luxuryHomeSales)",
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
				name: "Luxury Home Sales",
				description:
					"Professional luxury home sales service specializing in $400K-$750K properties in West Summerlin",
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
				serviceType: "Luxury Real Estate Sales",
				priceRange: "$400K-$750K",
				businessType: "Real Estate Agent",
				additionalType: [
					"Real Estate Agency",
					"Real Estate Consultant",
					"Property Management Company",
				],
				keywords:
					"luxury real estate, West Summerlin, Red Rock Country Club, The Ridges, Summerlin West, California equity buyers, corporate relocations, same-day showings, market analysis",
				knowsAbout: [
					"Luxury Real Estate",
					"West Summerlin Properties",
					"Red Rock Country Club",
					"The Ridges",
					"Summerlin West",
					"California Equity Buyers",
					"Corporate Relocations",
					"Market Analysis",
					"Property Valuation",
				],
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: "Luxury Home Sales Services",
					itemListElement: [
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Market Analysis",
								description:
									"Complimentary market analysis and property valuation",
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Strategic Pricing",
								description:
									"Data-driven pricing strategy for optimal market positioning",
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Premium Marketing",
								description:
									"Professional photography, virtual tours, and luxury marketing",
							},
						},
					],
				},
			}),
		},
	],
};
