import { agentStats } from "@/lib/site-config";

export default function StatsBand() {
  const years = new Date().getFullYear() - agentStats.servingSince;
  const stats = [
    { value: `${agentStats.transactionsClosed}+`, label: "Closed transactions" },
    { value: "Top 1%", label: "Nevada agents" },
    { value: `${years} yrs`, label: "Hyperlocal expertise" },
    { value: `${agentStats.averageRating}★`, label: "Client rating" },
  ];

  return (
    <section className="bg-ink py-10 md:py-12" aria-label="Agent credentials">
      <div className="container mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-3xl text-terracotta-light md:text-4xl">{stat.value}</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
