
const getTitleStyle = (section: string) => {
  switch (section) {
    case 'hero':
      return 'text-[55px] leading-[82.5px]'
    case 'header':
      return 'text-base font-semibold leading-6'
    case 'categories':
      return 'text-xl font-semibold leading-6'
    case 'facility':
      return 'text-xl font-semibold leading-[30px]'
    case 'detail':
      return 'font-bold text-lg leading-[27px] text-secondary'
    case 'booking':
      return 'font-bold text-lg leading-[27px] text-secondary'
    case 'empty': 
      return 'font-bold text-lg leading-[27px] text-secondary text-center'
    default:
      return 'text-2xl leading-9'
  }
}

const getSubtitleStyle = (section: string) => {
  switch (section) {
    case 'hero':
      return 'text-lg leading-8 text-secondary'
    case 'header':
      return 'text-sm leading-[21px] text-subtitle'
    case 'categories':
      return 'text-base leading-6 text-subtitle'
    case 'facility':
      return 'text-base leading-6 text-subtitle'
    case 'detail':
      return 'text-base leading-[30px] text-secondary pt-2.5'
    case 'booking':
      return 'text-base leading-[30px] text-subtitle pt-2.5'
    case 'empty':
      return 'text-base leading-[30px] text-subtitle pt-2.5 text-center'
    default:
      return 'leading-6 text-subtitle'
  }
}

function Title({
  title = '',
  subtitle,
  section = '',
  reverse = false
}: {
  title: string
  subtitle?: string | undefined
  section?: 'hero' | 'header' | 'categories' | 'detail' | 'facility' | 'booking' | 'admin' | 'overview' | 'empty' | ''
  reverse?: boolean
}) {
  return (
    <div data-reverse={reverse} className='flex data-[reverse=false]:flex-col data-[reverse=true]:flex-col-reverse data-[reverse=true]:text-right'>
      <h1 className={`font-bold text-secondary ${getTitleStyle(section)}`}>
        { title }  
      </h1>
      <h2 className={getSubtitleStyle(section)}>
        { subtitle }  
      </h2>   
    </div>
  )
}
export default Title
