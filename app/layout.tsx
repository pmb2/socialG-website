import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SocialGenius - AI-Powered Social Media Automation for Agencies & SMBs',
  description: 'Scale your social presence with AI social media automation. Perfect for marketing agencies and SMBs. Automate content creation, reviews, and scheduling across platforms.',
  keywords: 'AI social media automation, agency SaaS platform, SMB social media management, automated content creation, social media scheduling, review management, white label social media, marketing automation for agencies',
  authors: [{ name: 'SocialGenius, LLC' }],
  generator: 'SocialGenius',
  openGraph: {
    title: 'SocialGenius - The Genius Way to Scale Your Social Presence',
    description: 'AI-powered social media automation platform for agencies and SMBs. Automate content, reviews, and scheduling.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
