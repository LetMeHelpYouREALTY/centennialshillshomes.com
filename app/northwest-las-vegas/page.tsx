import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["northwest-las-vegas"];

export const metadata = serviceMetadata("northwest-las-vegas", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="northwest-las-vegas" />;
}
