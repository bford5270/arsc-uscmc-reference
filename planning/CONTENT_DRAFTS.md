# Content Drafts — All Pages

**Companion to**: `PROJECT_PLAN.md`, `CONTENT_OUTLINE.md`, `DIAGRAM_SPEC.md`

This document contains v1 draft content for every page on the site. Each section below is a fenced code block holding a complete `.mdx` file ready to drop into the Astro Starlight project at the path indicated in the comment header.

**Voice and tone**: professional, doctrinal, plainspoken. Active voice. Acronyms expanded on first use per page. No marketing copy.

**TBD markers**: any factual gap requiring CDR Ford's verification (or another subject expert) is marked with `{/* TBD: ... */}`. These are MDX comments — invisible in rendered output, easy to grep.

**Doctrinal anchoring**: where I cite a specific publication number, treat it as a v1 reference to confirm. USMC and Joint doctrine version numbers shift; verify before publication.

---

## Homepage

```mdx
{/* src/content/docs/index.mdx */}
---
title: ARSC USMC Field Reference
description: A reference for USMC personnel on the Austere Resuscitative Surgical Care framework, organized around the Role 2 patient flow.
template: splash
hero:
  tagline: ARSC content, organized around the Role 2 patient flow.
  actions:
    - text: Start with the diagram
      link: "#patient-flow"
      icon: right-arrow
    - text: New here? Read this first
      link: /about/
      variant: minimal
---

import Role2Diagram from '../../components/Role2Diagram.astro';

## What this site is

A working reference for personnel assigned to USMC Role 2 capability sets — Shock Trauma Platoon (STP), Forward Resuscitative Surgical System (FRSS), and Holding. The content is organized around the patient-flow construct rather than a list of learning objectives, because that is how the work actually happens. Every node in the flow links to the doctrine, equipment, decision points, and learning objectives that apply at that point.

The site exists so that a sailor can be sent a single link before checking in and arrive with a working mental model of the unit.

## What this site is not

Not an official Department of Defense, Navy, Marine Corps, or Joint Trauma System publication. Not a substitute for canonical doctrine. Not a repository of classified or controlled-unclassified content. When this site and current doctrine disagree, current doctrine wins.

## Patient flow

<div id="patient-flow">
  <Role2Diagram />
</div>

## How to use this site

**If you are a new check-in:** start with the diagram above. Click the node closest to your billet and read its page. Then skim the three cross-cutting bands (Team Development & Dynamics, Trauma System Integration, Clinical Operations in the Austere Environment) on either side of the flow. Read the welcome and expectations document under [Standards & Expectations](/standards/).

**If you need a specific SOP, expectations document, or qualification standard:** go to [Standards & Expectations](/standards/). SOPs (MASCAL, blood, sterilization, comms), expectation letters, and training/qualification standards are all there as embedded PDFs.

**If you are a training lead:** open the [ELO Crosswalk](/elo-crosswalk/) and the [Doctrine Index](/doctrine/) for sourcing, plus [Training & Qualifications](/standards/training/) for command-published standards.

**If you have found an error or want to contribute:** see the [Contributing](/contributing/) page.
```

---

## About / Governance

```mdx
{/* src/content/docs/about.mdx */}
---
title: About this site
description: Purpose, governance, authorship, and disclaimer.
---

## Purpose

To consolidate the Austere Resuscitative Surgical Care (ARSC) framework around the Marine Corps Role 2 patient-flow construct, in a single web reference accessible without CAC credentials.

The audience is personnel of 1st Medical Battalion, 1st Marine Logistics Group. Joint and tri-service use is welcomed but additive — the content is framed in USMC terms first.

## Authorship

Authored and maintained by CDR Brian S. Ford, MC, USN, Chief Medical Officer, 1st Medical Battalion. Contributions from other authors are credited per page where they apply.

## Disclaimer

This site is a community professional reference compiled by CDR Brian S. Ford, MC, USN, drawing on publicly released doctrine. **It is not an official publication** of the Department of Defense, the Department of the Navy, the United States Marine Corps, or the Joint Trauma System. It carries no DoD endorsement. Always defer to current official doctrine and command policy. Where this site and current doctrine disagree, current doctrine prevails.

Report errors via the [Contributing](/contributing/) page.

## Editorial principles

**Cite, do not reproduce.** Every doctrinal claim links to the canonical source. Quotations are kept short and attributed. The site does not republish CPGs, MCRPs, MCWPs, or JTS publications. It directs readers to them.

**Service-neutral where the doctrine is joint; service-specific where the doctrine is service-specific.** ARSC is a joint construct; STP, FRSS, and the holding capabilities are USMC-specific organization. The content reflects that distinction.

**Currency.** Each page carries a "last reviewed" date in its footer. Quarterly review cadence. Substantive updates appear in the [Changelog](/changelog/).

## Operational security

Every page passes an OPSEC review checklist before publication. The checklist excludes classified content, controlled unclassified content, personally identifying information, specific unit locations, planned operations, named exercise specifics not in open press, and AMAL line-item NSN data not already in publicly released NAVMED references. A copy of the checklist lives in the project repository.

## Repository and licensing

Source content lives in a public Git repository. Submitted contributions are reviewed and merged by the maintainer. Content is licensed for non-commercial professional reference use; doctrinal citations remain the property of their authoring agencies.

## Contact

{/* TBD: contact email, repo URL, optional issue-reporting form */}
```

---

## Cross-cutting TLO Pages

### Team Development & Dynamics

```mdx
{/* src/content/docs/team-development.mdx */}
---
title: Team Development & Dynamics
description: ARSC TLO addressing team composition, cross-training, ethics, and resilience across the Role 2 patient flow.
---

## Why this TLO is cross-cutting

Team Development & Dynamics is not tied to a single point in the patient flow. The team that triages a casualty is the team that resuscitates, operates, holds, and evacuates. The same eight to fifteen people perform across every node, and the ARSC ELOs in this domain bear on all of it.

This page is the home of those ELOs. Specific applications — what cross-training looks like in the FRSS, how CRM expresses itself during a triage event, what task organization looks like in Holding — are addressed on the relevant node pages.

## ELOs (Enabling Learning Objectives)

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

## Key concepts

**Task organization.** USMC Role 2 capability is delivered by three organized teams: STP (resuscitation, no surgical capability), FRSS (Damage Control Surgery), and Holding (post-resuscitative or post-surgical management for a defined window). Personnel task organization for each team is detailed on the corresponding node page. {/* TBD: confirm current T/O references and link out */}

**Non-traditional roles.** In an austere environment, every team member should be cross-trained at least one role beyond their primary billet. A surgical technician may run anesthesia gas; a corpsman may scrub; a nurse may run airway. Cross-training is not aspirational; it is required redundancy.

**Crew Resource Management (CRM).** Closed-loop communication, callouts, role clarity, structured handoffs, and authority gradients adjusted for the urgency of the moment. CRM frameworks from aviation and operating room teamwork research apply directly.

**Ethics.** Combat casualty care creates ethical decisions that civilian practice does not — expectant management in MASCAL, MEDROE-driven prioritization, partner-nation casualty handling. The Defense Medical Ethics App provides a framework. {/* TBD: link */}

**Resilience.** Sustained operations, exposure to severe injury, and proximity to death stress the team. Pre-deployment preparation, in-stride peer support, structured AAR processes, and post-deployment recovery all matter. Resilience is a team capability, not just an individual one.

## Doctrinal references

- MCRP 4-11.1G, *Health Service Support Tactics, Techniques, and Procedures* {/* TBD: confirm current edition */}
- MCO 6000.20, *Health Services Concept of Operations* {/* TBD: confirm current */}
- ARSC Joint Training Standard
- JTS CPG: Performance Improvement
- Defense Medical Ethics application

## Practical application by node

| Node | How TD shows up here |
|------|----------------------|
| [Austere Prep](/nodes/austere-prep/) | MDMP familiarization (TD-6); pre-mission task org confirmation (TD-9) |
| [Prepare to Receive](/nodes/prepare-to-receive/) | Surgical rehearsal as a CRM exercise (TD-4); equipment cross-training (TD-2) |
| [Triage](/nodes/triage/) | Ethics in MASCAL categorization (TD-7) |
| [STP / DCR](/nodes/stp-dcr/) | CRM in resuscitation; cross-training in critical airway/blood roles |
| [FRSS / DCS](/nodes/frss-dcs/) | OR team CRM; non-traditional roles for surgical assist |
| [Holding](/nodes/holding/) | Task org for sustained ICU-level care |
| [Prolonged Holding](/nodes/prolonged-holding/) | Resilience under sustained operations (TD-8) |
| [Mortuary Affairs](/nodes/mortuary-affairs/) | Ethics and moral injury context (TD-7, TD-8) |
```

### Trauma System Integration

