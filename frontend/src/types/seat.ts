export type SeatState =
  | 'available'
  | 'selected'
  | 'held'
  | 'reserved'
  | 'sold'
  | 'blocked'

export type SeatCategory = 'vip' | 'standard' | 'accessible' | 'companion'

export interface SeatData {
  /** Unique seat id, e.g. "A1" */
  id: string
  /** Row label, e.g. "A" */
  row: string
  /** Seat number within the row (1-based) */
  number: number
  /** Column index within the grid (1-based) */
  col: number
  /** Row index within the grid (0-based) */
  rowIndex: number
  state: SeatState
  category: SeatCategory
  price: number
}

export interface SeatMapData {
  id: string
  name: string
  rows: number
  cols: number
  seats: SeatData[]
}
