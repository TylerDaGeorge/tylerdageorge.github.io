# Eden Cleanroom Systems — Website Design Direction

## 0. Visual Asset Source Rule

All website visuals must come from approved project assets.

Preferred sources:

1. Existing files in `/assets`
2. User-provided product photography
3. User-provided product renders
4. User-provided diagrams and illustrations

Do not independently generate replacement imagery.

Do not fabricate product renders to fill empty sections.

Do not source stock photography or third-party web images unless explicitly instructed.

If an approved asset is missing, use a temporary development placeholder and clearly identify the missing visual requirement.

## 1. Purpose

This document defines the visual and user-interface direction for the Eden Cleanroom Systems website.

It should be read alongside:

- `WEBSITE-PLAN.md`
- `PRODUCT.md`

This document governs:

- Visual identity
- Layout
- Typography
- Color usage
- Navigation
- Buttons
- Product presentation
- Technical diagrams
- Imagery
- Responsive behavior
- Interaction design
- Overall website feel

The goal is to create a website that feels like it belongs to a serious manufacturer of engineered clean-air equipment.

The site should not look like:

- A generic website template
- A SaaS startup
- A laboratory furniture catalog
- A personal portfolio
- An engineering consultancy
- A consumer product website

The product should be the visual center of the brand.

---

# 2. Core Design Principle

The website should communicate:

> **Engineered equipment. Clean presentation. No unnecessary complexity.**

The visual hierarchy should prioritize:

1. Product
2. Product function
3. Technical credibility
4. Customer application
5. Conversion

Decoration is secondary.

Every major visual element should help explain either:

- What Eden makes
- How it works
- Why it matters
- What the customer should do next

---

# 3. Overall Visual Character

The site should feel:

- Clean
- Industrial
- Precise
- Technical
- Modern
- Engineered
- Premium
- Restrained
- Credible
- Spacious

It should not feel:

- Flashy
- Futuristic
- Trend-driven
- Playful
- Over-designed
- Corporate for the sake of appearing corporate

Think more:

**industrial equipment manufacturer**

and less:

**technology startup**

---

# 4. Visual Inspiration

The design should take cues from companies that sell:

- Precision manufacturing equipment
- Laboratory equipment
- Industrial automation
- Metrology systems
- Semiconductor equipment
- Scientific instruments
- High-end machine tools

Useful characteristics from those categories include:

- Large product photography
- Strong typography
- Clear technical diagrams
- Restrained colors
- Detailed specifications
- Generous whitespace
- Simple navigation
- Clear calls to action

Do not directly copy another company's design.

---

# 5. Page Width

Use a consistent centered content container.

Recommended maximum content width:

**1200–1400 px**

Exact implementation may vary based on the framework.

Full-width sections may be used for:

- Hero areas
- Large product renders
- Technical diagrams
- Background sections

Text content should remain comfortably readable.

Avoid extremely wide paragraphs.

---

# 6. Grid

Use a simple responsive grid.

Desktop:

- 12-column layout where useful
- Consistent gutters
- Strong alignment between sections

Tablet:

- Reduce columns appropriately

Mobile:

- Primarily single-column
- Preserve clear hierarchy
- Avoid squeezing desktop layouts onto small screens

Alignment should feel deliberate.

Product imagery, headlines, specifications, and diagrams should share consistent visual anchors.

---

# 7. Spacing

Use generous spacing.

The website should not feel crowded.

Prefer:

- Large section spacing
- Comfortable text spacing
- Clear separation between product concepts
- Strong whitespace around technical diagrams

Avoid:

- Dense card grids
- Excessive boxes
- Excessive dividers
- Tiny margins
- Crowded navigation

Whitespace should contribute to the feeling of precision.

---

# 8. Color Direction

The visual palette should be restrained.

Primary visual colors should come from:

- White
- Off-white
- Stainless / metallic gray
- Charcoal
- Dark gray
- Eden brand accent color

The exact Eden accent color should come from existing confirmed brand assets where possible.

Do not invent an entirely new brand palette without instruction.

---

# 9. Background Colors

Default page background:

**White or near-white**

Alternate section backgrounds may use:

- Very light neutral gray
- Subtle cool gray
- Dark charcoal for occasional high-contrast sections

Avoid alternating background colors on every section.

Background changes should have a structural purpose.

---

# 10. Accent Color

Use the Eden accent color intentionally.

Good uses:

