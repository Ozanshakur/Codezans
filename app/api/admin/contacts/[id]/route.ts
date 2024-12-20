import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Handler für PATCH-Anfragen (Kontakt als abgeschlossen markieren)
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Prüfen ob ID vorhanden ist
    if (!params.id) {
      return NextResponse.json(
        { success: false, error: 'Keine ID angegeben' },
        { status: 400 }
      )
    }

    // Body der Anfrage parsen
    const body = await request.json()
    
    // Kontakt in der Datenbank aktualisieren
    const updatedContact = await prisma.contact.update({
      where: {
        id: params.id
      },
      data: {
        completed: body.completed
      }
    })

    return NextResponse.json({
      success: true,
      contact: updatedContact
    })

  } catch (error) {
    console.error('Error updating contact:', error)
    return NextResponse.json(
      { success: false, error: 'Fehler beim Aktualisieren des Kontakts' },
      { status: 500 }
    )
  }
}

// Handler für DELETE-Anfragen (Kontakt löschen)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Prüfen ob ID vorhanden ist
    if (!params.id) {
      return NextResponse.json(
        { success: false, error: 'Keine ID angegeben' },
        { status: 400 }
      )
    }

    // Kontakt aus der Datenbank löschen
    await prisma.contact.delete({
      where: {
        id: params.id
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Kontakt erfolgreich gelöscht'
    })

  } catch (error) {
    console.error('Error deleting contact:', error)
    return NextResponse.json(
      { success: false, error: 'Fehler beim Löschen des Kontakts' },
      { status: 500 }
    )
  }
}

