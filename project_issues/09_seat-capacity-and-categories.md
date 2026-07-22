# Feature 7 — Seat Capacity & Categories Management

**Phase:** D — Organizer write path  
**Priority:** P1  
**GitHub:** #48 (capacity/categories portion)  
**Depends on:** Feature 6  
**Blocks:** Feature 8 seat selection

## Task

Define seats/seat groups per event with categories (VIP, Standard, etc.) and capacity controls in the organizer panel.

## Subtasks

- [ ] Generate or upsert seats for an event
- [ ] Category fields (VIP / Standard / …)
- [ ] Unique `(event_id, seat_label)` (or equivalent) constraint
- [ ] Organizer UI for capacity/categories
- [ ] `GET` seats for event (read path used by selection UI)

## Acceptance criteria

- [ ] Capacity changes reflect in booking flow
- [ ] Categories visible to customers
- [ ] DB uniqueness supports double-booking prevention

## Viva focus

- Seats table schema; create/update paths; relation to bookings
