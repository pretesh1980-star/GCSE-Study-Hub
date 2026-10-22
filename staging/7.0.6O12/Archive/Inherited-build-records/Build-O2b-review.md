# Build 7.0.6O2b — unpublished student experience candidate

10 October 2026. Based on the latest O2 review-update source. Development stops here: no GitHub deployment, no O3, no Specialised Cells upgrade. All previous output packages and reports remain in Archive; the original O2 source is unchanged.

## What changed

- A welcoming Cell Biology dashboard replaces the opening wall of explanations. It shows the selected milestone, next activity, saved achievements and one main Start/Continue action. Specification notes, prerequisites, purpose, original teaching and revision resources remain in accessible disclosures.
- All twelve milestones are visible and freely revisitable, in the original order. The compact desktop pathway uses two columns; mobile uses one vertical column. Current selection and completion have text labels, with real saved lesson scores.
- Build a living world now places an accessible feedback message immediately beneath the sequence. A correct attempt receives “Brilliant! You've got the correct order” and a short explanation. Incorrect attempts receive progressive hints without dumping the full answer, even after repeated errors. Dragging, tapping, keyboard controls, undo and saved sequence restoration remain available. Changing the sequence clears stale success feedback.
- O1 practice and Cell Detectives give a brief invitation to try an independent check when all four activities are correct. Independent results show the number correct, actual lesson mastery, supported/independent status, expandable mistake review and next activity. Scoring details appear once in an information disclosure.
- The approved “What makes a cell work?” diagram, animal/plant/bacterial selectors, structure labels, explanations, analogies, Explore this clue and return interactions are unchanged.

## Before / after dashboard

Before: a large topic heading and pathway explanation, purpose/prerequisite paragraphs, then a collapsed grey milestone menu before interactive lessons.

After: a compact topic header, “Welcome to Cell Biology!”, a current-activity card with Start/Continue, achievement information and a visible numbered pathway. Educational context remains available when wanted.

## Mastery and completion

No scoring engine, thresholds, storage keys, question IDs, assessment questions or curriculum mappings changed. Independent O1/O2 answers still use the existing +12/-10 lesson scoring with a 0–100 range. Secure still begins at 85%. Supported practice, watching and navigation award no mastery; O1/O2 checks award no whole-topic Cell Biology mastery. Duplicate protection and the existing O1a recovery remain intact.

Completion is derived from existing graded answer records covering all concepts: O1 requires definition, importance, number and levels; O2 requires two answers in each of functions, plant and bacterial concepts. Correctness affects mastery, not whether the independent evidence was completed. No new completion store or competing framework was introduced. Earlier identifiable evidence survives reload and fresh checks; all Foundation/Higher reading uses the existing record context.

The browser smoke test answered the first O1 question incorrectly and the next three correctly: **3/4 correct, 36% lesson mastery, one recorded milestone, whole-topic mastery 0%**. This is an observed result, not a fixed conversion from accuracy: the existing capped +12/-10 system depends on prior score and answer order. The dashboard never substitutes illustrative percentages for saved data.

Only O1/O2 currently have reliably attributable independent concept evidence. The journey count therefore covers these two milestones; older shared question banks, module-test attempts and separate Osmosis Lab records are not guessed into completion or lesson mastery. They remain accessible and unchanged. A completed check is distinct from Secure mastery.

## Narration investigation

The robotic-voice concern remains unresolved. No claim of a natural teacher voice is made.

1. Browser voices: the Mac in-app browser exposes Daniel and eight other British-English voices. The current British device voice, selected voice preference, Steady/Extra slow/Normal pace controls and full transcript are preserved. Availability and quality vary across devices; no new voice has been audibly accepted by the user in O2b.
2. Local prerecorded Mac narration: local speech generation is available, but embedding it would require a voice-quality audition and confirmed redistribution rights. No unlicensed Mac voice recordings were shipped.
3. Open-source local narration: reused the previous Piper/Alba investigation. The installed Mac runtime failed on an unavailable phoneme-data path; no successful audio was generated or evaluated. Repairing/building that runtime and judging quality would exceed this task’s bounded investigation. Piper supports local speech generation, but a consistent prerecorded voice remains a future option, subject to successful generation, licence review and listening evaluation. See [Piper documentation](https://github.com/OHF-Voice/piper1-gpl/blob/main/docs/CLI.md) and the [Alba model card](https://huggingface.co/rhasspy/piper-voices/blob/main/en/en_GB/alba/medium/MODEL_CARD). The card links the dataset’s CC BY 4.0 terms; this is not presented as a completed redistribution review.

No paid dependencies, subscription, new cloud speech service or tracking were added.

## Verification

- **107/107 focused tests passed; 0 failed.** Includes O1, O2, structured navigation and the added student-experience regressions.
- **691/691 full regression tests passed; 0 failed, skipped or cancelled.** Logs are in Verification-O2b.
- All twelve milestones, current selection, genuine completion, actual lesson scores, unchanged whole-topic scores, supported practice, independent checks, duplicate protection, saved answers/reload, Foundation/Higher separation, sequence feedback placement and progressive hints are covered by automated tests.
- Computer-driven Mac in-app-browser checks confirmed the 3/4 result, reload-restored achievements, homepage logo, Back navigation, clue-to-ribosome teaching and return, and saved Osmosis explanation. Tests used a separate localhost origin to avoid changing the review profile’s answers.
- Pause showed both camera and depth animations paused. Two separated observations had identical camera transform, Person stage and caption. Play/Replay and the device-narration status worked; existing boundary-caption and fallback-timing tests passed. Audio quality was not audibly assessed.
- At 390px width, the pathway was one column, all milestone buttons exceeded 44px height, all labels wrapped, and page width matched viewport width with no horizontal overflow. Desktop labels also had no overflow. This is responsive browser testing, **not real-iPhone Safari testing**.
- 50 referenced local assets returned HTTP 200, including scripts, styles and Osmosis video/poster/transcript.
- Preservation checks confirm identical approved O2 explorer functions, narration-control functions, Osmosis source, curriculum/course files and navigation modules. All published builds are untouched.

## Simple Mac review

1. Use the updated [local preview](http://127.0.0.1:8895/) and confirm the O2b banner. On Cell Biology, choose a milestone and use Start/Continue; test the logo and Back button.
2. In What are cells? → Discover, check an incorrect sequence, then correct it. In Master, inspect actual mastery and expandable mistakes after submission. Reload to confirm restoration.
3. Open Cell structures and types: compare the three diagrams, use Cell Detectives → Explore this clue → Return, then try the independent check. In the introduction, test Play/Pause/Replay, sound, subtitles and pace. Check Osmosis Lab still opens.

For an offline copy, extract the latest ZIP into a new folder and open its index.html. Browser progress belongs to its origin: a file copy, a different local port or another browser can show different records. Use the same preview address for continuity; export a progress backup before moving. The existing Osmosis tutor uses separate storage, so its backup limitation remains unchanged.

On iPhone Safari, check mobile navigation, introduction sound/pause/captions, and saved lesson answers after reopening. This still needs real-device review.

**Next recommended development milestone: Specialised Cells, after user review and approval. It has not been started.**
