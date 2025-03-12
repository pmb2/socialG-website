import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"

export default function FinancialDocumentationPage() {
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
            <Link href="/api/download/financial-documentation">
              <Button className="rounded-full text-black border border-black bg-transparent hover:bg-transparent">
                Download PDF <Download className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold mb-4">Financial Documentation</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#0080FF] to-[#FF1681] mx-auto"></div>
            </div>

            <div className="space-y-12">
              {/* Detailed Financial Model */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#0080FF]">Detailed Financial Model</h2>
                <p className="text-gray-600 mb-6">5-Year forecast with detailed revenue and expense projections</p>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">Revenue Assumptions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Customer Segments:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Starter: $199/month per profile (1-10 locations)</li>
                        <li>Professional: $169/month per profile (11-50 locations)</li>
                        <li>Business: $119/month per profile (51-250 locations)</li>
                        <li>Enterprise: Custom pricing (251+ locations)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Customer Distribution:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Year 1: 50% Basic, 40% Professional, 10% Business</li>
                        <li>Year 2: 30% Basic, 50% Professional, 20% Business</li>
                        <li>Year 3: 20% Basic, 50% Professional, 30% Business</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Annual Customer Growth:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Year 1: 5 new customers per month</li>
                        <li>Year 2: 10 new customers per month</li>
                        <li>Year 3: 15 new customers per month</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b text-left">Metric</th>
                        <th className="py-2 px-4 border-b text-right">Year 1</th>
                        <th className="py-2 px-4 border-b text-right">Year 2</th>
                        <th className="py-2 px-4 border-b text-right">Year 3</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">Total Customers</td>
                        <td className="py-2 px-4 border-b text-right">70</td>
                        <td className="py-2 px-4 border-b text-right">190</td>
                        <td className="py-2 px-4 border-b text-right">370</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Annual Revenue</td>
                        <td className="py-2 px-4 border-b text-right">$646,875</td>
                        <td className="py-2 px-4 border-b text-right">$3,217,500</td>
                        <td className="py-2 px-4 border-b text-right">$8,510,625</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Gross Profit</td>
                        <td className="py-2 px-4 border-b text-right">$465,750</td>
                        <td className="py-2 px-4 border-b text-right">$2,509,650</td>
                        <td className="py-2 px-4 border-b text-right">$6,893,606</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Gross Margin</td>
                        <td className="py-2 px-4 border-b text-right">72%</td>
                        <td className="py-2 px-4 border-b text-right">78%</td>
                        <td className="py-2 px-4 border-b text-right">81%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Operating Expenses</td>
                        <td className="py-2 px-4 border-b text-right">$652,400</td>
                        <td className="py-2 px-4 border-b text-right">$2,105,000</td>
                        <td className="py-2 px-4 border-b text-right">$5,106,375</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">EBITDA</td>
                        <td className="py-2 px-4 border-b text-right">($186,650)</td>
                        <td className="py-2 px-4 border-b text-right">$404,650</td>
                        <td className="py-2 px-4 border-b text-right">$1,787,231</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Net Income</td>
                        <td className="py-2 px-4 border-b text-right">($186,650)</td>
                        <td className="py-2 px-4 border-b text-right">$323,720</td>
                        <td className="py-2 px-4 border-b text-right">$1,429,785</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Unit Economics</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-2 px-4 border-b text-left">Metric</th>
                          <th className="py-2 px-4 border-b text-right">Year 1</th>
                          <th className="py-2 px-4 border-b text-right">Year 2</th>
                          <th className="py-2 px-4 border-b text-right">Year 3</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b">Customer Acquisition Cost</td>
                          <td className="py-2 px-4 border-b text-right">$950</td>
                          <td className="py-2 px-4 border-b text-right">$900</td>
                          <td className="py-2 px-4 border-b text-right">$850</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b">Lifetime Value (LTV)</td>
                          <td className="py-2 px-4 border-b text-right">$14,400</td>
                          <td className="py-2 px-4 border-b text-right">$16,200</td>
                          <td className="py-2 px-4 border-b text-right">$18,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b">LTV:CAC Ratio</td>
                          <td className="py-2 px-4 border-b text-right">15.2:1</td>
                          <td className="py-2 px-4 border-b text-right">18:1</td>
                          <td className="py-2 px-4 border-b text-right">21.2:1</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b">Months to Recover CAC</td>
                          <td className="py-2 px-4 border-b text-right">14</td>
                          <td className="py-2 px-4 border-b text-right">11</td>
                          <td className="py-2 px-4 border-b text-right">9</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Cap Table */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#FF1681]">Cap Table</h2>
                <p className="text-gray-600 mb-6">Current and projected ownership structure</p>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">Pre-Investment Ownership</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-2 px-4 border-b text-left">Shareholder</th>
                          <th className="py-2 px-4 border-b text-right">Common Shares</th>
                          <th className="py-2 px-4 border-b text-right">% Ownership</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b">Brian Martino (CEO)</td>
                          <td className="py-2 px-4 border-b text-right">5,000,000</td>
                          <td className="py-2 px-4 border-b text-right">50.00%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b">Paul Backus (CTO)</td>
                          <td className="py-2 px-4 border-b text-right">5,000,000</td>
                          <td className="py-2 px-4 border-b text-right">50.00%</td>
                        </tr>
                        <tr className="font-bold">
                          <td className="py-2 px-4 border-b">Total</td>
                          <td className="py-2 px-4 border-b text-right">10,000,000</td>
                          <td className="py-2 px-4 border-b text-right">100.00%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-bold mb-4">Post-Seed Round Ownership</h3>
                  <p className="text-gray-600 mb-4">Assuming $1,500,000 at $5M pre-money valuation</p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="py-2 px-4 border-b text-left">Shareholder</th>
                          <th className="py-2 px-4 border-b text-right">Shares</th>
                          <th className="py-2 px-4 border-b text-right">% Ownership</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2 px-4 border-b">Brian Martino (CEO)</td>
                          <td className="py-2 px-4 border-b text-right">5,000,000</td>
                          <td className="py-2 px-4 border-b text-right">41.67%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b">Paul Backus (CTO)</td>
                          <td className="py-2 px-4 border-b text-right">5,000,000</td>
                          <td className="py-2 px-4 border-b text-right">41.67%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b">Employee Option Pool</td>
                          <td className="py-2 px-4 border-b text-right">2,000,000</td>
                          <td className="py-2 px-4 border-b text-right">16.67%</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 border-b">Seed Investors</td>
                          <td className="py-2 px-4 border-b text-right">3,000,000</td>
                          <td className="py-2 px-4 border-b text-right">25.00%</td>
                        </tr>
                        <tr className="font-bold">
                          <td className="py-2 px-4 border-b">Total</td>
                          <td className="py-2 px-4 border-b text-right">15,000,000</td>
                          <td className="py-2 px-4 border-b text-right">100.00%</td>
                        </tr>
                      </tbody>
                    </table>
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

