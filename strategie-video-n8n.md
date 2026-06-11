# Stratégie Vidéo Automatisée avec n8n — CV Builder AI France 2026

---

## Vue d'ensemble

5 à 20 vidéos par jour, publiées automatiquement sur 4 canaux, sans intervention manuelle.
Chaque vidéo est adaptée au format qui performe sur chaque plateforme selon les données 2026.
Coût total : ~€146/mois pour 500 vidéos.

---

## Formats Optimaux par Canal (données vérifiées 2026)

### TikTok

| Paramètre | Valeur |
|---|---|
| Durée optimale | 11-35s (viral) / 35-60s (éducatif) |
| Format | 9:16 vertical (61% de meilleures performances) |
| Hook critique | Première seconde — 70%+ de completion nécessaire pour aller viral |
| Signal fort | Saves + Comments > Likes |
| Audio trending | +48% de reach organique |

**Format qui marche pour CV/ATS :** Le Reveal avec chiffre visible dès la 2ème seconde.
```
[0-1s]  CHIFFRE GROS : "Ton CV : 41/100 sur l'ATS de LVMH"
[1-8s]  Scan visuel du CV avec erreurs surlignées
[8-25s] Les 3 erreurs spécifiques, une par une
[25-35s] Score après correction : 89/100
         CTA : "Teste le tien — lien en bio"
```
Le nom d'une grande entreprise française dans le hook = algorithme favorisé + identification immédiate.

---

### Instagram Reels

