## Admin Governance and Category Management

**Task**
Add administrator tooling for user oversight, global category management, and operational visibility across the platform.

**Description**
Create the admin-only control surface that can oversee users, manage event categories, review booking issues, and access platform-level analytics. This issue should define the minimum governance layer required by the MVP without drifting into unrelated enterprise workflows.

**Subtasks**
- [ ] Implement admin access guards and navigation.
- [ ] Add user account visibility and status management.
- [ ] Build global category create/read/update/delete operations.
- [ ] Add booking issue or incident visibility for support workflows.
- [ ] Create a platform analytics summary for admin oversight.

**Acceptance Criteria**
- [ ] Admin routes are inaccessible to non-admin users.
- [ ] Categories can be managed centrally and reflected in discovery filters.
- [ ] User status changes are persisted and auditable.
- [ ] Platform-level metrics are available in a dedicated admin area.

**Deliverables**
* Admin governance UI.
* Category management API and views.
* User oversight and platform analytics controls.
