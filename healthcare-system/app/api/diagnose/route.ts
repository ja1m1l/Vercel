import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  const { symptoms } = await req.json()

  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `Based on the following symptoms, provide a possible diagnosis: ${symptoms}`,
      system:
        "You are a helpful AI assistant trained to provide possible diagnoses based on symptoms. Always remind the user to consult with a healthcare professional for accurate diagnosis and treatment.",
    })

    return NextResponse.json({ diagnosis: text })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "An error occurred while processing your request." }, { status: 500 })
  }
}

