# O9 refinement — 14 October 2026

Ready for review. This is a targeted refinement of the latest O9 teaching ZIP.

## Changes

- Removed the redundant optional plant-cell quiz, its three answers, “Animate and explain” button, duplicate animation, unused handlers, case data and animation styles.
- Preserved Cell Up Close with all three environments and explanations. Environment selection updates the existing scene and controls in place. Browser checks confirmed no page jump for all three choices at 320, 390, 768 and 1365px.
- Existing worked examples now use four steps: recognise gain/loss/no change, calculate final minus initial, divide by initial mass, then multiply by 100. This includes Watch, practice feedback, feedback after independent calculation practice, and the original Lab worked example. The existing numbers and answers remain unchanged.
- Level 2 begins with Gained / Lost / No change. Corrective feedback explains the expected sign before showing the calculation. Even an incorrect comparison allows the student to continue after feedback. Existing saved percentages and hints are retained. Independent assessment questions have no added comparison prompt.

## Verification

**71 focused tests, 1,010 full regression tests and 597 browser checks passed.** Browser checks comprise 396 teaching/refinement checks, 64 O9 assessment checks and 137 navigation checks. They cover removal, gain/loss/zero, four-step examples, mobile layout, saved progress, all six stages, the graph, cucumber, original video/transcript presence and independent scoring safeguards.

Actual mobile input verified an incorrect “Gained” choice for 10 g → 8 g: the activity explained that the result must be negative and revealed the calculation. The desktop −20% worked example was visually reviewed. Evidence and screenshots are in `Verification-O9-refinement/`.

The previous teaching ZIP is untouched. Original media, O1–O8, curriculum/board/tier mappings, navigation, assessment questions, rubric and storage keys are preserved. No new examples, video-placement changes, 60-second cucumber film, Active Transport/RP02 work, publication or GitHub commit. Existing obsolete quiz responses are left in saved records for recovery; there is no active quiz code or UI.

## Limitations

Checks ran in the native in-app browser at desktop and mobile sizes, not on a physical iPhone Safari device. Audible narration, subtitle timing and full-film reliability remain unverified; media files are unchanged. The separate terminal Playwright suite was not used. Written exam-style answers still require teacher review. One screenshot-tool approval review timed out; retry succeeded and the screenshot was saved.

## Open this build

Stop the older preview, then open `GCSE-Study-Hub-O9-refinement/Start Preview.command`. Use http://127.0.0.1:8931/#cell-biology/osmosis in your usual browser at the same address to preserve its progress. Stage 2 contains the single cell demonstration; Stage 3 contains the refined calculations.

The complete ZIP includes source, original media, launcher, tests and evidence. It does not back up browser-local student data. Earlier inherited review documents describe previous versions; this report is the current handover.

**Available account snapshot:** 53% five-hour / 84% weekly remaining. These are shared Codex account limits; a separate Work-only quota is not exposed.