```mdx
{/* src/content/docs/trauma-integration.mdx */}
---
title: Trauma System Integration
description: ARSC TLO addressing how a Role 2 capability fits into the broader deployed trauma system.
---

## Why this TLO is cross-cutting

A Role 2 capability is a node in a larger trauma system, not an island. The system that produces good casualty outcomes is Role 1 (point of injury, TCCC) → Role 2 (Damage Control Resuscitation and Damage Control Surgery) → Role 3 (theater hospitalization) → Role 4 (definitive care, typically out of theater). Performance at the Role 2 depends on what happens upstream and downstream.

The ELOs in this domain apply at every node, with concentration at Austere Prep, Triage, and EVAC.

## ELOs

| # | ELO |
|---|-----|
| TI-1 | Describe the deployed trauma system. |
| TI-2 | Describe the relationship between unit location and continuum of care. |
| TI-3 | Describe local medical asset integration. |
| TI-4 | Describe the partner nation trauma system. |
| TI-5 | Demonstrate documentation and reporting. |
| TI-6 | Demonstrate integration of patient tracking system that includes patient identification and confidentiality. |
| TI-7 | Conduct Performance Improvement (PI). |

## Key concepts

**The Role construct.** Roles describe capability, not facility. A Role 2 with surgical augmentation can deliver Damage Control Surgery; a Role 2 without it cannot. R2RA (Role 2 Resuscitative Augmentation) refers to a Role 2 with augmented resuscitation capability beyond baseline. {/* TBD: confirm current R2RA terminology in JP 4-02 */}

**Continuum of care.** A casualty's outcome is the integral of every interaction across every Role. Documentation and tracking are how the integral closes — without them, the next echelon is starting cold.

**Local asset integration.** In any given operational environment, the Role 2 sits among other medical assets — Role 1 outposts upstream, Role 3 downstream, partner-nation facilities, NGO medical capability, host-nation civilian systems. Integration means knowing what is where, who controls it, what its capabilities are, and how casualty handoff occurs.

**Partner nation systems.** Coalition operations introduce questions about which casualty goes to whose facility, whose documentation standards apply, and what the receiving system can sustain. These questions are addressed in planning, not at the moment of arrival.

**Documentation and tracking.** TCCC card (DD 1380), Trauma Flow Sheet, operative note, holding flow sheet, and en route care record. Each casualty should arrive at the next Role with continuous documentation. The Department of Defense Trauma Registry (DoDTR) is the system of record.

**Performance Improvement (PI).** Cases are reviewed not for blame but for learning. Mortality and morbidity reviews, complications reviews, and process reviews. Findings feed back into team practice and into theater PI.

## Doctrinal references

- JP 4-02, *Joint Health Services* {/* TBD: confirm current edition */}
- MCRP 4-11.1G
- DoD Trauma Registry guidance
- JTS CPG: Performance Improvement
- JTS-sanctioned forms ({/* TBD: link to a curated list */})

## Practical application by node

| Node | How TI shows up here |
|------|----------------------|
| [Austere Prep](/nodes/austere-prep/) | Continuum of care planning (TI-2); local asset integration (TI-3); partner nation system (TI-4) |
| [Triage](/nodes/triage/) | Patient tracking initiation (TI-6) |
| [STP / DCR](/nodes/stp-dcr/) | Documentation and reporting (TI-5) |
| [FRSS / DCS](/nodes/frss-dcs/) | Operative note; DoDTR data capture |
| [Holding](/nodes/holding/) | Sustained tracking; transfer documentation |
| [EVAC / ERC](/nodes/evac-erc/) | Continuity of documentation across the handoff (TI-2, TI-5, TI-6) |
| All nodes | Performance Improvement contributions (TI-7) |
```

### Clinical Operations in the Austere Environment

```mdx
{/* src/content/docs/clinical-ops.mdx */}
---
title: Clinical Operations in the Austere Environment
description: ARSC TLO addressing planning, sustainment, and decision-making for a Role 2 team operating in austere conditions.
---

## Why this TLO is cross-cutting

Clinical Operations covers the planning and sustainment activity that makes a Role 2 team functional in an austere environment. Some ELOs in this domain are team-wide (CONOP development, security posture, environmental adaptation, sensitive items accountability). Others are concentrated at specific nodes — blood management at STP/DCR and FRSS/DCS, narcotics management at Holding. This page covers the team-wide content; specific applications appear on the relevant node pages.

## ELOs

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

## Key concepts

**Mission analysis and COA development.** The Marine Corps Planning Process (MCPP) is the framework. Medical input to the planning process is the medical planner's contribution at each step — receipt of mission, mission analysis, COA development, COA wargaming, COA comparison and decision, orders development, transition. {/* TBD: link MCWP 5-10 */}

**Team security posture.** A medical team is a soft target. Site selection, perimeter, casualty arrival corridor, weapons posture inside the treatment area, and security forces coordination all matter. Posture varies with the threat picture.

**Environmental factors.** Heat, cold, altitude, humidity, dust, wind, and electromagnetic environment all affect equipment, medications, blood products, and personnel performance. Plans address mitigation rather than hope for absence.

**Contingency and split operations.** A team may be required to split — partial team forward, partial team in reserve. Capability and capacity assumptions degrade non-linearly when team strength halves. Plans should be explicit about which capabilities survive which splits.

**Logistics plan.** Class VIII (medical), Class V (ammo, in some contexts), Class III (fuel for power), Class I (food and water). The medical logistics chain has its own peculiarities — cold chain for blood and certain pharmaceuticals, expiration management, controlled substance accountability.

**Blood management.** Cold-stored low-titer O whole blood (LTOWB), component therapy where available, and a Walking Blood Bank (WBB) capability for surge or sustainment. WBB requires pre-screening, donor roster, and rapid activation procedures. See JTS CPG: Walking Blood Bank.

**Narcotics management.** Schedule II inventory, witnessed counts, secure storage, accountability through changes of personnel. Loss has command-level consequences regardless of clinical context.

**Sensitive items.** Blood, narcotics, weapons issued to personnel, comms equipment, classified material if any. Accountability is a peacetime habit that matters most in austere operations.

**Communications plan.** Internal team communications, casualty arrival notification, MEDEVAC request channels, command SITREP cadence, alternate and contingency communication paths.

**Clinical decision-making in austere environments.** The decision frame in austere care is not "what is best" but "what is best given what is here, now, with these casualties, on this evacuation timeline." Familiarity with this frame is the difference between paralysis and action.

**Military briefs.** A medical leader briefs Command in operational language, not clinical jargon. Bottom-line up front; risks; recommendations; what Command needs to decide.

## Doctrinal references

- MCWP 5-10, *Marine Corps Planning Process*
- MCRP 4-11.1G
- JTS CPG: Damage Control Resuscitation
- JTS CPG: Walking Blood Bank
- BUMEDINST 6710 series (controlled substances) {/* TBD: confirm current */}
- DoDI on accountability of sensitive items {/* TBD: confirm */}

## Practical application by node

| Node | How CO shows up here |
|------|----------------------|
| [Austere Prep](/nodes/austere-prep/) | CONOP, logistics plan, comms plan, military brief |
| [Prepare to Receive](/nodes/prepare-to-receive/) | Equipment setup; security posture finalized |
| [Triage](/nodes/triage/) | Clinical decision-making under austere conditions |
| [STP / DCR](/nodes/stp-dcr/) | Blood management; equipment familiarization |
| [FRSS / DCS](/nodes/frss-dcs/) | Equipment maintenance; sterilization workflow |
| [Holding](/nodes/holding/) | Narcotics management; sustainment |
| [Prolonged Holding](/nodes/prolonged-holding/) | Sustainment under extended duration |
```

---

## Node Pages

### Austere Prep / R2RA

```mdx
{/* src/content/docs/nodes/austere-prep.mdx */}
---
title: Austere Prep / R2RA
description: The period from notification through arrival on objective during which the team prepares to deliver Role 2 capability.
sidebar:
  order: 1
---

## Mission

Austere preparation is the phase between notification and arrival on the objective. Its purpose is to convert a notional team and its equipment into a deployable, mission-ready Role 2 capability — task-organized, equipped, briefed, and integrated into the larger operational and trauma-system picture. R2RA (Role 2 Resuscitative Augmentation) refers to Role 2 capability augmented beyond a baseline, generally with additional resuscitation or surgical capability. {/* TBD: confirm exact R2RA framing in current JTS / JP 4-02 */}

A Role 2 that arrives unprepared is a Role 2 that fails its first casualty.

## Personnel & Task Organization

The full ARSC team is identified, manifested, and briefed during this phase. Roles are confirmed against the operational task organization — STP, FRSS, Holding — and gaps (vacancies, unqualified billets, training shortfalls) are identified and resolved or risk-accepted.

Cross-training assignments are confirmed. Authority to act in the absence of a primary role-holder is documented.

{/* TBD: insert specific T/O references and current 1st Med Bn task organization patterns */}

## Equipment & Logistics

- AMAL pull and 100% inventory against the current allowance list. {/* TBD: AMAL identifiers — 631 STP, 633 FRSS subject to confirmation */}
- Pre-mission shortfalls reported to higher; risk accepted by appropriate authority.
- Cold-chain capability for blood and temperature-sensitive pharmaceuticals confirmed end-to-end from origin through arrival.
- Equipment movement plan synchronized with operational movement plan.
- Power, water, and Class I sustainment estimate built for the planned mission duration plus the doctrinal contingency margin.

## Doctrinal References

- MCWP 5-10, *Marine Corps Planning Process*
- MCRP 4-11.1G, *Health Service Support TTPs*
- MCO 6000.20, *Health Services Concept of Operations*
- JP 4-02, *Joint Health Services*
- ARSC Joint Training Standard

## Clinical Practice Guidelines

This is a planning-phase node. Clinical CPG familiarization is a readiness expectation rather than a node-level activity. The team should have walked the relevant CPGs before this phase ends — at minimum, Damage Control Resuscitation, Damage Control Surgery, Walking Blood Bank, Triage of Casualties, and Prolonged Casualty Care.

## Decision Points

| Decision | Trigger | Outcome |
|---|---|---|
| Team assessed mission-ready | All readiness gates closed | Authority to deploy |
| Team assessed not mission-ready | Any closing gate fails | Escalate to higher; mitigate or risk-accept |
| Augmentation required | Identified capability gap | R2RA request; or accept reduced capability |
| Operational change of plan | New mission or significantly changed conditions | Re-run mission analysis |

Specific readiness gates depend on command policy and mission type. {/* TBD: insert command-specific gates if releasable */}

## Linked ELOs

| TLO | ELO | Primary or Secondary |
|-----|-----|----|
| Clinical Ops | CO-1 (CONOP, mission analysis, COA) | Primary |
| Clinical Ops | CO-6 (logistics plan) | Primary |
| Clinical Ops | CO-13 (communications plan) | Primary |
| Clinical Ops | CO-15 (military brief to Command) | Primary |
| Trauma Integration | TI-2 (continuum of care, unit location) | Primary |
| Trauma Integration | TI-3 (local medical asset integration) | Primary |
| Trauma Integration | TI-4 (partner nation system) | Primary |
| Prepare to Receive | PR-3 (mission analysis HSS) | Primary |
| Prepare to Receive | PR-4 (Commander SITREP) | Primary |
| Prepare to Receive | PR-10 (movement to/from team location) | Primary |
| Team Development | TD-6 (MDMP familiarization) | Primary |

## Forms & Documentation

- Pre-mission readiness checklist.
- Mission analysis brief (JP 5-0 / MCPP format).
- Commander SITREP template.
- Logistics estimate.

## Reference Imagery

{/* TBD: pre-mission planning brief example; R2RA conceptual diagram */}

---

*Last reviewed: {/* TBD */} • OPSEC reviewed: {/* TBD */}*
```

