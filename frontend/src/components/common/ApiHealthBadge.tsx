import { useEffect, useState } from 'react'
import { fetchHealth, getApiBaseUrl } from '@/services/api'

type Status = 'checking' | 'ok' | 'error'

/**
 * Dev-facing status pill: confirms FE → FastAPI /health connectivity.
 */
export function ApiHealthBadge() {
  const [status, setStatus] = useState<Status>('checking')
  const [detail, setDetail] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    fetchHealth(controller.signal)
      .then((data) => {
        setStatus(data.status === 'ok' ? 'ok' : 'error')
        setDetail(data.env ? `env=${data.env}` : data.status)
      })
      .catch((err: unknown) => {
        if (err instanceof DOMException && err.name === 'AbortError') return
        setStatus('error')
        setDetail(err instanceof Error ? err.message : 'unreachable')
      })
    return () => controller.abort()
  }, [])

  const label =
    status === 'checking'
      ? 'API…'
      : status === 'ok'
        ? `API ok (${detail})`
        : `API down — ${getApiBaseUrl()}`

  return (
    <div
      style={{
        position: 'fixed',
        right: 12,
        bottom: 12,
        zIndex: 50,
        padding: '6px 10px',
        borderRadius: 8,
        fontSize: 12,
        fontFamily: 'ui-monospace, monospace',
        background:
          status === 'ok' ? '#14532d' : status === 'checking' ? '#334155' : '#7f1d1d',
        color: '#f8fafc',
        boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
        maxWidth: 280,
      }}
      title={detail || getApiBaseUrl()}
    >
      {label}
    </div>
  )
}
