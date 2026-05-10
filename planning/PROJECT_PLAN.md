# ARSC USMC Reference Site — Project Plan

**Working title**: ARSC USMC Field Reference (final naming TBD)
**Document version**: v0.1 — initial planning draft
**Document owner**: CDR Brian S. Ford, MC, USN — CMO, 1st Medical Battalion, 1st MLG
**Status**: Pre-development planning. Content outline maintained separately in `CONTENT_OUTLINE.md`.

---

## 1. Vision and Scope

A public, web-based reference and onboarding resource for 1st Medical Battalion personnel that organizes the Austere Resuscitative Surgical Care (ARSC) framework around the Marine Corps Role 2 patient-flow construct. The site coalesces ARSC doctrinal, personnel, equipment, and procedural content onto a clickable Role 2 diagram, and binds each node in the patient flow to the relevant ARSC Joint Training Standard Terminal and Enabling Learning Objectives (TLOs/ELOs).

**Design tenet**: the Role 2 patient flow is the spine. ARSC content hangs off each node. Cross-cutting TLOs (Team Development & Dynamics, Trauma System Integration) wrap around the flow rather than living as standalone text.

**Primary purpose**:

- Standardize and consolidate ARSC content for USMC personnel assigned to STP, FRSS, and Holding capability sets.
- Provide a single-URL onboarding resource a sailor can use before NIPR provisioning.
- Demonstrate that every ARSC ELO is covered, and show where in the patient flow it manifests.

**Primary audience**: 1st Med Bn check-ins — corpsmen, physicians, nurses, surgical technicians, anesthesia providers, support personnel. Spans junior-enlisted to O-6.

**Secondary audience (additive)**: 1st MLG and broader I MEF medical personnel; joint and tri-service Role 2 community where the doctrine is shared.

**Explicitly out of scope (v1)**:

- Classified content of any kind.
- Command-internal SOPs not approved for public release.
- AMAL line-item NSN data unless already in publicly released JTS or NAVMED references.
- Current or planned operational specifics.
- Replacement for any official doctrinal publication. The site references and links to canonical doctrine; it does not reproduce it.

---

## 2. Audience and Use Cases

| User | Primary use case |
|------|------------------|
| New corpsman reporting to Charlie Company | Pre-arrival read-ahead — orient to STP, FRSS, Holding mission and where they fit |
| Surgeon checking in to FRSS | Refresh DCS doctrine, Role 2 trauma system integration, JTS CPG links |
| Battalion Surgeon / SMO | Cross-walk ARSC ELOs to training plan; identify content gaps |
| Predeployment training lead | Use ELO crosswalk to scope training events; pull doctrine references for read-ahead |
| External (joint / tri-service) reader | Reference how USMC organizes Role 2 around ARSC; doctrinal index |

**Critical use case**: a new check-in receives a single URL by email or text, opens it on a phone, and within 10 minutes has a working mental model of the Role 2 construct and where they fit in it.

---

## 3. Governance and Positioning

**Framing**: community professional reference, authored by CDR Ford, drawing on publicly released USMC and Joint doctrine. Not an official DoD or Service publication. No claim of JTS or BUMED sanction unless and until that is formally pursued and granted.

**Disclaimer (must appear on every page footer and on the About page)**:

> This site is a community professional reference compiled by CDR Brian S. Ford, MC, USN, drawing on publicly released doctrine. It is not an official publication of the Department of Defense, the Department of the Navy, the United States Marine Corps, or the Joint Trauma System. Always defer to current official doctrine. Report errors via [contact link].

**Citation principle**: cite, do not reproduce. Every doctrinal claim links to the canonical source. Quotations are kept short and attributed.

**Source hierarchy**: when researching, expanding content, or filling TBD markers, sources are preferred in this order: (1) Joint Trauma System publications (CPGs, ARSC Joint Training Standard, JTS-sanctioned forms, JP 4-02); (2) USMC Role 2 doctrine (MCRP 4-11.1G, MCO 6000.20, MCRP 3-40A.7, MCWP 5-10); (3) military medical ethics references (Defense Medical Ethics App, JCS ethics guidance, peer-reviewed military medical ethics literature); (4) other publicly releasable Service medical doctrine; (5) open peer-reviewed literature where doctrine is silent. Wikipedia, social media, and commercial healthcare sites are not citable. Restricted (FOUO/CUI/classified) sources are not used. The full source hierarchy and "do not use" list lives in `CLAUDE_CODE_KICKOFF.md`.

