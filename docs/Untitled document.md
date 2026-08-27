# **Codex Implementation Prompt: Pivot Eden Industrial Systems to Custom Manufacturing Tooling**

## **Repository and Branch Safety**

Implement this overhaul in:

TylerDaGeorge/tylerdageorge.github.io

The production website deploys from `main` through GitHub Pages.

The previous clean-environment website has already been preserved in:

archive/clean-environment-site-2026-08-27

Do not modify, delete, rebase, force-push, or merge into that archive branch.

Before changing files:

1. Start from the current `main`.  
2. Create and switch to:

website/tooling-pivot

3. Do not commit directly to `main`.  
4. Complete all work on the new branch.  
5. Commit the finished overhaul.  
6. Open a pull request against `main`.  
7. Do not merge the pull request.

If Codex is already operating on a dedicated task branch, use that branch rather than creating a second one, but confirm that it started from the current `main` and is not the archive branch.

---

# **Instruction Priority**

This prompt is the latest explicit direction from the owner and supersedes the current clean-environment positioning in the active repository documentation.

The current `/docs/AGENTS.md`, `/docs/WEBSITE-PLAN.md`, `/docs/PRODUCT.md`, `/docs/CONTENT.md`, and related files still direct agents toward the CEC, CET, CEW, clean staging, localized process environments, and HEPA-filtered equipment.

Those instructions are now obsolete for the active website.

Do not follow the old product direction merely because it appears in existing documentation. Update the active documentation first so future coding agents do not restore the clean-environment direction.

The archived branch preserves the former website and documentation.

---

# **Primary Objective**

Completely reposition Eden Industrial Systems from a clean-environment product company into a focused, service-first industrial engineering business.

The new positioning is:

> **Custom production tooling and practical automation for manufacturers.**

The central offer is:

> **Eden Industrial Systems designs custom assembly fixtures, inspection workholding, press-fit tooling, production fixtures, and practical operator-assist equipment around the parts, machines, and people already on the customer’s floor.**

The company should be presented as a mechanical design and manufacturing-tooling business—not as a catalog equipment manufacturer, consumer-product company, large automation integrator, or cleanroom-equipment supplier.

The site should lead with:

1. Assembly and press-fit tooling  
2. Inspection fixtures  
3. Production workholding  
4. Operator-assist equipment and small custom automation

Press-fit tooling should be the leading application, but do not claim that Eden currently sells a standardized automatic bushing press.

Customer-specific cut-to-length systems may be mentioned as a potential operator-assist or material-positioning application, but do not claim that Eden offers a universal cut-to-length machine.

Do not publicly promote:

* CEC  
* CET  
* CEW  
* Clean Process Chamber  
* Clean staging equipment  
* HEPA-filtered equipment  
* Cleanroom products  
* Coolant-actuated lathe grippers  
* Automatic window-blind products  
* A standardized automatic bushing press  
* A standardized cut-to-length machine

---

# **Important Repository Facts**

Preserve:

CNAME

Do not alter the production domain:

edenindustrialsystems.com

Preserve and continue using the approved current brand assets:

/assets/LOGO2.png  
/assets/FAVICON2.svg

Preserve the existing Formspree destination:

https://formspree.io/f/mqpzlqvb

Both the general contact form and project-intake form may continue using that endpoint with distinct hidden form-type and subject values.

The website currently uses static HTML, CSS, and minimal JavaScript. Continue using this architecture.

Do not introduce:

* React  
* Next.js  
* Vue  
* Svelte  
* Tailwind  
* Bootstrap  
* A CMS  
* A build framework  
* A server-side application  
* A database  
* Paid external services  
* New analytics  
* New third-party scripts

Maintain GitHub Pages compatibility.

---

# **Historical Fixture Content**

A previous fixture-focused version of the site exists in Git history.

Use this historical commit as a reference:

9f7045ef08a4a5edb744515850d1573344ed0f61

A second useful historical reference is:

522b6341c3488c9d33295029fd3389ed87636d6e

These historical versions contain material related to:

* The three-part CMM fixture  
* `Fixture 1.png`  
* `Fixture 1 transp.png`  
* The old CMM fixture case-study page  
* Earlier capabilities, process, and About copy

Use Git history only as a source for genuine, user-owned fixture imagery and verified project facts.

Do not restore the old website wholesale.

Do not restore:

* The old logo  
* Outdated branding  
* Obsolete navigation  
* Generic generated project illustrations  
* Placeholder project SVGs as evidence of completed work  
* Fake case studies  
* Unverified outcome claims  
* Old SEO copy that is too narrow or inaccurate  
* Old forms that no longer match the new positioning

Restore the actual CMM fixture imagery into the current `/assets` directory with clear filenames, such as:

/assets/cmm-inspection-fixture.png  
/assets/cmm-inspection-fixture-transparent.png

Inspect the historical case-study file for any additional genuine fixture images. Extract and optimize them into separate asset files rather than retaining unnecessarily large embedded base64 image data.

Only use imagery that clearly represents the user’s actual fixture design.

---

# **Honest Scope and Credibility Rules**

Eden is an early-stage, founder-led engineering business.

Do not imply the existence of:

* A large engineering team  
* An automation department  
* A manufacturing facility  
* Multiple company locations  
* A large installation base  
* Full in-house electrical controls engineering  
* In-house PLC programming  
* Robotics integration capabilities  
* In-house machine-safety validation  
* Turnkey machinery capability for every application  
* A long customer list  
* Years of completed automation projects

Avoid phrases such as:

* “Our engineering team”  
* “Our automation experts”  
* “Our manufacturing facility”  
* “Industry-leading”  
* “Best-in-class”  
* “Turnkey automation integrator”  
* “Proven ROI”  
* “Guaranteed cycle-time reduction”  
* “Fully safety-certified system”

Use “Eden” where possible instead of language that artificially suggests a large staff.

Do not invent:

* Testimonials  
* Customer logos  
* Customer names  
* Reviews  
* Certifications  
* Awards  
* Installation counts  
* Performance statistics  
* Savings percentages  
* Cycle-time improvements  
* Scrap reductions  
* Prices  
* Lead times  
* Warranty terms  
* Shipping claims  
* A street address  
* A phone number  
* Social media accounts  
* Staff members

The only public contact information currently approved is:

sales@edenindustrialsystems.com

---

# **Company Positioning**

Use the following company descriptor consistently:

> **Custom production tooling and practical automation**

Use this concise business description:

> Eden Industrial Systems is a Minnesota engineering business focused on custom assembly tooling, inspection fixtures, production workholding, and practical mechanical systems for recurring manufacturing processes.

Use this value proposition:

> Eden starts with the part, the current process, the available equipment, and the production problem. The result is purpose-built mechanical tooling and build-ready documentation designed around how the work is actually performed.

Do not present Eden as a general engineering consultancy that accepts every possible engineering project.

Do not position the company around consumer products.

---

# **New Site Architecture**

Create the following public routes using the repository’s current folder-based static-page structure:

/  
├── capabilities/  
│   └── index.html  
├── projects/  
│   └── cmm-inspection-fixture/  
│       └── index.html  
├── process/  
│   └── index.html  
├── about/  
│   └── index.html  
├── contact/  
│   └── index.html  
└── request-a-project/  
    └── index.html

Use this primary navigation:

Home  
Capabilities  
Featured Project  
Process  
About  
Request a Project

“Request a Project” should be styled as the primary navigation CTA.

Keep Contact accessible through:

* The footer  
* Relevant CTA sections  
* The Request a Project page  
* The About page where appropriate

Do not add:

* Products  
* Shop  
* Pricing  
* Blog  
* Resources  
* Careers  
* Customer portal  
* Login  
* Ecommerce  
* Newsletter  
* Search  
* Live chat  
* Product configurator

---

# **Global Header**

Use the approved Eden logo.

Desktop navigation:

Home  
Capabilities  
Featured Project  
Process  
About  
Request a Project

Mobile navigation must:

* Use the existing accessible menu pattern or an improved equivalent  
* Be keyboard accessible  
* Correctly update `aria-expanded`  
* Close when a navigation link is selected  
* Prevent unwanted background scrolling while open  
* Work without horizontal overflow  
* Retain visible focus states

Use `aria-current="page"` correctly on each page.

---

# **Global Footer**

Use the following positioning:

**Eden Industrial Systems**

Custom production tooling and practical automation for manufacturers.

Include:

* Home  
* Capabilities  
* Featured Project  
* Process  
* About  
* Contact  
* Request a Project  
* `sales@edenindustrialsystems.com`  
* Copyright year

Do not include cleanroom, HEPA, CEC, CET, CEW, clean-staging, or localized-process-environment language.

---

# **Homepage**

## **Metadata**

Use:

Title:  
Custom Manufacturing Tooling | Eden Industrial Systems

Use a concise meta description based on:

> Custom assembly tooling, inspection fixtures, production workholding, and practical operator-assist equipment for Minnesota manufacturers.

Canonical:

https://edenindustrialsystems.com/

Update Open Graph metadata to match.

Retain valid Organization structured data using only approved facts.

## **Hero**

### **Eyebrow**

**Custom Manufacturing Tooling**

### **H1**

**Make repeat production faster and more repeatable.**

### **Lead**

> Eden Industrial Systems designs custom assembly fixtures, inspection workholding, press-fit tooling, and practical operator-assist equipment around the parts, machines, and people already on your floor.

### **Primary CTA**

**Request a Project Review**

Link to:

/request-a-project/

### **Secondary CTA**

**View the CMM Fixture**

Link to:

/projects/cmm-inspection-fixture/

### **Hero Visual**

Use the genuine CMM fixture image restored from Git history.

Use useful alt text, such as:

> Three-part CMM inspection fixture design with spring-loaded part retention.

Do not use the clean-environment table images.

Do not create a fake machine rendering.

## **Production Problems Section**

### **Eyebrow**

**Recurring Production Problems**

### **H2**

**Purpose-built tooling for the work that happens every day.**

Create four concise problem cards:

### **Manual Assembly Variation**

Manual insertion, alignment, or seating operations may depend too heavily on operator feel.

### **Slow Inspection Loading**

Parts that are difficult to locate and retain can make repeat inspection unnecessarily cumbersome.

### **Difficult Part Location**

Components may be awkward to support, orient, clamp, or present consistently.

### **Repetitive Handling**

Recurring measuring, pressing, positioning, cutting, or transfer tasks may benefit from a purpose-built mechanical solution.

Use cautious language. Do not state that Eden has already solved each problem for multiple customers.

## **Capabilities Preview**

### **Eyebrow**

**Capabilities**

### **H2**

**Mechanical tooling designed around the part and process.**

Create four capability cards.

### **Assembly and Press-Fit Tooling**

> Custom nests, alignment features, insertion tooling, depth-control concepts, mistake-proofing, and fixtures for bushings, bearings, pins, seals, and similar components.

CTA:

**Explore Assembly Tooling**

Link to the corresponding Capabilities page section.

### **Inspection Fixtures**

> CMM fixtures, visual-inspection workholding, checking aids, and repeatable part-location systems designed around access and datum strategy.

CTA:

**Explore Inspection Fixtures**

### **Production Workholding**

> Custom fixture plates, secondary-operation workholding, modular nests, machine-loading aids, and changeover tooling.

CTA:

**Explore Production Workholding**

### **Operator-Assist Equipment**

> Practical mechanical systems for positioning, feeding, holding, pressing, transferring, cutting, ejecting, or collecting parts.

CTA:

**Explore Operator-Assist Equipment**

## **Featured Project Section**

### **Eyebrow**

**Featured Design Project**

### **H2**

**Three-Part CMM Inspection Fixture**

Use actual CMM fixture imagery.

Use copy based only on verified facts from the historical case-study page.

The summary should explain that the fixture concept was developed to:

* Locate three parts consistently  
* Retain the components mechanically  
* Preserve probe access  
* Allow operator loading and release  
* Translate inspection requirements into a manufacturable fixture design

If the repository does not contain evidence that the fixture was fabricated, installed, and production-tested, identify it clearly as a **completed design project**, not a completed production installation.

