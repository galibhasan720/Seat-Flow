# Feature 0 — Architecture & MVC Foundation

**Phase:** A — Foundation  
**Priority:** P0  
**GitHub:** #55 (MVC scaffolding), related #35/#36 (env/health done)  
**Depends on:** —  
**Blocks:** Features 1–15

## Task

Lock the MVP architecture and finish the FastAPI MVC scaffolding so every domain module uses Router → Controller → Service → Repository.

## Description

Canonical stack: React (Vercel) → FastAPI Docker (Hugging Face) → Supabase PostgreSQL + Auth. CORS must allow the Vercel origin. Booking writes go through the API so seat uniqueness stays enforced in PostgreSQL.

## Subtasks

- [ ] Document architecture (Vercel + HF Space + Supabase) in backend/frontend docs
- [ ] Standardize module layout: `router` / `controller` / `service` / `repository` / `schemas` / `models`
- [ ] Mount empty domain routers from `main.py` (auth, users, events, seats, bookings, notifications, analytics, admin)
- [ ] Shared error handling, logging, and settings via `app.config`
- [ ] Confirm CORS and env separation (local vs deployed)

## Acceptance criteria

- [ ] Architecture docs reject DynamoDB/Lambda for MVP
- [ ] Every domain folder has a clear MVC place for code
- [ ] `GET /health` remains the smoke endpoint
- [ ] Frontend can call `/health` (CORS OK)

## Deliverables

- Architecture notes aligned to MVP
- MVC skeleton mounted in FastAPI
- Env examples without secrets

## Viva focus

- Why Router / Controller / Service / Repository are separated
- Show `/health` request flow and CORS
