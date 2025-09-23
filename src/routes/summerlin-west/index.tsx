import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PropertyCard } from "~/components/PropertyCard";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Summerlin West Luxury Communities
						</h1>
						<p class="text-xl text-blue-100">
							Established Luxury Living with Mature Landscaping & Top-Rated
							Schools
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
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-6xl mx-auto">
						<div class="grid lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 class="text-3xl font-bold mb-6 text-gray-800">
									Las Vegas's Premier Family Community
								</h2>
								<p class="text-lg text-gray-700 mb-6">
									Summerlin West represents the gold standard of established
									luxury living in Las Vegas. This mature community features
									diverse home styles, excellent schools, and properties ranging
									from $400K to $700K.
								</p>
								<p class="text-lg text-gray-700 mb-8">
									Dr. Jan Duffy specializes in Summerlin West properties,
									offering deep knowledge of this established community and
									access to both resale and new construction opportunities.
								</p>
								<div class="grid grid-cols-2 gap-6">
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Established
										</div>
										<div class="text-gray-600">Community</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Top-Rated
										</div>
										<div class="text-gray-600">Schools</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											$400K+
										</div>
										<div class="text-gray-600">Starting Price Range</div>
									</div>
									<div class="text-center">
										<div class="text-3xl font-bold text-blue-600 mb-2">
											Diverse
										</div>
										<div class="text-gray-600">Home Styles</div>
									</div>
								</div>
							</div>
							<div class="bg-white rounded-lg shadow-lg p-8">
								<h3 class="text-2xl font-bold mb-6 text-gray-800">
									Community Highlights
								</h3>
								<ul class="space-y-4 text-gray-700">
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Mature landscaping and established trees
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Top-rated public and private schools
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Diverse architectural styles
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Established amenities and parks
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Convenient shopping and dining
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Easy access to Red Rock Canyon
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Strong community associations
									</li>
									<li class="flex items-center">
										<span class="text-green-500 mr-3">✓</span>
										Excellent resale value
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Properties */}
			<section class="py-16 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-7xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Featured Summerlin West Properties
						</h2>
						<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<PropertyCard
								title="Family Luxury Home"
								price="$575,000"
								bedrooms="4"
								bathrooms="3"
								sqft="2,500"
								address="Summerlin West, Las Vegas, NV"
								image="/api/placeholder/400/300"
							/>
							<PropertyCard
								title="Established Estate"
								price="$650,000"
								bedrooms="4"
								bathrooms="3.5"
								sqft="2,800"
								address="Summerlin West, Las Vegas, NV"
								image="/api/placeholder/400/300"
							/>
							<PropertyCard
								title="Modern Family Home"
								price="$525,000"
								bedrooms="3"
								bathrooms="2.5"
								sqft="2,200"
								address="Summerlin West, Las Vegas, NV"
								image="/api/placeholder/400/300"
							/>
						</div>
					</div>
				</div>
			</section>

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
									Family-Friendly
								</h3>
								<p class="text-gray-700 mb-4">
									Summerlin West offers the perfect environment for families
									with excellent schools, safe neighborhoods, and abundant
									recreational opportunities.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Top-rated schools</li>
									<li>• Safe neighborhoods</li>
									<li>• Family amenities</li>
									<li>• Community events</li>
								</ul>
							</div>
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Established Value
								</h3>
								<p class="text-gray-700 mb-4">
									As an established community, Summerlin West offers proven
									appreciation history and stable property values with diverse
									home options.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Proven appreciation</li>
									<li>• Stable values</li>
									<li>• Diverse inventory</li>
									<li>• Established amenities</li>
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
						Contact Dr. Jan Duffy for expert guidance in Summerlin West real
						estate
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
							Schedule Community Tour
						</a>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Summerlin West Luxury Communities | Dr. Jan Duffy | Las Vegas Family Homes",
	meta: [
		{
			name: "description",
			content:
				"Discover luxury homes in Summerlin West, Las Vegas's premier family community. Dr. Jan Duffy specializes in established homes $400K-$700K with top-rated schools.",
		},
		{
			name: "keywords",
			content:
				"Summerlin West homes, Las Vegas family community, luxury family homes, top-rated schools Las Vegas, established community Las Vegas, family real estate, Dr. Jan Duffy",
		},
		{
			property: "og:title",
			content:
				"Summerlin West Luxury Communities | Dr. Jan Duffy | Las Vegas Family Homes",
		},
		{
			property: "og:description",
			content:
				"Established luxury living with mature landscaping & top-rated schools. Family homes $400K-$700K.",
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
