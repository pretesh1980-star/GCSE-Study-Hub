# Biology repair/reuse — Build 7.0.5O

Baseline: stable 7.0.5N; same 78-unit Biology coverage audit. No topic expansion batch implemented.

## Eight completed areas

1. Restored one existing fertility/hormone-interaction section and eight original questions for AQA Trilogy Higher only.
2. Mapped existing Higher glucagon lesson and nine questions/feedback to 4.5.3.2.
3. Referenced two existing Inheritance sections for Cell Biology 4.1.2.1; no copied lesson.
4. Mapped seven practicals and 21 existing support activities (4 equation trainers, 3 practical-design Labs, 12 diagrams, enzyme graph and insulin/glycogen misconception explanation).
5. Recovered 61 standalone questions: 57 shared, four Higher-only. Questions/answers/accepted aliases unchanged. bio2-ovulation is Higher-only because its distractors include ADH/glucagon.
6. Restored exact source feedback for aqa-shared-gap-0-1 through aqa-shared-gap-6-1.
7. Corrected Trilogy osmosis/food/enzymes/photosynthesis/reaction/fieldwork numbers to 2/3/4/5/6/7; microscopy was already 1. Separate Biology numbers unchanged.
8. Shared specification 4.6.1.3 supports basic gene→amino-acid coding: reuse existing first lesson sentence and first feedback clause for Foundation; original Higher text preserved.

## Coverage accounting

| Classification | Before | After |
|---|---:|---:|
| Fully covered | 2 | 2 |
| Partial | 74 | 75 |
| Missing | 2 | 1 |
| Higher-only adequately covered | 0 | 0 |

Only 4.5.3.5 (infertility) changes classification, Missing → Partial. IVF sequence/depth and sufficient application/evaluation still incomplete. 4.5.3.6 (adrenaline/thyroxine feedback) remains Missing. No unit is newly Full and no Higher-only unit is adequately complete. All seven required practicals remain Partial.

Existing Partial units improved in access, feedback or mapping (56): 4.1.1.1, 4.1.1.2, 4.1.1.5, 4.1.2.1, 4.1.2.2, 4.1.2.3, 4.1.3.1, 4.1.3.2, 4.1.3.3, 4.2.2.1, 4.2.2.2, 4.2.2.4, 4.2.2.6, 4.2.3.1, 4.2.3.2, 4.3.1.1, 4.3.1.6, 4.3.1.7, 4.3.1.8, 4.3.1.9, 4.4.1.1, 4.4.1.2, 4.4.1.3, 4.4.2.1, 4.4.2.2, 4.5.1, 4.5.2, 4.5.3.1, 4.5.3.2, 4.5.3.3, 4.6.1.2, 4.6.1.3, 4.6.1.4, 4.6.1.5, 4.6.1.6, 4.6.2.1, 4.6.2.2, 4.6.2.3, 4.6.3.2, 4.6.3.4, 4.7.1.2, 4.7.2.1, 4.7.2.2, 4.7.3.1, 4.7.3.2, 4.7.3.3, 4.7.3.4, 4.7.3.5, 4.7.3.6, RP01, RP02, RP03, RP04, RP05, RP06, RP07.

The JSON audit records each of the 78 units, source references, current fingerprints, changes and remaining gaps. Broad historical mappings are retained as evidence, not proof of adequacy. Fully covered 4.2.1 and 4.2.2.7 receive diagram/feedback quality improvements without changing classification.

## Deliberate exclusions and limitations

Seven standalone questions not recovered: bio2-zone, bio2-plant-light, bio2-biomass, bio2-efficiency, bio2-adh, bio2-zone-area, bio2-decay-rate. Scope/evidence does not justify releasing these as Trilogy content.

An existing Foundation ovulation question (aqa-bio-step-homeostasis-response-3-0) contains ADH/glucagon distractors. This predates this build and is not in the recorded audit backlog. Left unchanged outside this repair scope; the newly recovered counterpart is Higher-only. This is a newly documented audit-quality limitation requiring a small follow-up, not a claim that all Foundation material is now fully certified.

