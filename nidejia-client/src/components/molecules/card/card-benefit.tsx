import Image from 'next/image'

function CardBenefit({
  benefit
} : {
  benefit: string
}) {
  return (
    <li className='flex items-center space-x-3'>
      <Image
        src='/icons/tick-circle.svg'
        alt='tick-circle'
        height={0}
        width={0}
        className='w-8 h-8'
      />
      <span className='font-semibold text-lg leading-[27px]'>
        { benefit }
      </span>
    </li>
  )
}

export default CardBenefit
