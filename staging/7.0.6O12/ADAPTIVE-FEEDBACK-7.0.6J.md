# Adaptive osmosis feedback — Build 7.0.6J

Implements the approved 7.0.6F adaptive-feedback scope, renamed because outputs already contain 7.0.6F (video), G (narration), H (subtitles), and I (alignment). Latest source verified: 7.0.6I, package version 7.0.6-I. Previous outputs are preserved. This is a new independent delivery; historical current-build pointers are unchanged.

## Change
Only the interactive tutor calculation handler, tutor-local evidence and stage-three progression change. Existing 8.0→7.2 g and 6.0→6.9 g questions remain. No curriculum, bank questions, course/tier filters, core progress keys or mastery writes change. Narration and subtitles remain from I. No network or paid AI calls.

Blank, nonsense, malformed, missing-percent and multiple-answer inputs produce explicit feedback; worked practice requires denominator plus percentage (e.g. 8.0, -10%). Errors have aria-invalid, linked feedback, a polite atomic live region and focus moved to feedback. Invalid inputs do not consume mathematical hint attempts. Feedback and attempts persist inside gcseStudyHub-osmosis-v1.

Wrong numerical answers receive: (1) a gentle sign/denominator/conversion/calculation prompt, (2) the signed mass difference and initial denominator, (3) the worked answer. Percentage-only final-denominator mistakes are inferred from a matching rounded value; the tutor cannot know the student's actual reasoning. Gains receive positive-direction guidance; losses receive negative-direction guidance. Original practice values are accepted accurately, including Unicode minus and unsigned positive percentages.

Any wrong numerical attempt marks that calculation assisted. A correct assisted answer requires a different transfer question without hints before stage progression. Transfers start at 10.0→8.0 g, then 11.0→14.0 g, then 12.0→10.0 g, using fresh initial masses. Hinted transfer resolutions are archived as practice and replaced by another question. Responses rounded to two decimal places are accepted. Revealed answers never become independent evidence; no Study Hub mastery is awarded for any tutor calculation. Editing a checked answer invalidates its completion until rechecked. Invalid transfer text cannot advance. Existing assessment scoring and teacher-review requirements remain unchanged.

## Verification
- Original E baseline: 565/565 (log supplied).
- Latest I baseline: 567/567 (log supplied).
- Final J full suite: 577/577, zero failures/skips.
- Focused osmosis suite: 22/22, including 10 new tests.
- Full regression suite retains AQA Trilogy Biology 78 Full / 0 Partial / 0 Missing, 2 Higher-only adequately covered, and 100 registered pathways.
- SHA-256 comparison to I: only osmosis-tutor.js, tests/osmosis-tutor.test.cjs and package.json changed, plus this new delivery note. Every other baseline file is byte-identical. Manifest supplied.

## Safari retest
1. Extract the ZIP and open index.html in Safari using the same usual launch method. Existing progress requires the same browser and site address.
2. Open AQA Trilogy Biology → Cell Biology → osmosis tutor → stage 3, Work with mass.
3. Check worked practice with blank input, c, -10 (missing %), or 8, -10%, -20%. Each must show a visible format error without consuming a hint.
4. Enter 8.0, -10%: expect correct denominator and percentage confirmation.
5. Enter +10% for 6.0→6.9 g three times: expect distinct Hint 1, Hint 2 (+0.9 g and 6.0 g denominator), then +15% worked explanation. No loss guidance for this gain.
6. Enter +15%: expect assisted-practice confirmation. Save & continue must wait for fresh transfer.
7. Answer fresh 10.0→8.0 g with -20% without hints; then continue. If a transfer receives hints, its correct answer must lead to another fresh sample instead of independent credit.
8. Revisit stage 3 or reload: feedback and support history should remain. Confirm existing Study Hub progress and video playback.

## Limits
Automated tests execute JavaScript with simulated DOM and storage, including actual HTML script-order integration. Real browser testing did not run: Playwright Chromium and WebKit binaries are absent, Chrome/Edge are absent, and the sandbox denied binding a local preview server. Safari visual layout, screen-reader announcements and focus behaviour therefore require the retest above. Existing free-text scientific reasoning remains teacher/rubric reviewed. Historical README/PROJECT-STATE documents inside the inherited source are retained as history; use this note and external test evidence for the new build.
