import Image from 'next/image'
import CardStar from '@/components/molecules/card/card-star'
import Title from '@/components/atomics/title'

function CardReview({
  rating,
  review,
  avatar,
  username,
  jobdesk
} : {
  rating: number
  review: string
  avatar: string
  username: string
  jobdesk: string
}) {
  return (
    <figure className='bg-gray-light rounded-[20px] px-5 py-4 space-y-5'>
      <CardStar rating={rating} variant='review'/>
      <span className='block text-secondary text-lg leading-8'>
        { review }
      </span>
      <div className='flex items-center space-x-3'>
        <Image
          src={avatar}
          alt='avatar'
          height={0}
          width={0}
          className='h-[50px] w-[50px] rounded-full'
        />
        <Title
          title={username}
          subtitle={jobdesk}
          section='header'
        />
      </div>
    </figure>
  )
}

export default CardReview
