import Title from '@/components/atomics/title'
import Image from 'next/image'

function CardIndicator({
  icon,
  title,
  subtitle,
  variant,
  section,
}: {
  icon: string
  title: string
  subtitle: string
  variant: 'indicator' | ''
  section: 'hero' | 'header' | 'categories' | ''
}) {
  return (
    <figure className={`flex items-center space-x-4 ${variant !== 'indicator' && 'bg-white px-5 py-4 rounded-[20px] border-[3px] border-white hover:border-primary cursor-pointer'}`}>
      <div className={variant === 'indicator' ? 'rounded-full p-[19px] bg-primary' : ''}>
        <Image
          src={icon}
          alt='icon'
          height={32}
          width={32}
        />
      </div>
      <div>
        <Title
          title={title}
          subtitle={subtitle}
          section={section}
        />
      </div>
    </figure>
  )
}

CardIndicator.defaultProps = {
  variant: '',
  section: ''
}
export default CardIndicator
