# Seat-Flow Backend

FastAPI API for the Seat-Flow MVP.

**Stack:** FastAPI + Uvicorn → Hugging Face Spaces (Docker) · Supabase PostgreSQL + Auth JWT

## Prerequisites

| Tool | Version | Check |
|------|---------|--------|
| Python | 3.11+ | `python --version` |
| Git | any recent | `git --version` |
| Docker Desktop | optional locally; required for HF image smoke | `docker --version` |

Also create a free **Supabase** project (Database URL + API keys) before filling `.env`.

## Local setup

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
Copy-Item .env.example .env
# Edit .env with your Supabase values
uvicorn app.main:app --reload --port 8000
```

- Health: http://localhost:8000/health  
- DB probe: http://localhost:8000/health/db (`skipped` until `DATABASE_URL` is set)

## Environment variables

See [`.env.example`](.env.example). Never commit `.env`.

| Variable | Purpose |
|----------|---------|
| `APP_ENV` | `local` / `production` |
| `CORS_ORIGINS` | Comma-separated frontend origins (e.g. `http://localhost:5173`) |
| `DATABASE_URL` | Supabase Postgres connection URI |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_ANON_KEY` | Public anon key (not for privileged writes) |
| `SUPABASE_SERVICE_ROLE_KEY` | Backend-only; never expose to the browser |
| `SUPABASE_JWT_SECRET` | Validate Supabase Auth JWTs |

Booking writes must go through this API so PostgreSQL constraints enforce no double-booking. Do not use the service role key from the frontend.

## Docker (Hugging Face Spaces–compatible)

Image listens on port **7860** (HF default). Install [Docker Desktop](https://www.docker.com/products/docker-desktop/) first (`docker --version` must work).

```powershell
cd backend
docker build -t seatflow-api .
docker run --rm --env-file .env -p 7860:7860 seatflow-api
```

Then open http://localhost:7860/health

If Docker is not installed yet, local `uvicorn` on port 8000 is enough for day-to-day development; build the image before pushing to Hugging Face.

### Hugging Face Space secrets

1. Create a Space with **Docker** SDK; use this `backend/` folder as the image root (or point the Space at this Dockerfile).
2. Add Space secrets matching `.env` (omit local-only values; set `APP_ENV=production`).
3. Set `CORS_ORIGINS` to your Vercel URL (and keep localhost while developing).
4. Smoke-test: `https://<user>-seatflow-api.hf.space/health`

## CORS contract

| Environment | Frontend origin | API base |
|-------------|-----------------|----------|
| Local | `http://localhost:5173` | `http://localhost:8000` |
| Deployed | `https://<project>.vercel.app` | `https://<user>-seatflow-api.hf.space` |
