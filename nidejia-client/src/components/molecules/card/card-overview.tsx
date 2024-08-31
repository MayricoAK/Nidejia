import Title from '@/components/atomics/title'
import Image from 'next/image'

function CardOverview({
  image,
  title,
  subtitle,
} : {
  image: string
  title: string
  subtitle: string
}) {
  return (
    <figure className='bg-white border-2 border-white hover:border-primary p-5 space-y-4 rounded-[20px]'>
      <Image
        src={image}
        alt={title}
        height={40}
        width={40}
      />
      <Title
        section='overview'
        title={title}
        subtitle={subtitle}
      />
    </figure>
  )
}

export default CardOverview
