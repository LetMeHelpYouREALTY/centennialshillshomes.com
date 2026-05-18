import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { CTABanner } from "~/components/CTABanner";
import { SITE_IMAGES, siteImageUrl } from "~/config/site";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Same-Day Showings
						</h1>
						<p class="text-xl text-orange-100">
							Flexible Scheduling with Same-Day Property Showings for Busy
							Executives
						</p>
					</div>
				</div>
			</section>

			{/* Simple Search Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Find Properties to View Today
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Ready for same-day showings? Use our simple search to find luxury
							properties you can view today with Dr. Duffy.
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
							Executive-Level Flexibility
						</h2>
						<p class="text-lg text-gray-700 mb-6">
							Dr. Jan Duffy understands that busy executives and professionals
							need flexible scheduling options. With same-day showings and 24/7
							availability, Dr. Duffy accommodates your demanding schedule while
							ensuring you don't miss out on premium luxury properties.
						</p>
						<p class="text-lg text-gray-700">
							Whether you're in town for a short visit, have a tight timeline,
							or need to view properties outside traditional business hours, Dr.
							Duffy's same-day showing service ensures you can explore luxury
							properties when it's convenient for you.
						</p>
					</div>

					{/* Key Benefits */}
					<div class="grid md:grid-cols-3 gap-8 mb-12">
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">⚡</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Same-Day Availability
							</h3>
							<p class="text-gray-600">
								Schedule showings with just a few hours notice
							</p>
						</div>
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">🕐</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								24/7 Support
							</h3>
							<p class="text-gray-600">
								Available around the clock for urgent matters
							</p>
						</div>
						<div class="bg-white p-6 rounded-lg shadow-lg text-center">
							<div class="text-4xl mb-4">📱</div>
							<h3 class="text-xl font-semibold mb-2 text-gray-800">
								Flexible Scheduling
							</h3>
							<p class="text-gray-600">
								Weekends, evenings, and holiday availability
							</p>
						</div>
					</div>

					{/* Showing Process */}
					<div class="bg-orange-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Same-Day Showing Process
						</h3>
						<div class="grid md:grid-cols-4 gap-6">
							<div class="text-center">
								<div class="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">1</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">Quick Request</h4>
								<p class="text-sm text-gray-600">
									Call or text with your showing request
								</p>
							</div>
							<div class="text-center">
								<div class="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">2</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Immediate Coordination
								</h4>
								<p class="text-sm text-gray-600">
									Rapid coordination with property access
								</p>
							</div>
							<div class="text-center">
								<div class="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">3</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">
									Professional Showing
								</h4>
								<p class="text-sm text-gray-600">
									Expert guidance and market insights
								</p>
							</div>
							<div class="text-center">
								<div class="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
									<span class="text-xl font-bold">4</span>
								</div>
								<h4 class="font-semibold text-gray-800 mb-2">Follow-Up</h4>
								<p class="text-sm text-gray-600">
									Immediate feedback and next steps
								</p>
							</div>
						</div>
					</div>

					{/* Available Times */}
					<div class="bg-white rounded-lg shadow-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Available Showing Times
						</h3>
						<div class="grid md:grid-cols-2 gap-8">
							<div>
								<h4 class="font-semibold text-gray-800 mb-3">Standard Hours</h4>
								<ul class="space-y-2 text-gray-700">
									<li>• Monday - Friday: 6:00 AM - 9:00 PM</li>
									<li>• Saturday: 7:00 AM - 8:00 PM</li>
									<li>• Sunday: 8:00 AM - 7:00 PM</li>
									<li>• Same-day scheduling available</li>
								</ul>
							</div>
							<div>
								<h4 class="font-semibold text-gray-800 mb-3">
									Extended Availability
								</h4>
								<ul class="space-y-2 text-gray-700">
									<li>• Early morning showings (6:00 AM)</li>
									<li>• Evening appointments (until 9:00 PM)</li>
									<li>• Weekend availability</li>
									<li>• Holiday and emergency showings</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Ideal For */}
					<div class="bg-gray-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">Perfect For</h3>
						<div class="grid md:grid-cols-3 gap-6">
							<div class="text-center p-4">
								<h4 class="font-semibold text-gray-800 mb-2">Executives</h4>
								<p class="text-sm text-gray-600">
									Busy professionals with demanding schedules
								</p>
							</div>
							<div class="text-center p-4">
								<h4 class="font-semibold text-gray-800 mb-2">
									Out-of-Town Buyers
								</h4>
								<p class="text-sm text-gray-600">
									Limited time in Las Vegas for property viewing
								</p>
							</div>
							<div class="text-center p-4">
								<h4 class="font-semibold text-gray-800 mb-2">
									Urgent Situations
								</h4>
								<p class="text-sm text-gray-600">
									Time-sensitive property decisions
								</p>
							</div>
						</div>
					</div>

					{/* Contact Methods */}
					<div class="bg-orange-50 rounded-lg p-8 mb-12">
						<h3 class="text-2xl font-bold mb-6 text-gray-800">
							Request Same-Day Showings
						</h3>
						<div class="grid md:grid-cols-3 gap-6 text-center">
							<div class="p-4">
								<div class="text-3xl mb-2">📞</div>
								<h4 class="font-semibold text-gray-800 mb-2">Phone</h4>
								<a href="tel:+17029031952" class="text-orange-600 font-bold">
									(702) 903-1952
								</a>
								<p class="text-sm text-gray-600 mt-1">Available 24/7</p>
							</div>
							<div class="p-4">
								<div class="text-3xl mb-2">💬</div>
								<h4 class="font-semibold text-gray-800 mb-2">Text Message</h4>
								<a href="sms:+17029031952" class="text-orange-600 font-bold">
									Text Dr. Duffy
								</a>
								<p class="text-sm text-gray-600 mt-1">
									Quick response guaranteed
								</p>
							</div>
							<div class="p-4">
								<div class="text-3xl mb-2">📧</div>
								<h4 class="font-semibold text-gray-800 mb-2">Email</h4>
								<a href="/contact" class="text-orange-600 font-bold">
									Contact Form
								</a>
								<p class="text-sm text-gray-600 mt-1">
									Detailed requests welcome
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
								href="/corporate-relocations"
								class="bg-white text-orange-600 px-6 py-3 rounded-lg border border-orange-600 hover:bg-orange-600 hover:text-white transition-colors"
							>
								Corporate Relocations
							</Link>
							<Link
								href="/luxury-home-sales"
								class="bg-white text-orange-600 px-6 py-3 rounded-lg border border-orange-600 hover:bg-orange-600 hover:text-white transition-colors"
							>
								Luxury Home Sales
							</Link>
							<Link
								href="/california-equity-buyers"
								class="bg-white text-orange-600 px-6 py-3 rounded-lg border border-orange-600 hover:bg-orange-600 hover:text-white transition-colors"
							>
								California Equity Buyers
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<CTABanner
				title="Need Same-Day Property Showings?"
				subtitle="Contact Dr. Jan Duffy for immediate scheduling and flexible viewing options"
				primaryButtonText="Call (702) 903-1952"
				primaryButtonLink="tel:+17029031952"
				secondaryButtonText="Schedule Online"
				secondaryButtonLink="/contact"
				backgroundColor="purple"
			/>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Same-Day Showings | Dr. Jan Duffy | Flexible Luxury Property Viewings | 24/7 Available",
	meta: [
		{
			name: "description",
			content:
				"Dr. Jan Duffy offers same-day property showings for busy executives and professionals. Flexible scheduling, 24/7 availability, and immediate response for luxury properties in Red Rock Country Club, The Ridges & Summerlin West. Call (702) 903-1952.",
		},
		{
			name: "keywords",
			content:
				"same-day showings Las Vegas, flexible property viewings, Dr. Jan Duffy same-day showings, luxury property showings, executive real estate services, 24/7 property showings, immediate scheduling, weekend property showings, emergency property showings, executive property tours, luxury home viewings, flexible real estate scheduling",
		},
		{
			property: "og:title",
			content:
				"Same-Day Showings | Dr. Jan Duffy | Flexible Luxury Property Viewings | 24/7 Available",
		},
		{
			property: "og:description",
			content:
				"Same-day property showings for busy executives. Flexible scheduling, 24/7 availability, and immediate response for luxury properties. Call (702) 903-1952.",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:url",
			content: "https://www.centennialhillshomesforsale.com/same-day-showings",
		},
		{
			property: "og:image",
			content: "siteImageUrl(SITE_IMAGES.services.sameDayShowings)",
		},
		{
			property: "og:image:alt",
			content: "Dr. Jan Duffy - Same-Day Showings Specialist in Las Vegas",
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
				"Same-Day Showings | Dr. Jan Duffy | Flexible Luxury Property Viewings",
		},
		{
			name: "twitter:description",
			content:
				"Same-day property showings for busy executives. Flexible scheduling, 24/7 availability, and immediate response for luxury properties.",
		},
		{
			name: "twitter:image",
			content: "siteImageUrl(SITE_IMAGES.services.sameDayShowings)",
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
				name: "Same-Day Property Showings",
				description:
					"Flexible scheduling with same-day property showings for busy executives and professionals",
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
				serviceType: "Same-Day Property Showings",
				priceRange: "$400K-$750K",
				businessType: "Real Estate Agent",
				additionalType: [
					"Real Estate Agency",
					"Real Estate Consultant",
					"Property Management Company",
				],
				keywords:
					"same-day showings, flexible property viewings, luxury real estate, West Summerlin, Red Rock Country Club, The Ridges, Summerlin West, 24/7 availability",
				knowsAbout: [
					"Same-Day Showings",
					"Flexible Property Viewings",
					"Luxury Real Estate",
					"West Summerlin Properties",
					"Red Rock Country Club",
					"The Ridges",
					"Summerlin West",
					"Executive Real Estate Services",
				],
				availableChannel: {
					"@type": "ServiceChannel",
					serviceUrl:
						"https://www.centennialhillshomesforsale.com/same-day-showings",
					servicePhone: "(702) 903-1952",
				},
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: "Same-Day Showing Services",
					itemListElement: [
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Same-Day Scheduling",
								description:
									"Schedule property showings with just a few hours notice",
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "24/7 Availability",
								description: "Available around the clock for urgent matters",
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Flexible Scheduling",
								description: "Weekends, evenings, and holiday availability",
							},
						},
					],
				},
			}),
		},
	],
};