| Paramètre | Valeur |
|---|---|
| Durée optimale | 7-15s (completion maximale) / 30-60s (éducatif) |
| Format | 9:16 vertical |
| Hook critique | 3 secondes — hold rate >60% = 5-10x plus de reach |
| Signal fort | Sends via DM (signal #1 pour atteindre une nouvelle audience) |
| Drop-off | 50% des viewers partent en 3s sans bon hook |

**Format qui marche pour CV/ATS :** Avant/Après avec transformation visuelle.
```
[0-3s]  Split screen : CV avant (rouge) / CV après (vert) — AUCUN texte, juste l'image
[3-20s] Zoom sur les 2-3 changements clés avec annotation
[20-45s] Score ATS avant vs après (ex : 38 → 91)
[45-60s] CTA + musique tendance en fond
```
Le split screen déclenche le send via DM ("envoie ça à un ami qui cherche un emploi").

---

### YouTube Shorts

| Paramètre | Valeur |
|---|---|
| Durée optimale | 15-35s (viral) / 20-60s (éducatif) |
| Format | 9:16 vertical |
| Hook critique | 15 premières secondes = 65% de rétention si bon hook |
| Signal fort | Replays (l'algo Shorts récompense les re-visions) |
| Avantage unique | SEO vidéo long terme — les Shorts remontent dans la recherche Google |

**Format qui marche pour CV/ATS :** Erreur ATS (éducatif, fort taux de re-vision).
```
[0-3s]  Question : "Pourquoi ton CV est rejeté avant qu'un humain le lise ?"
[3-20s] Explication visuelle : l'erreur (colonnes, photo, tableau...)
[20-45s] La correction simple montrée en direct
[45-60s] "Il en existe 12 autres — on les corrige automatiquement"
```
L'éducatif déclenche les re-visions (l'utilisateur revient pour noter) + les sauvegardes.

---

### LinkedIn

| Paramètre | Valeur |
|---|---|
| Durée optimale | <60s avec sous-titres obligatoires |
| Format | 9:16 ou 4:5 vertical (73% des vues viennent du mobile) |
| Hook critique | Dwell time — l'algo mesure le temps passé sur le post |
| Signal fort | Commentaires + partages (pas les likes) |
| Règle clé | Profil personnel >> Page entreprise (8x plus d'engagement) |
| Sans son | 80%+ des vues se font son coupé → captions non-négociables |

**Format qui marche pour CV/ATS :** Talking head "ex-recruteur" ou listicle texte animé.
```
[0-5s]  Texte animé : "J'ai regardé 10 000 CV chez Société Générale. Voici ce que les ATS rejettent."
[5-40s] 3 insights contre-intuitifs, un par un (texte + voix)
[40-60s] "On a construit l'outil que j'aurais voulu avoir en tant que recruteur"
```
Le profil fondateur publie en personnel, pas depuis la page entreprise.

---

## Architecture n8n Complète

### Stack Technique

| Outil | Rôle | Coût |
|---|---|---|
| **n8n Cloud Pro** | Orchestration du pipeline | €20/mois |
| **Claude API** | Scripts + légendes + hashtags par plateforme | ~€30/mois |
| **ElevenLabs Starter** | Voix française naturelle | €22/mois |
| **Creatomate** | Rendu vidéo par template JSON | €41/mois (500 vidéos) |
| **Blotato** | Publication TikTok + Reels + Shorts + LinkedIn | ~€30/mois |
| **Google Sheets** | Content calendar + logs performance | Gratuit |
| **Google Drive** | Stockage vidéos rendues | €3/mois |
| **Total** | **500 vidéos/mois** | **~€146/mois** |

Coût par vidéo : **~€0,29**

---

### Le Pipeline n8n — Nœud par Nœud

```
┌─────────────────────────────────────────────────────────────┐
│  DÉCLENCHEURS (3 types)                                      │
│                                                              │
│  [Cron Trigger]     → File d'attente Google Sheets           │
│  [Webhook Trigger]  → France Travail API (nouvelle offre)    │
│  [Manual Trigger]   → Campagne ponctuelle (giveaway, actu)   │
└──────────────────────────┬──────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│  NODE 1 — Google Sheets (Read Row)                           │
│  Lit la prochaine ligne "TO_GENERATE" du content calendar    │
│  Colonnes : sujet, format, canal_cible, metier, entreprise   │
└──────────────────────────┬───────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│  NODE 2 — Claude API (Anthropic)                             │
│  Input : sujet + format + canal_cible + metier               │
│  Output JSON :                                               │
│    - hook (1ère seconde)                                     │
│    - script_voix (35-55 mots max)                            │
│    - textes_overlay (3-5 textes à afficher)                  │
│    - legende_tiktok (avec emojis + 5 hashtags FR)            │
│    - legende_instagram (plus courte, 3 hashtags)             │
│    - legende_youtube (titre SEO + description)               │
│    - legende_linkedin (ton professionnel, sans hashtags)     │
└──────────────────────────┬───────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│  NODE 3 — ElevenLabs API                                     │
│  Input : script_voix du NODE 2                               │
│  Voice ID : voix FR définie (ex : "Charlotte" ou voix clonée)│
│  Output : fichier .mp3 uploadé sur Google Drive              │
└──────────────────────────┬───────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│  NODE 4 — Creatomate API (rendu vidéo)                       │
│  Input :                                                     │
│    - template_id selon le format (Reveal / Avant-Après /...) │
│    - textes_overlay (depuis NODE 2)                          │
│    - audio_url (depuis NODE 3)                               │
│    - couleur_score (rouge si <60, orange si 60-80, vert >80) │
│  Output : URL vidéo .mp4 rendue (9:16, 1080x1920)            │
└──────────────────────────┬───────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│  NODE 5 — Google Drive (Upload)                              │
│  Stocke la vidéo finale + les métadonnées                    │
│  Naming : YYYY-MM-DD_format_metier_canal.mp4                 │
└──────────────────────────┬───────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│  NODE 6 — IF / Switch (selon canal_cible)                    │
│  Route vers le bon publisher selon la plateforme             │
└──────┬───────────┬──────────────┬──────────────┬────────────┘
       ↓           ↓              ↓              ↓
   [TikTok]   [Instagram]  [YouTube Shorts] [LinkedIn]
       └───────────┴──────────────┴──────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│  NODE 7 — Blotato API (publication)                          │
│  Input : video_url + légende adaptée par canal               │
│  Schedule : heure optimale par plateforme                    │
│    - TikTok : 7h, 12h, 19h                                   │
│    - Instagram : 8h, 13h, 20h                                │
│    - YouTube Shorts : 9h, 18h                                │
│    - LinkedIn : 8h30, 12h                                    │
└──────────────────────────┬───────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│  NODE 8 — Google Sheets (Update Row)                         │
│  Met à jour le statut : TO_GENERATE → PUBLISHED              │
│  Log : date, heure, URL vidéo, URL post par plateforme       │
└──────────────────────────────────────────────────────────────┘
```

---

### Les 4 Templates Creatomate à Créer

Chaque template est un fichier JSON qui définit les calques visuels.
On les crée une fois, on les réutilise à l'infini.

**Template 1 — Le Reveal (TikTok)**
- Fond : dégradé sombre animé
- Calque 1 : Score animé (compteur qui monte/descend)
- Calque 2 : Texte hook (grosse typo, 1ère seconde)
- Calque 3 : 3 erreurs apparaissent une par une
- Calque 4 : Score final + CTA
- Audio : voix ElevenLabs

**Template 2 — Avant/Après (Instagram Reels)**
- Split screen 50/50
- Calque gauche : CV "avant" (fond rouge)
- Calque droit : CV "après" (fond vert)
- Annotations flèches animées
- Score ATS en bas : XX → XX
- Audio : voix + musique tendance en fond (volume 20%)

**Template 3 — Erreur ATS (YouTube Shorts)**
- Fond blanc propre
- Texte animé question en ouverture
- Illustration de l'erreur (icônes ou mockup CV)
- Correction animée
- CTA final
- Audio : voix uniquement

**Template 4 — Talking Head / Listicle (LinkedIn)**
- Fond dégradé neutre
- Texte grande taille (sans son = texte suffit)
- Sous-titres auto-générés par Creatomate
- Progress bar en bas pour signaler durée
- Pas de musique

---

### Les 3 Déclencheurs Automatiques

**Déclencheur 1 — Cron quotidien (production continue)**
```
Tous les jours à 6h00 :
→ Lire les 10 prochaines lignes "TO_GENERATE" dans Google Sheets
→ Lancer le pipeline pour chacune en parallèle
→ Résultat : 10 vidéos publiées dans la journée
```

**Déclencheur 2 — France Travail API (contenu ciblé)**
```
Toutes les 6h :
→ Scrape les métiers avec le plus d'offres nouvelles
→ Si métier pas encore traité cette semaine → ajouter à la file
→ Générer vidéo "CV ATS pour [métier]" automatiquement
→ Résultat : vidéos toujours alignées sur la demande réelle du marché
```

**Déclencheur 3 — Performance feedback (boucle d'optimisation)**
```
Tous les lundis à 9h :
→ Lire les vues/saves/commentaires des 7 derniers jours via Blotato
→ Identifier les 3 vidéos avec le meilleur hook rate (>8%)
→ Envoyer à Claude : "Génère 5 variantes de ce script en changeant le hook"
→ Ajouter les variantes à la file Google Sheets
→ Résultat : le système apprend et double sur ce qui marche
```

---

## Content Calendar — Structure Google Sheets

| Colonne | Valeur exemple |
|---|---|
| id | 001 |
| statut | TO_GENERATE |
| format | reveal |
| canal | tiktok |
| sujet | cv-ats-developpeur |
| entreprise | Capgemini |
| metier | Développeur Full Stack |
| hook_draft | "Ton CV rejeté par l'ATS de Capgemini ?" |
| date_publication | 2026-06-10 |
| heure | 19:00 |
| url_video | (rempli auto) |
| url_post | (rempli auto) |
| vues_24h | (rempli auto) |
| hook_rate | (rempli auto) |

---

## Fréquence et Volume Cible

| Phase | Période | Vidéos/jour | Total/mois | Objectif |
|---|---|---|---|---|
| Setup | Semaine 1-2 | 0 (config) | — | Pipeline opérationnel |
| Test | Semaine 3-4 | 3-5 | ~60 | Identifier le format gagnant |
| Scale | Mois 2 | 10-15 | ~350 | Premier compte 10K |
| Cruise | Mois 3+ | 15-20 | ~500 | Giveaway + partenaires |

---

## Séquence de Setup (dans l'ordre)

1. **Créer compte n8n Cloud** — importer les templates de workflow existants
   (référence : workflow #3442 et #7187 sur n8n.io)

2. **Créer les 4 templates Creatomate** en JSON
   → Définir les variables dynamiques : `{{hook}}`, `{{overlay_1}}`, `{{score_avant}}`, `{{score_apres}}`, `{{audio_url}}`

3. **Configurer ElevenLabs**
   → Choisir ou cloner une voix FR (identité sonore de la marque)
   → Tester la prononciation sur : "ATS", "Workday", "Talentsoft", "score", "candidature"

4. **Créer le Google Sheet** content calendar avec les 50 premiers sujets
   → 10 formats Reveal (grandes entreprises FR : LVMH, Capgemini, BNP, Orange, Carrefour...)
   → 20 formats par métier (développeur, infirmier, commercial, comptable, chef de projet...)
   → 10 formats Erreur ATS (les 10 erreurs les plus communes)
   → 10 formats LinkedIn (insights "ex-recruteur")

5. **Connecter Blotato** aux comptes sociaux
   → TikTok, Instagram, YouTube, LinkedIn

6. **Test bout en bout** sur 3 vidéos avant de lancer en automatique

7. **Lancer le Cron** à 6h00 pour les 10 premières vidéos

---

## Budget Total

| Outil | Coût mensuel |
|---|---|
| n8n Cloud Pro | €20 |
| Claude API (Anthropic) | ~€30 |
| ElevenLabs Starter | €22 |
| Creatomate (500 vidéos) | €41 |
| Blotato | €30 |
| Google Drive | €3 |
| **Total** | **~€146/mois** |

**Coût par vidéo rendue et publiée : ~€0,29**

---

## Sources

- [Buffer — Best Content Format Social Media 2026](https://buffer.com/resources/data-best-content-format-social-media/)
- [n8n — Fully Automated AI Video Generation & Multi-Platform Publishing](https://n8n.io/workflows/3442-fully-automated-ai-video-generation-and-multi-platform-publishing/)
- [n8n — Automate content publishing via Blotato](https://n8n.io/workflows/7187-automate-content-publishing-to-tiktok-youtube-instagram-facebook-via-blotato/)
- [Creatomate — Automate Video Creation with n8n](https://creatomate.com/blog/how-to-automate-video-creation-with-n8n)
- [TikTok Algorithm Changes 2026 — Socialync](https://www.socialync.io/blog/tiktok-algorithm-2026-what-works-now)
- [Instagram Reels Algorithm 2026 — TrueFuture Media](https://www.truefuturemedia.com/articles/instagram-reels-reach-2026-business-growth-guide)
- [YouTube Shorts Hook Formulas — OpusClip](https://www.opus.pro/blog/youtube-shorts-hook-formulas)
- [LinkedIn Video Formats 2026 — Parmonic](https://info.parmonic.com/blog/linkedin-video-formats-in-2026-what-works-best-for-b2b-marketing)
- [Best Video APIs 2026 — Samautomation](https://samautomation.work/blog/best-video-apis-developers-2026/)
