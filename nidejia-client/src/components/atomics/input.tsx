'use client'
import * as React from 'react'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useToggle } from '@/providers/use-toggle';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: string
    variant: 'auth' | 'hero' | 'footer'
  }
export interface IconShowPasswordProps {
  isShow: boolean;
  onToggle: () => void;
}

const IconShowPassword: React.FC<IconShowPasswordProps> = ({
  isShow,
  onToggle,
}) => {
  return (
    <div className='cursor-pointer absolute top-2 right-4' onClick={onToggle}>
      {!isShow ? (
        <Image
          src='/icons/eye-slash.svg'
          alt='icon'
          height={0}
          width={0}
          className='w-6 h-6'
        />
      ) : (
        <Image
          src='/icons/eye.svg'
          alt='icon'
          height={0}
          width={0}
          className='w-6 h-6'
        />
      )}
    </div>
  );
};

const getVariant = (variant: string) => {
  switch (variant) {
    case 'auth':
      return 'rounded-[50px] pl-12 pr-3 py-2 text-base'
    case 'hero':
      return 'rounded-l-[50px] px-[30px] py-5 text-xl font-semibold placeholder:font-normal'
    case 'footer':
      return 'rounded-[50px] pl-12 pr-36 py-3 text-base text-secondary'
  }
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, variant, ...props }, ref) => {
    const [isShowPassword, onTogglePassword] = useToggle()

    return (
      <div className='relative'>
        {
          icon &&
            <Image
              src={icon}
              alt='icon'
              height={24}
              width={24}
              className={`absolute left-4 ${variant === 'footer' ? 'top-3.5' : 'top-2.5'}`}
            />
        }
        <input
          type={isShowPassword ? 'text' : type}
          className={cn(
            'flex w-full bg-gray-light border-2 border-gray-light focus:border-primary outline-none placeholder:text-placeholder',
            className,
            getVariant(variant)
          )}
          ref={ref}
          {...props}
        />
        {
          type === 'password' &&
            <IconShowPassword
              isShow={isShowPassword}
              onToggle={onTogglePassword}
            />
        }
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }