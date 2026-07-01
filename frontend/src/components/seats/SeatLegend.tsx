import type { SeatCategory, SeatState } from '@/types/seat'

const STATES: { state: SeatState; label: string }[] = [
  { state: 'available', label: 'Available' },
  { state: 'selected', label: 'Selected' },
  { state: 'held', label: 'On hold' },
  { state: 'reserved', label: 'Reserved' },
  { state: 'sold', label: 'Sold' },
  { state: 'blocked', label: 'Blocked' },
]

const CATEGORIES: { category: SeatCategory; label: string; marker: string }[] = [
  { category: 'vip', label: 'VIP', marker: '★' },
  { category: 'standard', label: 'Standard', marker: '•' },
  { category: 'accessible', label: 'Accessible', marker: '♿' },
  { category: 'companion', label: 'Companion', marker: '◆' },
]

export function SeatLegend() {
  return (
    <div className="sf-legend" aria-label="Seat map legend">
      <div className="sf-legend__group">
        <span className="sf-legend__heading">Status</span>
        <ul className="sf-legend__list">
          {STATES.map(({ state, label }) => (
            <li key={state} className="sf-legend__item">
              <span className={`sf-legend__swatch sf-seat--${state}`} aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div className="sf-legend__group">
        <span className="sf-legend__heading">Category</span>
        <ul className="sf-legend__list">
          {CATEGORIES.map(({ category, label, marker }) => (
            <li key={category} className="sf-legend__item">
              <span className="sf-legend__marker" aria-hidden="true">
                {marker}
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
