import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Terms of Service
						</h1>
						<p class="text-xl text-blue-100">
							Terms and Conditions for Our Services
						</p>
					</div>
				</div>
			</section>

			{/* Terms Content */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto">
						<div class="bg-white rounded-lg shadow-lg p-8">
							<div class="prose max-w-none">
								<h2 class="text-2xl font-bold mb-6 text-gray-800">
									Real Estate Services and Expertise
								</h2>
								<p class="text-gray-700 mb-6">
									Dr. Jan Duffy provides comprehensive professional real estate
									services including luxury property sales, purchases, market
									analysis, and consultation services throughout the Las Vegas
									area. Our services specialize in West Summerlin's premier
									communities including Red Rock Country Club, The Ridges,
									Summerlin West, and Centennial Hills.
								</p>
								<p class="text-gray-700 mb-6">
									We offer specialized services for California equity buyers,
									corporate relocations, investment properties, and same-day
									showings. All services are provided with 30+ years of research
									expertise and Top 1% Las Vegas REALTOR® status.
								</p>

								<h2 class="text-2xl font-bold mb-6 text-gray-800">
									Client Responsibilities and Cooperation
								</h2>
								<p class="text-gray-700 mb-6">
									Clients are responsible for providing accurate and complete
									information throughout the real estate process. This includes
									financial documentation, property preferences, and any
									relevant personal information required for transactions.
								</p>
								<p class="text-gray-700 mb-6">
									All real estate transactions are subject to applicable
									federal, state, and local laws and regulations. Clients must
									cooperate with inspections, appraisals, and other necessary
									steps in the buying or selling process.
								</p>

								<h2 class="text-2xl font-bold mb-6 text-gray-800">
									Limitation of Liability and Disclaimers
								</h2>
								<p class="text-gray-700 mb-6">
									While we strive to provide accurate and up-to-date
									information, we cannot guarantee the accuracy of all property
									information, market data, or third-party content. Real estate
									markets are subject to change, and property values may
									fluctuate.
								</p>
								<p class="text-gray-700 mb-6">
									Our liability is limited to the extent permitted by law. We
									recommend that clients conduct their own due diligence and
									consult with appropriate professionals including attorneys,
									accountants, and inspectors.
								</p>

								<h2 class="text-2xl font-bold mb-6 text-gray-800">
									Service Availability and Scheduling
								</h2>
								<p class="text-gray-700 mb-6">
									We offer flexible scheduling including same-day showings and
									24/7 availability for executive clients. However, service
									availability may be subject to property access, seller
									cooperation, and market conditions.
								</p>
								<p class="text-gray-700 mb-6">
									Market analysis reports and property valuations are provided
									as professional opinions based on available data and market
									conditions at the time of analysis. Results may vary based on
									market changes and additional factors. Clients should verify
									all information independently.
								</p>

								<h2 class="text-2xl font-bold mb-6 text-gray-800">
									Contact Information
								</h2>
								<p class="text-gray-700 mb-6">
									For questions about these terms, please contact:
								</p>
								<div class="bg-blue-50 p-6 rounded-lg">
									<p class="text-gray-700">
										<strong>Dr. Jan Duffy</strong>
										<br />
										Phone: (702) 903-1952
										<br />
										Email: DrDuffy@CentennialHillsHomesForSale.com
										<br />
										Address: 1490 Center Crossing Rd, Las Vegas, NV 89144
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Terms of Service | Dr. Jan Duffy Real Estate",
	meta: [
		{
			name: "description",
			content:
				"Terms of service for Dr. Jan Duffy Real Estate. Learn about our service terms and conditions.",
		},
		{
			name: "robots",
			content: "noindex, follow",
		},
	],
};