### Preparing to Receive Patients

```mdx
{/* src/content/docs/nodes/prepare-to-receive.mdx */}
---
title: Preparing to receive patients
description: The on-station period from arrival until casualties begin arriving — setup, rehearsal, command coordination, contingency planning.
sidebar:
  order: 2
---

## Mission

The team is on station; the mission is to be ready when the first casualty arrives. This phase covers physical setup, equipment checks, blood and oxygen readiness, communications checks, contingency planning (MASCAL, CBRNE), and team rehearsal. The output is a clear, communicable readiness state — "team open" — declared to Command and to the broader trauma system.

## Personnel & Task Organization

Battle drill assignments confirmed and exercised. Each role's primary, secondary, and tertiary tasks understood. Back-up assignments — who covers if the surgeon is busy, who covers if the anesthesia provider is busy, who covers airway if the corpsman is doing chest tubes — explicit, not implicit.

Site security personnel briefed on the casualty arrival corridor and on the team's posture during a live event.

## Equipment & Logistics

- All equipment positioned and powered. Backup power tested. Failure modes understood.
- Blood: storage online and at temperature; daily inventory; Walking Blood Bank donor roster confirmed and on-call.
- Airway and ventilation: every position checked; alternate paths (cricothyrotomy kits at hand) verified.
- Ultrasound: powered, oriented, scanned through the standard exam library. {/* TBD: link Ultrasound Image Reference Library */}
- Oxygen: source identified, sustainment line verified, alternate source identified.
- Comms: internal (team), external (command, MEDEVAC), and alternate (contingency) all checked at the start of every operational period.
- Pharmacy: inventory; expiration scan; controlled substance count.

## Doctrinal References

- MCRP 4-11.1G
- ARSC Joint Training Standard, "Prepare to Receive"
- JTS CPG: Walking Blood Bank
- JTS CPG: Pre-Hospital Blood Transfusion
- JTS CPG: Triage of Casualties

## Clinical Practice Guidelines

CPG quick references should be physically present at the team site, not "available on the network." MASCAL and CBRNE annexes printed and posted. Pediatric and partner-nation MEDROE references where relevant.

## Decision Points

| Decision | Trigger | Outcome |
|---|---|---|
| Declare team open | All readiness checks pass | Notify Command; notify upstream and downstream nodes |
| Declare team partially open | Specific capability degraded | Notify; specify what is and is not available |
| Declare team closed | Critical capability lost (blood, surgical capability, key personnel) | Notify; route casualties elsewhere; recover |
| MASCAL pre-stage | MASCAL trigger met | Activate MASCAL plan; recall augmentation; pre-stage triage |
| CBRNE pre-stage | CBRNE indication | Don PPE; activate decontamination plan; isolate clean zones |

## Linked ELOs

| TLO | ELO | Primary or Secondary |
|-----|-----|----|
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

## Forms & Documentation

- Equipment setup checklist.
- Daily readiness sheet.
- Rehearsal AAR template.
- MASCAL activation card.
- CBRNE activation card.

## Reference Imagery

{/* TBD: STP layout sketch; FRSS layout sketch; Holding layout sketch — publicly releasable */}

---

*Last reviewed: {/* TBD */} • OPSEC reviewed: {/* TBD */}*
```

### Triage

```mdx
{/* src/content/docs/nodes/triage.mdx */}
---
title: Triage
description: Sorting casualties on arrival to determine treatment priority and disposition within the Role 2.
sidebar:
  order: 3
---

## Mission

The triage function takes incoming casualties and sorts them into immediate (T1), delayed (T2), minimal (T3), and expectant (T4) categories — and, in MASCAL or evolving conditions, re-triages dynamically as the picture changes. The triage decision routes the casualty to STP/DCR, FRSS/DCS, Holding, EVAC, or Mortuary Affairs.

The triage officer is the most experienced clinician available, not necessarily the most senior. Triage is a clinical decision under tactical constraints; it is not an administrative one.

## Personnel & Task Organization

- **Triage officer**: identified and announced to the team and to Command. Authority to direct casualty disposition is the triage officer's during the event.
- **Triage corpsmen**: support documentation, dressings, vitals, and movement.
- **Documentation lead**: every triaged casualty has a tag and an entry on the tracking board before leaving the triage area.
- **Security**: managing access to the casualty arrival corridor.

## Equipment & Logistics

- Triage tags (TCCC card / DD 1380 or local equivalent), in volume.
- Hard surfaces and lighting.
- Communications to STP, FRSS, Holding, and EVAC.
- Casualty collection point (CCP) marked and accessible.
- Litter handling capability.
- A visible, current tracking board.

## Doctrinal References

- MCRP 4-11.1G
- JTS CPG: Triage of Casualties
- JTS CPG: Damage Control Resuscitation (initial framing)
- TCCC Guidelines (CoTCCC current edition) {/* TBD: confirm current */}

## Clinical Practice Guidelines

- Triage of Casualties (JTS CPG).
- MASCAL plan annex.
- MEDROE matrix for special populations.

## Decision Points

| Casualty pattern | Disposition |
|---|---|
| Hemodynamically unstable, surgically correctable | STP/DCR for resuscitation, then FRSS/DCS |
| Hemodynamically unstable, non-surgical | STP/DCR; reassess; consider expectant if not improving |
| Hemodynamically stable, surgical indication | Direct to FRSS/DCS or to STP/DCR briefly first per local protocol |
| Hemodynamically stable, non-surgical, not requiring R2 capability | Direct EVAC |
| Minor injury, return to duty likely | T3 — minimal; treat and release or return |
| Catastrophic injury beyond local capability under MASCAL conditions | T4 — expectant; comfort care |
| Deceased | Mortuary Affairs |

Re-triage at any change in number of incoming casualties or in the team's capacity.

**MEDROE considerations.** Special populations (host-nation civilians, pediatrics, EPWs) follow command-published MEDROE. The triage officer enforces MEDROE; the triage officer does not write MEDROE.

## Linked ELOs

| TLO | ELO | Primary or Secondary |
|-----|-----|----|
| Prepare to Receive | PR-5 (MEDROE — special populations) | Primary |
| Prepare to Receive | PR-11 (MASCAL plan execution) | Primary |
| Trauma Integration | TI-6 (patient tracking initiation) | Primary |
| Clinical Ops | CO-14 (clinical decision-making in austere environment) | Primary |
| Team Development | TD-7 (ethics — expectant management) | Primary |

## Forms & Documentation

- TCCC card (DD 1380) or local triage tag equivalent.
- MASCAL casualty tracking sheet.
- Re-triage log when used.

## Reference Imagery

{/* TBD: triage workflow diagram; tagging examples (publicly releasable) */}

---

*Last reviewed: {/* TBD */} • OPSEC reviewed: {/* TBD */}*
```

### STP / DCR

