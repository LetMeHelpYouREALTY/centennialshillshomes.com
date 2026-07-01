import HyperlocalPage, { hyperlocalMetadata } from "@/components/templates/HyperlocalPage";
import { hyperlocalPages } from "@/lib/hyperlocal-content";

const data = hyperlocalPages["zip-89135-homes-for-sale"];

export const metadata = hyperlocalMetadata(data);

export default function Zip89135Page() {
  return <HyperlocalPage data={data} />;
}
