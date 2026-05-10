# ARSC USMC Field Reference

A public, web-based reference and onboarding resource for 1st Medical Battalion personnel that organizes the Austere Resuscitative Surgical Care (ARSC) framework around the Marine Corps Role 2 patient-flow construct.

**Live site:** [usmc-arsc.org](https://usmc-arsc.org) *(domain pending registration)*

**Status:** v1 scaffold — content population in progress.

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

See [CONTRIBUTING.md](src/content/docs/contributing.mdx) or the live [Contributing page](/contributing/) on the site.

All contributions are reviewed against the OPSEC checklist before merge.

---

## Project plan and architecture

Full planning documentation lives in `planning/`:

- `planning/PROJECT_PLAN.md` — vision, governance, architecture, phasing
- `planning/CONTENT_OUTLINE.md` — structural map of every page and section
- `planning/DIAGRAM_SPEC.md` — interactive Role 2 SVG specification
- `planning/CONTENT_DRAFTS.md` — v1 draft content for all pages
- `planning/CLAUDE_CODE_KICKOFF.md` — development phasing instructions
