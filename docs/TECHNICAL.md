# Eden Cleanroom Systems — Technical Implementation Guide

## 1. Purpose

This document defines the technical implementation expectations for the Eden Cleanroom Systems website.

It should be read alongside:

* `WEBSITE-PLAN.md`
* `PRODUCT.md`
* `DESIGN.md`
* `CONTENT.md`
* `CLAIMS.md`

This document governs:

* Repository structure
* Page architecture
* Component reuse
* CSS organization
* Responsive behavior
* Accessibility
* Performance
* Forms
* SEO implementation
* Asset handling
* Error handling
* Validation
* Deployment safety

The website should remain simple, fast, maintainable, and easy to extend.

---

# 2. Current Website Architecture

The website has four primary pages:

* Home
* Products
* Contact
* Request a Quote

Primary routes:

```text
/
 /products
 /contact
 /request-a-quote
```

Do not add new top-level routes unless explicitly requested.

---

# 3. Technology Choice

Use the existing project technology where practical.

Do not migrate frameworks or introduce a new frontend stack without a clear reason.

If the site is currently static HTML/CSS/JavaScript, continue using that structure unless the user explicitly requests a framework migration.

Do not introduce:

* React
* Next.js
* Vue
* Svelte
* Tailwind
* Bootstrap
* Large component libraries

solely because they are familiar.

The technical solution should match the complexity of the website.

---

# 4. General Engineering Principle

Prefer the simplest implementation that satisfies the design and content requirements.

Avoid unnecessary abstraction.

Do not build infrastructure for hypothetical future needs.

A four-page industrial product website should remain straightforward.

---

# 5. Repository Organization

Recommended structure:

```text
/
├── AGENTS.md
├── CNAME
├── docs/
│   ├── WEBSITE-PLAN.md
│   ├── PRODUCT.md
│   ├── DESIGN.md
│   ├── CONTENT.md
│   ├── CLAIMS.md
│   └── TECHNICAL.md
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── diagrams/
│
├── index.html
├── products.html
├── contact.html
├── request-quote.html
├── styles.css
└── script.js
```

This is an example structure, not a requirement to rename working files unnecessarily.

Preserve existing deployment behavior.

---

# 6. Static Site Preference

If the current website is already served successfully as a GitHub Pages static site, preserve that deployment model unless instructed otherwise.

Do not introduce a build system merely for convenience.

Avoid dependencies that require server-side rendering unless the project explicitly changes direction.

---

# 7. GitHub Pages Compatibility

The website must remain compatible with GitHub Pages if that is the active hosting method.

Avoid assumptions that require:

* Server-side execution
* Server-only API routes
* Persistent backend storage
* Dynamic server rendering

unless an external service is intentionally introduced.

---

# 8. Page Structure

Each page should use semantic HTML.

Recommended structure:

```html
<header>
<nav>
<main>
<section>
<footer>
```

Use:

* `<h1>` once per page
* Logical `<h2>` and `<h3>` hierarchy
* `<button>` for actions
* `<a>` for navigation

Do not use generic `<div>` elements when semantic elements are more appropriate.

---

# 9. Navigation

The primary navigation must contain exactly:

* Home
* Products
* Contact
* Request a Quote

The Eden logo should link to Home.

`Request a Quote` should receive stronger CTA styling.

Navigation markup should remain consistent across all pages.

---

# 10. Shared Header

Use one consistent header design across all pages.

Header requirements:

* Eden logo or brand name
* Primary navigation
* Mobile navigation
* Accessible menu control
* Request a Quote CTA

Do not create different header variants per page unless required by design.

---

# 11. Shared Footer

Use one consistent footer across all pages.

Footer may contain:

* Eden Cleanroom Systems
* Primary navigation
* Confirmed contact information
* Copyright
* Optional tagline

Do not invent contact details.

---

# 12. Reusable Components

Even in a static site, reuse consistent markup and CSS patterns for:

* Header
* Footer
* Buttons
* Hero sections
* CTA sections
* Product features
* Specifications
* Forms
* Technical callouts
* Section headings

Avoid nearly identical components with slightly different class names.

---

# 13. CSS Architecture

Prefer a small, understandable CSS system.

Suggested organization:

```text
1. Variables / tokens
2. Reset / base styles
3. Typography
4. Layout
5. Header / navigation
6. Buttons
7. Sections
8. Product components
9. Forms
10. Footer
11. Responsive rules
```

