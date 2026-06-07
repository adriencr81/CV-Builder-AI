# Phase 1 Execution Plan - Weeks 1-4

## Week 1: Core Platform Setup

### Day 1-2: Landing Page
**Task:** Create conversion-optimized landing page
- Hero: "Ton CV optimisé pour les ATS français en 30 secondes"
- Subheading: "Génère un CV ATS-ready compatible CEGID, Lucca, Workday FR"
- CTA: "Générer mon CV" → form
- Social proof: Placeholder for future testimonials
- Design: Clean, minimal (Tailwind) — no fluff

**Figma ref:** None (use text-first, design after conversion data)

### Day 3: Form + Basic Layout
**Task:** Build form UI + state management
- Input fields: name, email, job description (textarea)
- Validation: email format, job desc min length
- Loading state: spinner + "Génération en cours..."
- Error handling: Claude API errors → user-friendly messages
- Form submission: POST to `/api/generate-cv`

**Tech:**
- CVForm component ✅ (already built)
- React useState for form state
- Error boundaries

### Day 4: Claude Integration (MVP)
**Task:** Simple generation prompt
- System prompt: "Tu es un expert CV ATS. Génère un CV optimisé pour cette offre."
- Input: name + email + job description
- Output: Plain text CV + lettre de motivation
- Model: claude-3-5-sonnet-20241022 (cost-efficient)
- Store in state for preview

**Cost:** ~€0.05-0.08 per generation

**Error cases to handle:**
- API rate limit
- Invalid job description
- Timeout (>30s)

### Day 5: Preview + Download (Basic)
**Task:** Show generated CV to user
- Display: Pre-formatted text (markdown → HTML)
- Actions: Copy to clipboard, Download as .txt
- Preview limit: First 500 chars (encourage full download after payment)

**Note:** PDF export is deferred to week 3 (critical path).

**Tech:**
- CVPreview component ✅ (already built, refine)
- Blob download handler

---

## Week 2: Payment + Keyword Extraction

### Day 6-7: Stripe Integration
**Task:** Enable €9.99 checkout
- Create Stripe account (if not done)
- `STRIPE_SECRET_KEY` + `STRIPE_PUBLISHABLE_KEY` in `.env.local`
- Checkout endpoint: `/api/checkout` ✅ (already built, test)
- Success page: `/app/success/page.tsx` ✅ (already built, refine)
- Error handling: Payment declined, session expired

**Tech:**
- Stripe.js client library
- Next.js API route for session creation
- Redirect to checkout.stripe.com

**Testing:**
- Use Stripe test keys
- Test cards: 4242 4242 4242 4242 (success), 4000 0000 0000 0002 (decline)

### Day 8: Keyword Extraction (Critical)
**Task:** Parse job description → extract 20-30 critical keywords
- Input: Raw job description text
- Output: Ranked list of keywords
  ```json
  {
    "critical": ["Python", "AWS", "Docker"],
    "important": ["CI/CD", "PostgreSQL"],
    "nice_to_have": ["Kubernetes", "Terraform"]
  }
  ```
- Algorithm: TF-IDF + regex patterns for common tech/soft skills

**Why this matters:**
- Claude generation will use these keywords to inject into CV
- Scoring engine will match against these in Phase 2
- User will see "Keyword coverage: 85%" → friction reducer

**Implementation:**
- Create `/lib/keywords.ts`
- Parse job desc with regex (tech stack patterns, certifications, soft skills)
- Use simple TF-IDF library or custom scoring

**Cost:** €0 (local processing)

### Day 9: Enhanced Generation Prompt
**Task:** Revise Claude prompt to use keyword extraction
- System prompt v2:
  ```
  Tu génères un CV ATS-optimisé. RÈGLES:
  1. Une colonne, pas de design complexe
  2. Reprends EXACTEMENT ces keywords: [list]
  3. Mets les keywords critiques dans les 3 premières lignes
  4. Action verbs + quantification (nombres)
  5. Dates MM/AAAA format
  6. Sections: Contact, Expérience, Formation, Compétences
  7. Lettre de motivation formelle française
  ```
- Inject extracted keywords into prompt
- Test generation quality on 5+ sample job descriptions

### Day 10: QA + Refinement
**Task:** Test full flow end-to-end
- Scenario 1: User completes form → sees CV → wants to download → hits paywall
- Scenario 2: User pays → redirects to success page
- Scenario 3: Error handling (Claude times out, Stripe fails, etc.)
- User feedback: Ask 10 people to test (beta)

---

## Week 3-4: PDF Export (BLOCKER)