Recorded Biology tier backlog: 0; newly identified legacy distractor review: 1 unresolved (outside that historic counter). Recorded Biology incompatible answer-unit backlog: 0. Remaining project backlogs unchanged: Chemistry 8 tier / 10 answer-unit; Physics 11 tier / 7 answer-unit.

Chemistry/Physics lesson and question outputs across every registered pathway match the 7.0.5N SHA-256 fixture. Their specification records and content metadata are unchanged. Existing Biology question IDs are retained. No progress storage changes. Browser verification skipped: environment unchanged.

## Recommended next step

Before curriculum expansion, review the single newly documented legacy ovulation distractor issue and explicitly reconcile its audit accounting. Then the planned Cell structures, microscopy and division batch addresses nine incomplete units: 4.1.1.1–4.1.1.5, 4.1.2.1–4.1.2.3 and RP01. Neither step was implemented here.

## Per-unit repair outcomes

### 4.1.1.1 — Eukaryotes and prokaryotes
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-bacteria"], "supportRefs": ["Biology|support|diagram-bacterium"]}.
Remaining teaching/revision: Relative bacterial/eukaryotic size and order-of-magnitude/standard-form treatment
Remaining practice/feedback: Size/scale comparison and calculation practice with worked feedback

### 4.1.1.2 — Animal and plant cells
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["build4-0", "bio2-ribosome"], "supportRefs": ["Biology|support|diagram-animal-cell", "Biology|support|diagram-bacterium"]}.
Remaining teaching/revision: Complete plant/algal structure-function treatment, chloroplast function and scale/area estimation
Remaining practice/feedback: Plant-cell identification, image interpretation and estimation practice; current diagrams omit some required structures

### 4.1.1.5 — Microscopy
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["aqa-micro", "bio2-micro", "aqa-drawing"], "supportRefs": ["Biology|support|equation-Magnification"]}.
Remaining teaching/revision: Development of microscopy and magnification versus resolution in context
Remaining practice/feedback: Rearranged magnification, micro/nano conversions and standard-form calculations; current MCQs only test simple division

### 4.1.2.1 — Chromosomes
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"lessonRefs": ["Biology|Inheritance|DNA, genes and chromosomes", "Biology|Inheritance|Sex chromosomes and inheritance"], "questionRefs": ["bio2-mitosis"], "supportRefs": ["Biology|support|diagram-dna"]}.
Remaining teaching/revision: Inheritance lessons now supply chromosome–gene–DNA relationships and paired chromosomes; no duplicate lesson needed. Dedicated chromosome-focused reinforcement remains insufficient.
Remaining practice/feedback: Dedicated chromosome-specific assessment with feedback remains insufficient; a mitosis question supports chromosome number only.

### 4.1.2.2 — Mitosis and the cell cycle
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-mitosis"]}.
Remaining teaching/revision: Growth/organelle increase, DNA copying, nuclear separation and final cytoplasm/membrane division as the three overall stages
Remaining practice/feedback: Cell-cycle sequence/context questions beyond copy-divide-two-cells recall

### 4.1.2.3 — Stem cells
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-stem"]}.
Remaining teaching/revision: Bone marrow and meristems; therapeutic cloning/rejection; viral risk; medical and plant-cloning applications
Remaining practice/feedback: Balanced benefits/risks/ethics and application questions with specific feedback

### 4.1.3.1 — Diffusion
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-surface"]}.
Remaining teaching/revision: Urea diffusion; fish-gill and plant-root/leaf exchange adaptations; explicit ventilation/blood-supply comparisons
Remaining practice/feedback: Comparative exchange-surface and SA:V application practice beyond one cube example

### 4.1.3.2 — Osmosis
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-osmosis", "bio2-osmosis-percent"], "supportRefs": ["Biology|practical|osmosis", "Biology|support|diagram-osmosis"]}.
Remaining teaching/revision: Link theory to quantitative water uptake and percentage mass-change graphs
Remaining practice/feedback: Osmosis percentage-change, graph plotting/interpretation and isotonic-point questions; reuse existing practical example

### 4.1.3.3 — Active transport
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-active"]}.
Remaining teaching/revision: Glucose absorption from gut to blood against its gradient
Remaining practice/feedback: Direct comparison of diffusion, osmosis and active transport, including gut application

