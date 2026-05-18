import ServiceLandingPage, {
  serviceMetadata,
} from "@/components/templates/ServiceLandingPage";
import { servicePages } from "@/lib/service-content";

const page = servicePages["same-day-showings"];

export const metadata = serviceMetadata("same-day-showings", page.title, page.description);

export default function Page() {
  return <ServiceLandingPage {...page} slug="same-day-showings" />;
}
