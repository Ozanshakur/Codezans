import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Ensure JWT_SECRET is available and is a string
const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not set')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      )
    }

    // Find admin
    const admin = await prisma.admin.findUnique({
      where: { username }
    })

    if (!admin) {
      console.log('Admin not found:', username)
      return NextResponse.json(
        { success: false, error: 'Ungültige Anmeldedaten' },
        { status: 401 }
      )
    }

    // Verify password
    const isValid = await bcrypt.compare(password, admin.password)
    
    if (!isValid) {
      console.log('Invalid password for:', username)
      return NextResponse.json(
        { success: false, error: 'Ungültige Anmeldedaten' },
        { status: 401 }
      )
    }

    // Generate token with type-safe JWT_SECRET
    const token = jwt.sign(
      { 
        userId: admin.id,
        username: admin.username 
      }, 
      JWT_SECRET as string, // Type assertion since we've checked it exists above
      { expiresIn: '24h' }
    )

    // Return success response
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

