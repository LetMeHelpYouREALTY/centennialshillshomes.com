import { Phone } from "lucide-react";
import { agentInfo } from "@/lib/site-config";
import { currentMarketIntro, currentMarketItems } from "@/lib/market-copy";
import { CONTENT_LAST_UPDATED_LABEL } from "@/lib/content-freshness";

interface CurrentMarketBandProps {
  area: string;
  zipLabel?: string;
  heading?: string;
}

export default function CurrentMarketBand({
  area,
  zipLabel,
  heading,
}: CurrentMarketBandProps) {
  const items = currentMarketItems(area);

  return (
    <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {heading ?? `Current ${area} Pricing & Inventory | ${CONTENT_LAST_UPDATED_LABEL}`}
      </h2>
      <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
        {currentMarketIntro(area, zipLabel)}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">{item.value}</div>
            <div className="text-slate-300 text-sm">{item.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href={agentInfo.phoneTel}
          className="inline-flex items-center bg-white text-slate-900 px-6 py-3 rounded-md font-semibold hover:bg-blue-50"
        >
          <Phone className="h-4 w-4 mr-2" />
          Request a complimentary CMA
        </a>
      </div>
    </section>
  );
}
