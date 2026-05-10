# Claude Code Kickoff — ARSC USMC Field Reference

This is the kickoff document for handing the ARSC USMC Field Reference project to Claude Code. It assumes Code has access to the four planning files in this directory:

- `PROJECT_PLAN.md` — vision, governance, architecture, OPSEC checklist, phasing
- `CONTENT_OUTLINE.md` — structural map of every page and section
- `DIAGRAM_SPEC.md` — full specification for the interactive Role 2 SVG
- `CONTENT_DRAFTS.md` — v1 draft content for every page, plus structured data files

Use this document as the entry-point prompt. The other four are reference inputs.

---

## How to use this document

Read this file end-to-end first. Then read each of the four reference files in full before writing any code. Do not skim. The plan and the content drafts are the source of truth; do not invent additional pages, ELOs, doctrinal references, or content that is not present in those files.

Where a draft contains a `{/* TBD: ... */}` marker, **preserve the marker**. Do not invent content to fill it. The marker is a known-gap signal for CDR Ford to address.

---

## Project context

- **Owner**: CDR Brian S. Ford, MC, USN (Chief Medical Officer, 1st Medical Battalion).
- **Audience**: USMC personnel, primarily 1st Med Bn check-ins. Joint use is additive.
- **Access tier**: public, no CAC required. OPSEC-bounded content only.
- **Tone**: professional, doctrinal, plainspoken. Active voice. No marketing copy.

---

## Phased build

Build in four phases. Do not start a phase before the prior phase is complete and committed.

---

### Phase 1 — Scaffolding

**Goal**: a deployable Astro Starlight site with no content, no diagram. Just the framework wired up to Vercel.

1. Initialize an Astro Starlight project in this directory (`npm create astro@latest -- --template starlight`).
2. Configure `astro.config.mjs`:
   - Site title: `ARSC USMC Field Reference`
   - Description from `PROJECT_PLAN.md` Section 1
   - Sidebar grouping per `PROJECT_PLAN.md` Section 6.4:
     - "Start here" — index, About
     - "Patient flow nodes" — the 9 nodes in flow order
     - "Cross-cutting TLOs" — Team Development, Trauma Integration, Clinical Ops
     - "Standards & Expectations" — index, then three sub-groups: SOPs, Expectations, Training & Qualifications. Each sub-group is a collapsible Starlight sidebar group; in v1 each contains only its own index page until CDR Ford supplies PDFs.
     - "Reference" — ELO Crosswalk, Doctrine, CPGs, Contributing
     - "Project" — Changelog
3. Set up TypeScript strict mode and Prettier.
4. Add a `.github/workflows/` deployment workflow if appropriate, or rely on Vercel's GitHub integration.
5. Create a `README.md` at the project root summarizing the project, pointing to `PROJECT_PLAN.md`.
6. Create `OPSEC_CHECKLIST.md` at the project root using the checklist in `PROJECT_PLAN.md` Section 8.
7. Initialize a Git repo and make a commit: `chore: scaffold Starlight site`.
8. Set up Vercel deployment. Confirm the site builds and deploys to a preview URL.

**Acceptance**: Vercel deploy is green; site is reachable; sidebar shows the configured groups (with placeholder pages); no console errors.

---

### Phase 2 — Content stubs and structured data

**Goal**: every page that the final site will have, present as a stub, populated from `CONTENT_DRAFTS.md`.

1. Create `src/data/role2-nodes.json` — copy verbatim from `CONTENT_DRAFTS.md` ("Role 2 nodes JSON" section).
2. Create `src/data/elo-crosswalk.json` — copy verbatim from `CONTENT_DRAFTS.md` ("ELO crosswalk JSON" section).
3. For each page in `CONTENT_DRAFTS.md`, create the corresponding MDX file at the path indicated by the comment header:
   - `src/content/docs/index.mdx`
   - `src/content/docs/about.mdx`
   - `src/content/docs/team-development.mdx`
   - `src/content/docs/trauma-integration.mdx`
   - `src/content/docs/clinical-ops.mdx`
   - `src/content/docs/elo-crosswalk.mdx`
   - `src/content/docs/doctrine.mdx`
   - `src/content/docs/cpgs.mdx`
   - `src/content/docs/contributing.mdx`
   - `src/content/docs/changelog.mdx`
   - `src/content/docs/nodes/austere-prep.mdx`
   - `src/content/docs/nodes/prepare-to-receive.mdx`
   - `src/content/docs/nodes/triage.mdx`
   - `src/content/docs/nodes/stp-dcr.mdx`
   - `src/content/docs/nodes/frss-dcs.mdx`
   - `src/content/docs/nodes/holding.mdx`
   - `src/content/docs/nodes/prolonged-holding.mdx`
   - `src/content/docs/nodes/evac-erc.mdx`
   - `src/content/docs/nodes/mortuary-affairs.mdx`
