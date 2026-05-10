# DIAGRAM_SPEC.md — Role 2 Patient Flow Interactive SVG

> ARSC USMC Field Reference — Planning Document 4 of 4
>
> Companion documents:
> - `PROJECT_PLAN.md` (Section 4.4: Lucid disposition, Section 6: IA, Section 7: visual direction)
> - `CONTENT_OUTLINE.md` (Homepage section)
> - `CONTENT_DRAFTS.md` (role2-nodes.json)
> - `CLAUDE_CODE_KICKOFF.md` (Phase 3: diagram implementation)

---

## 1. Overview

The Role 2 Patient Flow diagram is the homepage centerpiece of the ARSC USMC Field Reference site. It is an interactive SVG component that reproduces the patient flow structure from the source Lucid diagram (Page 1) as a purpose-built web graphic.

**Purpose:** Provide a visual navigation interface for the entire site. Each node in the patient flow corresponds to a detailed content page under `/nodes/<slug>`. Three cross-cutting Terminal Learning Objectives (TLOs) frame the flow and link to their own content sections. The diagram serves as both a site map and a conceptual model of Role 2 operations.

**Source:** Lucid diagram, Page 1 — "ROLE 2" patient flow. This spec redesigns the Lucid layout into clean SVG coordinates optimized for web rendering at all viewport sizes.

**Component location:** `src/components/Role2Diagram.astro` (or `.tsx` if React islands are used)
**Render location:** `src/content/docs/index.mdx` (homepage)

---

## 2. Layout Specification

### 2.1 SVG Canvas

```
viewBox="0 0 1200 700"
```

- Width: 1200 SVG units
- Height: 700 SVG units
- The SVG element uses `width="100%"` and no fixed height, allowing viewBox-based scaling.
- `preserveAspectRatio="xMidYMid meet"` ensures uniform scaling and centering.

### 2.2 Title Area

| Element | x | y | Anchor | Font Size | Font Weight |
|---------|---|---|--------|-----------|-------------|
| "ROLE 2" | 600 | 40 | middle | 28px | 700 |
| "Patient Flow" | 600 | 62 | middle | 16px | 400 |

### 2.3 Cross-Cutting Band Areas

The three TLO bands frame the patient flow. They are rendered as two horizontal bands (top and bottom) plus visual side connectors to create a surrounding frame effect.

| Band | Region | x | y | width | height |
|------|--------|---|---|-------|--------|
| Top band (contains two TLOs) | Above node area | 60 | 80 | 1080 | 44 |
| Bottom band (one TLO) | Below node area | 60 | 590 | 1080 | 44 |

**Top band is split into two clickable zones:**

| TLO | x | y | width | height | Label | Route |
|-----|---|---|-------|--------|-------|-------|
| Team Development & Dynamics | 60 | 80 | 530 | 44 | "Team Development & Dynamics" | `/team-development` |
| Trauma System Integration | 600 | 80 | 540 | 44 | "Trauma System Integration" | `/trauma-integration` |

**Bottom band is one clickable zone:**

| TLO | x | y | width | height | Label | Route |
|-----|---|---|-------|--------|-------|-------|
| Clinical Operations in the Austere Environment | 60 | 590 | 1080 | 44 | "Clinical Operations in the Austere Environment" | `/clinical-ops` |

Band styling: filled with `#3D5C3E` at 10% opacity, 1px border `#3D5C3E` at 40% opacity, text in `#3D5C3E`, font-size 13px, font-weight 600, centered vertically and horizontally within each zone. Left and right vertical connectors (thin lines at x=60 and x=1140, from y=124 to y=590) complete the surrounding frame.

### 2.4 Node Positions

All flow nodes are rounded rectangles. Standard node size: **140w x 80h**. The terminal node (Mortuary Affairs) is smaller: **130w x 50h** with more rounded corners.

The main horizontal flow runs across the vertical center of the node area (y-center ~ 340). Surgical capability branches up; holding branches down.

