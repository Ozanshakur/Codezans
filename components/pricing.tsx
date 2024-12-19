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
              className="bg-white/5 backdrop-blur-lg rounded-lg p-8"
            >
              <h3 className="text-xl font-semibold mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">€999</span>
                <span className="text-gray-400">/einmalig</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-500" />
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-500" />
                  <span>5 Unterseiten</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-500" />
                  <span>Kontaktformular</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-500" />
                  <span>SEO Grundoptimierung</span>
                </li>
              </ul>
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
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-8 transform scale-105"
            >
              <h3 className="text-xl font-semibold mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">€1999</span>
                <span className="text-gray-100">/einmalig</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Alles aus Starter</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>10 Unterseiten</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Blog-System</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Newsletter-Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-white" />
                  <span>Erweiterte SEO</span>
                </li>
              </ul>
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
              className="bg-white/5 backdrop-blur-lg rounded-lg p-8"
            >
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">€3999</span>
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
                  <span>Custom Funktionen</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-purple-500" />
                  <span>Premium Support</span>
                </li>
              </ul>
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

