# Aurelia Developments — Real Estate Showcase

An independent fictional real estate developer website presented through three distinct digital directions:

- **The Legacy** — premium, warm, editorial, and corporate.
- **The Explorer** — modern, functional, and discovery-led.
- **The Architecture** — immersive, asymmetrical, and design-editorial.

All three concepts use the same fictional project portfolio and shared interaction model while presenting different visual systems, navigation patterns, and content compositions.

**Live showcase:** [real-state-web-delta.vercel.app](https://real-state-web-delta.vercel.app)

> Independent fictional portfolio concept. Aurelia Developments, its projects, locations, milestones, and company information are demo content and are not affiliated with or endorsed by any real estate developer.

## What is included

- Showcase landing page for comparing all three design directions
- Responsive App Router pages for each concept
- Four fictional developments shared across every concept
- Project search by name and location
- Property type and status filters
- URL-persistent Explorer filters
- Local project shortlist with browser storage
- Project detail pages with specifications, highlights, amenities, and related projects
- Accessible image gallery lightbox with keyboard navigation
- Client-side inquiry validation with an explicit demo-only submission state
- Responsive desktop and mobile navigation
- Local image assets optimized through Next Image, AVIF/WebP output, and `sharp`
- Route-level loading UI and reduced-motion support
- Custom metadata, favicon, not-found state, and semantic page structure

## Routes

```text
/
  Showcase landing page

/concepts/legacy
/concepts/legacy/projects
/concepts/legacy/projects/[slug]
/concepts/legacy/about
/concepts/legacy/news
/concepts/legacy/contact

/concepts/explorer
/concepts/explorer/projects
/concepts/explorer/projects/[slug]
/concepts/explorer/about
/concepts/explorer/news
/concepts/explorer/contact

/concepts/architecture
/concepts/architecture/projects
/concepts/architecture/projects/[slug]
/concepts/architecture/about
/concepts/architecture/news
/concepts/architecture/contact
```

## Tech stack

- Next.js 14 App Router
- React 18
- TypeScript
- CSS Modules and shared design tokens
- `next/font` for locally bundled typography
- Next Image and `sharp` for responsive image optimization
- Local TypeScript data instead of a database or CMS
- Vercel-compatible production build

## Project structure

```text
app/                  App Router pages, loading UI, metadata, and global styles
components/shared/   Shared cards, filters, gallery, forms, shortlist, and footer
components/concepts/ Concept-specific presentation systems
data/                 Fictional company, project, and news records
lib/                  Types, routes, concept registry, filtering, and validation
public/images/        Local brand and project imagery
```

The content model is centralized in `data/projects.ts`, `data/news.ts`, and `data/company.ts`. Concept-specific components consume the same records so business logic is not duplicated across the three directions.

## Getting started

Requirements:

- Node.js 20+
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For production-like behavior, build first and then start the production server:

```bash
npm run build
npm start
```

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

The inquiry form is intentionally demo-only. It validates in the browser, does not send email, and does not persist personal information. A real CRM, email provider, authentication, CMS, and property inventory system are outside the scope of this version.

## Deployment

The project is deployed on Vercel and can be deployed from the repository with the standard Next.js settings:

- Framework preset: Next.js
- Build command: `next build`
- Output directory: Next.js default
- Install command: `npm install`

No environment variables are required for the current demo.

## Portfolio disclosure

This project is an independent fictional concept created for portfolio demonstration. It is not commissioned by, affiliated with, or endorsed by Antel or any real estate company.
