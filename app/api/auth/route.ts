import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    console.log('Login attempt for:', username)

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Benutzername und Passwort sind erforderlich' },
        { status: 400 }
      )
    }

    const admin = await prisma.admin.findFirst({
      where: {
        username: username
      }
    })

    console.log('Admin found:', admin ? 'yes' : 'no')

    if (!admin) {
      return NextResponse.json(
        { success: false, error: 'Ungültige Anmeldedaten' },
        { status: 401 }
      )
    }

    const isValidPassword = await bcrypt.compare(password, admin.password)
    console.log('Password valid:', isValidPassword)

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, error: 'Ungültige Anmeldedaten' },
        { status: 401 }
      )
    }

    const token = jwt.sign(
      { 
        userId: admin.id,
        username: admin.username 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    // Create response with both cookie and JSON
    const response = NextResponse.json({
      success: true,
      token,
      user: {
        id: admin.id,
        username: admin.username
      }
    })

    // Set HTTP-only cookie
    response.cookies.set('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 // 24 hours
    })

    return response

  } catch (error) {
    console.error('Authentication error:', error)
    return NextResponse.json(
      { success: false, error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    )
  }
}

