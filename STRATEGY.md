# CVOptima - Stratégie Business & Roadmap

## Market Opportunity

**Marché validé :**
- 5.77M demandeurs d'emploi en France (avril 2026)
- 75% des CV rejetés par ATS avant lecture humaine
- Benchmark: Rezi fait $2.4M/yr ($273K/mth) sur marché anglophone seul

**Gap français :**
- Rezi optimisé pour ATS américains (Workday US, Taleo US, etc.)
- Aucun joueur majeur ne score les ATS français (CEGID, Lucca, SAP SuccessFactors FR)
- CVPass/CVkraft = tentatives échouées (5 avis Trustpilot chacun)

**Avantage compétitif :**
- Scoring natif des ATS français (CEGID PME, Lucca, Workday CAC40, SAP FR)
- UX + scoring en temps réel vs Rezi (support inexistant, crédits épuisés)
- Marché français = langue + conventions nationales

---

## Business Model Evolution (Hybrid Path)

### Phase 1: Generation (Semaines 1-4)
**Objectif :** Valider demande + générer cash rapide

**Produit :**
- Landing page simple
- Input: nom + email + offre d'emploi
- Output: CV optimisé ATS + lettre de motivation
- Export: PDF/DOCX téléchargeable

**Monétisation :**
- **Prix: €9,99** (one-shot, pas €4,99)
  - Rationalité: Utilisateur paie pour avantage concurrentiel (ATS FR) → pricing signals qualité
  - Élasticité prix: Faible sur ce segment (CDI postulants ≠ price sensitive)
  - Margin: 85%+ (après coûts Claude + Stripe)

**Target:** 50-100 sales en 4 semaines → €500-1000 revenue, proof of concept

**Coûts réels :**
- Claude API: €0.15-0.25/CV (génération + scoring simple + lettre)
- Stripe: 2.9% + €0.30
- Infra: €0 (Vercel free tier)
- **Coût total/unité: ~€0.50**
- **Margin: ~90%** (€9.99 - €0.50 - €0.30 fees)

### Phase 2: Scoring + Recurring (Semaines 5-12)
**Objectif :** Augmenter LTV via itération utilisateur

**Produit :**
- Feature "Upload ton CV existant"
- Scoring en temps réel: 6 ATS profiles (3 US + 3 FR)
  - Workday, Taleo, iCIMS (standard)
  - CEGID, Lucca, SAP SuccessFactors (FR)
- Éditeur en ligne
- Suggestions : "Ajoute ces keywords", "Reformule ce bullet"
- Re-score après chaque edit

**Monétisation :**
- Free tier: 1 score + 1 edit
- Payant: €7.99/mth pour illimité (scorer + éditeur)
- Phase-out de €9.99 one-shot pour offre payante

**Target LTV :** 
- Utilisateur generator (phase 1) → converti en scorer récurrent: €7.99 × 3-4 mois avg = €24-32/user
- + friction réduite (edit local vs re-upload)

---

## Technical Reality Check

### Timeline Correction

| Phase | Feature | Initial Est. | Realistic | Notes |
|-------|---------|--------------|-----------|-------|
| 1 | Landing + form | 3h | ✅ 3h | Straightforward |
| 1 | Claude integration | 2h | ✅ 2h | Simple prompt |
| 1 | Keyword extraction | 3h | ⚠️ 8h | Parsing job desc complexity |
| 1 | **PDF export** | 2h | ⚠️ 3-4 weeks | **BLOCKER** |
| 1 | Stripe integration | 3h | ✅ 3h | Standard |
| 1 | Deployment + testing | 2h | ⚠️ 1 week | Real-world edge cases |
| 2 | PDF/DOCX parser | 5h | ⚠️ 2 weeks | pdfjs quirks, image scans |
| 2 | Scoring engine | 3h | ✅ 1 week | Adapted from ats-screener |
| 2 | Editor + UI | 5h | ⚠️ 2 weeks | Real-time scoring = complexity |
| 2 | Suggestions engine | 3h | ⚠️ 1 week | Contextual recommendations |

**Critical path :** PDF export quality. Don't skimp on this — bad-looking PDF = conversion killer.

