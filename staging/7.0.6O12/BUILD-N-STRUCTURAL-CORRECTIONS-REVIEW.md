# Build 7.0.6N — Stage 1 structural corrections

Unpublished candidate for educational review. Built from a separate copy of the original N candidate. Live M, root Build 4, J/K/L and the original N package were not modified. No publication or Stage 2 teaching upgrades took place.

## Changes

- Twelve milestones in the requested order, each with a specific purpose, prior knowledge, next connection and demonstration of understanding.
- Original eight canonical lessons split by text ranges, preserving all their text and stable identifiers. Deeper examples, diagrams, cards, keywords and challenges remain available in the optional revision panel.
- Particle movement/concentration introduced before diffusion; respiration energy introduced before active transport. Chromosomes precede mitosis, differentiation and stem cells, before transport.
- RP01 and RP02 are separate milestones immediately after their theory. Guidance distinguishes preparation, methods, controls and analysis/errors; online work does not complete a physical practical.
- Unchanged Osmosis video and interactive entry appear only within milestone 9. Final assessment is offered at milestone 12 before the optional Organisation link.
- Logo/home and Back retained. Homepage resume and last-visited milestone survive reload, separately for each board/tier/course context. Revision remains unlocked. Visits never alter mastery; original grading rules and Osmosis independent checks remain unchanged.

## Exact twelve-milestone mapping

References use the existing AQA Trilogy mapping and the previously inspected [AQA 8464 Biology specification](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content). This is a structural mapping, not a fresh curriculum audit. Names in quotation marks are unchanged canonical lesson identifiers.

| # | Displayed milestone | Existing material and subsections | AQA references |
|---|---|---|---|
| 1 | What are cells? | Existing quick overview (cells as building blocks), with a short orientation; detailed “Inside a cell” content follows at 2 | 4.1 overview; introductory link to 4.2.1 |
| 2 | Cell structures and cell types | “Inside a cell”: organelles/functions, eukaryotic/prokaryotic and plant/animal comparisons; bacterial and plant comparison extracts from “Bacteria and specialised cells” | 4.1.1.1–4.1.1.2 |
| 3 | Specialised cells | Adaptation/function extracts from “Bacteria and specialised cells”: sperm, root hair, nerve, muscle, xylem, phloem and unfamiliar-cell reasoning | 4.1.1.3; differentiation developed at 6 |
| 4 | Microscopy | “Microscopes and scale”: magnification, resolution, microscope development, units, calculations, scale and size estimates | 4.1.1.5; size skills in 4.1.1.1 |
| 5 | Required Practical 1: Microscopy | “Your board · microscopy” plus existing Microscopy practical: method, focusing, drawings/labels, scale, controls, results and errors | RP01 attached to 4.1.1.2; 4.1.1.5 |
| 6 | Chromosomes, cell division and stem cells | “Division and stem cells”: chromosomes/DNA, cell cycle/mitosis, differentiation, stem-cell types, therapeutic cloning, meristems, benefits/risks/ethics | 4.1.1.4; 4.1.2.1–4.1.2.3 |
| 7 | Diffusion | Diffusion extracts from “Diffusion and osmosis”: random/net movement, gradients, examples and factors; brief prerequisite introduction added | 4.1.3.1 |
| 8 | Surface area and exchange | “Surface-area-to-volume reasoning” plus exchange extracts from “Active transport and exchange”: thin surfaces, organism size and adaptations of alveoli/gills/villi/roots/leaves | 4.1.3.1 |
| 9 | Osmosis | Osmosis extracts from “Diffusion and osmosis”: water, membrane, solution concentration and plant/animal effects; unchanged Osmosis Lab/video | 4.1.3.2 |
| 10 | Required Practical 2: Osmosis | Existing Osmosis in plant tissue practical plus mass-change/graph analysis from “Diffusion and osmosis”: controls, repeats, percentages, rates, interpretation and errors | RP02 attached to 4.1.3.2 |
| 11 | Active transport | Transport extracts from “Active transport and exchange”: against-gradient uptake, mineral ions, glucose and comparison with diffusion/osmosis; brief respiration-energy prerequisite added | 4.1.3.3 |
| 12 | Cell Biology assessment | Existing written Cell Biology module test, mixed practice and review; optional onward Organisation navigation | Review of 4.1.1–4.1.3; sampled assessment, not exhaustive coverage |

## Verification

- Focused structural/navigation tests: **16/16 passed; 0 failed, 0 skipped**.
- Full automated regression suite: **600/600 passed; 0 failed, 0 skipped**. Includes the 16 focused tests. One existing Osmosis integration test now selects milestone 9 before expecting its entry; its playback/model/progress assertions remain.
- Text-range tests reconstruct every canonical lesson exactly once in Foundation and Higher. File comparisons confirm all curriculum, tier metadata, question banks, assessment/scoring data, tutor script and media unchanged from original N.
- Local browser checks: displayed order, separate practicals, prerequisites, final assessment opening, homepage, Back, reload resume, tier switching, mobile menu, Osmosis entry/return and saved tutor answer restoration.
- At widths 320, 375, 390, 414, 768 and 820, the expanded milestone chooser had no horizontal page overflow or clipped button contents.
- Foundation/Higher filtering retained, including shared surface-area content. Other boards and science courses retain their existing lessons rather than receiving Trilogy practical labels.

Evidence: `Verification-N-corrected/focused-tests.txt`, `full-tests.txt`, `browser-checks.json`, `preservation-manifest.json`. Browser preview is local only: http://127.0.0.1:8892/ while its preview server is running.

## Remaining gaps

- Educational structure has **not been approved**. No new curriculum audit, pupil study or real iPhone Safari verification was performed.
- Existing module assessment has six sampled questions in the tested pathway and does not cover the whole Cell Biology specification. Existing written answers are self-assessed; stronger independent assessment is outside Stage 1.
- Practice/mastery remains attached to original subsections. Split milestones may share a question set; there are no new twelve-milestone mastery scores. Last visited is a navigation position, not completion.
- Original lessons contain some overview/detail repetition. Their text is retained; the competing full-lesson rendering was removed, and optional recap resources are collapsed.
- Broader course-settings “About this course” wording is inherited from the baseline. The journey itself uses the existing audited metadata and makes no new coverage claim.
- This run checked unchanged video placement/caption markup and tutor saving, not physical iPhone playback/audio. The original caption fix and media are byte-identical. Physical required practicals still require teacher-supervised laboratory work.
- Progress is local to a browser origin. Local preview does not import records from the public site; existing record keys/formats are retained for any future deployment review.

## Review before publication

1. Open the local preview or extract the ZIP and open its index page. Choose AQA Combined Science Trilogy and the required tier, then Biology → Cell Biology. Expand “Choose a milestone” and inspect all twelve in order.
2. Check each purpose/prerequisite/next/demonstration statement; inspect RP01 at 5, Osmosis/Lab at 9, RP02 at 10 and assessment at 12. Try earlier/later revision, logo, Back, reload and Continue learning in both tiers.
3. Test on a real iPhone Safari: long labels/menu, video sound/subtitles, Lab answer saving and return navigation. Review the assessment limitation before deciding whether to approve this structure. Publication requires a separate user decision.

No paid service was used. No hosting change occurred.
