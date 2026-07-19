## FastAPI Lambda Bootstrap and Health Check

**Task**
Stand up the FastAPI application so it runs cleanly in AWS Lambda through Mangum and exposes a simple health endpoint for baseline network and CORS validation.

**Description**
Initialize the backend application structure, Lambda adapter wiring, CORS policy, and environment loading so the service can be deployed serverlessly and exercised locally in a minimal way. The first implementation milestone should be a working /health endpoint that the frontend can call with fetch() to verify connectivity before any generated API client is introduced.

**Subtasks**
- [ ] Create the FastAPI application factory and Lambda entrypoint using Mangum.
- [ ] Add the /health endpoint and ensure it returns a simple readiness payload.
- [ ] Configure CORS for the frontend development origin and the eventual deployed origin.
- [ ] Add environment parsing for AWS region, DynamoDB table name, JWT settings, and deployment mode.
- [ ] Set up basic structured logging and error handling for API bootstrap failures.

**Acceptance Criteria**
- [ ] The backend responds to /health in both local and Lambda-compatible execution paths.
- [ ] CORS allows the frontend to validate network routing with a simple fetch request.
- [ ] The application can load configuration from environment variables without hard-coded values.
- [ ] The Lambda adapter is ready for deployment without container packaging.

**Deliverables**
* FastAPI application bootstrap module.
* Lambda handler entrypoint with Mangum.
* Health check endpoint and CORS configuration.
