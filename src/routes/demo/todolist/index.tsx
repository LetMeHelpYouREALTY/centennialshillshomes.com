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

	const sellerChecklist = [
		{
			category: "Pre-Listing Preparation",
			items: [
				"Get professional market analysis from Dr. Duffy",
				"Complete home inspection and address issues",
				"Deep clean and declutter entire home",
				"Stage home for maximum appeal",
				"Take professional listing photos",
				"Set competitive listing price",
			],
		},
		{
			category: "Home Improvements",
			items: [
				"Repair any visible damage or wear",
				"Update outdated fixtures and hardware",
				"Fresh coat of neutral paint",
				"Improve curb appeal and landscaping",
				"Clean carpets and refinish floors",
				"Ensure all systems are working properly",
			],
		},
		{
			category: "Marketing Strategy",
			items: [
				"List on MLS with Dr. Jan Duffy",
				"Create virtual tour and 3D walkthrough",
				"Market to California equity buyers",
				"Promote to corporate relocation clients",
				"Utilize social media and online marketing",
				"Schedule professional photography",
			],
		},
		{
			category: "Showing Preparation",
			items: [
				"Prepare home for same-day showings",
				"Remove personal items and valuables",
				"Ensure excellent lighting throughout",
				"Create welcoming atmosphere",
				"Prepare information packets for buyers",
				"Coordinate showing schedule",
			],
		},
		{
			category: "Offer Negotiation",
			items: [
				"Review all offers with Dr. Duffy",
				"Negotiate price and terms",
				"Consider buyer financing and timeline",
				"Evaluate inspection contingencies",
				"Respond to counteroffers",
				"Accept best offer and sign contract",
			],
		},
		{
			category: "Closing Process",
			items: [
				"Complete buyer's inspection period",
				"Address any repair requests",
				"Prepare for appraisal",
				"Coordinate with buyer's lender",
				"Schedule final walkthrough",
				"Complete closing and transfer ownership",
			],
		},
	];

	return (
		<div class="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section class="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center">
						<h1 class="text-4xl md:text-5xl font-bold mb-6">
							Luxury Home Seller Checklist
						</h1>
						<p class="text-xl text-purple-100">
							Complete Guide to Selling Your Luxury Home in Las Vegas
						</p>
					</div>
				</div>
			</section>

			{/* Checklist Introduction */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-4xl mx-auto text-center mb-12">
						<h2 class="text-3xl font-bold mb-6 text-gray-800">
							Your Complete Home Selling Journey
						</h2>
						<p class="text-lg text-gray-700 mb-6">
							Selling a luxury home in Las Vegas requires strategic planning and
							expert marketing. This comprehensive checklist will guide you
							through every step of the selling process, from initial
							preparation to closing day.
						</p>
						<p class="text-lg text-gray-700">
							Dr. Jan Duffy, Top 1% Las Vegas REALTOR®, has created this
							checklist based on 30+ years of experience helping sellers
							maximize their home's value in West Summerlin's premier
							communities.
						</p>
					</div>

					{/* Interactive Checklist */}
					<div class="max-w-6xl mx-auto">
						{sellerChecklist.map((section, sectionIndex) => (
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
														? "bg-purple-50 border-purple-300 text-purple-800"
														: "bg-gray-50 border-gray-200 hover:border-purple-300"
												}`}
												onClick$={() => toggleItem(globalIndex)}
											>
												<div
													class={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
														isCompleted
															? "bg-purple-500 border-purple-500 text-white"
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
							{sellerChecklist.reduce(
								(total, section) => total + section.items.length,
								0,
							)}
						</div>
						<p class="text-gray-700">
							{completedItems.value.size ===
							sellerChecklist.reduce(
								(total, section) => total + section.items.length,
								0,
							)
								? "Congratulations! You're ready to sell your luxury home!"
								: "Keep working through the checklist to ensure a successful home sale."}
						</p>
					</div>

					{/* Market Analysis CTA */}
					<div class="max-w-4xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8 text-center mt-8">
						<h3 class="text-2xl font-bold mb-4 text-gray-800">
							Get Your Free Market Analysis
						</h3>
						<p class="text-lg text-gray-700 mb-6">
							Dr. Jan Duffy provides complimentary market analysis for luxury
							homes in Red Rock Country Club, The Ridges, Summerlin West, and
							Centennial Hills. Discover your home's current market value and
							selling potential.
						</p>
						<div class="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="tel:+17029031952"
								class="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
							>
								Call (702) 903-1952
							</a>
							<a
								href="/contact"
								class="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-semibold"
							>
								Request Market Analysis
							</a>
						</div>
					</div>

					{/* CTA Section */}
					<div class="max-w-4xl mx-auto text-center mt-12">
						<h3 class="text-2xl font-bold mb-4 text-gray-800">
							Ready to Sell Your Luxury Home?
						</h3>
						<p class="text-lg text-gray-700 mb-8">
							Contact Dr. Jan Duffy for personalized guidance and expert
							marketing to maximize your home's value and achieve a successful
							sale.
						</p>
						<div class="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="/market-analysis"
								class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
							>
								Get Market Analysis
							</a>
							<a
								href="/contact"
								class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold"
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
	title: "Luxury Home Seller Checklist | Dr. Jan Duffy | Las Vegas Real Estate",
	meta: [
		{
			name: "description",
			content:
				"Complete interactive checklist for luxury home sellers in Las Vegas. Dr. Jan Duffy's comprehensive guide covers pre-listing preparation, marketing strategy, and closing process.",
		},
		{
			property: "og:title",
			content:
				"Luxury Home Seller Checklist | Dr. Jan Duffy | Las Vegas Real Estate",
		},
		{
			property: "og:description",
			content:
				"Complete interactive checklist for luxury home sellers in Las Vegas. Dr. Jan Duffy's comprehensive guide covers pre-listing preparation, marketing strategy, and closing process.",
		},
		{
			property: "og:url",
			content: "https://www.centennialhillshomesforsale.com/demo/todolist",
		},
		{
			property: "og:image",
			content: "https://www.centennialhillshomesforsale.com/og-image.jpg",
		},
		{ name: "twitter:card", content: "summary_large_image" },
		{
			name: "keywords",
			content:
				"luxury home seller checklist, Las Vegas home selling guide, luxury real estate selling checklist, home selling process, Dr. Jan Duffy seller guide, Las Vegas luxury homes for sale",
		},
	],
};
