# API Contract — OpenAPI for Events, Seats, Bookings

**Phase:** C (start with stubs; expand per feature)  
**Priority:** P0  
**GitHub:** #42  
**Depends on:** Feature 0 MVC + Feature 1 schema  
**Blocks:** Clean frontend integration for Features 5–11

## Task

Define FastAPI routers and Pydantic schemas so `/docs` documents the MVP booking path. Prefer OpenAPI as the contract; generate TypeScript types when stable.

## Subtasks

- [ ] Events list/detail/search schemas
- [ ] Seats availability schemas
- [ ] Booking create/list/cancel schemas
- [ ] Auth error response shapes (401/403/409/422)
- [ ] Keep `/docs` accurate as features land
- [ ] Optional: generate TS client after contract stabilizes

## Acceptance criteria

- [ ] OpenAPI covers MVP booking path
- [ ] Endpoints match auth + schema rules
- [ ] Frontend can integrate against documented routes

## Note

Initial connectivity still uses manual `fetch('/health')`. Domain calls should follow documented routes (#42), not ad-hoc undocumented URLs.
