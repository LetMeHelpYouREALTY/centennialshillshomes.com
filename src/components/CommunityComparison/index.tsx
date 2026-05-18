import { $, component$, useSignal } from "@builder.io/qwik";
import { OptimizedImage } from "~/components/OptimizedImage";

export interface CommunityData {
	id: string;
	name: string;
	priceRange: string;
	homeTypes: string[];
	amenities: string[];
	pros: string[];
	cons: string[];
	bestFor: string;
	image: string;
}

export interface CommunityComparisonProps {
	communities: CommunityData[];
}

export const CommunityComparison = component$<CommunityComparisonProps>(
	(props) => {
		const { communities } = props;
		const selectedCommunities = useSignal<string[]>([]);

		const toggleCommunity = $((communityId: string) => {
			const current = selectedCommunities.value;
			if (current.includes(communityId)) {
				selectedCommunities.value = current.filter((id) => id !== communityId);
			} else if (current.length < 3) {
				selectedCommunities.value = [...current, communityId];
			}
		});

		const clearSelection = $(() => {
			selectedCommunities.value = [];
		});

		return (
			<section class="py-16 bg-white">
				<div class="container mx-auto px-4">
					<div class="max-w-6xl mx-auto">
						<h2 class="text-3xl font-bold text-center mb-4 text-gray-800">
							Compare Las Vegas Luxury Communities
						</h2>
						<p class="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
							Select up to 3 communities to compare features, amenities, and
							lifestyle options side by side.
						</p>

						{/* Community Selection */}
						<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
							{communities.map((community) => (
								<div
									key={community.id}
									class={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
										selectedCommunities.value.includes(community.id)
											? "border-blue-600 bg-blue-50"
											: "border-gray-200 hover:border-gray-300"
									}`}
									onClick$={() => toggleCommunity(community.id)}
								>
									<div class="text-center">
										<OptimizedImage
											src={community.image}
											alt={`Luxury homes in ${community.name}, Las Vegas`}
											width={320}
											height={200}
											className="rounded-lg mb-4 h-40 w-full"
										/>
										<h3 class="text-lg font-semibold mb-2">{community.name}</h3>
										<p class="text-blue-600 font-medium mb-2">
											{community.priceRange}
										</p>
										<p class="text-sm text-gray-600">{community.bestFor}</p>
										{selectedCommunities.value.includes(community.id) && (
											<div class="mt-3">
												<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
													✓ Selected
												</span>
											</div>
										)}
									</div>
								</div>
							))}
						</div>

						{/* Clear Selection Button */}
						{selectedCommunities.value.length > 0 && (
							<div class="text-center mb-8">
								<button
									onClick$={clearSelection}
									class="text-gray-500 hover:text-gray-700 text-sm underline"
								>
									Clear Selection ({selectedCommunities.value.length}/3)
								</button>
							</div>
						)}

						{/* Comparison Table */}
						{selectedCommunities.value.length > 0 && (
							<div class="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
								<div class="overflow-x-auto">
									<table class="w-full">
										<thead class="bg-gray-50">
											<tr>
												<th class="px-6 py-4 text-left text-sm font-semibold text-gray-900">
													Feature
												</th>
												{selectedCommunities.value.map((communityId) => {
													const community = communities.find(
														(c) => c.id === communityId,
													);
													return (
														<th
															key={communityId}
															class="px-6 py-4 text-center text-sm font-semibold text-gray-900"
														>
															{community?.name}
														</th>
													);
												})}
											</tr>
										</thead>
										<tbody class="divide-y divide-gray-200">
											<tr>
												<td class="px-6 py-4 text-sm font-medium text-gray-900">
													Price Range
												</td>
												{selectedCommunities.value.map((communityId) => {
													const community = communities.find(
														(c) => c.id === communityId,
													);
													return (
														<td
															key={communityId}
															class="px-6 py-4 text-center text-sm text-gray-600"
														>
															{community?.priceRange}
														</td>
													);
												})}
											</tr>
											<tr>
												<td class="px-6 py-4 text-sm font-medium text-gray-900">
													Home Types
												</td>
												{selectedCommunities.value.map((communityId) => {
													const community = communities.find(
														(c) => c.id === communityId,
													);
													return (
														<td
															key={communityId}
															class="px-6 py-4 text-center text-sm text-gray-600"
														>
															{community?.homeTypes.join(", ")}
														</td>
													);
												})}
											</tr>
											<tr>
												<td class="px-6 py-4 text-sm font-medium text-gray-900">
													Key Amenities
												</td>
												{selectedCommunities.value.map((communityId) => {
													const community = communities.find(
														(c) => c.id === communityId,
													);
													return (
														<td
															key={communityId}
															class="px-6 py-4 text-center text-sm text-gray-600"
														>
															{community?.amenities.slice(0, 3).join(", ")}
														</td>
													);
												})}
											</tr>
											<tr>
												<td class="px-6 py-4 text-sm font-medium text-gray-900">
													Best For
												</td>
												{selectedCommunities.value.map((communityId) => {
													const community = communities.find(
														(c) => c.id === communityId,
													);
													return (
														<td
															key={communityId}
															class="px-6 py-4 text-center text-sm text-gray-600"
														>
															{community?.bestFor}
														</td>
													);
												})}
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						)}

						{/* CTA Section */}
						<div class="text-center mt-12">
							<p class="text-gray-600 mb-4">
								Need help deciding? Dr. Jan Duffy can provide personalized
								community recommendations based on your lifestyle and budget.
							</p>
							<a
								href="/contact"
								class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
							>
								Get Personalized Community Recommendations
							</a>
						</div>
					</div>
				</div>
			</section>
		);
	},
);
