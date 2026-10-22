# O2 review update — teaching access, Pause and narration pace

Unpublished update to Build 7.0.6O2. The original candidate ZIP is preserved. No deployment or O3 work.

## Cell Detectives: where the information is

The Explore scene teaches a structure’s function when you select its number or label. All four mysteries use that teaching: ribosomes/protein synthesis, mitochondria and chloroplasts, bacterial DNA, and the chloroplast exception in root hair cells. Previously, students could enter the mysteries without noticing that route to the information.

Each supported question now includes **Explore this clue**, opening the relevant cell and highlighting the relevant structure. The original mystery stays visible above the diagram, with **Return to Cell Detectives**. Answers and clues remain saved. Independent checks do not include this shortcut or hints; their safeguards and subsection-only scoring are unchanged.

## Pause

Confirmed a real bug in the Person → Skin → Tissue → Cell introduction: audio and stage/caption timers stopped, but a later CSS animation rule overrode the camera’s paused state. The layered motion stopped while the camera continued.

The correction freezes camera, layered movement and entry movement. Browser checks report both camera/depth `animation-play-state: paused`, and the same camera transform, caption and stage in two separated observations. Play resumes both animations; stage/caption callbacks cannot advance while paused. Device narration is cancelled on Pause and resumes from the available speech boundary, with the existing device limitations.

This fix concerns the Person → Cell introduction. The separate prerecorded Osmosis video is unchanged.

## Slower narration

Default device narration is now **Steady, 0.8×** the previous configured speech rate. Choose **Motion and narration options → Narration pace** for **Extra slow, 0.65×**, Steady or Normal. The preference saves separately per tier. Changing pace restarts the current view, then resumes it if it was playing. Estimated silent/caption timing is slowed alongside speech; actual speech boundaries continue to control voiced captions when available.

Device voices still vary in quality; slowing them does not make them human-quality recordings.

## Verification

- **80/80 focused tests passed, 0 failures.** Six new tests cover each mystery-to-teaching detour, preservation of answers/clues, independent-check isolation, saved/tier-specific speed, selected speech rate, slowed caption timing and the pause CSS override.
- **680/680 full regression tests passed, 0 failures.**
- Computer-driven browser checks: reproduced the moving-camera bug before correction; verified frozen picture/caption/stage afterwards; Play resumes motion; speed selector changes between Extra slow and Steady; first mystery opens ribosome teaching directly and returns to Cell Detectives with saved results.
- Original grading, curriculum, diagram artwork, published builds and Osmosis files are unchanged. No storage-key change or progress reset. The original O2 ZIP remains intact.
- No new manual Mac Safari audition or real-iPhone verification is claimed.

## Try it

Use the existing local preview at http://127.0.0.1:8895/. In Cell Detectives choose Explore this clue, read the highlighted part, then return to the mystery. In What are cells? → Hook, play and pause to check that the picture holds. Open Motion and narration options and try Extra slow if Steady still feels too quick.
