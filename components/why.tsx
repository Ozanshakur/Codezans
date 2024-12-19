'use client'

import { motion } from 'framer-motion'
import { Globe, Search, ShoppingCart, Users } from 'lucide-react'

export default function Why() {
  return (
    <section id="why" className="py-20 bg-gradient-to-br from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Warum Sie eine professionelle Website brauchen
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-lg text-left"
            >
              <Globe className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Globale Präsenz</h3>
              <p className="text-gray-400">
                Eine professionelle Website macht Ihr Unternehmen weltweit sichtbar und erreichbar.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-lg text-left"
            >
              <Search className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Bessere Auffindbarkeit</h3>
              <p className="text-gray-400">
                Optimierte Websites werden in Suchmaschinen besser gefunden und bringen mehr Kunden.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-lg text-left"
            >
              <ShoppingCart className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">24/7 Geschäft</h3>
              <p className="text-gray-400">
                Ihre Website arbeitet rund um die Uhr und generiert kontinuierlich neue Leads.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-lg text-left"
            >
              <Users className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Kundenbindung</h3>
              <p className="text-gray-400">
                Bleiben Sie mit Ihren Kunden in Kontakt und bauen Sie langfristige Beziehungen auf.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

