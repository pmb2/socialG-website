"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import { useState } from "react"
import { ContactFormModal } from "@/components/contact-form-modal"
import { BetaDisclaimerModal } from "@/components/beta-disclaimer-modal"

export function SiteHeader() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [modalType, setModalType] = useState<"sales" | "consultation">("sales")
  const [betaDisclaimerOpen, setBetaDisclaimerOpen] = useState(false)

  const openContactModal = (type: "sales" | "consultation") => {
    setModalType(type)
    setContactModalOpen(true)
  }

  const openBetaDisclaimer = () => {
    setBetaDisclaimerOpen(true)
  }

  const handleBetaContinue = () => {
    setBetaDisclaimerOpen(false)
    window.open("https://app.social-genius.com/register", "_blank")
  }

  return (
    <>
      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
        type={modalType} 
      />
      
      {/* Beta Disclaimer Modal */}
      <BetaDisclaimerModal 
        isOpen={betaDisclaimerOpen} 
        onClose={() => setBetaDisclaimerOpen(false)} 
        onContinue={handleBetaContinue}
      />

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20362-u0CJxkd2SYIN4wqY2H5Po0ShF75t7v.png"
                alt="SocialGenius Logo"
                width={140}
                height={140}
                className="w-auto h-10"
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Button 
                className="bg-[#FFA726] text-white hover:bg-[#FF8A65] rounded-full px-6 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                onClick={openBetaDisclaimer}
              >
                Try Beta Now
              </Button>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-4">
                  <Button 
                    className="bg-[#FFA726] text-white hover:bg-[#FF8A65] rounded-full w-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                    onClick={() => {
                      openBetaDisclaimer();
                      // Close the sheet after opening the modal
                      document.querySelector('[data-state="open"]')?.dispatchEvent(
                        new KeyboardEvent('keydown', { key: 'Escape' })
                      );
                    }}
                  >
                    Try Beta Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}

