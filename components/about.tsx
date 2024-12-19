'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Über <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Codezan</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Codezan ist Ihr Partner für professionelle Webentwicklung. Wir verstehen, dass jedes Unternehmen einzigartig ist und entwickeln maßgeschneiderte Websites, die Ihre Vision perfekt widerspiegeln.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Expertise</h3>
              <p className="text-gray-400">
                Jahrelange Erfahrung in der Entwicklung moderner Websites und Webanwendungen.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-400">
                Wir setzen auf modernste Technologien und Trends in der Webentwicklung.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white/5 backdrop-blur-lg p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Kundenorientierung</h3>
              <p className="text-gray-400">
                Ihre Zufriedenheit steht bei uns an erster Stelle. Wir arbeiten eng mit Ihnen zusammen.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

