"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const diseases = [
  {
    id: 1,
    name: "Common Cold",
    symptoms:
      "Runny or stuffy nose, sore throat, cough, congestion, slight body aches or a mild headache, sneezing, low-grade fever, generally feeling unwell",
    information:
      "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold.",
  },
  {
    id: 2,
    name: "Influenza (Flu)",
    symptoms:
      "Fever over 100.4 F (38 C), aching muscles, chills and sweats, headache, dry, persistent cough, fatigue and weakness, nasal congestion, sore throat",
    information:
      "Influenza is a viral infection that attacks your respiratory system — your nose, throat and lungs. Influenza is commonly called the flu, but it's not the same as stomach 'flu' viruses that cause diarrhea and vomiting.",
  },
  {
    id: 3,
    name: "COVID-19",
    symptoms:
      "Fever or chills, cough, shortness of breath or difficulty breathing, fatigue, muscle or body aches, headache, new loss of taste or smell, sore throat, congestion or runny nose, nausea or vomiting, diarrhea",
    information:
      "COVID-19 is a respiratory disease caused by SARS-CoV-2, a new coronavirus discovered in 2019. The virus is thought to spread mainly from person to person through respiratory droplets produced when an infected person coughs, sneezes, or talks.",
  },
  {
    id: 4,
    name: "Migraine",
    symptoms:
      "Severe throbbing pain or a pulsing sensation, usually on one side of the head, nausea, vomiting, extreme sensitivity to light and sound, visual phenomena, such as seeing various shapes, bright spots or flashes of light",
    information:
      "A migraine is a headache that can cause severe throbbing pain or a pulsing sensation, usually on one side of the head. It's often accompanied by nausea, vomiting, and extreme sensitivity to light and sound.",
  },
  {
    id: 5,
    name: "Asthma",
    symptoms:
      "Shortness of breath, chest tightness or pain, wheezing when exhaling, trouble sleeping caused by shortness of breath, coughing or wheezing, coughing or wheezing attacks that are worsened by a respiratory virus",
    information:
      "Asthma is a condition in which your airways narrow and swell and may produce extra mucus. This can make breathing difficult and trigger coughing, a whistling sound (wheezing) when you breathe out and shortness of breath.",
  },
  {
    id: 6,
    name: "Type 2 Diabetes",
    symptoms:
      "Increased thirst, frequent urination, increased hunger, unintended weight loss, fatigue, blurred vision, slow-healing sores, frequent infections",
    information:
      "Type 2 diabetes is a chronic condition that affects the way your body metabolizes sugar (glucose), your body's important source of fuel. With type 2 diabetes, your body either resists the effects of insulin — a hormone that regulates the movement of sugar into your cells — or doesn't produce enough insulin to maintain normal glucose levels.",
  },
  {
    id: 7,
    name: "Hypertension (High Blood Pressure)",
    symptoms:
      "Most people with high blood pressure have no signs or symptoms, even if blood pressure readings reach dangerously high levels. Some people may have headaches, shortness of breath or nosebleeds, but these signs and symptoms aren't specific and usually don't occur until high blood pressure has reached a severe or life-threatening stage.",
    information:
      "High blood pressure is a common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause health problems, such as heart disease.",
  },
]

export default function SymptomsFinder() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDiseases = diseases.filter(
    (disease) =>
      disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.symptoms.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="w-full mt-8">
      <input
        type="text"
        placeholder="Search diseases or symptoms..."
        className="w-full p-2 mb-4 text-black"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Accordion type="single" collapsible className="w-full">
        {filteredDiseases.map((disease) => (
          <AccordionItem key={disease.id} value={`item-${disease.id}`}>
            <AccordionTrigger>{disease.name}</AccordionTrigger>
            <AccordionContent>
              <h3 className="font-bold mb-2">Symptoms:</h3>
              <p className="mb-4">{disease.symptoms}</p>
              <h3 className="font-bold mb-2">Information:</h3>
              <p>{disease.information}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

