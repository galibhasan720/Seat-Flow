/**
 * Minimal API client for Seat-Flow backend (FastAPI).
 * Base URL comes from VITE_API_BASE_URL (see .env.example).
 */

const DEFAULT_API_BASE = 'http://localhost:8000'

export function getApiBaseUrl(): string {
  const fromEnv = import.meta.env.VITE_API_BASE_URL as string | undefined
  return (fromEnv?.replace(/\/$/, '') || DEFAULT_API_BASE)
}

export type HealthResponse = {
  status: string
  env?: string
  detail?: string
}

export async function fetchHealth(signal?: AbortSignal): Promise<HealthResponse> {
  const response = await fetch(`${getApiBaseUrl()}/health`, { signal })
  if (!response.ok) {
    throw new Error(`Health check failed (${response.status})`)
  }
  return response.json() as Promise<HealthResponse>
}

export async function fetchDbHealth(signal?: AbortSignal): Promise<HealthResponse> {
  const response = await fetch(`${getApiBaseUrl()}/health/db`, { signal })
  if (!response.ok) {
    throw new Error(`DB health check failed (${response.status})`)
  }
  return response.json() as Promise<HealthResponse>
}
