import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["recent-sales"];

export const metadata = serviceMetadata("recent-sales", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="recent-sales" />;
}
