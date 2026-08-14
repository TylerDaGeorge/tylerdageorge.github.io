# Eden Cleanroom Systems — Coding Agent Instructions

## 0. Image Generation Rule

Do not generate, synthesize, or invent product images, renders, photography, diagrams, logos, icons, or other visual assets unless the user explicitly asks you to create them.

For website implementation, use visual assets only from:

1. The repository `/assets` folder
2. Files explicitly provided by the user
3. Existing approved project assets already in the repository

If a required image does not exist, do not fabricate one.

Instead:

- Use a clearly labeled development placeholder, or
- Leave the image area unimplemented and note the missing asset in the completion summary

Do not use AI-generated substitute imagery to fill missing product visuals.

Do not download stock images, competitor imagery, or random web images without explicit user instruction.

Do not alter the Eden logo or product imagery unless explicitly requested.

The user controls the visual source material.

## 1. Purpose

This file defines how coding agents should work in the Eden Cleanroom Systems website repository.

Before making substantive website changes, read the project documentation in `/docs`.

The documentation exists to prevent the website implementation from drifting away from the approved:

* Product direction
* Website structure
* Visual language
* Customer-facing copy
* Technical claims
* Engineering constraints
* SEO strategy
* Acceptance criteria

Do not treat the current website implementation as more authoritative than the current project documentation when the two conflict.

---

# 2. Required Reading

Before implementing or substantially modifying the website, read:

```text
/docs/WEBSITE-PLAN.md
/docs/PRODUCT.md
/docs/DESIGN.md
/docs/CONTENT.md
/docs/CLAIMS.md
/docs/TECHNICAL.md
/docs/SEO.md
/docs/ACCEPTANCE.md
```

Do not skip these files and infer the project direction from old HTML, CSS, JavaScript, images, or Git history.

---

# 3. Instruction Priority

When instructions conflict, use this priority order:

1. The user's latest explicit instruction
2. `AGENTS.md`
3. `/docs/CLAIMS.md` for technical and marketing claims
4. `/docs/PRODUCT.md` for product facts and product status
5. `/docs/CONTENT.md` for customer-facing copy
6. `/docs/WEBSITE-PLAN.md` for site structure and page strategy
7. `/docs/DESIGN.md` for visual implementation
8. `/docs/TECHNICAL.md` for implementation decisions
9. `/docs/SEO.md` for search optimization
10. `/docs/ACCEPTANCE.md` for completion criteria
11. Existing repository implementation

When a lower-priority source conflicts with a higher-priority source, follow the higher-priority source.

---

# 4. Project Goal

Eden Cleanroom Systems is being repositioned around **localized clean-air equipment for critical processes**.

The current flagship product direction is:

# Eden Clean Process Chamber

The broader positioning is:

> **Eden builds clean environments around processes.**

The central customer proposition is:

> **Clean the process, not the entire room.**

The website should make this concept immediately understandable.

---

# 5. Approved Website Structure

The website has four primary pages:

```text
Home
Products
Contact
Request a Quote
```

Primary navigation:

```text
Home | Products | Contact | Request a Quote
```

Do not add additional top-level pages without explicit instruction.

Do not independently add:

* About
* Applications
* Technology
* Resources
* Blog
* Industries
* Pricing
* Careers
* Customer Portal
* Login
* Ecommerce
* Newsletter
* Search

Relevant information about Eden, applications, and technology should be incorporated into the approved four-page structure.

---

# 6. Primary Routes

Preferred routes:

```text
/
/products
/contact
/request-a-quote
```

If the existing GitHub Pages implementation uses static `.html` files, maintain deployment compatibility rather than forcing a framework migration solely to create extensionless URLs.

---

# 7. Product Source of Truth

Use:

```text
/docs/PRODUCT.md
```

for product facts.

Do not infer product capabilities from:

* Previous website copy
* Old portfolio pages
* Generic industry practices
* Image filenames
* Competitor websites
* Search-engine results
* Placeholder code
* Earlier product concepts that are no longer documented

If a product specification is missing, it is missing for a reason.

Do not invent it.

---

# 8. Product Status

The Eden Clean Process Chamber is still being developed.

Some documented features are:

* Confirmed direction
* Intended features
* Preferred design direction
* Potential options
* TBD

Do not silently turn a conceptual feature into a finalized standard specification.

Customer-facing content should contain only information Eden can reasonably stand behind.

---

# 9. Claims Source of Truth

Use:

```text
/docs/CLAIMS.md
```

for all technical, regulatory, certification, filtration, contamination, airflow, and performance claims.

`CLAIMS.md` should be treated as a hard guardrail.

If another project document contains stronger wording than `CLAIMS.md`, use the more conservative wording.

---

# 10. Do Not Invent Technical Claims

Do not invent:

* ISO classification
* Particle performance
* Filter efficiency
* Filter class
* Air velocity
* CFM
* Static pressure
* Airflow uniformity
* Noise level
* Electrical requirements
* Product dimensions
* Product weight
* Testing results
* Certifications

Do not invent numbers simply because a layout contains a specification table.

---

# 11. Prohibited Unsupported Claims

Unless future documentation explicitly supports them, do not describe the product as:

* ISO Class 5
* ISO Class 6
* ISO Class 7
* ISO Class 8
* Sterile
* Aseptic
* Pharmaceutical-grade
* Medical-grade
* Biosafety cabinet
* Fume hood
* Hazard containment
* Operator protection
* Cleanroom replacement
* Cleanroom equivalent
* Perfect laminar flow
* Contamination-free

Do not imply these things indirectly either.

---

# 12. HEPA Language

Current acceptable direction includes:

* HEPA filtration
* HEPA-filtered airflow
* HEPA-filtered supply air

Do not invent a specific efficiency percentage or filter class until documented.

Do not assume that the presence of HEPA filtration establishes a cleanroom classification.

---

# 13. Airflow Language

Preferred current terminology:

* Vertical filtered airflow
* Downward filtered airflow
* Engineered airflow distribution
* Supply plenum
* Localized clean-air work zone

Do not use **laminar flow** as a confirmed performance characteristic until documented validation supports it.

---

# 14. Product Protection vs. Operator Protection

The current Clean Process Chamber concept is primarily about protecting the **process/product from airborne particulate exposure**.

Do not describe the system as protecting operators from:

* Chemicals
* Fumes
* Biological hazards
* Infectious materials
* Potent compounds
* Other hazardous substances

unless a future documented product is specifically engineered for those uses.

---

# 15. Existing Stainless Workstations

Do not automatically delete or ignore Eden's existing stainless workstation products.

They remain part of the product offering.

Their role is now secondary to the Clean Process Chamber and the broader clean-air system direction.

They may be positioned as:

* Standalone cleanroom workstations
* Bases for the Clean Process Chamber
* Assembly stations
* Inspection stations
* Packaging stations

Use only confirmed workstation specifications.

---

# 16. Customer-Facing Copy

Use:

```text
/docs/CONTENT.md
```

as the preferred source for website copy.

Do not rewrite approved copy simply to make it:

* More exciting
* More corporate
* More futuristic
* More SEO-heavy
* More sales-oriented

Prefer concise technical clarity.

---

# 17. Tone

The website should sound like a serious physical equipment manufacturer.

Preferred tone:

* Direct
* Technical
* Clear
* Concise
* Professional
* Grounded

Avoid phrases such as:

* Revolutionary
* Game-changing
* World-class
* Best-in-class
* Cutting-edge
* Industry-leading

unless specifically approved and supported.

---

# 18. No Fake Credibility

Never invent:

* Testimonials
* Customer names
* Customer logos
* Reviews
* Ratings
* Certifications
* Awards
* Installation counts
* Customer counts
* Years in business
* Market-share claims
* Performance statistics
* Case studies

If real evidence is unavailable, leave the section out.

---

# 19. No Fake Company Information

Do not invent:

* Address
* Phone number
* Business hours
* Employees
* Locations
* Social profiles
* Staff members

Use only confirmed information already provided in the project.

---

# 20. No Fake Commercial Information

Do not invent:

* Prices
* Starting prices
* Lead times
* Shipping times
* Warranty terms
* Inventory status
* Delivery dates
* Discounts
* ROI
* Cost savings

