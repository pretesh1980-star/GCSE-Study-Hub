# Build 7.0.5Q — Cell structures, microscopy and division

## Implemented scope

All six P-manifest bundles implemented as extensions to five existing sections and the RP01 record. No duplicate standalone lessons. Exactly 18 new question records (aqa-cell-completion-q01–q18), plus recovered aqa-cell-completion-r01. R01 retains the existing 36 mm/60 micrometre source prompt and adds an input-format instruction so its numerical check does not misleadingly expect prose. Model feedback supplies the conversion explanation.

AQA Trilogy only, shared Foundation/Higher/unsure tier. Other boards/courses and all Chemistry/Physics content unchanged. Canonical original packs are not mutated. Original Higher questions and all previous Biology question IDs retained.

## Reuse and practical decisions

Retained existing cell questions, equation trainer, Microscopy Lab, cards/worked examples, plant-transport/root-hair explanations and Inheritance DNA/paired-chromosome material. A direct existing-navigation button connects Cell Biology to Inheritance. Extended comparison schematics supplement retained label activities; one plant-cell drawing and a common area grid are shared across teaching/practice. Earlier diagram activities remain available. No new interaction framework or UI redesign.

RP01 supports teacher-approved onion epidermis (dilute iodine where instructed) and a prepared stained animal-cell slide, for example methylene-blue-stained cheek epithelium. Named examples are not compulsory specimens/stains. No fresh human sampling is assumed. Guidance covers thin preparation, coverslip/air bubbles, stain/glass safety, illumination, low-power location/centring, fine focus and lens protection, recording several cells, visible structures/variation, clear proportional labelled drawings, calibration, magnification/scale and resized images. Onion-versus-photosynthetic-cell and light-resolution limitations are explicit. Online support does not certify performance of a physical laboratory practical.

## Individual completion review

### 4.1.1.1 — Eukaryotes and prokaryotes — FULLY COVERED
Eukaryotic nuclear genetic material versus bacterial DNA loop/plasmids, membrane/cytoplasm/wall and relative size are explicit; illustration and conversions are linked.
Q01 assesses standard form/size ratio/order; Q02 and retained bio2-bacteria assess structure-function differences.
MS1b/2a/2h and prefixes taught and applied; no Higher-only requirement added.
Remaining targeted gap: none identified under the existing coverage standard.

### 4.1.1.2 — Animal and plant cells — FULLY COVERED
All listed animal structures/functions and plant/algal wall, chloroplast and cell-sap vacuole requirements now have explanations plus full comparison schematics; visibility limits are explicit.
Q02 assesses identification/function; Q03 estimates area and explains precision; Q18 interprets plant/animal observations and drawing limits.
WS1.2 and size/area estimation addressed with an image/grid; linkage to RP01 is direct.
Remaining targeted gap: none identified under the existing coverage standard.

### 4.1.1.3 — Cell specialisation — FULLY COVERED
Sperm/root-hair content retained, nerve/muscle/xylem/phloem adaptations added; existing transport functions reused rather than replaced.
Q04/Q05 ask feature-function links with supplied and unfamiliar-cell information; Q06 links specialisation to differentiation.
Required inference from supplied structural information is explicitly practised.
Remaining targeted gap: none identified under the existing coverage standard.

### 4.1.1.4 — Cell differentiation — FULLY COVERED
Early animal versus continuing plant differentiation, acquisition of specialised structures and mature repair/replacement are now explicit.
Q06 distinguishes differentiation/division; Q12 applies development/repair; Q13 checks stem-cell potential.
Comparison and contextual interpretation addressed; all content shared across tiers.
Remaining targeted gap: none identified under the existing coverage standard.

### 4.1.1.5 — Microscopy — FULLY COVERED
Light-to-electron development, magnification/resolution, all equation arrangements, prefixes, standard form and estimation covered; original worked examples retained.
Q01/Q03/Q07/Q08/Q09/Q18 plus recovered R01 cover size, resolution, both rearrangements and scale; numeric aliases reject incompatible units.
MS1a/1b/2h/3b and WS1.1/4.4 exercised. Explicit unit conversions and explanations supplied.
Remaining targeted gap: none identified under the existing coverage standard.

