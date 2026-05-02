import { NextResponse } from "next/server";

export function middleware(request) {
  const allCookies = request.cookies.getAll();
  
  // Look for ANY cookie that contains 'session_token'
  // This is safer for production environments where prefixes change
  const hasSession = allCookies.some(cookie => 
    cookie.name.includes("better-auth.session_token")
  );

  if (hasSession) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  
  // Avoid infinite loops: If they are already going to login, don't redirect
  if (pathname.startsWith('/login') || pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("callbackURL", pathname);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  // Add /profile here too if you want to protect it
  matcher: ["/productDetails/:path*", "/products", "/profile"],
};