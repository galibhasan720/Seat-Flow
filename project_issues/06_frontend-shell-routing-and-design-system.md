## Frontend Shell, Routing, and Design System

**Task**
Build the core React application shell with routing, responsive layouts, and reusable UI primitives that can support guest, customer, organizer, and admin experiences.

**Description**
Convert the existing mock-heavy frontend into a maintainable application structure with clear route boundaries, shared layout primitives, and a consistent design system. This should include loading states, empty states, navigation, and basic auth-aware shell behavior so later domain features can be composed into a stable product UI instead of a single monolithic demo.

**Subtasks**
- [ ] Create route groups for public browsing, customer booking, organizer tools, and admin tools.
- [ ] Extract reusable UI primitives and shared layout components.
- [ ] Define responsive navigation and top-level shell behavior.
- [ ] Add loading, error, and empty-state patterns for data-driven views.
- [ ] Align the frontend styles with the existing visual direction from the mock UI.

**Acceptance Criteria**
- [ ] The app has a durable route structure for all MVP personas.
- [ ] Shared layouts and UI primitives reduce duplication across screens.
- [ ] Responsive behavior works for desktop and mobile breakpoints.
- [ ] The shell can host generated API-driven feature views.

**Deliverables**
* React route and layout architecture.
* Shared UI component foundation.
* Responsive shell implementation.
