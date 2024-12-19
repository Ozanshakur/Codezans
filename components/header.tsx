'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Codezan
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-white hover:text-purple-400 transition-colors">
              Über uns
            </Link>
            <Link href="#why" className="text-white hover:text-purple-400 transition-colors">
              Warum eine Website
            </Link>
            <Link href="#how" className="text-white hover:text-purple-400 transition-colors">
              Arbeitsweise
            </Link>
            <Link href="#pricing" className="text-white hover:text-purple-400 transition-colors">
              Preise
            </Link>
            <Link href="#contact" className="text-white hover:text-purple-400 transition-colors">
              Kontakt
            </Link>
          </nav>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#about" className="text-white hover:text-purple-400 transition-colors">
                Über uns
              </Link>
              <Link href="#why" className="text-white hover:text-purple-400 transition-colors">
                Warum eine Website
              </Link>
              <Link href="#how" className="text-white hover:text-purple-400 transition-colors">
                Arbeitsweise
              </Link>
              <Link href="#pricing" className="text-white hover:text-purple-400 transition-colors">
                Preise
              </Link>
              <Link href="#contact" className="text-white hover:text-purple-400 transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

