---
last_mapped_commit: 50a7f6b04990f50ed5f03d8e7452b702b05d370b
date: 2026-08-27
---

# External Integrations

## External Services & CDN Dependencies

### Fonts & Typography CDN
- **Provider**: Google Fonts (`https://fonts.googleapis.com` & `https://fonts.gstatic.com`)
- **Location**: Preconnected and loaded in `src/routes/__root.tsx`
- **Fonts Loaded**:
  - `Inter` (weights: 400, 500, 600)
  - `Plus Jakarta Sans` (weights: 500, 600, 700, 800)
  - `JetBrains Mono` (weights: 400, 500)

### Client Error Capture & Telemetry
- **Integration**: Internal/Platform Error Reporting Utility
- **Implementation**: `src/lib/lovable-error-reporting.ts` & `src/lib/error-capture.ts`
- **Purpose**: Intercepts uncaught exceptions and window errors in browser runtime or SSR error boundaries (`RootComponent`, `ErrorComponent` in `src/routes/__root.tsx`) and posts formatted telemetry payloads.

### SEO & Schema Markup Integration
- **Provider**: Schema.org JSON-LD Structured Data
- **Implementation**: Injected via inline JSON-LD script in `src/routes/__root.tsx`
- **Entity Type**: `Organization` (VeeTech Automation FZE / Versatech Automation FZE)
- **Fields**: Name, alternate name, contact email (`sales@veetech.ae`), phone (`+971 4 881 1214`), physical address in Jebel Ali Free Zone, Dubai, AE.

## Server & Hosting Integrations

### Nitro / Node.js Server Engine
- **Integration**: Nitro SSR server (`nitro` package)
- **Preset**: `node-server` (configured in `vite.config.ts`)
- **Server Entry**: `src/server.ts` wrapped with custom catastrophic SSR error normalizer catching h3 swallowed 500 responses.

### Phusion Passenger / cPanel Hosting Setup
- **Integration**: Host process runner for traditional cPanel Node.js app environments
- **Entry File**: `app.js`
- **Execution**: Dynamically imports the compiled Nitro bundle at `./.output/server/index.mjs`.

### Docker & Development Environment
- **Docker Compose**: Service `veetech-app` using `Dockerfile`
- **Port Mappings**:
  - Port `5173`: Vite Development Server (`npm run dev`)
  - Port `4173`: Vite Production Preview Server (`npm run preview`)

## Databases & External APIs
- **Database**: None configured. All corporate information, catalog items, services, capabilities, and solutions are currently defined statically in `src/lib/site-data.ts`.
- **Authentication**: None required. Website functions as a public marketing and product showcase platform.
- **Third-Party APIs**: None active.
