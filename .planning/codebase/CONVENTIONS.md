---
last_mapped_commit: 50a7f6b04990f50ed5f03d8e7452b702b05d370b
date: 2026-08-27
---

# Code Conventions & Style Guide

## Language & File Formatting

- **TypeScript Standard**: Strict TypeScript with ESNext module resolution (`tsconfig.json`).
- **Formatting Tools**: Prettier (`.prettierrc`) with standard double quotes, semicolons enabled, 2 spaces indentation.
- **Linting Rules**: ESLint 9 (`eslint.config.js`) flat config utilizing `@eslint/js`, `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`.

## Naming Conventions

### File Naming
- **Routes**: Kebab-case with dot notation reflecting route nesting (`solutions.chemical-injection-packages.tsx`).
- **Components**: Kebab-case (`site-header.tsx`, `process-track.tsx`, `image-slider.tsx`).
- **Utilities & Hooks**: Kebab-case prefixed with `use-` for hooks (`use-mobile.tsx`, `error-capture.ts`, `site-data.ts`).

### Code Identifiers
- **React Components**: PascalCase named exports or route constants (`export function SiteHeader()`, `export const Route = createFileRoute(...)`).
- **Constants**: Upper Snake Case for static configuration arrays (`COMPANY`, `SOLUTIONS`, `SERVICES`, `CAPABILITIES` in `src/lib/site-data.ts`).
- **Tailwind Utility Helper**: `cn(...)` exported from `src/lib/utils.ts` combining `clsx` and `tailwind-merge`.

## Component Architecture Patterns

### 1. UI Component Wrapper Pattern (Radix UI + Shadcn)
Components in `src/components/ui/` wrap Radix UI primitive primitives with `class-variance-authority` (CVA) variants:

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center ...", {
  variants: {
    variant: { default: "bg-primary ...", outline: "border ..." },
    size: { default: "h-9 px-4", sm: "h-8 px-3" }
  },
  defaultVariants: { variant: "default", size: "default" }
});
```

### 2. Route Definition Pattern (TanStack Router)
Routes declare route meta, components, and optional loaders via `createFileRoute`:

```tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/solutions/chemical-injection-packages")({
  component: ChemicalInjectionPage,
});
```

### 3. Static Site Data Centralization Pattern
Domain content and metadata are stored as immutable `as const` data structures in `src/lib/site-data.ts` to facilitate easy content management without component sprawl.

## Error Handling Conventions

1. **Client Boundary**: Errors inside React components trigger TanStack Router `ErrorComponent` boundaries in `src/routes/__root.tsx`, reporting errors via `reportLovableError`.
2. **SSR Entry Protection**: `src/server.ts` catches unhandled Nitro/h3 server exceptions and converts them into standardized HTML error responses via `renderErrorPage()`.
3. **Middleware Guards**: CSRF origin checks (`createCsrfMiddleware`) and error boundaries (`createMiddleware`) are registered in `src/start.ts`.
