/* Build 7.0.5A: no new teaching; extract approved clauses from existing mixed blocks. */
const FOUNDATION_SPLITS = {
  "Biology|Inheritance|DNA and protein structure": {
    "body": "The sequence of DNA bases influences the order of amino acids in a protein.",
    "displayTitle": "Genes and protein coding",
    "sourceFingerprint": "14ed83db",
    "tier": "both",
    "method": "Existing first sentence; shared gene coding is required by Trilogy 4.6.1.3. Detailed mutation/protein-shape material stays outside this Foundation extract."
  },
  "Biology|Bioenergetics|Limiting factors": {
    "body": "Light intensity, carbon dioxide concentration and temperature can limit photosynthesis.\n\nShared single-factor investigation: with other conditions controlled, greater light intensity generally increases photosynthesis rate over part of the range. Increasing carbon dioxide concentration can also increase rate. Temperature increases usually speed enzyme-controlled reactions up to a suitable range, but high temperatures can denature enzymes and reduce rate. Less chlorophyll means less light can be absorbed and can reduce photosynthesis. Read a single-factor graph by naming the changed variable, rate units, rise/fall/plateau and numerical values; a plateau means no further rate increase over the tested range. Do not assume a straight-line relationship continues beyond measurements. The separate Higher section covers deciding between interacting limits and greenhouse economics.",
    "displayTitle": "Limiting factors",
    "sourceFingerprint": "8267cc74",
    "tier": "both",
    "method": "Existing shared clause plus 7.0.5X shared single-factor extension; original Higher clauses retained only for Higher."
  },
  "Biology|Ecology|Food chains and biomass": {
    "body": "Producers form the first trophic level of a food chain. Arrows show the direction in which biomass is transferred when organisms are eaten. Energy is transferred to the surroundings; matter can be recycled.\n\nPhotosynthetic organisms produce the biomass supporting food chains: plants and algae synthesise glucose and other molecules using light. A chain begins with a producer, eaten by a primary consumer, which may be eaten by a secondary then tertiary consumer. In grass → grasshopper → frog → snake, grass is the producer, grasshopper primary, frog secondary and snake tertiary; arrows show feeding transfer towards the eater. A predator kills/eats another animal, its prey. In a stable predator-prey model, prey numbers rise first; more prey supports more predators after a delay. Increased predation then reduces prey, followed by fewer predators as food declines, allowing prey to recover. The populations cycle rather than remaining exactly fixed. Real data may also reflect disease, migration or weather.\nIllustrative time-series for plotting: month 0/1/2/3/4/5/6; prey 20/40/60/40/20/30/50; predators 5/8/15/20/12/7/10. Plot time on a horizontal axis 0–6 months and population on a vertical axis 0–60 individuals, equal increments and separate labelled lines/key. The prey peak at month 2 precedes the predator peak at month 3; the example does not prove predation is the only cause.",
    "displayTitle": "Food chains and biomass",
    "sourceFingerprint": "7290d818",
    "tier": "both",
    "method": "7.0.6C shared producer/consumer and predator-prey extension; previous non-Trilogy biomass details remain excluded."
  },
  "Biology|Ecology|Biodiversity and food security": {
    "body": "Biodiversity is the variety of living organisms. Habitat loss, pollution and climate change can reduce it. Conservation can protect habitats and breeding populations, but involves social and economic decisions.\n\nFor this Trilogy section, biodiversity means the variety of different species on Earth or in an ecosystem, rather than the number of individuals of just one species. A diverse ecosystem can offer alternative food sources, shelter and ways of maintaining the physical environment, reducing dependence on any single species and supporting stability. Loss of one food species may be buffered by alternatives, but this does not guarantee immunity to every disturbance. Humans rely on functioning ecosystems for food and other resources; maintaining biodiversity supports the future of our species. Many human activities reduce biodiversity; conservation seeks to reduce these effects.\nIllustrative comparison: communities A and B each contain 100 individual organisms, but A has 2 species and B has 8. B has greater species richness; equal total individuals does not imply equal biodiversity. If a consumer in A relies on only one food species while a consumer in B has three suitable alternatives, removal of one food source may have a greater impact in A. State the supplied food relationships; richness alone does not prove the exact response.",
    "displayTitle": "Biodiversity",
    "sourceFingerprint": "037a0f4e",
    "tier": "both",
    "method": "7.0.6D shared biodiversity and stability extension; food security excluded as separate-science scope."
  },
  "Chemistry|Atomic Structure|The periodic table": {
    "body": "Elements are ordered by atomic number. Group number links to outer electrons. Group 1 becomes more reactive down the group; Group 7 becomes less reactive; Group 0 is very unreactive and boiling points rise down the group.",
    "displayTitle": "The periodic table",
    "sourceFingerprint": "97ca4a37",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Chemistry|Bonding|Carbon and nanoparticles": {
    "body": "Diamond is hard and does not conduct; graphite and graphene conduct through delocalised electrons.",
    "displayTitle": "Carbon",
    "sourceFingerprint": "97f27839",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Chemistry|Quantitative Chemistry|Concentration and gas volumes": {
    "body": "Concentration = mass ÷ volume. For solutions use consistent units.",
    "displayTitle": "Concentration",
    "sourceFingerprint": "7e7286a1",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Chemistry|Chemical Changes|Reactivity of metals": {
    "body": "The reactivity series predicts displacement and extraction. Potassium to aluminium are extracted by electrolysis; less reactive metals can be reduced with carbon.",
    "displayTitle": "Reactivity of metals",
    "sourceFingerprint": "d17debf2",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Chemistry|Chemical Changes|The pH scale": {
    "body": "pH measures acidity and alkalinity.",
    "displayTitle": "The pH scale",
    "sourceFingerprint": "78f31185",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Chemistry|Chemical Changes|Electrolysis": {
    "body": "Ions move to oppositely charged electrodes. In aqueous solutions, hydrogen or a metal forms at the cathode, while oxygen or a halogen forms at the anode using the discharge rules.",
    "displayTitle": "Electrolysis",
    "sourceFingerprint": "75a7555d",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Chemistry|Organic Chemistry|Alkenes": {
    "body": "They decolourise bromine water.",
    "displayTitle": "Alkenes",
    "sourceFingerprint": "22a2522a",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Chemistry|Using Resources|Reduce, reuse and recycle": {
    "body": "Reducing use prevents impacts; reuse avoids remanufacture; recycling saves some raw materials but needs collection and energy.",
    "displayTitle": "Reduce, reuse and recycle",
    "sourceFingerprint": "1e49764f",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Physics|Energy|Dissipation and efficiency": {
    "body": "Unwanted transfers spread energy into thermal stores of the surroundings. Efficiency = useful output ÷ total input, as a decimal or percentage.",
    "displayTitle": "Dissipation and efficiency",
    "sourceFingerprint": "0574647c",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Physics|Electricity|The National Grid": {
    "body": "Transformers raise voltage for transmission, lowering current for the same power and reducing heating losses. Transformers lower voltage for safe distribution.",
    "displayTitle": "The National Grid",
    "sourceFingerprint": "e83a6232",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Physics|Particle Model|Gas pressure": {
    "body": "Gas particles collide with container walls. Higher temperature raises average kinetic energy and pressure in a fixed volume.",
    "displayTitle": "Gas pressure",
    "sourceFingerprint": "29758129",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Physics|Atomic Structure|Half-life": {
    "body": "Half-life is the time for the number of undecayed nuclei or activity to halve. It cannot predict when one nucleus decays.",
    "displayTitle": "Half-life",
    "sourceFingerprint": "6e942d2b",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Physics|Forces|Motion graphs": {
    "body": "Speed = distance ÷ time; velocity includes direction. Acceleration = change in velocity ÷ time.",
    "displayTitle": "Motion graphs",
    "sourceFingerprint": "60e65d9f",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Physics|Forces|Newton’s laws": {
    "body": "A resultant force causes acceleration: F = ma. Interaction forces between two objects are equal and opposite and act on different objects.",
    "displayTitle": "Newton’s laws",
    "sourceFingerprint": "ecb71c76",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Physics|Forces|Stopping and momentum": {
    "body": "Stopping distance = thinking + braking distance. Speed, reaction time, mass, brakes and road conditions matter.",
    "displayTitle": "Stopping",
    "sourceFingerprint": "19c3f142",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Physics|Waves|Uses and hazards": {
    "body": "Higher-energy radiation can damage cells.",
    "displayTitle": "Uses and hazards",
    "sourceFingerprint": "d5916eed",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Physics|Waves|Reflection and refraction": {
    "body": "Reflection angle equals incidence angle.",
    "displayTitle": "Reflection and refraction",
    "sourceFingerprint": "3cb217aa",
    "tier": "both",
    "method": "Existing Foundation clauses only; original complete block retained for Higher."
  },
  "Biology|Homeostasis & Response|The endocrine system": {
    "body": "Endocrine glands release hormones into the blood. The pituitary gland in the brain helps control other glands. The pancreas releases insulin; the thyroid and adrenal glands have different hormone roles; ovaries and testes produce reproductive hormones. Hormonal responses are often slower and longer lasting than nerve impulses. Be able to identify these glands on a body diagram.\n\nGlands secrete hormones directly into the bloodstream; blood carries them to target organs where they have effects. Compared with nervous impulses their effects are generally slower and longer-lasting. The pituitary at the base of the brain is a master gland: changes in body conditions cause it to release hormones that stimulate other glands to release hormones. This does not mean every gland is controlled identically. Locate the six required glands on the body diagram: pituitary in the brain; thyroid in the neck; adrenal glands above the kidneys; pancreas in the upper abdomen behind the stomach; ovaries in the pelvis on either side of the uterus; testes in the scrotum. The ovary and testis insets show alternative reproductive anatomy, not both in one person. Reuse the nervous-system route for comparisons and the insulin example for a hormone travelling in blood to target tissues.",
    "displayTitle": "The endocrine system",
    "sourceFingerprint": "b9992a57",
    "tier": "both",
    "method": "Y shared source clause and shared extension; glucagon name retained only in Higher original."
  }
};
const FOUNDATION_QUESTION_HOLDS = {
  "aqa-bio-step-homeostasis-response-2-0": {
    "tier": "mixed",
    "reason": "Generated question/feedback inherits Higher-only glucagon control despite a shared lesson tag. Withheld from Foundation pending separation."
  },
  "aqa-bio-step-homeostasis-response-2-1": {
    "tier": "mixed",
    "reason": "Generated question/feedback inherits Higher-only glucagon control despite a shared lesson tag. Withheld from Foundation pending separation."
  },
  "aqa-bio-step-homeostasis-response-9-0": {
    "tier": "mixed",
    "reason": "Generated question/feedback inherits Higher-only hormone interactions despite a shared lesson tag. Withheld from Foundation pending separation."
  },
  "aqa-bio-step-homeostasis-response-9-1": {
    "tier": "mixed",
    "reason": "Generated question/feedback inherits Higher-only hormone interactions despite a shared lesson tag. Withheld from Foundation pending separation."
  },
  "bio-deep-homeostasis-response-blood-glucose-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-homeostasis-response-blood-glucose-explain": {
    "tier": "mixed",
    "reason": "Generated question/feedback inherits Higher-only glucagon control despite a shared lesson tag. Withheld from Foundation pending separation."
  },
  "bio-deep-homeostasis-response-blood-glucose-justify": {
    "tier": "mixed",
    "reason": "Generated question/feedback inherits Higher-only glucagon control despite a shared lesson tag. Withheld from Foundation pending separation."
  },
  "bio-deep-homeostasis-response-blood-glucose-improve": {
    "tier": "mixed",
    "reason": "Generated question/feedback inherits Higher-only glucagon control despite a shared lesson tag. Withheld from Foundation pending separation."
  },
  "bio-deep-homeostasis-response-blood-glucose-grade9": {
    "tier": "mixed",
    "reason": "Generated question/feedback inherits Higher-only glucagon control despite a shared lesson tag. Withheld from Foundation pending separation."
  },
  "bio-deep-homeostasis-response-reproductive-hormones-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-homeostasis-response-reproductive-hormones-explain": {
    "tier": "mixed",
    "reason": "Generated question/feedback inherits Higher-only hormone interactions despite a shared lesson tag. Withheld from Foundation pending separation."
  },
  "bio-deep-homeostasis-response-reproductive-hormones-justify": {
    "tier": "mixed",
    "reason": "Generated question/feedback inherits Higher-only hormone interactions despite a shared lesson tag. Withheld from Foundation pending separation."
  },
  "bio-deep-homeostasis-response-reproductive-hormones-improve": {
    "tier": "mixed",
    "reason": "Generated question/feedback inherits Higher-only hormone interactions despite a shared lesson tag. Withheld from Foundation pending separation."
  },
  "bio-deep-homeostasis-response-reproductive-hormones-grade9": {
    "tier": "mixed",
    "reason": "Generated question/feedback inherits Higher-only hormone interactions despite a shared lesson tag. Withheld from Foundation pending separation."
  },
  "bio-deep-infection-response-pathogens-and-transmission-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-infection-response-defences-and-immunity-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-infection-response-developing-medicines-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-infection-response-interpreting-evidence-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-bioenergetics-photosynthesis-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-bioenergetics-aerobic-respiration-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-bioenergetics-anaerobic-respiration-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-bioenergetics-exercise-and-metabolism-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-bioenergetics-measuring-a-biological-rate-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-homeostasis-response-keeping-conditions-stable-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-homeostasis-response-reflexes-and-the-nervous-system-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-homeostasis-response-reproduction-and-hormones-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-homeostasis-response-reaction-time-investigations-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-homeostasis-response-the-endocrine-system-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-inheritance-sexual-and-asexual-reproduction-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-inheritance-genetic-crosses-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-inheritance-variation-and-mutation-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-inheritance-selective-breeding-and-genetic-engineering-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-inheritance-evidence-and-classification-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-ecology-communities-and-ecosystems-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-ecology-competition-and-adaptation-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-ecology-sampling-and-fieldwork-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-ecology-evaluating-interventions-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  },
  "bio-deep-ecology-human-impacts-and-biodiversity-summary": {
    "tier": "mixed",
    "reason": "A distractor contains a mixed/Higher-only or excluded card statement. Withheld pending option-level separation."
  }
};

