# SeatFlow - Test Plan

## QA Strategy
Adopt risk-based, requirement-traceable testing across API, UI, integration, security, and performance to validate release readiness for SeatFlow, with a critical focus on strictly validating database concurrency controls to prevent double-booking incidents.

## Test Objectives
| Objective ID | Objective |
|---|---|
| TPO-01 | Validate all functional requirements (e.g., Auth, Event Discovery, Booking flows) |
| TPO-02 | Validate key non-functional requirements (e.g., Responsiveness, Concurrency limits) |
| TPO-03 | Prevent high-severity defects from reaching production, especially seat lock failures |
| TPO-04 | Ensure the end-to-end flow from event discovery to seat selection and automated reminders works reliably |

## Scope
### In Scope
- Authentication and role-based access (Customer, Organizer, Admin)
- Event discovery, filtering, and sorting
- Interactive seat selection and strict double-booking prevention
- Booking management and status tracking
- Automated pre-event reminders and confirmations
- Organizer analytics dashboard and attendee lists

### Out of Scope
- Native mobile apps (iOS/Android)
- Payment gateway integration
- IoT devices and real-time external hardware seating systems

## Entry Criteria
1. Requirements baseline (PRD/SRS) approved.
2. API contracts and DynamoDB single-table schema finalized.
3. Dockerized test environment provisioned on AWS staging.
4. Build deployed with known environment configurations.

## Exit Criteria
1. 100% High-priority FR tests passed (specifically concurrency checks).
2. No open Critical/High defects.
3. NFR baseline met for performance, security, and UI responsiveness.
4. Traceability matrix updated and complete.

## Test Types
| Test Type | Purpose | Sample Coverage |
|---|---|---|
| Unit Testing | Validate isolated logic | JWT issuance, capacity calculations, seat locking logic |
| API Testing | Validate endpoints and contracts | Event search, seat lock, booking creation APIs |
| Integration Testing | Validate service interactions | Seat Lock -> Booking Commit -> Email Confirmation |
| UI Testing | Validate user workflows | Responsive seat grid rendering, dashboard interactions |
| Regression Testing | Prevent feature breakage | Full smoke + critical booking path |
| Security Testing | Validate auth and data protection | Role enforcement (Organizer vs Customer), JWT tampering |
| Performance Testing | Validate latency/throughput | Concurrent checkout attempts on the exact same seat |
| Accessibility Testing | Validate WCAG alignment | Keyboard navigation for the seat selection grid |

## Test Environment
| Layer | Environment |
|---|---|
| Frontend | React (TypeScript) build deployed on staging |
| Backend | Python FastAPI service (Dockerized) |
| Database | AWS DynamoDB staging tables |
| Infra | AWS (ALB, ECS/Fargate containers, CloudWatch) |
| Tooling | API test runner (e.g., Postman/Newman), UI automation, Load test tools (e.g., k6 for concurrency) |

## Defect Management
| Severity | Definition | SLA |
|---|---|---|
| Critical | Production blocker / Security exploit / Double-booking allowed | Fix before release |
| High | Major feature unusable (e.g., Event creation fails) | Fix in current cycle |
| Medium | Partial impact with workaround | Fix in next planned sprint |
| Low | Minor issue / Cosmetic UI glitch / No major impact | Backlog prioritization |

## Risk Management in QA
| Risk | Impact | Mitigation |
|---|---|---|
| DynamoDB Conditional Lock Failure | High (Double booking occurs) | Execute severe concurrent load tests on specific seat IDs |
| Incomplete requirement coverage | Medium (Escaped defects) | Strict traceability gate bridging SRS to Test Cases |
| Notification provider variance | Medium (Intermittent reminder failures) | Mock + real provider contract tests for background workers |
| Environment drift | Low (Delayed testing) | Utilize Docker containers to guarantee staging matches production |

## Deliverables
1. Test cases and execution report
2. Defect log and triage summary
3. Regression and concurrency load results
4. Release quality recommendation