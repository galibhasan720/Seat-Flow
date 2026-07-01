import type { SeatData } from '@/types/seat'

export interface SeatTooltipProps {
  seat: SeatData
  x: number
  y: number
}

export function SeatTooltip({ seat, x, y }: SeatTooltipProps) {
  return (
    <div className="sf-seat-tooltip" role="tooltip" style={{ left: x + 12, top: y + 12 }}>
      <div className="sf-seat-tooltip__title">Seat {seat.id}</div>
      <div className="sf-seat-tooltip__row">Category: {seat.category}</div>
      <div className="sf-seat-tooltip__row">Status: {seat.state}</div>
      <div className="sf-seat-tooltip__price">${seat.price}</div>
    </div>
  )
}