### 4.2.1 — Principles of organisation
Mapping/feedback quality improved; classification unchanged.
Evidence: {"supportRefs": ["Biology|support|diagram-organisation"]}.
Remaining teaching/revision: No outstanding teaching gap recorded
Remaining practice/feedback: No outstanding practice gap recorded

### 4.2.2.1 — The human digestive system
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-lipase", "bio2-denature", "bio2-bile", "bio2-villi"], "supportRefs": ["Biology|practical|food", "Biology|practical|enzymes", "Biology|support|enzyme-graph"]}.
Remaining teaching/revision: Full enzyme production sites, amylase/starch specificity and integrated digestive-organ functions
Remaining practice/feedback: Digestive enzyme/product/site questions and enzyme rate calculations; reuse existing enzyme-temperature graph

### 4.2.2.2 — The heart and blood vessels
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-valve"]}.
Remaining teaching/revision: Named great vessels, ventricles, trachea/bronchi, vessel adaptations, natural/artificial pacemaker
Remaining practice/feedback: Labelled heart/lung and circulation tracing, vessel comparisons and blood-flow calculations

### 4.2.2.4 — Coronary heart disease: a non-communicable disease
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"restoredFeedback": ["aqa-shared-gap-1-1"]}.
Remaining teaching/revision: Mechanistic consequences of faulty valves and detailed treatment trade-offs
Remaining practice/feedback: Patient-specific stent/statin/valve/transplant/artificial-heart evaluations; repair absent feedback on aqa-shared-gap-1-1

### 4.2.2.6 — The effect of lifestyle on some non-communicable diseases
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-heart-risk"], "restoredFeedback": ["aqa-shared-gap-0-1"]}.
Remaining teaching/revision: Specific smoking/alcohol/diet/exercise/obesity risks, unborn-baby effects and human/financial costs
Remaining practice/feedback: Risk/correlation/causation and sampling/data questions; existing cancer example is too narrow

### 4.2.2.7 — Cancer
Mapping/feedback quality improved; classification unchanged.
Evidence: {"restoredFeedback": ["aqa-shared-gap-0-1"]}.
Remaining teaching/revision: No outstanding teaching gap recorded
Remaining practice/feedback: No outstanding practice gap recorded

### 4.2.3.1 — Plant tissues
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"supportRefs": ["Biology|support|diagram-leaf-tissues"], "restoredFeedback": ["aqa-shared-gap-2-1"]}.
Remaining teaching/revision: Meristem location/function and complete leaf-tissue structure-function coverage
Remaining practice/feedback: Leaf cross-section interpretation beyond simple labels; repair absent feedback on aqa-shared-gap-2-1

### 4.2.3.2 — Plant organ system
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-plant-transport", "bio2-transpiration"]}.
Remaining teaching/revision: Root-hair uptake, lignified hollow xylem and phloem tube structure integrated with transport
Remaining practice/feedback: Transpiration-rate calculations, factor graphs and stomatal sampling interpretation

### 4.3.1.1 — Communicable (infectious) diseases
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["build4-1", "bio2-transmission"]}.
Remaining teaching/revision: Explicit prevention measures matched to air/water/contact routes in plants and animals
Remaining practice/feedback: Pathogen replication/damage and route-specific prevention explanations beyond generic summary

### 4.3.1.6 — Human defence systems
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"supportRefs": ["Biology|support|diagram-immunity"]}.
Remaining teaching/revision: Nose hairs/mucus and named trachea/bronchi defences linked to function
Remaining practice/feedback: Questions distinguishing phagocytosis, antibodies and antitoxins rather than antibody-only recall

### 4.3.1.7 — Vaccination
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-vaccine"], "supportRefs": ["Biology|support|diagram-immunity"]}.
Remaining teaching/revision: Dead/inactive pathogen vaccination and population-level reduction of spread
Remaining practice/feedback: Individual immune response plus population/global vaccination evaluation questions

### 4.3.1.8 — Antibiotics and painkillers
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-virus"]}.
Remaining teaching/revision: Specific antibiotics/penicillin and difficulty targeting viruses without harming host tissues
Remaining practice/feedback: Painkiller-versus-antibiotic and antiviral-difficulty practice