| # | Node ID | Label (line 1) | Label (line 2) | x | y | w | h | Route |
|---|---------|---------------|----------------|---|---|---|---|-------|
| 1 | `austere-prep` | Austere Prep | R2RA | 80 | 300 | 140 | 80 | `/nodes/austere-prep` |
| 2 | `prepare-to-receive` | Preparing to | Receive Patients | 270 | 300 | 140 | 80 | `/nodes/prepare-to-receive` |
| 3 | `triage` | Triage | | 460 | 300 | 140 | 80 | `/nodes/triage` |
| 4 | `stp-dcr` | STP | DCR | 650 | 300 | 140 | 80 | `/nodes/stp-dcr` |
| 5 | `frss-dcs` | FRSS | DCS | 650 | 160 | 140 | 80 | `/nodes/frss-dcs` |
| 6 | `holding` | Holding | (Silver 48) | 650 | 440 | 140 | 80 | `/nodes/holding` |
| 7 | `prolonged-holding` | Prolonged Holding | (Zinc 48) | 650 | 540 | 140 | 60 | `/nodes/prolonged-holding` |
| 8 | `evac-erc` | EVAC | ERC | 900 | 300 | 140 | 80 | `/nodes/evac-erc` |
| 9 | `mortuary-affairs` | Mortuary | Affairs | 935 | 465 | 130 | 50 | `/nodes/mortuary-affairs` |

**Node center coordinates** (for edge routing):

| Node | cx | cy |
|------|----|----|
| austere-prep | 150 | 340 |
| prepare-to-receive | 340 | 340 |
| triage | 530 | 340 |
| stp-dcr | 720 | 340 |
| frss-dcs | 720 | 200 |
| holding | 720 | 480 |
| prolonged-holding | 720 | 570 |
| evac-erc | 970 | 340 |
| mortuary-affairs | 1000 | 490 |

### 2.5 Layout Rationale

- **Horizontal spacing:** ~190px between main-flow node left edges provides even gaps for arrow segments and labels.
- **Vertical branching:** FRSS/DCS is 140px above STP/DCR center; Holding is 140px below. This creates a balanced T-junction at the STP/DCR node.
- **Prolonged Holding** sits 90px below Holding (tighter spacing, subordinate relationship).
- **Mortuary Affairs** is offset right and below EVAC/ERC, visually marking it as a terminal/contingent outcome.
- **All nodes except Mortuary Affairs** are the same size for visual uniformity.

---

## 3. Cross-Cutting Bands

The three cross-cutting TLOs represent learning objectives that span the entire patient flow rather than mapping to a single node. They are rendered as a visual frame around the patient flow area.

### 3.1 Structure

```
+--[ Team Development & Dynamics ]--+--[ Trauma System Integration ]--+
|                                                                      |
|   [Austere Prep] → [Prepare] → [Triage] → [STP/DCR] → [EVAC/ERC]   |
|                                    |           ↑            ↓        |
|                                    |       [FRSS/DCS]  [Mort. Aff.]  |
|                                    |           ↓            ↑        |
|                                    |       [Holding]  ------→        |
|                                    |           ↓                     |
|                                    |   [Prolonged Holding]           |
|                                    └ - - - - - - - - - - - -→        |
|                                                                      |
+----------[ Clinical Operations in the Austere Environment ]----------+
```

### 3.2 Band Behavior

Each band zone is a single clickable region. On click, it navigates to the corresponding TLO content page:

| Band | Route | Content |
|------|-------|---------|
| Team Development & Dynamics | `/team-development` | Team roles, crew resource management, communication |
| Trauma System Integration | `/trauma-integration` | Integration with Role 1/Role 3, TCCC, en-route care |
| Clinical Operations in the Austere Environment | `/clinical-ops` | Resource constraints, field conditions, equipment |

### 3.3 Visual Hierarchy

The bands are intentionally subdued compared to the flow nodes. They use:
- Low-opacity fill to avoid competing with node contrast
- Smaller font size (13px vs 14px for nodes)
- No drop shadow or elevation
- A thin border rather than the heavier node border

This ensures the patient flow remains the primary visual focus while the TLOs are discoverable and clickable.

---

## 4. Visual Design

### 4.1 Node Styling

```css
/* Standard flow node */
.node rect {
  fill: #FFFFFF;
  stroke: #282c33;
  stroke-width: 2;
  rx: 8;
  ry: 8;
}

/* Node label text */
.node text {
  fill: #282c33;
  font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-anchor: middle;
  dominant-baseline: central;
}

/* Subtitle text (e.g., "R2RA", "(Silver 48)") */
.node text.subtitle {
  font-size: 11px;
  font-weight: 400;
  fill: #555;
}

/* Mortuary Affairs terminal node */
.node-terminal rect {
  fill: #FFFFFF;
  stroke: #282c33;
  stroke-width: 1.5;
  rx: 20;
  ry: 20;
  stroke-dasharray: 6 3;
}

.node-terminal text {
  font-size: 12px;
  font-weight: 500;
}
```

### 4.2 Edge Styling

