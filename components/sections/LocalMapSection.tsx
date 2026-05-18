import { siteConfig, agentInfo, officeInfo } from "@/lib/site-config";

export default function LocalMapSection() {
  const addressLine = officeInfo.address.full;

  return (
    <section className="py-16 bg-slate-50" aria-labelledby="office-map-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 id="office-map-heading" className="text-3xl font-bold text-slate-900 mb-4">
              Visit {agentInfo.name}
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Meet at our northwest Las Vegas office — same address as our Google Business Profile.
            </p>
            <address className="not-italic text-slate-800 mb-6 block">
              <strong className="block text-lg">{agentInfo.brokerage}</strong>
              {addressLine}
            </address>
            <p className="text-slate-600 mb-2">
              <strong>Hours:</strong> {siteConfig.hoursLabel}
            </p>
            <p className="text-slate-600 mb-8">
              <strong>Phone:</strong>{" "}
              <a href={agentInfo.phoneTel} className="text-blue-600 font-semibold hover:underline">
                {agentInfo.phone}
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={agentInfo.phoneTel}
                className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                Call now
              </a>
              <a
                href={siteConfig.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border-2 border-slate-300 rounded-lg font-semibold hover:bg-white"
              >
                Directions
              </a>
              <a
                href={`mailto:${agentInfo.email}`}
                className="px-5 py-2.5 border-2 border-slate-300 rounded-lg font-semibold hover:bg-white"
              >
                Email
              </a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200 min-h-[320px]">
            <iframe
              title={`Map: ${addressLine}`}
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
