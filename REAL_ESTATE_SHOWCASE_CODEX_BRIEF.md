# Real Estate Developer Website Showcase

## Codex Project Brief and Implementation Plan

**Project type:** Portfolio demonstration website\
**Demo brand:** AURELIA DEVELOPMENTS (fictional)\
**Deployment target:** Vercel\
**Recommended framework:** Next.js with TypeScript\
**Primary objective:** Build one polished real estate developer website
with three distinct design concepts that share the same sample content
and core functionality.

------------------------------------------------------------------------

## 1. Instructions for Codex

Use this document as the source of truth for the project.

Before making changes:

1.  Inspect the existing repository, package manager, framework,
    scripts, folder structure, and current UI conventions.
2.  If the repository already contains an application, preserve its
    existing architecture and avoid replacing working code
    unnecessarily.
3.  If the repository is empty, scaffold a Next.js App Router
    application with TypeScript.
4.  Summarize the implementation approach and identify any assumptions
    before making large architectural changes.
5.  Implement the project in small, testable phases. Do not attempt to
    generate the entire application in one unreviewed change.
6.  Run the available lint, type-check, and build commands after
    meaningful implementation milestones. Fix errors rather than hiding
    or disabling checks.
7.  Do not claim that the website is affiliated with, commissioned by,
    or endorsed by Antel or any real estate company.

**Important:** This is a fictional portfolio concept. Do not copy
Antel's branding, logo, proprietary content, or imply that Antel is the
client. The project may demonstrate capabilities relevant to a future
proposal to Antel, but must remain clearly identified as an independent
concept.

------------------------------------------------------------------------

## 2. Project Vision

Create a premium, responsive real estate developer website showcase that
demonstrates the developer's ability to deliver:

-   Brand-led corporate website design.
-   Three genuinely different creative directions.
-   Responsive UI/UX across desktop, tablet, and mobile.
-   Real estate development discovery and project detail experiences.
-   Reusable content architecture.
-   Search, filters, galleries, and inquiry interactions.
-   Accessible, maintainable frontend implementation.
-   Production-ready deployment to Vercel.

The showcase should feel like a credible website for a real property
development company, not a generic template or a collection of unrelated
UI samples.

### Core concept

**AURELIA DEVELOPMENTS**\
*Building places. Creating possibilities.*

A fictional property developer with a sample portfolio spanning
residential condominiums, residential communities, and
mixed-use/commercial developments.

Use realistic but clearly fictional project names and descriptions.
Suggested sample projects:

1.  **Aurelia Heights** --- premium residential condominium.
2.  **Solara Gardens** --- master-planned residential community.
3.  **The Meridian District** --- mixed-use urban development.
4.  **Northline Business Park** --- commercial office development.

These are demo records only. Do not present invented projects, awards,
statistics, locations, or company history as real-world facts.

------------------------------------------------------------------------

## 3. Three Design Concepts

All three concepts must use the same underlying project data and core
capabilities, but each must have its own visual identity, layout
composition, typography, navigation treatment, and interaction style.
Changing only the color palette is not sufficient.

### Concept 01 --- THE LEGACY

**Positioning:** Premium, sophisticated, corporate, timeless.\
**Purpose:** Demonstrate a high-end corporate real estate developer
website.

Visual direction:

-   Warm ivory, deep charcoal, and restrained bronze or muted gold
    accents.
-   Elegant serif display typography paired with a clean sans-serif body
    font.
-   Large architectural photography and editorial image crops.
-   Spacious layouts and refined visual hierarchy.
-   Subtle transitions and restrained motion.
-   Premium navigation and carefully designed calls to action.

Homepage sections:

1.  Full-width architectural hero with concise brand statement.
2.  Company introduction and credibility statement.
3.  Featured developments.
4.  Company philosophy, legacy, or milestones using fictional, clearly
    labeled demo content.
5.  Lifestyle and community storytelling.
6.  Selected project gallery.
7.  News and updates.
8.  Contact/inquiry call to action.
9.  Detailed footer.

The Legacy should be the strongest candidate for a premium corporate
developer presentation.

### Concept 02 --- THE EXPLORER