### 4.3.1.9 — Discovery and development of drugs
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-placebo", "bio2-double-blind", "bio2-trial-percent"]}.
Remaining teaching/revision: Digitalis/foxglove, aspirin/willow, Fleming/Penicillium, synthesis and initial low-dose progression/peer review
Remaining practice/feedback: Discovery, trial-stage, dose and placebo/blinding questions with precise feedback

### 4.4.1.1 — Photosynthetic reaction
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-photo-gas"], "supportRefs": ["Biology|support|diagram-photosynthesis"]}.
Remaining teaching/revision: Explicit endothermic description and recognition of CO2, H2O, O2 and C6H12O6
Remaining practice/feedback: Symbol-recognition and energy-transfer questions beyond word-reactant/product recall

### 4.4.1.2 — Rate of photosynthesis
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-rate", "bio2-bubbles"], "supportRefs": ["Biology|support|equation-Rate"], "higherLessonRefs": ["Biology|Bioenergetics|Interacting limiting factors"], "higherQuestionRefs": ["bio2-limit", "bio2-inverse-square"]}.
Remaining teaching/revision: Chlorophyll amount and Foundation single-factor graph interpretation; Higher multi-factor and greenhouse cost/profit depth
Remaining practice/feedback: Foundation rate/graph data tasks; Higher multi-factor, inverse-square and profitability questions; existing standalone inverse-square question is filtered out

### 4.4.1.3 — Uses of glucose from photosynthesis
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-glucose-use"]}.
Remaining teaching/revision: Explicit fat/oil storage and complete glucose-use/nitrate-to-protein explanation
Remaining practice/feedback: Questions covering each use, not solely photosynthesis reactants/products

### 4.4.2.1 — Aerobic and anaerobic respiration
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-night", "bio2-anaerobic", "bio2-ferment"]}.
Remaining teaching/revision: Explicit exothermic/incomplete-oxidation account and full plant/yeast versus muscle comparison
Remaining practice/feedback: Equation/symbol and comparative respiration questions, including fermentation uses

### 4.4.2.2 — Response to exercise
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"supportRefs": ["Biology|support|equation-Percentage change"]}.
Remaining teaching/revision: Breath volume, fatigue and oxygen debt; Higher lactate transport to liver and reconversion
Remaining practice/feedback: Exercise data questions and Higher oxygen-debt explanations; one breathing-after-exercise MCQ is insufficient

### 4.5.1 — Homeostasis
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-effector"]}.
Remaining teaching/revision: Explicit enzyme/cell-function optimum and glucose/temperature/water examples
Remaining practice/feedback: Applied receptor/coordinator/effector control-system questions across those examples

### 4.5.2 — The human nervous system
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-reflex", "bio2-synapse", "bio2-reaction"], "supportRefs": ["Biology|support|diagram-reflex"]}.
Remaining teaching/revision: Explicit CNS brain/spinal-cord roles and protective significance/no conscious-brain involvement
Remaining practice/feedback: Nervous-system and reaction-time numerical/graph interpretation beyond reflex ordering

### 4.5.3.1 — Human endocrine system
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-signals"], "supportRefs": ["Biology|support|diagram-hormone-pathway"], "restoredFeedback": ["aqa-shared-gap-3-1"]}.
Remaining teaching/revision: Accurate body-location diagram for all six named endocrine glands
Remaining practice/feedback: Gland-location and pituitary-control questions; repair absent feedback on aqa-shared-gap-3-1

### 4.5.3.2 — Control of blood glucose concentration
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-insulin", "bio2-diabetes"], "supportRefs": ["Biology|support|insulin-glycogen"], "higherLessonRefs": ["Biology|Homeostasis & Response|Hormonal feedback"], "higherQuestionRefs": ["bio2-feedback", "aqa-bio-step-homeostasis-response-8-0", "aqa-bio-step-homeostasis-response-8-1", "bio-deep-homeostasis-response-hormonal-feedback-summary", "bio-deep-homeostasis-response-hormonal-feedback-keyword", "bio-deep-homeostasis-response-hormonal-feedback-explain", "bio-deep-homeostasis-response-hormonal-feedback-justify", "bio-deep-homeostasis-response-hormonal-feedback-improve", "bio-deep-homeostasis-response-hormonal-feedback-grade9"]}.
Remaining teaching/revision: Glycogen storage explanation is mapped from Learning Lab; full Type 1 insulin treatment and Type 2 diet/exercise/obesity teaching remain incomplete.
Remaining practice/feedback: Existing glucagon questions/feedback now mapped Higher-only. Insulin/diabetes graph interpretation, treatment comparisons and a sufficiently developed full feedback-cycle assessment remain incomplete.

