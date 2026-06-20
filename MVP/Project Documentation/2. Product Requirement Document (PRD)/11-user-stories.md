# SeatFlow - User Stories

## Epic E1 - Authentication and Account Management
| US ID | Epic | Feature | Story | Priority | Mapped FR |
|---|---|---|---|---|---|
| US-001 | E1 | Registration | As a new visitor, I want to register with an email and password so that I can create a secure customer account[cite: 1, 2]. | High | FR-001, FR-002, FR-003 |
| US-002 | E1 | Login | As a registered user, I want to log in securely using credentials so that I can access my personalized booking tools[cite: 1, 2]. | High | FR-004, FR-007 |
| US-003 | E1 | Session Continuity | As a logged-in user, I want a JWT-secured session so that I can browse securely without re-authenticating repeatedly[cite: 1, 2]. | High | FR-005 |
| US-004 | E1 | Logout | As a user, I want to log out so that my account credentials and active sessions are cleared safely[cite: 1, 2]. | High | FR-006 |
| US-005 | E1 | Profile View & Update | As a customer, I want to view and update my profile information so that my registration records remain accurate[cite: 1, 2]. | Medium | FR-008 |
| US-006 | E1 | Password Recovery | As a user, I want a password reset flow so that I can regain account access if I forget my credentials[cite: 1, 2]. | High | FR-044 |

## Epic E2 - Event Discovery
| US ID | Epic | Feature | Story | Priority | Mapped FR |
|---|---|---|---|---|---|
| US-007 | E2 | Browse Events | As a guest or registered user, I want to browse upcoming events so that I can discover entertainment opportunities[cite: 1, 2]. | High | FR-009, FR-010 |
| US-008 | E2 | Keyword Search | As a user, I want to search events by keyword so that I can find specific topics rapidly[cite: 1, 2]. | High | FR-022 |
| US-009 | E2 | Discovery Filters | As a user, I want to filter events by category, date, venue, and price so that I can narrow down choices based on my constraints[cite: 1, 2]. | High | FR-023, FR-024, FR-025 |
| US-010 | E2 | Catalog Sorting | As a user, I want to sort events by popularity, date, or availability so that I can evaluate the best booking options[cite: 1]. | Medium | FR-026 |

## Epic E3 - Seating and Reservation Control
| US ID | Epic | Feature | Story | Priority | Mapped FR |
|---|---|---|---|---|---|
| US-011 | E3 | Seat Grid Display | As a customer, I want to view available seats or seat groups so that I can choose where I sit[cite: 1, 2]. | High | FR-011 |
| US-012 | E3 | Seat Selection | As a customer, I want to select preferred seats interactively so that I can begin the checkout process[cite: 1, 2]. | High | FR-012 |
| US-013 | E3 | Double-Booking Prevention | As a customer, I want the system to prevent double booking so that I am guaranteed my selected seat upon payment confirmation[cite: 1, 2]. | High | FR-013 |
| US-014 | E3 | Category Differentiation | As a customer, I want to see explicit seat categories such as VIP and Standard so that I can choose based on my budget and preference[cite: 1, 2]. | Medium | FR-015 |

## Epic E4 - Booking Management
| US ID | Epic | Feature | Story | Priority | Mapped FR |
|---|---|---|---|---|---|
| US-015 | E4 | Create Booking | As a registered customer, I want to create a new reservation so that I can lock down my attendance[cite: 1, 2]. | High | FR-016 |
| US-016 | E4 | Booking History View | As a customer, I want to view my booking history so that I can review past events and check transaction details[cite: 1, 2]. | High | FR-031 |
| US-017 | E4 | Booking Cancellation | As a customer, I want to cancel my active booking so that my slot is released back into availability[cite: 1, 2]. | High | FR-032 |
| US-018 | E4 | Status Tracking | As a customer, I want to track my booking status (Pending, Confirmed, Cancelled, Expired) so that I know its exact lifecycle point[cite: 1, 2]. | High | FR-033 |

## Epic E5 - Reminders and Notifications
| US ID | Epic | Feature | Story | Priority | Mapped FR |
|---|---|---|---|---|---|
| US-019 | E5 | Booking Confirmation | As a customer, I want to receive an immediate booking confirmation notification so that I have definitive proof of my reservation[cite: 1, 2]. | High | FR-017, FR-029 |
| US-020 | E5 | Pre-Event Reminder | As a customer, I want an automated event reminder before the scheduled date/time so that I don't forget to attend[cite: 1, 2]. | High | FR-030, FR-036 |
| US-021 | E5 | Cancellation Notice | As a customer, I want an instant cancellation notification so that I can confirm my entry was successfully removed[cite: 1, 2]. | Medium | FR-034 |
| US-022 | E5 | Event Update Alerts | As a customer, I want an event update notification so that I am informed immediately if scheduling details change[cite: 1, 2]. | Medium | FR-035 |

## Epic E6 - Organizer and Administrator Governance
| US ID | Epic | Feature | Story | Priority | Mapped FR |
|---|---|---|---|---|---|
| US-023 | E6 | Live Analytics Dashboard | As an organizer, I want a dashboard showing total bookings, seats sold vs available, and cancellation rates so that I can evaluate event performance[cite: 1, 2]. | High | FR-037, FR-038, FR-041 |
| US-024 | E6 | Basic Booking Trends | As an administrator, I want to view platform analytics and basic booking trends so that I can oversee ecosystem growth[cite: 1, 2]. | Medium | FR-039 |
| US-025 | E6 | Event CRUD Controls | As an organizer, I want to create, update, and delete events so that the event listings stay fully up to date[cite: 1, 2]. | High | FR-018, FR-019 |
| US-026 | E6 | Seating Capacity Setup | As an organizer, I want to configure seat capacities and category definitions so that I can structure venue boundaries accurately[cite: 1, 2]. | High | FR-020 |
| US-027 | E6 | Booking Window Control | As an organizer, I want to open or close booking windows so that I can regulate when registrations are permitted[cite: 1, 2]. | Medium | FR-046 |
| US-028 | E6 | Attendee Record Management | As an organizer, I want to view attendee lists and booking summaries so that I can coordinate logistics on the day of the event[cite: 1, 2]. | Medium | FR-021 |
| US-029 | E6 | Category Admin Controls | As an administrator, I want to oversee event categories and manage booking issues so that I can maintain platform consistency[cite: 1, 2]. | Medium | FR-040, FR-048 |

## Coverage Note
All user stories are mapped to one or more functional requirements. Full end-to-end mapping is maintained in `25-traceability-matrix.md` verbatim.