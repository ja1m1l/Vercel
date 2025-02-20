"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AIDiagnosis() {
  const [symptoms, setSymptoms] = useState("")
  const [diagnosis, setDiagnosis] = useState("")

  const handleDiagnosis = async () => {
    try {
      const response = await fetch("/api/diagnose", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ symptoms }),
      })
      const data = await response.json()
      setDiagnosis(data.diagnosis)
    } catch (error) {
      console.error("Error:", error)
      setDiagnosis("An error occurred while processing your request.")
    }
  }

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Describe your symptoms here..."
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        rows={5}
      />
      <Button onClick={handleDiagnosis}>Get AI Diagnosis</Button>
      {diagnosis && (
        <Card>
          <CardHeader>
            <CardTitle>AI Diagnosis</CardTitle>
            <CardDescription>Based on the symptoms you provided</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{diagnosis}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

