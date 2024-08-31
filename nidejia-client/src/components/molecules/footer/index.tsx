import Link from 'next/link'
import Menu from './menu'
import DataMenu from '@/json/footer-menu.json'
import { Input } from '@/components/atomics/input'
import { Button } from '@/components/atomics/button'
import Image from 'next/image'
import { Separator } from '@/components/atomics/separator'

function Footer() {
  return (
    <footer className='bg-secondary'>
      <div className='container mx-auto py-[100px]'>
        <div className='grid grid-cols-5'>
          <Menu
            title='Solutions'
            data={DataMenu.data.solutions}
          />
          <Menu
            title='Product'
            data={DataMenu.data.product}
          />
          <Menu
            title='Company'
            data={DataMenu.data.company}
          />
          <div className='col-span-2 text-white'>
            <span className='font-semibold leading-6'>
              Subscribe & Free Rewards
            </span>
            <div className='relative mt-3'>
              <Input
                type='text'
                placeholder='Email Address'
                icon='/icons/sms.svg'
                variant='footer'
                className=''
              />
              <Button
                variant='default'
                size='footer'
                className='absolute right-0 top-0'
              >
                Subscribe
              </Button>
            </div>
            <div className='mt-[30px] space-y-3'>
              <span className='font-semibold leading-6'>
                Choose Language
              </span>
              <div className='flex items-center space-x-2.5'>
                <Image
                  src='/images/uk.svg'
                  alt='UK'
                  height={0}
                  width={0}
                  className='w-[26.67px] h-5'
                />
                <span className='leading-6'>
                  English (UK)
                </span>
                <Image
                  src='/icons/arrow-down.svg'
                  alt='arrow'
                  height={0}
                  width={0}
                  className='w-[18px] h-[18px]'
                />
              </div>
            </div>
          </div>
        </div>
        <Separator className='my-[50px] bg-separator-foreground'/>
        <div className='flex items-center justify-between'>
          <Image
            src='/images/logo-white.svg'
            alt='nidejia'
            height={36}
            width={133}
          />
          <span className='leading-6 text-white'>  
            All Rights Reserved Nidejia BuildWithAngga 2024
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
