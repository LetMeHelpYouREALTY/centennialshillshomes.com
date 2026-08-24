import { siteConfig } from "@/lib/site-config";

const NUMERIC_AGENT_ID = /^\d+$/;

function utf8ToBase64(value: string): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(value, "utf8").toString("base64");
  }
  return btoa(value);
}

/**
 * RealScout custom elements require `agent-encoded-id` as base64(`Agent-<id>`).
 * Production had NEXT_PUBLIC_REALSCOUT_AGENT_ID=225050, which 404s the widget API.
 * Verified 2026-08-24: encoded QWdlbnQtMjI1MDUw returns listings; numeric 225050 returns 404.
 */
export function realScoutAgentEncodedId(raw?: string | null): string {
  const fallback = siteConfig.realScoutAgentId;
  const value = (raw ?? process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID ?? "").trim();
  if (!value) return fallback;
  if (NUMERIC_AGENT_ID.test(value)) {
    return utf8ToBase64(`Agent-${value}`);
  }
  return value;
}

export function realScoutListingsUrl(): string {
  return process.env.NEXT_PUBLIC_REALSCOUT_URL?.trim() || siteConfig.realScoutListingsUrl;
}

export const REALSCOUT_WIDGET_SCRIPT =
  "https://em.realscout.com/widgets/realscout-web-components.umd.js";

export const REALSCOUT_SIMPLE_SEARCH_HTML = (
  agentEncodedId = realScoutAgentEncodedId(),
): string =>
  `<realscout-simple-search agent-encoded-id="${agentEncodedId}"></realscout-simple-search>`;

/** Agent's own MLS listings (verified 2026-08-24: agent_properties returns inventory). */
export const REALSCOUT_YOUR_LISTINGS_HTML = (
  agentEncodedId = realScoutAgentEncodedId(),
): string =>
  `<realscout-your-listings agent-encoded-id="${agentEncodedId}" sort-order="NEWEST" listing-status="For Sale"></realscout-your-listings>`;

/**
 * Office inventory. Do not set price-min/max here — a 400k–900k band plus
 * property-types made the homepage render RealScout's empty "No listings available" state
 * even though office_properties returns hundreds of Active MLS rows.
 */
export const REALSCOUT_OFFICE_LISTINGS_HTML = (
  agentEncodedId = realScoutAgentEncodedId(),
): string =>
  `<realscout-office-listings agent-encoded-id="${agentEncodedId}" sort-order="NEWEST" listing-status="For Sale"></realscout-office-listings>`;
