import Image from 'next/image'
import Link from 'next/link'

function ItemMenu({
  image,
  title,
  url
} : {
  image: string
  title: string
  url: string
}) {
  return (
    <Link href={url}>
      <li className='flex items-center space-x-2'>
        <Image
          src={image}
          alt={title}
          height={24}
          width={24}
        />
        <span className='block font-semibold leading-6 capitalize'>
          { title }
        </span>
      </li>
    </Link>
  )
}

export default ItemMenu
