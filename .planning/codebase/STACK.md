---
last_mapped_commit: 50a7f6b04990f50ed5f03d8e7452b702b05d370b
date: 2026-08-27
---

# Technology Stack

## Core Technology & Runtime
- **Runtime Environment**: Node.js v22+ (supported via Alpine Docker image `node:22-alpine` in `Dockerfile`), compatible with Bun (`bun.lock` present)
- **Language**: TypeScript v5.8.3 (`tsconfig.json`)
- **Package Manager**: npm (`package-lock.json`), Bun lock file included (`bun.lock`)
- **Module System**: ES Modules (`"type": "module"` in `package.json`)

## Frameworks & Rendering Engine
- **Full-Stack Framework**: TanStack Start v1.168.32 (`@tanstack/react-start`)
- **Routing Engine**: TanStack Router v1.170.18 (`@tanstack/react-router`, `@tanstack/router-plugin` v1.168.23)
- **SSR Server Engine**: Nitro v3.0.260603-beta (`nitro`) configured with `node-server` preset (`vite.config.ts`)
- **UI Library / React**: React v19.2.0 (`react`, `react-dom`)
- **Build Tool**: Vite v8.2.0 (`vite`, `@vitejs/plugin-react` v5.2.0) with `@lovable.dev/vite-tanstack-config` v2.13.0

## UI & Styling System
- **CSS Engine**: Tailwind CSS v4.2.1 (`tailwindcss`, `@tailwindcss/vite` v4.2.1)
- **Component Primitives**: Radix UI Primitives (Accordion, Alert Dialog, Aspect Ratio, Avatar, Checkbox, Collapsible, Context Menu, Dialog, Dropdown Menu, Hover Card, Label, Menubar, Navigation Menu, Popover, Progress, Radio Group, Scroll Area, Select, Separator, Slider, Slot, Switch, Tabs, Toggle, Toggle Group, Tooltip)
- **Icons**: Lucide React v0.575.0 (`lucide-react`)
- **Animations**: `tw-animate-css` v1.3.4
- **Utilities**: `clsx` v2.1.1, `tailwind-merge` v3.5.0, `class-variance-authority` v0.7.1
- **Carousels & Interactivity**: `embla-carousel-react` v8.6.0, `embla-carousel-autoplay` v8.6.0
- **Notifications**: Sonner v2.0.7 (`sonner`)
- **Command Menu & Selection**: `cmdk` v1.1.1, `vaul` v1.1.2 (Drawer), `input-otp` v1.4.2

## State Management & Data Handling
- **Async State & Caching**: TanStack React Query v5.101.1 (`@tanstack/react-query`)
- **Form Management**: React Hook Form v7.71.2 (`react-hook-form`), `@hookform/resolvers` v5.2.2
- **Validation**: Zod v3.24.2 (`zod`)
- **Date Handling**: `date-fns` v4.1.0, `react-day-picker` v9.14.0

## Code Quality & Tooling
- **Linter**: ESLint v9.32.0 (`eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `typescript-eslint`)
- **Formatter**: Prettier v3.7.3 (`prettier`, `eslint-config-prettier`, `eslint-plugin-prettier`, `.prettierrc`, `.prettierignore`)
- **TypeScript Configuration**: `tsconfig.json` with `vite-tsconfig-paths` v6.0.2

## Deployment & Containerization
- **Containerization**: Docker multi-stage build (`Dockerfile`) targeting `node:22-alpine`
- **Orchestration**: Docker Compose (`docker-compose.yml`) exposing dev (5173) and preview (4173) ports
- **Production Server Entry**: Phusion Passenger / cPanel entrypoint via `app.js` importing `.output/server/index.mjs`