```css
/* Standard flow edge */
.edge line,
.edge polyline,
.edge path {
  stroke: #282c33;
  stroke-width: 1.5;
  fill: none;
}

/* Contingent/terminal edge (to Mortuary Affairs) */
.edge-contingent path {
  stroke: #282c33;
  stroke-width: 1;
  stroke-dasharray: 6 3;
  fill: none;
}

/* Arrowhead marker */
marker#arrowhead polygon {
  fill: #282c33;
}
```

### 4.3 Color Palette

| Role | Color | Usage |
|------|-------|-------|
| Node fill (default) | `#FFFFFF` | White background for all nodes |
| Node border / text | `#282c33` | Dark charcoal, near-black |
| Subtitle text | `#555555` | Medium gray for secondary labels |
| Accent (Marine green) | `#3D5C3E` | Cross-cutting bands, hover tint |
| Hover fill | `#F0F2F0` | Very light gray-green tint |
| Focus ring | `#3D5C3E` | 2px solid, visible focus indicator |
| Active fill | `#E4E8E4` | Slightly darker than hover |
| Edge lines | `#282c33` | Same as node border |
| Band fill | `rgba(61, 92, 62, 0.10)` | Subtle green tint |
| Band border | `rgba(61, 92, 62, 0.40)` | Slightly more visible green |
| Band text | `#3D5C3E` | Marine green for band labels |

### 4.4 Typography

All text uses the system font stack: `system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`.

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| "ROLE 2" title | 28px | 700 | `#282c33` |
| "Patient Flow" subtitle | 16px | 400 | `#555` |
| Node primary label | 14px | 600 | `#282c33` |
| Node secondary label | 11px | 400 | `#555` |
| Band label | 13px | 600 | `#3D5C3E` |

### 4.5 Arrowhead Definition

```svg
<defs>
  <marker id="arrowhead" viewBox="0 0 10 7" refX="10" refY="3.5"
          markerWidth="10" markerHeight="7" orient="auto-start-reverse">
    <polygon points="0 0, 10 3.5, 0 7" fill="#282c33" />
  </marker>
  <marker id="arrowhead-dashed" viewBox="0 0 10 7" refX="10" refY="3.5"
          markerWidth="8" markerHeight="6" orient="auto-start-reverse">
    <polygon points="0 0, 10 3.5, 0 7" fill="#282c33" />
  </marker>
</defs>
```

---

## 5. Interaction States

### 5.1 Flow Nodes

| State | Fill | Stroke | Cursor | Transition |
|-------|------|--------|--------|------------|
| Default | `#FFFFFF` | `#282c33` 2px | default | — |
| Hover | `#F0F2F0` | `#282c33` 2px | pointer | `fill 150ms ease` |
| Focus (keyboard) | `#F0F2F0` | `#282c33` 2px + `#3D5C3E` 2px focus ring (3px offset) | — | `fill 150ms ease` |
| Active (pressed) | `#E4E8E4` | `#282c33` 2px | pointer | `fill 50ms ease` |

### 5.2 Cross-Cutting Bands

| State | Fill | Border | Cursor | Transition |
|-------|------|--------|--------|------------|
| Default | `rgba(61,92,62,0.10)` | `rgba(61,92,62,0.40)` 1px | default | — |
| Hover | `rgba(61,92,62,0.20)` | `rgba(61,92,62,0.60)` 1px | pointer | `fill 150ms ease` |
| Focus | `rgba(61,92,62,0.20)` | `#3D5C3E` 2px | — | `fill 150ms ease` |
| Active | `rgba(61,92,62,0.28)` | `rgba(61,92,62,0.60)` 1px | pointer | `fill 50ms ease` |

### 5.3 Mortuary Affairs (Terminal Node)

Same interaction states as standard nodes but with dashed border maintained across all states.

### 5.4 CSS Implementation

All interaction styles are applied via CSS using SVG class selectors. No JavaScript is required for hover/focus/active states. Example:

```css
.node a:hover rect { fill: #F0F2F0; }
.node a:focus { outline: none; }
.node a:focus rect { fill: #F0F2F0; }
.node a:focus .focus-ring { opacity: 1; }
.node a:active rect { fill: #E4E8E4; }
```

Each node group includes a hidden `.focus-ring` rect (same dimensions as the node rect but with 3px outset, 2px `#3D5C3E` stroke, `rx: 10`) that becomes visible on `:focus`.

---

## 6. Accessibility

### 6.1 SVG Root Element