Avoid scattering styles across many tiny CSS files unless the existing codebase already uses that pattern successfully.

---

# 14. CSS Variables

Use CSS custom properties where practical.

Example categories:

```css
--color-background
--color-surface
--color-text
--color-muted
--color-border
--color-accent
--container-width
--radius-small
--spacing-small
--spacing-medium
--spacing-large
```

Exact values should follow confirmed Eden branding.

---

# 15. Avoid Excessive Inline Styles

Prefer reusable classes.

Inline styles should be rare and justified.

Avoid duplicated inline declarations across pages.

---

# 16. JavaScript Philosophy

Use JavaScript only where necessary.

Valid uses include:

* Mobile navigation
* Form behavior
* Basic validation
* Small interactive elements
* Optional airflow animation
* Progressive enhancement

Do not use JavaScript to reproduce behavior available through standard HTML and CSS.

---

# 17. No Heavy Frontend Dependencies

Avoid importing large libraries for small features.

Examples:

Do not install an animation framework just for fades.

Do not install a UI framework just for buttons.

Do not add a form library for a simple contact form unless necessary.

---

# 18. Progressive Enhancement

Core site navigation and content should remain usable even if JavaScript fails.

JavaScript should enhance the website rather than become a requirement for reading basic product information.

---

# 19. Responsive Design

The website must support:

* Mobile
* Tablet
* Laptop
* Desktop
* Large desktop

Layouts should adapt naturally.

Do not hard-code page layouts to a single viewport width.

---

# 20. Breakpoints

Use a small, consistent set of breakpoints.

Do not create many highly specific media queries.

Suggested conceptual ranges:

* Mobile
* Tablet
* Desktop

Exact breakpoints may follow the existing project.

---

# 21. Mobile-First Behavior

Important content should remain easy to consume on mobile.

Ensure:

* No horizontal page scrolling
* Buttons are easy to tap
* Navigation works cleanly
* Forms stack appropriately
* Product imagery scales correctly
* Tables remain usable
* Technical diagrams remain readable

---

# 22. Specification Tables

Specification tables should remain usable on narrow screens.

Options include:

* Horizontal scrolling within the table container
* Stacked definition layouts
* Responsive column treatment

Do not allow the entire page to overflow horizontally.

---

# 23. Image Handling

Images should be:

* Appropriately sized
* Optimized
* Responsive
* Given useful alt text
* Loaded efficiently

Avoid serving unnecessarily huge source files when smaller web-ready versions are sufficient.

---

# 24. Image Formats

Prefer modern, efficient formats when practical.

Potential formats:

* WebP
* AVIF
* SVG
* Optimized JPEG
* PNG when transparency is necessary

Use SVG for:

* Logos
* Icons
* Technical diagrams
* Simple line illustrations

when appropriate.

---

# 25. Product Images

Product imagery should preserve accurate proportions and geometry.

Do not distort images using mismatched width and height rules.

Use:

```css
object-fit
```

appropriately.

---

# 26. Lazy Loading

Use lazy loading for below-the-fold images where appropriate.

Do not lazy-load the primary hero image if doing so harms perceived load speed.

---

# 27. Alt Text

All meaningful images require accurate alt text.

Decorative images may use empty alt attributes where appropriate.

Do not stuff marketing keywords into alt text.

---

# 28. Accessibility

Accessibility is required.

At minimum:

* Semantic markup
* Keyboard navigation
* Visible focus states
* Sufficient contrast
* Accessible forms
* Proper heading structure
* Reduced-motion support
* Accessible mobile menu
* Appropriate alt text

---

# 29. Keyboard Navigation

All interactive elements must be operable using a keyboard.

Ensure:

* Navigation links are reachable
* Mobile menu is controllable
* Forms are usable
* Focus order is logical
* Focus is visible

---

# 30. Focus States

Do not remove focus outlines without replacing them with a clear alternative.

Focus states should be obvious.

---

# 31. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Disable or simplify non-essential animation for users who request reduced motion.

---

# 32. Form Labels

Every form field must have a visible label.

Do not rely solely on placeholder text.

---

# 33. Required Fields

Clearly indicate required fields.

Do not make every field required unnecessarily.

Request only information that is useful.

---

# 34. Contact Form

The Contact form may contain:

