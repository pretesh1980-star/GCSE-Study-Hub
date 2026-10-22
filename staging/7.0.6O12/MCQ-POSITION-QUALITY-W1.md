# Build 7.0.5W1 — Multiple-choice answer-position quality

Maintenance only. Build 7.0.5X remains reserved for Biology curriculum expansion.

## Census and baseline

Audited every applicable reachable four-option single-answer MCQ in all 100 registered pathways. Deduplicated repeated pathway appearances using subject, ID, stem, answer, unordered options and explanation. There are **319 content variants across 290 question IDs**; Foundation/Higher variants with different content count separately. No malformed four-option records were found. Subjects without eligible MCQs contribute zero; non-MCQ written tests and Learning Lab multi-field investigation dropdowns are outside this definition.

| Position | Before | After |
|---|---:|---:|
| A | 109 (34.17%) | 72 (22.57%) |
| B | 81 (25.39%) | 91 (28.53%) |
| C | 68 (21.32%) | 68 (21.32%) |
| D | 61 (19.12%) | 88 (27.59%) |

## Subjects and major banks

Counts below are A/B/C/D; tiny banks are shown for transparency, not forced into exact quarters.

| Subject | MCQs | Before | After |
|---|---:|---|---|
| Biology | 306 | 98 / 80 / 67 / 61 | 69 / 89 / 64 / 84 |
| Chemistry | 3 | 2 / 0 / 1 / 0 | 1 / 0 / 2 / 0 |
| Physics | 2 | 1 / 1 / 0 / 0 | 0 / 0 / 1 / 1 |
| Maths | 8 | 8 / 0 / 0 / 0 | 2 / 2 / 1 / 3 |

| Bank | MCQs | Before | After |
|---|---:|---|---|
| Biology|bio2- | 10 | 0 / 7 / 3 / 0 | 2 / 3 / 3 / 2 |
| Biology|aqa-cell- | 16 | 16 / 0 / 0 / 0 | 3 / 5 / 4 / 4 |
| Biology|aqa-bio-step- | 109 | 27 / 30 / 26 / 26 | 23 / 31 / 23 / 32 |
| Biology|bio-deep- | 158 | 47 / 41 / 36 / 34 | 38 / 47 / 30 / 43 |
| Maths|other | 8 | 8 / 0 / 0 / 0 | 2 / 2 / 1 / 3 |

## Worst clusters and cause

A bias is confirmed: all 16 original AQA cell-practice MCQs and all eight Maths MCQs had A correct. AQA Trilogy Cell Biology had 21/35 A answers (60%); Foundation Synergy Cell Biology had 17/28 (60.7%). The longest identical-position run in inspected topic sequences was 16.

The renderer displays question.options in its supplied order and answerOption compares option text with answer text. Some authored banks put the answer first. Other banks insert it by entry-index modulo four (biology-extended-practice and biology-core-gaps), so the cause is mixed rather than a single randomiser. Learning Lab randomises selection of questions, not options. Generated and stored source orders were insufficiently checked at global/local level.

## Exact correction

Stored offline-generated presentation order map, keyed by full content variant, applied by questionPool after existing tier/course/board filtering. Seed 363 deterministically produced a passing plan; there is no runtime randomisation or cycling by question number. Correct answer inserted at its selected position with distractors retaining their relative order. All four option strings and every other question field remain exact. 227 variant orders changed, representing 213 distinct question IDs. Unchanged/missing/invalid map cases cannot mutate source questions; unknown entries fall back safely and fail development manifest coverage until reviewed.

Canonical curriculum arrays, all 100 pathway question/lesson results and the entire live specification audit are identical to W. Source fingerprints and Foundation eligibility are untouched. Presentation order is stable on retry/reload; question IDs and progress storage are unchanged. There are no indexed per-option feedback arrays in this census: explanations are attached to answer content. No above/below/option-letter dependencies were found.

## Permanent quality control

See MCQ-AUTHORING.md for authoring rules and commands. scripts/mcq-quality.cjs calculates dynamic subject/bank/pathway/topic/section sets and sequences; scripts/generate-mcq-order.cjs generates stored orders offline. Missing/stale variants and invalid single-answer structures fail tests. New feedback/index schemas require explicit review.

Global 18–32% per position; subjects of 20+ 15–35%; subjects of 8–19 12.5–37.5%; local sets of 20+ 10–40%, 12–19 at most 40%, 8–11 at most 50%. Under eight: no distribution quota. These tolerances allow natural variation and do not require exact quarters. Reject runs of five identical positions and 12-position windows repeating cycles of length 2, 3 or 4 in source and initial level-sorted pathway/topic sequences. Final plan passes 51 distinct meaningful sets and 56 ordered sequences; longest inspected run now four.

No obvious fixed-letter/cyclic pattern was detected within the checked sets. This is not a guarantee that every tiny adaptive/random/history-based selection has equal letters. Stable questions can still be memorised after exposure; reproducibility and unchanged retry/accessibility behaviour are intentional.

## Verification

Focused 189/189; complete 405/405 (395 baseline plus ten new quality/behaviour tests). All 1,276 option selections (four for each variant) exercised through real renderQuiz/answerOption/grade functions: correct answer true, each distractor false, scores/feedback consistent. Duplicate clicks, progression, saved pathway scores, session entry points, content identity, stale records and synthetic bias/pattern failures checked. Browser skipped because environment unchanged.

Updated older state tests to select correct/incorrect option content rather than assume A/B. Full-suite failures exposed four legacy tier-test families comparing displayed option order to canonical arrays: adjusted those presentation assertions to compare exact option content, retaining source-order/tier checks. Final suite has no failures; no curriculum defect was discovered or silently repaired.

Biology coverage unchanged: 35 Full / 42 Partial / 1 Missing / 0 adequately covered Higher-only, same 78 units. Tier backlog 0, known unresolved concerns 0, answer-unit backlog 0. Chemistry/Physics curriculum unchanged; only their applicable MCQ presentation orders may differ. Their existing 19 tier and 17 answer-unit issues remain outside scope. No Biology audit or curriculum expansion was performed.

## Packaging

Current W1 folder/ZIP, project-state note and marker at Outputs top level. Superseded W artifacts archived without deletion. Next curriculum build remains X, Photosynthesis/respiration/metabolism; not started.

## Exact changed build files

- MCQ-AUTHORING.md
- MCQ-POSITION-AUDIT-W1.json
- MCQ-POSITION-QUALITY-W1.md
- README.md
- app.js
- coverage.html
- index.html
- mcq-option-order-data.js
- mcq-option-order.js
- package.json
- scripts/generate-mcq-order.cjs
- scripts/mcq-quality.cjs
- tests/biology-cell-completion.test.cjs
- tests/biology-circulation-completion.test.cjs
- tests/biology-digestion-completion.test.cjs
- tests/biology-infection-completion.test.cjs
- tests/biology-legacy-tier.test.cjs
- tests/biology-medicines-completion.test.cjs
- tests/biology-plant-completion.test.cjs
- tests/biology-reuse.test.cjs
- tests/biology-transport-completion.test.cjs
- tests/foundation-tier.test.cjs
- tests/mcq-quality.test.cjs
- tests/state.test.cjs

Outputs PROJECT-STATE.md and CURRENT-BUILD.txt updated; superseded W artifacts archived.
