# Sprint 2 Plan — ARSC USMC Field Reference

**Written**: 2026-05-23  
**Status**: Approved for execution  
**Branch**: create `sprint2` from `main`

---

## Overview

Sprint 2 has five workstreams, ordered by dependency:

| # | Workstream | Description |
|---|-----------|-------------|
| 1 | **CPG / Educational Links** | Convert all plain-text references to live hyperlinks; add Deployed Medicine, Valkyrie, and Gamma resources |
| 2 | **Diagram Edge e12** | Add FRSS/DCS → Holding flow arrow |
| 3 | **SOPs** | Convert 7 provided DOCX files to embedded pages; create stubs for 5 missing SOPs |
| 4 | **Gamma Presentations** | Add Presentations section; embed decks per functional area |
| 5 | **START Triage Game** | Interactive tabletop triage game at `/triage-game/` |

---

## Resource Inventory

### Gamma Folder
- **SOP Role 2 folder**: https://gamma.app/folders/sop-role-2-ru4uavou72bllvl
- **OPMED Curriculum folder**: https://gamma.app/folders/m3xfxrx1mlfcpyz

Gamma embed URL pattern: `https://gamma.app/embed/<slug>` where `<slug>` is the final token in the doc URL.

### Gamma Presentations — Functional Area Mapping

Use the **most recently updated** version when duplicates exist.

| Functional Area | Gamma Title | Doc URL | Embed Slug |
|----------------|------------|---------|------------|
| Triage | MASCAL Triage Principles: START and SALT | https://gamma.app/docs/MASCAL-Triage-Principles-START-and-SALT-x5mpfowjo3m0gi3 | `x5mpfowjo3m0gi3` |
| Prepare to Receive | Mass Casualty (MASCAL) Plan | https://gamma.app/docs/Mass-Casualty-MASCAL-Plan-jk79zhmgwc7x5sh | `jk79zhmgwc7x5sh` |
| STP / DCR | Shock Trauma Platoon (STP) | https://gamma.app/docs/Shock-Trauma-Platoon-STP-s181ri3zthxvm9y | `s181ri3zthxvm9y` |
| FRSS / DCS | Forward Resuscitative Surgical System (FRSS) | https://gamma.app/docs/Forward-Resuscitative-Surgical-System-FRSS-sxxzrqmbkbjst2x | `sxxzrqmbkbjst2x` |
| Holding | Holding Section | https://gamma.app/docs/Holding-Section-m3ode6vex5btb9c | `m3ode6vex5btb9c` |
| Prolonged Holding | Prolonged Casualty Care: First 72 Hours | https://gamma.app/docs/Prolonged-Casualty-Care-First-72-Hours-l0zfhtdek2h9ia1 | `l0zfhtdek2h9ia1` |
| EVAC / ERC | Tactical Evacuation: Categorization & Decision-Making | https://gamma.app/docs/Tactical-Evacuation-Categorization-Decision-Making-e1gjga0o2v2wo19 | `e1gjga0o2v2wo19` |
| Austere Prep | Roles of Care Continuum | https://gamma.app/docs/Roles-of-Care-Continuum-9fb4da7oqdc225t | `9fb4da7oqdc225t` |
| Mortuary Affairs | *(no dedicated deck — see supplemental)* | — | — |
| Battalion COC | Battalion Combat Operations Center (COC) | https://gamma.app/docs/Battalion-Combat-Operations-Center-COC-5oc6wj2yrbeat8y | `5oc6wj2yrbeat8y` |
| Blood / Cold Chain | Cold Chain Management | https://gamma.app/docs/Cold-Chain-Management-ctt86d6rngt7uyq | `ctt86d6rngt7uyq` |
| Blood Products / WBB | Blood Products, Walking Blood Bank & MTP | https://gamma.app/docs/Blood-Products-Walking-Blood-Bank-Massive-Transfusion-Protocol-4pdgse0epd17qbz | `4pdgse0epd17qbz` |

### Gamma Presentations — Supplemental (link from relevant node pages)

