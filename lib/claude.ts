import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export const generateCV = async (jobDescription: string, userInfo: string) => {
  const systemPrompt = `Tu es un expert en ATS français. Tu dois générer un CV optimisé pour les systèmes de tri français (CEGID, Workday FR, SAP SuccessFactors).

RÈGLES STRICTES :
1. Format : utilise les sections standards (Coordonnées, Expérience, Formation, Compétences, Langues)
2. Dates : format JJ/MM/AAAA (ex: 15/03/2022)
3. Photo : mention "photo optionnelle selon le secteur"
4. Mots-clés : maximise les mots-clés techniques du secteur pour passer les ATS
5. Pas de design complexe : plain text optimisé pour parsing
6. Lettre de motivation : formelle et courtoise à la française

Génère le CV en Markdown, puis une lettre de motivation formelle.`

  const userPrompt = `Infos candidat:
${userInfo}

Offre d'emploi:
${jobDescription}

Génère un CV ATS-optimisé et une lettre de motivation.`

  const message = await client.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 2000,
    messages: [
      {
        role: 'user',
        content: userPrompt,
      },
    ],
    system: systemPrompt,
  })

  const content = message.content[0]
  if (content.type !== 'text') {
    throw new Error('Unexpected response type from Claude')
  }

  return content.text
}
