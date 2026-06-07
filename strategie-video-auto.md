# Stratégie Vidéo Automatisée — CV Builder AI France 2026

## Le principe

Générer 5 à 20 vidéos courtes par jour de façon automatique, les publier sur TikTok, Reels et Shorts,
identifier ce qui performe, doubler dessus. Zéro attente SEO. Traction en semaines, pas en mois.

Rezi a fait 70 000 sign-ups en une journée avec UNE vidéo TikTok manuelle.
Avec un pipeline automatisé, on réplique ça en boucle.

---

## Le Pipeline de Production Automatisée

```
DÉCLENCHEUR
    ↓
Génération du script (Claude API)
    ↓
Synthèse vocale (ElevenLabs — voix FR naturelle)
    ↓
Assemblage vidéo (Remotion / FFmpeg)
    ↓
Légende + hashtags optimisés (Claude API)
    ↓
Planification et publication (Buffer API)
    ↓
Analytics → feedback → optimisation des templates
```

### Déclencheurs de création

- Mots-clés trending emploi/recrutement sur TikTok
- Nouvelles offres d'emploi par métier sur France Travail (API)
- Calendrier éditorial programmé (1 vidéo par métier, 200+ métiers)
- Campagne manuelle ponctuelle (giveaway, actualité RH)

---

## Les 5 Formats Vidéo (templates)

### Format 1 — Le Reveal (viralité maximale)
```
[0-3s]  Hook : "J'ai mis mon CV dans l'ATS de Capgemini"
[3-20s] Écran qui montre le score : 54/100
[20-45s] Les 3 erreurs spécifiques détectées
[45-60s] CTA : "Teste le tien gratuitement — lien en bio"
```
→ Ce format capitalise sur la curiosité et l'identification.
→ Le nom d'une grande entreprise connue dans le hook = algorithme favorisé.

### Format 2 — Avant/Après
```
[0-3s]  Hook : "Ce CV a été refusé 47 fois"
[3-15s] Montrer le CV "avant" (générique, mal formaté)
[15-40s] Transformation en direct par l'IA
[40-60s] Score ATS avant : 38 / après : 91
         CTA : "Génère le tien en 2 minutes"
```
→ La transformation visuelle est le hook émotionnel le plus fort.

### Format 3 — Erreur ATS (éducatif, fort taux de sauvegarde)
```
[0-3s]  Hook : "Erreur #1 qui fait rejeter ton CV automatiquement"
[3-30s] Explication visuelle de l'erreur (ex : colonnes, photos, tableaux)
[30-50s] La correction simple
[50-60s] CTA : "Notre IA corrige ça en auto"
```
→ Fort taux de save → signal fort pour l'algorithme → portée organique élevée.

### Format 4 — Par Métier (format programmatique, scalable)
```
[0-3s]  Hook : "CV développeur → comment passer les ATS en 2026"
[3-40s] 3 spécificités ATS pour ce métier (mots-clés, format, sections)
[40-60s] CTA : "Template gratuit optimisé pour ce métier — lien en bio"
```
→ Ce format se décline sur 200+ métiers = 200 vidéos générées automatiquement.
→ Chaque vidéo cible une audience ultra-spécifique et qualifiée.

### Format 5 — Mythe RH (contre-intuitif, fort partage)
```
[0-3s]  Hook : "Les recruteurs NE lisent PAS ton CV"
[3-40s] Explication du fonctionnement réel des ATS
[40-60s] Ce qu'il faut faire à la place
         CTA : produit
```
→ Contenu éducatif qui repositionne l'expertise de la marque.

---

## Plateformes et Fréquence

| Plateforme | Format | Fréquence | Objectif principal |
|---|---|---|---|
| TikTok | 30-60s vertical | 3-5/jour | Reach viral, 18-35 ans |
| Instagram Reels | 30-60s vertical | 2-3/jour | 25-40 ans, cadres |
| YouTube Shorts | 60s vertical | 1-2/jour | SEO vidéo long terme |
| LinkedIn | Carrousels auto-générés | 1/jour | Cadres, reconversion, B2B |

**Total : 7-11 publications/jour, 100% automatisées.**

---

## Stack Technique

### Option A — Rapide à déployer (semaine 1)

| Outil | Rôle | Coût |
|---|---|---|
| Claude API | Génération scripts + légendes + hashtags | ~€30/mois |
| ElevenLabs | Voix française naturelle | €22/mois |
| Canva API | Templates visuels animés | €115/mois (Teams) |
| Make.com | Orchestration du pipeline | €29/mois |
| Buffer | Planification multi-plateformes | €15/mois |
| **Total** | | **~€211/mois** |

