---
last_mapped_commit: 50a7f6b04990f50ed5f03d8e7452b702b05d370b
date: 2026-08-27
---

# Codebase Directory Structure

```
veetech-website/
├── .gitignore                    # Git ignore rules
├── .prettierignore               # Prettier ignore rules
├── .prettierrc                   # Prettier formatting rules
├── AGENTS.md                     # Agent development guidance & conventions
├── Dockerfile                    # Multi-stage Docker build config for Node.js 22
├── README.md                     # Project overview and run instructions
├── app.js                        # cPanel / Phusion Passenger Node.js entry point
├── bun.lock                      # Bun package manager lock file
├── bunfig.toml                   # Bun configuration file
├── components.json               # Shadcn UI CLI configuration
├── copy_media.py                 # Python utility for asset processing
├── docker-compose.yml            # Local development orchestration (5173/4173)
├── eslint.config.js              # ESLint 9 flat configuration
├── package.json                  # Dependencies and npm script targets
├── package-lock.json             # npm lock file
├── tsconfig.json                 # TypeScript compiler options & alias paths
├── vite.config.ts                # Vite & TanStack Start build configuration
├── public/                       # Static public assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   ├── robots.txt
│   └── veetech-logo.png
└── src/                          # Application source code
    ├── assets/                   # Industrial imagery & graphics
    │   ├── chemical-skid.jpg
    │   ├── cta-plant.jpg
    │   ├── diversity-team.jpg
    │   ├── engineering.jpg
    │   ├── field-service.jpg
    │   ├── hero-facility.jpg
    │   ├── hpu.jpg
    │   ├── jebel-ali.jpg
    │   ├── manufacturing.jpg
    │   ├── modular-skid.jpg
    │   ├── offshore.jpg
    │   ├── testing.jpg
    │   └── wellhead-panel.jpg
    ├── components/
    │   ├── site/                 # Custom layout & feature components
    │   │   ├── image-slider.tsx  # Hero image carousel
    │   │   ├── primitives.tsx    # Section titles and reusable wrappers
    │   │   ├── process-track.tsx # Capability workflow component
    │   │   ├── site-footer.tsx   # Global footer
    │   │   └── site-header.tsx   # Global navigation bar & header
    │   └── ui/                   # Shadcn Radix UI component primitives (40+ files)
    │       ├── accordion.tsx
    │       ├── alert.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── carousel.tsx
    │       ├── dialog.tsx
    │       ├── dropdown-menu.tsx
    │       ├── input.tsx
    │       ├── navigation-menu.tsx
    │       ├── select.tsx
    │       ├── sheet.tsx
    │       ├── tabs.tsx
    │       └── ...
    ├── hooks/
    │   └── use-mobile.tsx        # Screen width responsiveness hook
    ├── lib/
    │   ├── error-capture.ts      # Uncaught error handling utility
    │   ├── error-page.ts         # Server fallback HTML error page renderer
    │   ├── lovable-error-reporting.ts # Telemetry error reporter
    │   ├── site-data.ts          # Central domain data & company details
    │   └── utils.ts              # Tailwind class merging (`cn`) helper
    ├── routes/                   # TanStack Router file-based routes
    │   ├── __root.tsx            # Document shell, root context & providers
    │   ├── index.tsx             # Homepage
    │   ├── about.tsx             # About company page
    │   ├── careers.tsx           # Careers & vacancies page
    │   ├── contact.tsx           # Contact form & location page
    │   ├── privacy-policy.tsx    # Privacy policy page
    │   ├── services.tsx          # After-market services page
    │   ├── solutions.index.tsx   # Solutions index page
    │   ├── solutions.chemical-injection-packages.tsx
    │   ├── solutions.modular-packages.tsx
    │   ├── solutions.wellhead-control-systems.tsx
    │   ├── solutions.engineered-solutions.tsx
    │   ├── solutions.engineered-solutions.dra-injection-systems.tsx
    │   ├── solutions.engineered-solutions.hipps-systems.tsx
    │   ├── solutions.engineered-solutions.lube-oil-systems.tsx
    │   ├── solutions.engineered-solutions.metering-skids.tsx
    │   ├── solutions.engineered-solutions.nitrogen-generator-packages.tsx
    │   ├── solutions.engineered-solutions.surge-relief-skids.tsx
    │   └── terms.tsx             # Terms & conditions page
    ├── router.tsx                # TanStack Router factory
    ├── routeTree.gen.ts          # Auto-generated route tree map
    ├── server.ts                 # Nitro SSR entry point & error handler
    ├── start.ts                  # TanStack Start instance configuration
    └── styles.css                # Global CSS styles & Tailwind v4 directives
```

## Key Directory Naming Conventions

1. **Routes (`src/routes/`)**: Dot-delimited path naming for nested routes (e.g. `solutions.engineered-solutions.hipps-systems.tsx` maps to URL `/solutions/engineered-solutions/hipps-systems`).
2. **Components (`src/components/`)**:
   - `site/`: Kebab-case named website-specific domain components.
   - `ui/`: Lowercase kebab-case named atomic UI elements (Shadcn pattern).
3. **Utilities (`src/lib/`)**: Functional domain logic and configuration helpers in kebab-case.
