import type { TicketData } from '@/types/booking'

function QrPlaceholder({ value }: { value: string }) {
  const cells = 13
  const modules: boolean[] = []
  let hash = 0
  for (let i = 0; i < value.length; i++) hash = (hash * 31 + value.charCodeAt(i)) >>> 0
  let state = hash || 1
  for (let i = 0; i < cells * cells; i++) {
    state = (state * 1103515245 + 12345) & 0x7fffffff
    modules.push((state >> 16) % 2 === 0)
  }
  const size = 120
  const cell = size / cells
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="Ticket QR code placeholder"
      className="sf-ticket__qr"
    >
      <rect width={size} height={size} fill="#ffffff" />
      {modules.map((on, i) =>
        on ? (
          <rect
            key={i}
            x={(i % cells) * cell}
            y={Math.floor(i / cells) * cell}
            width={cell}
            height={cell}
            fill="#0f172a"
          />
        ) : null,
      )}
    </svg>
  )
}

export interface TicketCardProps {
  ticket: TicketData
}

export function TicketCard({ ticket }: TicketCardProps) {
  return (
    <div className="sf-ticket" role="group" aria-label={`Ticket for ${ticket.eventName}`}>
      <div className="sf-ticket__main">
        <span className="sf-ticket__eyebrow">SeatFlow E-Ticket</span>
        <h3 className="sf-ticket__event">{ticket.eventName}</h3>
        <dl className="sf-ticket__meta">
          <div>
            <dt>Date</dt>
            <dd>{ticket.eventDate}</dd>
          </div>
          <div>
            <dt>Venue</dt>
            <dd>{ticket.venue}</dd>
          </div>
          <div>
            <dt>Holder</dt>
            <dd>{ticket.holderName}</dd>
          </div>
          <div>
            <dt>Seats</dt>
            <dd>{ticket.seats.map((seat) => seat.id).join(', ')}</dd>
          </div>
        </dl>
        <span className="sf-ticket__booking-id">Booking #{ticket.bookingId}</span>
      </div>
      <div className="sf-ticket__stub">
        <QrPlaceholder value={ticket.bookingId} />
        <span className="sf-ticket__scan">Scan at entry</span>
      </div>
    </div>
  )
}
