import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useSeatSelection } from './useSeatSelection'
import type { SeatData } from '@/types/seat'

const seats: SeatData[] = [
  { id: 'A1', row: 'A', number: 1, col: 1, rowIndex: 0, state: 'available', category: 'standard', price: 80 },
  { id: 'A2', row: 'A', number: 2, col: 2, rowIndex: 0, state: 'sold', category: 'standard', price: 80 },
]

describe('useSeatSelection', () => {
  it('selects an available seat', () => {
    const { result } = renderHook(() => useSeatSelection(seats))
    act(() => result.current.toggleSeat(seats[0]))
    expect(result.current.selectedIds).toContain('A1')
    expect(result.current.selectedSeats).toHaveLength(1)
  })

  it('ignores non-available seats', () => {
    const { result } = renderHook(() => useSeatSelection(seats))
    act(() => result.current.toggleSeat(seats[1]))
    expect(result.current.selectedIds).toHaveLength(0)
  })

  it('toggles a seat off when selected again', () => {
    const { result } = renderHook(() => useSeatSelection(seats))
    act(() => result.current.toggleSeat(seats[0]))
    act(() => result.current.toggleSeat(seats[0]))
    expect(result.current.selectedIds).toHaveLength(0)
  })

  it('respects the maximum seat guard', () => {
    const { result } = renderHook(() => useSeatSelection(seats, 1))
    act(() => result.current.toggleSeat(seats[0]))
    act(() => result.current.toggleSeat({ ...seats[0], id: 'A3' }))
    expect(result.current.selectedIds).toHaveLength(1)
  })
})
