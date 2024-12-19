'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')
    setError('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setMessage('Nachricht erfolgreich gesendet!')
        form.reset()
      } else {
        setError(data.error || 'Ein Fehler ist aufgetreten')
      }
    } catch (err) {
      setError('Ein Fehler ist aufgetreten')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-black/50 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
            Kontaktieren Sie uns
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500 disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500 disabled:opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                required
                disabled={isSubmitting}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500 disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
            </button>
            {message && (
              <p className="text-green-400 text-center">{message}</p>
            )}
            {error && (
              <p className="text-red-400 text-center">{error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

