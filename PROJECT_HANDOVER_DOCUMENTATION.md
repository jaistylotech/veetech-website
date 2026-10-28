# PROJECT HANDOVER & TECHNICAL DOCUMENTATION
**Corporate Static Website Development**

---

### Project & Commercial Details
- **Project Name**: VeeTech Automation FZE Corporate Website
- **Client**: VeeTech Automation FZE (P.O. Box 18642, Plot S30913, Jebel Ali Free Zone, Dubai, UAE)
- **Developed By**: Stylopedia Technology Pvt. Ltd. (StyloTech), Satara, Maharashtra, India
- **Commercial Agreement Date**: 28.07.2026
- **Scope Categorization**: Custom Responsive Static Corporate Web Application (Non-CMS Architecture)
- **Delivery Milestone**: Milestone 4 — Final Deployment, Documentation & Source Code Handover

---

## 1. Executive Summary & Scope Compliance
As defined in **Page 1 of the Commercial Agreement**:
> *"The scope of work includes custom UI/UX design, responsive frontend development, content integration, image optimization, basic on-page SEO, security enhancements, testing, and deployment. As this is a static website, it does not include a Content Management System (CMS), database, or backend development."*

The website has been developed as an enterprise-grade, high-performance web application engineered specifically for the Energy, Oil & Gas, and Industrial Control Automation sector. It delivers ultra-fast load times, zero vulnerability attack surfaces (no database to exploit), and complete cross-device responsiveness.

---

## 2. Technology Stack & Architecture
- **Core Framework**: TanStack Start (SSR & Static Hybrid Routing)
- **UI Library**: React 19 (TypeScript)
- **Styling Architecture**: Tailwind CSS v4
- **State & Data Layer**: TanStack Query (React Query)
- **Iconography**: Lucide React
- **Web Server Runtime**: Node.js v20+ / Apache Phusion Passenger
- **Hosting Environment**: cPanel Enterprise Hosting

---

## 3. Directory & File Organization

```
veetech-website/
├── public/                       # Static public assets served directly
│   ├── favicon.ico               # Multi-resolution brand favicon (16x16, 32x32, 48x48)
│   ├── favicon-48x48.png         # Google Search recommended icon format
│   ├── apple-touch-icon.png      # iOS / Mobile bookmark icon
│   ├── site.webmanifest          # PWA / Web app manifest
│   ├── veetech-logo.png          # High-resolution master brand logo
│   ├── factory-demo.mp4          # Hero section factory background video
│   ├── certificates/             # Quality & ISO certification files
│   ├── client-media/             # Facility, infrastructure & service photos
│   ├── robots.txt                # Search engine crawler permissions
│   └── sitemap.xml               # Complete XML sitemap for SEO
│
├── src/                          # Application source code
│   ├── routes/                   # File-based routing engine
│   │   ├── __root.tsx            # Global HTML shell, SEO meta tags & layout
│   │   ├── index.tsx             # Homepage
│   │   ├── about.tsx             # About Us page
│   │   ├── solutions.tsx         # Engineering Solutions parent page
│   │   ├── infrastructure.tsx    # Manufacturing & Testing yard page
│   │   ├── superior-value-creation.tsx # Value creation services
│   │   ├── after-market-services.tsx   # Field support & aftermarket services
│   │   ├── careers.tsx           # Careers & opportunities page
│   │   ├── contact.tsx           # Contact Us page (Direct mailto, tel & live map)
│   │   └── privacy-policy.tsx    # Privacy policy & legal compliance
│   │
│   ├── components/
│   │   ├── site/                 # Global site headers, footers & layout primitives
│   │   └── ui/                   # Reusable UI component library
│   │
│   └── lib/
│       ├── site-data.ts          # Centralized corporate data (Single Source of Truth)
│       └── utils.ts              # Utility helper functions
│
├── README.md                     # Repository overview & setup instructions
├── app.js                        # cPanel Phusion Passenger server entry point
├── package.json                  # Dependencies & build scripts
└── vite.config.ts                # Vite bundler configuration
```

---

## 4. How to Update Content (Centralized Data Guide)
To maintain code cleanliness, all core company facts and contact details are centralized inside:
👉 `src/lib/site-data.ts`

Any future modifications to:
- **Phone Numbers** (`COMPANY.phone`, `COMPANY.phoneHref`)
- **Official Inquiries Email** (`COMPANY.email`)
- **Office Location / P.O. Box** (`COMPANY.plot`, `COMPANY.poBox`)
- **Navigation Menu Items** (`NAV` array)
- **Regional Global Market Pins** (`GLOBAL_MARKETS` array)

can be edited directly in `src/lib/site-data.ts` without modifying individual route components.

---

## 5. Local Setup & Build Instructions (For IT Team)

### Prerequisites
- Node.js (v20.x or higher)
- NPM or Bun package manager

### Steps
1. **Install Dependencies**:
   ```bash
   npm install --legacy-peer-deps
   ```
2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   *(Local preview will be available at `http://localhost:8080` or `http://localhost:8081`)*

3. **Compile Production Build**:
   ```bash
   npm run build
   ```
   *(Compiled production output is written to the `.output/` directory)*

---

## 6. Hosting & Deployment Architecture (cPanel)
- The production application runs via **Phusion Passenger Node.js** on cPanel.
- **Entry File**: `app.js` routes all incoming requests to `.output/server/index.mjs`.
- **Git Deployment Workflow**:
  1. Commit and push changes to the connected Git repository branch.
  2. Navigate to **cPanel > Git™ Version Control > Manage > Pull or Deploy**.
  3. Click **Update from Remote**.
  4. Navigate to **cPanel > Setup Node.js App** and click **Restart Application**.

---

## 7. Service Period, Warranty & Support Terms
As outlined in **Terms & Conditions Section II & VIII of the Commercial Agreement**:
- **Service & Warranty Period**: One (1) Year technical warranty from go-live date.
- **Support Response Time**: Technical requests will receive an initial response within **3 business hours** during working hours.
- **Support Coverage**:
  - Bug fixes, link updates, and compatibility maintenance.
  - Minor text, image, and careers openings updates.
  - Server SSL and routing uptime support.

For support requests, contact:
- **Email**: support@stylotech.in / info@stylotech.in
- **Phone**: +91 8600000084
- **Website**: [www.stylotech.in](https://stylotech.in)

---
*Document Prepared by Stylopedia Technology Pvt. Ltd. (StyloTech) for VeeTech Automation FZE.*
