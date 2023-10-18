import { Button } from '@/components/ui/button'
import React from 'react'

import { QuestionForm } from './form'


export default function Quiz() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center mt-[5rem]'>
       
      <QuestionForm />

    </div>
  )
}
