import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  // Sicherheits-Check: Nur im Entwicklungsmodus erlauben
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json(
      { error: 'Not allowed in production' },
      { status: 403 }
    )
  }

  try {
    const body = await request.json()
    const { username, password } = body

    // Prüfen ob Admin bereits existiert
    const existingAdmin = await prisma.admin.findUnique({
      where: { username },
    })

    if (existingAdmin) {
      return NextResponse.json(
        { error: 'Admin already exists' },
        { status: 400 }
      )
    }

    // Password hashen
    const hashedPassword = await bcrypt.hash(password, 10)

    // Admin erstellen
    const admin = await prisma.admin.create({
      data: {
        username,
        password: hashedPassword,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Admin created successfully',
    })
  } catch (err) {
    console.error('Setup admin error:', err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

