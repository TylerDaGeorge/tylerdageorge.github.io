# Eden Cleanroom Systems — Acceptance Criteria

## 1. Purpose

This document defines what must be true before the Eden Cleanroom Systems website should be considered complete enough for launch or handoff.

It should be read alongside:

* `WEBSITE-PLAN.md`
* `PRODUCT.md`
* `DESIGN.md`
* `CONTENT.md`
* `CLAIMS.md`
* `TECHNICAL.md`
* `SEO.md`

This document is the final quality gate.

Codex should not declare the website complete until the relevant criteria below have been checked.

---

# 2. Definition of Done

The website is considered complete when:

* The approved four-page structure is implemented.
* The site matches the current product direction.
* Customer-facing copy follows the approved content.
* Technical claims remain accurate and conservative.
* The website works on desktop and mobile.
* Navigation and forms function correctly.
* No obsolete website content remains linked.
* No fake data or unsupported specifications appear.
* SEO fundamentals are implemented.
* Accessibility basics are satisfied.
* No obvious production errors remain.

---

# 3. Required Pages

The website must contain exactly these primary pages:

* Home
* Products
* Contact
* Request a Quote

Approved primary routes:

```text
/
/products
/contact
/request-a-quote
```

Equivalent static `.html` routes are acceptable if required by the existing GitHub Pages architecture.

Do not add additional top-level pages without explicit instruction.

---

# 4. Primary Navigation

The primary navigation must contain:

**Home | Products | Contact | Request a Quote**

Acceptance criteria:

* All four links are visible on desktop.
* All four links are available on mobile.
* The Eden logo links to Home.
* `Request a Quote` receives stronger visual emphasis.
* No obsolete navigation links remain.
* No links point to deleted legacy pages.

---

# 5. Home Page

The Home page must clearly communicate what Eden does.

Required content:

* Primary hero
* Clean-air positioning
* Clean Process Chamber introduction
* Localized-control value proposition
* How It Works section
* Applications section
* Short Eden/company section
* Final quote CTA

The visitor should be able to understand the basic offering without visiting another page.

---

# 6. Home Hero

Required:

* Headline based on approved content
* Supporting description
* Request a Quote CTA
* View Products CTA
* Product-focused visual area

Preferred headline:

**Clean Air. Right Where You Need It.**

Acceptance criteria:

* Product/category is understandable near the top.
* CTA hierarchy is obvious.
* Hero works at mobile widths.
* Hero image does not cause excessive layout shift.
* No unsupported claims are used.

---

# 7. Home Product Introduction

The Home page must prominently feature:

**Eden Clean Process Chamber**

The section should explain:

* What the product is
* That it uses HEPA-filtered airflow
* That the work zone is localized
* That airflow is intended to move downward
* That the product is designed around critical processes

The flagship product should receive more visual emphasis than stainless workstations.

---

# 8. Home Value Proposition

The site should communicate the idea:

**Clean the process, not the entire room.**

Acceptance criteria:

* The localized-control concept is visually or verbally clear.
* The site does not claim that a Clean Process Chamber universally replaces a cleanroom.
* No unsupported numerical savings appear.
* The benefit is framed as application-dependent.

---

# 9. Home How It Works

The Home page must include a basic airflow explanation.

Expected conceptual sequence:

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

Acceptance criteria:

* Airflow direction is understandable.
* Diagram labels are readable.
* No fake performance values appear.
* The visual remains usable on mobile.
* Reduced-motion users can understand the section without animation.

---

# 10. Home Applications

The Home page should show relevant applications such as:

* Assembly
* Inspection
* Packaging
* Electronics
* Laboratory
* Appropriate medical/life-science manufacturing

Acceptance criteria:

* Applications are framed cautiously.
* Hazardous or containment applications are not implied.
* No unsupported regulatory suitability is claimed.
* Applications do not overwhelm the core product story.

---

# 11. Home Company Section

The Home page should include a short Eden positioning section.

It should reinforce:

* Practical engineering
* Stainless fabrication
* Modular equipment
* Serviceability
* Direct customer support
* Application-focused systems

Avoid generic corporate filler.

---

# 12. Home Final CTA

The Home page must end with a clear next action.

Primary CTA:

**Request a Quote**

Secondary CTA:

**Contact Eden**

The user should not have to search for the conversion path.

---

# 13. Products Page

The Products page must function as the technical center of the website.

Required content:

* Products hero
* Eden Clean Process Chamber
* Product imagery/render
* Airflow explanation
* Feature section
* Configuration section
* Confirmed specifications
* Eden Cleanroom Workstations
* Technical information
* Request a Quote CTA

---

# 14. Clean Process Chamber Product Section

Required product name:

**Eden Clean Process Chamber**

Required positioning:

**Localized HEPA-filtered airflow for critical processes.**

Acceptance criteria:

* Product is described consistently with `PRODUCT.md`.
* No invented dimensions are shown.
* No invented airflow values are shown.
* No invented efficiency values are shown.
* No unsupported ISO class appears.
* No sterile or aseptic claim appears.
* No containment claim appears.

---

# 15. Product Features

Product features may include only approved or properly qualified items.

Potential features:

* HEPA filtration
* Engineered air distribution
* Vertical airflow
* Stainless construction
* Clear enclosure
* Variable airflow
* Integrated lighting
* Serviceable design

Acceptance criteria:

* Conceptual features are not presented as finalized if they are not confirmed.
* Marketing language does not exceed the claims rules.
* Terminology is consistent across sections.

---

# 16. Product Specifications

Specifications must be accurate.

Acceptance criteria:

* Every published technical value has a known source.
* Unknown values are omitted from customer-facing content.
* No guessed values are used for visual completeness.
* No fake product SKUs are created.
* No fake weights are created.
* No fake electrical requirements are created.
* No fake airflow numbers are created.

A short accurate table is acceptable.

---

# 17. Product Configuration

The Products page may present configuration concepts.

Potential categories:

* Installation
* Access
* Monitoring
* Accessories

Acceptance criteria:

* Conceptual options are clearly framed as such.
* Codex does not imply all options are available as standard products.
* CTA directs users to request a configuration quote.

---

# 18. Cleanroom Workstations

The Products page should preserve the existing stainless workstation offering where appropriate.

Acceptance criteria:

* Workstations are secondary to the Clean Process Chamber.
* Existing confirmed specifications are preserved if used.
* New specifications are not invented.
* The positioning fits the broader clean-air ecosystem.

---

# 19. Contact Page

The Contact page must be simple and functional.

Required:

* Page heading
* Short supporting copy
* Confirmed contact information, if available
* Contact form
* Link to Request a Quote

Suggested form fields:

* Name
* Company
* Email
* Phone
* Subject
* Message

---

# 20. Contact Information

Only confirmed information may appear.

Do not invent:

* Phone number
* Street address
* Business hours
* Social profiles
* Staff names

If only an email is confirmed, only publish the email.

---

# 21. Contact Form

Acceptance criteria:

* Every field has a visible label.
* Required fields are identified.
* Email validation works.
* Keyboard navigation works.
* Submission does not falsely report success.
* Error messages are understandable.
* Success state is clear after an actual successful submission.

---

# 22. Request a Quote Page

The Request a Quote page must function as an application-intake experience.

Required groups:

* Your Information
* Your Application
* System Requirements
* Project Information
* Attachments, if supported

The page should not look like a generic contact form.

---

# 23. Quote Form Fields

The form may include:

## Your Information

* Name
* Company
* Email
* Phone

## Your Application

* Industry
* Process description
* Parts/products being handled
* Problem being solved
* Existing controlled environment
* Cleanliness requirement, if known

## System Requirements

* Desired working width
* Desired working depth
* Desired working height
* Installation type
* Electrical requirements, if known
* Access requirements
* Instrumentation requirements
* Additional requirements