// Reviewed Blood glucose variants; original Higher text and stable identifiers retained.
const BLOOD_GLUCOSE_TIERS = {
  "aqa-bio-step-homeostasis-response-2-0": {
    "tier": "higher",
    "source": {
      "q": "Which hormone raises low blood glucose?",
      "answer": "Glucagon",
      "explain": "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
      "options": [
        "Insulin",
        "ADH",
        "Glucagon",
        "LH"
      ]
    },
    "foundation": {},
    "reason": "Blood glucose reviewed: Higher-only glucagon / advanced response retained on Higher."
  },
  "aqa-bio-step-homeostasis-response-2-1": {
    "tier": "both",
    "source": {
      "q": "What is an effect of insulin?",
      "answer": "More glucose is removed from blood",
      "explain": "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
      "options": [
        "Glycogen turns to glucose",
        "Less glucose enters cells",
        "Water becomes glucose",
        "More glucose is removed from blood"
      ]
    },
    "foundation": {
      "explain": "Insulin lowers high blood glucose."
    },
    "reason": "Blood glucose reviewed: Foundation insulin wording separated from original Higher feedback; existing wording reused."
  },
  "bio-deep-homeostasis-response-blood-glucose-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cBlood glucose\u201d?",
      "answer": "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
      "explain": "The best summary is: Insulin lowers high blood glucose; glucagon raises low blood glucose.",
      "options": [
        "Change one factor, measure reaction time, repeat and compare means.",
        "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
        "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
        "Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides."
      ]
    },
    "foundation": {
      "answer": "Insulin lowers high blood glucose.",
      "explain": "The best summary is: Insulin lowers high blood glucose.",
      "options": [
        "Insulin lowers high blood glucose.",
        "Glycogen turns to glucose",
        "Less glucose enters cells",
        "Water becomes glucose"
      ]
    },
    "reason": "Blood glucose reviewed: Foundation insulin wording separated from original Higher feedback; existing wording reused."
  },
  "bio-deep-homeostasis-response-blood-glucose-explain": {
    "tier": "both",
    "source": {
      "q": "Explain \u201cBlood glucose\u201d in two linked sentences.",
      "answer": "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
      "explain": "Use the key words insulin and glucagon, then link the process or structure to its effect.",
      "options": null
    },
    "foundation": {
      "answer": "Insulin lowers high blood glucose. The pancreas releases insulin, which promotes glucose uptake and storage.",
      "explain": "Use the key word insulin, then link the process or structure to its effect."
    },
    "reason": "Blood glucose reviewed: Foundation insulin wording separated from original Higher feedback; existing wording reused."
  },
  "bio-deep-homeostasis-response-blood-glucose-justify": {
    "tier": "both",
    "source": {
      "q": "Blood glucose is too high after a meal. Which hormone helps lower it? A student answers: \u201cInsulin.\u201d Explain why that answer is correct.",
      "answer": "Insulin lowers high blood glucose; glucagon raises low blood glucose. The pancreas releases insulin, which promotes glucose uptake and storage.",
      "explain": "A strong justification states the fact, gives the biological reason and links it to the situation.",
      "options": null
    },
    "foundation": {
      "answer": "Insulin lowers high blood glucose. The pancreas releases insulin, which promotes glucose uptake and storage."
    },
    "reason": "Blood glucose reviewed: Foundation insulin wording separated from original Higher feedback; existing wording reused."
  },
  "bio-deep-homeostasis-response-blood-glucose-improve": {
    "tier": "both",
    "source": {
      "q": "A student writes only \u201cinsulin\u201d. Improve this into a complete answer about Blood glucose.",
      "answer": "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
      "explain": "Naming a keyword alone is not enough. State which hormone is released and why.",
      "options": null
    },
    "foundation": {
      "answer": "Insulin lowers high blood glucose. The pancreas releases insulin, which promotes glucose uptake and storage."
    },
    "reason": "Blood glucose reviewed: Foundation insulin wording separated from original Higher feedback; existing wording reused."
  },
  "bio-deep-homeostasis-response-blood-glucose-grade9": {
    "tier": "higher",
    "source": {
      "q": "Write a Grade 8/9 response for this focus: State which hormone is released and why.",
      "answer": "Insulin lowers high blood glucose; glucagon raises low blood glucose. Example application: Insulin.",
      "explain": "Top responses use precise terminology, a linked cause-and-effect chain and a relevant application or example.",
      "options": null
    },
    "foundation": {},
    "reason": "Blood glucose reviewed: Higher-only glucagon / advanced response retained on Higher."
  }
};

