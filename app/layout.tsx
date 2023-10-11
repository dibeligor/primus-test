import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import securityGuardImg from '@/public/guard.jpg' 

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
        <Image src={securityGuardImg} alt="seurity guard" className='z-[-20]'/>
        <div className="w-full h-full bg-gradient-to-r from-black/0 to-black/100 absolute top-0 "></div>
        <div className="w-full h-full bg-gradient-to-b from-black/100 to-black/10 absolute top-0 "></div>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