- Primary CTA
- Active navigation state
- Small diagram highlights
- Airflow arrows
- Links
- Important technical indicators
- Small interface details

Avoid covering large portions of the website in the accent color.

The product and content should remain visually dominant.

---

# 11. Airflow Visualization Color

Airflow should have a consistent visual treatment throughout the website.

Use a restrained clean-air visual language.

Potential treatment:

- Thin arrows
- Semi-transparent paths
- Subtle blue or Eden-accent tone
- Repeated downward direction
- Minimal animation where appropriate

Airflow graphics should look technical rather than decorative.

Do not use:

- Cartoon wind effects
- Large glowing neon arrows
- Excessive particle effects
- Sci-fi energy effects

---

# 12. Typography

Typography should feel technical and modern without becoming futuristic.

Prefer a high-quality sans-serif typeface.

Characteristics:

- Highly readable
- Clean numerals
- Strong headings
- Good technical/specification readability
- Neutral personality

Avoid:

- Script fonts
- Decorative fonts
- Extremely geometric futuristic fonts
- Overly playful fonts

If the existing project already has an appropriate professional sans-serif, it may be retained.

Avoid adding unnecessary external font dependencies.

---

# 13. Heading Style

Headlines should be:

- Short
- Strong
- Direct
- Large enough to establish hierarchy

Example:

# Clean Air. Right Where You Need It.

Not:

# Revolutionary Localized Environmental Control Solutions for Modern Manufacturing

Prefer clarity over marketing language.

---

# 14. Body Typography

Body copy should be easy to scan.

Recommended characteristics:

- Comfortable line height
- Moderate line length
- Strong contrast
- Clear paragraph spacing

Avoid large walls of text.

Long technical information should be divided using:

- Subheadings
- Diagrams
- Tables
- Short paragraphs
- Feature callouts

---

# 15. Navigation

Primary navigation:

**Home | Products | Contact | Request a Quote**

Do not add additional primary navigation items without explicit direction.

---

# 16. Desktop Header

The desktop header should contain:

Left:

**Eden logo / Eden Cleanroom Systems**

Right:

- Home
- Products
- Contact
- Request a Quote

`Request a Quote` should receive stronger visual emphasis.

For example:

- Filled button
- Bordered button
- Stronger contrast

Do not make every navigation item look like a button.

---

# 17. Header Behavior

The header should remain simple.

A sticky header is acceptable if implemented cleanly.

If sticky:

- Keep it relatively compact
- Avoid excessive animation
- Avoid large drop shadows
- Maintain strong readability

Do not create mega menus for the initial website.

There are only four primary pages.

---

# 18. Mobile Navigation

Mobile navigation should contain exactly the same four destinations:

- Home
- Products
- Contact
- Request a Quote

Use a simple menu trigger.

The mobile menu should:

- Open quickly
- Be keyboard accessible
- Have large touch targets
- Clearly emphasize Request a Quote

Avoid elaborate full-screen menu animations.

---

# 19. Logo

Use the existing Eden logo/brand assets when available.

The logo should link to the homepage.

Do not redesign the logo unless explicitly requested.

Ensure the logo remains legible against its background.

---

# 20. Hero Design

The homepage hero is the most important visual section of the website.

It should immediately communicate:

**Eden makes physical clean-air equipment.**

Recommended desktop composition:

```text
------------------------------------------------------
|                                                    |
|   HEADLINE                 LARGE PRODUCT RENDER     |
|                                                    |
|   Supporting copy         Clean Process Chamber    |
|                                                    |
|   [View Products]                                  |
|   [Request a Quote]       ↓ subtle airflow         |
|                                                    |
------------------------------------------------------
```

The product render should occupy substantial visual space.

Do not bury the product beneath abstract graphics.

---

# 21. Hero Product Render

Preferred hero image:

A high-quality three-quarter rendering of the Eden Clean Process Chamber.

The render should clearly show:

- Chamber geometry
- Stainless construction
- Clear enclosure
- Top filtration module
- Working area
- Work surface
- Airflow direction

The product should appear physically believable.

Avoid exaggerated reflections or futuristic lighting.

---

# 22. Product Rendering Style

Product renders should resemble professional industrial product photography.

Preferred:

- Neutral background
- Soft realistic shadows
- Controlled reflections
- Accurate material appearance
- Clear geometry
- High detail
- Realistic proportions

Avoid:

- Dramatic cinematic lighting
- Neon backgrounds
- Unrealistic glowing edges
- Excessive depth of field
- Concept-art appearance

