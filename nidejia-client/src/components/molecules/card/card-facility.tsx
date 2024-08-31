import Title from '@/components/atomics/title'
import Image from 'next/image'

function CardFacility({
  icon,
  title,
  subtitle
}: {
  icon: string
  title: string
  subtitle: string
}) {
  return (
    <figure className='flex items-center space-x-4 border border-border bg-white rounded-[20px] p-5'>
      <Image
        src={icon}
        alt='icon'
        height={36}
        width={36}
      />
      <div>
        <Title
          section='facility'
          title={title}
          subtitle={subtitle}
        />
      </div>
    </figure>
  )
}

export default CardFacility
