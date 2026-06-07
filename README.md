# CVOptima - CV Builder IA pour le marché français

CV builder IA optimisé pour les ATS français. Génère des CV et lettres de motivation en 2 minutes, optimisés pour CEGID, Workday FR, SAP SuccessFactors.

## Stack

- **Frontend:** Next.js 14 + React + TypeScript
- **Styling:** Tailwind CSS
- **AI:** Anthropic Claude API
- **Payments:** Stripe
- **Deployment:** Vercel

## Démarrage rapide

### 1. Installation

```bash
npm install
```

### 2. Configuration des variables d'environnement

```bash
cp .env.example .env.local
```

Remplir:
- `ANTHROPIC_API_KEY` → [console.anthropic.com](https://console.anthropic.com)
- `STRIPE_SECRET_KEY` → [dashboard.stripe.com](https://dashboard.stripe.com)
- `STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

### 3. Lancer le serveur

```bash
npm run dev
```

Accès: http://localhost:3000

## Architecture

```
app/
├── page.tsx              # Landing page + formulaire principal
├── layout.tsx            # Layout global
├── success/page.tsx      # Page post-paiement
├── api/
│   ├── generate-cv/      # Endpoint Claude API
│   └── checkout/         # Endpoint Stripe
└── globals.css

components/
├── CVForm.tsx            # Formulaire de saisie
└── CVPreview.tsx         # Aperçu + boutons paiement

lib/
└── claude.ts             # Intégration Claude API
```

## Flux utilisateur

1. Utilisateur remplis nom, email, expérience
2. Copie/colle l'offre d'emploi
3. Click "Générer mon CV"
4. Claude génère le CV optimisé + lettre
5. Aperçu avec bouton "Débloquer (19€)"
6. Paiement Stripe
7. Download PDF complet

## Optimisations ATS

- ✓ Format plain text scannable
- ✓ Mots-clés du secteur maximisés
- ✓ Dates au format FR (JJ/MM/AAAA)
- ✓ Pas de design complexe
- ✓ Lettres formelles selon conventions FR

## Roadmap MVP

- [ ] Intégration PDF generation
- [ ] Email avec documents (post-paiement)
- [ ] Stockage des CVs générés
- [ ] Templates personnalisables
- [ ] Analytics Stripe + Claude

## Coûts estimés

- **Claude API:** ~0.03€ par CV généré
- **Stripe:** 2.9% + 0.30€ par transaction
- **Hosting:** ~5-10€/mois (Vercel)
- **Marge nette:** ~14€ par vente

À 100 ventes/mois = ~1400€ revenu, ~800€ profit net.

## License

Propriétaire - Adrien Deleuil 2026
