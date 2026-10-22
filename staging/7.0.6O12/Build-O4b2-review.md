# Build 7.0.6O4b2 — more examples with cell sizes retained

Unpublished review candidate, 11 October 2026. Based on verified O4b1. No publication or new RP01 development.

## What changed

There are now nine guided examples: three for finding real cell size, three for finding magnification, and three for finding picture size. Each calculation retains its simple step-by-step flow. A single **Next example** button advances within the chosen calculation, rather than adding competing exercise tabs.

The first two examples guide the calculation. The third is labelled **Your turn**, keeps the method available, and hides the final numerical result until the student checks a correct answer. All nine examples remain supported practice with no mastery credit. The separate independent assessment bank, scoring and freshness rules are unchanged.

A persistent cell illustration and size card remain on the calculation page. Known real-cell length, known picture length and magnification are displayed with their units. An unknown size is labelled **find its size**, then replaced with its value after a correct answer. The illustration is explicitly schematic and not to scale; it is not a second measuring tool.

The added examples use these values:

| Find | Example 1 | Example 2 | Example 3 |
| --- | --- | --- | --- |
| Real cell size | 30 mm / 500 = 60 µm | 20 mm / 400 = 50 µm | 30 mm / 1000 = 30 µm |
| Magnification | 40 mm / 80 µm = 500× | 30 mm / 100 µm = 300× | 40 mm / 50 µm = 800× |
| Picture size | 60 µm × 400 = 24 mm | 50 µm × 200 = 10 mm | 40 µm × 500 = 20 mm |

Lengths are converted to matching units before division. The actual-size task still calculates in mm first, then introduces µm. The new cases use original numbers and are separate from the independent assessment questions.

## Verification and preservation

- Focused tests: **294/294 passed**.
- Full regression: **794/794 passed**, zero failures, skips or cancellations.
- The final full suite was rerun with two test files at a time after one earlier test process stopped. All 22 checks in that process also passed separately.
- Five new tests verify three distinct examples per calculation, all nine answers, retained size labels without revealing unknowns, hidden third-example results, and reload of per-example answers with prior independent scores preserved.
- Live browser verified the second picture-size example (50 µm × 200 = 10 mm) and third supported example (40 µm × 500), with the known real-cell size retained and final answer initially hidden.
- Responsive browser check at 390 × 844 verifies the size card and calculator fit without horizontal overflow. Physical phone testing and formal screen-reader testing remain pending.
- Existing independent assessment, label placement, virtual microscope, dashboard, storage engine, Osmosis Lab, media, curriculum and other lessons are unchanged. New examples save answers separately by exercise ID; old exercise IDs 0–2 and their data remain intact.
- Candidate ZIP integrity and every archived file are verified. Latest ZIP is byte-identical to the O4b2 candidate. The prior O4b1 ZIP is retained under Archive/O4b1-before-more-examples.

## Review

[Open local preview](http://127.0.0.1:8915/#cell-biology/microscopy), choose **Measure & understand**, then use **Next example** to practise again. The other two calculations remain under **When you’re ready**. The cell and its known size stay above the working throughout.

The preview retains demonstration QA progress on its separate origin. Earlier browser progress is unchanged. Unpack the complete ZIP and keep all files together for the durable local version.

Stop for review. Starting allowance was user-reported 79%; no current remaining allowance is inferred.
