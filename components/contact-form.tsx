'use client'

import { useState, useRef } from 'react'
import type { ApiResponse } from '@/app/api/contact/types'
import { useToast } from "@/components/ui/use-toast"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const response = await fetch('/api/contact', {
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

      const data: ApiResponse = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Ein Fehler ist aufgetreten')
      }

      if (data.success) {
        formRef.current?.reset()
        toast({
          title: "Erfolg!",
          description: "Ihre Nachricht wurde erfolgreich gesendet.",
          className: "bg-green-500 text-white border-none",
        })
      }
    } catch (error) {
      toast({
        title: "Fehler",
        description: error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten',
        variant: "destructive",
      })
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
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
          </form>
        </div>
      </div>
    </section>
  )
}