```svg
<svg viewBox="0 0 1200 700" role="img"
     aria-label="Role 2 Patient Flow Diagram — interactive navigation of ARSC surgical care stations">
  <title>Role 2 Patient Flow</title>
  <desc>
    Interactive diagram showing the ARSC Role 2 patient flow. Patients move from
    Austere Prep / R2RA through Preparing to Receive Patients, Triage, and
    Shock Trauma Platoon / Damage Control Resuscitation. From STP/DCR, patients
    may be routed upward to FRSS / Damage Control Surgery, downward to Holding
    (Silver 48) or Prolonged Holding (Zinc 48), or onward to EVAC / En Route
    Care. Mortuary Affairs is a terminal destination. Three cross-cutting themes
    surround the flow: Team Development and Dynamics, Trauma System Integration,
    and Clinical Operations in the Austere Environment. Each station and theme
    is a clickable link to detailed reference content.
  </desc>
  <!-- diagram content -->
</svg>
```

### 6.2 Node Markup Pattern

Each node is an `<a>` element wrapping an SVG `<g>` group:

```svg
<a href="/nodes/triage" class="node" tabindex="0" aria-label="Triage — click for detailed reference">
  <g>
    <rect class="focus-ring" x="455" y="295" width="150" height="90" rx="10"
          fill="none" stroke="#3D5C3E" stroke-width="2" opacity="0" />
    <rect x="460" y="300" width="140" height="80" rx="8"
          fill="#FFFFFF" stroke="#282c33" stroke-width="2" />
    <text x="530" y="340" text-anchor="middle" font-size="14" font-weight="600">Triage</text>
  </g>
</a>
```

### 6.3 Keyboard Tab Order

Tab order follows the patient flow logic, implemented via explicit `tabindex` values or DOM order:

1. Austere Prep / R2RA
2. Preparing to Receive Patients
3. Triage
4. STP / DCR
5. FRSS / DCS
6. Holding (Silver 48)
7. Prolonged Holding (Zinc 48)
8. EVAC / ERC
9. Mortuary Affairs
10. Team Development & Dynamics (top-left band)
11. Trauma System Integration (top-right band)
12. Clinical Operations in the Austere Environment (bottom band)

### 6.4 Contrast Requirements

All text and interactive elements meet WCAG 2.1 AA requirements:

| Element | Foreground | Background | Contrast Ratio | Passes AA |
|---------|-----------|------------|----------------|-----------|
| Node text on white | `#282c33` | `#FFFFFF` | 13.2:1 | Yes |
| Subtitle text on white | `#555555` | `#FFFFFF` | 7.5:1 | Yes |
| Band text on band fill | `#3D5C3E` | `~#F2F5F2` | 6.1:1 | Yes |
| Node border on white | `#282c33` | `#FFFFFF` | 13.2:1 | Yes |
| Hover text on hover fill | `#282c33` | `#F0F2F0` | 12.0:1 | Yes |
| Focus ring on white | `#3D5C3E` | `#FFFFFF` | 6.4:1 | Yes |

### 6.5 Screen Reader Experience

A screen reader user tabbing through the diagram will hear:

> "Role 2 Patient Flow. Interactive diagram showing the ARSC Role 2 patient flow..."
> (desc content on initial focus)
>
> "Austere Prep / R2RA, link"
> "Preparing to Receive Patients, link"
> "Triage, link"
> ...

The `aria-label` on each `<a>` provides the spoken label. The `<desc>` on the SVG root provides the full diagram summary.

---

## 7. Responsive Behavior

### 7.1 Primary Strategy

The SVG scales via `viewBox` with `width: 100%` on the container. No JavaScript resize logic is needed for the base case.

```css
.role2-diagram-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.role2-diagram-container svg {
  width: 100%;
  height: auto;
}
```

### 7.2 Breakpoint Considerations

| Viewport Width | Behavior |
|----------------|----------|
| >= 1200px | Diagram renders at natural size, centered |
| 768px - 1199px | Diagram scales proportionally, all labels remain legible |
| 640px - 767px | Diagram scales to ~53% of natural size. 14px labels render at ~7.4px equivalent — still legible on high-DPI screens |
| 320px - 639px | Diagram scales to ~27% of natural size. At this scale, label legibility is marginal. See Section 7.3 |

### 7.3 Narrow Viewport Enhancement (< 640px)

At viewports below 640px, the component may optionally render a **simplified vertical list** as a fallback, using the same data source. This is a progressive enhancement, not a requirement for Phase 3 launch:

- Each node becomes a tappable card in a vertical stack
- Flow arrows become simple downward chevrons between cards
- Cross-cutting bands become a section header and footer

