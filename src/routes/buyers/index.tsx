import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ServiceCard } from "~/components/ServiceCard";
import { FeaturedListings } from "~/components/sections/FeaturedListings";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Luxury Home Buyers
						</h1>
						<p class="text-xl text-blue-100">
							Your Gateway to Las Vegas Luxury Real Estate with Dr. Jan Duffy
						</p>
					</div>
				</div>
			</section>

			{/* Advanced Search Widget */}
			<section class="py-12 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h2 class="text-3xl font-bold text-gray-800 mb-4">
							Find Your Dream Luxury Home
						</h2>
						<p class="text-lg text-gray-600 mb-8">
							Use our advanced search to filter luxury properties by price,
							location, amenities, and more. Perfect for discerning buyers.
						</p>
						<div class="bg-gray-50 p-6 rounded-lg">
							<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
						</div>
					</div>
				</div>
			</section>

			{/* Your Gateway to Las Vegas Luxury Real Estate */}
			<FeaturedListings
				title="Your Gateway to Las Vegas Luxury Real Estate"
				subtitle="Access exclusive luxury properties across Summerlin, Red Rock Country Club, The Ridges, and Centennial Hills. Dr. Jan Duffy provides insider access to off-market opportunities and same-day showings."
				ctaText="Start Your Luxury Home Search"
				ctaLink="/contact"
			/>

			{/* Buyer Services */}
			<section class="py-16 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-6xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Exclusive Buyer Services
						</h2>
						<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							<ServiceCard
								title="Same-Day Showings"
								description="Flexible scheduling with same-day property viewings for busy executives and California equity buyers"
								icon="⏰"
							/>
							<ServiceCard
								title="Off-Market Access"
								description="Exclusive access to pocket listings and pre-market opportunities not available to the general public"
								icon="🔒"
							/>
							<ServiceCard
								title="Market Analysis"
								description="Complimentary detailed market analysis and property valuation for informed decision making"
								icon="📊"
							/>
							<ServiceCard
								title="Negotiation Expertise"
								description="30+ years of negotiation experience to secure the best terms and pricing for luxury properties"
								icon="🤝"
							/>
							<ServiceCard
								title="Relocation Support"
								description="Comprehensive support for California equity buyers and corporate relocations to Las Vegas"
								icon="🚚"
							/>
							<ServiceCard
								title="24/7 Availability"
								description="Available around the clock for urgent transactions and executive client needs"
								icon="📞"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Dr. Duffy */}
			<section class="py-16 bg-blue-50">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
							Why Choose Dr. Jan Duffy?
						</h2>
						<div class="grid md:grid-cols-2 gap-8">
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Top 1% Las Vegas REALTOR®
								</h3>
								<p class="text-gray-700 mb-4">
									Ranked among the top 1% of Las Vegas real estate professionals
									with 30+ years of research expertise and luxury market
									specialization.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Certified Residential Specialist (CRS)</li>
									<li>• Accredited Buyer's Representative (ABR)</li>
									<li>• Graduate Realtor Institute (GRI)</li>
								</ul>
							</div>
							<div class="bg-white rounded-lg p-8 shadow-lg">
								<h3 class="text-2xl font-bold mb-4 text-gray-800">
									Luxury Market Expertise
								</h3>
								<p class="text-gray-700 mb-4">
									Specialized knowledge of West Summerlin's premier communities
									including Red Rock Country Club, The Ridges, and Summerlin
									West luxury properties.
								</p>
								<ul class="text-sm text-gray-600 space-y-2">
									<li>• Luxury homes $400K-$750K</li>
									<li>• Golf course properties</li>
									<li>• Executive communities</li>
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
						Ready to Find Your Luxury Home?
					</h2>
					<p class="text-xl mb-8">
						Contact Dr. Jan Duffy for personalized luxury real estate guidance
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
							Schedule Consultation
						</a>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Luxury Home Buyers | Dr. Jan Duffy | Your Gateway to Las Vegas Luxury Real Estate",
	meta: [
		{
			name: "description",
			content:
				"Luxury home buyers guide with Dr. Jan Duffy, Top 1% Las Vegas REALTOR®. Exclusive access to off-market properties, same-day showings, and expert guidance for California equity buyers and corporate relocations.",
		},
		{
			name: "keywords",
			content:
				"luxury home buyers, Las Vegas luxury real estate, Dr. Jan Duffy, Top 1% Las Vegas REALTOR, off-market properties, same-day showings, California equity buyers, corporate relocations, luxury homes Summerlin",
		},
		{
			property: "og:title",
			content:
				"Luxury Home Buyers | Dr. Jan Duffy | Your Gateway to Las Vegas Luxury Real Estate",
		},
		{
			property: "og:description",
			content:
				"Top 1% Las Vegas REALTOR® providing exclusive access to luxury properties, same-day showings, and expert guidance for discerning buyers.",
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