Do not claim measured inspection-time improvement, customer approval, production use, ROI, or scrap reduction without evidence.

CTA:

**View the Fixture Design**

## **Process Preview**

### **Eyebrow**

**Engineering Process**

### **H2**

**Start with the current process—not a preselected machine.**

Show six concise steps:

1. Process review  
2. Requirements definition  
3. Concept development  
4. Direction approval  
5. Detailed engineering  
6. Build package and support

CTA:

**See the Engineering Process**

## **Company Background Preview**

### **Eyebrow**

**Manufacturing Perspective**

### **H2**

**Designed with the shop floor in mind.**

Use concise copy based on:

> Eden combines mechanical-design experience with hands-on CNC machining and production leadership experience. That background informs practical decisions around loading, location, access, repeatability, manufacturability, setup, and documentation.

Do not name current or previous employers.

Do not disclose confidential employer projects or internal performance information.

CTA:

**About Eden**

## **Homepage Final CTA**

### **H2**

**Start with the production problem.**

### **Copy**

> Share the part, the current process, production volume, equipment constraints, and the result you want to improve. Eden will review the application and recommend a practical next step.

### **Primary CTA**

**Request a Project Review**

### **Secondary CTA**

**Contact Eden**

---

# **Capabilities Page**

Route:

/capabilities/

## **Metadata**

Title:

Manufacturing Tooling and Fixture Design | Eden Industrial Systems

Meta description:

> Explore custom assembly tooling, press-fit fixtures, CMM workholding, production fixtures, and operator-assist equipment from Eden Industrial Systems.

## **Hero**

### **Eyebrow**

**Capabilities**

### **H1**

**Custom tooling and practical automation built around your process.**

### **Lead**

> Every project begins with a specific part, process, production volume, equipment constraint, and desired outcome. Eden develops the mechanical tooling and documentation around those requirements.

Primary CTA:

**Request a Project Review**

## **Assembly and Press-Fit Tooling**

This should be the first and strongest capability.

### **H2**

**Assembly and press-fit tooling**

Explain that Eden can evaluate tooling for:

* Bushing insertion  
* Bearing installation  
* Pin and dowel pressing  
* Seal installation  
* Component seating  
* Mechanical staking applications  
* Alignment and support during assembly  
* Controlled insertion depth  
* Changeable part nests  
* Incorrect-part prevention  
* Part-orientation features  
* Integration with an existing arbor, pneumatic, hydraulic, or servo press

Use this scope statement:

> Eden can design the mechanical fixtures, nests, insertion tooling, frames, guarding concepts, and system layout for press-fit applications. Controls, electrical design, safety integration, fabrication, installation, and validation are defined separately for each project and may require qualified project partners.

Do not claim Eden currently supplies a standard automatic bushing press.

Do not claim every press application can be automated.

## **Inspection Fixtures**

### **H2**

**Inspection fixtures**

Include:

* CMM workholding  
* Repeatable datum location  
* Minimal-contact part support  
* Probe-access planning  
* Multi-part inspection fixtures  
* Visual-inspection fixtures  
* Dimensional checking aids  
* Quick-loading concepts  
* Mechanical retention and release  
* Revision-controlled fixture documentation

Feature the CMM project as the proof point.

CTA:

**View the CMM Fixture**

## **Production Workholding**

### **H2**

**Production workholding**

Include:

* Secondary-operation fixtures  
* Fixture plates  
* Custom part nests  
* Multi-part workholding concepts  
* Soft-jaw and custom-jaw design  
* Quick-change concepts  
* Modular locating systems  
* Operator-friendly loading  
* Setup documentation  
* Build-ready drawings

Avoid implying that every CNC fixture has already been production-proven.

## **Operator-Assist Equipment**

### **H2**

**Operator-assist equipment and small custom automation**

Use this description:

> Some recurring manufacturing problems require more than a static fixture but less than a large automated cell. Eden evaluates focused mechanical systems that help an operator position, feed, hold, press, transfer, cut, eject, or collect parts.

Potential functions may include:

* Automatic or indexed material positioning  
* Adjustable or programmable length stops  
* Part feeding and presentation  
* Component pressing  
* Mechanical ejection  
* Part transfer  
* Part collection  
* Repetitive handling reduction  
* Customer-specific cut-to-length concepts

Include this limitation clearly:

> Eden does not currently offer a universal cut-to-length machine. Any cut-to-length project begins with the exact material, stock form, cutting method, tolerance, burr requirement, production volume, and existing workflow.

Do not advertise a finished machine that does not exist.

## **Engineering Deliverables**

### **H2**

**Build-ready mechanical documentation**

Potential deliverables may include:

* 3D CAD models  
* Manufacturing drawings  
* Assembly drawings  
* Purchased-component specifications  
* Bill of materials  
* Concept-review documents  
* Revision-controlled design files  
* Vendor-ready fabrication packages  
* Setup or assembly information  
* Agreed build-support documentation

Add this clarification:

> Fabrication, electrical controls, programming, safety validation, installation, commissioning, and production prove-out are included only when explicitly defined in the quoted project scope.

## **Good-Fit Project Section**

### **H2**

**A good project starts with a defined production problem.**

A strong-fit project usually has:

* A recurring assembly, inspection, workholding, or handling process  
* A known part or material  
* Available drawings, models, samples, photos, or measurements  
* A clear problem involving time, variation, access, ergonomics, quality, or repeatability  
* Existing equipment or known equipment constraints  
* A customer who can participate in requirements and design reviews

Do not create an exclusion list that sounds hostile. Keep the section practical and qualification-focused.

## **CTA**

**Request a Project Review**

---

# **Featured Project Page**

Route:

/projects/cmm-inspection-fixture/

## **Metadata**

Title:

Three-Part CMM Inspection Fixture | Eden Industrial Systems

Meta description:

> Explore a three-part CMM inspection fixture design developed around repeatable location, mechanical retention, operator access, and probe clearance.

## **Page Status**

Use:

### **Eyebrow**

**Featured Design Project**

### **H1**

**Three-Part CMM Inspection Fixture**

Include a visible and professional project-status label.

Use language such as:

> This page documents a completed fixture design. Production installation and measured performance are not claimed unless verified evidence is present in the repository.

Do not call it a customer case study unless a real customer relationship and permission are documented.

## **Project Structure**

Build the page around:

1. The inspection challenge  
2. Requirements and constraints  
3. Fixture concept  
4. Part location and support  
5. Retention and release  
6. Probe-access considerations  
7. Operator interaction  
8. Manufacturing approach  
9. Engineering deliverables  
10. Project status and limitations  
11. CTA for similar fixture applications

Use actual historical project facts and images.

Do not fabricate dimensions, tolerances, part materials, customer names, inspection results, cycle times, or cost savings.

## **Suggested Copy Direction**

### **The Challenge**

Explain that the project required three components to be located consistently for CMM access while remaining practical for operator loading and removal.

### **Design Priorities**

Include only verified priorities, such as:

* Repeatable part location  
* Three-part capacity  
* Probe access  
* Mechanical retention  
* Straightforward operator loading  
* Controlled release  
* Manufacturable fixture components

### **Fixture Solution**

Describe the spring-loaded or mechanical retention concept only if confirmed by the historical project files.

### **Deliverables**

Describe only what was actually created, such as:

* Fixture assembly model  
* Component models  
* Manufacturing drawings  
* Assembly details  
* Bill of materials

Do not add deliverables that are not supported.

## **Visual Rules**

Use genuine fixture imagery from Git history.

Do not use:

* Generic CMM stock photography  
* AI-generated inspection imagery  
* Competitor photos  
* Fake shop-floor photos  
* Old generic project SVG cards as evidence

Optimize restored images and use descriptive filenames and alt text.

## **CTA**

### **H2**

**Need a fixture for a similar inspection process?**

Button:

**Discuss an Inspection Fixture**

Link to:

/request-a-project/?project=inspection

---

# **Process Page**

Route:

/process/

## **Metadata**

Title:

Engineering Process | Eden Industrial Systems

Meta description:

> See how Eden moves a custom fixture or tooling project from process review through concept development, detailed design, and build-ready documentation.

## **Hero**

### **Eyebrow**

**Engineering Process**

### **H1**

**A structured path from production problem to build-ready design.**

### **Lead**

> Custom tooling works best when the requirements are defined before detailed design begins. Eden uses staged reviews to align the part, process, equipment, operator, and project scope.

## **Process Steps**

### **1\. Initial Process Review**

The customer provides available part files, setup photos, process descriptions, production volume, existing-equipment information, and the problem being experienced.

### **2\. Requirements Definition**

Define:

* Part location  
* Loading and unloading  
* Forces  
* Tolerances  
* Equipment interfaces  
* Operator access  
* Cycle expectations  
* Changeover  
* Maintenance  
* Safety considerations  
* Required deliverables

### **3\. Concept Development**

Develop one or more practical approaches and identify:

* Major components  
* Interfaces  
* Assumptions  
* Risks  
* Open questions  
* Approximate project scope

### **4\. Direction Approval**

The customer reviews the proposed direction before detailed engineering begins.

### **5\. Detailed Design**

Complete the agreed:

* 3D models  
* Interfaces  
* Purchased-component selection  
* Manufacturing drawings  
* Assembly drawings  
* Bill of materials

### **6\. Design Review**

Review the completed design for:

* Manufacturability  
* Operator use  
* Machine compatibility  
* Access  
* Serviceability  
* Project requirements

### **7\. Build Package**

Release the approved design documentation included in the project scope.

### **8\. Build Support**

Provide clarification and revision support during fabrication and assembly according to the quoted scope.

## **Responsibility Matrix**

Create a responsive table or card-based matrix.

### **Eden**

* Mechanical concepts  
* Fixture and tooling design  
* 3D CAD  
* Drawings  
* Bill of materials  
* Agreed design reviews  
* Agreed build support

### **Customer**

* Accurate part and process information  
* Equipment information  
* Requirements  
* Samples or models where applicable  
* Timely review and approval  
* Final production acceptance

### **Fabricator or Integrator**

Where separately involved:

* Fabrication quality  
* Electrical implementation  
* Controls programming  
* Assembly  
* Installation  
* Guarding implementation  
* Safety-system implementation  
* Commissioning

Clarify that exact responsibilities are project-specific and established in the quote.

## **CTA**

**Request a Project Review**

---

# **About Page**

Route:

/about/

## **Metadata**

Title:

About Eden Industrial Systems | Minnesota Tooling Design

Meta description:

> Learn about Eden Industrial Systems, a Minnesota engineering business focused on custom fixtures, assembly tooling, workholding, and practical mechanical automation.

## **Hero**

### **Eyebrow**

**About Eden**

### **H1**

**Mechanical design shaped by production experience.**

## **Company Description**

Use:

> Eden Industrial Systems is a Minnesota engineering business focused on custom production fixtures, assembly tooling, inspection workholding, and practical mechanical automation.

## **Relevant Background**

Accurately communicate:

* AAS education in CAD Engineering  
* Mechanical-design experience  
* CNC machining experience  
* Experience as a lead CNC turning machinist  
* Familiarity with production setup, repeatability, operator loading, inspection access, manufacturability, and technical documentation

Do not include:

* Age  
* Current employer  
* Former employer names  
* Confidential employer projects  
* Internal customer information  
* Proprietary manufacturing information  
* Unverified production statistics  
* Work that legally belongs to an employer

## **Working Principles**

Create a concise principles section:

### **Start With the Process**

Understand the current workflow before selecting a solution.

### **Design for the Operator**

Loading, access, visibility, adjustment, and release matter.

### **Design for Manufacturing**

A useful concept must be practical to fabricate, assemble, and service.

### **Document the Design**

Clear models, drawings, BOMs, interfaces, and revision control support execution.

### **Keep the Scope Honest**

Electrical, controls, fabrication, safety, and installation responsibilities must be defined—not assumed.

## **CTA**

**Discuss a Manufacturing Problem**

---

# **Contact Page**

Keep route:

/contact/

## **Metadata**

Title:

Contact Eden Industrial Systems

Meta description:

