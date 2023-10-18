import Image from 'next/image'
import securityGuardImg from '@/public/guard.jpg' 

export default function Background() {
  return (
    <div className='relative w-full min-h-screen bg-gradient-to-b from-black to-gray-500/100 z-[-10] overflow-hidden'>
        <Image src={securityGuardImg} alt="security guard" className='min-h-screen w-auto object-cover absolute mix-blend-overlay ' />
  </div>
  )
}
