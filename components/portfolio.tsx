'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Moderne E-Commerce-Lösung mit Next.js und Shopify",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Shopify", "TailwindCSS"],
    link: "#",
    type: "E-Commerce"
  },
  {
    title: "Corporate Website",
    description: "Responsive Unternehmenswebsite mit CMS-Integration",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Strapi", "PostgreSQL"],
    link: "#",
    type: "Corporate"
  },
  {
    title: "Booking System",
    description: "Online-Buchungssystem für Dienstleistungen",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Prisma", "Stripe"],
    link: "#",
    type: "SaaS"
  },
  {
    title: "Blog Platform",
    description: "Performantes Blog-System mit Headless CMS",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "GraphQL", "MDX"],
    link: "#",
    type: "Content"
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Unsere Projekte
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Entdecken Sie eine Auswahl unserer erfolgreich umgesetzten Projekte. 
            Jedes Projekt wird individuell nach Kundenwünschen entwickelt.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {project.tags.map(tag => (
                          <span 
                            key={tag}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Projekt ansehen
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-purple-500 text-white rounded-full text-sm">
                  {project.type}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Projekt anfragen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

