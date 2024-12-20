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

// Handler for PATCH requests (mark contact as completed)
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
        { success: false, error: 'No ID provided' },
        { status: 400 }
      )
    }

    // Parse request body
    const body = await request.json()

    // Check if contact exists
    const existingContact = await prisma.contact.findUnique({
      where: { id: params.id }
    })

    if (!existingContact) {
      return NextResponse.json(
        { success: false, error: 'Contact not found' },
        { status: 404 }
      )
    }

    // Update contact in database
    const updatedContact = await prisma.contact.update({
      where: { id: params.id },
      data: { completed: body.completed }
    })

    return NextResponse.json({
      success: true,
      contact: updatedContact
    })

  } catch (error) {
    console.error('Error updating contact:', error)
    
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
      { success: false, error: 'An unknown error occurred' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

// Handler for DELETE requests (delete contact)
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
        { success: false, error: 'No ID provided' },
        { status: 400 }
      )
    }

    // Check if contact exists
    const existingContact = await prisma.contact.findUnique({
      where: { id: params.id }
    })

    if (!existingContact) {
      return NextResponse.json(
        { success: false, error: 'Contact not found' },
        { status: 404 }
      )
    }

    // Delete contact from database
    await prisma.contact.delete({
      where: { id: params.id }
    })

    return NextResponse.json({
      success: true,
      message: 'Contact successfully deleted'
    })

  } catch (error) {
    console.error('Error deleting contact:', error)
    
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
      { success: false, error: 'An unknown error occurred' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}