* Name
* Company
* Email
* Phone
* Subject
* Message

Do not add fields without a clear reason.

---

# 35. Request a Quote Form

The Request a Quote form should be divided into logical sections.

Suggested sections:

* Your Information
* Your Application
* System Requirements
* Project Information
* Attachments

Avoid presenting the form as one long uninterrupted block.

---

# 36. Form Validation

Use both:

* Browser-native validation where appropriate
* Clear custom messaging where useful

Validation should be understandable.

Example:

```text
Please enter a valid email address.
```

Avoid generic error messages.

---

# 37. Form Submission

Do not fake successful form submission.

A visible success state must only appear after actual submission succeeds.

If the form backend is not yet configured, do not pretend that messages are being delivered.

---

# 38. Form Backend

The website may eventually require an external service for form handling.

Potential solutions could include:

* Formspree
* Netlify Forms
* Custom backend
* Email service
* CRM integration

Do not select or implement a third-party service without explicit approval if credentials, billing, or external accounts are required.

---

# 39. File Uploads

The Request a Quote form may eventually support file uploads.

Potential file types:

* PDF
* JPG
* PNG
* CAD exports
* Specification documents

Do not add upload support unless the form backend actually supports it securely.

---

# 40. Form Security

Forms should avoid exposing sensitive credentials.

Never place private API keys or secrets directly in client-side JavaScript.

Do not commit secrets to the repository.

---

# 41. Environment Variables

If external services are later added, secrets should be handled through the hosting platform or secure environment configuration.

Do not commit:

* API keys
* Passwords
* Private tokens
* SMTP credentials
* Private webhook secrets

---

# 42. Spam Protection

If spam becomes a problem, use a lightweight anti-spam approach.

Potential options:

* Honeypot fields
* Rate limiting through backend service
* CAPTCHA only if necessary

Do not add intrusive CAPTCHA by default.

---

# 43. SEO Basics

Every page should include:

* Unique `<title>`
* Meta description
* Canonical URL where appropriate
* Proper heading hierarchy
* Open Graph metadata where appropriate

Detailed SEO strategy may be defined separately in `SEO.md`.

---

# 44. Page Titles

Preferred direction:

```text
Home:
Eden Cleanroom Systems | Localized Clean-Air Workstations

Products:
Clean-Air Workstations | Eden Cleanroom Systems

Contact:
Contact Eden Cleanroom Systems

Request a Quote:
Request a Quote | Eden Cleanroom Systems
```

---

# 45. Metadata

Include appropriate:

* Page title
* Meta description
* Open Graph title
* Open Graph description
* Open Graph image
* Favicon

Use confirmed Eden assets.

---

# 46. Canonical URLs

If a custom domain is configured, canonical URLs should use the canonical production domain.

Do not point canonical URLs to GitHub Pages if the public site uses a custom domain.

---

# 47. Sitemap

If practical, maintain a simple sitemap containing the four public pages.

Do not include:

* Internal docs
* Development assets
* Old removed pages

---

# 48. Robots

The production site should generally remain indexable unless explicitly instructed otherwise.

Do not accidentally block the entire website from search engines.

---

# 49. Structured Data

Structured data may be added later when accurate business and product information is available.

Do not fabricate:

* Organization address
* Product prices
* Ratings
* Reviews
* Availability
* SKU
* Brand details

merely to complete schema markup.

---

# 50. Performance

The website should prioritize fast loading.

Target good performance through:

* Small CSS footprint
* Minimal JavaScript
* Optimized images
* Limited third-party scripts
* Efficient font usage
* Simple page architecture

---

# 51. Third-Party Scripts

Avoid unnecessary:

* Analytics platforms
* Chat widgets
* Heatmaps
* Marketing trackers
* Font loaders
* Social widgets

Every third-party script adds performance and privacy cost.

Only add them with a clear purpose.

---

# 52. Fonts

Prefer:

* System fonts
* Existing project fonts
* Efficiently loaded web fonts

Avoid loading many font families or weights.

---

# 53. Animation Performance

If animation is used:

* Prefer CSS transforms and opacity
* Avoid layout-heavy animation
* Keep durations restrained
* Respect reduced motion

Do not animate large numbers of particles or complex SVG paths without a clear reason.

---

# 54. Error Pages

If a custom 404 page exists, keep it simple.

It should:

* Explain the page was not found
* Link back to Home
* Link to Products
* Link to Request a Quote

