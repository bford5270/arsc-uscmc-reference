# ARSC USMC Reference Site — Content Outline

**Companion document to**: `PROJECT_PLAN.md`
**Document version**: v0.1
**Status**: detailed outline; content production has not begun.

This document specifies every page of the site, the sections inside each page, and the ELO mapping. Subsequent development passes (in Cowork and Claude Code) draw their scope from this outline.

---

## Master Sitemap

```
/                            Homepage with interactive Role 2 diagram
/about                       About, disclaimer, governance, contact
/changelog                   Site version history

CROSS-CUTTING TLO PAGES
/team-development            Team Development & Dynamics
/trauma-integration          Trauma System Integration
/clinical-ops                Clinical Operations in the Austere Environment

PATIENT FLOW NODE PAGES (in flow order)
/nodes/austere-prep          Austere Prep / R2RA
/nodes/prepare-to-receive    Preparing to receive patients
/nodes/triage                Triage
/nodes/stp-dcr               STP / DCR
/nodes/frss-dcs              FRSS / DCS
/nodes/holding               Holding (Silver 48)
/nodes/prolonged-holding     Prolonged Holding (Zinc 48)
/nodes/evac-erc              EVAC / ERC
/nodes/mortuary-affairs      Mortuary Affairs / Decedent Affairs

STANDARDS & EXPECTATIONS (one-stop-shop section, embedded PDFs)
/standards                   Section index
/standards/sops              SOPs sub-index
/standards/sops/{slug}       Individual SOP pages — populated as PDFs are added
/standards/expectations      Expectations sub-index
/standards/expectations/{slug}   Individual expectation pages
/standards/training          Training & qualifications sub-index
/standards/training/{slug}   Individual training/qual pages
(_template.mdx exists as the document-page pattern; not published)

REFERENCE PAGES
/elo-crosswalk               Sortable ELO mapping table
/doctrine                    Doctrinal reference index
/cpgs                        JTS CPG library (linked, not reproduced)
/contributing                Contributor pathway
```

---

## Node-page template (9 sections)

Every node page uses this structure. Sections that don't apply for a given node are explicitly marked "Not applicable" rather than deleted, so the template is uniform across pages.

```
1. Mission                      One-sentence functional purpose, USMC doctrinal frame.
2. Personnel & Task Organization Who staffs this node. Roles. Cross-training expectations.
3. Equipment & Logistics        AMAL set, key equipment, time/blood/power constraints.
4. Doctrinal References         USMC primary; Joint additive. Linked, not reproduced.
5. Clinical Practice Guidelines Linked JTS CPGs that apply at this node.
6. Decision Points              Move / hold / escalate criteria. Triggers for next node.
7. Linked ELOs                  Table — TLO, ELO #, ELO text, primary vs secondary.
8. Forms & Documentation        JTS-sanctioned forms, patient tracking, reporting.
9. Reference Imagery            Photos, diagrams, layouts. All publicly releasable.
```

A page footer carries: last reviewed date, OPSEC review record link, contributor credit.

---

## Homepage (/)

**Purpose**: present the Role 2 patient flow as the primary navigation and orient the reader in under 60 seconds.

**Sections**:

1. **Hero**: site name, one-sentence mission ("A reference for USMC personnel on the ARSC framework, organized around the Role 2 patient flow.")
2. **Interactive Role 2 diagram** (the centerpiece):
   - Reproduces the structure from current Lucid Page 1.
   - Nodes (clickable, each routes to `/nodes/<slug>`):
     - Austere Prep / R2RA
     - Preparing to receive patients
     - Triage
     - STP / DCR
     - FRSS / DCS (above STP, the surgical capability)
     - Holding (Silver 48)
     - Prolonged Holding (Zinc 48)
     - EVAC / ERC
     - Mortuary Affairs (was Morgue terminator)
   - Edges reproduce the connections in the current Lucid (Austere Prep → Prepare to Receive → Triage → STP/DCR; STP/DCR → FRSS/DCS; STP/DCR → Holding → EVAC; Holding → Prolonged Holding → EVAC; clinical nodes → Mortuary Affairs as appropriate).
   - **Outer band / wrap-around**: Team Development & Dynamics, Trauma System Integration, Clinical Operations in Austere Environment as persistent overlays. Clickable to their respective pages. Visually represented as a ring or band surrounding the patient flow rather than as floating boxes.