### Day 11-14: PDF Generation Pipeline
**Task:** Turn plain text CV → professional PDF
- Library: `pdfkit` or `puppeteer` (test both)
  - pdfkit: lighter, faster, but limited styling
  - puppeteer: slower, but HTML-to-PDF is more predictable
- Design: Single column, ATS-safe formatting
  - Font: Arial or Calibri (standard, ATS-parseable)
  - Spacing: Single-line for headers, 1.5 for body
  - No colors, no images, no tables, no fancy headers
- Layout: CV + lettre de motivation on separate pages

**Critical:** PDF must be parseable by real ATS.

**Testing strategy:**
- Generate 10 sample PDFs
- Upload to CEGID demo account (if available)
- Run through online ATS parsers (pdfparser.org, etc.)
- Manual review: Does text extract cleanly?

**Cost:** €0 (local processing)

**Fallback:** If PDF generation fails, offer download as .docx or .txt (less professional, but functional).

### Day 15-17: Post-Payment Email + Delivery
**Task:** Send CV to user after payment
- Webhook: Listen for `checkout.session.completed` from Stripe
- Generate PDF on-demand (or cache it)
- Email template: Welcome + download link + next steps
- Email service: SendGrid or Resend (free tier available)
- Tracking: Log delivery success/failure

**Tech:**
- Stripe webhooks in `/api/webhooks/stripe`
- SendGrid/Resend SDK
- Secure download link (time-limited, token-based)

### Day 18-20: Deployment + QA
**Task:** Move to production
- Deploy to Vercel: `git push` → auto-deploys
- Update `.env` with production Stripe keys
- SSL/HTTPS: Vercel handles
- CDN: Vercel default
- Testing: Full user journey on production

**Monitoring:**
- Claude API errors
- Stripe webhook failures
- PDF generation issues
- Email delivery failures

### Day 21: Go-Live Prep
**Task:** Final checks before phase 1 launch
- [ ] Landing page copy reviewed
- [ ] Pricing: €9.99 (confirmed)
- [ ] Stripe account fully set up
- [ ] Email domain configured (if using custom domain)
- [ ] Privacy policy + Terms drafted
- [ ] Analytics: Add Vercel Analytics (free tier)

---

## Success Criteria (Phase 1)

| Metric | Target | How to Measure |
|--------|--------|-----------------|
| MVP deployed | Week 4 day 5 | git tag v1.0-launch |
| Signups (free) | 200+ in first 2 weeks | Stripe events |
| Conversion to pay | 10%+ (20 sales min) | Stripe revenue |
| Revenue | €200+ | Stripe dashboard |
| Avg PDF quality | 90%+ | Manual spot-check |
| User feedback | <10 critical issues | Twitter/HN comments |
| Uptime | 99%+ | Vercel uptime |

---

## Common Pitfalls to Avoid

1. **Over-engineering PDF** → Use library, test with real ATS, ship it
2. **Weak Claude prompt** → Keyword extraction is key, iterate on prompt v2
3. **Forgetting error handling** → Claude times out, Stripe fails, handle gracefully
4. **No testing with real job descriptions** → Use LinkedIn job postings, not templates
5. **Pricing too low** → €9.99 is justified by French ATS expertise, don't second-guess
6. **No post-payment experience** → Email + download link are minimum, add support link

---

## Week-by-Week Breakdown

```
Week 1 (Days 1-5):
  [Landing] [Form] [Claude] [Preview] [DL]
  
Week 2 (Days 6-10):
  [Stripe] [Stripe] [Keywords] [Keywords] [Prompt v2]
  
Week 3 (Days 11-17):
  [PDF] [PDF] [PDF] [PDF] [Email] [Email] [Email]
  
Week 4 (Days 18-21):
  [Deploy] [Deploy] [Deploy] [QA] [Launch]
```

---

## Resources Needed

- **Stripe account** (production)
- **Claude API key** (production)
- **Email service** (SendGrid or Resend free tier)
- **Vercel account** (free tier sufficient)
- **Sample job descriptions** (20+, from LinkedIn/Glassdoor)
- **Real users for testing** (10-20 beta testers)

---

## Go-Live Announcement Plan

**Day 1 after launch:**
- HackerNews: "We help French job seekers beat ATS — free for first 10 users"
- r/france: "Nouveau tool gratuit pour optimiser votre CV pour les ATS français"
- Twitter: DM to job seekers + recruiters + HR folks
- Product Hunt: Submit if rules allow

**Day 2-7:**
- Monitor feedback
- Fix critical bugs
- Collect testimonials
- Iterate on copy

**Day 8+:**
- If conversion >5%, scale ads
- If conversion <5%, pivot on messaging or feature

