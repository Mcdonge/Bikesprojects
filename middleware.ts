import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import { getSession } from "@/lib/auth"

export async function middleware(request: NextRequest) {
  const session = await getSession()
  const { pathname } = request.nextUrl

  // Check if the path is an admin route
  const isAdminRoute = pathname.startsWith("/admin")

  // If it's an admin route, check for admin privileges
  if (isAdminRoute) {
    if (!session) {
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }

    // Check if user is admin
    const response = await fetch(`${request.nextUrl.origin}/api/user/profile`, {
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    })

    if (!response.ok) {
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }

    const user = await response.json()
    if (!user.isAdmin) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  // For protected routes (not admin)
  if (pathname.startsWith("/profile") || pathname.startsWith("/bookings")) {
    if (!session) {
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }
  }

  // For auth routes
  if (pathname.startsWith("/auth")) {
    if (session) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*", "/profile/:path*", "/bookings/:path*", "/auth/:path*"],
} 