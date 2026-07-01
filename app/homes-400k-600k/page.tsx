import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["homes-400k-600k"];

export const metadata = serviceMetadata("homes-400k-600k", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="homes-400k-600k" />;
}