For Phase 3 MVP: the viewBox-scaled SVG is acceptable at all widths. The minimum practical width is ~375px (iPhone SE), where the diagram is ~31% scale. At this scale, node rectangles are approximately 43x25px — just meeting the 44px touch target on the longest axis. Users can pinch-to-zoom on mobile for detail.

### 7.4 Touch Target Compliance

At the narrowest supported viewport (320px), node dimensions in CSS pixels:

| Node Type | SVG Size | At 320px viewport | Meets 44px min? |
|-----------|----------|-------------------|-----------------|
| Standard node | 140 x 80 | ~37 x 21 px | Marginal — see note |
| Terminal node | 130 x 50 | ~35 x 13 px | No |

**Mitigation:** The SVG `<a>` elements should include an invisible hit-area rect that is at least 160x100 SVG units (centered on the node), providing a larger tap target:

```svg
<a href="/nodes/triage">
  <rect x="450" y="290" width="160" height="100" fill="transparent"
        class="hit-area" aria-hidden="true" />
  <!-- visible node rect and text -->
</a>
```

At 320px viewport, a 160x100 SVG-unit hit area renders as ~43x27px — close to the 44px minimum. At 375px (iPhone SE), it renders as ~50x31px.

---

## 8. Data Source

Node data is sourced from `src/data/role2-nodes.json`. This file is the single source of truth for node metadata, labels, routes, and coordinates.

### 8.1 Schema

```typescript
interface Role2Node {
  id: string;
  label: string;
  subtitle?: string;
  route: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type: "standard" | "terminal";
  description: string;     // for accessibility, used in aria-label
  tabOrder: number;
}

interface Role2Band {
  id: string;
  label: string;
  route: string;
  x: number;
  y: number;
  width: number;
  height: number;
  tabOrder: number;
}

interface Role2Edge {
  id: string;
  source: string;
  target: string;
  style: "solid" | "dashed";
  label?: string;
  waypoints: [number, number][];
}

interface Role2DiagramData {
  title: string;
  subtitle: string;
  viewBox: string;
  nodes: Role2Node[];
  bands: Role2Band[];
  edges: Role2Edge[];
}
```

### 8.2 Updated JSON (Appendix A)

