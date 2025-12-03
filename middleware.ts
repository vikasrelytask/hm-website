import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Check if path is admin route (excluding login)
  const isAdminRoute = path.startsWith("/admin") && path !== "/admin/login"
  
  // Get token from cookie
  const token = request.cookies.get("admin_token")?.value

  // Redirect to login if accessing admin without token
  if (isAdminRoute && !token) {
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  // Redirect to dashboard if accessing login with token
  if (path === "/admin/login" && token) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
