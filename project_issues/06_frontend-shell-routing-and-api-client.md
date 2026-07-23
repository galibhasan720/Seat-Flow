# Frontend Shell, Routing & API Client

**Phase:** A/C bridge  
**Priority:** P0  
**GitHub:** #39 (audit), #43 (shell)  
**Depends on:** Feature 0 health; Feature 2 for role-aware nav  
**Blocks:** Wiring Features 5–15 into real pages

## Task

Inventory the mock `App.tsx` UI, then establish routing, layouts, and an API client so features replace mocks instead of rebuilding the UI.

## Subtasks

- [ ] Inventory screens: mock / partial / missing / broken (#39)
- [ ] Route groups: public, customer, organizer, admin (#43)
- [ ] Shared layout + role-aware navigation
- [ ] Central API client (base URL, JWT header, error mapping)
- [ ] Loading / empty / error patterns reused by all features
- [ ] Keep mock events until Feature 5 API is live

## Acceptance criteria

- [ ] Written inventory of screens vs MVP
- [ ] Routes cover Guest / Customer / Organizer / Admin
- [ ] API client ready for OpenAPI-aligned endpoints (#42)
- [ ] Responsive shell on desktop and mobile

## Note

Do not introduce Mantine or alternate UI kits unless the team explicitly decides — existing shadcn/ui kit stays.
