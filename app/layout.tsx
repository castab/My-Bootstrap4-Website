import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/SiteHeader'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })

export const metadata: Metadata = {
  title: 'Brayan Castaneda | Software Engineer',
  description: 'Static portfolio and resume site for Brayan Castaneda, focused on software engineering, pragmatic systems, and intentional UI.',
  icons: {
    icon: '/images/barIcon.png'
  }
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen overflow-hidden">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  )
}
