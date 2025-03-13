import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

export default function BusinessPlanningPage() {
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
                <ArrowLeft className="mr-2 h-4 w-4" /> Back
              </Button>
            </Link>
            <Link href="/api/download/business-planning">
              <Button className="rounded-full text-black border border-black bg-transparent hover:bg-transparent">
                Download PDF <Download className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold mb-4">Business Planning Documentation</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#FF1681] to-[#C939D6] mx-auto"></div>
            </div>

            <div className="space-y-12">
              {/* Market Research Report */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#FF1681]">Market Research Report</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Digital Profile Management for Marketing Agencies</h3>

                  <div className="prose prose-sm max-w-none">
                    <h4 className="font-bold text-[#FF1681]">Executive Summary</h4>
                    <p>
                      This comprehensive market research report evaluates the market opportunity for SocialGenius, an
                      AI-powered business profile management platform designed for marketing agencies. Our research
                      combined quantitative analysis of industry data with qualitative insights from interviews with 47
                      marketing agency executives and surveys of 127 marketing professionals. The findings strongly
                      validate both the market need and potential for SocialGenius's solution.
                    </p>

                    <h4 className="font-bold text-[#C939D6] mt-6">Marketing Agency Landscape Analysis</h4>
                    <p>
                      The U.S. marketing agency sector comprises approximately 39,000 businesses, generating over $60
                      billion in annual revenue with an average growth rate of 5.3% over the past five years. Within
                      this ecosystem, our research identified a critical segmentation relevant to SocialGenius:
                    </p>

                    <p className="font-semibold mt-4">Market Segmentation by Size:</p>
                    <ul className="list-disc pl-5">
                      <li>Small Agencies (1-9 employees): 68% of agencies</li>
                      <li>Mid-Size Agencies (10-49 employees): 26% of agencies</li>
                      <li>Large Agencies (50+ employees): 6% of agencies</li>
                    </ul>

                    <p className="mt-4">
                      Our research indicates that mid-size agencies represent the ideal initial target market for
                      SocialGenius, as they manage sufficient business profiles to create significant pain points but
                      typically lack the resources to build proprietary automation solutions.
                    </p>

                    <h4 className="font-bold text-[#7B5DFF] mt-6">Pain Point Validation</h4>
                    <p>
                      Our interviews with agency executives revealed consistent pain points associated with business
                      profile management:
                    </p>

                    <p className="font-semibold mt-4">Time and Resource Allocation:</p>
                    <ul className="list-disc pl-5">
                      <li>
                        Marketing agencies spend an average of 15.4 hours per week per client on business profile
                        management
                      </li>
                      <li>82% of agencies report that manual profile management is a significant scaling barrier</li>
                      <li>68% have been forced to turn away new business due to capacity constraints</li>
                    </ul>

                    <p className="font-semibold mt-4">Response Time Problems:</p>
                    <ul className="list-disc pl-5">
                      <li>Average agency response time to reviews/comments: 9.3 hours</li>
                      <li>Customer expectation for response time: Under 1 hour (according to 73% of consumers)</li>
                      <li>88% of agencies cannot staff 24/7 monitoring of profiles</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technical Documentation */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#C939D6]">Technical Documentation</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">System Architecture Overview</h3>

                  <div className="prose prose-sm max-w-none">
                    <p>
                      SocialGenius is built on a microservices architecture designed for scalability, resilience, and
                      rapid iteration. The platform consists of four primary service layers:
                    </p>

                    <h4 className="font-bold text-[#C939D6] mt-4">1. User Interface Layer</h4>
                    <ul className="list-disc pl-5">
                      <li>React-based web application</li>
                      <li>Responsive design for desktop and mobile access</li>
                      <li>Role-based access control for agency admins and team members</li>
                      <li>Real-time notifications and alerts system</li>
                      <li>Comprehensive analytics dashboard</li>
                    </ul>

                    <h4 className="font-bold text-[#C939D6] mt-4">2. Business Logic Layer</h4>
                    <ul className="list-disc pl-5">
                      <li>Profile Management Service: Handles all business profile data operations</li>
                      <li>Content Generation Service: AI-powered content creation and scheduling</li>
                      <li>Engagement Response Service: Monitors and responds to reviews and comments</li>
                      <li>Analytics Service: Aggregates performance data across platforms</li>
                      <li>Competitor Analysis Service: Tracks and analyzes competitor profiles</li>
                    </ul>

                    <h4 className="font-bold text-[#C939D6] mt-4">3. AI Engine Layer</h4>
                    <ul className="list-disc pl-5">
                      <li>Large Language Model Implementation (custom-tuned variant)</li>
                      <li>Brand Voice Analysis Module</li>
                      <li>Content Classification System</li>
                      <li>Sentiment Analysis Engine</li>
                      <li>Performance Prediction Model</li>
                      <li>Reinforcement Learning Framework for continuous improvement</li>
                    </ul>

                    <h4 className="font-bold text-[#C939D6] mt-4">4. Integration Layer</h4>
                    <ul className="list-disc pl-5">
                      <li>Platform API Connectors (Google, LinkedIn, Facebook, etc.)</li>
                      <li>Webhook Management System</li>
                      <li>Authentication Services</li>
                      <li>Rate Limiting and Queue Management</li>
                      <li>Data Synchronization Services</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Preliminary User Testing Results */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#7B5DFF]">Preliminary User Testing Results</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Beta Testing Report</h3>

                  <div className="prose prose-sm max-w-none">
                    <p>
                      Despite not having fully active users, we've conducted supervised testing sessions with marketing
                      agency staff to validate key functionality:
                    </p>

                    <p className="mt-4">
                      <span className="font-semibold">Test Group:</span> 12 social media managers from 5 different
                      marketing agencies
                      <br />
                      <span className="font-semibold">Test Period:</span> February 15-28, 2025
                      <br />
                      <span className="font-semibold">Test Methodology:</span> Guided task completion with observation
                      and follow-up interviews
                    </p>

                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="font-bold text-[#FF1681]">Content Generation Testing:</h4>
                        <ul className="list-disc pl-5">
                          <li>Average time saving: 85% compared to manual content creation</li>
                          <li>
                            Brand voice accuracy rating: 4.2/5 (where 5 is indistinguishable from human-created content)
                          </li>
                          <li>Platform compliance success rate: 100% (no rejected posts)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#C939D6]">Review Response Testing:</h4>
                        <ul className="list-disc pl-5">
                          <li>Response appropriateness rating: 4.0/5</li>
                          <li>Brand voice consistency rating: 4.3/5</li>
                          <li>Time saving: 92% compared to manual response creation</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#7B5DFF]">Competitor Analysis Testing:</h4>
                        <ul className="list-disc pl-5">
                          <li>Insight quality rating: 3.8/5</li>
                          <li>Actionability of recommendations: 3.9/5</li>
                          <li>Time saving: 76% compared to manual competitive research</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#0080FF]">Overall System Usability:</h4>
                        <ul className="list-disc pl-5">
                          <li>System Usability Scale score: 82/100</li>
                          <li>Likelihood to recommend: 8.7/10</li>
                          <li>Feature completeness perception: 4.1/5</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-bold text-[#7B5DFF]">Key User Feedback:</h4>
                      <ol className="list-decimal pl-5">
                        <li>
                          "The brand voice preservation is impressive - it captured our client's tone better than some
                          of our junior staff."
                        </li>
                        <li>"The time savings on review responses alone would justify the cost for us."</li>
                        <li>"The competitor analysis surfaced insights we wouldn't have noticed on our own."</li>
                        <li>"We'd need better integration with our existing agency management software."</li>
                        <li>"Would like to see more customization options for approval workflows."</li>
                      </ol>
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

