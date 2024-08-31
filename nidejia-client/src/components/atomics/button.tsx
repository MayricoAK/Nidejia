import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white disabled:bg-primary-foreground disabled:text-black/30',
        secondary: 'bg-secondary text-white disabled:bg-primary-foreground disabled:text-black/30',
        third: 'bg-gray-light text-secondary disabled:bg-primary-foreground disabled:text-black/30',
        carousel: 'bg-white hover:bg-secondary text-black hover:text-white shadow-indicator hover:shadow-none',
        calendar: 'bg-white hover:bg-primary text-black hover:text-white shadow-indicator hover:shadow-none',
        disabled: 'bg-gray-200 text-black shadow-indicator',
        'pagination-active': 'bg-secondary text-white',
        'pagination-notactive': 'bg-white text-secondary',
        datepicker: 'bg-gray-light',
        ghost: 'hover:bg-gray-light',
        outline:'border border-gray-light bg-background shadow-sm hover:bg-gray-light hover:text-text-black'
      },
      size: {
        default: 'w-full h-10 px-4 py-2 font-semibold leading-6 rounded-full',
        header: 'px-6 py-3 font-semibold leading-6 rounded-full',
        footer: 'px-6 py-3 border-2 border-primary font-semibold leading-6 rounded-full',
        hero: 'px-10 py-5 font-semibold leading-[30px] rounded-r-[50px] shadow-button border-2 border-primary',
        carousel: 'p-3',
        button: 'px-5 py-3 rounded-[50px] shadow-indicator',
        datepicker: 'px-6 py-3 w-full leading-6 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
