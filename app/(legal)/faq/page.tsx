'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    category: "Allgemein",
    question: "Wie lange dauert die Entwicklung einer Website?",
    answer: "Die Entwicklungszeit variiert je nach Umfang und Komplexität des Projekts. Ein einfaches Projekt kann in 2-4 Wochen abgeschlossen sein, während komplexere Projekte 2-3 Monate in Anspruch nehmen können. Wir erstellen zu Beginn einen detaillierten Zeitplan für Ihr spezifisches Projekt."
  },
  {
    category: "Allgemein",
    question: "Kann ich meine Website später selbst aktualisieren?",
    answer: "Ja, wir implementieren auf Wunsch ein benutzerfreundliches Content-Management-System (CMS), mit dem Sie Inhalte wie Texte, Bilder und Produkte selbstständig aktualisieren können. Wir bieten auch eine ausführliche Einweisung in das System an."
  },
  {
    category: "Technisch",
    question: "Sind die Websites für mobile Geräte optimiert?",
    answer: "Absolut! Alle unsere Websites werden nach dem 'Mobile First' Prinzip entwickelt und sind vollständig responsive. Das bedeutet, sie passen sich automatisch an verschiedene Bildschirmgrößen an und bieten auf allen Geräten eine optimale Nutzererfahrung."
  },
  {
    category: "Technisch",
    question: "Wie steht es um die Sicherheit meiner Website?",
    answer: "Sicherheit hat bei uns höchste Priorität. Wir implementieren SSL-Verschlüsselung, regelmäßige Backups und moderne Sicherheitsprotokolle. Zusätzlich halten wir alle verwendeten Systeme und Plugins stets aktuell, um potenzielle Sicherheitslücken zu vermeiden."
  },
  {
    category: "Kosten",
    question: "Gibt es versteckte Kosten?",
    answer: "Nein, wir legen großen Wert auf Transparenz. Alle Kosten werden im Vorfeld detailliert besprochen und im Angebot aufgeführt. Zusätzliche Leistungen werden nur nach Absprache und mit Ihrer Zustimmung durchgeführt."
  },
  {
    category: "Kosten",
    question: "Welche Zahlungsoptionen bieten Sie an?",
    answer: "Wir bieten flexible Zahlungsoptionen an. Üblicherweise wird eine Anzahlung von 30% bei Projektbeginn fällig, weitere 40% nach der Designabnahme und die restlichen 30% nach Projektabschluss. Individuelle Zahlungspläne können wir gerne besprechen."
  },
  {
    category: "Support",
    question: "Was passiert nach der Fertigstellung meiner Website?",
    answer: "Wir bieten verschiedene Wartungspakete an, die regelmäßige Updates, Sicherheitschecks und technischen Support umfassen. Sie können zwischen monatlichen oder jährlichen Wartungsverträgen wählen oder einzelne Support-Leistungen nach Bedarf buchen."
  },
  {
    category: "Support",
    question: "Wie schnell reagieren Sie bei technischen Problemen?",
    answer: "Unser Support-Team ist werktags von 9-17 Uhr erreichbar. Bei kritischen Problemen garantieren wir eine erste Reaktionszeit von maximal 4 Stunden. Für Notfälle außerhalb der Geschäftszeiten bieten wir einen 24/7 Support im Rahmen unserer Premium-Wartungspakete an."
  },
  {
    category: "SEO",
    question: "Werden die Websites für Suchmaschinen optimiert?",
    answer: "Ja, alle unsere Websites werden nach aktuellen SEO-Standards entwickelt. Dies umfasst optimierte Ladezeiten, mobile Optimierung, strukturierte Daten und technische SEO-Grundlagen. Zusätzlich bieten wir auch weiterführende SEO-Dienstleistungen an."
  },
  {
    category: "SEO",
    question: "Wie kann ich meine Website-Position in Google verbessern?",
    answer: "Wir bieten umfassende SEO-Strategien an, die Keyword-Recherche, Content-Optimierung, technische Optimierung und Linkbuilding umfassen. In einem persönlichen Gespräch analysieren wir Ihre Ziele und entwickeln eine maßgeschneiderte SEO-Strategie."
  }
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})
  const categories = Array.from(new Set(faqs.map(faq => faq.category)))

  const toggleItem = (index: string) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Häufig gestellte Fragen
          </h1>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen. Sollten Sie weitere Fragen haben,
            kontaktieren Sie uns gerne direkt.
          </p>

          <div className="space-y-8">
            {categories.map(category => (
              <div key={category} className="space-y-4">
                <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                  {category}
                </h2>
                {faqs
                  .filter(faq => faq.category === category)
                  .map((faq, index) => {
                    const itemKey = `${category}-${index}`
                    return (
                      <motion.div
                        key={itemKey}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 backdrop-blur-lg rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(itemKey)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                        >
                          <span className="font-medium">{faq.question}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${
                              openItems[itemKey] ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openItems[itemKey] && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-6 pb-4"
                            >
                              <p className="text-gray-300">{faq.answer}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                })}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Noch Fragen? Wir sind hier, um zu helfen!
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Kontaktieren Sie uns
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

