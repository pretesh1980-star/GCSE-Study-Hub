# O10 RP02 curriculum coverage review

Checked 15 October 2026 against AQA GCSE Combined Science: Trilogy (8464), Biology RP02 and 4.1.3.2. This is an evidence map for a digital preparation lesson, not certification that a pupil has completed a physical required practical.

## Sources and scope

[AQA Biology 4.1.3.2](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/biology-subject-content) covers osmosis, percentage mass change, rate and graph skills. [AQA practical assessment §10.2.2](https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/practical-assessment) identifies RP02, AT1/3/5 and the relevant WS/MS opportunities. The selected investigation uses sugar and potato; salt or another suitable plant tissue is an alternative, not an additional compulsory simulation.

The [AQA practical handbook, v5.2](https://filestore.aqa.org.uk/resources/science/AQA-8464-8465-PRACTICALS-HB.PDF), printed pages 10–11 and 60–62, provides adaptable apparatus/method examples. It distinguishes suggested methods from the compulsory apparatus/technique expectations. Our 25 mm × 10 mm cylinders, 20 cm³ solutions, 20 °C and 30-minute interval are explicitly model settings, not AQA-mandated constants. Its optional length-change activity is not simulated here; this lesson investigates mass.

The [AQA GCSE vocabulary](https://filestore.aqa.org.uk/resources/science/AQA-SCIENCE-GCSE-SUBJECT-VOCAB.PDF) supports the distinctions between accuracy, precision, repeatability, reproducibility and random/systematic error.

Before development, the existing `cell-journey.js` RP02 guidance and `spec-audit-data.js` RP02 mapping were inspected. They already linked legacy teaching, practical guidance and bank items, with an explicit preparation-only scope. Their historical “complete” review label has not been promoted into a new claim about practical performance. O9 theory/video, calculation steps and feedback components were reused without editing their files.

## Evidence map

| Requirement / skill | Implementation evidence | Independent evidence | Status and limit |
|---|---|---|---|
| RP02 / 4.1.3.2: concentration and plant-tissue mass | Stages 1–3; six sugar concentrations, three fresh cylinders each, initial/final readings | Method, variables and conclusions questions | Knowledge taught; experiment simulated |
| AT1: mass and time | Balance/zero check, 0.01 g readings, timed endpoint, labelled table | Apparatus and calculation items | Digital rehearsal; real handling pending |
| AT3: observe/measure osmosis | Direction illustration, mass observations and records | Concentration/effect and equilibrium items | Model observations only |
| AT5 / MS1a,1c: uptake rate | Stage 4 signed mass change ÷ 30 min, checked in g/min | Two fresh rate calculations | Average net mass proxy, not an instantaneous molecular rate |
| WS2.1: hypothesis | Stage 1 saved prediction linked to O9 | Written reasoning/conclusion | Student-generated; not automatically marked |
| WS2.2: planning | Method with reasons; apparatus, dilution example, controls | Method, controls and written response | Knowledge and guided planning |
| WS2.4: accuracy and safety | Zero/reference checks, consistent blotting, supervised/prepared cutting, school risk assessment | Blot/error and precision items; written rubric | Physical safety performance not verified |
| WS2.6: record observations | Stage 3 notebook and results table, units, repeat identifiers | Calculations from fresh data | Recording assisted; no manual transcription gate |
| WS2.7: evaluate/improve | Stage 5 realistic error repairs and anomaly discussion | Evaluation/precision questions and written checklist | Structured marking; writing needs review |
| WS3.1/3.2: graphical presentation | Stage 4 numeric point entry, concentration x-axis, percentage y-axis, trend line and matching tables | Supplied graph with fresh numerical data | Fixed digital scales; independent paper-graph construction pending |
| MS1c: percentage gains/losses | O9 worked steps, signed formula, per-repeat values | Fresh gain/loss calculations across forms | Initial mass is denominator |
| MS2b: means | Mean initial/final masses and mean of individual percentages; unrounded calculation | Fresh mean items | Distinguishes displayed rounding from internal calculation |
| MS4a–d: plot/draw/interpret | Proportional axes, correct units, own point placement, calculated fit, zero-crossing interpretation | Graph/data estimate and conclusion | Plotting/interpretation supported; choosing a scale and drawing a fit independently is only partially assessed |
| Shared-tier scope | Core content offered to Foundation and Higher with plain-language support | Same core skill demands; records remain separate | No invented Higher-only requirement |

## Scientific checks

All 18 readings are deterministic synthetic endpoints at 0.01 g resolution, with small within-concentration variation. The equal-sized cylinders have starting masses near 2 g. Their dimensions imply about 1.96 cm³ volume; the model masses are physically plausible. Mean percentage change falls with concentration. The fitted crossing is approximately 0.30 mol/dm³ for this dataset, not a universal property of potato tissue.

Means use unrounded per-repeat percentages; display values are rounded. Mean percentage is not silently replaced by percentage change of the mean masses. A negative result denotes net loss. Near zero change, opposing water movements continue. Water potential is explained as the tendency for water to move, with the concentration model and experimental conditions stated; the crossing does not prove identical solute concentration in every cell. Surface liquid, tissue damage, geometry and balance bias are treated separately from random variation.

## Coverage judgement and outstanding work

The specified knowledge and mathematical demands are mapped to teaching and structured questions, with written planning/evaluation left for human review. No essential knowledge gap was identified in this review. **Do not label all practical skills completely achieved.** Physical preparation, measuring, safe handling and a contemporaneous real-laboratory record remain necessary. Independent selection of graph scales and a hand-drawn best fit should be checked on paper with a teacher. The simulation intentionally does not model new potato varieties, temperature changes or solution depletion; it is not a predictive laboratory engine. Salt/length-change extensions were not added because they are unnecessary to this focused mass investigation.
