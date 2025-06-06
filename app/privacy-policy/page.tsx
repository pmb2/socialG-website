"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function PrivacyPolicyPage() {
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
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#FF1681] to-[#7B5DFF] mx-auto"></div>
              <p className="mt-4 text-gray-500">Effective Date: 6/4/2025</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                SocialGenius ("we," "our," or "us") values your privacy. This Privacy Policy outlines how we collect, use, 
                and protect the personal information of users who interact with our platform, including those who log in 
                via Facebook and Instagram APIs.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#FF1681]">1. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Public profile data (e.g., name, profile picture, username)</li>
                <li>Instagram business account content (e.g., photos, videos, captions)</li>
                <li>Page management data (e.g., posts, comments, insights)</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#C939D6]">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To display your social content in the dashboard</li>
                <li>To allow post creation, scheduling, and publishing</li>
                <li>To show performance insights and allow comment/DM management</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#7B5DFF]">3. How We Protect Your Information</h2>
              <p>
                We use industry-standard security practices and never share or sell your data to third parties.
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#0080FF]">4. Your Rights</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may revoke app permissions through your Facebook or Instagram settings at any time.</li>
                <li>You can request deletion of your data by following the instructions at: <Link href="/data-deletion" className="text-[#0080FF] hover:underline">https://www.social-genius.com/data-deletion</Link></li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-[#FF1681]">5. Contact Us</h2>
              <p>
                For questions about this policy, contact: <a href="mailto:support@social-genius.com" className="text-[#FF1681] hover:underline">support@social-genius.com</a>
              </p>
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
