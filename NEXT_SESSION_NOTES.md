# Next Session — ARSC USMC Field Reference

**Repo**: https://github.com/bford5270/arsc-uscmc-reference (NOTE: typo — should be `arsc-usmc-reference`, rename in GitHub Settings → General)

---

## Ready for Claude Code — Sprint 2

Two files to copy into `planning/` in the repo before running Claude Code:

1. `CPG_AND_FORMS_URL_MAP.md` — comprehensive URL map for all JTS CPGs and forms, organized by site page
2. `CLAUDE_CODE_SPRINT2_PROMPT.md` — the prompt to give Claude Code

**Steps:**
```bash
cd arsc-uscmc-reference   # or arsc-usmc-reference if renamed
cp /path/to/CPG_AND_FORMS_URL_MAP.md planning/
cp /path/to/CLAUDE_CODE_SPRINT2_PROMPT.md planning/
```

Then in Claude Code:
```
Read planning/CLAUDE_CODE_SPRINT2_PROMPT.md and execute both tasks. Read planning/CPG_AND_FORMS_URL_MAP.md for all CPG/form URLs.
```

**What Sprint 2 covers:**
- **Task 1**: Link all CPGs and forms to their JTS URLs across all MDX files (14+ pages)
- **Task 2**: Add FRSS/DCS → Holding edge (e12) to the diagram, routed at x=790

---

## After Sprint 2: User adds SOPs

Brian wants to add SOPs to the Standards section after CPG/forms linking is complete. These are user-supplied content, not scraped.

---

## Still Open

**Blocker TBDs needing Brian's input:**
- Contact mechanism: gmail, .mil, or GitHub Issues?
- Release date: today or when domain is live?

**Repo housekeeping:**
- Rename repo: `arsc-uscmc-reference` → `arsc-usmc-reference`
- Eventually make repo private (user confirmed "for now it is ok")

**Doctrinal pub issues:**
- MCRP 4-11.1G → now MCRP 3-40A.7 (renumbered) — Sprint 2 handles this
- MCWP 4-11.1 → now MCTP 3-40A (renumbered) — Sprint 2 handles this
- MCO 6000.20 — couldn't verify publicly; may be CUI
- MCRP 4-11.8 — likely wrong number for mortuary affairs; 4-11.8A is Field Feeding
- BUMEDINST 6710 — not publicly posted; verify from local directives

**Domain registration:**
- Register `usmc-arsc.org` on GoDaddy and point to Vercel
