# Seat-Flow Frontend

React + TypeScript (Vite) UI for the Seat-Flow MVP.

**Deploy target:** Vercel · talks to FastAPI on Hugging Face Spaces · Auth via Supabase

## Prerequisites

| Tool | Version | Check |
|------|---------|--------|
| Node.js | 20 LTS (or newer) | `node -v` |
| npm | comes with Node | `npm -v` |
| Git | any recent | `git --version` |

Optional: Docker is not required for the frontend. Create free **Supabase** and **Vercel** accounts when you are ready to wire Auth and deploy.

## Local setup

```powershell
cd frontend
npm install
Copy-Item .env.example .env
# Edit .env — at minimum set VITE_API_BASE_URL=http://localhost:8000
npm run dev
```

App: http://localhost:5173

Start the backend on port 8000 (see [`../backend/README.md`](../backend/README.md)) so the API status pill can reach `/health`.

## Environment variables

See [`.env.example`](.env.example). Never commit `.env`.

| Variable | Purpose |
|----------|---------|
| `VITE_API_BASE_URL` | FastAPI base URL (`http://localhost:8000` locally; HF Space URL in production) |
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon (public) key |

Do not put `SUPABASE_SERVICE_ROLE_KEY` in the frontend. Booking writes go through the API.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm test` | Vitest |

## Vercel deployment

1. Import the GitHub repo in Vercel (Hobby).
2. Set **Root Directory** to `frontend`.
3. Add environment variables:
   - `VITE_API_BASE_URL` = `https://<user>-seatflow-api.hf.space`
   - `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` from Supabase
4. Deploy, then add the Vercel URL to:
   - Backend `CORS_ORIGINS`
   - Supabase Auth → URL configuration (redirects)
