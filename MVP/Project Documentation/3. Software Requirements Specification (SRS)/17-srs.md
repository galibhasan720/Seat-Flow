# SeatFlow - Software Requirements Specification (SRS)

## 1. Introduction
### 1.1 Purpose
This SRS defines the functional and non-functional requirements for SeatFlow, a web-based event seat booking platform where users can discover events, select seats securely, manage their reservations, and receive automated reminders.

### 1.2 Scope
The system supports secure user access, event discovery, real-time seat locking to prevent double booking, reservation management, automated notifications, and operational dashboards. The technology stack includes React (TypeScript) for the frontend, Python FastAPI for the backend, AWS DynamoDB (NoSQL) for persistence, and Dockerized AWS deployment. The scope strictly excludes IoT devices, external hardware, and payment gateways.

### 1.3 Definitions and Acronyms
| Term | Meaning |
|---|---|
| FR | Functional Requirement |
| NFR | Non-Functional Requirement |
| JWT | JSON Web Token |
| MVP | Minimum Viable Product |
| PRD | Product Requirements Document |
| SRS | Software Requirements Specification |
| AWS | Amazon Web Services |

### 1.4 References
- PRD: `prd.md`
- Functional Requirements: `functional-requirements.md`
- Non-Functional Requirements: `non-functional-requirements.md`
- Traceability: `traceability-matrix.md`

## 2. Overall Description
### 2.1 Product Perspective
SeatFlow is a three-tier web system designed as a university MVP:
1. React (TypeScript) frontend for responsive desktop and mobile user interaction.
2. Python FastAPI backend for RESTful APIs and business logic.
3. AWS DynamoDB (NoSQL) for persistent data storage and handling concurrent seat locks.

### 2.2 Product Functions
- Account registration, JWT login, and profile management
- Event discovery via keyword search and advanced filtering/sorting
- Interactive seat selection with double-booking prevention and seat categories
- Booking lifecycle management (Create, View, Cancel, Status Tracking)
- Automated pre-event reminders and booking confirmations
- Analytics dashboards for organizers (seats sold vs available, cancellation rates)
- Event, category, and attendee list management

### 2.3 User Classes
Guests / Visitors, Registered Users / Customers, Event Organizers, Administrators.

### 2.4 Operating Environment
- Modern web browsers (Chrome, Firefox, Edge, Safari) on both desktop and mobile screens.
- Backend running in a Dockerized Linux runtime deployed on AWS.
- AWS DynamoDB cloud persistence.

### 2.5 Constraints
- JWT-based authentication is mandatory for all protected routes.
- The MVP schedule is strictly constrained to a 16-week university academic timeline.
- The system must explicitly operate without a native mobile app, payment processing gateways, or external IoT/hardware integrations.

### 2.6 Assumptions and Dependencies
- AWS DynamoDB conditional writes will reliably manage seat concurrency to prevent double booking.
- Docker will be used to ensure consistent execution environments for academic reviewers.
- Outbound notification delivery will be handled by a standard external delivery service/provider.

## 3. Functional Requirements
Complete baseline in `functional-requirements.md`.

### 3.1 Summary by Domain
| Domain | FR Range |
|---|---|
| Authentication & User Management | FR-001..FR-008, FR-044 |
| Event Discovery & Catalog | FR-009..FR-010, FR-022..FR-026 |
| Seat Selection & Booking | FR-011..FR-013, FR-015..FR-017, FR-031..FR-033 |
| Reminder & Notification Service | FR-029..FR-030, FR-034..FR-036 |
| Analytics & System Governance | FR-018..FR-021, FR-037..FR-041, FR-046, FR-048 |

## 4. Non-Functional Requirements
Complete baseline in `non-functional-requirements.md`.

### 4.1 Quality Attribute Summary
| Attribute | NFR IDs |
|---|---|
| Usability & Responsiveness | NFR-001 |
| Architecture & Maintainability | NFR-002, NFR-006 |
| Security | NFR-003 |
| Data Persistence & Portability | NFR-004, NFR-005 |
| Reliability (Concurrency) | NFR-007 |
| Scope Constraints | NFR-008..NFR-011 |

## 5. External Interface Requirements
### 5.1 User Interfaces
Responsive web UI adapting fluidly to both desktop and mobile viewports. Includes distinct interfaces for customer browsing/booking and organizer/admin dashboards.

### 5.2 Software Interfaces
- RESTful APIs communicating over HTTPS.
- JWT-based authentication tokens.
- AWS DynamoDB SDK connections for database interactions.

### 5.3 Hardware Interfaces
No hardware interfaces required. Hardware and IoT integration are explicitly out of scope.

### 5.4 Communication Interfaces
HTTPS/TLS 1.2+ for all client-server communication, passing JSON payloads.

## 6. Assumptions and Constraints
1. The platform operates under a single-tenant domain architecture suitable for an MVP rollout.
2. Payment gateway integration is deferred to future post-MVP extensions.
3. Strict adherence to the web-only requirement; native iOS/Android development is out of bounds for this release.

## 7. Appendices
### Appendix A - Use Cases
See `use-cases.md`.

### Appendix B - Data Flow Diagrams
See `dfd.md`.

### Appendix C - Test Plan & Cases
To be tracked under `test-plan.md` and `test-cases.md` (Focusing heavily on concurrency and double-booking prevention).