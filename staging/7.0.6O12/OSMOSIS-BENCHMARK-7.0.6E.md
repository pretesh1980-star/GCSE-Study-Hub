# Osmosis benchmark candidate · Build 7.0.6E

8 October 2026. One original interactive learning journey added to verified 7.0.6D. Open `index.html`, choose AQA Combined Science: Trilogy Biology → Cell Biology → Start osmosis journey. Both Foundation and Higher share this content. Other pathways retain their original content.

## Delivered

Six stages: starting explanation; adjustable two-sided membrane model; worked, partly scaffolded and independent mass calculations; four prediction-and-reason checks with specific correction and a changed-case recheck; unfamiliar structured transfer assessment plus a written six-mark question; saved completion and day-7 reassessment.

The model explicitly shows opposing water flows and identifies net direction for dilute, concentrated and equal solutions. It is a simplified qualitative model, not a measured rate simulation. Explanations cover solvent/solute, partial permeability, random movement, cell walls and mass changes. The existing `transportGraph()` asset and practical reasoning are reused. This is practical preparation, not completion of the laboratory practical.

The original +15% worked example, initial-mass denominator, blotting, repeat measurements and zero-crossing interpretation follow the existing transport material. Alignment was checked against [AQA 8464 Biology content](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content).

The learner must attempt the starting explanation, prediction, calculations and all four misconception checks before advancing through those stages. Correct predictions still require written reasons; writing is saved for review rather than judged by word matching. Each incorrect prediction gives a specific explanation and different case. Answers and marking guidance for the exit assessment remain hidden until all items and both writing tasks have been attempted.

## Preservation and file audit

Baseline ZIP SHA-256 verified: `2439e0a7f3dbcf68a578af5a641571089972c95cfc54abc13faf7c9c430df38f`. The original 7.0.6D folder, ZIP, prior builds and original current-build marker were not edited. This candidate is saved separately in this chat's outputs.

Only six app/source files differ: `app.js` adds one guarded lesson entry; `index.html` loads the scoped module and stylesheet; `package.json` sets the candidate version; `osmosis-tutor.js`, `osmosis-tutor.css` and `tests/osmosis-tutor.test.cjs` are new. See the hash manifest. Existing curriculum, questions, IDs, eligibility, coverage assets, progress keys and all 100 pathways are retained byte-for-byte. No evidence fingerprints required refresh because audited teaching assets were unchanged.

Tutor data uses the new separate `gcseStudyHub-osmosis-v1` key. It never writes the original progress record or changes mastery. Stage, writing, misconception checks, immediate/day-7 results and repeated-result history survive reopening on the same origin/browser. Its key is shared between Foundation and Higher because the benchmark content is shared; original tier/course progress remains isolated. Existing app backup/export does not include this separate record. Saved writing can be copied from the result disclosure.

Day 7 is due after seven elapsed 24-hour periods from first completion. A due button appears when returning to Cell Biology. There is no background notification. Clearing storage or changing browser/site address can lose access to the tutor record. Storage failures produce a visible warning.

No paid AI, external marking service, new dependencies or network requests were introduced.

## Measurable acceptance and evidence limits

| Criterion | Candidate evidence / status |
|---|---|
| Six ordered stages, progress and completion | Implemented; integration test loads actual HTML script order. Completion means attempted learning, not demonstrated mastery. |
| Four misconception branches and distinct rechecks | Implemented and focused-tested. Each requires a reason. Free-text scientific accuracy requires a reviewer. |
| Worked → faded → independent percentage calculations | Implemented; checks require signed percentage with `%`. Independent exit uses new numbers. Numeric checking does not prove the written method correct. |
| Equilibrium preserves bidirectional water movement | Model assertions pass; exit asks equilibrium prediction and written explanation. |
| Immediate 10-point assessment, ≥4 transfer points | Automatic structured score; two unfamiliar items worth 2 each, four further 1-point items and a 2-point calculation. Target ≥8/10 and ≥3/4 transfer. Writing must corroborate recognition-based results. |
| Question-specific six-mark guidance | Six explicit points, acceptable equivalents and common non-credit responses. Separately reviewed, not included in automatic 10-point score. Original analytic practice rubric, not official AQA marking. |
| Day-7 parallel test | New membrane/cell contexts and numbers; target ≥7/10 and ≥3/4 transfer without hints/help. Outside help is recorded. The repeated six-mark writing prompt is labelled as repeated practice, not unseen evidence. |
| Pre/immediate/day-7 comparison | Starting writing saved; immediate/delayed structured scores separate. No numerical pretest, so the proposal's ≥3-point gain criterion cannot yet be measured. |
| Accessibility and devices | Labels, fieldsets, native controls, keyboard focus, live feedback, equivalent diagram/graph text, ≥44px buttons and responsive scoped CSS implemented. Screen-reader, native Safari, mobile and visual checks remain unverified. |
| 20–25-minute beginner completion | Designed around this budget; not timed with a learner. No claim that it meets the novice completion threshold yet. |
| Coverage and regression | **565/565 tests passed (555 existing + 10 focused), 0 failures.** Full test evidence accompanies the build; includes current 78/78 coverage, Foundation exclusions, content preservation and saved-pathway round trips. |

The model is interactive but uses a static, updated diagram rather than continuous particle animation. No animation dependency or motion burden is added. Stage navigation and written marking remain deliberately modest: this candidate is ready for a pilot, not evidence of established teaching effectiveness.

A learner pilot should record time, outside help, four corrected reasons, immediate writing and day-7 writing. Require a science educator to review the rubric and at least three learners meeting thresholds before changing the teaching-quality label. A single family trial is a case study only.

## Verification limitation

The browser preview could not be run: local HTTP serving was denied by the execution sandbox, and computer-use browser security policy rejected the `file:` preview. No workaround was attempted. UI rendering, Safari/Mac and mobile interaction are therefore not certified by this report. Automated source/integration tests use isolated simulated storage, not a student's browser.

The earlier 86% five-hour / 98% weekly usage reading is historical and unconfirmed as a Work balance. No new Work balance is inferred.
