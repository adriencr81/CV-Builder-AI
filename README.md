# CVOptima - ATS Optimization Platform (FR)

**Mission:** Help French job seekers beat ATS (Workday, CEGID, Lucca, SAP) and get their CVs in front of human eyes.

**Phase 1:** Generate ATS-optimized CVs from job descriptions (€9.99 one-shot)
**Phase 2:** Score + edit existing CVs against 6 ATS profiles (€7.99/mth recurring)

## Stack

- **Frontend:** Next.js 14 + React + TypeScript
- **Styling:** Tailwind CSS
- **AI:** Anthropic Claude API (generation + scoring)
- **PDF Export:** pdfkit (critical path item)
- **Payments:** Stripe
- **Deployment:** Vercel
- **ATS Reference:** `sunnypatell/ats-screener` (scoring logic adapted)

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

## Phase 1 Roadmap (Weeks 1-4)

- [x] Project init + git repo
- [ ] Landing page (week 1)
- [ ] Claude generation prompt (week 1)
- [ ] Keyword extraction from job description (week 2)
- [ ] **PDF export** (weeks 3-4) ← CRITICAL PATH
- [ ] Stripe integration (week 2)
- [ ] Deploy + QA (week 4)
- [ ] Phase 1 launch

## Phase 2 Roadmap (Weeks 5-12)

- [ ] PDF/DOCX parser (client-side)
- [ ] Scoring engine (6 ATS profiles)
- [ ] Edit UI + real-time scoring
- [ ] Upgrade to €7.99/mth paywall
- [ ] Phase 2 launch

## Unit Economics

```
Revenue (Phase 1):           €9.99
├─ Claude API cost:          -€0.25
├─ Stripe fee (2.9% + €0.30): -€0.60
└─ Infrastructure:           €0
─────────────────────────
Gross profit:                €9.14 (91.5% margin)
```

**Scaling:** 100 sales/month = €900 gross profit, $0 infrastructure.

## Key Decisions

- **Pricing:** €9.99 (not €4.99) — signals quality + French ATS specialization
- **Timeline:** 4 weeks Phase 1, not 2 — PDF export is the blocker
- **Cost model:** €0.15-0.25/session, sustainable at €9.99+ pricing
- **Hybrid path:** Generation first (fast validation) → Scoring second (recurring revenue)

See `STRATEGY.md` for full business model + roadmap details.

## License

Propriétaire - Adrien Deleuil 2026