## Project Information

* Quantity
* Desired timeframe
* Installation location

---

# 24. Quote Form Functionality

Acceptance criteria:

* Form fields are grouped logically.
* Labels are visible.
* Mobile layout is usable.
* Required fields are reasonable.
* The form does not falsely submit.
* The customer receives a clear success state after real submission.
* No sensitive credentials exist in client-side code.

---

# 25. File Upload

If file upload is implemented:

* Backend must actually support uploads.
* Allowed file types should be limited appropriately.
* File size limits should be clear.
* Upload errors should be handled.
* Files must not be silently discarded.

If secure upload support is not ready, omit the upload field rather than faking it.

---

# 26. Content Accuracy

All customer-facing content must follow:

* `CONTENT.md`
* `PRODUCT.md`
* `CLAIMS.md`

Acceptance criteria:

* No unsupported marketing language appears.
* No fake technical claims appear.
* No invented company facts appear.
* No copied legacy business positioning remains unintentionally.

---

# 27. Claims Compliance

The final website must not contain unsupported claims including:

* ISO Class 5
* ISO Class 6
* ISO Class 7
* ISO Class 8
* Sterile
* Aseptic
* Medical-grade
* Pharmaceutical-grade
* Biosafety cabinet
* Fume hood
* Hazard containment
* Perfect laminar flow
* Guaranteed contamination reduction
* Guaranteed cost savings

unless future documentation explicitly validates them.

---

# 28. HEPA Claims

Acceptance criteria:

* HEPA terminology is consistent with selected product information.
* No efficiency percentage is invented.
* No filter class is invented.
* HEPA filtration is not treated as proof of ISO classification.

---

# 29. Laminar Flow Language

Do not use "laminar flow" as a confirmed product characteristic unless the product documentation has been updated to support it.

Preferred current language:

* Vertical filtered airflow
* Downward filtered airflow
* Engineered airflow distribution

---

# 30. Product Status

Conceptual product details must remain distinguishable from confirmed capabilities.

Acceptance criteria:

* Future products are not presented as currently available.
* Potential accessories are not presented as stocked products unless confirmed.
* Conceptual sizes are not presented as final SKUs.
* The website does not imply engineering validation that has not occurred.

---

# 31. Design Compliance

The final visual implementation must follow `DESIGN.md`.

Acceptance criteria:

* Site feels like industrial equipment manufacturing.
* Product imagery is visually dominant.
* Design is restrained.
* Typography is professional and readable.
* Whitespace is used intentionally.
* Excessive SaaS-style cards are avoided.
* Excessive gradients are avoided.
* Excessive rounded corners are avoided.
* Generic stock imagery does not dominate.

---

# 32. Brand Consistency

Use:

**Eden Cleanroom Systems**

Product:

**Eden Clean Process Chamber**

Do not introduce alternate company or product names without approval.

---

# 33. CTA Consistency

Primary CTA:

**Request a Quote**

Secondary CTA:

**View Products**

Acceptance criteria:

* Request a Quote remains easy to find.
* CTA naming is consistent.
* Pages do not contain many competing primary actions.
* Buttons link to the intended destination.

---

# 34. Desktop Layout

Test on common desktop/laptop widths.

Acceptance criteria:

* No overlapping content
* No broken grid
* No clipped text
* No stretched product images
* Navigation remains usable
* Forms remain readable
* Technical diagrams remain clear

---

# 35. Mobile Layout

Test on common mobile widths.

Acceptance criteria:

* No horizontal page overflow
* Navigation opens and closes correctly
* Product imagery scales appropriately
* CTA buttons remain usable
* Text remains readable
* Forms stack cleanly
* Technical diagrams remain understandable
* Specification content stays within the viewport

---

# 36. Tablet Layout

Acceptance criteria:

* Two-column layouts transition cleanly.
* Content does not feel squeezed.
* Header remains functional.
* Product imagery remains appropriately sized.
* Forms remain readable.

---

