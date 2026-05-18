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
							North Las Vegas Luxury Homes
						</h1>
						<p class="text-xl text-blue-100">
							Growing Community with New Construction & Investment Opportunities
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
									North Las Vegas Community
								</h2>
								<p class="text-lg text-gray-700 mb-6">
									North Las Vegas represents one of the fastest-growing areas in
									the Las Vegas Valley, offering new construction homes, modern
									amenities, and excellent investment potential.
								</p>
								<p class="text-lg text-gray-700 mb-8">
									This expanding community provides luxury homes ranging from
									$350K to $600K, with new developments and master-planned
									communities throughout the area.
								</p>
								<div class="grid grid-cols-2 gap-6">
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Fast
										</div>
										<div class="text-gray-600">Growing</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">New</div>
										<div class="text-gray-600">Construction</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											$350K+
										</div>
										<div class="text-gray-600">Starting Price Range</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Investment
										</div>
										<div class="text-gray-600">Potential</div>
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
										New construction homes and developments
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Modern shopping centers and restaurants
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Excellent public and private schools
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Easy access to Las Vegas Strip and downtown
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Multiple parks and recreation facilities
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Growing commercial and business districts
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Affordable luxury living options
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Strong rental market and investment potential
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
							Quick Search North Las Vegas
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Find new construction homes and investment properties in North Las
							Vegas with our simple search tool. Discover growing community
							opportunities.
						</p>
						<div class="bg-white p-6 rounded-lg shadow-md">
							<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
						</div>
					</div>
				</div>
			</section>

			{/* Current Listings in North Las Vegas */}
			<FeaturedListings
				title="Current Listings in North Las Vegas - Updated Daily"
				subtitle="Explore available luxury homes in Las Vegas's fastest-growing community. From new construction to established neighborhoods, discover your perfect North Las Vegas home with modern amenities and investment potential."
				ctaText="Schedule North Las Vegas Tour"
				ctaLink="/contact"
				priceMin="350000"
				priceMax="600000"
			/>

			{/* Why Choose North Las Vegas */}
			<section class="py-16 bg-blue-50">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Why Choose North Las Vegas?
						</h2>
						<div class="grid md:grid-cols-2 gap-8">
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Growth & Development
								</h3>
								<p class="text-gray-700 mb-4">
									North Las Vegas is experiencing rapid growth with new
									developments, shopping centers, and infrastructure
									improvements, making it an excellent choice for both residents
									and investors.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• New construction opportunities</li>
									<li>• Growing commercial districts</li>
									<li>• Infrastructure improvements</li>
								</ul>
							</div>
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Investment Potential
								</h3>
								<p class="text-gray-700 mb-4">
									With strong rental demand, new construction, and growing
									amenities, North Las Vegas offers excellent investment
									opportunities for both primary residences and rental
									properties.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Strong rental market</li>
									<li>• Appreciation potential</li>
									<li>• Affordable entry points</li>
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
						Ready to Invest in North Las Vegas?
					</h2>
					<p class="text-xl mb-8">
						Contact Dr. Jan Duffy for exclusive North Las Vegas property access
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
	title: "North Las Vegas Luxury Homes | Dr. Jan Duffy | Growing Community",
	meta: [
		{
			name: "description",
			content:
				"Discover luxury homes in North Las Vegas, the fastest-growing community in Las Vegas Valley. Dr. Jan Duffy offers exclusive access to new construction properties $350K-$600K with investment potential.",
		},
		{
			name: "keywords",
			content:
				"North Las Vegas luxury homes, Las Vegas growing community, Dr. Jan Duffy, new construction homes, luxury real estate North Las Vegas, investment properties, affordable luxury",
		},
		{
			property: "og:title",
			content:
				"North Las Vegas Luxury Homes | Dr. Jan Duffy | Growing Community",
		},
		{
			property: "og:description",
			content:
				"Fastest-growing community with new construction homes, modern amenities, and investment opportunities in Las Vegas.",
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
