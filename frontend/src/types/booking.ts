import type { SeatData } from './seat'

export type BookingStep =
  | 'events'
  | 'event-detail'
  | 'seat-selection'
  | 'booking-details'
  | 'payment'
  | 'confirmation'

export interface TicketData {
  bookingId: string
  eventName: string
  eventDate: string
  venue: string
  seats: SeatData[]
  holderName: string
}