### 4.5.3.3 — Hormones in human reproduction
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-ovulation"], "higherLessonRefs": ["Biology|Homeostasis & Response|Hormones, feedback and fertility"]}.
Remaining teaching/revision: Higher interaction/fertility lesson restored. Testosterone/testes/sperm, secondary sexual characteristics and cycle timing remain incomplete.
Remaining practice/feedback: Actual hormone-level graphs and sufficiently detailed interaction assessment remain absent; generic summary practice is not enough.

### 4.6.1.2 — Meiosis
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-meiosis"]}.
Remaining teaching/revision: Replication then two divisions/four genetically different gametes; subsequent embryo mitosis/differentiation
Remaining practice/feedback: Meiosis-specific sequence and chromosome-number application questions

### 4.6.1.3 — DNA and the genome
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"lessonRefs": ["Biology|Inheritance|DNA and protein structure"], "questionRefs": ["aqa-bio-step-inheritance-8-0"], "supportRefs": ["Biology|support|diagram-dna"]}.
Remaining teaching/revision: Shared gene-to-amino-acid explanation restored. DNA polymer/double helix and genome medicine/migration uses remain insufficient.
Remaining practice/feedback: One basic coding question restored for Foundation; genome-use questions and sufficient targeted breadth still missing.

### 4.6.1.4 — Genetic inheritance
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-cross", "bio2-probability", "bio2-allele"], "supportRefs": ["Biology|support|equation-Percentage"]}.
Remaining teaching/revision: Phenotype, polygenic traits and complete terminology linked to inheritance examples
Remaining practice/feedback: Foundation completing/interpreting Punnett squares/family trees and ratios; Higher constructing crosses; prose MCQs are not enough

### 4.6.1.5 — Inherited disorders
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"restoredFeedback": ["aqa-shared-gap-4-1"]}.
Remaining teaching/revision: Explicit disorder phenotypes and evidence-led screening trade-offs
Remaining practice/feedback: Pedigree/screening evaluation practice; repair absent feedback on aqa-shared-gap-4-1

### 4.6.1.6 — Sex determination
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"supportRefs": ["Biology|support|diagram-sex-inheritance"], "restoredFeedback": ["aqa-shared-gap-5-1"]}.
Remaining teaching/revision: 22 autosomal pairs versus one sex-chromosome pair explicitly linked to the model
Remaining practice/feedback: Actual sex-cross completion/ratio practice; repair absent feedback on aqa-shared-gap-5-1

### 4.6.2.1 — Variation
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-twins"]}.
Remaining teaching/revision: Continuous mutation and gene-environment-to-phenotype explanation; rare new phenotype after environmental change
Remaining practice/feedback: Context/data questions distinguishing inherited, environmental and combined variation

### 4.6.2.2 — Evolution
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-selection"]}.
Remaining teaching/revision: Common ancestry/time scale and reproductive isolation/speciation
Remaining practice/feedback: Applied natural-selection-to-new-species questions rather than repeated definition

### 4.6.2.3 — Selective breeding
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-breeding"]}.
Remaining teaching/revision: Repeated parent/offspring selection sequence and specified crop/animal examples
Remaining practice/feedback: Scenario-based breeding-cycle and inbreeding evaluation practice

### 4.6.3.2 — Fossils
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-fossils"]}.
Remaining teaching/revision: Preservation/mineral replacement/traces and soft-body/geological reasons for incomplete record
Remaining practice/feedback: Fossil-formation, fossil data and evolutionary-tree interpretation practice

### 4.6.3.4 — Resistant bacteria
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-resistance"]}.
Remaining teaching/revision: Mutation-selection-spread chain, MRSA, appropriate prescribing/agricultural use and slow drug development
Remaining practice/feedback: Resistance-evolution and control questions; vaccine/antibiotic recall is not enough

