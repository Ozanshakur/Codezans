import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const admin = await prisma.admin.findFirst()
    
    // Remove password from response
    if (admin) {
      const { password, ...adminWithoutPassword } = admin
      return NextResponse.json({ 
        exists: true,
        admin: adminWithoutPassword 
      })
    }
    
    return NextResponse.json({ exists: false })
  } catch (error) {
    console.error('Test endpoint error:', error)
    return NextResponse.json(
      { error: 'Database error' },
      { status: 500 }
    )
  }
}

