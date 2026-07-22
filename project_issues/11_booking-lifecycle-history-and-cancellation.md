# Features 9–11 — Booking Lifecycle (Create, History, Cancel, Status)

**Phase:** E — Booking core  
**Priority:** P0  
**GitHub:** #46  
**Depends on:** Feature 8  
**Blocks:** Notifications (#47), analytics (#49)

## Feature 9 — Create booking

- [ ] `POST /bookings` with selected seat IDs
- [ ] Persist booking + seat links; status Pending/Confirmed
- [ ] Hook for confirmation notification (Feature 12)

## Feature 10 — History & status

- [ ] `GET /bookings` (current user)
- [ ] Detail view; statuses: Pending, Confirmed, Cancelled, Expired
- [ ] Dashboard UI replaces mock bookings

## Feature 11 — Cancel booking

- [ ] Cancel endpoint (PATCH/DELETE) → status Cancelled
- [ ] Release seats for rebooking
- [ ] Cancellation notification hook

## Acceptance criteria

- [ ] Authenticated user completes book → history → cancel path
- [ ] Statuses accurate in UI and DB
- [ ] Missing booking → 404; unauthorized → 401/403

## Viva focus

- Best full-stack demo: select → book → history → cancel  
- cURL/Postman create + cancel; DB CRUD explanation
