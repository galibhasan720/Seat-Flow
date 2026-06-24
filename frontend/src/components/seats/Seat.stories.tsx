import type { Meta, StoryObj } from '@storybook/react'
import { Seat } from './Seat'
import type { SeatData } from '@/types/seat'

const baseSeat: SeatData = {
  id: 'A1',
  row: 'A',
  number: 1,
  col: 1,
  rowIndex: 0,
  state: 'available',
  category: 'standard',
  price: 80,
}

const meta: Meta<typeof Seat> = {
  title: 'Booking/Seat',
  component: Seat,
  decorators: [
    (Story) => (
      <svg width={80} height={90} viewBox="0 0 80 90">
        <Story />
      </svg>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Seat>

export const Available: Story = { args: { seat: baseSeat, x: 26, y: 26 } }
export const Selected: Story = { args: { seat: baseSeat, x: 26, y: 26, selected: true } }
export const Sold: Story = { args: { seat: { ...baseSeat, state: 'sold' }, x: 26, y: 26 } }
export const Blocked: Story = { args: { seat: { ...baseSeat, state: 'blocked' }, x: 26, y: 26 } }
export const Vip: Story = {
  args: { seat: { ...baseSeat, category: 'vip', price: 120 }, x: 26, y: 26 },
}
export const Accessible: Story = {
  args: { seat: { ...baseSeat, category: 'accessible' }, x: 26, y: 26 },
}