| Title | Relevant node(s) | Embed Slug |
|-------|-----------------|------------|
| TCCC Phases: Care Under Fire / TFC / TACCEVAC | triage, trauma-integration | `nina239w55ul7tw` |
| Damage Control Resuscitation Principles | stp-dcr, frss-dcs | `37l9r3p8eu1s9eq` |
| Whole Blood Collection & Administration | stp-dcr | `mfok8rd2m9vh2c3` |
| Tube Thoracostomy & Needle Decompression | stp-dcr, frss-dcs | `k6q8xlm62ughrgt` |
| Surgical Cricothyrotomy | frss-dcs | `480wenykgjmrfeh` |
| eFAST Exam | frss-dcs, stp-dcr | `j2iaufu48q5zv6z` |
| Regional Anesthesia in the Field | frss-dcs | `vspzyme76h8qeo8` |
| Field Laboratory Basics | clinical-ops, stp-dcr | `4es14bh8tzfkgd1` |
| Tele-consultation & Autonomous Decision-Making | prolonged-holding | `25ldmgjj00rhqa0` |
| Tourniquet Application & Conversion | triage | `nrno2md35k2h9u5` |
| Field Wound Management | stp-dcr, holding | `nnkeowoxh44gq14` |
| Documentation in Austere Settings | triage, stp-dcr, clinical-ops | `m7pfyuqnadky8l8` |
| Improvised Medical Care in Austere Settings | austere-prep | `w3sxnzt3fwipk0l` |
| MASCAL at a Battalion Aid Station | prepare-to-receive | `tlcuv6ju9pso1nq` |
| MASCAL on a Surface Ship | prepare-to-receive | `1k0gv1l4ni87znc` |
| JTS CPGs: Navigation & Application | cpgs | `hy27jm1cq1nt3m1` |
| Blast Injury & MACE 2 Concussion Protocols | austere-prep, stp-dcr | `wunvbep4jnlakvw` |
| Heat Injury Recognition & Treatment | austere-prep | `6413kbzhj4iy3jo` |
| Cold Injury Recognition & Treatment | austere-prep | `uahf4zsqvhktv2a` |
| Ethics of Operational Medicine | team-development | `q2fdbxtybptm6ei` |
| Cold Chain & Pharmacy Logistics in Austere Settings | stp-dcr, holding | `d2sznesgo4t6hyd` |

### Valkyrie Training (https://valkyrietraining.org/)

Valkyrie is a whole-blood / walking blood bank training program. All 8 modules are directly relevant to STP/DCR, FRSS/DCS, and Holding.

| Module | Topic | URL |
|--------|-------|-----|
| Module 1 | Introduction to Whole Blood Transfusion | https://valkyrietraining.org/curriculum (anchor: Module 1) |
| Module 2 | Indications for Emergency Transfusion | https://valkyrietraining.org/curriculum |
| Module 3 | Blood Types and Incompatibilities | https://valkyrietraining.org/curriculum |
| Module 4 | Donor Screening and Risk Stratification | https://valkyrietraining.org/curriculum |
| Module 5 | Adverse Transfusion Reactions | https://valkyrietraining.org/curriculum |
| Module 6 | Select Topics in FWB Transfusion | https://valkyrietraining.org/curriculum |
| Module 7 | Conducting Practical Exercises | https://valkyrietraining.org/curriculum |
| Module 8 | Blood Storage and Transportation (optional) | https://valkyrietraining.org/curriculum |

**Note**: Individual module deep-link URLs were not resolvable from public scraping; link to https://valkyrietraining.org/curriculum as the entry point. Include a note that personnel should register or contact admin@valkyrietraining.org for access.

**Primary use on the site**: Add a "Valkyrie Training" callout on `stp-dcr.mdx`, `frss-dcs.mdx`, and `holding.mdx`. Reference the Whole Blood curriculum for any page with blood management content. Also relevant to the Cold Chain and Blood Management SOPs.

### SOPs — Files Provided

| File | SOP Topic | Node page(s) |
|------|----------|-------------|
| `MASCAL SOP.docx` | Mass Casualty / MASCAL | prepare-to-receive, triage |
| `STP_SOP.docx` | Shock Trauma Platoon Operations | stp-dcr |
| `FRSS_SOP.docx` | FRSS Operations | frss-dcs |
| `HOLDING_SOP.docx` | Holding / PCC | holding, prolonged-holding |
| `Blood SOP.docx` | Blood Management / Walking Blood Bank | stp-dcr, frss-dcs, holding |
| `1stMedBn Cold Chain SOP.docx` | Cold Chain Logistics | stp-dcr, holding |
| `COC_SOP.docx` | Battalion Combat Operations Center | austere-prep, prepare-to-receive |

### SOPs — Stubs Still Needed (no file provided)

| SOP Topic | Node page(s) |
|----------|-------------|
| Triage Officer SOP | triage |
| Sterilization SOP | frss-dcs |
| EVAC / Patient Movement SOP | evac-erc |
| Mortuary Affairs / Decedent Handling SOP | mortuary-affairs |
| Narcotics Management SOP | frss-dcs, holding |
| CBRNE SOP | austere-prep |

---

## Workstream 1 — CPG / Educational Links