const REPRODUCTIVE_HORMONE_TIERS = {
  "aqa-bio-step-homeostasis-response-9-0": {
    "tier": "both",
    "source": {
      "q": "Which hormone stimulates egg maturation?",
      "answer": "FSH",
      "explain": "FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.",
      "options": [
        "ADH",
        "FSH",
        "Glucagon",
        "Insulin"
      ]
    },
    "foundation": {
      "explain": "FSH stimulates maturation of an egg in an ovarian follicle.",
      "options": [
        "Amylase",
        "FSH",
        "Bile",
        "Lipase"
      ]
    },
    "reason": "Reproductive hormones reviewed: Foundation hormone roles separated from interaction/timing feedback; existing audited wording reused."
  },
  "aqa-bio-step-homeostasis-response-9-1": {
    "tier": "higher",
    "source": {
      "q": "Which hormone rises after ovulation to help maintain the lining?",
      "answer": "Progesterone",
      "explain": "FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.",
      "options": [
        "Amylase",
        "Bile",
        "Progesterone",
        "Lipase"
      ]
    },
    "foundation": {},
    "reason": "Reproductive hormones reviewed: Cycle timing/graph or advanced response retained on Higher."
  },
  "bio-deep-homeostasis-response-reproductive-hormones-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cReproductive hormones\u201d?",
      "answer": "FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.",
      "explain": "The best summary is: FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.",
      "options": [
        "Sweating and skin blood flow help control temperature; kidneys adjust how much water leaves in urine.",
        "The cornea and lens focus light on the retina; the optic nerve carries signals to the brain.",
        "FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.",
        "Change one factor, measure reaction time, repeat and compare means."
      ]
    },
    "foundation": {
      "answer": "FSH stimulates maturation of an egg in an ovarian follicle. LH triggers ovulation. Oestrogen and progesterone help coordinate changes in the uterine lining.",
      "explain": "The best summary is: FSH stimulates maturation of an egg in an ovarian follicle. LH triggers ovulation. Oestrogen and progesterone help coordinate changes in the uterine lining.",
      "options": [
        "FSH stimulates maturation of an egg in an ovarian follicle. LH triggers ovulation. Oestrogen and progesterone help coordinate changes in the uterine lining.",
        "Change one factor, measure reaction time, repeat and compare means.",
        "Insulin lowers high blood glucose.",
        "Water becomes glucose"
      ]
    },
    "reason": "Reproductive hormones reviewed: Foundation hormone roles separated from interaction/timing feedback; existing audited wording reused."
  },
  "bio-deep-homeostasis-response-reproductive-hormones-explain": {
    "tier": "both",
    "source": {
      "q": "Explain \u201cReproductive hormones\u201d in two linked sentences.",
      "answer": "FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.",
      "explain": "Use the key words ovulation and progesterone, then link the process or structure to its effect.",
      "options": null
    },
    "foundation": {
      "answer": "FSH stimulates maturation of an egg in an ovarian follicle. LH triggers ovulation. Oestrogen and progesterone help coordinate changes in the uterine lining.",
      "explain": "Distinguish the source of a hormone, the organ it acts on and the effect it produces."
    },
    "reason": "Reproductive hormones reviewed: Foundation hormone roles separated from interaction/timing feedback; existing audited wording reused."
  },
  "bio-deep-homeostasis-response-reproductive-hormones-justify": {
    "tier": "higher",
    "source": {
      "q": "A graph shows a sharp LH rise midway through the cycle. What event follows? A student answers: \u201cOvulation.\u201d Explain why that answer is correct.",
      "answer": "FSH, LH, oestrogen and progesterone interact to control the menstrual cycle. The LH surge triggers release of an egg.",
      "explain": "A strong justification states the fact, gives the biological reason and links it to the situation.",
      "options": null
    },
    "foundation": {},
    "reason": "Reproductive hormones reviewed: Cycle timing/graph or advanced response retained on Higher."
  },
  "bio-deep-homeostasis-response-reproductive-hormones-improve": {
    "tier": "both",
    "source": {
      "q": "A student writes only \u201covulation\u201d. Improve this into a complete answer about Reproductive hormones.",
      "answer": "FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.",
      "explain": "Naming a keyword alone is not enough. Explain timing rather than just listing hormones.",
      "options": null
    },
    "foundation": {
      "answer": "LH triggers ovulation.",
      "explain": "Distinguish the source of a hormone, the organ it acts on and the effect it produces.",
      "marks": 1
    },
    "reason": "Reproductive hormones reviewed: Foundation hormone roles separated from interaction/timing feedback; existing audited wording reused."
  },
  "bio-deep-homeostasis-response-reproductive-hormones-grade9": {
    "tier": "higher",
    "source": {
      "q": "Write a Grade 8/9 response for this focus: Explain timing rather than just listing hormones.",
      "answer": "FSH, LH, oestrogen and progesterone interact to control the menstrual cycle. Example application: Ovulation.",
      "explain": "Top responses use precise terminology, a linked cause-and-effect chain and a relevant application or example.",
      "options": null
    },
    "foundation": {},
    "reason": "Reproductive hormones reviewed: Cycle timing/graph or advanced response retained on Higher."
  }
};
const STABLE_CONDITIONS_TIERS = {
  "bio-deep-homeostasis-response-keeping-conditions-stable-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cKeeping conditions stable\u201d?",
      "answer": "Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.",
      "explain": "The best summary is: Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.",
      "options": [
        "A reflex is a fast automatic response carried through a reflex arc.",
        "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
        "Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.",
        "A gland releases a hormone into blood; the hormone travels to a target organ."
      ]
    },
    "foundation": {
      "options": [
        "A reflex is a fast automatic response carried through a reflex arc.",
        "Insulin lowers high blood glucose.",
        "Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.",
        "A gland releases a hormone into blood; the hormone travels to a target organ."
      ]
    },
    "reason": "Keeping conditions stable summary reviewed: prompt, answer and feedback are Foundation-eligible. Remove the Higher-only glucagon clause from the blood-glucose distractor for Foundation; retain the original Higher option."
  }
};
const PATHOGENS_SUMMARY_TIERS = {
  "bio-deep-infection-response-pathogens-and-transmission-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cPathogens and transmission\u201d?",
      "answer": "Pathogens cause infectious disease and can spread through air, water or direct contact.",
      "explain": "The best summary is: Pathogens cause infectious disease and can spread through air, water or direct contact.",
      "options": [
        "Monoclonal antibodies bind one specific antigen and can be used in tests or targeted treatments.",
        "Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.",
        "Pathogens cause infectious disease and can spread through air, water or direct contact.",
        "Different pathogens spread in different ways, so prevention depends on the disease."
      ]
    },
    "foundation": {
      "options": [
        "A reflex is a fast automatic response carried through a reflex arc.",
        "Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.",
        "Pathogens cause infectious disease and can spread through air, water or direct contact.",
        "Different pathogens spread in different ways, so prevention depends on the disease."
      ]
    },
    "reason": "Pathogens summary reviewed: prompt, answer, feedback and remaining options are Foundation-eligible. Replace the inherited monoclonal-antibody distractor, outside audited Trilogy Foundation scope, with an existing shared reflex statement. Preserve the original Higher question."
  }
};
const DEFENCES_SUMMARY_TIERS = {
  "bio-deep-infection-response-defences-and-immunity-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cDefences and immunity\u201d?",
      "answer": "Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.",
      "explain": "The best summary is: Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.",
      "options": [
        "Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.",
        "Plants can detect and resist pathogens using barriers and chemical defences.",
        "A claim is stronger when the method is fair, the sample is large and results can be repeated.",
        "Different pathogens spread in different ways, so prevention depends on the disease."
      ]
    },
    "foundation": {
      "options": [
        "Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.",
        "A reflex is a fast automatic response carried through a reflex arc.",
        "A claim is stronger when the method is fair, the sample is large and results can be repeated.",
        "Different pathogens spread in different ways, so prevention depends on the disease."
      ]
    },
    "reason": "Defences summary reviewed: prompt, answer, feedback and remaining options are Foundation-eligible. Replace inherited plant-defence material outside audited Trilogy Foundation scope with an existing shared reflex statement. Preserve the original Higher question."
  }
};
const SUMMARY_BATCH_G_TIERS = {
  "bio-deep-infection-response-developing-medicines-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cDeveloping medicines\u201d?",
      "answer": "New medicines are tested for safety, dose and effectiveness before wide use.",
      "explain": "The best summary is: New medicines are tested for safety, dose and effectiveness before wide use.",
      "options": [
        "Pathogens cause infectious disease and can spread through air, water or direct contact.",
        "New medicines are tested for safety, dose and effectiveness before wide use.",
        "Different pathogens spread in different ways, so prevention depends on the disease.",
        "Monoclonal antibodies bind one specific antigen and can be used in tests or targeted treatments."
      ]
    },
    "foundation": {
      "options": [
        "Pathogens cause infectious disease and can spread through air, water or direct contact.",
        "New medicines are tested for safety, dose and effectiveness before wide use.",
        "Different pathogens spread in different ways, so prevention depends on the disease.",
        "A reflex is a fast automatic response carried through a reflex arc."
      ]
    },
    "reason": "Developing medicines summary: audited shared prompt/answer/feedback retained; inherited excluded or mixed-source distractors replaced with existing reviewed shared wording. Original Higher question preserved."
  },
  "bio-deep-infection-response-interpreting-evidence-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cInterpreting evidence\u201d?",
      "answer": "A claim is stronger when the method is fair, the sample is large and results can be repeated.",
      "explain": "The best summary is: A claim is stronger when the method is fair, the sample is large and results can be repeated.",
      "options": [
        "Vaccines prepare the immune system; antibiotics kill bacteria, not viruses.",
        "New medicines are tested for safety, dose and effectiveness before wide use.",
        "Plants can detect and resist pathogens using barriers and chemical defences.",
        "A claim is stronger when the method is fair, the sample is large and results can be repeated."
      ]
    },
    "foundation": {
      "options": [
        "Vaccines prepare the immune system; antibiotics kill bacteria, not viruses.",
        "New medicines are tested for safety, dose and effectiveness before wide use.",
        "A reflex is a fast automatic response carried through a reflex arc.",
        "A claim is stronger when the method is fair, the sample is large and results can be repeated."
      ]
    },
    "reason": "Interpreting evidence summary: audited shared prompt/answer/feedback retained; inherited excluded or mixed-source distractors replaced with existing reviewed shared wording. Original Higher question preserved."
  },
  "bio-deep-bioenergetics-photosynthesis-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cPhotosynthesis\u201d?",
      "answer": "Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
      "explain": "The best summary is: Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
      "options": [
        "Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
        "Measure a change over time, keep other factors constant, and repeat readings.",
        "Improving one factor stops helping when another factor becomes limiting.",
        "The slowest available input limits photosynthesis: light, carbon dioxide or temperature."
      ]
    },
    "foundation": {
      "options": [
        "Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
        "Measure a change over time, keep other factors constant, and repeat readings.",
        "A reflex is a fast automatic response carried through a reflex arc.",
        "Insulin lowers high blood glucose."
      ]
    },
    "reason": "Photosynthesis summary: audited shared prompt/answer/feedback retained; inherited excluded or mixed-source distractors replaced with existing reviewed shared wording. Original Higher question preserved."
  },
  "bio-deep-bioenergetics-aerobic-respiration-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cAerobic respiration\u201d?",
      "answer": "With oxygen, cells release energy from glucose and make carbon dioxide and water.",
      "explain": "The best summary is: With oxygen, cells release energy from glucose and make carbon dioxide and water.",
      "options": [
        "With oxygen, cells release energy from glucose and make carbon dioxide and water.",
        "Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.",
        "Measure a change over time, keep other factors constant, and repeat readings.",
        "Improving one factor stops helping when another factor becomes limiting."
      ]
    },
    "foundation": {
      "options": [
        "With oxygen, cells release energy from glucose and make carbon dioxide and water.",
        "Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.",
        "Measure a change over time, keep other factors constant, and repeat readings.",
        "A reflex is a fast automatic response carried through a reflex arc."
      ]
    },
    "reason": "Aerobic respiration summary: audited shared prompt/answer/feedback retained; inherited excluded or mixed-source distractors replaced with existing reviewed shared wording. Original Higher question preserved."
  },
  "bio-deep-bioenergetics-anaerobic-respiration-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cAnaerobic respiration\u201d?",
      "answer": "Without enough oxygen, muscles release less energy and produce lactic acid.",
      "explain": "The best summary is: Without enough oxygen, muscles release less energy and produce lactic acid.",
      "options": [
        "Measure a change over time, keep other factors constant, and repeat readings.",
        "Improving one factor stops helping when another factor becomes limiting.",
        "Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
        "Without enough oxygen, muscles release less energy and produce lactic acid."
      ]
    },
    "foundation": {
      "options": [
        "Measure a change over time, keep other factors constant, and repeat readings.",
        "A reflex is a fast automatic response carried through a reflex arc.",
        "Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
        "Without enough oxygen, muscles release less energy and produce lactic acid."
      ]
    },
    "reason": "Anaerobic respiration summary: audited shared prompt/answer/feedback retained; inherited excluded or mixed-source distractors replaced with existing reviewed shared wording. Original Higher question preserved."
  },
  "bio-deep-bioenergetics-exercise-and-metabolism-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cExercise and metabolism\u201d?",
      "answer": "Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.",
      "explain": "The best summary is: Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.",
      "options": [
        "Improving one factor stops helping when another factor becomes limiting.",
        "Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
        "Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.",
        "Measure a change over time, keep other factors constant, and repeat readings."
      ]
    },
    "foundation": {
      "options": [
        "A reflex is a fast automatic response carried through a reflex arc.",
        "Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
        "Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.",
        "Measure a change over time, keep other factors constant, and repeat readings."
      ]
    },
    "reason": "Exercise and metabolism summary: audited shared prompt/answer/feedback retained; inherited excluded or mixed-source distractors replaced with existing reviewed shared wording. Original Higher question preserved."
  },
  "bio-deep-bioenergetics-measuring-a-biological-rate-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cMeasuring a biological rate\u201d?",
      "answer": "Measure a change over time, keep other factors constant, and repeat readings.",
      "explain": "The best summary is: Measure a change over time, keep other factors constant, and repeat readings.",
      "options": [
        "Measure a change over time, keep other factors constant, and repeat readings.",
        "The slowest available input limits photosynthesis: light, carbon dioxide or temperature.",
        "With oxygen, cells release energy from glucose and make carbon dioxide and water.",
        "Without enough oxygen, muscles release less energy and produce lactic acid."
      ]
    },
    "foundation": {
      "options": [
        "Measure a change over time, keep other factors constant, and repeat readings.",
        "A reflex is a fast automatic response carried through a reflex arc.",
        "With oxygen, cells release energy from glucose and make carbon dioxide and water.",
        "Without enough oxygen, muscles release less energy and produce lactic acid."
      ]
    },
    "reason": "Measuring a biological rate summary: audited shared prompt/answer/feedback retained; inherited excluded or mixed-source distractors replaced with existing reviewed shared wording. Original Higher question preserved."
  },
  "bio-deep-homeostasis-response-reflexes-and-the-nervous-system-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cReflexes and the nervous system\u201d?",
      "answer": "A reflex is a fast automatic response carried through a reflex arc.",
      "explain": "The best summary is: A reflex is a fast automatic response carried through a reflex arc.",
      "options": [
        "Change one factor, measure reaction time, repeat and compare means.",
        "A reflex is a fast automatic response carried through a reflex arc.",
        "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
        "Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides."
      ]
    },
    "foundation": {
      "options": [
        "Change one factor, measure reaction time, repeat and compare means.",
        "A reflex is a fast automatic response carried through a reflex arc.",
        "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
        "Insulin lowers high blood glucose."
      ]
    },
    "reason": "Reflexes and the nervous system summary: audited shared prompt/answer/feedback retained; inherited excluded or mixed-source distractors replaced with existing reviewed shared wording. Original Higher question preserved."
  }
};
const HOMEOSTASIS_BATCH_H_TIERS = {
  "bio-deep-homeostasis-response-reproduction-and-hormones-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cReproduction and hormones\u201d?",
      "answer": "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
      "explain": "The best summary is: FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
      "options": [
        "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
        "ADH changes how much water the kidneys reabsorb: more ADH means more reabsorption.",
        "Plant hormones can change growth and are used to control weeds, rooting and fruit ripening.",
        "A gland releases a hormone into blood; the hormone travels to a target organ."
      ]
    },
    "foundation": {
      "options": [
        "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
        "A reflex is a fast automatic response carried through a reflex arc.",
        "Insulin lowers high blood glucose.",
        "A gland releases a hormone into blood; the hormone travels to a target organ."
      ]
    },
    "reason": "Reproduction and hormones summary: shared audited prompt, answer and feedback retained; excluded/mixed-source hormone distractors separated using existing reviewed Foundation wording. Original Higher question preserved."
  },
  "bio-deep-homeostasis-response-reaction-time-investigations-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cReaction-time investigations\u201d?",
      "answer": "Change one factor, measure reaction time, repeat and compare means.",
      "explain": "The best summary is: Change one factor, measure reaction time, repeat and compare means.",
      "options": [
        "Negative feedback reverses a change and brings a level back towards normal.",
        "FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.",
        "Fertility treatment can use FSH and LH to stimulate egg maturation and ovulation.",
        "Change one factor, measure reaction time, repeat and compare means."
      ]
    },
    "foundation": {
      "options": [
        "A reflex is a fast automatic response carried through a reflex arc.",
        "Insulin lowers high blood glucose.",
        "A gland releases a hormone into blood; the hormone travels to a target organ.",
        "Change one factor, measure reaction time, repeat and compare means."
      ]
    },
    "reason": "Reaction-time investigations summary: shared audited prompt, answer and feedback retained; excluded/mixed-source hormone distractors separated using existing reviewed Foundation wording. Original Higher question preserved."
  },
  "bio-deep-homeostasis-response-the-endocrine-system-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cThe endocrine system\u201d?",
      "answer": "A gland releases a hormone into blood; the hormone travels to a target organ.",
      "explain": "The best summary is: A gland releases a hormone into blood; the hormone travels to a target organ.",
      "options": [
        "Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides.",
        "A gland releases a hormone into blood; the hormone travels to a target organ.",
        "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
        "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining."
      ]
    },
    "foundation": {
      "options": [
        "A reflex is a fast automatic response carried through a reflex arc.",
        "A gland releases a hormone into blood; the hormone travels to a target organ.",
        "Insulin lowers high blood glucose.",
        "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining."
      ]
    },
    "reason": "The endocrine system summary: shared audited prompt, answer and feedback retained; excluded/mixed-source hormone distractors separated using existing reviewed Foundation wording. Original Higher question preserved."
  }
};
const INHERITANCE_BATCH_I_TIERS = {
  "bio-deep-inheritance-sexual-and-asexual-reproduction-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cSexual and asexual reproduction\u201d?",
      "answer": "Sexual reproduction combines gametes and creates variation; asexual reproduction makes clones.",
      "explain": "The best summary is: Sexual reproduction combines gametes and creates variation; asexual reproduction makes clones.",
      "options": [
        "Classification groups organisms by shared features and evolutionary relationships.",
        "Fossils and genetic similarities help show how species have changed over time.",
        "Sexual reproduction combines gametes and creates variation; asexual reproduction makes clones.",
        "Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly."
      ]
    },
    "foundation": {
      "options": [
        "Classification groups organisms by shared features and evolutionary relationships.",
        "Fossils and genetic similarities help show how species have changed over time.",
        "Sexual reproduction combines gametes and creates variation; asexual reproduction makes clones.",
        "Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly."
      ]
    },
    "reason": "All options including the general selective-breeding/genetic-engineering statement are supported by audited shared lesson wording; remove the conservative inherited hold without changing text."
  },
  "bio-deep-inheritance-genetic-crosses-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cGenetic crosses\u201d?",
      "answer": "Each parent passes on one allele; a Punnett square shows possible offspring genotypes.",
      "explain": "The best summary is: Each parent passes on one allele; a Punnett square shows possible offspring genotypes.",
      "options": [
        "The order of DNA bases codes for amino acids; amino-acid order affects protein shape.",
        "Each parent passes on one allele; a Punnett square shows possible offspring genotypes.",
        "Classification groups organisms by shared features and evolutionary relationships.",
        "Fossils and genetic similarities help show how species have changed over time."
      ]
    },
    "foundation": {
      "options": [
        "A reflex is a fast automatic response carried through a reflex arc.",
        "Each parent passes on one allele; a Punnett square shows possible offspring genotypes.",
        "Classification groups organisms by shared features and evolutionary relationships.",
        "Fossils and genetic similarities help show how species have changed over time."
      ]
    },
    "reason": "Shared audited prompt, answer and feedback retained; DNA-base/amino-acid/protein-shape distractor replaced with existing reviewed shared reflex wording. Higher original preserved."
  },
  "bio-deep-inheritance-variation-and-mutation-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cVariation and mutation\u201d?",
      "answer": "Variation comes from genes and environment; mutations are changes in DNA.",
      "explain": "The best summary is: Variation comes from genes and environment; mutations are changes in DNA.",
      "options": [
        "Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.",
        "Eggs carry X; sperm carry X or Y, giving an approximately 1:1 XX to XY outcome.",
        "Variation comes from genes and environment; mutations are changes in DNA.",
        "The order of DNA bases codes for amino acids; amino-acid order affects protein shape."
      ]
    },
    "foundation": {
      "options": [
        "Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.",
        "Eggs carry X; sperm carry X or Y, giving an approximately 1:1 XX to XY outcome.",
        "Variation comes from genes and environment; mutations are changes in DNA.",
        "A reflex is a fast automatic response carried through a reflex arc."
      ]
    },
    "reason": "Shared audited prompt, answer and feedback retained; DNA-base/amino-acid/protein-shape distractor replaced with existing reviewed shared reflex wording. Higher original preserved."
  },
  "bio-deep-inheritance-evidence-and-classification-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cEvidence and classification\u201d?",
      "answer": "Classification groups organisms by shared features and evolutionary relationships.",
      "explain": "The best summary is: Classification groups organisms by shared features and evolutionary relationships.",
      "options": [
        "Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.",
        "Classification groups organisms by shared features and evolutionary relationships.",
        "Fossils and genetic similarities help show how species have changed over time.",
        "The order of DNA bases codes for amino acids; amino-acid order affects protein shape."
      ]
    },
    "foundation": {
      "options": [
        "Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.",
        "Classification groups organisms by shared features and evolutionary relationships.",
        "Fossils and genetic similarities help show how species have changed over time.",
        "A reflex is a fast automatic response carried through a reflex arc."
      ]
    },
    "reason": "Shared audited prompt, answer and feedback retained; DNA-base/amino-acid/protein-shape distractor replaced with existing reviewed shared reflex wording. Higher original preserved."
  }
};
const SUMMARY_BATCH_J_TIERS = {
  "bio-deep-inheritance-selective-breeding-and-genetic-engineering-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cSelective breeding and genetic engineering\u201d?",
      "answer": "Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.",
      "explain": "The best summary is: Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.",
      "options": [
        "Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.",
        "Classification groups organisms by shared features and evolutionary relationships.",
        "Fossils and genetic similarities help show how species have changed over time.",
        "The order of DNA bases codes for amino acids; amino-acid order affects protein shape."
      ]
    },
    "foundation": {
      "options": [
        "Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.",
        "Classification groups organisms by shared features and evolutionary relationships.",
        "Fossils and genetic similarities help show how species have changed over time.",
        "A reflex is a fast automatic response carried through a reflex arc."
      ]
    },
    "reason": "Selective breeding and genetic engineering: shared audited prompt, answer, feedback and other distractors retained; inherited DNA/protein or excluded biomass-transfer distractor replaced with existing reviewed shared wording. Original Higher question preserved."
  },
  "bio-deep-ecology-communities-and-ecosystems-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cCommunities and ecosystems\u201d?",
      "answer": "A community is all the populations living together; an ecosystem includes them and their environment.",
      "explain": "The best summary is: A community is all the populations living together; an ecosystem includes them and their environment.",
      "options": [
        "A community is all the populations living together; an ecosystem includes them and their environment.",
        "Compare benefits, costs and evidence before judging a conservation or farming action.",
        "Only some biomass passes to the next level; much is lost in waste, respiration and uneaten parts.",
        "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts."
      ]
    },
    "foundation": {
      "options": [
        "A community is all the populations living together; an ecosystem includes them and their environment.",
        "Compare benefits, costs and evidence before judging a conservation or farming action.",
        "A reflex is a fast automatic response carried through a reflex arc.",
        "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts."
      ]
    },
    "reason": "Communities and ecosystems: shared audited prompt, answer, feedback and other distractors retained; inherited DNA/protein or excluded biomass-transfer distractor replaced with existing reviewed shared wording. Original Higher question preserved."
  },
  "bio-deep-ecology-competition-and-adaptation-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cCompetition and adaptation\u201d?",
      "answer": "Organisms compete for limited resources; adaptations improve survival in an environment.",
      "explain": "The best summary is: Organisms compete for limited resources; adaptations improve survival in an environment.",
      "options": [
        "Organisms compete for limited resources; adaptations improve survival in an environment.",
        "Compare benefits, costs and evidence before judging a conservation or farming action.",
        "Only some biomass passes to the next level; much is lost in waste, respiration and uneaten parts.",
        "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts."
      ]
    },
    "foundation": {
      "options": [
        "Organisms compete for limited resources; adaptations improve survival in an environment.",
        "Compare benefits, costs and evidence before judging a conservation or farming action.",
        "A reflex is a fast automatic response carried through a reflex arc.",
        "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts."
      ]
    },
    "reason": "Competition and adaptation: shared audited prompt, answer, feedback and other distractors retained; inherited DNA/protein or excluded biomass-transfer distractor replaced with existing reviewed shared wording. Original Higher question preserved."
  }
};
const ECOLOGY_BATCH_K_TIERS = {
  "bio-deep-ecology-sampling-and-fieldwork-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cSampling and fieldwork\u201d?",
      "answer": "Quadrats estimate abundance; transects show how distribution changes across an area.",
      "explain": "The best summary is: Quadrats estimate abundance; transects show how distribution changes across an area.",
      "options": [
        "Quadrats estimate abundance; transects show how distribution changes across an area.",
        "Organisms compete for limited resources; adaptations improve survival in an environment.",
        "Arrows show the direction of biomass transfer, from food to the organism that eats it.",
        "Materials cycle between organisms and the environment; decomposers return nutrients."
      ]
    },
    "foundation": {},
    "reason": "Reviewed Ecology item: food-chain producers, consumers and arrow direction match the deployed audited Foundation lesson extract. No biomass-loss detail or excluded food-security content in this question, options, answer or feedback. Release unchanged."
  },
  "bio-deep-ecology-evaluating-interventions-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cEvaluating interventions\u201d?",
      "answer": "Compare benefits, costs and evidence before judging a conservation or farming action.",
      "explain": "The best summary is: Compare benefits, costs and evidence before judging a conservation or farming action.",
      "options": [
        "Materials cycle between organisms and the environment; decomposers return nutrients.",
        "Quadrats estimate abundance; transects show how distribution changes across an area.",
        "Compare benefits, costs and evidence before judging a conservation or farming action.",
        "Arrows show the direction of biomass transfer, from food to the organism that eats it."
      ]
    },
    "foundation": {},
    "reason": "Reviewed Ecology item: food-chain producers, consumers and arrow direction match the deployed audited Foundation lesson extract. No biomass-loss detail or excluded food-security content in this question, options, answer or feedback. Release unchanged."
  },
  "bio-deep-ecology-human-impacts-and-biodiversity-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cHuman impacts and biodiversity\u201d?",
      "answer": "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.",
      "explain": "The best summary is: Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.",
      "options": [
        "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.",
        "A community is all the populations living together; an ecosystem includes them and their environment.",
        "Organisms compete for limited resources; adaptations improve survival in an environment.",
        "Arrows show the direction of biomass transfer, from food to the organism that eats it."
      ]
    },
    "foundation": {},
    "reason": "Reviewed Ecology item: food-chain producers, consumers and arrow direction match the deployed audited Foundation lesson extract. No biomass-loss detail or excluded food-security content in this question, options, answer or feedback. Release unchanged."
  },
  "aqa-bio-step-ecology-2-0": {
    "tier": "both",
    "source": {
      "q": "Which organism is the producer in a food chain?",
      "answer": "A photosynthetic plant",
      "explain": "Arrows show the direction of biomass transfer, from food to the organism that eats it.",
      "options": [
        "A carnivore",
        "A decomposer only",
        "A photosynthetic plant",
        "A top predator"
      ]
    },
    "foundation": {},
    "reason": "Reviewed Ecology item: food-chain producers, consumers and arrow direction match the deployed audited Foundation lesson extract. No biomass-loss detail or excluded food-security content in this question, options, answer or feedback. Release unchanged."
  },
  "aqa-bio-step-ecology-2-1": {
    "tier": "both",
    "source": {
      "q": "What do food-chain arrows show?",
      "answer": "Direction of biomass transfer",
      "explain": "Arrows show the direction of biomass transfer, from food to the organism that eats it.",
      "options": [
        "Direction animals walk",
        "Direction sunlight travels",
        "Direction water always flows",
        "Direction of biomass transfer"
      ]
    },
    "foundation": {},
    "reason": "Reviewed Ecology item: food-chain producers, consumers and arrow direction match the deployed audited Foundation lesson extract. No biomass-loss detail or excluded food-security content in this question, options, answer or feedback. Release unchanged."
  },
  "bio-deep-ecology-food-chains-and-biomass-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cFood chains and biomass\u201d?",
      "answer": "Arrows show the direction of biomass transfer, from food to the organism that eats it.",
      "explain": "The best summary is: Arrows show the direction of biomass transfer, from food to the organism that eats it.",
      "options": [
        "Organisms compete for limited resources; adaptations improve survival in an environment.",
        "Arrows show the direction of biomass transfer, from food to the organism that eats it.",
        "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.",
        "A community is all the populations living together; an ecosystem includes them and their environment."
      ]
    },
    "foundation": {},
    "reason": "Reviewed Ecology item: food-chain producers, consumers and arrow direction match the deployed audited Foundation lesson extract. No biomass-loss detail or excluded food-security content in this question, options, answer or feedback. Release unchanged."
  },
  "bio-deep-ecology-food-chains-and-biomass-keyword": {
    "tier": "both",
    "source": {
      "q": "Which key term is most closely linked to \u201cFood chains and biomass\u201d?",
      "answer": "producer",
      "explain": "producer is a key term for this lesson step. A strong answer also explains what it means in context.",
      "options": [
        "ecosystem",
        "competition",
        "producer",
        "population"
      ]
    },
    "foundation": {},
    "reason": "Reviewed Ecology item: food-chain producers, consumers and arrow direction match the deployed audited Foundation lesson extract. No biomass-loss detail or excluded food-security content in this question, options, answer or feedback. Release unchanged."
  },
  "bio-deep-ecology-food-chains-and-biomass-justify": {
    "tier": "both",
    "source": {
      "q": "Grass \u2192 rabbit \u2192 fox. Which organism is the primary consumer? A student answers: \u201cRabbit.\u201d Explain why that answer is correct.",
      "answer": "Arrows show the direction of biomass transfer, from food to the organism that eats it. The rabbit eats the producer, grass, so it is the first consumer.",
      "explain": "A strong justification states the fact, gives the biological reason and links it to the situation.",
      "options": null
    },
    "foundation": {},
    "reason": "Reviewed Ecology item: food-chain producers, consumers and arrow direction match the deployed audited Foundation lesson extract. No biomass-loss detail or excluded food-security content in this question, options, answer or feedback. Release unchanged."
  }
};
const ECOLOGY_BATCH_L_TIERS = {
  "bio-deep-ecology-food-chains-and-biomass-explain": {
    "tier": "both",
    "source": {
      "q": "Explain \u201cFood chains and biomass\u201d in two linked sentences.",
      "answer": "Arrows show the direction of biomass transfer, from food to the organism that eats it.",
      "explain": "Use the key words producer and biomass, then link the process or structure to its effect.",
      "options": null
    },
    "foundation": {},
    "reason": "Existing audited Ecology Foundation extract supports this question; release unchanged; no excluded detail in question, answer or feedback."
  },
  "bio-deep-ecology-food-chains-and-biomass-improve": {
    "tier": "both",
    "source": {
      "q": "A student writes only \u201cproducer\u201d. Improve this into a complete answer about Food chains and biomass.",
      "answer": "Arrows show the direction of biomass transfer, from food to the organism that eats it.",
      "explain": "Naming a keyword alone is not enough. Arrows point towards the eater.",
      "options": null
    },
    "foundation": {},
    "reason": "Existing audited Ecology Foundation extract supports this question; release unchanged; no excluded detail in question, answer or feedback."
  },
  "bio-deep-ecology-food-chains-and-biomass-grade9": {
    "tier": "higher",
    "source": {
      "q": "Write a Grade 8/9 response for this focus: Arrows point towards the eater.",
      "answer": "Arrows show the direction of biomass transfer, from food to the organism that eats it. Example application: Rabbit.",
      "explain": "Top responses use precise terminology, a linked cause-and-effect chain and a relevant application or example.",
      "options": null
    },
    "foundation": {},
    "reason": "Explicit Grade 8/9 response retained as Higher-only without rewriting."
  },
  "aqa-bio-step-ecology-5-0": {
    "tier": "both",
    "source": {
      "q": "What does biodiversity describe?",
      "answer": "Variety of living organisms",
      "explain": "Biodiversity supports stable ecosystems; food security depends on reliable supplies.",
      "options": [
        "Only crop yield",
        "Variety of living organisms",
        "Only soil pH",
        "Only one population size"
      ]
    },
    "foundation": {
      "explain": "Biodiversity is the variety of living organisms."
    },
    "reason": "Existing audited Ecology Foundation extract supports this question; food-security clauses separated using existing biodiversity wording."
  },
  "bio-deep-ecology-biodiversity-and-food-security-keyword": {
    "tier": "both",
    "source": {
      "q": "Which key term is most closely linked to \u201cBiodiversity and food security\u201d?",
      "answer": "biodiversity",
      "explain": "biodiversity is a key term for this lesson step. A strong answer also explains what it means in context.",
      "options": [
        "population",
        "ecosystem",
        "competition",
        "biodiversity"
      ]
    },
    "foundation": {},
    "reason": "Existing audited Ecology Foundation extract supports this question; release unchanged; no excluded detail in question, answer or feedback."
  },
  "bio-deep-ecology-biodiversity-and-food-security-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cBiodiversity and food security\u201d?",
      "answer": "Biodiversity supports stable ecosystems; food security depends on reliable supplies.",
      "explain": "The best summary is: Biodiversity supports stable ecosystems; food security depends on reliable supplies.",
      "options": [
        "Materials cycle between organisms and the environment; decomposers return nutrients.",
        "Quadrats estimate abundance; transects show how distribution changes across an area.",
        "Biodiversity supports stable ecosystems; food security depends on reliable supplies.",
        "Arrows show the direction of biomass transfer, from food to the organism that eats it."
      ]
    },
    "foundation": {
      "q": "Which statement best summarises \u201cBiodiversity\u201d?",
      "answer": "Biodiversity is the variety of living organisms.",
      "options": [
        "Materials cycle between organisms and the environment; decomposers return nutrients.",
        "Quadrats estimate abundance; transects show how distribution changes across an area.",
        "Biodiversity is the variety of living organisms.",
        "Arrows show the direction of biomass transfer, from food to the organism that eats it."
      ],
      "explain": "The best summary is: Biodiversity is the variety of living organisms."
    },
    "reason": "Existing audited Ecology Foundation extract supports this question; food-security clauses separated using existing biodiversity wording."
  },
  "bio-deep-ecology-biodiversity-and-food-security-justify": {
    "tier": "both",
    "source": {
      "q": "A farmer removes hedgerows to enlarge fields. What could be an ecological cost? A student answers: \u201cLower biodiversity.\u201d Explain why that answer is correct.",
      "answer": "Biodiversity supports stable ecosystems; food security depends on reliable supplies. Removing habitat can reduce the number of species supported.",
      "explain": "A strong justification states the fact, gives the biological reason and links it to the situation.",
      "options": null
    },
    "foundation": {
      "answer": "Biodiversity is the variety of living organisms. Removing habitat can reduce the number of species supported."
    },
    "reason": "Existing audited Ecology Foundation extract supports this question; food-security clauses separated using existing biodiversity wording."
  },
  "bio-deep-ecology-biodiversity-and-food-security-improve": {
    "tier": "both",
    "source": {
      "q": "A student writes only \u201cbiodiversity\u201d. Improve this into a complete answer about Biodiversity and food security.",
      "answer": "Biodiversity supports stable ecosystems; food security depends on reliable supplies.",
      "explain": "Naming a keyword alone is not enough. Consider both environmental and human impacts.",
      "options": null
    },
    "foundation": {
      "q": "A student writes only \u201cbiodiversity\u201d. Improve this into a complete answer about Biodiversity.",
      "answer": "Biodiversity is the variety of living organisms. Habitat loss, pollution and climate change can reduce it."
    },
    "reason": "Existing audited Ecology Foundation extract supports this question; food-security clauses separated using existing biodiversity wording."
  }
};
const BIOLOGY_BATCH_M_TIERS = {
  "aqa-bio-step-ecology-5-1": {
    "tier": "out-of-scope",
    "source": {
      "q": "Which may improve food security?",
      "answer": "Reliable crop supply",
      "explain": "Biodiversity supports stable ecosystems; food security depends on reliable supplies.",
      "options": [
        "Destroying every pollinator",
        "Losing fertile soil",
        "Reliable crop supply",
        "Increasing disease without control"
      ]
    },
    "foundation": {},
    "reason": "Food-security question is outside Trilogy audit scope, not established as Higher-only Trilogy. Foundation excluded; original Higher content retained as legacy material."
  },
  "bio-deep-ecology-biodiversity-and-food-security-explain": {
    "tier": "both",
    "source": {
      "q": "Explain \u201cBiodiversity and food security\u201d in two linked sentences.",
      "answer": "Biodiversity supports stable ecosystems; food security depends on reliable supplies.",
      "explain": "Use the key words biodiversity and food security, then link the process or structure to its effect.",
      "options": null
    },
    "foundation": {
      "q": "Explain \u201cBiodiversity\u201d in two linked sentences.",
      "answer": "Biodiversity is the variety of living organisms. Habitat loss, pollution and climate change can reduce it.",
      "explain": "Consider both environmental and human impacts."
    },
    "reason": "Use existing audited biodiversity extract and existing feedback; remove food-security demand."
  },
  "bio-deep-ecology-biodiversity-and-food-security-grade9": {
    "tier": "higher",
    "source": {
      "q": "Write a Grade 8/9 response for this focus: Consider both environmental and human impacts.",
      "answer": "Biodiversity supports stable ecosystems; food security depends on reliable supplies. Example application: Lower biodiversity.",
      "explain": "Top responses use precise terminology, a linked cause-and-effect chain and a relevant application or example.",
      "options": null
    },
    "foundation": {},
    "reason": "Explicit Grade 8/9 response retains original Higher access; no Foundation variant."
  },
  "aqa-bio-step-bioenergetics-1-0": {
    "tier": "both",
    "source": {
      "q": "What is a limiting factor?",
      "answer": "The factor in shortest effective supply",
      "explain": "The slowest available input limits photosynthesis: light, carbon dioxide or temperature.",
      "options": [
        "The largest leaf",
        "The factor in shortest effective supply",
        "Any product of the reaction",
        "A factor that never changes"
      ]
    },
    "foundation": {},
    "reason": "Existing audited Foundation scope supports unchanged content."
  },
  "aqa-bio-step-bioenergetics-1-1": {
    "tier": "higher",
    "source": {
      "q": "Why can increasing light stop raising photosynthesis rate?",
      "answer": "A different factor becomes limiting",
      "explain": "The slowest available input limits photosynthesis: light, carbon dioxide or temperature.",
      "options": [
        "Chlorophyll vanishes instantly",
        "Glucose turns into light",
        "A different factor becomes limiting",
        "The graph must always fall"
      ]
    },
    "foundation": {},
    "reason": "Interaction of limiting factors is excluded from audited Foundation scope; preserve original Higher question."
  },
  "bio-deep-bioenergetics-limiting-factors-summary": {
    "tier": "both",
    "source": {
      "q": "Which statement best summarises \u201cLimiting factors\u201d?",
      "answer": "The slowest available input limits photosynthesis: light, carbon dioxide or temperature.",
      "explain": "The best summary is: The slowest available input limits photosynthesis: light, carbon dioxide or temperature.",
      "options": [
        "The slowest available input limits photosynthesis: light, carbon dioxide or temperature.",
        "Improving one factor stops helping when another factor becomes limiting.",
        "Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
        "With oxygen, cells release energy from glucose and make carbon dioxide and water."
      ]
    },
    "foundation": {
      "options": [
        "The slowest available input limits photosynthesis: light, carbon dioxide or temperature.",
        "A reflex is a fast automatic response carried through a reflex arc.",
        "Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
        "With oxygen, cells release energy from glucose and make carbon dioxide and water."
      ]
    },
    "reason": "Shared basic limiting-factor answer retained; Higher interacting-factor distractor replaced with existing shared reflex wording."
  },
  "bio-deep-bioenergetics-limiting-factors-keyword": {
    "tier": "both",
    "source": {
      "q": "Which key term is most closely linked to \u201cLimiting factors\u201d?",
      "answer": "limiting factor",
      "explain": "limiting factor is a key term for this lesson step. A strong answer also explains what it means in context.",
      "options": [
        "aerobic",
        "limiting factor",
        "photosynthesis",
        "chlorophyll"
      ]
    },
    "foundation": {},
    "reason": "Existing audited Foundation scope supports unchanged content."
  },
  "bio-deep-bioenergetics-limiting-factors-explain": {
    "tier": "both",
    "source": {
      "q": "Explain \u201cLimiting factors\u201d in two linked sentences.",
      "answer": "The slowest available input limits photosynthesis: light, carbon dioxide or temperature.",
      "explain": "Use the key words limiting factor and rate, then link the process or structure to its effect.",
      "options": null
    },
    "foundation": {},
    "reason": "Existing audited Foundation scope supports unchanged content."
  }
};
const BIOLOGY_BATCH_N_TIERS = {
  "bio-deep-bioenergetics-limiting-factors-justify": {
    "tier": "higher",
    "source": {
      "q": "Light intensity increases but the photosynthesis graph becomes flat. Why? A student answers: \u201cAnother factor is limiting.\u201d Explain why that answer is correct.",
      "answer": "The slowest available input limits photosynthesis: light, carbon dioxide or temperature. Light is no longer the limiting factor; carbon dioxide or temperature may now limit the rate.",
      "explain": "A strong justification states the fact, gives the biological reason and links it to the situation.",
      "options": null
    },
    "foundation": {},
    "reason": "Interacting-factor graph justification / explicit Grade 8/9 demand retained on Higher, excluded from audited Foundation."
  },
  "bio-deep-bioenergetics-limiting-factors-improve": {
    "tier": "both",
    "source": {
      "q": "A student writes only \u201climiting factor\u201d. Improve this into a complete answer about Limiting factors.",
      "answer": "The slowest available input limits photosynthesis: light, carbon dioxide or temperature.",
      "explain": "Naming a keyword alone is not enough. Explain why a graph levels off.",
      "options": null
    },
    "foundation": {
      "explain": "Use the key words limiting factor and rate, then link the process or structure to its effect."
    },
    "reason": "Existing basic limiting-factor answer retained; Higher graph-interaction feedback replaced with existing shared feedback."
  },
  "bio-deep-bioenergetics-limiting-factors-grade9": {
    "tier": "higher",
    "source": {
      "q": "Write a Grade 8/9 response for this focus: Explain why a graph levels off.",
      "answer": "The slowest available input limits photosynthesis: light, carbon dioxide or temperature. Example application: Another factor is limiting.",
      "explain": "Top responses use precise terminology, a linked cause-and-effect chain and a relevant application or example.",
      "options": null
    },
    "foundation": {},
    "reason": "Interacting-factor graph justification / explicit Grade 8/9 demand retained on Higher, excluded from audited Foundation."
  }
};
const REVIEWED_QUESTION_TIERS = {...BLOOD_GLUCOSE_TIERS,...REPRODUCTIVE_HORMONE_TIERS,...STABLE_CONDITIONS_TIERS,...PATHOGENS_SUMMARY_TIERS,...DEFENCES_SUMMARY_TIERS,...SUMMARY_BATCH_G_TIERS,...HOMEOSTASIS_BATCH_H_TIERS,...INHERITANCE_BATCH_I_TIERS,...SUMMARY_BATCH_J_TIERS,...ECOLOGY_BATCH_K_TIERS,...ECOLOGY_BATCH_L_TIERS,...BIOLOGY_BATCH_M_TIERS,...BIOLOGY_BATCH_N_TIERS};
