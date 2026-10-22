# Build 7.0.6O4b1 — simpler microscopy calculations

Unpublished review candidate, 11 October 2026. Refinement of O4b following user feedback that the three parallel tasks were too complicated.

## Simpler learning flow

The main task is now **How small is the real cell?** Only one step is shown at a time:

1. Measure the picture. Move Start and End to the cell edges. Visible orange endpoint markers and numerical slider readings show exactly what is being measured. The measured length is the difference between the two positions.
2. Make the picture smaller. A visual equation explains that a picture enlarged 500 times must be divided by 500 to find the real length. Students calculate 30 ÷ 500 in millimetres first, without combining division and conversion at once.
3. Introduce the tiny unit after success. 0.06 mm and 60 µm are explained as two ways of writing the same length. “Micrometres” is written out and pronounced.

The three competing exercise tabs have been removed. The other equation uses remain available under **When you’re ready**, with clear titles and worked examples: **Find how many times bigger** and **Find the picture size**. Each explains which size is known, what is being found, and the calculator steps. The picture-size example no longer asks students to measure an image before they have calculated its size.

Unit conversion practice and the resolution comparison are collapsed optional resources. All required O4b content remains available. Supported examples award no mastery. The independent bank and its protections, marking, coverage and freshness rules are unchanged; students should work through the optional examples before attempting the full check.

## Preservation and tests

- Focused checks: **289/289 passed**.
- Full regression: **789/789 passed**, zero failures/skips/cancellations.
- Five additional tests check the single-task starting view, matching ruler endpoints, mm-first feedback followed by µm, both worked examples, and preservation of prior evidence.
- Live browser: main measuring → calculation → micrometre explanation works; keyboard sliders update endpoints; optional image-size example opens with complete worked steps.
- Mobile viewport 390 × 844: width and scroll width both 390, with no horizontal overflow. Physical iPhone/Android testing and formal screen-reader checks remain pending.
- Existing labels, microscope, dashboard, Osmosis Lab, other lessons, saved scores and independent answers are preserved. Presentation restarts at the main measuring task once; prior practice values and evidence remain stored.
- Candidate ZIP integrity and every archived file are verified. Latest ZIP is byte-identical to the new candidate. The prior O4b package remains in Archive/O4b-before-simplification.

## Review

[Open preview](http://127.0.0.1:8915/#cell-biology/microscopy), choose **Measure & understand**, and try the main task first. Move Start to 10 mm and End to 40 mm, then press **I’ve measured it**. Use 30 ÷ 500, enter 0.06 mm, and see the micrometre explanation after checking.

The preview retains demonstration QA progress on its separate origin. Original browser progress from other ports is not imported or overwritten. The complete ZIP is the durable deliverable; unpack it and keep all files together.

No publication or RP01 development. Stop for review. Starting allowance was user-reported 79%; no current remaining allowance inferred.
