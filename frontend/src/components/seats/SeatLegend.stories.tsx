import type { Meta, StoryObj } from '@storybook/react'
import { SeatLegend } from './SeatLegend'

const meta: Meta<typeof SeatLegend> = {
  title: 'Booking/SeatLegend',
  component: SeatLegend,
}

export default meta

export const Default: StoryObj<typeof SeatLegend> = {}