The current primary sales path is:

**Request a Quote**

---

# 21. Design Source of Truth

Use:

```text
/docs/DESIGN.md
```

for visual direction.

The website should feel like:

**engineered industrial equipment**

not:

* SaaS
* A personal portfolio
* Generic laboratory furniture
* A startup landing page
* A template marketplace website

---

# 22. Visual Priorities

Prioritize:

1. Product imagery
2. Product function
3. Engineering diagrams
4. Technical credibility
5. Customer applications
6. Conversion

The product should dominate the visual identity.

---

# 23. Visual Style

Favor:

* White or restrained neutral backgrounds
* Stainless and metallic imagery
* Strong technical typography
* Generous whitespace
* Clear technical diagrams
* Airflow visualizations
* Product renders
* Dimensioned drawings
* Real manufacturing photography

Avoid unnecessary decorative complexity.

---

# 24. Avoid Generic SaaS Design

Do not default to:

* Large gradient blobs
* Huge rounded cards
* Floating glassmorphism panels
* Excessive pills
* Decorative dashboard elements
* Random statistic cards
* Animated background particles
* Artificial product metrics

The company sells physical industrial equipment.

Design accordingly.

---

# 25. Product Imagery

When selecting or implementing product imagery, prefer:

1. Real Eden photography
2. Accurate Eden product renders
3. Eden technical diagrams
4. Relevant application imagery
5. Generic stock imagery only when necessary

Do not let generic stock photography dominate the site.

---

# 26. Technical Diagrams

Technical diagrams should be clear enough to teach the product.

Important concepts include:

```text
Room Air
↓
Prefilter
↓
Blower
↓
HEPA Filter
↓
Supply Plenum
↓
Work Zone
↓
Exhaust
```

Do not add unsupported values to diagrams.

---

# 27. Codebase Strategy

Use the existing technical approach where practical.

Do not migrate the site to a new framework solely because it is familiar.

If the repository currently uses static HTML/CSS/JavaScript and that remains sufficient, continue with it.

Do not independently introduce:

* React
* Next.js
* Vue
* Svelte
* Tailwind
* Bootstrap
* CMS platforms
* Large UI frameworks

unless there is a clear requirement.

---

# 28. Keep the Site Lightweight

This is a focused industrial website, not a web application.

Prefer:

* Semantic HTML
* Reusable CSS
* Minimal JavaScript
* Optimized assets
* Simple dependencies

Avoid unnecessary infrastructure.

---

# 29. GitHub Pages

Preserve GitHub Pages compatibility unless explicitly instructed otherwise.

Do not introduce features that require a backend server unless an external service or new hosting architecture has been approved.

---

# 30. Preserve CNAME

Do not delete or modify:

```text
CNAME
```

unless explicitly instructed to change the production domain.

---

# 31. Documentation

Project planning documentation belongs in:

```text
/docs
```

Current expected documentation:

```text
/docs/WEBSITE-PLAN.md
/docs/PRODUCT.md
/docs/DESIGN.md
/docs/CONTENT.md
/docs/CLAIMS.md
/docs/TECHNICAL.md
/docs/SEO.md
/docs/ACCEPTANCE.md
```

Do not create empty Markdown files.

Do not create speculative documentation placeholders.

Only create documentation when it contains meaningful information or the user explicitly requests it.

---

# 32. Documentation Is Not Public Website Content

Do not link customer-facing navigation to `/docs`.

Do not expose internal project guidance as part of the intended website experience.

---

# 33. Legacy Website Content

This repository has contained previous website iterations involving topics such as:

* CNC fixtures
* Workholding
* Engineering consulting
* Manufacturing automation projects
* Portfolio case studies
* Fixture-design resources

These do not define the current website direction.

Do not preserve obsolete content solely because it exists in Git history or older files.

---

# 34. Legacy Cleanup Rule

When clearly obsolete legacy files are no longer referenced by the active site, they may be removed as part of an explicitly requested cleanup.

Before deleting a file:

1. Confirm it belongs to an obsolete iteration.
2. Confirm the current site does not depend on it.
3. Preserve current Eden brand assets.
4. Preserve `/docs`.
5. Preserve deployment configuration.
6. Update references if necessary.

