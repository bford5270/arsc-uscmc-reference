# Standards PDFs

PDFs for the Standards & Expectations section are placed here, organized by category:

```
public/standards/
  sops/{slug}.pdf          — Standard Operating Procedures
  expectations/{slug}.pdf  — Expectation letters and professional standards documents
  training/{slug}.pdf      — Training plans, qualification standards, readiness criteria
```

## Workflow

1. CDR Ford supplies a PDF that has passed the OPSEC checklist.
2. Place the PDF at the correct path above (e.g., `public/standards/sops/mascal.pdf`).
3. Create the corresponding MDX page using `src/content/docs/standards/_template.mdx` as the pattern.
4. Update the MDX frontmatter and PdfEmbed props with the document's metadata.
5. Commit both the PDF and the MDX page together.
6. Add the new page to the sidebar in `astro.config.mjs` under the correct sub-group.

## OPSEC requirement

Every document added here must pass the OPSEC checklist in `OPSEC_CHECKLIST.md`
before it is committed. Do not add documents that contain classified content, CUI,
personally identifying information, or operational specifics not in open press.
