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
							The Ridges Executive Homes
						</h1>
						<p class="text-xl text-blue-100">
							Premier Executive Community with Mountain Views & Modern Luxury
							Architecture
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
								Schedule Executive Tour
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
									Executive Living at Its Finest
								</h2>
								<p class="text-lg text-gray-700 mb-6">
									The Ridges represents the pinnacle of modern luxury living in
									Las Vegas. This premier executive community features
									contemporary architecture, breathtaking mountain views, and
									homes ranging from $500K to $800K.
								</p>
								<p class="text-lg text-gray-700 mb-8">
									Dr. Jan Duffy specializes in The Ridges properties, offering
									insider knowledge of this exclusive community and access to
									executive-level real estate services.
								</p>
								<div class="grid grid-cols-2 gap-6">
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Modern
										</div>
										<div class="text-gray-600">Architecture</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Mountain
										</div>
										<div class="text-gray-600">Views</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											$500K+
										</div>
										<div class="text-gray-600">Starting Price Range</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Executive
										</div>
										<div class="text-gray-600">Community</div>
									</div>
								</div>
							</div>
							<div class="bg-white rounded-lg shadow-lg p-8">
								<h3 class="text-2xl font-bold mb-6 text-gray-800">
									Community Features
								</h3>
								<ul class="space-y-4 text-gray-700">
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Contemporary modern architecture
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Breathtaking mountain views
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										High-end finishes throughout
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Open-concept living spaces
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Energy-efficient construction
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Smart home technology ready
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Private outdoor spaces
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Executive community amenities
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
							Search The Ridges Properties
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Find executive homes and modern estates in The Ridges. Filter by
							price, home type, mountain views, and executive amenities.
						</p>
						<div class="bg-gray-50 p-6 rounded-lg">
							<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
						</div>
					</div>
				</div>
			</section>

			{/* Current Listings in The Ridges */}
			<FeaturedListings
				title="Current Listings in The Ridges - Updated Daily"
				subtitle="Discover available executive homes in Summerlin West's most exclusive community. From modern mountain view estates to contemporary luxury residences, find your perfect Ridges home."
				ctaText="Schedule Executive Community Tour"
				ctaLink="/contact"
				priceMin="600000"
				priceMax="1200000"
			/>

			{/* Why Choose The Ridges */}
			<section class="py-16 bg-blue-50">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Why Choose The Ridges?
						</h2>
						<div class="grid md:grid-cols-2 gap-8">
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Modern Luxury
								</h3>
								<p class="text-gray-700 mb-4">
									The Ridges offers cutting-edge modern architecture with
									high-end finishes and contemporary design elements that appeal
									to executive buyers.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Contemporary architecture</li>
									<li>• High-end finishes</li>
									<li>• Smart home ready</li>
									<li>• Energy efficient</li>
								</ul>
							</div>
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Executive Lifestyle
								</h3>
								<p class="text-gray-700 mb-4">
									Perfect for busy executives who value modern amenities,
									privacy, and convenient access to Las Vegas business
									districts.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Executive community</li>
									<li>• Privacy and security</li>
									<li>• Convenient location</li>
									<li>• Modern amenities</li>
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
						Ready to Experience The Ridges Executive Living?
					</h2>
					<p class="text-xl mb-8">
						Contact Dr. Jan Duffy for exclusive access to The Ridges properties
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
							Schedule Executive Tour
						</a>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title: "The Ridges Executive Homes | Dr. Jan Duffy | Las Vegas Modern Luxury",
	meta: [
		{
			name: "description",
			content:
				"Discover executive homes in The Ridges, Las Vegas's premier modern luxury community. Dr. Jan Duffy specializes in contemporary homes $500K-$800K with mountain views.",
		},
		{
			name: "keywords",
			content:
				"The Ridges homes, Las Vegas executive community, modern luxury homes, contemporary architecture Las Vegas, mountain view homes, executive real estate, Dr. Jan Duffy",
		},
		{
			property: "og:title",
			content:
				"The Ridges Executive Homes | Dr. Jan Duffy | Las Vegas Modern Luxury",
		},
		{
			property: "og:description",
			content:
				"Premier executive community with mountain views & modern luxury architecture. Contemporary homes $500K-$800K.",
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
