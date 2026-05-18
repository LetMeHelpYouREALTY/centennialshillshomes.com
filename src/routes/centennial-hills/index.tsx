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
							Centennial Hills Luxury Homes
						</h1>
						<p class="text-xl text-blue-100">
							Family-Friendly Community with Modern Homes & Natural Beauty
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
									Centennial Hills Community
								</h2>
								<p class="text-lg text-gray-700 mb-6">
									Centennial Hills offers the perfect blend of suburban
									tranquility and modern convenience, featuring newer
									construction homes with contemporary designs and
									family-friendly amenities.
								</p>
								<p class="text-lg text-gray-700 mb-8">
									This growing community provides luxury homes ranging from
									$400K to $700K, with excellent schools, parks, and shopping
									nearby.
								</p>
								<div class="grid grid-cols-2 gap-6">
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Newer
										</div>
										<div class="text-gray-600">Construction</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Family
										</div>
										<div class="text-gray-600">Friendly</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											$400K+
										</div>
										<div class="text-gray-600">Starting Price Range</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Modern
										</div>
										<div class="text-gray-600">Amenities</div>
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
										Centennial Hills Park and recreation facilities
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Centennial Hills Library
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Multiple shopping centers and restaurants
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Top-rated public schools
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Easy access to US-95 and Las Vegas Beltway
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Mountain views and natural landscapes
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Newer construction homes
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Growing community with development potential
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
							Quick Search Centennial Hills
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Find family-friendly luxury homes in Centennial Hills with our
							simple search tool. Discover modern homes with excellent
							amenities.
						</p>
						<div class="bg-white p-6 rounded-lg shadow-md">
							<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
						</div>
					</div>
				</div>
			</section>

			{/* Current Listings in Centennial Hills */}
			<FeaturedListings
				title="Current Listings in Centennial Hills - Updated Daily"
				subtitle="Explore available luxury homes in Las Vegas's fastest-growing family community. From modern new construction to contemporary estates, discover your perfect Centennial Hills residence with excellent amenities and schools."
				ctaText="Schedule Centennial Hills Tour"
				ctaLink="/contact"
				priceMin="400000"
				priceMax="700000"
			/>

			{/* Why Choose Centennial Hills */}
			<section class="py-16 bg-blue-50">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Why Choose Centennial Hills?
						</h2>
						<div class="grid md:grid-cols-2 gap-8">
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Family-Friendly Living
								</h3>
								<p class="text-gray-700 mb-4">
									Centennial Hills is perfect for families seeking newer homes,
									excellent schools, and a safe, welcoming community atmosphere
									with modern amenities and recreational facilities.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Top-rated public schools</li>
									<li>• Family-friendly parks</li>
									<li>• Safe neighborhood environment</li>
								</ul>
							</div>
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Growth Potential
								</h3>
								<p class="text-gray-700 mb-4">
									As one of Las Vegas's fastest-growing areas, Centennial Hills
									offers excellent investment potential with new construction,
									developing amenities, and increasing property values.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• New construction opportunities</li>
									<li>• Growing commercial development</li>
									<li>• Strong appreciation potential</li>
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
						Ready to Call Centennial Hills Home?
					</h2>
					<p class="text-xl mb-8">
						Contact Dr. Jan Duffy for exclusive Centennial Hills property access
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
		"Centennial Hills Luxury Homes | Dr. Jan Duffy | Family-Friendly Community",
	meta: [
		{
			name: "description",
			content:
				"Discover luxury homes in Centennial Hills, Las Vegas's family-friendly community. Dr. Jan Duffy offers exclusive access to newer construction properties $400K-$700K with excellent schools and amenities.",
		},
		{
			name: "keywords",
			content:
				"Centennial Hills luxury homes, Las Vegas family community, Dr. Jan Duffy, newer construction homes, luxury real estate Centennial Hills, top-rated schools, mountain views",
		},
		{
			property: "og:title",
			content:
				"Centennial Hills Luxury Homes | Dr. Jan Duffy | Family-Friendly Community",
		},
		{
			property: "og:description",
			content:
				"Family-friendly community with newer construction homes, excellent schools, and modern amenities in Las Vegas.",
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
