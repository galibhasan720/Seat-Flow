# Feature 1 — Supabase Schema & Models

**Phase:** A — Foundation  
**Priority:** P0  
**GitHub:** #40  
**Depends on:** Feature 0  
**Blocks:** Auth profile rows, events, seats, bookings, notifications, analytics

## Task

Define and apply the Supabase PostgreSQL schema and SQLAlchemy (or equivalent) models for the MVP.

## Description

Relational tables must support discovery, seat selection, booking lifecycle, notifications, and role-aware organizer/admin flows. Double booking is prevented with unique constraints and transactions — not DynamoDB conditional writes.

## Tables (minimum)

- `profiles` (user id ↔ role, display fields)
- `categories`
- `events` (incl. booking window open/closed)
- `seats` (event_id, category VIP/Standard, uniqueness)
- `bookings` (status: Pending, Confirmed, Cancelled, Expired)
- `booking_seats` (or equivalent join)
- `notifications`

## Subtasks

- [ ] ERD-aligned SQL migration / Supabase SQL
- [ ] FK + unique constraints for seat ownership
- [ ] SQLAlchemy models matching tables
- [ ] Seed script for demo events/seats
- [ ] Document schema in `backend/docs`

## Acceptance criteria

- [ ] Schema exists in Supabase
- [ ] `/health/db` reports reachable (when `DATABASE_URL` set)
- [ ] Double-booking prevented at DB level
- [ ] Models importable by repositories

## Deliverables

- Migration SQL + models
- Seed data for viva demos
- Schema documentation

## Viva focus

- Tables involved; model ↔ table mapping; CRUD location
