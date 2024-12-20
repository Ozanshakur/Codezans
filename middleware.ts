import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simplified middleware that only checks for token existence
export function middleware(request: NextRequest) {
  // Skip auth check for login page and API routes
  if (request.nextUrl.pathname === '/admin/login' || request.nextUrl.pathname.startsWith('/api/')) {
    return NextResponse.next()
  }

  // Check for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('adminToken')

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}

