import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'

export default function Header() {
  return (
    <header className='fixed top-0 border-b border-gray-800 border-opacity-40 h-[4.5rem] w-full shadow-md shadow-gray-700/[0.05] backdrop-blur-[0.2rem]'>
        <nav className='flex justify-between items-center h-full mx-[2rem] sm:mx-[4rem] '>
            <div className='flex items-center'>
              <Link href="/" className={`${buttonVariants()} opacity-50 hover:bg-gray-700`}>
                <h1>Logo</h1>
              </Link>
              <h1 className='ml-[1rem]'>Primus Private Security Training Institute</h1>
            </div>
            <h1>Sign-in</h1>
        </nav>
        
    </header>
  )
}
