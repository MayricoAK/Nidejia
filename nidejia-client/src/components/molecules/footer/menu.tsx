import Link from 'next/link'

interface FooterProps {
  title: string
  url: string
}

function Menu({
  title,
  data,
} : {
  title: string
  data: FooterProps[]
}) {
  return (
    <div className='text-white space-y-3'>
      <span className='font-semibold leading-6'>
        { title }
      </span>
      <ul className='space-y-3'>
        {
          data.map((item: FooterProps, index: number) => (
            <li key={index} className='leading-6 hover:text-primary hover:font-bold'>
              <Link href={item.url}>
                { item.title }
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Menu
