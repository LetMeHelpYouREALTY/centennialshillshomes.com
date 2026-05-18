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
							Lone Mountain Luxury Homes
						</h1>
						<p class="text-xl text-blue-100">
							Mountain Living with Modern Convenience & Natural Beauty
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
								Schedule Mountain Tour
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
									Lone Mountain Community
								</h2>
								<p class="text-lg text-gray-700 mb-6">
									Lone Mountain offers a unique blend of mountain living and
									urban convenience, featuring custom homes with stunning views
									and access to hiking trails and natural beauty.
								</p>
								<p class="text-lg text-gray-700 mb-8">
									This distinctive community provides luxury homes ranging from
									$450K to $750K, with custom architecture and mountain views
									throughout the area.
								</p>
								<div class="grid grid-cols-2 gap-6">
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Custom
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
											$450K+
										</div>
										<div class="text-gray-600">Starting Price Range</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Natural
										</div>
										<div class="text-gray-600">Beauty</div>
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
										Lone Mountain hiking trails and natural areas
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Custom-built homes with unique architecture
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Stunning mountain and valley views
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Close proximity to shopping and dining
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Easy access to Las Vegas Strip
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Quiet, residential atmosphere
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Larger lot sizes and privacy
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Investment potential with growth
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
							Quick Search Lone Mountain
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Find custom mountain homes in Lone Mountain with our simple search
							tool. Discover properties with stunning views and natural beauty.
						</p>
						<div class="bg-white p-6 rounded-lg shadow-md">
							<realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
						</div>
					</div>
				</div>
			</section>

			{/* Current Listings in Lone Mountain */}
			<FeaturedListings
				title="Current Listings in Lone Mountain - Updated Daily"
				subtitle="Discover available luxury homes in Las Vegas's unique mountain community. From custom-built estates to contemporary residences, find your perfect Lone Mountain home with stunning views and natural beauty."
				ctaText="Schedule Lone Mountain Tour"
				ctaLink="/contact"
				priceMin="450000"
				priceMax="750000"
			/>

			{/* Why Choose Lone Mountain */}
			<section class="py-16 bg-blue-50">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Why Choose Lone Mountain?
						</h2>
						<div class="grid md:grid-cols-2 gap-8">
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Mountain Living Experience
								</h3>
								<p class="text-gray-700 mb-4">
									Lone Mountain provides a unique opportunity to live in a
									mountain setting while maintaining easy access to Las Vegas
									amenities, offering the best of both worlds for discerning
									homeowners.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Custom architecture options</li>
									<li>• Mountain and valley views</li>
									<li>• Hiking trail access</li>
								</ul>
							</div>
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Privacy & Space
								</h3>
								<p class="text-gray-700 mb-4">
									With larger lot sizes and a more rural feel, Lone Mountain
									offers privacy and space that's increasingly rare in Las
									Vegas, making it perfect for those seeking a quieter
									lifestyle.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Larger lot sizes</li>
									<li>• Privacy and tranquility</li>
									<li>• Natural surroundings</li>
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
						Ready to Experience Mountain Living?
					</h2>
					<p class="text-xl mb-8">
						Contact Dr. Jan Duffy for exclusive Lone Mountain property access
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
		"Lone Mountain Luxury Homes | Dr. Jan Duffy | Mountain Living Community",
	meta: [
		{
			name: "description",
			content:
				"Discover luxury homes in Lone Mountain, Las Vegas's unique mountain community. Dr. Jan Duffy offers exclusive access to custom properties $450K-$750K with stunning views and natural beauty.",
		},
		{
			name: "keywords",
			content:
				"Lone Mountain luxury homes, Las Vegas mountain community, Dr. Jan Duffy, custom architecture homes, luxury real estate Lone Mountain, mountain views, hiking trails",
		},
		{
			property: "og:title",
			content:
				"Lone Mountain Luxury Homes | Dr. Jan Duffy | Mountain Living Community",
		},
		{
			property: "og:description",
			content:
				"Unique mountain community with custom homes, stunning views, and natural beauty in Las Vegas.",
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