### Source priority order (highest → lowest)
1. JTS CPGs and forms (primary clinical authority)
2. Valkyrie Training (whole blood — highly specific, excellent quality)
3. Deployed Medicine / deployedmedicine.com (TCCC and clinical modules)
4. Your Gamma presentations (unit-specific education, link from supplemental sections)
5. CHEMM, MCPEL, Navy Medicine Directives (doctrinal / regulatory)

### Page-by-page work

#### `cpgs.mdx`
- Replace TBD JTS library link → `https://jts.health.mil/index.cfm/CPGs/cpgs`
- Add: CPG Index PDF, Complete Zip A-H, Complete Zip I-Z, Top 10 Operational Readiness CPGs zip
- Add: Deployed Medicine home link as a companion educational platform callout
- Add: Gamma presentation — [JTS CPGs: Navigation & Application](https://gamma.app/docs/Joint-Trauma-System-CPGs-Navigation-Application-hy27jm1cq1nt3m1)

#### `nodes/triage.mdx`
- **CPGs**: TCCC Guidelines → Allogy link; Documentation Requirements → JTS PDF
- **Forms**: DD 1380 TCCC Card; DD 1380 Instructions; MASCAL/Austere Team Resuscitation Record; MASCAL Instructions; DD 3019; DD 3019 Instructions
- **Doctrinal ref**: MCRP 4-11.1G → update to "MCRP 3-40A.7 (formerly MCRP 4-11.1G)" with MCPEL link
- **Deployed Medicine**: `https://www.deployedmedicine.com/tccc` — TCCC module
- **Gamma supplemental**: TCCC Phases, MASCAL Triage Principles, Tourniquet Application, Documentation in Austere Settings
- **SOP link**: MASCAL SOP, Triage Officer SOP stub
- **⚠️ Gap**: No Deployed Medicine module specifically for MASCAL triage officer decision-making or MEDROE. Flag with TBD comment.

#### `nodes/stp-dcr.mdx`
- **CPGs**: 10 CPGs → all have URLs in the map; convert each
- **Forms**: 8 forms → all have URLs; convert each
- **Deployed Medicine**: link `https://www.deployedmedicine.com/tccc` for TCCC integration; `https://www.deployedmedicine.com` for broader DCR modules
- **Valkyrie**: Add "Whole Blood Training" callout box linking `https://valkyrietraining.org/curriculum` — modules 1–7 are directly applicable; Module 8 for cold chain
- **Gamma primary**: Shock Trauma Platoon (STP)
- **Gamma supplemental**: Damage Control Resuscitation Principles, Whole Blood Collection & Administration, Tube Thoracostomy & Needle Decompression, eFAST Exam, Field Wound Management, Documentation in Austere Settings, Cold Chain & Pharmacy Logistics, Blood Products/WBB/MTP
- **SOP links**: STP Operations SOP, Blood Management SOP, Cold Chain SOP
- **⚠️ Gap**: No single Deployed Medicine module covering the full STP/DCR workflow. Valkyrie covers whole blood comprehensively; DCR more broadly is served by the JTS CPGs.

#### `nodes/frss-dcs.mdx`
- **CPGs**: 15 CPGs → convert all
- **Forms**: Aortic Occlusion Procedure Notes (REBOA/ERT)
- **Deployed Medicine**: link main site; no dedicated FRSS/DCS module confirmed
- **Valkyrie**: Add "Whole Blood Training" callout linking `https://valkyrietraining.org/curriculum` — intraoperative blood management; donor screening before activation
- **Gamma primary**: Forward Resuscitative Surgical System (FRSS)
- **Gamma supplemental**: Damage Control Resuscitation Principles, Tube Thoracostomy & Needle Decompression, Surgical Cricothyrotomy, eFAST Exam, Regional Anesthesia in the Field, Blood Products/WBB/MTP
- **SOP links**: FRSS Operations SOP, Blood Management SOP, Sterilization SOP stub
- **⚠️ Gap**: Open Abdomen Management CPG links to the CPG library index rather than a direct PDF. Flag "direct PDF URL needed."
- **⚠️ Gap**: AMAL 633 TBD and T/O TBD — preserve, do not fill.
- **⚠️ Gap**: Anesthesia for austere environments — no public Deployed Medicine module specific to this. JTS CPG ID40 is the primary resource; flag that Deployed Medicine coverage is thin here.

#### `nodes/holding.mdx`
- **CPGs**: 7 CPGs → convert all
- **Forms**: PCC Nursing Care Tracker; Prolonged Field Care Card Worksheet
- **Deployed Medicine**: `https://www.deployedmedicine.com` — PCC / PFC modules where verifiable
- **Valkyrie**: Add "Whole Blood Training" callout linking `https://valkyrietraining.org/curriculum` — Module 5 (Adverse Transfusion Reactions) and Module 8 (Blood Storage/Transportation) are directly applicable to Holding management
- **Gamma primary**: Holding Section
- **Gamma supplemental**: Field Wound Management, Cold Chain & Pharmacy Logistics
- **SOP links**: Holding/PCC SOP, Blood Management SOP, Cold Chain SOP, Narcotics SOP stub
- **⚠️ Gap**: Nutrition CPG (Aug 2016) is the oldest referenced CPG on the site; note this is current published guidance but flag the age.
- **⚠️ Gap**: No Deployed Medicine module for VTE prevention in austere environments. Flag.

#### `nodes/prolonged-holding.mdx`
- **CPGs**: 10 CPGs → convert all
- **Forms**: PCC Nursing Care Tracker; Prolonged Field Care Card Worksheet
- **Deployed Medicine**: PFC/PCC modules where verifiable
- **Gamma primary**: Prolonged Casualty Care: First 72 Hours
- **Gamma supplemental**: Tele-consultation & Autonomous Decision-Making
- **SOP links**: Holding/PCC SOP (same as Holding)
- **⚠️ Gap**: Telemedicine CPG — no link to the actual DoD telemedicine platform. Flag.
- **⚠️ Gap**: Crush syndrome and burn PFC CPGs — no Deployed Medicine educational module found. Flag.

#### `nodes/evac-erc.mdx`
- **CPGs**: 4 CPGs → convert all
- **Forms**: DA4700; DA4700 Instructions
- **Deployed Medicine**: link main site; no confirmed dedicated EVAC/ERC module
- **Gamma primary**: Tactical Evacuation: Categorization & Decision-Making
- **SOP links**: EVAC/Patient Movement SOP stub
- **⚠️ Gap**: No Deployed Medicine module for joint aeromedical evacuation. Flag.
- **⚠️ Gap**: Navy-Marine Corps CASEVAC/MEDEVAC doctrinal interface — no single public reference covers this cleanly. Flag for future content page.

#### `nodes/austere-prep.mdx`
- **CPGs**: ARSC CPG → convert
- **Deployed Medicine**: link main site; no confirmed dedicated ARSC/austere-prep module
- **Gamma primary**: Roles of Care Continuum
- **Gamma supplemental**: Improvised Medical Care in Austere Settings, Heat Injury Recognition & Treatment, Cold Injury Recognition & Treatment, Blast Injury & MACE 2
- **SOP links**: COC SOP, CBRNE SOP stub
- **⚠️ Gap**: This is the thinnest page doctrinally. Only one CPG explicitly referenced. Flag for content expansion sprint: pre-deployment checklists, AMAL verification, exercise/rehearsal references.

#### `nodes/prepare-to-receive.mdx`
- **CPGs**: Documentation Requirements CPG → convert; MASCAL form → convert
- **Deployed Medicine**: no confirmed MASCAL-specific module. Flag.
- **Gamma primary**: Mass Casualty (MASCAL) Plan
- **Gamma supplemental**: MASCAL at a Battalion Aid Station, MASCAL on a Surface Ship, Battalion COC
- **SOP links**: MASCAL SOP, COC SOP
- **⚠️ Gap**: MASCAL notification tree and alert criteria are referenced but no linked public resource. Flag; unit SOP is the primary reference.

#### `nodes/mortuary-affairs.mdx`
- **CPGs**: Catastrophic Non-Survivable Brain Injury; FRAME CPG; FRAME Handouts → convert all
- **Doctrinal**: Add JP 4-06 (Mortuary Affairs) link — `https://www.mortuary.af.mil/Portals/31/documents/jp4_06.pdf`
- **Deployed Medicine**: no module found for mortuary affairs. Flag.
- **Gamma primary**: *(no dedicated deck exists)* — link to the Gamma folder instead; use FRAME CPG PDF as the primary resource
- **SOP links**: Mortuary Affairs/Decedent Handling SOP stub
- **⚠️ Gap**: Most resource-sparse node. MCRP 4-11.8 reference is likely a wrong designator; flag for correction or removal.
- **⚠️ Gap**: FRAME program has very limited online presence outside JTS. PDF handouts are the primary reference; appropriate.

#### `trauma-integration.mdx`
- **CPGs**: TCCC Guidelines → Allogy; ARSC CPG → JTS PDF
- **Forms**: Complete Zip of JTS Forms → replace TBD
- **Deployed Medicine**: `https://www.deployedmedicine.com/tccc`
- **Gamma supplemental**: TCCC Phases, Roles of Care Continuum

#### `team-development.mdx`
- **Resources**: FRAME CPG; Acute Mental Health CPG; Defense Medical Ethics Center link
- **Gamma supplemental**: Ethics of Operational Medicine
- **⚠️ Gap**: CRM in surgical teams — no public Deployed Medicine module found. Flag. FRAME is the primary CRM-adjacent resource for this audience.

#### `clinical-ops.mdx`
- **CPGs**: ARSC; Hypothermia; Radiology; i-STAT → convert all
- **Gamma supplemental**: Field Laboratory Basics, Documentation in Austere Settings
- **⚠️ Gap**: i-STAT and point-of-care lab operations — no Deployed Medicine module found specific to ARSC/Role 2 lab. Flag.

#### `doctrine.mdx`
- Update all 9 doctrinal pub entries with URLs from `CPG_AND_FORMS_URL_MAP.md`
- Renumbered pubs: "MCRP 3-40A.7 (formerly MCRP 4-11.1G)" etc.
- Preserve TBD markers for: MCO 6000.20, MCRP 4-11.8, BUMEDINST 6710

---

## Workstream 2 — Diagram Edge e12 (FRSS/DCS → Holding)

**What**: Add the post-surgical patient flow arrow from FRSS/DCS down to Holding.

**Data change** (`src/data/role2-nodes.json`):
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

**Routing**: right-side routing at x=790 to clear e4 and e5 which run at x=720.

**Verification**: render dev server; confirm no overlap with e4 or e5.

---

## Workstream 3 — SOPs

### Converting provided DOCX files

The 7 DOCX files at `/Users/brianford/Desktop/Role_2_SOPs.zip` (already extracted to `/tmp/Role_2_SOPs/`) need to be:
1. Converted to PDF (via LibreOffice CLI or Pandoc) OR embedded directly as DOCX — **preferred: convert to PDF** for consistent browser-embedded viewing via the existing `PdfEmbed` component
2. Placed at `public/standards/sops/<slug>.pdf`
3. Given a corresponding MDX page at `src/content/docs/standards/sops/<slug>.mdx` using the `PdfEmbed` component pattern from `_template.mdx`
4. Linked from their node pages

**Conversion command** (run once):
```bash
cd /tmp/Role_2_SOPs
for f in *.docx; do
  libreoffice --headless --convert-to pdf "$f" 2>/dev/null || \
  python3 -m docx2pdf "$f" 2>/dev/null
done
```

### SOP file → site page mapping

| DOCX file | Slug | Public path | Node page(s) |
|-----------|------|-------------|--------------|
| MASCAL SOP.docx | `mascal` | `public/standards/sops/mascal.pdf` | prepare-to-receive, triage |
| STP_SOP.docx | `stp-ops` | `public/standards/sops/stp-ops.pdf` | stp-dcr |
| FRSS_SOP.docx | `frss-ops` | `public/standards/sops/frss-ops.pdf` | frss-dcs |
| HOLDING_SOP.docx | `holding-pcc` | `public/standards/sops/holding-pcc.pdf` | holding, prolonged-holding |
| Blood SOP.docx | `blood-management` | `public/standards/sops/blood-management.pdf` | stp-dcr, frss-dcs, holding |
| 1stMedBn Cold Chain SOP.docx | `cold-chain` | `public/standards/sops/cold-chain.pdf` | stp-dcr, holding |
| COC_SOP.docx | `coc-ops` | `public/standards/sops/coc-ops.pdf` | austere-prep, prepare-to-receive |

### SOP stubs (no file yet)

| Stub slug | Topic | Node page(s) |
|-----------|-------|-------------|
| `triage-officer` | Triage Officer SOP | triage |
| `sterilization` | Sterilization SOP | frss-dcs |
| `evac-patient-movement` | EVAC / Patient Movement | evac-erc |
| `mortuary-affairs` | Mortuary Affairs / Decedent Handling | mortuary-affairs |
| `narcotics` | Narcotics Management | frss-dcs, holding |
| `cbrne` | CBRNE | austere-prep |

### Sidebar update

Update the `Standards & Expectations → SOPs` group in `astro.config.mjs` to list all 13 SOP pages (7 real + 6 stubs) under the existing SOPs index page.

### OPSEC

Run OPSEC checklist on every SOP page before committing. SOPs must not contain PII, specific individual names in operational roles, classified material, or FOUO markings. If any DOCX contains such content, create a stub-only page and note "SOP under review" rather than embedding the document.

---

## Workstream 4 — Gamma Presentations

### New sidebar section

Add after "Resources" in `astro.config.mjs`:
```
Presentations
  ├── All Presentations      →  /presentations/
  ├── Austere Prep / R2RA
  ├── Prepare to Receive
  ├── Triage
  ├── STP / DCR
  ├── FRSS / DCS
  ├── Holding (Silver 48)
  ├── Prolonged Holding (Zinc 48)
  ├── EVAC / ERC
  └── Mortuary Affairs
```

Also add a second sidebar section:
```
OPMED Curriculum
  └── Full Curriculum Folder  →  /presentations/opmed-curriculum/
```

### Gamma embed pattern

Each functional area page (`src/content/docs/presentations/<slug>.mdx`) should:
1. Include the Gamma iframe at full width, height 600px
2. Provide an "Open in Gamma" link for fullscreen
3. List supplemental presentations as a bulleted link list below the embed
4. Note the author (CDR Brian S. Ford, MC, USN) and last updated date
5. Link back to the corresponding functional area node page

**Iframe template**:
```html
<iframe
  src="https://gamma.app/embed/<SLUG>"
  style="width:100%;height:600px;border:none;border-radius:8px;"
  allow="fullscreen"
  title="<TITLE>"
></iframe>
```

### Mortuary Affairs — no dedicated deck

For Mortuary Affairs, the presentations page should:
- Link to the full SOP Role 2 folder: https://gamma.app/folders/sop-role-2-ru4uavou72bllvl
- Link to FRAME CPG PDF as the primary educational resource
- Note that no dedicated Gamma deck exists yet

### OPMED Curriculum page

Create `/presentations/opmed-curriculum/` as a standalone page that:
- Links to the OPMED Curriculum Gamma folder: https://gamma.app/folders/m3xfxrx1mlfcpyz
- Lists the full curriculum presentation inventory from the folder (title + link for each)
- Notes this is the Operational Family Medicine / SMO curriculum (separate from the Role 2 clinical curriculum)

### Node page integration

Add a "Presentation" `<Aside type="tip">` callout at the bottom of each functional area node page, linking to the corresponding Presentations page.

---

## Workstream 5 — START Triage Game

### Hosting

New page at `/triage-game/` with sidebar entry under a new "Training Tools" section.

### Link to existing Gamma deck

Add a link to the [MASCAL Triage Principles: START and SALT](https://gamma.app/docs/MASCAL-Triage-Principles-START-and-SALT-x5mpfowjo3m0gi3) deck at the top of the triage game page as a pre-game didactic resource.

### START Algorithm (implemented in the game)

```
1. Can the casualty walk? → YES → T3 Minimal (Green) — STOP
2. Is the casualty breathing?
   → NO → Reposition airway → Still no? → T4 Expectant (Black) — STOP
   → NO → Reposition airway → Now breathing? → T1 Immediate (Red) — STOP
3. Respiratory rate > 30/min → T1 Immediate (Red) — STOP
4. No radial pulse OR capillary refill > 2 sec → T1 Immediate (Red) — STOP
5. Cannot follow simple commands → T1 Immediate (Red) — STOP
6. All above normal → T2 Delayed (Yellow)
```

### Casualty vignette data (`src/data/triage-game-scenarios.json`)

```json
[
  {
    "id": 1,
    "narrative": "Walking toward you holding a bloody arm. GSW graze to left forearm. Alert, talking, asking for help.",
    "vitals": { "ambulatory": true, "rr": 18, "rrQuality": "unlabored", "radialPulse": "present", "capRefill": "<2s", "followsCommands": true },
    "answer": "T3",
    "criterion": "Ambulatory",
    "teaching": "Walking wounded are T3 Minimal by START. Sort them first, treat last."
  },
  {
    "id": 2,
    "narrative": "Prone, blast injury to both legs, tourniquets in place. Moaning. RR 24, pulse present.",
    "vitals": { "ambulatory": false, "rr": 24, "rrQuality": "labored", "radialPulse": "present", "capRefill": "<2s", "followsCommands": true },
    "answer": "T2",
    "criterion": "All parameters within threshold",
    "teaching": "Limb amputation with tourniquet, alert, and stable vitals is T2 Delayed. Priority for next surgical slot when resources allow."
  },
  {
    "id": 3,
    "narrative": "Supine, penetrating abdominal injury. RR 34, no radial pulse palpable.",
    "vitals": { "ambulatory": false, "rr": 34, "rrQuality": "rapid/shallow", "radialPulse": "absent", "capRefill": ">2s", "followsCommands": true },
    "answer": "T1",
    "criterion": "RR > 30 AND no radial pulse",
    "teaching": "Two criteria both trigger T1 here. Either one alone is sufficient — identify the first criterion met and stop."
  },
  {
    "id": 4,
    "narrative": "Apneic on arrival. No visible chest rise. Airway repositioned — still no breathing. No pulse.",
    "vitals": { "ambulatory": false, "rr": 0, "rrQuality": "apneic", "radialPulse": "absent", "capRefill": ">2s", "followsCommands": false, "airwayRepositionedAndStillApneic": true },
    "answer": "T4",
    "criterion": "Apneic after airway repositioning",
    "teaching": "T4 Expectant. In MASCAL, CPR is not initiated — resources go to salvageable casualties. Comfort measures only."
  },
  {
    "id": 5,
    "narrative": "Walking with hands over ears. Complaining of ringing and muffled hearing after blast. No other apparent injury.",
    "vitals": { "ambulatory": true, "rr": 16, "rrQuality": "normal", "radialPulse": "present", "capRefill": "<2s", "followsCommands": true },
    "answer": "T3",
    "criterion": "Ambulatory",
    "teaching": "Blast concussion without other injury is T3. Reassess for MACE 2 criteria once immediate casualties are stabilized."
  },
  {
    "id": 6,
    "narrative": "Unresponsive. Agonal respirations at 6/min. Radial pulse palpable. Does not follow commands.",
    "vitals": { "ambulatory": false, "rr": 6, "rrQuality": "agonal", "radialPulse": "present", "capRefill": "<2s", "followsCommands": false },
    "answer": "T1",
    "criterion": "Cannot follow commands (and RR < normal range — though START triggers on >30, agonal breathing also indicates critical status via mental status criterion)",
    "teaching": "Mental status criterion: cannot follow commands → T1. Agonal breathing also signals impending arrest. This casualty needs immediate airway and breathing intervention."
  },
  {
    "id": 7,
    "narrative": "Burns to ~40% BSA, anterior torso and arms. Alert, in significant pain. RR 22, pulse present.",
    "vitals": { "ambulatory": false, "rr": 22, "rrQuality": "normal", "radialPulse": "present", "capRefill": "<2s", "followsCommands": true },
    "answer": "T2",
    "criterion": "All parameters within threshold",
    "teaching": "Major burns with intact vitals and mental status are T2. Burns will worsen with time — early EVAC is critical. Do not underestimate based on current stability."
  },
  {
    "id": 8,
    "narrative": "Penetrating chest wound, trachea deviated, absent breath sounds on right. RR 36, no radial pulse.",
    "vitals": { "ambulatory": false, "rr": 36, "rrQuality": "rapid/labored", "radialPulse": "absent", "capRefill": ">2s", "followsCommands": true },
    "answer": "T1",
    "criterion": "RR > 30 AND no radial pulse",
    "teaching": "Tension pneumothorax presentation. T1. Needle decompression is a triage-level intervention — can be performed before moving to treatment."
  },
  {
    "id": 9,
    "narrative": "Traumatic amputation below knee, tourniquet applied and effective. Alert, conversational. RR 18, radial pulse present.",
    "vitals": { "ambulatory": false, "rr": 18, "rrQuality": "normal", "radialPulse": "present", "capRefill": "<2s", "followsCommands": true },
    "answer": "T2",
    "criterion": "All parameters within threshold",
    "teaching": "Effectively tourniquet-controlled amputation with stable vitals is T2. Don't upgrade based on mechanism alone — use the algorithm."
  },
  {
    "id": 10,
    "narrative": "Blunt head trauma. GCS Motor 5 (localizes pain). RR 20, radial pulse present. Does not follow commands.",
    "vitals": { "ambulatory": false, "rr": 20, "rrQuality": "normal", "radialPulse": "present", "capRefill": "<2s", "followsCommands": false },
    "answer": "T1",
    "criterion": "Cannot follow commands",
    "teaching": "TBI with altered mental status is T1 by the commands criterion. Neurosurgical capability is the rate-limiting resource; triage officer must flag for EVAC to higher echelon."
  },
  {
    "id": 11,
    "narrative": "Found apneic. Airway repositioned — breathing resumes at RR 18. Radial pulse present, cap refill 1.8s. Follows commands.",
    "vitals": { "ambulatory": false, "rr": 18, "rrQuality": "normal after repositioning", "radialPulse": "present", "capRefill": "<2s", "followsCommands": true, "airwayRepositionedAndNowBreathing": true },
    "answer": "T1",
    "criterion": "Required airway repositioning to breathe",
    "teaching": "START designates T1 Immediate for any casualty who required airway repositioning to restore breathing — even if vitals are otherwise acceptable. The airway is not self-maintaining."
  },
  {
    "id": 12,
    "narrative": "Walking toward the CCP, hand pressed to shoulder. GSW to right shoulder, controlled with direct pressure. Alert, asking about his buddy.",
    "vitals": { "ambulatory": true, "rr": 16, "rrQuality": "normal", "radialPulse": "present", "capRefill": "<2s", "followsCommands": true },
    "answer": "T3",
    "criterion": "Ambulatory",
    "teaching": "Ambulatory casualty = T3 Minimal. Direct the patient to the T3 area and move on."
  },
  {
    "id": 13,
    "narrative": "Blast injury. Apneic on arrival. Airway repositioned. Still apneic. No radial pulse.",
    "vitals": { "ambulatory": false, "rr": 0, "rrQuality": "apneic", "radialPulse": "absent", "capRefill": ">2s", "followsCommands": false, "airwayRepositionedAndStillApneic": true },
    "answer": "T4",
    "criterion": "Apneic after airway repositioning",
    "teaching": "No pulse and apneic after repositioning = T4 Expectant. In MASCAL, this is not a survivable injury within your current resource envelope."
  },
  {
    "id": 14,
    "narrative": "Crush injury to pelvis. Cannot move lower extremities. RR 28, no radial pulse palpable. Moaning.",
    "vitals": { "ambulatory": false, "rr": 28, "rrQuality": "rapid", "radialPulse": "absent", "capRefill": ">2s", "followsCommands": true },
    "answer": "T1",
    "criterion": "No radial pulse",
    "teaching": "Pelvic crush with absent radial pulse = T1. Hemorrhagic shock. Apply pelvic binder if available. High priority for STP."
  },
  {
    "id": 15,
    "narrative": "Facial burns, airway intact, no stridor. RR 26, radial pulse present, cap refill 1.5s. Follows commands.",
    "vitals": { "ambulatory": false, "rr": 26, "rrQuality": "normal", "radialPulse": "present", "capRefill": "<2s", "followsCommands": true },
    "answer": "T2",
    "criterion": "All parameters within threshold",
    "teaching": "Current vitals are T2. Facial burns with inhalation risk — monitor airway closely. A worsening airway can upgrade this to T1. Document and reassess."
  }
]
```

### Game mechanics

**Mode A — Individual / Self-Study**
- Player works through all 15 vignettes sequentially
- For each: reads narrative + vital signs card → selects T1 / T2 / T3 / T4
- Immediate feedback after each: correct/incorrect + which START criterion determined the answer + teaching point
- Score summary at end (e.g., "13/15 — Review vignettes 7 and 11")
- "Restart" button to replay with randomized order

**Mode B — Tabletop / Facilitator**
- Facilitator view: one vignette displayed at a time
- Pause for group discussion before revealing
- "Reveal Answer" button shows correct triage, criterion, and teaching point
- "Next Casualty" advances to next vignette
- No score tracking in Mode B (discussion-based)
- Facilitator can jump to any vignette by number

**Color coding**: T1 = red background chip, T2 = yellow, T3 = green, T4 = black/gray

### Technical implementation

- Astro page with vanilla JS (no React/Preact dependency needed — keep it simple)
- Scenario data loaded from `src/data/triage-game-scenarios.json` (imported at build time)
- All logic in a single `<script>` block within the `.astro` page
- Mobile-responsive — suitable for use on phones during a tabletop

### Sidebar placement

```
Training Tools
  └── START Triage Game  →  /triage-game/
```

---

## Execution order

1. **Workstream 2** (diagram edge) — isolated, low risk
2. **Workstream 1** (links) — page-by-page, commit after each page
3. **Workstream 3** (SOPs) — convert DOCXs, create pages, update sidebar
4. **Workstream 4** (Gamma presentations) — build structure; all URLs now known
5. **Workstream 5** (triage game) — most new code; do last

---

## Remaining open items

| Item | Status |
|------|--------|
| Valkyrie individual module URLs | No public deep links found — link to /curriculum as the entry point |
| Deployed Medicine module URLs | Verify at runtime before committing; mark TBD if 404 |
| Mortuary Affairs Gamma deck | No dedicated deck exists — use folder link + FRAME CPG as primary |
| DOCX → PDF conversion | Run LibreOffice or Pandoc at the start of Workstream 3 |
| OPSEC review | Required on every SOP page before commit |

---

## Definition of done

- [ ] All CPG and form plain-text references are live hyperlinks across all 14 pages
- [ ] Valkyrie callout boxes present on stp-dcr, frss-dcs, and holding
- [ ] Gamma supplemental links present on all applicable node pages
- [ ] All unresolvable doctrinal pub references marked TBD with a note
- [ ] Diagram renders e12 without overlap with e4 or e5
- [ ] 7 SOP PDFs converted and embedded; 6 SOP stubs created; all linked from node pages
- [ ] Presentations section in sidebar; all 9 functional area pages exist with iframes
- [ ] OPMED Curriculum page exists and links to the Gamma folder
- [ ] `/triage-game/` is live; 15 scenarios correct; both Mode A and Mode B work
- [ ] `npm run build` passes with no errors
- [ ] OPSEC checklist reviewed on all new pages