> Contact Eden Industrial Systems about manufacturing tooling, fixture design, supplier communication, partnerships, or other general inquiries.

## **Hero**

### **Eyebrow**

**General Inquiries**

### **H1**

**Contact Eden**

### **Lead**

> Have a question about a tooling application, supplier opportunity, partnership, or another business matter? Send Eden a message.

## **Contact Copy**

Use the contact form for:

* General questions  
* Supplier communication  
* Partnerships  
* Non-project inquiries  
* Follow-up communication

Include:

sales@edenindustrialsystems.com

Link project inquiries to:

/request-a-project/

## **Form**

Preserve:

action="https://formspree.io/f/mqpzlqvb"  
method="POST"

Use hidden values such as:

form\_type \= General contact inquiry  
\_subject \= New Eden website contact inquiry

Fields:

* Name — required  
* Company  
* Email — required  
* Phone  
* Subject — required  
* Message — required

Do not fake successful submission behavior.

---

# **Request a Project Page**

Create:

/request-a-project/

## **Metadata**

Title:

Request a Project Review | Eden Industrial Systems

Meta description:

> Submit a manufacturing tooling, fixture, workholding, press-fit, or operator-assist application for review by Eden Industrial Systems.

## **Hero**

### **Eyebrow**

**Project Intake**

### **H1**

**Tell Eden about the part, process, and production problem.**

### **Lead**

> Start with what is known. Part files, photos, equipment information, production volume, and current-process details can be shared after the initial review.

## **Form Endpoint**

Preserve:

action="https://formspree.io/f/mqpzlqvb"  
method="POST"

Use hidden values such as:

form\_type \= Project review request  
\_subject \= New Eden project review request

## **Contact Information**

Fields:

* Name — required  
* Company — required  
* Email — required  
* Phone

## **Project Type**

Required select:

* Assembly or press-fit tooling  
* Inspection fixture  
* CNC or production workholding  
* Operator-assist equipment  
* Cut-to-length or material-positioning application  
* Other custom equipment  
* Not sure

## **Application Information**

Add:

* Describe the current process — required  
* What problem are you trying to solve?  
* Part or material being handled  
* Approximate part dimensions and weight  
* Current equipment or machine  
* Current production volume  
* Current cycle time, if known  
* Required tolerance or quality requirement  
* Current scrap, rework, ergonomic, access, or handling concern  
* Desired level of automation  
* Required delivery timeframe  
* Estimated quantity  
* Additional requirements

Do not make every field required.

At minimum require:

* Name  
* Company  
* Email  
* Project type  
* Current-process or application description

## **File-Sharing Copy**

Do not add a file-upload field unless the existing Formspree account and implementation have been verified to support it securely.

Instead use:

> After the initial submission, Eden can reply with instructions for sharing drawings, STEP files, photos, videos, or equipment documentation.

## **Query Parameter Support**

Allow URLs such as:

/request-a-project/?project=inspection  
/request-a-project/?project=press-fit  
/request-a-project/?project=workholding  
/request-a-project/?project=operator-assist

Update the project-type select when a recognized query parameter is present.

Do not fail when the parameter is missing or invalid.

Use progressive enhancement. The form must remain usable without JavaScript.

## **Submit Button**

Use:

**Submit Project for Review**

Do not use:

* Buy Now  
* Order a Machine  
* Get Instant Pricing  
* Request a Pilot  
* Get a Guaranteed Quote

---

# **Legacy Route Handling**

The current production site and historical fixture site have existing indexed URLs.

Create lightweight static redirect pages with:

* Correct destination  
* `noindex`  
* Canonical pointing to the destination  
* Immediate JavaScript redirect where available  
* Meta-refresh fallback  
* Visible fallback link  
* No obsolete product copy

Redirect:

/products/                         → /capabilities/  
/products/cec/                     → /capabilities/  
/request-a-quote/                  → /request-a-project/

Also inspect Git history and redirect known older fixture-site URLs where appropriate, including likely routes such as:

/capabilities.html                 → /capabilities/  
/about.html                        → /about/  
/engineering-process.html          → /process/  
/cmm-fixture-case-study.html       → /projects/cmm-inspection-fixture/

Do not add redirect pages to the sitemap.

Preserve search-query and hash information when practical, but do not overcomplicate the implementation.

---

# **Clean-Environment Content Removal**

Remove all clean-environment positioning from the active website branch.

Remove or replace:

* CEC pages  
* CET product sections  
* CEW product sections  
* Clean Process Chamber content  
* HEPA content  
* Airflow diagrams  
* Clean-staging copy  
* Pilot-program language  
* Cleanroom quote-form fields  
* Cleanroom metadata  
* Clean-environment structured data  
* Product navigation  
* Product sitemap entries  
* Cleanroom footer copy  
* Table gallery JavaScript that is no longer used  
* Dead CSS supporting removed product sections

The archived branch already preserves that site.

This is a normal active-branch cleanup. Do not rewrite Git history.

Once no active page references them, remove the current table-product assets from the active branch:

/assets/Table 1.PNG  
/assets/Table 2.PNG  
/assets/Table 3.PNG

Do not remove:

/assets/LOGO2.png  
/assets/FAVICON2.svg

---

# **Documentation Overhaul**

The active `/docs` directory must no longer direct future agents toward clean-environment equipment.

Rewrite:

/docs/AGENTS.md  
/docs/WEBSITE-PLAN.md  
/docs/CONTENT.md  
/docs/CLAIMS.md  
/docs/DESIGN.md  
/docs/TECHNICAL.md  
/docs/SEO.md  
/docs/ACCEPTANCE.md

Create:

/docs/CAPABILITIES.md

Use `CAPABILITIES.md` as the source of truth for:

* Assembly tooling  
* Press-fit tooling  
* Inspection fixtures  
* Production workholding  
* Operator-assist equipment  
* Engineering deliverables  
* Scope boundaries  
* Project status  
* Current commercial capabilities

Remove obsolete active-branch product documentation when it is no longer referenced, including:

/docs/CEC.md  
/docs/PRODUCT.md  
/docs/Stainless-Clean-Environment-Table.md  
/docs/controlled-environment-chamber.md  
/docs/controlled-environment-workstation.md

Also inspect for any other documentation whose only purpose is the paused clean-environment product family.

Do not create a public link to `/docs`.

## **New AGENTS.md Direction**

The rewritten `/docs/AGENTS.md` must say that:

* Eden is positioned around custom production tooling and practical automation.  
* The website is service-first.  
* Assembly and press-fit tooling is the leading application.  
* The CMM fixture is the only current featured project.  
* No fake case studies may be added.  
* No unverified project results may be claimed.  
* No standardized automatic press or cut-to-length product may be implied.  
* No AI-generated or externally sourced project imagery may be used.  
* Only approved current assets and genuine Eden project imagery may be used.  
* Static HTML/CSS/JS and GitHub Pages compatibility must be preserved.  
* Formspree behavior must remain real.  
* `CNAME` must remain unchanged.  
* Future agents must follow `CAPABILITIES.md`, `CONTENT.md`, `CLAIMS.md`, and the other updated documents.  
* Clean-environment products are not part of the active public website direction.

## **New Claims Rules**

The rewritten `CLAIMS.md` must prohibit:

* Fake customer results  
* Fake performance metrics  
* Fake ROI  
* Fake cycle-time reductions  
* Fake scrap reductions  
* Fake certifications  
* Fake safety validation  
* Unsupported turnkey claims  
* Unsupported controls capabilities  
* Unsupported fabrication capabilities  
* Unsupported production-use claims  
* Presenting a design project as a field-proven installation

It should also define acceptable language such as:

* “Designed to”  
* “Can be evaluated for”  
* “Potential applications include”  
* “Mechanical design scope”  
* “Build-ready documentation”  
* “Project-specific”  
* “Quoted separately”  
* “May require qualified integration partners”

---

# **Visual Design Direction**

Preserve the current Eden visual identity and approved logo.

The existing palette may continue using the current restrained industrial values, including dark blue-green, green accents, white, steel gray, and neutral backgrounds.

The new visual direction should feel like:

* Precision mechanical engineering  
* Industrial tooling  
* CAD and manufacturing  
* Clean and technical  
* Practical  
* Structured  
* Professional  
* Founder-led but credible

It should not feel like:

* A SaaS startup  
* A generic consulting template  
* A cleanroom-equipment catalog  
* A consumer-product website  
* A huge automation corporation  
* A personal résumé site  
* A stock-photo-heavy marketing site

## **Visual Priorities**

1. Genuine CMM fixture imagery  
2. Clear capability descriptions  
3. Process clarity  
4. Technical credibility  
5. Conversion to project review  
6. Honest scope boundaries

## **Layout**

Use:

* Strong typographic hierarchy  
* Generous whitespace  
* Straight-edged or minimally rounded cards  
* Restrained borders  
* Industrial neutral backgrounds  
* Consistent section spacing  
* Clear numbered process steps  
* Purposeful green accents  
* Responsive grids  
* Accessible tables or card alternatives

Avoid:

* Huge gradient blobs  
* Glassmorphism  
* Decorative dashboards  
* Excessive pills  
* Random statistics  
* Fake KPI cards  
* Animated background particles  
* Auto-rotating carousels  
* Scroll hijacking  
* Excessive parallax  
* Unnecessary animation

## **Image Rules**

Do not:

* Generate new project images  
* Download stock manufacturing photos  
* Use competitor imagery  
* Use AI imagery  
* Create fictional machine renders  
* Use generic CMM photography as though it depicts Eden’s work  
* Restore obsolete table imagery into the visible website

If a section lacks an approved image, use a text-led layout rather than fabricating one.

---

# **Technical Implementation**

Continue using:

* Semantic HTML  
* Shared CSS  
* Minimal vanilla JavaScript  
* Static directory routes  
* GitHub Pages  
* Existing Formspree integration

Reuse consistent patterns for:

* Header  
* Footer  
* Buttons  
* Containers  
* Eyebrows  
* Page heroes  
* Capability sections  
* CTA sections  
* Forms  
* Project-detail layouts  
* Process steps

Clean up obsolete CSS and JavaScript after verifying nothing still depends on them.

Do not leave dead:

* Table gallery code  
* CEC query-parameter logic  
* Airflow styling  
* Product-card styling that is no longer used  
* Cleanroom-specific selectors  
* Broken asset references

Do not over-engineer a component system for a small static site.

---

# **Accessibility Requirements**

Every public page must include:

* A skip-to-content link  
* One clear H1  
* Logical heading hierarchy  
* Semantic landmarks  
* Keyboard-accessible navigation  
* Visible focus states  
* Properly associated form labels  
* Useful alt text  
* Sufficient contrast  
* Accessible button and link names  
* A functional mobile menu  
* Reduced-motion support  
* No horizontal overflow

Do not rely only on placeholder text for form labels.

Tables must remain usable on small screens or convert cleanly to accessible cards.

Core content should remain readable without JavaScript.

---

# **Responsive Requirements**

Verify at minimum:

320px  
375px  
768px  
1024px  
1280px  
1440px

Confirm:

* No horizontal scrolling  
* Navigation works  
* Fixture imagery scales correctly  
* Cards stack logically  
* Forms remain readable  
* Buttons remain usable  
* Text does not become excessively wide  
* Responsibility content remains understandable  
* Footer links remain accessible

---

# **SEO Requirements**

Use these themes naturally:

* Custom manufacturing tooling  
* Assembly fixture design  
* Press-fit tooling  
* Bushing installation fixture  
* Bearing installation tooling  
* CMM inspection fixture  
* Production workholding  
* Custom fixture design  
* Operator-assist equipment  
* Minnesota tooling design  
* Manufacturing process improvement

Do not keyword-stuff.

Do not use terms that imply unsupported capabilities, including:

* Turnkey automation integrator  
* Certified machine builder  
* Full-service controls integrator  
* Robotic systems integrator  
* Proven automatic bushing press  
* Standard cut-to-length machine

Each public page must have:

* Unique title  
* Unique meta description  
* One H1  
* Correct canonical URL  
* Matching Open Graph title and description  
* Correct Open Graph URL  
* Valid favicon  
* Appropriate internal links