**Currency**: every page carries a "last reviewed" date. A simple changelog or version history page lists material updates.

**Peer review pathway**: all content lives as Markdown in a Git repository. External contributors can submit pull requests. Brian retains merge authority. Optional reviewer roles can be added later (e.g., subject-matter reviewers for specific TLOs).

**OPSEC review**: every node page is reviewed against the v1 OPSEC checklist (Section 8) before publication.

---

## 4. Architecture Decisions

### 4.1 Three-layer model

| Layer | Function | Lives in |
|-------|----------|----------|
| Map | Interactive Role 2 patient flow as primary navigation | Custom SVG component on homepage |
| Content | Node pages, TLO pages, references, crosswalks | MDX files in Git repo, rendered by docs framework |
| Audit | ELO crosswalk; doctrine reference index | MDX-rendered tables backed by structured data files |

### 4.2 Why a docs framework, not custom React from scratch

A documentation-site framework gives, for free, what would otherwise have to be built: hub-and-spoke navigation, sidebar, search, theming, dark mode, mobile-responsive layout, sitemap, RSS, and Markdown rendering. The only custom build required is the interactive Role 2 SVG component.

### 4.3 Why MDX in a Git repo, not a database

- Version control is the audit trail (important for doctrinal references).
- Pull-request workflow is the peer-review mechanism.
- No backend to maintain or pay for; static site is free to host.
- Markdown lowers the barrier for non-developer contributors.

### 4.4 Lucid disposition

The current Lucid (`c23d0971-ab85-43ed-8b94-9b52eb5897ce`) has served its purpose as a sketching surface. Going forward:

- **Page 1 patient flow** is reproduced as a hand-coded SVG component on the site homepage. Lucid is no longer the rendering source.
- **Pages 2–4 (TLO/ELO text walls)** are deconstructed into the content outline (`CONTENT_OUTLINE.md`) and migrated into MDX node and TLO pages.
- **Page 5 image** is reviewed for relevance and either incorporated into a node page or retired.
- The Lucid file may be retained as a personal sketching surface or archived. It is not part of the site.

---

## 5. Technology Stack

**Framework**: **Astro Starlight** (recommended) or Docusaurus.

Recommendation: **Astro Starlight** — modern, lighter, better support for embedding interactive components (the Role 2 SVG), excellent Markdown/MDX handling, fast builds, good defaults for documentation sites, easy theming.

**Hosting**: **Vercel** (consistent with prior projects). Free tier is sufficient for a static site of this scale.

**Repository**: GitHub, public. Repo name suggestion: `arsc-usmc-reference`.

**Domain**: GoDaddy registration. Suggested options (verify availability):
- `arsc-reference.org`
- `usmc-arsc.org`
- `role2reference.org`
- `arscfieldreference.org`

**Content format**: MDX. Plain Markdown for prose; MDX where embedded React/Astro components are needed (e.g., the interactive diagram on the homepage).

**Asset hosting**: in-repo for SVG/PNG icons and small images. Larger media (if any later) routed through Vercel's CDN or external.

**Search**: built-in Starlight search (Pagefind) is sufficient for v1.

**Analytics**: Plausible or Vercel Analytics — privacy-respecting, no cookies. Useful to know whether check-ins are actually using it.

**No backend in v1**. No authentication. No database. Static site.

---

## 6. Information Architecture

### 6.1 Top-level pages

```
/                       Homepage — interactive Role 2 diagram
/about                  About, governance, disclaimer
/team-development       Cross-cutting TLO 1 — Team Development & Dynamics
/trauma-integration     Cross-cutting TLO 2 — Trauma System Integration
/clinical-ops           Cross-cutting TLO — Clinical Operations in Austere Environment
/elo-crosswalk          Sortable table — every ELO mapped to nodes
/doctrine               Doctrinal reference index
/cpgs                   JTS CPG library (linked, not reproduced)
/changelog              Version history
```

