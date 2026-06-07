import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="text-5xl mb-4">✓</div>
        <h1 className="text-2xl font-bold text-green-600 mb-4">Merci pour ton achat!</h1>
        <p className="text-slate-600 mb-6">
          Ton CV et ta lettre de motivation ont été générés avec succès. Un email de confirmation a été envoyé.
        </p>
        <div className="bg-green-50 p-4 rounded-lg mb-6 text-left">
          <h3 className="font-semibold text-slate-900 mb-2">Tu as reçu:</h3>
          <ul className="text-sm text-slate-700 space-y-1">
            <li>✓ CV optimisé pour les ATS français</li>
            <li>✓ Lettre de motivation formelle</li>
            <li>✓ Format prêt à l'envoi (PDF)</li>
          </ul>
        </div>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
