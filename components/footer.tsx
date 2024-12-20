import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur-lg py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Codezan</h3>
            <p className="text-gray-400">
              Professionelle Webentwicklung für Ihr Unternehmen.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#why" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Warum eine Website
                </a>
              </li>
              <li>
                <a href="#how" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Arbeitsweise
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Preise
                </a>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-purple-400 transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Email: info@codezan.de
              </li>
              <li className="text-gray-400">
                Tel: +49 123 456789
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-400 hover:text-purple-400 transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Codezan. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