**Positioning:** Modern, functional, clean, user-focused.\
**Purpose:** Demonstrate project discovery, usability, and
conversion-focused design.

Visual direction:

-   White and soft neutral backgrounds with a distinctive accent color.
-   Modern sans-serif typography.
-   Structured cards, clear information hierarchy, and practical
    spacing.
-   Prominent project search and filtering.
-   Clear status labels and project metadata.
-   Strong mobile usability.

Homepage sections:

1.  Hero with project discovery/search entry point.
2.  Browse by property type.
3.  Featured projects.
4.  Searchable development discovery section.
5.  Location or region discovery presentation.
6.  Project status and key information.
7.  Inquiry call to action.
8.  News and updates.
9.  Footer.

The Explorer should make it easy to find, compare, and explore
developments.

### Concept 03 --- THE ARCHITECTURE

**Positioning:** Artistic, immersive, architectural, editorial.\
**Purpose:** Demonstrate distinctive art direction and visual
storytelling.

Visual direction:

-   Bold editorial typography and strong typographic scale.
-   Asymmetrical grids and varied image proportions.
-   Full-bleed architectural imagery.
-   Minimal interface chrome.
-   High-contrast sections and generous negative space.
-   Purposeful image transitions and scroll interactions.
-   Motion should be elegant and restrained, never distracting.

Homepage sections:

1.  Immersive architectural hero.
2.  Featured project story.
3.  Selected developments in an editorial grid.
4.  Architectural philosophy.
5.  Large-format project imagery.
6.  Community/lifestyle story.
7.  Company introduction.
8.  Contact experience.
9.  Minimal editorial footer.

The Architecture concept should feel like a design-led architectural
publication while remaining practical to navigate.

------------------------------------------------------------------------

## 4. Application and Route Structure

Build one application with a concept selection landing page and
concept-specific routes.

Recommended routes:

