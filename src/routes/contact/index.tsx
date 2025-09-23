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
							Contact Dr. Jan Duffy
						</h1>
						<p class="text-xl text-blue-100">
							Ready to Find Your Luxury Home? Get Your Free Market Analysis
							Today
						</p>
					</div>
				</div>
			</section>

			{/* Contact Content */}
			<section class="py-16">
				<div class="container mx-auto px-4">
					<div class="max-w-6xl mx-auto">
						<div class="grid lg:grid-cols-2 gap-12">
							{/* Contact Information */}
							<div class="space-y-8">
								<div class="bg-white rounded-lg shadow-lg p-8">
									<h2 class="text-3xl font-bold mb-6 text-gray-800">
										Get In Touch
									</h2>
									<div class="space-y-6">
										<div class="flex items-start space-x-4">
											<div class="text-2xl">📞</div>
											<div>
												<h3 class="font-semibold text-gray-800">Phone</h3>
												<p class="text-gray-700">(702) 903-1952</p>
												<p class="text-sm text-gray-600">Available 24/7</p>
											</div>
										</div>
										<div class="flex items-start space-x-4">
											<div class="text-2xl">📍</div>
											<div>
												<h3 class="font-semibold text-gray-800">
													Office Location
												</h3>
												<p class="text-gray-700">1490 Center Crossing Rd</p>
												<p class="text-gray-700">Las Vegas, NV 89144</p>
											</div>
										</div>
										<div class="flex items-start space-x-4">
											<div class="text-2xl">⏰</div>
											<div>
												<h3 class="font-semibold text-gray-800">
													Business Hours
												</h3>
												<p class="text-gray-700">Sunday - Saturday</p>
												<p class="text-gray-700">6:00 AM - 9:00 PM</p>
												<p class="text-sm text-gray-600">
													Available 24/7 for urgent matters
												</p>
											</div>
										</div>
									</div>
								</div>

								<div class="bg-blue-50 rounded-lg p-8">
									<h3 class="text-2xl font-bold mb-4 text-gray-800">
										Service Areas
									</h3>
									<div class="grid grid-cols-2 gap-2 text-sm">
										<div>• Red Rock Country Club</div>
										<div>• The Ridges</div>
										<div>• Summerlin West</div>
										<div>• Summerlin North</div>
										<div>• Summerlin South</div>
										<div>• Centennial Hills</div>
										<div>• Lone Mountain</div>
										<div>• North Las Vegas</div>
									</div>
								</div>
							</div>

							{/* Contact Form */}
							<div class="bg-white rounded-lg shadow-lg p-8">
								<h2 class="text-3xl font-bold mb-6 text-gray-800">
									Request Free Market Analysis
								</h2>
								<form class="space-y-6">
									<div class="grid md:grid-cols-2 gap-6">
										<div>
											<label class="block text-sm font-medium text-gray-700 mb-2">
												First Name *
											</label>
											<input
												type="text"
												required
												class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											/>
										</div>
										<div>
											<label class="block text-sm font-medium text-gray-700 mb-2">
												Last Name *
											</label>
											<input
												type="text"
												required
												class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											/>
										</div>
									</div>
									<div>
										<label class="block text-sm font-medium text-gray-700 mb-2">
											Email *
										</label>
										<input
											type="email"
											required
											class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										/>
									</div>
									<div>
										<label class="block text-sm font-medium text-gray-700 mb-2">
											Phone *
										</label>
										<input
											type="tel"
											required
											class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										/>
									</div>
									<div>
										<label class="block text-sm font-medium text-gray-700 mb-2">
											Property Address (if applicable)
										</label>
										<input
											type="text"
											class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										/>
									</div>
									<div>
										<label class="block text-sm font-medium text-gray-700 mb-2">
											Service Needed
										</label>
										<select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
											<option>Buying a Luxury Home</option>
											<option>Selling a Luxury Home</option>
											<option>Market Analysis</option>
											<option>California Equity Buyer</option>
											<option>Corporate Relocation</option>
											<option>Investment Property</option>
										</select>
									</div>
									<div>
										<label class="block text-sm font-medium text-gray-700 mb-2">
											Message
										</label>
										<textarea
											rows={4}
											class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											placeholder="Tell us about your real estate needs..."
										></textarea>
									</div>
									<button
										type="submit"
										class="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
									>
										Get Free Market Analysis
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
});

export const head: DocumentHead = {
	title:
		"Contact Dr. Jan Duffy | (702) 903-1952 | Free Luxury Home Market Analysis | 24/7 Available",
	meta: [
		{
			name: "description",
			content:
				"Contact Dr. Jan Duffy, Top 1% Las Vegas REALTOR® at (702) 903-1952 for your FREE luxury home market analysis. Available 24/7 for California equity buyers & corporate relocations. Same-day showings in Red Rock Country Club, The Ridges & Summerlin West.",
		},
		{
			name: "keywords",
			content:
				"contact Dr. Jan Duffy, (702) 903-1952, free market analysis, luxury homes Las Vegas, Red Rock Country Club, The Ridges, Summerlin West, California equity buyers, corporate relocations, 24/7 available, same-day showings",
		},
		{
			property: "og:title",
			content:
				"Contact Dr. Jan Duffy | (702) 903-1952 | Free Luxury Home Market Analysis | 24/7 Available",
		},
		{
			property: "og:description",
			content:
				"Top 1% Las Vegas REALTOR® available 24/7 at (702) 903-1952. Free luxury home market analysis. Same-day showings for California equity buyers & corporate relocations.",
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
		{
			name: "geo.position",
			content: "36.1699;-115.1398",
		},
	],
};