4. Create the Standards & Expectations section pages from `CONTENT_DRAFTS.md`:
   - `src/content/docs/standards/index.mdx` — section index
   - `src/content/docs/standards/sops/index.mdx` — SOPs sub-index
   - `src/content/docs/standards/expectations/index.mdx` — Expectations sub-index
   - `src/content/docs/standards/training/index.mdx` — Training & Qualifications sub-index
   - `src/content/docs/standards/_template.mdx` — template document page showing how to embed a PDF using the `PdfEmbed` component (kept as `_template` so it's not published; serves as the pattern Code follows when CDR Ford supplies actual PDFs)
   - Create the directory `public/standards/` with a placeholder `README.md` explaining that PDFs go here, organized as `public/standards/sops/{slug}.pdf`, `public/standards/expectations/{slug}.pdf`, `public/standards/training/{slug}.pdf`.
5. The homepage, ELO Crosswalk, and Standards pages reference custom components (`Role2Diagram`, `EloCrosswalkTable`, `PdfEmbed`) that don't exist yet. For Phase 2, create stub components that render placeholder text. The actual `Role2Diagram` is implemented in Phase 3, `EloCrosswalkTable` and `PdfEmbed` in Phase 4.
6. Add an "OPSEC reviewed" date placeholder to every node and TLO page footer. Use `{/* TBD */}` consistent with the drafts.
7. Verify all internal links resolve and that the sidebar navigation matches `PROJECT_PLAN.md` Section 6.4.
8. Commit: `feat: add all page stubs and structured data`.

**Acceptance**: every page from the sitemap renders; navigation works; no broken internal links; build is green; no console errors.

---

### Phase 3 — Interactive Role 2 diagram

**Goal**: implement the `Role2Diagram` component per `DIAGRAM_SPEC.md`.

1. Read `DIAGRAM_SPEC.md` end-to-end.
2. Create `src/components/Role2Diagram.astro` (or `.tsx` as a React island if interaction requires client-side state — for v1 plain SVG with anchor wrappers is sufficient).
3. Source node data from `src/data/role2-nodes.json` rather than hardcoding inside the component.
4. Implement:
   - All 9 nodes at the specified coordinates with the specified labels.
   - All 13 edges with correct routing (orthogonal/elbow) and styling (solid for routine flow, dashed for contingent).
   - Both cross-cutting bands (top and bottom) with clickable labels routing to the TLO pages.
   - The title and subtitle above the top band.
   - Hover and focus visual states per the spec.
   - Keyboard tab order in patient-flow order.
   - Screen-reader title and prose summary.
5. Test rendering on viewport widths 320px, 768px, 1200px.
6. Test keyboard navigation through all interactive elements.
7. Test hover and focus states meet WCAG AA contrast.
8. Embed the component on `src/content/docs/index.mdx` (already imported in the draft).
9. Run the diagram-spec acceptance checklist (`DIAGRAM_SPEC.md`, "Build acceptance criteria").
10. Commit: `feat: interactive Role 2 patient flow diagram`.

**Acceptance**: every item in the diagram-spec acceptance checklist is satisfied. The site is now a recognizable v1.

---

### Phase 4 — Custom components and final polish

**Goal**: implement the `EloCrosswalkTable` and `PdfEmbed` components, run a full review pass, and prepare for review.

1. Implement `src/components/EloCrosswalkTable.astro`:
   - Reads `src/data/elo-crosswalk.json`.
   - Renders a sortable table with columns: ID, TLO, ELO text, Primary node (linked), Secondary nodes (linked), Coverage status.
   - Sortable by clicking column headers (client-side, with a small island if Astro static SSG isn't enough).
   - Accessible: proper table semantics, keyboard-navigable sort controls, aria-sort attributes.
2. Embed on `src/content/docs/elo-crosswalk.mdx`.
3. Implement `src/components/PdfEmbed.astro` per the **PdfEmbed component specification** below.
4. Confirm the Standards `_template.mdx` page renders the `PdfEmbed` component correctly with a placeholder PDF (e.g., a test PDF placed at `public/standards/test.pdf` for development; remove before final commit if not part of the v1 publication).
5. Add a custom 404 page that suggests returning to the homepage and links to the sitemap.
6. Add a site-wide footer with the disclaimer (short version) and a "last updated" timestamp.
7. Run Lighthouse against the deployed site. Target ≥ 95 in Performance, Accessibility, Best Practices, SEO.
8. Verify the OPSEC checklist (in `OPSEC_CHECKLIST.md`) is referenced from the About page and from the Contributing page.
9. Update the README with deployment instructions and contribution workflow.
10. Commit: `feat: custom components and final polish`.

**Acceptance**: site is ready for CDR Ford's review; OPSEC checklist visible; Lighthouse scores meet targets; all `{/* TBD */}` markers preserved (not invented over); `PdfEmbed` renders correctly on desktop and mobile (or falls back gracefully to a download link on mobile browsers that cannot render PDFs inline).

---

## PdfEmbed component specification

**Component**: `PdfEmbed.astro`
**Location**: `src/components/PdfEmbed.astro`
**Used by**: every Standards document page (under `/src/content/docs/standards/{category}/{slug}.mdx`).

### Purpose

Render an embedded PDF document with metadata header and graceful fallback. Used to display CDR Ford's command SOPs, expectation letters, and training/qualification standards as the documents themselves, preserving original formatting and signatures.

### Props

```ts
interface Props {
  src: string;            // Path to the PDF, e.g. "/standards/sops/mascal.pdf"
  title: string;          // Display title for the document
  version?: string;       // Optional version string, e.g. "v2.1"
  effectiveDate?: string; // Optional ISO date the document took effect
  lastReviewed?: string;  // Optional ISO date of last review
  owner?: string;         // Optional owning unit / authority, e.g. "1st Med Bn / CMO"
  pages?: number;         // Optional page count
  height?: string;        // Optional iframe height; default "80vh"
}
```

### Markup structure

```html
<div class="pdf-embed-wrapper">
  <header class="pdf-meta">
    <h2>{title}</h2>
    <dl class="pdf-meta-list">
      {version && <dt>Version</dt><dd>{version}</dd>}
      {effectiveDate && <dt>Effective</dt><dd>{effectiveDate}</dd>}
      {lastReviewed && <dt>Last reviewed</dt><dd>{lastReviewed}</dd>}
      {owner && <dt>Owner</dt><dd>{owner}</dd>}
      {pages && <dt>Pages</dt><dd>{pages}</dd>}
    </dl>
    <div class="pdf-actions">
      <a href={src} target="_blank" rel="noopener">Open in new tab</a>
      <a href={src} download>Download PDF</a>
    </div>
  </header>

  <object data={src} type="application/pdf" class="pdf-frame" aria-label={title} style={`height: ${height}`}>
    <div class="pdf-fallback">
      <p>This browser cannot display the PDF inline (common on mobile). Use the links below:</p>
      <ul>
        <li><a href={src} target="_blank" rel="noopener">Open in new tab</a></li>
        <li><a href={src} download>Download PDF</a></li>
      </ul>
    </div>
  </object>
</div>
```

### Behavior

- On desktop browsers: PDF renders inline via the browser's native PDF plugin.
- On mobile browsers: many do not render PDFs inline within `<object>`. The fallback content displays automatically; users tap the open-in-new-tab or download link.
- The download link uses the `download` attribute so the file saves with its server filename.
- Open-in-new-tab uses `rel="noopener"` for security.

### Styling

- Metadata header is visually distinct from the surrounding page — light background block with subtle border.
- Title in `<h2>` matches site typography.
- Definition list (`<dl>`) renders as a compact two-column grid where space allows; stacks on narrow viewports.
- Actions row uses button-style links (text links acceptable; consistent with Starlight defaults).
- PDF frame has a thin border and rounded corners matching site theme.
- Mobile breakpoint (~640px): metadata stacks vertically; PDF frame height reduces to 60vh; the "Open in new tab" link is the visually emphasized primary action since inline rendering often fails.

### Accessibility

- `<object>` carries `aria-label` with the document title.
- Fallback content is screen-reader accessible by default (browsers that fail to render the object expose its inner content).
- All links are keyboard-focusable with clear focus rings.
- Metadata structure (`<dl>` / `<dt>` / `<dd>`) is semantically correct for screen readers.

### Usage example (in MDX)

```mdx
---
title: MASCAL Standard Operating Procedure
description: 1st Medical Battalion MASCAL SOP, current version.
sidebar:
  label: MASCAL SOP
---

import PdfEmbed from '../../../../components/PdfEmbed.astro';

<PdfEmbed
  src="/standards/sops/mascal.pdf"
  title="MASCAL Standard Operating Procedure"
  version="v2.1"
  effectiveDate="2026-03-15"
  lastReviewed="2026-04-01"
  owner="1st Med Bn / CMO"
  pages={12}
/>

## Notes

Use this SOP in conjunction with the MASCAL plan referenced on the [Prepare to Receive](/nodes/prepare-to-receive/) and [Triage](/nodes/triage/) node pages.
```

### Acceptance

- Component renders inline on desktop in current Chromium, Firefox, and Safari.
- Component falls back gracefully to a download link on iOS Safari and Android Chrome (which often do not render PDFs in `<object>`).
- Metadata header displays correctly with all combinations of optional props.
- Component is keyboard-navigable; focus rings are visible.
- Mobile breakpoint behavior matches the spec.

---

## Content rules during build

1. **Do not invent doctrine.** If a TBD marker indicates an unknown publication number or unverified detail, leave it as TBD. CDR Ford will fill it in during review.
2. **Do not exceed the OPSEC scope.** No specific unit locations, no operational specifics, no AMAL line-item NSNs unless already in the publicly-released NAVMED references.
3. **Cite, do not reproduce.** Where the drafts cite a CPG or doctrine document, link to the canonical source. Do not paste guideline content into the site.
4. **Preserve voice and tone.** The drafts establish a particular professional military-medical voice. Do not rewrite for SEO, friendliness, or conversational tone.
5. **Service framing.** USMC primary, joint additive. Do not rewrite to be service-neutral. Where USMC terminology is used (FRSS, STP, MCRP, MAGTF), keep it.

---

## Source hierarchy for research and content expansion

When filling `{/* TBD */}` markers, expanding existing content, or proposing new content (in this build, in subsequent Cowork passes, or in any future research agent's work), preferentially pull from these sources in this order:

1. **Joint Trauma System (JTS)** — Clinical Practice Guidelines, the ARSC Joint Training Standard / Triservice Curriculum, JTS-sanctioned forms, and Joint Publication 4-02 (*Joint Health Services*). The JTS CPGs are the operational standard of care for combat casualty care and are the most authoritative source for clinical content.
2. **USMC Role 2 doctrine** — MCRP 4-11.1G (*Health Service Support TTPs*), MCO 6000.20 (*Health Services Concept of Operations*), MCRP 3-40A.7 (*MAGTF Health Service Support*), MCWP 5-10 (*Marine Corps Planning Process*), and current Marine Corps doctrinal publications. These are the primary references for service-specific organization, planning, and operations.
3. **Military medical ethics** — the Defense Medical Ethics application, Joint Chiefs of Staff ethics guidance where published, and the military medical ethics literature (peer-reviewed). Preferred for any content addressing ELOs in the Team Development & Dynamics TLO touching on ethical principles, expectant management, MEDROE prioritization, or similar topics.
4. **Other publicly releasable Service medical doctrine** — Army (FM 4-02), Navy (BUMEDINST series), and Air Force medical doctrine where it covers shared joint concepts. Use only where the JTS or USMC sources do not address the question, and prefer the joint formulation when one exists.
5. **Open peer-reviewed literature** — for clinical or operational topics where doctrine is silent or evolving (e.g., walking blood bank optimization, REBOA in austere settings, prolonged casualty care evidence base). Cite the publication; do not present consensus opinion as doctrine.

**Do not** use:
- Wikipedia, blog posts, social media, or commercial healthcare websites as primary sources. They may provide orientation but are not citable.
- Doctrine that is restricted (FOUO, CUI, classified). The site is public.
- Service publications that have been superseded. Always confirm current edition before citing.

When a TBD marker calls for a publication number or edition, the expected behavior is: confirm the current version against an authoritative source, then update the citation. If the version cannot be confirmed from publicly accessible sources, leave the TBD in place with a note like `{/* TBD: confirm current edition — could not verify publicly */}`.

---

## Visual and editorial defaults

- Theme: Starlight default with minor adjustments. Subtle dark/light theme. No bright marketing palette. A muted Marine Corps green or operational neutral accent is acceptable.
- Typography: Starlight defaults.
- No analytics in v1 (re-add via Vercel Analytics or Plausible if CDR Ford requests).
- No service-mark or insignia imagery that would imply official endorsement.

---

## What "done" looks like for v1

- Site is publicly accessible at the chosen domain (or a temporary `*.vercel.app` URL pending domain transfer).
- All 19 content pages exist and render content from `CONTENT_DRAFTS.md`.
- Interactive Role 2 diagram on the homepage routes to all node pages.
- Both cross-cutting band labels route to TLO pages.
- ELO crosswalk renders the full mapping with sortable columns.
- Sidebar reflects the sitemap.
- Disclaimer is visible on the About page and in the site footer.
- OPSEC checklist is committed and referenced.
- Repo is public on GitHub with a clear README.
- Build passes; Lighthouse passes; no console errors; mobile-responsive.

The v1 site is then handed back to CDR Ford for content review, OPSEC walk-through, and TBD-filling. v1 is not the final site; v1 is the platform on which v2 content production runs.

---

## After v1 — handoff back to CDR Ford

When v1 is deployed, produce a concise handoff note covering:

1. Deployed URL.
2. Repo URL.
3. Total count of `{/* TBD */}` markers and a list of file:line locations.
4. Any deviations from the spec (with rationale).
5. Recommended next priorities for v2 (e.g., specific node pages where doctrinal verification is most pressing; image and diagram production list).

---

*End of Claude Code Kickoff v0.1.*
