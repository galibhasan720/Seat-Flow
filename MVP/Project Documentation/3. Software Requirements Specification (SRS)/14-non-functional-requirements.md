# SeatFlow - Non-Functional Requirements

| NFR ID | Category | Requirement (Measurable Target) |
|---|---|---|
| NFR-001 | Usability | [cite_start]UI shall be fully responsive and functional across both desktop and mobile browser screens[cite: 1, 2]. |
| NFR-002 | Architecture | [cite_start]Backend services shall strictly adhere to RESTful API design principles[cite: 1, 2]. |
| NFR-003 | Security | [cite_start]All protected endpoints and user sessions shall be secured using JWT authentication[cite: 1, 2]. |
| NFR-004 | Data Persistence | [cite_start]Data shall be persisted using NoSQL database architecture utilizing AWS DynamoDB[cite: 1, 2]. |
| NFR-005 | Portability | [cite_start]System shall use Docker-based deployment to guarantee consistent execution environments[cite: 1, 2]. |
| NFR-006 | Maintainability | [cite_start]Code structure shall remain simple, modular, and maintainable, suitable for university project review[cite: 1, 2]. |
| NFR-007 | Reliability | [cite_start]Seat selection logic must support concurrency controls to guarantee 0 instances of double booking[cite: 1, 2]. |
| NFR-008 | Scope Constraint | [cite_start]System shall operate entirely as a responsive web application without requiring a native mobile app[cite: 1, 2]. |
| NFR-009 | Scope Constraint | [cite_start]System shall intentionally exclude any IoT or external hardware integrations[cite: 1, 2]. |
| NFR-010 | Scope Constraint | [cite_start]System shall execute without dependencies on complex real-time seat hardware systems[cite: 1, 2]. |
| NFR-011 | Scope Constraint | [cite_start]MVP shall not require a payment gateway, though the API architecture may permit it as a future extension[cite: 1, 2]. |

## NFR Verification Approach
| Category | Verification Method |
|---|---|
| Usability / Responsiveness | Manual testing across desktop, tablet, and mobile browser viewports to ensure UI integrity. |
| Architecture / Maintainability | Code reviews, static analysis, and university project evaluation rubrics. |
| Security | Verification of JWT token issuance, validation, expiration, and secure route access. |
| Portability | Executing Docker build and run commands on fresh environments to confirm identical container behaviors. |
| Data / Reliability | Concurrency testing and load testing on DynamoDB endpoints to verify strict double-booking prevention. |
| Scope Constraints | Architectural review confirming the complete absence of hardware, IoT, and payment processing dependencies. |