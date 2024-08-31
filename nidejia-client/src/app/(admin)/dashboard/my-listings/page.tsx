import CardListings from '@/components/molecules/card/card-listings'
import { Button } from '@/components/atomics/button'
import Title from '@/components/atomics/title'
import DataCity from '@/json/city-center.json'
import { CityCenterProps } from '@/interfaces/city-center'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/components/atomics/pagination'

function MyListings() {
  return (
    <main>
      <div className='flex items-center justify-between'>
        <Title
          section='admin'
          title='My Listings'
          subtitle='Manage your house and get money'
        />
        <Button
          size='button'
        >
          Add New
        </Button>
      </div>

      <div className='mt-[30px] space-y-5'>
        {
          DataCity.data.slice(0, 3).map((item: CityCenterProps, index: number) => (
            <CardListings
              key={index}
              image={item.image}
              title={item.title}
              location={item.location}
              wide={item.wide}
              capacity={item.capacity}
              wifi={item.wifi}
            />
          ))
        }
      </div>

      <Pagination className='mt-[30px]'>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  )
}

export default MyListings
