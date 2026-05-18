import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Preview deployments must not be indexed; production uses canonical domain in metadata.
 */
export function middleware(_request: NextRequest) {
  const response = NextResponse.next();

  if (process.env.VERCEL_ENV === "preview") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