```mdx
{/* src/content/docs/nodes/stp-dcr.mdx */}
---
title: STP / DCR
description: Shock Trauma Platoon delivering Damage Control Resuscitation prior to surgery or in lieu of surgery for non-surgical casualties.
sidebar:
  order: 4
---

## Mission

The Shock Trauma Platoon (STP) delivers Damage Control Resuscitation (DCR) — control of life-threatening hemorrhage, balanced blood-product resuscitation, hypothermia prevention, and stabilization for transport — to casualties prior to surgery or in lieu of surgery for non-surgical injuries. DCR philosophy: get the casualty to the operating table or to evacuation in physiological condition that survives the next step.

## Personnel & Task Organization

STP is a small, role-clear team. {/* TBD: insert current STP T/O — typical composition includes a physician (often Emergency Medicine or Family Medicine), Critical Care or Emergency-trained nurse, ICU/ED-trained corpsmen, and anesthesia provider as augmented */} Cross-training is essential: every member should be able to manage airway under direction, run blood products, and document the resuscitation.

The team operates in resuscitation bays. Each bay has a defined provider lead and corpsman support. CRM applies — closed-loop callouts, time hacks, structured handoffs.

## Equipment & Logistics

**Blood and resuscitation:**
- Cold-stored Low-Titer O Whole Blood (LTOWB) where available.
- Component therapy (PRBC, FFP, platelets) per current allowance.
- Walking Blood Bank activation capability for surge or sustainment.
- Rapid infuser capability.
- Tranexamic Acid (TXA) per JTS CPG.

**Airway and ventilation:**
- Standard intubation kits with backups.
- Cricothyrotomy kits accessible.
- Ventilator capability.
- End-tidal CO2 monitoring.

**Diagnostics:**
- Point-of-care ultrasound with FAST exam capability. {/* TBD: link to Ultrasound Image Reference Library */}
- Point-of-care laboratory (lactate, hemoglobin, blood gas) per allowance. {/* TBD: confirm current AMAL inclusion */}

**Hemorrhage control:**
- Tourniquets, pressure dressings, hemostatic dressings.
- Pelvic binders.
- Junctional tourniquets.

**Hypothermia prevention:**
- Warming devices (active and passive).
- Warmed IV fluids.

**AMAL:** {/* TBD: confirm current AMAL identifier for STP — historical reference is AMAL 631 */}

## Doctrinal References

- MCRP 4-11.1G, *Health Service Support TTPs*
- JTS CPG: Damage Control Resuscitation
- JTS CPG: Pre-Hospital Blood Transfusion
- JTS CPG: Walking Blood Bank
- JTS CPG: Massive Transfusion
- JTS CPG: TXA in Combat Casualty Care
- JTS CPG: Hypothermia Prevention and Management
- JTS CPG: REBOA (where applicable and within local scope of practice)

## Clinical Practice Guidelines

The DCR bundle anchors practice at this node. Familiarity with each CPG is expected; printed quick-reference cards or laminated job aids should be physically present.

## Decision Points

| Decision | Trigger | Outcome |
|---|---|---|
| Initiate massive transfusion | Hemodynamic instability with anatomic source; ABC score or clinical judgment | MTP per JTS CPG; balanced ratios |
| TXA administration | Penetrating trauma, hemodynamic instability, within 3 hours of injury | 1g IV per CPG |
| Surgical referral | Surgically-correctable hemorrhage; hollow viscus injury; clear surgical indication | Move to FRSS/DCS |
| Direct to Holding | Resuscitation complete; no surgical indication; stable for monitoring | STP → Holding |
| Direct to EVAC | Stable; capability needed exceeds Role 2 | STP → EVAC |
| Expectant management | Catastrophic injury; not survivable with available resources; MASCAL conditions | T4 disposition; comfort care; document |
| Airway escalation | Inability to maintain airway by less invasive means | Cricothyrotomy per CPG |
| ROSC management | Return of spontaneous circulation after arrest | Per current resuscitation guidance; consider survivability |

## Linked ELOs

| TLO | ELO | Primary or Secondary |
|-----|-----|----|
| Clinical Ops | CO-10 (blood management) | Primary |
| Clinical Ops | CO-14 (clinical decision-making) | Primary |
| Clinical Ops | CO-7 (equipment familiarization) | Primary |
| Team Development | TD-1 (CPG analysis) | Primary |
| Team Development | TD-2 (cross-training) | Primary |
| Team Development | TD-4 (CRM in resuscitation) | Primary |
| Team Development | TD-9 (task org STP) | Primary |
| Trauma Integration | TI-5 (documentation/reporting) | Primary |

## Forms & Documentation

- TCCC card / DD 1380.
- Trauma Flow Sheet (JTS-sanctioned). {/* TBD: link */}
- Transfusion record with product unit IDs.
- DoDTR data fields captured at this stage.

## Reference Imagery

{/* TBD: STP resuscitation bay layout; blood storage configuration; rapid infuser setup — all publicly releasable */}

---

*Last reviewed: {/* TBD */} • OPSEC reviewed: {/* TBD */}*
```

### FRSS / DCS

```mdx
{/* src/content/docs/nodes/frss-dcs.mdx */}
---
title: FRSS / DCS
description: Forward Resuscitative Surgical System delivering Damage Control Surgery — life-saving intervention to control hemorrhage and contamination, deferring definitive care to the next echelon.
sidebar:
  order: 5
---

## Mission

The Forward Resuscitative Surgical System (FRSS) delivers Damage Control Surgery (DCS) — abbreviated, focused operative intervention to control surgical hemorrhage, control gross contamination, and create a temporary closure that allows the casualty to be moved to the next echelon for definitive surgical care. The FRSS does not deliver definitive surgery. The FRSS keeps people alive long enough to reach definitive surgery.

## Personnel & Task Organization

{/* TBD: insert current FRSS T/O — typical composition: General Surgeon, Anesthesia provider (CRNA or Anesthesiologist), surgical technician, perioperative nurse, perioperative corpsman */} Cross-training spans nursing, anesthesia, surgical assist, and OR turnover. The team is small enough that every member is on every case.

CRM in the operating room is non-negotiable: surgical pause, closed-loop verification of patient identity, planned procedure, allergy and blood availability, and explicit communication of intra-operative decision changes.

## Equipment & Logistics

**Operating room:**
- Modular OR table; lighting; suction.
- Anesthesia machine and gas supply, or TIVA capability where gas is unavailable.
- Cautery, basic and vascular instrument sets.
- Sterilization (autoclave; chemical disinfection where applicable).

**Surgical capability:**
- General surgery, with vascular and orthopedic damage-control capability per training and equipment allowance. {/* TBD: confirm current allowance */}
- REBOA (where within scope and trained).
- Limited specialty surgery (neurosurgery, cardiothoracic) is generally not within FRSS scope; route to higher echelon.

**AMAL:** {/* TBD: confirm current AMAL identifier — historical reference is AMAL 633 */}

## Doctrinal References

- MCRP 4-11.1G
- JTS CPG: Damage Control Surgery
- JTS CPG: Damage Control Resuscitation (continued in OR)
- JTS CPG: Wound Management
- JTS CPG: Compartment Syndrome
- JTS CPG: Vascular Injury
- JTS CPG: Open Abdomen Management

## Clinical Practice Guidelines

DCS bundle. Decision frameworks for abbreviated laparotomy and temporary closure.

## Decision Points

| Decision | Trigger | Outcome |
|---|---|---|
| Damage control vs definitive | Physiological derangement (acidosis, hypothermia, coagulopathy), tactical urgency, multiple casualties | Damage control: control hemorrhage, control contamination, temporary closure, transport |
| Abbreviated laparotomy | Damage control criteria | Pack; ligate or shunt; temporary abdominal closure |
| Temporary closure technique | Per current CPG and local equipment | Negative pressure where available; Bogota bag where not |
| Limit surgical scope | Sustained operations; depleted blood; second incoming casualty wave | Pause and reassess; consider transfer-out earlier |
| Convert to definitive | Stable physiology; no incoming casualties; equipment and blood supply intact; patient cannot be safely evacuated | Single-stage definitive closure with awareness of risk |
| Post-operative disposition | End of operative phase | Holding for stabilization or direct EVAC depending on transport timeline |

## Linked ELOs

| TLO | ELO | Primary or Secondary |
|-----|-----|----|
| Clinical Ops | CO-7 (equipment familiarization) | Primary |
| Clinical Ops | CO-8 (medical equipment maintenance) | Primary |
| Clinical Ops | CO-10 (blood management — surgical context) | Primary |
| Clinical Ops | CO-14 (clinical decision-making) | Primary |
| Team Development | TD-2 (cross-training) | Primary |
| Team Development | TD-4 (CRM) | Primary |
| Team Development | TD-9 (task org FRSS) | Primary |
| Prepare to Receive | PR-15 (surgical rehearsal) | Primary |

## Forms & Documentation

- Operative note.
- Anesthesia record.
- Surgical safety checklist (WHO-style or local equivalent).
- Post-operative handoff to Holding.
- Damage control follow-up plan for the receiving facility.

## Reference Imagery

{/* TBD: FRSS OR layout; sterilization workflow; instrument set photo — all publicly releasable */}

---

*Last reviewed: {/* TBD */} • OPSEC reviewed: {/* TBD */}*
```

### Holding (Silver 48)

```mdx
{/* src/content/docs/nodes/holding.mdx */}
---
title: Holding (Silver 48)
description: Post-resuscitative and post-surgical patient holding for a defined window prior to evacuation, focused on stabilization and transport readiness.
sidebar:
  order: 6
---

## Mission

Holding receives casualties from STP or FRSS and manages them through a defined window — nominally up to 48 hours — until they can be evacuated to higher echelon. The mission is physiological stabilization, ongoing resuscitation as needed, vigilance for missed injuries and post-operative complications, and preparation for transport.

The "Silver 48" designator refers to the standard 48-hour holding capability. {/* TBD: confirm "Silver 48" terminology — appears to be USMC-specific; may be local 1st Med Bn convention. Document or replace with standard ARSC/JTS terminology. */}

## Personnel & Task Organization

- **Holding officer in charge**: typically a Family Medicine, Internal Medicine, or Critical Care-capable physician.
- **Critical care nurse(s)**: continuous monitoring; medication administration; family liaison if applicable.
- **ICU corpsmen**: bedside care; vitals; documentation.
- **Respiratory therapy capability**: where available, integrated; otherwise covered by cross-trained personnel.

24-hour coverage requires shift planning that protects sleep and enables sustained vigilance.

## Equipment & Logistics

- Monitored beds with continuous vital signs capability.
- Ventilator capability for ventilated patients.
- Oxygen sustainment (sufficient for the holding duration plus contingency margin).
- Medication management with controlled-substance accountability.
- Blood products available for ongoing transfusion needs.
- Active and passive warming for hypothermia management.
- Pressure-area care and basic mobilization equipment.
- Documentation surface, ICU flow sheets, MAR.

**AMAL:** {/* TBD: confirm Holding-specific AMAL identifier and contents */}

## Doctrinal References

- MCRP 4-11.1G
- JTS CPG: Damage Control Resuscitation (continued in Holding)
- JTS CPG: Prolonged Casualty Care
- JTS CPG: Ventilator Management
- JTS CPG: Pain, Anxiety, and Delirium in Combat Casualty Care
- JTS CPG: Acute Kidney Injury

## Clinical Practice Guidelines

Post-resuscitative bundle. Analgesia and sedation protocols. Re-evaluation cadence for missed injuries (tertiary survey at 24 hours).

## Decision Points

| Decision | Trigger | Outcome |
|---|---|---|
| Transition to Prolonged Holding (Zinc 48) | Evac delay extends beyond standard 48-hour window | Prolonged Holding |
| Return to OR | Bleeding; abdominal compartment syndrome; missed injury | FRSS/DCS |
| Evacuation readiness | Physiologic stability adequate for the planned transport | EVAC |
| Expectant transition | Post-op deterioration without recoverable trajectory; MASCAL pressure on resources | T4 — Mortuary Affairs disposition with documentation |
| Tertiary survey | At 24 hours or when patient is stable and awake | Identify missed injuries; document and address |

## Linked ELOs

| TLO | ELO | Primary or Secondary |
|-----|-----|----|
| Prepare to Receive | PR-6 (individual patient management) | Primary |
| Prepare to Receive | PR-7 (patient holding plan) | Primary |
| Clinical Ops | CO-10 (blood management — sustainment) | Primary |
| Clinical Ops | CO-11 (narcotics management) | Primary |
| Clinical Ops | CO-14 (clinical decision-making) | Primary |
| Trauma Integration | TI-5 (documentation/reporting) | Primary |
| Trauma Integration | TI-6 (patient tracking) | Primary |
| Team Development | TD-7 (ethics — expectant management) | Primary |

## Forms & Documentation

- ICU flow sheet.
- Medication Administration Record (MAR).
- Tertiary survey documentation.
- Transfer summary template for receiving facility.

## Reference Imagery

{/* TBD: Holding bay layout; ventilator setup; medication storage configuration */}

---

*Last reviewed: {/* TBD */} • OPSEC reviewed: {/* TBD */}*
```

