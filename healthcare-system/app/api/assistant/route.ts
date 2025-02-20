import { NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  const { query } = await req.json()

  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: query,
      system:
        "You are a helpful AI assistant trained to provide general health information. Always remind the user to consult with a healthcare professional for personalized medical advice.",
    })

    return NextResponse.json({ response: text })
  } catch (error) {
    console.error("Error:", error)
    return NextResponse.json({ error: "An error occurred while processing your request." }, { status: 500 })
  }
}

