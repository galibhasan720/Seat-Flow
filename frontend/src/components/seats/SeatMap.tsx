import { KeyboardEvent, MouseEvent, WheelEvent, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { Seat } from './Seat'
import { SeatTooltip } from './SeatTooltip'
import type { SeatData, SeatMapData } from '@/types/seat'

const SEAT_SIZE = 28
const GAP = 8
const PADDING = 24
const STAGE_SPACE = 40

export interface SeatMapProps {
  data: SeatMapData
  selectedIds: string[]
  onSelect: (seat: SeatData) => void
  className?: string
}

interface Transform {
  scale: number
  tx: number
  ty: number
}

const clampScale = (scale: number) => Math.min(2.5, Math.max(0.5, scale))

export function SeatMap({ data, selectedIds, onSelect, className }: SeatMapProps) {
  const step = SEAT_SIZE + GAP
  const contentWidth = data.cols * step - GAP + PADDING * 2
  const contentHeight = data.rows * step - GAP + PADDING * 2 + STAGE_SPACE

  const positions = useMemo(() => {
    const map = new Map<string, { x: number; y: number }>()
    data.seats.forEach((seat) => {
      map.set(seat.id, {
        x: PADDING + (seat.col - 1) * step,
        y: PADDING + STAGE_SPACE + seat.rowIndex * step,
      })
    })
    return map
  }, [data.seats, step])

  const [transform, setTransform] = useState<Transform>({ scale: 1, tx: 0, ty: 0 })
  const [hovered, setHovered] = useState<{ seat: SeatData; pos: { x: number; y: number } } | null>(
    null,
  )
  const panState = useRef({ active: false, startX: 0, startY: 0, ox: 0, oy: 0 })
  const svgRef = useRef<SVGSVGElement>(null)

  const handleWheel = (event: WheelEvent) => {
    event.preventDefault()
    setTransform((t) => ({ ...t, scale: clampScale(t.scale - event.deltaY * 0.001) }))
  }

  const startPan = (event: MouseEvent) => {
    panState.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      ox: transform.tx,
      oy: transform.ty,
    }
  }
  const movePan = (event: MouseEvent) => {
    if (!panState.current.active) return
    setTransform((t) => ({
      ...t,
      tx: panState.current.ox + (event.clientX - panState.current.startX),
      ty: panState.current.oy + (event.clientY - panState.current.startY),
    }))
  }
  const endPan = () => {
    panState.current.active = false
  }

  const zoomIn = () => setTransform((t) => ({ ...t, scale: clampScale(t.scale + 0.2) }))
  const zoomOut = () => setTransform((t) => ({ ...t, scale: clampScale(t.scale - 0.2) }))
  const reset = () => setTransform({ scale: 1, tx: 0, ty: 0 })

  const handleKeyNav = (event: KeyboardEvent<SVGSVGElement>) => {
    const dirs: Record<string, [number, number]> = {
      ArrowRight: [1, 0],
      ArrowLeft: [-1, 0],
      ArrowUp: [0, -1],
      ArrowDown: [0, 1],
    }
    const dir = dirs[event.key]
    if (!dir) return
    const active = document.activeElement
    const currentId = active?.getAttribute?.('data-seat-id')
    if (!currentId) return
    const current = data.seats.find((seat) => seat.id === currentId)
    if (!current) return
    event.preventDefault()
    const [dx, dy] = dir
    const candidates = data.seats.filter((seat) => {
      if (dx !== 0) return seat.rowIndex === current.rowIndex && Math.sign(seat.col - current.col) === dx
      return seat.col === current.col && Math.sign(seat.rowIndex - current.rowIndex) === dy
    })
    candidates.sort((a, b) => {
      const da = Math.abs(dx !== 0 ? a.col - current.col : a.rowIndex - current.rowIndex)
      const db = Math.abs(dx !== 0 ? b.col - current.col : b.rowIndex - current.rowIndex)
      return da - db
    })
    const next = candidates[0]
    if (next) {
      svgRef.current?.querySelector<SVGGElement>(`[data-seat-id="${next.id}"]`)?.focus()
    }
  }

  return (
    <div className={clsx('sf-seatmap', className)}>
      <div className="sf-seatmap__toolbar">
        <button type="button" className="sf-seatmap__zoom" onClick={zoomOut} aria-label="Zoom out">
          −
        </button>
        <button type="button" className="sf-seatmap__zoom" onClick={reset} aria-label="Reset zoom">
          Reset
        </button>
        <button type="button" className="sf-seatmap__zoom" onClick={zoomIn} aria-label="Zoom in">
          +
        </button>
      </div>
      <div
        className="sf-seatmap__viewport"
        onWheel={handleWheel}
        onMouseDown={startPan}
        onMouseMove={movePan}
        onMouseUp={endPan}
        onMouseLeave={endPan}
      >
        <svg
          ref={svgRef}
          className="sf-seatmap__canvas"
          viewBox={`0 0 ${contentWidth} ${contentHeight}`}
          role="group"
          aria-label={`Seat map for ${data.name}. Use arrow keys to move between seats and Enter to select.`}
          onKeyDown={handleKeyNav}
        >
          <g transform={`translate(${transform.tx}, ${transform.ty}) scale(${transform.scale})`}>
            <rect
              className="sf-seatmap__stage"
              x={PADDING}
              y={PADDING}
              width={contentWidth - PADDING * 2}
              height={20}
              rx={4}
            />
            <text
              className="sf-seatmap__stage-label"
              x={contentWidth / 2}
              y={PADDING + 14}
              textAnchor="middle"
            >
              STAGE
            </text>
            {data.seats.map((seat) => {
              const pos = positions.get(seat.id)!
              return (
                <Seat
                  key={seat.id}
                  seat={seat}
                  x={pos.x}
                  y={pos.y}
                  selected={selectedIds.includes(seat.id)}
                  onSelect={onSelect}
                  onHover={(s, p) =>
                    setHovered(s ? { seat: s, pos: p ?? { x: 0, y: 0 } } : null)
                  }
                />
              )
            })}
          </g>
        </svg>
        {hovered && hovered.pos.x > 0 && (
          <SeatTooltip seat={hovered.seat} x={hovered.pos.x} y={hovered.pos.y} />
        )}
      </div>
    </div>
  )
}
