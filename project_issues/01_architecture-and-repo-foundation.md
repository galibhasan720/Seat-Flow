## Serverless Architecture and Repository Foundation

**Task**
Lock the project onto a cost-minimized serverless architecture for the backend and align the repository structure to support feature delivery without container-based hosting.

**Description**
Define the canonical architecture for the MVP: React + Vite frontend, FastAPI on AWS Lambda via Mangum, HTTP API Gateway, and DynamoDB for persistence. This issue should also standardize the repo-level conventions for environment variables, local development, configuration boundaries, and documentation so that all downstream work follows the same deployment model and cost constraints.

**Subtasks**
- [ ] Document the final platform architecture and explicitly exclude EKS, App Runner, Fargate, EC2, and Docker-based backend hosting.
- [ ] Define environment separation for local, staging, and production settings.
- [ ] Specify how the frontend, backend, and infrastructure directories will interact.
- [ ] Establish naming conventions for API routes, DynamoDB entities, and role permissions.
- [ ] Record the serverless cost assumption and operating constraints in the project docs.

**Acceptance Criteria**
- [ ] The architecture is documented as React + Vite frontend, FastAPI on Lambda, HTTP API Gateway, and DynamoDB.
- [ ] The repo conventions clearly show how configuration, secrets, and deployment artifacts are separated.
- [ ] The roadmap reflects the zero-container backend constraint and the cost-minimization goal.
- [ ] The selected architecture is consistent with the MVP scope and role model.

**Deliverables**
* Architecture decision record for the serverless backend.
* Repository convention notes for frontend, backend, and infrastructure boundaries.
* Environment configuration matrix for local, staging, and production.
