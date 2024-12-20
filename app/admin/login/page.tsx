'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useToast } from "@/components/ui/use-toast"

export default function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  // Check if already logged in
  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (token) {
      window.location.href = '/admin'
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const username = formData.get('username')?.toString().trim()
      const password = formData.get('password')?.toString()

      if (!username || !password) {
        throw new Error('Bitte füllen Sie alle Felder aus')
      }

      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Ein Fehler ist aufgetreten')
      }

      if (data.success && data.token) {
        // Store token
        localStorage.setItem('adminToken', data.token)
        
        // Reset form
        formRef.current?.reset()
        
        // Show success message
        toast({
          title: "Erfolg!",
          description: "Sie wurden erfolgreich eingeloggt.",
          className: "bg-green-500 text-white border-none",
        })

        // Force page reload and redirect
        setTimeout(() => {
          window.location.href = '/admin'
        }, 500)
      }
    } catch (error) {
      console.error('Login error:', error)
      toast({
        title: "Fehler",
        description: error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten',
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-white mb-6">Admin Login</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-white mb-2">
              Benutzername
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              disabled={isLoading}
              autoComplete="username"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white mb-2">
              Passwort
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              disabled={isLoading}
              autoComplete="current-password"
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-purple-500/30 text-white focus:outline-none focus:border-purple-500"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {isLoading ? 'Wird geladen...' : 'Anmelden'}
          </button>
        </form>
      </div>
    </div>
  )
}

