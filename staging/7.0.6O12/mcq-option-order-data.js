'use strict';
// W1 stored orders preserved; Y adds one Foundation safety variant at its original answer position.
const MCQ_OPTION_ORDERS={
  "[\"Biology\",\"build4-0\",\"Which structure controls the activities of an animal cell?\",\"Nucleus\",[\"Cell wall\",\"Chloroplast\",\"Nucleus\",\"Vacuole\"],\"The nucleus contains genetic material and helps control cell activities.\"]": [
    "Cell wall",
    "Chloroplast",
    "Nucleus",
    "Vacuole"
  ],
  "[\"Biology\",\"build4-1\",\"What is a pathogen?\",\"A disease-causing microorganism\",[\"A body organ\",\"A disease-causing microorganism\",\"A type of antibody\",\"A vitamin\"],\"Pathogens are microorganisms that can cause disease.\"]": [
    "A type of antibody",
    "A body organ",
    "A vitamin",
    "A disease-causing microorganism"
  ],
  "[\"Biology\",\"bio2-ribosome\",\"Which cell structure makes proteins?\",\"Ribosomes\",[\"Cell walls\",\"Mitochondria\",\"Ribosomes\",\"Vacuoles\"],\"Ribosomes assemble amino acids into proteins.\"]": [
    "Mitochondria",
    "Vacuoles",
    "Ribosomes",
    "Cell walls"
  ],
  "[\"Biology\",\"bio2-lipase\",\"Which enzyme breaks down lipids?\",\"Lipase\",[\"Amylase\",\"Bile\",\"Lipase\",\"Protease\"],\"Lipase produces fatty acids and glycerol.\"]": [
    "Amylase",
    "Lipase",
    "Protease",
    "Bile"
  ],
  "[\"Biology\",\"bio2-valve\",\"What is the function of heart valves?\",\"Prevent backflow of blood\",[\"Digest fats\",\"Make oxygen\",\"Prevent backflow of blood\",\"Produce red blood cells\"],\"Valves keep blood moving in the required direction.\"]": [
    "Make oxygen",
    "Produce red blood cells",
    "Prevent backflow of blood",
    "Digest fats"
  ],
  "[\"Biology\",\"bio2-placebo\",\"What is the purpose of a placebo in a suitable clinical trial?\",\"Provide a comparison for effects unrelated to the active medicine\",[\"Guarantee a cure\",\"Increase the dose\",\"Provide a comparison for effects unrelated to the active medicine\",\"Replace random allocation\"],\"It helps distinguish the medicine’s effect from expectations and other influences.\"]": [
    "Provide a comparison for effects unrelated to the active medicine",
    "Guarantee a cure",
    "Replace random allocation",
    "Increase the dose"
  ],
  "[\"Biology\",\"bio2-photo-gas\",\"Which gas is a reactant in photosynthesis?\",\"Carbon dioxide\",[\"Carbon dioxide\",\"Hydrogen\",\"Nitrogen\",\"Oxygen\"],\"Plants use carbon dioxide and water to produce glucose and oxygen.\"]": [
    "Oxygen",
    "Nitrogen",
    "Carbon dioxide",
    "Hydrogen"
  ],
  "[\"Biology\",\"bio2-effector\",\"Which structure can act as an effector?\",\"A muscle\",[\"A light ray\",\"A muscle\",\"A stimulus\",\"An impulse\"],\"Muscles contract and glands secrete in response to signals.\"]": [
    "A light ray",
    "A stimulus",
    "An impulse",
    "A muscle"
  ],
  "[\"Biology\",\"bio2-insulin\",\"Which organ releases insulin?\",\"Pancreas\",[\"Kidney\",\"Liver\",\"Lung\",\"Pancreas\"],\"The pancreas responds to changes in blood glucose.\"]": [
    "Pancreas",
    "Liver",
    "Kidney",
    "Lung"
  ],
  "[\"Biology\",\"bio2-allele\",\"What is an allele?\",\"A version of a gene\",[\"A cell membrane\",\"A type of organ\",\"A version of a gene\",\"A whole organism\"],\"Different alleles can contribute to differences in phenotype.\"]": [
    "A whole organism",
    "A type of organ",
    "A cell membrane",
    "A version of a gene"
  ],
  "[\"Biology\",\"bio2-abiotic\",\"Which is an abiotic factor?\",\"Temperature\",[\"Competition\",\"Disease organisms\",\"Predators\",\"Temperature\"],\"Abiotic factors are non-living environmental conditions.\"]": [
    "Predators",
    "Temperature",
    "Competition",
    "Disease organisms"
  ],
  "[\"Biology\",\"bio2-ovulation\",\"Which hormone triggers ovulation?\",\"LH\",[\"ADH\",\"Glucagon\",\"Insulin\",\"LH\"],\"LH triggers egg release; FSH promotes maturation.\"]": [
    "Insulin",
    "LH",
    "ADH",
    "Glucagon"
  ],
  "[\"Biology\",\"aqa-cell-nucleus-label\",\"On the cell diagram, what does A point to?\",\"Nucleus\",[\"Cell membrane\",\"Cytoplasm\",\"Nucleus\",\"Ribosome\"],\"The central structure shown is the nucleus, which holds DNA.\"]": [
    "Cell membrane",
    "Ribosome",
    "Nucleus",
    "Cytoplasm"
  ],
  "[\"Biology\",\"aqa-cell-protein-maker\",\"Which part directly assembles proteins?\",\"Ribosomes\",[\"Cell membrane\",\"Nucleus\",\"Ribosomes\",\"Vacuole\"],\"Ribosomes build proteins; the nucleus stores the instructions.\"]": [
    "Nucleus",
    "Cell membrane",
    "Vacuole",
    "Ribosomes"
  ],
  "[\"Biology\",\"aqa-cell-bacteria-dna\",\"Which statement about bacterial DNA is correct?\",\"It is not enclosed in a nucleus\",[\"Bacteria have no DNA\",\"It is inside a nucleus\",\"It is not enclosed in a nucleus\",\"It is only found in mitochondria\"],\"Bacteria are prokaryotes, so their DNA is not enclosed by a nucleus.\"]": [
    "It is not enclosed in a nucleus",
    "It is inside a nucleus",
    "It is only found in mitochondria",
    "Bacteria have no DNA"
  ],
  "[\"Biology\",\"aqa-cell-sperm-tail\",\"A sperm cell has a long tail. What is the clearest link between feature and function?\",\"The tail helps it swim to the egg\",[\"The tail absorbs water\",\"The tail helps it swim to the egg\",\"The tail makes proteins\",\"The tail stores DNA\"],\"Always link an adaptation to the job it helps the cell perform.\"]": [
    "The tail helps it swim to the egg",
    "The tail makes proteins",
    "The tail stores DNA",
    "The tail absorbs water"
  ],
  "[\"Biology\",\"aqa-cell-image-magnification\",\"A cell image is 20 mm wide and the real cell is 0.05 mm wide. What is the magnification?\",\"×400\",[\"×1000\",\"×4\",\"×40\",\"×400\"],\"20 ÷ 0.05 = 400. The units already match.\"]": [
    "×4",
    "×400",
    "×40",
    "×1000"
  ],
  "[\"Biology\",\"aqa-cell-micro-sequence\",\"Which sequence gives a sensible way to view a new specimen?\",\"Low power → focus → higher power\",[\"Focus without a slide → high power\",\"Higher power → remove slide → focus\",\"Low power → focus → higher power\",\"Stain → highest power → remove slide\"],\"Start low so the specimen is easier to find and focus.\"]": [
    "Higher power → remove slide → focus",
    "Stain → highest power → remove slide",
    "Focus without a slide → high power",
    "Low power → focus → higher power"
  ],
  "[\"Biology\",\"aqa-cell-water-direction\",\"In the diagram, which way is the net movement of water?\",\"From dilute to concentrated\",[\"From concentrated to dilute\",\"From dilute to concentrated\",\"No movement at all\",\"Only from left to right because of gravity\"],\"Osmosis is net movement of water from dilute to more concentrated solution through a partially permeable membrane.\"]": [
    "From concentrated to dilute",
    "No movement at all",
    "Only from left to right because of gravity",
    "From dilute to concentrated"
  ],
  "[\"Biology\",\"aqa-cell-potato-mass\",\"A potato piece loses mass in concentrated sugar solution. Why?\",\"Water leaves its cells by osmosis\",[\"Sugar makes new potato cells\",\"The potato photosynthesises\",\"Water enters by active transport\",\"Water leaves its cells by osmosis\"],\"Water leaves the cells overall, reducing mass.\"]": [
    "Sugar makes new potato cells",
    "Water leaves its cells by osmosis",
    "Water enters by active transport",
    "The potato photosynthesises"
  ],
  "[\"Biology\",\"aqa-cell-ion-transport\",\"In the diagram, ions move from low to high concentration. What supplies the needed energy?\",\"Respiration\",[\"Diffusion\",\"Magnification\",\"Osmosis\",\"Respiration\"],\"Active transport uses energy released by respiration.\"]": [
    "Diffusion",
    "Osmosis",
    "Respiration",
    "Magnification"
  ],
  "[\"Biology\",\"aqa-cell-transport-contrast\",\"Which process can move substances against a concentration gradient?\",\"Active transport\",[\"Active transport\",\"Diffusion\",\"Evaporation\",\"Osmosis\"],\"Active transport can move from low to high concentration using energy.\"]": [
    "Diffusion",
    "Active transport",
    "Osmosis",
    "Evaporation"
  ],
  "[\"Biology\",\"aqa-cell-mitosis-sequence\",\"Which order describes mitosis for growth?\",\"Copy DNA → divide → two identical cells\",[\"Copy DNA → divide → two identical cells\",\"Divide → lose DNA → one cell\",\"Join two gametes → clone\",\"Specialise → no DNA → two cells\"],\"DNA is copied before division; mitosis normally gives two identical daughter cells.\"]": [
    "Divide → lose DNA → one cell",
    "Copy DNA → divide → two identical cells",
    "Specialise → no DNA → two cells",
    "Join two gametes → clone"
  ],
  "[\"Biology\",\"aqa-cell-stem-potential\",\"Why are stem cells useful for repair?\",\"They can become specialised cells\",[\"They can become specialised cells\",\"They have no DNA\",\"They make antibodies\",\"They never divide\"],\"Stem cells can divide and develop into specialised cells.\"]": [
    "They have no DNA",
    "They never divide",
    "They can become specialised cells",
    "They make antibodies"
  ],
  "[\"Biology\",\"aqa-cell-scope-order\",\"What is the best first step when using a light microscope?\",\"Start with the lowest-power objective\",[\"Guess the magnification\",\"Remove the eyepiece\",\"Start at maximum power\",\"Start with the lowest-power objective\"],\"Low power gives a wider view for locating and focusing the specimen.\"]": [
    "Start at maximum power",
    "Remove the eyepiece",
    "Start with the lowest-power objective",
    "Guess the magnification"
  ],
  "[\"Biology\",\"aqa-cell-drawing-label\",\"Which is best for a biological drawing?\",\"Clear outlines and straight label lines\",[\"An imagined structure not visible\",\"Clear outlines and straight label lines\",\"Colour only with no scale\",\"Heavy shading and no labels\"],\"Draw what is observed, with clear outlines and labels.\"]": [
    "Heavy shading and no labels",
    "Clear outlines and straight label lines",
    "Colour only with no scale",
    "An imagined structure not visible"
  ],
  "[\"Biology\",\"aqa-bio-step-organisation-0-0\",\"Which level is made from several tissues?\",\"Organ\",[\"Cell\",\"Gene\",\"Organ\",\"Population\"],\"Similar cells form tissues; tissues form organs; organs work together in systems.\"]": [
    "Cell",
    "Organ",
    "Population",
    "Gene"
  ],
  "[\"Biology\",\"aqa-bio-step-organisation-0-1\",\"Which sequence goes from smallest to largest?\",\"Cell → tissue → organ → organ system\",[\"Cell → organ system → tissue → organ\",\"Cell → tissue → organ → organ system\",\"Organ → cell → tissue → system\",\"Tissue → cell → system → organ\"],\"Similar cells form tissues; tissues form organs; organs work together in systems.\"]": [
    "Cell → tissue → organ → organ system",
    "Organ → cell → tissue → system",
    "Tissue → cell → system → organ",
    "Cell → organ system → tissue → organ"
  ],
  "[\"Biology\",\"aqa-bio-step-organisation-1-0\",\"What does protease break down?\",\"Proteins\",[\"Lipids\",\"Proteins\",\"Starch\",\"Water\"],\"Enzymes speed up digestion by breaking large food molecules into smaller soluble ones.\"]": [
    "Lipids",
    "Starch",
    "Water",
    "Proteins"
  ],
  "[\"Biology\",\"aqa-bio-step-organisation-1-1\",\"Why can a very high temperature slow an enzyme?\",\"Its active site changes shape\",[\"It becomes a cell\",\"It gains more substrate\",\"It turns into bile\",\"Its active site changes shape\"],\"Enzymes speed up digestion by breaking large food molecules into smaller soluble ones.\"]": [
    "It becomes a cell",
    "It gains more substrate",
    "Its active site changes shape",
    "It turns into bile"
  ],
  "[\"Biology\",\"aqa-bio-step-organisation-2-0\",\"Where is bile made?\",\"Liver\",[\"Kidney\",\"Liver\",\"Pancreas\",\"Stomach\"],\"Bile neutralises stomach acid and emulsifies fats, giving lipase more surface to work on.\"]": [
    "Liver",
    "Stomach",
    "Pancreas",
    "Kidney"
  ],
  "[\"Biology\",\"aqa-bio-step-organisation-2-1\",\"What does bile do to acidic food from the stomach?\",\"Neutralises it\",[\"Digests protein itself\",\"Makes it more acidic\",\"Neutralises it\",\"Turns it into glucose\"],\"Bile neutralises stomach acid and emulsifies fats, giving lipase more surface to work on.\"]": [
    "Turns it into glucose",
    "Makes it more acidic",
    "Digests protein itself",
    "Neutralises it"
  ],
  "[\"Biology\",\"aqa-bio-step-organisation-3-0\",\"Which side pumps oxygenated blood to the body?\",\"Left side\",[\"Both sides equally\",\"Left side\",\"Neither side\",\"Right side\"],\"The right side pumps blood to the lungs; the left side pumps oxygenated blood to the body.\"]": [
    "Right side",
    "Left side",
    "Both sides equally",
    "Neither side"
  ],
  "[\"Biology\",\"aqa-bio-step-organisation-3-1\",\"What do valves in the heart prevent?\",\"Backflow of blood\",[\"Backflow of blood\",\"Blood-cell production\",\"Digestion\",\"Gas exchange\"],\"The right side pumps blood to the lungs; the left side pumps oxygenated blood to the body.\"]": [
    "Gas exchange",
    "Backflow of blood",
    "Blood-cell production",
    "Digestion"
  ],
  "[\"Biology\",\"aqa-bio-step-organisation-4-0\",\"Which feature gives alveoli a large exchange area?\",\"Many small alveoli\",[\"A single large air sac\",\"Many small alveoli\",\"No blood supply\",\"Thick walls\"],\"Alveoli exchange gases quickly because they have thin walls, a large area and a good blood supply.\"]": [
    "Many small alveoli",
    "Thick walls",
    "No blood supply",
    "A single large air sac"
  ],
  "[\"Biology\",\"aqa-bio-step-organisation-4-1\",\"Which gas moves from blood into the alveolus?\",\"Carbon dioxide\",[\"Carbon dioxide\",\"Glucose\",\"Nitrogen only\",\"Oxygen\"],\"Alveoli exchange gases quickly because they have thin walls, a large area and a good blood supply.\"]": [
    "Oxygen",
    "Carbon dioxide",
    "Nitrogen only",
    "Glucose"
  ],
  "[\"Biology\",\"aqa-bio-step-organisation-5-0\",\"Which tissue carries water and mineral ions upward?\",\"Xylem\",[\"Epidermis\",\"Meristem\",\"Phloem\",\"Xylem\"],\"Xylem carries water and minerals upward; phloem moves dissolved sugars around the plant.\"]": [
    "Phloem",
    "Epidermis",
    "Meristem",
    "Xylem"
  ],
  "[\"Biology\",\"aqa-bio-step-organisation-5-1\",\"What is sugar movement in phloem called?\",\"Translocation\",[\"Osmosis\",\"Translocation\",\"Transpiration\",\"Ventilation\"],\"Xylem carries water and minerals upward; phloem moves dissolved sugars around the plant.\"]": [
    "Transpiration",
    "Osmosis",
    "Translocation",
    "Ventilation"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-0-0\",\"Which is a type of pathogen?\",\"Virus\",[\"Antibody\",\"Platelet\",\"Red blood cell\",\"Virus\"],\"Pathogens cause infectious disease and can spread through air, water or direct contact.\"]": [
    "Virus",
    "Red blood cell",
    "Antibody",
    "Platelet"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-0-1\",\"Which action can reduce waterborne spread?\",\"Treat drinking water\",[\"Increase contamination\",\"Share cups\",\"Stop handwashing\",\"Treat drinking water\"],\"Pathogens cause infectious disease and can spread through air, water or direct contact.\"]": [
    "Share cups",
    "Stop handwashing",
    "Increase contamination",
    "Treat drinking water"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-1-0\",\"Which is a physical first-line barrier?\",\"Skin\",[\"Antibiotic tablet\",\"Antibody\",\"Insulin\",\"Skin\"],\"Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.\"]": [
    "Antibody",
    "Skin",
    "Antibiotic tablet",
    "Insulin"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-1-1\",\"What does an antibody bind to?\",\"A matching antigen\",[\"A matching antigen\",\"A red blood cell only\",\"Any food molecule\",\"Oxygen\"],\"Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.\"]": [
    "A matching antigen",
    "Any food molecule",
    "Oxygen",
    "A red blood cell only"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-2-0\",\"Which treatment works against bacteria but not viruses?\",\"Antibiotic\",[\"Antibiotic\",\"Insulin\",\"Painkiller as a cure\",\"Vaccine only after infection\"],\"Vaccines prepare the immune system; antibiotics kill bacteria, not viruses.\"]": [
    "Vaccine only after infection",
    "Painkiller as a cure",
    "Antibiotic",
    "Insulin"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-2-1\",\"What is the main purpose of vaccination?\",\"Prepare a specific immune response\",[\"Change blood type\",\"Kill every pathogen instantly\",\"Prepare a specific immune response\",\"Replace white blood cells\"],\"Vaccines prepare the immune system; antibiotics kill bacteria, not viruses.\"]": [
    "Kill every pathogen instantly",
    "Prepare a specific immune response",
    "Replace white blood cells",
    "Change blood type"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-3-0\",\"What is tested before a new medicine is widely used?\",\"Safety and effectiveness\",[\"Advertising appeal\",\"Colour alone\",\"Only the name\",\"Safety and effectiveness\"],\"New medicines are tested for safety, dose and effectiveness before wide use.\"]": [
    "Safety and effectiveness",
    "Colour alone",
    "Advertising appeal",
    "Only the name"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-3-1\",\"Why randomise a clinical trial?\",\"Reduce systematic differences between groups\",[\"Ensure everyone gets the drug\",\"Guarantee no side effects\",\"Reduce systematic differences between groups\",\"Remove the need for data\"],\"New medicines are tested for safety, dose and effectiveness before wide use.\"]": [
    "Reduce systematic differences between groups",
    "Ensure everyone gets the drug",
    "Remove the need for data",
    "Guarantee no side effects"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-4-0\",\"Which is a physical plant defence?\",\"Cell wall\",[\"Antibiotic tablet\",\"Cell wall\",\"Haemoglobin\",\"Insulin\"],\"Plants can detect and resist pathogens using barriers and chemical defences.\"]": [
    "Insulin",
    "Cell wall",
    "Antibiotic tablet",
    "Haemoglobin"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-4-1\",\"Which is a chemical plant defence?\",\"Antimicrobial chemicals\",[\"A heart valve\",\"A neurone\",\"A ribosome\",\"Antimicrobial chemicals\"],\"Plants can detect and resist pathogens using barriers and chemical defences.\"]": [
    "A heart valve",
    "Antimicrobial chemicals",
    "A neurone",
    "A ribosome"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-5-0\",\"What improves reliability?\",\"Repeated measurements\",[\"Changing every variable\",\"Ignoring anomalies\",\"One result only\",\"Repeated measurements\"],\"A claim is stronger when the method is fair, the sample is large and results can be repeated.\"]": [
    "Changing every variable",
    "One result only",
    "Repeated measurements",
    "Ignoring anomalies"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-5-1\",\"Which statement is a fair conclusion?\",\"One supported by the measured results\",[\"One based on hope\",\"One supported by the measured results\",\"One that always claims proof\",\"One that ignores controls\"],\"A claim is stronger when the method is fair, the sample is large and results can be repeated.\"]": [
    "One based on hope",
    "One supported by the measured results",
    "One that ignores controls",
    "One that always claims proof"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-6-0\",\"What is a vector?\",\"An organism that transmits a pathogen\",[\"A medicine\",\"A tissue\",\"A type of antibody\",\"An organism that transmits a pathogen\"],\"Different pathogens spread in different ways, so prevention depends on the disease.\"]": [
    "A type of antibody",
    "A medicine",
    "A tissue",
    "An organism that transmits a pathogen"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-6-1\",\"Which route best matches measles spread?\",\"Airborne droplets\",[\"Airborne droplets\",\"Only inherited DNA\",\"Only mineral uptake\",\"Osmosis\"],\"Different pathogens spread in different ways, so prevention depends on the disease.\"]": [
    "Only inherited DNA",
    "Airborne droplets",
    "Only mineral uptake",
    "Osmosis"
  ],
  "[\"Biology\",\"aqa-bio-step-bioenergetics-0-0\",\"Which gas is taken in for photosynthesis?\",\"Carbon dioxide\",[\"Carbon dioxide\",\"Hydrogen\",\"Nitrogen only\",\"Oxygen\"],\"Plants use light energy to turn carbon dioxide and water into glucose and oxygen.\"]": [
    "Oxygen",
    "Nitrogen only",
    "Hydrogen",
    "Carbon dioxide"
  ],
  "[\"Biology\",\"aqa-bio-step-bioenergetics-0-1\",\"Which pair is produced by photosynthesis?\",\"Glucose and oxygen\",[\"Glucose and oxygen\",\"Lactic acid and oxygen\",\"Protein and bile\",\"Water and carbon dioxide\"],\"Plants use light energy to turn carbon dioxide and water into glucose and oxygen.\"]": [
    "Water and carbon dioxide",
    "Glucose and oxygen",
    "Lactic acid and oxygen",
    "Protein and bile"
  ],
  "[\"Biology\",\"aqa-bio-step-bioenergetics-1-0\",\"What is a limiting factor?\",\"The factor in shortest effective supply\",[\"A factor that never changes\",\"Any product of the reaction\",\"The factor in shortest effective supply\",\"The largest leaf\"],\"The slowest available input limits photosynthesis: light, carbon dioxide or temperature.\"]": [
    "The largest leaf",
    "Any product of the reaction",
    "A factor that never changes",
    "The factor in shortest effective supply"
  ],
  "[\"Biology\",\"aqa-bio-step-bioenergetics-1-1\",\"Why can increasing light stop raising photosynthesis rate?\",\"A different factor becomes limiting\",[\"A different factor becomes limiting\",\"Chlorophyll vanishes instantly\",\"Glucose turns into light\",\"The graph must always fall\"],\"The slowest available input limits photosynthesis: light, carbon dioxide or temperature.\"]": [
    "Chlorophyll vanishes instantly",
    "Glucose turns into light",
    "The graph must always fall",
    "A different factor becomes limiting"
  ],
  "[\"Biology\",\"aqa-bio-step-bioenergetics-2-0\",\"Which are reactants in aerobic respiration?\",\"Glucose and oxygen\",[\"Carbon dioxide and water\",\"Glucose and oxygen\",\"Lactic acid and glucose\",\"Oxygen and bile\"],\"With oxygen, cells release energy from glucose and make carbon dioxide and water.\"]": [
    "Glucose and oxygen",
    "Carbon dioxide and water",
    "Lactic acid and glucose",
    "Oxygen and bile"
  ],
  "[\"Biology\",\"aqa-bio-step-bioenergetics-2-1\",\"Which products form in aerobic respiration?\",\"Carbon dioxide and water\",[\"Carbon dioxide and water\",\"Chlorophyll and oxygen\",\"Only glucose\",\"Only lactic acid\"],\"With oxygen, cells release energy from glucose and make carbon dioxide and water.\"]": [
    "Carbon dioxide and water",
    "Only glucose",
    "Only lactic acid",
    "Chlorophyll and oxygen"
  ],
  "[\"Biology\",\"aqa-bio-step-bioenergetics-3-0\",\"Compared with aerobic respiration, anaerobic respiration releases...\",\"Less energy\",[\"Exactly the same energy\",\"Less energy\",\"More energy from each glucose\",\"No energy at all\"],\"Without enough oxygen, muscles release less energy and produce lactic acid.\"]": [
    "More energy from each glucose",
    "Exactly the same energy",
    "Less energy",
    "No energy at all"
  ],
  "[\"Biology\",\"aqa-bio-step-bioenergetics-3-1\",\"What happens after hard exercise to help repay oxygen debt?\",\"Breathing remains fast for a while\",[\"Breathing remains fast for a while\",\"Breathing stops\",\"Glucose becomes chlorophyll\",\"The heart stops\"],\"Without enough oxygen, muscles release less energy and produce lactic acid.\"]": [
    "Breathing stops",
    "Breathing remains fast for a while",
    "The heart stops",
    "Glucose becomes chlorophyll"
  ],
  "[\"Biology\",\"aqa-bio-step-bioenergetics-4-0\",\"What rises when muscles need more energy during exercise?\",\"Breathing and heart rates\",[\"Breathing and heart rates\",\"DNA length\",\"Only hair growth\",\"Only pupil colour\"],\"Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.\"]": [
    "Only hair growth",
    "Breathing and heart rates",
    "Only pupil colour",
    "DNA length"
  ],
  "[\"Biology\",\"aqa-bio-step-bioenergetics-4-1\",\"Where is energy released from glucose for muscle activity?\",\"In cells by respiration\",[\"In bone marrow only\",\"In cells by respiration\",\"Only in blood plasma\",\"Only in the lungs\"],\"Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.\"]": [
    "Only in the lungs",
    "In cells by respiration",
    "Only in blood plasma",
    "In bone marrow only"
  ],
  "[\"Biology\",\"aqa-bio-step-bioenergetics-5-0\",\"How is a simple rate calculated?\",\"Amount of change ÷ time\",[\"Amount of change ÷ time\",\"Change × starting mass\",\"Mean + range\",\"Time ÷ amount of change\"],\"Measure a change over time, keep other factors constant, and repeat readings.\"]": [
    "Time ÷ amount of change",
    "Change × starting mass",
    "Mean + range",
    "Amount of change ÷ time"
  ],
  "[\"Biology\",\"aqa-bio-step-bioenergetics-5-1\",\"Why repeat rate measurements?\",\"To spot anomalies and improve reliability\",[\"To avoid using units\",\"To change all variables\",\"To guarantee identical results\",\"To spot anomalies and improve reliability\"],\"Measure a change over time, keep other factors constant, and repeat readings.\"]": [
    "To spot anomalies and improve reliability",
    "To change all variables",
    "To guarantee identical results",
    "To avoid using units"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-0-0\",\"What is an effector?\",\"A muscle or gland that brings about a response\",[\"A chromosome\",\"A muscle or gland that brings about a response\",\"A nutrient\",\"A pathogen\"],\"Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.\"]": [
    "A muscle or gland that brings about a response",
    "A chromosome",
    "A pathogen",
    "A nutrient"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-0-1\",\"What does homeostasis maintain?\",\"Suitable internal conditions\",[\"A constant heart rate in all situations\",\"Exactly the same external weather\",\"No chemical reactions\",\"Suitable internal conditions\"],\"Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.\"]": [
    "Exactly the same external weather",
    "Suitable internal conditions",
    "A constant heart rate in all situations",
    "No chemical reactions"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-1-0\",\"Which neurone carries impulses to an effector?\",\"Motor neurone\",[\"Motor neurone\",\"Phloem cell\",\"Red blood cell\",\"Sensory neurone\"],\"A reflex is a fast automatic response carried through a reflex arc.\"]": [
    "Motor neurone",
    "Sensory neurone",
    "Red blood cell",
    "Phloem cell"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-1-1\",\"Which order is a reflex arc?\",\"Receptor → sensory → relay → motor → effector\",[\"Brain → blood → gland → receptor\",\"Effector → motor → receptor → sensory\",\"Receptor → motor → sensory → effector\",\"Receptor → sensory → relay → motor → effector\"],\"A reflex is a fast automatic response carried through a reflex arc.\"]": [
    "Effector → motor → receptor → sensory",
    "Receptor → motor → sensory → effector",
    "Receptor → sensory → relay → motor → effector",
    "Brain → blood → gland → receptor"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-2-0\",\"Which hormone raises low blood glucose?\",\"Glucagon\",[\"ADH\",\"Glucagon\",\"Insulin\",\"LH\"],\"Insulin lowers high blood glucose; glucagon raises low blood glucose.\"]": [
    "Insulin",
    "Glucagon",
    "ADH",
    "LH"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-2-1\",\"What is an effect of insulin?\",\"More glucose is removed from blood\",[\"Glycogen turns to glucose\",\"Less glucose enters cells\",\"More glucose is removed from blood\",\"Water becomes glucose\"],\"Insulin lowers high blood glucose; glucagon raises low blood glucose.\"]": [
    "Glycogen turns to glucose",
    "Less glucose enters cells",
    "Water becomes glucose",
    "More glucose is removed from blood"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-3-0\",\"Which hormone triggers ovulation?\",\"LH\",[\"ADH\",\"Glucagon\",\"Insulin\",\"LH\"],\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\"]": [
    "ADH",
    "LH",
    "Insulin",
    "Glucagon"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-3-1\",\"Which hormone helps maintain the uterine lining after ovulation?\",\"Progesterone\",[\"Adrenaline\",\"Amylase\",\"Bile\",\"Progesterone\"],\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\"]": [
    "Progesterone",
    "Amylase",
    "Adrenaline",
    "Bile"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-4-0\",\"What is a response of a shoot to light called?\",\"Phototropism\",[\"Mitosis\",\"Osmosis\",\"Phototropism\",\"Transpiration\"],\"Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides.\"]": [
    "Transpiration",
    "Osmosis",
    "Phototropism",
    "Mitosis"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-4-1\",\"What causes the bend in a growing shoot?\",\"Unequal cell elongation\",[\"Antibody production\",\"The whole plant walking\",\"Unequal cell elongation\",\"Unequal chromosome number\"],\"Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides.\"]": [
    "The whole plant walking",
    "Unequal chromosome number",
    "Antibody production",
    "Unequal cell elongation"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-5-0\",\"What should stay the same in a fair ruler-drop test?\",\"Drop method and starting position\",[\"Drop method and starting position\",\"The pupil’s answer\",\"The result\",\"The tested factor\"],\"Change one factor, measure reaction time, repeat and compare means.\"]": [
    "The tested factor",
    "Drop method and starting position",
    "The result",
    "The pupil’s answer"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-5-1\",\"Why repeat a reaction-time measurement?\",\"Reduce the effect of chance variation\",[\"Avoid recording data\",\"Change the independent variable each time\",\"Guarantee the fastest time\",\"Reduce the effect of chance variation\"],\"Change one factor, measure reaction time, repeat and compare means.\"]": [
    "Guarantee the fastest time",
    "Avoid recording data",
    "Reduce the effect of chance variation",
    "Change the independent variable each time"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-6-0\",\"What happens to skin blood vessels when the body is too hot?\",\"They dilate\",[\"They become xylem\",\"They close permanently\",\"They dilate\",\"They make insulin\"],\"Sweating and skin blood flow help control temperature; kidneys adjust how much water leaves in urine.\"]": [
    "They dilate",
    "They become xylem",
    "They close permanently",
    "They make insulin"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-6-1\",\"When the body needs to save water, urine usually becomes...\",\"More concentrated\",[\"Exactly the same regardless of water intake\",\"More concentrated\",\"More dilute\",\"Pure glucose\"],\"Sweating and skin blood flow help control temperature; kidneys adjust how much water leaves in urine.\"]": [
    "More dilute",
    "Pure glucose",
    "Exactly the same regardless of water intake",
    "More concentrated"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-7-0\",\"What carries impulses from retina to brain?\",\"Optic nerve\",[\"Cornea\",\"Iris\",\"Lens\",\"Optic nerve\"],\"The cornea and lens focus light on the retina; the optic nerve carries signals to the brain.\"]": [
    "Iris",
    "Lens",
    "Optic nerve",
    "Cornea"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-7-1\",\"What changes pupil size to control light entry?\",\"Iris\",[\"Iris\",\"Optic nerve\",\"Retina\",\"Sclera only\"],\"The cornea and lens focus light on the retina; the optic nerve carries signals to the brain.\"]": [
    "Retina",
    "Optic nerve",
    "Sclera only",
    "Iris"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-9-0\",\"Which hormone stimulates egg maturation?\",\"FSH\",[\"ADH\",\"FSH\",\"Glucagon\",\"Insulin\"],\"FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.\"]": [
    "ADH",
    "Glucagon",
    "FSH",
    "Insulin"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-9-1\",\"Which hormone rises after ovulation to help maintain the lining?\",\"Progesterone\",[\"Amylase\",\"Bile\",\"Lipase\",\"Progesterone\"],\"FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.\"]": [
    "Amylase",
    "Bile",
    "Lipase",
    "Progesterone"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-0-0\",\"Where are chromosomes usually found in an animal cell?\",\"Nucleus\",[\"Cell membrane\",\"Cytoplasm only\",\"Nucleus\",\"Ribosome\"],\"DNA carries genetic instructions; genes are sections of DNA found on chromosomes.\"]": [
    "Cell membrane",
    "Cytoplasm only",
    "Nucleus",
    "Ribosome"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-0-1\",\"What is an allele?\",\"A version of a gene\",[\"A digestive enzyme\",\"A type of organ\",\"A version of a gene\",\"A whole ecosystem\"],\"DNA carries genetic instructions; genes are sections of DNA found on chromosomes.\"]": [
    "A version of a gene",
    "A type of organ",
    "A whole ecosystem",
    "A digestive enzyme"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-1-0\",\"Which process usually produces genetic clones?\",\"Asexual reproduction\",[\"Asexual reproduction\",\"Fertilisation by two gametes\",\"Meiosis followed by fusion\",\"Sexual reproduction\"],\"Sexual reproduction combines gametes and creates variation; asexual reproduction makes clones.\"]": [
    "Sexual reproduction",
    "Asexual reproduction",
    "Fertilisation by two gametes",
    "Meiosis followed by fusion"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-1-1\",\"Why does sexual reproduction often increase variation?\",\"It combines alleles from two parents\",[\"It changes every gene on purpose\",\"It combines alleles from two parents\",\"It copies one parent exactly\",\"It removes all mutations\"],\"Sexual reproduction combines gametes and creates variation; asexual reproduction makes clones.\"]": [
    "It copies one parent exactly",
    "It removes all mutations",
    "It changes every gene on purpose",
    "It combines alleles from two parents"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-2-0\",\"What does genotype describe?\",\"The alleles an organism has\",[\"A food chain\",\"Its environment only\",\"The alleles an organism has\",\"The number of organs\"],\"Each parent passes on one allele; a Punnett square shows possible offspring genotypes.\"]": [
    "Its environment only",
    "The number of organs",
    "The alleles an organism has",
    "A food chain"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-2-1\",\"If A is dominant, which genotype shows the recessive trait?\",\"aa\",[\"AA\",\"Aa\",\"Both AA and Aa only\",\"aa\"],\"Each parent passes on one allele; a Punnett square shows possible offspring genotypes.\"]": [
    "AA",
    "Aa",
    "Both AA and Aa only",
    "aa"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-3-0\",\"What is a mutation?\",\"A change in DNA\",[\"A change in DNA\",\"A change in weather\",\"A food source\",\"A type of tissue\"],\"Variation comes from genes and environment; mutations are changes in DNA.\"]": [
    "A change in DNA",
    "A change in weather",
    "A type of tissue",
    "A food source"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-3-1\",\"Which can cause variation in a population?\",\"Genes and environment\",[\"Genes and environment\",\"Only inherited DNA with no environmental effect\",\"Only one gene in every case\",\"Only temperature\"],\"Variation comes from genes and environment; mutations are changes in DNA.\"]": [
    "Only one gene in every case",
    "Genes and environment",
    "Only temperature",
    "Only inherited DNA with no environmental effect"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-4-0\",\"What must be passed to offspring for a trait to spread by natural selection?\",\"Inherited alleles\",[\"A learned habit only\",\"A scar\",\"An adult’s age\",\"Inherited alleles\"],\"Helpful inherited traits can become more common over many generations through natural selection.\"]": [
    "Inherited alleles",
    "A learned habit only",
    "A scar",
    "An adult’s age"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-4-1\",\"Natural selection changes a population over...\",\"Many generations\",[\"A single heartbeat\",\"Many generations\",\"One moment in every case\",\"Only one cell division\"],\"Helpful inherited traits can become more common over many generations through natural selection.\"]": [
    "One moment in every case",
    "Only one cell division",
    "Many generations",
    "A single heartbeat"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-5-0\",\"Which method directly inserts a chosen gene?\",\"Genetic engineering\",[\"Genetic engineering\",\"Osmosis\",\"Random sampling\",\"Selective breeding alone\"],\"Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.\"]": [
    "Selective breeding alone",
    "Random sampling",
    "Osmosis",
    "Genetic engineering"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-5-1\",\"Which is a possible risk of repeated selective breeding?\",\"Reduced genetic diversity\",[\"Guaranteed resistance to every disease\",\"Immediate new species every time\",\"No inherited traits\",\"Reduced genetic diversity\"],\"Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.\"]": [
    "Guaranteed resistance to every disease",
    "No inherited traits",
    "Immediate new species every time",
    "Reduced genetic diversity"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-6-0\",\"What evidence can help modern classification?\",\"DNA sequences\",[\"DNA sequences\",\"Only body mass\",\"Only the animal’s name\",\"Only the date it was found\"],\"Classification groups organisms by shared features and evolutionary relationships.\"]": [
    "Only the animal’s name",
    "DNA sequences",
    "Only the date it was found",
    "Only body mass"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-6-1\",\"What is a species usually able to do?\",\"Interbreed to produce fertile offspring\",[\"Have identical DNA in every individual\",\"Interbreed to produce fertile offspring\",\"Live in only one habitat\",\"Produce offspring with every other species\"],\"Classification groups organisms by shared features and evolutionary relationships.\"]": [
    "Produce offspring with every other species",
    "Live in only one habitat",
    "Have identical DNA in every individual",
    "Interbreed to produce fertile offspring"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-7-0\",\"Which is evidence for evolution?\",\"Fossils\",[\"A learned trick alone\",\"A single unsupported opinion\",\"A temporary tan\",\"Fossils\"],\"Fossils and genetic similarities help show how species have changed over time.\"]": [
    "A single unsupported opinion",
    "A temporary tan",
    "Fossils",
    "A learned trick alone"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-7-1\",\"Why compare DNA among species?\",\"To investigate relatedness\",[\"To find an organism’s age exactly\",\"To investigate relatedness\",\"To measure breathing rate only\",\"To stop mutation\"],\"Fossils and genetic similarities help show how species have changed over time.\"]": [
    "To investigate relatedness",
    "To measure breathing rate only",
    "To stop mutation",
    "To find an organism’s age exactly"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-0-0\",\"What does an ecosystem include besides its living community?\",\"The physical environment\",[\"Only a single cell\",\"Only one gene\",\"Only predators\",\"The physical environment\"],\"A community is all the populations living together; an ecosystem includes them and their environment.\"]": [
    "Only one gene",
    "Only a single cell",
    "The physical environment",
    "Only predators"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-0-1\",\"What is a population?\",\"Members of one species in an area\",[\"All habitats on Earth\",\"All species in an area\",\"Members of one species in an area\",\"One food chain only\"],\"A community is all the populations living together; an ecosystem includes them and their environment.\"]": [
    "All habitats on Earth",
    "All species in an area",
    "Members of one species in an area",
    "One food chain only"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-1-0\",\"Which resource do plants compete for?\",\"Light\",[\"Antibodies\",\"Bile\",\"Light\",\"Neurones\"],\"Organisms compete for limited resources; adaptations improve survival in an environment.\"]": [
    "Antibodies",
    "Light",
    "Neurones",
    "Bile"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-1-1\",\"What is an adaptation?\",\"A feature that improves survival in a habitat\",[\"A feature that improves survival in a habitat\",\"A learned exam answer\",\"A type of organ system\",\"Any random event\"],\"Organisms compete for limited resources; adaptations improve survival in an environment.\"]": [
    "Any random event",
    "A feature that improves survival in a habitat",
    "A type of organ system",
    "A learned exam answer"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-2-0\",\"Which organism is the producer in a food chain?\",\"A photosynthetic plant\",[\"A carnivore\",\"A decomposer only\",\"A photosynthetic plant\",\"A top predator\"],\"Arrows show the direction of biomass transfer, from food to the organism that eats it.\"]": [
    "A carnivore",
    "A photosynthetic plant",
    "A decomposer only",
    "A top predator"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-2-1\",\"What do food-chain arrows show?\",\"Direction of biomass transfer\",[\"Direction animals walk\",\"Direction of biomass transfer\",\"Direction sunlight travels\",\"Direction water always flows\"],\"Arrows show the direction of biomass transfer, from food to the organism that eats it.\"]": [
    "Direction animals walk",
    "Direction sunlight travels",
    "Direction water always flows",
    "Direction of biomass transfer"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-3-0\",\"Which organisms break down dead material?\",\"Decomposers\",[\"Decomposers\",\"Only herbivores\",\"Only pollinators\",\"Only predators\"],\"Materials cycle between organisms and the environment; decomposers return nutrients.\"]": [
    "Only predators",
    "Only herbivores",
    "Only pollinators",
    "Decomposers"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-3-1\",\"Which process adds carbon dioxide to the air?\",\"Respiration\",[\"Osmosis\",\"Photosynthesis only\",\"Respiration\",\"Translocation\"],\"Materials cycle between organisms and the environment; decomposers return nutrients.\"]": [
    "Photosynthesis only",
    "Respiration",
    "Osmosis",
    "Translocation"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-4-0\",\"What is a transect useful for?\",\"Tracking distribution along a line\",[\"Measuring blood glucose\",\"Testing reflexes\",\"Tracking distribution along a line\",\"Viewing chromosomes\"],\"Quadrats estimate abundance; transects show how distribution changes across an area.\"]": [
    "Measuring blood glucose",
    "Viewing chromosomes",
    "Tracking distribution along a line",
    "Testing reflexes"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-4-1\",\"Why place quadrats randomly for an abundance estimate?\",\"To reduce selection bias\",[\"To avoid repeats\",\"To change the species\",\"To guarantee equal counts\",\"To reduce selection bias\"],\"Quadrats estimate abundance; transects show how distribution changes across an area.\"]": [
    "To guarantee equal counts",
    "To change the species",
    "To reduce selection bias",
    "To avoid repeats"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-5-0\",\"What does biodiversity describe?\",\"Variety of living organisms\",[\"Only crop yield\",\"Only one population size\",\"Only soil pH\",\"Variety of living organisms\"],\"Biodiversity supports stable ecosystems; food security depends on reliable supplies.\"]": [
    "Only crop yield",
    "Only soil pH",
    "Variety of living organisms",
    "Only one population size"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-5-1\",\"Which may improve food security?\",\"Reliable crop supply\",[\"Destroying every pollinator\",\"Increasing disease without control\",\"Losing fertile soil\",\"Reliable crop supply\"],\"Biodiversity supports stable ecosystems; food security depends on reliable supplies.\"]": [
    "Destroying every pollinator",
    "Losing fertile soil",
    "Increasing disease without control",
    "Reliable crop supply"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-6-0\",\"What should support an evaluation?\",\"Relevant data and reasons\",[\"A guess without results\",\"One slogan only\",\"Only the price tag\",\"Relevant data and reasons\"],\"Compare benefits, costs and evidence before judging a conservation or farming action.\"]": [
    "One slogan only",
    "Relevant data and reasons",
    "A guess without results",
    "Only the price tag"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-6-1\",\"Why might an intervention need monitoring?\",\"Effects can change over time\",[\"Effects can change over time\",\"It guarantees success forever\",\"It removes all uncertainty\",\"It stops every other species changing\"],\"Compare benefits, costs and evidence before judging a conservation or farming action.\"]": [
    "Effects can change over time",
    "It guarantees success forever",
    "It removes all uncertainty",
    "It stops every other species changing"
  ],
  "[\"Biology\",\"aqa-shared-gap-0-0\",\"A tumour that remains contained in one area is called…\",\"Benign\",[\"Benign\",\"Infectious\",\"Malignant\",\"Metastatic\"],\"A benign tumour does not invade neighbouring tissue.\"]": [
    "Malignant",
    "Benign",
    "Metastatic",
    "Infectious"
  ],
  "[\"Biology\",\"aqa-shared-gap-1-0\",\"Which treatment holds a narrowed coronary artery open?\",\"Stent\",[\"Antibiotic\",\"Insulin\",\"Statin\",\"Stent\"],\"A stent is placed inside the artery to keep blood flowing.\"]": [
    "Stent",
    "Statin",
    "Insulin",
    "Antibiotic"
  ],
  "[\"Biology\",\"aqa-shared-gap-2-0\",\"Which leaf tissue has many chloroplasts for photosynthesis?\",\"Palisade mesophyll\",[\"Epidermis\",\"Palisade mesophyll\",\"Spongy mesophyll\",\"Xylem\"],\"Palisade mesophyll cells are packed with chloroplasts.\"]": [
    "Spongy mesophyll",
    "Xylem",
    "Palisade mesophyll",
    "Epidermis"
  ],
  "[\"Biology\",\"aqa-shared-gap-3-0\",\"Which gland is often called the master gland?\",\"Pituitary\",[\"Adrenal\",\"Ovary\",\"Pancreas\",\"Pituitary\"],\"The pituitary releases hormones that can stimulate other glands.\"]": [
    "Pancreas",
    "Adrenal",
    "Pituitary",
    "Ovary"
  ],
  "[\"Biology\",\"aqa-shared-gap-4-0\",\"Which condition is caused by a recessive allele in the AQA examples?\",\"Cystic fibrosis\",[\"Cystic fibrosis\",\"Malaria\",\"Polydactyly\",\"Scurvy\"],\"A person needs two recessive alleles to have cystic fibrosis in this simple model.\"]": [
    "Polydactyly",
    "Malaria",
    "Scurvy",
    "Cystic fibrosis"
  ],
  "[\"Biology\",\"aqa-shared-gap-5-0\",\"Which sex chromosome can a human egg carry?\",\"X\",[\"Neither\",\"X\",\"X or Y\",\"Y\"],\"In this GCSE model, eggs carry X; sperm can carry X or Y.\"]": [
    "X",
    "Y",
    "X or Y",
    "Neither"
  ],
  "[\"Biology\",\"aqa-shared-gap-6-0\",\"Which action can help maintain biodiversity?\",\"Protecting and restoring habitats\",[\"Destroying peat bogs\",\"Increasing pollution\",\"Protecting and restoring habitats\",\"Removing every hedgerow\"],\"More suitable habitat can support more species.\"]": [
    "Removing every hedgerow",
    "Destroying peat bogs",
    "Protecting and restoring habitats",
    "Increasing pollution"
  ],
  "[\"Biology\",\"bio-deep-cell-biology-inside-a-cell-summary\",\"Which statement best summarises “Inside a cell”?\",\"Cell parts have jobs: the nucleus holds DNA, ribosomes make proteins, and the membrane controls entry and exit.\",[\"Bacteria have no nucleus; specialised animal and plant cells have features suited to their job.\",\"Cell parts have jobs: the nucleus holds DNA, ribosomes make proteins, and the membrane controls entry and exit.\",\"Diffusion moves particles down a concentration gradient; osmosis moves water through a partially permeable membrane.\",\"Magnification tells you how many times bigger an image is than the real object.\"],\"The best summary is: Cell parts have jobs: the nucleus holds DNA, ribosomes make proteins, and the membrane controls entry and exit.\"]": [
    "Magnification tells you how many times bigger an image is than the real object.",
    "Diffusion moves particles down a concentration gradient; osmosis moves water through a partially permeable membrane.",
    "Cell parts have jobs: the nucleus holds DNA, ribosomes make proteins, and the membrane controls entry and exit.",
    "Bacteria have no nucleus; specialised animal and plant cells have features suited to their job."
  ],
  "[\"Biology\",\"bio-deep-cell-biology-inside-a-cell-keyword\",\"Which key term is most closely linked to “Inside a cell”?\",\"nucleus\",[\"magnification\",\"nucleus\",\"prokaryote\",\"specialisation\"],\"nucleus is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "prokaryote",
    "specialisation",
    "magnification",
    "nucleus"
  ],
  "[\"Biology\",\"bio-deep-cell-biology-bacteria-and-specialised-cells-summary\",\"Which statement best summarises “Bacteria and specialised cells”?\",\"Bacteria have no nucleus; specialised animal and plant cells have features suited to their job.\",[\"Bacteria have no nucleus; specialised animal and plant cells have features suited to their job.\",\"Cell parts have jobs: the nucleus holds DNA, ribosomes make proteins, and the membrane controls entry and exit.\",\"Diffusion moves particles down a concentration gradient; osmosis moves water through a partially permeable membrane.\",\"Magnification tells you how many times bigger an image is than the real object.\"],\"The best summary is: Bacteria have no nucleus; specialised animal and plant cells have features suited to their job.\"]": [
    "Diffusion moves particles down a concentration gradient; osmosis moves water through a partially permeable membrane.",
    "Cell parts have jobs: the nucleus holds DNA, ribosomes make proteins, and the membrane controls entry and exit.",
    "Bacteria have no nucleus; specialised animal and plant cells have features suited to their job.",
    "Magnification tells you how many times bigger an image is than the real object."
  ],
  "[\"Biology\",\"bio-deep-cell-biology-bacteria-and-specialised-cells-keyword\",\"Which key term is most closely linked to “Bacteria and specialised cells”?\",\"prokaryote\",[\"magnification\",\"nucleus\",\"prokaryote\",\"ribosomes\"],\"prokaryote is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "ribosomes",
    "magnification",
    "nucleus",
    "prokaryote"
  ],
  "[\"Biology\",\"bio-deep-cell-biology-microscopes-and-scale-summary\",\"Which statement best summarises “Microscopes and scale”?\",\"Magnification tells you how many times bigger an image is than the real object.\",[\"Active transport uses energy to move substances against their concentration gradient.\",\"Magnification tells you how many times bigger an image is than the real object.\",\"Mitosis makes two genetically identical cells; stem cells can develop into specialised cells.\",\"Prepare a thin specimen, start on low power, focus, then draw only what you can see.\"],\"The best summary is: Magnification tells you how many times bigger an image is than the real object.\"]": [
    "Prepare a thin specimen, start on low power, focus, then draw only what you can see.",
    "Active transport uses energy to move substances against their concentration gradient.",
    "Mitosis makes two genetically identical cells; stem cells can develop into specialised cells.",
    "Magnification tells you how many times bigger an image is than the real object."
  ],
  "[\"Biology\",\"bio-deep-cell-biology-microscopes-and-scale-keyword\",\"Which key term is most closely linked to “Microscopes and scale”?\",\"magnification\",[\"magnification\",\"nucleus\",\"prokaryote\",\"ribosomes\"],\"magnification is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "ribosomes",
    "prokaryote",
    "magnification",
    "nucleus"
  ],
  "[\"Biology\",\"bio-deep-cell-biology-diffusion-and-osmosis-summary\",\"Which statement best summarises “Diffusion and osmosis”?\",\"Diffusion moves particles down a concentration gradient; osmosis moves water through a partially permeable membrane.\",[\"Active transport uses energy to move substances against their concentration gradient.\",\"Bacteria have no nucleus; specialised animal and plant cells have features suited to their job.\",\"Diffusion moves particles down a concentration gradient; osmosis moves water through a partially permeable membrane.\",\"Magnification tells you how many times bigger an image is than the real object.\"],\"The best summary is: Diffusion moves particles down a concentration gradient; osmosis moves water through a partially permeable membrane.\"]": [
    "Bacteria have no nucleus; specialised animal and plant cells have features suited to their job.",
    "Magnification tells you how many times bigger an image is than the real object.",
    "Diffusion moves particles down a concentration gradient; osmosis moves water through a partially permeable membrane.",
    "Active transport uses energy to move substances against their concentration gradient."
  ],
  "[\"Biology\",\"bio-deep-cell-biology-diffusion-and-osmosis-keyword\",\"Which key term is most closely linked to “Diffusion and osmosis”?\",\"diffusion\",[\"diffusion\",\"nucleus\",\"prokaryote\",\"ribosomes\"],\"diffusion is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "prokaryote",
    "diffusion",
    "nucleus",
    "ribosomes"
  ],
  "[\"Biology\",\"bio-deep-cell-biology-active-transport-and-exchange-summary\",\"Which statement best summarises “Active transport and exchange”?\",\"Active transport uses energy to move substances against their concentration gradient.\",[\"Active transport uses energy to move substances against their concentration gradient.\",\"Diffusion moves particles down a concentration gradient; osmosis moves water through a partially permeable membrane.\",\"Magnification tells you how many times bigger an image is than the real object.\",\"Mitosis makes two genetically identical cells; stem cells can develop into specialised cells.\"],\"The best summary is: Active transport uses energy to move substances against their concentration gradient.\"]": [
    "Magnification tells you how many times bigger an image is than the real object.",
    "Diffusion moves particles down a concentration gradient; osmosis moves water through a partially permeable membrane.",
    "Active transport uses energy to move substances against their concentration gradient.",
    "Mitosis makes two genetically identical cells; stem cells can develop into specialised cells."
  ],
  "[\"Biology\",\"bio-deep-cell-biology-active-transport-and-exchange-keyword\",\"Which key term is most closely linked to “Active transport and exchange”?\",\"active transport\",[\"active transport\",\"nucleus\",\"prokaryote\",\"ribosomes\"],\"active transport is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "active transport",
    "nucleus",
    "ribosomes",
    "prokaryote"
  ],
  "[\"Biology\",\"bio-deep-cell-biology-division-and-stem-cells-summary\",\"Which statement best summarises “Division and stem cells”?\",\"Mitosis makes two genetically identical cells; stem cells can develop into specialised cells.\",[\"Bacteria have no nucleus; specialised animal and plant cells have features suited to their job.\",\"Diffusion moves particles down a concentration gradient; osmosis moves water through a partially permeable membrane.\",\"Magnification tells you how many times bigger an image is than the real object.\",\"Mitosis makes two genetically identical cells; stem cells can develop into specialised cells.\"],\"The best summary is: Mitosis makes two genetically identical cells; stem cells can develop into specialised cells.\"]": [
    "Magnification tells you how many times bigger an image is than the real object.",
    "Diffusion moves particles down a concentration gradient; osmosis moves water through a partially permeable membrane.",
    "Bacteria have no nucleus; specialised animal and plant cells have features suited to their job.",
    "Mitosis makes two genetically identical cells; stem cells can develop into specialised cells."
  ],
  "[\"Biology\",\"bio-deep-cell-biology-division-and-stem-cells-keyword\",\"Which key term is most closely linked to “Division and stem cells”?\",\"mitosis\",[\"mitosis\",\"nucleus\",\"prokaryote\",\"ribosomes\"],\"mitosis is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "nucleus",
    "ribosomes",
    "mitosis",
    "prokaryote"
  ],
  "[\"Biology\",\"bio-deep-cell-biology-your-board-microscopy-summary\",\"Which statement best summarises “Your board · microscopy”?\",\"Prepare a thin specimen, start on low power, focus, then draw only what you can see.\",[\"Active transport uses energy to move substances against their concentration gradient.\",\"Diffusion moves particles down a concentration gradient; osmosis moves water through a partially permeable membrane.\",\"Magnification tells you how many times bigger an image is than the real object.\",\"Prepare a thin specimen, start on low power, focus, then draw only what you can see.\"],\"The best summary is: Prepare a thin specimen, start on low power, focus, then draw only what you can see.\"]": [
    "Prepare a thin specimen, start on low power, focus, then draw only what you can see.",
    "Magnification tells you how many times bigger an image is than the real object.",
    "Diffusion moves particles down a concentration gradient; osmosis moves water through a partially permeable membrane.",
    "Active transport uses energy to move substances against their concentration gradient."
  ],
  "[\"Biology\",\"bio-deep-cell-biology-your-board-microscopy-keyword\",\"Which key term is most closely linked to “Your board · microscopy”?\",\"specimen\",[\"nucleus\",\"prokaryote\",\"ribosomes\",\"specimen\"],\"specimen is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "prokaryote",
    "specimen",
    "nucleus",
    "ribosomes"
  ],
  "[\"Biology\",\"bio-deep-organisation-from-cells-to-organ-systems-summary\",\"Which statement best summarises “From cells to organ systems”?\",\"Similar cells form tissues; tissues form organs; organs work together in systems.\",[\"Enzymes speed up digestion by breaking large food molecules into smaller soluble ones.\",\"Palisade cells absorb light; spongy tissue has air spaces; xylem brings water; phloem moves sugar.\",\"Similar cells form tissues; tissues form organs; organs work together in systems.\",\"Stents open narrowed arteries; statins lower cholesterol; valves or transplants address different problems.\"],\"The best summary is: Similar cells form tissues; tissues form organs; organs work together in systems.\"]": [
    "Similar cells form tissues; tissues form organs; organs work together in systems.",
    "Stents open narrowed arteries; statins lower cholesterol; valves or transplants address different problems.",
    "Palisade cells absorb light; spongy tissue has air spaces; xylem brings water; phloem moves sugar.",
    "Enzymes speed up digestion by breaking large food molecules into smaller soluble ones."
  ],
  "[\"Biology\",\"bio-deep-organisation-from-cells-to-organ-systems-keyword\",\"Which key term is most closely linked to “From cells to organ systems”?\",\"tissue\",[\"active site\",\"bile\",\"enzyme\",\"tissue\"],\"tissue is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "bile",
    "enzyme",
    "tissue",
    "active site"
  ],
  "[\"Biology\",\"bio-deep-organisation-enzymes-and-digestion-summary\",\"Which statement best summarises “Enzymes and digestion”?\",\"Enzymes speed up digestion by breaking large food molecules into smaller soluble ones.\",[\"Bile neutralises stomach acid and emulsifies fats, giving lipase more surface to work on.\",\"Enzymes speed up digestion by breaking large food molecules into smaller soluble ones.\",\"Similar cells form tissues; tissues form organs; organs work together in systems.\",\"The right side pumps blood to the lungs; the left side pumps oxygenated blood to the body.\"],\"The best summary is: Enzymes speed up digestion by breaking large food molecules into smaller soluble ones.\"]": [
    "Similar cells form tissues; tissues form organs; organs work together in systems.",
    "Bile neutralises stomach acid and emulsifies fats, giving lipase more surface to work on.",
    "Enzymes speed up digestion by breaking large food molecules into smaller soluble ones.",
    "The right side pumps blood to the lungs; the left side pumps oxygenated blood to the body."
  ],
  "[\"Biology\",\"bio-deep-organisation-enzymes-and-digestion-keyword\",\"Which key term is most closely linked to “Enzymes and digestion”?\",\"enzyme\",[\"bile\",\"enzyme\",\"organ\",\"tissue\"],\"enzyme is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "tissue",
    "enzyme",
    "organ",
    "bile"
  ],
  "[\"Biology\",\"bio-deep-organisation-bile-and-the-digestive-system-summary\",\"Which statement best summarises “Bile and the digestive system”?\",\"Bile neutralises stomach acid and emulsifies fats, giving lipase more surface to work on.\",[\"Alveoli exchange gases quickly because they have thin walls, a large area and a good blood supply.\",\"Bile neutralises stomach acid and emulsifies fats, giving lipase more surface to work on.\",\"The right side pumps blood to the lungs; the left side pumps oxygenated blood to the body.\",\"Xylem carries water and minerals upward; phloem moves dissolved sugars around the plant.\"],\"The best summary is: Bile neutralises stomach acid and emulsifies fats, giving lipase more surface to work on.\"]": [
    "Alveoli exchange gases quickly because they have thin walls, a large area and a good blood supply.",
    "Xylem carries water and minerals upward; phloem moves dissolved sugars around the plant.",
    "The right side pumps blood to the lungs; the left side pumps oxygenated blood to the body.",
    "Bile neutralises stomach acid and emulsifies fats, giving lipase more surface to work on."
  ],
  "[\"Biology\",\"bio-deep-organisation-bile-and-the-digestive-system-keyword\",\"Which key term is most closely linked to “Bile and the digestive system”?\",\"bile\",[\"bile\",\"enzyme\",\"organ\",\"tissue\"],\"bile is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "tissue",
    "organ",
    "enzyme",
    "bile"
  ],
  "[\"Biology\",\"bio-deep-organisation-the-heart-and-blood-summary\",\"Which statement best summarises “The heart and blood”?\",\"The right side pumps blood to the lungs; the left side pumps oxygenated blood to the body.\",[\"A steep concentration gradient increases diffusion; blood flow and ventilation help keep it steep.\",\"Cancer involves uncontrolled cell division; malignant tumours invade and can spread, while benign tumours stay contained.\",\"Stents open narrowed arteries; statins lower cholesterol; valves or transplants address different problems.\",\"The right side pumps blood to the lungs; the left side pumps oxygenated blood to the body.\"],\"The best summary is: The right side pumps blood to the lungs; the left side pumps oxygenated blood to the body.\"]": [
    "A steep concentration gradient increases diffusion; blood flow and ventilation help keep it steep.",
    "Cancer involves uncontrolled cell division; malignant tumours invade and can spread, while benign tumours stay contained.",
    "Stents open narrowed arteries; statins lower cholesterol; valves or transplants address different problems.",
    "The right side pumps blood to the lungs; the left side pumps oxygenated blood to the body."
  ],
  "[\"Biology\",\"bio-deep-organisation-the-heart-and-blood-keyword\",\"Which key term is most closely linked to “The heart and blood”?\",\"artery\",[\"artery\",\"enzyme\",\"organ\",\"tissue\"],\"artery is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "enzyme",
    "tissue",
    "artery",
    "organ"
  ],
  "[\"Biology\",\"bio-deep-organisation-gas-exchange-and-health-summary\",\"Which statement best summarises “Gas exchange and health”?\",\"Alveoli exchange gases quickly because they have thin walls, a large area and a good blood supply.\",[\"A steep concentration gradient increases diffusion; blood flow and ventilation help keep it steep.\",\"Alveoli exchange gases quickly because they have thin walls, a large area and a good blood supply.\",\"Cancer involves uncontrolled cell division; malignant tumours invade and can spread, while benign tumours stay contained.\",\"Xylem carries water and minerals upward; phloem moves dissolved sugars around the plant.\"],\"The best summary is: Alveoli exchange gases quickly because they have thin walls, a large area and a good blood supply.\"]": [
    "Alveoli exchange gases quickly because they have thin walls, a large area and a good blood supply.",
    "Xylem carries water and minerals upward; phloem moves dissolved sugars around the plant.",
    "A steep concentration gradient increases diffusion; blood flow and ventilation help keep it steep.",
    "Cancer involves uncontrolled cell division; malignant tumours invade and can spread, while benign tumours stay contained."
  ],
  "[\"Biology\",\"bio-deep-organisation-gas-exchange-and-health-keyword\",\"Which key term is most closely linked to “Gas exchange and health”?\",\"alveolus\",[\"alveolus\",\"enzyme\",\"organ\",\"tissue\"],\"alveolus is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "tissue",
    "alveolus",
    "organ",
    "enzyme"
  ],
  "[\"Biology\",\"bio-deep-organisation-transport-in-plants-summary\",\"Which statement best summarises “Transport in plants”?\",\"Xylem carries water and minerals upward; phloem moves dissolved sugars around the plant.\",[\"Cancer involves uncontrolled cell division; malignant tumours invade and can spread, while benign tumours stay contained.\",\"Palisade cells absorb light; spongy tissue has air spaces; xylem brings water; phloem moves sugar.\",\"Stents open narrowed arteries; statins lower cholesterol; valves or transplants address different problems.\",\"Xylem carries water and minerals upward; phloem moves dissolved sugars around the plant.\"],\"The best summary is: Xylem carries water and minerals upward; phloem moves dissolved sugars around the plant.\"]": [
    "Xylem carries water and minerals upward; phloem moves dissolved sugars around the plant.",
    "Cancer involves uncontrolled cell division; malignant tumours invade and can spread, while benign tumours stay contained.",
    "Stents open narrowed arteries; statins lower cholesterol; valves or transplants address different problems.",
    "Palisade cells absorb light; spongy tissue has air spaces; xylem brings water; phloem moves sugar."
  ],
  "[\"Biology\",\"bio-deep-organisation-transport-in-plants-keyword\",\"Which key term is most closely linked to “Transport in plants”?\",\"xylem\",[\"enzyme\",\"organ\",\"tissue\",\"xylem\"],\"xylem is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "tissue",
    "xylem",
    "organ",
    "enzyme"
  ],
  "[\"Biology\",\"bio-deep-organisation-cancer-and-risk-factors-summary\",\"Which statement best summarises “Cancer and risk factors”?\",\"Cancer involves uncontrolled cell division; malignant tumours invade and can spread, while benign tumours stay contained.\",[\"A steep concentration gradient increases diffusion; blood flow and ventilation help keep it steep.\",\"Alveoli exchange gases quickly because they have thin walls, a large area and a good blood supply.\",\"Cancer involves uncontrolled cell division; malignant tumours invade and can spread, while benign tumours stay contained.\",\"Xylem carries water and minerals upward; phloem moves dissolved sugars around the plant.\"],\"The best summary is: Cancer involves uncontrolled cell division; malignant tumours invade and can spread, while benign tumours stay contained.\"]": [
    "Alveoli exchange gases quickly because they have thin walls, a large area and a good blood supply.",
    "Xylem carries water and minerals upward; phloem moves dissolved sugars around the plant.",
    "A steep concentration gradient increases diffusion; blood flow and ventilation help keep it steep.",
    "Cancer involves uncontrolled cell division; malignant tumours invade and can spread, while benign tumours stay contained."
  ],
  "[\"Biology\",\"bio-deep-organisation-cancer-and-risk-factors-keyword\",\"Which key term is most closely linked to “Cancer and risk factors”?\",\"benign\",[\"benign\",\"enzyme\",\"organ\",\"tissue\"],\"benign is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "enzyme",
    "benign",
    "tissue",
    "organ"
  ],
  "[\"Biology\",\"bio-deep-organisation-treating-cardiovascular-disease-summary\",\"Which statement best summarises “Treating cardiovascular disease”?\",\"Stents open narrowed arteries; statins lower cholesterol; valves or transplants address different problems.\",[\"Enzymes speed up digestion by breaking large food molecules into smaller soluble ones.\",\"Palisade cells absorb light; spongy tissue has air spaces; xylem brings water; phloem moves sugar.\",\"Similar cells form tissues; tissues form organs; organs work together in systems.\",\"Stents open narrowed arteries; statins lower cholesterol; valves or transplants address different problems.\"],\"The best summary is: Stents open narrowed arteries; statins lower cholesterol; valves or transplants address different problems.\"]": [
    "Stents open narrowed arteries; statins lower cholesterol; valves or transplants address different problems.",
    "Palisade cells absorb light; spongy tissue has air spaces; xylem brings water; phloem moves sugar.",
    "Similar cells form tissues; tissues form organs; organs work together in systems.",
    "Enzymes speed up digestion by breaking large food molecules into smaller soluble ones."
  ],
  "[\"Biology\",\"bio-deep-organisation-treating-cardiovascular-disease-keyword\",\"Which key term is most closely linked to “Treating cardiovascular disease”?\",\"stent\",[\"enzyme\",\"organ\",\"stent\",\"tissue\"],\"stent is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "enzyme",
    "tissue",
    "stent",
    "organ"
  ],
  "[\"Biology\",\"bio-deep-organisation-leaf-tissues-and-their-jobs-summary\",\"Which statement best summarises “Leaf tissues and their jobs”?\",\"Palisade cells absorb light; spongy tissue has air spaces; xylem brings water; phloem moves sugar.\",[\"Alveoli exchange gases quickly because they have thin walls, a large area and a good blood supply.\",\"Bile neutralises stomach acid and emulsifies fats, giving lipase more surface to work on.\",\"Palisade cells absorb light; spongy tissue has air spaces; xylem brings water; phloem moves sugar.\",\"The right side pumps blood to the lungs; the left side pumps oxygenated blood to the body.\"],\"The best summary is: Palisade cells absorb light; spongy tissue has air spaces; xylem brings water; phloem moves sugar.\"]": [
    "Bile neutralises stomach acid and emulsifies fats, giving lipase more surface to work on.",
    "The right side pumps blood to the lungs; the left side pumps oxygenated blood to the body.",
    "Alveoli exchange gases quickly because they have thin walls, a large area and a good blood supply.",
    "Palisade cells absorb light; spongy tissue has air spaces; xylem brings water; phloem moves sugar."
  ],
  "[\"Biology\",\"bio-deep-organisation-leaf-tissues-and-their-jobs-keyword\",\"Which key term is most closely linked to “Leaf tissues and their jobs”?\",\"palisade\",[\"enzyme\",\"organ\",\"palisade\",\"tissue\"],\"palisade is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "enzyme",
    "palisade",
    "tissue",
    "organ"
  ],
  "[\"Biology\",\"bio-deep-infection-response-pathogens-and-transmission-summary\",\"Which statement best summarises “Pathogens and transmission”?\",\"Pathogens cause infectious disease and can spread through air, water or direct contact.\",[\"Different pathogens spread in different ways, so prevention depends on the disease.\",\"Monoclonal antibodies bind one specific antigen and can be used in tests or targeted treatments.\",\"Pathogens cause infectious disease and can spread through air, water or direct contact.\",\"Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.\"],\"The best summary is: Pathogens cause infectious disease and can spread through air, water or direct contact.\"]": [
    "Monoclonal antibodies bind one specific antigen and can be used in tests or targeted treatments.",
    "Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.",
    "Pathogens cause infectious disease and can spread through air, water or direct contact.",
    "Different pathogens spread in different ways, so prevention depends on the disease."
  ],
  "[\"Biology\",\"bio-deep-infection-response-pathogens-and-transmission-keyword\",\"Which key term is most closely linked to “Pathogens and transmission”?\",\"pathogen\",[\"antibody\",\"pathogen\",\"vaccine\",\"white blood cell\"],\"pathogen is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "antibody",
    "white blood cell",
    "vaccine",
    "pathogen"
  ],
  "[\"Biology\",\"bio-deep-infection-response-defences-and-immunity-summary\",\"Which statement best summarises “Defences and immunity”?\",\"Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.\",[\"A claim is stronger when the method is fair, the sample is large and results can be repeated.\",\"Different pathogens spread in different ways, so prevention depends on the disease.\",\"Plants can detect and resist pathogens using barriers and chemical defences.\",\"Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.\"],\"The best summary is: Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.\"]": [
    "Plants can detect and resist pathogens using barriers and chemical defences.",
    "Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.",
    "A claim is stronger when the method is fair, the sample is large and results can be repeated.",
    "Different pathogens spread in different ways, so prevention depends on the disease."
  ],
  "[\"Biology\",\"bio-deep-infection-response-defences-and-immunity-keyword\",\"Which key term is most closely linked to “Defences and immunity”?\",\"antibody\",[\"antibody\",\"pathogen\",\"transmission\",\"vaccine\"],\"antibody is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "vaccine",
    "antibody",
    "pathogen",
    "transmission"
  ],
  "[\"Biology\",\"bio-deep-infection-response-vaccination-and-antibiotics-summary\",\"Which statement best summarises “Vaccination and antibiotics”?\",\"Vaccines prepare the immune system; antibiotics kill bacteria, not viruses.\",[\"New medicines are tested for safety, dose and effectiveness before wide use.\",\"Pathogens cause infectious disease and can spread through air, water or direct contact.\",\"Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.\",\"Vaccines prepare the immune system; antibiotics kill bacteria, not viruses.\"],\"The best summary is: Vaccines prepare the immune system; antibiotics kill bacteria, not viruses.\"]": [
    "New medicines are tested for safety, dose and effectiveness before wide use.",
    "Pathogens cause infectious disease and can spread through air, water or direct contact.",
    "Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.",
    "Vaccines prepare the immune system; antibiotics kill bacteria, not viruses."
  ],
  "[\"Biology\",\"bio-deep-infection-response-vaccination-and-antibiotics-keyword\",\"Which key term is most closely linked to “Vaccination and antibiotics”?\",\"vaccine\",[\"antibody\",\"pathogen\",\"transmission\",\"vaccine\"],\"vaccine is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "transmission",
    "antibody",
    "pathogen",
    "vaccine"
  ],
  "[\"Biology\",\"bio-deep-infection-response-developing-medicines-summary\",\"Which statement best summarises “Developing medicines”?\",\"New medicines are tested for safety, dose and effectiveness before wide use.\",[\"Different pathogens spread in different ways, so prevention depends on the disease.\",\"Monoclonal antibodies bind one specific antigen and can be used in tests or targeted treatments.\",\"New medicines are tested for safety, dose and effectiveness before wide use.\",\"Pathogens cause infectious disease and can spread through air, water or direct contact.\"],\"The best summary is: New medicines are tested for safety, dose and effectiveness before wide use.\"]": [
    "Pathogens cause infectious disease and can spread through air, water or direct contact.",
    "Different pathogens spread in different ways, so prevention depends on the disease.",
    "Monoclonal antibodies bind one specific antigen and can be used in tests or targeted treatments.",
    "New medicines are tested for safety, dose and effectiveness before wide use."
  ],
  "[\"Biology\",\"bio-deep-infection-response-developing-medicines-keyword\",\"Which key term is most closely linked to “Developing medicines”?\",\"clinical trial\",[\"antibody\",\"clinical trial\",\"pathogen\",\"transmission\"],\"clinical trial is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "transmission",
    "clinical trial",
    "antibody",
    "pathogen"
  ],
  "[\"Biology\",\"bio-deep-infection-response-plant-disease-and-defence-summary\",\"Which statement best summarises “Plant disease and defence”?\",\"Plants can detect and resist pathogens using barriers and chemical defences.\",[\"Monoclonal antibodies bind one specific antigen and can be used in tests or targeted treatments.\",\"Pathogens cause infectious disease and can spread through air, water or direct contact.\",\"Plants can detect and resist pathogens using barriers and chemical defences.\",\"Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.\"],\"The best summary is: Plants can detect and resist pathogens using barriers and chemical defences.\"]": [
    "Monoclonal antibodies bind one specific antigen and can be used in tests or targeted treatments.",
    "Plants can detect and resist pathogens using barriers and chemical defences.",
    "Pathogens cause infectious disease and can spread through air, water or direct contact.",
    "Skin and mucus block pathogens; white blood cells destroy them and produce antibodies."
  ],
  "[\"Biology\",\"bio-deep-infection-response-plant-disease-and-defence-keyword\",\"Which key term is most closely linked to “Plant disease and defence”?\",\"pathogen\",[\"No biological effect\",\"antibody\",\"pathogen\",\"transmission\"],\"pathogen is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "pathogen",
    "transmission",
    "antibody",
    "No biological effect"
  ],
  "[\"Biology\",\"bio-deep-infection-response-interpreting-evidence-summary\",\"Which statement best summarises “Interpreting evidence”?\",\"A claim is stronger when the method is fair, the sample is large and results can be repeated.\",[\"A claim is stronger when the method is fair, the sample is large and results can be repeated.\",\"New medicines are tested for safety, dose and effectiveness before wide use.\",\"Plants can detect and resist pathogens using barriers and chemical defences.\",\"Vaccines prepare the immune system; antibiotics kill bacteria, not viruses.\"],\"The best summary is: A claim is stronger when the method is fair, the sample is large and results can be repeated.\"]": [
    "Vaccines prepare the immune system; antibiotics kill bacteria, not viruses.",
    "A claim is stronger when the method is fair, the sample is large and results can be repeated.",
    "New medicines are tested for safety, dose and effectiveness before wide use.",
    "Plants can detect and resist pathogens using barriers and chemical defences."
  ],
  "[\"Biology\",\"bio-deep-infection-response-interpreting-evidence-keyword\",\"Which key term is most closely linked to “Interpreting evidence”?\",\"validity\",[\"antibody\",\"pathogen\",\"transmission\",\"validity\"],\"validity is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "validity",
    "pathogen",
    "transmission",
    "antibody"
  ],
  "[\"Biology\",\"bio-deep-infection-response-disease-examples-summary\",\"Which statement best summarises “Disease examples”?\",\"Different pathogens spread in different ways, so prevention depends on the disease.\",[\"Different pathogens spread in different ways, so prevention depends on the disease.\",\"Pathogens cause infectious disease and can spread through air, water or direct contact.\",\"Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.\",\"Vaccines prepare the immune system; antibiotics kill bacteria, not viruses.\"],\"The best summary is: Different pathogens spread in different ways, so prevention depends on the disease.\"]": [
    "Different pathogens spread in different ways, so prevention depends on the disease.",
    "Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.",
    "Vaccines prepare the immune system; antibiotics kill bacteria, not viruses.",
    "Pathogens cause infectious disease and can spread through air, water or direct contact."
  ],
  "[\"Biology\",\"bio-deep-infection-response-disease-examples-keyword\",\"Which key term is most closely linked to “Disease examples”?\",\"pathogen\",[\"No biological effect\",\"antibody\",\"pathogen\",\"transmission\"],\"pathogen is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "transmission",
    "antibody",
    "pathogen",
    "No biological effect"
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-photosynthesis-summary\",\"Which statement best summarises “Photosynthesis”?\",\"Plants use light energy to turn carbon dioxide and water into glucose and oxygen.\",[\"Improving one factor stops helping when another factor becomes limiting.\",\"Measure a change over time, keep other factors constant, and repeat readings.\",\"Plants use light energy to turn carbon dioxide and water into glucose and oxygen.\",\"The slowest available input limits photosynthesis: light, carbon dioxide or temperature.\"],\"The best summary is: Plants use light energy to turn carbon dioxide and water into glucose and oxygen.\"]": [
    "Measure a change over time, keep other factors constant, and repeat readings.",
    "Improving one factor stops helping when another factor becomes limiting.",
    "The slowest available input limits photosynthesis: light, carbon dioxide or temperature.",
    "Plants use light energy to turn carbon dioxide and water into glucose and oxygen."
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-photosynthesis-keyword\",\"Which key term is most closely linked to “Photosynthesis”?\",\"photosynthesis\",[\"aerobic\",\"limiting factor\",\"photosynthesis\",\"rate\"],\"photosynthesis is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "photosynthesis",
    "aerobic",
    "limiting factor",
    "rate"
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-limiting-factors-summary\",\"Which statement best summarises “Limiting factors”?\",\"The slowest available input limits photosynthesis: light, carbon dioxide or temperature.\",[\"Improving one factor stops helping when another factor becomes limiting.\",\"Plants use light energy to turn carbon dioxide and water into glucose and oxygen.\",\"The slowest available input limits photosynthesis: light, carbon dioxide or temperature.\",\"With oxygen, cells release energy from glucose and make carbon dioxide and water.\"],\"The best summary is: The slowest available input limits photosynthesis: light, carbon dioxide or temperature.\"]": [
    "Improving one factor stops helping when another factor becomes limiting.",
    "The slowest available input limits photosynthesis: light, carbon dioxide or temperature.",
    "Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
    "With oxygen, cells release energy from glucose and make carbon dioxide and water."
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-limiting-factors-keyword\",\"Which key term is most closely linked to “Limiting factors”?\",\"limiting factor\",[\"aerobic\",\"chlorophyll\",\"limiting factor\",\"photosynthesis\"],\"limiting factor is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "aerobic",
    "photosynthesis",
    "limiting factor",
    "chlorophyll"
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-aerobic-respiration-summary\",\"Which statement best summarises “Aerobic respiration”?\",\"With oxygen, cells release energy from glucose and make carbon dioxide and water.\",[\"Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.\",\"Improving one factor stops helping when another factor becomes limiting.\",\"Measure a change over time, keep other factors constant, and repeat readings.\",\"With oxygen, cells release energy from glucose and make carbon dioxide and water.\"],\"The best summary is: With oxygen, cells release energy from glucose and make carbon dioxide and water.\"]": [
    "Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.",
    "Measure a change over time, keep other factors constant, and repeat readings.",
    "Improving one factor stops helping when another factor becomes limiting.",
    "With oxygen, cells release energy from glucose and make carbon dioxide and water."
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-aerobic-respiration-keyword\",\"Which key term is most closely linked to “Aerobic respiration”?\",\"aerobic\",[\"aerobic\",\"chlorophyll\",\"limiting factor\",\"photosynthesis\"],\"aerobic is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "limiting factor",
    "aerobic",
    "photosynthesis",
    "chlorophyll"
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-anaerobic-respiration-summary\",\"Which statement best summarises “Anaerobic respiration”?\",\"Without enough oxygen, muscles release less energy and produce lactic acid.\",[\"Improving one factor stops helping when another factor becomes limiting.\",\"Measure a change over time, keep other factors constant, and repeat readings.\",\"Plants use light energy to turn carbon dioxide and water into glucose and oxygen.\",\"Without enough oxygen, muscles release less energy and produce lactic acid.\"],\"The best summary is: Without enough oxygen, muscles release less energy and produce lactic acid.\"]": [
    "Measure a change over time, keep other factors constant, and repeat readings.",
    "Without enough oxygen, muscles release less energy and produce lactic acid.",
    "Improving one factor stops helping when another factor becomes limiting.",
    "Plants use light energy to turn carbon dioxide and water into glucose and oxygen."
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-anaerobic-respiration-keyword\",\"Which key term is most closely linked to “Anaerobic respiration”?\",\"anaerobic\",[\"anaerobic\",\"chlorophyll\",\"limiting factor\",\"photosynthesis\"],\"anaerobic is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "photosynthesis",
    "anaerobic",
    "chlorophyll",
    "limiting factor"
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-exercise-and-metabolism-summary\",\"Which statement best summarises “Exercise and metabolism”?\",\"Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.\",[\"Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.\",\"Improving one factor stops helping when another factor becomes limiting.\",\"Measure a change over time, keep other factors constant, and repeat readings.\",\"Plants use light energy to turn carbon dioxide and water into glucose and oxygen.\"],\"The best summary is: Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.\"]": [
    "Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.",
    "Improving one factor stops helping when another factor becomes limiting.",
    "Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
    "Measure a change over time, keep other factors constant, and repeat readings."
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-exercise-and-metabolism-keyword\",\"Which key term is most closely linked to “Exercise and metabolism”?\",\"metabolism\",[\"chlorophyll\",\"limiting factor\",\"metabolism\",\"photosynthesis\"],\"metabolism is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "photosynthesis",
    "chlorophyll",
    "limiting factor",
    "metabolism"
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-measuring-a-biological-rate-summary\",\"Which statement best summarises “Measuring a biological rate”?\",\"Measure a change over time, keep other factors constant, and repeat readings.\",[\"Measure a change over time, keep other factors constant, and repeat readings.\",\"The slowest available input limits photosynthesis: light, carbon dioxide or temperature.\",\"With oxygen, cells release energy from glucose and make carbon dioxide and water.\",\"Without enough oxygen, muscles release less energy and produce lactic acid.\"],\"The best summary is: Measure a change over time, keep other factors constant, and repeat readings.\"]": [
    "The slowest available input limits photosynthesis: light, carbon dioxide or temperature.",
    "With oxygen, cells release energy from glucose and make carbon dioxide and water.",
    "Measure a change over time, keep other factors constant, and repeat readings.",
    "Without enough oxygen, muscles release less energy and produce lactic acid."
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-measuring-a-biological-rate-keyword\",\"Which key term is most closely linked to “Measuring a biological rate”?\",\"rate\",[\"chlorophyll\",\"limiting factor\",\"photosynthesis\",\"rate\"],\"rate is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "limiting factor",
    "rate",
    "photosynthesis",
    "chlorophyll"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-keeping-conditions-stable-summary\",\"Which statement best summarises “Keeping conditions stable”?\",\"Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.\",[\"A gland releases a hormone into blood; the hormone travels to a target organ.\",\"A reflex is a fast automatic response carried through a reflex arc.\",\"Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.\",\"Insulin lowers high blood glucose; glucagon raises low blood glucose.\"],\"The best summary is: Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.\"]": [
    "Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.",
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
    "A gland releases a hormone into blood; the hormone travels to a target organ."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-keeping-conditions-stable-keyword\",\"Which key term is most closely linked to “Keeping conditions stable”?\",\"homeostasis\",[\"homeostasis\",\"insulin\",\"neurone\",\"reflex arc\"],\"homeostasis is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "homeostasis",
    "reflex arc",
    "neurone",
    "insulin"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-reflexes-and-the-nervous-system-summary\",\"Which statement best summarises “Reflexes and the nervous system”?\",\"A reflex is a fast automatic response carried through a reflex arc.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Change one factor, measure reaction time, repeat and compare means.\",\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\",\"Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides.\"],\"The best summary is: A reflex is a fast automatic response carried through a reflex arc.\"]": [
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Change one factor, measure reaction time, repeat and compare means.",
    "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
    "Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-reflexes-and-the-nervous-system-keyword\",\"Which key term is most closely linked to “Reflexes and the nervous system”?\",\"reflex arc\",[\"effector\",\"homeostasis\",\"insulin\",\"reflex arc\"],\"reflex arc is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "reflex arc",
    "effector",
    "insulin",
    "homeostasis"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-blood-glucose-summary\",\"Which statement best summarises “Blood glucose”?\",\"Insulin lowers high blood glucose; glucagon raises low blood glucose.\",[\"Change one factor, measure reaction time, repeat and compare means.\",\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\",\"Insulin lowers high blood glucose; glucagon raises low blood glucose.\",\"Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides.\"],\"The best summary is: Insulin lowers high blood glucose; glucagon raises low blood glucose.\"]": [
    "Change one factor, measure reaction time, repeat and compare means.",
    "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
    "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
    "Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-blood-glucose-keyword\",\"Which key term is most closely linked to “Blood glucose”?\",\"insulin\",[\"effector\",\"homeostasis\",\"insulin\",\"reflex arc\"],\"insulin is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "effector",
    "reflex arc",
    "homeostasis",
    "insulin"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-reproduction-and-hormones-summary\",\"Which statement best summarises “Reproduction and hormones”?\",\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\",[\"A gland releases a hormone into blood; the hormone travels to a target organ.\",\"ADH changes how much water the kidneys reabsorb: more ADH means more reabsorption.\",\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\",\"Plant hormones can change growth and are used to control weeds, rooting and fruit ripening.\"],\"The best summary is: FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\"]": [
    "ADH changes how much water the kidneys reabsorb: more ADH means more reabsorption.",
    "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
    "Plant hormones can change growth and are used to control weeds, rooting and fruit ripening.",
    "A gland releases a hormone into blood; the hormone travels to a target organ."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-reproduction-and-hormones-keyword\",\"Which key term is most closely linked to “Reproduction and hormones”?\",\"FSH\",[\"FSH\",\"effector\",\"homeostasis\",\"reflex arc\"],\"FSH is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "reflex arc",
    "FSH",
    "homeostasis",
    "effector"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-plant-responses-summary\",\"Which statement best summarises “Plant responses”?\",\"Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.\",\"Insulin lowers high blood glucose; glucagon raises low blood glucose.\",\"Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides.\"],\"The best summary is: Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides.\"]": [
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides.",
    "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
    "Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-plant-responses-keyword\",\"Which key term is most closely linked to “Plant responses”?\",\"auxin\",[\"auxin\",\"effector\",\"homeostasis\",\"reflex arc\"],\"auxin is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "homeostasis",
    "effector",
    "reflex arc",
    "auxin"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-reaction-time-investigations-summary\",\"Which statement best summarises “Reaction-time investigations”?\",\"Change one factor, measure reaction time, repeat and compare means.\",[\"Change one factor, measure reaction time, repeat and compare means.\",\"FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.\",\"Fertility treatment can use FSH and LH to stimulate egg maturation and ovulation.\",\"Negative feedback reverses a change and brings a level back towards normal.\"],\"The best summary is: Change one factor, measure reaction time, repeat and compare means.\"]": [
    "Negative feedback reverses a change and brings a level back towards normal.",
    "FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.",
    "Fertility treatment can use FSH and LH to stimulate egg maturation and ovulation.",
    "Change one factor, measure reaction time, repeat and compare means."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-reaction-time-investigations-keyword\",\"Which key term is most closely linked to “Reaction-time investigations”?\",\"reaction time\",[\"effector\",\"homeostasis\",\"reaction time\",\"reflex arc\"],\"reaction time is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "homeostasis",
    "reaction time",
    "effector",
    "reflex arc"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-temperature-and-water-balance-summary\",\"Which statement best summarises “Temperature and water balance”?\",\"Sweating and skin blood flow help control temperature; kidneys adjust how much water leaves in urine.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\",\"Insulin lowers high blood glucose; glucagon raises low blood glucose.\",\"Sweating and skin blood flow help control temperature; kidneys adjust how much water leaves in urine.\"],\"The best summary is: Sweating and skin blood flow help control temperature; kidneys adjust how much water leaves in urine.\"]": [
    "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
    "Sweating and skin blood flow help control temperature; kidneys adjust how much water leaves in urine."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-temperature-and-water-balance-keyword\",\"Which key term is most closely linked to “Temperature and water balance”?\",\"thermoregulation\",[\"effector\",\"homeostasis\",\"reflex arc\",\"thermoregulation\"],\"thermoregulation is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "effector",
    "thermoregulation",
    "reflex arc",
    "homeostasis"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-the-eye-summary\",\"Which statement best summarises “The eye”?\",\"The cornea and lens focus light on the retina; the optic nerve carries signals to the brain.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\",\"Insulin lowers high blood glucose; glucagon raises low blood glucose.\",\"The cornea and lens focus light on the retina; the optic nerve carries signals to the brain.\"],\"The best summary is: The cornea and lens focus light on the retina; the optic nerve carries signals to the brain.\"]": [
    "A reflex is a fast automatic response carried through a reflex arc.",
    "The cornea and lens focus light on the retina; the optic nerve carries signals to the brain.",
    "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
    "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-the-eye-keyword\",\"Which key term is most closely linked to “The eye”?\",\"retina\",[\"effector\",\"homeostasis\",\"reflex arc\",\"retina\"],\"retina is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "homeostasis",
    "effector",
    "reflex arc",
    "retina"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-reproductive-hormones-summary\",\"Which statement best summarises “Reproductive hormones”?\",\"FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.\",[\"Change one factor, measure reaction time, repeat and compare means.\",\"FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.\",\"Sweating and skin blood flow help control temperature; kidneys adjust how much water leaves in urine.\",\"The cornea and lens focus light on the retina; the optic nerve carries signals to the brain.\"],\"The best summary is: FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.\"]": [
    "Sweating and skin blood flow help control temperature; kidneys adjust how much water leaves in urine.",
    "The cornea and lens focus light on the retina; the optic nerve carries signals to the brain.",
    "FSH, LH, oestrogen and progesterone interact to control the menstrual cycle.",
    "Change one factor, measure reaction time, repeat and compare means."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-reproductive-hormones-keyword\",\"Which key term is most closely linked to “Reproductive hormones”?\",\"ovulation\",[\"effector\",\"homeostasis\",\"ovulation\",\"reflex arc\"],\"ovulation is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "homeostasis",
    "effector",
    "reflex arc",
    "ovulation"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-the-endocrine-system-summary\",\"Which statement best summarises “The endocrine system”?\",\"A gland releases a hormone into blood; the hormone travels to a target organ.\",[\"A gland releases a hormone into blood; the hormone travels to a target organ.\",\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\",\"Insulin lowers high blood glucose; glucagon raises low blood glucose.\",\"Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides.\"],\"The best summary is: A gland releases a hormone into blood; the hormone travels to a target organ.\"]": [
    "Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides.",
    "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
    "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
    "A gland releases a hormone into blood; the hormone travels to a target organ."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-the-endocrine-system-keyword\",\"Which key term is most closely linked to “The endocrine system”?\",\"gland\",[\"effector\",\"gland\",\"homeostasis\",\"reflex arc\"],\"gland is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "effector",
    "reflex arc",
    "gland",
    "homeostasis"
  ],
  "[\"Biology\",\"bio-deep-inheritance-dna-genes-and-chromosomes-summary\",\"Which statement best summarises “DNA, genes and chromosomes”?\",\"DNA carries genetic instructions; genes are sections of DNA found on chromosomes.\",[\"Classification groups organisms by shared features and evolutionary relationships.\",\"DNA carries genetic instructions; genes are sections of DNA found on chromosomes.\",\"Helpful inherited traits can become more common over many generations through natural selection.\",\"Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.\"],\"The best summary is: DNA carries genetic instructions; genes are sections of DNA found on chromosomes.\"]": [
    "DNA carries genetic instructions; genes are sections of DNA found on chromosomes.",
    "Helpful inherited traits can become more common over many generations through natural selection.",
    "Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.",
    "Classification groups organisms by shared features and evolutionary relationships."
  ],
  "[\"Biology\",\"bio-deep-inheritance-dna-genes-and-chromosomes-keyword\",\"Which key term is most closely linked to “DNA, genes and chromosomes”?\",\"DNA\",[\"DNA\",\"allele\",\"clone\",\"gamete\"],\"DNA is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "gamete",
    "clone",
    "DNA",
    "allele"
  ],
  "[\"Biology\",\"bio-deep-inheritance-sexual-and-asexual-reproduction-summary\",\"Which statement best summarises “Sexual and asexual reproduction”?\",\"Sexual reproduction combines gametes and creates variation; asexual reproduction makes clones.\",[\"Classification groups organisms by shared features and evolutionary relationships.\",\"Fossils and genetic similarities help show how species have changed over time.\",\"Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.\",\"Sexual reproduction combines gametes and creates variation; asexual reproduction makes clones.\"],\"The best summary is: Sexual reproduction combines gametes and creates variation; asexual reproduction makes clones.\"]": [
    "Sexual reproduction combines gametes and creates variation; asexual reproduction makes clones.",
    "Classification groups organisms by shared features and evolutionary relationships.",
    "Fossils and genetic similarities help show how species have changed over time.",
    "Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly."
  ],
  "[\"Biology\",\"bio-deep-inheritance-sexual-and-asexual-reproduction-keyword\",\"Which key term is most closely linked to “Sexual and asexual reproduction”?\",\"gamete\",[\"DNA\",\"allele\",\"gamete\",\"gene\"],\"gamete is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "DNA",
    "gamete",
    "gene",
    "allele"
  ],
  "[\"Biology\",\"bio-deep-inheritance-genetic-crosses-summary\",\"Which statement best summarises “Genetic crosses”?\",\"Each parent passes on one allele; a Punnett square shows possible offspring genotypes.\",[\"Classification groups organisms by shared features and evolutionary relationships.\",\"Each parent passes on one allele; a Punnett square shows possible offspring genotypes.\",\"Fossils and genetic similarities help show how species have changed over time.\",\"The order of DNA bases codes for amino acids; amino-acid order affects protein shape.\"],\"The best summary is: Each parent passes on one allele; a Punnett square shows possible offspring genotypes.\"]": [
    "The order of DNA bases codes for amino acids; amino-acid order affects protein shape.",
    "Each parent passes on one allele; a Punnett square shows possible offspring genotypes.",
    "Classification groups organisms by shared features and evolutionary relationships.",
    "Fossils and genetic similarities help show how species have changed over time."
  ],
  "[\"Biology\",\"bio-deep-inheritance-genetic-crosses-keyword\",\"Which key term is most closely linked to “Genetic crosses”?\",\"allele\",[\"DNA\",\"allele\",\"gamete\",\"gene\"],\"allele is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "gene",
    "gamete",
    "DNA",
    "allele"
  ],
  "[\"Biology\",\"bio-deep-inheritance-variation-and-mutation-summary\",\"Which statement best summarises “Variation and mutation”?\",\"Variation comes from genes and environment; mutations are changes in DNA.\",[\"Eggs carry X; sperm carry X or Y, giving an approximately 1:1 XX to XY outcome.\",\"Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.\",\"The order of DNA bases codes for amino acids; amino-acid order affects protein shape.\",\"Variation comes from genes and environment; mutations are changes in DNA.\"],\"The best summary is: Variation comes from genes and environment; mutations are changes in DNA.\"]": [
    "Variation comes from genes and environment; mutations are changes in DNA.",
    "Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.",
    "Eggs carry X; sperm carry X or Y, giving an approximately 1:1 XX to XY outcome.",
    "The order of DNA bases codes for amino acids; amino-acid order affects protein shape."
  ],
  "[\"Biology\",\"bio-deep-inheritance-variation-and-mutation-keyword\",\"Which key term is most closely linked to “Variation and mutation”?\",\"mutation\",[\"DNA\",\"gamete\",\"gene\",\"mutation\"],\"mutation is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "mutation",
    "DNA",
    "gene",
    "gamete"
  ],
  "[\"Biology\",\"bio-deep-inheritance-selection-and-evolution-summary\",\"Which statement best summarises “Selection and evolution”?\",\"Helpful inherited traits can become more common over many generations through natural selection.\",[\"DNA carries genetic instructions; genes are sections of DNA found on chromosomes.\",\"Eggs carry X; sperm carry X or Y, giving an approximately 1:1 XX to XY outcome.\",\"Helpful inherited traits can become more common over many generations through natural selection.\",\"Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.\"],\"The best summary is: Helpful inherited traits can become more common over many generations through natural selection.\"]": [
    "Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.",
    "Eggs carry X; sperm carry X or Y, giving an approximately 1:1 XX to XY outcome.",
    "Helpful inherited traits can become more common over many generations through natural selection.",
    "DNA carries genetic instructions; genes are sections of DNA found on chromosomes."
  ],
  "[\"Biology\",\"bio-deep-inheritance-selection-and-evolution-keyword\",\"Which key term is most closely linked to “Selection and evolution”?\",\"natural selection\",[\"DNA\",\"gamete\",\"gene\",\"natural selection\"],\"natural selection is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "DNA",
    "natural selection",
    "gene",
    "gamete"
  ],
  "[\"Biology\",\"bio-deep-inheritance-selective-breeding-and-genetic-engineering-summary\",\"Which statement best summarises “Selective breeding and genetic engineering”?\",\"Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.\",[\"Classification groups organisms by shared features and evolutionary relationships.\",\"Fossils and genetic similarities help show how species have changed over time.\",\"Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.\",\"The order of DNA bases codes for amino acids; amino-acid order affects protein shape.\"],\"The best summary is: Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.\"]": [
    "Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.",
    "Classification groups organisms by shared features and evolutionary relationships.",
    "Fossils and genetic similarities help show how species have changed over time.",
    "The order of DNA bases codes for amino acids; amino-acid order affects protein shape."
  ],
  "[\"Biology\",\"bio-deep-inheritance-selective-breeding-and-genetic-engineering-keyword\",\"Which key term is most closely linked to “Selective breeding and genetic engineering”?\",\"selective breeding\",[\"DNA\",\"gamete\",\"gene\",\"selective breeding\"],\"selective breeding is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "selective breeding",
    "gamete",
    "DNA",
    "gene"
  ],
  "[\"Biology\",\"bio-deep-inheritance-evidence-and-classification-summary\",\"Which statement best summarises “Evidence and classification”?\",\"Classification groups organisms by shared features and evolutionary relationships.\",[\"Classification groups organisms by shared features and evolutionary relationships.\",\"Fossils and genetic similarities help show how species have changed over time.\",\"Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.\",\"The order of DNA bases codes for amino acids; amino-acid order affects protein shape.\"],\"The best summary is: Classification groups organisms by shared features and evolutionary relationships.\"]": [
    "Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.",
    "Fossils and genetic similarities help show how species have changed over time.",
    "Classification groups organisms by shared features and evolutionary relationships.",
    "The order of DNA bases codes for amino acids; amino-acid order affects protein shape."
  ],
  "[\"Biology\",\"bio-deep-inheritance-evidence-and-classification-keyword\",\"Which key term is most closely linked to “Evidence and classification”?\",\"classification\",[\"DNA\",\"classification\",\"gamete\",\"gene\"],\"classification is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "gene",
    "gamete",
    "classification",
    "DNA"
  ],
  "[\"Biology\",\"bio-deep-inheritance-evolution-and-its-evidence-summary\",\"Which statement best summarises “Evolution and its evidence”?\",\"Fossils and genetic similarities help show how species have changed over time.\",[\"Eggs carry X; sperm carry X or Y, giving an approximately 1:1 XX to XY outcome.\",\"Fossils and genetic similarities help show how species have changed over time.\",\"Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.\",\"The order of DNA bases codes for amino acids; amino-acid order affects protein shape.\"],\"The best summary is: Fossils and genetic similarities help show how species have changed over time.\"]": [
    "Fossils and genetic similarities help show how species have changed over time.",
    "Eggs carry X; sperm carry X or Y, giving an approximately 1:1 XX to XY outcome.",
    "The order of DNA bases codes for amino acids; amino-acid order affects protein shape.",
    "Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition."
  ],
  "[\"Biology\",\"bio-deep-inheritance-evolution-and-its-evidence-keyword\",\"Which key term is most closely linked to “Evolution and its evidence”?\",\"fossil\",[\"DNA\",\"fossil\",\"gamete\",\"gene\"],\"fossil is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "fossil",
    "gene",
    "gamete",
    "DNA"
  ],
  "[\"Biology\",\"bio-deep-inheritance-inherited-disorders-and-screening-summary\",\"Which statement best summarises “Inherited disorders and screening”?\",\"Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.\",[\"Each parent passes on one allele; a Punnett square shows possible offspring genotypes.\",\"Helpful inherited traits can become more common over many generations through natural selection.\",\"Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.\",\"Variation comes from genes and environment; mutations are changes in DNA.\"],\"The best summary is: Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.\"]": [
    "Variation comes from genes and environment; mutations are changes in DNA.",
    "Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.",
    "Helpful inherited traits can become more common over many generations through natural selection.",
    "Each parent passes on one allele; a Punnett square shows possible offspring genotypes."
  ],
  "[\"Biology\",\"bio-deep-inheritance-inherited-disorders-and-screening-keyword\",\"Which key term is most closely linked to “Inherited disorders and screening”?\",\"carrier\",[\"DNA\",\"carrier\",\"gamete\",\"gene\"],\"carrier is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "DNA",
    "gene",
    "gamete",
    "carrier"
  ],
  "[\"Biology\",\"bio-deep-inheritance-sex-chromosomes-and-inheritance-summary\",\"Which statement best summarises “Sex chromosomes and inheritance”?\",\"Eggs carry X; sperm carry X or Y, giving an approximately 1:1 XX to XY outcome.\",[\"DNA carries genetic instructions; genes are sections of DNA found on chromosomes.\",\"Each parent passes on one allele; a Punnett square shows possible offspring genotypes.\",\"Eggs carry X; sperm carry X or Y, giving an approximately 1:1 XX to XY outcome.\",\"Sexual reproduction combines gametes and creates variation; asexual reproduction makes clones.\"],\"The best summary is: Eggs carry X; sperm carry X or Y, giving an approximately 1:1 XX to XY outcome.\"]": [
    "Sexual reproduction combines gametes and creates variation; asexual reproduction makes clones.",
    "Each parent passes on one allele; a Punnett square shows possible offspring genotypes.",
    "DNA carries genetic instructions; genes are sections of DNA found on chromosomes.",
    "Eggs carry X; sperm carry X or Y, giving an approximately 1:1 XX to XY outcome."
  ],
  "[\"Biology\",\"bio-deep-inheritance-sex-chromosomes-and-inheritance-keyword\",\"Which key term is most closely linked to “Sex chromosomes and inheritance”?\",\"chromosome\",[\"DNA\",\"chromosome\",\"gamete\",\"gene\"],\"chromosome is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "DNA",
    "chromosome",
    "gene",
    "gamete"
  ],
  "[\"Biology\",\"bio-deep-ecology-communities-and-ecosystems-summary\",\"Which statement best summarises “Communities and ecosystems”?\",\"A community is all the populations living together; an ecosystem includes them and their environment.\",[\"A community is all the populations living together; an ecosystem includes them and their environment.\",\"Compare benefits, costs and evidence before judging a conservation or farming action.\",\"Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.\",\"Only some biomass passes to the next level; much is lost in waste, respiration and uneaten parts.\"],\"The best summary is: A community is all the populations living together; an ecosystem includes them and their environment.\"]": [
    "A community is all the populations living together; an ecosystem includes them and their environment.",
    "Compare benefits, costs and evidence before judging a conservation or farming action.",
    "Only some biomass passes to the next level; much is lost in waste, respiration and uneaten parts.",
    "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts."
  ],
  "[\"Biology\",\"bio-deep-ecology-communities-and-ecosystems-keyword\",\"Which key term is most closely linked to “Communities and ecosystems”?\",\"population\",[\"adaptation\",\"competition\",\"population\",\"producer\"],\"population is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "producer",
    "competition",
    "population",
    "adaptation"
  ],
  "[\"Biology\",\"bio-deep-ecology-competition-and-adaptation-summary\",\"Which statement best summarises “Competition and adaptation”?\",\"Organisms compete for limited resources; adaptations improve survival in an environment.\",[\"Compare benefits, costs and evidence before judging a conservation or farming action.\",\"Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.\",\"Only some biomass passes to the next level; much is lost in waste, respiration and uneaten parts.\",\"Organisms compete for limited resources; adaptations improve survival in an environment.\"],\"The best summary is: Organisms compete for limited resources; adaptations improve survival in an environment.\"]": [
    "Compare benefits, costs and evidence before judging a conservation or farming action.",
    "Only some biomass passes to the next level; much is lost in waste, respiration and uneaten parts.",
    "Organisms compete for limited resources; adaptations improve survival in an environment.",
    "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts."
  ],
  "[\"Biology\",\"bio-deep-ecology-competition-and-adaptation-keyword\",\"Which key term is most closely linked to “Competition and adaptation”?\",\"competition\",[\"competition\",\"ecosystem\",\"population\",\"producer\"],\"competition is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "producer",
    "competition",
    "population",
    "ecosystem"
  ],
  "[\"Biology\",\"bio-deep-ecology-food-chains-and-biomass-summary\",\"Which statement best summarises “Food chains and biomass”?\",\"Arrows show the direction of biomass transfer, from food to the organism that eats it.\",[\"A community is all the populations living together; an ecosystem includes them and their environment.\",\"Arrows show the direction of biomass transfer, from food to the organism that eats it.\",\"Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.\",\"Organisms compete for limited resources; adaptations improve survival in an environment.\"],\"The best summary is: Arrows show the direction of biomass transfer, from food to the organism that eats it.\"]": [
    "Arrows show the direction of biomass transfer, from food to the organism that eats it.",
    "Organisms compete for limited resources; adaptations improve survival in an environment.",
    "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.",
    "A community is all the populations living together; an ecosystem includes them and their environment."
  ],
  "[\"Biology\",\"bio-deep-ecology-food-chains-and-biomass-keyword\",\"Which key term is most closely linked to “Food chains and biomass”?\",\"producer\",[\"competition\",\"ecosystem\",\"population\",\"producer\"],\"producer is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "producer",
    "ecosystem",
    "competition",
    "population"
  ],
  "[\"Biology\",\"bio-deep-ecology-carbon-water-and-decay-summary\",\"Which statement best summarises “Carbon, water and decay”?\",\"Materials cycle between organisms and the environment; decomposers return nutrients.\",[\"A community is all the populations living together; an ecosystem includes them and their environment.\",\"Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.\",\"Materials cycle between organisms and the environment; decomposers return nutrients.\",\"Organisms compete for limited resources; adaptations improve survival in an environment.\"],\"The best summary is: Materials cycle between organisms and the environment; decomposers return nutrients.\"]": [
    "Materials cycle between organisms and the environment; decomposers return nutrients.",
    "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.",
    "A community is all the populations living together; an ecosystem includes them and their environment.",
    "Organisms compete for limited resources; adaptations improve survival in an environment."
  ],
  "[\"Biology\",\"bio-deep-ecology-carbon-water-and-decay-keyword\",\"Which key term is most closely linked to “Carbon, water and decay”?\",\"decomposer\",[\"competition\",\"decomposer\",\"ecosystem\",\"population\"],\"decomposer is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "population",
    "decomposer",
    "ecosystem",
    "competition"
  ],
  "[\"Biology\",\"bio-deep-ecology-sampling-and-fieldwork-summary\",\"Which statement best summarises “Sampling and fieldwork”?\",\"Quadrats estimate abundance; transects show how distribution changes across an area.\",[\"Arrows show the direction of biomass transfer, from food to the organism that eats it.\",\"Materials cycle between organisms and the environment; decomposers return nutrients.\",\"Organisms compete for limited resources; adaptations improve survival in an environment.\",\"Quadrats estimate abundance; transects show how distribution changes across an area.\"],\"The best summary is: Quadrats estimate abundance; transects show how distribution changes across an area.\"]": [
    "Organisms compete for limited resources; adaptations improve survival in an environment.",
    "Arrows show the direction of biomass transfer, from food to the organism that eats it.",
    "Materials cycle between organisms and the environment; decomposers return nutrients.",
    "Quadrats estimate abundance; transects show how distribution changes across an area."
  ],
  "[\"Biology\",\"bio-deep-ecology-sampling-and-fieldwork-keyword\",\"Which key term is most closely linked to “Sampling and fieldwork”?\",\"quadrat\",[\"competition\",\"ecosystem\",\"population\",\"quadrat\"],\"quadrat is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "competition",
    "population",
    "ecosystem",
    "quadrat"
  ],
  "[\"Biology\",\"bio-deep-ecology-biodiversity-and-food-security-summary\",\"Which statement best summarises “Biodiversity and food security”?\",\"Biodiversity supports stable ecosystems; food security depends on reliable supplies.\",[\"Arrows show the direction of biomass transfer, from food to the organism that eats it.\",\"Biodiversity supports stable ecosystems; food security depends on reliable supplies.\",\"Materials cycle between organisms and the environment; decomposers return nutrients.\",\"Quadrats estimate abundance; transects show how distribution changes across an area.\"],\"The best summary is: Biodiversity supports stable ecosystems; food security depends on reliable supplies.\"]": [
    "Biodiversity supports stable ecosystems; food security depends on reliable supplies.",
    "Materials cycle between organisms and the environment; decomposers return nutrients.",
    "Quadrats estimate abundance; transects show how distribution changes across an area.",
    "Arrows show the direction of biomass transfer, from food to the organism that eats it."
  ],
  "[\"Biology\",\"bio-deep-ecology-biodiversity-and-food-security-keyword\",\"Which key term is most closely linked to “Biodiversity and food security”?\",\"biodiversity\",[\"biodiversity\",\"competition\",\"ecosystem\",\"population\"],\"biodiversity is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "population",
    "biodiversity",
    "ecosystem",
    "competition"
  ],
  "[\"Biology\",\"bio-deep-ecology-evaluating-interventions-summary\",\"Which statement best summarises “Evaluating interventions”?\",\"Compare benefits, costs and evidence before judging a conservation or farming action.\",[\"Arrows show the direction of biomass transfer, from food to the organism that eats it.\",\"Compare benefits, costs and evidence before judging a conservation or farming action.\",\"Materials cycle between organisms and the environment; decomposers return nutrients.\",\"Quadrats estimate abundance; transects show how distribution changes across an area.\"],\"The best summary is: Compare benefits, costs and evidence before judging a conservation or farming action.\"]": [
    "Materials cycle between organisms and the environment; decomposers return nutrients.",
    "Quadrats estimate abundance; transects show how distribution changes across an area.",
    "Arrows show the direction of biomass transfer, from food to the organism that eats it.",
    "Compare benefits, costs and evidence before judging a conservation or farming action."
  ],
  "[\"Biology\",\"bio-deep-ecology-evaluating-interventions-keyword\",\"Which key term is most closely linked to “Evaluating interventions”?\",\"conservation\",[\"competition\",\"conservation\",\"ecosystem\",\"population\"],\"conservation is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "population",
    "conservation",
    "ecosystem",
    "competition"
  ],
  "[\"Biology\",\"bio-deep-ecology-human-impacts-and-biodiversity-summary\",\"Which statement best summarises “Human impacts and biodiversity”?\",\"Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.\",[\"A community is all the populations living together; an ecosystem includes them and their environment.\",\"Arrows show the direction of biomass transfer, from food to the organism that eats it.\",\"Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.\",\"Organisms compete for limited resources; adaptations improve survival in an environment.\"],\"The best summary is: Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.\"]": [
    "A community is all the populations living together; an ecosystem includes them and their environment.",
    "Organisms compete for limited resources; adaptations improve survival in an environment.",
    "Arrows show the direction of biomass transfer, from food to the organism that eats it.",
    "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts."
  ],
  "[\"Biology\",\"bio-deep-ecology-human-impacts-and-biodiversity-keyword\",\"Which key term is most closely linked to “Human impacts and biodiversity”?\",\"biodiversity\",[\"biodiversity\",\"competition\",\"ecosystem\",\"population\"],\"biodiversity is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "biodiversity",
    "competition",
    "population",
    "ecosystem"
  ],
  "[\"Biology\",\"aqa-cell-cube-ratio\",\"A cube has side length 2 cm. Its area is 24 cm² and volume is 8 cm³. What is SA:V?\",\"3:1\",[\"1:3\",\"3:1\",\"6:1\",\"8:24\"],\"24 ÷ 8 = 3, so the ratio is 3:1.\"]": [
    "3:1",
    "6:1",
    "1:3",
    "8:24"
  ],
  "[\"Biology\",\"aqa-cell-exchange-limit\",\"Why is diffusion alone harder for a larger organism?\",\"It has less surface area per unit volume\",[\"It has less surface area per unit volume\",\"It has more surface area per unit volume\",\"It has no cell membranes\",\"Its cells stop respiring\"],\"As size increases, surface area per unit volume usually falls, so exchange is less effective.\"]": [
    "It has no cell membranes",
    "Its cells stop respiring",
    "It has more surface area per unit volume",
    "It has less surface area per unit volume"
  ],
  "[\"Biology\",\"aqa-bio-step-organisation-6-0\",\"What happens to diffusion when the gradient is steeper?\",\"It is faster\",[\"It is faster\",\"It needs ATP\",\"It reverses automatically\",\"It stops\"],\"A steep concentration gradient increases diffusion; blood flow and ventilation help keep it steep.\"]": [
    "It stops",
    "It is faster",
    "It reverses automatically",
    "It needs ATP"
  ],
  "[\"Biology\",\"aqa-bio-step-organisation-6-1\",\"What maintains a steep gas-exchange gradient at alveoli?\",\"Ventilation and blood flow\",[\"A smaller surface area\",\"A thick membrane\",\"No circulation\",\"Ventilation and blood flow\"],\"A steep concentration gradient increases diffusion; blood flow and ventilation help keep it steep.\"]": [
    "A thick membrane",
    "Ventilation and blood flow",
    "No circulation",
    "A smaller surface area"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-2-1\",\"What is an effect of insulin?\",\"More glucose is removed from blood\",[\"Glycogen turns to glucose\",\"Less glucose enters cells\",\"More glucose is removed from blood\",\"Water becomes glucose\"],\"Insulin lowers high blood glucose.\"]": [
    "Glycogen turns to glucose",
    "Less glucose enters cells",
    "Water becomes glucose",
    "More glucose is removed from blood"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-3-0\",\"Which hormone triggers ovulation?\",\"LH\",[\"FSH\",\"Insulin\",\"LH\",\"Oestrogen\"],\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\"]": [
    "FSH",
    "Insulin",
    "Oestrogen",
    "LH"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-9-0\",\"Which hormone stimulates egg maturation?\",\"FSH\",[\"Amylase\",\"Bile\",\"FSH\",\"Lipase\"],\"FSH stimulates maturation of an egg in an ovarian follicle.\"]": [
    "FSH",
    "Amylase",
    "Bile",
    "Lipase"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-8-0\",\"What does the order of DNA bases help determine?\",\"Amino-acid sequence\",[\"Amino-acid sequence\",\"Food-chain direction\",\"Only body temperature\",\"The size of every organ\"],\"The order of DNA bases codes for amino acids.\"]": [
    "Amino-acid sequence",
    "Only body temperature",
    "Food-chain direction",
    "The size of every organ"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-5-0\",\"What does biodiversity describe?\",\"Variety of living organisms\",[\"Only crop yield\",\"Only one population size\",\"Only soil pH\",\"Variety of living organisms\"],\"Biodiversity is the variety of living organisms.\"]": [
    "Variety of living organisms",
    "Only crop yield",
    "Only soil pH",
    "Only one population size"
  ],
  "[\"Biology\",\"bio-deep-cell-biology-surface-area-to-volume-reasoning-summary\",\"Which statement best summarises “Surface-area-to-volume reasoning”?\",\"A smaller cell has more surface area for each unit of volume, so exchange is easier.\",[\"A smaller cell has more surface area for each unit of volume, so exchange is easier.\",\"Active transport uses energy to move substances against their concentration gradient.\",\"Mitosis makes two genetically identical cells; stem cells can develop into specialised cells.\",\"Prepare a thin specimen, start on low power, focus, then draw only what you can see.\"],\"The best summary is: A smaller cell has more surface area for each unit of volume, so exchange is easier.\"]": [
    "Mitosis makes two genetically identical cells; stem cells can develop into specialised cells.",
    "Prepare a thin specimen, start on low power, focus, then draw only what you can see.",
    "Active transport uses energy to move substances against their concentration gradient.",
    "A smaller cell has more surface area for each unit of volume, so exchange is easier."
  ],
  "[\"Biology\",\"bio-deep-cell-biology-surface-area-to-volume-reasoning-keyword\",\"Which key term is most closely linked to “Surface-area-to-volume reasoning”?\",\"surface area\",[\"nucleus\",\"prokaryote\",\"ribosomes\",\"surface area\"],\"surface area is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "nucleus",
    "ribosomes",
    "prokaryote",
    "surface area"
  ],
  "[\"Biology\",\"bio-deep-organisation-using-exchange-gradients-summary\",\"Which statement best summarises “Using exchange gradients”?\",\"A steep concentration gradient increases diffusion; blood flow and ventilation help keep it steep.\",[\"A steep concentration gradient increases diffusion; blood flow and ventilation help keep it steep.\",\"Alveoli exchange gases quickly because they have thin walls, a large area and a good blood supply.\",\"Bile neutralises stomach acid and emulsifies fats, giving lipase more surface to work on.\",\"The right side pumps blood to the lungs; the left side pumps oxygenated blood to the body.\"],\"The best summary is: A steep concentration gradient increases diffusion; blood flow and ventilation help keep it steep.\"]": [
    "Bile neutralises stomach acid and emulsifies fats, giving lipase more surface to work on.",
    "A steep concentration gradient increases diffusion; blood flow and ventilation help keep it steep.",
    "The right side pumps blood to the lungs; the left side pumps oxygenated blood to the body.",
    "Alveoli exchange gases quickly because they have thin walls, a large area and a good blood supply."
  ],
  "[\"Biology\",\"bio-deep-organisation-using-exchange-gradients-keyword\",\"Which key term is most closely linked to “Using exchange gradients”?\",\"gradient\",[\"enzyme\",\"gradient\",\"organ\",\"tissue\"],\"gradient is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "tissue",
    "gradient",
    "organ",
    "enzyme"
  ],
  "[\"Biology\",\"bio-deep-infection-response-pathogens-and-transmission-summary\",\"Which statement best summarises “Pathogens and transmission”?\",\"Pathogens cause infectious disease and can spread through air, water or direct contact.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Different pathogens spread in different ways, so prevention depends on the disease.\",\"Pathogens cause infectious disease and can spread through air, water or direct contact.\",\"Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.\"],\"The best summary is: Pathogens cause infectious disease and can spread through air, water or direct contact.\"]": [
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.",
    "Pathogens cause infectious disease and can spread through air, water or direct contact.",
    "Different pathogens spread in different ways, so prevention depends on the disease."
  ],
  "[\"Biology\",\"bio-deep-infection-response-defences-and-immunity-summary\",\"Which statement best summarises “Defences and immunity”?\",\"Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.\",[\"A claim is stronger when the method is fair, the sample is large and results can be repeated.\",\"A reflex is a fast automatic response carried through a reflex arc.\",\"Different pathogens spread in different ways, so prevention depends on the disease.\",\"Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.\"],\"The best summary is: Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.\"]": [
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.",
    "A claim is stronger when the method is fair, the sample is large and results can be repeated.",
    "Different pathogens spread in different ways, so prevention depends on the disease."
  ],
  "[\"Biology\",\"bio-deep-infection-response-developing-medicines-summary\",\"Which statement best summarises “Developing medicines”?\",\"New medicines are tested for safety, dose and effectiveness before wide use.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Different pathogens spread in different ways, so prevention depends on the disease.\",\"New medicines are tested for safety, dose and effectiveness before wide use.\",\"Pathogens cause infectious disease and can spread through air, water or direct contact.\"],\"The best summary is: New medicines are tested for safety, dose and effectiveness before wide use.\"]": [
    "Pathogens cause infectious disease and can spread through air, water or direct contact.",
    "New medicines are tested for safety, dose and effectiveness before wide use.",
    "Different pathogens spread in different ways, so prevention depends on the disease.",
    "A reflex is a fast automatic response carried through a reflex arc."
  ],
  "[\"Biology\",\"bio-deep-infection-response-interpreting-evidence-summary\",\"Which statement best summarises “Interpreting evidence”?\",\"A claim is stronger when the method is fair, the sample is large and results can be repeated.\",[\"A claim is stronger when the method is fair, the sample is large and results can be repeated.\",\"A reflex is a fast automatic response carried through a reflex arc.\",\"New medicines are tested for safety, dose and effectiveness before wide use.\",\"Vaccines prepare the immune system; antibiotics kill bacteria, not viruses.\"],\"The best summary is: A claim is stronger when the method is fair, the sample is large and results can be repeated.\"]": [
    "Vaccines prepare the immune system; antibiotics kill bacteria, not viruses.",
    "New medicines are tested for safety, dose and effectiveness before wide use.",
    "A reflex is a fast automatic response carried through a reflex arc.",
    "A claim is stronger when the method is fair, the sample is large and results can be repeated."
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-photosynthesis-summary\",\"Which statement best summarises “Photosynthesis”?\",\"Plants use light energy to turn carbon dioxide and water into glucose and oxygen.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Insulin lowers high blood glucose.\",\"Measure a change over time, keep other factors constant, and repeat readings.\",\"Plants use light energy to turn carbon dioxide and water into glucose and oxygen.\"],\"The best summary is: Plants use light energy to turn carbon dioxide and water into glucose and oxygen.\"]": [
    "Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
    "Measure a change over time, keep other factors constant, and repeat readings.",
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Insulin lowers high blood glucose."
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-limiting-factors-summary\",\"Which statement best summarises “Limiting factors”?\",\"The slowest available input limits photosynthesis: light, carbon dioxide or temperature.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Plants use light energy to turn carbon dioxide and water into glucose and oxygen.\",\"The slowest available input limits photosynthesis: light, carbon dioxide or temperature.\",\"With oxygen, cells release energy from glucose and make carbon dioxide and water.\"],\"The best summary is: The slowest available input limits photosynthesis: light, carbon dioxide or temperature.\"]": [
    "The slowest available input limits photosynthesis: light, carbon dioxide or temperature.",
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
    "With oxygen, cells release energy from glucose and make carbon dioxide and water."
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-aerobic-respiration-summary\",\"Which statement best summarises “Aerobic respiration”?\",\"With oxygen, cells release energy from glucose and make carbon dioxide and water.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.\",\"Measure a change over time, keep other factors constant, and repeat readings.\",\"With oxygen, cells release energy from glucose and make carbon dioxide and water.\"],\"The best summary is: With oxygen, cells release energy from glucose and make carbon dioxide and water.\"]": [
    "Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.",
    "Measure a change over time, keep other factors constant, and repeat readings.",
    "A reflex is a fast automatic response carried through a reflex arc.",
    "With oxygen, cells release energy from glucose and make carbon dioxide and water."
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-anaerobic-respiration-summary\",\"Which statement best summarises “Anaerobic respiration”?\",\"Without enough oxygen, muscles release less energy and produce lactic acid.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Measure a change over time, keep other factors constant, and repeat readings.\",\"Plants use light energy to turn carbon dioxide and water into glucose and oxygen.\",\"Without enough oxygen, muscles release less energy and produce lactic acid.\"],\"The best summary is: Without enough oxygen, muscles release less energy and produce lactic acid.\"]": [
    "Without enough oxygen, muscles release less energy and produce lactic acid.",
    "Measure a change over time, keep other factors constant, and repeat readings.",
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Plants use light energy to turn carbon dioxide and water into glucose and oxygen."
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-exercise-and-metabolism-summary\",\"Which statement best summarises “Exercise and metabolism”?\",\"Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.\",\"Measure a change over time, keep other factors constant, and repeat readings.\",\"Plants use light energy to turn carbon dioxide and water into glucose and oxygen.\"],\"The best summary is: Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.\"]": [
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Exercise raises energy demand, so breathing and heart rate increase to deliver more oxygen and glucose.",
    "Plants use light energy to turn carbon dioxide and water into glucose and oxygen.",
    "Measure a change over time, keep other factors constant, and repeat readings."
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-measuring-a-biological-rate-summary\",\"Which statement best summarises “Measuring a biological rate”?\",\"Measure a change over time, keep other factors constant, and repeat readings.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Measure a change over time, keep other factors constant, and repeat readings.\",\"With oxygen, cells release energy from glucose and make carbon dioxide and water.\",\"Without enough oxygen, muscles release less energy and produce lactic acid.\"],\"The best summary is: Measure a change over time, keep other factors constant, and repeat readings.\"]": [
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Measure a change over time, keep other factors constant, and repeat readings.",
    "With oxygen, cells release energy from glucose and make carbon dioxide and water.",
    "Without enough oxygen, muscles release less energy and produce lactic acid."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-keeping-conditions-stable-summary\",\"Which statement best summarises “Keeping conditions stable”?\",\"Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.\",[\"A gland releases a hormone into blood; the hormone travels to a target organ.\",\"A reflex is a fast automatic response carried through a reflex arc.\",\"Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.\",\"Insulin lowers high blood glucose.\"],\"The best summary is: Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.\"]": [
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Insulin lowers high blood glucose.",
    "A gland releases a hormone into blood; the hormone travels to a target organ.",
    "Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-reflexes-and-the-nervous-system-summary\",\"Which statement best summarises “Reflexes and the nervous system”?\",\"A reflex is a fast automatic response carried through a reflex arc.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Change one factor, measure reaction time, repeat and compare means.\",\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\",\"Insulin lowers high blood glucose.\"],\"The best summary is: A reflex is a fast automatic response carried through a reflex arc.\"]": [
    "Change one factor, measure reaction time, repeat and compare means.",
    "A reflex is a fast automatic response carried through a reflex arc.",
    "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
    "Insulin lowers high blood glucose."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-blood-glucose-summary\",\"Which statement best summarises “Blood glucose”?\",\"Insulin lowers high blood glucose.\",[\"Glycogen turns to glucose\",\"Insulin lowers high blood glucose.\",\"Less glucose enters cells\",\"Water becomes glucose\"],\"The best summary is: Insulin lowers high blood glucose.\"]": [
    "Glycogen turns to glucose",
    "Less glucose enters cells",
    "Water becomes glucose",
    "Insulin lowers high blood glucose."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-reproduction-and-hormones-summary\",\"Which statement best summarises “Reproduction and hormones”?\",\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\",[\"A gland releases a hormone into blood; the hormone travels to a target organ.\",\"A reflex is a fast automatic response carried through a reflex arc.\",\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\",\"Insulin lowers high blood glucose.\"],\"The best summary is: FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\"]": [
    "A reflex is a fast automatic response carried through a reflex arc.",
    "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
    "Insulin lowers high blood glucose.",
    "A gland releases a hormone into blood; the hormone travels to a target organ."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-reaction-time-investigations-summary\",\"Which statement best summarises “Reaction-time investigations”?\",\"Change one factor, measure reaction time, repeat and compare means.\",[\"A gland releases a hormone into blood; the hormone travels to a target organ.\",\"A reflex is a fast automatic response carried through a reflex arc.\",\"Change one factor, measure reaction time, repeat and compare means.\",\"Insulin lowers high blood glucose.\"],\"The best summary is: Change one factor, measure reaction time, repeat and compare means.\"]": [
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Insulin lowers high blood glucose.",
    "A gland releases a hormone into blood; the hormone travels to a target organ.",
    "Change one factor, measure reaction time, repeat and compare means."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-reproductive-hormones-summary\",\"Which statement best summarises “Reproductive hormones”?\",\"FSH stimulates maturation of an egg in an ovarian follicle. LH triggers ovulation. Oestrogen and progesterone help coordinate changes in the uterine lining.\",[\"Change one factor, measure reaction time, repeat and compare means.\",\"FSH stimulates maturation of an egg in an ovarian follicle. LH triggers ovulation. Oestrogen and progesterone help coordinate changes in the uterine lining.\",\"Insulin lowers high blood glucose.\",\"Water becomes glucose\"],\"The best summary is: FSH stimulates maturation of an egg in an ovarian follicle. LH triggers ovulation. Oestrogen and progesterone help coordinate changes in the uterine lining.\"]": [
    "Change one factor, measure reaction time, repeat and compare means.",
    "FSH stimulates maturation of an egg in an ovarian follicle. LH triggers ovulation. Oestrogen and progesterone help coordinate changes in the uterine lining.",
    "Insulin lowers high blood glucose.",
    "Water becomes glucose"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-the-endocrine-system-summary\",\"Which statement best summarises “The endocrine system”?\",\"A gland releases a hormone into blood; the hormone travels to a target organ.\",[\"A gland releases a hormone into blood; the hormone travels to a target organ.\",\"A reflex is a fast automatic response carried through a reflex arc.\",\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\",\"Insulin lowers high blood glucose.\"],\"The best summary is: A gland releases a hormone into blood; the hormone travels to a target organ.\"]": [
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Insulin lowers high blood glucose.",
    "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
    "A gland releases a hormone into blood; the hormone travels to a target organ."
  ],
  "[\"Biology\",\"bio-deep-inheritance-genetic-crosses-summary\",\"Which statement best summarises “Genetic crosses”?\",\"Each parent passes on one allele; a Punnett square shows possible offspring genotypes.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Classification groups organisms by shared features and evolutionary relationships.\",\"Each parent passes on one allele; a Punnett square shows possible offspring genotypes.\",\"Fossils and genetic similarities help show how species have changed over time.\"],\"The best summary is: Each parent passes on one allele; a Punnett square shows possible offspring genotypes.\"]": [
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Classification groups organisms by shared features and evolutionary relationships.",
    "Each parent passes on one allele; a Punnett square shows possible offspring genotypes.",
    "Fossils and genetic similarities help show how species have changed over time."
  ],
  "[\"Biology\",\"bio-deep-inheritance-variation-and-mutation-summary\",\"Which statement best summarises “Variation and mutation”?\",\"Variation comes from genes and environment; mutations are changes in DNA.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Eggs carry X; sperm carry X or Y, giving an approximately 1:1 XX to XY outcome.\",\"Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.\",\"Variation comes from genes and environment; mutations are changes in DNA.\"],\"The best summary is: Variation comes from genes and environment; mutations are changes in DNA.\"]": [
    "Variation comes from genes and environment; mutations are changes in DNA.",
    "Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.",
    "Eggs carry X; sperm carry X or Y, giving an approximately 1:1 XX to XY outcome.",
    "A reflex is a fast automatic response carried through a reflex arc."
  ],
  "[\"Biology\",\"bio-deep-inheritance-selective-breeding-and-genetic-engineering-summary\",\"Which statement best summarises “Selective breeding and genetic engineering”?\",\"Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Classification groups organisms by shared features and evolutionary relationships.\",\"Fossils and genetic similarities help show how species have changed over time.\",\"Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.\"],\"The best summary is: Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly.\"]": [
    "Classification groups organisms by shared features and evolutionary relationships.",
    "Fossils and genetic similarities help show how species have changed over time.",
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Selective breeding chooses parents with desired traits; genetic engineering changes DNA directly."
  ],
  "[\"Biology\",\"bio-deep-inheritance-evidence-and-classification-summary\",\"Which statement best summarises “Evidence and classification”?\",\"Classification groups organisms by shared features and evolutionary relationships.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Classification groups organisms by shared features and evolutionary relationships.\",\"Fossils and genetic similarities help show how species have changed over time.\",\"Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.\"],\"The best summary is: Classification groups organisms by shared features and evolutionary relationships.\"]": [
    "Polydactyly is dominant; cystic fibrosis is recessive, so two recessive alleles are needed for the condition.",
    "Fossils and genetic similarities help show how species have changed over time.",
    "Classification groups organisms by shared features and evolutionary relationships.",
    "A reflex is a fast automatic response carried through a reflex arc."
  ],
  "[\"Biology\",\"bio-deep-ecology-communities-and-ecosystems-summary\",\"Which statement best summarises “Communities and ecosystems”?\",\"A community is all the populations living together; an ecosystem includes them and their environment.\",[\"A community is all the populations living together; an ecosystem includes them and their environment.\",\"A reflex is a fast automatic response carried through a reflex arc.\",\"Compare benefits, costs and evidence before judging a conservation or farming action.\",\"Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.\"],\"The best summary is: A community is all the populations living together; an ecosystem includes them and their environment.\"]": [
    "Compare benefits, costs and evidence before judging a conservation or farming action.",
    "A community is all the populations living together; an ecosystem includes them and their environment.",
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts."
  ],
  "[\"Biology\",\"bio-deep-ecology-competition-and-adaptation-summary\",\"Which statement best summarises “Competition and adaptation”?\",\"Organisms compete for limited resources; adaptations improve survival in an environment.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"Compare benefits, costs and evidence before judging a conservation or farming action.\",\"Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.\",\"Organisms compete for limited resources; adaptations improve survival in an environment.\"],\"The best summary is: Organisms compete for limited resources; adaptations improve survival in an environment.\"]": [
    "Compare benefits, costs and evidence before judging a conservation or farming action.",
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Organisms compete for limited resources; adaptations improve survival in an environment.",
    "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts."
  ],
  "[\"Biology\",\"bio-deep-ecology-biodiversity-and-food-security-summary\",\"Which statement best summarises “Biodiversity”?\",\"Biodiversity is the variety of living organisms.\",[\"Arrows show the direction of biomass transfer, from food to the organism that eats it.\",\"Biodiversity is the variety of living organisms.\",\"Materials cycle between organisms and the environment; decomposers return nutrients.\",\"Quadrats estimate abundance; transects show how distribution changes across an area.\"],\"The best summary is: Biodiversity is the variety of living organisms.\"]": [
    "Materials cycle between organisms and the environment; decomposers return nutrients.",
    "Biodiversity is the variety of living organisms.",
    "Quadrats estimate abundance; transects show how distribution changes across an area.",
    "Arrows show the direction of biomass transfer, from food to the organism that eats it."
  ],
  "[\"Biology\",\"aqa-transport-completion-q10\",\"Which statement correctly compares plant and animal cells placed in very dilute surroundings?\",\"Water can enter both by osmosis; a plant cell wall resists excessive expansion, while an animal cell may burst.\",[\"A cell wall prevents all movement of water.\",\"Sugar always enters both cells by osmosis.\",\"Water can enter both by osmosis; a plant cell wall resists excessive expansion, while an animal cell may burst.\",\"Water leaves both cells because the surroundings are dilute.\"],\"Water, not sugar, moves by osmosis through a partially permeable membrane. The plant wall supports the cell; in concentrated surroundings both can lose water, with plant tissue becoming less firm. A wall does not stop all water entry.\"]": [
    "Water can enter both by osmosis; a plant cell wall resists excessive expansion, while an animal cell may burst.",
    "Sugar always enters both cells by osmosis.",
    "A cell wall prevents all movement of water.",
    "Water leaves both cells because the surroundings are dilute."
  ],
  "[\"Biology\",\"aqa-digestion-completion-q02\",\"Which statement best explains enzyme specificity in the simplified lock-and-key model?\",\"An enzyme is a protein catalyst whose active-site shape fits particular substrates.\",[\"An enzyme is a protein catalyst whose active-site shape fits particular substrates.\",\"An enzyme makes a substrate unnecessary.\",\"Enzymes are used up as fuel for every reaction.\",\"Every enzyme works equally well on every substrate.\"],\"The enzyme speeds the reaction and is not used up. Complementary shape explains why a substrate fits; the lock-and-key analogy is a simplified model. Enzymes do not supply the substrate or work equally on every molecule.\"]": [
    "Enzymes are used up as fuel for every reaction.",
    "An enzyme is a protein catalyst whose active-site shape fits particular substrates.",
    "Every enzyme works equally well on every substrate.",
    "An enzyme makes a substrate unnecessary."
  ],
  "[\"Biology\",\"aqa-circulation-completion-q18\",\"A survey of 1000 volunteers from one specialist clinic finds more disease than a random community sample of 200. Which conclusion is best supported?\",\"The clinic sample may be biased; sample size alone does not make it representative.\",[\"Every member of the community has the clinic disease rate.\",\"Selection method never affects disease estimates.\",\"The clinic sample may be biased; sample size alone does not make it representative.\",\"The larger sample always gives the true population risk.\"],\"Clinic patients and volunteers can differ from the target community. Compare sampling, population, follow-up and case definitions before inferring population risk. A bigger sample reduces some random variation but does not automatically remove selection bias.\"]": [
    "The larger sample always gives the true population risk.",
    "Every member of the community has the clinic disease rate.",
    "Selection method never affects disease estimates.",
    "The clinic sample may be biased; sample size alone does not make it representative."
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-7-0\",\"What does a monoclonal antibody recognise?\",\"One specific antigen\",[\"Any chromosome\",\"Every molecule equally\",\"One specific antigen\",\"Only oxygen\"],\"Monoclonal antibodies bind one specific antigen and can be used in tests or targeted treatments.\"]": [
    "Every molecule equally",
    "Only oxygen",
    "Any chromosome",
    "One specific antigen"
  ],
  "[\"Biology\",\"aqa-bio-step-infection-response-7-1\",\"Which is a possible use of monoclonal antibodies?\",\"A diagnostic test\",[\"A diagnostic test\",\"Carrying water in xylem\",\"Making bile\",\"Triggering mitosis in every cell\"],\"Monoclonal antibodies bind one specific antigen and can be used in tests or targeted treatments.\"]": [
    "Making bile",
    "Carrying water in xylem",
    "A diagnostic test",
    "Triggering mitosis in every cell"
  ],
  "[\"Biology\",\"aqa-bio-step-bioenergetics-6-0\",\"If added light no longer increases rate, what can be inferred?\",\"Light is not currently limiting\",[\"Light has become a product\",\"Light is not currently limiting\",\"Photosynthesis has ceased forever\",\"Temperature must be zero\"],\"Improving one factor stops helping when another factor becomes limiting.\"]": [
    "Light has become a product",
    "Photosynthesis has ceased forever",
    "Temperature must be zero",
    "Light is not currently limiting"
  ],
  "[\"Biology\",\"aqa-bio-step-bioenergetics-6-1\",\"Which evidence shows carbon dioxide was limiting?\",\"Adding it raises the rate\",[\"Adding it raises the rate\",\"Removing it raises the rate\",\"The rate stays flat when it is added\",\"There is no carbon dioxide in air\"],\"Improving one factor stops helping when another factor becomes limiting.\"]": [
    "Removing it raises the rate",
    "The rate stays flat when it is added",
    "Adding it raises the rate",
    "There is no carbon dioxide in air"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-8-0\",\"What does negative feedback do?\",\"Opposes the original change\",[\"Always increases the change\",\"Makes every hormone identical\",\"Opposes the original change\",\"Stops receptors working\"],\"Negative feedback reverses a change and brings a level back towards normal.\"]": [
    "Always increases the change",
    "Opposes the original change",
    "Stops receptors working",
    "Makes every hormone identical"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-8-1\",\"Why is negative feedback useful?\",\"It keeps conditions near an optimum\",[\"It keeps conditions near an optimum\",\"It makes body temperature irrelevant\",\"It removes the need for receptors\",\"It replaces all nerves\"],\"Negative feedback reverses a change and brings a level back towards normal.\"]": [
    "It removes the need for receptors",
    "It makes body temperature irrelevant",
    "It replaces all nerves",
    "It keeps conditions near an optimum"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-10-0\",\"What is one possible risk of fertility hormone treatment?\",\"Multiple pregnancy\",[\"A loss of all eggs\",\"Instant guaranteed success\",\"Multiple pregnancy\",\"No physical effects\"],\"Fertility treatment can use FSH and LH to stimulate egg maturation and ovulation.\"]": [
    "Instant guaranteed success",
    "Multiple pregnancy",
    "No physical effects",
    "A loss of all eggs"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-10-1\",\"Which hormone directly triggers ovulation?\",\"LH\",[\"ADH\",\"Glucagon\",\"Insulin\",\"LH\"],\"Fertility treatment can use FSH and LH to stimulate egg maturation and ovulation.\"]": [
    "ADH",
    "Insulin",
    "Glucagon",
    "LH"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-11-0\",\"With more ADH, urine volume usually becomes...\",\"Smaller\",[\"Larger\",\"Smaller\",\"Unrelated to ADH\",\"Zero in every case\"],\"ADH changes how much water the kidneys reabsorb: more ADH means more reabsorption.\"]": [
    "Larger",
    "Zero in every case",
    "Unrelated to ADH",
    "Smaller"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-11-1\",\"Where does ADH act to change water balance?\",\"Kidneys\",[\"Alveoli\",\"Bile duct\",\"Kidneys\",\"Ribosomes\"],\"ADH changes how much water the kidneys reabsorb: more ADH means more reabsorption.\"]": [
    "Alveoli",
    "Bile duct",
    "Kidneys",
    "Ribosomes"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-12-0\",\"Which is a use of plant growth regulators?\",\"Rooting cuttings\",[\"Carrying oxygen in blood\",\"Making antibodies\",\"Moving impulses in neurones\",\"Rooting cuttings\"],\"Plant hormones can change growth and are used to control weeds, rooting and fruit ripening.\"]": [
    "Carrying oxygen in blood",
    "Making antibodies",
    "Moving impulses in neurones",
    "Rooting cuttings"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-12-1\",\"Why can a shoot bend towards light?\",\"Auxin causes unequal growth\",[\"Auxin causes unequal growth\",\"The shoot has muscles\",\"The shoot makes insulin\",\"Xylem carries light\"],\"Plant hormones can change growth and are used to control weeds, rooting and fruit ripening.\"]": [
    "Auxin causes unequal growth",
    "The shoot has muscles",
    "The shoot makes insulin",
    "Xylem carries light"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-8-0\",\"What does the order of DNA bases help determine?\",\"Amino-acid sequence\",[\"Amino-acid sequence\",\"Food-chain direction\",\"Only body temperature\",\"The size of every organ\"],\"The order of DNA bases codes for amino acids; amino-acid order affects protein shape.\"]": [
    "Only body temperature",
    "Food-chain direction",
    "The size of every organ",
    "Amino-acid sequence"
  ],
  "[\"Biology\",\"aqa-bio-step-inheritance-8-1\",\"Why might a mutation have no visible effect?\",\"It may not change a protein’s function\",[\"All mutations are always fatal\",\"DNA never affects proteins\",\"Every mutation makes the same amino acid\",\"It may not change a protein’s function\"],\"The order of DNA bases codes for amino acids; amino-acid order affects protein shape.\"]": [
    "All mutations are always fatal",
    "DNA never affects proteins",
    "Every mutation makes the same amino acid",
    "It may not change a protein’s function"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-7-0\",\"Which formula gives biomass transfer efficiency?\",\"Transferred ÷ available × 100\",[\"Available ÷ transferred × 100\",\"Time ÷ biomass\",\"Transferred + available\",\"Transferred ÷ available × 100\"],\"Only some biomass passes to the next level; much is lost in waste, respiration and uneaten parts.\"]": [
    "Available ÷ transferred × 100",
    "Transferred + available",
    "Transferred ÷ available × 100",
    "Time ÷ biomass"
  ],
  "[\"Biology\",\"aqa-bio-step-ecology-7-1\",\"Why is less biomass usually available at the next level?\",\"Losses in respiration, waste and uneaten parts\",[\"All biomass is transferred\",\"Energy is created by consumers\",\"Losses in respiration, waste and uneaten parts\",\"Producers stop photosynthesising\"],\"Only some biomass passes to the next level; much is lost in waste, respiration and uneaten parts.\"]": [
    "Energy is created by consumers",
    "Losses in respiration, waste and uneaten parts",
    "All biomass is transferred",
    "Producers stop photosynthesising"
  ],
  "[\"Biology\",\"bio-deep-infection-response-monoclonal-antibodies-summary\",\"Which statement best summarises “Monoclonal antibodies”?\",\"Monoclonal antibodies bind one specific antigen and can be used in tests or targeted treatments.\",[\"Different pathogens spread in different ways, so prevention depends on the disease.\",\"Monoclonal antibodies bind one specific antigen and can be used in tests or targeted treatments.\",\"Pathogens cause infectious disease and can spread through air, water or direct contact.\",\"Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.\"],\"The best summary is: Monoclonal antibodies bind one specific antigen and can be used in tests or targeted treatments.\"]": [
    "Monoclonal antibodies bind one specific antigen and can be used in tests or targeted treatments.",
    "Skin and mucus block pathogens; white blood cells destroy them and produce antibodies.",
    "Different pathogens spread in different ways, so prevention depends on the disease.",
    "Pathogens cause infectious disease and can spread through air, water or direct contact."
  ],
  "[\"Biology\",\"bio-deep-infection-response-monoclonal-antibodies-keyword\",\"Which key term is most closely linked to “Monoclonal antibodies”?\",\"antigen\",[\"antibody\",\"antigen\",\"pathogen\",\"transmission\"],\"antigen is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "transmission",
    "antibody",
    "pathogen",
    "antigen"
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-interacting-limiting-factors-summary\",\"Which statement best summarises “Interacting limiting factors”?\",\"Improving one factor stops helping when another factor becomes limiting.\",[\"Improving one factor stops helping when another factor becomes limiting.\",\"The slowest available input limits photosynthesis: light, carbon dioxide or temperature.\",\"With oxygen, cells release energy from glucose and make carbon dioxide and water.\",\"Without enough oxygen, muscles release less energy and produce lactic acid.\"],\"The best summary is: Improving one factor stops helping when another factor becomes limiting.\"]": [
    "Improving one factor stops helping when another factor becomes limiting.",
    "Without enough oxygen, muscles release less energy and produce lactic acid.",
    "The slowest available input limits photosynthesis: light, carbon dioxide or temperature.",
    "With oxygen, cells release energy from glucose and make carbon dioxide and water."
  ],
  "[\"Biology\",\"bio-deep-bioenergetics-interacting-limiting-factors-keyword\",\"Which key term is most closely linked to “Interacting limiting factors”?\",\"limiting factor\",[\"No biological effect\",\"chlorophyll\",\"limiting factor\",\"photosynthesis\"],\"limiting factor is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "chlorophyll",
    "No biological effect",
    "photosynthesis",
    "limiting factor"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-hormonal-feedback-summary\",\"Which statement best summarises “Hormonal feedback”?\",\"Negative feedback reverses a change and brings a level back towards normal.\",[\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\",\"Insulin lowers high blood glucose; glucagon raises low blood glucose.\",\"Negative feedback reverses a change and brings a level back towards normal.\",\"Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides.\"],\"The best summary is: Negative feedback reverses a change and brings a level back towards normal.\"]": [
    "Negative feedback reverses a change and brings a level back towards normal.",
    "Insulin lowers high blood glucose; glucagon raises low blood glucose.",
    "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
    "Shoots grow towards light; roots respond to gravity. Auxin changes growth on opposite sides."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-hormonal-feedback-keyword\",\"Which key term is most closely linked to “Hormonal feedback”?\",\"negative feedback\",[\"effector\",\"homeostasis\",\"negative feedback\",\"reflex arc\"],\"negative feedback is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "reflex arc",
    "negative feedback",
    "homeostasis",
    "effector"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-hormones-feedback-and-fertility-summary\",\"Which statement best summarises “Hormones, feedback and fertility”?\",\"Fertility treatment can use FSH and LH to stimulate egg maturation and ovulation.\",[\"A gland releases a hormone into blood; the hormone travels to a target organ.\",\"A reflex is a fast automatic response carried through a reflex arc.\",\"Fertility treatment can use FSH and LH to stimulate egg maturation and ovulation.\",\"Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.\"],\"The best summary is: Fertility treatment can use FSH and LH to stimulate egg maturation and ovulation.\"]": [
    "A gland releases a hormone into blood; the hormone travels to a target organ.",
    "Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.",
    "A reflex is a fast automatic response carried through a reflex arc.",
    "Fertility treatment can use FSH and LH to stimulate egg maturation and ovulation."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-hormones-feedback-and-fertility-keyword\",\"Which key term is most closely linked to “Hormones, feedback and fertility”?\",\"FSH\",[\"FSH\",\"effector\",\"homeostasis\",\"reflex arc\"],\"FSH is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "reflex arc",
    "homeostasis",
    "FSH",
    "effector"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-regulating-water-balance-summary\",\"Which statement best summarises “Regulating water balance”?\",\"ADH changes how much water the kidneys reabsorb: more ADH means more reabsorption.\",[\"A reflex is a fast automatic response carried through a reflex arc.\",\"ADH changes how much water the kidneys reabsorb: more ADH means more reabsorption.\",\"Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.\",\"Insulin lowers high blood glucose; glucagon raises low blood glucose.\"],\"The best summary is: ADH changes how much water the kidneys reabsorb: more ADH means more reabsorption.\"]": [
    "Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.",
    "A reflex is a fast automatic response carried through a reflex arc.",
    "ADH changes how much water the kidneys reabsorb: more ADH means more reabsorption.",
    "Insulin lowers high blood glucose; glucagon raises low blood glucose."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-regulating-water-balance-keyword\",\"Which key term is most closely linked to “Regulating water balance”?\",\"ADH\",[\"ADH\",\"effector\",\"homeostasis\",\"reflex arc\"],\"ADH is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "homeostasis",
    "effector",
    "ADH",
    "reflex arc"
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-plant-growth-regulators-summary\",\"Which statement best summarises “Plant growth regulators”?\",\"Plant hormones can change growth and are used to control weeds, rooting and fruit ripening.\",[\"A gland releases a hormone into blood; the hormone travels to a target organ.\",\"ADH changes how much water the kidneys reabsorb: more ADH means more reabsorption.\",\"Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors.\",\"Plant hormones can change growth and are used to control weeds, rooting and fruit ripening.\"],\"The best summary is: Plant hormones can change growth and are used to control weeds, rooting and fruit ripening.\"]": [
    "ADH changes how much water the kidneys reabsorb: more ADH means more reabsorption.",
    "Plant hormones can change growth and are used to control weeds, rooting and fruit ripening.",
    "A gland releases a hormone into blood; the hormone travels to a target organ.",
    "Homeostasis keeps internal conditions near an optimum using receptors, coordination centres and effectors."
  ],
  "[\"Biology\",\"bio-deep-homeostasis-response-plant-growth-regulators-keyword\",\"Which key term is most closely linked to “Plant growth regulators”?\",\"auxin\",[\"auxin\",\"effector\",\"homeostasis\",\"reflex arc\"],\"auxin is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "auxin",
    "reflex arc",
    "homeostasis",
    "effector"
  ],
  "[\"Biology\",\"bio-deep-inheritance-dna-and-protein-structure-summary\",\"Which statement best summarises “DNA and protein structure”?\",\"The order of DNA bases codes for amino acids; amino-acid order affects protein shape.\",[\"DNA carries genetic instructions; genes are sections of DNA found on chromosomes.\",\"Each parent passes on one allele; a Punnett square shows possible offspring genotypes.\",\"Sexual reproduction combines gametes and creates variation; asexual reproduction makes clones.\",\"The order of DNA bases codes for amino acids; amino-acid order affects protein shape.\"],\"The best summary is: The order of DNA bases codes for amino acids; amino-acid order affects protein shape.\"]": [
    "DNA carries genetic instructions; genes are sections of DNA found on chromosomes.",
    "The order of DNA bases codes for amino acids; amino-acid order affects protein shape.",
    "Sexual reproduction combines gametes and creates variation; asexual reproduction makes clones.",
    "Each parent passes on one allele; a Punnett square shows possible offspring genotypes."
  ],
  "[\"Biology\",\"bio-deep-inheritance-dna-and-protein-structure-keyword\",\"Which key term is most closely linked to “DNA and protein structure”?\",\"base sequence\",[\"DNA\",\"base sequence\",\"gamete\",\"gene\"],\"base sequence is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "gamete",
    "DNA",
    "base sequence",
    "gene"
  ],
  "[\"Biology\",\"bio-deep-ecology-transfer-efficiency-summary\",\"Which statement best summarises “Transfer efficiency”?\",\"Only some biomass passes to the next level; much is lost in waste, respiration and uneaten parts.\",[\"A community is all the populations living together; an ecosystem includes them and their environment.\",\"Compare benefits, costs and evidence before judging a conservation or farming action.\",\"Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.\",\"Only some biomass passes to the next level; much is lost in waste, respiration and uneaten parts.\"],\"The best summary is: Only some biomass passes to the next level; much is lost in waste, respiration and uneaten parts.\"]": [
    "Only some biomass passes to the next level; much is lost in waste, respiration and uneaten parts.",
    "Human activity can reduce habitats; conservation choices should compare biodiversity gains with costs and other impacts.",
    "A community is all the populations living together; an ecosystem includes them and their environment.",
    "Compare benefits, costs and evidence before judging a conservation or farming action."
  ],
  "[\"Biology\",\"bio-deep-ecology-transfer-efficiency-keyword\",\"Which key term is most closely linked to “Transfer efficiency”?\",\"biomass\",[\"biomass\",\"competition\",\"ecosystem\",\"population\"],\"biomass is a key term for this lesson step. A strong answer also explains what it means in context.\"]": [
    "population",
    "ecosystem",
    "competition",
    "biomass"
  ],
  "[\"Biology\",\"ocr-resolution\",\"An image is enlarged but two nearby points still cannot be distinguished. Which property limits the detail?\",\"Resolution\",[\"Drawing colour\",\"Image size\",\"Paper size\",\"Resolution\"],\"Resolution determines whether two nearby points can be distinguished.\"]": [
    "Image size",
    "Resolution",
    "Paper size",
    "Drawing colour"
  ],
  "[\"Chemistry\",\"build4-2\",\"Which particle has a negative charge?\",\"Electron\",[\"Electron\",\"Neutron\",\"Nucleus\",\"Proton\"],\"Electrons have negative charge.\"]": [
    "Proton",
    "Neutron",
    "Electron",
    "Nucleus"
  ],
  "[\"Chemistry\",\"build4-3\",\"What happens in covalent bonding?\",\"Electrons are shared\",[\"Electrons are shared\",\"Neutrons are transferred\",\"Nuclei combine\",\"Protons are shared\"],\"Covalent bonds form when atoms share pairs of electrons.\"]": [
    "Electrons are shared",
    "Protons are shared",
    "Neutrons are transferred",
    "Nuclei combine"
  ],
  "[\"Chemistry\",\"ocr-chemistry-focus\",\"Most alpha particles pass straight through thin foil. What does this suggest about an atom?\",\"It is mostly empty space\",[\"It has no nucleus\",\"It is mostly empty space\",\"Its electrons are positive\",\"Its mass is evenly spread\"],\"Most trajectories do not encounter the tiny nucleus.\"]": [
    "It has no nucleus",
    "Its electrons are positive",
    "It is mostly empty space",
    "Its mass is evenly spread"
  ],
  "[\"Physics\",\"build4-4\",\"Which quantity is measured in amperes?\",\"Current\",[\"Current\",\"Energy\",\"Power\",\"Resistance\"],\"Current is measured in amperes (A).\"]": [
    "Energy",
    "Resistance",
    "Current",
    "Power"
  ],
  "[\"Physics\",\"build4-5\",\"What does a resultant force of zero mean?\",\"There is no change in velocity\",[\"Gravity is absent\",\"The object has no mass\",\"The object must be stopped\",\"There is no change in velocity\"],\"Zero resultant force means no acceleration, so velocity stays constant.\"]": [
    "The object must be stopped",
    "The object has no mass",
    "Gravity is absent",
    "There is no change in velocity"
  ],
  "[\"Maths\",\"aqa-maths-standard\",\"Write 46,000 in standard form.\",\"4.6 × 10⁴\",[\"0.46 × 10⁴\",\"4.6 × 10³\",\"4.6 × 10⁴\",\"46 × 10³\"],\"Move the decimal point four places left: 4.6 × 10⁴.\"]": [
    "46 × 10³",
    "4.6 × 10³",
    "4.6 × 10⁴",
    "0.46 × 10⁴"
  ],
  "[\"Maths\",\"aqa-maths-direction\",\"Which vector moves 4 units right and 2 units down?\",\"(4,-2)\",[\"(-2,4)\",\"(-4,2)\",\"(4,-2)\",\"(4,2)\"],\"Right is positive horizontally; down is negative vertically.\"]": [
    "(-4,2)",
    "(4,2)",
    "(-2,4)",
    "(4,-2)"
  ],
  "[\"Maths\",\"aqa-maths-more-mutually-exclusive\",\"Can one fair die roll be both a 2 and a 5?\",\"No\",[\"No\",\"Only if the die is unfair\",\"Only on two rolls\",\"Yes\"],\"These events cannot happen together on one roll.\"]": [
    "No",
    "Yes",
    "Only on two rolls",
    "Only if the die is unfair"
  ],
  "[\"Maths\",\"aqa-maths-more-outlier\",\"Which average is usually most affected by one very large outlier?\",\"Mean\",[\"Mean\",\"Median\",\"Mode\",\"None of them\"],\"The mean uses every value, so one extreme value shifts it.\"]": [
    "Median",
    "Mode",
    "None of them",
    "Mean"
  ],
  "[\"Maths\",\"aqa-maths-more-correlation\",\"A scatter graph rises from left to right. What correlation does it show?\",\"Positive\",[\"Impossible to tell\",\"Negative\",\"None\",\"Positive\"],\"As one variable rises, the other tends to rise.\"]": [
    "Positive",
    "Negative",
    "None",
    "Impossible to tell"
  ],
  "[\"Maths\",\"aqa-maths-more-translation\",\"A translation vector (2, −3) moves a shape which way?\",\"2 right and 3 down\",[\"2 left and 3 up\",\"2 right and 3 down\",\"2 right and 3 up\",\"3 right and 2 down\"],\"Positive horizontal is right; negative vertical is down.\"]": [
    "2 left and 3 up",
    "2 right and 3 down",
    "2 right and 3 up",
    "3 right and 2 down"
  ],
  "[\"Maths\",\"aqa-maths-more-semicircle-angle\",\"What is the angle in a semicircle?\",\"90°\",[\"180°\",\"45°\",\"60°\",\"90°\"],\"A triangle drawn from the diameter to a point on the circle has a right angle there.\"]": [
    "45°",
    "90°",
    "180°",
    "60°"
  ],
  "[\"Maths\",\"aqa-maths-more-midpoint2\",\"OA = a and OB = b. M is the midpoint of AB. Which is OM?\",\"(a+b)/2\",[\"(a+b)/2\",\"(a-b)/2\",\"2a+b\",\"a+b\"],\"The midpoint position vector is the average of the endpoint position vectors.\"]": [
    "a+b",
    "(a-b)/2",
    "2a+b",
    "(a+b)/2"
  ],
  "[\"Biology\",\"aqa-bio-step-homeostasis-response-3-1\",\"Which hormone helps maintain the uterine lining after ovulation?\",\"Progesterone\",[\"Amylase\",\"Bile\",\"Insulin\",\"Progesterone\"],\"FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.\"]": [
    "Progesterone",
    "Amylase",
    "Insulin",
    "Bile"
  ]
};
