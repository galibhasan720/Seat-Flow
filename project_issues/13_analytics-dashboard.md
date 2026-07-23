# Feature 13 — Analytics Dashboard

**Phase:** F — Extras  
**Priority:** P1  
**GitHub:** #49  
**Depends on:** Booking lifecycle data (Features 9–11)  
**Blocks:** —

## Task

Basic analytics: total bookings, seats sold vs available, upcoming events, cancellation rate, simple trends. Role-scoped (organizer: own events; admin: platform).

## Subtasks

- [ ] Aggregate API endpoints
- [ ] Dashboard widgets (reuse mock charts where possible)
- [ ] Role gating
- [ ] Empty state when no booking data

## Acceptance criteria

- [ ] Metrics match booking/seat data
- [ ] Unauthorized roles denied
- [ ] Works with real seeded + booked data

## Viva focus

- Read/aggregate queries; why GET; service vs repository aggregation