Customers should be able to understand what the physical product would actually look like.

---

# 23. Product Imagery Priority

Use imagery in approximately this priority:

1. Real Eden product photography
2. Accurate Eden product renders
3. Eden engineering diagrams
4. Application photography
5. Generic supporting photography

Generic stock imagery should never dominate the website.

---

# 24. Technical Diagrams

Technical diagrams are an important part of Eden's visual identity.

Potential diagrams include:

- Airflow path
- Chamber cutaway
- Filter stack
- Product dimensions
- Chamber configuration
- Work zone
- Installation configuration

Diagrams should use:

- Simple lines
- Clear labels
- Minimal colors
- Consistent arrow styles
- Consistent typography
- Strong spacing

They should resemble engineering communication rather than marketing infographics.

---

# 25. Airflow Diagram

The airflow diagram should clearly communicate:

```text
ROOM AIR
   ↓
PREFILTER
   ↓
BLOWER
   ↓
HEPA FILTER
   ↓
SUPPLY PLENUM
↓↓↓↓↓↓↓↓↓↓
WORK ZONE
↓↓↓↓↓↓↓↓↓↓
LOWER EXHAUST
```

The visual hierarchy should emphasize the downward movement through the chamber.

Avoid adding unsupported technical numbers to the diagram.

---

# 26. Product Cutaway

A cutaway illustration would be valuable for the Products page.

Potential labeled components:

1. Air intake
2. Prefilter
3. Blower
4. HEPA filter
5. Supply plenum
6. Clear enclosure
7. Work zone
8. Work surface
9. Lower exhaust

Keep labels concise.

---

# 27. Product Cards

Use product cards only where they help distinguish actual product categories.

For example:

- Clean Process Chamber
- Cleanroom Workstations

Do not turn every feature into a floating card.

Cards should have:

- Product image
- Product name
- One-sentence description
- Clear action

Avoid excessive rounded corners and shadows.

---

# 28. Border Radius

Use restrained border radius.

Industrial equipment generally benefits from more structured geometry.

Preferred:

- Small radius
- Subtle radius
- Square corners where appropriate

Avoid extremely rounded:

- Cards
- Buttons
- Images
- Containers

The site should not resemble a consumer mobile app.

---

# 29. Shadows

Use shadows sparingly.

Appropriate:

- Subtle product shadow
- Very light elevation where necessary
- Sticky navigation separation

Avoid:

- Large floating card shadows
- Heavy glow effects
- Multiple layered shadows

Use borders, whitespace, and contrast before relying on shadows.

---

# 30. Buttons

Primary CTA:

**Request a Quote**

Secondary CTA:

**View Products**

Other contextual CTAs may include:

- Explore the Clean Process Chamber
- Contact Eden
- Request a Configuration Quote

Buttons should be visually clear and consistent.

---

# 31. Primary Button

The primary button should:

- Use the Eden accent color or strongest brand treatment
- Have strong contrast
- Be easy to identify
- Have comfortable touch dimensions

Avoid excessive animation.

A subtle hover transition is sufficient.

---

# 32. Secondary Button

Secondary buttons may use:

- Border treatment
- Neutral background
- Text/link treatment

They should remain visually subordinate to Request a Quote.

---

# 33. CTA Discipline

Do not place three or four equally prominent buttons in the same section.

The primary conversion path is:

**Request a Quote**

The secondary exploration path is:

**Products**

Design should reinforce this hierarchy.

---

# 34. Sections

Homepage sections should flow naturally rather than appear as disconnected modules.

Recommended order:

1. Hero
2. Problem / Value Proposition
3. Clean Process Chamber
4. How It Works
5. Applications
6. Why Eden
7. Final CTA

Avoid making every section the same height or using identical layouts repeatedly.

---

# 35. Problem Section

The "You may not need to control the entire room" section should visually explain the core business idea.

A useful comparison could show:

```text
TRADITIONAL

┌─────────────────────────────┐
│                             │
│      CONTROLLED ROOM        │
│                             │
│          [PROCESS]          │
│                             │
└─────────────────────────────┘


EDEN

             ┌───────────┐
             │  PROCESS  │
             │ CLEAN ZONE│
             └───────────┘
```

The point should be understood visually before the visitor reads all supporting copy.

Do not attach numerical savings unless validated.

---

# 36. Applications Section

Applications should be presented simply.

Possible layout:

- Assembly
- Inspection
- Packaging
- Electronics
- Laboratory
- Manufacturing

Use restrained icons or application imagery if useful.

Do not create six large decorative cards merely to fill space.

The section should reinforce versatility without overwhelming the primary product story.

---

# 37. Products Page Design

The Products page should feel more technical than the homepage.

Recommended flow:

1. Products hero
2. Clean Process Chamber overview
3. Large product render
4. Airflow explanation
5. Product features
6. Preliminary specifications
7. Configuration options
8. Cleanroom Workstations
9. Technical information
10. Quote CTA

The visitor should leave the page with a clear understanding of how the product works.

---

# 38. Specifications

Specifications should use a clean table or structured definition list.

Example:

| Specification | Value |
|---|---|
| Filter Type | HEPA |
| Airflow Direction | Vertical / Downward |
| Chamber Width | TBD |

Do not create fake values for visual completeness.

If a specification is not ready for public display, omit the row from the customer-facing page.

---

# 39. Configuration Interface

Initially, configuration should be informational rather than a complex interactive configurator.

Show potential choices clearly.

For example:

### Installation

Tabletop  
Eden Workstation  
Mobile

### Access

Open Front  
Hinged  
Sliding  
Pass-Through

Only show options that Eden is comfortable presenting.

The primary action should remain:

**Request a Configuration Quote**

---

# 40. Contact Page Design

The Contact page should be simple and calm.

Recommended layout:

```text
CONTACT EDEN

Have a general question?
We're happy to help.

[Contact Information]     [Contact Form]
```

Do not overload the Contact page with marketing content.

Include a clear secondary path:

**Looking for pricing? Request a Quote →**

---

# 41. Request a Quote Page Design

The Request a Quote page should feel like an application intake process rather than a generic contact form.

Group fields into logical sections:

### Your Information

### Your Application

### System Requirements

### Project Information

### Attachments

Use visible section headings.

Do not display twenty fields as one uninterrupted form.

---

# 42. Forms

Forms should have:

- Visible labels
- Clear required-field indication
- Helpful validation
- Large input areas
- Strong keyboard accessibility
- Clear success state
- Clear error state

Do not rely solely on placeholder text as labels.

---

# 43. Form Width

Forms should not stretch across the full desktop viewport.

Use a comfortable reading/input width.

Long text areas may be wider than short fields.

Group related short fields where appropriate on desktop.

Stack them on mobile.

---

# 44. Footer

Keep the footer compact.

Potential contents:

**Eden Cleanroom Systems**

Navigation:

- Home
- Products
- Contact
- Request a Quote

Optional:

- Email
- Phone
- Location
- Copyright

Do not create a huge multi-column corporate footer for a four-page website.

Do not invent social-media profiles.

---

# 45. Responsive Design

The site must work well at:

- Large desktop
- Standard desktop/laptop
- Tablet
- Mobile

Responsive design should be intentional rather than merely technically functional.

---

# 46. Mobile Priorities

On mobile:

1. Headline must remain immediately understandable.
2. Product should remain visible near the top.
3. CTA should remain obvious.
4. Technical diagrams must remain readable.
5. Specification tables must not break the viewport.
6. Forms must be easy to complete.
7. Navigation must remain simple.

Do not hide important product information merely because the visitor is on mobile.

---

# 47. Mobile Hero

The mobile hero should likely stack:

```text
HEADLINE

Supporting Copy

[Request a Quote]
[View Products]

PRODUCT RENDER
```

Do not shrink a two-column desktop hero until it becomes unreadable.

---

# 48. Animation

Animation should be restrained.

Appropriate uses:

- Subtle hover transitions
- Navigation transitions
- Gentle section entrance
- Slow airflow visualization
- Small product interaction

Avoid:

- Parallax everywhere
- Scroll hijacking
- Constant motion
- Large entrance animations
- Text flying across the screen
- Excessive product rotation
- Cursor effects

The product should feel engineered and stable.

---

# 49. Airflow Animation

A subtle airflow animation could help explain the chamber.

For example:

Small semi-transparent arrows moving downward slowly through the work zone.

Requirements:

- Must not distract from text
- Must not harm performance
- Must respect reduced-motion preferences
- Must not imply unsupported airflow characteristics

A static diagram is preferable to a poor animation.

---

# 50. Accessibility

Accessibility is required.

At minimum:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Sufficient color contrast
- Form labels
- Appropriate alt text
- Reduced-motion support
- Logical heading hierarchy
- Accessible mobile navigation

