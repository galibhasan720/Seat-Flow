# SeatFlow - Functional Requirements

| FR ID | Description | Priority | Business Justification | Related User Story |
|---|---|---|---|---|
| FR-001 | System shall allow customer and organizer registration with name, unique email, and password. | High | Enables secure user onboarding | US-001 |
| FR-002 | System shall enforce a unique email constraint during account creation. | High | Prevents identity conflicts | US-001 |
| FR-003 | System shall enforce a standard password policy (length, complexity). | High | Reduces account compromise risk | US-001 |
| FR-004 | System shall authenticate users with email/password credentials. | High | Enables secure system access | US-002 |
| FR-005 | System shall issue and manage a secure session utilizing a JWT token upon successful login. | High | Maintains secure session continuity | US-003 |
| FR-006 | System shall revoke JWT access upon user logout. | High | Prevents session misuse on shared devices | US-004 |
| FR-007 | System shall restrict access to protected booking and organizer APIs using JWT validation. | High | Protects user and platform data | US-002 |
| FR-008 | System shall allow authenticated users to view and update their profile details. | Medium | Improves account maintainability | US-005 |
| FR-009 | System shall allow guests and registered users to browse a list of upcoming events. | High | Core event discovery delivery | US-007 |
| FR-010 | System shall permit event browsing without requiring an active JWT session. | High | Reduces friction for guest discovery | US-007 |
| FR-011 | System shall display available seats or seat groups visually for a selected event. | High | Enables user decision-making for seating | US-011 |
| FR-012 | System shall allow customers to interactively select their preferred seats. | High | Required for booking initiation | US-012 |
| FR-013 | System shall strictly prevent double booking by locking seats during checkout. | High | Prevents critical concurrency errors and preserves trust | US-013 |
| FR-015 | System shall display explicit seat categories (e.g., VIP, Standard) in the selection UI. | Medium | Differentiates pricing and preference options | US-014 |
| FR-016 | System shall allow a registered customer to create a booking tied to their account and selected seats. | High | Core transactional capability | US-015 |
| FR-017 | System shall generate a booking confirmation notification immediately upon successful reservation creation. | High | Provides definitive proof of reservation | US-019 |
| FR-018 | System shall allow organizers to create and publish new events with specific dates and venues. | High | Essential for platform catalog population | US-025 |
| FR-019 | System shall allow organizers to update or delete existing events they control. | High | Keeps the event catalog accurate | US-025 |
| FR-020 | System shall allow organizers to set strict seat capacity limits and category boundaries for an event. | High | Structures venue rules mathematically | US-026 |
| FR-021 | System shall provide organizers with an actionable attendee list and booking summary for a specific event. | Medium | Enables logistical coordination | US-028 |
| FR-022 | System shall provide a keyword search feature filtering across event titles and descriptions. | High | Improves discovery efficiency | US-008 |
| FR-023 | System shall filter the event list accurately by event category. | High | Supports specific interest queries | US-009 |
| FR-024 | System shall filter the event list accurately by specified date ranges. | High | Supports schedule-based discovery | US-009 |
| FR-025 | System shall filter the event list accurately by venue and price conditions. | High | Supports location and budget constraints | US-009 |
| FR-026 | System shall sort the active event list by popularity, date, or seat availability. | Medium | Improves decision ordering for guests | US-010 |
| FR-029 | System shall record booking confirmations within the notification service. | High | Audits system communication | US-019 |
| FR-030 | System shall queue pre-event reminders based on the event's scheduled date/time. | High | Prepares proactive alerts | US-020 |
| FR-031 | System shall present a comprehensive booking history view for registered customers. | High | Enables reservation review | US-016 |
| FR-032 | System shall allow customers to cancel their active booking, releasing locked seats immediately. | High | Supports user plan changes and frees capacity | US-017 |
| FR-033 | System shall accurately track and display booking statuses (Pending, Confirmed, Cancelled, Expired). | High | Provides clear transactional context | US-018 |
| FR-034 | System shall dispatch an immediate cancellation notification upon booking termination. | Medium | Confirms user actions proactively | US-021 |
| FR-035 | System shall dispatch an event update notification if critical event details change. | Medium | Keeps attendees informed of modifications | US-022 |
| FR-036 | System shall automatically trigger and send the event reminder before the scheduled start time. | High | Prevents missed attendance | US-020 |
| FR-037 | System shall provide an analytics dashboard summarizing total bookings for organizers. | High | Delivers high-level event metrics | US-023 |
| FR-038 | System shall calculate and display the exact ratio of seats sold versus seats available in real-time. | High | Core operational visibility | US-023 |
| FR-039 | System shall calculate platform-wide basic booking trends for administrators. | Medium | Supports macro-level platform monitoring | US-024 |
| FR-040 | System shall restrict administrative actions (category management, booking issue override) to Admin roles only. | Medium | Protects ecosystem hierarchy | US-029 |
| FR-041 | System shall calculate and display the current cancellation rate on the analytics dashboard. | High | Tracks event stability metrics | US-023 |
| FR-044 | System shall provide a secure password reset flow using verified email verification. | High | Enables account recovery | US-006 |
| FR-046 | System shall provide organizers with controls to open or close booking windows arbitrarily. | Medium | Regulates when registration is permitted | US-027 |
| FR-048 | System shall allow administrators to globally manage, create, or suspend event categories. | Medium | Maintains taxonomy consistency | US-029 |

## Requirement Notes
1. FR IDs are baseline-controlled and referenced in use cases, API design, test cases, and traceability matrix.
2. Implementation prioritizes High requirements for MVP, focusing strictly on resolving concurrency (double booking) and discovery.

## SMART Quality Check for Functional Requirements
| SMART Element | Functional Requirement Quality Rule |
|---|---|
| Specific | Each FR states a clear system behavior with unambiguous language (e.g., Organizer actions vs Guest actions). |
| Measurable | Each FR is testable through the NoSQL/FastAPI stack (e.g., locking seats during checkout). |
| Achievable | FR scope specifically limits to web-based actions, omitting IoT and Hardware constraints. |
| Relevant | Each FR directly supports double-booking prevention, discovery, or operational dashboard needs. |
| Timely | FR execution is mapped explicitly to the 16-week university project MVP scope. |

## MoSCoW Mapping for Functional Requirements
| MoSCoW Category | Priority Mapping | FR Coverage (examples) |
|---|---|---|
| Must Have | High | FR-001..FR-007, FR-009..FR-013, FR-016..FR-020, FR-022..FR-025, FR-029..FR-033, FR-036..FR-038, FR-041, FR-044 |
| Should Have | Medium | FR-008, FR-015, FR-021, FR-026, FR-034..FR-035, FR-039..FR-040, FR-046, FR-048 |
| Could Have | Low | Complex visual layout customizations within the seat selection grid. |
| Won't Have (this release) | Not in FR baseline | External payment gateway validations, native mobile app generation, complex real-time seat hardware triggers. |