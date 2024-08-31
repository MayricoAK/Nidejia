import Image from 'next/image'

function CardStar({ 
  rating,
  variant
} : { 
  rating: number
  variant: 'review' | 'detail'
}) {
  return (
    <div className='flex items-center space-x-0.5'>
      <Image
        src={`/icons/${(variant === 'detail' && rating < 1) ? 'star-gray.svg' : 'star.svg'}`}
        alt='star'
        height={0}
        width={0}
        data-rating={variant === 'review' ? rating >= 1 : true}
        className='h-5 w-5 data-[rating=false]:hidden'
      />
      <Image
        src={`/icons/${(variant === 'detail' && rating < 2) ? 'star-gray.svg' : 'star.svg'}`}
        alt='star'
        height={0}
        width={0}
        data-rating={variant === 'review' ? rating >= 2 : true}
        className='h-5 w-5 data-[rating=false]:hidden'
      />
      <Image
        src={`/icons/${(variant === 'detail' && rating < 3) ? 'star-gray.svg' : 'star.svg'}`}
        alt='star'
        height={0}
        width={0}
        data-rating={variant === 'review' ? rating >= 3 : true}
        className='h-5 w-5 data-[rating=false]:hidden'
      />
      <Image
        src={`/icons/${(variant === 'detail' && rating < 4) ? 'star-gray.svg' : 'star.svg'}`}
        alt='star'
        height={0}
        width={0}
        data-rating={variant === 'review' ? rating >= 4 : true}
        className='h-5 w-5 data-[rating=false]:hidden'
      />
      <Image
        src={`/icons/${(variant === 'detail' && rating < 5) ? 'star-gray.svg' : 'star.svg'}`}
        alt='star'
        height={0}
        width={0}
        data-rating={variant === 'review' ? rating >= 5 : true}
        className='h-5 w-5 data-[rating=false]:hidden'
      />
    </div>
  )
}

export default CardStar
