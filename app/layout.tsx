import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const portfolioTitle = 'Kintali Swaramkal | BCA Undergraduate & Aspiring Software Developer'
const portfolioDescription = 'Kintali Swaramkal is a BCA undergraduate and aspiring software developer from Visakhapatnam interested in software development, web development, databases, networking and emerging technologies.'

export const metadata: Metadata = {
  title: portfolioTitle,
  description: portfolioDescription,
  applicationName: 'Kintali Swaramkal Portfolio',
  authors: [{ name: 'Kintali Swaramkal' }],
  creator: 'Kintali Swaramkal',
  keywords: [
    'Kintali Swaramkal',
    'BCA undergraduate',
    'aspiring software developer',
    'Visakhapatnam',
    'web development',
    'computer networking',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Kintali Swaramkal',
    title: portfolioTitle,
    description: portfolioDescription,
  },
  twitter: {
    card: 'summary',
    title: portfolioTitle,
    description: portfolioDescription,
  },
  icons: {
    icon: '/icon.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: '#090b08',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
