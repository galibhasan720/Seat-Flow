import type { Meta, StoryObj } from '@storybook/react'
import { TicketCard } from './TicketCard'
import type { TicketData } from '@/types/booking'

const ticket: TicketData = {
  bookingId: 'SF8KQ2',
  eventName: 'Live in Concert — SeatFlow Arena',
  eventDate: 'Sat, 18 Jul 2026 · 8:00 PM',
  venue: 'Main Auditorium',
  holderName: 'Galib Hasan',
  seats: [
    { id: 'A1', row: 'A', number: 1, col: 1, rowIndex: 0, state: 'sold', category: 'vip', price: 120 },
    { id: 'A2', row: 'A', number: 2, col: 2, rowIndex: 0, state: 'sold', category: 'vip', price: 120 },
  ],
}

const meta: Meta<typeof TicketCard> = {
  title: 'Booking/TicketCard',
  component: TicketCard,
}

export default meta

export const Default: StoryObj<typeof TicketCard> = { args: { ticket } }
