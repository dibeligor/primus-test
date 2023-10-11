import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'
import Image from 'next/image'
import Logo from '@/public/logo.svg'

export default function Header() {
  return (
    <header className='fixed top-0 border-b border-gray-800 border-opacity-40 h-[4.5rem] w-full shadow-md shadow-gray-700/[0.05] backdrop-blur-[0.2rem]'>
        <nav className='flex justify-between items-center h-full mx-[2rem] sm:mx-[4rem] '>
            <div className='flex items-center'>
              <Link href="/" className="opacity-50 hover:bg-gray-700">
                <Image src={Logo} className='fill-fff' alt="company logo" />
              </Link>
              <h1 className='hidden sm:block ml-[1rem]'>Primus Private Security Training Institute</h1>
            </div>
      
            <Link href="/" className={`${buttonVariants()} opacity-50 hover:bg-gray-700`}>
                <h1>Sign-in</h1>
            </Link>
        </nav>
        
    </header>
  )
}
