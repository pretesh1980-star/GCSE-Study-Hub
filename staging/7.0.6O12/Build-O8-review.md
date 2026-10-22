# GCSE Study Hub 7.0.6O8 — Surface area and exchange

Unpublished candidate, ready for user review. O1–O7 remain approved; O9 has not started.

O8a lets learners change a cube side from 1 to 6 mm and see its surface area, volume, SA:V ratio and centre distance change together. Doubling the side gives four times the area and eight times the volume. The model distinguishes its easy-to-read millimetre cubes from real biological cells. Optional slow British English device narration, persistent captions, play/pause, replay and scene selection reuse the O6/O7 speech API and settings. The ratio explanation distinguishes the conventional GCSE numerical ratio from the dimensional SA/V quotient and requires consistent units.

The exchange explorer covers alveoli, intestinal villi, root hairs, leaves and fish gills. Select area, distance or maintained gradient to reveal the appropriate explanation. A generic animal exchange model also lets learners change folds, barrier thickness and supply/removal independently. Root water uptake is identified as osmosis; mineral uptake can use active transport. Intestinal absorption is not presented as exclusively diffusion. Leaf gas directions depend on gradients and light.

Three guided calculations scaffold area, volume and ratio. They award no mastery. O8b has two fresh 12-question forms with typed calculations, size comparisons, biological reasoning and unfamiliar exchange surfaces. Hints and teaching are absent during a pending check. Reload preserves answers. Returning to teaching or leaving a pending check makes it unscored; repeats cannot add mastery. Independent evidence updates only **Cell Biology|Surface area and exchange · O8**, not topic mastery or other lesson scores.

The small O7 correction identifies every incomplete item, counts exactly-two selections correctly, focuses and scrolls to the first incomplete question, and retains answers. Resolved errors and completion counts update without replacing focused inputs. O7 question data and scoring logic remain byte-identical.

## Verification

| Run | Passed |
|---|---:|
| Approved O7 baseline | 918 / 918 |
| O8a guided focused | 13 / 13 |
| O8a full regression, including O7 UX | 935 / 935 |
| Final focused: O8 27 + O7 32 + UX 4 | 63 / 63 |
| Final full regression, focused included | 949 / 949 |

Final runs have zero failures, skipped, cancelled or todo tests. Full logs and preservation hashes are in **Verification-O8**. The final full run covers the final JavaScript; the subsequent scoped CSS layout adjustment was rechecked in the browser.

Browser checks passed at 390 × 844, 768 × 1024 and 1365 × 900 with no horizontal overflow and no O8 buttons below 44 px high. Checked keyboard size changes, model updates, visual narration controls/captions, guided feedback, typed-answer reload, incomplete-item focus, O8 and O7 exact-two correction, valid 12/12 submission, dashboard evidence and unchanged topic mastery. Test answers were saved only on the separate verification origin at port 8938.

Preservation: **342 baseline files unchanged, no missing files**. Seven existing files changed: entry/build labels, launcher, package metadata, current pointer, concise roadmap, O7 assessment UX and the navigation test that formerly expected O8 to be revision-only. Approved teaching files, Showcase dashboard, optional revision, Osmosis Lab, RP01, other subjects, board/tier logic and existing storage-key definitions remain identical.

Physical iPhone Safari, formal screen-reader testing and audible real-device narration quality/timing remain pending. Exchange illustrations are schematic, not to scale; the generic exchange model predicts qualitative effects rather than measured rates. No known failing checks remain.

Science scope was checked against [AQA Trilogy Biology 4.1.3.1](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content).

## Review locally

Extract **GCSE-Study-Hub-LATEST-OPEN-THIS.zip**, keeping its files together. Double-click **Start Preview.command** and keep its window open. Visit **http://127.0.0.1:8931/#cell-biology/exchange**. Stop an earlier preview on port 8931 first. Use the same browser and address as previous builds to retain saved progress.

Try 1 mm versus 6 mm; play/pause and mute the explanation; compare the exchange adaptations; complete the guided calculations; then try the independent check. In O7, submit with only one final selection to review the focused error. Opening index.html directly is possible, but uses a different storage origin in some browsers.

Recovery ZIPs: **Archive/O7-verified-baseline.zip**, **Archive/O8a-guided.zip**, **Archive/O8b-assessment.zip**. SHA-256 checksums and archive-content verification accompany the build.

Stop for user review. Nothing published, pushed to GitHub or added to O9.

Allowance snapshot: 50% five-hour remaining, starting 68%; 69% weekly remaining. Account-wide Codex usage, not a separate Work-specific meter. Stop threshold 30%.