# 37. Mobile Navigation

Acceptance criteria:

* Menu control is visible.
* Menu can be opened using keyboard.
* Menu can be closed reliably.
* Links are large enough to tap.
* Request a Quote remains emphasized.
* Menu does not trap or lose focus incorrectly.

---

# 38. Accessibility

Required baseline:

* Semantic HTML
* Logical heading hierarchy
* Visible focus states
* Keyboard-operable navigation
* Visible form labels
* Appropriate alt text
* Sufficient text contrast
* Reduced-motion support
* Accessible menu behavior

Do not knowingly ship major accessibility failures.

---

# 39. Heading Structure

Each page must contain one primary H1.

Acceptance criteria:

* H1 is relevant to the page.
* H2/H3 structure is logical.
* Heading levels are not selected merely for font size.
* No duplicate H1s are used without a strong semantic reason.

---

# 40. Image Accessibility

Acceptance criteria:

* Meaningful images have descriptive alt text.
* Decorative images use appropriate empty alt treatment.
* Alt text describes the image rather than stuffing keywords.
* Product images are not the sole source of important product information.

---

# 41. Motion Accessibility

If animation exists:

* `prefers-reduced-motion` is respected.
* Important information remains visible without animation.
* Airflow concepts remain understandable in static form.
* No required interaction depends on motion.

---

# 42. SEO Compliance

The final implementation must follow `SEO.md`.

Required:

* Unique page titles
* Meta descriptions
* Logical headings
* Canonical URLs where appropriate
* Correct internal links
* Optimized image naming/alt text
* Sitemap
* Production-safe robots configuration
* Open Graph metadata where practical

---

# 43. Approved Page Titles

Preferred:

Home:

**Eden Cleanroom Systems | Localized Clean-Air Workstations**

Products:

**Clean-Air Workstations | Eden Cleanroom Systems**

Contact:

**Contact Eden Cleanroom Systems**

Request a Quote:

**Request a Quote | Eden Cleanroom Systems**

Small adjustments are acceptable if they improve accuracy without keyword stuffing.

---

# 44. Sitemap

Sitemap should include only active public pages.

Initial sitemap:

```text
/
/products
/contact
/request-a-quote
```

Do not include `/docs`.

Do not include deleted legacy pages.

---

# 45. Robots

Acceptance criteria:

* Production pages are not accidentally blocked.
* Development-only paths are not intentionally promoted.
* No accidental global `Disallow: /` exists in production.

---

# 46. Canonical URLs

Acceptance criteria:

* Canonicals use the production domain.
* Canonicals point to real pages.
* GitHub Pages subdomain is not used when a custom production domain is active.
* No old domain references remain.

---

# 47. Performance

The site should remain lightweight.

Acceptance criteria:

* Hero media is optimized.
* Images are not unnecessarily oversized.
* Below-fold images use lazy loading where appropriate.
* JavaScript is limited to necessary functionality.
* No unnecessary large UI framework is introduced.
* No unnecessary animation library is introduced.
* No obviously excessive third-party scripts are added.

---

# 48. Layout Stability

Acceptance criteria:

* Important image dimensions are reserved.
* Loading images do not cause major page jumps.
* Fonts do not cause excessive layout movement.
* Form loading does not shift large page sections unexpectedly.

---

# 49. Console Health

Before handoff:

* Check browser console.
* Resolve avoidable JavaScript errors.
* Resolve missing assets.
* Resolve broken selectors.
* Resolve repeated failed requests.

The final site should not knowingly ship with recurring console errors.

---

# 50. Broken Link Check

Verify:

* Header links
* Footer links
* CTA links
* Product links
* Contact links
* Quote links
* Internal anchors
* Image references
* CSS references
* JavaScript references

No links should point to removed legacy content.

---

# 51. Legacy Website Cleanup

Previous website iterations may include content related to:

* CNC fixtures
* Workholding
* Engineering consulting
* Portfolio projects
* Old case studies
* Previous business positioning

