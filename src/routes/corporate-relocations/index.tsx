import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { CTABanner } from "~/components/CTABanner";
import { SITE_IMAGES, siteImageUrl } from "~/config/site";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Corporate Relocations
						</h1>
						<p class="text-xl text-purple-100">
							Comprehensive Support for Executive Clients and Corporate
							Relocations
						</p>
					</div>
				</div>
			</section>

			{/* Simple Search Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Find Your Executive Home
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Start your corporate relocation home search. Use our simple search
							tool to find luxury properties perfect for executive living.
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
							Executive-Level Relocation Services
						</h2>
						<p class="text-lg text-gray-700 mb-6">
							Dr. Jan Duffy provides comprehensive corporate relocation services
							tailored for executives, C-suite professionals, and corporate
							clients. With 30+ years of expertise and Top 1% Las Vegas REALTOR®
							status, Dr. Duffy understands the unique needs of busy
							professionals requiring seamless transitions.
						</p>
						<p class="text-lg text-gray-700">
							From same-day showings to complete relocation coordination, Dr.
							Duffy ensures minimal disruption to your professional schedule
							while maximizing your luxury living experience in Las Vegas's
							premier communities.
						</p>
					</div>

					{/* Key Services */}
					<div class="grid md:grid-cols-3 gap-8 mb-12">
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">🏢</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Executive Support
							</h3>
							<p class="text-gray-600">
								Dedicated service for C-suite and senior executives
							</p>
						</div>
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">⚡</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Same-Day Showings
							</h3>
							<p class="text-gray-600">
								Flexible scheduling to accommodate busy schedules
							</p>
						</div>
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">🌐</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Global Relocations
							</h3>
							<p class="text-gray-600">
								Support for international corporate moves
							</p>
						</div>
					</div>

					{/* Corporate Services */}
					<div class="bg-purple-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Corporate Relocation Services
						</h3>
						<div class="grid md:grid-cols-2 gap-8">
							<div>
								<h4 class="font-semibold text-gray-800 mb-3">
									Pre-Relocation Planning
								</h4>
								<ul class="space-y-2 text-gray-700">
									<li>• Market analysis and area familiarization</li>
									<li>• School district research and recommendations</li>
									<li>• Community amenities and lifestyle assessment</li>
									<li>• Temporary housing coordination</li>
								</ul>
							</div>
							<div>
								<h4 class="font-semibold text-gray-800 mb-3">
									Property Search & Acquisition
								</h4>
								<ul class="space-y-2 text-gray-700">
									<li>• Curated luxury property selection</li>
									<li>• Virtual tours and remote viewing options</li>
									<li>• Same-day and weekend showings</li>
									<li>• Investment property analysis</li>
								</ul>
							</div>
							<div>
								<h4 class="font-semibold text-gray-800 mb-3">
									Transaction Management
								</h4>
								<ul class="space-y-2 text-gray-700">
									<li>• Complete transaction coordination</li>
									<li>• Vendor referrals and management</li>
									<li>• Timeline management and updates</li>
									<li>• Corporate relocation package coordination</li>
								</ul>
							</div>
							<div>
								<h4 class="font-semibold text-gray-800 mb-3">
									Post-Relocation Support
								</h4>
								<ul class="space-y-2 text-gray-700">
									<li>• Local service provider introductions</li>
									<li>• Community integration assistance</li>
									<li>• Ongoing property management support</li>
									<li>• Investment property portfolio management</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Executive Communities */}
					<div class="bg-white rounded-lg shadow-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Preferred Executive Communities
						</h3>
						<div class="grid md:grid-cols-3 gap-6">
							<div class="text-center p-4 border border-gray-200 rounded-lg">
								<h4 class="font-semibold text-gray-800 mb-2">
									Red Rock Country Club
								</h4>
								<p class="text-sm text-gray-600 mb-2">
									Golf course estates with resort amenities
								</p>
								<p class="text-xs text-gray-500">
									Perfect for executives seeking luxury and privacy
								</p>
							</div>
							<div class="text-center p-4 border border-gray-200 rounded-lg">
								<h4 class="font-semibold text-gray-800 mb-2">The Ridges</h4>
								<p class="text-sm text-gray-600 mb-2">
									Modern executive homes with mountain views
								</p>
								<p class="text-xs text-gray-500">
									Ideal for contemporary luxury living
								</p>
							</div>
							<div class="text-center p-4 border border-gray-200 rounded-lg">
								<h4 class="font-semibold text-gray-800 mb-2">Summerlin West</h4>
								<p class="text-sm text-gray-600 mb-2">
									Established luxury with top-rated schools
								</p>
								<p class="text-xs text-gray-500">
									Excellent for families and executives
								</p>
							</div>
						</div>
					</div>

					{/* Timeline */}
					<div class="bg-gray-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Typical Corporate Relocation Timeline
						</h3>
						<div class="grid md:grid-cols-4 gap-6">
							<div class="text-center">
								<div class="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">1</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">Week 1-2</h4>
								<p class="text-sm text-gray-600">
									Initial consultation and market analysis
								</p>
							</div>
							<div class="text-center">
								<div class="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">2</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">Week 3-4</h4>
								<p class="text-sm text-gray-600">
									Property search and virtual tours
								</p>
							</div>
							<div class="text-center">
								<div class="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">3</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">Week 5-6</h4>
								<p class="text-sm text-gray-600">
									On-site visits and property selection
								</p>
							</div>
							<div class="text-center">
								<div class="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">4</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">Week 7-8</h4>
								<p class="text-sm text-gray-600">
									Transaction completion and move-in
								</p>
							</div>
						</div>
					</div>

					{/* Interactive Las Vegas Experience */}
					<div class="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800 text-center">
							Welcome to Las Vegas - Your New Business Hub
						</h3>
						<p class="text-center text-gray-600 mb-6">
							Las Vegas offers world-class business opportunities with easy
							access to entertainment, dining, and luxury amenities. Perfect for
							corporate executives and business professionals.
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
								class="bg-white text-purple-600 px-6 py-3 rounded-lg border border-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
							>
								Luxury Home Sales
							</Link>
							<Link
								href="/california-equity-buyers"
								class="bg-white text-purple-600 px-6 py-3 rounded-lg border border-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
							>
								California Equity Buyers
							</Link>
							<Link
								href="/same-day-showings"
								class="bg-white text-purple-600 px-6 py-3 rounded-lg border border-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
							>
								Same-Day Showings
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<CTABanner
				title="Planning Your Corporate Relocation?"
				subtitle="Contact Dr. Jan Duffy for comprehensive executive relocation services"
				primaryButtonText="Schedule Consultation"
				primaryButtonLink="/contact"
				secondaryButtonText="View Luxury Properties"
				secondaryButtonLink="/properties"
				backgroundColor="purple"
			/>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Corporate Relocations | Dr. Jan Duffy | Executive Luxury Real Estate Services | Top 1% REALTOR®",
	meta: [
		{
			name: "description",
			content:
				"Dr. Jan Duffy provides comprehensive corporate relocation services for executives and corporate clients. Same-day showings, complete transaction management, and luxury property expertise in Red Rock Country Club, The Ridges & Summerlin West. Call (702) 903-1952.",
		},
		{
			name: "keywords",
			content:
				"corporate relocations Las Vegas, executive real estate services, Dr. Jan Duffy corporate relocation, luxury corporate housing, executive home search Las Vegas, corporate relocation services, same-day showings executives, C-suite relocation services, executive relocation Las Vegas, corporate housing Las Vegas, business relocation services, executive property search",
		},
		{
			property: "og:title",
			content:
				"Corporate Relocations | Dr. Jan Duffy | Executive Luxury Real Estate Services | Top 1% REALTOR®",
		},
		{
			property: "og:description",
			content:
				"Comprehensive corporate relocation services for executives. Same-day showings, complete transaction management, and luxury property expertise. Call (702) 903-1952.",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:url",
			content:
				"https://www.centennialhillshomesforsale.com/corporate-relocations",
		},
		{
			property: "og:image",
			content: "siteImageUrl(SITE_IMAGES.services.corporateRelocations)",
		},
		{
			property: "og:image:alt",
			content: "Dr. Jan Duffy - Corporate Relocation Specialist in Las Vegas",
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
				"Corporate Relocations | Dr. Jan Duffy | Executive Luxury Real Estate Services",
		},
		{
			name: "twitter:description",
			content:
				"Comprehensive corporate relocation services for executives. Same-day showings, complete transaction management, and luxury property expertise.",
		},
		{
			name: "twitter:image",
			content: "siteImageUrl(SITE_IMAGES.services.corporateRelocations)",
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
				name: "Corporate Relocation Services",
				description:
					"Comprehensive corporate relocation services for executives and corporate clients",
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
				serviceType: "Corporate Relocation Services",
				priceRange: "$400K-$750K",
				businessType: "Real Estate Agent",
				additionalType: [
					"Real Estate Agency",
					"Real Estate Consultant",
					"Property Management Company",
				],
				keywords:
					"corporate relocations, executive real estate services, luxury real estate, West Summerlin, Red Rock Country Club, The Ridges, Summerlin West, same-day showings",
				knowsAbout: [
					"Corporate Relocations",
					"Executive Real Estate Services",
					"Luxury Real Estate",
					"West Summerlin Properties",
					"Red Rock Country Club",
					"The Ridges",
					"Summerlin West",
					"Same-Day Showings",
				],
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: "Corporate Relocation Services",
					itemListElement: [
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Pre-Relocation Planning",
								description:
									"Market analysis and area familiarization for corporate moves",
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Same-Day Showings",
								description: "Flexible scheduling for busy executives",
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Transaction Management",
								description:
									"Complete transaction coordination from offer to closing",
							},
						},
					],
				},
			}),
		},
	],
};
