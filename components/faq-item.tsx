"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full bg-[#F4F4F4] rounded-lg overflow-hidden transition-all duration-200 ease-in-out"
    >
      <CollapsibleTrigger className="flex justify-between items-center w-full p-6 text-left">
        <h3 className="font-semibold">{question}</h3>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="px-6 pb-6">
        <p className="text-muted-foreground">{answer}</p>
      </CollapsibleContent>
    </Collapsible>
  )
}

