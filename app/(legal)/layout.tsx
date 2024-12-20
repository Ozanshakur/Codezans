import Header from '@/components/header'
import Footer from '@/components/footer'

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

