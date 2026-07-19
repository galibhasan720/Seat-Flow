## Testing Strategy, Quality Gates, and CI Baseline

**Task**
Establish the unit and integration testing baseline for the frontend and backend and make it part of the regular delivery workflow.

**Description**
Define the required test layers for the project: Vitest for React component and hook tests, and Pytest integration coverage for FastAPI using TestClient and moto-backed DynamoDB mocks. The test strategy should emphasize critical business rules like JWT validation, seat locking, booking lifecycle transitions, and public catalog behavior without adding E2E tooling for this phase.

**Subtasks**
- [ ] Set up Vitest and React Testing Library for frontend unit tests.
- [ ] Set up Pytest, TestClient, and moto-based DynamoDB integration tests.
- [ ] Define test coverage for authentication, discovery, booking, and concurrency rules.
- [ ] Add CI-friendly commands for running the full test suite.
- [ ] Document the decision to skip Cypress and Playwright for this roadmap.

**Acceptance Criteria**
- [ ] Frontend component and hook tests run under Vitest.
- [ ] Backend integration tests run against mocked DynamoDB resources.
- [ ] Critical booking and authentication flows are covered by repeatable tests.
- [ ] The roadmap explicitly excludes E2E testing for the initial release.

**Deliverables**
* Frontend unit test harness.
* Backend integration test harness.
* Test coverage and CI execution notes.
