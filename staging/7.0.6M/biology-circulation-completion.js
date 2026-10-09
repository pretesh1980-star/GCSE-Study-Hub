'use strict';
// Build 7.0.5T: shared AQA Trilogy 4.2.2.2–4.2.2.6 only.
const CIRCULATION_EXTENSIONS={
  "The heart and blood": "Heart and vessels: the heart is muscular and has four chambers. Atria receive blood; ventricles pump it out. Trace one complete circuit: body → vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta → body. Valves between chambers and at ventricular outlets prevent backflow; their names are not required. The two sides are separated, keeping oxygenated and deoxygenated blood apart. The right ventricle pumps through the pulmonary circuit to the lungs; the left pumps through the systemic circuit to the body. Blood passes through the heart twice in a complete double circulation. The left ventricle has a thicker muscular wall to generate the higher pressure needed for the body circuit. Coronary arteries branch from the aorta and supply the heart muscle itself with oxygen and glucose for respiration: blood in a chamber is not the muscle's direct supply. Artery means away from the heart, not necessarily oxygenated: the pulmonary artery carries deoxygenated blood. The pulmonary vein returns oxygenated blood. A group of pacemaker cells in the right atrium controls the natural resting heart rate; an artificial electrical pacemaker can correct an irregular heart rate. It does not open a blocked artery or replace a valve.\nVessel adaptations: arteries have thick muscular, elastic walls to withstand and maintain high pressure from the heart. Veins carry lower-pressure blood, have thinner walls and a relatively wide lumen; valves help prevent backflow. Capillaries have very narrow lumens and walls just one cell thick, creating a short diffusion distance. Networks give a large exchange area: oxygen and dissolved nutrients move to tissues, while carbon dioxide moves into blood. Do not give capillaries thick muscular walls. Blood flow rate = volume / time. For example, 150 cm³ in 2 s gives 75 cm³/s = 75 mL/s; multiply by 60 to convert to mL/min. A flow rate is not heart rate in beats/min. Compare like units and equal time intervals.\nBlood components: blood is a tissue, with cells and platelets suspended in liquid plasma. Plasma transports carbon dioxide from tissues to lungs, urea from liver to kidneys, absorbed soluble food molecules such as glucose/amino acids, and hormones; it also distributes thermal energy. Most oxygen is transported using haemoglobin inside red blood cells, not dissolved in plasma. Mature red blood cells have no nucleus, leaving space for haemoglobin, and a biconcave disc shape gives a large surface area and short diffusion distance for oxygen exchange. White blood cells have a nucleus and defend against pathogens: some engulf them, others produce antibodies or antitoxins. Platelets are small cell fragments that help form clots, reducing blood loss and entry of pathogens through wounds. They are not whole red blood cells. Use the schematic to distinguish biconcave red cells, larger nucleated white cells and tiny fragments suspended in plasma. In a microscope image identify visible features rather than colour alone; draw clear outlines with labels and no invented organelles. Blood products can replace missing components, but incompatible transfusions may cause harmful immune reactions and pathogens could be transmitted. Matching and screening reduce risks; they do not make every transfusion risk-free. Weigh benefit against risk from supplied evidence, not self-treatment.",
  "Gas exchange and health": "Lungs and circulation: air travels through the trachea into two bronchi and then to the alveoli. Alveoli are surrounded by a capillary network. Oxygen diffuses from alveolar air into blood; carbon dioxide diffuses the other way to be exhaled. Many alveoli give a large area, moist surfaces allow gases to dissolve, and thin alveolar/capillary walls shorten diffusion distance. Ventilation and flowing blood maintain concentration gradients. The pulmonary artery brings blood to this exchange network and the pulmonary vein returns it to the left side of the heart. The lungs exchange gases; they do not make oxygen.\nHealth means physical and mental well-being, not only being free of infection. Communicable diseases can pass between organisms; non-communicable diseases do not spread that way. Both can cause ill health. Diet, stress and life situations, such as insecure housing or isolation, can affect physical and mental health as well as disease itself. Diseases can interact: a defective immune system makes infectious disease more likely; certain viruses living in cells can trigger cancers; an immune response initially caused by a pathogen can trigger an allergy, such as a skin rash or asthma; severe physical ill health can lead to depression or other mental illness. These are possible interactions, not claims that every infection causes cancer or every physically ill person becomes depressed.\nStudying health data: incidence counts new cases over a stated time in a defined population. Compare counts as proportions or percentages when group sizes differ, and compare the same time period and case definition. A representative sample should reflect the population of interest; random selection or sampling across relevant groups can reduce bias. A large volunteer sample from one clinic may still be unrepresentative. Record categorical frequencies in a table and use separate bars on a bar chart. For continuous measurements grouped into equal-width intervals, a histogram has touching bars, interval boundaries on the horizontal axis and frequency on the vertical axis; frequency density is needed if widths differ, so the worked example uses equal widths. A scatter diagram plots paired numerical measurements, one point per person or group. An upward trend is positive correlation, not proof that one variable caused the other. A third factor, such as age, may influence both. Compare similar groups, measure possible confounders and seek repeated evidence and plausible mechanisms; do not dismiss well-established causal evidence merely because one small table cannot prove it. The shared data resource below links frequencies, graphs and risk interpretation.",
  "Treating cardiovascular disease": "Coronary heart disease is non-communicable. Fatty material builds up in coronary arteries and narrows their lumen, reducing blood flow and oxygen supply to heart muscle. Less aerobic respiration means less energy transferred for contraction; a severe interruption can damage or kill heart muscle. This is a problem in its supply vessels, not fatty material blocking the heart's airways.\nCompare treatment with the actual problem. A stent is a mesh support that holds a narrowed coronary artery open, improving blood flow directly; insertion carries procedural risks and blood clots may form. Statins lower blood cholesterol and slow the build-up of fatty deposits over time; they need continued use and can have side effects. They do not mechanically prise open an artery. Drugs and devices can be used together; a comparison need not imply an either/or choice. A valve that cannot open fully restricts forward flow; a leaking valve permits backflow, reducing efficient pumping. Biological replacement valves may wear out; mechanical valves are durable but may require long-term medicines to reduce clotting risk. Both need an operation with risks. Do not assume a stent repairs a leaky valve.\nFor heart failure, transplantation of a donor heart, or heart and lungs where needed, can restore function but donor supply is limited, surgery carries risks, and rejection must be managed with medicines that suppress the immune system and increase infection risk. An artificial heart may keep a patient alive while waiting for a donor or allow the heart to rest during recovery; clotting, infection, mechanical reliability and power supply are limitations. It is not the same as an artificial pacemaker. Evaluate benefits, risks, durability, availability and the patient's stated problem using the evidence given. No single option is always best; avoid choosing a treatment solely because a short-term outcome looks better in a different patient group.",
  "Cancer and risk factors": "A risk factor is linked to an increased rate of disease; it can be a lifestyle choice or a substance in the body or environment. Increased risk is not certainty for an individual. Some links have an established causal mechanism, while other associations remain uncertain. Many diseases involve interacting genetic, lifestyle and environmental factors, so avoid blaming an individual or inferring that one factor explains every case.\nA diet high in saturated fat can raise blood cholesterol and contribute to cardiovascular risk; lack of exercise and smoking also increase cardiovascular risk. Regular physical activity reduces risk but does not guarantee immunity from disease. Smoking damages the lungs and increases lung-disease and lung-cancer risk; carcinogens in smoke can damage DNA. Obesity increases risk of Type 2 diabetes; this is a risk relationship, not a claim that every obese person develops it. Excessive alcohol can damage the liver and impair brain function. Smoking during pregnancy can reduce oxygen delivery to an unborn baby and impair growth; alcohol can harm the developing baby's brain and other organs. These examples concern harmful exposure, not a numerical safe-dose recommendation. Carcinogens are cancer-causing agents, including ionising radiation and chemicals in tobacco smoke; they can damage DNA. Risk depends on exposure and other factors. The existing benign/malignant tumour explanation provides context, but a cancer diagnosis cannot be inferred from a single risk factor.\nHuman and financial consequences include pain, reduced quality of life, disability or premature death, effects on families/carers and lost earnings. Local services face treatment and care costs; nationally and globally, disease can reduce productive working time and increase health expenditure. Different smoking, diet, alcohol and activity patterns can affect disease incidence between communities and countries, but population age, access to diagnosis and other exposures also differ. Prevention may reduce future harm and costs without eliminating all disease; evaluate feasibility and evidence rather than assuming a guaranteed saving.\nData skills: 30 new cases among 200 people in a year is 30/200 × 100 = 15%; 20 among 200 is 10%. The difference is 5 percentage points, whereas the relative increase from 10% to 15% is (15−10)/10 × 100 = 50%. Neither proves causation. Report denominators, time periods and confounders. On a scatter plot distinguish a group-level association from an individual's risk: a regional trend alone cannot predict exactly which person will develop disease. The illustrative data below are for learning, not estimates of real clinical risks."
};
const CIRCULATION_QUESTIONS=[
  {
    "id": "aqa-circulation-completion-q01",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "The heart and blood",
    "specRefs": [
      "4.2.2.2"
    ],
    "q": "Use the heart schematic. Trace blood from the body through chambers, great vessels and lungs and back to the body. Explain double circulation and why the left ventricular wall is thicker.",
    "answer": "Body → vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta → body. Valves prevent backflow. Blood passes through the heart twice per complete circuit; the left ventricle generates higher pressure for the body circuit, so has a thicker muscular wall.",
    "explain": "Six criteria: correct right-side sequence; pulmonary artery/lungs; pulmonary vein/left-side sequence; aorta/body; valves and two passages; wall thickness linked to pressure. Arteries are defined by direction, not oxygen content; valve names are not needed.",
    "marks": 6,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice",
    "visual": "circulation-heart"
  },
  {
    "id": "aqa-circulation-completion-q02",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "The heart and blood",
    "specRefs": [
      "4.2.2.2"
    ],
    "q": "An unfamiliar organ has supply vessels with thick elastic walls, returning vessels with wide lumens and valves, and an exchange network with one-cell-thick walls. Identify the three vessel types and explain each adaptation, including exchange at tissues.",
    "answer": "The supply vessels are arteries: thick muscular/elastic walls withstand and maintain high pressure. Returning vessels are veins: wide lumens carry lower-pressure blood and valves prevent backflow. The network is capillaries: thin walls shorten diffusion distance and the network gives a large area for oxygen/nutrients to leave and carbon dioxide to enter blood.",
    "explain": "Five criteria: artery pressure link; vein low-pressure/lumen link; valves; capillary short distance/area; correct exchange direction. Do not say all arteries carry oxygenated blood or capillaries need thick muscle.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice"
  },
  {
    "id": "aqa-circulation-completion-q03",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Gas exchange and health",
    "specRefs": [
      "4.2.2.2"
    ],
    "q": "Trace inhaled air from the trachea to the exchange surface. Explain how the lungs and surrounding blood vessels maintain rapid oxygen uptake, and where this blood goes next.",
    "answer": "Air passes through the trachea and bronchi to alveoli. Numerous alveoli provide a large moist area; thin alveolar and capillary walls shorten diffusion distance. Ventilation and blood flow maintain concentration gradients. Oxygen diffuses into blood, which returns by pulmonary veins to the left atrium; carbon dioxide diffuses into alveoli for exhalation.",
    "explain": "Five criteria: named air route; area/moist surface; short distance; maintained gradients; correct gas directions and pulmonary-vein return. Lungs exchange gases rather than manufacture oxygen.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice"
  },
  {
    "id": "aqa-circulation-completion-q04",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "The heart and blood",
    "specRefs": [
      "4.2.2.2"
    ],
    "q": "A person has an irregular heart rate but no narrowed artery or faulty valve. Where is the natural pacemaker, and how could an artificial pacemaker address the stated problem? Why is a stent a different treatment?",
    "answer": "Pacemaker cells in the right atrium control the natural resting heart rate. An artificial pacemaker uses electrical signals to correct rate irregularities. A stent holds a narrowed artery open; it does not provide the heart-rate signal.",
    "explain": "Three criteria: right atrium; electrical regulation; distinction from artery opening. An artificial pacemaker is not a pump replacing the whole heart.",
    "marks": 3,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice"
  },
  {
    "id": "aqa-circulation-completion-q05",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "The heart and blood",
    "specRefs": [
      "4.2.2.2"
    ],
    "q": "In a model, 360 cm³ of blood passes a point in 6 seconds. Calculate the mean blood flow rate in cm³/s.",
    "answer": "60 cm³/s",
    "explain": "Rate = volume/time = 360/6 = 60 cm³/s, also 60 mL/s or 3.6 L/min. Beats/min measures heart rate, not volume flow. This is a model value, not a clinical threshold.",
    "marks": 2,
    "tier": "both",
    "type": "short",
    "level": 2,
    "style": "Circulation and health practice",
    "accepted": [
      "60",
      "60 cm³/s",
      "60 cm^3/s",
      "60 cm3/s",
      "60 ml/s",
      "60 mL s^-1",
      "60 cm³ s⁻¹",
      "3600 ml/min",
      "3.6 L/min",
      "0.06 L/s"
    ]
  },
  {
    "id": "aqa-circulation-completion-q06",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "The heart and blood",
    "specRefs": [
      "4.2.2.3"
    ],
    "q": "In the blood schematic identify A, B, C and the surrounding D. Make a labelled outline drawing of A and B. Explain how each component contributes to transport, defence or clotting, linking red-cell structure to function.",
    "answer": "A is a red blood cell: biconcave and without a nucleus, with space for haemoglobin to carry oxygen and a large area/short diffusion distance. B is a nucleated white blood cell: defence by engulfing pathogens or producing antibodies/antitoxins. C is a platelet, a fragment helping clotting. D is plasma, transporting dissolved substances such as carbon dioxide, urea, nutrients and hormones. Draw A as a disc with central depression, B with a nucleus; label visible structures without inventing a nucleus in A.",
    "explain": "Six criteria: A identity/adaptations; haemoglobin/oxygen; B nucleus and defence; C fragment/clotting; D liquid/transport examples; clear labelled drawings matching visible structures. Colours are schematic, not a reliable identification rule on their own.",
    "marks": 6,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice",
    "visual": "circulation-blood"
  },
  {
    "id": "aqa-circulation-completion-q07",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "The heart and blood",
    "specRefs": [
      "4.2.2.3"
    ],
    "q": "A supplied case describes low red-cell count, very few platelets and normal white-cell function. Predict two different consequences. Explain how matched, screened blood products might help and why risk is reduced rather than eliminated.",
    "answer": "Fewer red cells reduce oxygen-carrying capacity; few platelets impair clotting so bleeding may last longer. Appropriate replacement components can restore these functions. Matching reduces harmful immune reactions and screening reduces transmission of pathogens, but risks remain and benefit must be weighed against them. Normal white cells do not replace red cells or platelets.",
    "explain": "Four criteria: oxygen consequence; clotting consequence; component-specific benefit; compatibility/infection risks with risk reduction not a guarantee. Use only the supplied case; this is evaluation, not a personal treatment recommendation.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice"
  },
  {
    "id": "aqa-circulation-completion-q08",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Treating cardiovascular disease",
    "specRefs": [
      "4.2.2.4"
    ],
    "q": "Explain how coronary fatty deposits affect heart muscle. Then evaluate these supplied options: a stent improves flow directly but requires a procedure and can cause clots; statins lower cholesterol over time but require continued use and may have side effects. Is either universally best?",
    "answer": "Deposits narrow coronary arteries, reducing flow and oxygen to heart muscle, reducing aerobic respiration and energy for contraction; severe interruption damages muscle. A stent directly supports the narrowed artery but carries procedure/clot risks. Statins slow fatty build-up by lowering cholesterol but act over time and need ongoing use with possible side effects. Suitability depends on the stated problem and patient evidence; options can be combined, so neither is universally best.",
    "explain": "Five criteria: vessel narrowing; oxygen/respiration consequence; stent action/benefit/risk; statin action/benefit/risk; balanced conditional judgement. Coronary arteries feed the muscle; statins do not mechanically open a valve or artery.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice"
  },
  {
    "id": "aqa-circulation-completion-q09",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Treating cardiovascular disease",
    "specRefs": [
      "4.2.2.4"
    ],
    "q": "One valve cannot open fully; another leaks. Explain the effect of each. Compare a durable mechanical replacement requiring clot-prevention medicine with a biological replacement that may wear out.",
    "answer": "Failure to open restricts forward flow; a leak allows backflow and reduces pumping efficiency. A mechanical valve may last longer but involves long-term clot-prevention medicine and its risks. A biological valve may avoid that particular long-term requirement in the supplied comparison but may need replacement if it wears out. Both require surgery; use patient circumstances and evidence rather than durability alone.",
    "explain": "Four criteria: restricted forward flow; backflow; balanced mechanical trade-off; biological durability and shared surgery trade-off. Do not claim a biological valve has zero clot risk or that a coronary stent repairs valve function.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice"
  },
  {
    "id": "aqa-circulation-completion-q10",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Treating cardiovascular disease",
    "specRefs": [
      "4.2.2.4"
    ],
    "q": "A person with heart failure awaits a donor heart. Compare transplantation with a temporary artificial heart, including why a heart-and-lung transplant might sometimes be considered and why a pacemaker is not equivalent.",
    "answer": "A donor heart can replace a failing pump; heart and lungs may be transplanted if both require replacement. Donors are limited and surgery, rejection and immune-suppressing medicine/infection risks matter. An artificial heart can sustain circulation while waiting or let the heart rest for recovery, but has clotting, infection, reliability and power limitations. A pacemaker regulates electrical timing; it is not a replacement pump.",
    "explain": "Four criteria: transplant function/heart-lung scope; donor and rejection/surgery risks; artificial-heart purpose and limitations; distinction from pacemaker. Do not imply a transplant or device is guaranteed to cure every patient.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice"
  },
  {
    "id": "aqa-circulation-completion-q11",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Gas exchange and health",
    "specRefs": [
      "4.2.2.5"
    ],
    "q": "Explain health in terms of physical and mental well-being. Give one non-disease influence, then explain each interaction: immune defect/infection, virus/cancer, pathogen-triggered immune reaction/allergy, and severe physical illness/mental illness.",
    "answer": "Health includes physical and mental well-being. Diet, stress or life situations can affect both. Immune defects reduce defence and increase susceptibility to infection. Certain viruses living in cells can trigger cancer. An immune reaction initially caused by a pathogen can trigger an allergy such as asthma or a skin rash. Severe physical ill health can contribute to depression or other mental illness. These outcomes are possible, not inevitable.",
    "explain": "Six criteria: both aspects of health; suitable other factor; each of the four correct interactions. Do not equate health solely with absence of infection, claim all cancers are viral, or assume every physical illness causes depression.",
    "marks": 6,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice"
  },
  {
    "id": "aqa-circulation-completion-q12",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Gas exchange and health",
    "specRefs": [
      "4.2.2.5",
      "4.2.2.6"
    ],
    "q": "Illustrative annual new-case frequencies in three separate groups are A: 12, B: 18, C: 30, each out of 200. Construct a labelled frequency table and bar chart. Give the percentages and explain why raw counts could mislead if the groups had different sizes or follow-up periods.",
    "answer": "Table: group A 12/200 (6%), B 18/200 (9%), C 30/200 (15%) new cases in one year. Bar chart: horizontal axis group A/B/C, vertical axis number of new cases in one year from zero; separate bars of heights 12, 18, 30 at equal widths. Unequal denominators or follow-up times make raw counts unfair comparisons; compare proportions over the same period and case definition.",
    "explain": "Four criteria: correct frequency table; labelled separated bars and scale; three correct percentages; denominator/time comparability. These are illustrative group data, not diagnoses or proof of a risk factor. Use the data panel to check your representation.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice",
    "visual": "circulation-data"
  },
  {
    "id": "aqa-circulation-completion-q13",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Gas exchange and health",
    "specRefs": [
      "4.2.2.5",
      "4.2.2.6"
    ],
    "q": "The data panel lists ages of 12 newly recorded cases: 20, 24, 27, 31, 33, 36, 38, 40, 43, 45, 46, 49 years. Group them into 20–<30, 30–<40, 40–<50; construct a frequency table and histogram. Can the tallest bar alone establish greatest age-specific disease risk?",
    "answer": "Frequencies are 3, 4, 5. Draw touching bars across 20–30, 30–40 and 40–50, with horizontal axis age/years and vertical axis frequency 0 to at least 5. Equal class widths allow frequency heights. The tallest bar shows most recorded cases in this sample, not highest risk: numbers of people in each age group and how cases were sampled are unknown.",
    "explain": "Four criteria: correct grouped frequencies; continuous boundaries/touching bars; labelled scales; missing population denominators/sampling limitation. Boundary ages 30/40 enter the later class; a histogram is not a categorical bar chart. This task does not require unequal-width frequency density.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice",
    "visual": "circulation-data"
  },
  {
    "id": "aqa-circulation-completion-q14",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Cancer and risk factors",
    "specRefs": [
      "4.2.2.5",
      "4.2.2.6"
    ],
    "q": "Use the illustrative regional scatter data. Describe the association between percentage smoking and annual new cases per 1000. Explain why it cannot prove the cause or predict an individual outcome. Suggest a better sampling/comparison approach.",
    "answer": "Regions with higher smoking percentages generally have higher new-case rates: positive correlation with variation. Age, deprivation or other exposures could influence both, and regional averages do not identify individual risks. Use a representative sample across the target population, comparable case definitions/time periods and measure or account for confounders such as age; repeat across suitable groups. A single association does not prove causation, although wider mechanistic evidence can support a causal link.",
    "explain": "Four criteria: positive association with scatter; confounding/group-to-individual limitation; representative and comparable sampling; calibrated causal conclusion. Large numbers alone cannot correct a biased volunteer sample; do not claim smoking has no causal harms because this graph alone is insufficient.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice",
    "visual": "circulation-data"
  },
  {
    "id": "aqa-circulation-completion-q15",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Cancer and risk factors",
    "specRefs": [
      "4.2.2.6"
    ],
    "q": "A model study records 30 new cases among 200 people in group A and 20 among 200 in group B in one year. Calculate the relative percentage increase in group A compared with B.",
    "answer": "50%",
    "explain": "A = 15%, B = 10%. Relative increase = (15−10)/10 × 100 = 50%; the absolute difference is 5 percentage points, not a 5% relative increase. These illustrative data alone do not prove a causal effect.",
    "marks": 3,
    "tier": "both",
    "type": "short",
    "level": 2,
    "style": "Circulation and health practice",
    "accepted": [
      "50",
      "50%",
      "50 percent",
      "50 per cent"
    ]
  },
  {
    "id": "aqa-circulation-completion-q16",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Cancer and risk factors",
    "specRefs": [
      "4.2.2.6"
    ],
    "q": "Explain relevant disease risks for a person exposed to cigarette smoke and ionising radiation, with little exercise, a diet high in saturated fat, obesity and excessive alcohol intake. Distinguish increased risk from certainty and include biological links where established.",
    "answer": "Smoking increases lung disease/lung cancer and cardiovascular risk; tobacco carcinogens and ionising radiation can damage DNA and increase cancer risk. A high-saturated-fat diet can raise blood cholesterol and contribute to cardiovascular risk; lack of exercise also increases risk. Obesity increases Type 2 diabetes risk. Excessive alcohol can damage the liver and impair brain function. These factors can interact and increase probability; they do not guarantee disease in each exposed person.",
    "explain": "Six criteria: smoking/lung and cardiovascular effects; carcinogen/DNA mechanism; diet/cholesterol plus exercise; obesity/Type 2; alcohol/liver and brain; interaction and probability distinction. A risk factor is not itself a diagnosis.",
    "marks": 6,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice"
  },
  {
    "id": "aqa-circulation-completion-q17",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Cancer and risk factors",
    "specRefs": [
      "4.2.2.6"
    ],
    "q": "Explain why smoking and alcohol exposure during pregnancy can affect an unborn baby. Then discuss human and financial consequences of non-communicable disease for a family, local community and wider society.",
    "answer": "Smoking can reduce oxygen delivery and impair fetal growth; alcohol can harm the developing brain and other organs. Disease can cause pain, disability, reduced quality of life or premature death, affecting families/carers and income. Local services pay for treatment/care; national and global economies face health costs and lost productive time. Prevention may reduce future disease and costs but cannot guarantee that every case is avoided.",
    "explain": "Four criteria: smoking/growth link; alcohol/development link; individual/family human and financial effects; local and wider costs with a qualified prevention conclusion. Do not invent safe exposure doses or blame affected people.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Circulation and health practice"
  },
  {
    "id": "aqa-circulation-completion-q18",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Gas exchange and health",
    "specRefs": [
      "4.2.2.5",
      "4.2.2.6"
    ],
    "q": "A survey of 1000 volunteers from one specialist clinic finds more disease than a random community sample of 200. Which conclusion is best supported?",
    "answer": "The clinic sample may be biased; sample size alone does not make it representative.",
    "explain": "Clinic patients and volunteers can differ from the target community. Compare sampling, population, follow-up and case definitions before inferring population risk. A bigger sample reduces some random variation but does not automatically remove selection bias.",
    "marks": 1,
    "tier": "both",
    "type": "mcq",
    "level": 2,
    "style": "Circulation and health practice",
    "options": [
      "The clinic sample may be biased; sample size alone does not make it representative.",
      "The larger sample always gives the true population risk.",
      "Every member of the community has the clinic disease rate.",
      "Selection method never affects disease estimates."
    ]
  }
];
const circulationBeforeLesson=activeLesson,circulationBeforeQuestions=activeQuestions;
activeLesson=function(s,c,t){const l=circulationBeforeLesson(s,c,t);if(!l||!cellCompletionPath(s,c)||t!=='Organisation')return l;const sections=l.sections.map(x=>CIRCULATION_EXTENSIONS[x.title]?{...x,body:x.body+'\n\n'+CIRCULATION_EXTENSIONS[x.title]}:x);return {...l,sections,learn:sections.map(x=>x.body).join('\n\n')};};
activeQuestions=function(s,c=choice(s)){const qs=circulationBeforeQuestions(s,c);return cellCompletionPath(s,c)?[...qs,...CIRCULATION_QUESTIONS.map(q=>({...q,board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}))]:qs;};
function circulationHeart(){return `<figure><figcaption>Double circulation — flow schematic, not an anatomical scale drawing</figcaption><svg viewBox="0 0 660 430" role="img" aria-label="Body via vena cava to right atrium and ventricle; pulmonary artery to lungs; pulmonary vein to left atrium and ventricle; aorta to body. Coronary arteries supply heart muscle from the aorta."><defs><marker id="circulation-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0 0L7 3L0 6Z" fill="#36566d"/></marker></defs><g fill="#eef5f8" stroke="#36566d"><rect x="265" y="20" width="130" height="45" rx="8"/><rect x="265" y="360" width="130" height="45" rx="8"/><rect x="50" y="160" width="220" height="45" rx="8"/><rect x="50" y="255" width="220" height="45" rx="8"/><rect x="390" y="160" width="220" height="45" rx="8"/><rect x="390" y="255" width="220" height="45" rx="8"/></g><g font-size="17" text-anchor="middle" fill="#203645"><text x="330" y="48">Lungs</text><text x="330" y="388">Body</text><text x="160" y="188">Right atrium</text><text x="160" y="283">Right ventricle</text><text x="500" y="188">Left atrium</text><text x="500" y="283">Left ventricle</text></g><g fill="none" stroke="#36566d" stroke-width="2" marker-end="url(#circulation-arrow)"><path d="M265 382H20V182H50"/><path d="M160 205V255"/><path d="M50 278H35V43H265"/><path d="M395 43H500V160"/><path d="M500 205V255"/><path d="M610 278H640V382H395"/></g><g font-size="14" fill="#203645"><text x="60" y="345">Vena cava (from body)</text><text x="48" y="92">Pulmonary artery</text><text x="48" y="113">to lungs</text><text x="505" y="92">Pulmonary</text><text x="505" y="113">vein</text><text x="470" y="345">Aorta (to body)</text><text x="171" y="234">valve</text><text x="511" y="234">valve</text></g></svg><p>Trace arrows, not page position: right/left name the person's sides. Vena cava/right heart/pulmonary artery carry deoxygenated blood; pulmonary vein/left heart/aorta carry oxygenated blood. Valves also guard ventricular outlets. Coronary arteries branch from the aorta to heart muscle. Pacemaker cells are in the right atrium. The pulmonary circuit goes to lungs; the systemic circuit goes to body. The left ventricular wall is thicker.</p></figure>`;}
function circulationBlood(){return `<figure><figcaption>Schematic blood sample — components A–D, not to scale</figcaption><svg viewBox="0 0 540 210" role="img" aria-label="A: discs with a central depression and no nucleus. B: larger cell with a nucleus. C: tiny cell fragments. D: surrounding liquid."><rect x="15" y="15" width="510" height="180" rx="20" fill="#fff0cb" stroke="#75613b"/><g fill="#d66a6a" stroke="#853f43" stroke-width="2"><ellipse cx="105" cy="100" rx="40" ry="28"/><ellipse cx="180" cy="140" rx="31" ry="24"/></g><g fill="#f4c4c4"><ellipse cx="105" cy="100" rx="20" ry="12"/><ellipse cx="180" cy="140" rx="14" ry="10"/></g><circle cx="300" cy="100" r="45" fill="#e8d7f3" stroke="#765588" stroke-width="2"/><path d="M280 80Q305 64 316 87L309 99Q329 120 305 126L290 108Q268 105 280 80" fill="#795293"/><g fill="#8d658f"><path d="M405 113l8-7 7 9-9 7Z"/><circle cx="434" cy="131" r="5"/><path d="M442 95l8 2-2 8-8-2Z"/></g><g font-size="19" fill="#203645"><text x="97" y="58">A</text><text x="293" y="42">B</text><text x="417" y="70">C</text><text x="480" y="175">D</text></g></svg><p>Observe shape, relative size, nucleus and fragments. In your sketch label only features shown. The light centre of A represents a depression, not a nucleus or hole. D surrounds all components; colours are illustrative. Use the question's model answer to check identification and functions.</p></figure>`;}
const CIRCULATION_DATA={groups:[['A',12,200],['B',18,200],['C',30,200]],ages:[20,24,27,31,33,36,38,40,43,45,46,49],scatter:[[5,8],[10,13],[15,11],[20,20],[25,23]]};
function circulationData(){const d=CIRCULATION_DATA;return `<figure><figcaption>Illustrative health data — invented for practising interpretation, not clinical estimates</figcaption><table><caption>New cases in one year in three separate groups</caption><thead><tr><th>Group</th><th>New cases</th><th>People observed</th></tr></thead><tbody>${d.groups.map(([g,n,p])=>`<tr><td>${g}</td><td>${n}</td><td>${p}</td></tr>`).join('')}</tbody></table><p>Age data for a separate sample of new cases (years): ${d.ages.join(', ')}. Construct a histogram using 20–&lt;30, 30–&lt;40, 40–&lt;50. Population denominators are not supplied.</p><svg viewBox="0 0 500 325" role="img" aria-label="Regional scatter: smoking percentages 5,10,15,20,25 and annual new cases per 1000 of 8,13,11,20,23. Positive association with scatter."><path d="M65 35V250H440" stroke="#36566d" fill="none"/>${[0,5,10,15,20,25].map(n=>`<text x="${65+n*14-5}" y="273" font-size="12">${n}</text><text x="32" y="${254-n*8}" font-size="12">${n}</text>`).join('')}${d.scatter.map(([x,y])=>`<circle cx="${65+x*14}" cy="${250-y*8}" r="5" fill="#397e55"/>`).join('')}<text x="65" y="20" font-size="14">Annual new cases per 1000 people</text><text x="132" y="306" font-size="14">Regional smoking percentage (%)</text></svg><p>Paired values (smoking %, new cases per 1000/year): ${d.scatter.map(x=>x.join(', ')).join('; ')}. Regions may also differ in age and other factors. No causal trend line is asserted.</p></figure>`;}
const circulationBeforeVisual=cellVisual;
cellVisual=function(type){return type==='circulation-heart'?circulationHeart():type==='circulation-blood'?circulationBlood():type==='circulation-data'?circulationData():circulationBeforeVisual(type);};
const circulationBeforeDiagrams=bioDiagramSection;
bioDiagramSection=function(topic){const previous=circulationBeforeDiagrams(topic);if(topic!=='Organisation'||!cellCompletionPath('Biology',choice('Biology')))return previous;return previous+`<details class="card"><summary>Circulation, blood and health evidence</summary>${circulationHeart()}${circulationBlood()}${circulationData()}<p>Trace the circuits, identify blood components, then construct the frequency charts and evaluate the scatter evidence using the linked practice questions.</p></details>`;};
const circulationBeforeSupport=biologySupportInventory;
biologySupportInventory=function(){return [...circulationBeforeSupport(),...['heart','blood','data'].map(key=>({id:'Biology|support|circulation-'+key,subject:'Biology',kind:'support',tier:'both',label:'Circulation/health '+key+' resource',fingerprint:auditFingerprint(key==='heart'?circulationHeart():key==='blood'?circulationBlood():circulationData()),studentVisible:true}))];};