``` text
/
  Concept selection / showcase landing page

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

Requirements:

-   Validate the concept route segment. Unknown concepts should return a
    proper not-found state.
-   Keep the selected concept visible as visitors navigate between its
    pages.
-   Provide a clear way to return to the concept selection page and
    switch concepts.
-   Use the same sample project data across all three concepts.
-   Project detail pages should render the same project content through
    each concept's visual system.
-   Avoid duplicating all business logic for every concept.
-   Keep concept-specific presentation components separate where the
    design genuinely differs.

A shared project route can be used only if the selected concept is
preserved in the URL or another reliable navigation mechanism. Prefer
the route structure above for a predictable, shareable demo.

------------------------------------------------------------------------

## 5. Required Pages and Page Specifications

Each concept should have these six page types.

### 5.1 Home

Must include:

-   Concept-specific navigation and hero.
-   Clear brand positioning.
-   Featured developments.
-   Company introduction.
-   Relevant secondary content.
-   Strong calls to action.
-   Responsive footer.

The three homepages must look and feel distinctly different.

### 5.2 Developments Listing

Must include:

-   Page heading and short introduction.
-   Project cards with image, name, location, property type, and status.
-   Search by project name.
-   Filters for property type and project status.
-   Clear reset-filters action.
-   Useful empty state when no projects match.
-   Responsive grid/list presentation appropriate to the concept.

Filtering and search must work against local demo data; they must not be
decorative controls.

### 5.3 Project Detail

Must include:

-   Project title, type, location, and status.
-   Hero image.
-   Project overview.
-   Image gallery with accessible lightbox or modal.
-   Key highlights and amenities.
-   Sample specifications or development information.
-   Floor plan or downloadable brochure area where appropriate.
-   Location section. A clearly labeled static map/location placeholder
    is acceptable if no real map integration is configured.
-   Project-specific inquiry call to action.
-   Related developments.

All project facts must be fictional demo content. Avoid fabricated
claims that could be mistaken for verified real estate information.

### 5.4 About

Must include:

-   Fictional company introduction.
-   Vision, mission, or philosophy.
-   Development approach.
-   Sample milestones only if clearly labeled as illustrative demo
    content.
-   Editorial imagery or brand storytelling.
-   CTA to explore developments.

Do not invent real awards, certifications, completed buildings, or years
in business.

### 5.5 News and Updates

Must include:

-   News/article listing.
-   Category or date metadata.
-   Article cards.
-   At least three sample articles clearly belonging to the fictional
    demo brand.
-   A simple article detail experience if time permits; otherwise, cards
    may open a polished article modal or detail route.
-   Search or category filtering if appropriate.

### 5.6 Contact

Must include:

-   Contact introduction.
-   Contact form with name, email, phone (optional), subject/project
    (optional), and message.
-   Required field validation.
-   Email format validation.
-   Consent checkbox with concise privacy wording.
-   Accessible success and error feedback.
-   Demo-mode disclosure.

**Form behavior:** Do not silently pretend to send email. In the initial
demo, validate the form client-side and show a clear message such as:
"Thank you --- this is a demonstration form and no message has been
sent." Do not persist personal data. A real email or CRM integration is
out of scope unless explicitly requested and configured.

------------------------------------------------------------------------

## 6. Shared Functional Requirements

Implement these features once where possible and reuse them across
concepts:

### Project data and discovery

-   Centralized typed project data.
-   Search by project name.
-   Filter by property type.
-   Filter by project status.
-   Reset all filters.
-   Empty search state.
-   Project cards link to the correct concept-specific detail route.

### Project gallery

-   Open images in a lightbox/modal.
-   Previous/next controls.
-   Close button.
-   Escape key support.
-   Keyboard focus behavior.
-   Descriptive image alt text.

### Navigation

-   Responsive desktop navigation.
-   Mobile menu with keyboard-accessible controls.
-   Active page indication.
-   Concept switcher or return-to-showcase link.
-   No dead links or placeholder `href="#"` links.

### Inquiry form

-   Client-side validation.
-   Clear required-field indicators.
-   Accessible labels and error messages.
-   Submission success state clearly marked as demo-only.
-   No false claim of successful delivery to a real inbox.

### Motion

-   Use Framer Motion only where it improves the experience.
-   Respect `prefers-reduced-motion`.
-   Avoid excessive scroll-jacking, long transitions, or animations that
    delay access to content.
-   Keep performance and usability more important than decorative
    effects.

------------------------------------------------------------------------

## 7. Content Model and Sample Data

Use TypeScript data files for the first version. A database or CMS is
not required for this showcase.

Suggested data structure:

``` ts
type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";

type PropertyType =
  | "Condominium"
  | "Residential Community"
  | "Mixed Use"
  | "Commercial";

type Project = {
  slug: string;
  name: string;
  tagline: string;
  location: string;
  propertyType: PropertyType;
  status: ProjectStatus;
  featured: boolean;
  summary: string;
  description: string;
  heroImage: string;
  gallery: string[];
  highlights: string[];
  amenities: string[];
  specifications?: {
    label: string;
    value: string;
  }[];
  brochurePath?: string;
};
```

Create at least four varied projects so that search, filtering, cards,
and related-project sections can be demonstrated.

Also create:

-   Company profile data.
-   Navigation data where useful.
-   At least three fictional news items.
-   Reusable image metadata with meaningful alt text.

Keep copy concise and realistic. Do not use lorem ipsum in the finished
presentation.

------------------------------------------------------------------------

## 8. Design System Requirements

Create separate design tokens for each concept rather than using one
global visual system.

Suggested organization:

``` text
styles/
  tokens/
    legacy.css
    explorer.css
    architecture.css
