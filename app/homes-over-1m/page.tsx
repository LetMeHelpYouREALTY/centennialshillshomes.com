import ContentLandingPage, {
  contentLandingMetadata,
} from "@/components/templates/ContentLandingPage";
import { landingPages } from "@/lib/landing-content";

const page = landingPages["homes-over-1m"];

export const metadata = contentLandingMetadata(page);

export default function Page() {
  return <ContentLandingPage data={page} />;
}