### Prolonged Holding (Zinc 48)

```mdx
{/* src/content/docs/nodes/prolonged-holding.mdx */}
---
title: Prolonged Holding (Zinc 48)
description: Extended holding capability beyond the standard 48-hour window when evacuation is delayed, integrating Prolonged Casualty Care doctrine.
sidebar:
  order: 7
---

## Mission

Prolonged Holding receives casualties whose evacuation is delayed beyond the standard 48-hour Holding window. The mission shifts from "stabilize and transport" to "sustain physiology and clinical condition without imminent transport," integrating JTS Prolonged Casualty Care (PCC) doctrine.

The "Zinc 48" designator refers to the prolonged holding state. {/* TBD: confirm terminology — likely USMC-specific or local convention */}

## Personnel & Task Organization

The same Holding team continues, but with explicit attention to crew rest and rotation. Sustained operations require deliberate planning for sleep, food, and time away from the bedside. Cross-training widens — every team member becomes more general because individual specialization is unsustainable across days and weeks.

Mental health considerations apply to both casualties and providers; pre-planned check-ins and command-aware indicators of distress matter.

## Equipment & Logistics

Sustainment-oriented:

- Pharmacy resupply lines with longer planning horizons.
- Oxygen generation or large stored supplies.
- Nutrition planning (enteral feeding capability; parenteral where available).
- Pressure-ulcer prevention (turning protocols; pressure-redistributing surfaces).
- Wound care supplies for extended periods.
- Mental health support resources for casualties (and providers).
- Communication with the receiving facility for ongoing care planning.

## Doctrinal References

- JTS CPG: Prolonged Casualty Care (foundational reference)
- MCRP 4-11.1G
- JTS CPG: Nutrition in Prolonged Field Care
- JTS CPG: Mental Health in Prolonged Field Care
- JTS CPG: Wound Management

## Clinical Practice Guidelines

The full PCC bundle anchors practice. Re-evaluate every patient against PCC criteria daily — what would change if evacuation became available now versus 24 more hours.

## Decision Points

| Decision | Trigger | Outcome |
|---|---|---|
| Transition from Silver to Zinc | Evac delay confirmed beyond 48 hours | Engage PCC framework |
| Sustainment thresholds | Resource consumption versus sustainment capacity | Re-prioritize; consider expectant for non-recoverable patients under MASCAL |
| Provider rotation | Approaching duty-cycle limits | Planned hand-off; structured AAR |
| Family/command notification | As policy and operational security permit | Coordinate per current policy |
| Recognize "this is changing the mission" | Sustained PCC operations meaningfully degrading the team's primary mission | Communicate to Command; consider augmentation request |

## Linked ELOs

| TLO | ELO | Primary or Secondary |
|-----|-----|----|
| Prepare to Receive | PR-6 (individual patient management) | Primary |
| Prepare to Receive | PR-7 (extended holding plan) | Primary |
| Clinical Ops | CO-11 (narcotics management — sustainment) | Primary |
| Clinical Ops | CO-14 (clinical decision-making) | Primary |
| Team Development | TD-8 (resilience under sustained operations) | Primary |
| Team Development | TD-7 (ethics — expectant in prolonged context) | Primary |

## Forms & Documentation

- Prolonged-care handoff template.
- Rotation/duty schedule.
- Sustainment status board.
- Daily PCC re-evaluation note.

## Reference Imagery

{/* TBD: prolonged holding configuration sketches; sustainment workflow diagram */}

---

*Last reviewed: {/* TBD */} • OPSEC reviewed: {/* TBD */}*
```

### EVAC / ERC

```mdx
{/* src/content/docs/nodes/evac-erc.mdx */}
---
title: EVAC / ERC
description: Preparing casualties for and executing evacuation to higher echelon of care; En Route Care.
sidebar:
  order: 8
---

## Mission

The Evacuation / En Route Care node prepares the casualty for transport to the next Role of care and executes that transport. ERC encompasses the clinical care delivered during transport — by team members, augmenting personnel, or dedicated en route care providers. The mission is continuous physiological stability across the handoff and across the movement.

## Personnel & Task Organization

- **En route care provider**: qualifications match the casualty's clinical state. A ventilated, transfusing patient requires a critical-care-capable provider; a stable T3 may require only a corpsman.
- **Backfill**: every provider sent on transport leaves a hole at the Role 2. Pre-planned backfill is part of the EVAC plan.
- **Coordination**: with the launching transport platform, with the receiving facility, with command operations.

## Equipment & Logistics

- **Transport ventilator** with sufficient battery and gas for transport duration plus contingency.
- **Portable monitor** with vitals, ETCO2, SpO2; documentation of trends in transit.
- **Blood for transport** — cooled, accountable; sufficient for predicted needs plus margin.
- **Oxygen** for transport duration.
- **Pharmacy** — secured, transport-suitable, accountable through the transport.
- **Communications** during transit — with both originating and receiving facility.

## Doctrinal References

- JP 4-02
- MCRP 4-11.1G
- JTS CPG: En Route Care
- JTS CPG: Aeromedical Evacuation considerations
- Service-specific CASEVAC and MEDEVAC distinctions {/* TBD: link */}

## Clinical Practice Guidelines

En Route Care bundle. Airway management in transport. Transfusion in transport. Hypothermia management on rotary-wing or austere ground transport.

## Decision Points

| Decision | Trigger | Outcome |
|---|---|---|
| Evacuation precedence | Casualty clinical category and operational situation | Urgent / Priority / Routine per 9-line standard |
| Transport platform | Available platforms; weather; threat; distance; clinical need | Rotary, fixed-wing, ground, maritime as available |
| Provider escort decision | Clinical complexity vs. backfill cost | Match provider skill to casualty acuity |
| Abort criteria | Loss of capability in transport (oxygen, blood, monitoring); platform issue; new casualties at the Role 2 | Return to origin; reassess |
| Handoff | Arrival at receiving facility | Structured handoff with documentation |

## Linked ELOs

| TLO | ELO | Primary or Secondary |
|-----|-----|----|
| Prepare to Receive | PR-8 (patient movement/evacuation plan) | Primary |
| Prepare to Receive | PR-10 (movement to/from team location) | Primary |
| Trauma Integration | TI-2 (continuum of care) | Primary |
| Trauma Integration | TI-3 (local asset integration) | Primary |
| Trauma Integration | TI-5 (documentation/reporting) | Primary |
| Trauma Integration | TI-6 (patient tracking continuity) | Primary |

## Forms & Documentation

- 9-line MEDEVAC request.
- En route care record with vitals trend and interventions.
- Receiving-facility handoff template.
- Continuity of DoDTR data fields.

## Reference Imagery

{/* TBD: 9-line MEDEVAC reference card; transport platform considerations; loading configurations — publicly releasable */}

---

*Last reviewed: {/* TBD */} • OPSEC reviewed: {/* TBD */}*
```

### Mortuary Affairs

```mdx
{/* src/content/docs/nodes/mortuary-affairs.mdx */}
---
title: Mortuary Affairs
description: Dignified care of remains, preservation of evidence, and coordination with Mortuary Affairs Collection Points when an ARSC team has decedents.
sidebar:
  order: 9
---

## Mission

The Role 2 is not the doctrinal home of Mortuary Affairs (MA), but Role 2 teams have decedents — from triage T4 categorization, from intra-operative or post-operative deaths, from prolonged holding deterioration. The team's mission with respect to decedents is dignified care of remains, accurate pronouncement and documentation, preservation of evidence and personal effects, and coordination of transfer to a Mortuary Affairs Collection Point (MACP).

## Personnel & Task Organization

In the absence of dedicated MA assets at the Role 2, designated team members fulfill MA functions. Pronouncement is a physician role. Documentation, chain-of-custody, and preparation of remains can be assigned to corpsmen and nursing staff with proper training.

Notification of family is a command function, not a Role 2 function. The team's responsibility ends at proper documentation and handoff.

## Equipment & Logistics

- Human remains pouches, in sufficient supply for predicted MASCAL conditions.
- Personal effects bags and inventory forms.
- Identification tags or equivalent.
- Refrigeration capability where mission duration requires (otherwise rapid handoff to MACP).
- Documentation forms.

## Doctrinal References

- JP 4-06, *Mortuary Affairs* {/* TBD: confirm current */}
- MCRP 4-11.8 (or current MA reference) {/* TBD: confirm */}
- Service-specific guidance on physician pronouncement of death.
- Local command policy on MACP coordination.

## Clinical Practice Guidelines

Not directly applicable in the clinical CPG sense. JTS guidance on declaration of death and on performance improvement applies.

## Decision Points

| Decision | Trigger | Outcome |
|---|---|---|
| Pronouncement | Clinical death | Documented pronouncement by physician |
| Chain of custody initiation | Decedent enters Role 2 control | Tag, document, secure |
| Personal effects | Recovered with remains | Inventoried, bagged separately, transferred with remains |
| Transfer to MACP | MACP coordination complete | Document handoff; close chain of custody at the Role 2 |
| Forensic considerations | Suspected non-battle death; criminal investigation potential | Preserve evidence; minimize manipulation; coordinate with appropriate authority |

## Linked ELOs

| TLO | ELO | Primary or Secondary |
|-----|-----|----|
| Team Development | TD-7 (ethics) | Primary |
| Team Development | TD-8 (resilience — moral injury context) | Primary |
| Trauma Integration | TI-5 (documentation) | Primary |

## Forms & Documentation

- Pronouncement note.
- Personal effects inventory.
- Chain-of-custody form.
- MACP handoff documentation.
- Internal AAR contribution covering circumstances.

## Reference Imagery

{/* TBD: chain-of-custody flow diagram (publicly releasable) */}

---

*Last reviewed: {/* TBD */} • OPSEC reviewed: {/* TBD */}*
```

