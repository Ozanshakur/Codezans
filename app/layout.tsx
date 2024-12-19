import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Codezan - Professionelle Webentwicklung',
  description: 'Wir entwickeln maßgeschneiderte Websites für Ihr Unternehmen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-black`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

