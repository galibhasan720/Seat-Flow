import clsx from 'clsx'
import type { BookingStep } from '@/types/booking'

const STEPS: { id: BookingStep; label: string }[] = [
  { id: 'events', label: 'Events' },
  { id: 'event-detail', label: 'Event' },
  { id: 'seat-selection', label: 'Seats' },
  { id: 'booking-details', label: 'Details' },
  { id: 'payment', label: 'Payment' },
  { id: 'confirmation', label: 'Confirmation' },
]

export interface BookingStepperProps {
  current: BookingStep
}

export function BookingStepper({ current }: BookingStepperProps) {
  const currentIndex = STEPS.findIndex((step) => step.id === current)

  return (
    <ol className="sf-stepper" aria-label="Booking progress">
      {STEPS.map((step, index) => {
        const status =
          index < currentIndex ? 'complete' : index === currentIndex ? 'current' : 'upcoming'
        return (
          <li
            key={step.id}
            className={clsx('sf-stepper__item', `sf-stepper__item--${status}`)}
            aria-current={status === 'current' ? 'step' : undefined}
          >
            <span className="sf-stepper__marker">{status === 'complete' ? '✓' : index + 1}</span>
            <span className="sf-stepper__label">{step.label}</span>
          </li>
        )
      })}
    </ol>
  )
}
