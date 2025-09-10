import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SocialGenius - Social Media Management',
  description: 'AI-Powered Automation for Agencies',
  generator: 'SocialGenius',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
