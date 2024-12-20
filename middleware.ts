import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key'

export async function middleware(request: NextRequest) {
  // Public paths that don't require authentication
  const publicPaths = ['/admin/login', '/api/auth', '/api/admin/reset']
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next()
  }

  // Check for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    try {
      // Get token from cookie or Authorization header
      const token = request.cookies.get('adminToken')?.value ||
                   request.headers.get('authorization')?.split(' ')[1]

      if (!token) {
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }

      // Verify token
      const verified = jwt.verify(token, JWT_SECRET)
      if (!verified) {
        throw new Error('Invalid token')
      }

      return NextResponse.next()
    } catch (error) {
      // Clear invalid token and redirect to login
      const response = NextResponse.redirect(new URL('/admin/login', request.url))
      response.cookies.delete('adminToken')
      return response
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*']
}