3. **What this site is / is not**: short paragraph with the disclaimer.
4. **For new check-ins**: 3-step orientation — "(1) start with the diagram, (2) read your assigned node, (3) skim the cross-cutting TLO pages."
5. **For training leads**: link to ELO Crosswalk and Doctrine Index.

---

## About (/about)

**Sections**:

1. Purpose and scope.
2. Governance and authorship statement.
3. Disclaimer (full, prominent).
4. How content is reviewed and updated.
5. How to report errors or contribute.
6. Acknowledgments.
7. Contact.

---

## Cross-cutting TLO Pages

These are the TLOs that aren't tied to a single node — they apply across the whole patient flow. Each page uses a TLO-specific template:

```
1. Overview
2. Why this matters at every node
3. ELOs (full list with explanation)
4. Doctrinal references
5. Practical applications by node (table — short summary of how this TLO shows up at each node)
6. Common gaps and pitfalls
7. Training and assessment notes
```

### /team-development — Team Development & Dynamics

**Source**: ARSC Joint Training Standard, TLO "Team Development & Dynamics" (9 ELOs from current Lucid Page 2).

**ELOs** (verbatim from current Lucid):

1. Analyze relevant CPGs as it relates to team members' skills and practice.
2. Perform team-level cross-training in critical skills.
3. Describe elements of non-traditional roles for team members in the austere environment.
4. Demonstrate crew resource management (CRM).
5. Demonstrate incorporation of supporting personnel.
6. Explain the importance of ARSC team members' familiarization with the military decision-making process and its impact on operational planning.
7. Distinguish between the application of ethical principles in clinical practice and combat casualty care.
8. Discuss key components of individual and ARSC team resilience.
9. Understand personnel task organization (STP, FRSS, Holding).

**Key content threads**:

- USMC-specific task organization for STP, FRSS, and Holding (T/O&E references).
- CRM frameworks applicable to small clinical teams.
- Ethical decision-making in resource-constrained environments — link out to Defense Medical Ethics App (already in Lucid Page 2).
- Resilience framework for forward teams.
- MDMP primer scoped to medical input.

**Doctrinal anchors**:

- MCRP 4-11.1G (Health Service Support TTPs)
- MCO 6000.20 (Health Services Concept of Operations)
- JTS CPG: Performance Improvement
- JTS CPG: Damage Control Resuscitation (CRM application)

### /trauma-integration — Trauma System Integration

**Source**: ARSC Joint Training Standard, TLO "Trauma System Integration" (7 ELOs from current Lucid Page 3).

**ELOs** (verbatim):

1. Describe the deployed trauma system.
2. Describe the relationship between unit location and continuum of care.
3. Describe local medical asset integration.
4. Describe the partner nation trauma system.
5. Demonstrate documentation and reporting.
6. Demonstrate integration of patient tracking system that includes patient identification and confidentiality.
7. Conduct Performance Improvement (PI).

**Key content threads**:

- The Role 1 → Role 2 → Role 3 → Role 4 continuum (USMC-facing explanation).
- R2RA (Role 2 Resuscitative Augmentation) — what it is, where it fits.
- Patient tracking and DoDTR submission workflow.
- Coalition / partner-nation integration considerations (general principles, not specific operations).
- PI cadence and how findings feed back to the team.

**Doctrinal anchors**:

- JP 4-02 (Joint Health Services)
- MCRP 4-11.1G
- DoD Trauma Registry guidance
- JTS CPG: Performance Improvement
- ".zip of all JTS-sanctioned forms" reference (currently a label in Lucid Page 3) — translate into a linked index of those forms.

### /clinical-ops — Clinical Operations in the Austere Environment

**Source**: ARSC Joint Training Standard, TLO "Clinical Operations in the Austere Environment" (15 ELOs from current Lucid Page 4).

**ELOs** (verbatim, abbreviated for outline):

1. Plan a CONOP — mission analysis and COA development.
2. Team security posture.
3. Environmental factors.
4. Contingency / split operations.
5. Unit-specific tactical proficiency.
6. Comprehensive logistics plan.
7. Team equipment familiarization and operation.
8. Medical equipment maintenance plan.
9. Non-medical equipment maintenance and power management.
10. Blood management operation.
11. Narcotics management plan.
12. Accountability of sensitive items.
13. Comprehensive communications plan.
14. Clinical decision-making in austere environment.
15. Military brief to Command authority.

