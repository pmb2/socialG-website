"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FAQItem } from "@/components/faq-item"
import Image from "next/image"
import {
  CheckCircle2,
  BarChart3,
  Clock,
  Award,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Info,
  Bot,
  LineChart,
  MessageSquare,
  Map,
  FileBarChart,
  Menu,
} from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ContactFormModal } from "@/components/contact-form-modal"

export default function Page() {
  // Remove the isAnnual state and toggleBillingPeriod function
  const [showFeatures, setShowFeatures] = useState(false)
  // Add state for contact form modal
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [modalType, setModalType] = useState<"sales" | "consultation">("sales")

  const toggleFeatures = () => {
    setShowFeatures(!showFeatures)

    // Scroll to features section when opening
    if (!showFeatures) {
      setTimeout(() => {
        const featuresSection = document.getElementById("all-features")
        if (featuresSection) {
          featuresSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }

  // Function to open contact modal
  const openContactModal = (type: "sales" | "consultation") => {
    setModalType(type)
    setContactModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Form Modal */}
      <ContactFormModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} type={modalType} />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20362-u0CJxkd2SYIN4wqY2H5Po0ShF75t7v.png"
              alt="SocialGenius Logo"
              width={140}
              height={140}
              className="w-auto h-10"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Button
              className="bg-black text-white hover:bg-black/90 rounded-full px-6"
              onClick={() => openContactModal("consultation")}
            >
              Request a Demo
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
                      openContactModal("consultation");
                      document.querySelector('[data-state="open"]')?.dispatchEvent(
                        new KeyboardEvent('keydown', { key: 'Escape' })
                      );
                    }}
                  >
                    Request a Demo
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-20 pb-0 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-[64px] font-bold tracking-tight mb-6 max-w-[1200px] mx-auto leading-[1.2]">
              Streamline Your Google Business Profile Management
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-[48px] font-bold mb-8 bg-gradient-to-r from-[#FFA726] via-[#FF1681] via-[#C939D6] to-[#7B5DFF] text-transparent bg-clip-text mx-auto inline-block leading-[1.2]">
              AI-Powered GBP Automation for Agencies
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mb-10 text-lg">
              The comprehensive platform for managing multiple Google Business Profiles, analyzing competitors, and
              automating optimization tasks. Built specifically for agencies to save time and drive better results.
            </p>
            <Button
              size="lg"
              className="min-w-[200px] rounded-full bg-black text-white hover:bg-black/80 shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_10px_rgba(0,0,0,0.4)] transition-all duration-200 hover:translate-y-[-2px]"
              onClick={() => openContactModal("consultation")}
            >
              Request a Demo
            </Button>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mt-0 bg-white">
          <div className="w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20356-KgsdHMiafVEvhnNmM5ghwgHxvdpvTO.png"
              alt="SocialGenius Features"
              width={2000}
              height={600}
              className="w-full"
              priority
            />
          </div>
        </section>

        {/* Proven Results Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results for Agencies</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our clients consistently achieve remarkable improvements in their Google Business Profile performance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-[#FF1681] font-bold text-5xl mb-2">87%</div>
                <p className="text-gray-700">Increase in profile views within 90 days</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-[#C939D6] font-bold text-5xl mb-2">4.2x</div>
                <p className="text-gray-700">More customer actions (calls, directions, website visits)</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-[#7B5DFF] font-bold text-5xl mb-2">68%</div>
                <p className="text-gray-700">Reduction in time spent on GBP management</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-[#0080FF] font-bold text-5xl mb-2">93%</div>
                <p className="text-gray-700">Client retention rate for agencies using our platform</p>
              </div>
            </div>
          </div>
        </section>

        {/* ROI and Value Proposition Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Agencies Choose Social Genius</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our platform delivers measurable ROI while solving the most critical challenges agencies face with
                Google Business Profile management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="w-8 h-8 text-[#FF1681]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Save 15+ Hours Per Week</h3>
                  <p className="text-gray-700">
                    Our automation tools handle routine tasks like review responses, post scheduling, and listing
                    updates across all your client locations. Agencies report saving an average of 15-20 hours per week
                    for every 50 locations managed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <BarChart3 className="w-8 h-8 text-[#C939D6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Increase Client Revenue</h3>
                  <p className="text-gray-700">
                    Clients using our platform see an average 32% increase in leads from Google Business Profiles within
                    60 days. Our AI optimization engine continuously improves profile performance based on real-time
                    data.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Award className="w-8 h-8 text-[#7B5DFF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Enterprise-Grade Security</h3>
                  <p className="text-gray-700">
                    SOC 2 Type II certified with role-based access controls, audit logs, and encrypted data storage. We
                    maintain 99.99% uptime and provide dedicated support for agency partners.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <TrendingUp className="w-8 h-8 text-[#0080FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Scale Your Agency</h3>
                  <p className="text-gray-700">
                    Our white-label reporting and client dashboard allows you to manage unlimited locations without
                    increasing overhead. Agencies using our platform grow their GBP management services by an average of
                    3.5x within 12 months.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gray-50 p-8 rounded-xl max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-center">Exclusive Agency Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Dedicated account manager for agencies with 10+ locations",
                  "Priority support with 2-hour response time",
                  "Custom AI training for your specific industry verticals",
                  "Quarterly strategy sessions with our GBP optimization experts",
                  "White-label client reporting and dashboards",
                  "Bulk location management and updates",
                  "Competitor monitoring and benchmarking",
                  "Custom API access for enterprise integrations",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#FF1681] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Social Genius Section - IMPROVED */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#FF1681]/10 to-[#7B5DFF]/10 rounded-full text-[#FF1681] font-medium text-sm mb-4">
                POWERFUL PLATFORM
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The Ultimate{" "}
                <span className="bg-gradient-to-r from-gradient-start via-gradient-second via-gradient-third to-gradient-end text-transparent bg-clip-text">
                  GBP Management Solution
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our all-in-one platform combines AI-powered automation, deep analytics, and optimization tools designed
                specifically for agencies managing multiple Google Business Profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Feature Cards - 6 cards in 3 columns */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-[#FF1681] to-[#C939D6]"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#FF1681]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Bot className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">AI-Powered Automation</h3>
                  <p className="text-gray-600 mb-4">
                    Our specialized AI handles routine tasks like review responses, post creation, and listing updates
                    across all locations.
                  </p>
                  <ul className="space-y-2">
                    {["Smart review responses", "Content generation", "Posting schedule"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#FF1681]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-[#C939D6] to-[#7B5DFF]"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#C939D6]/10 rounded-2xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive insights into profile performance, customer behavior, and competitive positioning.
                  </p>
                  <ul className="space-y-2">
                    {["Performance dashboards", "Competitor analysis", "Conversion tracking"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#C939D6]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-[#7B5DFF] to-[#0080FF]"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#7B5DFF]/10 rounded-2xl flex items-center justify-center mb-6">
                    <LineChart className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Continuous Optimization</h3>
                  <p className="text-gray-600 mb-4">
                    AI-driven recommendations to improve visibility, engagement, and conversion rates.
                  </p>
                  <ul className="space-y-2">
                    {["Keyword optimization", "Content suggestions", "Performance alerts"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#7B5DFF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-[#0080FF] to-[#FF1681]"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#0080FF]/10 rounded-2xl flex items-center justify-center mb-6">
                    <MessageSquare className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Review Management</h3>
                  <p className="text-gray-600 mb-4">
                    Automated review monitoring, response generation, and sentiment analysis across all locations.
                  </p>
                  <ul className="space-y-2">
                    {["AI response templates", "Sentiment tracking", "Review solicitation"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#0080FF]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-[#FF1681] to-[#C939D6]"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#FF1681]/10 rounded-2xl flex items-center justify-center mb-6">
                    <Map className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Multi-Location Management</h3>
                  <p className="text-gray-600 mb-4">
                    Centralized control for managing hundreds of locations with location-specific customizations.
                  </p>
                  <ul className="space-y-2">
                    {["Bulk updates", "Location grouping", "Custom permissions"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#FF1681]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="h-3 bg-gradient-to-r from-[#C939D6] to-[#7B5DFF]"></div>
                <div className="p-8">
                  <div className="w-14 h-14 bg-[#C939D6]/10 rounded-2xl flex items-center justify-center mb-6">
                    <FileBarChart className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">White-Label Reporting</h3>
                  <p className="text-gray-600 mb-4">
                    Customizable client dashboards and reports with your agency's branding and insights.
                  </p>
                  <ul className="space-y-2">
                    {["Custom branding", "Automated reports", "Client portal"].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#C939D6]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button
                size="lg"
                className="rounded-full bg-black text-white hover:bg-black/80 shadow-lg px-8 py-6"
                onClick={toggleFeatures}
              >
                {showFeatures ? (
                  <>
                    Hide All Features <ChevronUp className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    See All Features <ChevronDown className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </section>

        {/* All Features Section - Comprehensive */}
        <section
          id="all-features"
          className={`py-20 bg-white border-t border-gray-100 transition-all duration-500 ${showFeatures ? "block" : "hidden"}`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Complete{" "}
                <span className="bg-gradient-to-r from-gradient-start via-gradient-second via-gradient-third to-gradient-end text-transparent bg-clip-text">
                  Feature List
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Compare features across all plans to find the perfect fit for your agency needs
              </p>
            </div>

            <div className="max-w-6xl mx-auto overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle p-4 sm:p-0">
                <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-4 px-6 text-left min-w-[250px]">Features</th>
                    <th className="py-4 px-6 text-center">
                      <span className="block text-lg font-bold">Basic</span>
                      <span className="block text-sm text-gray-500">1-10 locations</span>
                    </th>
                    <th className="py-4 px-6 text-center bg-[#7B5DFF]/5 rounded-t-lg">
                      <span className="block text-lg font-bold text-[#7B5DFF]">Professional</span>
                      <span className="block text-sm text-gray-500">11-50 locations</span>
                    </th>
                    <th className="py-4 px-6 text-center">
                      <span className="block text-lg font-bold">Business</span>
                      <span className="block text-sm text-gray-500">51-250 locations</span>
                    </th>
                    <th className="py-4 px-6 text-center">
                      <span className="block text-lg font-bold">Enterprise</span>
                      <span className="block text-sm text-gray-500">251+ locations</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Content Management */}
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td colSpan={5} className="py-3 px-6 font-semibold">
                      Content Management
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">AI-driven posts</td>
                    <td className="py-3 px-6 text-center">1 per week</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">3 per week</td>
                    <td className="py-3 px-6 text-center">5 per week</td>
                    <td className="py-3 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Post scheduling</td>
                    <td className="py-3 px-6 text-center">✓</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Custom post templates</td>
                    <td className="py-3 px-6 text-center">3 templates</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">10 templates</td>
                    <td className="py-3 px-6 text-center">20 templates</td>
                    <td className="py-3 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Multi-platform posting</td>
                    <td className="py-3 px-6 text-center">—</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                  </tr>

                  {/* Review Management */}
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td colSpan={5} className="py-3 px-6 font-semibold">
                      Review Management
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">AI review responses</td>
                    <td className="py-3 px-6 text-center">Basic</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">Advanced</td>
                    <td className="py-3 px-6 text-center">Advanced</td>
                    <td className="py-3 px-6 text-center">Custom AI training</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Review monitoring</td>
                    <td className="py-3 px-6 text-center">Daily</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">Real-time</td>
                    <td className="py-3 px-6 text-center">Real-time</td>
                    <td className="py-3 px-6 text-center">Real-time</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Sentiment analysis</td>
                    <td className="py-3 px-6 text-center">Basic</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">Advanced</td>
                    <td className="py-3 px-6 text-center">Advanced</td>
                    <td className="py-3 px-6 text-center">Custom insights</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Review generation tools</td>
                    <td className="py-3 px-6 text-center">Basic</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                    <td className="py-3 px-6 text-center">✓ + Custom workflows</td>
                  </tr>

                  {/* Analytics & Reporting */}
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td colSpan={5} className="py-3 px-6 font-semibold">
                      Analytics & Reporting
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Performance dashboards</td>
                    <td className="py-3 px-6 text-center">Basic</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">Advanced</td>
                    <td className="py-3 px-6 text-center">Advanced</td>
                    <td className="py-3 px-6 text-center">Custom</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Competitor analysis</td>
                    <td className="py-3 px-6 text-center">Limited (3)</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">Up to 10</td>
                    <td className="py-3 px-6 text-center">Up to 25</td>
                    <td className="py-3 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">White-label reporting</td>
                    <td className="py-3 px-6 text-center">—</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                    <td className="py-3 px-6 text-center">✓ + Custom branding</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Automated report delivery</td>
                    <td className="py-3 px-6 text-center">Weekly</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">Daily/Weekly</td>
                    <td className="py-3 px-6 text-center">Custom schedule</td>
                    <td className="py-3 px-6 text-center">Custom schedule</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Historical data</td>
                    <td className="py-3 px-6 text-center">3 months</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">12 months</td>
                    <td className="py-3 px-6 text-center">24 months</td>
                    <td className="py-3 px-6 text-center">Unlimited</td>
                  </tr>

                  {/* GBP Optimization */}
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td colSpan={5} className="py-3 px-6 font-semibold">
                      GBP Optimization
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Keyword optimization</td>
                    <td className="py-3 px-6 text-center">Basic</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">Advanced</td>
                    <td className="py-3 px-6 text-center">Advanced</td>
                    <td className="py-3 px-6 text-center">AI-driven custom</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Profile completeness score</td>
                    <td className="py-3 px-6 text-center">✓</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Automated updates</td>
                    <td className="py-3 px-6 text-center">Limited</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">SEO recommendations</td>
                    <td className="py-3 px-6 text-center">Monthly</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">Weekly</td>
                    <td className="py-3 px-6 text-center">Weekly</td>
                    <td className="py-3 px-6 text-center">Real-time</td>
                  </tr>

                  {/* Team & Collaboration */}
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td colSpan={5} className="py-3 px-6 font-semibold">
                      Team & Collaboration
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Team members</td>
                    <td className="py-3 px-6 text-center">2</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">5</td>
                    <td className="py-3 px-6 text-center">10</td>
                    <td className="py-3 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Role-based permissions</td>
                    <td className="py-3 px-6 text-center">Basic</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">Advanced</td>
                    <td className="py-3 px-6 text-center">Advanced</td>
                    <td className="py-3 px-6 text-center">Custom</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Workflow approvals</td>
                    <td className="py-3 px-6 text-center">—</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                    <td className="py-3 px-6 text-center">Custom workflows</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Activity logs</td>
                    <td className="py-3 px-6 text-center">7 days</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">30 days</td>
                    <td className="py-3 px-6 text-center">90 days</td>
                    <td className="py-3 px-6 text-center">Unlimited</td>
                  </tr>

                  {/* Support & Services */}
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td colSpan={5} className="py-3 px-6 font-semibold">
                      Support & Services
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Support channels</td>
                    <td className="py-3 px-6 text-center">Email</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">Email, Chat</td>
                    <td className="py-3 px-6 text-center">Email, Chat, Phone</td>
                    <td className="py-3 px-6 text-center">Priority all channels</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Response time</td>
                    <td className="py-3 px-6 text-center">24 hours</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">8 hours</td>
                    <td className="py-3 px-6 text-center">4 hours</td>
                    <td className="py-3 px-6 text-center">2 hours</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Dedicated account manager</td>
                    <td className="py-3 px-6 text-center">—</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">—</td>
                    <td className="py-3 px-6 text-center">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Strategy sessions</td>
                    <td className="py-3 px-6 text-center">—</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">Annual</td>
                    <td className="py-3 px-6 text-center">Quarterly</td>
                    <td className="py-3 px-6 text-center">Monthly</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Onboarding & training</td>
                    <td className="py-3 px-6 text-center">Self-service</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">1 session</td>
                    <td className="py-3 px-6 text-center">2 sessions</td>
                    <td className="py-3 px-6 text-center">Custom program</td>
                  </tr>

                  {/* Integrations & API */}
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <td colSpan={5} className="py-3 px-6 font-semibold">
                      Integrations & API
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Standard integrations</td>
                    <td className="py-3 px-6 text-center">Basic</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">API access</td>
                    <td className="py-3 px-6 text-center">—</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">Limited</td>
                    <td className="py-3 px-6 text-center">Full access</td>
                    <td className="py-3 px-6 text-center">Full access + Support</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Custom integrations</td>
                    <td className="py-3 px-6 text-center">—</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">—</td>
                    <td className="py-3 px-6 text-center">Limited</td>
                    <td className="py-3 px-6 text-center">✓</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-6">Webhook support</td>
                    <td className="py-3 px-6 text-center">—</td>
                    <td className="py-3 px-6 text-center bg-[#7B5DFF]/5">Limited</td>
                    <td className="py-3 px-6 text-center">✓</td>
                    <td className="py-3 px-6 text-center">✓</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-500 mb-8">
                Need a custom solution? Contact our sales team to discuss your specific requirements.
              </p>
              <Button
                size="lg"
                className="rounded-full bg-black text-white hover:bg-black/80 shadow-lg px-8 py-6"
                onClick={() => openContactModal("consultation")}
              >
                Request a Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section - UPDATED */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#FF1681]/10 to-[#7B5DFF]/10 rounded-full text-[#FF1681] font-medium text-sm mb-4">
                PRICING
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Simple, Transparent{" "}
                <span className="bg-gradient-to-r from-gradient-start via-gradient-second via-gradient-third to-gradient-end text-transparent bg-clip-text">
                  Pricing
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Choose the plan that's right for your agency. All plans include our core features with different limits
                and capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Basic</h3>
                  <p className="text-gray-600 mb-6">For small businesses with 1-10 locations</p>
                  <div className="flex flex-wrap items-end gap-1 mb-1">
                    <span className="text-4xl font-bold">$199</span>
                    <span className="text-gray-500 mb-1">/mo per location</span>
                  </div>

                  <div className="space-y-4">
                    <p className="font-medium">Includes:</p>
                    <ul className="space-y-3">
                      {[
                        "Basic AI-driven posting (one post per week)",
                        "Response reviews",
                        "Detailed analytics",
                        "GBP automation",
                        "Email support",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#FF1681] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Professional Plan - Highlighted */}
              <div className="bg-white border-2 border-[#7B5DFF] rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative">
                <div className="absolute top-0 right-0 bg-[#7B5DFF] text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
                  MOST POPULAR
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Professional</h3>
                  <p className="text-gray-600 mb-6">For marketing agencies with 11-50 locations</p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-4xl font-bold">$169</span>
                    <span className="text-gray-500 mb-1">/mo per location</span>
                  </div>

                  <div className="space-y-4">
                    <p className="font-medium">Everything in Basic, plus:</p>
                    <ul className="space-y-3">
                      {[
                        "Advanced competitor analytics",
                        "Increased posting frequency",
                        "Additional social media platforms",
                        "Priority support",
                        "Bulk operations",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#7B5DFF] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Business Plan */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Business</h3>
                  <p className="text-gray-600 mb-6">For growing agencies with 51-250 locations</p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-4xl font-bold">$119</span>
                    <span className="text-gray-500 mb-1">/mo per location</span>
                  </div>

                  <div className="space-y-4">
                    <p className="font-medium">Everything in Professional, plus:</p>
                    <ul className="space-y-3">
                      {[
                        "Higher posting frequency",
                        "Multi-location support",
                        "Enriched AI-generated content",
                        "Prioritized customer service",
                        "Advanced reporting tools",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#0080FF] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                  <p className="text-gray-600 mb-6">For large enterprises with 251+ locations</p>
                  <div className="flex items-end gap-1 mb-6">
                    <span className="text-2xl font-bold">Custom Pricing</span>
                  </div>

                  <div className="space-y-4">
                    <p className="font-medium">Everything in Business, plus:</p>
                    <ul className="space-y-3">
                      {[
                        "Full customization options",
                        "API access",
                        "White-labeling",
                        "Dedicated support",
                        "Multi-location management",
                        "Custom integrations",
                        "Quarterly strategy sessions",
                        "Custom feature development",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-[#C939D6] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 max-w-4xl mx-auto bg-gray-50 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-full md:w-2/3">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Why our pricing works for agencies</h3>
                  <ul className="space-y-2">
                    {[
                      "The $199/month Basic plan is strategically priced to remain accessible to small businesses.",
                      "At $169/month, the Professional plan meets the needs of marketing agencies requiring greater levels of automation.",
                      "The $119/month Business option supports growing agencies and mid-sized businesses seeking enhanced scalability.",
                      "Custom pricing for the Enterprise plan offers flexibility tailored to the needs of larger organizations.",
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#FF1681] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm sm:text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/3 mt-4 md:mt-0">
                  <Button
                    className="w-full bg-black text-white hover:bg-black/80 rounded-full px-4 sm:px-8 py-4 sm:py-6"
                    onClick={() => openContactModal("consultation")}
                  >
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Everything you need to know about SocialGenius</p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              <FAQItem
                question="How does SocialGenius help agencies?"
                answer="Our platform streamlines the management of multiple Google Business Profiles by providing centralized control, automated optimization, and comprehensive reporting tools specifically designed for agencies."
              />
              <FAQItem
                question="What types of automation are available?"
                answer="We offer automation for review management, post scheduling, competitor monitoring, and listing optimization. Our AI agents can handle routine tasks while maintaining compliance with Google's guidelines."
              />
              <FAQItem
                question="Can I manage multiple client accounts?"
                answer="Yes! Our platform is built specifically for agencies to manage multiple client accounts. You can easily switch between different clients and maintain separate settings and reports for each."
              />
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
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Get Started Today</h2>
                  <p className="mb-10 text-gray-600">
                    Join hundreds of successful agencies using SocialGenius to streamline their workflow
                  </p>
                  <Button
                    size="lg"
                    className="min-w-[200px] rounded-full bg-black text-white hover:bg-black/80 py-6 shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_10px_rgba(0,0,0,0.4)] transition-all duration-200 hover:translate-y-[-2px]"
                    onClick={() => openContactModal("consultation")}
                  >
                    Request a Demo
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
          <p className="mb-2">&copy; 2025 SocialGenius. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/data-deletion" className="text-gray-400 hover:text-white transition-colors">
              Data Deletion
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

