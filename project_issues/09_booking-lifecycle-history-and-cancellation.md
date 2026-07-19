## Booking Lifecycle, History, and Cancellation

**Task**
Implement booking creation, status tracking, booking history, and cancellation flows for registered customers.

**Description**
Create the backend and frontend behavior for the complete reservation lifecycle, including pending or confirmed states, cancellation handling, and history views tied to the authenticated customer account. The booking experience should preserve integrity across the seat lock, final confirmation, and release paths so the user always knows the exact status of a reservation.

**Subtasks**
- [ ] Implement booking creation tied to the selected seats and authenticated user.
- [ ] Add booking status transitions for pending, confirmed, cancelled, and expired.
- [ ] Build booking history and detail views.
- [ ] Implement cancellation flows that release seats immediately.
- [ ] Add status badges and lifecycle messaging in the UI.

**Acceptance Criteria**
- [ ] A customer can create a booking from selected seats.
- [ ] A customer can view past and active reservations in a dedicated history view.
- [ ] Cancellation updates status and returns the seats to availability.
- [ ] Booking state remains consistent between the frontend and backend.

**Deliverables**
* Booking lifecycle API and UI flows.
* Customer booking history screen.
* Cancellation and status management rules.
