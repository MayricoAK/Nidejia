'use client'
 
import * as React from 'react'
import Image from 'next/image'
import { format } from 'date-fns'
 
import { cn } from '@/lib/utils'
import { Button } from '@/components/atomics/button'
import { Calendar } from '@/components/atomics/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/atomics/popover'
 
export function DatePicker() {
  const [date, setDate] = React.useState<Date>()
 
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='datepicker'
          size='datepicker'
          className={cn(
            'justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <Image
            src='/icons/calendar.svg'
            alt='calendar'
            height={24}
            width={24}
            className='mr-2.5'
          /> 
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0 bg-white' align='center'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}