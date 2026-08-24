import { Shield, TrendingUp, Users, Award, Clock, Home } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "BHHS Nevada Properties in 89144",
    description: "Berkshire Hathaway HomeServices brand trust with local northwest Las Vegas expertise.",
  },
  {
    icon: TrendingUp,
    title: "Centennial Hills 89144 · 89138 · 89135",
    description: "Hyperlocal knowledge of 89135, 89138, 89144 and adjacent luxury communities.",
  },
  {
    icon: Users,
    title: "Top 1% Centennial Hills REALTOR®",
    description: "Dr. Jan Duffy — recognized results for move-up and luxury buyers and sellers.",
  },
  {
    icon: Award,
    title: "500+ Transactions",
    description: "Experience you can verify, with executive-level discretion when it matters.",
  },
  {
    icon: Clock,
    title: "Same-Day Showings in 89144",
    description: "Fast scheduling for qualified buyers, including evenings and weekends.",
  },
  {
    icon: Home,
    title: "Complimentary Centennial Hills CMA",
    description: "Free market analysis and pricing strategy before you list or make an offer.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
            Private client service
          </p>
          <h2 className="mt-3 font-display text-3xl italic text-ink md:text-5xl mb-4">
            Why Hire Dr. Jan Duffy in Centennial Hills
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Northwest Las Vegas real estate with Berkshire Hathaway HomeServices backing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col p-6 rounded-2xl border border-terracotta/20 bg-white shadow-sm hover:shadow-md hover:border-terracotta/40 transition-all"
              >
                <div className="bg-ink rounded-xl p-3 mb-4 w-fit">
                  <Icon className="h-6 w-6 text-terracotta-light" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
