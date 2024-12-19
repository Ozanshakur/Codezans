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

    console.log('Auth attempt with username:', username)

    // Test database connection and log all admin users
    try {
      await prisma.$connect()
      console.log('Database connection successful')
      
      // Log all admin users for debugging
      const allAdmins = await prisma.admin.findMany({
        select: {
          username: true,
          id: true
        }
      })
      console.log('Available admin users:', allAdmins)
      
    } catch (error) {
      console.error('Database connection failed:', error)
      throw error
    }

    // Find admin with case-insensitive search
    const admin = await prisma.admin.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
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

