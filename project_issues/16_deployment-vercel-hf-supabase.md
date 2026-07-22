# Feature 15 — Deployment (Vercel + HF Space + Supabase)

**Phase:** F / Ops  
**Priority:** P1  
**GitHub:** #52  
**Depends on:** Core features + CORS/Auth redirect readiness  
**Blocks:** —

## Task

Free-tier production smoke: Vercel frontend, Hugging Face Docker API, Supabase DB/Auth, CORS allowlist, Auth redirect URLs.

## Subtasks

- [ ] Deploy API Space; verify `/health` (and `/health/db`)
- [ ] Deploy frontend with `VITE_*` env pointing at HF API
- [ ] Set `CORS_ORIGINS` to Vercel origin
- [ ] Configure Supabase Auth redirect URLs for Vercel
- [ ] End-to-end smoke: guest browse → login → book (when features ready)

## Acceptance criteria

- [ ] Production FE calls production API successfully
- [ ] Auth redirects work on deployed domain
- [ ] No secrets committed

## Out of scope

- AWS Lambda / API Gateway / DynamoDB
- Paid observability stacks
- EKS / EC2 / App Runner as required hosting
