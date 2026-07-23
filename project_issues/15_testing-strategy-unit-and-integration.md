# Testing Strategy — Unit & Integration

**Phase:** Ops (parallel after core booking works)  
**Priority:** P1  
**GitHub:** #51  
**Depends on:** Auth + booking APIs ideally  
**Blocks:** —

## Task

Baseline automated tests: Vitest for critical frontend logic; Pytest + TestClient for FastAPI auth/booking paths; wire into CI.

## Subtasks

- [ ] Vitest for helpers/hooks (seat selection state, validators)
- [ ] Pytest for JWT rejection, booking create/cancel, double-book 409
- [ ] Prefer PostgreSQL test DB or transactional fixtures — **not** moto/DynamoDB
- [ ] Document local test commands
- [ ] Ensure GitHub Actions runs tests on PRs

## Acceptance criteria

- [ ] CI runs frontend + backend tests
- [ ] Critical booking path covered on backend
- [ ] No Cypress/Playwright required for MVP

## Out of scope

- Full E2E browser suite
- DynamoDB moto mocks
