# ARSC USMC Field Reference — Claude Code Kickoff

## The 5 Planning Documents

| # | File | What it does |
|---|------|-------------|
| 1 | `CLAUDE_CODE_KICKOFF.md` | **Read this first.** Four-phase build spec, content rules, source hierarchy, component specs. |
| 2 | `PROJECT_PLAN.md` | Vision, scope, audience, governance, tech stack (Astro Starlight + Vercel), IA, OPSEC checklist, phasing. |
| 3 | `CONTENT_OUTLINE.md` | Master sitemap, 9-section node page template, ELO master list (46 ELOs across 4 TLOs), doctrinal reference list. |
| 4 | `CONTENT_DRAFTS.md` | Complete v1 MDX draft content for all ~24 pages, plus `elo-crosswalk.json` and `role2-nodes.json`. |
| 5 | `DIAGRAM_SPEC.md` | Interactive SVG spec: 1200x700 viewBox, 9 nodes, 11 edges, 3 cross-cutting bands, accessibility, responsive behavior, full JSON data source. |

## Resolved Design Decisions

These were open in the planning docs but have been decided:

- **Domain**: `usmc-arsc.org` (available on GoDaddy, not yet registered)
- **Edge e9** (STP/DCR → EVAC/ERC direct): Yes, keep it on the diagram.
- **Edge e11** (Triage → Mortuary Affairs, dashed): Yes, add it. Already in DIAGRAM_SPEC.md.
- **Stale JSON warning**: The `role2-nodes.json` in CONTENT_DRAFTS.md has old coordinates. Use the JSON from DIAGRAM_SPEC.md Section 8.2 instead.

## Still Open (non-blocking)

- **Silver 48 / Zinc 48 terminology**: Use as-is in v1, flagged with TBD markers for confirmation.
- **AMAL identifiers**: 631 (STP), 633 (FRSS) used with caveats; Holding AMAL is TBD.
- **Standards PDFs**: Structure built in v1; actual PDFs supplied in later batches.

## Getting Started

### Step 1: Create the GitHub repo

```bash
# If you have gh CLI installed:
gh repo create arsc-usmc-reference --public --description "ARSC USMC Field Reference — Role 2 patient flow documentation site"
cd arsc-usmc-reference

# Or create manually at github.com/new, then:
# git clone <your-repo-url>
# cd arsc-usmc-reference
```

### Step 2: Copy planning files into the repo

```bash
# Copy the 5 planning docs into a /planning directory (they're reference, not site code)
mkdir planning
cp /path/to/arsc-planning-package/*.md planning/
```

### Step 3: Start Claude Code

```bash
claude
```

### Step 4: Give Claude Code this prompt

```
Read `planning/CLAUDE_CODE_KICKOFF.md` first. Then read `planning/PROJECT_PLAN.md`, `planning/CONTENT_OUTLINE.md`, `planning/DIAGRAM_SPEC.md`, and `planning/CONTENT_DRAFTS.md` in full before writing any code.

Key decisions already made:
- Domain: usmc-arsc.org
- Edge e9 (STP/DCR → EVAC/ERC): confirmed, keep it
- Edge e11 (Triage → Mortuary Affairs): confirmed, add it (already in DIAGRAM_SPEC)
- Use the JSON from DIAGRAM_SPEC.md Section 8.2 for node/edge data, NOT the stale role2-nodes.json in CONTENT_DRAFTS.md

Execute the four phases in order, committing at each phase boundary. Preserve all `{/* TBD */}` markers — do not invent content to fill them.
```

That's it. Claude Code will scaffold Astro Starlight, create all MDX stubs, build the interactive SVG diagram, and wire up the ELO crosswalk.
