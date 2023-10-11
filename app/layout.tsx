import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Background from '@/components/background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Primus',
  description: 'Primus Private Security Training Institute',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-gray-200 min-h-screen antialiased grainy`}>
        <Background />
        
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