```json
{
  "title": "ROLE 2",
  "subtitle": "Patient Flow",
  "viewBox": "0 0 1200 700",
  "nodes": [
    {
      "id": "austere-prep",
      "label": "Austere Prep",
      "subtitle": "R2RA",
      "route": "/nodes/austere-prep",
      "x": 80,
      "y": 300,
      "width": 140,
      "height": 80,
      "type": "standard",
      "description": "Austere Preparation and Role 2 Readiness Assessment",
      "tabOrder": 1
    },
    {
      "id": "prepare-to-receive",
      "label": "Preparing to Receive",
      "subtitle": "Patients",
      "route": "/nodes/prepare-to-receive",
      "x": 270,
      "y": 300,
      "width": 140,
      "height": 80,
      "type": "standard",
      "description": "Preparing to receive patients at the Role 2 facility",
      "tabOrder": 2
    },
    {
      "id": "triage",
      "label": "Triage",
      "subtitle": null,
      "route": "/nodes/triage",
      "x": 460,
      "y": 300,
      "width": 140,
      "height": 80,
      "type": "standard",
      "description": "Triage and initial patient assessment",
      "tabOrder": 3
    },
    {
      "id": "stp-dcr",
      "label": "STP",
      "subtitle": "DCR",
      "route": "/nodes/stp-dcr",
      "x": 650,
      "y": 300,
      "width": 140,
      "height": 80,
      "type": "standard",
      "description": "Shock Trauma Platoon and Damage Control Resuscitation",
      "tabOrder": 4
    },
    {
      "id": "frss-dcs",
      "label": "FRSS",
      "subtitle": "DCS",
      "route": "/nodes/frss-dcs",
      "x": 650,
      "y": 160,
      "width": 140,
      "height": 80,
      "type": "standard",
      "description": "Forward Resuscitative Surgical System and Damage Control Surgery",
      "tabOrder": 5
    },
    {
      "id": "holding",
      "label": "Holding",
      "subtitle": "(Silver 48)",
      "route": "/nodes/holding",
      "x": 650,
      "y": 440,
      "width": 140,
      "height": 80,
      "type": "standard",
      "description": "Holding area with Silver return-to-duty target of 48 hours",
      "tabOrder": 6
    },
    {
      "id": "prolonged-holding",
      "label": "Prolonged Holding",
      "subtitle": "(Zinc 48)",
      "route": "/nodes/prolonged-holding",
      "x": 650,
      "y": 540,
      "width": 140,
      "height": 60,
      "type": "standard",
      "description": "Prolonged holding area with Zinc evacuation target of 48 hours",
      "tabOrder": 7
    },
    {
      "id": "evac-erc",
      "label": "EVAC",
      "subtitle": "ERC",
      "route": "/nodes/evac-erc",
      "x": 900,
      "y": 300,
      "width": 140,
      "height": 80,
      "type": "standard",
      "description": "Evacuation and En Route Care",
      "tabOrder": 8
    },
    {
      "id": "mortuary-affairs",
      "label": "Mortuary",
      "subtitle": "Affairs",
      "route": "/nodes/mortuary-affairs",
      "x": 935,
      "y": 465,
      "width": 130,
      "height": 50,
      "type": "terminal",
      "description": "Mortuary Affairs — terminal destination",
      "tabOrder": 9
    }
  ],
  "bands": [
    {
      "id": "team-development",
      "label": "Team Development & Dynamics",
      "route": "/team-development",
      "x": 60,
      "y": 80,
      "width": 530,
      "height": 44,
      "tabOrder": 10
    },
    {
      "id": "trauma-integration",
      "label": "Trauma System Integration",
      "route": "/trauma-integration",
      "x": 600,
      "y": 80,
      "width": 540,
      "height": 44,
      "tabOrder": 11
    },
    {
      "id": "clinical-ops",
      "label": "Clinical Operations in the Austere Environment",
      "route": "/clinical-ops",
      "x": 60,
      "y": 590,
      "width": 1080,
      "height": 44,
      "tabOrder": 12
    }
  ],
  "edges": [
    {
      "id": "e1",
      "source": "austere-prep",
      "target": "prepare-to-receive",
      "style": "solid",
      "label": null,
      "waypoints": [[220, 340], [270, 340]]
    },
    {
      "id": "e2",
      "source": "prepare-to-receive",
      "target": "triage",
      "style": "solid",
      "label": null,
      "waypoints": [[410, 340], [460, 340]]
    },
    {
      "id": "e3",
      "source": "triage",
      "target": "stp-dcr",
      "style": "solid",
      "label": null,
      "waypoints": [[600, 340], [650, 340]]
    },
    {
      "id": "e4",
      "source": "stp-dcr",
      "target": "frss-dcs",
      "style": "solid",
      "label": null,
      "waypoints": [[720, 300], [720, 240]]
    },
    {
      "id": "e5",
      "source": "stp-dcr",
      "target": "holding",
      "style": "solid",
      "label": null,
      "waypoints": [[720, 380], [720, 440]]
    },
    {
      "id": "e6",
      "source": "holding",
      "target": "prolonged-holding",
      "style": "solid",
      "label": null,
      "waypoints": [[720, 520], [720, 540]]
    },
    {
      "id": "e7",
      "source": "holding",
      "target": "evac-erc",
      "style": "solid",
      "label": null,
      "waypoints": [[790, 480], [860, 480], [860, 340], [900, 340]]
    },
    {
      "id": "e8",
      "source": "prolonged-holding",
      "target": "evac-erc",
      "style": "solid",
      "label": null,
      "waypoints": [[790, 570], [880, 570], [880, 360], [900, 360]]
    },
    {
      "id": "e9",
      "source": "stp-dcr",
      "target": "evac-erc",
      "style": "solid",
      "label": null,
      "waypoints": [[790, 340], [900, 340]]
    },
    {
      "id": "e10",
      "source": "evac-erc",
      "target": "mortuary-affairs",
      "style": "dashed",
      "label": null,
      "waypoints": [[970, 380], [970, 465]]
    },
    {
      "id": "e11",
      "source": "triage",
      "target": "mortuary-affairs",
      "style": "dashed",
      "label": null,
      "waypoints": [[530, 380], [530, 490], [935, 490]]
    }
  ]
}
```

---

## 9. Edge Specification Table

