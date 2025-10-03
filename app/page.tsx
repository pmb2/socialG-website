"use client"

import { useState } from "react"
import Navbar from "@/components/new-design/Navbar"
import Hero from "@/components/new-design/Hero"
import Problem from "@/components/new-design/Problem"
import Solution from "@/components/new-design/Solution"
import Pricing from "@/components/new-design/Pricing"
import Testimonials from "@/components/new-design/Testimonials"
import Team from "@/components/new-design/Team"
import FAQ from "@/components/new-design/FAQ"
import FinalCTA from "@/components/new-design/FinalCTA"
import Footer from "@/components/new-design/Footer"
import { ContactFormModal } from "@/components/contact-form-modal"
import { BetaDisclaimerModal } from "@/components/beta-disclaimer-modal"

export default function Page() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [modalType, setModalType] = useState<"sales" | "consultation">("sales")
  const [betaDisclaimerOpen, setBetaDisclaimerOpen] = useState(false)

  // Function to open contact modal
  const openContactModal = (type: "sales" | "consultation" = "sales") => {
    setModalType(type)
    setContactModalOpen(true)
  }

  // Function to open beta disclaimer
  const openBetaDisclaimer = () => {
    setBetaDisclaimerOpen(true)
  }

  // Function to handle beta continue
  const handleBetaContinue = () => {
    setBetaDisclaimerOpen(false)
    // Redirect to registration
    window.open("https://app.social-genius.com/register", "_blank")
  }

  return (
    <div className="min-h-screen">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>

      {/* Preserved Modals */}
      <ContactFormModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        type={modalType}
      />

      <BetaDisclaimerModal
        isOpen={betaDisclaimerOpen}
        onClose={() => setBetaDisclaimerOpen(false)}
        onContinue={handleBetaContinue}
      />

      {/* New Design Navigation */}
      <Navbar onDemoClick={() => openContactModal("consultation")} />

      {/* Main Content */}
      <main id="main-content" className="pt-16">
        <Hero
          onDemoClick={() => openContactModal("consultation")}
          onBetaClick={openBetaDisclaimer}
        />
        <Problem />
        <Solution />
        <Pricing onContactClick={() => openContactModal("sales")} />
        <Testimonials />
        <Team />
        <FAQ />
        <FinalCTA
          onDemoClick={() => openContactModal("consultation")}
          onContactClick={() => openContactModal("sales")}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
