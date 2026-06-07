'use client'

import { useState } from 'react'

interface CVPreviewProps {
  content: string
  onPayment: () => void
}

export function CVPreview({ content, onPayment }: CVPreviewProps) {
  const [copied, setCopied] = useState(false)

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([content], { type: 'text/plain;charset=utf-8' })
    element.href = URL.createObjectURL(file)
    element.download = 'CV_ATS_Optimise.txt'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      {/* Toolbar */}
      <div className="bg-slate-50 border-b border-slate-200 p-4 flex gap-2 flex-wrap">
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-md text-sm font-medium"
        >
          📥 Télécharger
        </button>
        <button
          onClick={handleCopy}
          className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-md text-sm font-medium"
        >
          {copied ? '✓ Copié' : '📋 Copier'}
        </button>
        <button
          onClick={onPayment}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm font-medium ml-auto"
        >
          🔓 Débloquer (19€)
        </button>
      </div>

      {/* Preview Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="bg-slate-50 rounded p-4 font-mono text-sm whitespace-pre-wrap text-slate-800 max-h-96">
          {content.slice(0, 500)}...
        </div>
        <p className="text-slate-500 text-xs mt-4">
          Aperçu limité. Télécharge pour voir le document complet.
        </p>
      </div>

      {/* Info */}
      <div className="bg-blue-50 border-t border-blue-200 p-4">
        <p className="text-sm text-blue-900">
          <strong>19€ pour débloquer :</strong> CV complet + lettre de motivation + PDF prêt à envoyer
        </p>
      </div>
    </div>
  )
}
