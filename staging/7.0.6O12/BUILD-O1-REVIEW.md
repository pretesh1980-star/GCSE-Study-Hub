# Build 7.0.6O1 — Unpublished review candidate

10 October 2026. Baseline: corrected 7.0.6N, not original N. Only milestone 1, **What are cells?**, gains interactive teaching. Nothing was published; M, older builds and both N candidates remain untouched. No O2 work began. Added dependencies/cost: £0.

## Completed experience

| Flow | Teaching and interaction |
|---|---|
| Hook | Shaded 2.5D vector journey: person → skin → living tissue → cell. Play, Pause, Replay, Skip, Mute, captions, transcript, manual frames and reduced-motion mode. |
| Discover | Building-brick analogy with an explicit living/non-living distinction; arrange cell → tissue → organ → organ system → organism using drag, tap or keyboard. Undo, guidance and connections. |
| Understand | Tap bacterium, human and tree to reveal one-cell/many-cell explanations. |
| Explore | Short life-process explanation and saved written reflection; optional comparison, not automatically marked. |
| Challenge | Four supported questions covering cell definition, importance, cell number and organisation. Misconception feedback, retries and three progressively stronger hints. |
| Master | Four unseen questions per check, without hints before submission. Existing grading, records and thresholds; review explanations after submission. |

The next-lesson button opens the preserved Cell structures and cell types milestone; it does not introduce O2 teaching.

## Preview

Extract **GCSE-Study-Hub-7.0.6O1-candidate.zip**. Open its `index.html` in desktop Safari, or serve the extracted folder locally. Select Biology → Cell Biology → milestone 1 → **Discover: What are cells? →** → **1. Hook** → Play. Replay returns to the person. For silent viewing choose Mute; use still frames for a self-paced alternative. The local review preview, while its server is running, is [http://127.0.0.1:8893/](http://127.0.0.1:8893/).

The CGI-style alternative uses lightweight SVG shading and CSS camera movement rather than full 3D, avoiding additional libraries, downloads and rendering load. These are stylised models, not micrographs or scale diagrams. Living skin tissue is shown below the outer surface. Silent automatic playback is approximately 53 seconds. Device narration duration varies.

## Curriculum mapping

This is an introductory prerequisite, not a replacement specification audit. Mapping checked against [AQA Trilogy 8464 Biology subject content](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content).

| O1 learning | Relationship to specification |
|---|---|
| Cells as living units | 4.1 Cell biology overview; context for subsequent cell-structure study. The overview itself is not separately assessed. |
| Cell → tissue → organ → system → organism | 4.2.1 Principles of organisation, introduced here as a useful cross-topic foundation. |
| Unicellular/multicellular examples | Prerequisite language for 4.1.3.1 diffusion/exchange; O1 does not teach its surface-area calculations. |
| Why cells matter; analogy limits | Explanatory foundation and model evaluation, not extra specification claims. |

O1 introduces no Higher-only content. The same introductory teaching and 16 new shared-tier questions are available in AQA Trilogy Foundation and Higher, with separate existing progress contexts. Other boards/courses retain their existing pathways. Organelles, specialised cells, microscopy/RP01, division/stem cells, transport/RP02 and the remaining curriculum are preserved rather than rewritten.

## Assessment and saving

Sixteen stable new question IDs provide up to four distinct four-question checks. Items already seen in ordinary practice are excluded; starting a check also reserves its exposed items. Returning to teaching during a pending check makes that attempt unscored practice. Repeated submission or reload cannot award duplicate credit.

Results use the original `grade()` and Cell Biology / Inside a cell records. Existing Secure ≥85 and Developing ≥65 thresholds remain; no parallel mastery system or score for viewing/clicking. Four introductory MCQs provide limited evidence, not proof of full Cell Biology mastery. All original questions remain intact; the new introductory items also enter the existing AQA Trilogy question pool. When fresh forms run out, no repeated scored form is offered.

Scene, phase, preferences, sequence, discoveries, supported answers, reflection and independent choices/results autosave inside the existing course/tier record. The storage key is unchanged. Progress stays on the browser; opening the ZIP elsewhere does not move saved records automatically.

## Verification

- Focused: **27 tests, 27 passed, 0 failed**.
- Full regression: **627 tests, 627 passed, 0 failed**; no skipped/cancelled tests. This includes all 600 baseline checks and 27 O1 checks.
- Browser: hierarchy sorting and keyboard Enter; organism interactions; wrong-answer feedback and hint; reflection restoration; unsubmitted answer restoration; independent 3/4 result; homepage accuracy 3/4 after reload; logo, Back, mobile Home/menu; all twelve milestones; Osmosis Lab opening, saving and membrane model.
- Responsive: Hook at 320/375/390/414/768/820 pixels; remaining scenes and an unanswered assessment at 320 pixels. No horizontal overflow observed. Final scene selector adjusted to keep complete labels readable.
- Desktop Safari: homepage/entry, rendered SVG, Play status and phase/caption change, Pause and still-frame controls. Audio quality was not independently listened to or recorded.
- All 47 initial scripts/styles and checked transcript/video asset URLs returned HTTP 200. Existing Osmosis script, styles, media, main application and curriculum/tier files are byte-identical to corrected N. The local in-app video stayed at buffering/readyState 0; successful Osmosis video playback is therefore not claimed in this session.

Evidence: `Verification-O1/focused-tests.txt`, `full-tests.txt`, `package-preservation.json`, browser notes and desktop/mobile screenshots. Earlier N reports included in the ZIP are historical baseline evidence.

## Known limitations and manual Safari checklist

Real iPhone Safari has **not** been verified. Narration uses the device's free browser speech voice; availability, accent, duration and pause/resume behaviour can vary. Captions update by scene, not word; silent playback and transcript remain available. Full 3D and a prerecorded O1 voice track are not included. Automated checks establish behaviour, not educational efficacy.

On a real iPhone, once an approved accessible preview is available:

1. Play the complete person → skin → tissue → cell journey; listen for complete narration and matching captions. Try Pause/Play, Replay, Skip, Mute and subtitle on/off. Confirm no overlapping captions or speech continuing after Home/Back/backgrounding.
2. Enable Reduce Motion; check manual frames. Test portrait/landscape, full menu/scene labels, tap sorting/Undo, example cards, wrong answers and progressive hints. Check keyboard/focus if using an external keyboard.
3. Enter a reflection and independent answers; reload and resume. Submit once, reload again and confirm unchanged totals. Switch Foundation/Higher to check separation. Verify homepage logo, Back and Osmosis Lab including its existing video.

Next recommendation, after O1 review and device testing: **7.0.6O2 — Cell Structures and Types**. Do not publish O1 or begin O2 without approval.
