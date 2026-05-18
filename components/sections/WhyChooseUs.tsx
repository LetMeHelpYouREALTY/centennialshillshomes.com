import { Shield, TrendingUp, Users, Award, Clock, Home } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "BHHS Nevada Properties",
    description: "Berkshire Hathaway HomeServices brand trust with local northwest Las Vegas expertise.",
  },
  {
    icon: TrendingUp,
    title: "Centennial Hills Focus",
    description: "Hyperlocal knowledge of 89135, 89138, 89144 and adjacent luxury communities.",
  },
  {
    icon: Users,
    title: "Top 1% REALTOR®",
    description: "Dr. Jan Duffy — recognized results for move-up and luxury buyers and sellers.",
  },
  {
    icon: Award,
    title: "500+ Transactions",
    description: "Experience you can verify, with executive-level discretion when it matters.",
  },
  {
    icon: Clock,
    title: "Same-Day Showings",
    description: "Fast scheduling for qualified buyers, including evenings and weekends.",
  },
  {
    icon: Home,
    title: "Complimentary CMA",
    description: "Free market analysis and pricing strategy before you list or make an offer.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Dr. Jan Duffy
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Northwest Las Vegas real estate with Berkshire Hathaway HomeServices backing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
