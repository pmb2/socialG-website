import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Download, Square } from "lucide-react"
import { InvestorHeader } from "@/components/investor-header"

export default function ImplementationChecklistPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(90deg, #FFA726 0%, #FF1681 25%, #C939D6 50%, #7B5DFF 75%, #0080FF 100%)",
      }}
    >
      {/* Header */}
      <InvestorHeader />

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <Link href="/investors">
              <Button variant="outline" className="rounded-full">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
            </Link>
            <Link href="/api/download/implementation-checklist">
              <Button className="rounded-full text-black border border-black bg-transparent hover:bg-transparent">
                Download PDF <Download className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold mb-4">Implementation Checklist</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#C939D6] to-[#7B5DFF] mx-auto"></div>
            </div>

            <div className="space-y-12">
              {/* Pre-Funding Checklist */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#C939D6]">Pre-Funding Checklist</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#C939D6] flex-shrink-0 mt-0.5" />
                      <span>Finalize documentation package with updated pricing and funding amounts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#C939D6] flex-shrink-0 mt-0.5" />
                      <span>Update pitch deck with revised financial projections</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#C939D6] flex-shrink-0 mt-0.5" />
                      <span>Refine Founder Agreement to reflect Paul Backus's IP ownership</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#C939D6] flex-shrink-0 mt-0.5" />
                      <span>Secure additional beta testers (target: 8 total)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#C939D6] flex-shrink-0 mt-0.5" />
                      <span>Complete trademark application for "SocialGenius"</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Immediate Post-Funding Checklist */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#7B5DFF]">
                  Immediate Post-Funding Checklist (First 30 Days)
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#7B5DFF] flex-shrink-0 mt-0.5" />
                      <span>Finalize incorporation and legal structure</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#7B5DFF] flex-shrink-0 mt-0.5" />
                      <span>Open company bank accounts</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#7B5DFF] flex-shrink-0 mt-0.5" />
                      <span>Set up accounting and financial tracking systems</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#7B5DFF] flex-shrink-0 mt-0.5" />
                      <span>Complete key technical hires (2 senior developers)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#7B5DFF] flex-shrink-0 mt-0.5" />
                      <span>Establish development environment and workflows</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#7B5DFF] flex-shrink-0 mt-0.5" />
                      <span>Finalize design specifications for MVP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 60-Day Checklist */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#0080FF]">60-Day Checklist</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#0080FF] flex-shrink-0 mt-0.5" />
                      <span>Complete Google Business Profile API integration</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#0080FF] flex-shrink-0 mt-0.5" />
                      <span>Develop core AI content generation module</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#0080FF] flex-shrink-0 mt-0.5" />
                      <span>Create basic analytics dashboard</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#0080FF] flex-shrink-0 mt-0.5" />
                      <span>Set up customer onboarding process</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#0080FF] flex-shrink-0 mt-0.5" />
                      <span>Establish hosting infrastructure</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#0080FF] flex-shrink-0 mt-0.5" />
                      <span>Develop content moderation workflows</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 90-Day Checklist */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#FF1681]">90-Day Checklist</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#FF1681] flex-shrink-0 mt-0.5" />
                      <span>Launch beta program with initial 5 agency partners</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#FF1681] flex-shrink-0 mt-0.5" />
                      <span>Implement feedback system for beta participants</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#FF1681] flex-shrink-0 mt-0.5" />
                      <span>Begin LinkedIn API integration development</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#FF1681] flex-shrink-0 mt-0.5" />
                      <span>Establish marketing website and initial content strategy</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#FF1681] flex-shrink-0 mt-0.5" />
                      <span>Create sales materials and demo environment</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#FF1681] flex-shrink-0 mt-0.5" />
                      <span>Develop performance benchmarking tools</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 6-Month Checklist */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#C939D6]">6-Month Checklist</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#C939D6] flex-shrink-0 mt-0.5" />
                      <span>Complete full Google Business Profile integration</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#C939D6] flex-shrink-0 mt-0.5" />
                      <span>Launch initial version to early adopters</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#C939D6] flex-shrink-0 mt-0.5" />
                      <span>Implement automated billing system</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#C939D6] flex-shrink-0 mt-0.5" />
                      <span>Complete initial LinkedIn integration</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#C939D6] flex-shrink-0 mt-0.5" />
                      <span>Establish customer success processes</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#C939D6] flex-shrink-0 mt-0.5" />
                      <span>Begin development of Facebook integration</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#C939D6] flex-shrink-0 mt-0.5" />
                      <span>Start building agency partnership program</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 12-Month Checklist */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#7B5DFF]">12-Month Checklist</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#7B5DFF] flex-shrink-0 mt-0.5" />
                      <span>Reach 60 paying agency customers</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#7B5DFF] flex-shrink-0 mt-0.5" />
                      <span>Complete integration of top 3 platforms (Google, LinkedIn, Facebook)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#7B5DFF] flex-shrink-0 mt-0.5" />
                      <span>Achieve $70k+ MRR</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#7B5DFF] flex-shrink-0 mt-0.5" />
                      <span>Expand team to 15 people</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#7B5DFF] flex-shrink-0 mt-0.5" />
                      <span>Develop enterprise features for larger agencies</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Square className="w-5 h-5 text-[#7B5DFF] flex-shrink-0 mt-0.5" />
                      <span>Begin Series A fundraising preparation</span>
                    </div>
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

