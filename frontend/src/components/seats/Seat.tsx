import { KeyboardEvent } from 'react'
import clsx from 'clsx'
import type { SeatData } from '@/types/seat'

export interface SeatProps {
  seat: SeatData
  x: number
  y: number
  size?: number
  selected?: boolean
  focusable?: boolean
  onSelect?: (seat: SeatData) => void
  onHover?: (seat: SeatData | null, position?: { x: number; y: number }) => void
}

const SELECTABLE_STATES: SeatData['state'][] = ['available']

export function Seat({
  seat,
  x,
  y,
  size = 28,
  selected = false,
  focusable = true,
  onSelect,
  onHover,
}: SeatProps) {
  const interactive = SELECTABLE_STATES.includes(seat.state) || selected
  const displayState = selected ? 'selected' : seat.state

  const handleActivate = () => {
    if (!interactive) return
    onSelect?.(seat)
  }

  const handleKeyDown = (event: KeyboardEvent<SVGGElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleActivate()
    }
  }

  const label = `Row ${seat.row}, seat ${seat.number}, ${seat.category}, ${displayState}, $${seat.price}`

  return (
    <g
      className={clsx('sf-seat', `sf-seat--${displayState}`, `sf-seat--cat-${seat.category}`)}
      transform={`translate(${x}, ${y})`}
      role="button"
      tabIndex={focusable && interactive ? 0 : -1}
      aria-label={label}
      aria-pressed={selected}
      aria-disabled={!interactive}
      data-seat-id={seat.id}
      onClick={handleActivate}
      onKeyDown={handleKeyDown}
      onMouseEnter={(event) => onHover?.(seat, { x: event.clientX, y: event.clientY })}
      onMouseLeave={() => onHover?.(null)}
      onFocus={() => onHover?.(seat)}
      onBlur={() => onHover?.(null)}
    >
      <rect className="sf-seat__shape" width={size} height={size} rx={6} ry={6} />
      <text
        className="sf-seat__label"
        x={size / 2}
        y={size / 2}
        dominantBaseline="central"
        textAnchor="middle"
      >
        {seat.number}
      </text>
      {seat.category === 'vip' && (
        <text className="sf-seat__marker" x={size - 4} y={7} textAnchor="middle">
          ★
        </text>
      )}
      {seat.category === 'accessible' && (
        <text className="sf-seat__marker" x={size / 2} y={size + 10} textAnchor="middle">
          ♿
        </text>
      )}
    </g>
  )
}
