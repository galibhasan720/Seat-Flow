## DynamoDB Data Model and Access Patterns

**Task**
Design the DynamoDB schema and repository layer that will support roles, catalog browsing, bookings, seat locking, notifications, and analytics without relational joins.

**Description**
Create a single-table DynamoDB design or an equally disciplined NoSQL access model that captures users, categories, events, seats, bookings, notifications, and analytics views. The schema must support the project’s concurrency requirements, especially atomic seat locking and booking confirmation, while keeping read patterns efficient for guests, customers, organizers, and administrators.

**Subtasks**
- [ ] Define the primary table keys and item patterns for users, events, seats, bookings, notifications, and categories.
- [ ] Define the GSIs or alternate access paths required for event discovery, organizer dashboards, and admin oversight.
- [ ] Specify conditional-write strategies for seat reservation and booking confirmation.
- [ ] Define TTL or expiration handling for temporary holds and stale records.
- [ ] Draft repository interfaces for read, write, update, and transactional operations.

**Acceptance Criteria**
- [ ] The data model supports the required role-based workflows without requiring relational joins.
- [ ] The design includes a clear seat-locking strategy that prevents double booking.
- [ ] Discovery, booking history, organizer analytics, and admin views each have documented access patterns.
- [ ] The schema is suitable for mock-based integration tests with moto.

**Deliverables**
* DynamoDB schema design document.
* Access-pattern matrix mapped to each API domain.
* Repository interface contract for backend services.
