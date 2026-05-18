import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { servicePages } from "@/lib/service-content";

const page = servicePages["corporate-relocations"];

export const metadata = serviceMetadata("corporate-relocations", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="corporate-relocations" />;
}
