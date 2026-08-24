import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: function MockImage({
    alt,
    src,
    fill: _fill,
    priority: _priority,
    sizes: _sizes,
    ...rest
  }: {
    alt: string;
    src: string;
    fill?: boolean;
    priority?: boolean;
    sizes?: string;
  }) {
    return React.createElement("img", { alt, src, ...rest });
  },
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
  useRouter: () => ({ push: vi.fn() }),
}));

vi.mock("next/link", () => ({
  default: function MockLink({
    children,
    href,
    ...rest
  }: {
    children: React.ReactNode;
    href: string;
  }) {
    return React.createElement("a", { href, ...rest }, children);
  },
}));