**Note**: many of these ELOs are partially node-specific. The Clinical Ops page covers them at the planning/team-wide level; specific node pages reference back here AND add node-specific implementation detail.

**Doctrinal anchors**:

- MCWP 5-10 (Marine Corps Planning Process / MDMP)
- MCRP 4-11.1G
- JTS CPG: Damage Control Resuscitation (blood management)
- JTS CPG: Walking Blood Bank
- DoD Instruction on controlled substances
- BUMEDINST 6710 series (narcotics management)

---

## Role 2 Node Pages

Each section below is the content scaffold for that node's MDX file. Format: section heading, then bullet outline of what content the section needs.

### /nodes/austere-prep — Austere Prep / R2RA

**1. Mission**: Austere preparation phase of an ARSC team — the period from notification through arrival on objective during which the team prepares to deliver Role 2 capability. Includes Role 2 Resuscitative Augmentation (R2RA) framing.

**2. Personnel & Task Org**: full ARSC team composition; pre-deployment training expectations; pre-mission task org confirmation.

**3. Equipment & Logistics**: AMAL pull and inventory; movement of equipment; pre-mission logistics rehearsal; sustainment estimate.

**4. Doctrinal References**:
- MCWP 5-10 (Marine Corps Planning Process)
- MCRP 4-11.1G
- JP 4-02
- ARSC Joint Training Standard

**5. Clinical Practice Guidelines**: orienting list — full CPG familiarization expected before arrival.

**6. Decision Points**: readiness gates that must be cleared before the team can transition to Prepare to Receive (personnel, equipment, blood, comms).

**7. Linked ELOs**:

| TLO | ELO | Primary or Secondary |
|-----|-----|----------------------|
| Clinical Ops | CO-1 (CONOP, mission analysis, COA) | Primary |
| Clinical Ops | CO-6 (logistics plan) | Primary |
| Clinical Ops | CO-13 (communications plan) | Primary |
| Clinical Ops | CO-15 (military brief to Command) | Primary |
| Trauma Int | TI-2 (continuum of care, unit location) | Primary |
| Trauma Int | TI-3 (local medical asset integration) | Primary |
| Trauma Int | TI-4 (partner nation system) | Primary |
| Prepare to Receive | PR-3 (mission analysis HSS) | Primary |
| Prepare to Receive | PR-4 (Commander SITREP) | Primary |
| Prepare to Receive | PR-10 (movement to/from team location) | Primary |
| Team Dev | TD-6 (MDMP familiarization) | Primary |

**8. Forms & Documentation**: pre-mission checklists (link to JTS standardized forms where they exist).

**9. Reference Imagery**: planning graphic (TBD); R2RA conceptual diagram (TBD — original SVG or licensed).

---

### /nodes/prepare-to-receive — Preparing to receive patients

**1. Mission**: the ARSC team is on station; the period of activity from arrival until casualties begin arriving. Setup, rehearsal, command coordination, contingency planning.

**2. Personnel & Task Org**: assignments by role; battle drills; back-up assignments.

**3. Equipment & Logistics**: equipment setup; blood storage online; oxygen/power; comms checks.

**4. Doctrinal References**:
- MCRP 4-11.1G
- ARSC Joint Training Standard, "Prepare to Receive" TLO
- JTS CPG: Walking Blood Bank (blood readiness)
- JTS CPG: Pre-Hospital Blood Transfusion

**5. CPGs**: pre-staged CPG quick-reference; CBRNE annex; MASCAL annex.

**6. Decision Points**: readiness declaration — what triggers "team is open to receive"; conditions that would delay opening.

**7. Linked ELOs** (this node owns most of the Prepare to Receive TLO):

| TLO | ELO | Primary or Secondary |
|-----|-----|----------------------|
| Prepare to Receive | PR-1 (structured team feedback) | Primary |
| Prepare to Receive | PR-2 (patient flow plan) | Primary |
| Prepare to Receive | PR-9 (communication plan) | Primary |
| Prepare to Receive | PR-11 (MASCAL plan) | Primary |
| Prepare to Receive | PR-12 (CBRNE plan) | Primary |
| Prepare to Receive | PR-13 (contingency plan) | Primary |
| Prepare to Receive | PR-14 (equipment setup) | Primary |
| Prepare to Receive | PR-15 (surgical rehearsal) | Primary |
| Clinical Ops | CO-2 (security posture) | Secondary |
| Clinical Ops | CO-7 (equipment familiarization) | Secondary |

**8. Forms & Documentation**: setup checklist; rehearsal AAR template.

**9. Reference Imagery**: STP layout sketch; FRSS layout sketch; Holding layout sketch (publicly releasable diagrams).

---

### /nodes/triage — Triage

**1. Mission**: rapid sorting of casualties on arrival to determine treatment priority and disposition within the Role 2.

**2. Personnel & Task Org**: triage officer (typically the most experienced provider available); supporting corpsmen; security; documentation.

**3. Equipment & Logistics**: triage tags, pens, hard surface, lighting, comms to STP/FRSS, casualty collection point setup.

**4. Doctrinal References**:
- MCRP 4-11.1G
- JTS CPG: Triage of Casualties
- ARSC TLO "Receive Casualties" (when full ELT is incorporated)
- TCCC framework as feeder

**5. CPGs**: Triage; Damage Control Resuscitation; MASCAL.

**6. Decision Points**: T1/T2/T3/T4 categorization criteria; immediate-vs-delayed surgery routing; expectant management criteria; redirect to Mortuary Affairs.

**7. Linked ELOs**:

| TLO | ELO | Primary or Secondary |
|-----|-----|----------------------|
| Prepare to Receive | PR-5 (MEDROE — special populations) | Primary |
| Prepare to Receive | PR-11 (MASCAL plan execution) | Primary |
| Trauma Int | TI-6 (patient tracking) | Primary |
| Clinical Ops | CO-14 (clinical decision-making in austere environment) | Primary |
| Team Dev | TD-7 (ethics in combat casualty care) | Primary |

**8. Forms & Documentation**: triage tag (DD 1380 or local equivalent); MASCAL tracking sheet.

**9. Reference Imagery**: triage workflow diagram; tagging examples (publicly releasable).

---

### /nodes/stp-dcr — STP / DCR (Shock Trauma Platoon — Damage Control Resuscitation)

**1. Mission**: deliver Damage Control Resuscitation to casualties prior to surgery, in support of FRSS or in lieu of surgery for non-surgical casualties.

**2. Personnel & Task Org**: STP composition per current T/O — Emergency Medicine physician (if assigned), Family Medicine physician, Critical Care nurse, ICU/ED-trained corpsmen, anesthesia provider as available; expanded roles in resource-constrained environments.

**3. Equipment & Logistics**: AMAL 631 (STP) — at the level publicly releasable; blood (cold-stored, walking blood bank); airway and ventilation; ultrasound (link to Ultrasound Image Reference Library when integrated); FAST exam capability.

**4. Doctrinal References**:
- MCRP 4-11.1G
- JTS CPG: Damage Control Resuscitation
- JTS CPG: Pre-Hospital Blood Transfusion
- JTS CPG: Walking Blood Bank
- JTS CPG: Massive Transfusion
- JTS CPG: TXA in Combat Casualty Care
- JTS CPG: Hypothermia Prevention
- JTS CPG: REBOA (where applicable and within scope of practice)

**5. CPGs**: full DCR bundle.

**6. Decision Points**: criteria for surgical referral to FRSS; criteria for direct-to-Holding; criteria for expectant management; transfusion thresholds; airway escalation; ROSC management.

**7. Linked ELOs**:

| TLO | ELO | Primary or Secondary |
|-----|-----|----------------------|
| Clinical Ops | CO-10 (blood management) | Primary |
| Clinical Ops | CO-14 (clinical decision-making) | Primary |
| Clinical Ops | CO-7 (equipment familiarization) | Primary |
| Team Dev | TD-1 (CPG analysis) | Primary |
| Team Dev | TD-2 (cross-training) | Primary |
| Team Dev | TD-4 (CRM) | Primary |
| Team Dev | TD-9 (task org STP) | Primary |
| Trauma Int | TI-5 (documentation/reporting) | Primary |

**8. Forms & Documentation**: TCCC card (DD 1380); Trauma Flow Sheet; transfusion record; DoDTR data fields captured at this stage.

**9. Reference Imagery**: STP layout; resuscitation bay layout; blood storage configuration.

---

### /nodes/frss-dcs — FRSS / DCS (Forward Resuscitative Surgical System — Damage Control Surgery)