---

## Standards & Expectations Pages

These pages scaffold the one-stop-shop section where CDR Ford's command SOPs, expectation documents, and training/qualification standards are embedded as PDFs. The four index pages below are populated in v1; individual document pages are added in subsequent content passes as PDFs become available. The `_template.mdx` file at the bottom of this section is the pattern Code follows when creating each document page.

### Section index

```mdx
{/* src/content/docs/standards/index.mdx */}
---
title: Standards & Expectations
description: Command SOPs, expectation documents, and training and qualification standards for personnel of 1st Medical Battalion.
---

## What's in this section

This section is the one-stop reference for personnel-facing command documents. Three categories:

- **[Standard Operating Procedures](/standards/sops/)** — operational procedures: MASCAL, blood management, sterilization, communications, cold chain, and others as added.
- **[Expectations](/standards/expectations/)** — expectations of newly reporting personnel, professional standards, conduct.
- **[Training & Qualifications](/standards/training/)** — training plans, qualification standards, readiness criteria.

Every document is the original PDF, embedded so it can be read in the browser, opened in a new tab, or downloaded. Documents in this section are publicly releasable as-is; OPSEC review is logged before any document is added.

## How to use it

If you are reporting in for the first time, start with the **Expectations** category. If you have a specific operational question, search by keyword or browse **SOPs**. If you are working on qualification or readiness milestones, see **Training & Qualifications**.

## Document index

{/* TBD: a curated cross-category list of high-priority documents, populated as PDFs are added */}

## Updates

Documents are versioned. Each page shows the version number, effective date, and last-reviewed date. Substantive changes to any document appear in the [Changelog](/changelog/).

## Reporting an issue

If you find a document that appears outdated, mis-categorized, or incorrect, see [Contributing](/contributing/) for the reporting workflow.
```

### SOPs sub-index

```mdx
{/* src/content/docs/standards/sops/index.mdx */}
---
title: Standard Operating Procedures
description: Command SOPs covering operational procedures for 1st Medical Battalion personnel.
sidebar:
  label: SOPs
---

## SOPs in this section

Command SOPs are organized below by functional area. Each linked page embeds the current version of the SOP with metadata (version, effective date, last reviewed, owner) and provides "Open in new tab" and "Download" actions.

{/* TBD: list of SOPs as they are added. Anticipated content includes:
  - MASCAL SOP
  - Blood management SOP (cold chain, walking blood bank activation)
  - Sterilization SOP
  - Communications SOP
  - Mortuary affairs / decedent handling SOP
  - Equipment maintenance and accountability SOP
  - Narcotics management SOP
  - CBRNE SOP
*/}

## Cross-references

SOPs in this section are referenced from the relevant Role 2 node pages. For example, the Blood Management SOP is referenced from [STP / DCR](/nodes/stp-dcr/), [FRSS / DCS](/nodes/frss-dcs/), and [Holding](/nodes/holding/). The MASCAL SOP is referenced from [Prepare to Receive](/nodes/prepare-to-receive/) and [Triage](/nodes/triage/).
```

### Expectations sub-index

```mdx
{/* src/content/docs/standards/expectations/index.mdx */}
---
title: Expectations
description: Expectations of newly reporting personnel, professional standards, and conduct documents.
sidebar:
  label: Expectations
---

## Documents in this section

This sub-section hosts the command's expectation documents — what newly reporting personnel can expect from the command, and what the command expects from them.

{/* TBD: list of expectation documents as they are added. Anticipated content includes:
  - Welcome / expectations letter for newly reporting personnel
  - Professional standards and conduct
  - Communication and notification expectations
  - Leave and liberty conduct
*/}

## For new check-ins

If you are checking in to 1st Medical Battalion: read the welcome and expectations letter first. The patient-flow node closest to your billet on the [homepage](/) gives you the clinical and operational picture; this section gives you the conduct, communications, and command-relationship picture.
```

### Training & Qualifications sub-index

```mdx
{/* src/content/docs/standards/training/index.mdx */}
---
title: Training & Qualifications
description: Training plans, qualification standards, and readiness criteria for ARSC team personnel.
sidebar:
  label: Training & Qualifications
---

## Documents in this section

Training plans, qualification standards, and readiness criteria for personnel assigned to STP, FRSS, and Holding capability sets.

{/* TBD: list of training and qualifications documents as they are added. Anticipated content includes:
  - Individual qualification standards by role
  - Team-level training plan and milestones
  - Readiness criteria and assessment tools
  - Pre-deployment training requirements
  - Sustainment training cadence
*/}

## Cross-references

Training and qualifications content connects directly to the [ELO Crosswalk](/elo-crosswalk/) — qualification standards typically map to specific ARSC ELOs, and the crosswalk shows which Role 2 nodes those ELOs apply at.

For broader doctrinal context on training expectations, see [Team Development & Dynamics](/team-development/) and [Trauma System Integration](/trauma-integration/).
```

### Document page template

```mdx
{/* src/content/docs/standards/_template.mdx
    This is a TEMPLATE file. Filename starts with underscore so Starlight does not publish it.
    When CDR Ford supplies a new SOP, expectation, or training document:
      1. Copy this file to the appropriate sub-directory:
         /standards/sops/{slug}.mdx, /standards/expectations/{slug}.mdx, or /standards/training/{slug}.mdx
      2. Place the PDF at /public/standards/{category}/{slug}.pdf
      3. Update the frontmatter and PdfEmbed props with the document's metadata
      4. Run the OPSEC checklist before committing
*/}
---
title: "{Document title here}"
description: "{Short description of what the document covers}"
sidebar:
  label: "{Short label for sidebar}"
---

import PdfEmbed from '../../../components/PdfEmbed.astro';

<PdfEmbed
  src="/standards/{category}/{slug}.pdf"
  title="{Document title here}"
  version="{e.g. v1.0}"
  effectiveDate="{ISO date, e.g. 2026-04-01}"
  lastReviewed="{ISO date}"
  owner="1st Med Bn / CMO"
  pages={ /* page count as a number */ }
/>

## Notes

{/* Optional: any cross-references, related node pages, related SOPs, or commentary that
    should accompany the embedded document. Keep brief — the document itself is the content. */}

## Related

{/* Optional: links to related Role 2 node pages where this document applies in practice */}
```

---

## Reference Pages

### ELO Crosswalk

```mdx
{/* src/content/docs/elo-crosswalk.mdx */}
---
title: ELO Crosswalk
description: Sortable mapping of every ARSC Enabling Learning Objective to its primary and secondary nodes in the Role 2 patient flow.
---

import EloCrosswalkTable from '../../components/EloCrosswalkTable.astro';

## Purpose

This page maps every ARSC Enabling Learning Objective (ELO) to the node(s) in the Role 2 patient flow where it primarily applies. It is the audit view for the site: a way to see at a glance which ELOs are addressed where, and to identify gaps as content matures.

## How to read it

Each row is one ELO. The "Primary node" column lists the page where this ELO receives its main treatment. "Secondary nodes" lists pages where the ELO appears with less depth, usually because it expresses differently in those contexts. "Coverage status" tracks the maturity of the content: Not started, Drafted, Reviewed, Published.

## Crosswalk

<EloCrosswalkTable />

## Source data

Underlying data lives in `src/data/elo-crosswalk.json`. To update an ELO's coverage or mapping, edit the JSON file and submit a pull request.

## Note on TLO completeness

The ARSC Joint Training Standard includes additional Terminal Learning Objectives beyond the four currently captured here (Team Development & Dynamics, Trauma System Integration, Clinical Operations in the Austere Environment, Prepare to Receive). The patient-flow diagram on the homepage already implies content for Receive, Treat, Disposition, and Recovery — which the full ARSC ELT covers as separate TLOs. Incorporation of those TLOs is tracked as a known gap.
```

### Doctrine