Do not sacrifice accessibility for visual styling.

---

# 51. Image Alt Text

Product image alt text should describe what is actually visible.

Good:

**Eden Clean Process Chamber with overhead filtration module and stainless work surface**

Bad:

**Industry-leading revolutionary cleanroom solution**

Alt text is descriptive, not marketing copy.

---

# 52. Performance

The website should feel fast.

Prioritize:

- Optimized images
- Appropriate image formats
- Lazy loading where appropriate
- Minimal JavaScript
- Limited third-party dependencies
- Efficient fonts
- Efficient CSS

Do not introduce a heavy animation library for minor visual effects.

---

# 53. SEO and Design

Important content must exist as real text.

Do not embed critical:

- Headlines
- Product descriptions
- Specifications
- Navigation
- CTAs

inside images.

Technical illustrations may contain labels, but important concepts should also exist in HTML text.

---

# 54. Photography

When real photography becomes available, prioritize:

1. Clean Process Chamber
2. Chamber details
3. Filtration module
4. Work area
5. Eden stainless workstation
6. Manufacturing/fabrication
7. Product installed in customer-like environments

Real product photography should eventually replace conceptual imagery where possible.

---

# 55. Manufacturing Imagery

Manufacturing imagery can help establish that Eden actually builds physical equipment.

Potential subjects:

- Stainless fabrication
- Welding
- Forming
- Assembly
- Filter installation
- Electrical assembly
- Product testing
- Final inspection

Avoid generic stock photos of anonymous people wearing cleanroom suits unless the image directly supports the content.

---

# 56. Product Detail Imagery

Future product photography should include detail shots such as:

- Stainless finish
- Filter housing
- Controls
- Clear panel construction
- Work surface
- Exhaust perforations
- Lighting
- Filter access
- Casters/base
- Service panels

These images can reinforce product quality without requiring excessive marketing language.

---

# 57. Trust and Credibility

Build trust through:

- Clear product explanation
- Accurate diagrams
- Real specifications
- Real product imagery
- Honest limitations
- Clear company contact information
- Professional quote process
- Consistent design

Do not manufacture credibility using:

- Fake testimonials
- Fake customer logos
- Fake statistics
- Fake certifications
- Fake awards
- Fake case studies

If Eden does not yet have something, leave it out.

---

# 58. No Fake UI Content

Codex must not invent content simply to fill a design.

Do not invent:

- Customer testimonials
- Review counts
- Customer names
- Company logos
- Certifications
- Product specifications
- Prices
- Phone numbers
- Addresses
- Lead times
- Awards
- Years in business
- Installation counts

Empty space is preferable to fake credibility.

---

# 59. Icons

Icons may be used where they improve comprehension.

Good uses:

- Filtration
- Airflow
- Lighting
- Stainless construction
- Serviceability
- Assembly
- Inspection
- Packaging

Use a consistent icon style.

Avoid mixing unrelated icon libraries.

Do not use icons merely to decorate every heading.

---

# 60. Technical Labels

Technical labels should use consistent terminology.

Preferred:

- HEPA Filter
- Prefilter
- Blower
- Supply Plenum
- Work Zone
- Exhaust
- Work Surface

Avoid changing terminology from section to section simply for variety.

Consistency is more important.

---

# 61. Design System

Codex should build reusable styles/components for:

- Page container
- Header
- Footer
- Buttons
- Section headings
- Product feature
- Technical callout
- Product image
- Specification table
- CTA section
- Form field
- Form section

Do not create a separate one-off CSS treatment for every section.

The site should have a recognizable visual system.

---

# 62. CSS / Styling Principles

Prefer:

- Reusable variables/tokens
- Consistent spacing
- Consistent typography
- Consistent breakpoints
- Consistent buttons
- Consistent containers

Avoid:

- Arbitrary pixel values everywhere
- Excessive `!important`
- Duplicated component styles
- Inline styling without a reason
- Styling tied unnecessarily to page-specific markup

---

# 63. Design Tokens

Where practical, define reusable values for:

- Background
- Surface
- Text
- Muted text
- Border
- Accent
- Maximum content width
- Small radius
- Standard radius
- Spacing scale
- Heading scale
- Body typography

Use these consistently.

Exact values may be determined during implementation based on existing Eden brand assets.

---

# 64. Dark Sections

Dark sections may be used sparingly for emphasis.

Good candidates:

- Final CTA
- Technical callout
- Footer

Do not turn the entire site into dark mode unless explicitly requested.

The dominant website appearance should remain bright, clean, and product-focused.

---

# 65. Visual Hierarchy

Every page should make the following obvious:

### Where am I?

Clear page heading/navigation state.

### What does Eden offer?

Strong product presentation.

### Why should I care?

Clear value proposition.

### What should I do next?

Visible CTA.

Do not sacrifice hierarchy to create an unusual layout.

---

# 66. Home Page Visual Hierarchy

The homepage should visually emphasize:

1. Clean Process Chamber
2. Localized clean-air concept
3. How airflow works
4. Applications
5. Eden
6. Request a Quote

The flagship product should receive substantially more visual emphasis than existing stainless tables.

---

# 67. Products Page Visual Hierarchy

The Products page should visually emphasize:

1. Clean Process Chamber
2. Airflow architecture
3. Features
4. Configuration
5. Specifications
6. Cleanroom Workstations
7. Quote CTA

The page should feel like someone could use it during an actual purchasing evaluation.

---

# 68. Content Density

Homepage:

**Low-to-medium density**

Products:

**Medium-to-high density**

Contact:

**Low density**

Request a Quote:

**Functional density**

Do not force every page to use the same amount of content.

---

# 69. Browser Behavior

Use normal web behavior.

Links should behave predictably.

Do not:

- Hijack scrolling
- Disable browser navigation
- Open internal pages in new tabs
- Create unnecessary modal navigation
- Replace normal links with complicated JavaScript behavior

Industrial buyers should be able to navigate quickly.

---

# 70. Error States

Forms should clearly communicate errors.

Example:

**Please enter a valid email address.**

Not:

**Something went wrong.**

When possible, identify the actual field requiring attention.

---

# 71. Success States

After a form submission, clearly confirm what happened.

Example:

**Thank you. Your request has been received.**

Do not promise a response time unless Eden has established one.

---

# 72. Product Status

The website should look polished even while some specifications remain under development.

Do not publicly fill unknown specification fields with fake values.

Depending on context:

- Omit the specification
- Say "Contact Eden"
- Present only confirmed specifications

`TBD` is primarily for internal documentation, not necessarily customer-facing presentation.

---

# 73. Future Expansion

The design system should allow additional products to be added later without redesigning the entire site.

However, do not build unnecessary complexity today for hypothetical future products.

Current architecture remains:

**Home | Products | Contact | Request a Quote**

Future expansion should occur only when actual content/products justify it.

---

# 74. What Codex Should Prioritize

When implementing the site, prioritize in this order:

1. Correct content structure
2. Product clarity
3. Responsive layout
4. Technical credibility
5. Strong typography
6. Product imagery
7. CTA hierarchy
8. Accessibility
9. Performance
10. Subtle polish

Do not prioritize animation before the fundamentals are complete.

---

# 75. What Codex Should Avoid

Do not independently add:

- New pages
- New navigation items
- Blog
- Resources center
- About page
- Testimonials
- Customer logo wall
- Pricing page
- Careers page
- Account/login functionality
- Chat widget
- Newsletter popup
- Cookie popup unless technically/legal necessary
- Complex configurator
- Search
- Ecommerce checkout

These may be considered later.

They are not part of the current website direction.

---

# 76. Design Decision Rule

When choosing between two approaches, prefer the one that makes the physical product easier to understand.

For example:

**Product render > abstract illustration**

**Airflow diagram > decorative animation**

**Specification table > marketing paragraph**

**Real manufacturing photo > generic stock image**

**Whitespace > unnecessary cards**

**Clear CTA > clever interaction**

---

# 77. Final Design Test

Before considering a page complete, ask:

### Can a visitor tell what Eden makes within five seconds?

### Is the Clean Process Chamber visually dominant?

### Can the visitor understand the basic airflow concept?

### Does the site look like a physical equipment manufacturer?

### Are technical claims supported?

### Is Request a Quote easy to find?

### Does the page work well on mobile?

### Is anything present solely because it looked impressive?

If an element does not help explain, establish credibility, or convert, consider removing it.

---

# 78. Final Design Direction

The Eden website should feel like the digital extension of the equipment itself:

**Clean. Stainless. Precise. Functional. Engineered.**

The visual system should reinforce the central product proposition:

> # Clean Air. Right Where You Need It.

And the larger Eden strategy:

> # Clean the process, not the entire room.
