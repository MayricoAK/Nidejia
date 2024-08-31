import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center lg:rounded-[50px] lg:px-3.5 lg:py-1.5',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white font-extrabold text-xs leading-[18px]',
        secondary: 'bg-secondary text-white font-bold text-xs leading-[18px]',
        waiting: 'bg-white text-primary font-extrabold text-xs p-0 border border-primary',
        approved: 'bg-green-500 text-white font-extrabold text-xs leading-[18px]',
        canceled: 'bg-red-500 text-white font-extrabold text-xs leading-[18px]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
