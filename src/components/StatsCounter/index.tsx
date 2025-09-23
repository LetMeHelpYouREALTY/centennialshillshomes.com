import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export interface StatItem {
	value: number;
	label: string;
	suffix?: string;
	prefix?: string;
}

export interface StatsCounterProps {
	stats: StatItem[];
	backgroundColor?: "white" | "gray" | "blue";
}

export const StatsCounter = component$<StatsCounterProps>((props) => {
	const animatedStats = useSignal<StatItem[]>(
		props.stats.map((stat) => ({ ...stat, value: 0 })),
	);
	const isVisible = useSignal(false);

	const bgClasses = {
		white: "bg-white",
		gray: "bg-gray-50",
		blue: "bg-blue-50",
	};

	const animateCounter = $(
		(targetValue: number, index: number, duration: number = 2000) => {
			const startValue = 0;
			const increment = targetValue / (duration / 16);
			let currentValue = startValue;

			const timer = setInterval(() => {
				currentValue += increment;
				if (currentValue >= targetValue) {
					currentValue = targetValue;
					clearInterval(timer);
				}

				const newStats = [...animatedStats.value];
				newStats[index] = {
					...newStats[index],
					value: Math.floor(currentValue),
				};
				animatedStats.value = newStats;
			}, 16);
		},
	);

	useVisibleTask$(({ track }) => {
		track(() => isVisible.value);

		if (isVisible.value) {
			props.stats.forEach((stat, index) => {
				setTimeout(() => {
					animateCounter(stat.value, index);
				}, index * 200);
			});
		}
	});

	return (
		<section class={`py-16 ${bgClasses[props.backgroundColor || "white"]}`}>
			<div class="container mx-auto px-4">
				<div class="max-w-4xl mx-auto">
					<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						{animatedStats.value.map((stat, index) => (
							<div
								key={index}
								class="animate-fade-in-up"
								onVisible$={() => {
									if (!isVisible.value) {
										isVisible.value = true;
									}
								}}
							>
								<div class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
									{stat.prefix || ""}
									{stat.value.toLocaleString()}
									{stat.suffix || ""}
								</div>
								<div class="text-gray-600 font-medium">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
});
