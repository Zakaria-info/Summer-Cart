import { NextResponse } from "next/server";

export function proxy(request) {
  const session =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("__Secure-better-auth.session_token");

  if (session) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("callbackURL", pathname);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/productDetails/:path*", "/products"],
};
