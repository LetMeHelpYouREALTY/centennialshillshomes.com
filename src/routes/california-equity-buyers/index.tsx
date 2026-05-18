import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { CTABanner } from "~/components/CTABanner";
import { SITE_IMAGES, siteImageUrl } from "~/config/site";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							California Equity Buyers
						</h1>
						<p class="text-xl text-green-100">
							Expert Guidance for California Equity Buyers Relocating to Las
							Vegas Luxury Communities
						</p>
					</div>
				</div>
			</section>

			{/* Simple Search Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Find Your Las Vegas Home
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Start your search for luxury homes in Las Vegas. Use our simple
							search tool to find properties that match your California equity
							budget.
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
							Seamless California to Las Vegas Relocation
						</h2>
						<p class="text-lg text-gray-700 mb-6">
							Dr. Jan Duffy specializes in helping California equity buyers
							leverage their home equity to purchase luxury properties in Las
							Vegas. With deep understanding of both California and Nevada
							markets, Dr. Duffy provides expert guidance for buyers looking to
							maximize their purchasing power and lifestyle upgrade.
						</p>
						<p class="text-lg text-gray-700">
							Whether you're downsizing, upsizing, or seeking a better quality
							of life, Dr. Duffy's comprehensive relocation services ensure a
							smooth transition with same-day showings, market analysis, and
							24/7 support throughout your journey.
						</p>
					</div>

					{/* Key Benefits */}
					<div class="grid md:grid-cols-3 gap-8 mb-12">
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">🌴</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								California Market Expertise
							</h3>
							<p class="text-gray-600">
								Deep understanding of California real estate values and equity
							</p>
						</div>
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">💰</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Equity Maximization
							</h3>
							<p class="text-gray-600">
								Strategic guidance to maximize your California home equity
							</p>
						</div>
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">🏡</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Luxury Upgrade
							</h3>
							<p class="text-gray-600">
								Access to premium Las Vegas luxury communities
							</p>
						</div>
					</div>

					{/* Relocation Process */}
					<div class="bg-green-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							California Equity Buyer Process
						</h3>
						<div class="grid md:grid-cols-4 gap-6">
							<div class="text-center">
								<div class="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">1</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Equity Assessment
								</h4>
								<p class="text-sm text-gray-600">
									Evaluate your California home equity and purchasing power
								</p>
							</div>
							<div class="text-center">
								<div class="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">2</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Market Research
								</h4>
								<p class="text-sm text-gray-600">
									Comprehensive Las Vegas luxury market analysis
								</p>
							</div>
							<div class="text-center">
								<div class="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">3</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Property Search
								</h4>
								<p class="text-sm text-gray-600">
									Curated selection of luxury properties matching your criteria
								</p>
							</div>
							<div class="text-center">
								<div class="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">4</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Relocation Support
								</h4>
								<p class="text-sm text-gray-600">
									Complete support through closing and beyond
								</p>
							</div>
						</div>
					</div>

					{/* Popular Communities */}
					<div class="bg-white rounded-lg shadow-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Popular Communities for California Buyers
						</h3>
						<div class="grid md:grid-cols-3 gap-6">
							<div class="text-center p-4 border border-gray-200 rounded-lg">
								<h4 class="font-semibold text-gray-800 mb-2">
									Red Rock Country Club
								</h4>
								<p class="text-sm text-gray-600 mb-2">
									Golf course living with resort amenities
								</p>
								<p class="text-xs text-gray-500">$600K - $1M+</p>
							</div>
							<div class="text-center p-4 border border-gray-200 rounded-lg">
								<h4 class="font-semibold text-gray-800 mb-2">The Ridges</h4>
								<p class="text-sm text-gray-600 mb-2">
									Modern executive homes with mountain views
								</p>
								<p class="text-xs text-gray-500">$500K - $800K</p>
							</div>
							<div class="text-center p-4 border border-gray-200 rounded-lg">
								<h4 class="font-semibold text-gray-800 mb-2">Summerlin West</h4>
								<p class="text-sm text-gray-600 mb-2">
									Established luxury with mature landscaping
								</p>
								<p class="text-xs text-gray-500">$400K - $700K</p>
							</div>
						</div>
					</div>

					{/* Tax Benefits */}
					<div class="bg-blue-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-4 text-gray-800">
							Nevada Tax Advantages
						</h3>
						<div class="grid md:grid-cols-2 gap-6">
							<div>
								<h4 class="font-semibold text-gray-800 mb-2">
									No State Income Tax
								</h4>
								<p class="text-gray-700">
									Keep more of your income with Nevada's tax-friendly
									environment
								</p>
							</div>
							<div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Lower Property Taxes
								</h4>
								<p class="text-gray-700">
									Significantly lower property tax rates compared to California
								</p>
							</div>
							<div>
								<h4 class="font-semibold text-gray-800 mb-2">No Estate Tax</h4>
								<p class="text-gray-700">
									Protect your wealth with Nevada's estate tax benefits
								</p>
							</div>
							<div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Business-Friendly
								</h4>
								<p class="text-gray-700">
									Favorable business climate for entrepreneurs and executives
								</p>
							</div>
						</div>
					</div>

					{/* Interactive Las Vegas Experience */}
					<div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800 text-center">
							Discover Your New Las Vegas Lifestyle
						</h3>
						<p class="text-center text-gray-600 mb-6">
							Experience the excitement of Las Vegas while enjoying the luxury
							and tranquility of West Summerlin. Perfect for California equity
							buyers seeking the best of both worlds.
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
								href="/luxury-home-sales"
								class="bg-white text-green-600 px-6 py-3 rounded-lg border border-green-600 hover:bg-green-600 hover:text-white transition-colors"
							>
								Luxury Home Sales
							</Link>
							<Link
								href="/corporate-relocations"
								class="bg-white text-green-600 px-6 py-3 rounded-lg border border-green-600 hover:bg-green-600 hover:text-white transition-colors"
							>
								Corporate Relocations
							</Link>
							<Link
								href="/market-analysis"
								class="bg-white text-green-600 px-6 py-3 rounded-lg border border-green-600 hover:bg-green-600 hover:text-white transition-colors"
							>
								Market Analysis
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<CTABanner
				title="Ready to Leverage Your California Equity?"
				subtitle="Contact Dr. Jan Duffy for expert guidance on your Las Vegas luxury home purchase"
				primaryButtonText="Schedule Consultation"
				primaryButtonLink="/contact"
				secondaryButtonText="View Luxury Properties"
				secondaryButtonLink="/properties"
				backgroundColor="green"
			/>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"California Equity Buyers | Dr. Jan Duffy | Las Vegas Luxury Real Estate Relocation | Top 1% REALTOR®",
	meta: [
		{
			name: "description",
			content:
				"Dr. Jan Duffy specializes in helping California equity buyers relocate to Las Vegas luxury communities. Expert guidance for leveraging California home equity to purchase luxury homes in Red Rock Country Club, The Ridges & Summerlin West. Call (702) 903-1952.",
		},
		{
			name: "keywords",
			content:
				"California equity buyers Las Vegas, California to Las Vegas relocation, luxury real estate relocation, Dr. Jan Duffy California buyers, Red Rock Country Club California buyers, The Ridges California relocation, Summerlin West California equity, California home equity Las Vegas, relocate from California to Nevada, California real estate equity, luxury relocation services, California equity maximization",
		},
		{
			property: "og:title",
			content:
				"California Equity Buyers | Dr. Jan Duffy | Las Vegas Luxury Real Estate Relocation | Top 1% REALTOR®",
		},
		{
			property: "og:description",
			content:
				"Expert guidance for California equity buyers relocating to Las Vegas luxury communities. Leverage your California home equity for luxury living. Call (702) 903-1952.",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:url",
			content:
				"https://www.centennialhillshomesforsale.com/california-equity-buyers",
		},
		{
			property: "og:image",
			content: "siteImageUrl(SITE_IMAGES.services.californiaEquityBuyers)",
		},
		{
			property: "og:image:alt",
			content:
				"Dr. Jan Duffy - California Equity Buyers Specialist in Las Vegas",
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
				"California Equity Buyers | Dr. Jan Duffy | Las Vegas Luxury Real Estate Relocation",
		},
		{
			name: "twitter:description",
			content:
				"Expert guidance for California equity buyers relocating to Las Vegas luxury communities. Leverage your California home equity for luxury living.",
		},
		{
			name: "twitter:image",
			content: "siteImageUrl(SITE_IMAGES.services.californiaEquityBuyers)",
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
				name: "California Equity Buyers Relocation",
				description:
					"Expert guidance for California equity buyers relocating to Las Vegas luxury communities",
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
				serviceType: "California Equity Buyer Relocation",
				priceRange: "$400K-$750K",
				businessType: "Real Estate Agent",
				additionalType: [
					"Real Estate Agency",
					"Real Estate Consultant",
					"Property Management Company",
				],
				keywords:
					"California equity buyers, luxury real estate, West Summerlin, Red Rock Country Club, The Ridges, Summerlin West, relocation services, Nevada tax advantages",
				knowsAbout: [
					"California Equity Buyers",
					"Luxury Real Estate",
					"West Summerlin Properties",
					"Red Rock Country Club",
					"The Ridges",
					"Summerlin West",
					"Relocation Services",
					"Nevada Tax Benefits",
				],
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: "California Equity Buyer Services",
					itemListElement: [
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Equity Assessment",
								description:
									"Evaluate your California home equity and purchasing power",
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Market Research",
								description: "Comprehensive Las Vegas luxury market analysis",
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Relocation Support",
								description: "Complete support through closing and beyond",
							},
						},
					],
				},
			}),
		},
	],
};
