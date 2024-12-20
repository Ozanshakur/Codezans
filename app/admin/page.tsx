'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { useToast } from "@/components/ui/use-toast"

interface Contact {
  id: string
  name: string
  email: string
  message: string
  completed: boolean
  createdAt: string
}

interface Stats {
  totalContacts: number
  totalPageViews: number
  completedContacts: number
}

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [stats, setStats] = useState<Stats | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      if (!token) {
        router.push('/admin/login')
        return
      }

      const [contactsRes, statsRes] = await Promise.all([
        fetch('/api/admin/contacts', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }),
        fetch('/api/admin/stats', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }),
      ])

      if (!contactsRes.ok || !statsRes.ok) {
        // Check if unauthorized
        if (contactsRes.status === 401 || statsRes.status === 401) {
          router.push('/admin/login')
          return
        }
        throw new Error('Failed to fetch data')
      }

      const contactsData = await contactsRes.json()
      const statsData = await statsRes.json()

      // Validate that we received an array of contacts
      if (!Array.isArray(contactsData)) {
        throw new Error('Invalid contacts data received')
      }

      setContacts(contactsData)
      setStats(statsData)
    } catch (error) {
      console.error('Error fetching data:', error)
      toast({
        title: "Fehler",
        description: error instanceof Error ? error.message : "Fehler beim Laden der Daten",
        variant: "destructive",
      })

      // If no data is loaded, show empty state
      setContacts([])
      setStats(null)
    } finally {
      setIsLoading(false)
    }
  }

  const handleMarkCompleted = async (id: string) => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: true }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to update contact')
      }

      toast({
        title: "Erfolg",
        description: "Anfrage wurde als abgeschlossen markiert",
        className: "bg-green-500 text-white border-none",
      })

      fetchData() // Reload data
    } catch (error) {
      console.error('Error updating contact:', error)
      toast({
        title: "Fehler",
        description: error instanceof Error ? error.message : 'Fehler beim Aktualisieren der Anfrage',
        variant: "destructive",
      })

      // If unauthorized, redirect to login
      if (error instanceof Error && error.message.includes('token')) {
        router.push('/admin/login')
      }
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Sind Sie sicher, dass Sie diese Anfrage löschen möchten?')) {
      return
    }

    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete contact')
      }

      toast({
        title: "Erfolg",
        description: "Anfrage wurde erfolgreich gelöscht",
        className: "bg-green-500 text-white border-none",
      })

      fetchData() // Reload data
    } catch (error) {
      console.error('Error deleting contact:', error)
      toast({
        title: "Fehler",
        description: error instanceof Error ? error.message : 'Fehler beim Löschen der Anfrage',
        variant: "destructive",
      })

      // If unauthorized, redirect to login
      if (error instanceof Error && error.message.includes('token')) {
        router.push('/admin/login')
      }
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
        <div className="text-white text-center">
          <div className="mb-4">Laden...</div>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>

        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Gesamte Anfragen</h3>
              <p className="text-3xl text-purple-400">{stats.totalContacts}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Seitenaufrufe</h3>
              <p className="text-3xl text-purple-400">{stats.totalPageViews}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Abgeschlossene Anfragen</h3>
              <p className="text-3xl text-purple-400">{stats.completedContacts}</p>
            </motion.div>
          </div>
        )}

        <div className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden overflow-x-auto">
          {contacts.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr className="bg-black/50">
                  <th className="px-6 py-3 text-left text-white">Name</th>
                  <th className="px-6 py-3 text-left text-white">Email</th>
                  <th className="px-6 py-3 text-left text-white">Nachricht</th>
                  <th className="px-6 py-3 text-left text-white">Status</th>
                  <th className="px-6 py-3 text-left text-white">Aktionen</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id} className="border-t border-purple-500/20">
                    <td className="px-6 py-4 text-white">{contact.name}</td>
                    <td className="px-6 py-4 text-white">{contact.email}</td>
                    <td className="px-6 py-4 text-white group relative">
                      <div className="truncate max-w-[300px]">
                        {contact.message}
                      </div>
                      <div className="hidden group-hover:block absolute z-10 bg-gray-900 p-4 rounded-lg shadow-lg max-w-lg whitespace-normal left-0 mt-2">
                        {contact.message}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-sm ${
                        contact.completed ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {contact.completed ? 'Abgeschlossen' : 'Offen'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        {!contact.completed && (
                          <button
                            onClick={() => handleMarkCompleted(contact.id)}
                            className="text-green-400 hover:text-green-300"
                          >
                            Abschließen
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(contact.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          Löschen
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="p-8 text-center text-gray-400">
              <p>Keine Kontaktanfragen vorhanden</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

