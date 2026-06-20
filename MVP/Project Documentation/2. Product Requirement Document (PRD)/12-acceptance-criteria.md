# SeatFlow - Acceptance Criteria

## Feature-Level Gherkin Acceptance Criteria

### AC-01 Registration & Login Lifecycle (FR-001..FR-008, FR-044)
- **Given** a visitor on the registration page, **when** valid registration details are submitted, **then** an account is created and a success response is returned[cite: 1, 2].
- **Given** valid user credentials, **when** the login endpoint is hit, **then** the system issues a secure session utilizing a JWT token[cite: 1, 2].
- **Given** an authenticated session, **when** a profile view or profile update request is submitted, **then** the system securely updates or reflects the user's data[cite: 1, 2].
- **Given** a user triggers the password reset flow, **when** valid credentials are confirmed, **then** the system updates the account access baseline[cite: 1, 2].

### AC-02 Event Discovery (FR-009, FR-010, FR-019..FR-023)
- **Given** a guest or registered user on the platform, **when** browsing upcoming events, **then** the active catalog displays correct availability[cite: 1, 2].
- **Given** a specific search keyword, **when** a user performs a search, **then** the system returns matching events across titles or metadata[cite: 1, 2].
- **Given** strict filter parameters (category, date, venue, and price), **when** applied to the event feed, **then** only items meeting all conditions are displayed[cite: 1, 2].
- **Given** multiple sorting options, **when** sorting by popularity, date, or availability is selected, **then** the event listing rearranges immediately[cite: 1].

### AC-03 Interactive Seat Selection (FR-011..FR-013, FR-015, FR-024..FR-028)
- **Given** an event configuration grid, **when** a customer views the reservation UI, **then** available seats or seat groups are displayed with explicit categories such as VIP and Standard[cite: 1, 2].
- **Given** a customer selects preferred seats, **when** they proceed to checkout, **then** the system places a temporary lock on the slots to prevent double booking[cite: 1, 2].
- **Given** a concurrent checkout attempt for the exact same seat, **when** a second user tries to confirm, **then** the system rejects the second request and maintains single-occupancy persistence[cite: 1, 2].

### AC-04 Booking Management (FR-016, FR-029..FR-033)
- **Given** a finalized seat configuration, **when** a customer creates a booking, **then** the transaction is persisted under a specific tracking status (Pending, Confirmed, Cancelled, or Expired)[cite: 1, 2].
- **Given** an active authenticated user, **when** checking the booking history interface, **then** a complete chronological record of past and present reservations is rendered[cite: 1, 2].
- **Given** a confirmed reservation, **when** a customer chooses to cancel the booking, **then** the status updates to `Cancelled` and the locked seats are instantly released back to the available pool[cite: 1, 2].

### AC-05 Reminder & Notification Service (FR-017, FR-034..FR-036, FR-038)
- **Given** a successfully processed reservation, **when** the transaction commits, **then** an automated booking confirmation notification is generated and sent to the user[cite: 1, 2].
- **Given** an upcoming scheduled event, **when** the configured pre-event alert threshold is reached, **then** an event reminder is pushed to the user before the scheduled date/time[cite: 1, 2].
- **Given** an unexpected operational change or reservation termination, **when** triggered, **then** a cancellation notification or event update notification is broadcasted cleanly[cite: 1, 2].

### AC-06 Analytics Dashboard (FR-037, FR-039, FR-041..FR-044)
- **Given** active transactional data, **when** an organizer or administrator accesses the analytics dashboard, **then** real-time calculations for total bookings and cancellation rates are rendered[cite: 1, 2].
- **Given** an ongoing event lifecycle, **when** the system calculates seat status, **then** the dashboard must show an exact mathematical match of seats sold vs seats available[cite: 1, 2].
- **Given** historical platform records, **when** tracking basic booking trends or looking over upcoming events, **then** the charts plot accurate aggregations from NoSQL persistence[cite: 1, 2].

### AC-07 Organizer & Admin System Governance (FR-018, FR-045..FR-049)
- **Given** an elevated organizer account, **when** interacting with administrative panels, **then** the user can execute complete create, update, and delete actions on events[cite: 1, 2].
- **Given** active seating capacity constraints, **when** an organizer updates data, **then** total seat capacities and category definitions overwrite safely across the system modules[cite: 1, 2].
- **Given** timeline constraints, **when** an organizer chooses to open or close booking windows, **then** the seat selection interface dynamically locks or unlocks for customers[cite: 1, 2].
- **Given** a live event setup, **when** pulling operational summaries, **then** the organizer can view clean attendee lists and booking summaries[cite: 1, 2].

### AC-08 Non-Functional & Deployment Baseline (NFR-001..NFR-006)
- **Given** varying user screen dimensions, **when** rendering UI layout flows, **then** the views seamlessly snap to a fully responsive web presentation matching desktop and mobile screens[cite: 1, 2].
- **Given** an active RESTful API route deployment, **when** endpoints are called, **then** actions resolve cleanly over stateless JWT secured schemas backed by AWS DynamoDB[cite: 1, 2].
- **Given** a clean deployment request, **when** spinning up infrastructure via Docker, **then** the container executes a consistent, maintainable environment ready for standard AWS cloud staging[cite: 1, 2].