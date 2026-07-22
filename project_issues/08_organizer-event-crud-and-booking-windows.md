# Feature 6 — Organizer Event CRUD & Booking Windows

**Phase:** D — Organizer write path  
**Priority:** P1  
**GitHub:** #48 (event CRUD portion)  
**Depends on:** Features 2 + 1; discovery helpful but not required  
**Blocks:** Seat capacity management (Feature 7)

## Task

Organizers create, update, and delete events and open/close booking windows.

## Subtasks

- [ ] Role guard: organizer (and admin)
- [ ] `POST/PATCH/DELETE /events` (or organizer-scoped routes)
- [ ] Booking window open/close flag
- [ ] Organizer panel UI wired to API (reuse mock organizer screens)
- [ ] Validation for required event fields

## Acceptance criteria

- [ ] Organizer can manage their events end-to-end
- [ ] Non-organizers receive 403
- [ ] Closed booking window blocks new bookings (enforced in booking feature)

## Viva focus

- Why POST/PATCH/DELETE; RBAC in controller/dependency
