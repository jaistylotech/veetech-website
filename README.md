# VeeTech Automation FZE — Corporate Web Application
**Enterprise Industrial Control & Skid Automation Web Portal**

---

### Project Overview
This repository contains the complete source code for the official corporate web application of **VeeTech Automation FZE** (Jebel Ali Free Zone, Dubai, UAE). 

The platform has been engineered as an enterprise-grade, high-performance web application tailored specifically for the Energy, Oil & Gas, and Industrial Control Automation sector. Built using a modern SSR-ready hybrid architecture, it delivers sub-second page loads, zero database attack surfaces, robust search engine optimization (SEO with JSON-LD Schema), and responsive cross-device performance.

* **Client**: VeeTech Automation FZE (Plot S30913, JAFZA, Dubai, UAE)
* **Engineering & Development**: Stylopedia Technology Pvt. Ltd. (StyloTech), Satara, Maharashtra, India
* **Commercial Reference**: Milestone 4 — Source Code Handover & Deployment

---

## Technology Stack & System Architecture

| Tier | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | React 19 (TypeScript) | Modern component architecture with strict typing |
| **Routing & SSR** | TanStack Start & Router | Type-safe file-based routing with hybrid server-side rendering |
| **Styling Engine** | Tailwind CSS v4 | High-performance CSS design system without runtime overhead |
| **State & Cache Layer**| TanStack Query (React Query)| Client-side data management & cache handling |
| **Server Engine** | Nitro Engine | Fast embedded Node.js server runtime |
| **Production Runtime** | Node.js v20+ / Phusion Passenger | cPanel Enterprise production deployment via `app.js` |
| **Iconography & UI** | Lucide React / Radix UI | Accessible component primitives and industrial icons |

---

## Project Directory Organization

```text
veetech-website/
├── public/                       # Static assets served directly by the web server
│   ├── favicon.ico               # Multi-resolution master browser icon
│   ├── favicon-48x48.png         # Google Search recommended icon format
│   ├── apple-touch-icon.png      # iOS / Mobile bookmark icon
│   ├── site.webmanifest          # PWA / Web app manifest
│   ├── veetech-logo.png          # High-resolution master brand logo
│   ├── factory-demo.mp4          # Facility hero background video
│   ├── certificates/             # Quality & ISO certification documents
│   ├── client-media/             # Facility, infrastructure & product photos
│   ├── robots.txt                # Search engine crawler directives
│   └── sitemap.xml               # Full XML sitemap for SEO
│
├── src/                          # Application source code
│   ├── routes/                   # File-based routing engine
│   │   ├── __root.tsx            # Global HTML document shell, SEO & layout wrapper
│   │   ├── index.tsx             # Homepage
│   │   ├── about.tsx             # About Us corporate page
│   │   ├── infrastructure.tsx    # JAFZA Manufacturing & Testing yard page
│   │   ├── industries.tsx        # Upstream, Downstream & Offshore sectors
│   │   ├── solutions.*           # Engineered skids & packaged systems
│   │   ├── superior-value-creation.* # Field services, rentals & agreements
│   │   ├── after-market-services.tsx # Lifecycle support & aftermarket
│   │   ├── careers.tsx           # Careers & vacancies portal
│   │   ├── contact.tsx           # Contact form, direct links & live map
│   │   └── privacy-policy.tsx    # Privacy policy & legal compliance
│   │
│   ├── components/
│   │   ├── site/                 # Global site headers, footers & layout primitives
│   │   └── ui/                   # Reusable UI component library (Radix primitives)
│   │
│   ├── lib/
│   │   ├── site-data.ts          # Centralized corporate data (Single Source of Truth)
│   │   ├── utils.ts              # Tailwind class merging helper
│   │   ├── error-capture.ts      # Uncaught error handling utility
│   │   └── error-page.ts         # Fallback HTML error renderer
│   │
│   ├── router.tsx                # TanStack Router instantiation
│   ├── routeTree.gen.ts          # Auto-generated route tree
│   ├── server.ts                 # Nitro SSR entry point & error handler
│   └── styles.css                # Global CSS styles & Tailwind directives
│
├── app.js                        # cPanel Phusion Passenger server bridge
├── package.json                  # Application metadata & dependencies
├── tsconfig.json                 # TypeScript compiler configuration
└── vite.config.ts                # Vite bundler configuration
```

---

## Getting Started (Local Development)

### Prerequisites
* **Node.js**: v20.x or higher LTS
* **Package Manager**: npm (v10+) or bun

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Start Local Development Server
```bash
npm run dev
```
The application will be accessible at: `http://localhost:8080` (or `http://localhost:8081`).

### 3. Build for Production
```bash
npm run build
```
The production bundle will be generated into the `.output/` directory:
* `.output/public/` — Static client assets (HTML, JS, CSS, Media)
* `.output/server/` — Compiled Node.js SSR runtime bundle (`index.mjs`)

---

## Content Updates (Single Source of Truth)

All core corporate facts, telephone numbers, emails, navigation menus, and addresses are maintained inside:
👉 `src/lib/site-data.ts`

Any future modifications to:
* **Telephone Numbers**: `COMPANY.phone`, `COMPANY.phoneHref`
* **Inquiries Email**: `COMPANY.email`
* **Plot / P.O. Box Details**: `COMPANY.plot`, `COMPANY.poBox`, `COMPANY.city`
* **Navigation Links**: `NAV` tree
* **Global Market Pins**: `GLOBAL_MARKETS` array

can be safely modified in `src/lib/site-data.ts` without touching individual page components.

---

## Production Deployment (cPanel / Phusion Passenger)

1. **Host Environment**: cPanel Enterprise Hosting with Node.js support.
2. **Passenger Entry Point**: `app.js` (routes requests to `.output/server/index.mjs`).
3. **Deployment Workflow**:
   * Commit and push changes to the connected Git repository.
   * In **cPanel > Git™ Version Control**, pull latest changes.
   * Run build if compiling on server: `npm run build`.
   * In **cPanel > Setup Node.js App**, click **Restart Application**.

---

## Security & Maintenance
* **No Database**: Static/SSR hybrid design eliminates SQL injection and database exploit vectors.
* **Asset Protection**: Client-side content protection utility enabled for proprietary engineering media.
* **SEO & Crawlers**: Fully configured `robots.txt`, dynamic OpenGraph tags, and Schema.org `Organization` metadata.

---

### Support & Maintenance Contacts
For technical support and maintenance inquiries:
* **Developed By**: Stylopedia Technology Pvt. Ltd. (StyloTech)
* **Website**: [www.stylotech.in](https://stylotech.in)
* **Email**: support@stylotech.in / info@stylotech.in
* **Phone**: +91 8600000084

---
*Copyright © VeeTech Automation FZE. All rights reserved. Engineered by Stylopedia Technology Pvt. Ltd.*
