# Features 3–4 — Profile View/Update & Password Reset

**Phase:** B — Auth  
**Priority:** P0  
**GitHub:** #41 (same epic; track checkboxes here / in #41 body)  
**Depends on:** Feature 2  
**Blocks:** Organizer identity fields; polished auth UX

## Feature 3 — Profile

### Subtasks

- [ ] `GET /users/me` (or equivalent) via FastAPI → `profiles`
- [ ] `PATCH /users/me` with validation
- [ ] Auth-guarded profile page in React
- [ ] Loading / error / success states

### Acceptance

- [ ] Authenticated user can view and update profile
- [ ] Invalid payloads return 422; missing auth returns 401

## Feature 4 — Password reset

### Subtasks

- [ ] Forgot-password UI
- [ ] Supabase Auth reset email flow
- [ ] Reset confirmation page / redirect URLs

### Acceptance

- [ ] User can request reset with valid email
- [ ] Invalid/missing email handled clearly
- [ ] Redirect URLs documented for local + Vercel

## Viva focus

- Profile: full MVC + DB update path
- Reset: client → Supabase (explain if not proxied through FastAPI)
