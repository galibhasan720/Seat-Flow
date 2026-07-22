# SeatFlow Feature Roadmap — Handoff Summary

**Status:** Active (aligned to MVP free-tier stack)  
**Source of truth:**
- `MVP/SeatFlow_MVP_Document.md`
- `MVP/SeatFlow_Feature_Implementation_Order.md`
- `MVP/Phase_order(features).md`

## Canonical stack (do not use AWS DynamoDB / Lambda for MVP)

| Layer | Platform |
|-------|----------|
| Frontend | React + TypeScript on **Vercel** |
| API | FastAPI + Uvicorn in **Docker** on **Hugging Face Spaces** |
| Database | **Supabase PostgreSQL** |
| Auth | **Supabase Auth** (JWT validated by FastAPI) |

Older issue drafts that assumed DynamoDB, Lambda, Mangum, or API Gateway are **obsolete**.

## Implementation phases → features → local issue files

| Phase | Features | Local issue file | GitHub issues |
|-------|----------|------------------|---------------|
| A — Foundation | 0–1 | `01`–`03` | #35–#36 (done), #39–#40, #55 · Epic #56 |
| B — Auth | 2–4 | `04`–`05` | #41 |
| C — Discovery | 5 | `06`–`07` | #42–#44 |
| D — Organizer write | 6–7 | `08`–`09` | #48 |
| E — Booking core | 8–11 | `10`–`11` | #45–#46 |
| F — Extras + release | 12–15 | `12`–`16` | #47, #49–#52 |

## Current repo reality

- Backend: `/health` (+ `/health/db` probe); module folders exist but routers/services are mostly empty.
- Frontend: large mock UI in `App.tsx` — not wired to live APIs.
- Next implementation work starts at **Feature 1 (schema)** then **Feature 2 (auth)**.

## How to use these issues

1. Implement in feature order (0 → 15).
2. For each feature: backend MVC → frontend wire-up → DevTools/Postman check → note endpoint/status codes for viva.
3. Link PRs to the matching GitHub issue.
4. Do **not** rebuild the mock UI from scratch — replace mock data with API calls.

## Acceptance for this handoff

- [x] Stack matches MVP (Vercel + HF + Supabase).
- [x] Local `project_issues` files match Features 0–15.
- [x] GitHub issues updated to the same order and dependencies.
- [x] DynamoDB/Lambda roadmap language removed from active issue set.