```

Each concept should define:

-   Color palette.
-   Typography roles.
-   Heading scale.
-   Body text scale.
-   Spacing rhythm.
-   Container widths.
-   Border radius.
-   Borders and shadows.
-   Button styles.
-   Card styles.
-   Navigation styles.
-   Section spacing.
-   Image aspect ratios.

### Design quality rules

-   Establish a consistent grid and alignment system.
-   Use a deliberate type scale.
-   Avoid excessive rounded cards and generic dashboard styling.
-   Use high-quality imagery with consistent art direction.
-   Avoid overusing gradients, glassmorphism, and decorative blobs.
-   Maintain readable text contrast.
-   Ensure buttons, links, inputs, and focus states are visibly
    interactive.
-   Use consistent spacing and avoid arbitrary one-off values.
-   Each concept must be polished at both desktop and mobile sizes.

### Accessibility

Aim for WCAG 2.2 Level AA-informed implementation:

-   Text contrast of at least 4.5:1 for normal text and 3:1 for large
    text, where applicable.
-   Visible keyboard focus.
-   Semantic headings and landmarks.
-   Proper form labels and error announcements.
-   Keyboard-accessible menus and dialogs.
-   Meaningful image alt text.
-   Reduced-motion support.
-   Do not rely on color alone to communicate status.

Do not claim formal WCAG certification unless a complete audit has
actually been performed.

------------------------------------------------------------------------

## 9. Recommended Technical Stack

Inspect the existing repository first and use compatible versions. If
starting from scratch, use:

-   Next.js with App Router.
-   React.
-   TypeScript.
-   Tailwind CSS.
-   Framer Motion for selected animations.
-   Lucide React for icons.
-   Local TypeScript data for demo content.
-   Vercel for hosting.

Use the package manager already indicated by the repository lockfile. Do
not replace the package manager without a good reason.

### Technical principles

-   Prefer server components by default.
-   Use client components only for actual interactivity.
-   Use reusable, typed components.
-   Keep data separate from presentation.
-   Use optimized images and sensible image dimensions.
-   Avoid unnecessary dependencies.
-   Avoid a database for the first version.
-   Keep secrets out of source control.
-   Do not add environment variables unless they are genuinely needed.
-   Ensure the production build succeeds.

If using remote image providers, configure them explicitly and verify
that the image sources are reliable and permitted. Prefer locally
stored, properly licensed assets for a stable portfolio demo.

------------------------------------------------------------------------

## 10. Suggested Folder Structure

Adapt this to the repository rather than forcing it if an existing
structure is already established.

``` text
app/
  page.tsx
  concepts/
    [concept]/
      layout.tsx
      page.tsx
      projects/
        page.tsx
        [slug]/
          page.tsx
      about/
        page.tsx
      news/
        page.tsx
      contact/
        page.tsx
  not-found.tsx

components/
  shared/
    concept-switcher.tsx
    project-card.tsx
    project-filters.tsx
    project-gallery.tsx
    inquiry-form.tsx
    site-footer.tsx
  concepts/
    legacy/
    explorer/
    architecture/

data/
  projects.ts
  news.ts
  company.ts

lib/
  concepts.ts
  routes.ts
  validation.ts
  utils.ts

styles/
  concepts/
    legacy.css
    explorer.css
    architecture.css

public/
  images/
    brand/
    projects/
    news/
  brochures/
