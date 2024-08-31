import { Button } from '@/components/atomics/button'
import Image from 'next/image'

function CardOverview({
  image,
  title,
  location,
  wide,
  capacity,
  wifi
} : {
  image: string
  title: string
  location: string
  wide: string
  capacity: number
  wifi: number
}) {
  return (
    <figure className='flex items-center justify-between bg-white rounded-3xl p-4 border border-border shadow-indicator'>
      <div className='flex items-center space-x-4'>
        <Image
          src={image}
          alt={title}
          height={0}
          width={0}
          className='w-[120px] h-[90px] rounded-2xl'
        />

        <div>
          <h1 className='font-bold leading-8 text-secondary'>
            { title }
          </h1>
          <div className='mt-1 flex flex-wrap gap-x-5 gap-y-2.5'>
            <div className='flex items-center text-sm font-semibold leading-[21px]'>
              <Image
                src='/icons/location-dark.svg'
                alt='location-dark'
                height={0}
                width={0}
                className='w-5 h-5 mr-1'
              />
              { location }
            </div>
            <div className='flex items-center text-sm font-semibold leading-[21px]'>
              <Image
                src='/icons/format-square-dark.svg'
                alt='format-square-dark'
                height={0}
                width={0}
                className='w-5 h-5 mr-1'
              />
              { wide } sqft
            </div>
            <div className='flex items-center text-sm font-semibold leading-[21px]'>
              <Image
                src='/icons/profile-2user-dark.svg'
                alt='profile-2user-dark'
                height={0}
                width={0}
                className='w-5 h-5 mr-1'
              />
              { capacity } people
            </div>
            <div className='flex items-center text-sm font-semibold leading-[21px]'>
              <Image
                src='/icons/wifi-dark.svg'
                alt='wifi-dark'
                height={0}
                width={0}
                className='w-5 h-5 mr-1'
              />
              { wifi } gbps
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center space-x-3.5'>
        <Button
          variant='third'
          size='header'
        >
          Manage
        </Button>
        <Button
          variant='third'
          size='header'
        >
          Preview
        </Button>
      </div>
    </figure>
  )
}

export default CardOverview