| ID | Source | Target | Style | Label | Routing Notes |
|----|--------|--------|-------|-------|---------------|
| e1 | Austere Prep | Prepare to Receive | Solid | — | Horizontal, right edge of source to left edge of target at y=340 |
| e2 | Prepare to Receive | Triage | Solid | — | Horizontal, right edge to left edge at y=340 |
| e3 | Triage | STP/DCR | Solid | — | Horizontal, right edge to left edge at y=340 |
| e4 | STP/DCR | FRSS/DCS | Solid | — | Vertical upward, from top edge of STP/DCR (720,300) to bottom edge of FRSS/DCS (720,240) |
| e5 | STP/DCR | Holding | Solid | — | Vertical downward, from bottom edge of STP/DCR (720,380) to top edge of Holding (720,440) |
| e6 | Holding | Prolonged Holding | Solid | — | Vertical downward, from bottom edge of Holding (720,520) to top edge of Prolonged Holding (720,540) |
| e7 | Holding | EVAC/ERC | Solid | — | Orthogonal elbow: right from Holding (790,480) → east to (860,480) → north to (860,340) → east to EVAC left edge (900,340) |
| e8 | Prolonged Holding | EVAC/ERC | Solid | — | Orthogonal elbow: right from Prolonged Holding (790,570) → east to (880,570) → north to (880,360) → east to EVAC left edge (900,360) |
| e9 | STP/DCR | EVAC/ERC | Solid | — | Horizontal, right edge of STP/DCR (790,340) to left edge of EVAC/ERC (900,340). This is the main flow continuation. |
| e10 | EVAC/ERC | Mortuary Affairs | Dashed | — | Vertical downward from bottom-center of EVAC/ERC (970,380) to top-center of Mortuary Affairs (970,465). Dashed line indicates contingent/terminal flow. |
| e11 | Triage | Mortuary Affairs | Dashed | — | Orthogonal elbow: downward from bottom-center of Triage (530,380) → south to (530,490) → east to left edge of Mortuary Affairs (935,490). Dashed line indicates deceased disposition from triage. |

**Edge rendering notes:**
- All solid edges use `marker-end="url(#arrowhead)"`.
- Edges e10 and e11 (dashed) use `marker-end="url(#arrowhead-dashed)"`.
- Edges e7 and e8 are orthogonal polylines with 90-degree bends. They route to the right of the Holding column and then turn north to approach EVAC/ERC from the south-left, entering at slightly different y-coordinates (340 and 360) to avoid overlapping at the EVAC/ERC left edge.
- Edge e9 shares the y=340 centerline with e7's terminal segment. To resolve visual overlap, e9 should render beneath e7 (earlier in DOM order) or e7's final segment should enter EVAC/ERC at y=335 instead.
- Edge e11 routes below the main flow line to avoid crossing node rectangles, running at y=490 (aligned with the Mortuary Affairs center) before entering from the left.

---

## 10. Build Acceptance Criteria

Phase 3 of `CLAUDE_CODE_KICKOFF.md` is complete when all items pass:

### Rendering
- [ ] All 9 nodes render at the positions specified in Section 2.4
- [ ] All 11 edges render with correct routing, line style, and arrowheads per Section 9
- [ ] Both cross-cutting bands (top) and one band (bottom) render per Section 2.3
- [ ] Vertical frame connectors render on left (x=60) and right (x=1140) sides
- [ ] "ROLE 2" title and "Patient Flow" subtitle render centered above the top band
- [ ] Mortuary Affairs renders with dashed border and more rounded corners (terminal style)

### Navigation
- [ ] Every node click navigates to the correct `/nodes/<slug>` page
- [ ] Every cross-cutting band click navigates to the correct TLO page (`/team-development`, `/trauma-integration`, `/clinical-ops`)
- [ ] All links use client-side navigation (no full page reload in Astro)

### Interaction
- [ ] Hover state (fill change to `#F0F2F0`) works on all 9 nodes
- [ ] Hover state works on all 3 cross-cutting band zones
- [ ] Active/pressed state (fill change to `#E4E8E4`) works on all nodes
- [ ] Cursor changes to `pointer` on hover for all interactive elements
- [ ] Transitions are smooth (150ms ease)

### Keyboard & Accessibility
- [ ] Keyboard tab order follows patient-flow order (1-9) then bands (10-12) per Section 6.3
- [ ] Focus ring (2px `#3D5C3E`, 3px offset) is visible on all interactive elements when focused
- [ ] Enter/Space key activates the focused node link
- [ ] SVG root has `role="img"` and `aria-label`
- [ ] SVG contains `<title>` and `<desc>` elements with meaningful content
- [ ] Each node `<a>` has an `aria-label` describing its purpose
- [ ] All text meets WCAG AA contrast requirements per Section 6.4

### Responsive
- [ ] Diagram renders correctly at 320px viewport width (scales proportionally)
- [ ] Diagram renders correctly at 768px viewport width
- [ ] Diagram renders correctly at 1200px viewport width
- [ ] Hit areas are at least 160x100 SVG units for touch target compliance
- [ ] No horizontal scrollbar appears at any standard viewport width