```mdx
{/* src/content/docs/doctrine.mdx */}
---
title: Doctrine
description: Index of doctrinal references cited across the site, with links to canonical sources.
---

## How this page works

This is a curated index — not a doctrinal repository. Every entry links to the canonical source, identified by publication number and (where verified) edition or version. Entries do not reproduce content. Where a publication has restricted distribution, the index notes that fact and does not link.

Verify before citing. Doctrinal publications are revised; this index attempts to track current versions but lags behind authoritative sources.

## Marine Corps

| Pub | Title | Notes |
|---|---|---|
| MCDP 1-0 | Marine Corps Operations | Foundational |
| MCWP 5-10 | Marine Corps Planning Process | MCPP — used in mission analysis content {/* TBD: confirm current */} |
| MCRP 4-11.1G | Health Service Support Tactics, Techniques, and Procedures | Primary HSS reference for USMC {/* TBD: confirm current edition */} |
| MCRP 3-40A.7 | MAGTF Health Service Support | {/* TBD: confirm */} |
| MCRP 4-11.8 | Mortuary Affairs reference | {/* TBD: confirm current title and number */} |
| MCO 6000.20 | Health Services Concept of Operations | {/* TBD: confirm current */} |

## Joint

| Pub | Title | Notes |
|---|---|---|
| JP 4-02 | Joint Health Services | Primary joint HSS reference {/* TBD: confirm current */} |
| JP 4-06 | Mortuary Affairs | {/* TBD: confirm */} |
| JP 5-0 | Joint Planning | Underlying JP behind MCPP |

## Joint Trauma System

JTS Clinical Practice Guidelines are indexed separately on the [CPGs page](/cpgs/).

ARSC documentation:

- ARSC Joint Training Standard / Tri-service Curriculum (the source of TLOs and ELOs cited across this site)
- JTS-sanctioned forms (Trauma Flow Sheet, post-operative documentation, en route care record, etc.) — {/* TBD: link to a curated list */}

## Navy / BUMED

| Pub | Title | Notes |
|---|---|---|
| BUMEDINST 6710 series | Controlled substances | {/* TBD: confirm current */} |
| BUMEDNOTE 6000 | Enterprise-Wide Privileging | Relevant for operational privileging context |
| NAVMED P-5010 series | Preventive medicine | Where applicable |

## Department of Defense

| Pub | Title | Notes |
|---|---|---|
| DoDI on accountability of sensitive items | {/* TBD: identify and link */} |

## Other

- TCCC Guidelines (Committee on Tactical Combat Casualty Care, current edition) {/* TBD */}
- Defense Medical Ethics App
```

### CPGs

```mdx
{/* src/content/docs/cpgs.mdx */}
---
title: JTS Clinical Practice Guidelines
description: Linked index of Joint Trauma System Clinical Practice Guidelines referenced across the site.
---

## How this page works

Joint Trauma System (JTS) Clinical Practice Guidelines (CPGs) are the operational standard of care for combat casualty care. This page is a linked index — each entry points to the canonical JTS source. Content is not reproduced.

Organized by clinical domain. The same CPG may apply at multiple nodes; the right-hand column indicates which node pages reference it most heavily.

## Hemorrhage control and resuscitation

| CPG | Primary nodes |
|---|---|
| Damage Control Resuscitation | STP/DCR, FRSS/DCS, Holding |
| Pre-Hospital Blood Transfusion | STP/DCR |
| Walking Blood Bank | STP/DCR, FRSS/DCS, Prepare to Receive |
| Massive Transfusion | STP/DCR, FRSS/DCS |
| TXA in Combat Casualty Care | STP/DCR |
| Hypothermia Prevention and Management | STP/DCR, FRSS/DCS, Holding |
| REBOA | STP/DCR, FRSS/DCS (where within scope) |

## Surgical

| CPG | Primary nodes |
|---|---|
| Damage Control Surgery | FRSS/DCS |
| Wound Management | FRSS/DCS, Holding, Prolonged Holding |
| Compartment Syndrome | FRSS/DCS, Holding |
| Vascular Injury | FRSS/DCS |
| Open Abdomen Management | FRSS/DCS, Holding |

## Critical care and Holding

| CPG | Primary nodes |
|---|---|
| Ventilator Management | Holding, Prolonged Holding, EVAC |
| Pain, Anxiety, and Delirium | Holding, Prolonged Holding |
| Acute Kidney Injury | Holding, Prolonged Holding |

## Prolonged Casualty Care

| CPG | Primary nodes |
|---|---|
| Prolonged Casualty Care (foundational) | Prolonged Holding |
| Nutrition in Prolonged Field Care | Prolonged Holding |
| Mental Health in Prolonged Field Care | Prolonged Holding |

## Triage and Disposition

| CPG | Primary nodes |
|---|---|
| Triage of Casualties | Triage |
| En Route Care | EVAC |

## System

| CPG | Primary nodes |
|---|---|
| Performance Improvement | Trauma System Integration (cross-cutting) |

## Verifying currency

JTS CPGs are revised periodically. Before citing in clinical practice or in this site's content, verify the version number against the current JTS CPG library. {/* TBD: insert link to JTS CPG library */}
```

### Contributing

```mdx
{/* src/content/docs/contributing.mdx */}
---
title: Contributing
description: How to propose corrections or contribute content to the ARSC USMC Field Reference.
---

## Reporting an error

The most useful contribution is correcting an error. If a doctrinal citation is out of date, a CPG link is broken, an ELO is misattributed, or a clinical detail is wrong: report it. {/* TBD: contact mechanism — email, GitHub issue, contact form */}

Include:

- The page where the error appears.
- A specific quote or section identifier.
- The correction, with a source if applicable.

## Submitting content

The site is maintained as a public Git repository of MDX files. Substantive content additions go through a pull-request workflow:

1. Fork the repository.
2. Create a branch with a descriptive name.
3. Edit or add the MDX file(s).
4. Run the OPSEC checklist (in the repository) on any new or substantively edited page.
5. Submit a pull request describing the change and citing sources.

Contributions are reviewed for accuracy, OPSEC compliance, doctrinal alignment, and editorial consistency before merging. Pull requests that lack source citation will be returned for revision.

## Authorship and attribution

Significant content contributions are credited on the relevant page or in the Acknowledgments section of the [About](/about/) page. Minor edits and corrections are credited in commit history.

## What we cannot accept

- Classified or controlled-unclassified content.
- Personally identifying information.
- Specific unit locations, planned operations, or named exercise specifics not in open press.
- AMAL line-item NSN data not already in publicly released NAVMED references.
- Command-internal SOPs not approved for public release.
- Reproduced copyrighted material beyond fair-use citation.

## Repository

{/* TBD: GitHub URL */}
```

### Changelog

```mdx
{/* src/content/docs/changelog.mdx */}
---
title: Changelog
description: Substantive updates to the ARSC USMC Field Reference.
---

## v0.1 — Initial release

{/* TBD: date */}

Site launched with the following pages:

- Homepage with interactive Role 2 patient flow
- About / governance / disclaimer
- Three cross-cutting TLO pages: Team Development & Dynamics, Trauma System Integration, Clinical Operations in the Austere Environment
- Nine node pages: Austere Prep / R2RA, Prepare to Receive, Triage, STP / DCR, FRSS / DCS, Holding (Silver 48), Prolonged Holding (Zinc 48), EVAC / ERC, Mortuary Affairs
- ELO Crosswalk
- Doctrine index
- JTS CPG index
- Contributing
- Changelog (this page)

Known gaps tracked in the [Open Decisions section of the Project Plan](https://github.com/{/* TBD */}/blob/main/PROJECT_PLAN.md#10-open-decisions).
```

---

## Structured Data Files

### ELO crosswalk JSON

