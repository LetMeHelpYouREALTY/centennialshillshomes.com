import ContentLandingPage, {
  contentLandingMetadata,
} from "@/components/templates/ContentLandingPage";
import { landingPages } from "@/lib/landing-content";

const page = landingPages["centennial-hills-market-report"];

export const metadata = contentLandingMetadata(page);

export default function Page() {
  return <ContentLandingPage data={page} />;
}
