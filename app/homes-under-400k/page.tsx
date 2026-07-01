import ContentLandingPage, {
  contentLandingMetadata,
} from "@/components/templates/ContentLandingPage";
import { landingPages } from "@/lib/landing-content";

const page = landingPages["homes-under-400k"];

export const metadata = contentLandingMetadata(page);

export default function Page() {
  return <ContentLandingPage data={page} />;
}
