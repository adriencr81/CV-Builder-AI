'use client'

import { useState } from 'react'

interface CVFormProps {
  onGenerate: (jobDescription: string, userInfo: string, email: string) => void
  loading: boolean
}

export function CVForm({ onGenerate, loading }: CVFormProps) {
  const [jobDescription, setJobDescription] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [experience, setExperience] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!jobDescription.trim() || !email.trim() || !name.trim()) {
      alert('Veuillez remplir tous les champs obligatoires')
      return
    }

    const userInfo = `Nom: ${name}\nEmail: ${email}\nExpérience: ${experience || 'Non précisée'}`
    onGenerate(jobDescription, userInfo, email)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Nom complet *
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Jean Dupont"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email *
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="jean@example.com"
        />
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-slate-700">
          Résumé expérience (optionnel)
        </label>
        <textarea
          id="experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          rows={3}
          className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="ex: 5 ans en développement backend, 2 ans en devops..."
        />
      </div>

      <div>
        <label htmlFor="jobDesc" className="block text-sm font-medium text-slate-700">
          Description de l'offre d'emploi *
        </label>
        <textarea
          id="jobDesc"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          rows={6}
          className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Colle ici l'offre d'emploi complète..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        {loading ? 'Génération en cours...' : 'Générer mon CV'}
      </button>
    </form>
  )
}