**1. Mission**: deliver Damage Control Surgery — life-saving surgical intervention to control hemorrhage and contamination, with definitive surgical care deferred to the next echelon.

**2. Personnel & Task Org**: FRSS composition per current T/O — General Surgeon, Anesthesia provider (CRNA or Anesthesiologist), surgical technician, operating room nurse, perioperative corpsman; surgical-team configuration in resource-constrained operations.

**3. Equipment & Logistics**: AMAL 633 (FRSS) — publicly releasable level; OR setup; sterilization (autoclave / chemical alternatives); anesthesia gas / TIVA capability; surgical instrument sets.

**4. Doctrinal References**:
- MCRP 4-11.1G
- JTS CPG: Damage Control Surgery
- JTS CPG: Damage Control Resuscitation (continued in OR)
- JTS CPG: Wound Management
- JTS CPG: Compartment Syndrome
- JTS CPG: Vascular Injury

**5. CPGs**: damage-control surgical bundle.

**6. Decision Points**: indications for damage control vs definitive surgery; abbreviated laparotomy criteria; temporary closure vs primary closure; transfer-out criteria post-DCS.

**7. Linked ELOs**:

| TLO | ELO | Primary or Secondary |
|-----|-----|----------------------|
| Clinical Ops | CO-7 (equipment familiarization) | Primary |
| Clinical Ops | CO-8 (medical equipment maintenance) | Primary |
| Clinical Ops | CO-10 (blood management — surgical context) | Primary |
| Clinical Ops | CO-14 (clinical decision-making) | Primary |
| Team Dev | TD-2 (cross-training) | Primary |
| Team Dev | TD-4 (CRM) | Primary |
| Team Dev | TD-9 (task org FRSS) | Primary |
| Prepare to Receive | PR-15 (surgical rehearsal) | Primary |

**8. Forms & Documentation**: operative note; anesthesia record; surgical safety checklist; post-op handoff to Holding.

**9. Reference Imagery**: FRSS OR layout; sterilization workflow; instrument set photo (publicly releasable).

---

### /nodes/holding — Holding (Silver 48)

**Note**: "Silver 48" terminology — confirm whether this is a USMC-specific holding capability designator or local convention. Document in v1, replace with standard ARSC terminology if appropriate.

**1. Mission**: post-resuscitative and post-surgical patient holding for a defined period (nominally 48 hours) prior to evacuation, with the goal of physiologic stabilization and preparation for transport.

**2. Personnel & Task Org**: Holding officer-in-charge (typically Family Medicine or Internal Medicine physician); Critical Care nurse; ICU corpsmen; respiratory therapy as available.

**3. Equipment & Logistics**: AMAL for Holding (specify); ventilator capability; monitoring; oxygen sustainment; blood storage and re-warming; pharmacy.

**4. Doctrinal References**:
- MCRP 4-11.1G
- JTS CPG: Damage Control Resuscitation (continued in Holding)
- JTS CPG: Prolonged Casualty Care
- JTS CPG: Ventilator Management
- JTS CPG: Pain, Anxiety, and Delirium

**5. CPGs**: post-resuscitative bundle; analgesia; sedation; transfer prep.

**6. Decision Points**: criteria for transfer to Prolonged Holding (Zinc 48); criteria for evac readiness; criteria for return to OR; expectant management transition.

**7. Linked ELOs**:

| TLO | ELO | Primary or Secondary |
|-----|-----|----------------------|
| Prepare to Receive | PR-6 (individual patient management) | Primary |
| Prepare to Receive | PR-7 (patient holding plan) | Primary |
| Clinical Ops | CO-10 (blood management — sustainment) | Primary |
| Clinical Ops | CO-11 (narcotics management) | Primary |
| Clinical Ops | CO-14 (clinical decision-making) | Primary |
| Trauma Int | TI-5 (documentation/reporting) | Primary |
| Trauma Int | TI-6 (patient tracking) | Primary |
| Team Dev | TD-7 (ethics — expectant management) | Primary |

**8. Forms & Documentation**: ICU flow sheet; medication administration record; transfer summary template.

**9. Reference Imagery**: Holding bay layout; ventilator setup; medication storage configuration.

---

### /nodes/prolonged-holding — Prolonged Holding (Zinc 48)

**Note**: "Zinc 48" — same caveat as Silver 48. Confirm and document terminology.