Do not delete uncertain files casually.

---

# 35. Asset Naming

Use clear descriptive names.

Preferred:

```text
eden-clean-process-chamber.webp
clean-process-chamber-airflow.svg
eden-cleanroom-workstation.webp
```

Avoid:

```text
image1.png
new-final.png
final2-final.png
thing.svg
```

---

# 36. Forms

There are two distinct form purposes.

## Contact

General communication.

## Request a Quote

Application and sales intake.

Do not merge these into the same generic form.

---

# 37. Quote Form

The Request a Quote experience should gather useful application information.

Use the fields and grouping defined in:

```text
/docs/CONTENT.md
```

and:

```text
/docs/WEBSITE-PLAN.md
```

Do not add unnecessary questions solely because a form template contains them.

---

# 38. Honest Form Behavior

Never fake form submission.

Do not show:

> Thank you, your request was received.

unless the submission actually succeeded.

If no backend exists, either:

* Implement an approved real form service, or
* Leave the form clearly non-production until configured

Never silently discard customer information.

---

# 39. Third-Party Services

Do not independently sign Eden up for or integrate paid/external services without explicit approval.

Examples:

* Form providers
* CRM systems
* Analytics platforms
* Chat widgets
* Newsletter services
* CAPTCHA providers

If a service requires credentials, billing, or an external account, surface that dependency instead of inventing configuration.

---

# 40. Secrets

Never commit:

* API keys
* Passwords
* Access tokens
* SMTP credentials
* Private webhook secrets
* Private environment configuration

Never hard-code secrets into client-side JavaScript.

---

# 41. Accessibility

Accessibility is required.

At minimum:

* Semantic HTML
* Logical heading structure
* Keyboard navigation
* Visible focus states
* Accessible mobile menu
* Visible form labels
* Useful alt text
* Sufficient contrast
* Reduced-motion support

Do not sacrifice accessibility for animation or visual styling.

---

# 42. Responsive Design

Every substantive page change must work on:

* Mobile
* Tablet
* Laptop
* Desktop

Do not consider a desktop-only implementation complete.

---

# 43. Mobile Requirements

Verify:

* No horizontal page overflow
* Navigation works
* Product imagery scales properly
* CTAs remain usable
* Technical diagrams remain readable
* Forms stack correctly
* Specification content stays usable

---

# 44. SEO

Follow:

```text
/docs/SEO.md
```

SEO must never override:

```text
/docs/CLAIMS.md
```

Do not use inaccurate terminology because it has higher search volume.

---

# 45. Primary SEO Themes

Current high-level themes include:

* Localized clean-air workstation
* Clean-air workstation
* HEPA workstation
* Clean Process Chamber
* Cleanroom workstation
* Stainless cleanroom workstation

Use naturally.

Do not keyword-stuff.

---

# 46. Metadata

Each public page should have:

* Unique page title
* Meta description
* Logical H1
* Appropriate canonical
* Open Graph metadata where practical

Use actual production-domain information.

Do not invent metadata values that imply unsupported capabilities.

---

# 47. Sitemap

The initial public sitemap should contain only approved public pages:

```text
/
/products
/contact
/request-a-quote
```

Do not add internal docs or obsolete legacy pages.

---

# 48. Performance

Prefer a fast website over unnecessary effects.

Prioritize:

* Optimized images
* Minimal JavaScript
* Efficient CSS
* Limited third-party scripts
* Correct image sizing
* Good layout stability

Do not add large dependencies for small visual effects.

---

# 49. Animation

Animation is optional.

Appropriate:

* Subtle hover behavior
* Mobile menu transitions
* Gentle airflow visualization
* Small entrance transitions

Avoid:

* Scroll hijacking
* Constant motion
* Large parallax effects
* Decorative particle systems
* Overly cinematic interactions

Always respect reduced-motion preferences.

---

# 50. Code Quality

Prefer code that is:

* Simple
* Readable
* Maintainable
* Consistent
* Easy for another developer or coding agent to modify

Avoid unnecessary abstractions.

---

# 51. Reuse

Reuse consistent patterns for:

* Header
* Footer
* Buttons
* Containers
* Section headings
* Product features
* Specification tables
* Forms
* CTA sections

Do not create slightly different styles for every section.

---

# 52. CSS

Prefer:

* Reusable classes
* CSS variables
* Consistent spacing
* Consistent typography
* Limited breakpoints

Avoid:

* Excessive inline styles
* Excessive `!important`
* Large amounts of duplicated CSS
* Dead CSS from previous website iterations

---

# 53. JavaScript

Use JavaScript only when needed.

Good uses:

* Mobile menu
* Actual form behavior
* Small interactive components
* Optional airflow animation

Core content should remain readable without JavaScript where practical.

---

# 54. No Scope Creep

If asked to build or change one part of the website, do not independently expand the project into unrelated features.

Do not add without explicit instruction:

* Blog
* CMS
* Ecommerce
* Product configurator
* Customer accounts
* Search
* Newsletter
* Chatbot
* Analytics
* Careers
* Portal

Stay focused on the requested work.

---

# 55. Placeholder Rule

Do not invent realistic information to make a design look complete.

If development requires a placeholder, make it obviously temporary.

Examples:

```text
[PRODUCT RENDER]
[CONFIRMED PHONE NUMBER]
```

Do not create fake:

```text
(555) 123-4567
ISO CLASS 5
$4,995
Ships in 2 weeks
```

---

# 56. Customer-Facing TBD Rule

Internal docs may use:

```text
TBD
```

The production website generally should not.

If information is unknown:

* Omit it
* Use application-dependent wording
* Direct the customer toward Request a Quote

Do not publish tables full of TBD values.

---

# 57. Testing

For substantive changes, verify:

* All four pages load
* Desktop layout
* Mobile layout
* Navigation
* Product images
* Technical diagrams
* Forms
* Internal links
* Asset paths
* Console errors
* Accessibility basics

If automated tests or validation scripts exist, run them.

---

# 58. Browser Console

Do not knowingly ship:

* Missing asset errors
* Repeated JavaScript exceptions
* Broken selectors
* Failed internal requests
* Form runtime errors

Resolve obvious console problems before completion.

---

# 59. Broken Links

Verify links to:

* Home
* Products
* Contact
* Request a Quote
* Header CTAs
* Footer CTAs
* Internal page anchors

Do not leave links pointing to deleted legacy pages.

---

# 60. Definition of Done

Use:

```text
/docs/ACCEPTANCE.md
```

before declaring substantial website work complete.

Do not simply state that the task is finished because the files were modified.

Verify the relevant acceptance criteria.

---

# 61. Completion Summary

When finishing a coding task, summarize:

* What changed
* Which files changed
* What was validated
* Any known limitations
* Any information still required from the user

Do not claim testing that was not actually performed.

---

# 62. Do Not Hide Limitations

If something could not be completed because of:

* Missing product data
* Missing credentials
* Missing form backend
* Missing imagery
* Missing contact information
* Technical limitations

state that clearly.

Do not invent a workaround that creates false customer-facing behavior.

---

# 63. Product-First Decision Rule

When choosing between implementation approaches, prefer the approach that makes the physical product easier to understand.

Prefer:

**Product render over abstract decoration**

**Airflow diagram over vague marketing copy**

**Real specification over generic claim**

**Clear CTA over clever interaction**

**Whitespace over unnecessary components**

---

# 64. Accuracy Decision Rule

When choosing between:

**Stronger marketing**

and:

**More accurate technical language**

choose accuracy.

---

# 65. Simplicity Decision Rule

When choosing between:

**A complicated technical solution**

and:

**A simpler solution that fully satisfies the requirement**

choose the simpler solution.

---

# 66. Final Project Standard

The website should feel like the digital extension of Eden's equipment:

**Clean. Precise. Functional. Engineered.**

A visitor should quickly understand:

1. Eden makes localized clean-air equipment.
2. The Eden Clean Process Chamber is the flagship product.
3. It brings HEPA-filtered airflow directly around critical processes.
4. Eden also provides stainless cleanroom workstations.
5. The next step for a buyer is to request a quote.

The central message remains:

> # Clean the process, not the entire room.
