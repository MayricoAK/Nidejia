import { Button } from '@/components/atomics/button'
import Title from '@/components/atomics/title'
import Image from 'next/image'
import React from 'react'

const CardEmpty = () => {
  return (
    <>
      <section id='card-section' className='container mx-auto max-w-[451px] min-h-[358px] mb-[150px] space-y-5 rounded-[30px] bg-white border border-border shadow-indicator p-[30px]'>
        <Image
          src={'/images/empty.svg'}
          alt='empty-image'
          width={0}
          height={0}
          className='w-[120px] h-[90px] mx-auto'
        />
        <Title
          section='empty'
          title='Oops! No Transaction'
          subtitle='You need to add at least one transaction today'
        />
        <div className='!mt-20'>
        </div>
        
      </section>
    </>
  )
}

export default CardEmpty