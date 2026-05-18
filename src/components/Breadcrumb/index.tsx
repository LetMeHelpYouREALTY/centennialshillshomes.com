import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export interface BreadcrumbItem {
	label: string;
	href?: string;
}

export interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

export const Breadcrumb = component$<BreadcrumbProps>((props) => {
	const { items } = props;

	return (
		<nav
			class="bg-gray-50 border-b border-gray-200 py-3"
			aria-label="Breadcrumb"
		>
			<div class="container mx-auto px-4">
				<ol class="flex items-center space-x-2 text-sm">
					{items.map((item, index) => (
						<li key={index} class="flex items-center">
							{index > 0 && (
								<svg
									class="w-4 h-4 text-gray-400 mx-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							)}
							{item.href ? (
								<Link
									href={item.href}
									class="text-gray-600 hover:text-blue-600 transition-colors"
								>
									{item.label}
								</Link>
							) : (
								<span class="text-gray-900 font-medium" aria-current="page">
									{item.label}
								</span>
							)}
						</li>
					))}
				</ol>
			</div>
		</nav>
	);
});
