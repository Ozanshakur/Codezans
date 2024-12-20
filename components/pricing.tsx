'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Unsere Pakete
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-lg p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">299€</span>
                  <span className="text-gray-400">/einmalig</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span>3 Unterseiten</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span>Kontaktformular</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span>SEO Grundoptimierung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span>Premium Support</span>
                  </li>
                </ul>
              </div>
              <a
                href="#contact"
                className="block text-center bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Jetzt anfragen
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-8 transform scale-105 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">599€</span>
                  <span className="text-gray-100">/einmalig</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-white" />
                    <span>Alles aus Starter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-white" />
                    <span>6 Unterseiten</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-white" />
                    <span>Blog-System</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-white" />
                    <span>Erweiterte SEO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-white" />
                    <span>Premium Support</span>
                  </li>
                </ul>
              </div>
              <a
                href="#contact"
                className="block text-center bg-white text-purple-500 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Jetzt anfragen
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-lg rounded-lg p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">800€</span>
                  <span className="text-gray-400">/einmalig</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span>Alles aus Professional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span>Unbegrenzte Unterseiten</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span>E-Commerce Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span>Wunsch Funktionen</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span>Premium Support</span>
                  </li>
                </ul>
              </div>
              <a
                href="#contact"
                className="block text-center bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Jetzt anfragen
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