**1. Mission**: holding capability beyond the nominal 48-hour Silver standard when evacuation is delayed; integrates JTS Prolonged Casualty Care doctrine.

**2. Personnel & Task Org**: same Holding team, plus rotation/sustainment considerations; cross-trained personnel for extended-duration care.

**3. Equipment & Logistics**: sustainment-oriented — pharmacy resupply lines; oxygen generation; nutrition; pressure-ulcer prevention; psychological support resources.

**4. Doctrinal References**:
- JTS CPG: Prolonged Casualty Care (foundational)
- MCRP 4-11.1G
- JTS CPG: Nutrition in Prolonged Field Care
- JTS CPG: Mental Health in Prolonged Field Care

**5. CPGs**: full prolonged casualty care bundle.

**6. Decision Points**: criteria for transition from Silver to Zinc; sustained-care thresholds; medical-evacuation prioritization in resource-constrained environments.

**7. Linked ELOs**:

| TLO | ELO | Primary or Secondary |
|-----|-----|----------------------|
| Prepare to Receive | PR-6 (individual patient management) | Primary |
| Prepare to Receive | PR-7 (patient holding plan, extended duration) | Primary |
| Clinical Ops | CO-11 (narcotics management — sustainment) | Primary |
| Clinical Ops | CO-14 (clinical decision-making) | Primary |
| Team Dev | TD-8 (resilience — sustained operations) | Primary |
| Team Dev | TD-7 (ethics — expectant in prolonged context) | Primary |

**8. Forms & Documentation**: prolonged-care handoff; rotation/duty schedule template; sustainment status board.

**9. Reference Imagery**: prolonged holding configuration sketches; sustainment workflow.

---

### /nodes/evac-erc — EVAC / ERC (Evacuation / En Route Care)

**1. Mission**: prepare the patient for and execute evacuation to higher echelon of care. En Route Care framework.

**2. Personnel & Task Org**: en route care provider qualifications; receiving-team handoff procedure; backfill for the evacuating provider when applicable.

**3. Equipment & Logistics**: transport ventilator; portable monitor; blood transport; oxygen supply for the duration; secured pharmacy for transport; communications during movement.

**4. Doctrinal References**:
- JP 4-02
- MCRP 4-11.1G
- JTS CPG: En Route Care
- JTS CPG: Aeromedical Evacuation considerations
- Service-specific CASEVAC vs MEDEVAC distinctions

**5. CPGs**: en route care bundle; airway management in transport; transfusion in transport.

**6. Decision Points**: precedence categorization (Urgent / Priority / Routine); transport platform selection; provider escort decision; abort criteria.

**7. Linked ELOs**:

| TLO | ELO | Primary or Secondary |
|-----|-----|----------------------|
| Prepare to Receive | PR-8 (patient movement/evacuation plan) | Primary |
| Prepare to Receive | PR-10 (movement to/from team location) | Primary |
| Trauma Int | TI-2 (continuum of care) | Primary |
| Trauma Int | TI-3 (local asset integration) | Primary |
| Trauma Int | TI-5 (documentation/reporting) | Primary |
| Trauma Int | TI-6 (patient tracking continuity) | Primary |

**8. Forms & Documentation**: 9-line MEDEVAC; en route care record; receiving-facility handoff template.

**9. Reference Imagery**: 9-line MEDEVAC reference; transport platform considerations; loading configurations (publicly releasable).

---

### /nodes/mortuary-affairs — Mortuary Affairs / Decedent Affairs

**Note**: in current Lucid Page 1, "Morgue" appeared as a floating terminator. This expanded node integrates publicly releasable mortuary-affairs doctrine for an ARSC team.

**1. Mission**: dignified care of remains; preservation of evidence; coordination with Mortuary Affairs Collection Point.

**2. Personnel & Task Org**: ARSC team responsibilities in absence of dedicated MA assets; pronouncement and documentation responsibilities.

**3. Equipment & Logistics**: human remains pouches; identification and tagging; storage if MA collection is delayed.

**4. Doctrinal References**:
- JP 4-06 (Mortuary Affairs)
- MCRP 4-11.8 (Marine Corps mortuary affairs reference)
- Service-specific guidance on pronouncement of death by physician.

**5. CPGs**: not directly applicable; reference appropriate JTS guidance on declaration of death.

**6. Decision Points**: pronouncement; chain of custody; coordination with command; family-notification chain.

**7. Linked ELOs**:

