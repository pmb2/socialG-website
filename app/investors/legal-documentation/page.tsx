import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { InvestorHeader } from "@/components/investor-header"

export default function LegalDocumentationPage() {
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
            <Link href="/api/download/legal-documentation">
              <Button className="rounded-full text-black border border-black bg-transparent hover:bg-transparent">
                Download PDF <Download className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold mb-4">Legal Documentation</h1>
              <div className="h-1 w-24 bg-gradient-to-r from-[#7B5DFF] to-[#0080FF] mx-auto"></div>
            </div>

            <div className="space-y-12">
              {/* Certificate of Incorporation */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#7B5DFF]">Certificate of Incorporation</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="prose prose-sm max-w-none">
                    <p className="font-bold text-center mb-4">
                      CERTIFICATE OF INCORPORATION
                      <br />
                      OF
                      <br />
                      SOCIALGENIUS, INC.
                    </p>

                    <p>
                      <strong>FIRST:</strong> The name of this corporation is SocialGenius, Inc. (the "Corporation").
                    </p>

                    <p>
                      <strong>SECOND:</strong> The address of the registered office of the Corporation in the State of
                      Delaware is [Address]. The name of its registered agent at such address is [Registered Agent
                      Name].
                    </p>

                    <p>
                      <strong>THIRD:</strong> The purpose of the Corporation is to engage in any lawful act or activity
                      for which corporations may be organized under the General Corporation Law of Delaware.
                    </p>

                    <p>
                      <strong>FOURTH:</strong> The total number of shares of stock which the Corporation shall have
                      authority to issue is 10,000,000 shares of Common Stock, each with a par value of $0.00001 per
                      share. Additionally, the Corporation shall have authority to issue 2,000,000 shares of Preferred
                      Stock, each with a par value of $0.00001 per share.
                    </p>

                    <p>
                      <strong>FIFTH:</strong> The name and mailing address of the incorporator is [Incorporator Name],
                      [Address].
                    </p>

                    <p>
                      <strong>SIXTH:</strong> Unless and except that the bylaws of the Corporation shall so require, the
                      election of directors of the Corporation need not be by written ballot.
                    </p>

                    <p>
                      <strong>SEVENTH:</strong> To the fullest extent permitted by the Delaware General Corporation Law,
                      a director of the Corporation shall not be personally liable to the Corporation or its
                      stockholders for monetary damages for breach of fiduciary duty as a director.
                    </p>

                    <p>
                      <strong>EIGHTH:</strong> The Corporation reserves the right to amend, alter, change or repeal any
                      provision contained in this Certificate of Incorporation, in the manner now or hereafter
                      prescribed by statute, and all rights conferred upon stockholders herein are granted subject to
                      this reservation.
                    </p>

                    <p className="text-center mt-6">
                      IN WITNESS WHEREOF, I have hereunto set my hand this [Date], 2025.
                    </p>

                    <p className="text-center">
                      [Incorporator Signature]
                      <br />
                      [Incorporator Name], Incorporator
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Bylaws */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#0080FF]">Company Bylaws</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="prose prose-sm max-w-none">
                    <p className="font-bold text-center mb-4">
                      BYLAWS OF SOCIALGENIUS, INC.
                      <br />A Delaware Corporation
                    </p>

                    <p>
                      <strong>ARTICLE I - OFFICES</strong>
                    </p>

                    <p>
                      <strong>Section 1. Registered Office.</strong> The registered office shall be in the City of
                      [City], County of [County], State of Delaware.
                    </p>

                    <p>
                      <strong>Section 2. Other Offices.</strong> The corporation may also have offices at such other
                      places both within and without the State of Delaware as the Board of Directors may from time to
                      time determine or the business of the corporation may require.
                    </p>

                    <p>
                      <strong>ARTICLE II - STOCKHOLDERS</strong>
                    </p>

                    <p>
                      <strong>Section 1. Annual Meetings.</strong> An annual meeting of stockholders shall be held each
                      year on a date and at a time designated by the Board of Directors for the purpose of electing
                      directors and conducting such other business as may properly come before the meeting.
                    </p>

                    <p>
                      <strong>Section 2. Special Meetings.</strong> Special meetings of the stockholders, for any
                      purpose or purposes, unless otherwise prescribed by statute or by the Certificate of
                      Incorporation, may be called by the President and shall be called by the President or Secretary at
                      the request in writing of a majority of the Board of Directors, or at the request in writing of
                      stockholders owning a majority in amount of the entire capital stock of the corporation issued and
                      outstanding and entitled to vote.
                    </p>

                    <p className="text-center text-gray-500 italic">
                      [Additional standard sections covering voting, quorum, board composition, officers,
                      indemnification, etc. would follow]
                    </p>
                  </div>
                </div>
              </div>

              {/* Intellectual Property Protection Plan */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#FF1681]">Intellectual Property Protection Plan</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="prose prose-sm max-w-none">
                    <p className="font-bold text-center mb-4">
                      INTELLECTUAL PROPERTY PROTECTION STRATEGY
                      <br />
                      SOCIALGENIUS, INC.
                    </p>

                    <p>
                      <strong>1. TRADEMARK PROTECTION</strong>
                    </p>

                    <p>
                      Application Filed: March 5, 2025
                      <br />
                      Mark: "SOCIALGENIUS"
                      <br />
                      Classes:
                    </p>
                    <ul>
                      <li>Class 9: Computer software for business profile management</li>
                      <li>Class 35: Business management services</li>
                      <li>Class 42: Software as a service (SaaS)</li>
                    </ul>

                    <p>Additional Protection:</p>
                    <ul>
                      <li>"SocialGenius" logo trademark application</li>
                      <li>Tagline "AI-Powered Brand Management" trademark application</li>
                      <li>Domain names secured: socialgenius.com, socialgenius.io, socialgenius.ai</li>
                    </ul>

                    <p>
                      <strong>2. PATENT APPLICATIONS</strong>
                    </p>

                    <p>
                      Provisional Patent Application: "System and Method for Automated Business Profile Management Using
                      Artificial Intelligence"
                    </p>
                    <ul>
                      <li>Filed: February 28, 2025</li>
                      <li>Inventor: Paul Backus</li>
                      <li>
                        Key Claims:
                        <ol type="a">
                          <li>
                            Method for preserving brand voice across multiple digital platforms using machine learning
                          </li>
                          <li>System for automated competitive analysis of business profiles</li>
                          <li>Method for cross-platform content optimization based on engagement metrics</li>
                        </ol>
                      </li>
                    </ul>

                    <p>Provisional Patent Application: "AI-Based Brand Voice Analysis and Replication System"</p>
                    <ul>
                      <li>Filing Scheduled: April 2025</li>
                      <li>Inventor: Paul Backus</li>
                      <li>
                        Key Innovation: Proprietary algorithm for extracting and replicating brand voice characteristics
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Founder Agreement */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-[#C939D6]">Founder Agreement</h2>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="prose prose-sm max-w-none">
                    <p className="font-bold text-center mb-4">
                      FOUNDER AGREEMENT
                      <br />
                      SOCIALGENIUS, INC.
                    </p>

                    <p>
                      This Founder Agreement (the "Agreement") is made as of [Date], 2025 by and between Brian Martino
                      (50%) and Paul Backus (50%) (collectively, the "Founders") in connection with the formation and
                      operation of SocialGenius, Inc., a Delaware corporation (the "Company").
                    </p>

                    <p>
                      <strong>1. EQUITY ALLOCATION</strong>
                    </p>

                    <p>The Founders agree that the Company's equity shall be initially allocated as follows:</p>
                    <ul>
                      <li>Brian Martino: 5,000,000 shares (50%)</li>
                      <li>Paul Backus: 5,000,000 shares (50%)</li>
                    </ul>

                    <p>
                      <strong>2. INTELLECTUAL PROPERTY RIGHTS</strong>
                    </p>

                    <p>
                      Paul Backus exclusively owns all intellectual property rights to the SocialGenius technology,
                      including but not limited to patents, copyrights, trade secrets, and other proprietary information
                      developed prior to or during the formation of the Company. Paul Backus hereby grants to the
                      Company an exclusive, worldwide, royalty-free license to use, modify, and commercialize such
                      intellectual property for the Company's business purposes.
                    </p>

                    <p>
                      <strong>3. VESTING SCHEDULE</strong>
                    </p>

                    <p>All Founder shares shall be subject to the following vesting schedule:</p>
                    <ul>
                      <li>25% vested after 12 months from the Effective Date (cliff)</li>
                      <li>Remaining 75% vesting monthly over the following 36 months</li>
                      <li>Accelerated vesting upon acquisition of the Company</li>
                    </ul>

                    <p className="text-center text-gray-500 italic">
                      [Additional sections covering roles, responsibilities, dispute resolution, etc. would follow]
                    </p>
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

