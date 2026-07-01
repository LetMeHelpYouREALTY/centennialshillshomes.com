import HyperlocalPage, { hyperlocalMetadata } from "@/components/templates/HyperlocalPage";
import { hyperlocalPages } from "@/lib/hyperlocal-content";

const data = hyperlocalPages["sell-home-centennial-hills"];

export const metadata = hyperlocalMetadata(data);

export default function SellHomeCentennialHillsPage() {
  return <HyperlocalPage data={data} />;
}
