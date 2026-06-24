import { render, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import type { ReactNode } from 'react'
import { Seat } from './Seat'
import type { SeatData } from '@/types/seat'

const seat: SeatData = {
  id: 'A1',
  row: 'A',
  number: 1,
  col: 1,
  rowIndex: 0,
  state: 'available',
  category: 'standard',
  price: 80,
}

const renderInSvg = (ui: ReactNode) => render(<svg>{ui}</svg>)

describe('Seat', () => {
  it('calls onSelect when an available seat is clicked', () => {
    const onSelect = vi.fn()
    const { getByRole } = renderInSvg(<Seat seat={seat} x={0} y={0} onSelect={onSelect} />)
    fireEvent.click(getByRole('button'))
    expect(onSelect).toHaveBeenCalledWith(seat)
  })

  it('does not call onSelect for a sold seat', () => {
    const onSelect = vi.fn()
    const { getByRole } = renderInSvg(
      <Seat seat={{ ...seat, state: 'sold' }} x={0} y={0} onSelect={onSelect} />,
    )
    fireEvent.click(getByRole('button'))
    expect(onSelect).not.toHaveBeenCalled()
  })

  it('activates with the Enter key', () => {
    const onSelect = vi.fn()
    const { getByRole } = renderInSvg(<Seat seat={seat} x={0} y={0} onSelect={onSelect} />)
    fireEvent.keyDown(getByRole('button'), { key: 'Enter' })
    expect(onSelect).toHaveBeenCalledOnce()
  })
})
