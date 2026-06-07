'use client'

import { useState } from 'react'
import { CVForm } from '@/components/CVForm'
import { CVPreview } from '@/components/CVPreview'

export default function Home() {
  const [generatedCV, setGeneratedCV] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleGenerate = async (jobDescription: string, userInfo: string, userEmail: string) => {
    setLoading(true)
    setEmail(userEmail)
    try {
      const response = await fetch('/api/generate-cv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobDescription, userInfo }),
      })

      if (!response.ok) throw new Error('Failed to generate CV')

      const data = await response.json()
      setGeneratedCV(data.cv)
    } catch (error) {
      alert('Erreur: ' + (error instanceof Error ? error.message : 'Impossible de générer le CV'))
    } finally {
      setLoading(false)
    }
  }

  const handlePayment = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) throw new Error('Failed to create checkout session')

      const data = await response.json()
      window.location.href = `https://checkout.stripe.com/pay/${data.sessionId}`
    } catch (error) {
      alert('Erreur paiement: ' + (error instanceof Error ? error.message : 'Impossible de créer la session'))
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-slate-900">CVOptima</h1>
          <p className="text-slate-600">Ton CV pensé pour les ATS français</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Génère ton CV ATS-optimisé</h2>
              <CVForm onGenerate={handleGenerate} loading={loading} />
            </div>
          </div>

          {/* Right: Preview */}
          <div>
            {generatedCV ? (
              <CVPreview content={generatedCV} onPayment={handlePayment} />
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-slate-500">Ton CV apparaîtra ici</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-slate-600 text-sm">
          <p>© 2026 CVOptima - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  )
}
