import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { SeatMap } from './SeatMap'
import { SeatLegend } from './SeatLegend'
import { createSampleSeatMap } from '@/utils/seatFixtures'
import type { SeatData } from '@/types/seat'

const meta: Meta<typeof SeatMap> = {
  title: 'Booking/SeatMap',
  component: SeatMap,
}

export default meta

export const Interactive: StoryObj<typeof SeatMap> = {
  render: () => {
    const [data] = useState(createSampleSeatMap)
    const [selected, setSelected] = useState<string[]>([])
    const toggle = (seat: SeatData) =>
      setSelected((prev) =>
        prev.includes(seat.id) ? prev.filter((id) => id !== seat.id) : [...prev, seat.id],
      )
    return (
      <div style={{ maxWidth: 640 }}>
        <SeatLegend />
        <SeatMap data={data} selectedIds={selected} onSelect={toggle} />
      </div>
    )
  },
}
