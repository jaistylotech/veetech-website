---
last_mapped_commit: 50a7f6b04990f50ed5f03d8e7452b702b05d370b
date: 2026-08-27
---

# Technical Debt & Concerns

## Known Issues & Technical Debt

### 1. Lack of Automated Test Coverage
- **Concern**: Zero unit, component, or E2E tests exist in the repository.
- **Risk**: Refactoring components or routes risks introducing subtle regressions in navigation or page rendering without immediate automated detection.
- **Remediation**: Introduce Vitest for component/utility testing and Playwright for key site flow E2E verification.

### 2. Dependency Wrapper Lock-in (`@lovable.dev/vite-tanstack-config`)
- **Concern**: `vite.config.ts` relies on `@lovable.dev/vite-tanstack-config` to inject TanStack devtools, Vite React, Tailwind, and Nitro configs under the hood.
- **Risk**: Customizing low-level Vite or Nitro plugins may cause duplicate plugin registration or build failures if the wrapper's internal defaults conflict with project requirements.
- **Remediation**: Explicitly document plugin dependencies if decoupling from `@lovable.dev` plugins is required in the future.

### 3. Phusion Passenger / cPanel Entry Coupling (`app.js`)
- **Concern**: `app.js` uses dynamic import `import('./.output/server/index.mjs')` assuming a specific Nitro build output path.
- **Risk**: If Nitro output path settings change or if building without Nitro, host execution under Phusion Passenger will break.

### 4. Static Domain Data Sprawl (`src/lib/site-data.ts`)
- **Concern**: All company content (capabilities, solutions, services, career openings, office locations) is hardcoded inside a single TS file.
- **Risk**: Adding dynamic content management (CMS), localized multi-language support, or database integration will require refactoring page components away from static imports.

## Performance & Optimization Considerations

### 1. Radix UI Dependency Footprint
- **Concern**: 25+ individual `@radix-ui/react-*` packages are included in `package.json`.
- **Risk**: Increases bundle size if tree-shaking is incomplete across all unused primitives.

### 2. CDN Font Loading Strategy
- **Concern**: Google Fonts (`Inter`, `Plus Jakarta Sans`, `JetBrains Mono`) are fetched from external Google CDN URLs in `src/routes/__root.tsx`.
- **Risk**: External network latency, potential GDPR/privacy considerations, and font layout shift if fonts load slowly over weak networks.
- **Remediation**: Self-host web fonts within `public/` directory or use font bundling tools.

## Security Considerations

- **Exposed Contact Credentials**: Standard corporate email and phone numbers are statically compiled into page sources and schema markup (expected for marketing site, but susceptible to web scrapers).
- **CSRF Protection**: CSRF middleware is enabled in `src/start.ts` for server functions; however, no server functions are currently active.
