import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PropertyCard } from "~/components/PropertyCard";
import { FeaturedListings } from "~/components/sections/FeaturedListings";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Red Rock Country Club Luxury Homes
						</h1>
						<p class="text-xl text-blue-100">
							Exclusive Gated Community with Championship Golf Course &
							Resort-Style Amenities
						</p>
						<div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="tel:+17029031952"
								class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
							>
								Call (702) 903-1952
							</a>
							<a
								href="/contact"
								class="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
							>
								Schedule Private Tour
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Community Overview */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-6xl mx-auto">
						<div class="grid lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 class="text-3xl font-bold mb-6 text-gray-800">
									Las Vegas's Most Exclusive Golf Community
								</h2>
								<p class="text-lg text-gray-700 mb-6">
									Red Rock Country Club represents the pinnacle of luxury living
									in Las Vegas. This exclusive gated community features a
									championship golf course, resort-style amenities, and custom
									estates ranging from $600K to $1M+.
								</p>
								<p class="text-lg text-gray-700 mb-8">
									Dr. Jan Duffy specializes in Red Rock Country Club properties,
									offering exclusive access to off-market listings and insider
									knowledge of this prestigious community.
								</p>
								<div class="grid grid-cols-2 gap-6">
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">18</div>
										<div class="text-gray-600">Hole Championship Course</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											24/7
										</div>
										<div class="text-gray-600">Gated Security</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											$600K+
										</div>
										<div class="text-gray-600">Starting Price Range</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Custom
										</div>
										<div class="text-gray-600">Estate Homes</div>
									</div>
								</div>
							</div>
							<div class="bg-white rounded-lg shadow-lg p-8">
								<h3 class="text-2xl font-bold mb-6 text-gray-800">
									Community Amenities
								</h3>
								<ul class="space-y-4 text-gray-700">
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Championship 18-hole golf course
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Resort-style clubhouse with fine dining
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										State-of-the-art fitness center
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Olympic-size swimming pool
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Tennis courts and pickleball
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Spa and wellness center
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										24/7 gated security
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Concierge services
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Advanced Search Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Search Red Rock Country Club Properties
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Find luxury golf course homes and custom estates in Red Rock
							Country Club. Filter by price, home type, and golf course
							proximity.
						</p>
						<div class="bg-gray-50 p-6 rounded-lg">
							<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
						</div>
					</div>
				</div>
			</section>

			{/* Current Listings in Red Rock Country Club */}
			<FeaturedListings
				title="Current Listings in Red Rock Country Club - Updated Daily"
				subtitle="Explore available luxury estates in Las Vegas's most exclusive gated community. From golf course frontage to custom mountain view homes, discover your perfect Red Rock Country Club residence."
				ctaText="Schedule Private Golf Course Tour"
				ctaLink="/contact"
				priceMin="600000"
				priceMax="1500000"
			/>

			{/* Why Choose Red Rock */}
			<section class="py-16 bg-blue-50">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Why Choose Red Rock Country Club?
						</h2>
						<div class="grid md:grid-cols-2 gap-8">
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Exclusive Lifestyle
								</h3>
								<p class="text-gray-700 mb-4">
									Red Rock Country Club offers an unparalleled lifestyle with
									world-class amenities and a tight-knit community of successful
									professionals and executives.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Private golf course access</li>
									<li>• Fine dining and social events</li>
									<li>• Resort-style amenities</li>
									<li>• Concierge services</li>
								</ul>
							</div>
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Investment Value
								</h3>
								<p class="text-gray-700 mb-4">
									Properties in Red Rock Country Club have shown consistent
									appreciation and strong rental potential for luxury vacation
									rentals.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Consistent property appreciation</li>
									<li>• Strong rental demand</li>
									<li>• Limited inventory</li>
									<li>• Premium location</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section class="py-16 bg-blue-600 text-white">
				<div class="container mx-auto px-4 text-center">
					<h2 class="text-3xl font-bold mb-4">
						Ready to Experience Red Rock Country Club Living?
					</h2>
					<p class="text-xl mb-8">
						Contact Dr. Jan Duffy for exclusive access to Red Rock Country Club
						properties
					</p>
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href="tel:+17029031952"
							class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
						>
							Call (702) 903-1952
						</a>
						<a
							href="/contact"
							class="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
						>
							Schedule Private Tour
						</a>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Red Rock Country Club Luxury Homes | Dr. Jan Duffy | Las Vegas Golf Community",
	meta: [
		{
			name: "description",
			content:
				"Discover luxury homes in Red Rock Country Club, Las Vegas's most exclusive golf community. Dr. Jan Duffy specializes in custom estates $600K-$1M+ with championship golf course access.",
		},
		{
			name: "keywords",
			content:
				"Red Rock Country Club homes, Las Vegas golf community, luxury golf course homes, custom estates Las Vegas, gated community Las Vegas, championship golf course homes, Dr. Jan Duffy",
		},
		{
			property: "og:title",
			content:
				"Red Rock Country Club Luxury Homes | Dr. Jan Duffy | Las Vegas Golf Community",
		},
		{
			property: "og:description",
			content:
				"Exclusive gated community with championship golf course & resort-style amenities. Custom estates $600K-$1M+.",
		},
		{
			property: "og:type",
			content: "website",
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
	],
};