### 6.2 Role 2 node pages

```
/nodes/austere-prep
/nodes/prepare-to-receive
/nodes/triage
/nodes/stp-dcr
/nodes/frss-dcs
/nodes/holding
/nodes/prolonged-holding
/nodes/evac-erc
/nodes/mortuary-affairs       (was floating Morgue terminator in Lucid)
```

### 6.3 Standards & Expectations (one-stop-shop section)

A dedicated section hosting CDR Ford's command SOPs, expectation documents, and training/qualification standards as embedded PDF documents. Organized into three subcategories so personnel can find what they need quickly.

**Structure**:

```
/standards                              Section index
/standards/sops                         SOPs index
/standards/sops/{slug}                  Individual SOP pages (MASCAL, blood, sterilization, comms, etc.)
/standards/expectations                 Expectations index
/standards/expectations/{slug}          Individual expectation pages (newly reporting, conduct, etc.)
/standards/training                     Training & qualification index
/standards/training/{slug}              Individual training/qual pages (readiness criteria, qual standards, etc.)
```

**Embedding decision (selected)**: embedded PDF viewer.

All Standards documents are embedded as PDFs using a custom `PdfEmbed` component (specified in `CLAUDE_CODE_KICKOFF.md`). The component:

- Renders document metadata (title, version, last reviewed date, owning unit) above the PDF.
- Displays the PDF inline via the browser's native PDF rendering (`<object>` element with iframe fallback).
- Provides "Open in new tab" and "Download PDF" actions for users whose browsers can't render inline (mobile especially).
- Falls back gracefully with a clear download link.

**File location for PDFs**: `/public/standards/{category}/{slug}.pdf`. PDFs are tracked in the Git repository so version history is preserved alongside the page that embeds them.

**OPSEC scope**: every document in this section is publicly releasable as-is, per CDR Ford's determination. Each document is logged against the OPSEC checklist before being added to the repo. Documents that fail the checklist are either held pending redaction or moved to an external CAC-gated alternative.

**Initial document seeding**: pending. CDR Ford supplies the PDFs in batches once the site scaffold is deployed. Code creates the structure (four index pages plus one template document page) in v1; individual document pages are populated in subsequent content passes as PDFs become available.

### 6.4 Sidebar grouping

- **Start here** — homepage, about
- **Patient flow nodes** — the 9 nodes in flow order
- **Cross-cutting TLOs** — Team Dev, Trauma Integration, Clinical Ops
- **Standards & Expectations**
  - Standards index
  - SOPs (sub-group)
  - Expectations (sub-group)
  - Training & Qualifications (sub-group)
- **Reference** — ELO crosswalk, doctrine index, CPG library
- **Project** — changelog, contributing

Detailed page-by-page outline in `CONTENT_OUTLINE.md`.

---

## 7. Visual and Editorial Direction

**Tone**: professional, doctrinal, plainspoken. No marketing copy. No exclamation points. Active voice. Acronyms expanded on first use per page.

**Visual direction**: clean, restrained, high contrast. Default Starlight theme as a starting point with minor brand customization. No Service heraldry that would imply official endorsement. A subtle Marine Corps green or operational neutral palette is acceptable.

**Typography**: Starlight defaults are fine for v1. System sans-serif body, monospace for code/technical references.

**Imagery**: only publicly releasable photos and diagrams. Cite source for every image. Original SVG diagrams preferred where possible. AMAL or equipment photography limited to publicly released material.

**Length discipline**: each node page targets readability on a phone. Long doctrine excerpts are linked rather than embedded.

---

## 8. OPSEC and Publication Review

**Before any node page is published, it must pass this checklist**:

- [ ] No classified content.
- [ ] No CUI / FOUO content.
- [ ] No personally identifiable information of personnel.
- [ ] No specific unit locations, planned operations, or named exercise specifics that aren't already in open press.
- [ ] No NSN-level AMAL detail beyond what's in publicly released NAVMED publications.
- [ ] No SOPs that haven't been approved for public release by 1st Med Bn or higher.
- [ ] Every doctrinal claim has a citation to a publicly released source.
- [ ] Nothing reproduces copyrighted material beyond fair-use citation.
- [ ] If in doubt, route through 1st MLG PAO or Security before publication.