Keep Organization structured data factual and minimal.

Do not add:

* Product pricing schema  
* Review schema  
* Rating schema  
* Fake LocalBusiness address  
* Fake service-area claims  
* Fake customer data  
* Fake offers  
* Fake availability

---

# **Sitemap and Robots**

Update `sitemap.xml` to contain only the new canonical public pages:

https://edenindustrialsystems.com/  
https://edenindustrialsystems.com/capabilities/  
https://edenindustrialsystems.com/projects/cmm-inspection-fixture/  
https://edenindustrialsystems.com/process/  
https://edenindustrialsystems.com/about/  
https://edenindustrialsystems.com/contact/  
https://edenindustrialsystems.com/request-a-project/

Do not include:

* Redirect pages  
* `/docs`  
* Clean-environment URLs  
* Product URLs  
* Archive content  
* Internal files

Update `robots.txt` only as necessary to point to the correct sitemap.

---

# **Form Behavior**

Preserve the known working Formspree endpoint:

https://formspree.io/f/mqpzlqvb

Do not:

* Change the endpoint  
* Add fake JavaScript submission  
* Display success without a real successful response  
* Silently discard data  
* Commit secrets  
* Add API keys  
* Add a new external form provider  
* Add a file-upload workflow without confirming support

Ensure every visible field has a meaningful `name` attribute and is included in the submitted payload.

Use distinct hidden `form_type` and `_subject` fields for the two forms.

---

# **Public Copy Search and Removal Check**

Before completion, search all active-branch public HTML, CSS, JavaScript, XML, and updated documentation for:

CEC  
CET  
CEW  
HEPA  
clean staging  
cleanroom  
controlled environment  
Clean Process Chamber  
localized process environment  
laminar  
airflow  
pilot program

Remove obsolete occurrences.

A term may remain only when it is part of an unavoidable historical redirect filename. It should not remain in visible page copy, metadata, navigation, structured data, sitemap entries, or active project documentation.

Also search for overstatements such as:

turnkey  
guaranteed  
proven  
certified  
industry-leading  
best-in-class  
our team  
our facility  
automatic bushing press  
standard cut-to-length

Review each occurrence for accuracy.

---

# **Acceptance Criteria**

The overhaul is complete only when all of the following are true:

## **Branch Safety**

* Work is on a non-`main` branch.  
* `archive/clean-environment-site-2026-08-27` is unchanged.  
* `main` has not been directly modified or merged by Codex.

## **Structure**

* All seven new canonical routes load.  
* Navigation is consistent.  
* Footer is consistent.  
* No public Product navigation remains.  
* Legacy routes redirect correctly.

## **Positioning**

* Eden is clearly presented as a custom manufacturing-tooling business.  
* Assembly and press-fit tooling is the leading capability.  
* Inspection fixtures and production workholding are prominent.  
* Operator-assist equipment is described honestly.  
* Cut-to-length is described only as a customer-specific possible application.  
* No standardized machine is implied.

## **Featured Project**

* The genuine CMM fixture is the featured project.  
* Actual project imagery is used.  
* The project is labeled as a design project unless production use is verified.  
* No fake customer, measured result, or ROI claim appears.

## **Forms**

* Contact form uses the existing Formspree endpoint.  
* Project-review form uses the existing Formspree endpoint.  
* Required fields work.  
* Every field has a proper label.  
* Project query parameters work when JavaScript is available.  
* Forms remain usable without JavaScript.  
* No fake success behavior is introduced.

## **Content Removal**

* CEC/CET/CEW content is gone from the active public site.  
* Cleanroom and HEPA positioning is gone.  
* Clean-staging metadata is gone.  
* Old product URLs are absent from the sitemap.  
* Obsolete product imagery is not publicly displayed.  
* Dead product-gallery code is removed.

## **Technical Quality**

* `CNAME` is unchanged.  
* GitHub Pages compatibility is preserved.  
* No framework is introduced.  
* No broken internal links remain.  
* No missing assets remain.  
* No browser-console errors remain.  
* No unnecessary dependencies are added.  
* CSS and JavaScript are readable and maintainable.

## **Accessibility and Responsive Design**

* Keyboard navigation works.  
* Focus states are visible.  
* Mobile navigation works.  
* Forms are accessible.  
* Heading order is logical.  
* No horizontal overflow exists at tested widths.  
* Reduced-motion behavior is respected.  
* All meaningful images have useful alt text.

## **SEO**

* Every canonical page has unique metadata.  
* Canonicals use the production domain.  
* Open Graph metadata is accurate.  
* Sitemap includes only canonical public pages.  
* No unsupported structured data is added.

---

# **Validation**

Run any existing repository validation or acceptance scripts that still apply.

Update tests or acceptance checks that are tied to the old four-page clean-environment structure.

At minimum:

1. Start a local static server.  
2. Open every canonical route.  
3. Open every redirect route.  
4. Verify desktop navigation.  
5. Verify mobile navigation.  
6. Verify both forms’ markup and payload field names.  
7. Verify all internal links.  
8. Verify all asset paths.  
9. Check the browser console.  
10. Check responsive layouts.  
11. Search for obsolete clean-environment terminology.  
12. Search for unsupported credibility claims.  
13. Validate `sitemap.xml`.  
14. Confirm `robots.txt`.  
15. Confirm `CNAME`.  
16. Confirm the Formspree endpoint remains unchanged.  
17. Confirm the archive branch was not modified.

Do not claim live form delivery was tested unless an actual submission was made and verified.

Do not claim visual browser testing that was not performed.

---

# **Completion and Pull Request**

When complete:

1. Commit all changes with a clear message, such as:

Pivot website to custom manufacturing tooling

2. Open a pull request against `main`.  
3. Do not merge it.  
4. Provide a completion report containing:  
   * Summary of the new positioning  
   * Branch name  
   * Commit SHA  
   * Pull request link or number  
   * Files added  
   * Files modified  
   * Files removed  
   * Historical assets restored  
   * New routes  
   * Redirect routes  
   * Documentation changes  
   * Form changes  
   * Validation performed  
   * Results  
   * Any remaining missing information  
   * Any limitations that could not be resolved

Explicitly confirm:

