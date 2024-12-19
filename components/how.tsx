'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Palette, Code, Rocket } from 'lucide-react'

export default function How() {
  return (
    <section id="how" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Wie Codezan arbeitet
          </h2>
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <MessageSquare className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Beratung & Konzeption</h3>
                <p className="text-gray-400">
                  Wir beginnen mit einem ausführlichen Gespräch, um Ihre Anforderungen und Ziele zu verstehen. 
                  Daraus entwickeln wir ein maßgeschneidertes Konzept für Ihre Website.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Palette className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Design</h3>
                <p className="text-gray-400">
                  Unser Designteam erstellt ein modernes und ansprechendes Design, das Ihre Markenidentität 
                  perfekt widerspiegelt und Ihre Besucher begeistert.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Code className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Entwicklung</h3>
                <p className="text-gray-400">
                  Mit modernsten Technologien entwickeln wir Ihre Website. Dabei achten wir besonders 
                  auf Performanz, Sicherheit und Benutzerfreundlichkeit.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-6"
            >
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Rocket className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Launch & Support</h3>
                <p className="text-gray-400">
                  Nach gründlicher Testung geht Ihre Website online. Wir stehen Ihnen auch danach 
                  mit Support und Wartung zur Seite.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

