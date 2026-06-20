# SeatFlow - Use Cases

## UC-01 Register
| Field | Details |
|---|---|
| Actor | Guest / Visitor |
| Preconditions | User is not authenticated; email is not registered in the system. |
| Primary Flow | 1) User opens registration page. 2) Enters name, email, and password. 3) Submits form. 4) System validates unique email and password policy, creating the account. 5) Success response returned. |
| Alternative Flow | A1: Email already exists -> Show conflict error. A2: Invalid password complexity -> Show policy guidance. |
| Post Conditions | Customer account persisted in DynamoDB; user can now log in securely. |
| Related FR | FR-001, FR-002, FR-003 |

## UC-02 Login
| Field | Details |
|---|---|
| Actor | Registered User / Organizer / Administrator |
| Preconditions | Valid account exists in the database. |
| Primary Flow | 1) User enters credentials. 2) System authenticates against stored hashes. 3) JWT token issued for session security. 4) User redirected to their respective dashboard. |
| Alternative Flow | A1: Invalid credentials -> System returns `401 Unauthorized`. |
| Post Conditions | Authenticated, stateless session established via JWT. |
| Related FR | FR-004, FR-005, FR-007 |

## UC-03 Event Discovery (Search & Filter)
| Field | Details |
|---|---|
| Actor | Guest / Registered User |
| Preconditions | System contains published active events. |
| Primary Flow | 1) User accesses event catalog. 2) Enters keyword or applies filters (category, date, venue, price). 3) System queries the database. 4) Matching events are returned and sorted (by popularity, date, or availability). |
| Alternative Flow | A1: No events match filters -> Display clear empty state with option to reset filters. |
| Post Conditions | User is presented with a targeted, sorted list of events and venue options. |
| Related FR | FR-009, FR-010, FR-022, FR-023, FR-024, FR-025, FR-026 |

## UC-04 Select Seats and Create Booking
| Field | Details |
|---|---|
| Actor | Registered User / Customer |
| Preconditions | User is authenticated; Event has available seating capacity. |
| Primary Flow | 1) User opens seat grid for an event. 2) Selects preferred available seats (VIP/Standard). 3) Clicks confirm. 4) System applies strict conditional write to lock seats (prevent double booking). 5) Booking created as `Confirmed`. 6) Automated confirmation notification dispatched. |
| Alternative Flow | A1: Concurrent user grabs the exact seat milliseconds prior -> System rejects transaction, alerts user of conflict, and refreshes availability. |
| Post Conditions | Booking persisted; event capacity updated; seats rendered unavailable to others. |
| Related FR | FR-011, FR-012, FR-013, FR-015, FR-016, FR-017 |

## UC-05 Manage and Cancel Booking
| Field | Details |
|---|---|
| Actor | Registered User / Customer |
| Preconditions | User has an active (`Confirmed` or `Pending`) booking. |
| Primary Flow | 1) User navigates to booking history dashboard. 2) Selects an active booking. 3) Clicks cancel and confirms intent. 4) System updates booking status to `Cancelled`. 5) System instantly releases locked seats back to available pool. 6) Cancellation notification sent. |
| Alternative Flow | A1: Booking is for a past event -> Cancellation action disabled/hidden. |
| Post Conditions | Booking marked cancelled; event capacity adjusts positively. |
| Related FR | FR-031, FR-032, FR-033, FR-034 |

## UC-06 Create and Manage Event
| Field | Details |
|---|---|
| Actor | Event Organizer |
| Preconditions | User authenticated with Organizer role permissions. |
| Primary Flow | 1) Organizer selects "Create Event". 2) Enters event metadata, dates, and category. 3) Defines seating capacities and structural boundaries (VIP vs Standard counts). 4) Sets booking window. 5) Submits and publishes event to catalog. |
| Alternative Flow | A1: Invalid date range (end date before start date) -> Validation error. |
| Post Conditions | New event is active and discoverable by guests and customers. |
| Related FR | FR-018, FR-019, FR-020, FR-046 |

## UC-07 View Analytics Dashboard
| Field | Details |
|---|---|
| Actor | Event Organizer / Administrator |
| Preconditions | User authenticated with elevated permissions; events have active transaction data. |
| Primary Flow | 1) User opens Analytics Dashboard. 2) System aggregates booking logs. 3) Visualizes total bookings, exact ratio of seats sold vs available, and cancellation rates. |
| Alternative Flow | A1: Event has zero bookings -> Dashboard renders empty-state graphs cleanly. |
| Post Conditions | Organizer gains operational visibility into active capacity. |
| Related FR | FR-037, FR-038, FR-039, FR-041 |

## UC-08 Automated Event Reminders
| Field | Details |
|---|---|
| Actor | System (Target: Registered User) |
| Preconditions | Customer has a `Confirmed` booking; time matches pre-configured alert window. |
| Primary Flow | 1) Background service queries upcoming events. 2) Identifies `Confirmed` attendees for events occurring soon. 3) Dispatches automated pre-event reminder notification. |
| Alternative Flow | A1: User cancelled booking prior to reminder window -> Target omitted from notification batch. |
| Post Conditions | Customer is proactively informed, reducing event no-shows. |
| Related FR | FR-030, FR-036 |