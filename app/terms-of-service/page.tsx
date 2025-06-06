"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader />

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-start items-center mb-8">
            <Link href="/">
              <Button variant="outline" className="rounded-full">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#C939D6] to-[#FF1681] mx-auto"></div>
              <p className="mt-4 text-gray-500">Effective Date: 6/4/2025</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                Welcome to SocialGenius. By using our service, you agree to the following terms:
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#FF1681]">1. Use of Service</h2>
              <p>
                You agree to use the platform only for lawful business or marketing purposes related to your social media accounts.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#C939D6]">2. Account Responsibility</h2>
              <p>
                You are responsible for maintaining the security and confidentiality of your login credentials and connected social accounts.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#7B5DFF]">3. Content Ownership</h2>
              <p>
                You retain ownership of any content you post through our platform. We do not claim any rights over your media or data.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#0080FF]">4. Restrictions</h2>
              <p>You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the platform to post prohibited or unlawful content</li>
                <li>Attempt to gain unauthorized access to other users' data</li>
                <li>Resell or redistribute access to SocialGenius</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#FF1681]">5. Termination</h2>
              <p>
                We reserve the right to suspend or terminate accounts that violate these terms.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#C939D6]">6. Limitation of Liability</h2>
              <p>
                We provide the service "as-is" and are not liable for platform downtimes, API changes by Meta, or third-party misuse.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#7B5DFF]">7. Contact</h2>
              <p>
                For support or questions: <a href="mailto:support@social-genius.com" className="text-[#7B5DFF] hover:underline">support@social-genius.com</a>
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mt-8">
                <h3 className="text-xl font-bold mb-4">Additional Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy-policy" className="text-[#0080FF] hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/data-deletion" className="text-[#0080FF] hover:underline">
                      Data Deletion Instructions
                    </Link>
                  </li>
                </ul>
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
