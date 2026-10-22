# Build 7.0.6O4b — unpublished review candidate

11 October 2026. Baseline: verified unpublished 7.0.6O4a1 candidate. Only O4b is implemented. No GitHub publication, deployment, or new RP01 development.

## What changed

The Microscopy lesson now has three stages: the approved microscope and labels; Measure & understand; and an independent check. The original labelling implementation is byte-for-byte unchanged. The only scientific wording correction in the original microscope module clarifies that suitable light microscopy can show some mitochondria, while fine internal detail requires electron microscopy.

The ruler is a responsive calibrated teaching diagram, with keyboard/touch-compatible start and end sliders. Students measure the difference between endpoints and practise all three equation rearrangements. Millimetres, micrometres and nanometres convert in either direction. Same-unit working and dimensionless magnification are explained. A separate converter supports arbitrary positive lengths. Decimal and scientific notation inputs are accepted. Guided practice awards no mastery.

A visual unresolved/resolved pair distinguishes magnification, focus and resolution. Light/electron comparison explains greater resolving power and useful magnification, the evidence electron microscopy provided about sub-cellular structures, and specimen/image limitations. These additions follow the existing AQA Trilogy 8464 Foundation/Higher interactive pathways. Other boards/courses retain their existing material, without new alignment claims. The shared calculation and standard-form skills are not incorrectly restricted to Higher.

Curriculum source checked: [AQA Trilogy biology, 4.1.1.5](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content). The bank contains original questions, not copied exam questions.

## Independent evidence and mastery

Four fresh forms of eight questions each cover total lens magnification, actual size, image size, magnification from two lengths, two unit conversions, resolution and electron microscopy. Six numerical responses require calculation; two conceptual multiple-choice answers have rotated option order. No answer feedback, formula guide, model or converter is shown during assessment.

First independent responses use the existing grading mechanism, with section-only scope and a distinct `Cell Biology|Microscopy` key. Existing broader `Microscopes and scale` practice scores and whole-topic mastery are preserved. Existing +12/-10 grading and 85% Secure threshold remain: a perfect eight-question form earns 96%, while completion alone is not Secure. Dashboard completion requires recorded independent coverage of all assessed concepts, including two conversion questions. All-wrong independent completion remains 0%.

Answers and active checks survive refresh. Guided teaching or leaving the protected lesson during a pending check makes the attempt unscored practice. Exposed forms are not reused as fresh questions. Duplicate submission and stale handlers cannot score again. Corrupt assessment data is retained in a recovery field. Topic/lesson resets clear this build’s evidence through the existing confirmation flow. No migration rewrites existing student scores, answers, labels or Osmosis progress.

## Verification

- Focused: **284/284 passed** (microscopy, navigation, dashboard, storage and the earlier three interactive lessons).
- Full regression: **784/784 passed**, including all 765 baseline tests plus 19 new O4b tests.
- Zero failures, skips or cancellations. Original baseline tests were not rewritten.
- O4b checks cover equations, six-direction unit arithmetic, scientific notation and invalid inputs, ruler alignment, all guided exercises, protected assessment rendering, independent vs assisted scoring, wrong answers, incomplete submission, duplicate prevention, four-form exhaustion, tier separation, unsupported pathways, reload, stale handlers, recovery and reset preservation.
- Live in-app browser: direct deep link; practice measurement 30 mm / 500 = 60 µm; conversion 0.004 mm = 4000 nm; saved answers and scientific notation across refresh; 8/8 independent submission producing 96% Secure; keyboard selection/placement of Nucleus retained after refresh.
- Responsive browser check: 390 × 844 viewport; document width and scroll width both 390 (no horizontal overflow). Calculation and original labelling screenshots retained.
- Preservation manifest compares every original ZIP entry. Dashboard, labelling, storage engine, Osmosis Lab, media, curriculum/question banks and other lessons remain byte-identical. The manifest lists the limited additions and changed metadata.
- Candidate archive content is checked against the working build, ZIP integrity is checked, and candidate/latest archives have identical SHA-256 hashes.

Physical iPhone Safari/Android touch-drag testing and formal screen-reader testing remain pending. Responsive in-app checks are not a substitute for physical-device testing. The full regression result refers to the complete Node test suite; legacy standalone Playwright browser scripts were not run. The live browser checks above were performed through the in-app browser.

## Review

Open [local preview](http://127.0.0.1:8915/#cell-biology/microscopy), then choose Measure & understand. Align the ruler endpoints, calculate actual size, try the other two exercises, and convert units both ways. Read the resolution comparison, then try an independent check. Deliberately answer one question incorrectly and inspect the review after submission. A fresh form is available after completion. Returning to teaching during a pending check makes it practice only.

The new preview origin is separate from 8912 and 8914, so earlier preview records remain intact. This origin contains demonstration QA progress (an 8/8 check and a saved nucleus label); it is not imported user progress. To carry your own progress between origins, use the existing Settings export/import. Do not reset your original browser records.

The preview server is retained for review while the session remains available. The ZIP is the durable deliverable: unpack the whole folder and open index.html, or serve the folder locally. Keep media and scripts together.

## Handoff

- `GCSE-Study-Hub-7.0.6O4b-candidate.zip`: review candidate.
- `GCSE-Study-Hub-LATEST-OPEN-THIS.zip`: byte-identical latest alias.
- `CURRENT-BUILD.txt`: current build, verification, preview and stopping point.
- `Verification-O4b/`: test logs, screenshots and preservation manifest.

Starting Work allowance was user-reported **79%**. No remaining allowance has been inferred or claimed. Stop here for O4b review; RP01 and publication remain outside this build.
