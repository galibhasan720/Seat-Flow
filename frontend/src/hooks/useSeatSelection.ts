import { useCallback, useMemo, useState } from 'react'
import type { SeatData, SeatState } from '@/types/seat'

const SELECTABLE_STATES: SeatState[] = ['available']

export interface UseSeatSelectionResult {
  selectedIds: string[]
  selectedSeats: SeatData[]
  toggleSeat: (seat: SeatData) => void
  clear: () => void
}

/** Manages seat selection with a maximum-seat guard. Only available seats are selectable. */
export function useSeatSelection(allSeats: SeatData[], maxSeats = 8): UseSeatSelectionResult {
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const toggleSeat = useCallback(
    (seat: SeatData) => {
      const isSelected = selectedIds.includes(seat.id)
      if (!isSelected && !SELECTABLE_STATES.includes(seat.state)) return
      setSelectedIds((prev) => {
        if (prev.includes(seat.id)) return prev.filter((id) => id !== seat.id)
        if (prev.length >= maxSeats) return prev
        return [...prev, seat.id]
      })
    },
    [selectedIds, maxSeats],
  )

  const clear = useCallback(() => setSelectedIds([]), [])

  const selectedSeats = useMemo(
    () => allSeats.filter((seat) => selectedIds.includes(seat.id)),
    [allSeats, selectedIds],
  )

  return { selectedIds, selectedSeats, toggleSeat, clear }
}
