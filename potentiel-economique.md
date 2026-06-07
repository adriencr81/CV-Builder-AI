# Potentiel Économique — CV Builder AI France 2026

---

## Le Marché Adressable

- **TAM France** : ~8 à 10 millions de personnes/an en recherche active
  (5,77M inscrits France Travail + étudiants + actifs non inscrits)
- **SAM réel** : ceux qui affrontent des ATS (structures +50 salariés) → ~3,5 à 4M/an
- **SOM à 3 ans** : 20 000 à 50 000 clients sur la base du ratio Rezi proportionné au marché FR

---

## Le Modèle Économique Retenu

L'abonnement mensuel ne colle pas au use case : la recherche d'emploi est un état
temporaire (3 à 6 mois en moyenne). Les gens arrêtent de payer dès qu'ils trouvent
du travail. Churn structurel, seau percé.

**Modèle retenu : pay-per-use / one-time**

| Offre | Prix | Déclencheur |
|---|---|---|
| Score ATS | Gratuit | Lead magnet, hook produit |
| Télécharger le CV optimisé | €9 | Première conversion |
| Optimisation complète + export PDF | €19 one-time | Conversion principale |
| Pack 3 CV | €19 | Candidatures multiples |
| Pack 10 CV | €49 | Recherche intensive |

Avantage : zéro friction d'achat, pas de culpabilité à annuler, CTA vidéo
plus efficace ("€9 pour ne plus être filtré" vs "€19/mois").

---

## Projections de Revenus

| Horizon | Sign-ups | Conversion payante (10%) | ARPU | ARR |
|---|---|---|---|---|
| **12 mois** | 10 000 | 1 000 | €15 | €180K |
| **24 mois** | 50 000 | 5 000 | €15 | €750K |
| **36 mois** | 150 000 | 15 000 | €15 | €2,25M |

*ARPU €15 = mix entre €9 (CV seul) et €19 (optimisation complète).*

---

## Économie Unitaire

| Métrique | Valeur |
|---|---|
| CAC sign-up (pipeline vidéo Stack 1) | €0,13 |
| Taux de conversion payante | ~10% |
| CAC client payant | €1,30 |
| ARPU moyen | €15 |
| Ratio revenu/CAC | **11,5x** |

---

## Marges

| Poste | Coût mensuel |
|---|---|
| Pipeline vidéo (Stack 1) | €130 |
| Claude API (analyse CV) | ~€0,05/CV analysé |
| Hébergement + infra | ~€50 |
| **Marge brute** | **~75-80%** |

---

## Risques Identifiés

- **Rétention faible** : use case one-shot → compenser par volume d'acquisition
- **Hook rate vidéo < 5%** : pipeline ne décolle pas, CAC explose
- **Concurrence** : CVDesignR ou MonCVParfait lancent une feature ATS sérieuse

## Ce qui n'est pas dans la stratégie

- **France Travail** : administration publique, cycle de vente 18+ mois, pas un canal
- **Abonnement mensuel** : ne correspond pas au use case, churn trop élevé
