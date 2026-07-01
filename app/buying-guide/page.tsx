import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["buying-guide"];

export const metadata = serviceMetadata("buying-guide", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="buying-guide" />;
}
