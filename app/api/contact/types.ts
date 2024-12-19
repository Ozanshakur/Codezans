import type { Contact } from '@prisma/client'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ApiResponse {
  success: boolean
  message?: string
  error?: string
  contact?: Contact
}

