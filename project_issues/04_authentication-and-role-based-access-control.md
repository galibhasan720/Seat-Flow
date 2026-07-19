## Authentication and Role-Based Access Control

**Task**
Implement secure JWT-based authentication and enforce the four MVP roles: Guest, Registered User / Customer, Event Organizer, and Administrator.

**Description**
Build the authentication service, password hashing, token issuance, token validation, logout semantics, and dependency-based authorization guards that protect privileged routes. The role model should support guest browsing without authentication, customer booking flows, organizer event management, and administrator governance functions.

**Subtasks**
- [ ] Implement registration, login, logout, and profile retrieval flows.
- [ ] Add password hashing and credential verification.
- [ ] Issue JWT access tokens and define token claims for role and identity.
- [ ] Create role-based dependencies or middleware for protected endpoints.
- [ ] Add account status handling for active, suspended, or inactive users.

**Acceptance Criteria**
- [ ] Guests can browse public endpoints without a token.
- [ ] Customers, organizers, and administrators are blocked from unauthorized routes.
- [ ] JWT-based login works for the supported MVP roles.
- [ ] Passwords are stored and verified using secure hashing, not plain text.

**Deliverables**
* Authentication service implementation.
* JWT token and authorization guard utilities.
* Role matrix for endpoint access control.
