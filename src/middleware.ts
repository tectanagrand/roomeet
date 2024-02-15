import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (
      req.nextUrl.pathname.startsWith("/dashboard") &&
      req.nextauth.token === undefined
    ) {
      return NextResponse.rewrite(new URL("/login", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path"],
};
