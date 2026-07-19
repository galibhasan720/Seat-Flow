# Frontend deployment (Vercel)

## Environment variables (Vercel project settings)

| Name | Example |
|------|---------|
| `VITE_API_BASE_URL` | `https://<user>-seatflow-api.hf.space` |
| `VITE_SUPABASE_URL` | `https://xxxx.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | anon key from Supabase |

## Project settings

- Framework preset: Vite
- Root directory: `frontend`
- Build command: `npm run build`
- Output directory: `dist`

After deploy, add the Vercel URL to backend `CORS_ORIGINS` and Supabase Auth redirect URLs.

See also [`../../backend/docs/deployment.md`](../../backend/docs/deployment.md) for Hugging Face Space secrets.
