# Feature 5 — Event Discovery (Browse, Search, Filter, Sort)

**Phase:** C — Read path  
**Priority:** P0  
**GitHub:** #44 (also contract work in #42)  
**Depends on:** Feature 1 schema + seed; OpenAPI stubs (#42); shell (#43)  
**Blocks:** Seat selection entry from event detail

## Task

Guests and users browse upcoming events with keyword search, filters (category, date, venue, price), and sort (popularity, date, availability).

## Subtasks

- [ ] `GET /events` with query params
- [ ] `GET /events/{id}` detail
- [ ] Seed or insert demo events
- [ ] Replace mock `BASE_EVENTS` with API data
- [ ] Empty / no-result / loading states

## Acceptance criteria

- [ ] Guests can discover events without login
- [ ] Filters and sorts work against live/seeded data
- [ ] OpenAPI docs match implemented endpoints

## Viva focus

- Query-param GET design; Network tab; repository read query