| TLO | ELO | Primary or Secondary |
|-----|-----|----------------------|
| Team Dev | TD-7 (ethics) | Primary |
| Team Dev | TD-8 (resilience — moral injury context) | Primary |
| Trauma Int | TI-5 (documentation) | Primary |

**8. Forms & Documentation**: pronouncement note; chain-of-custody form; MA Collection Point handoff documentation.

**9. Reference Imagery**: chain-of-custody flow (publicly releasable).

---

## Reference Pages

### /elo-crosswalk — ELO Crosswalk

**Purpose**: a single sortable table that maps every ELO from every TLO in the ARSC framework to its primary node and secondary nodes. Lets a training lead see at a glance which nodes contribute to which ELOs and identify gaps.

**Implementation**: MDX page with a structured data table — sortable by TLO, ELO #, primary node. Data lives in a structured file (`src/data/elo-crosswalk.json` or similar) so it can be reused by node pages.

**Columns**:

| TLO | ELO # | ELO text | Primary node | Secondary nodes | Coverage status |
|-----|-------|----------|--------------|-----------------|-----------------|

**Coverage status values**: Not started / Drafted / Reviewed / Published.

This is also the single source of truth for the ELO mapping referenced from each node page's Section 7.

### /doctrine — Doctrinal Reference Index

**Purpose**: searchable index of every doctrinal reference cited on the site, with link to canonical source.

**Categories**:

- **USMC**: MCDP, MCWP, MCRP, MCO series.
- **Joint**: JP, JTS publications, JTS CPGs.
- **Navy**: BUMEDINST, NAVMED references.
- **DoD**: DoDI, DoDD as cited.
- **Other**: TCCC, AMA, applicable civilian standards.

**Per-entry fields**: title, identifier (e.g., MCRP 4-11.1G), date of publication, link, brief one-sentence summary, last-verified date.

### /cpgs — JTS Clinical Practice Guideline Library

**Purpose**: linked index to JTS CPGs referenced on the site. Does not reproduce CPG content — links to JTS source.

**Organization**: by clinical domain (Hemorrhage Control, Resuscitation, Surgical, Critical Care, Prolonged Field Care, etc.) and by node where each is most heavily referenced.

### /contributing — Contributor Pathway

- How to propose a correction.
- How to submit content (PR workflow for technically inclined; email for others).
- Review and merge process.
- Authorship and attribution policy.

---

## ELO Master List (current Lucid capture)

This is the verbatim ELO list from the current Lucid, used as the v1 baseline. Expansion to the full ARSC ELT is deferred until the gap is confirmed and additional ELOs sourced.

### TLO 1 — Team Development & Dynamics (9 ELOs)

| # | ELO |
|---|-----|
| TD-1 | Analyze relevant CPGs as it relates to team members' skills and practice. |
| TD-2 | Perform team-level cross-training in critical skills. |
| TD-3 | Describe elements of non-traditional roles for team members in the austere environment. |
| TD-4 | Demonstrate crew resource management (CRM). |
| TD-5 | Demonstrate incorporation of supporting personnel. |
| TD-6 | Explain the importance of ARSC team members' familiarization with the military decision-making process and its impact on operational planning. |
| TD-7 | Distinguish between the application of ethical principles in clinical practice and combat casualty care. |
| TD-8 | Discuss key components of individual and ARSC team resilience. |
| TD-9 | Understand personnel task organization (STP, FRSS, Holding). |

### TLO 2 — Trauma System Integration (7 ELOs)

| # | ELO |
|---|-----|
| TI-1 | Describe the deployed trauma system. |
| TI-2 | Describe the relationship between unit location and continuum of care. |
| TI-3 | Describe local medical asset integration. |
| TI-4 | Describe the partner nation trauma system. |
| TI-5 | Demonstrate documentation and reporting. |
| TI-6 | Demonstrate integration of patient tracking system that includes patient identification and confidentiality. |
| TI-7 | Conduct Performance Improvement (PI). |

### TLO 3 — Clinical Operations in the Austere Environment (15 ELOs)