Do not over-design error pages.

---

# 55. Broken Links

Before completion, verify:

* Header links
* Footer links
* CTA links
* Image paths
* Form actions
* Internal anchors

No broken navigation should remain.

---

# 56. Removed Legacy Pages

Previous website iterations may contain obsolete pages related to:

* Fixture design
* CNC workholding
* Engineering consulting
* Portfolio projects
* Old resource articles
* Old case studies

Do not preserve links to removed legacy pages.

Do not recreate them unless explicitly requested.

---

# 57. Asset Cleanup

Remove obsolete assets only when they are clearly unused by the current site.

Do not delete:

* Current logo
* Favicon
* Relevant Eden imagery
* Relevant diagrams
* Deployment files

without confirming they are no longer needed.

---

# 58. CNAME

Preserve the existing `CNAME` file if the site uses a custom GitHub Pages domain.

Do not modify it unless the user explicitly changes domains.

---

# 59. Documentation Folder

The `/docs` folder is for project planning and agent guidance.

It should not be linked publicly from the customer-facing website.

Files in `/docs` are not website content unless explicitly incorporated.

---

# 60. No Customer-Facing TBDs by Default

Internal documentation may contain `TBD`.

Customer-facing pages should usually:

* Omit unknown values
* Use application-dependent wording
* Encourage Request a Quote

Do not publish large tables full of `TBD`.

---

# 61. No Invented Data

Codex must not invent:

* Product specs
* Customer data
* Pricing
* Lead times
* Contact information
* Certifications
* Testimonials
* Addresses
* Phone numbers
* Performance values

This applies to both code and placeholder content.

---

# 62. Placeholder Content

If content is missing during development, use obvious development-only placeholders where necessary.

Examples:

```text
[PRODUCT IMAGE]
[CONFIRMED CONTACT EMAIL]
```

Do not create realistic-looking fake information.

Remove placeholders before production deployment.

---

# 63. Comments

Use comments when they explain non-obvious technical decisions.

Avoid excessive comments that merely repeat what the code already says.

---

# 64. Naming Conventions

Use clear names.

Good:

```text
product-hero
airflow-diagram
quote-form
site-header
site-footer
```

Avoid:

```text
box1
section2
thing
wrapper-final
new-style
```

---

# 65. File Naming

Prefer lowercase, readable file names for customer-facing web assets.

Examples:

```text
clean-process-chamber.webp
airflow-diagram.svg
eden-logo.svg
```

Avoid spaces where practical.

---

# 66. Dead Code

Remove clearly unused:

* CSS rules
* JavaScript
* Markup
* Legacy assets

when safe to do so.

Do not leave large amounts of previous-iteration code commented out.

Git history already preserves prior versions.

---

# 67. Browser Support

Support current mainstream browsers.

At minimum:

* Chrome
* Edge
* Safari
* Firefox
* Mobile Safari
* Chrome on Android

Do not spend significant effort supporting obsolete browsers unless required.

---

# 68. Testing

Before considering a change complete, verify:

* Desktop layout
* Mobile layout
* Navigation
* Forms
* Image loading
* Links
* Console errors
* Accessibility basics

If automated tests exist, run them.

---

# 69. HTML Validation

Avoid:

* Duplicate IDs
* Invalid nesting
* Missing form labels
* Empty links
* Broken anchor targets

Keep markup valid and predictable.

---

# 70. Console Errors

Production pages should not generate avoidable JavaScript console errors.

Resolve missing assets, failed selectors, and script errors.

---

# 71. Forms Without Backend

If forms are not yet connected to a backend:

* Clearly document that state internally
* Do not show false success
* Do not silently discard customer submissions

A non-functional form should not be deployed as if it works.

---

# 72. Conversion Tracking

Do not add analytics or conversion tracking unless explicitly requested.

If added later, likely important events include:

* Request a Quote clicks
* Quote form submissions
* Contact form submissions
* Product page visits

Implementation must respect applicable privacy requirements.

---

# 73. External Links

Open external links in a new tab only when doing so clearly benefits the user.

Internal links should remain in the same tab.

---

# 74. Downloadable Files

If Eden later provides:

* Datasheets
* Drawings
* Manuals
* PDFs

store and name them clearly.

Do not create fake datasheets before specifications are established.

---

# 75. Product Diagram Implementation

