import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

export default function ExecutiveSummaryPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(90deg, #FFA726 0%, #FF1681 25%, #C939D6 50%, #7B5DFF 75%, #0080FF 100%)",
      }}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20362-u0CJxkd2SYIN4wqY2H5Po0ShF75t7v.png"
              alt="GBP Automation Pro Logo"
              width={140}
              height={140}
              className="w-auto h-10"
            />
          </div>
          <div className="flex items-center gap-6">
            <Button className="bg-black text-white hover:bg-black/90 rounded-full px-6">Contact Sales</Button>
          </div>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <Link href="/investors">
              <Button variant="outline" className="rounded-full">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Investor Materials
              </Button>
            </Link>
            <Link href="/api/download/executive-summary">
              <Button className="rounded-full text-black border border-black bg-transparent hover:bg-transparent">
                Download PDF <Download className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold mb-4">Executive Summary</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#FF1681] to-[#7B5DFF] mx-auto"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-[#FF1681]">Overview</h2>
              <p>
                SocialGenius is an AI-powered business profile management platform designed specifically for marketing
                agencies. Our solution automates the management of client business profiles across digital platforms,
                dramatically reducing time spent while improving performance metrics.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#C939D6]">Vision</h2>
              <p>
                To transform how marketing agencies scale their digital presence management, allowing them to handle 5x
                more client accounts with existing teams while delivering superior results.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#7B5DFF]">Market Opportunity</h2>
              <p>
                The U.S. alone has 20,000+ marketing agencies managing digital presence for over 2 million businesses.
                With our solution, agencies can overcome their current scaling limitations while improving client
                results through AI-powered automation.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mt-8">
                <h3 className="text-xl font-bold mb-4">Key Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF1681] font-bold">•</span>
                    <span>Marketing agencies manage an average of 63 client business profiles simultaneously</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C939D6] font-bold">•</span>
                    <span>Agencies spend 15+ hours weekly per account on maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#7B5DFF] font-bold">•</span>
                    <span>SocialGenius reduces this to under 2 hours while improving performance metrics by 60%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#0080FF] font-bold">•</span>
                    <span>Our MVP development is complete with Google Business Profile integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF1681] font-bold">•</span>
                    <span>5 marketing agencies signed to our beta waitlist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C939D6] font-bold">•</span>
                    <span>Benchmarking tests show 97% time reduction for core management tasks</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#0080FF]">The Team</h2>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-2">Brian Martino (50%)</h3>
                  <p className="text-gray-600 mb-4">Chief Executive Officer</p>
                  <ul className="space-y-1 text-sm">
                    <li>8 years experience as Marketing Agency Director</li>
                    <li>Previously built and sold AgencyTools, a workflow management SaaS</li>
                    <li>MBA from University</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-2">Paul Backus (50%)</h3>
                  <p className="text-gray-600 mb-4">Chief Technology Officer</p>
                  <ul className="space-y-1 text-sm">
                    <li>Former AI Research Lead at Tech Company</li>
                    <li>Specialized in natural language processing</li>
                    <li>MS in Computer Science from University</li>
                    <li>Owns intellectual property for SocialGenius technology</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#FF1681]">Funding Request</h2>
              <p>
                We're seeking $1,500,000 in seed funding to complete our product development, launch our marketing and
                sales efforts, and build out our team. This funding provides 18 months of runway to achieve our key
                milestones.
              </p>

              <div className="bg-[#FF1681]/5 p-6 rounded-xl mt-8 border border-[#FF1681]/20">
                <h3 className="text-xl font-bold mb-4 text-[#FF1681]">Investment Allocation</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#FF1681]">$700,000</div>
                    <p className="text-sm text-gray-600">Product Development</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#C939D6]">$400,000</div>
                    <p className="text-sm text-gray-600">Marketing & Sales</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#7B5DFF]">$400,000</div>
                    <p className="text-sm text-gray-600">Operations & Team</p>
                  </div>
                </div>
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

