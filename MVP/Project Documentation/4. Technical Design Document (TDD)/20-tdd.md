
# SeatFlow - Technical Design Document (TDD)

## Technical Stack
| Layer | Technology |
|---|---|
| Frontend | React (TypeScript) |
| Backend | Python FastAPI |
| Database | AWS DynamoDB (NoSQL) |
| Auth | JWT |
| Deployment | Dockerized on AWS |

## Backend Design by Layer

### 1. Controller Layer
- FastAPI routers per bounded context:
  - `/auth`
  - `/events`
  - `/seats`
  - `/bookings`
  - `/notifications`
  - `/analytics`
- Responsibilities: request parsing, validation, role-based authorization mapping, and status codes.

### 2. Service Layer
- Encapsulates business rules:
  - Strict seat-locking and concurrency logic to prevent double booking.
  - Event status and booking window transitions.
  - Booking lifecycle management (Pending -> Confirmed -> Cancelled).
  - Reminder scheduling and capacity aggregation.

### 3. Repository Layer
- Uses DynamoDB data-access repositories.
- Responsibilities:
  - CRUD operations for events, users, and bookings.
  - Query composition through partition/sort keys for fast event catalog discovery.
  - Critical conditional writes and `TransactWriteItems` for integrity-sensitive operations (e.g., reserving a seat only if `status == 'available'`).

### 4. Authentication Layer
- JWT issuance, validation, and session continuity.
- Password hashing with secure algorithms (bcrypt/argon2).
- Role-based dependency guards for protected routes (Customer, Organizer, Administrator).

### 5. Notification Service
- Dispatching booking confirmations and cancellation notices.
- Automated background jobs for pre-event reminders.
- Delivery status, queuing, and failure retry policies.

### 6. Error Handling
- Standard error payload for high-contention endpoints:
```json
{
  "error_code": "SEAT_UNAVAILABLE",
  "message": "The selected seat was booked by another user. Please select a different seat.",
  "trace_id": "a1b2..."
}

```

* Central exception handlers for validation, auth, and domain-specific concurrency errors.

### 7. Logging

* Structured JSON logs with correlation IDs.
* Key events: Auth failures, booking transaction commits, double-booking collision captures, and event capacity updates.

### 8. Monitoring

* Metrics: API latency, double-booking rejection rates, seats sold vs. available accuracy.
* Traces: End-to-end booking spans and background reminder jobs.
* Alerts: JWT signature errors or abnormal cancellation spikes.

### 9. Caching

* Optional in-memory caching for the read-heavy Event Discovery catalog to optimize keyword search and filtering.
* Cache invalidation triggered by organizer event updates or capacity changes.

### 10. Scalability Strategy

1. Stateless FastAPI instances running in Docker containers.
2. DynamoDB partition key optimization to prevent hot partitions during high-demand event ticketing windows.
3. Decoupled notification workers to process booking confirmations and reminders asynchronously.
4. Fully responsive web architecture ensuring seamless load distribution across desktop and mobile clients.

## Frontend Design Highlights

* Type-safe API client generation to interface with FastAPI.
* Interactive and dynamic seat selection grid displaying distinct categories (e.g., VIP, Standard).
* Optimistic UI updates with strict rollback handling if a seat lock fails during checkout.
* Accessible component library with fluid responsiveness for mobile and desktop viewports.

## Design-to-Requirement Mapping

| Design Area | Requirement IDs |
| --- | --- |
| Auth & User module | FR-001..FR-008, FR-044 |
| Event Discovery module | FR-009..FR-010, FR-022..FR-026 |
| Seat & Booking module | FR-011..FR-013, FR-015..FR-016, FR-031..FR-033 |
| Reminder & Notification module | FR-017, FR-029..FR-030, FR-034..FR-036 |
| Analytics & Governance module | FR-018..FR-021, FR-037..FR-041, FR-046, FR-048 |
