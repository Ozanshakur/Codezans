import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// Helper function to verify admin token
const verifyAdminToken = async (request: Request) => {
  const token = request.headers.get('authorization')?.split(' ')[1]
  if (!token) {
    throw new Error('No authorization token provided')
  }
  return token
}

// Handler für PATCH-Anfragen (Kontakt als abgeschlossen markieren)
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Verify admin token
    await verifyAdminToken(request)

    // Validate ID
    if (!params.id) {
      return NextResponse.json(
        { success: false, error: 'Keine ID angegeben' },
        { status: 400 }
      )
    }

    // Parse request body
    const body = await request.json()

    // Update contact in database
    const updatedContact = await prisma.contact.update({
      where: {
        id: params.id
      },
      data: {
        completed: body.completed
      }
    })

    // Disconnect from database
    await prisma.$disconnect()

    return NextResponse.json({
      success: true,
      contact: updatedContact
    })

  } catch (error) {
    // Ensure database connection is closed
    await prisma.$disconnect()

    console.error('Error updating contact:', error)
    
    // Return appropriate error response
    if (error instanceof Error) {
      return NextResponse.json(
        { 
          success: false, 
          error: error.message,
          details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Ein unbekannter Fehler ist aufgetreten' },
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
    // Verify admin token
    await verifyAdminToken(request)

    // Validate ID
    if (!params.id) {
      return NextResponse.json(
        { success: false, error: 'Keine ID angegeben' },
        { status: 400 }
      )
    }

    // Delete contact from database
    await prisma.contact.delete({
      where: {
        id: params.id
      }
    })

    // Disconnect from database
    await prisma.$disconnect()

    return NextResponse.json({
      success: true,
      message: 'Kontakt erfolgreich gelöscht'
    })

  } catch (error) {
    // Ensure database connection is closed
    await prisma.$disconnect()

    console.error('Error deleting contact:', error)
    
    // Return appropriate error response
    if (error instanceof Error) {
      return NextResponse.json(
        { 
          success: false, 
          error: error.message,
          details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Ein unbekannter Fehler ist aufgetreten' },
      { status: 500 }
    )
  }
}

