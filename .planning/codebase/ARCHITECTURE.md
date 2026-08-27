---
last_mapped_commit: 50a7f6b04990f50ed5f03d8e7452b702b05d370b
date: 2026-08-27
---

# System Architecture

## Architecture Overview

VeeTech Website is a full-stack Server-Side Rendered (SSR) web application engineered with **TanStack Start**, **TanStack Router**, and **React 19**, bundled via **Vite** and served by a **Nitro** backend server process.

```
                  ┌──────────────────────────────────────────────┐
                  │                 Browser                      │
                  └──────────────────────┬───────────────────────┘
                                         │ HTTP Request
                                         ▼
                  ┌──────────────────────────────────────────────┐
                  │              Nitro Server Engine             │
                  │             (.output/server/index.mjs)       │
                  └──────────────────────┬───────────────────────┘
                                         │
                                         ▼
                  ┌──────────────────────────────────────────────┐
                  │            src/server.ts Entry               │
                  │     (Catastrophic Error Normalization)       │
                  └──────────────────────┬───────────────────────┘
                                         │
                                         ▼
                  ┌──────────────────────────────────────────────┐
                  │            src/start.ts Instance             │
                  │     (Error & CSRF Protection Middleware)     │
                  └──────────────────────┬───────────────────────┘
                                         │
                                         ▼
                  ┌──────────────────────────────────────────────┐
                  │             TanStack Router Router           │
                  │      (src/router.tsx & routeTree.gen.ts)     │
                  └──────────────────────┬───────────────────────┘
                                         │
                                         ▼
                  ┌──────────────────────────────────────────────┐
                  │              Root Layout Shell               │
                  │     (src/routes/__root.tsx + SiteHeader)     │
                  └──────────────────────┬───────────────────────┘
                                         │
                                         ▼
                  ┌──────────────────────────────────────────────┐
                  │             Page Route Component             │
                  │      (e.g., src/routes/index.tsx)            │
                  └──────────────────────────────────────────────┘
```

## Core Abstractions & Layers

### 1. Server & Middleware Layer
- **Nitro Engine**: Handles request serving and bundle dispatch (`vite.config.ts`, `nitro: { preset: 'node-server' }`).
- **SSR Server Entry (`src/server.ts`)**: Imports `@tanstack/react-start/server-entry` and normalizes h3 500 responses into custom HTML error pages using `renderErrorPage()`.
- **Start Middleware (`src/start.ts`)**: Configures TanStack Start request middleware pipeline with error boundaries and CSRF origin validation.

### 2. Routing & Navigation Layer
- **File-Based Routing**: Managed by `@tanstack/react-router`. Routes are declared in `src/routes/` and compiled into auto-generated route definitions in `src/routeTree.gen.ts`.
- **Router Factory (`src/router.tsx`)**: Instantiates `createRouter` wired with `QueryClient` context and enables scroll restoration.
- **Root Route (`src/routes/__root.tsx`)**: Provides document metadata (`head`), web font link preconnects, JSON-LD Schema.org data, global stylesheet import (`styles.css`), `QueryClientProvider`, global `SiteHeader`, page `<Outlet />`, `SiteFooter`, and `Toaster`.

### 3. Page & Layout Components
- **Site Layout Components (`src/components/site/`)**:
  - `site-header.tsx`: Sticky navigation bar, desktop menu links, mobile responsive navigation sheet, logo branding.
  - `site-footer.tsx`: Corporate footer, quick links, contact info, copyright details.
  - `image-slider.tsx`: Interactive hero & facility image slider leveraging Embla Carousel.
  - `process-track.tsx`: Capabilities / workflow step display (Design, Engineering, Manufacturing, Testing, Commissioning, After-Market Support).
  - `primitives.tsx`: Common typography and structural section wrappers.

### 4. UI Components (`src/components/ui/`)
- Shadcn-style reusable UI primitives built on Radix UI and styled with Tailwind CSS v4 (e.g. `button.tsx`, `card.tsx`, `dialog.tsx`, `dropdown-menu.tsx`, `sheet.tsx`, `tabs.tsx`, `carousel.tsx`).

### 5. Domain Data Layer (`src/lib/site-data.ts`)
- Single source of truth for static company information, product categories, solutions list, engineered skids metadata, services list, global market list, ISO certifications, and career openings.

## Route Map

- `/` (`src/routes/index.tsx`): Home page showcase
- `/about` (`src/routes/about.tsx`): Company profile, facilities, certifications
- `/solutions` (`src/routes/solutions.index.tsx`): Solutions overview
- `/solutions/chemical-injection-packages` (`src/routes/solutions.chemical-injection-packages.tsx`): Chemical injection skid packages
- `/solutions/wellhead-control-systems` (`src/routes/solutions.wellhead-control-systems.tsx`): Wellhead control panels & WHCP
- `/solutions/modular-packages` (`src/routes/solutions.modular-packages.tsx`): Modular skid packages
- `/solutions/engineered-solutions` (`src/routes/solutions.engineered-solutions.tsx`): Engineered solutions hub
- `/solutions/engineered-solutions/metering-skids` (`src/routes/solutions.engineered-solutions.metering-skids.tsx`)
- `/solutions/engineered-solutions/dra-injection-systems` (`src/routes/solutions.engineered-solutions.dra-injection-systems.tsx`)
- `/solutions/engineered-solutions/hipps-systems` (`src/routes/solutions.engineered-solutions.hipps-systems.tsx`)
- `/solutions/engineered-solutions/nitrogen-generator-packages` (`src/routes/solutions.engineered-solutions.nitrogen-generator-packages.tsx`)
- `/solutions/engineered-solutions/surge-relief-skids` (`src/routes/solutions.engineered-solutions.surge-relief-skids.tsx`)
- `/solutions/engineered-solutions/lube-oil-systems` (`src/routes/solutions.engineered-solutions.lube-oil-systems.tsx`)
- `/services` (`src/routes/services.tsx`): Field services & aftermarket support
- `/careers` (`src/routes/careers.tsx`): Job openings & HR contact
- `/contact` (`src/routes/contact.tsx`): Inquiry form & map location details
- `/privacy-policy` (`src/routes/privacy-policy.tsx`): Legal privacy terms
- `/terms` (`src/routes/terms.tsx`): Terms of service
