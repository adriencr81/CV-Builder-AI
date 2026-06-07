import { generateCV } from '@/lib/claude'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { jobDescription, userInfo } = await request.json()

    if (!jobDescription || !userInfo) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const result = await generateCV(jobDescription, userInfo)

    return NextResponse.json({ cv: result })
  } catch (error) {
    console.error('Error generating CV:', error)
    return NextResponse.json(
      { error: 'Failed to generate CV' },
      { status: 500 }
    )
  }
}