Technical diagrams may be:

* SVG
* Web image
* CSS-assisted graphic

SVG is preferred when:

* Labels need to remain sharp
* Scaling matters
* Diagram complexity remains manageable

Do not encode large photographic renders as SVG.

---

# 76. Airflow Animation

If airflow animation is implemented, it should be optional enhancement.

Requirements:

* Works without animation
* Respects reduced motion
* Does not imply exact airflow velocity
* Does not obscure the product
* Does not materially slow the page

---

# 77. Content Source of Truth

When implementing copy, use this priority:

1. Current user instruction
2. `CONTENT.md`
3. `PRODUCT.md`
4. `WEBSITE-PLAN.md`
5. Existing website copy

Do not preserve outdated copy solely because it already exists in HTML.

---

# 78. Claims Source of Truth

Any technical claim must comply with:

`CLAIMS.md`

If copy from another document conflicts with `CLAIMS.md`, use the more conservative wording.

---

# 79. Product Source of Truth

Product capabilities and status come from:

`PRODUCT.md`

Do not infer capabilities from:

* Old website content
* Image filenames
* Previous product iterations
* Generic industry expectations

---

# 80. Design Source of Truth

Visual implementation should follow:

`DESIGN.md`

Do not introduce an unrelated aesthetic merely because a framework template includes it.

---

# 81. Scope Discipline

For implementation tasks, do not expand scope without instruction.

Example:

If asked to redesign the homepage, do not also:

* Build a blog
* Add ecommerce
* Add customer accounts
* Add a CMS
* Add analytics
* Add a configurator

Stay focused.

---

# 82. Incremental Development

Prefer changes in understandable stages.

For example:

1. Structure
2. Content
3. Styling
4. Responsive behavior
5. Forms
6. Polish

Avoid rewriting the entire site unnecessarily.

---

# 83. Production Safety

Before deleting or replacing working site files:

* Confirm the replacement exists
* Ensure navigation will still function
* Preserve deployment configuration
* Avoid leaving the production branch in a broken state

---

# 84. Git Hygiene

Use clear commit messages.

Examples:

```text
Build new Eden homepage
Add Clean Process Chamber product section
Implement quote request form layout
Remove obsolete fixture portfolio pages
Improve mobile navigation
```

Avoid vague commit messages such as:

```text
update
stuff
fix
changes
```

---

# 85. No Secrets in Git

Never commit:

```text
.env
API keys
SMTP passwords
access tokens
private credentials
```

unless the file contains only safe public configuration.

---

# 86. Future Backend

A backend may eventually be useful for:

* Quote intake
* File uploads
* CRM integration
* Automated email confirmation
* Product configuration

Do not pre-build this infrastructure before there is a requirement.

---

# 87. Future CMS

A CMS is not currently required.

The site is small enough that static content is acceptable.

Do not introduce a CMS merely because the site may grow later.

---

# 88. Future Ecommerce

The site is not currently an ecommerce site.

Do not add:

* Cart
* Checkout
* Payment processing
* Customer accounts

Current sales path:

**Request a Quote**

---

# 89. Future Product Expansion

New products should be added within the Products architecture.

Do not automatically create a new top-level navigation item for each product.

The four-page structure should remain stable as long as practical.

---

# 90. Completion Checklist

Before declaring a substantial website change complete, verify:

* Page matches approved site structure
* Copy follows `CONTENT.md`
* Product claims follow `CLAIMS.md`
* Product details follow `PRODUCT.md`
* Design follows `DESIGN.md`
* Navigation is correct
* Request a Quote is prominent
* Mobile layout works
* No horizontal overflow
* No broken links
* No missing assets
* No fake data
* No customer-facing TBDs unless intentional
* Forms behave honestly
* No obvious console errors
* Accessibility basics are satisfied
* Existing deployment configuration remains intact

---

# 91. Technical Decision Rule

When choosing between two technical approaches, prefer the one that is:

* Simpler
* Faster
* Easier to maintain
* More accessible
* Less dependent on third parties
* Easier for a future developer to understand

Do not optimize for technical novelty.

---

# 92. Final Technical Direction

The Eden website should remain technically lightweight.

It is a focused industrial product website, not a software application.

The implementation should support the same qualities as the product brand:

> **Clean. Precise. Functional. Engineered.**

The technology should stay in the background so the product can remain the focus.
