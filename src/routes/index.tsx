import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

import { CTABanner } from "~/components/CTABanner";
import { HeroSection } from "~/components/HeroSection";
import { PropertySearch } from "~/components/PropertySearch";
import { ServiceCard } from "~/components/ServiceCard";
import { StatsCounter } from "~/components/StatsCounter";
import { TestimonialSlider } from "~/components/TestimonialSlider";

export default component$(() => {
	return (
		<>
			<HeroSection />

			{/* Stats Section */}
			<StatsCounter
				stats={[
					{ value: 30, suffix: "+", label: "Years Experience" },
					{ value: 1, label: "Top 1% Las Vegas REALTOR®" },
					{ value: 24, suffix: "/7", label: "Available" },
					{ value: 100, suffix: "%", label: "Client Satisfaction" },
				]}
				backgroundColor="white"
			/>

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

			{/* Interactive Property Search */}
			<PropertySearch />

			{/* Testimonials Slider */}
			<TestimonialSlider />

			{/* CTA Section */}
			<CTABanner
				title="Ready to Find Your Luxury Home?"
				subtitle="Contact Dr. Jan Duffy for expert luxury real estate guidance in West Summerlin"
				primaryButtonText="Get Free Market Analysis"
				primaryButtonLink="/contact"
				secondaryButtonText="Learn More About Dr. Duffy"
				secondaryButtonLink="/about"
				phoneNumber="(702) 903-1952"
				backgroundColor="blue"
			/>
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
