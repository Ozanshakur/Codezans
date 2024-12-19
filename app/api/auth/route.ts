import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not set')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    console.log('Auth attempt:', { username }) // Log login attempt

    // Test database connection
    try {
      await prisma.$connect()
      console.log('Database connection successful')
    } catch (error) {
      console.error('Database connection failed:', error)
      throw error
    }

    // Find admin with detailed logging
    console.log('Searching for admin with username:', username)
    const admin = await prisma.admin.findUnique({
      where: { username }
    })
    console.log('Admin found:', admin ? 'Yes' : 'No')

    if (!admin) {
      return NextResponse.json(
        { success: false, error: 'Ungültige Anmeldedaten' },
        { status: 401 }
      )
    }

    // Verify password with logging
    console.log('Verifying password...')
    const isValid = await bcrypt.compare(password, admin.password)
    console.log('Password valid:', isValid)
    
    if (!isValid) {
      return NextResponse.json(
        { success: false, error: 'Ungültige Anmeldedaten' },
        { status: 401 }
      )
    }

    // Generate token
    const token = jwt.sign(
      { 
        userId: admin.id,
        username: admin.username 
      }, 
      JWT_SECRET as string,
      { expiresIn: '24h' }
    )
    console.log('Token generated successfully')

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
  } finally {
    await prisma.$disconnect()
  }
}

