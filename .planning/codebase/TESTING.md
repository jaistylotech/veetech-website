---
last_mapped_commit: 50a7f6b04990f50ed5f03d8e7452b702b05d370b
date: 2026-08-27
---

# Testing & Quality Assurance Setup

## Testing Infrastructure Overview

- **Unit / Integration Test Framework**: None configured (no Vitest, Jest, or React Testing Library installed in `package.json`).
- **End-to-End Test Framework**: None configured (no Playwright or Cypress present).
- **Static Analysis & Type Checking**: Primary automated quality verification rely on ESLint 9, Prettier formatting, and TypeScript compilation.

## Automated Verification Targets (`package.json`)

| Script Target | Command | Purpose |
| :--- | :--- | :--- |
| `npm run lint` | `eslint .` | Runs ESLint 9 flat configuration checks across JavaScript & TypeScript source files |
| `npm run format` | `prettier --write .` | Formats all workspace files using Prettier configuration |
| `npm run build` | `vite build` | Compiles client assets and Nitro server bundle (`.output/`) with full TypeScript type checks |
| `npm run build:dev` | `vite build --mode development` | Development mode build verification |
| `npm run preview` | `vite preview` | Previews production server build locally |

## Quality Control Practices

1. **Linting Verification**: ESLint verifies React Hooks rules (`eslint-plugin-react-hooks`) and React Fast Refresh compatibility (`eslint-plugin-react-refresh`).
2. **Type Safety**: TypeScript (`tsc`) validates types during `vite build`.
3. **Docker Build Validation**: Multi-stage `Dockerfile` acts as an isolation test ensuring node dependency clean installs (`npm ci`) and clean builds execute reproducibly in `node:22-alpine`.
