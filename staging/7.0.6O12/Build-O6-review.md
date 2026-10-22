# GCSE Study Hub 7.0.6O6 — unpublished review candidate

Start with `GCSE-Study-Hub-LATEST-OPEN-THIS.zip`. Extract the whole folder together. The candidate is based on the verified, user-approved 7.0.6O5 build; the original O5 files and all published versions were left untouched. No GitHub push or deployment occurred. O7 was not started.

## Preview

For a quick look, open the extracted `index.html` in a browser, select Biology → Cell Biology → milestone 6. For a consistent local address, double-click `Start Preview.command` in the candidate folder, then visit:

http://127.0.0.1:8931/#cell-biology/division

The launcher uses Python already available on this machine (with a system fallback). Keep its terminal window open while reviewing; Control+C stops it. If macOS does not launch the command file, open Terminal in the extracted folder and run `python3 -m http.server 8931 --bind 127.0.0.1`. Use the same browser and address to retain progress. A browser opened directly from a file can have different storage behaviour. Export progress through Settings before changing origin or device.

The temporary QA preview on port 8930 contains demonstration scores. Port 8931 is the separate review origin. The ZIP contains no browser test scores or personal progress. Preview servers used during verification were stopped after testing; start the launcher to review. No account, paid dependency or build step is needed to use the lesson.

## Review the progression

1. **Inside the nucleus:** explore nucleus, chromosome, DNA and gene. Move the gene highlight, then build the relationship chain. Test an incorrect choice and progressive hints. The chromosome-pair model is explicitly simplified and separates paired partners from identical replicated copies.
2. **One cell → two:** drag the timeline or use its arrow keys and stage buttons. Try Play/Pause and rewind. Growth and DNA replication occur before mitosis; chromosome-copy separation and nuclear division precede final cytoplasm/membrane division. Each daughter receives the original complete set. Four controls split preparation into two actions; the lesson teaches the three overall GCSE stages, without requiring named mitosis phases. Compare the separate meiosis explanation.
3. **Stem cells & choices:** compare human embryo, adult bone marrow and plant meristem sources. Try impossible and possible descendants. Explore the four cases, age/differentiation notes, therapeutic cloning, potential treatments, safety limitations, and balanced ethical reasoning. Personal religious or ethical positions are not graded.
4. **Independent check:** 15 fresh items per form, including a new fictional chromosome-count scenario and a two-selection evaluation item. No hints, teaching, correctness feedback or model answers during the check. Complete every item; select exactly two for the final question. Feedback appears only after submission.

Guided work awards no mastery. Two fresh forms can each set the latest independent O6 lesson score. An assisted, pre-exposed or repeated form is unscored. Leaving a pending assessment to view teaching makes it unscored; reloading the same assessment preserves independence. Completion records an independent check; Secure requires at least 85%. Neither result completes the whole Cell Biology topic, and the older division-practice score is preserved separately.

## Verification

| Checkpoint | Focused automated tests | Full automated regression |
|---|---:|---:|
| O6a — chromosomes/DNA | 12/12 | 839/839 |
| O6b — cell cycle/mitosis | 21/21 | 848/848 |
| O6c — stem cells/assessment | 50/50 | 877/877 |

All final runs have zero failures, skips, cancellations and todo tests. Focused counts refer to the O6 behavioural tests; full counts include every existing `tests/*.test.cjs` file. The old navigation assertion now checks revision-only milestones from O7 onward, while dedicated O6 tests check its interactive entry and preserved revision destination.

Browser verification used Codex’s in-app browser, at 1280, 768, 390 and 320 CSS-pixel widths. Checked visual layout, horizontal overflow, visible control sizes, labelled keyboard ranges, native grouped assessment inputs, SVG descriptions, live feedback/focus, play/pause, reload, revision/back navigation, independent scoring, assisted scoring isolation, lesson-only dashboard progress and opening the approved O1–O5 lessons plus Osmosis Lab. Reduced-motion behaviour is covered by the focused tests. This is responsive simulation, not physical iPhone testing or a formal screen-reader audit. The legacy standalone Playwright browser scripts were not run; the bundled runner had no installed test browser. Focused live browser checks were completed using the available in-app browser.

Repaired issues: course-switch cleanup, direct-route reload initialisation, crowded cycle buttons, excessive animation announcements, feedback focus moving to the page top, reset recreating guided state, and potential overlap with the old division-practice mastery record. No known unresolved failure from the performed checks. Physical-device Safari and formal screen-reader verification remain pending. The assessment supplies lesson-level evidence, not an official GCSE grade or certification of medical knowledge.

Preservation: all 66 inherited `.js`, `.css` and supporting `.html` runtime files are byte-identical. `index.html` alone adds the O6 modules/styles and updates the unpublished banner/title. Existing questions, modules, media, Showcase dashboard, Optional Revision Resources, other subjects and storage keys remain intact. See `Preservation-O6.json`.

## Sources and scope

The core content applies to both AQA Trilogy tiers; no artificial Higher-only mitosis-phase requirement was added. Other exam-board/course pathways retain their existing content; this interactive lesson is restricted to AQA Trilogy. Reviewed against [AQA Trilogy Biology 4.1.1.4 and 4.1.2](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content). Medical context distinguishes established selected blood-cell transplants from potential applications, using [NHS stem-cell and bone-marrow transplant information](https://www.nhs.uk/tests-and-treatments/stem-cell-or-bone-marrow-transplants/). Scientific models are labelled as simplified, not to scale and not treatment procedures.

## Recovery and next action

`Archive/` contains the untouched O5 baseline and independently packaged O6a/O6b/O6c checkpoints. Each checkpoint identifies its own build and validation totals. The latest and named O6 candidate ZIPs are identical; hashes are in `ZIP-SHA256.txt`. `PROJECT-STATE-O6.md` gives the concise state and usage record. Stop here for user review. No publication and no O7 work is authorised by this delivery.
