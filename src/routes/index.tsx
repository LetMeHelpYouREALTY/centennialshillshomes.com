import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

import { HeroSection } from "~/components/HeroSection";
import { PropertyCard } from "~/components/PropertyCard";
import { ServiceCard } from "~/components/ServiceCard";
import { TestimonialCard } from "~/components/TestimonialCard";

export default component$(() => {
	return (
		<>
			<HeroSection />

			{/* Services Section */}
			<section class="py-16 bg-gray-50">
				<div class="container mx-auto px-4">
					<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
						Luxury Real Estate Services
					</h2>
					<div class="grid md:grid-cols-3 gap-8">
						<ServiceCard
							title="Luxury Home Sales"
							description="Specializing in luxury homes $400K-$750K in Red Rock Country Club, The Ridges, and Summerlin West"
							icon="🏆"
						/>
						<ServiceCard
							title="California Equity Buyers"
							description="Expert guidance for California equity buyers relocating to Las Vegas luxury communities"
							icon="🌴"
						/>
						<ServiceCard
							title="Corporate Relocations"
							description="Comprehensive support for executive clients and corporate relocations with same-day showings"
							icon="🏢"
						/>
					</div>
				</div>
			</section>

			{/* Featured Properties */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
						Featured Luxury Properties
					</h2>
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<PropertyCard
							title="Red Rock Country Club Estate"
							price="$725,000"
							bedrooms="5"
							bathrooms="4"
							sqft="3,200"
							address="Red Rock Country Club, Las Vegas, NV"
							image="/api/placeholder/400/300"
						/>
						<PropertyCard
							title="The Ridges Luxury Home"
							price="$650,000"
							bedrooms="4"
							bathrooms="3.5"
							sqft="2,800"
							address="The Ridges, Summerlin West, NV"
							image="/api/placeholder/400/300"
						/>
						<PropertyCard
							title="Summerlin West Executive"
							price="$575,000"
							bedrooms="4"
							bathrooms="3"
							sqft="2,500"
							address="Summerlin West, Las Vegas, NV"
							image="/api/placeholder/400/300"
						/>
					</div>
					<div class="text-center mt-8">
						<Link
							href="/properties"
							class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
						>
							View All Luxury Properties
						</Link>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section class="py-16 bg-blue-50">
				<div class="container mx-auto px-4">
					<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
						What Our Luxury Clients Say
					</h2>
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<TestimonialCard
							name="Sarah Chen"
							rating={5}
							text="Dr. Duffy's expertise in luxury properties is unmatched. She helped us find our dream home in Red Rock Country Club within weeks!"
							location="Red Rock Country Club"
						/>
						<TestimonialCard
							name="Michael Rodriguez"
							rating={5}
							text="As California equity buyers, we needed someone who understood our unique situation. Dr. Duffy exceeded all expectations!"
							location="The Ridges"
						/>
						<TestimonialCard
							name="Jennifer Thompson"
							rating={5}
							text="Professional, knowledgeable, and available 24/7. Dr. Duffy made our corporate relocation seamless and stress-free!"
							location="Summerlin West"
						/>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section class="py-16 bg-blue-600 text-white">
				<div class="container mx-auto px-4 text-center">
					<h2 class="text-3xl font-bold mb-4">
						Ready to Find Your Luxury Home?
					</h2>
					<p class="text-xl mb-8">
						Contact Dr. Jan Duffy for expert luxury real estate guidance in West
						Summerlin
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<Link
							href="/contact"
							class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
						>
							Get Free Market Analysis
						</Link>
						<Link
							href="/about"
							class="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
						>
							Learn More About Dr. Duffy
						</Link>
					</div>
					<div class="mt-8 text-blue-200">
						<p class="text-lg">📞 (702) 903-1952 | Available 24/7</p>
						<p class="text-sm">1490 Center Crossing Rd, Las Vegas, NV 89144</p>
					</div>
				</div>
			</section>
		</>
	);
});

export const head: DocumentHead = {
	title:
		"Dr. Jan Duffy | Top 1% Las Vegas REALTOR® | Luxury Homes Red Rock Country Club & The Ridges",
	meta: [
		{
			name: "description",
			content:
				"Dr. Jan Duffy, Top 1% Las Vegas REALTOR® with 30+ years expertise in luxury homes $400K-$750K. Specializing in Red Rock Country Club, The Ridges & Summerlin West. California equity buyers & corporate relocations welcome. Same-day showings & complimentary market analysis.",
		},
		{
			name: "keywords",
			content:
				"Dr. Jan Duffy, Top 1% Las Vegas REALTOR, luxury real estate agent, Red Rock Country Club homes, The Ridges real estate, Summerlin West luxury homes, California equity buyers, corporate relocations, luxury homes Las Vegas, same-day showings",
		},
		{
			property: "og:title",
			content:
				"Dr. Jan Duffy | Top 1% Las Vegas REALTOR® | Luxury Homes Red Rock Country Club & The Ridges",
		},
		{
			property: "og:description",
			content:
				"Top 1% Las Vegas REALTOR® specializing in luxury homes $400K-$750K. Red Rock Country Club, The Ridges & Summerlin West expert. 30+ years experience, same-day showings, complimentary market analysis.",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:url",
			content: "https://centennialshillshomes.com",
		},
		{
			name: "robots",
			content: "index, follow",
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
			name: "application/ld+json",
			content: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "RealEstateAgent",
				name: "Dr. Jan Duffy",
				description:
					"Top 1% Las Vegas REALTOR® with 30+ years expertise in luxury homes $400K-$750K",
				url: "https://centennialshillshomes.com",
				telephone: "(702) 903-1952",
				address: {
					"@type": "PostalAddress",
					streetAddress: "1490 Center Crossing Rd",
					addressLocality: "Las Vegas",
					addressRegion: "NV",
					postalCode: "89144",
					addressCountry: "US",
				},
				areaServed: [
					"Red Rock Country Club",
					"The Ridges",
					"Summerlin West",
					"Summerlin North",
					"Centennial Hills",
					"Lone Mountain",
					"North Las Vegas",
				],
				priceRange: "$400K-$750K",
				serviceType: "Luxury Real Estate",
				hasOfferCatalog: {
					"@type": "OfferCatalog",
					name: "Luxury Real Estate Services",
					itemListElement: [
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Luxury Home Sales",
								description:
									"Specializing in luxury homes $400K-$750K in Red Rock Country Club, The Ridges, and Summerlin West",
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "California Equity Buyers",
								description:
									"Expert guidance for California equity buyers relocating to Las Vegas luxury communities",
							},
						},
						{
							"@type": "Offer",
							itemOffered: {
								"@type": "Service",
								name: "Corporate Relocations",
								description:
									"Comprehensive support for executive clients and corporate relocations with same-day showings",
							},
						},
					],
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
				aggregateRating: {
					"@type": "AggregateRating",
					ratingValue: "5.0",
					reviewCount: "100",
				},
			}),
		},
	],
};
