import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["homes-over-1m"];

export const metadata = serviceMetadata("homes-over-1m", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="homes-over-1m" />;
}