```

Keep components small and cohesive. Avoid creating a large component
abstraction before there is a real reuse need.

------------------------------------------------------------------------

## 11. Concept Selection Landing Page

The root route `/` is a design showcase, not the main corporate
homepage.

It should:

-   Introduce the fictional AURELIA DEVELOPMENTS showcase.
-   Explain that three design directions are available.
-   Present three visually distinct concept preview cards.
-   Include a short design rationale for each concept.
-   Link to each concept's homepage.
-   Clearly disclose that this is an independent fictional portfolio
    project.
-   Look polished enough to serve as the entry point when sharing the
    Vercel URL.

Suggested headline:

**Three perspectives. One real estate experience.**

Suggested supporting copy:

"An independent exploration of three digital directions for a modern
property developer --- from timeless corporate storytelling to intuitive
project discovery and immersive architectural presentation."

------------------------------------------------------------------------

## 12. Imagery and Asset Direction

Use imagery that supports the fictional brand and each concept's visual
identity.

Suggested image categories:

-   Modern residential towers.
-   Contemporary architecture.
-   Master-planned communities.
-   Landscaped residential spaces.
-   Building details and materials.
-   Lifestyle and community spaces.
-   Commercial architecture.

Requirements:

-   Use assets that are properly licensed for portfolio use.
-   Do not download or reuse Antel's copyrighted project imagery without
    permission.
-   Avoid images with visible third-party logos or misleading project
    labels.
-   Keep image crops and aspect ratios consistent within each component.
-   Provide fallback UI if an image fails to load.
-   Use meaningful alt text for informative images and empty alt text
    for purely decorative images.
-   Avoid hotlinking unstable image URLs.

If suitable images are not available, build graceful image placeholders
and document exactly which assets need to be replaced. Do not block the
entire project on imagery.

------------------------------------------------------------------------

## 13. Responsive Design Requirements

Test at minimum:

-   Mobile: 375px and 390px viewport widths.
-   Tablet: 768px and 1024px.
-   Desktop: 1280px and 1440px.

Check:

-   Navigation and mobile menu.
-   Hero image and typography.
-   Project card grids.
-   Search and filter controls.
-   Project galleries.
-   Forms and validation messages.
-   Footer layout.
-   Horizontal overflow.
-   Text wrapping and content spacing.

Mobile must be intentionally designed, not merely a compressed desktop
layout.

------------------------------------------------------------------------

## 14. SEO, Performance, and Production Readiness

Implement:

-   Page-specific metadata and titles.
-   Useful meta descriptions.
-   Open Graph metadata where appropriate.
-   Semantic HTML.
-   Descriptive route slugs.
-   Optimized images.
-   Sensible loading states.
-   Custom not-found page.
-   Favicon or simple fictional brand mark.
-   No broken links.
-   No console errors in normal usage.

Performance goals:

-   Avoid unnecessarily large client bundles.
-   Use server rendering where practical.
-   Lazy-load below-the-fold media when appropriate.
-   Avoid layout shifts caused by images without dimensions.
-   Keep animations lightweight.
-   Test the production build.

Do not invent Lighthouse scores. Run an actual audit before publishing
any performance claims.

------------------------------------------------------------------------

## 15. Out of Scope for Version 1

Do not build these unless they are later requested:

-   Production CMS.
-   Real user authentication.
-   Real CRM integration.
-   Real email delivery.
-   Online reservations or payments.
-   Property inventory management.
-   Real-time availability.
-   Advanced interactive GIS mapping.
-   Multi-language content management.
-   Admin dashboard with persistent database.
-   Hosting or domain subscription purchasing.

The first release is a frontend-focused, functional portfolio
demonstration using fictional local data.

------------------------------------------------------------------------

## 16. Implementation Phases

Work in the following order. Each phase should leave the application in
a buildable state.

### Phase 1 --- Repository audit and foundation

-   Inspect repository and tooling.
-   Confirm Next.js setup or scaffold if needed.
-   Establish routes and concept validation.
-   Define typed data models.
-   Add sample project and news data.
-   Configure global styles and fonts.
-   Create the concept selection landing page.

**Completion criteria:** The app runs locally, the root showcase page
works, and all three concept routes resolve.

### Phase 2 --- Shared components and data

-   Create typed project data.
-   Create shared project card and metadata components.
-   Create route helpers.
-   Create navigation and footer foundations.
-   Create shared gallery and inquiry form behavior.

**Completion criteria:** Shared data and functionality can be reused
without duplicating business logic.

### Phase 3 --- Concept 01: The Legacy

-   Implement the homepage.
-   Implement developments listing.
-   Implement project detail.
-   Implement About, News, and Contact.
-   Apply the Legacy design tokens.
-   Validate desktop and mobile.

**Completion criteria:** The full Legacy experience is navigable and
visually polished.

### Phase 4 --- Concept 02: The Explorer

-   Implement a distinctly different homepage.
-   Build functional project search and filters.
-   Implement concept-specific project cards and detail presentation.
-   Implement About, News, and Contact.
-   Validate responsive behavior.

**Completion criteria:** Explorer feels like a separate product
direction, not a recolored Legacy theme.

### Phase 5 --- Concept 03: The Architecture

-   Implement the editorial homepage.
-   Create asymmetrical project layouts.
-   Add selected image transitions.
-   Implement project listing and details.
-   Implement About, News, and Contact.
-   Validate accessibility and responsive behavior.

**Completion criteria:** Architecture has a distinct editorial identity
and remains usable.

### Phase 6 --- QA and refinement

-   Test every route.
-   Test project search and filters.
-   Test gallery controls and keyboard behavior.
-   Test contact form validation and demo disclosure.
-   Test mobile navigation.
-   Check contrast and keyboard focus.
-   Check broken images and links.
-   Run lint, type-check, and production build.
-   Fix console and build errors.

**Completion criteria:** No known critical navigation, interaction,
responsive, or build issues.

### Phase 7 --- Vercel deployment and portfolio packaging

-   Push the finished project to the intended Git repository.
-   Import the repository into Vercel or use the existing Vercel
    workflow.
-   Configure build settings only if needed.
-   Deploy and test the production URL.
-   Capture desktop and mobile screenshots for all three concepts.
-   Add a portfolio case study with role, scope, technologies,
    screenshots, and demo URL.
-   Clearly label the work as a fictional independent concept.

**Completion criteria:** The production URL works, all concepts are
shareable, and the portfolio presentation is ready.

------------------------------------------------------------------------

## 17. Quality Assurance Checklist

### Functionality

-   [ ] All three concepts load.
-   [ ] Concept switcher works.
-   [ ] Navigation links work.
-   [ ] Project listing renders all sample projects.
-   [ ] Project search works.
-   [ ] Property type filters work.
-   [ ] Status filters work.
-   [ ] Reset filters works.
-   [ ] Project cards open the correct detail page.
-   [ ] Gallery opens and closes.
-   [ ] Gallery keyboard controls work.
-   [ ] Contact form validates required fields.
-   [ ] Contact form clearly explains demo-only submission.
-   [ ] News cards open the intended content.
-   [ ] No dead links or placeholder actions remain.

### Design and responsive behavior

-   [ ] Each concept has a distinct visual identity.
-   [ ] Desktop layouts are polished.
-   [ ] Mobile layouts are intentionally designed.
-   [ ] No horizontal overflow at target widths.
-   [ ] Text remains readable over images.
-   [ ] Buttons and interactive states are clear.
-   [ ] Images have appropriate crops and alt text.
-   [ ] Motion respects reduced-motion preferences.

### Engineering and deployment

-   [ ] TypeScript checks pass.
-   [ ] Lint passes.
-   [ ] Production build passes.
-   [ ] No missing assets.
-   [ ] No exposed secrets.
-   [ ] No unexplained console errors.
-   [ ] Vercel production deployment works.
-   [ ] Metadata is set for key pages.

------------------------------------------------------------------------

## 18. Portfolio Case Study Content

When the project is complete, use the following structure in the
developer's portfolio.

**Project title:** Real Estate Developer Website --- Three Design
Concepts

**Category:** Website Design & Development

**Description:**

"An independent website design and development exploration for a
fictional real estate developer. The project presents three distinct
digital directions: The Legacy, a premium corporate experience; The
Explorer, a functional project discovery platform; and The Architecture,
an immersive editorial presentation. Built as one responsive application
with shared project data and reusable functionality."

**Role:**

-   Creative direction.
-   UI/UX design.
-   Frontend development.
-   Component architecture.
-   Responsive implementation.
-   Interaction design.
-   Deployment.

**Technology:** List only the technologies actually used in the final
implementation.

**Links:**

-   Live showcase.
-   The Legacy demo.
-   The Explorer demo.
-   The Architecture demo.
-   Source repository, if public.

**Disclosure:** "Independent fictional concept created for portfolio
demonstration. Not affiliated with or endorsed by any real estate
developer."

------------------------------------------------------------------------

## 19. Final Definition of Done

The project is complete when:

1.  A visitor can open the root URL and understand the purpose of the
    showcase.
2.  A visitor can select any of the three concepts.
3.  Each concept provides a coherent, responsive, multi-page website
    experience.
4.  All concepts use the same fictional project content.
5.  Search, filters, navigation, gallery, and form validation work.
6.  The three concepts are meaningfully different in visual design and
    page composition.
7.  The application passes its available checks and production build.
8.  The site is deployed and working on Vercel.
9.  The project is ready to be presented in a professional developer
    portfolio.
10. All fictional content and independent-concept disclosures are clear.

**Build quality over quantity.** If time becomes limited, finish and
polish one complete concept before spreading effort across three
incomplete ones. The final result should demonstrate professional
judgment, not merely a high page count.