A `OPSEC_REVIEW.md` template lives in the repo. Each node page links to its review record.

---

## 9. Phasing and Milestones

**v0 — Planning (now)**
- This document and `CONTENT_OUTLINE.md` complete.
- Domain decision made.
- Repo created.

**v1 — Proof of concept (target: 1–2 weekends)**
- Astro Starlight scaffold up on Vercel.
- Interactive Role 2 SVG on homepage with click-through to node pages.
- One node fully fleshed out as a worked example: **STP / DCR** (densest, proves the template).
- About / governance / disclaimer pages live.
- ELO crosswalk page with skeleton table.
- Site is publicly accessible at the chosen domain.

**v2 — Content build-out (target: 1–2 months)**
- All 9 node pages populated using the 9-section template.
- All cross-cutting TLO pages populated.
- ELO crosswalk fully populated.
- Doctrine reference index fully populated.
- CPG library linked.
- OPSEC checklist run on every page.

**v3 — Operationalize**
- Onboarding flow for new check-ins (battalion leadership distributes URL on RAD letter).
- Lightweight feedback mechanism.
- Contributor pathway documented.
- Quarterly review cadence.

**v4 (additive, joint scope)**
- Service-neutral language sweep on shared-doctrine pages.
- Decision on whether to seek JTS endorsement or remain a community resource.

---

## 10. Open Decisions

These are deferred until v1 work begins or the question becomes blocking:

1. **Final domain** — pick one of the suggested options or alternative.
2. **Color/visual identity** — Marine Corps green, operational neutral, or other.
3. **"Silver 48" / "Zinc 48" terminology in current Lucid** — confirm USMC-specific holding capability designators and document, or replace with standard ARSC terminology.
4. **Mortuary Affairs node** — full node page vs. brief reference under Disposition. Default in outline: full node page.
5. **ELO additions** — the Lucid currently captures four TLOs. The full ARSC ELT typically includes more. Decide whether to expand to the full ELT or scope to the four currently in hand and grow.
6. **Contributor governance** — solo authorship for v1, or invite specific peer reviewers from the start.
7. **Analytics** — opt in (Plausible/Vercel) or skip entirely for v1.
8. **CO awareness** — formal sign-off, informal heads-up, or neither at v1 launch.

---

## Appendix A — Kickoff Prompt for Claude Code

The full kickoff instructions for Claude Code live in `CLAUDE_CODE_KICKOFF.md`. That document walks Code through a four-phase build (Scaffold → Stubs & Data → Diagram → Crosswalk & Polish) and references the four planning files in this directory as inputs. When starting development, hand Code the folder and prompt with:

> Read `CLAUDE_CODE_KICKOFF.md` first. Then read `PROJECT_PLAN.md`, `CONTENT_OUTLINE.md`, `DIAGRAM_SPEC.md`, and `CONTENT_DRAFTS.md` in full before writing any code. Execute the four phases in order, committing at each phase boundary. Preserve all `{/* TBD */}` markers — do not invent content to fill them.

The kickoff document is comprehensive enough that the prompt above is sufficient.

## Appendix B — Kickoff Prompt for Cowork

Cowork is best used for the content production and review tracking workstream — the file management side, not the code side.

> Use this folder as the working area for the ARSC USMC Reference Site content production. Track:
>
> 1. Status of each node page (drafting / drafted / OPSEC reviewed / published).
> 2. Status of each TLO page.
> 3. Status of each cited doctrine reference (URL verified, last-checked date).
> 4. All `{/* TBD */}` markers in the codebase, with file:line locations and the specific question that needs resolution.
> 5. Open decisions from `PROJECT_PLAN.md` Section 10.
> 6. Any PDFs or scanned doctrinal references gathered for review live in `references/` and are not committed to the public repo.
>
> When asked to draft additional content (a new node, an expanded TLO page, an updated doctrine reference), draft in MDX following the 9-section template documented in `CONTENT_OUTLINE.md`, and place it in the correct `src/content/docs/` location.

---

*End of Project Plan v0.1.*