**Délai de setup : 5-7 jours.**

### Option B — Pipeline custom (semaine 2-3, recommandé)

| Outil | Rôle | Coût |
|---|---|---|
| Claude API | Scripts + légendes | ~€30/mois |
| ElevenLabs | Voix FR | €22/mois |
| Remotion (React) | Assemblage vidéo programmatique | Open source |
| FFmpeg | Post-processing | Gratuit |
| Railway / Render | Hébergement pipeline | €20/mois |
| Buffer API | Publication | €15/mois |
| **Total** | | **~€87/mois** |

**Délai de setup : 2-3 semaines. Contrôle total, 100% personnalisable.**
**Recommandé dès que le Format 1 ou 2 est validé.**

---

## Le Funnel Vidéo → Sign-up

```
Vidéo TikTok/Reel/Short
        ↓
    Lien en bio
        ↓
Landing page (checker ATS gratuit — résultat immédiat)
        ↓
Email capture ("reçois ton rapport complet")
        ↓
Séquence onboarding email (3 emails, 7 jours)
        ↓
Offre Pro €19/mois
```

**La règle d'or : le résultat ATS doit être visible en moins de 30 secondes.**
C'est ce qui crée l'adhérence et déclenche le partage organique.

---

## Séquence de Lancement — Mois par Mois

### Mois 1 — Trouver le format qui marche

**Semaine 1-2 :**
- Setup pipeline Option A (Make.com)
- Produire 50 vidéos sur les 5 formats
- Publier sur TikTok et Reels uniquement
- Budget : €0

**Semaine 3-4 :**
- Analyser les métriques (hook rate, saves, clics bio)
- Identifier le(s) format(s) avec hook rate > 8%
- Doubler la production sur ces formats
- Objectif : 1 vidéo à 50K+ vues organiques

**KPIs Mois 1 :**
- 100-150 vidéos publiées
- 1 format validé (hook rate > 8%)
- 500-1 000 sign-ups gratuits

### Mois 2 — Accélérer sur ce qui marche

- Migrer vers pipeline custom (Option B)
- 300-500 vidéos publiées
- Boost payant : €200-500 sur les 3 meilleures vidéos du mois 1
- Lancement YouTube Shorts (format identique, repost automatique)
- Objectif : 1er compte à 10K followers, 2 000-5 000 sign-ups

### Mois 3 — Le Giveaway (réplique du coup Rezi)

- Annonce "Plan Pro gratuit 48h" — vidéo dédiée produite manuellement
- Amplifiée par le pipeline automatisé (10 variantes de la même annonce)
- Partenariat 1-2 créateurs FR dans le niche emploi/carrière (micro-influenceurs 50K-200K)
- Objectif : 10 000-30 000 sign-ups, premières conversions Pro

---

## Métriques à Tracker

| Métrique | Objectif | Signal |
|---|---|---|
| Hook rate (3 premières secondes) | > 8% | Format validé |
| Save rate | > 5% | Contenu utile, algo favorisé |
| Link in bio CTR | > 2% | Funnel fonctionnel |
| Landing page → sign-up | > 15% | Proposition claire |
| Free → Pro conversion | > 5% | Produit convaincant |
| Coût par sign-up (si boost payant) | < €1 | Canal rentable |

---

## Optimisation Continue (la boucle)

```
Publier → Mesurer hook rate → Identifier top 20% des vidéos
       → Analyser pourquoi ça marche (hook, sujet, format)
       → Générer 10 variantes de ce qui marche
       → Republier → Mesurer → Itérer
```

Cette boucle tourne automatiquement. Le système apprend quels sujets et quels
hooks performent, et en génère davantage.

---

## Ce qui rend ce système défendable

1. **Volume** : 5-20 vidéos/jour vs 1-3 pour un concurrent manuel
2. **Vitesse d'itération** : A/B test de 10 hooks en une semaine, pas en 3 mois
3. **Spécificité** : Une vidéo par métier = audience ultra-ciblée = taux de conversion supérieur
4. **Compounding** : Chaque vidéo publiée continue de générer du trafic. 500 vidéos = 500 actifs permanents

---

## Prochaines Étapes Concrètes

1. **Choisir Option A ou B** pour le pipeline technique
2. **Créer les 5 templates** dans Canva/Remotion (1 journée)
3. **Configurer ElevenLabs** avec une voix FR définie (identité sonore)
4. **Câbler Make.com ou le script Python** (Claude → ElevenLabs → vidéo → Buffer)
5. **Publier les 50 premières vidéos** sur TikTok et Reels
6. **Analyser au bout de 2 semaines** et doubler sur le format gagnant