Acceptance criteria:

* These are not linked from the current website.
* Obsolete navigation is removed.
* Obsolete assets are removed when clearly unused.
* Current Eden brand assets are preserved.
* `CNAME` is preserved unless explicitly changed.
* `/docs` content is preserved.

---

# 52. No Fake Content

The website must not contain invented:

* Customer testimonials
* Customer logos
* Reviews
* Certifications
* Awards
* Addresses
* Phone numbers
* Years in business
* Install counts
* Product prices
* Lead times
* Warranty terms
* Product specs

Placeholder content must be obvious during development and removed before production.

---

# 53. No Customer-Facing Development Notes

Remove customer-visible text such as:

* TODO
* FIXME
* Placeholder
* Lorem ipsum
* TBD

unless the user intentionally wants a preliminary specification displayed.

Internal code comments may still contain development notes where appropriate.

---

# 54. Forms and Honesty

A form must not claim success if nothing was transmitted.

Acceptance criteria:

* Successful state corresponds to actual successful submission.
* Failure state is displayed if submission fails.
* No form silently discards customer information.
* Backend limitations are not hidden behind fake UI behavior.

---

# 55. Secrets and Credentials

Verify that no secrets are committed.

Search for:

* API keys
* Access tokens
* Passwords
* SMTP credentials
* Private webhook URLs
* Private service credentials

Public client identifiers may be acceptable where the service specifically treats them as public.

---

# 56. Repository Cleanliness

Acceptance criteria:

* No obvious temp files remain.
* No test garbage files remain.
* No duplicate obsolete assets remain without purpose.
* File names are understandable.
* New assets follow consistent naming.
* Documentation remains in `/docs`.
* `AGENTS.md` remains at repository root when created.

---

# 57. Code Quality

Code should be:

* Readable
* Consistent
* Appropriately commented
* Free from obvious duplication
* Simple enough for future editing

Avoid unnecessary abstraction.

Avoid huge amounts of dead code.

---

# 58. CSS Quality

Acceptance criteria:

* Reusable styles are used.
* Duplicate button styles are avoided.
* Spacing is reasonably consistent.
* No large collection of obsolete CSS remains in active use.
* `!important` is not used excessively.
* Responsive rules are understandable.

---

# 59. JavaScript Quality

Acceptance criteria:

* JavaScript exists only where needed.
* No unused large dependency remains.
* Mobile navigation behaves correctly.
* Form logic handles errors.
* No avoidable global namespace pollution occurs.
* No recurring runtime errors exist.

---

# 60. Product Imagery

If product imagery is present:

* It should clearly resemble the Eden product.
* Proportions should be believable.
* No fake certification labels should appear.
* No unsupported specifications should be embedded.
* Product should not be distorted by layout.

If no final product render exists, use an honest placeholder or approved conceptual image rather than misleading photography.

---

# 61. Technical Diagrams

Acceptance criteria:

* Labels are readable.
* Terminology matches `PRODUCT.md`.
* Diagrams do not contain unsupported numbers.
* Airflow direction matches the current product concept.
* Diagrams remain legible on mobile.

---

# 62. Footer

Footer should be compact and consistent.

Acceptance criteria:

* Eden name is correct.
* Navigation links work.
* Only confirmed contact information appears.
* No fake social profiles appear.
* No oversized corporate footer is introduced unnecessarily.

---

# 63. Browser Compatibility

Perform basic checks in current versions of:

* Chrome
* Edge
* Firefox
* Safari where available

Also verify a mobile browser layout.

The site does not need obsolete browser compatibility unless explicitly requested.

---

# 64. GitHub Pages Compatibility

If GitHub Pages remains the deployment target:

* Static pages load correctly.
* Relative asset paths work.
* `CNAME` remains correct.
* No server-only feature prevents page operation.
* Form dependencies are externalized appropriately if needed.
* Root and subpage links work when deployed.

---

# 65. Deployment Check

Before final handoff:

