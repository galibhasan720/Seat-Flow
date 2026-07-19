"""Seat-Flow FastAPI entrypoint — health checks and CORS for MVP stack."""

from __future__ import annotations

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, text
from sqlalchemy.exc import SQLAlchemyError

from app.config import get_settings

settings = get_settings()

app = FastAPI(
    title="Seat-Flow API",
    description="Event seat booking API (FastAPI + Supabase PostgreSQL)",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok", "env": settings.app_env}


def _sqlalchemy_database_url(url: str) -> str:
    """Prefer psycopg (v3) driver; plain postgresql:// defaults to psycopg2."""
    if url.startswith("postgresql+psycopg://") or url.startswith("postgresql+psycopg2://"):
        return url
    if url.startswith("postgresql://"):
        return "postgresql+psycopg://" + url.removeprefix("postgresql://")
    if url.startswith("postgres://"):
        return "postgresql+psycopg://" + url.removeprefix("postgres://")
    return url


@app.get("/health/db")
def health_db() -> dict[str, str]:
    """Probe Supabase PostgreSQL connectivity. Soft-fails if DATABASE_URL is unset."""
    if not settings.database_url:
        return {
            "status": "skipped",
            "detail": "DATABASE_URL is not set",
        }

    # Placeholder template values should not attempt a real connection.
    if "YOUR_PROJECT" in settings.database_url or "YOUR_PASSWORD" in settings.database_url:
        return {
            "status": "skipped",
            "detail": "DATABASE_URL still has placeholder values",
        }

    try:
        engine = create_engine(
            _sqlalchemy_database_url(settings.database_url),
            pool_pre_ping=True,
            connect_args={"connect_timeout": 5},
        )
        with engine.connect() as connection:
            connection.execute(text("SELECT 1"))
        return {"status": "ok", "detail": "database reachable"}
    except SQLAlchemyError as exc:
        return {"status": "error", "detail": str(exc.__class__.__name__)}
    except Exception as exc:  # noqa: BLE001 — surface unexpected connect errors
        return {"status": "error", "detail": str(exc)}
