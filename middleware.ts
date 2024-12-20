import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key'

export async function middleware(request: NextRequest) {
  // Öffentliche Routen, die keine Authentifizierung benötigen
  const publicPaths = ['/admin/login', '/api/auth']
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return NextResponse.next()
  }

  // Admin-Routen prüfen
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const token = request.cookies.get('adminToken')?.value

    if (!token) {
      // Nur weiterleiten, wenn wir nicht bereits auf der Login-Seite sind
      if (request.nextUrl.pathname !== '/admin/login') {
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }
      return NextResponse.next()
    }

    try {
      // Token verifizieren
      jwt.verify(token, JWT_SECRET)
      
      // Wenn wir auf der Login-Seite sind und einen gültigen Token haben,
      // leiten wir zum Admin-Dashboard weiter
      if (request.nextUrl.pathname === '/admin/login') {
        return NextResponse.redirect(new URL('/admin', request.url))
      }
      
      return NextResponse.next()
    } catch (error) {
      // Ungültiger Token - Cookie löschen und zur Login-Seite weiterleiten
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

