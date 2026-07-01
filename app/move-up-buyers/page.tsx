import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["move-up-buyers"];

export const metadata = serviceMetadata("move-up-buyers", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="move-up-buyers" />;
}