**Real Phase 1 timeline:** 3-4 weeks, not 2.

### Cost Model Correction

**Per-CV cost structure :**
- Claude API (generation): €0.05
- Claude API (scoring): €0.05
- Claude API (suggestions): €0.05
- **Total: €0.15-0.25/active user session**
- Stripe fee: 2.9% + €0.30
- Infrastructure: €0 (free tier)

**Unit economics at €9.99 :**
```
Revenue:         €9.99
COGS (Claude):   -€0.25
Stripe fee:      -€0.60
-----------
Gross profit:    €9.14
Margin:          91.5%
```

Healthy margins → can afford paid acquisition if needed.

---

## Roadmap Detail

### Week 1-2: Core Generation
- Landing page (Webflow template or custom)
- Form: nom + email + offre
- Claude prompt + keyword extraction
- Stripe integration
- Deployment

### Week 3-4: PDF Export (THE BLOCKER)
- PDF generation library (pdfkit or similar)
- ATS-safe formatting (single column, standard fonts, no images)
- QA: export 50 CVs, manual check for parsing issues
- Test with real ATS parsers (CEGID demo, Lucca test upload if possible)

### Week 5-6: Phase 1 Launch
- MVP on production
- Landing page copy refinement
- Twitter/HN launch
- Collect first 50 user CVs + feedback

### Week 7-10: Scoring Engine (Phase 2 prep)
- Integrate ats-screener logic (adapted)
- Profiles: Workday, Taleo, iCIMS, CEGID, Lucca, SAP
- Parser: PDF/DOCX extraction
- Scoring API endpoint

### Week 11-12: Phase 2 Launch
- Editor + real-time scoring UI
- Paywall: upgrade to €7.99/mth
- Migration path: €9.99 one-shot → €7.99 recurring

---

## Success Metrics

**Phase 1 (Weeks 1-6):**
- Launch signups: 200+
- Conversion to pay: 10%+ (20 sales)
- Revenue: €200+ (validation threshold)
- User feedback: <10 key issues

**Phase 2 (Weeks 7-12):**
- Active users on free tier: 100+
- Conversion to €7.99: 20%+
- MRR: €100+ (15-20 recurring users)
- Churn: <20%/month (healthy for SaaS)

---

## Competitive Positioning

| Feature | Rezi | CVPass | CVkraft | CVOptima |
|---------|------|--------|---------|----------|
| ATS Scoring | ✅ (simplifié) | ✅ | ✅ | ✅✅ (6 profiles) |
| Profiles français | ❌ | ❌ | ❌ | ✅ |
| Génération IA | ✅ | ❌ | ❌ | ✅ |
| Éditeur en ligne | ✅ | ✅ | ✅ | ✅ |
| Support | ❌ (notorious) | ⚠️ | ⚠️ | ✅ |
| Pricing | $19.99 | Freemium | Freemium | €9.99 + €7.99/mth |
| Target market | Global | FR (small) | FR (small) | FR (native) |

**Moat:** Profils ATS français natifs + French support in French.

---

## Risk Mitigation

**Risk: PDF export is hard**
- Mitigation: Use battle-tested library (pdfkit), allocate 3-4 weeks, test with real ATS
- Fallback: Offer DOCX + plain text, upsell PDF later

**Risk: Price resistance at €9,99**
- Mitigation: Frame as "Rezi for French ATS", emphasize CEGID/Lucca differentiation
- Fallback: A/B test €7,99 if needed after week 3

**Risk: Claude API cost too high**
- Mitigation: €0.15-0.25 is sustainable at €9.99+ pricing
- Fallback: Cache prompts, batch requests, use cheaper models for suggestions

**Risk: Low initial traction**
- Mitigation: Launch on ProductHunt, r/france, Twitter, HN
- Budget: SEO for "CV ATS français" starts week 6+

---

## Next Steps

1. Commit this strategy to git
2. Break down Phase 1 into 2-week sprints
3. Start week 1: landing page + form + Claude integration
4. Allocate 3 weeks specifically for PDF export iteration

**Shipping date: 4 weeks to Phase 1 MVP.**
