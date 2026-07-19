## API Contract, OpenAPI, and Generated Client

**Task**
Establish the API contract workflow so the frontend can first validate connectivity with /health and then switch to generated TypeScript client code from the FastAPI OpenAPI schema.

**Description**
Use a manual fetch() call only for the initial network validation against the backend health endpoint, then require all subsequent frontend-to-backend integration to use generated TypeScript interfaces and API hooks from FastAPI’s OpenAPI document. This issue should define the generator choice, client generation commands, update strategy, and the contract boundaries that keep the frontend and backend aligned as features expand.

**Subtasks**
- [ ] Document the initial manual fetch() validation flow for /health.
- [ ] Choose and configure an OpenAPI generator such as openapi-typescript-codegen or orval.
- [ ] Define the generated client output location and regeneration command.
- [ ] Map backend schemas and response envelopes to frontend types.
- [ ] Add a contract update rule for new or changed backend endpoints.

**Acceptance Criteria**
- [ ] The frontend can verify CORS and routing with a simple health check fetch.
- [ ] The project standard requires generated API types and hooks for feature work after baseline validation.
- [ ] The generator is documented and tied to the FastAPI schema source of truth.
- [ ] Contract changes have a repeatable regeneration process.

**Deliverables**
* OpenAPI client generation decision and commands.
* Frontend API contract integration guide.
* Type generation and schema synchronization notes.
