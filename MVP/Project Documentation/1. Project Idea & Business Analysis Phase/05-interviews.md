# SeatFlow - Interview Report

## Interview Framework
- Format: semi-structured, 35-45 minutes per participant
- Focus: event discovery, seat selection behavior, booking management, reminder expectations
- Artifact linkage: findings mapped to US/FR/NFR IDs

## Persona 1 - Registered User / Customer
### Background
Frequent event attendee who wants to book seats, manage reservations, and track their booking history[cite: 1, 2].

### Questions, Answers, Pain Points, Requirements, Insights
| Question | Interviewee Answer | Pain Point | Requirement Extracted | Insight |
|---|---|---|---|---|
| How do you ensure you get the seat you want? | I try to book fast, but sometimes my seat gets taken while checking out. | Double booking during checkout | FR-026, FR-027 | Real-time seat locking and preventing double booking is essential[cite: 1, 2]. |
| Why do you miss events you booked? | I forget the exact date if I don't write it down. | No automated reminders | FR-035, FR-036 | Pre-event notification service and confirmations are required[cite: 1, 2]. |
| What is important when managing your plans? | I need to see my booking status and be able to cancel easily. | Hard to track statuses | FR-030, FR-031, FR-032 | A dashboard to track statuses (Pending, Confirmed, Cancelled, Expired) is critical[cite: 1]. |

## Persona 2 - Event Organizer
### Background
Professional coordinating event setups, managing seating capacity, and monitoring event performance[cite: 1, 2].

| Question | Interviewee Answer | Pain Point | Requirement Extracted | Insight |
|---|---|---|---|---|
| What slows your planning? | Manually tracking VIP vs Standard seating. | Complex seat category management | FR-028, FR-047 | Visual seat categories (e.g., VIP and Standard) save time[cite: 1, 2]. |
| How do you report progress? | I struggle to calculate seats sold versus available quickly. | No real-time analytics | FR-041, FR-044 | The analytics dashboard must provide instant capacity metrics[cite: 1, 2]. |
| How do you handle ticketing periods? | I need to open and close booking windows manually. | Lack of control over booking timelines | FR-046 | Dedicated organizer controls for booking windows are necessary[cite: 1, 2]. |

## Persona 3 - Administrator
### Background
Platform overseer managing users, events, categories, and resolving booking issues[cite: 1, 2].

| Question | Interviewee Answer | Pain Point | Requirement Extracted | Insight |
|---|---|---|---|---|
| What is hardest during platform ops? | Troubleshooting user accounts and tracking overall cancellation rates. | Scattered user data and metrics | FR-043, FR-048 | A centralized analytics dashboard tracking total bookings and cancellations is mandatory[cite: 1, 2]. |
| What security concerns exist? | Unauthenticated users accessing booking APIs. | Security/Auth gaps | NFR-003, FR-015 | Secure JWT authentication and session management are a baseline requirement[cite: 1, 2]. |
| How do you manage content? | Grouping events into correct categories is messy. | Poor category management | FR-048 | Admin controls for users and categories improve discoverability[cite: 1, 2]. |

## Persona 4 - Guest / Visitor
### Background
Casual browser looking to discover events and compare availability before deciding whether to register[cite: 1, 2].

| Question | Interviewee Answer | Pain Point | Requirement Extracted | Insight |
|---|---|---|---|---|
| What causes friction when searching? | Cannot find events by specific dates or venues. | Inefficient discovery tools | FR-020, FR-022 | Filtering by category, date, venue, and price is essential[cite: 1, 2]. |
| How do you decide to attend? | I want to sort events by popularity or availability. | Lack of decision support | FR-023 | Sorting capabilities (popularity, date, availability) increase conversion[cite: 1]. |
| What makes you leave the platform? | Registration is required just to browse. | Forced login | FR-019 | Event discovery via keyword search must be available pre-authentication[cite: 1, 2]. |

## Consolidated Pain Points
1. High frustration due to seat conflicts and double booking during the checkout process[cite: 1, 2].
2. Poor operational visibility into event performance, specifically seats sold versus seats available[cite: 1, 2].
3. Lack of reliable pre-event reminders, update notifications, and status tracking for attendees[cite: 1, 2].
4. Inefficient event discovery without robust keyword search, sorting, and filtering options[cite: 1, 2].

## Requirements Extracted (Top 12)
FR-015 (JWT Auth), FR-020 (Keyword Search), FR-022 (Filter Events), FR-023 (Sort Events), FR-026 (Seat Display), FR-027 (Prevent Double Booking), FR-028 (Seat Categories), FR-031 (Booking History), FR-032 (Cancel Booking), FR-036 (Event Reminders), FR-041 (Seats Sold Metrics), FR-046 (Booking Windows).

## Interview Insight Summary
Users do not just need a list of events; they require a highly reliable web application that prevents double booking during seat selection[cite: 1, 2]. It must support discovery through detailed filtering[cite: 1, 2] and empower event organizers and administrators with comprehensive analytics, seating controls, and automated notification services[cite: 1, 2].