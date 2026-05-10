# ARSC USMC Field Reference

A public, web-based reference and onboarding resource for 1st Medical Battalion personnel that organizes the Austere Resuscitative Surgical Care (ARSC) framework around the Marine Corps Role 2 patient-flow construct.

**Live site:** [usmc-arsc.org](https://usmc-arsc.org) *(domain pending registration)*

**Status:** v1 complete — interactive diagram, all content pages, ELO crosswalk. Pending CDR Ford's content review and TBD-filling pass.

---

## What this is

The site consolidates ARSC doctrinal, personnel, equipment, and procedural content onto a clickable Role 2 diagram, and binds each node in the patient flow to the relevant ARSC Joint Training Standard Terminal and Enabling Learning Objectives (TLOs/ELOs).

**Primary audience:** 1st Med Bn check-ins — corpsmen, physicians, nurses, surgical technicians, anesthesia providers, support personnel. Spans junior-enlisted to O-6.

**Disclaimer:** This site is a community professional reference compiled by CDR Brian S. Ford, MC, USN, drawing on publicly released doctrine. It is not an official publication of the Department of Defense, the Department of the Navy, the United States Marine Corps, or the Joint Trauma System.

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro Starlight](https://starlight.astro.build) |
| Content | MDX files in this repo |
| Hosting | [Vercel](https://vercel.com) |
| Domain | usmc-arsc.org (pending) |

---

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

---

## Deployment

This repo is connected to Vercel via GitHub integration. Every push to `main` triggers a production deploy. Pull requests generate preview deployments.

**Vercel setup (one-time):**
1. Import the repo at [vercel.com/new](https://vercel.com/new).
2. Vercel auto-detects Astro — no build configuration required.
3. Set the production domain to `usmc-arsc.org` once the domain is registered.

---

## Project structure

```
planning/          Planning documents (read-only reference; not deployed)
src/
  components/      Astro components (Role2Diagram, EloCrosswalkTable, PdfEmbed)
  content/docs/    All site pages as MDX files
  data/            Structured data (elo-crosswalk.json, role2-nodes.json)
  styles/          Custom CSS (accent color overrides)
public/
  standards/       PDF documents for Standards & Expectations section
OPSEC_CHECKLIST.md Review checklist for all content before publication
```

---

## Contributing

See the live [Contributing page](https://usmc-arsc.org/contributing/) on the site for the full workflow.

**Short version:**

1. Fork the repo and create a descriptive branch.
2. Edit or add MDX files under `src/content/docs/`.
3. Run the OPSEC checklist (`OPSEC_CHECKLIST.md`) on any new or substantively changed page.
4. Submit a pull request with a description of the change and source citations.

To add a Standards document (SOP, expectation letter, or training standard):

1. Place the PDF at `public/standards/{category}/{slug}.pdf` (after OPSEC review).
2. Create a page at `src/content/docs/standards/{category}/{slug}.mdx` using the `PdfEmbed` component — see `src/content/docs/standards/_template.mdx` for the pattern.
3. Add the page to the sidebar group in `astro.config.mjs`.

All contributions are reviewed for accuracy, OPSEC compliance, doctrinal alignment, and editorial consistency before merging. Pull requests that lack source citation will be returned for revision.

---

## Project plan and architecture

Full planning documentation lives in `planning/`:

- `planning/PROJECT_PLAN.md` — vision, governance, architecture, phasing
- `planning/CONTENT_OUTLINE.md` — structural map of every page and section
- `planning/DIAGRAM_SPEC.md` — interactive Role 2 SVG specification
- `planning/CONTENT_DRAFTS.md` — v1 draft content for all pages
- `planning/CLAUDE_CODE_KICKOFF.md` — development phasing instructions
