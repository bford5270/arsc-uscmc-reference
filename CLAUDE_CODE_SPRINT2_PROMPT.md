# Claude Code Sprint 2 — CPG/Forms Linking + FRSS→Holding Edge

Read `planning/CPG_AND_FORMS_URL_MAP.md` first. This file maps every JTS CPG and form referenced in the site to its direct PDF URL on jts.health.mil.

## Task 1: Link all CPGs and forms to URLs (priority)

Every CPG and form reference across the MDX content should become a live hyperlink. Currently they're plain text.

**Steps:**
1. Read `planning/CPG_AND_FORMS_URL_MAP.md` in full.
2. For each MDX page listed in that file, find the plain-text CPG and form references in the "Relevant CPGs" and "Forms & Documentation" sections.
3. Convert each plain-text reference to a markdown link using the URL from the map. Include the date after each link where available.
4. In `cpgs.mdx`, replace the TBD link with `https://jts.health.mil/index.cfm/CPGs/cpgs`. Add the zip download links and the Top 10 Operational Readiness CPGs link.
5. In `trauma-integration.mdx`, replace the JTS forms TBD with a link to the forms zip.
6. In `doctrine.mdx`, update all doctrinal publication entries with URLs from the "Doctrinal Publications" table. For renumbered pubs, use format: "MCRP 3-40A.7 (formerly MCRP 4-11.1G)". Preserve TBD markers for pubs that couldn't be verified (MCO 6000.20, MCRP 4-11.8, BUMEDINST 6710).
7. Do NOT link CPGs that aren't explicitly referenced in the current page content. Only link what's already mentioned.
8. Preserve all `{/* TBD */}` markers — do not invent content to fill them.

**Pages to update (at minimum):**
- `cpgs.mdx` — JTS CPG library link
- `nodes/triage.mdx` — TCCC guidelines, documentation CPG, TCCC card, MASCAL form, DD 3019
- `nodes/stp-dcr.mdx` — DCR CPG, whole blood, hypothermia, pain management, airway, infection prevention + blood product forms
- `nodes/frss-dcs.mdx` — ARSC CPG, emergency surgery, ERT, REBOA, thoracic, vascular, anesthesia, burns + REBOA form
- `nodes/holding.mdx` — PCC guidelines, nursing interventions, hypothermia, nutrition, VTE prevention + PCC tracker forms
- `nodes/prolonged-holding.mdx` — PCC guidelines, all PFC CPGs, telemedicine, mechanical ventilation + PCC forms
- `nodes/evac-erc.mdx` — en route care, patient packaging, interfacility transport, SMOG + DA4700
- `nodes/austere-prep.mdx` — ARSC CPG
- `nodes/prepare-to-receive.mdx` — MASCAL form, documentation CPG
- `nodes/mortuary-affairs.mdx` — catastrophic brain injury, FRAME CPGs
- `trauma-integration.mdx` — TCCC, ARSC CPG, JTS forms zip
- `team-development.mdx` — FRAME, mental health CPG, Defense Medical Ethics
- `clinical-ops.mdx` — ARSC, hypothermia, radiology, i-STAT
- `doctrine.mdx` — all 9 doctrinal publications

## Task 2: Add FRSS/DCS → Holding edge (e12)

Post-surgical patients flow from FRSS/DCS down to Holding for recovery and monitoring. This edge is missing from the current diagram.

**What to update:**
1. `src/data/role2-nodes.json` — add e12 to the edges array:
```json
{
  "id": "e12",
  "source": "frss-dcs",
  "target": "holding",
  "style": "solid",
  "label": null,
  "waypoints": [[790, 240], [790, 440]]
}
```
2. The SVG diagram component — ensure e12 renders. Route on the RIGHT side of the diagram at x=790 to avoid overlap with e4 (x=720, STP/DCR↔FRSS/DCS) and e5 (x=720, STP/DCR↔Holding).
3. The waypoints route vertically: from FRSS/DCS right side (790, 240) straight down to Holding right side (790, 440). This clears the STP/DCR node which sits between them.

**Routing note:** e4 already runs vertically at x=720 between STP/DCR and FRSS/DCS. e5 runs at x=720 between STP/DCR and Holding. A direct FRSS→Holding edge at x=720 would overlap both. The right-side routing at x=790 avoids this.

## Verification

After both tasks:
1. Run `grep -r "jts.health.mil" src/content/` to confirm CPG links are present across all pages.
2. Run the dev server and verify links render as clickable hyperlinks.
3. Confirm e12 renders on the diagram without overlapping e4 or e5.
4. Commit with message: "feat: link all CPGs/forms to JTS URLs, add FRSS→Holding edge (e12)"
