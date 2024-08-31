import Image from 'next/image'

function CardPurpose({
  image,
  title,
  purpose
} : {
  image: string
  title: string
  purpose: string
}) {
  return (
    <figure className='relative'>
      <Image
        src={image}
        alt={title}
        height={0}
        width={0}
        className='min-w-[280px] w-[310px] h-[200px] rounded-3xl object-cover'
      />

      <div className='absolute flex flex-col p-5 top-0 rounded-3xl w-[280px] xl:w-[310px] h-[200px] text-white bg-gradient-to-t from-gradient-black to-transparent to-[30%]'>
        <div className='mt-auto flex items-center justify-between'>
          <span className='font-bold text-xl leading-[30px] max-w-[163px]'>
            { title }
          </span>
          <div className='flex items-center text-sm leading-[21px]'>
            <Image
              src='/icons/profile-2user.svg'
              alt='profile-icon'
              height={0}
              width={0}
              className='w-[18px] h-[18px] mr-[1.5px]'
            />
            { purpose }
          </div>
        </div>
      </div>
    </figure>
  )
}

export default CardPurpose
