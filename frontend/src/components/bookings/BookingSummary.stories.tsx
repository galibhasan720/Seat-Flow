import type { Meta, StoryObj } from '@storybook/react'
import { BookingSummary } from './BookingSummary'
import type { SeatData } from '@/types/seat'

const seats: SeatData[] = [
  { id: 'A1', row: 'A', number: 1, col: 1, rowIndex: 0, state: 'selected', category: 'vip', price: 120 },
  { id: 'B3', row: 'B', number: 3, col: 3, rowIndex: 1, state: 'selected', category: 'standard', price: 80 },
]

const meta: Meta<typeof BookingSummary> = {
  title: 'Booking/BookingSummary',
  component: BookingSummary,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof BookingSummary>

export const WithSeats: Story = { args: { seats } }
export const Empty: Story = { args: { seats: [] } }
export const WithHoldCountdown: Story = { args: { seats, holdSecondsLeft: 95 } }
export const UrgentHold: Story = { args: { seats, holdSecondsLeft: 18 } }
