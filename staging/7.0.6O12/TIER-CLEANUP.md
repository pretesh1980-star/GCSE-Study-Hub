# Build 7.0.5A — first Foundation tier cleanup

Continues the completed 7.0.4 audit. No new curriculum, specification pathways or student layout changes.

## Enforcement

AQA Trilogy Biology, Chemistry and Physics Foundation (and unconfirmed tier) now use fingerprint-checked audited eligibility. Shared material is restored where old Higher tags were incorrect. Known Higher-only, separate-science, mixed, unreviewed and stale evidence is withheld. Higher and other board/course pathways retain their existing content.

Twenty mixed lesson blocks have Foundation variants extracted from existing sentences; original blocks remain available to Higher. Foundation cards use approved lesson text, preventing inherited Higher card explanations from bypassing filtering. Question pools, subsection practice, module tests, feedback, worked examples and fixed Learning Lab exercises respect the same boundary. Stale Higher feedback is suppressed after a pathway switch. Stable section/question identifiers and progress storage remain unchanged.

## Counts and limitations

Of the original 194 tier issues, 151 are resolved by effective metadata/filtering (131 non-mixed corrections plus 20 lesson separations). Forty-three original issues remain: 42 mixed questions and one mixed lesson. Reviewing inherited card feedback and distractors identified another 38 mixed question records. Total unresolved: **81 = 80 questions + 1 lesson**. These are withheld from Foundation, retained for Higher, and need targeted separation/review; they are not missing curriculum created by this build.

Original source declarations and audit fingerprints remain as provenance; effective metadata is applied in foundation-tier.js and foundation-tier-data.js. coverage.html reports resolved and outstanding issues and actual student visibility. Specification coverage classifications remain conservative against original evidence; splitting a lesson does not certify complete specification coverage.

All 17 incompatible-unit answer-list issues remain unchanged. No answer aliases were repaired.

## Validation and continuation

Full automated suite: **122 passed, 0 failed** (112 existing plus 10 focused regression tests). Tests cover safe filtering, mixed feedback/distractors, cards, Learning Labs, Higher/other-pathway preservation, restored shared sections, progress isolation, stale audit evidence and diagnostic counts. Browser/visual verification remains unavailable under the established local-file URL restriction and missing Chromium runtime; no browser workaround was attempted.

Next small component: separate/review the existing Biology Blood glucose mixed questions and feedback, using approved existing Foundation wording. Do not expand curriculum or fix unit aliases in the same change.

Read PROJECT-STATE.md and this note next session, then inspect only the selected component. New implementation: foundation-tier-data.js and foundation-tier.js; focused tests: tests/foundation-tier.test.cjs.