### 4.1.2.1 — Chromosomes — FULLY COVERED
Existing Inheritance sources remain canonical and are discoverable through a lesson navigation button; nucleus/DNA/many-genes/body-cell pairs are explicit in the division bridge.
Q10 directly assesses hierarchy and chromosome pairs; Q11 and bio2-mitosis reinforce copying and preserved chromosome number.
Existing DNA model reused; no duplicate standalone chromosome lesson.
Remaining targeted gap: none identified under the existing coverage standard.

### 4.1.2.2 — Mitosis and the cell cycle — FULLY COVERED
Three overall stages include cell growth/organelle increase, copied chromosomes, separation/nuclear division and final membrane/cytoplasm division.
Q11 assesses sequence with explanations; Q12 applies mitosis to embryo/root growth and skin repair; existing daughter-cell question retained.
Context recognition and chromosome modelling practised; named mitotic phases not introduced.
Remaining targeted gap: none identified under the existing coverage standard.

### 4.1.2.3 — Stem cells — FULLY COVERED
Embryonic/adult bone-marrow/meristem function, differentiation potential, therapeutic cloning/rejection, diabetes/paralysis, viral risk, ethics and plant applications covered.
Q13–Q16 target sources, treatment, evidence-based evaluation and plant cloning; original generic risk question retained.
WS1.3 balanced evaluation with explicit criteria; no laboratory stem-cell technique requirement added.
Remaining targeted gap: none identified under the existing coverage standard.

### RP01 — Microscope observations — FULLY COVERED
Teacher-approved onion epidermis and prepared stained animal slide provide plant/animal examples. Preparation, safety, careful focus, observations, proportional labelled drawing, calibrated scale and visibility limits are explicit.
Q17 tests method/safety corrections; Q18 drawing/observation/scale interpretation; Q02/Q03/Q08/R01 reinforce image and measurement skills.
AT1/7 preparation supported. Physical performance/observation is not claimed by online completion. Prepared animal slides avoid unsupported fresh-human-sampling assumptions.
Remaining targeted gap: none identified under the existing coverage standard.

## Coverage and integrity

Same 78-unit framework: before 2 Full / 75 Partial / 1 Missing / 0 adequately covered Higher-only; after 11 / 66 / 1 / 0. Nine promotions, no other classification changes. Adrenaline/thyroxine remains Missing. Biology recorded tier backlog 0; known unresolved tier concerns 0; answer-unit backlog 0. Chemistry/Physics historical issues unchanged.

## Verification

Focused suites: 141/141 passing. Complete suite: 243/243 passing (210 baseline plus 33 new regression tests). A missed Q18 microscopy link was caught and corrected; a test regex escaping error was fixed. Stale-support evidence now prevents a Full classification. Old tests were updated for the intentional nine-unit promotion and RP01 completion; their unrelated assertions remain. All 63 registered science pathways compared with P: only targeted Cell Biology lesson extensions and the 19 question records change. Four SVG assets parse correctly; automated lesson/question-render tests pass. Browser verification intentionally not attempted, environment unchanged.

## Limitations

Writing responses retain explicit model-answer/self-assessment rather than automatic analytical marking. Images are schematic and teaching support is not a substitute for physical practical observations. Coverage decisions use the existing cached AQA specification and project adequacy standard, not external accreditation. The full source-resolved evidence and per-unit decisions are in CELL-BIOLOGY-COMPLETION-REVIEW.json; BIOLOGY-COVERAGE-7.0.5Q.json updates only these nine records. P manifest/preparation artifacts are retained as provenance, not current missing-work claims.

## Recommended next batch — not implemented

Existing roadmap batch 2: Membrane transport and osmosis — 4.1.3.1 Diffusion, 4.1.3.2 Osmosis, 4.1.3.3 Active transport and RP02. Reuse existing teaching, restored osmosis calculations and practical support before targeted expansion.

## Exact changed build files

- BIOLOGY-COVERAGE-7.0.5Q.json
- CELL-BIOLOGY-COMPLETION-Q.md
- CELL-BIOLOGY-COMPLETION-REVIEW.json
- README.md
- biology-cell-completion.js
- coverage.html
- index.html
- package.json
- spec-audit-data.js
- spec-audit.js
- tests/biology-cell-completion.test.cjs
- tests/biology-legacy-tier.test.cjs
- tests/biology-reuse.test.cjs
- tests/foundation-tier.test.cjs
- tests/spec-audit.test.cjs
- tests/state.test.cjs

PROJECT-STATE.md and CURRENT-BUILD.txt updated in Outputs.
