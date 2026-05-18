import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { CTABanner } from "~/components/CTABanner";
import { SITE_IMAGES, siteImageUrl } from "~/config/site";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Investment Properties
						</h1>
						<p class="text-xl text-emerald-100">
							Strategic Guidance for Luxury Real Estate Investments with
							Detailed Market Insights
						</p>
					</div>
				</div>
			</section>

			{/* Simple Search Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Find Investment Properties
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Start your investment property search. Use our simple search tool
							to find luxury properties with strong investment potential.
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
							Luxury Real Estate Investment Expertise
						</h2>
						<p class="text-lg text-gray-700 mb-6">
							Dr. Jan Duffy provides strategic guidance for luxury real estate
							investments in West Summerlin's premier communities. With 30+
							years of research expertise and Top 1% Las Vegas REALTOR® status,
							Dr. Duffy offers comprehensive investment analysis, ROI
							projections, and portfolio management for discerning investors.
						</p>
						<p class="text-lg text-gray-700">
							Whether you're building a luxury rental portfolio, seeking
							appreciation opportunities, or looking for vacation rental
							properties, Dr. Duffy's investment expertise ensures optimal
							returns with detailed market insights and strategic
							recommendations.
						</p>
					</div>

					{/* Investment Types */}
					<div class="grid md:grid-cols-3 gap-8 mb-12">
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">🏠</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Luxury Rentals
							</h3>
							<p class="text-gray-600">
								High-end rental properties with premium returns
							</p>
						</div>
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">📈</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Appreciation Plays
							</h3>
							<p class="text-gray-600">
								Properties with strong appreciation potential
							</p>
						</div>
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">🏖️</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Vacation Rentals
							</h3>
							<p class="text-gray-600">
								Short-term rental opportunities in luxury communities
							</p>
						</div>
					</div>

					{/* Investment Analysis */}
					<div class="bg-emerald-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Investment Analysis Process
						</h3>
						<div class="grid md:grid-cols-4 gap-6">
							<div class="text-center">
								<div class="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">1</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Market Research
								</h4>
								<p class="text-sm text-gray-600">
									Comprehensive market analysis and trends
								</p>
							</div>
							<div class="text-center">
								<div class="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">2</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">ROI Analysis</h4>
								<p class="text-sm text-gray-600">
									Detailed return on investment calculations
								</p>
							</div>
							<div class="text-center">
								<div class="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">3</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Risk Assessment
								</h4>
								<p class="text-sm text-gray-600">
									Comprehensive risk evaluation and mitigation
								</p>
							</div>
							<div class="text-center">
								<div class="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">4</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Portfolio Strategy
								</h4>
								<p class="text-sm text-gray-600">
									Strategic portfolio development and management
								</p>
							</div>
						</div>
					</div>

					{/* Investment Opportunities */}
					<div class="bg-white rounded-lg shadow-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Premium Investment Opportunities
						</h3>
						<div class="grid md:grid-cols-3 gap-6">
							<div class="text-center p-4 border border-gray-200 rounded-lg">
								<h4 class="font-semibold text-gray-800 mb-2">
									Red Rock Country Club
								</h4>
								<p class="text-sm text-gray-600 mb-2">
									Golf course properties with resort amenities
								</p>
								<p class="text-xs text-gray-500">
									High-end rentals and appreciation
								</p>
							</div>
							<div class="text-center p-4 border border-gray-200 rounded-lg">
								<h4 class="font-semibold text-gray-800 mb-2">The Ridges</h4>
								<p class="text-sm text-gray-600 mb-2">
									Modern executive homes with mountain views
								</p>
								<p class="text-xs text-gray-500">
									Executive rentals and luxury living
								</p>
							</div>
							<div class="text-center p-4 border border-gray-200 rounded-lg">
								<h4 class="font-semibold text-gray-800 mb-2">Summerlin West</h4>
								<p class="text-sm text-gray-600 mb-2">
									Established luxury with mature amenities
								</p>
								<p class="text-xs text-gray-500">
									Stable rentals and family appeal
								</p>
							</div>
						</div>
					</div>

					{/* Investment Metrics */}
					<div class="bg-gray-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Investment Analysis Metrics
						</h3>
						<div class="grid md:grid-cols-2 gap-8">
							<div>
								<h4 class="font-semibold text-gray-800 mb-3">
									Financial Analysis
								</h4>
								<ul class="space-y-2 text-gray-700">
									<li>• Cash flow projections and analysis</li>
									<li>• Cap rate calculations and comparisons</li>
									<li>• Net operating income (NOI) analysis</li>
									<li>• Internal rate of return (IRR) calculations</li>
									<li>• Tax implications and benefits</li>
								</ul>
							</div>
							<div>
								<h4 class="font-semibold text-gray-800 mb-3">
									Market Analysis
								</h4>
								<ul class="space-y-2 text-gray-700">
									<li>• Rental market trends and projections</li>
									<li>• Occupancy rates and demand analysis</li>
									<li>• Comparable property analysis</li>
									<li>• Market appreciation potential</li>
									<li>• Economic indicators and forecasts</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Investment Benefits */}
					<div class="bg-emerald-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-4 text-gray-800">
							Las Vegas Investment Advantages
						</h3>
						<div class="grid md:grid-cols-2 gap-6">
							<div>
								<h4 class="font-semibold text-gray-800 mb-2">Tax Benefits</h4>
								<p class="text-gray-700">
									No state income tax, favorable property tax rates, and
									business-friendly environment
								</p>
							</div>
							<div>
								<h4 class="font-semibold text-gray-800 mb-2">Tourism Market</h4>
								<p class="text-gray-700">
									Strong tourism industry supporting vacation rental demand
								</p>
							</div>
							<div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Economic Growth
								</h4>
								<p class="text-gray-700">
									Diverse economy with technology, entertainment, and business
									sectors
								</p>
							</div>
							<div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Lifestyle Appeal
								</h4>
								<p class="text-gray-700">
									Year-round outdoor activities and entertainment options
								</p>
							</div>
						</div>
					</div>

					{/* Interactive Las Vegas Experience */}
					<div class="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800 text-center">
							Invest in Las Vegas - America's Entertainment Capital
						</h3>
						<p class="text-center text-gray-600 mb-6">
							Las Vegas continues to be a top destination for real estate
							investors, with strong rental demand, tourism growth, and business
							development. Explore the city that never sleeps.
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
								href="/market-analysis"
								class="bg-white text-emerald-600 px-6 py-3 rounded-lg border border-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
							>
								Market Analysis
							</Link>
							<Link
								href="/luxury-home-sales"
								class="bg-white text-emerald-600 px-6 py-3 rounded-lg border border-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
							>
								Luxury Home Sales
							</Link>
							<Link
								href="/california-equity-buyers"
								class="bg-white text-emerald-600 px-6 py-3 rounded-lg border border-emerald-600 hover:bg-emerald-600 hover:text-white transition-colors"
							>
								California Equity Buyers
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<CTABanner
				title="Ready to Build Your Luxury Investment Portfolio?"
				subtitle="Contact Dr. Jan Duffy for strategic investment guidance and market analysis"
				primaryButtonText="Schedule Investment Consultation"
				primaryButtonLink="/contact"
				secondaryButtonText="View Investment Properties"
				secondaryButtonLink="/properties"
				backgroundColor="green"
			/>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Investment Properties | Dr. Jan Duffy | Luxury Real Estate Investment Guidance | ROI Analysis",
	meta: [
		{
			name: "description",
			content:
				"Dr. Jan Duffy provides strategic guidance for luxury real estate investments in West Summerlin. Comprehensive investment analysis, ROI projections, and portfolio management for Red Rock Country Club, The Ridges & Summerlin West properties. Call (702) 903-1952.",
		},
		{
			name: "keywords",
			content:
				"investment properties Las Vegas, luxury real estate investments, Dr. Jan Duffy investment properties, Red Rock Country Club investments, The Ridges investment properties, Summerlin West luxury investments, real estate portfolio management, luxury rental properties Las Vegas, vacation rental investments, real estate ROI analysis, property investment strategy, luxury home investments",
		},
		{
			property: "og:title",
			content:
				"Investment Properties | Dr. Jan Duffy | Luxury Real Estate Investment Guidance | ROI Analysis",
		},
		{
			property: "og:description",
			content:
				"Strategic guidance for luxury real estate investments. Comprehensive analysis, ROI projections, and portfolio management for premium properties. Call (702) 903-1952.",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:url",
			content:
				"https://www.centennialhillshomesforsale.com/investment-properties",
		},
		{
			property: "og:image",
			content: "siteImageUrl(SITE_IMAGES.services.investmentProperties)",
		},
		{
			property: "og:image:alt",
			content: "Dr. Jan Duffy - Investment Properties Specialist in Las Vegas",
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
				"Investment Properties | Dr. Jan Duffy | Luxury Real Estate Investment Guidance",
		},
		{
			name: "twitter:description",
			content:
				"Strategic guidance for luxury real estate investments. Comprehensive analysis, ROI projections, and portfolio management for premium properties.",
		},
		{
			name: "twitter:image",
			content: "siteImageUrl(SITE_IMAGES.services.investmentProperties)",
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
				name: "Luxury Real Estate Investment Guidance",
				description:
					"Strategic guidance for luxury real estate investments with comprehensive analysis and ROI projections",
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
				serviceType: "Luxury Real Estate Investment Guidance",
				priceRange: "$400K-$750K",
				businessType: "Real Estate Agent",
				additionalType: [
					"Real Estate Agency",
					"Real Estate Consultant",
					"Property Management Company",
				],
				keywords:
					"investment properties, luxury real estate investments, ROI analysis, luxury rental properties, vacation rental investments, real estate portfolio management, West Summerlin",
				knowsAbout: [
					"Investment Properties",
					"Luxury Real Estate Investments",
					"ROI Analysis",
					"Luxury Rental Properties",
					"Vacation Rental Investments",
					"Real Estate Portfolio Management",
					"West Summerlin Properties",
				],
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: "Investment Property Services",
					itemListElement: [
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "ROI Analysis",
								description:
									"Detailed return on investment calculations and projections",
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Market Research",
								description:
									"Comprehensive market analysis and trends for investment properties",
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Portfolio Strategy",
								description: "Strategic portfolio development and management",
							},
						},
					],
				},
			}),
		},
	],
};
