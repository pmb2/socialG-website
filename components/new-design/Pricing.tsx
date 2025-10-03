"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"

interface PricingProps {
  onContactClick: () => void
}

const Pricing = ({ onContactClick }: PricingProps) => {
  const plans = [
    {
      name: "Starter",
      price: "149",
      priceUnit: "/PROFILE",
      range: "1-10 Profiles",
      description: "Perfect for small agencies getting started",
      features: [
        "Google Business Profile management/Meta",
        "Basic content creation",
        "Review response automation",
        "Monthly reporting",
        "Email support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "169",
      priceUnit: "/PROFILE",
      range: "11-50 Profiles",
      description: "Most popular for growing agencies",
      features: [
        "All Starter features",
        "Multi-platform management (as released)",
        "Advanced content strategy",
        "Competitor monitoring",
        "Weekly reporting",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "199",
      priceUnit: "/PROFILE",
      range: "51+ Profiles",
      description: "For agencies managing multiple clients at scale",
      features: [
        "All Professional features",
        "White-labeling",
        "Custom API integrations",
        "Dedicated account management",
        "Custom reporting",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-muted/30" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block gradient-cta text-white px-4 py-2 rounded-full text-sm font-semibold mb-6" aria-hidden="true">
            Pricing
          </div>
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Simple, Transparent{" "}
            <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your agency. All plans include our core AI automation features.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="flex gap-8 max-w-7xl mx-auto mb-12 overflow-x-auto pb-4 pt-8 snap-x snap-mandatory" role="list" aria-label="Pricing plans">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`relative bg-card rounded-3xl p-8 shadow-card border-2 transition-smooth hover:shadow-2xl flex-shrink-0 w-[350px] snap-center ${
                plan.popular
                  ? 'border-primary scale-105 shadow-purple'
                  : 'border-border hover:border-primary/50'
              }`}
              role="listitem"
              aria-label={`${plan.name} plan - $${plan.price} per profile for ${plan.range}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-hero text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-sm font-semibold text-primary mb-4">
                  {plan.range}
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-primary">
                    ${plan.price}
                  </span>
                  <span className="text-lg font-semibold text-muted-foreground">{plan.priceUnit}</span>
                </div>
              </div>

              <Button
                className={`w-full mb-8 ${
                  plan.popular
                    ? 'gradient-hero text-white shadow-purple hover:shadow-glow'
                    : ''
                }`}
                size="lg"
                variant={plan.popular ? 'default' : 'outline'}
                aria-label={`${plan.cta} for ${plan.name} plan`}
                onClick={onContactClick}
              >
                {plan.cta}
              </Button>

              <ul className="space-y-4" aria-label={`${plan.name} features`}>
                <div className="text-sm font-semibold mb-3">
                  Everything in {plan.name}:
                </div>
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? 'bg-primary' : 'bg-muted'
                    }`} aria-hidden="true">
                      <Check className={`w-3 h-3 ${
                        plan.popular ? 'text-white' : 'text-foreground'
                      }`} />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-2">
            Questions about pricing or need a custom quote?
          </p>
          <Button size="lg" variant="outline" className="font-semibold" onClick={onContactClick}>
            Contact Sales Team
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