### 4.7.1.2 — Abiotic factors
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-abiotic"]}.
Remaining teaching/revision: Full factor range: soil pH/minerals, wind, CO2 and aquatic oxygen
Remaining practice/feedback: Abiotic-factor change explanations with actual datasets/graphs

### 4.7.2.1 — Levels of organisation
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-quadrat", "bio2-population", "bio2-transect"], "supportRefs": ["Biology|support|diagram-food-chain"]}.
Remaining teaching/revision: Secondary/tertiary consumers and predator-prey cycles; mean/mode/median distinctions
Remaining practice/feedback: Predator-prey graph interpretation and fieldwork statistics/plotting; reuse quadrat calculation

### 4.7.2.2 — How materials are cycled
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-carbon", "bio2-decay"]}.
Remaining teaching/revision: Explicit decomposer respiration/mineral return and freshwater movement through the full cycle
Remaining practice/feedback: Labelled carbon/water-cycle interpretation with process-specific feedback

### 4.7.3.1 — Biodiversity
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"restoredFeedback": ["aqa-shared-gap-6-1"]}.
Remaining teaching/revision: Mechanistic link between diversity, reduced dependence and stability
Remaining practice/feedback: Biodiversity-stability and human dependence explanations, not just definition

### 4.7.3.2 — Waste management
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"restoredFeedback": ["aqa-shared-gap-6-1"]}.
Remaining teaching/revision: Population/standard-of-living pressures and specified air/water/land pollution sources
Remaining practice/feedback: Waste/pollution mechanism and biodiversity-impact questions

### 4.7.3.3 — Land use
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"restoredFeedback": ["aqa-shared-gap-6-1"]}.
Remaining teaching/revision: Building/quarrying/farming/waste land uses and peat compost trade-offs
Remaining practice/feedback: Land-use and peat-decay/burning evaluations; repair absent feedback on aqa-shared-gap-6-1

### 4.7.3.4 — Deforestation
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"restoredFeedback": ["aqa-shared-gap-6-1"]}.
Remaining teaching/revision: Cattle/rice/biofuel drivers and environmental consequences of tropical deforestation
Remaining practice/feedback: Deforestation-specific causal/evaluation questions

### 4.7.3.5 — Global warming
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"restoredFeedback": ["aqa-shared-gap-6-1"]}.
Remaining teaching/revision: Methane as well as CO2, biological consequences and evidence/consensus/uncertainty
Remaining practice/feedback: Climate-biodiversity data interpretation and evidence evaluation

### 4.7.3.6 — Maintaining biodiversity
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-biodiversity"], "restoredFeedback": ["aqa-shared-gap-6-1"]}.
Remaining teaching/revision: Government deforestation/CO2 measures and full programme-specific trade-offs
Remaining practice/feedback: Comparative conservation choices using data and conflicting pressures

### RP01 — Microscope observations
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["aqa-micro", "aqa-drawing", "bio2-micro"], "supportRefs": ["Biology|practical|microscopy", "Biology|support|equation-Magnification", "Biology|support|practical-Microscopy"]}.
Remaining teaching/revision: Required practical 1 unchanged; existing method, calculation, drawing and Lab activity mapped. Preparation/staining, safety and sufficient observation detail remain incomplete.
Remaining practice/feedback: Existing calculation/drawing questions restored; complete practical interpretation, method evaluation and feedback still insufficient.

### RP02 — Osmotic mass change
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-osmosis", "bio2-osmosis-percent"], "supportRefs": ["Biology|practical|osmosis", "Biology|support|practical-Osmosis", "Biology|support|diagram-osmosis"], "correctedPracticalReference": 2}.
Remaining teaching/revision: Trilogy RP2 label corrected; method, Lab and osmosis diagram mapped. Full zero-change graph interpretation and safety detail remain incomplete.
Remaining practice/feedback: Existing osmosis explanation and percentage-change questions restored; dedicated graph interpretation and evaluation practice remain insufficient.

