import Image from 'next/image'
import securityGuardImg from '@/public/guard.jpg' 

export default function Background() {
  return (
    <div className='relative w-full min-h-screen bg-gradient-to-bl from-black/0 to-gray-500/100 overflow-hidden z-[-10]'>
        <Image src={securityGuardImg} alt="security guard" className='min-h-screen w-auto object-cover absolute mix-blend-overlay' />
  </div>
  )
}
