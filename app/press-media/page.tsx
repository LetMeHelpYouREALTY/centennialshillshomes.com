import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["press-media"];

export const metadata = serviceMetadata("press-media", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="press-media" />;
}
