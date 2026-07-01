import HyperlocalPage, { hyperlocalMetadata } from "@/components/templates/HyperlocalPage";
import { hyperlocalPages } from "@/lib/hyperlocal-content";

const data = hyperlocalPages["realtor-services"];

export const metadata = hyperlocalMetadata(data);

export default function RealtorServicesPage() {
  return <HyperlocalPage data={data} />;
}
