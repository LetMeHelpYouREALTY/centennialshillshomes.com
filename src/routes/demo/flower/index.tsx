import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	const completedItems = useSignal<Set<number>>(new Set());

	const toggleItem = $((index: number) => {
		const current = completedItems.value;
		const newSet = new Set(current);
		if (newSet.has(index)) {
			newSet.delete(index);
		} else {
			newSet.add(index);
		}
		completedItems.value = newSet;
	});

	const buyerChecklist = [
		{
			category: "Financial Preparation",
			items: [
				"Get pre-approved for a mortgage",
				"Review credit report and fix any errors",
				"Calculate total budget including closing costs",
				"Save for down payment (typically 5-20%)",
				"Prepare financial documentation",
				"Consider additional costs (insurance, taxes, HOA)",
			],
		},
		{
			category: "Property Research",
			items: [
				"Define must-have features and amenities",
				"Research Las Vegas luxury communities",
				"Compare Red Rock Country Club vs The Ridges",
				"Evaluate Summerlin West vs Centennial Hills",
				"Check property values and market trends",
				"Research school districts and amenities",
			],
		},
		{
			category: "Professional Services",
			items: [
				"Hire Dr. Jan Duffy as your buyer's agent",
				"Schedule property inspections",
				"Get professional home appraisal",
				"Consult with real estate attorney",
				"Review HOA documents and restrictions",
				"Arrange homeowners insurance quotes",
			],
		},
		{
			category: "Property Viewing",
			items: [
				"Schedule same-day showings with Dr. Duffy",
				"Visit properties during different times of day",
				"Check neighborhood noise levels",
				"Evaluate commute times to work",
				"Test drive the route to amenities",
				"Consider future development plans",
			],
		},
		{
			category: "Making an Offer",
			items: [
				"Review comparable sales with Dr. Duffy",
				"Determine competitive offer price",
				"Prepare earnest money deposit",
				"Write compelling offer letter",
				"Negotiate terms and conditions",
				"Schedule inspection contingency",
			],
		},
		{
			category: "Closing Process",
			items: [
				"Complete final walkthrough",
				"Review closing disclosure",
				"Arrange final financing approval",
				"Transfer utilities and services",
				"Schedule closing appointment",
				"Prepare for move-in day",
			],
		},
	];

	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Luxury Home Buyer Checklist
						</h1>
						<p class="text-xl text-green-100">
							Complete Guide to Buying Your Dream Home in Las Vegas
						</p>
					</div>
				</div>
			</section>

			{/* Checklist Introduction */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center mb-12">
						<h2 class="text-3xl font-bold mb-6 text-gray-800">
							Your Complete Home Buying Journey
						</h2>
						<p class="text-lg text-gray-700 mb-6">
							Buying a luxury home in Las Vegas requires careful planning and
							expert guidance. This comprehensive checklist will guide you
							through every step of the process, from initial financial
							preparation to closing day.
						</p>
						<p class="text-lg text-gray-700">
							Dr. Jan Duffy, Top 1% Las Vegas REALTOR®, has created this
							checklist based on 30+ years of experience helping buyers find
							their perfect luxury homes in West Summerlin's premier
							communities.
						</p>
					</div>

					{/* Interactive Checklist */}
					<div class="max-w-6xl mx-auto">
						{buyerChecklist.map((section, sectionIndex) => (
							<div
								key={sectionIndex}
								class="bg-white rounded-lg shadow-lg p-8 mb-8"
							>
								<h3 class="text-2xl font-bold mb-6 text-gray-800">
									{section.category}
								</h3>
								<div class="grid md:grid-cols-2 gap-4">
									{section.items.map((item, itemIndex) => {
										const globalIndex = sectionIndex * 10 + itemIndex;
										const isCompleted = completedItems.value.has(globalIndex);
										return (
											<div
												key={itemIndex}
												class={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
													isCompleted
														? "bg-green-50 border-green-300 text-green-800"
														: "bg-gray-50 border-gray-200 hover:border-green-300"
												}`}
												onClick$={() => toggleItem(globalIndex)}
											>
												<div
													class={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
														isCompleted
															? "bg-green-500 border-green-500 text-white"
															: "border-gray-300"
													}`}
												>
													{isCompleted && "✓"}
												</div>
												<span
													class={`font-medium ${isCompleted ? "line-through" : ""}`}
												>
													{item}
												</span>
											</div>
										);
									})}
								</div>
							</div>
						))}
					</div>

					{/* Progress Summary */}
					<div class="max-w-4xl mx-auto bg-blue-50 rounded-lg p-8 text-center">
						<h3 class="text-2xl font-bold mb-4 text-gray-800">Your Progress</h3>
						<div class="text-4xl font-bold text-blue-600 mb-2">
							{completedItems.value.size} /{" "}
							{buyerChecklist.reduce(
								(total, section) => total + section.items.length,
								0,
							)}
						</div>
						<p class="text-gray-700">
							{completedItems.value.size ===
							buyerChecklist.reduce(
								(total, section) => total + section.items.length,
								0,
							)
								? "Congratulations! You're ready to buy your luxury home!"
								: "Keep working through the checklist to ensure a successful home purchase."}
						</p>
					</div>

					{/* CTA Section */}
					<div class="max-w-4xl mx-auto text-center mt-12">
						<h3 class="text-2xl font-bold mb-4 text-gray-800">
							Ready to Start Your Home Buying Journey?
						</h3>
						<p class="text-lg text-gray-700 mb-8">
							Contact Dr. Jan Duffy for personalized guidance and expert
							assistance throughout your luxury home buying process.
						</p>
						<div class="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="tel:+17029031952"
								class="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
							>
								Call (702) 903-1952
							</a>
							<a
								href="/contact"
								class="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-600 hover:text-white transition-colors font-semibold"
							>
								Schedule Consultation
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title: "Luxury Home Buyer Checklist | Dr. Jan Duffy | Las Vegas Real Estate",
	meta: [
		{
			name: "description",
			content:
				"Complete interactive checklist for luxury home buyers in Las Vegas. Dr. Jan Duffy's comprehensive guide covers financial preparation, property research, and closing process.",
		},
		{
			property: "og:title",
			content:
				"Luxury Home Buyer Checklist | Dr. Jan Duffy | Las Vegas Real Estate",
		},
		{
			property: "og:description",
			content:
				"Complete interactive checklist for luxury home buyers in Las Vegas. Dr. Jan Duffy's comprehensive guide covers financial preparation, property research, and closing process.",
		},
		{
			property: "og:url",
			content: "https://www.centennialhillshomesforsale.com/demo/flower",
		},
		{
			property: "og:image",
			content: "https://www.centennialhillshomesforsale.com/og-image.jpg",
		},
		{ name: "twitter:card", content: "summary_large_image" },
		{
			name: "keywords",
			content:
				"luxury home buyer checklist, Las Vegas home buying guide, luxury real estate checklist, home buying process, Dr. Jan Duffy buyer guide, Las Vegas luxury homes",
		},
	],
};
