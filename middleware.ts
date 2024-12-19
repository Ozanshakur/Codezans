import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(request: NextRequest) {
  // Nur Admin-Routen schützen
  if (!request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next()
  }

  // Login-Seite ausnehmen
  if (request.nextUrl.pathname === '/admin/login') {
    return NextResponse.next()
  }

  const token = request.headers.get('authorization')?.split(' ')[1]

  if (!token) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  try {
    await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    )
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }
}

export const config = {
  matcher: '/admin/:path*',
}

