import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key'

// Helper function to verify admin token
const verifyAdminToken = async (request: Request) => {
  const authHeader = request.headers.get('authorization')
  if (!authHeader?.startsWith('Bearer ')) {
    throw new Error('Invalid authorization header')
  }

  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    return decoded
  } catch (error) {
    throw new Error('Invalid token')
  }
}

export async function GET(request: Request) {
  try {
    // Verify admin token
    await verifyAdminToken(request)

    // Fetch all contacts, ordered by creation date (newest first)
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Failed to fetch contacts:', error)
    
    if (error instanceof Error) {
      return NextResponse.json(
        { 
          success: false, 
          error: error.message 
        },
        { status: error.message.includes('token') ? 401 : 500 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

