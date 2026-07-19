## Seat Selection and Concurrency Safety

**Task**
Implement interactive seat selection and enforce atomic seat locking so concurrent customers cannot double book the same seat.

**Description**
Create the seat map, seat status rendering, and selection workflow for the booking flow, then connect it to backend operations that reserve seats with conditional writes or equivalent atomic guarantees. The UI should explain seat categories such as VIP and Standard and reflect the temporary lock, sold, reserved, and unavailable states accurately.

**Subtasks**
- [ ] Build the interactive seat grid and legend.
- [ ] Show seat categories and price differences clearly.
- [ ] Implement seat hold/lock behavior before booking confirmation.
- [ ] Handle concurrency conflict responses and refresh availability after rejection.
- [ ] Add customer-facing feedback for sold, held, reserved, and blocked seats.

**Acceptance Criteria**
- [ ] Customers can select only seats that are currently available.
- [ ] Concurrent seat claims are resolved without double booking.
- [ ] The seat map updates immediately after lock or conflict responses.
- [ ] Seat category and pricing distinctions are visible in the UI.

**Deliverables**
* Interactive seat map component.
* Atomic seat-locking workflow definition.
* Conflict handling and availability refresh behavior.
