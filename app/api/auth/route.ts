import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    console.log('Auth attempt for:', username)

    if (!username || !password) {
      console.log('Missing credentials')
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
      console.log('No admin found with username:', username)
      return NextResponse.json(
        { success: false, error: 'Ungültige Anmeldedaten' },
        { status: 401 }
      )
    }

    try {
      console.log('Attempting password comparison')
      const isValidPassword = await bcrypt.compare(password, admin.password)
      console.log('Password comparison result:', isValidPassword)

      if (!isValidPassword) {
        console.log('Invalid password for user:', username)
        return NextResponse.json(
          { success: false, error: 'Ungültige Anmeldedaten' },
          { status: 401 }
        )
      }
    } catch (bcryptError) {
      console.error('bcrypt comparison error:', bcryptError)
      throw new Error('Password comparison failed')
    }

    const token = jwt.sign(
      { userId: admin.id },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    return NextResponse.json({ success: true, token })
  } catch (error) {
    // Detailed error logging
    console.error('Full authentication error:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Ein Fehler ist aufgetreten',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    )
  }
}

