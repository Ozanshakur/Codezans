import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  // Only allow in development
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json(
      { success: false, error: 'Not available in production' },
      { status: 403 }
    )
  }

  try {
    const body = await request.json()
    const { username, password } = body

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      )
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)
    
    // Update admin password
    const updatedAdmin = await prisma.admin.update({
      where: {
        username: username
      },
      data: {
        password: hashedPassword
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Password successfully updated'
    })

  } catch (error) {
    console.error('Password reset error:', error)
    return NextResponse.json(
      { success: false, error: 'An error occurred' },
      { status: 500 }
    )
  }
}

