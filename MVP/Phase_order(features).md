You’re at **Feature 0–1 start**: backend has `/health` + empty module folders; frontend is a large **mock UI** in `App.tsx`, not wired to the API yet.

## Current state

| Layer | Status |
|-------|--------|
| Frontend | Mock screens (events, seats, bookings, organizer) — no real API/auth |
| Backend | FastAPI app + CORS + health; **no routers**, empty services/schemas |
| DB/Auth | Planned: Supabase — not implemented as feature APIs yet |

Ignore older DynamoDB/Lambda notes. Local issue specs live in `project_issues/` (Features 0–15).

---

## Phases → features → GitHub issues

### Phase A — Finish foundation (Features 0–1)

| Step | Work | GitHub | Local file |
|------|------|--------|------------|
| Done | Local tools + cloud accounts | #35 (close when confirmed) | — |
| Done | Env bootstrap + `/health` smoke | #36 (close when confirmed) | `03_*` |
| 1 | Frontend MVP audit (mock inventory) | #39 | `06_*` |
| 2 | MVC scaffolding (routers mount) | #55 | `01_*` |
| 3 | Supabase schema + models | #40 | `02_*` |
| 4 | Smoke: FE → `/health` (+ `/health/db`) | #36 / #55 | `03_*` |

### Phase B — Auth first (Features 2–4)

| Step | Work | GitHub | Local file |
|------|------|--------|------------|
| 5 | Register / login / logout + JWT + RBAC | #41 | `04_*` |
| 6 | Profile GET/PATCH | #41 | `05_*` |
| 7 | Password reset | #41 | `05_*` |

*Viva-ready slice:* login → Network tab JWT → protected `/users/me`.

### Phase C — Read path (Feature 5)

| Step | Work | GitHub | Local file |
|------|------|--------|------------|
| 8 | App shell + API client | #43 | `06_*` |
| 9 | OpenAPI contract (events/seats/bookings) | #42 | `17_*` |
| 10 | Event discovery API + UI | #44 | `07_*` |

*Viva-ready slice:* browse/filter → Network → repository query.

### Phase D — Organizer write path (Features 6–7)

| Step | Work | GitHub | Local file |
|------|------|--------|------------|
| 11 | Event CRUD + booking windows | #48 | `08_*` |
| 12 | Seat capacity & categories | #48 | `09_*` |

### Phase E — Core product (Features 8–11)

| Step | Work | GitHub | Local file |
|------|------|--------|------------|
| 13 | Seat selection + double-book prevention | #45 | `10_*` |
| 14 | Create / history / cancel booking | #46 | `11_*` |

*Best full-stack viva demo:* select seats → book → history → cancel.

### Phase F — Extras (Features 12–15)

| Step | Work | GitHub | Local file |
|------|------|--------|------------|
| 15 | Notifications | #47 | `12_*` |
| 16 | Analytics | #49 | `13_*` |
| 17 | Admin controls | #50 | `14_*` |
| 18 | Tests (Vitest + Pytest) | #51 | `15_*` |
| 19 | Deploy Vercel + HF + Supabase | #52 | `16_*` |

---

## How to work week by week

For **each** feature in `SeatFlow_Feature_Implementation_Order.md`:

1. Backend endpoint + service + repo  
2. Frontend page/action calling it  
3. Loading / validation / errors  
4. Manual check: DevTools Network + Postman  
5. One short note: endpoint, method, status codes (viva answers)

Don’t rebuild the whole UI — **reuse** the mock screens in `App.tsx` and swap mock state for API calls.

---

## What to do this week (concrete)

1. Close done foundation issues (#35, #36) if work is verified.  
2. Finish #39 audit + #55 MVC scaffolding.  
3. Ship #40 schema, then #41 auth.  
4. Keep mock events until #44.

Full viva question map: `MVP/SeatFlow_Feature_Implementation_Order.md`  
Roadmap index: `project_issues/00_roadmap-handoff-summary.md`  
GitHub epic: https://github.com/galibhasan720/Seat-Flow/issues/56
