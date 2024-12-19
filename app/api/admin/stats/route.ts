import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const [totalContacts, totalPageViews, completedContacts] = await Promise.all([
      prisma.contact.count(),
      prisma.pageView.count(),
      prisma.contact.count({
        where: {
          completed: true,
        },
      }),
    ])

    return NextResponse.json({
      totalContacts,
      totalPageViews,
      completedContacts,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

