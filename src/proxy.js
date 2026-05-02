import { NextResponse } from "next/server";

export function proxy(request) {
  // 1. Check for the local token AND the __Secure prefix used in production
  const session = request.cookies.get("better-auth.session_token") || 
                  request.cookies.get("__Secure-better-auth.session_token");

  // 2. If session exists, let them through
  if (session) {
    return NextResponse.next();
  }

  // 3. If no session, redirect to login with callbackURL
  const { pathname } = request.nextUrl;
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("callbackURL", pathname);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  // Ensure these match your actual folder paths
  matcher: ["/productDetails/:path*", "/products"],
};