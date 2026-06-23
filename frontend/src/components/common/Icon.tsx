import { ElementType, SVGProps } from 'react'
import clsx from 'clsx'

type IconSize = 'xs' | 'sm' | 'md' | 'lg'

const sizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
}

type LucideIcon = ElementType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }>

type IconProps = {
  icon: LucideIcon
  size?: IconSize
  className?: string
  'aria-hidden'?: boolean
  'aria-label'?: string
}

export function Icon({
  icon: LucideIconComponent,
  size = 'md',
  className,
  'aria-hidden': ariaHidden = true,
  'aria-label': ariaLabel,
}: IconProps) {
  return (
    <LucideIconComponent
      size={sizeMap[size]}
      className={clsx('sf-icon', className)}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      strokeWidth={1.75}
    />
  )
}
