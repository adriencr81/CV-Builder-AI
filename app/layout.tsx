import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CVOptima - Ton CV pensé pour les ATS français',
  description: 'Génère un CV optimisé pour les ATS français en 2 minutes avec IA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-gradient-to-br from-slate-50 to-slate-100">
        {children}
      </body>
    </html>
  )
}
