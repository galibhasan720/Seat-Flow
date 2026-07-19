# Seat-Flow API — Hugging Face Spaces + Vercel wiring

## Hugging Face Space (Docker)

1. Create a Space with SDK **Docker**.
2. Use [`../Dockerfile`](../Dockerfile) from the `backend/` directory as the image root.
3. Configure **Secrets** (Space settings), matching local `.env` (never commit secrets):

| Secret | Notes |
|--------|--------|
| `APP_ENV` | `production` |
| `CORS_ORIGINS` | Vercel URL(s), comma-separated; include `http://localhost:5173` while developing |
| `DATABASE_URL` | Supabase Postgres URI |
| `SUPABASE_URL` | Project URL |
| `SUPABASE_ANON_KEY` | Anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Backend only |
| `SUPABASE_JWT_SECRET` | From Supabase Project Settings → API |

4. After build, verify: `GET https://<space>.hf.space/health` → `{"status":"ok",...}`

Local Docker smoke (requires Docker Desktop):

```powershell
cd backend
docker build -t seatflow-api .
docker run --rm --env-file .env -p 7860:7860 seatflow-api
```

## Vercel (frontend)

1. Import the monorepo; set root directory to `frontend`.
2. Environment variables: `VITE_API_BASE_URL` (HF Space URL), `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`.
3. Deploy, then update backend `CORS_ORIGINS` and Supabase Auth redirect URLs with the Vercel domain.

## CORS

Frontend origin must be listed in `CORS_ORIGINS`. Booking mutations go through the API only (not the Supabase service role from the browser).
