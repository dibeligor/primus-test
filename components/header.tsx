import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/logo.svg'

export default function Header() {
  return (
    <header className='fixed py-[3px] top-0 border-b border-gray-800 border-opacity-40 w-full shadow-md shadow-gray-700/[0.05] backdrop-blur-[0.2rem]'>
        <nav className='flex justify-between items-center h-full mx-[2rem] sm:mx-[4rem] '>
            <div className='flex items-center'>
              <Link href="/" className="opacity-50 hover:bg-gray-700">
                <Image src={Logo} width={30} alt="company logo" />
              </Link>
              <h1 className='hidden md:block ml-[5px]'>Primus Private Security Training Institute</h1>
            </div>
            <div>
              <Link href="/quiz" className="hover:text-lg transition text-center">
                <h1 className='font-bold'>QUIZ</h1>
              </Link>
            </div>
            <div className='w-1/4 flex justify-end'>
             
              <Link href="/" className="hover:text-lg transition">
                <h1>Sign-in</h1>
              </Link>
             
            </div>
        </nav>
        
    </header>
  )
}
