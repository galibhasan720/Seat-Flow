import type { SeatCategory, SeatData, SeatMapData, SeatState } from '@/types/seat'

const ROW_LABELS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const SEATS_PER_ROW = 12

function categoryFor(rowIndex: number, seatNumber: number): SeatCategory {
  if (rowIndex < 2) return 'vip'
  const lastRow = ROW_LABELS.length - 1
  if (rowIndex === lastRow && (seatNumber === 1 || seatNumber === 2)) return 'accessible'
  if (rowIndex === lastRow && seatNumber === 3) return 'companion'
  return 'standard'
}

function stateFor(seed: number): SeatState {
  if (seed % 13 === 0) return 'sold'
  if (seed % 17 === 0) return 'reserved'
  if (seed % 23 === 0) return 'blocked'
  return 'available'
}

function priceFor(category: SeatCategory): number {
  switch (category) {
    case 'vip':
      return 120
    case 'accessible':
    case 'companion':
      return 60
    default:
      return 80
  }
}

/** Builds a deterministic sample seat map for stories, tests, and the demo page. */
export function createSampleSeatMap(): SeatMapData {
  const seats: SeatData[] = []
  ROW_LABELS.forEach((row, rowIndex) => {
    for (let number = 1; number <= SEATS_PER_ROW; number++) {
      const category = categoryFor(rowIndex, number)
      const seed = rowIndex * SEATS_PER_ROW + number
      seats.push({
        id: `${row}${number}`,
        row,
        number,
        col: number,
        rowIndex,
        state: stateFor(seed),
        category,
        price: priceFor(category),
      })
    }
  })

  return {
    id: 'venue-main',
    name: 'Main Auditorium',
    rows: ROW_LABELS.length,
    cols: SEATS_PER_ROW,
    seats,
  }
}