* The archive branch was not changed.  
* `CNAME` was not changed.  
* The Formspree endpoint was preserved.  
* No CEC, CET, CEW, HEPA, cleanroom, or clean-staging positioning remains on the active public site.  
* No fake projects, customers, results, testimonials, or certifications were added.  
* No AI-generated, stock, competitor, or externally sourced project imagery was added.  
* The CMM fixture is presented honestly.  
* The work was not merged into `main`.\# Codex Implementation Prompt: Pivot Eden Industrial Systems to Custom Manufacturing Tooling  
  \#\# Repository and Branch Safety  
  Implement this overhaul in:  
  \`\`\`text  
  TylerDaGeorge/tylerdageorge.github.io  
  \`\`\`  
  The production website deploys from \`main\` through GitHub Pages.  
  The previous clean-environment website has already been preserved in:  
  \`\`\`text  
  archive/clean-environment-site-2026-08-27  
  \`\`\`  
  Do not modify, delete, rebase, force-push, or merge into that archive branch.  
  Before changing files:  
  1\. Start from the current \`main\`.  
  2\. Create and switch to:  
  \`\`\`text  
  website/tooling-pivot  
  \`\`\`  
  3\. Do not commit directly to \`main\`.  
  4\. Complete all work on the new branch.  
  5\. Commit the finished overhaul.  
  6\. Open a pull request against \`main\`.  
  7\. Do not merge the pull request.  
  If Codex is already operating on a dedicated task branch, use that branch rather than creating a second one, but confirm that it started from the current \`main\` and is not the archive branch.  
  \---  
  \# Instruction Priority  
  This prompt is the latest explicit direction from the owner and supersedes the current clean-environment positioning in the active repository documentation.  
  The current \`/docs/AGENTS.md\`, \`/docs/WEBSITE-PLAN.md\`, \`/docs/PRODUCT.md\`, \`/docs/CONTENT.md\`, and related files still direct agents toward the CEC, CET, CEW, clean staging, localized process environments, and HEPA-filtered equipment.  
  Those instructions are now obsolete for the active website.  
  Do not follow the old product direction merely because it appears in existing documentation. Update the active documentation first so future coding agents do not restore the clean-environment direction.  
  The archived branch preserves the former website and documentation.  
  \---  
  \# Primary Objective  
  Completely reposition Eden Industrial Systems from a clean-environment product company into a focused, service-first industrial engineering business.  
  The new positioning is:  
  \> \*\*Custom production tooling and practical automation for manufacturers.\*\*  
  The central offer is:  
  \> \*\*Eden Industrial Systems designs custom assembly fixtures, inspection workholding, press-fit tooling, production fixtures, and practical operator-assist equipment around the parts, machines, and people already on the customer’s floor.\*\*  
  The company should be presented as a mechanical design and manufacturing-tooling business—not as a catalog equipment manufacturer, consumer-product company, large automation integrator, or cleanroom-equipment supplier.  
  The site should lead with:  
  1\. Assembly and press-fit tooling  
  2\. Inspection fixtures  
  3\. Production workholding  
  4\. Operator-assist equipment and small custom automation  
  Press-fit tooling should be the leading application, but do not claim that Eden currently sells a standardized automatic bushing press.  
  Customer-specific cut-to-length systems may be mentioned as a potential operator-assist or material-positioning application, but do not claim that Eden offers a universal cut-to-length machine.  
  Do not publicly promote:  
  \* CEC  
  \* CET  
  \* CEW  
  \* Clean Process Chamber  
  \* Clean staging equipment  
  \* HEPA-filtered equipment  
  \* Cleanroom products  
  \* Coolant-actuated lathe grippers  
  \* Automatic window-blind products  
  \* A standardized automatic bushing press  
  \* A standardized cut-to-length machine  
  \---  
  \# Important Repository Facts  
  Preserve:  
  \`\`\`text  
  CNAME  
  \`\`\`  
  Do not alter the production domain:  
  \`\`\`text  
  edenindustrialsystems.com  
  \`\`\`  
  Preserve and continue using the approved current brand assets:  
  \`\`\`text  
  /assets/LOGO2.png  
  /assets/FAVICON2.svg  
  \`\`\`  
  Preserve the existing Formspree destination:  
  \`\`\`text  
  [https://formspree.io/f/mqpzlqvb](https://formspree.io/f/mqpzlqvb)  
  \`\`\`  
  Both the general contact form and project-intake form may continue using that endpoint with distinct hidden form-type and subject values.  
  The website currently uses static HTML, CSS, and minimal JavaScript. Continue using this architecture.  
  Do not introduce:  
  \* React  
  \* Next.js  
  \* Vue  
  \* Svelte  
  \* Tailwind  
  \* Bootstrap  
  \* A CMS  
  \* A build framework  
  \* A server-side application  
  \* A database  
  \* Paid external services  
  \* New analytics  
  \* New third-party scripts  
  Maintain GitHub Pages compatibility.  
  \---  
  \# Historical Fixture Content  
  A previous fixture-focused version of the site exists in Git history.  
  Use this historical commit as a reference:  
  \`\`\`text  
  9f7045ef08a4a5edb744515850d1573344ed0f61  
  \`\`\`  
  A second useful historical reference is:  
  \`\`\`text  
  522b6341c3488c9d33295029fd3389ed87636d6e  
  \`\`\`  
  These historical versions contain material related to:  
  \* The three-part CMM fixture  
  \* \`Fixture 1.png\`  
  \* \`Fixture 1 transp.png\`  
  \* The old CMM fixture case-study page  
  \* Earlier capabilities, process, and About copy  
  Use Git history only as a source for genuine, user-owned fixture imagery and verified project facts.  
  Do not restore the old website wholesale.  
  Do not restore:  
  \* The old logo  
  \* Outdated branding  
  \* Obsolete navigation  
  \* Generic generated project illustrations  
  \* Placeholder project SVGs as evidence of completed work  
  \* Fake case studies  
  \* Unverified outcome claims  
  \* Old SEO copy that is too narrow or inaccurate  
  \* Old forms that no longer match the new positioning  
  Restore the actual CMM fixture imagery into the current \`/assets\` directory with clear filenames, such as:  
  \`\`\`text  
  /assets/cmm-inspection-fixture.png  
  /assets/cmm-inspection-fixture-transparent.png  
  \`\`\`  
  Inspect the historical case-study file for any additional genuine fixture images. Extract and optimize them into separate asset files rather than retaining unnecessarily large embedded base64 image data.  
  Only use imagery that clearly represents the user’s actual fixture design.  
  \---  
  \# Honest Scope and Credibility Rules  
  Eden is an early-stage, founder-led engineering business.  
  Do not imply the existence of:  
  \* A large engineering team  
  \* An automation department  
  \* A manufacturing facility  
  \* Multiple company locations  
  \* A large installation base  
  \* Full in-house electrical controls engineering  
  \* In-house PLC programming  
  \* Robotics integration capabilities  
  \* In-house machine-safety validation  
  \* Turnkey machinery capability for every application  
  \* A long customer list  
  \* Years of completed automation projects  
  Avoid phrases such as:  
  \* “Our engineering team”  
  \* “Our automation experts”  
  \* “Our manufacturing facility”  
  \* “Industry-leading”  
  \* “Best-in-class”  
  \* “Turnkey automation integrator”  
  \* “Proven ROI”  
  \* “Guaranteed cycle-time reduction”  
  \* “Fully safety-certified system”  
  Use “Eden” where possible instead of language that artificially suggests a large staff.  
  Do not invent:  
  \* Testimonials  
  \* Customer logos  
  \* Customer names  
  \* Reviews  
  \* Certifications  
  \* Awards  
  \* Installation counts  
  \* Performance statistics  
  \* Savings percentages  
  \* Cycle-time improvements  
  \* Scrap reductions  
  \* Prices  
  \* Lead times  
  \* Warranty terms  
  \* Shipping claims  
  \* A street address  
  \* A phone number  
  \* Social media accounts  
  \* Staff members  
  The only public contact information currently approved is:  
  \`\`\`text  
  sales@edenindustrialsystems.com  
  \`\`\`  
  \---  
  \# Company Positioning  
  Use the following company descriptor consistently:  
  \> \*\*Custom production tooling and practical automation\*\*  
  Use this concise business description:  
  \> Eden Industrial Systems is a Minnesota engineering business focused on custom assembly tooling, inspection fixtures, production workholding, and practical mechanical systems for recurring manufacturing processes.  
  Use this value proposition:  
  \> Eden starts with the part, the current process, the available equipment, and the production problem. The result is purpose-built mechanical tooling and build-ready documentation designed around how the work is actually performed.  
  Do not present Eden as a general engineering consultancy that accepts every possible engineering project.  
  Do not position the company around consumer products.  
  \---  
  \# New Site Architecture  
  Create the following public routes using the repository’s current folder-based static-page structure:  
  \`\`\`text  
  /  
  ├── capabilities/  
  │ └── index.html  
  ├── projects/  
  │ └── cmm-inspection-fixture/  
  │ └── index.html  
  ├── process/  
  │ └── index.html  
  ├── about/  
  │ └── index.html  
  ├── contact/  
  │ └── index.html  
  └── request-a-project/  
  └── index.html  
  \`\`\`  
  Use this primary navigation:  
  \`\`\`text  
  Home  
  Capabilities  
  Featured Project  
  Process  
  About  
  Request a Project  
  \`\`\`  
  “Request a Project” should be styled as the primary navigation CTA.  
  Keep Contact accessible through:  
  \* The footer  
  \* Relevant CTA sections  
  \* The Request a Project page  
  \* The About page where appropriate  
  Do not add:  
  \* Products  
  \* Shop  
  \* Pricing  
  \* Blog  
  \* Resources  
  \* Careers  
  \* Customer portal  
  \* Login  
  \* Ecommerce  
  \* Newsletter  
  \* Search  
  \* Live chat  
  \* Product configurator  
  \---  
  \# Global Header  
  Use the approved Eden logo.  
  Desktop navigation:  
  \`\`\`text  
  Home  
  Capabilities  
  Featured Project  
  Process  
  About  
  Request a Project  
  \`\`\`  
  Mobile navigation must:  
  \* Use the existing accessible menu pattern or an improved equivalent  
  \* Be keyboard accessible  
  \* Correctly update \`aria-expanded\`  
  \* Close when a navigation link is selected  
  \* Prevent unwanted background scrolling while open  
  \* Work without horizontal overflow  
  \* Retain visible focus states  
  Use \`aria-current="page"\` correctly on each page.  
  \---  
  \# Global Footer  
  Use the following positioning:  
  \*\*Eden Industrial Systems\*\*  
  Custom production tooling and practical automation for manufacturers.  
  Include:  
  \* Home  
  \* Capabilities  
  \* Featured Project  
  \* Process  
  \* About  
  \* Contact  
  \* Request a Project  
  \* \`sales@edenindustrialsystems.com\`  
  \* Copyright year  
  Do not include cleanroom, HEPA, CEC, CET, CEW, clean-staging, or localized-process-environment language.  
  \---  
  \# Homepage  
  \#\# Metadata  
  Use:  
  \`\`\`text  
  Title:  
  Custom Manufacturing Tooling | Eden Industrial Systems  
  \`\`\`  
  Use a concise meta description based on:  
  \> Custom assembly tooling, inspection fixtures, production workholding, and practical operator-assist equipment for Minnesota manufacturers.  
  Canonical:  
  \`\`\`text  
  [https://edenindustrialsystems.com/](https://edenindustrialsystems.com/)  
  \`\`\`  
  Update Open Graph metadata to match.  
  Retain valid Organization structured data using only approved facts.  
  \#\# Hero  
  \#\#\# Eyebrow  
  \*\*Custom Manufacturing Tooling\*\*  
  \#\#\# H1  
  \*\*Make repeat production faster and more repeatable.\*\*  
  \#\#\# Lead  
  \> Eden Industrial Systems designs custom assembly fixtures, inspection workholding, press-fit tooling, and practical operator-assist equipment around the parts, machines, and people already on your floor.  
  \#\#\# Primary CTA  
  \*\*Request a Project Review\*\*  
  Link to:  
  \`\`\`text  
  /request-a-project/  
  \`\`\`  
  \#\#\# Secondary CTA  
  \*\*View the CMM Fixture\*\*  
  Link to:  
  \`\`\`text  
  /projects/cmm-inspection-fixture/  
  \`\`\`  
  \#\#\# Hero Visual  
  Use the genuine CMM fixture image restored from Git history.  
  Use useful alt text, such as:  
  \> Three-part CMM inspection fixture design with spring-loaded part retention.  
  Do not use the clean-environment table images.  
  Do not create a fake machine rendering.  
  \#\# Production Problems Section  
  \#\#\# Eyebrow  
  \*\*Recurring Production Problems\*\*  
  \#\#\# H2  
  \*\*Purpose-built tooling for the work that happens every day.\*\*  
  Create four concise problem cards:  
  \#\#\# Manual Assembly Variation  
  Manual insertion, alignment, or seating operations may depend too heavily on operator feel.  
  \#\#\# Slow Inspection Loading  
  Parts that are difficult to locate and retain can make repeat inspection unnecessarily cumbersome.  
  \#\#\# Difficult Part Location  
  Components may be awkward to support, orient, clamp, or present consistently.  
  \#\#\# Repetitive Handling  
  Recurring measuring, pressing, positioning, cutting, or transfer tasks may benefit from a purpose-built mechanical solution.  
  Use cautious language. Do not state that Eden has already solved each problem for multiple customers.  
  \#\# Capabilities Preview  
  \#\#\# Eyebrow  
  \*\*Capabilities\*\*  
  \#\#\# H2  
  \*\*Mechanical tooling designed around the part and process.\*\*  
  Create four capability cards.  
  \#\#\# Assembly and Press-Fit Tooling  
  \> Custom nests, alignment features, insertion tooling, depth-control concepts, mistake-proofing, and fixtures for bushings, bearings, pins, seals, and similar components.  
  CTA:  
  \*\*Explore Assembly Tooling\*\*  
  Link to the corresponding Capabilities page section.  
  \#\#\# Inspection Fixtures  
  \> CMM fixtures, visual-inspection workholding, checking aids, and repeatable part-location systems designed around access and datum strategy.  
  CTA:  
  \*\*Explore Inspection Fixtures\*\*  
  \#\#\# Production Workholding  
  \> Custom fixture plates, secondary-operation workholding, modular nests, machine-loading aids, and changeover tooling.  
  CTA:  
  \*\*Explore Production Workholding\*\*  
  \#\#\# Operator-Assist Equipment  
  \> Practical mechanical systems for positioning, feeding, holding, pressing, transferring, cutting, ejecting, or collecting parts.  
  CTA:  
  \*\*Explore Operator-Assist Equipment\*\*  
  \#\# Featured Project Section  
  \#\#\# Eyebrow  
  \*\*Featured Design Project\*\*  
  \#\#\# H2  
  \*\*Three-Part CMM Inspection Fixture\*\*  
  Use actual CMM fixture imagery.  
  Use copy based only on verified facts from the historical case-study page.  
  The summary should explain that the fixture concept was developed to:  
  \* Locate three parts consistently  
  \* Retain the components mechanically  
  \* Preserve probe access  
  \* Allow operator loading and release  
  \* Translate inspection requirements into a manufacturable fixture design  
  If the repository does not contain evidence that the fixture was fabricated, installed, and production-tested, identify it clearly as a \*\*completed design project\*\*, not a completed production installation.  
  Do not claim measured inspection-time improvement, customer approval, production use, ROI, or scrap reduction without evidence.  
  CTA:  
  \*\*View the Fixture Design\*\*  
  \#\# Process Preview  
  \#\#\# Eyebrow  
  \*\*Engineering Process\*\*  
  \#\#\# H2  
  \*\*Start with the current process—not a preselected machine.\*\*  
  Show six concise steps:  
  1\. Process review  
  2\. Requirements definition  
  3\. Concept development  
  4\. Direction approval  
  5\. Detailed engineering  
  6\. Build package and support  
  CTA:  
  \*\*See the Engineering Process\*\*  
  \#\# Company Background Preview  
  \#\#\# Eyebrow  
  \*\*Manufacturing Perspective\*\*  
  \#\#\# H2  
  \*\*Designed with the shop floor in mind.\*\*  
  Use concise copy based on:  
  \> Eden combines mechanical-design experience with hands-on CNC machining and production leadership experience. That background informs practical decisions around loading, location, access, repeatability, manufacturability, setup, and documentation.  
  Do not name current or previous employers.  
  Do not disclose confidential employer projects or internal performance information.  
  CTA:  
  \*\*About Eden\*\*  
  \#\# Homepage Final CTA  
  \#\#\# H2  
  \*\*Start with the production problem.\*\*  
  \#\#\# Copy  
  \> Share the part, the current process, production volume, equipment constraints, and the result you want to improve. Eden will review the application and recommend a practical next step.  
  \#\#\# Primary CTA  
  \*\*Request a Project Review\*\*  
  \#\#\# Secondary CTA  
  \*\*Contact Eden\*\*  
  \---  
  \# Capabilities Page  
  Route:  
  \`\`\`text  
  /capabilities/  
  \`\`\`  
  \#\# Metadata  
  Title:  
  \`\`\`text  
  Manufacturing Tooling and Fixture Design | Eden Industrial Systems  
  \`\`\`  
  Meta description:  
  \> Explore custom assembly tooling, press-fit fixtures, CMM workholding, production fixtures, and operator-assist equipment from Eden Industrial Systems.  
  \#\# Hero  
  \#\#\# Eyebrow  
  \*\*Capabilities\*\*  
  \#\#\# H1  
  \*\*Custom tooling and practical automation built around your process.\*\*  
  \#\#\# Lead  
  \> Every project begins with a specific part, process, production volume, equipment constraint, and desired outcome. Eden develops the mechanical tooling and documentation around those requirements.  
  Primary CTA:  
  \*\*Request a Project Review\*\*  
  \#\# Assembly and Press-Fit Tooling  
  This should be the first and strongest capability.  
  \#\#\# H2  
  \*\*Assembly and press-fit tooling\*\*  
  Explain that Eden can evaluate tooling for:  
  \* Bushing insertion  
  \* Bearing installation  
  \* Pin and dowel pressing  
  \* Seal installation  
  \* Component seating  
  \* Mechanical staking applications  
  \* Alignment and support during assembly  
  \* Controlled insertion depth  
  \* Changeable part nests  
  \* Incorrect-part prevention  
  \* Part-orientation features  
  \* Integration with an existing arbor, pneumatic, hydraulic, or servo press  
  Use this scope statement:  
  \> Eden can design the mechanical fixtures, nests, insertion tooling, frames, guarding concepts, and system layout for press-fit applications. Controls, electrical design, safety integration, fabrication, installation, and validation are defined separately for each project and may require qualified project partners.  
  Do not claim Eden currently supplies a standard automatic bushing press.  
  Do not claim every press application can be automated.  
  \#\# Inspection Fixtures  
  \#\#\# H2  
  \*\*Inspection fixtures\*\*  
  Include:  
  \* CMM workholding  
  \* Repeatable datum location  
  \* Minimal-contact part support  
  \* Probe-access planning  
  \* Multi-part inspection fixtures  
  \* Visual-inspection fixtures  
  \* Dimensional checking aids  
  \* Quick-loading concepts  
  \* Mechanical retention and release  
  \* Revision-controlled fixture documentation  
  Feature the CMM project as the proof point.  
  CTA:  
  \*\*View the CMM Fixture\*\*  
  \#\# Production Workholding  
  \#\#\# H2  
  \*\*Production workholding\*\*  
  Include:  
  \* Secondary-operation fixtures  
  \* Fixture plates  
  \* Custom part nests  
  \* Multi-part workholding concepts  
  \* Soft-jaw and custom-jaw design  
  \* Quick-change concepts  
  \* Modular locating systems  
  \* Operator-friendly loading  
  \* Setup documentation  
  \* Build-ready drawings  
  Avoid implying that every CNC fixture has already been production-proven.  
  \#\# Operator-Assist Equipment  
  \#\#\# H2  
  \*\*Operator-assist equipment and small custom automation\*\*  
  Use this description:  
  \> Some recurring manufacturing problems require more than a static fixture but less than a large automated cell. Eden evaluates focused mechanical systems that help an operator position, feed, hold, press, transfer, cut, eject, or collect parts.  
  Potential functions may include:  
  \* Automatic or indexed material positioning  
  \* Adjustable or programmable length stops  
  \* Part feeding and presentation  
  \* Component pressing  
  \* Mechanical ejection  
  \* Part transfer  
  \* Part collection  
  \* Repetitive handling reduction  
  \* Customer-specific cut-to-length concepts  
  Include this limitation clearly:  
  \> Eden does not currently offer a universal cut-to-length machine. Any cut-to-length project begins with the exact material, stock form, cutting method, tolerance, burr requirement, production volume, and existing workflow.  
  Do not advertise a finished machine that does not exist.  
  \#\# Engineering Deliverables  
  \#\#\# H2  
  \*\*Build-ready mechanical documentation\*\*  
  Potential deliverables may include:  
  \* 3D CAD models  
  \* Manufacturing drawings  
  \* Assembly drawings  
  \* Purchased-component specifications  
  \* Bill of materials  
  \* Concept-review documents  
  \* Revision-controlled design files  
  \* Vendor-ready fabrication packages  
  \* Setup or assembly information  
  \* Agreed build-support documentation  
  Add this clarification:  
  \> Fabrication, electrical controls, programming, safety validation, installation, commissioning, and production prove-out are included only when explicitly defined in the quoted project scope.  
  \#\# Good-Fit Project Section  
  \#\#\# H2  
  \*\*A good project starts with a defined production problem.\*\*  
  A strong-fit project usually has:  
  \* A recurring assembly, inspection, workholding, or handling process  
  \* A known part or material  
  \* Available drawings, models, samples, photos, or measurements  
  \* A clear problem involving time, variation, access, ergonomics, quality, or repeatability  
  \* Existing equipment or known equipment constraints  
  \* A customer who can participate in requirements and design reviews  
  Do not create an exclusion list that sounds hostile. Keep the section practical and qualification-focused.  
  \#\# CTA  
  \*\*Request a Project Review\*\*  
  \---  
  \# Featured Project Page  
  Route:  
  \`\`\`text  
  /projects/cmm-inspection-fixture/  
  \`\`\`  
  \#\# Metadata  
  Title:  
  \`\`\`text  
  Three-Part CMM Inspection Fixture | Eden Industrial Systems  
  \`\`\`  
  Meta description:  
  \> Explore a three-part CMM inspection fixture design developed around repeatable location, mechanical retention, operator access, and probe clearance.  
  \#\# Page Status  
  Use:  
  \#\#\# Eyebrow  
  \*\*Featured Design Project\*\*  
  \#\#\# H1  
  \*\*Three-Part CMM Inspection Fixture\*\*  
  Include a visible and professional project-status label.  
  Use language such as:  
  \> This page documents a completed fixture design. Production installation and measured performance are not claimed unless verified evidence is present in the repository.  
  Do not call it a customer case study unless a real customer relationship and permission are documented.  
  \#\# Project Structure  
  Build the page around:  
  1\. The inspection challenge  
  2\. Requirements and constraints  
  3\. Fixture concept  
  4\. Part location and support  
  5\. Retention and release  
  6\. Probe-access considerations  
  7\. Operator interaction  
  8\. Manufacturing approach  
  9\. Engineering deliverables  
  10\. Project status and limitations  
  11\. CTA for similar fixture applications  
  Use actual historical project facts and images.  
  Do not fabricate dimensions, tolerances, part materials, customer names, inspection results, cycle times, or cost savings.  
  \#\# Suggested Copy Direction  
  \#\#\# The Challenge  
  Explain that the project required three components to be located consistently for CMM access while remaining practical for operator loading and removal.  
  \#\#\# Design Priorities  
  Include only verified priorities, such as:  
  \* Repeatable part location  
  \* Three-part capacity  
  \* Probe access  
  \* Mechanical retention  
  \* Straightforward operator loading  
  \* Controlled release  
  \* Manufacturable fixture components  
  \#\#\# Fixture Solution  
  Describe the spring-loaded or mechanical retention concept only if confirmed by the historical project files.  
  \#\#\# Deliverables  
  Describe only what was actually created, such as:  
  \* Fixture assembly model  
  \* Component models  
  \* Manufacturing drawings  
  \* Assembly details  
  \* Bill of materials  
  Do not add deliverables that are not supported.  
  \#\# Visual Rules  
  Use genuine fixture imagery from Git history.  
  Do not use:  
  \* Generic CMM stock photography  
  \* AI-generated inspection imagery  
  \* Competitor photos  
  \* Fake shop-floor photos  
  \* Old generic project SVG cards as evidence  
  Optimize restored images and use descriptive filenames and alt text.  
  \#\# CTA  
  \#\#\# H2  
  \*\*Need a fixture for a similar inspection process?\*\*  
  Button:  
  \*\*Discuss an Inspection Fixture\*\*  
  Link to:  
  \`\`\`text  
  /request-a-project/?project=inspection  
  \`\`\`  
  \---  
  \# Process Page  
  Route:  
  \`\`\`text  
  /process/  
  \`\`\`  
  \#\# Metadata  
  Title:  
  \`\`\`text  
  Engineering Process | Eden Industrial Systems  
  \`\`\`  
  Meta description:  
  \> See how Eden moves a custom fixture or tooling project from process review through concept development, detailed design, and build-ready documentation.  
  \#\# Hero  
  \#\#\# Eyebrow  
  \*\*Engineering Process\*\*  
  \#\#\# H1  
  \*\*A structured path from production problem to build-ready design.\*\*  
  \#\#\# Lead  
  \> Custom tooling works best when the requirements are defined before detailed design begins. Eden uses staged reviews to align the part, process, equipment, operator, and project scope.  
  \#\# Process Steps  
  \#\#\# 1\. Initial Process Review  
  The customer provides available part files, setup photos, process descriptions, production volume, existing-equipment information, and the problem being experienced.  
  \#\#\# 2\. Requirements Definition  
  Define:  
  \* Part location  
  \* Loading and unloading  
  \* Forces  
  \* Tolerances  
  \* Equipment interfaces  
  \* Operator access  
  \* Cycle expectations  
  \* Changeover  
  \* Maintenance  
  \* Safety considerations  
  \* Required deliverables  
  \#\#\# 3\. Concept Development  
  Develop one or more practical approaches and identify:  
  \* Major components  
  \* Interfaces  
  \* Assumptions  
  \* Risks  
  \* Open questions  
  \* Approximate project scope  
  \#\#\# 4\. Direction Approval  
  The customer reviews the proposed direction before detailed engineering begins.  
  \#\#\# 5\. Detailed Design  
  Complete the agreed:  
  \* 3D models  
  \* Interfaces  
  \* Purchased-component selection  
  \* Manufacturing drawings  
  \* Assembly drawings  
  \* Bill of materials  
  \#\#\# 6\. Design Review  
  Review the completed design for:  
  \* Manufacturability  
  \* Operator use  
  \* Machine compatibility  
  \* Access  
  \* Serviceability  
  \* Project requirements  
  \#\#\# 7\. Build Package  
  Release the approved design documentation included in the project scope.  
  \#\#\# 8\. Build Support  
  Provide clarification and revision support during fabrication and assembly according to the quoted scope.  
  \#\# Responsibility Matrix  
  Create a responsive table or card-based matrix.  
  \#\#\# Eden  
  \* Mechanical concepts  
  \* Fixture and tooling design  
  \* 3D CAD  
  \* Drawings  
  \* Bill of materials  
  \* Agreed design reviews  
  \* Agreed build support  
  \#\#\# Customer  
  \* Accurate part and process information  
  \* Equipment information  
  \* Requirements  
  \* Samples or models where applicable  
  \* Timely review and approval  
  \* Final production acceptance  
  \#\#\# Fabricator or Integrator  
  Where separately involved:  
  \* Fabrication quality  
  \* Electrical implementation  
  \* Controls programming  
  \* Assembly  
  \* Installation  
  \* Guarding implementation  
  \* Safety-system implementation  
  \* Commissioning  
  Clarify that exact responsibilities are project-specific and established in the quote.  
  \#\# CTA  
  \*\*Request a Project Review\*\*  
  \---  
  \# About Page  
  Route:  
  \`\`\`text  
  /about/  
  \`\`\`  
  \#\# Metadata  
  Title:  
  \`\`\`text  
  About Eden Industrial Systems | Minnesota Tooling Design  
  \`\`\`  
  Meta description:  
  \> Learn about Eden Industrial Systems, a Minnesota engineering business focused on custom fixtures, assembly tooling, workholding, and practical mechanical automation.  
  \#\# Hero  
  \#\#\# Eyebrow  
  \*\*About Eden\*\*  
  \#\#\# H1  
  \*\*Mechanical design shaped by production experience.\*\*  
  \#\# Company Description  
  Use:  
  \> Eden Industrial Systems is a Minnesota engineering business focused on custom production fixtures, assembly tooling, inspection workholding, and practical mechanical automation.  
  \#\# Relevant Background  
  Accurately communicate:  
  \* AAS education in CAD Engineering  
  \* Mechanical-design experience  
  \* CNC machining experience  
  \* Experience as a lead CNC turning machinist  
  \* Familiarity with production setup, repeatability, operator loading, inspection access, manufacturability, and technical documentation  
  Do not include:  
  \* Age  
  \* Current employer  
  \* Former employer names  
  \* Confidential employer projects  
  \* Internal customer information  
  \* Proprietary manufacturing information  
  \* Unverified production statistics  
  \* Work that legally belongs to an employer  
  \#\# Working Principles  
  Create a concise principles section:  
  \#\#\# Start With the Process  
  Understand the current workflow before selecting a solution.  
  \#\#\# Design for the Operator  
  Loading, access, visibility, adjustment, and release matter.  
  \#\#\# Design for Manufacturing  
  A useful concept must be practical to fabricate, assemble, and service.  
  \#\#\# Document the Design  
  Clear models, drawings, BOMs, interfaces, and revision control support execution.  
  \#\#\# Keep the Scope Honest  
  Electrical, controls, fabrication, safety, and installation responsibilities must be defined—not assumed.  
  \#\# CTA  
  \*\*Discuss a Manufacturing Problem\*\*  
  \---  
  \# Contact Page  
  Keep route:  
  \`\`\`text  
  /contact/  
  \`\`\`  
  \#\# Metadata  
  Title:  
  \`\`\`text  
  Contact Eden Industrial Systems  
  \`\`\`  
  Meta description:  
  \> Contact Eden Industrial Systems about manufacturing tooling, fixture design, supplier communication, partnerships, or other general inquiries.  
  \#\# Hero  
  \#\#\# Eyebrow  
  \*\*General Inquiries\*\*  
  \#\#\# H1  
  \*\*Contact Eden\*\*  
  \#\#\# Lead  
  \> Have a question about a tooling application, supplier opportunity, partnership, or another business matter? Send Eden a message.  
  \#\# Contact Copy  
  Use the contact form for:  
  \* General questions  
  \* Supplier communication  
  \* Partnerships  
  \* Non-project inquiries  
  \* Follow-up communication  
  Include:  
  \`\`\`text  
  sales@edenindustrialsystems.com  
  \`\`\`  
  Link project inquiries to:  
  \`\`\`text  
  /request-a-project/  
  \`\`\`  
  \#\# Form  
  Preserve:  
  \`\`\`text  
  action="[https://formspree.io/f/mqpzlqvb](https://formspree.io/f/mqpzlqvb)"  
  method="POST"  
  \`\`\`  
  Use hidden values such as:  
  \`\`\`text  
  form\_type \= General contact inquiry  
  \_subject \= New Eden website contact inquiry  
  \`\`\`  
  Fields:  
  \* Name — required  
  \* Company  
  \* Email — required  
  \* Phone  
  \* Subject — required  
  \* Message — required  
  Do not fake successful submission behavior.  
  \---  
  \# Request a Project Page  
  Create:  
  \`\`\`text  
  /request-a-project/  
  \`\`\`  
  \#\# Metadata  
  Title:  
  \`\`\`text  
  Request a Project Review | Eden Industrial Systems  
  \`\`\`  
  Meta description:  
  \> Submit a manufacturing tooling, fixture, workholding, press-fit, or operator-assist application for review by Eden Industrial Systems.  
  \#\# Hero  
  \#\#\# Eyebrow  
  \*\*Project Intake\*\*  
  \#\#\# H1  
  \*\*Tell Eden about the part, process, and production problem.\*\*  
  \#\#\# Lead  
  \> Start with what is known. Part files, photos, equipment information, production volume, and current-process details can be shared after the initial review.  
  \#\# Form Endpoint  
  Preserve:  
  \`\`\`text  
  action="[https://formspree.io/f/mqpzlqvb](https://formspree.io/f/mqpzlqvb)"  
  method="POST"  
  \`\`\`  
  Use hidden values such as:  
  \`\`\`text  
  form\_type \= Project review request  
  \_subject \= New Eden project review request  
  \`\`\`  
  \#\# Contact Information  
  Fields:  
  \* Name — required  
  \* Company — required  
  \* Email — required  
  \* Phone  
  \#\# Project Type  
  Required select:  
  \* Assembly or press-fit tooling  
  \* Inspection fixture  
  \* CNC or production workholding  
  \* Operator-assist equipment  
  \* Cut-to-length or material-positioning application  
  \* Other custom equipment  
  \* Not sure  
  \#\# Application Information  
  Add:  
  \* Describe the current process — required  
  \* What problem are you trying to solve?  
  \* Part or material being handled  
  \* Approximate part dimensions and weight  
  \* Current equipment or machine  
  \* Current production volume  
  \* Current cycle time, if known  
  \* Required tolerance or quality requirement  
  \* Current scrap, rework, ergonomic, access, or handling concern  
  \* Desired level of automation  
  \* Required delivery timeframe  
  \* Estimated quantity  
  \* Additional requirements  
  Do not make every field required.  
  At minimum require:  
  \* Name  
  \* Company  
  \* Email  
  \* Project type  
  \* Current-process or application description  
  \#\# File-Sharing Copy  
  Do not add a file-upload field unless the existing Formspree account and implementation have been verified to support it securely.  
  Instead use:  
  \> After the initial submission, Eden can reply with instructions for sharing drawings, STEP files, photos, videos, or equipment documentation.  
  \#\# Query Parameter Support  
  Allow URLs such as:  
  \`\`\`text  
  /request-a-project/?project=inspection  
  /request-a-project/?project=press-fit  
  /request-a-project/?project=workholding  
  /request-a-project/?project=operator-assist  
  \`\`\`  
  Update the project-type select when a recognized query parameter is present.  
  Do not fail when the parameter is missing or invalid.  
  Use progressive enhancement. The form must remain usable without JavaScript.  
  \#\# Submit Button  
  Use:  
  \*\*Submit Project for Review\*\*  
  Do not use:  
  \* Buy Now  
  \* Order a Machine  
  \* Get Instant Pricing  
  \* Request a Pilot  
  \* Get a Guaranteed Quote  
  \---  
  \# Legacy Route Handling  
  The current production site and historical fixture site have existing indexed URLs.  
  Create lightweight static redirect pages with:  
  \* Correct destination  
  \* \`noindex\`  
  \* Canonical pointing to the destination  
  \* Immediate JavaScript redirect where available  
  \* Meta-refresh fallback  
  \* Visible fallback link  
  \* No obsolete product copy  
  Redirect:  
  \`\`\`text  
  /products/ → /capabilities/  
  /products/cec/ → /capabilities/  
  /request-a-quote/ → /request-a-project/  
  \`\`\`  
  Also inspect Git history and redirect known older fixture-site URLs where appropriate, including likely routes such as:  
  \`\`\`text  
  /capabilities.html → /capabilities/  
  /about.html → /about/  
  /engineering-process.html → /process/  
  /cmm-fixture-case-study.html → /projects/cmm-inspection-fixture/  
  \`\`\`  
  Do not add redirect pages to the sitemap.  
  Preserve search-query and hash information when practical, but do not overcomplicate the implementation.  
  \---  
  \# Clean-Environment Content Removal  
  Remove all clean-environment positioning from the active website branch.  
  Remove or replace:  
  \* CEC pages  
  \* CET product sections  
  \* CEW product sections  
  \* Clean Process Chamber content  
  \* HEPA content  
  \* Airflow diagrams  
  \* Clean-staging copy  
  \* Pilot-program language  
  \* Cleanroom quote-form fields  
  \* Cleanroom metadata  
  \* Clean-environment structured data  
  \* Product navigation  
  \* Product sitemap entries  
  \* Cleanroom footer copy  
  \* Table gallery JavaScript that is no longer used  
  \* Dead CSS supporting removed product sections  
  The archived branch already preserves that site.  
  This is a normal active-branch cleanup. Do not rewrite Git history.  
  Once no active page references them, remove the current table-product assets from the active branch:  
  \`\`\`text  
  /assets/Table 1.PNG  
  /assets/Table 2.PNG  
  /assets/Table 3.PNG  
  \`\`\`  
  Do not remove:  
  \`\`\`text  
  /assets/LOGO2.png  
  /assets/FAVICON2.svg  
  \`\`\`  
  \---  
  \# Documentation Overhaul  
  The active \`/docs\` directory must no longer direct future agents toward clean-environment equipment.  
  Rewrite:  
  \`\`\`text  
  /docs/AGENTS.md  
  /docs/WEBSITE-PLAN.md  
  /docs/CONTENT.md  
  /docs/CLAIMS.md  
  /docs/DESIGN.md  
  /docs/TECHNICAL.md  
  /docs/SEO.md  
  /docs/ACCEPTANCE.md  
  \`\`\`  
  Create:  
  \`\`\`text  
  /docs/CAPABILITIES.md  
  \`\`\`  
  Use \`CAPABILITIES.md\` as the source of truth for:  
  \* Assembly tooling  
  \* Press-fit tooling  
  \* Inspection fixtures  
  \* Production workholding  
  \* Operator-assist equipment  
  \* Engineering deliverables  
  \* Scope boundaries  
  \* Project status  
  \* Current commercial capabilities  
  Remove obsolete active-branch product documentation when it is no longer referenced, including:  
  \`\`\`text  
  /docs/CEC.md  
  /docs/PRODUCT.md  
  /docs/Stainless-Clean-Environment-Table.md  
  /docs/controlled-environment-chamber.md  
  /docs/controlled-environment-workstation.md  
  \`\`\`  
  Also inspect for any other documentation whose only purpose is the paused clean-environment product family.  
  Do not create a public link to \`/docs\`.  
  \#\# New AGENTS.md Direction  
  The rewritten \`/docs/AGENTS.md\` must say that:  
  \* Eden is positioned around custom production tooling and practical automation.  
  \* The website is service-first.  
  \* Assembly and press-fit tooling is the leading application.  
  \* The CMM fixture is the only current featured project.  
  \* No fake case studies may be added.  
  \* No unverified project results may be claimed.  
  \* No standardized automatic press or cut-to-length product may be implied.  
  \* No AI-generated or externally sourced project imagery may be used.  
  \* Only approved current assets and genuine Eden project imagery may be used.  
  \* Static HTML/CSS/JS and GitHub Pages compatibility must be preserved.  
  \* Formspree behavior must remain real.  
  \* \`CNAME\` must remain unchanged.  
  \* Future agents must follow \`CAPABILITIES.md\`, \`CONTENT.md\`, \`CLAIMS.md\`, and the other updated documents.  
  \* Clean-environment products are not part of the active public website direction.  
  \#\# New Claims Rules  
  The rewritten \`CLAIMS.md\` must prohibit:  
  \* Fake customer results  
  \* Fake performance metrics  
  \* Fake ROI  
  \* Fake cycle-time reductions  
  \* Fake scrap reductions  
  \* Fake certifications  
  \* Fake safety validation  
  \* Unsupported turnkey claims  
  \* Unsupported controls capabilities  
  \* Unsupported fabrication capabilities  
  \* Unsupported production-use claims  
  \* Presenting a design project as a field-proven installation  
  It should also define acceptable language such as:  
  \* “Designed to”  
  \* “Can be evaluated for”  
  \* “Potential applications include”  
  \* “Mechanical design scope”  
  \* “Build-ready documentation”  
  \* “Project-specific”  
  \* “Quoted separately”  
  \* “May require qualified integration partners”  
  \---  
  \# Visual Design Direction  
  Preserve the current Eden visual identity and approved logo.  
  The existing palette may continue using the current restrained industrial values, including dark blue-green, green accents, white, steel gray, and neutral backgrounds.  
  The new visual direction should feel like:  
  \* Precision mechanical engineering  
  \* Industrial tooling  
  \* CAD and manufacturing  
  \* Clean and technical  
  \* Practical  
  \* Structured  
  \* Professional  
  \* Founder-led but credible  
  It should not feel like:  
  \* A SaaS startup  
  \* A generic consulting template  
  \* A cleanroom-equipment catalog  
  \* A consumer-product website  
  \* A huge automation corporation  
  \* A personal résumé site  
  \* A stock-photo-heavy marketing site  
  \#\# Visual Priorities  
  1\. Genuine CMM fixture imagery  
  2\. Clear capability descriptions  
  3\. Process clarity  
  4\. Technical credibility  
  5\. Conversion to project review  
  6\. Honest scope boundaries  
  \#\# Layout  
  Use:  
  \* Strong typographic hierarchy  
  \* Generous whitespace  
  \* Straight-edged or minimally rounded cards  
  \* Restrained borders  
  \* Industrial neutral backgrounds  
  \* Consistent section spacing  
  \* Clear numbered process steps  
  \* Purposeful green accents  
  \* Responsive grids  
  \* Accessible tables or card alternatives  
  Avoid:  
  \* Huge gradient blobs  
  \* Glassmorphism  
  \* Decorative dashboards  
  \* Excessive pills  
  \* Random statistics  
  \* Fake KPI cards  
  \* Animated background particles  
  \* Auto-rotating carousels  
  \* Scroll hijacking  
  \* Excessive parallax  
  \* Unnecessary animation  
  \#\# Image Rules  
  Do not:  
  \* Generate new project images  
  \* Download stock manufacturing photos  
  \* Use competitor imagery  
  \* Use AI imagery  
  \* Create fictional machine renders  
  \* Use generic CMM photography as though it depicts Eden’s work  
  \* Restore obsolete table imagery into the visible website  
  If a section lacks an approved image, use a text-led layout rather than fabricating one.  
  \---  
  \# Technical Implementation  
  Continue using:  
  \* Semantic HTML  
  \* Shared CSS  
  \* Minimal vanilla JavaScript  
  \* Static directory routes  
  \* GitHub Pages  
  \* Existing Formspree integration  
  Reuse consistent patterns for:  
  \* Header  
  \* Footer  
  \* Buttons  
  \* Containers  
  \* Eyebrows  
  \* Page heroes  
  \* Capability sections  
  \* CTA sections  
  \* Forms  
  \* Project-detail layouts  
  \* Process steps  
  Clean up obsolete CSS and JavaScript after verifying nothing still depends on them.  
  Do not leave dead:  
  \* Table gallery code  
  \* CEC query-parameter logic  
  \* Airflow styling  
  \* Product-card styling that is no longer used  
  \* Cleanroom-specific selectors  
  \* Broken asset references  
  Do not over-engineer a component system for a small static site.  
  \---  
  \# Accessibility Requirements  
  Every public page must include:  
  \* A skip-to-content link  
  \* One clear H1  
  \* Logical heading hierarchy  
  \* Semantic landmarks  
  \* Keyboard-accessible navigation  
  \* Visible focus states  
  \* Properly associated form labels  
  \* Useful alt text  
  \* Sufficient contrast  
  \* Accessible button and link names  
  \* A functional mobile menu  
  \* Reduced-motion support  
  \* No horizontal overflow  
  Do not rely only on placeholder text for form labels.  
  Tables must remain usable on small screens or convert cleanly to accessible cards.  
  Core content should remain readable without JavaScript.  
  \---  
  \# Responsive Requirements  
  Verify at minimum:  
  \`\`\`text  
  320px  
  375px  
  768px  
  1024px  
  1280px  
  1440px  
  \`\`\`  
  Confirm:  
  \* No horizontal scrolling  
  \* Navigation works  
  \* Fixture imagery scales correctly  
  \* Cards stack logically  
  \* Forms remain readable  
  \* Buttons remain usable  
  \* Text does not become excessively wide  
  \* Responsibility content remains understandable  
  \* Footer links remain accessible  
  \---  
  \# SEO Requirements  
  Use these themes naturally:  
  \* Custom manufacturing tooling  
  \* Assembly fixture design  
  \* Press-fit tooling  
  \* Bushing installation fixture  
  \* Bearing installation tooling  
  \* CMM inspection fixture  
  \* Production workholding  
  \* Custom fixture design  
  \* Operator-assist equipment  
  \* Minnesota tooling design  
  \* Manufacturing process improvement  
  Do not keyword-stuff.  
  Do not use terms that imply unsupported capabilities, including:  
  \* Turnkey automation integrator  
  \* Certified machine builder  
  \* Full-service controls integrator  
  \* Robotic systems integrator  
  \* Proven automatic bushing press  
  \* Standard cut-to-length machine  
  Each public page must have:  
  \* Unique title  
  \* Unique meta description  
  \* One H1  
  \* Correct canonical URL  
  \* Matching Open Graph title and description  
  \* Correct Open Graph URL  
  \* Valid favicon  
  \* Appropriate internal links  
  Keep Organization structured data factual and minimal.  
  Do not add:  
  \* Product pricing schema  
  \* Review schema  
  \* Rating schema  
  \* Fake LocalBusiness address  
  \* Fake service-area claims  
  \* Fake customer data  
  \* Fake offers  
  \* Fake availability  
  \---  
  \# Sitemap and Robots  
  Update \`sitemap.xml\` to contain only the new canonical public pages:  
  \`\`\`text  
  [https://edenindustrialsystems.com/](https://edenindustrialsystems.com/)  
  [https://edenindustrialsystems.com/capabilities/](https://edenindustrialsystems.com/capabilities/)  
  [https://edenindustrialsystems.com/projects/cmm-inspection-fixture/](https://edenindustrialsystems.com/projects/cmm-inspection-fixture/)  
  [https://edenindustrialsystems.com/process/](https://edenindustrialsystems.com/process/)  
  [https://edenindustrialsystems.com/about/](https://edenindustrialsystems.com/about/)  
  [https://edenindustrialsystems.com/contact/](https://edenindustrialsystems.com/contact/)  
  [https://edenindustrialsystems.com/request-a-project/](https://edenindustrialsystems.com/request-a-project/)  
  \`\`\`  
  Do not include:  
  \* Redirect pages  
  \* \`/docs\`  
  \* Clean-environment URLs  
  \* Product URLs  
  \* Archive content  
  \* Internal files  
  Update \`robots.txt\` only as necessary to point to the correct sitemap.  
  \---  
  \# Form Behavior  
  Preserve the known working Formspree endpoint:  
  \`\`\`text  
  [https://formspree.io/f/mqpzlqvb](https://formspree.io/f/mqpzlqvb)  
  \`\`\`  
  Do not:  
  \* Change the endpoint  
  \* Add fake JavaScript submission  
  \* Display success without a real successful response  
  \* Silently discard data  
  \* Commit secrets  
  \* Add API keys  
  \* Add a new external form provider  
  \* Add a file-upload workflow without confirming support  
  Ensure every visible field has a meaningful \`name\` attribute and is included in the submitted payload.  
  Use distinct hidden \`form\_type\` and \`\_subject\` fields for the two forms.  
  \---  
  \# Public Copy Search and Removal Check  
  Before completion, search all active-branch public HTML, CSS, JavaScript, XML, and updated documentation for:  
  \`\`\`text  
  CEC  
  CET  
  CEW  
  HEPA  
  clean staging  
  cleanroom  
  controlled environment  
  Clean Process Chamber  
  localized process environment  
  laminar  
  airflow  
  pilot program  
  \`\`\`  
  Remove obsolete occurrences.  
  A term may remain only when it is part of an unavoidable historical redirect filename. It should not remain in visible page copy, metadata, navigation, structured data, sitemap entries, or active project documentation.  
  Also search for overstatements such as:  
  \`\`\`text  
  turnkey  
  guaranteed  
  proven  
  certified  
  industry-leading  
  best-in-class  
  our team  
  our facility  
  automatic bushing press  
  standard cut-to-length  
  \`\`\`  
  Review each occurrence for accuracy.  
  \---  
  \# Acceptance Criteria  
  The overhaul is complete only when all of the following are true:  
  \#\# Branch Safety  
  \* Work is on a non-\`main\` branch.  
  \* \`archive/clean-environment-site-2026-08-27\` is unchanged.  
  \* \`main\` has not been directly modified or merged by Codex.  
  \#\# Structure  
  \* All seven new canonical routes load.  
  \* Navigation is consistent.  
  \* Footer is consistent.  
  \* No public Product navigation remains.  
  \* Legacy routes redirect correctly.  
  \#\# Positioning  
  \* Eden is clearly presented as a custom manufacturing-tooling business.  
  \* Assembly and press-fit tooling is the leading capability.  
  \* Inspection fixtures and production workholding are prominent.  
  \* Operator-assist equipment is described honestly.  
  \* Cut-to-length is described only as a customer-specific possible application.  
  \* No standardized machine is implied.  
  \#\# Featured Project  
  \* The genuine CMM fixture is the featured project.  
  \* Actual project imagery is used.  
  \* The project is labeled as a design project unless production use is verified.  
  \* No fake customer, measured result, or ROI claim appears.  
  \#\# Forms  
  \* Contact form uses the existing Formspree endpoint.  
  \* Project-review form uses the existing Formspree endpoint.  
  \* Required fields work.  
  \* Every field has a proper label.  
  \* Project query parameters work when JavaScript is available.  
  \* Forms remain usable without JavaScript.  
  \* No fake success behavior is introduced.  
  \#\# Content Removal  
  \* CEC/CET/CEW content is gone from the active public site.  
  \* Cleanroom and HEPA positioning is gone.  
  \* Clean-staging metadata is gone.  
  \* Old product URLs are absent from the sitemap.  
  \* Obsolete product imagery is not publicly displayed.  
  \* Dead product-gallery code is removed.  
  \#\# Technical Quality  
  \* \`CNAME\` is unchanged.  
  \* GitHub Pages compatibility is preserved.  
  \* No framework is introduced.  
  \* No broken internal links remain.  
  \* No missing assets remain.  
  \* No browser-console errors remain.  
  \* No unnecessary dependencies are added.  
  \* CSS and JavaScript are readable and maintainable.  
  \#\# Accessibility and Responsive Design  
  \* Keyboard navigation works.  
  \* Focus states are visible.  
  \* Mobile navigation works.  
  \* Forms are accessible.  
  \* Heading order is logical.  
  \* No horizontal overflow exists at tested widths.  
  \* Reduced-motion behavior is respected.  
  \* All meaningful images have useful alt text.  
  \#\# SEO  
  \* Every canonical page has unique metadata.  
  \* Canonicals use the production domain.  
  \* Open Graph metadata is accurate.  
  \* Sitemap includes only canonical public pages.  
  \* No unsupported structured data is added.  
  \---  
  \# Validation  
  Run any existing repository validation or acceptance scripts that still apply.  
  Update tests or acceptance checks that are tied to the old four-page clean-environment structure.  
  At minimum:  
  1\. Start a local static server.  
  2\. Open every canonical route.  
  3\. Open every redirect route.  
  4\. Verify desktop navigation.  
  5\. Verify mobile navigation.  
  6\. Verify both forms’ markup and payload field names.  
  7\. Verify all internal links.  
  8\. Verify all asset paths.  
  9\. Check the browser console.  
  10\. Check responsive layouts.  
  11\. Search for obsolete clean-environment terminology.  
  12\. Search for unsupported credibility claims.  
  13\. Validate \`sitemap.xml\`.  
  14\. Confirm \`robots.txt\`.  
  15\. Confirm \`CNAME\`.  
  16\. Confirm the Formspree endpoint remains unchanged.  
  17\. Confirm the archive branch was not modified.  
  Do not claim live form delivery was tested unless an actual submission was made and verified.  
  Do not claim visual browser testing that was not performed.  
  \---  
  \# Completion and Pull Request  
  When complete:  
  1\. Commit all changes with a clear message, such as:  
  \`\`\`text  
  Pivot website to custom manufacturing tooling  
  \`\`\`  
  2\. Open a pull request against \`main\`.  
  3\. Do not merge it.  
  4\. Provide a completion report containing:  
  \* Summary of the new positioning  
  \* Branch name  
  \* Commit SHA  
  \* Pull request link or number  
  \* Files added  
  \* Files modified  
  \* Files removed  
  \* Historical assets restored  
  \* New routes  
  \* Redirect routes  
  \* Documentation changes  
  \* Form changes  
  \* Validation performed  
  \* Results  
  \* Any remaining missing information  
  \* Any limitations that could not be resolved  
  Explicitly confirm:  
  \* The archive branch was not changed.  
  \* \`CNAME\` was not changed.  
  \* The Formspree endpoint was preserved.  
  \* No CEC, CET, CEW, HEPA, cleanroom, or clean-staging positioning remains on the active public site.  
  \* No fake projects, customers, results, testimonials, or certifications were added.  
  \* No AI-generated, stock, competitor, or externally sourced project imagery was added.  
  \* The CMM fixture is presented honestly.  
  \* The work was not merged into \`main\`.

