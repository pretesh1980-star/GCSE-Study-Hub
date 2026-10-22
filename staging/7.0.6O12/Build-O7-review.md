# GCSE Study Hub 7.0.6O7 — Diffusion

Unpublished candidate, ready for hands-on review. O8 has not started.

O7a introduces random particle motion through a smell-in-a-room analogy and three captioned scenes: random motion, net movement and equal concentrations. Play/pause, replay, scene selection and sound on/off are available. Optional slow British English device narration reuses the existing speech API; captions and pictures continue without a voice. The experiment offers equal/gentle/steep gradients and cool/warm/hotter settings, visible crossings in both directions, a net-direction indicator, a previous-setting comparison and optional hints. Biological examples cover oxygen entering cells, carbon dioxide leaving, lungs, leaves, gills, intestine and urea. Extra explanation distinguishes osmosis, membranes, passive diffusion and kinetic energy.

O7b provides two fresh 12-question forms, including net-transfer calculations, unfamiliar rate comparisons, fair investigations and biological reasoning. No hints or answer feedback appear before submission. Guided work earns no credit. Leaving a pending check or returning to teaching makes it unscored; reload resumes it. Repeated forms cannot add mastery. Only the separate O7 lesson score changes; whole-topic and previous lesson mastery remain separate.

## Verification

- Verified O6r1 baseline: **886/886** automated regression tests.
- O7a checkpoint: **13/13** targeted tests; recoverable guided ZIP archived.
- Final O7 focused tests: **32/32** (17 guided/model/narration, 15 assessment).
- Final full regression: **918/918**, including the 32 O7 tests. Zero failures, skipped, cancelled or todo tests.
- Browser: deep link, scene/caption progression, play/pause controls, replay, mute, changing particle/crossing counts, temperature feedback/reset, keyboard One step, biological entry, independent answer reload, 12/12 submission, O7 dashboard evidence, unchanged topic mastery, O6 entry and native Back checked. Layout checked at 390 × 844, 768 × 1024 and 1365 × 900 with no horizontal overflow.
- Preservation comparison: **336 baseline files byte-identical**, no missing files. Five existing files changed: build entry/labels, preview launcher, package version, current-build pointer and the test that previously expected Diffusion to be a revision-only lesson. Approved O1–O6r1 source, Showcase dashboard, other subjects, optional resources, RP01, Osmosis Lab and existing storage-key definitions remain identical.

The initial regression exposed that old navigation expectation; it was updated only for O7. A narration-test mock initially counted cancellations from prior lessons; its counter was isolated. Both are resolved in the final passing run. Initial local-preview permission and missing standalone Playwright browser issues were resolved by granted localhost access and the available in-app browser. Earlier diagnostic logs are retained alongside final logs.

Physical iPhone and formal screen-reader tests remain pending. Browser checks establish visual playback and captions; audible device voice quality and real-device speech timing need hands-on review. The random-walk dots and the separate mean mixing trend are illustrative models, not measured tissue rates. Temperature settings are qualitative. O7 is added to the existing AQA Trilogy Higher/Foundation journey; other board/course pathways remain unchanged.

Science scope checked against [AQA Combined Science: Trilogy, Biology subject content](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content), section 4.1.3.1.

## Review locally

Extract **GCSE-Study-Hub-LATEST-OPEN-THIS.zip** with all files together. Double-click **Start Preview.command** in its folder; keep the terminal open. Visit **http://127.0.0.1:8931/#cell-biology/diffusion**. Use the same browser and address as earlier builds to retain saved progress. Stop an earlier preview on that port before starting this one. Opening index.html directly is an alternative, but may use a different browser storage origin.

Try Play, Pause, Sound off and Replay. Compare gentle versus steep at warm, then cool versus hotter at steep. Try equal concentrations and watch crossings continue. Open In living things, then attempt the independent check. Please check narration pace, whether net movement is intuitive, and touch controls on your iPhone.

The temporary verification server on port 8937 is stopped at handoff. Browser testing used that separate origin, so its test answers do not alter progress saved at port 8931.

Recovery ZIPs: Archive/GCSE-Study-Hub-7.0.6O6r1-baseline.zip, Archive/GCSE-Study-Hub-7.0.6O7a-guided.zip, Archive/GCSE-Study-Hub-7.0.6O7b-assessment.zip. Checksums are in ZIP-SHA256.txt; detailed logs and preservation evidence are in Verification-O7/.

Allowance snapshot: **70% five-hour remaining**, starting at 85%; 72% weekly remaining. These are account-wide Codex limits; no separate Work-specific meter is exposed. Safe-stop threshold is 30% remaining.

Stop for user hands-on review. Nothing published or pushed to GitHub.
