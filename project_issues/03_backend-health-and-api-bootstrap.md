# Feature 0 (partial) — Backend Health & API Bootstrap

**Phase:** A — Foundation  
**Priority:** P0  
**GitHub:** #36 (completed bootstrap), follow-ups in #55  
**Status:** Largely done — keep open only for remaining MVC mount work

## Task

Keep the FastAPI bootstrap healthy: config, CORS, `/health`, `/health/db`, Docker on port 7860 for Hugging Face.

## Description

First integration milestone is frontend `fetch('/health')`. Domain features build on this entrypoint — no Mangum/Lambda adapter for MVP.

## Subtasks

- [x] FastAPI app + CORS from settings
- [x] `GET /health`
- [x] `GET /health/db` soft-fail probe
- [x] `.env.example` without secrets
- [x] Docker run path for HF Spaces (7860)
- [ ] Mount domain routers once MVC skeleton exists (#55)

## Acceptance criteria

- [x] Local uvicorn serves `/health`
- [x] Frontend can reach `/health` with CORS
- [ ] Domain routers included when Feature 0 scaffolding lands

## Out of scope

- AWS Lambda / Mangum
- DynamoDB clients
