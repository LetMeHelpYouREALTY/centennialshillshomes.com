import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { legacyLandingPages } from "@/lib/legacy-landing-content";

const page = legacyLandingPages["homes-under-400k"];

export const metadata = serviceMetadata("homes-under-400k", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="homes-under-400k" />;
}
