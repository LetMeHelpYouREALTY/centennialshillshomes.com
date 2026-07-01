import HyperlocalPage, { hyperlocalMetadata } from "@/components/templates/HyperlocalPage";
import { hyperlocalPages } from "@/lib/hyperlocal-content";

const data = hyperlocalPages["centennial-hills-realtor"];

export const metadata = hyperlocalMetadata(data);

export default function CentennialHillsRealtorPage() {
  return <HyperlocalPage data={data} />;
}
