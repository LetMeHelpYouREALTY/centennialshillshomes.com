"use client";

import dynamic from "next/dynamic";

// Next 15: ssr:false dynamic imports must live in a Client Component.
const AIChatWidget = dynamic(() => import("@/components/chat/AIChatWidget"), {
  ssr: false,
});
const CalendlyBadge = dynamic(() => import("@/components/calendly/CalendlyBadge"), {
  ssr: false,
});

export default function ClientWidgets() {
  return (
    <>
      <AIChatWidget />
      <CalendlyBadge />
    </>
  );
}
