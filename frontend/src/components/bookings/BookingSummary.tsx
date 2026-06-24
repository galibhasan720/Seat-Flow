import clsx from 'clsx'
import { Button } from '@/components/ui/Button'
import type { SeatData } from '@/types/seat'

export interface BookingSummaryProps {
  seats: SeatData[]
  serviceFeeRate?: number
  holdSecondsLeft?: number | null
  onCheckout?: () => void
  onRemoveSeat?: (seat: SeatData) => void
}

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export function BookingSummary({
  seats,
  serviceFeeRate = 0.1,
  holdSecondsLeft = null,
  onCheckout,
  onRemoveSeat,
}: BookingSummaryProps) {
  const subtotal = seats.reduce((sum, seat) => sum + seat.price, 0)
  const fees = Math.round(subtotal * serviceFeeRate * 100) / 100
  const total = subtotal + fees

  return (
    <aside className="sf-summary" aria-label="Booking summary">
      <h3 className="sf-summary__title">Your selection</h3>

      {holdSecondsLeft != null && (
        <div
          className={clsx('sf-summary__hold', holdSecondsLeft <= 30 && 'sf-summary__hold--urgent')}
          role="status"
        >
          Seats held for {formatTime(holdSecondsLeft)}
        </div>
      )}

      {seats.length === 0 ? (
        <p className="sf-summary__empty">No seats selected yet.</p>
      ) : (
        <ul className="sf-summary__list">
          {seats.map((seat) => (
            <li key={seat.id} className="sf-summary__row">
              <span>
                Seat {seat.id} · {seat.category}
              </span>
              <span className="sf-summary__seat-price">${seat.price}</span>
              {onRemoveSeat && (
                <button
                  type="button"
                  className="sf-summary__remove"
                  aria-label={`Remove seat ${seat.id}`}
                  onClick={() => onRemoveSeat(seat)}
                >
                  ×
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      <dl className="sf-summary__totals">
        <div className="sf-summary__total-row">
          <dt>Subtotal</dt>
          <dd>${subtotal.toFixed(2)}</dd>
        </div>
        <div className="sf-summary__total-row">
          <dt>Service fee</dt>
          <dd>${fees.toFixed(2)}</dd>
        </div>
        <div className="sf-summary__total-row sf-summary__total-row--grand">
          <dt>Total</dt>
          <dd>${total.toFixed(2)}</dd>
        </div>
      </dl>

      <Button
        variant="primary"
        size="lg"
        disabled={seats.length === 0}
        onClick={onCheckout}
        className="sf-summary__cta"
      >
        Continue to details
      </Button>
    </aside>
  )
}
