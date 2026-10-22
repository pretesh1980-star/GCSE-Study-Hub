# O9 teaching improvements — review build, 14 October 2026

Ready for review. No publication, GitHub commit, RP02/O10 work or other-subject development.

## What changed

- **Cell demonstration first:** plain water, concentrated sugar solution and balanced surroundings show a fixed wall, changing vacuole/cell contents and water moving both ways. Simple explanations come first; turgid, flaccid, plasmolysis and equal water potential sit behind “Now name the science”. Prediction questions remain optional afterwards. Ordinary activity headings have no “Hollie:” prefix; Hollie still offers guidance and hints.
- **Floppy cucumber:** two initially equally firm sticks can soak and then demonstrate different flexibility. The salt-treated stick loses water and turgor; the water-treated stick stays firm. A replay/reset is available. These are labelled illustrated models, with time and bending exaggerated rather than presented as recordings or measurements.
- **Graph:** a separate purple indicator moves using a slider, keyboard or pointer. The five supplied data points remain at their original coordinates. Exact points are labelled dataset measurements; values between them are labelled estimates. The estimated 0% crossing, potato before/after, signed percentage and both directions of water movement remain clear. Original +10%, 0%, −10% examples are preserved as calculation illustrations.
- **Calculations:** a weighing scenario introduces the formula. Watch includes all six requested examples (+20%, +10%, −20%, −20%, 0%, −10%); Practise offers optional hints and biological feedback, with phone-friendly ± sign controls; Try independently uses four new examples (+25%, −20%, 0%, −12.5%) with feedback after all answers are entered. These save as practice, never lesson mastery. Original Lab calculations and saved answers remain accessible.
- **Exam-style practice:** the original six-mark question is preserved, explicitly described as written for this lesson rather than a verified past-paper item, with six one-mark guide points after the original submission/review flow. A separate optional four-mark cucumber application question has an original practice guide.

## Preservation

The source navigation-fixed ZIP remains untouched as a recovery build. A byte comparison checked 431 inherited files: only index.html changed to load the new teaching script and stylesheet. All inherited scripts, original video/audio/subtitle assets, navigation, O1–O8, Hollie, board/tier mappings and assessment code remain identical. New progress is additive inside the existing Lab record; opening old saved work does not rewrite it. The original six-stage benchmark and day-seven flow remain accessible. Pending independent checks hide teaching, and new teaching controls cannot alter them. Only the existing independent assessment can award lesson mastery.

## Checks passed

- **64 focused tests** and **1,003 full regression tests**.
- **537 browser checks:** 336 new teaching checks, 137 navigation checks and 64 inherited O9 checks, including new/returning journeys at 320, 390, 768 and 1365px, calculations/feedback/reload, fixed graph coordinates, active vacuole animation, cucumber animation, video/transcript presence, assessment scoring and no overflow or browser errors.
- Actual graph slider keyboard input (Home then ArrowRight) selected 0.1 g/100 mL and +19.6%; a pointer click selected the measured point at 4 g/100 mL and +4%. Mobile and desktop demonstration screenshots were inspected.

Evidence is included in `Verification-O9-teaching/`; browser runners are under `tests/`. Checks ran in the native in-app browser. The terminal Playwright runner was not used, following the macOS sandbox launch block established during the earlier navigation work.

**Known limits:** no physical iPhone Safari or cross-browser certification; full-film reliability, audible narration and subtitle timing remain unverified. Original media bytes are preserved. Reduced-motion static rendering is covered by a focused test and stylesheet rules, rather than a physical-device preference test. Written six-mark answers still need teacher review; the guide is not an official AQA levels mark scheme.

## Scientific checks

Core osmosis and signed mass-change teaching were checked against the [AQA Trilogy specification](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content). The distinction between membrane transport, turgor and balancing pressure follows [OpenStax passive transport](https://openstax.org/books/biology/pages/5-2-passive-transport) and [plant water potential](https://openstax.org/books/biology/pages/30-5-transport-of-water-and-solutes-in-plants). Everyday tissue examples are consistent with the teaching approach described by [Science & Plants for Schools](https://www.saps.org.uk/growth-hub/plants-as-inspirational-contexts-1-osmosis/). The cucumber animation is our original teaching illustration, not a claimed published experiment or past-paper source.

## Open the review

Stop the older preview, then double-click `GCSE-Study-Hub-O9-teaching-improvements/Start Preview.command`. Open http://127.0.0.1:8931/#cell-biology/osmosis in the same normal browser and at the same address you previously used, to retain that browser's progress. Stage 2 contains the cell/cucumber demonstrations; Stage 3 contains the calculation levels and graph. All six stages remain unlocked through the overview and Previous/Continue.

The new teaching ZIP contains the complete app, original media, source, launcher, tests and evidence. It does not back up browser-local student data. The previous navigation ZIP remains available separately.

**Allowance at packaging:** available Codex account snapshot: 68% five-hour and 87% weekly remaining. These are shared account limits, not a separate Work-only quota.
