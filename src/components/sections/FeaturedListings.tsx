import { component$ } from "@builder.io/qwik";

export interface FeaturedListingsProps {
	title?: string;
	subtitle?: string;
	ctaText?: string;
	ctaLink?: string;
	agentEncodedId?: string;
	sortOrder?: string;
	listingStatus?: string;
	propertyTypes?: string;
	priceMin?: string;
	priceMax?: string;
}

export const FeaturedListings = component$<FeaturedListingsProps>((props) => {
	const {
		title = "Featured Centennial Hills Homes for Sale",
		subtitle = "Live MLS listings in northwest Las Vegas — ZIP codes 89138, 89144, and 89135. Updated daily through RealScout.",
		ctaText = "Schedule a Showing with Dr. Jan Duffy",
		ctaLink = "/contact",
		agentEncodedId = "QWdlbnQtMjI1MDUw",
		sortOrder = "NEWEST",
		listingStatus = "For Sale",
		propertyTypes = "SFR,MF,TC",
		priceMin = "400000",
		priceMax = "900000",
	} = props;

	return (
		<section class="py-16 bg-gray-50">
			<div class="container mx-auto px-4">
				{/* SEO-optimized H2 with local keywords */}
				<h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
					{title}
				</h2>
				<p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
					{subtitle}
				</p>

				{/* RealScout Widget Container */}
				<div class="max-w-7xl mx-auto">
					<realscout-office-listings
						agent-encoded-id={agentEncodedId}
						sort-order={sortOrder}
						listing-status={listingStatus}
						property-types={propertyTypes}
						price-min={priceMin}
						price-max={priceMax}
					/>
				</div>

				{/* Call-to-action below listings */}
				<div class="text-center mt-8">
					<p class="text-gray-600 mb-4">
						Can't find what you're looking for? Let Dr. Jan Duffy help you
						discover off-market opportunities.
					</p>
					<a
						href={ctaLink}
						class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
					>
						{ctaText}
					</a>
				</div>
			</div>
		</section>
	);
});
