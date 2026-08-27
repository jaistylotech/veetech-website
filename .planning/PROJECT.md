# Project Context — VeeTech Website Containerization

## What This Is

A comprehensive containerization initiative for **VeeTech Automation FZE**, a full-stack Server-Side Rendered (SSR) web application built with **TanStack Start**, **TanStack Router**, **React 19**, **Vite 8**, and **Nitro v3** running on Node.js 22.

The goal is to containerize the entire application using Docker and Docker Compose for both development (hot-reload, source mounts) and production environments (multi-stage optimized image, security hardening, non-root execution, health checks, restart policies, and reverse proxy compatibility).

## Core Value

Ensure 100% reliable, reproducible, and secure deployment across local development, preview testing, and production hosting environments without modifying or breaking existing application functionality.

## Requirements

### Validated

- ✓ Industrial Control Automation corporate portal — existing (`src/routes/`)
- ✓ SSR rendering with TanStack Start & Nitro server engine — existing (`src/server.ts`, `src/start.ts`)
- ✓ Static domain data structures & site content — existing (`src/lib/site-data.ts`)
- ✓ Tailwind CSS v4 styling & Radix UI primitives — existing (`src/styles.css`, `src/components/ui/`)
- ✓ Codebase documentation map — existing (`.planning/codebase/`)

### Active

- [ ] Complete codebase analysis for containerization requirements (Step 1)
- [ ] Comprehensive Docker implementation plan (Step 2)
- [ ] Optimized multi-stage `Dockerfile` supporting dev and prod targets (Step 3)
- [ ] Production-grade `docker-compose.yml` / `docker-compose.prod.yml` configuration (Step 3 & 5)
- [ ] Development-oriented `docker-compose.dev.yml` supporting live hot-reloading (Step 4)
- [ ] Production-ready Nginx reverse proxy configuration (`nginx/default.conf`) (Step 5)
- [ ] Security hardening (`.dockerignore`, `.env.example`, non-root container execution) (Step 3)
- [ ] Stack validation (build, run, health checks, SSR page rendering, log verification) (Step 6)
- [ ] Comprehensive Docker documentation in `README.md` (Step 7)

### Out of Scope

- Application code refactoring or feature additions (preserve existing business logic).
- Database container setup (the site operates on static domain data; no SQL/NoSQL DB currently required).

## Key Decisions

| Decision | Rationale | Outcome |
| :--- | :--- | :--- |
| **Multi-stage Dockerfile** | Enables single Dockerfile to serve both fast dev builds and lightweight, production-ready minimal runner containers | Approved |
| **Separate Dev & Prod Compose Files** | `docker-compose.yml` / `docker-compose.dev.yml` for local dev hot-reload, `docker-compose.prod.yml` with Nginx reverse proxy for production | Approved |
| **Non-Root Execution** | Runs production runner image under standard `node` user (UID 1000) for security compliance | Approved |
| **Nginx Reverse Proxy Integration** | Standardizes HTTP/HTTPS handling, asset caching, compression, and header proxying | Approved |

---
*Last updated: 2026-08-27 after initialization*
