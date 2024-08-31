
function CardBooking({
  title,
  value
} : {
  title: string
  value: string
}) {
  return (
    <figure className='grid grid-cols-2'>
      <span className='font-semibold leading-6 text-secondary'>
        { title }
      </span>
      <span className='text-right font-bold leading-6 text-secondary'>
        { value }
      </span>
    </figure>
  )
}

export default CardBooking
