> Historical 7.0.4 audit record. Build 7.0.5A now enforces eligibility and records further mixed questions; see TIER-CLEANUP.md for current counts and behaviour. Original specification classifications remain conservative.

# Build 7.0.4 — AQA Trilogy Foundation audit

Open coverage.html. The specification-point audit appears above the existing registered-content inventory. It has separate subject, status and evidence-presence filters; expand a point for exact lesson/practical/question references, source, tier decisions and current student visibility.

## Scope and counting

227 units = 206 lowest-level numbered subject-content subsections (69 Biology, 80 Chemistry, 57 Physics) plus all 21 required practicals (7/6/8). Nineteen wholly Higher-only subsections are excluded, including inherited Higher-only headings such as momentum. A mixed subsection counts once for its Foundation portion; its Higher exclusions are named. This is not a sentence-by-sentence count. The separate working-scientifically and mathematical requirements chapters are not independently enumerated; practical performance cannot be certified by this app. No other pathway is audited.

The denominator is independent of app content. Each point has a stable qualification/pathway-specific ID, exact AQA subsection reference, subject, scope, official source, explicit evidence links and review decision. Question evidence is linked by stable question ID, not by topic-wide availability. Existing cross-subject explanations can be evidence where explicitly relevant. Broad/shared subsection practice remains partial unless its scope is sufficient. Full coverage never follows from a keyword match or a question count alone.

## Classification

- Covered: explicit scope review plus current, Foundation-safe lesson and aligned practice evidence. All nominated evidence must remain unchanged and safe. This describes the audited subsection, not student mastery or complete exam preparation.
- Partially covered: a limited explanation, only one evidence type, a mixed-tier block requiring separation, or incomplete/unverified scope or practice depth.
- Missing: no verified Foundation evidence linked. Unreviewed, Higher-only, out-of-scope, deleted or changed material receives no Foundation credit.

Fingerprints invalidate evidence when its teaching/question text changes. New content is flagged for review. Practical cards are conservatively partial: generic methods do not establish full practical-method assessment coverage.

## Results

| Subject | Units | Covered | Partial | Missing |
|---|---:|---:|---:|---:|
| Biology | 76 | 2 | 74 | 0 |
| Chemistry | 86 | 7 | 75 | 4 |
| Physics | 65 | 1 | 62 | 2 |

The six missing units are: periodic-table development (5.1.2.2), state notation (5.2.2.2), polymer properties (5.2.2.5), chemical-measurement uncertainty (5.3.1.4), standard circuit symbols (6.2.1.1), and contact/non-contact force classification (6.5.1.2). Partial evidence can still leave substantial unmet requirements. A low Covered count is intentional: topic-heading presence is not sufficient.

## Tier metadata and problems

721 existing lesson, practical and question records have diagnostic metadata with declared tier, audited tier, review reason and content fingerprint. Standard values are both, higher, mixed, out-of-scope and unreviewed. Both means Foundation eligible, not exhaustively complete. Mixed records contain potentially useful Foundation material but must be separated before being treated as fully Foundation-safe. Unreviewed records are not assumed safe.

194 records have absent, conflicting or unresolved tier metadata; this includes downstream questions and untagged practicals, not 194 unique curriculum errors. Examples: surface-area-to-volume calculations and exchange-gradient reasoning are incorrectly hidden as Higher-only; mole calculations, bond-energy calculations, equilibrium shifts and motor-effect material are incorrectly available as both; some combined-science blocks include separate-science content such as fuel cells, ion tests, fission/fusion and nanoparticles. Physics motion lessons mix Foundation work with Higher-only graph areas, inertia or momentum. Seventeen generated answer lists accept incompatible unit suffixes.

This build establishes corrected audit metadata only. Student content and filtering are byte-preserved; the diagnostic separately shows current student Foundation visibility. Applying corrections directly would require splitting existing mixed blocks and checking all lesson/question/card entry points. No missing lessons or questions were created, and the inappropriate answer aliases were diagnosed rather than changed outside scope.

## Sources and reproducibility

Official AQA pages checked 1 October 2026. Per-page SHA-256 source snapshots and URLs are recorded in spec-audit-data.js. Numbered section identifiers and tier exclusions were extracted from those sources; mappings and classifications are original project audit work.

- [Biology subject specification](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content)
- [Chemistry subject specification](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/chemistry-subject-content)
- [Physics subject specification](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/physics-subject-content)

## Files and extension contract

- spec-audit-data.js: structured dataset, explicit mappings, tier decisions and source provenance.
- spec-audit.js: reusable inventory/validation/classification functions accepting a dataset. It resolves content with explicit pathway context and does not access student saves.
- spec-audit-admin.js: diagnostic rendering and filters.
- tests/spec-audit.test.cjs and tests/aqa-8464-foundation-index.json: denominator, reference integrity, eligibility, stale-data and filter checks.

For another board/tier, create a separate dataset with its own source denominator and scope; do not inherit this audit's review decisions. For edits to mapped content, update fingerprints only after a fresh scope/tier review. Do not treat fingerprint refresh as automatic re-approval.

## Validation

112/112 automated state/admin/audit tests passed (101 existing plus 11 new). Tests include live student progress preservation, exact references, all 21 practicals, source-index agreement, Higher exclusions, stale evidence, eligibility and diagnostic filters. Browser/visual verification remains unavailable: the in-app browser previously rejected local-file URLs, and the existing browser suite lacks its Chromium executable. No workaround or claim of browser success.

Next component: separate existing mixed-tier material and wire audited eligibility into all Foundation content entry points, without adding missing curriculum content yet.