1. Confirm production build/files exist.
2. Confirm all four pages load.
3. Confirm navigation works.
4. Confirm assets load.
5. Confirm domain configuration remains intact.
6. Confirm forms behave correctly.
7. Confirm no critical console errors exist.
8. Confirm mobile behavior.
9. Confirm no old content is exposed unintentionally.

---

# 66. Final Content Review

Read every visible page from the perspective of a buyer.

Confirm:

* Eden's offering is understandable.
* The flagship product is clear.
* The localized clean-air concept is clear.
* Technical language is understandable.
* Claims are not overstated.
* Quote path is easy to find.
* No previous business identity dominates the site.

---

# 67. Five-Second Test

On the Home page, a new visitor should be able to determine within approximately five seconds:

* Eden makes physical clean-air equipment.
* The system is designed around localized clean air.
* The Clean Process Chamber is the primary product.
* There is a clear way to view products or request a quote.

If not, the hero needs improvement.

---

# 68. Products Page Buyer Test

A buyer should be able to determine:

* What the Clean Process Chamber is
* How airflow moves through it
* What the primary features are
* What can potentially be configured
* Which specifications are confirmed
* How to request pricing

without contacting Eden merely to understand the basic product concept.

---

# 69. Trust Test

The website should feel credible because it is accurate.

Confirm there are no:

* Fake reviews
* Fake logos
* Fake certifications
* Fake performance metrics
* Fake statistics
* Fake addresses
* Fake technical data

The site should prefer an honest omission over invented credibility.

---

# 70. Scope Test

Before completing the project, confirm Codex has not added unrequested features such as:

* Blog
* About page
* Resources center
* Account login
* Ecommerce
* Shopping cart
* Newsletter popup
* Chat widget
* Careers page
* Customer portal
* Complex product configurator
* Search

unless explicitly requested later.

---

# 71. Core Document Compliance

Before handoff, verify implementation against each project document:

## WEBSITE-PLAN.md

Does the page structure match the approved site strategy?

## PRODUCT.md

Are products and features represented accurately?

## DESIGN.md

Does the visual execution match the intended industrial design language?

## CONTENT.md

Does visible copy use approved language and tone?

## CLAIMS.md

Are technical and marketing claims compliant?

## TECHNICAL.md

Does the implementation follow technical constraints?

## SEO.md

Are core SEO requirements present?

## ACCEPTANCE.md

Have final checks been completed?

---

# 72. Priority of Fixes

If issues remain, fix them in this order:

1. Broken functionality
2. False or unsupported claims
3. Missing or broken navigation
4. Broken mobile layout
5. Form submission failures
6. Accessibility problems
7. Missing product information
8. SEO errors
9. Performance problems
10. Visual polish

Do not prioritize decorative polish over functional or accuracy problems.

---

# 73. Launch Blockers

The following should block launch:

* Broken primary navigation
* Missing Products page
* Missing Request a Quote page
* Form falsely reporting successful submissions
* Customer submissions being discarded unknowingly
* Major mobile layout breakage
* Unsupported ISO/sterility/containment claims
* Fake product specifications
* Exposed private credentials
* Broken production-domain configuration
* Major missing assets
* Site-wide console failures that break functionality

---

# 74. Non-Blocking Improvements

These may be improved after launch if the fundamentals are strong:

* Subtle animation
* Additional product diagrams
* Additional product renders
* More application imagery
* Expanded SEO content
* More detailed configuration information
* Additional product pages
* Analytics
* Advanced form integrations

Do not delay a strong simple site solely to add decorative features.

---

# 75. Final Acceptance Standard

The site should feel complete when it is:

**Simple enough to understand quickly.**

**Technical enough to be credible.**

**Accurate enough to trust.**

**Polished enough to represent a real equipment company.**

**Easy enough to use that a qualified buyer can request a quote without friction.**

The final website should consistently reinforce:

> **Eden builds clean environments around processes.**

and:

> **Clean the process, not the entire room.**
