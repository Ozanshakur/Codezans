import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Why from '@/components/why'
import How from '@/components/how'
import Pricing from '@/components/pricing'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'
import Portfolio from '@/components/portfolio'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Why />
      <How />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  )
}

