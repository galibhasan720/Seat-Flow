## Event Discovery Catalog and Search

**Task**
Implement the public event discovery experience with search, filter, sort, and event detail views for guests and registered users.

**Description**
Build the event catalog so users can browse upcoming events, inspect availability, and narrow the catalog by category, date, venue, price, and popularity. This is one of the core value paths for the MVP and should work without authentication while still reflecting accurate availability data from the backend.

**Subtasks**
- [ ] Implement the public catalog list with pagination or infinite navigation.
- [ ] Add keyword search and the required filter dimensions.
- [ ] Add sorting by popularity, date, and availability.
- [ ] Build the event detail page with metadata, pricing, and availability context.
- [ ] Add empty-state and no-match behavior for filtered results.

**Acceptance Criteria**
- [ ] Guests can browse events without logging in.
- [ ] Search, filter, and sort behaviors return consistent results from the backend.
- [ ] Event details display enough information for a user to decide whether to proceed.
- [ ] Availability is shown accurately in the catalog and detail screens.

**Deliverables**
* Event catalog and detail UI.
* Search/filter/sort integration.
* Public discovery UX behavior specification.
