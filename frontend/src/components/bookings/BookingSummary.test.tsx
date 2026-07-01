import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { BookingSummary } from './BookingSummary'
import type { SeatData } from '@/types/seat'

const seats: SeatData[] = [
  { id: 'A1', row: 'A', number: 1, col: 1, rowIndex: 0, state: 'selected', category: 'vip', price: 100 },
  { id: 'A2', row: 'A', number: 2, col: 2, rowIndex: 0, state: 'selected', category: 'standard', price: 50 },
]

describe('BookingSummary', () => {
  it('computes subtotal, fee and total', () => {
    render(<BookingSummary seats={seats} serviceFeeRate={0.1} />)
    expect(screen.getByText('$150.00')).toBeInTheDocument()
    expect(screen.getByText('$15.00')).toBeInTheDocument()
    expect(screen.getByText('$165.00')).toBeInTheDocument()
  })

  it('shows the empty state when no seats are selected', () => {
    render(<BookingSummary seats={[]} />)
    expect(screen.getByText(/no seats selected/i)).toBeInTheDocument()
  })
})
