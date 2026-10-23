"use client";

import { useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { calendlyUrlFor } from "@/lib/calendly";
import "./types";

interface CalendlyBadgeProps {
  url?: string;
  text?: string;
  color?: string;
  textColor?: string;
  branding?: boolean;
}

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";

export default function CalendlyBadge({
  url,
  text = "Schedule time with me",
  color = "#C4A574",
  textColor = "#12100E",
  branding = true,
}: CalendlyBadgeProps) {
  const pathname = usePathname() || "/";

  // Rebuild the badge on each route change so its booking URL (event and
  // utm_campaign) matches the page the visitor is on.
  const initBadge = useCallback(() => {
    if (!window.Calendly) return;
    if (window.Calendly.destroyBadgeWidget) {
      window.Calendly.destroyBadgeWidget();
    } else {
      document.querySelector(".calendly-badge-widget")?.remove();
    }
    window.Calendly.initBadgeWidget({
      url: url ?? calendlyUrlFor(pathname, "badge"),
      text,
      color,
      textColor,
      branding,
    });
  }, [url, pathname, text, color, textColor, branding]);

  useEffect(() => {
    if (!document.getElementById("calendly-widget-css")) {
      const link = document.createElement("link");
      link.id = "calendly-widget-css";
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }
    initBadge();
  }, [initBadge]);

  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="lazyOnload"
      onLoad={initBadge}
    />
  );
}
