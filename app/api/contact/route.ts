import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Einfache Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alle Felder müssen ausgefüllt sein' },
        { status: 400 }
      )
    }

    // Kontakt speichern
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    })

    return NextResponse.json({ success: true, contact })
  } catch (error) {
    // Fehler ohne console.error
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    )
  }
}

