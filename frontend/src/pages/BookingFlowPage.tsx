import { useEffect, useState } from 'react'
import { BookingStepper } from '@/components/bookings/BookingStepper'
import { BookingSummary } from '@/components/bookings/BookingSummary'
import { TicketCard } from '@/components/bookings/TicketCard'
import { SeatLegend } from '@/components/seats/SeatLegend'
import { SeatMap } from '@/components/seats/SeatMap'
import { Button } from '@/components/ui/Button'
import { useSeatSelection } from '@/hooks/useSeatSelection'
import { createSampleSeatMap } from '@/utils/seatFixtures'
import type { BookingStep, TicketData } from '@/types/booking'

const HOLD_SECONDS = 120

export function BookingFlowPage() {
  const [seatMap] = useState(createSampleSeatMap)
  const { selectedIds, selectedSeats, toggleSeat, clear } = useSeatSelection(seatMap.seats)
  const [step, setStep] = useState<BookingStep>('seat-selection')
  const [holdLeft, setHoldLeft] = useState<number | null>(null)
  const [showHoldModal, setShowHoldModal] = useState(false)
  const [holder, setHolder] = useState({ name: '', email: '' })
  const [ticket, setTicket] = useState<TicketData | null>(null)

  useEffect(() => {
    if (holdLeft == null) return
    if (holdLeft <= 0) {
      setHoldLeft(null)
      clear()
      setShowHoldModal(false)
      setStep('seat-selection')
      return
    }
    const timer = setTimeout(() => setHoldLeft((value) => (value == null ? null : value - 1)), 1000)
    return () => clearTimeout(timer)
  }, [holdLeft, clear])

  const startHold = () => {
    if (selectedSeats.length === 0) return
    setHoldLeft(HOLD_SECONDS)
    setShowHoldModal(true)
  }

  const proceedToDetails = () => {
    setShowHoldModal(false)
    setStep('booking-details')
  }

  const cancelHold = () => {
    setShowHoldModal(false)
    setHoldLeft(null)
  }

  const handleConfirm = () => {
    setTicket({
      bookingId: Math.random().toString(36).slice(2, 8).toUpperCase(),
      eventName: 'Live in Concert — SeatFlow Arena',
      eventDate: 'Sat, 18 Jul 2026 · 8:00 PM',
      venue: seatMap.name,
      seats: selectedSeats,
      holderName: holder.name || 'Guest',
    })
    setHoldLeft(null)
    setStep('confirmation')
  }

  const startOver = () => {
    setTicket(null)
    clear()
    setHolder({ name: '', email: '' })
    setStep('seat-selection')
  }

  return (
    <div className="sf-booking-page">
      <header className="sf-booking-page__header">
        <h1 className="sf-booking-page__title">Book your seats</h1>
        <BookingStepper current={step} />
      </header>

      {step === 'seat-selection' && (
        <div className="sf-booking-page__layout">
          <section className="sf-booking-page__map">
            <SeatLegend />
            <SeatMap data={seatMap} selectedIds={selectedIds} onSelect={toggleSeat} />
          </section>
          <BookingSummary seats={selectedSeats} onCheckout={startHold} onRemoveSeat={toggleSeat} />
        </div>
      )}

      {step === 'booking-details' && (
        <div className="sf-booking-page__layout">
          <section className="sf-booking-page__form">
            <h2>Your details</h2>
            <label className="sf-field">
              <span>Full name</span>
              <input
                className="sf-input"
                value={holder.name}
                onChange={(event) => setHolder((h) => ({ ...h, name: event.target.value }))}
              />
            </label>
            <label className="sf-field">
              <span>Email</span>
              <input
                className="sf-input"
                type="email"
                value={holder.email}
                onChange={(event) => setHolder((h) => ({ ...h, email: event.target.value }))}
              />
            </label>
            <div className="sf-booking-page__actions">
              <Button variant="ghost" onClick={() => setStep('seat-selection')}>
                Back
              </Button>
              <Button onClick={() => setStep('payment')} disabled={!holder.name || !holder.email}>
                Continue to payment
              </Button>
            </div>
          </section>
          <BookingSummary seats={selectedSeats} holdSecondsLeft={holdLeft} />
        </div>
      )}

      {step === 'payment' && (
        <div className="sf-booking-page__layout">
          <section className="sf-booking-page__form">
            <h2>Payment</h2>
            <p className="sf-booking-page__muted">
              This is a stubbed payment step for the prototype. No real charge is made.
            </p>
            <div className="sf-booking-page__actions">
              <Button variant="ghost" onClick={() => setStep('booking-details')}>
                Back
              </Button>
              <Button variant="secondary" onClick={handleConfirm}>
                Pay now
              </Button>
            </div>
          </section>
          <BookingSummary seats={selectedSeats} holdSecondsLeft={holdLeft} />
        </div>
      )}

      {step === 'confirmation' && ticket && (
        <div className="sf-booking-page__confirmation">
          <h2>You're all set! 🎉</h2>
          <p className="sf-booking-page__muted">
            Your tickets have been confirmed. A copy has been sent to your email.
          </p>
          <TicketCard ticket={ticket} />
          <Button variant="ghost" onClick={startOver}>
            Book more seats
          </Button>
        </div>
      )}

      {showHoldModal && (
        <div
          className="sf-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="hold-title"
        >
          <div className="sf-modal">
            <h2 id="hold-title" className="sf-modal__title">
              Seats on hold
            </h2>
            <p>
              We're holding your {selectedSeats.length} seat(s) for{' '}
              {Math.floor(HOLD_SECONDS / 60)} minutes. Complete your booking before the timer runs
              out.
            </p>
            <div className="sf-booking-page__actions">
              <Button variant="ghost" onClick={cancelHold}>
                Cancel
              </Button>
              <Button onClick={proceedToDetails}>Continue</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
