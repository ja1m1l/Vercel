"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const medicines = [
  {
    id: 1,
    name: "Aspirin",
    information:
      "Aspirin is a nonsteroidal anti-inflammatory drug (NSAID) used to reduce pain, fever, and inflammation. It's also used to prevent blood clots, heart attacks, and strokes in high-risk patients.",
  },
  {
    id: 2,
    name: "Ibuprofen",
    information:
      "Ibuprofen is another NSAID used to reduce fever and treat pain or inflammation caused by many conditions such as headache, toothache, back pain, arthritis, menstrual cramps, or minor injury.",
  },
  {
    id: 3,
    name: "Amoxicillin",
    information:
      "Amoxicillin is an antibiotic used to treat a wide variety of bacterial infections. It works by stopping the growth of bacteria. This antibiotic treats only bacterial infections. It will not work for viral infections (such as common cold, flu).",
  },
  {
    id: 4,
    name: "Lisinopril",
    information:
      "Lisinopril is an ACE inhibitor used to treat high blood pressure (hypertension) and heart failure. It's also used to improve survival after a heart attack.",
  },
  {
    id: 5,
    name: "Metformin",
    information:
      "Metformin is used to treat type 2 diabetes. It works by helping to restore your body's proper response to the insulin you naturally produce. It also decreases the amount of sugar that your liver makes and that your stomach/intestines absorb.",
  },
  {
    id: 6,
    name: "Omeprazole",
    information:
      "Omeprazole is a proton pump inhibitor used to treat certain stomach and esophagus problems (such as acid reflux, ulcers). It works by decreasing the amount of acid your stomach produces.",
  },
  {
    id: 7,
    name: "Levothyroxine",
    information:
      "Levothyroxine is used to treat an underactive thyroid (hypothyroidism). It replaces or provides more thyroid hormone, which is normally produced by the thyroid gland.",
  },
  {
    id: 8,
    name: "Amlodipine",
    information:
      "Amlodipine is a calcium channel blocker used to treat high blood pressure and certain types of chest pain (angina). It works by relaxing blood vessels so blood can flow more easily.",
  },
  {
    id: 9,
    name: "Gabapentin",
    information:
      "Gabapentin is used to prevent and control seizures. It is also used to relieve nerve pain following shingles (a painful rash due to herpes zoster infection) in adults.",
  },
  {
    id: 10,
    name: "Sertraline",
    information:
      "Sertraline is an antidepressant in a group of drugs called selective serotonin reuptake inhibitors (SSRIs). It's used to treat depression, obsessive-compulsive disorder, panic disorder, anxiety disorders, post-traumatic stress disorder (PTSD), and premenstrual dysphoric disorder (PMDD).",
  },
]

export default function MedicineList() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="w-full mt-8">
      <input
        type="text"
        placeholder="Search medicines..."
        className="w-full p-2 mb-4 text-black"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Accordion type="single" collapsible className="w-full">
        {filteredMedicines.map((medicine) => (
          <AccordionItem key={medicine.id} value={`item-${medicine.id}`}>
            <AccordionTrigger>{medicine.name}</AccordionTrigger>
            <AccordionContent>{medicine.information}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