### RP03 — Nutrient identification
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"supportRefs": ["Biology|practical|food"], "correctedPracticalReference": 3}.
Remaining teaching/revision: Trilogy RP3 label corrected and existing food-test practical mapped; baseline method/safety/depth gaps remain.
Remaining practice/feedback: Insufficient dedicated practical assessment and feedback; reference correction alone does not close this gap.

### RP04 — Amylase and acidity
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"supportRefs": ["Biology|practical|enzymes"], "correctedPracticalReference": 4}.
Remaining teaching/revision: Trilogy RP4 label corrected and existing amylase practical mapped; baseline method/safety/depth gaps remain.
Remaining practice/feedback: Insufficient dedicated pH/amylase practical data and evaluation practice.

### RP05 — Light and plant gas output
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-rate", "bio2-bubbles"], "supportRefs": ["Biology|practical|photosynthesis", "Biology|support|equation-Rate", "Biology|support|practical-Photosynthesis"], "correctedPracticalReference": 5}.
Remaining teaching/revision: Trilogy RP5 label corrected; existing practical, rate calculation and Lab design activity mapped. Baseline practical breadth/depth gaps remain.
Remaining practice/feedback: Existing rate and bubble-volume evaluation questions restored; full practical data/graph/design assessment remains incomplete.

### RP06 — Reaction-time study
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-reaction"], "supportRefs": ["Biology|practical|reaction"], "correctedPracticalReference": 6}.
Remaining teaching/revision: Trilogy RP6 label corrected and existing reaction practical mapped; baseline procedure/safety/interpretation gaps remain.
Remaining practice/feedback: Existing repeats question restored; dedicated data analysis, variables and evaluation practice remain insufficient.

### RP07 — Ecological sampling
Improved evidence/access; remains PARTIAL with remaining depth/practice gaps.
Evidence: {"questionRefs": ["bio2-quadrat", "bio2-population", "bio2-transect"], "supportRefs": ["Biology|practical|fieldwork"], "correctedPracticalReference": 7}.
Remaining teaching/revision: Trilogy RP7 label corrected and existing fieldwork practical mapped; baseline method/safety/evaluation gaps remain.
Remaining practice/feedback: Random quadrat, population estimate and transect questions restored; full practical sampling/data/evaluation coverage remains incomplete.

### 4.5.3.5 — Use of hormones to treat infertility
MISSING → PARTIALLY COVERED; one formerly missing Higher unit now has accessible material.
Evidence: {"restoredLessonRefs": ["Biology|Homeostasis & Response|Hormones, feedback and fertility"], "restoredQuestionRefs": ["aqa-bio-step-homeostasis-response-10-0", "aqa-bio-step-homeostasis-response-10-1", "bio-deep-homeostasis-response-hormones-feedback-and-fertility-summary", "bio-deep-homeostasis-response-hormones-feedback-and-fertility-keyword", "bio-deep-homeostasis-response-hormones-feedback-and-fertility-explain", "bio-deep-homeostasis-response-hormones-feedback-and-fertility-justify", "bio-deep-homeostasis-response-hormones-feedback-and-fertility-improve", "bio-deep-homeostasis-response-hormones-feedback-and-fertility-grade9"]}.
Remaining teaching/revision: Complete IVF sequence and evaluation of success/risks remain insufficient.
Remaining practice/feedback: Existing eight questions restored; sufficient detailed IVF application, data interpretation and evaluation still absent.


## Validation

Focused regression suites: 104/104 passed. Complete automated suite: 206/206 passed (196 baseline plus 10 new tests). No failures or skips. Browser not attempted because environment is unchanged. Packaging verification compares every archived member with its source bytes.

## Exact changed build files

- BIOLOGY-COVERAGE-7.0.5O.json
- BIOLOGY-REPAIR-REUSE-O.md
- README.md
- biology-core-gaps.js
- biology-reuse.js
- coverage.html
- foundation-tier-data.js
- foundation-tier.js
- index.html
- package.json
- science-courses.js
- spec-audit-admin.js
- spec-audit-data.js
- spec-audit.js
- tests/biology-reuse.test.cjs
- tests/fixtures/baseline-705n.json
- tests/foundation-tier.test.cjs
- tests/spec-audit.test.cjs
- tests/state.test.cjs

Outputs PROJECT-STATE.md and CURRENT-BUILD.txt also updated.
