# Feature 2 — Authentication, JWT & RBAC

**Phase:** B — Auth  
**Priority:** P0  
**GitHub:** #41  
**Depends on:** Features 0–1 (#40, #55)  
**Blocks:** Profile, organizer, admin, booking create

## Task

Register / login / logout via Supabase Auth; validate JWTs in FastAPI; enforce Guest / Customer / Organizer / Admin roles.

## Subtasks

- [ ] Frontend Supabase Auth client (register, login, logout)
- [ ] Attach JWT on API requests
- [ ] FastAPI dependency to validate Supabase JWT
- [ ] Role claims / `profiles.role` lookup
- [ ] Public vs protected route matrix

## Acceptance criteria

- [ ] Users can register, login, logout
- [ ] API rejects missing/invalid tokens on protected routes
- [ ] Guests can still hit public discovery endpoints
- [ ] Roles gate organizer/admin endpoints

## Viva focus

- Full frontend → API → DB flow for login
- Network tab: Authorization header, status codes
- Postman: missing vs invalid token

## Out of scope (separate or later subtasks in #41)

- Full organizer/admin UI panels
- Deep profile form (Feature 3)
- Password reset UI polish (Feature 4)