```json
// src/data/elo-crosswalk.json
[
  {"id": "TD-1", "tlo": "Team Development", "text": "Analyze relevant CPGs as it relates to team members' skills and practice.", "primary": "team-development", "secondary": ["stp-dcr", "frss-dcs", "holding"], "status": "drafted"},
  {"id": "TD-2", "tlo": "Team Development", "text": "Perform team-level cross-training in critical skills.", "primary": "team-development", "secondary": ["stp-dcr", "frss-dcs", "holding", "prolonged-holding"], "status": "drafted"},
  {"id": "TD-3", "tlo": "Team Development", "text": "Describe elements of non-traditional roles for team members in the austere environment.", "primary": "team-development", "secondary": ["stp-dcr", "frss-dcs", "holding"], "status": "drafted"},
  {"id": "TD-4", "tlo": "Team Development", "text": "Demonstrate crew resource management (CRM).", "primary": "team-development", "secondary": ["stp-dcr", "frss-dcs", "triage"], "status": "drafted"},
  {"id": "TD-5", "tlo": "Team Development", "text": "Demonstrate incorporation of supporting personnel.", "primary": "team-development", "secondary": ["austere-prep", "prepare-to-receive"], "status": "drafted"},
  {"id": "TD-6", "tlo": "Team Development", "text": "Explain the importance of ARSC team members' familiarization with MDMP.", "primary": "team-development", "secondary": ["austere-prep"], "status": "drafted"},
  {"id": "TD-7", "tlo": "Team Development", "text": "Distinguish between ethical principles in clinical practice and combat casualty care.", "primary": "team-development", "secondary": ["triage", "holding", "mortuary-affairs"], "status": "drafted"},
  {"id": "TD-8", "tlo": "Team Development", "text": "Discuss key components of individual and ARSC team resilience.", "primary": "team-development", "secondary": ["prolonged-holding", "mortuary-affairs"], "status": "drafted"},
  {"id": "TD-9", "tlo": "Team Development", "text": "Understand personnel task organization (STP, FRSS, Holding).", "primary": "team-development", "secondary": ["stp-dcr", "frss-dcs", "holding"], "status": "drafted"},

  {"id": "TI-1", "tlo": "Trauma Integration", "text": "Describe the deployed trauma system.", "primary": "trauma-integration", "secondary": ["austere-prep", "evac-erc"], "status": "drafted"},
  {"id": "TI-2", "tlo": "Trauma Integration", "text": "Describe the relationship between unit location and continuum of care.", "primary": "trauma-integration", "secondary": ["austere-prep", "evac-erc"], "status": "drafted"},
  {"id": "TI-3", "tlo": "Trauma Integration", "text": "Describe local medical asset integration.", "primary": "trauma-integration", "secondary": ["austere-prep", "evac-erc"], "status": "drafted"},
  {"id": "TI-4", "tlo": "Trauma Integration", "text": "Describe the partner nation trauma system.", "primary": "trauma-integration", "secondary": ["austere-prep"], "status": "drafted"},
  {"id": "TI-5", "tlo": "Trauma Integration", "text": "Demonstrate documentation and reporting.", "primary": "trauma-integration", "secondary": ["stp-dcr", "frss-dcs", "holding", "evac-erc"], "status": "drafted"},
  {"id": "TI-6", "tlo": "Trauma Integration", "text": "Demonstrate integration of patient tracking system including patient identification and confidentiality.", "primary": "trauma-integration", "secondary": ["triage", "holding", "evac-erc"], "status": "drafted"},
  {"id": "TI-7", "tlo": "Trauma Integration", "text": "Conduct Performance Improvement (PI).", "primary": "trauma-integration", "secondary": [], "status": "drafted"},

  {"id": "CO-1", "tlo": "Clinical Ops", "text": "Plan a CONOP — mission analysis and COA development on mission receipt.", "primary": "austere-prep", "secondary": ["clinical-ops"], "status": "drafted"},
  {"id": "CO-2", "tlo": "Clinical Ops", "text": "Describe the team security posture.", "primary": "clinical-ops", "secondary": ["prepare-to-receive"], "status": "drafted"},
  {"id": "CO-3", "tlo": "Clinical Ops", "text": "Describe environmental factors that impact an ARSC team in an austere environment.", "primary": "clinical-ops", "secondary": [], "status": "drafted"},
  {"id": "CO-4", "tlo": "Clinical Ops", "text": "Plan for the effect of contingency/split operations on team capability and capacity.", "primary": "clinical-ops", "secondary": ["austere-prep"], "status": "drafted"},
  {"id": "CO-5", "tlo": "Clinical Ops", "text": "Describe unit-specific tactical proficiency.", "primary": "clinical-ops", "secondary": [], "status": "drafted"},
  {"id": "CO-6", "tlo": "Clinical Ops", "text": "Develop a comprehensive logistics plan.", "primary": "austere-prep", "secondary": ["clinical-ops"], "status": "drafted"},
  {"id": "CO-7", "tlo": "Clinical Ops", "text": "Demonstrate team equipment familiarization and operation.", "primary": "stp-dcr", "secondary": ["frss-dcs", "holding", "prepare-to-receive"], "status": "drafted"},
  {"id": "CO-8", "tlo": "Clinical Ops", "text": "Describe medical equipment maintenance plan.", "primary": "clinical-ops", "secondary": ["frss-dcs"], "status": "drafted"},
  {"id": "CO-9", "tlo": "Clinical Ops", "text": "Describe non-medical equipment maintenance and power management.", "primary": "clinical-ops", "secondary": [], "status": "drafted"},
  {"id": "CO-10", "tlo": "Clinical Ops", "text": "Demonstrate a blood management operation.", "primary": "stp-dcr", "secondary": ["frss-dcs", "holding"], "status": "drafted"},
  {"id": "CO-11", "tlo": "Clinical Ops", "text": "Develop a narcotics management plan.", "primary": "holding", "secondary": ["prolonged-holding", "clinical-ops"], "status": "drafted"},
  {"id": "CO-12", "tlo": "Clinical Ops", "text": "Describe accountability of sensitive items.", "primary": "clinical-ops", "secondary": [], "status": "drafted"},
  {"id": "CO-13", "tlo": "Clinical Ops", "text": "Develop and execute a comprehensive communications plan.", "primary": "austere-prep", "secondary": ["clinical-ops"], "status": "drafted"},
  {"id": "CO-14", "tlo": "Clinical Ops", "text": "Describe the clinical decision-making process in an austere environment.", "primary": "triage", "secondary": ["stp-dcr", "frss-dcs", "holding", "clinical-ops"], "status": "drafted"},
  {"id": "CO-15", "tlo": "Clinical Ops", "text": "Develop and execute a military brief to Command authority.", "primary": "austere-prep", "secondary": ["clinical-ops"], "status": "drafted"},

  {"id": "PR-1", "tlo": "Prepare to Receive", "text": "Describe structured team feedback process per Service-specific standard.", "primary": "prepare-to-receive", "secondary": [], "status": "drafted"},
  {"id": "PR-2", "tlo": "Prepare to Receive", "text": "Develop a patient flow plan.", "primary": "prepare-to-receive", "secondary": [], "status": "drafted"},
  {"id": "PR-3", "tlo": "Prepare to Receive", "text": "Conduct mission analysis to provide health service support.", "primary": "austere-prep", "secondary": ["prepare-to-receive"], "status": "drafted"},
  {"id": "PR-4", "tlo": "Prepare to Receive", "text": "Describe, communicate, and manage Command expectations (Commander SITREP).", "primary": "austere-prep", "secondary": [], "status": "drafted"},
  {"id": "PR-5", "tlo": "Prepare to Receive", "text": "Describe MEDROE planning for special patient populations.", "primary": "triage", "secondary": ["prepare-to-receive"], "status": "drafted"},
  {"id": "PR-6", "tlo": "Prepare to Receive", "text": "Describe individual patient management (non-clinical).", "primary": "holding", "secondary": ["prolonged-holding"], "status": "drafted"},
  {"id": "PR-7", "tlo": "Prepare to Receive", "text": "Develop a patient holding plan.", "primary": "holding", "secondary": ["prolonged-holding"], "status": "drafted"},
  {"id": "PR-8", "tlo": "Prepare to Receive", "text": "Develop a patient movement/evacuation plan.", "primary": "evac-erc", "secondary": ["prepare-to-receive"], "status": "drafted"},
  {"id": "PR-9", "tlo": "Prepare to Receive", "text": "Develop a communication plan.", "primary": "prepare-to-receive", "secondary": ["austere-prep"], "status": "drafted"},
  {"id": "PR-10", "tlo": "Prepare to Receive", "text": "Develop a movement plan for patients to and from team location, utilizing non-team support personnel and assets.", "primary": "austere-prep", "secondary": ["evac-erc"], "status": "drafted"},
  {"id": "PR-11", "tlo": "Prepare to Receive", "text": "Develop a MASCAL plan.", "primary": "prepare-to-receive", "secondary": ["triage"], "status": "drafted"},
  {"id": "PR-12", "tlo": "Prepare to Receive", "text": "Develop a CBRNE plan.", "primary": "prepare-to-receive", "secondary": [], "status": "drafted"},
  {"id": "PR-13", "tlo": "Prepare to Receive", "text": "Develop a contingency plan.", "primary": "prepare-to-receive", "secondary": [], "status": "drafted"},
  {"id": "PR-14", "tlo": "Prepare to Receive", "text": "Demonstrate equipment setup.", "primary": "prepare-to-receive", "secondary": [], "status": "drafted"},
  {"id": "PR-15", "tlo": "Prepare to Receive", "text": "Demonstrate a surgical rehearsal exercise prior to receiving patients.", "primary": "prepare-to-receive", "secondary": ["frss-dcs"], "status": "drafted"}
]
```

### Role 2 nodes JSON

```json
// src/data/role2-nodes.json
[
  {"slug": "austere-prep", "title": "Austere Prep / R2RA", "shortLabel": ["Austere Prep", "R2RA"], "x": 80, "y": 220, "w": 180, "h": 80, "mission": "The period from notification through arrival on objective during which the team prepares to deliver Role 2 capability."},
  {"slug": "prepare-to-receive", "title": "Preparing to receive patients", "shortLabel": ["Prepare to", "Receive"], "x": 320, "y": 220, "w": 180, "h": 80, "mission": "Setup, rehearsal, command coordination, and contingency planning before casualties arrive."},
  {"slug": "triage", "title": "Triage", "shortLabel": ["Triage"], "x": 560, "y": 220, "w": 180, "h": 80, "mission": "Sorting incoming casualties into immediate, delayed, minimal, and expectant categories; routing to the appropriate node."},
  {"slug": "stp-dcr", "title": "STP / DCR", "shortLabel": ["STP", "DCR"], "x": 800, "y": 280, "w": 180, "h": 80, "mission": "Damage Control Resuscitation prior to surgery or in lieu of surgery for non-surgical casualties."},
  {"slug": "frss-dcs", "title": "FRSS / DCS", "shortLabel": ["FRSS", "DCS"], "x": 800, "y": 380, "w": 180, "h": 80, "mission": "Damage Control Surgery — abbreviated operative intervention to control hemorrhage and contamination."},
  {"slug": "holding", "title": "Holding (Silver 48)", "shortLabel": ["Holding", "Silver 48"], "x": 800, "y": 480, "w": 180, "h": 80, "mission": "Post-resuscitative or post-surgical patient holding for up to 48 hours prior to evacuation."},
  {"slug": "prolonged-holding", "title": "Prolonged Holding (Zinc 48)", "shortLabel": ["Prolonged Holding", "Zinc 48"], "x": 800, "y": 580, "w": 180, "h": 80, "mission": "Extended holding when evacuation is delayed beyond the standard 48-hour window; integrates Prolonged Casualty Care doctrine."},
  {"slug": "evac-erc", "title": "EVAC / ERC", "shortLabel": ["EVAC", "ERC"], "x": 1020, "y": 580, "w": 160, "h": 80, "mission": "Preparing the casualty for and executing evacuation to the next echelon of care; en route care."},
  {"slug": "mortuary-affairs", "title": "Mortuary Affairs", "shortLabel": ["Mortuary Affairs"], "x": 1020, "y": 480, "w": 160, "h": 60, "mission": "Dignified care of remains; preservation of evidence; coordination with Mortuary Affairs Collection Points."}
]
```

---

*End of Content Drafts v0.1.*
