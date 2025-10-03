"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect } from "react"

const FAQ = () => {
  const faqs = [
    {
      question: "How does SocialGenius help marketing agencies scale?",
      answer: "SocialGenius automates content creation, review responses, and multi-platform scheduling for unlimited client profiles. With white-label capabilities, agencies can rebrand it as their own solution and charge premium prices while saving 20+ hours per week per client."
    },
    {
      question: "What makes SocialGenius different from Hootsuite or Sprout Social?",
      answer: "SocialGenius offers AI-driven content creation, sentiment-aware review automation, and competitor benchmarking at 50% lower cost ($97/month vs $200+). Unlike competitors, we include unlimited profiles and users with white-label options, specifically designed for agencies managing multiple clients."
    },
    {
      question: "Can small businesses use SocialGenius without technical expertise?",
      answer: "Absolutely. SocialGenius is designed for SMBs with no technical background. Our AI handles content creation, review responses, and scheduling automatically. Most users see results within 24 hours of setup with our intuitive dashboard."
    },
    {
      question: "What social media platforms does SocialGenius support?",
      answer: "SocialGenius supports 5+ major platforms including Facebook, Instagram, Twitter/X, LinkedIn, and Google Business Profile. We handle posting, scheduling, and analytics across all platforms from a single dashboard."
    },
    {
      question: "How does the white-label option work for agencies?",
      answer: "Our white-label plan allows agencies to fully rebrand SocialGenius with their own logo, colors, and domain. You can resell it to clients at your own pricing while we handle all the technical infrastructure, updates, and support."
    },
    {
      question: "What kind of ROI can agencies expect?",
      answer: "Agencies typically save 20+ hours per client per month on manual social media tasks. At $97/month cost and typical agency billing rates of $100-150/hour, that's $2,000+ in saved labor costs monthly. Many agencies charge clients $300-500/month for our automated services."
    },
    {
      question: "Does SocialGenius integrate with existing marketing tools?",
      answer: "Yes, SocialGenius integrates with popular CRM systems, analytics platforms, and marketing automation tools. Our API allows custom integrations for enterprise clients and agencies with specific workflow requirements."
    },
    {
      question: "How does the AI handle negative reviews?",
      answer: "Our sentiment-aware AI analyzes review tone and urgency, then generates contextually appropriate responses. For negative reviews, it offers empathetic acknowledgment and resolution steps, while flagging critical issues for human review before posting."
    }
  ]

  useEffect(() => {
    // Inject FAQ Schema into the page
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    })
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [faqs])

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block gradient-hero text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions from agencies and SMBs
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FAQ
