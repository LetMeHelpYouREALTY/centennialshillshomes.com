import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface ContactFormProps {}

export const ContactForm = component$<ContactFormProps>((props) => {
	return (
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
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
							placeholder="Enter your first name"
						/>
					</div>
					<div>
						<label class="block text-sm font-medium text-gray-700 mb-2">
							Last Name *
						</label>
						<input
							type="text"
							required
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
							placeholder="Enter your last name"
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
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
						placeholder="Enter your email address"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">
						Phone *
					</label>
					<input
						type="tel"
						required
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
						placeholder="(702) 555-0123"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">
						Property Address (if applicable)
					</label>
					<input
						type="text"
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
						placeholder="Enter property address"
					/>
				</div>
				<div>
					<label class="block text-sm font-medium text-gray-700 mb-2">
						Service Needed
					</label>
					<select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
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
						class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
						placeholder="Tell us about your real estate needs..."
					></textarea>
				</div>
				<div class="flex items-center">
					<input
						type="checkbox"
						id="privacy"
						required
						class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
					/>
					<label for="privacy" class="ml-2 block text-sm text-gray-700">
						I agree to the{" "}
						<Link href="/privacy" class="text-blue-600 hover:text-blue-800">
							Privacy Policy
						</Link>{" "}
						and{" "}
						<Link href="/terms" class="text-blue-600 hover:text-blue-800">
							Terms of Service
						</Link>
					</label>
				</div>
				<button
					type="submit"
					class="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
				>
					Get Free Market Analysis
				</button>
			</form>
			<div class="mt-6 text-center text-sm text-gray-600">
				<p>
					📞 Prefer to call?{" "}
					<a
						href="tel:+17029031952"
						class="text-blue-600 hover:text-blue-800 font-semibold"
					>
						(702) 903-1952
					</a>
				</p>
				<p>Available 24/7 for urgent matters</p>
			</div>
		</div>
	);
});
