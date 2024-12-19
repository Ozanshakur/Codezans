import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    // Debug: Log den Anmeldeversuch
    console.log('Login attempt for:', username)

    // Finde den Admin in der Datenbank
    const admin = await prisma.admin.findUnique({
      where: {
        username: username
      }
    })

    // Debug: Log ob ein Admin gefunden wurde
    console.log('Admin found:', !!admin)

    if (!admin) {
      return NextResponse.json(
        { success: false, error: 'Ungültige Anmeldedaten' },
        { status: 401 }
      )
    }

    // Debug: Log das gespeicherte gehashte Passwort
    console.log('Stored hashed password:', admin.password)

    const isValidPassword = await bcrypt.compare(password, admin.password)
    
    // Debug: Log ob das Passwort valide ist
    console.log('Password valid:', isValidPassword)

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, error: 'Ungültige Anmeldedaten' },
        { status: 401 }
      )
    }

    const token = jwt.sign(
      { userId: admin.id },
      JWT_SECRET || 'fallback-secret',
      { expiresIn: '24h' }
    )

    return NextResponse.json({
      success: true,
      token
    })
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json(
      { success: false, error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    )
  }
}

