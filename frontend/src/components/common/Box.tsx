import { ElementType, ComponentPropsWithoutRef } from 'react'
import clsx from 'clsx'

export type BoxProps<E extends ElementType = 'div'> = {
  as?: E
  className?: string
} & Omit<ComponentPropsWithoutRef<E>, 'as'>

export function Box<E extends ElementType = 'div'>({
  as,
  className,
  ...props
}: BoxProps<E>) {
  const Component = (as ?? 'div') as ElementType
  return <Component className={clsx(className)} {...props} />
}
