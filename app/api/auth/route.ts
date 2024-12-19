import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { username, password } = body

    console.log('Login attempt for username:', username) // Debug log

    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      )
    }

    const admin = await prisma.admin.findUnique({
      where: { username },
    })

    console.log('Admin found:', admin ? 'yes' : 'no') // Debug log

    if (!admin) {
      return NextResponse.json(
        { success: false, error: 'Ungültige Anmeldedaten' },
        { status: 401 }
      )
    }

    const isValidPassword = await bcrypt.compare(password, admin.password)
    console.log('Password valid:', isValidPassword) // Debug log

    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, error: 'Ungültige Anmeldedaten' },
        { status: 401 }
      )
    }

    const token = jwt.sign({ userId: admin.id }, JWT_SECRET, {
      expiresIn: '1d',
    })

    return NextResponse.json({ 
      success: true, 
      token 
    })
  } catch (err) {
    console.error('Authentication error:', err)
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

