import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
      <body className={`${inter.className} bg-zinc-100 text-gray-500 min-h-screen antialiased grainy text-gray-200`}>
        
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
