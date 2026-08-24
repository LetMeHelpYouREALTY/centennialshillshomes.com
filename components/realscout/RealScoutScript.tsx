import { REALSCOUT_WIDGET_SCRIPT } from "@/lib/realscout";

/** Load RealScout only on pages that render widgets — not in the global head. */
export default function RealScoutScript() {
  return <script src={REALSCOUT_WIDGET_SCRIPT} type="module" async />;
}
