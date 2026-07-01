import HyperlocalPage, { hyperlocalMetadata } from "@/components/templates/HyperlocalPage";
import { hyperlocalPages } from "@/lib/hyperlocal-content";

const data = hyperlocalPages["buy-home-centennial-hills"];

export const metadata = hyperlocalMetadata(data);

export default function BuyHomeCentennialHillsPage() {
  return <HyperlocalPage data={data} />;
}
