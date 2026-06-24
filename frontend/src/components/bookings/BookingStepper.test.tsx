import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BookingStepper } from './BookingStepper'

describe('BookingStepper', () => {
  it('renders all steps', () => {
    render(<BookingStepper current="seat-selection" />)
    expect(screen.getByText('Seats')).toBeInTheDocument()
    expect(screen.getByText('Payment')).toBeInTheDocument()
    expect(screen.getByText('Confirmation')).toBeInTheDocument()
  })

  it('marks the current step with aria-current', () => {
    render(<BookingStepper current="payment" />)
    const current = screen.getByText('Payment').closest('li')
    expect(current).toHaveAttribute('aria-current', 'step')
  })
})
