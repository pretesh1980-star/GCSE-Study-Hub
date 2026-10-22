# Build 7.0.5P — bounded Biology tier repair and Cell Biology preparation

## Implemented repair

Question aqa-bio-step-homeostasis-response-3-0 asks which hormone triggers ovulation; LH remains the answer. Shared AQA Trilogy 4.5.3.3 includes FSH, LH and oestrogen roles. ADH is outside Trilogy and glucagon's blood-glucose role is Higher-only. The project's existing rule excludes those distractors from Foundation.

Foundation and unconfirmed-tier options change from [ADH, Insulin, Glucagon, LH] to [FSH, Insulin, Oestrogen, LH]. Only two distractor strings change; stem, LH answer, insulin distractor, feedback and marks remain unchanged. Higher and separate-course versions retain original options. The existing source-checked Foundation variant mechanism fails closed if the original source changes.

The formerly unrecorded concern is explicitly resolved in biologyTierConcernReviews and shown separately in coverage.html: one resolved, zero unresolved. Historic Biology tier backlog remains zero; there are now zero known unresolved Biology tier concerns from the completed audits. This bounded repair is not a new exhaustive certification of every item. Biology answer-unit backlog remains zero.

## Preparation only

CELL-BIOLOGY-IMPLEMENTATION-MANIFEST.md and .json give per-unit existing evidence, gaps, reuse, teaching/question briefs, required feedback, tier/skills requirements, RP01 additions, mapping and tests. CELL-BIOLOGY-PREP-EVIDENCE.json preserves the exact relevant existing material inspected. No Cell Biology curriculum was added or changed.

All nine units remain Partial. The 78-unit audit remains 2 Full / 75 Partial / 1 Missing / 0 adequately covered Higher-only. BIOLOGY-COVERAGE-7.0.5P.json carries that unchanged position and resolves the legacy concern. The O audit/report are retained as historical provenance; their earlier one-concern finding is superseded here.

Proposed next build 7.0.5Q if version sequence is unchanged: six substantive teaching/revision extension bundles in existing sections, zero new standalone lessons, 18 genuinely new question records and one existing challenge recovered into practice. This includes one new reusable plant-cell schematic and extensions to existing art/flow. No implementation manifest content is loaded by the app.

## Verification

Focused Biology tier suites: 97/97 passed. Complete suite: 210/210 passed (206 baseline plus four focused regressions). Zero failures/skips. Across 63 registered science pathways all lessons and all questions except the intended two Foundation distractor strings match O exactly. Chemistry/Physics curriculum, application outputs and metadata are unchanged. Existing progress storage and unrelated UI unchanged. Browser not attempted because environment remains unchanged.

## Next action

Implement the manifest only in a separately authorised curriculum build, reusing existing material before adding the specified minimum. Resolve the documented image/scale and school-appropriate specimen/stain details during authoring. Human adequacy review is required before marking any of the nine units Fully Covered; question counts alone are insufficient.

## Exact changed files

- BIOLOGY-COVERAGE-7.0.5P.json
- BIOLOGY-REPAIR-PREPARATION-P.md
- CELL-BIOLOGY-IMPLEMENTATION-MANIFEST.json
- CELL-BIOLOGY-IMPLEMENTATION-MANIFEST.md
- CELL-BIOLOGY-PREP-EVIDENCE.json
- README.md
- biology-reuse.js
- package.json
- spec-audit-admin.js
- spec-audit-data.js
- spec-audit.js
- tests/biology-legacy-tier.test.cjs

Outputs PROJECT-STATE.md and CURRENT-BUILD.txt updated; no student curriculum-expansion files changed.
