# Build 7.0.6O3a — unpublished review candidate

11 October 2026. Based on the verified unpublished O3 ZIP (SHA-256 `9a8f30f9d65f395ed29c0ad026d4c184945bba1c6566fe99f15d4d5c21cedcd4`). No publication, paid dependencies or Microscopy development.

## Root cause and before/after

The Showcase cards called `chooseCellJourney`, which selected a milestone, rerendered the dashboard, focused `cell-journey-current` below the cards and explicitly called `scrollIntoView`. This opened an information panel rather than the interactive lesson. Browser reproduction measured scroll position 2,007 pixels with that bottom article focused and no interactive lesson present. Fresh main dashboard entry stayed at zero during reproduction; the evidence confirms the card/selection fault, rather than proving every dashboard entry previously jumped.

Now Cell Biology entry and Learning Library explicitly show the visual dashboard at the top. Cards open the selected O1, O2 or O3 introduction; later milestones open a compact revision introduction with Start Learning. Continue Learning retains the saved scene. An unfinished independent check resumes its saved answers instead of being forced into teaching. Navigation itself awards no credit. Existing assistance rules still apply when leaving an assessment.

Focus moves to the destination heading without scrolling it first, followed by one immediate move to the top. Native browser history stores destinations only, never answer or score snapshots, and uses manual scroll restoration. Refresh restores the current destination and authoritative saved lesson state. History from another tier returns safely to the current tier dashboard. Homepage logo, existing Back control and one Learning Library exit remain accessible.

## Compact supporting panel

A short lesson title, curiosity prompt and single Start action replace the oversized introduction. About this lesson, Revision notes and Extra practice are collapsed semantic disclosures. Canonical rendered curriculum references, rationale, prerequisites, original explanations, questions, source links and previous/next relationships are retained. Start Learning opens teaching for revision milestones; final assessment opens the existing assessment. Microscopy remains existing revision access only.

The dashboard’s selected-lesson disclosure measured 45.5 pixels when collapsed at 390-pixel width; revision introduction measured approximately 438 pixels. No horizontal overflow was observed at 390 × 844. Showcase artwork, landscape-card styles, four chapters and all twelve milestones remain unchanged.

## Verification

- Focused: **166/166 passed**.
- Full regression: **725/725 passed**.
- Both: zero failures, skips or cancellations. The 12 new navigation tests are included in these totals, not additional totals.
- Automated browser checks in the Mac-hosted in-app browser: main entry, all three interactive card destinations, Learning Library, native Back/Forward, reload, existing Back button, keyboard Enter on a disclosure, revision Start Learning, interactive cell diagram, saved O3 reflection after reload, Osmosis Lab entry/saved answer/reload and homepage logo passed.
- At 390 × 844: dashboard, O2 and revision panel fit within the viewport. This is responsive browser verification, not a real iPhone test or a complete touchscreen/screen-reader audit.
- No browser console warnings/errors observed during the final check.
- Preservation comparison: 232 baseline files identical, seven changed, two added, none missing. Changes are navigation/presentation, build labels and updated navigation test expectations. Original app/scoring, O1/O2/O3 tutor files, curriculum data, Osmosis assets and lesson CSS are byte-identical. See preservation-manifest.json.
- Previously published directories and the original O3 package were not modified. Superseded deliverables from this workspace were archived rather than deleted.

## Limitations and Mac review

Narration, pause controls and captions are preserved, not newly redesigned. Voice quality remains dependent on browser/system voices. Real iPhone Safari, audible narration and a full assistive-technology audit have not been verified in this correction. Browser storage is specific to browser and origin: the new localhost test address has separate test progress from earlier preview addresses.

For Mac review, use the running preview at http://127.0.0.1:8910/ while this local server remains available. For the ZIP, extract the complete folder before opening index.html; if local-file media/storage restrictions occur, use a local web server rather than an archive preview.

1. Open Cell Biology. Click each of the first three cards; confirm the correct introduction appears at the top. Use Learning Library, the website Back button and browser Back/Forward.
2. Open a later revision milestone. Expand About this lesson with Enter, then Start Learning. Check the twelve milestones and approved card appearance.
3. Save a reflection or answer, return to the dashboard and refresh. Confirm it is restored. Open Osmosis Lab and check saved progress; switch Foundation/Higher and confirm records remain separate.

For iPhone Safari, repeat those navigation/progress checks, then check touch disclosure controls, narration/play/pause/captions and that labels fit without sideways scrolling. These checks remain pending on a physical iPhone.

## Next milestone

Microscopy is the recommended next teaching upgrade after O3a review. It has not been started. O3a remains unpublished and awaits user review.
