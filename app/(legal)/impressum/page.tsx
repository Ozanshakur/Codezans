export default function ImpressumPage() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-8">Impressum</h1>
            
            <section className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
                <p>Codezan.de</p>
                <p>Haseldorfer Weg 46</p>
                <p>22523 Hamburg</p>
              </div>
  
              <div>
                <h2 className="text-xl font-semibold mb-4">Vertreten durch</h2>
                <p>Jonas Ozan</p>
                <p>Gründer</p>
              </div>
  
              <div>
                <h2 className="text-xl font-semibold mb-4">Kontakt</h2>
                <p>Telefon: +49 172 2961917</p>
                <p>E-Mail: kontakt@codezan.de</p>
              </div>
  
              <div>
                <h2 className="text-xl font-semibold mb-4">Streitschlichtung</h2>
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
                <p className="mt-2">
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="mt-2">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>
  
              <div>
                <h2 className="text-xl font-semibold mb-4">Haftung für Inhalte</h2>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
  
  