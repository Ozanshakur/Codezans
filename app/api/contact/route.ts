import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import type { Contact } from '@prisma/client'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alle Felder müssen ausgefüllt sein' },
        { status: 400 }
      )
    }

    const contact: Contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Nachricht erfolgreich gesendet',
      contact,
    })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    )
  }
}