| # | ELO |
|---|-----|
| CO-1 | Plan a CONOP by demonstrating mission analysis and COA development upon mission receipt. |
| CO-2 | Describe the team security posture. |
| CO-3 | Describe environmental factors that impact an ARSC team in an austere environment. |
| CO-4 | Plan for the effect of contingency/split operations on team capability and capacity. |
| CO-5 | Describe unit-specific tactical proficiency. |
| CO-6 | Develop a comprehensive logistics plan. |
| CO-7 | Demonstrate team equipment familiarization and operation. |
| CO-8 | Describe medical equipment maintenance plan. |
| CO-9 | Describe non-medical equipment maintenance and power management. |
| CO-10 | Demonstrate a blood management operation. |
| CO-11 | Develop a narcotics management plan. |
| CO-12 | Describe accountability of sensitive items. |
| CO-13 | Develop and execute a comprehensive communications plan. |
| CO-14 | Describe the clinical decision-making process in an austere environment. |
| CO-15 | Develop and execute a military brief to Command authority. |

### TLO 4 — Prepare to Receive (15 ELOs)

| # | ELO |
|---|-----|
| PR-1 | Describe structured team feedback process in accordance with Service-specific standard process. |
| PR-2 | Develop a patient flow plan. |
| PR-3 | Conduct mission analysis to provide health service support. |
| PR-4 | Describe, communicate, and manage Command expectations (Commander SITREP). |
| PR-5 | Describe medical rules of eligibility (MEDROE) planning for special patient populations. |
| PR-6 | Describe individual patient management (non-clinical). |
| PR-7 | Develop a patient holding plan. |
| PR-8 | Develop a patient movement/evacuation plan. |
| PR-9 | Develop a communication plan. |
| PR-10 | Develop a movement plan for patients to and from team location, utilizing non-team support personnel and assets. |
| PR-11 | Develop a MASCAL plan. |
| PR-12 | Develop a CBRNE plan. |
| PR-13 | Develop a contingency plan. |
| PR-14 | Demonstrate equipment setup. |
| PR-15 | Demonstrate a surgical rehearsal exercise prior to receiving patients. |

### Likely additions when full ARSC ELT is incorporated (deferred)

The current Lucid captures 4 TLOs. The full ARSC Joint Training Standard typically includes additional TLOs covering Receive Casualties / Triage execution, Treat Casualties (DCR/DCS execution), Disposition, and Recovery / AAR. Confirm against the current ARSC ELT and expand. Until then, the patient-flow node pages stand on their own and reference the existing four TLOs.

---

## Doctrinal Reference Master List (USMC primary, joint additive)

To be expanded as content is drafted. The references below are the v1 starting set:

**USMC**:
- MCDP 1-0 — Marine Corps Operations
- MCWP 5-10 — Marine Corps Planning Process
- MCRP 4-11.1G — Health Service Support Tactics, Techniques, and Procedures
- MCRP 3-40A.7 — MAGTF Health Service Support
- MCO 6000.20 — Health Services Concept of Operations

**Joint**:
- JP 4-02 — Joint Health Services
- JP 4-06 — Mortuary Affairs
- ARSC Joint Training Standard (Tri-service Curriculum)

**Navy / BUMED**:
- BUMEDINST 6000 series (as applicable)
- BUMEDNOTE 6000 (Enterprise-Wide Privileging — relevant for operational privileging context)
- NAVMED P-5010 series (preventive medicine considerations)

**Joint Trauma System CPGs** (high-priority subset; full list lives on `/cpgs`):
- Damage Control Resuscitation
- Damage Control Surgery
- Pre-Hospital Blood Transfusion
- Walking Blood Bank
- Massive Transfusion
- Triage of Casualties
- En Route Care
- Prolonged Casualty Care
- Hypothermia Prevention
- Performance Improvement
- TXA in Combat Casualty Care

**Other**:
- TCCC Guidelines (CoTCCC current edition)
- Defense Medical Ethics App — referenced from current Lucid Page 2

---

## Open Items the Outline Cannot Resolve

1. **Confirm "Silver 48" / "Zinc 48"** terminology and integrate or replace.
2. **Confirm whether the four TLOs in current Lucid are the full ARSC ELT or a subset**, and source any missing TLOs from the official ARSC standard.
3. **Confirm AMAL identifiers** (631 STP, 633 FRSS) and any updated nomenclature.
4. **Confirm publicly releasable scope** for AMAL contents — coordinate with 1st Med Bn S-2/PAO if there's any doubt.
5. **Identify the original source images** in current Lucid Pages 2, 3, and 5 — confirm rights and replace with original SVGs where possible.

---

*End of Content Outline v0.1.*
