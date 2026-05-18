import NeighborhoodPage, {
  neighborhoodMetadata,
} from "@/components/templates/NeighborhoodPage";
import { neighborhoodPages } from "@/lib/neighborhood-content";

const data = neighborhoodPages["summerlin-west"];

export const metadata = neighborhoodMetadata(data);

export default function Page() {
  return <NeighborhoodPage data={data} />;
}
