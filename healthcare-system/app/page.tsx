import MedicineList from "../components/MedicineList"
import SymptomsFinder from "../components/SymptomsFinder"
import AIDiagnosis from "../components/AIDiagnosis"
import AIAssistant from "../components/AIAssistant"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="w-full max-w-5xl">
        <Tabs defaultValue="medicines" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="medicines">Medicines</TabsTrigger>
            <TabsTrigger value="symptoms">Symptoms Finder</TabsTrigger>
            <TabsTrigger value="diagnosis">AI Diagnosis</TabsTrigger>
            <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
          </TabsList>
          <TabsContent value="medicines">
            <MedicineList />
          </TabsContent>
          <TabsContent value="symptoms">
            <SymptomsFinder />
          </TabsContent>
          <TabsContent value="diagnosis">
            <AIDiagnosis />
          </TabsContent>
          <TabsContent value="assistant">
            <AIAssistant />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

