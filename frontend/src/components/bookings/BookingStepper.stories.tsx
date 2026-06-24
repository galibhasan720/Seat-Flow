import type { Meta, StoryObj } from '@storybook/react'
import { BookingStepper } from './BookingStepper'

const meta: Meta<typeof BookingStepper> = {
  title: 'Booking/BookingStepper',
  component: BookingStepper,
  argTypes: {
    current: {
      control: 'select',
      options: [
        'events',
        'event-detail',
        'seat-selection',
        'booking-details',
        'payment',
        'confirmation',
      ],
    },
  },
}

export default meta
type Story = StoryObj<typeof BookingStepper>

export const SeatSelection: Story = { args: { current: 'seat-selection' } }
export const Payment: Story = { args: { current: 'payment' } }
export const Confirmation: Story = { args: { current: 'confirmation' } }
