import { $, component$, useComputed$, useSignal } from "@builder.io/qwik";
import { PropertyCard } from "~/components/PropertyCard";

export interface PropertySearchProps {}

export const PropertySearch = component$<PropertySearchProps>((props) => {
	const selectedCommunity = useSignal("all");
	const selectedPriceRange = useSignal("all");
	const selectedBedrooms = useSignal("all");

	const properties = [
		{
			id: 1,
			title: "Red Rock Country Club Estate",
			price: "$875,000",
			bedrooms: "5",
			bathrooms: "4.5",
			sqft: "3,800",
			address: "Red Rock Country Club, Las Vegas, NV",
			image: "/api/placeholder/400/300",
			community: "red-rock",
			priceRange: "750k+",
			bedroomCount: 5,
		},
		{
			id: 2,
			title: "The Ridges Executive Home",
			price: "$750,000",
			bedrooms: "4",
			bathrooms: "3.5",
			sqft: "3,200",
			address: "The Ridges, Summerlin West, NV",
			image: "/api/placeholder/400/300",
			community: "ridges",
			priceRange: "600k-750k",
			bedroomCount: 4,
		},
		{
			id: 3,
			title: "Summerlin West Luxury",
			price: "$575,000",
			bedrooms: "4",
			bathrooms: "3",
			sqft: "2,500",
			address: "Summerlin West, Las Vegas, NV",
			image: "/api/placeholder/400/300",
			community: "summerlin-west",
			priceRange: "500k-600k",
			bedroomCount: 4,
		},
		{
			id: 4,
			title: "Centennial Hills Estate",
			price: "$525,000",
			bedrooms: "4",
			bathrooms: "3",
			sqft: "2,400",
			address: "Centennial Hills, Las Vegas, NV",
			image: "/api/placeholder/400/300",
			community: "centennial-hills",
			priceRange: "500k-600k",
			bedroomCount: 4,
		},
		{
			id: 5,
			title: "Lone Mountain Luxury",
			price: "$600,000",
			bedrooms: "4",
			bathrooms: "3.5",
			sqft: "2,600",
			address: "Lone Mountain, Las Vegas, NV",
			image: "/api/placeholder/400/300",
			community: "lone-mountain",
			priceRange: "500k-600k",
			bedroomCount: 4,
		},
		{
			id: 6,
			title: "North Las Vegas Executive",
			price: "$475,000",
			bedrooms: "3",
			bathrooms: "2.5",
			sqft: "2,200",
			address: "North Las Vegas, NV",
			image: "/api/placeholder/400/300",
			community: "north-las-vegas",
			priceRange: "400k-500k",
			bedroomCount: 3,
		},
	];

	const filteredProperties = useComputed$(() => {
		return properties.filter((property) => {
			const communityMatch =
				selectedCommunity.value === "all" ||
				property.community === selectedCommunity.value;
			const priceMatch =
				selectedPriceRange.value === "all" ||
				property.priceRange === selectedPriceRange.value;
			const bedroomMatch =
				selectedBedrooms.value === "all" ||
				property.bedroomCount >= parseInt(selectedBedrooms.value);
			return communityMatch && priceMatch && bedroomMatch;
		});
	});

	return (
		<section class="py-16 bg-gray-50">
			<div class="container mx-auto px-4">
				<div class="max-w-7xl mx-auto">
					<div class="text-center mb-12">
						<h2 class="text-3xl font-bold mb-4 text-gray-800">
							Find Your Perfect Luxury Home
						</h2>
						<p class="text-lg text-gray-600">
							Use our advanced search to discover properties that match your
							criteria
						</p>
					</div>

					{/* Search Filters */}
					<div class="bg-white rounded-lg shadow-lg p-6 mb-8">
						<div class="grid md:grid-cols-4 gap-4">
							<div>
								<label class="block text-sm font-medium text-gray-700 mb-2">
									Community
								</label>
								<select
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
									value={selectedCommunity.value}
									onChange$={(e) => {
										selectedCommunity.value = (
											e.target as HTMLSelectElement
										).value;
									}}
								>
									<option value="all">All Communities</option>
									<option value="red-rock">Red Rock Country Club</option>
									<option value="ridges">The Ridges</option>
									<option value="summerlin-west">Summerlin West</option>
									<option value="centennial-hills">Centennial Hills</option>
									<option value="lone-mountain">Lone Mountain</option>
									<option value="north-las-vegas">North Las Vegas</option>
								</select>
							</div>
							<div>
								<label class="block text-sm font-medium text-gray-700 mb-2">
									Price Range
								</label>
								<select
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
									value={selectedPriceRange.value}
									onChange$={(e) => {
										selectedPriceRange.value = (
											e.target as HTMLSelectElement
										).value;
									}}
								>
									<option value="all">Any Price</option>
									<option value="400k-500k">$400K - $500K</option>
									<option value="500k-600k">$500K - $600K</option>
									<option value="600k-750k">$600K - $750K</option>
									<option value="750k+">$750K+</option>
								</select>
							</div>
							<div>
								<label class="block text-sm font-medium text-gray-700 mb-2">
									Bedrooms
								</label>
								<select
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
									value={selectedBedrooms.value}
									onChange$={(e) => {
										selectedBedrooms.value = (
											e.target as HTMLSelectElement
										).value;
									}}
								>
									<option value="all">Any Bedrooms</option>
									<option value="3">3+ Bedrooms</option>
									<option value="4">4+ Bedrooms</option>
									<option value="5">5+ Bedrooms</option>
								</select>
							</div>
							<div class="flex items-end">
								<button
									class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
									onClick$={() => {
										selectedCommunity.value = "all";
										selectedPriceRange.value = "all";
										selectedBedrooms.value = "all";
									}}
								>
									Clear Filters
								</button>
							</div>
						</div>
					</div>

					{/* Properties Grid */}
					<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{filteredProperties.value.map((property) => (
							<PropertyCard
								key={property.id}
								title={property.title}
								price={property.price}
								bedrooms={property.bedrooms}
								bathrooms={property.bathrooms}
								sqft={property.sqft}
								address={property.address}
								image={property.image}
							/>
						))}
					</div>

					{/* No Results Message */}
					{filteredProperties.value.length === 0 && (
						<div class="text-center py-12">
							<div class="text-6xl mb-4">🏠</div>
							<h3 class="text-2xl font-bold text-gray-800 mb-4">
								No Properties Found
							</h3>
							<p class="text-gray-600 mb-6">
								Try adjusting your search criteria or contact Dr. Duffy for
								personalized assistance.
							</p>
							<a
								href="/contact"
								class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
							>
								Contact Dr. Duffy
							</a>
						</div>
					)}

					{/* CTA Section */}
					<div class="text-center mt-12">
						<div class="bg-blue-600 text-white rounded-lg p-8">
							<h3 class="text-2xl font-bold mb-4">
								Don't See What You're Looking For?
							</h3>
							<p class="text-lg mb-6">
								Contact Dr. Jan Duffy for exclusive off-market luxury properties
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
									Request Custom Search
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
});
