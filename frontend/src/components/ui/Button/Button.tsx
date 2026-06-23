import { forwardRef } from 'react'
import clsx from 'clsx'
import { Icon } from '@/components/common'
import type { ButtonProps } from './Button.types'

const variantStyles: Record<string, string> = {
  primary: 'sf-btn--primary',
  secondary: 'sf-btn--secondary',
  ghost: 'sf-btn--ghost',
  danger: 'sf-btn--danger',
}

const sizeStyles: Record<string, string> = {
  sm: 'sf-btn--sm',
  md: 'sf-btn--md',
  lg: 'sf-btn--lg',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      iconLeft,
      iconRight,
      children,
      className,
      onClick,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        type="button"
        className={clsx('sf-btn', variantStyles[variant], sizeStyles[size], className)}
        aria-disabled={isDisabled}
        aria-busy={loading || undefined}
        onClick={isDisabled ? undefined : onClick}
        {...props}
      >
        {loading && (
          <span role="status" className="sf-btn__spinner" aria-label="Loading">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="sf-btn__spinner-icon"
            >
              <circle
                cx="8"
                cy="8"
                r="6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="28"
                strokeDashoffset="10"
              />
            </svg>
          </span>
        )}
        {!loading && iconLeft && <Icon icon={iconLeft} size="sm" />}
        <span>{children}</span>
        {!loading && iconRight && <Icon icon={iconRight} size="sm" />}
      </button>
    )
  },
)

Button.displayName = 'Button'