### Data
- [ ] Node data is loaded from `src/data/role2-nodes.json`
- [ ] Adding or modifying a node in the JSON file updates the diagram without code changes
- [ ] Edge routing data is consumed from the JSON (or co-located data file)

### Quality
- [ ] No console errors or warnings related to the diagram component
- [ ] SVG renders without visual artifacts in Chrome, Firefox, and Safari
- [ ] Component passes Astro build without errors
- [ ] Lighthouse accessibility score >= 95 for the homepage

---

## Appendix B: SVG Scaffold

Below is a minimal SVG scaffold showing the document structure. The implemented component will generate this structure from the JSON data.

```svg
<svg viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg"
     role="img" aria-label="Role 2 Patient Flow Diagram">
  <title>Role 2 Patient Flow</title>
  <desc>Interactive diagram showing the ARSC Role 2 patient flow...</desc>

  <defs>
    <marker id="arrowhead" viewBox="0 0 10 7" refX="10" refY="3.5"
            markerWidth="10" markerHeight="7" orient="auto-start-reverse">
      <polygon points="0 0, 10 3.5, 0 7" fill="#282c33" />
    </marker>
  </defs>

  <!-- Title -->
  <text x="600" y="40" text-anchor="middle" font-size="28"
        font-weight="700" fill="#282c33">ROLE 2</text>
  <text x="600" y="62" text-anchor="middle" font-size="16"
        font-weight="400" fill="#555">Patient Flow</text>

  <!-- Cross-cutting bands -->
  <g class="bands">
    <a href="/team-development" tabindex="10">
      <rect x="60" y="80" width="530" height="44" rx="4"
            fill="rgba(61,92,62,0.10)" stroke="rgba(61,92,62,0.40)" />
      <text x="325" y="106" text-anchor="middle" font-size="13"
            font-weight="600" fill="#3D5C3E">Team Development &amp; Dynamics</text>
    </a>
    <!-- ...trauma-integration, clinical-ops... -->
  </g>

  <!-- Frame connectors -->
  <line x1="60" y1="124" x2="60" y2="590" stroke="rgba(61,92,62,0.40)" />
  <line x1="1140" y1="124" x2="1140" y2="590" stroke="rgba(61,92,62,0.40)" />

  <!-- Edges (render before nodes so nodes layer on top) -->
  <g class="edges">
    <line x1="220" y1="340" x2="270" y2="340"
          stroke="#282c33" stroke-width="1.5" marker-end="url(#arrowhead)" />
    <!-- ...remaining edges... -->
    <polyline points="790,480 860,480 860,340 900,340"
              stroke="#282c33" stroke-width="1.5" fill="none"
              marker-end="url(#arrowhead)" />
  </g>

  <!-- Nodes -->
  <g class="nodes">
    <a href="/nodes/austere-prep" tabindex="1"
       aria-label="Austere Prep / R2RA — click for detailed reference">
      <rect class="focus-ring" x="75" y="295" width="150" height="90" rx="10"
            fill="none" stroke="#3D5C3E" stroke-width="2" opacity="0" />
      <rect class="hit-area" x="60" y="280" width="160" height="100"
            fill="transparent" aria-hidden="true" />
      <rect x="80" y="300" width="140" height="80" rx="8"
            fill="#FFFFFF" stroke="#282c33" stroke-width="2" />
      <text x="150" y="332" text-anchor="middle" font-size="14"
            font-weight="600" fill="#282c33">Austere Prep</text>
      <text x="150" y="352" text-anchor="middle" font-size="11"
            font-weight="400" fill="#555">R2RA</text>
    </a>
    <!-- ...remaining nodes... -->
  </g>
</svg>
```

---

## Appendix C: Component Integration

### Astro Component Usage

In `src/content/docs/index.mdx`:

```mdx
---
title: ARSC USMC Field Reference
---

import Role2Diagram from '../../components/Role2Diagram.astro';

<Role2Diagram />

<!-- Prose introduction follows the diagram -->
```

### Component Data Loading

In `src/components/Role2Diagram.astro`:

```astro
---
import diagramData from '../data/role2-nodes.json';
const { nodes, bands, edges, title, subtitle, viewBox } = diagramData;
---

<div class="role2-diagram-container">
  <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg"
       role="img" aria-label="Role 2 Patient Flow Diagram">
    <!-- Generated from diagramData -->
  </svg>
</div>

<style>
  .role2-diagram-container {
    width: 100%;
    max-width: 1200px;
    margin: 2rem auto;
  }
  .role2-diagram-container svg {
    width: 100%;
    height: auto;
  }
  /* Interaction styles per Section 5 */
</style>
```
