"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { InvestorHeader } from "@/components/investor-header"

// Define slide content
const slides = [
  {
    id: 1,
    title: "SocialGenius",
    subtitle: "AI-Powered Brand Management That Transforms How Marketing Agencies Scale Digital Presence",
    content: (
      <div className="flex flex-col items-center justify-center h-full">
        <div className="w-32 h-32 mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20362-u0CJxkd2SYIN4wqY2H5Po0ShF75t7v.png"
            alt="SocialGenius Logo"
            width={128}
            height={128}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-gray-600 mt-8">Founded by Brian Martino & Paul Backus</p>
        <p className="text-gray-600">March 2025</p>
      </div>
    ),
    bgColor: "from-white to-gray-50",
  },
  {
    id: 2,
    title: "The Digital Management Crisis in Numbers",
    subtitle: "",
    content: (
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-[#FF1681] font-bold text-5xl mb-2">15+</div>
          <p className="text-gray-700">Hours spent weekly per account on maintenance</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-[#C939D6] font-bold text-5xl mb-2">63</div>
          <p className="text-gray-700">Average client business profiles managed simultaneously</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-[#7B5DFF] font-bold text-5xl mb-2">97%</div>
          <p className="text-gray-700">Time reduction for core management tasks with SocialGenius</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="text-[#0080FF] font-bold text-5xl mb-2">5</div>
          <p className="text-gray-700">Marketing agencies signed to our beta waitlist</p>
        </div>
      </div>
    ),
    bgColor: "from-gray-50 to-white",
  },
  {
    id: 3,
    title: "The Agency Management Challenge",
    subtitle: "Marketing agencies face three critical challenges managing client business profiles",
    content: (
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2 text-[#FF1681]">Unsustainable Workloads</h3>
          <p className="text-gray-700">
            Profile management consumes 35% of operational capacity, with tasks requiring constant attention to maintain
            brand consistency and promptness.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2 text-[#C939D6]">Poor Customer Engagement</h3>
          <p className="text-gray-700">
            Response times averaging 9.3 hours for reviews and comments – far exceeding the 1-hour expectation of
            today's consumers.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-2 text-[#7B5DFF]">Scaling Limitations</h3>
          <p className="text-gray-700">
            78% of marketing agencies are forced to turn away new business due to capacity constraints or sacrifice
            quality.
          </p>
        </div>
      </div>
    ),
    bgColor: "from-white to-gray-50",
  },
  {
    id: 4,
    title: "Introducing SocialGenius",
    subtitle:
      "SocialGenius leverages advanced LLMs and AI agency to automate the entire business profile management process",
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-bold mb-2 text-[#FF1681]">Automated Profile Optimization</h3>
          <p className="text-gray-700 text-sm">
            Our AI continuously monitors and updates business information, images, and service listings.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-bold mb-2 text-[#C939D6]">Intelligent Content Management</h3>
          <p className="text-gray-700 text-sm">
            Generates platform-optimized posts that maintain each client's unique brand voice.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-bold mb-2 text-[#7B5DFF]">Real-time Engagement</h3>
          <p className="text-gray-700 text-sm">
            Monitors and responds to reviews, comments, and messages with customized responses that sound authentically
            human.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-bold mb-2 text-[#0080FF]">Competitive Intelligence</h3>
          <p className="text-gray-700 text-sm">
            Continuously analyzes competitor profiles, identifying opportunities for clients to differentiate and
            capture market share.
          </p>
        </div>
      </div>
    ),
    bgColor: "from-gray-50 to-white",
  },
  {
    id: 5,
    title: "The SocialGenius Dashboard",
    subtitle: "Product Demonstration",
    content: (
      <div className="space-y-6">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-bold mb-2 text-[#FF1681]">Multi-client Dashboard</h3>
          <div className="bg-gray-100 h-40 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Dashboard Screenshot: Profile health metrics across platforms</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-2 text-[#C939D6]">Content Creation</h3>
            <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">AI content generator interface</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-2 text-[#7B5DFF]">Response System</h3>
            <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Automated response system</p>
            </div>
          </div>
        </div>
      </div>
    ),
    bgColor: "from-white to-gray-50",
  },
  {
    id: 6,
    title: "Our Technological Advantage",
    subtitle: "SocialGenius is built on a proprietary AI framework",
    content: (
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-bold mb-2 text-[#FF1681]">Core Language Architecture</h3>
          <p className="text-gray-700 text-sm">
            Specialized implementation of large language models fine-tuned on marketing content, regulatory
            requirements, and brand communication patterns.
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-bold mb-2 text-[#C939D6]">Business Profile Management Layer</h3>
          <p className="text-gray-700 text-sm">
            Proprietary middleware integrates with platform APIs to execute changes, monitor performance, and collect
            data across platforms.
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-bold mb-2 text-[#7B5DFF]">Brand Voice Analysis Engine</h3>
          <p className="text-gray-700 text-sm">
            Each client's existing content is analyzed to create a unique brand voice profile that guides all
            AI-generated content.
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-bold mb-2 text-[#0080FF]">Continuous Reinforcement Learning</h3>
          <p className="text-gray-700 text-sm">
            The system continuously improves by analyzing engagement metrics to refine content strategies and response
            patterns.
          </p>
        </div>
      </div>
    ),
    bgColor: "from-gray-50 to-white",
  },
  {
    id: 7,
    title: "Revenue Model & Pricing Strategy",
    subtitle: "SocialGenius operates on a tiered SaaS model priced per managed business profile",
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-2 text-[#FF1681]">Basic</h3>
            <div className="text-3xl font-bold mb-2">$199</div>
            <p className="text-gray-500 text-sm mb-4">per month per location</p>
            <ul className="text-sm space-y-1">
              <li>• 1-10 locations</li>
              <li>• Google Business Profile management</li>
              <li>• Basic content creation</li>
              <li>• Review response</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md border-2 border-[#7B5DFF]">
            <h3 className="text-lg font-bold mb-2 text-[#7B5DFF]">Professional</h3>
            <div className="text-3xl font-bold mb-2">$169</div>
            <p className="text-gray-500 text-sm mb-4">per month per location</p>
            <ul className="text-sm space-y-1">
              <li>• 11-50 locations</li>
              <li>• Multi-platform management</li>
              <li>• Advanced content strategy</li>
              <li>• Competitor monitoring</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-2 text-[#0080FF]">Business</h3>
            <div className="text-3xl font-bold mb-2">$119</div>
            <p className="text-gray-500 text-sm mb-4">per month per location</p>
            <ul className="text-sm space-y-1">
              <li>• 51-250 locations</li>
              <li>• White-labeling</li>
              <li>• Custom API integrations</li>
              <li>• Dedicated account management</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl">
          <p className="text-center text-gray-700">
            Our pricing delivers 30-40% cost savings compared to manual management while providing superior results and
            scalability.
          </p>
        </div>
      </div>
    ),
    bgColor: "from-white to-gray-50",
  },
  {
    id: 8,
    title: "Market Opportunity",
    subtitle: "The U.S. alone has 20,000+ marketing agencies managing digital presence for over 2 million businesses",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-bold mb-2 text-[#FF1681]">TAM</h3>
            <div className="text-3xl font-bold mb-2">$4.8B</div>
            <p className="text-gray-500 text-xs">Total Addressable Market</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-bold mb-2 text-[#C939D6]">SAM</h3>
            <div className="text-3xl font-bold mb-2">$1.2B</div>
            <p className="text-gray-500 text-xs">Serviceable Addressable Market</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md text-center">
            <h3 className="text-lg font-bold mb-2 text-[#7B5DFF]">Target</h3>
            <div className="text-3xl font-bold mb-2">$120M</div>
            <p className="text-gray-500 text-xs">Initial Target Market</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="text-lg font-bold mb-2 text-[#0080FF]">Platform Expansion Roadmap</h3>
          <ul className="text-sm space-y-2">
            <li>• Google Business Profile: $1.5B market</li>
            <li>• LinkedIn & Facebook: Additional $1.2B</li>
            <li>• Instagram, Apple Business & X: Additional $2.1B</li>
          </ul>
        </div>
      </div>
    ),
    bgColor: "from-gray-50 to-white",
  },
  {
    id: 9,
    title: "Investment Opportunity",
    subtitle: "We're seeking $1,500,000 in seed funding",
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-2 text-[#FF1681]">Product Development</h3>
            <div className="text-3xl font-bold mb-2">$700K</div>
            <ul className="text-xs space-y-1">
              <li>• Complete multi-platform integrations</li>
              <li>• Enhance AI capabilities</li>
              <li>• Build advanced analytics</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-2 text-[#C939D6]">Marketing & Sales</h3>
            <div className="text-3xl font-bold mb-2">$400K</div>
            <ul className="text-xs space-y-1">
              <li>• Launch agency acquisition campaigns</li>
              <li>• Develop partnership program</li>
              <li>• Create educational content</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h3 className="text-lg font-bold mb-2 text-[#7B5DFF]">Operations & Team</h3>
            <div className="text-3xl font-bold mb-2">$400K</div>
            <ul className="text-xs space-y-1">
              <li>• Key hires in engineering</li>
              <li>• Legal and compliance infrastructure</li>
              <li>• Office and equipment</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-xl">
          <h3 className="text-lg font-bold mb-2 text-center">18-Month Targets</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-xl font-bold text-[#FF1681]">60+</div>
              <p className="text-xs text-gray-600">Paying Agencies</p>
            </div>
            <div>
              <div className="text-xl font-bold text-[#C939D6]">$70K+</div>
              <p className="text-xs text-gray-600">Monthly Revenue</p>
            </div>
            <div>
              <div className="text-xl font-bold text-[#7B5DFF]">Series A</div>
              <p className="text-xs text-gray-600">Positioned For</p>
            </div>
          </div>
        </div>
      </div>
    ),
    bgColor: "from-white to-gray-50",
  },
]

export default function PitchDeckPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      // Uncomment to enable auto-advance
      // nextSlide();
    }, 8000)
    return () => clearTimeout(timer)
  }, [currentSlide])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(90deg, #FFA726 0%, #FF1681 25%, #C939D6 50%, #7B5DFF 75%, #0080FF 100%)",
      }}
    >
      {/* Header */}
      <InvestorHeader />

      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <Link href="/investors">
              <Button variant="outline" className="rounded-full">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
            </Link>
            <Link href="/api/download/pitch-deck">
              <Button className="rounded-full text-black border border-black bg-transparent hover:bg-transparent">
                Download PDF <Download className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden" style={{ height: "600px" }}>
              {/* Slide Navigation */}
              <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/80 hover:bg-white"
                  onClick={prevSlide}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/80 hover:bg-white"
                  onClick={nextSlide}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>

              {/* Slide Content */}
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "tween", duration: 0.5 }}
                  className={`absolute inset-0 p-10 bg-gradient-to-b ${slides[currentSlide].bgColor} overflow-y-auto`}
                >
                  <div className="h-full flex flex-col">
                    <div className="mb-8 text-center">
                      <h2 className="text-3xl font-bold mb-2">{slides[currentSlide].title}</h2>
                      {slides[currentSlide].subtitle && (
                        <p className="text-gray-600">{slides[currentSlide].subtitle}</p>
                      )}
                    </div>
                    <div className="flex-grow overflow-y-auto">{slides[currentSlide].content}</div>
                    <div className="mt-auto pt-4 flex justify-center">
                      <div className="flex space-x-2">
                        {slides.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setDirection(index > currentSlide ? 1 : -1)
                              setCurrentSlide(index)
                            }}
                            className={`w-3 h-3 rounded-full ${
                              index === currentSlide ? "bg-[#FF1681]" : "bg-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 mb-4">
                Slide {currentSlide + 1} of {slides.length}
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" className="rounded-full" onClick={prevSlide}>
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button variant="outline" className="rounded-full" onClick={nextSlide}>
                  Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
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

