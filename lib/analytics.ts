import { prisma } from './prisma'

export async function trackPageView(page: string) {
  // Überprüfen ob die Seite definiert ist
  if (!page) {
    console.warn('No page provided for tracking')
    return
  }

  try {
    // Prisma-Client-Verbindung testen
    await prisma.$connect()

    // Seiten-Aufruf speichern
    const pageView = await prisma.pageView.create({
      data: {
        page: page.toString(),
      },
    })

    // Verbindung trennen
    await prisma.$disconnect()

    return pageView
  } catch (error) {
    // Verbindung im Fehlerfall trennen
    await prisma.$disconnect()

    // Fehlerbehandlung
    if (error instanceof Error) {
      console.error('Error tracking page view:', error.message)
    } else {
      console.error('Unknown error tracking page view')
    }
  }
}

