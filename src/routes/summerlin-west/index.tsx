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
							Summerlin West Luxury Homes
						</h1>
						<p class="text-xl text-blue-100">
							Premier Master-Planned Community with Mountain Views & Modern
							Amenities
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
								Schedule Community Tour
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Community Overview */}
			<section class="py-16 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-6xl mx-auto">
						<div class="grid lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 class="text-3xl font-bold mb-6 text-gray-800">
									Summerlin West Community
								</h2>
								<p class="text-lg text-gray-700 mb-6">
									Summerlin West represents the pinnacle of Las Vegas luxury
									living, offering residents access to world-class amenities,
									stunning mountain views, and a vibrant community atmosphere.
								</p>
								<p class="text-lg text-gray-700 mb-8">
									This master-planned community features luxury homes ranging
									from $500K to $800K, with modern architecture and premium
									finishes throughout.
								</p>
								<div class="grid grid-cols-2 gap-6">
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">25+</div>
										<div class="text-gray-600">Years Established</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											22,500
										</div>
										<div class="text-gray-600">Acres</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											$500K+
										</div>
										<div class="text-gray-600">Starting Price Range</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Modern
										</div>
										<div class="text-gray-600">Architecture</div>
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
										Red Rock Canyon National Conservation Area access
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Summerlin Centre shopping and dining
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Multiple championship golf courses
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Community parks and recreation centers
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Top-rated public and private schools
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Easy access to Las Vegas Strip
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Mountain and valley views
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Master-planned community design
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Simple Search Widget */}
			<section class="py-12 bg-gray-50">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Quick Search Summerlin West
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Find luxury homes in Summerlin West with our simple search tool.
							Quick and easy property discovery.
						</p>
						<div class="bg-white p-6 rounded-lg shadow-md">
							<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
						</div>
					</div>
				</div>
			</section>

			{/* Current Listings in Summerlin West */}
			<FeaturedListings
				title="Current Listings in Summerlin West - Updated Daily"
				subtitle="Discover available luxury homes in Las Vegas's premier master-planned community. From modern estates to contemporary residences, find your perfect Summerlin West home with mountain views and resort-style amenities."
				ctaText="Schedule Summerlin West Tour"
				ctaLink="/contact"
				priceMin="500000"
				priceMax="800000"
			/>

			{/* Why Choose Summerlin West */}
			<section class="py-16 bg-blue-50">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Why Choose Summerlin West?
						</h2>
						<div class="grid md:grid-cols-2 gap-8">
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Master-Planned Excellence
								</h3>
								<p class="text-gray-700 mb-4">
									Summerlin West is the crown jewel of master-planned
									communities, offering residents a perfect blend of natural
									beauty, modern amenities, and convenient access to everything
									Las Vegas has to offer.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• 22,500 acres of planned development</li>
									<li>• Red Rock Canyon access</li>
									<li>• Multiple golf courses</li>
								</ul>
							</div>
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Investment Potential
								</h3>
								<p class="text-gray-700 mb-4">
									Summerlin West properties have shown consistent appreciation
									and strong rental demand, making them excellent investments
									for both primary residences and rental properties.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Strong appreciation history</li>
									<li>• High rental demand</li>
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
						Ready to Call Summerlin West Home?
					</h2>
					<p class="text-xl mb-8">
						Contact Dr. Jan Duffy for exclusive Summerlin West property access
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
							Schedule Tour
						</a>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Summerlin West Luxury Homes | Dr. Jan Duffy | Master-Planned Community",
	meta: [
		{
			name: "description",
			content:
				"Discover luxury homes in Summerlin West, Las Vegas's premier master-planned community. Dr. Jan Duffy offers exclusive access to properties $500K-$800K with mountain views and resort amenities.",
		},
		{
			name: "keywords",
			content:
				"Summerlin West luxury homes, Las Vegas master-planned community, Dr. Jan Duffy, luxury real estate Summerlin, mountain view homes, Red Rock Canyon access, championship golf courses",
		},
		{
			property: "og:title",
			content:
				"Summerlin West Luxury Homes | Dr. Jan Duffy | Master-Planned Community",
		},
		{
			property: "og:description",
			content:
				"Premier master-planned community with luxury homes, mountain views, and world-class amenities in Las Vegas.",
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
