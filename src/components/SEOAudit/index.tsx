import { component$ } from "@builder.io/qwik";

export interface SEOAuditProps {
	pageUrl: string;
	pageTitle: string;
	pageDescription: string;
	wordCount?: number;
	headingStructure?: {
		h1: number;
		h2: number;
		h3: number;
		h4: number;
		h5: number;
		h6: number;
	};
	imageCount?: number;
	linkCount?: number;
	hasCanonical?: boolean;
	hasMetaDescription?: boolean;
	hasStructuredData?: boolean;
}

export const SEOAudit = component$<SEOAuditProps>((props) => {
	const {
		pageTitle,
		pageDescription,
		wordCount = 0,
		headingStructure = { h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0 },
		imageCount = 0,
		linkCount = 0,
		hasCanonical = false,
		hasMetaDescription = false,
		hasStructuredData = false,
	} = props;

	// SEO Score Calculation
	const calculateSEOScore = () => {
		let score = 0;
		let maxScore = 0;

		// Title optimization (20 points)
		maxScore += 20;
		if (pageTitle.length >= 30 && pageTitle.length <= 60) score += 20;
		else if (pageTitle.length > 0) score += 10;

		// Meta description optimization (15 points)
		maxScore += 15;
		if (pageDescription.length >= 120 && pageDescription.length <= 160)
			score += 15;
		else if (pageDescription.length > 0) score += 8;

		// Content length (15 points)
		maxScore += 15;
		if (wordCount >= 300) score += 15;
		else if (wordCount >= 150) score += 10;
		else if (wordCount > 0) score += 5;

		// Heading structure (15 points)
		maxScore += 15;
		if (headingStructure.h1 === 1) score += 10;
		if (headingStructure.h2 >= 2) score += 5;

		// Images (10 points)
		maxScore += 10;
		if (imageCount > 0) score += 10;

		// Links (10 points)
		maxScore += 10;
		if (linkCount >= 3) score += 10;
		else if (linkCount > 0) score += 5;

		// Technical SEO (15 points)
		maxScore += 15;
		if (hasCanonical) score += 5;
		if (hasMetaDescription) score += 5;
		if (hasStructuredData) score += 5;

		return Math.round((score / maxScore) * 100);
	};

	const seoScore = calculateSEOScore();

	const getScoreColor = (score: number) => {
		if (score >= 80) return "text-green-600";
		if (score >= 60) return "text-yellow-600";
		return "text-red-600";
	};

	const getScoreLabel = (score: number) => {
		if (score >= 80) return "Excellent";
		if (score >= 60) return "Good";
		if (score >= 40) return "Needs Improvement";
		return "Poor";
	};

	return (
		<div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
			<h3 class="text-lg font-semibold mb-4 text-gray-800">SEO Analysis</h3>

			{/* Overall Score */}
			<div class="mb-6">
				<div class="flex items-center justify-between mb-2">
					<span class="text-sm font-medium text-gray-600">Overall Score</span>
					<span class={`text-2xl font-bold ${getScoreColor(seoScore)}`}>
						{seoScore}/100
					</span>
				</div>
				<div class="w-full bg-gray-200 rounded-full h-2">
					<div
						class={`h-2 rounded-full ${
							seoScore >= 80
								? "bg-green-500"
								: seoScore >= 60
									? "bg-yellow-500"
									: "bg-red-500"
						}`}
						style={`width: ${seoScore}%`}
					></div>
				</div>
				<p class={`text-sm mt-1 ${getScoreColor(seoScore)}`}>
					{getScoreLabel(seoScore)}
				</p>
			</div>

			{/* Detailed Analysis */}
			<div class="space-y-3">
				<div class="flex justify-between items-center">
					<span class="text-sm text-gray-600">Title Length</span>
					<span
						class={`text-sm font-medium ${
							pageTitle.length >= 30 && pageTitle.length <= 60
								? "text-green-600"
								: "text-yellow-600"
						}`}
					>
						{pageTitle.length} characters
					</span>
				</div>

				<div class="flex justify-between items-center">
					<span class="text-sm text-gray-600">Meta Description</span>
					<span
						class={`text-sm font-medium ${
							pageDescription.length >= 120 && pageDescription.length <= 160
								? "text-green-600"
								: "text-yellow-600"
						}`}
					>
						{pageDescription.length} characters
					</span>
				</div>

				<div class="flex justify-between items-center">
					<span class="text-sm text-gray-600">Content Length</span>
					<span
						class={`text-sm font-medium ${
							wordCount >= 300
								? "text-green-600"
								: wordCount >= 150
									? "text-yellow-600"
									: "text-red-600"
						}`}
					>
						{wordCount} words
					</span>
				</div>

				<div class="flex justify-between items-center">
					<span class="text-sm text-gray-600">H1 Tags</span>
					<span
						class={`text-sm font-medium ${
							headingStructure.h1 === 1 ? "text-green-600" : "text-red-600"
						}`}
					>
						{headingStructure.h1}
					</span>
				</div>

				<div class="flex justify-between items-center">
					<span class="text-sm text-gray-600">Images</span>
					<span
						class={`text-sm font-medium ${
							imageCount > 0 ? "text-green-600" : "text-yellow-600"
						}`}
					>
						{imageCount}
					</span>
				</div>

				<div class="flex justify-between items-center">
					<span class="text-sm text-gray-600">Internal Links</span>
					<span
						class={`text-sm font-medium ${
							linkCount >= 3
								? "text-green-600"
								: linkCount > 0
									? "text-yellow-600"
									: "text-red-600"
						}`}
					>
						{linkCount}
					</span>
				</div>
			</div>

			{/* Recommendations */}
			<div class="mt-6 pt-4 border-t border-gray-200">
				<h4 class="text-sm font-semibold text-gray-800 mb-2">
					Recommendations
				</h4>
				<ul class="text-sm text-gray-600 space-y-1">
					{pageTitle.length < 30 && (
						<li>• Increase title length to 30-60 characters</li>
					)}
					{pageTitle.length > 60 && (
						<li>• Reduce title length to under 60 characters</li>
					)}
					{pageDescription.length < 120 && (
						<li>• Expand meta description to 120-160 characters</li>
					)}
					{pageDescription.length > 160 && (
						<li>• Shorten meta description to under 160 characters</li>
					)}
					{wordCount < 300 && <li>• Add more content (aim for 300+ words)</li>}
					{headingStructure.h1 !== 1 && (
						<li>• Use exactly one H1 tag per page</li>
					)}
					{imageCount === 0 && (
						<li>• Add relevant images with descriptive alt text</li>
					)}
					{linkCount < 3 && (
						<li>• Add more internal links to related content</li>
					)}
					{!hasCanonical && (
						<li>• Add canonical URL to prevent duplicate content</li>
					)}
					{!hasStructuredData && <li>• Implement structured data markup</li>}
				</ul>
			</div>
		</div>
	);
});
