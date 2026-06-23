import { ElementType, ReactNode } from 'react'
import clsx from 'clsx'

type TextVariant = 'heading' | 'subheading' | 'body' | 'caption' | 'label'
type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'display'

const variantDefaults: Record<TextVariant, { tag: ElementType; cls: string }> = {
  heading: { tag: 'h2', cls: 'sf-text--heading' },
  subheading: { tag: 'h3', cls: 'sf-text--subheading' },
  body: { tag: 'p', cls: 'sf-text--body' },
  caption: { tag: 'span', cls: 'sf-text--caption' },
  label: { tag: 'span', cls: 'sf-text--label' },
}

type TextProps<E extends ElementType = 'p'> = {
  as?: E
  variant?: TextVariant
  size?: TextSize
  className?: string
  children?: ReactNode
}

export function Text<E extends ElementType = 'p'>({
  as,
  variant = 'body',
  size,
  className,
  children,
  ...props
}: TextProps<E>) {
  const { tag: DefaultTag, cls } = variantDefaults[variant]
  const Component = (as ?? DefaultTag) as ElementType
  return (
    <Component
      className={clsx('sf-text', cls, size && `sf-text--size-${size}`, className)}
      {...props}
    >
      {children}
    </Component>
  )
}
