"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"
import { ContactFormModal } from "@/components/contact-form-modal"

export function InvestorHeader() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [modalType, setModalType] = useState<"sales" | "consultation">("sales")

  const openContactModal = (type: "sales" | "consultation") => {
    setModalType(type)
    setContactModalOpen(true)
  }

  return (
    <>
      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
        type={modalType} 
      />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20362-u0CJxkd2SYIN4wqY2H5Po0ShF75t7v.png"
                alt="GBP Automation Pro Logo"
                width={140}
                height={140}
                className="w-auto h-10"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Button
              className="bg-black text-white hover:bg-black/90 rounded-full px-6"
              onClick={() => openContactModal("sales")}
            >
              Contact Sales
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full p-0">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] px-6">
                <div className="flex flex-col gap-6 pt-10">
                  <Button
                    className="bg-black text-white hover:bg-black/90 rounded-full w-full"
                    onClick={() => {
                      openContactModal("sales");
                      // Close the sheet after opening the modal
                      document.querySelector('[data-state="open"]')?.dispatchEvent(
                        new KeyboardEvent('keydown', { key: 'Escape' })
                      );
                    }}
                  >
                    Contact Sales
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