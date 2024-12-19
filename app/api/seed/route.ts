import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

const ADMIN_SEED_KEY = process.env.ADMIN_SEED_KEY

export async function POST(request: Request) {
  try {
    const { username, password, seedKey } = await request.json()

    // Verify seed key
    if (seedKey !== ADMIN_SEED_KEY) {
      return NextResponse.json(
        { error: 'Invalid seed key' },
        { status: 401 }
      )
    }

    // Check if admin exists
    const existingAdmin = await prisma.admin.findFirst()
    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Admin already exists' },
        { status: 400 }
      )
    }

    // Create admin
    const hashedPassword = await bcrypt.hash(password, 12)
    const admin = await prisma.admin.create({
      data: {
        username,
        password: hashedPassword,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Admin created successfully'
    })
  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

