"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function DataDeletionPage() {
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
              <h1 className="text-4xl font-bold mb-4">Data Deletion Instructions</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#7B5DFF] to-[#0080FF] mx-auto"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p>
                If you wish to delete your data associated with SocialGenius, please follow these instructions:
              </p>

              <div className="bg-gray-50 p-6 rounded-xl my-8">
                <ol className="list-decimal pl-6 space-y-4">
                  <li>Send an email to: <a href="mailto:support@social-genius.com" className="text-[#7B5DFF] font-semibold hover:underline">support@social-genius.com</a></li>
                  <li>Include the subject line: <span className="font-semibold">Data Deletion Request</span></li>
                  <li>In your message, include the email address connected to your Facebook or Instagram account</li>
                </ol>
                
                <p className="mt-4">
                  We will respond within 5 business days to confirm deletion.
                </p>
              </div>

              <p>
                Alternatively, you may revoke app permissions through your Facebook/Instagram account settings, which removes all future access.
              </p>

              <div className="bg-[#0080FF]/10 p-6 rounded-xl mt-8 border border-[#0080FF]/20">
                <h3 className="text-xl font-bold mb-4 text-[#0080FF]">How to Revoke App Permissions</h3>
                
                <h4 className="font-bold mt-4 mb-2">For Facebook:</h4>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Go to your Facebook account settings</li>
                  <li>Select "Apps and Websites"</li>
                  <li>Find SocialGenius in the list</li>
                  <li>Click "Remove" to revoke permissions</li>
                </ol>

                <h4 className="font-bold mt-4 mb-2">For Instagram:</h4>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Go to your Instagram profile</li>
                  <li>Tap the menu icon and select "Settings"</li>
                  <li>Select "Security" then "Apps and Websites"</li>
                  <li>Find SocialGenius and select "Remove"</li>
                </ol>
              </div>

              <p className="mt-8">
                If you have any questions about the data deletion process, please contact our support team at <a href="mailto:support@social-genius.com" className="text-[#7B5DFF] hover:underline">support@social-genius.com</a>.
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
