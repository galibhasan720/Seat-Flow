# Feature 8 — Seat Selection & Double-Booking Prevention

**Phase:** E — Booking core  
**Priority:** P0  
**GitHub:** #45  
**Depends on:** Features 5, 7, 2  
**Blocks:** Feature 9 create booking

## Task

Interactive seat selection UI with available/taken states and server-side prevention of double booking (transactions + unique constraints). Return **409 Conflict** when a seat is already taken.

## Subtasks

- [ ] Seat map / list UI from live seat API
- [ ] Client selection state (selected seats)
- [ ] Availability refresh after conflicts
- [ ] Service-layer availability checks + DB transaction
- [ ] No payment gateway

## Acceptance criteria

- [ ] Two concurrent users cannot book the same seat
- [ ] UI reflects conflict clearly
- [ ] VIP vs Standard visible

## Viva focus

- Profiler on seat clicks; 409 path; transaction/repository code
