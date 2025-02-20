"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIAssistant() {
  const [query, setQuery] = useState("")
  const [response, setResponse] = useState("")

  const handleAssistant = async () => {
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      })
      const data = await res.json()
      setResponse(data.response)
    } catch (error) {
      console.error("Error:", error)
      setResponse("An error occurred while processing your request.")
    }
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Ask me anything about your health..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={handleAssistant}>Ask AI Assistant</Button>
      {response && (
        <Card>
          <CardHeader>
            <CardTitle>AI Assistant Response</CardTitle>
            <CardDescription>Here's what the AI assistant has to say</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{response}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

