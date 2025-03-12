"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, FileText, PieChart, BarChart, FileCheck, CheckSquare } from "lucide-react"
import { useState } from "react"
import { ContactFormModal } from "@/components/contact-form-modal"

export default function InvestorsPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [modalType, setModalType] = useState<"sales" | "consultation">("sales")

  const openContactModal = (type: "sales" | "consultation") => {
    setModalType(type)
    setContactModalOpen(true)
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(90deg, #FFA726 0%, #FF1681 25%, #C939D6 50%, #7B5DFF 75%, #0080FF 100%)",
      }}
    >
      {/* Contact Form Modal */}
      <ContactFormModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} type={modalType} />

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
          <div className="flex items-center gap-6">
            <Button
              className="bg-black text-white hover:bg-black/90 rounded-full px-6"
              onClick={() => openContactModal("sales")}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 text-center bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-[64px] font-bold tracking-tight mb-6 max-w-[1200px] mx-auto leading-[1.2]">
              Investor Relations
            </h1>
            <h2 className="text-4xl md:text-[48px] font-bold mb-8 bg-gradient-to-r from-[#FFA726] via-[#FF1681] via-[#C939D6] to-[#7B5DFF] text-transparent bg-clip-text whitespace-nowrap mx-auto inline-block leading-[1.2]">
              SocialGenius
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-10 text-lg">
              AI-Powered Business Profile Management Platform designed specifically for marketing agencies. Our solution
              automates the management of client business profiles across digital platforms, dramatically reducing time
              spent while improving performance metrics.
            </p>
            <Button
              size="lg"
              className="min-w-[200px] rounded-full bg-black text-white hover:bg-black/80 shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_10px_rgba(0,0,0,0.4)] transition-all duration-200 hover:translate-y-[-2px]"
              onClick={() => openContactModal("sales")}
            >
              Contact Investor Relations
            </Button>
          </div>
        </section>

        {/* Investor Materials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Investor Materials</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Access our comprehensive investor documentation package
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Executive Summary */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-[#FF1681] to-[#C939D6]"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#FF1681]/10 rounded-2xl flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-[#FF1681]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Executive Summary</h3>
                  <p className="text-gray-600 mb-6">
                    Overview of SocialGenius, our vision, and the market opportunity we're addressing.
                  </p>
                  <div className="flex gap-3">
                    <Link href="/investors/executive-summary">
                      <Button variant="outline" className="rounded-full">
                        View <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/api/download/executive-summary">
                      <Button variant="outline" className="rounded-full">
                        Download <Download className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Investor Pitch Deck */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-[#C939D6] to-[#7B5DFF]"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#C939D6]/10 rounded-2xl flex items-center justify-center mb-6">
                    <PieChart className="w-8 h-8 text-[#C939D6]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Investor Pitch Deck</h3>
                  <p className="text-gray-600 mb-6">
                    Interactive presentation of our business model, market opportunity, and growth strategy.
                  </p>
                  <div className="flex gap-3">
                    <Link href="/investors/pitch-deck">
                      <Button variant="outline" className="rounded-full">
                        View <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/api/download/pitch-deck">
                      <Button variant="outline" className="rounded-full">
                        Download <Download className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Legal Documentation */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-[#7B5DFF] to-[#0080FF]"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#7B5DFF]/10 rounded-2xl flex items-center justify-center mb-6">
                    <FileCheck className="w-8 h-8 text-[#7B5DFF]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Legal Documentation</h3>
                  <p className="text-gray-600 mb-6">
                    Certificate of Incorporation, Company Bylaws, IP Protection Plan, and Founder Agreement.
                  </p>
                  <div className="flex gap-3">
                    <Link href="/investors/legal-documentation">
                      <Button variant="outline" className="rounded-full">
                        View <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/api/download/legal-documentation">
                      <Button variant="outline" className="rounded-full">
                        Download <Download className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Financial Documentation */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-[#0080FF] to-[#FF1681]"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#0080FF]/10 rounded-2xl flex items-center justify-center mb-6">
                    <BarChart className="w-8 h-8 text-[#0080FF]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Financial Documentation</h3>
                  <p className="text-gray-600 mb-6">
                    Detailed financial model and cap table with projections and unit economics.
                  </p>
                  <div className="flex gap-3">
                    <Link href="/investors/financial-documentation">
                      <Button variant="outline" className="rounded-full">
                        View <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/api/download/financial-documentation">
                      <Button variant="outline" className="rounded-full">
                        Download <Download className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Business Planning Documentation */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-[#FF1681] to-[#C939D6]"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#FF1681]/10 rounded-2xl flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-[#FF1681]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Business Planning</h3>
                  <p className="text-gray-600 mb-6">
                    Market research report, technical documentation, and preliminary user testing results.
                  </p>
                  <div className="flex gap-3">
                    <Link href="/investors/business-planning">
                      <Button variant="outline" className="rounded-full">
                        View <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/api/download/business-planning">
                      <Button variant="outline" className="rounded-full">
                        Download <Download className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Implementation Checklist */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-[#C939D6] to-[#7B5DFF]"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#C939D6]/10 rounded-2xl flex items-center justify-center mb-6">
                    <CheckSquare className="w-8 h-8 text-[#C939D6]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Implementation Checklist</h3>
                  <p className="text-gray-600 mb-6">
                    Detailed roadmap and milestones for pre-funding, post-funding, and beyond.
                  </p>
                  <div className="flex gap-3">
                    <Link href="/investors/implementation-checklist">
                      <Button variant="outline" className="rounded-full">
                        View <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/api/download/implementation-checklist">
                      <Button variant="outline" className="rounded-full">
                        Download <Download className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-500 mb-8">Need additional information? Contact our investor relations team.</p>
              <Button
                size="lg"
                className="rounded-full bg-black text-white hover:bg-black/80 shadow-lg px-8 py-6"
                onClick={() => openContactModal("sales")}
              >
                Request Full Package
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className="py-16"
          style={{
            backgroundImage: "linear-gradient(90deg, #FFA726 0%, #FF1681 25%, #C939D6 50%, #7B5DFF 75%, #0080FF 100%)",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-3xl p-0 pb-8 shadow-lg overflow-hidden">
              <div className="text-center">
                <div className="w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20307%20%282%29-Ep9IRNEofTuSftUUBvXiLc444O4xoW.png"
                    alt="Creative Brain with Colorful Splash"
                    width={800}
                    height={600}
                    className="w-full rounded-t-3xl"
                  />
                </div>
                <div className="px-8 pt-6">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Join Our Journey</h2>
                  <p className="mb-10 text-gray-600">
                    Become part of the SocialGenius story as we transform how marketing agencies scale their digital
                    presence management
                  </p>
                  <Button
                    size="lg"
                    className="min-w-[200px] rounded-full bg-black text-white hover:bg-black/80 py-6 shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_10px_rgba(0,0,0,0.4)] transition-all duration-200 hover:translate-y-[-2px]"
                    onClick={() => openContactModal("consultation")}
                  >
                    Schedule a Meeting
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-[#1E1E1E]">
        <div className="container mx-auto px-4 text-center text-sm text-gray-400">
          <p>&copy; 2025 SocialGenius. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

