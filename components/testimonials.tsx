'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Anna Schmidt",
    position: "CEO, TechStart GmbH",
    content: "Codezan hat unsere Vision perfekt umgesetzt. Die neue Website hat unsere Erwartungen übertroffen und führte zu einer deutlichen Steigerung der Conversion-Rate.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Michael Weber",
    position: "Marketing Director, WebSolutions",
    content: "Die Zusammenarbeit war von Anfang an professionell und zielorientiert. Das Team hat nicht nur technisch überzeugt, sondern auch mit kreativen Lösungsansätzen.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Laura Meyer",
    position: "Founder, DigitalCraft",
    content: "Besonders beeindruckt hat uns die schnelle Reaktionszeit und die flexible Anpassung an unsere Änderungswünsche. Ein Partner, auf den man sich verlassen kann.",
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Erfahren Sie, was unsere Kunden über die Zusammenarbeit mit uns sagen.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-3">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="mb-6 pt-4">
                  <p className="text-gray-300 italic">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Werden Sie unser nächster Erfolgspartner
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

