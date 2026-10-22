'use strict';
// 7.0.5S: AQA Trilogy RP03 = food tests, RP04 = pH/amylase.
const DIGESTION_EXTENSIONS={
  "From cells to organ systems": "The digestive system is an organ system: several organs cooperate to digest food and absorb useful products. In the mouth teeth break food into smaller pieces and salivary glands supply saliva containing amylase. The oesophagus moves food to the stomach, where muscular mixing and hydrochloric acid provide conditions for stomach protease. The liver produces bile; the gall bladder stores and releases it into the small intestine. The pancreas releases digestive enzymes into the small intestine, whose wall also produces enzymes. Digestion changes large insoluble food molecules into smaller soluble products that can cross the intestinal surface and enter the bloodstream. Villi provide a large area, a thin surface and blood flow for absorption, as in the existing transport lesson. The large intestine absorbs water from remaining undigested material; the rectum stores faeces before egestion through the anus. Absorption is not the same as digestion or egestion. Absorbed products can build new carbohydrates, lipids and proteins in the body; some glucose is used in respiration. These are examples of metabolism, the chemical reactions of cells, rather than all absorbed food simply being excreted.",
  "Enzymes and digestion": "Enzymes are protein molecules that act as biological catalysts: they speed up reactions and are not used up by them. A substrate fits an enzyme's specifically shaped active site; the enzyme can then catalyse its reaction and release products. The simplified lock-and-key model explains specificity: a different substrate may not fit. It is a model of complementary shape, not a literal rigid metal lock. Higher temperature initially increases particle movement and the frequency of successful enzyme-substrate encounters. Above an enzyme's optimum, its structure and active-site shape change: denaturation reduces binding and activity. Cooling an enzyme usually slows it without denaturing it, so warming can restore activity; cooling a heat-denatured enzyme does not generally restore its original active site. Each enzyme has a suitable pH range: pH changes can alter the active site, and extremes may denature it. Stomach protease works in acidic conditions; many small-intestine enzymes work best in alkaline conditions. Do not assume every enzyme has the same optimum. Production sites and simple word equations: salivary glands, pancreas and small intestine produce amylase (a carbohydrase), which breaks starch into sugars. Proteases are produced in the stomach, pancreas and small intestine: proteins → amino acids. Lipases are produced in the pancreas and small intestine: lipids → glycerol + fatty acids. Carbohydrases convert carbohydrates to simple sugars; amylase is specific to starch, not every food molecule. No chemical symbol equations are required. Rate can be product formed / time; where an equal amount of substrate reaches the same endpoint, 1 / time is an estimate of relative reaction rate. For example a starch endpoint at 40 s gives 1/40 = 0.025 s⁻¹; 80 s gives 0.0125 s⁻¹, half as fast. This is an inverse-time estimate, not a mass of product per second. Reuse the Biology Learning Lab temperature graph: the rise towards an optimum and sharp fall afterwards must be explained using collisions and denaturation, not enzyme death. In the pH/amylase practical below, use iodine to sample for starch every 30 seconds and keep temperature controlled.",
  "Bile and the digestive system": "Bile is made in the liver, stored in the gall bladder and released into the small intestine. Its alkalinity helps neutralise hydrochloric acid arriving from the stomach, giving suitable alkaline conditions for intestinal enzymes such as lipase. Bile also emulsifies fat into small droplets: this increases surface area for lipase action. It is not an enzyme, does not itself hydrolyse fat into fatty acids and glycerol, and emulsification does not make fat into a solution of digested products. If less bile reaches the intestine, unchanged lipase may still break down fat but less efficiently because pH conditions and available droplet surface area are less favourable. Food tests below detect food substances; they are not digestive processes. A negative iodine result says starch was not detected, not that the sample contains no carbohydrate; reducing sugars require a different test."
};
const DIGESTION_PRACTICALS={
  "food": {
    "aim": "AQA Trilogy required practical 3: use qualitative reagents to test for carbohydrates, lipids and proteins.",
    "method": "Use teacher-approved small quantities and reagent concentrations. Label separate test tubes/wells and prepare comparable food portions. For iodine, Benedict's and Biuret tests, crush solid food with a measured amount of distilled water and use a suitable liquid extract; use clean equipment and a fresh separate portion for each test. For a lipid test use a suitable separate food portion/homogenate so that filtering away fat does not create a false negative. Starch: add iodine solution; orange-brown remaining is negative, while blue-black is positive. Reducing sugar: add Benedict's reagent and warm in a hot water bath as directed, not over a naked flame; a blue solution remains negative, while green/yellow/orange to brick-red precipitate indicates a positive result. Without calibration this is qualitative, not an exact sugar concentration. Protein: add Biuret reagent as instructed and mix; blue is negative, lilac/purple is positive. Lipid: add Sudan III stain to a separate suitable sample, mix gently as instructed and allow layers to separate; a red-stained oil layer indicates lipid, and no distinct red oil layer is negative. A permitted alternative already in this app is the ethanol-emulsion test: mix a suitable sample with ethanol, then add to water; a cloudy white emulsion is positive and a clear mixture is negative. Do not heat ethanol; keep ethanol and alcohol-containing stains away from flames. Wear eye protection, avoid contact with alkaline Biuret reagent, iodine and stains, never taste samples, and follow teacher instructions for spills/disposal. Use a holder for hot tubes, point them away from people and take care with hot water. Keep test volumes/heating conditions consistent and record the actual colour or layer before interpreting it.",
    "controls": "Use known positive samples for each test and distilled-water negative controls processed with the same reagents. Separate clean pipettes/portions prevent contamination. Repeat doubtful results; coloured or cloudy food extracts may mask changes, so interpret with appropriate sample blanks and controls rather than assuming a clear negative.",
    "example": "An unknown sample gives blue-black with iodine, stays blue with Benedict’s after heating, turns lilac with Biuret and forms a red oil layer with Sudan III: starch, protein and lipid are detected; reducing sugar is not detected by this test. It is wrong to conclude there are no carbohydrates because Benedict’s stayed blue.",
    "pitfall": "Benedict’s needs controlled water-bath heating; iodine and Biuret do not use that same heating step. An ethanol-emulsion test must not be heated. A negative observation means not detected under the test conditions, not proof of absolute absence. Do not mix all reagents into one sample."
  },
  "enzymes": {
    "aim": "AQA Trilogy required practical 4: investigate how pH affects the rate of amylase digestion of starch.",
    "method": "Use a range of teacher-prepared buffer solutions to set and maintain pH. Place separate drops of iodine in wells of a spotting tile. Measure equal volumes and concentrations of starch and amylase for each run, with a measured buffer volume; bring solutions to the same controlled temperature using a water bath or electric heater before mixing. Add amylase to the starch/buffer mixture, mix consistently and start timing immediately. Use a clean sampling pipette to place a drop of reaction mixture into a fresh iodine well every 30 seconds. Blue-black means starch remains; the first sample for which iodine stays orange-brown marks the operational endpoint. Do not add iodine to the reaction tube: that would change the mixture being tested. Record the last positive time and first negative time, pH and temperature. Repeat with independent mixtures at each pH, keeping temperature, enzyme/starch concentrations and volumes, buffer volume, total volume, sampling interval and mixing method constant. Use a fresh mixture each time rather than reusing already digested starch. Wear eye protection, avoid contact with iodine/buffers and enzyme solutions, avoid inhaling enzyme powders (use prepared solutions), handle hot water/glass safely and follow school disposal procedures. Do not use saliva as a required enzyme source.",
    "controls": "Control temperature with a water bath/electric heater and allow equilibration. Change buffer pH only. Include a known starch-plus-iodine positive check and a suitable no-amylase comparison to check that starch loss is enzyme-dependent. Repeat endpoint times and report variability; investigate causes before excluding an anomalous result.",
    "example": "For the same amount of starch, time 120 s gives relative rate 1/120 = 0.00833 s⁻¹ (3 significant figures); time 60 s gives about 0.0167 s⁻¹, twice as fast. If the last positive sample is at 30 s and the first negative at 60 s, disappearance occurred after 30 s and by 60 s, not necessarily exactly at 60 s. The 30-second interval limits endpoint resolution.",
    "pitfall": "Plot pH (no unit) against relative rate (s⁻¹), not time labelled as rate. The shortest time gives the fastest rate. A sampled optimum is the fastest tested condition, not proof of an exact universal optimum. To evaluate precision, discuss smaller intervals as a possible follow-up while retaining the required 30-second sampling in this practical. More repeats improve reliability but cannot remove a consistently late timer start. Use prepared buffers rather than guessing pH from the amount of acid added."
  }
};
const DIGESTION_QUESTIONS=[
  {
    "id": "aqa-digestion-completion-q01",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Enzymes and digestion",
    "specRefs": [
      "4.2.2.1"
    ],
    "q": "Describe the digestive functions of the mouth/salivary glands, stomach, pancreas and small intestine. For amylase, protease and lipase, state production sites, substrate and products.",
    "answer": "The mouth mixes food with saliva containing amylase; the stomach mixes food and provides acid for stomach protease. The pancreas supplies enzymes to the small intestine, which also produces enzymes and absorbs soluble products. Amylase is made in salivary glands, pancreas and small intestine and breaks starch into sugars. Proteases are made in stomach, pancreas and small intestine and break proteins into amino acids. Lipases are made in pancreas and small intestine and break lipids into glycerol and fatty acids.",
    "explain": "Seven points: coordinated organ functions; small-intestine digestion/absorption; three correct enzyme substrate/product relationships; amylase sites; protease/lipase sites. Do not name the gall bladder as an enzyme-production site or claim amylase digests protein.",
    "marks": 7,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Digestion and practical practice"
  },
  {
    "id": "aqa-digestion-completion-q02",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Enzymes and digestion",
    "specRefs": [
      "4.2.2.1"
    ],
    "q": "Which statement best explains enzyme specificity in the simplified lock-and-key model?",
    "answer": "An enzyme is a protein catalyst whose active-site shape fits particular substrates.",
    "explain": "The enzyme speeds the reaction and is not used up. Complementary shape explains why a substrate fits; the lock-and-key analogy is a simplified model. Enzymes do not supply the substrate or work equally on every molecule.",
    "marks": 1,
    "tier": "both",
    "type": "mcq",
    "level": 2,
    "style": "Digestion and practical practice",
    "options": [
      "An enzyme is a protein catalyst whose active-site shape fits particular substrates.",
      "Enzymes are used up as fuel for every reaction.",
      "Every enzyme works equally well on every substrate.",
      "An enzyme makes a substrate unnecessary."
    ]
  },
  {
    "id": "aqa-digestion-completion-q03",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Enzymes and digestion",
    "specRefs": [
      "4.2.2.1"
    ],
    "q": "An enzyme reacts slowly at low temperature. Another sample was heated far above its optimum and then cooled. Predict the effect of warming the first sample and cooling the second. Explain why a large pH change may also reduce activity.",
    "answer": "Moderate warming increases particle movement and successful enzyme-substrate encounters, so the cold sample can speed up. Excessive heat changes enzyme structure and the active site; cooling a denatured sample generally does not restore its shape. A large pH change can alter the active site and extremes may denature the enzyme.",
    "explain": "Four points: low-temperature effect; moderate warming/collisions; heat denaturation rather than enzyme death and its persistence; pH/shape relationship. Not every enzyme has the same optimum temperature or pH.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Digestion and practical practice"
  },
  {
    "id": "aqa-digestion-completion-q04",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Enzymes and digestion",
    "specRefs": [
      "4.2.2.1",
      "RP04"
    ],
    "q": "The same starch endpoint is reached in 120 seconds. Calculate the relative rate, 1/time, in s⁻¹ to three significant figures.",
    "answer": "0.00833 s⁻¹",
    "explain": "1/120 = 0.008333… s⁻¹, so three significant figures gives 0.00833 s⁻¹. This equals approximately 0.500 min⁻¹. It is an inverse-time comparison for equal starting amounts and endpoints, not grams per second. A shorter time gives a larger relative rate.",
    "marks": 2,
    "tier": "both",
    "type": "short",
    "level": 2,
    "style": "Digestion and practical practice",
    "accepted": [
      "0.00833",
      "0.00833 s^-1",
      "0.00833 s⁻¹",
      "0.00833 /s",
      "8.33e-3 s^-1",
      "8.33×10^-3 s^-1",
      "8.33×10⁻³ s⁻¹",
      "0.500 min^-1",
      "0.500 min⁻¹",
      "0.5 min^-1",
      "0.5 min⁻¹"
    ]
  },
  {
    "id": "aqa-digestion-completion-q05",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Bile and the digestive system",
    "specRefs": [
      "4.2.2.1"
    ],
    "q": "Less bile reaches the small intestine, but the amount of lipase is unchanged. Explain why fat digestion may slow. State where bile is made, stored and released, and distinguish emulsification from digestion.",
    "answer": "Bile is made in the liver, stored in the gall bladder and released into the small intestine. Reduced bile means less neutralisation of stomach acid and less emulsification into small fat droplets. Lipase then has less favourable pH and less surface area for action. Emulsification is physical droplet formation; lipase chemically breaks lipids into glycerol and fatty acids.",
    "explain": "Five points: production/storage/release; acid neutralisation and suitable pH; emulsification/surface area; linked effect on lipase rate; distinction from enzyme digestion. Bile is not an enzyme and does not itself produce fatty acids.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Digestion and practical practice"
  },
  {
    "id": "aqa-digestion-completion-q06",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Enzymes and digestion",
    "specRefs": [
      "RP04"
    ],
    "q": "Plan the pH/amylase investigation using buffers, starch, amylase, iodine and a spotting tile. Explain timing, endpoint, temperature control and two other controls.",
    "answer": "Use a range of buffers and equal starch/amylase concentrations and volumes. Equilibrate to the same water-bath temperature, mix and start the timer. Sample into fresh iodine wells every 30 seconds. Blue-black means starch remains; first orange-brown sample is the endpoint. Keep sampling/mixing and total volumes constant, use fresh mixtures and repeat each pH.",
    "explain": "Six points: buffer range; equal enzyme/substrate amounts; controlled/equilibrated temperature; timing and 30-second continuous sampling; iodine endpoint; other controls/repeats. Do not add iodine to the reaction tube or infer enzyme optimum while temperature also varies.",
    "marks": 6,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Digestion and practical practice"
  },
  {
    "id": "aqa-digestion-completion-q07",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Enzymes and digestion",
    "specRefs": [
      "4.2.2.1",
      "RP04"
    ],
    "q": "Use the pH graph. Which tested pH has the highest relative rate? Compare rates at pH 7 and 5 using the endpoint times 60 s and 120 s. Explain the pattern and why it does not establish an exact optimum for every enzyme.",
    "answer": "pH 7 is fastest among the tested conditions. Its rate is 1/60, twice 1/120 at pH 5. pH affects active-site shape and substrate fit, so rates fall away from a suitable range. Only particular pH values and one enzyme/conditions were tested; enzymes differ and intermediate pH values could refine the optimum.",
    "explain": "Four points: pH 7; twice the rate with inverse-time reasoning; active-site explanation; qualified conclusion. Do not say the longest endpoint time has the highest rate or give pH a physical unit.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Digestion and practical practice",
    "visual": "digestion-ph-graph"
  },
  {
    "id": "aqa-digestion-completion-q08",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Enzymes and digestion",
    "specRefs": [
      "RP04"
    ],
    "q": "In one run iodine is blue-black at 30 s and orange-brown at 60 s. Explain the endpoint limitation. How would you improve reliability and investigate an unusually long repeat without simply discarding it? Include one safety precaution.",
    "answer": "Starch disappearance occurred after 30 s and by 60 s; the operational endpoint is not an exact reaction time. Use independent repeats and compare spread; check temperature, mixing, timing and reagent volumes before repeating an unusual result. Smaller sampling intervals could improve a follow-up estimate, but this required method uses 30-second sampling. Wear eye protection and handle iodine/buffers and hot water safely.",
    "explain": "Five points: time interval; independent repeats/spread; investigate a cause and repeat; precision improvement distinguished from prescribed method; linked safety. Repetition alone cannot remove a consistently late timer start. Avoid inhaling enzyme powders by using prepared solutions.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Digestion and practical practice"
  },
  {
    "id": "aqa-digestion-completion-q09",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Bile and the digestive system",
    "specRefs": [
      "RP03"
    ],
    "q": "An unknown food gives blue-black with iodine, stays blue after Benedict’s and water-bath heating, turns purple with Biuret and forms a red-stained oil layer with Sudan III. Interpret each result. Could it still contain carbohydrates?",
    "answer": "Starch, protein and lipid are detected; reducing sugar is not detected under these conditions. Yes: starch is a carbohydrate, so a negative Benedict’s result does not mean all carbohydrates are absent.",
    "explain": "Five points: four correct test interpretations and carbohydrate distinction. Record actual observations before conclusions. Negative means not detected, not proof of absolute absence at any concentration.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Digestion and practical practice"
  },
  {
    "id": "aqa-digestion-completion-q10",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Bile and the digestive system",
    "specRefs": [
      "RP03"
    ],
    "q": "Describe how to carry out and distinguish the iodine, Benedict’s, Biuret and Sudan III food tests, including positive and negative results and the correct use of heating.",
    "answer": "Use separate suitable portions and clean equipment. Iodine changes orange-brown to blue-black with starch. Benedict’s starts blue and after hot-water-bath heating forms a green/yellow/orange/brick-red positive precipitate for reducing sugar; blue remains negative. Biuret changes blue to lilac/purple with protein. Sudan III produces a red-stained oil layer with lipid; no distinct red oil layer is negative. Only the Benedict’s test here requires heating.",
    "explain": "Five points: each complete reagent/result pair (including negative) and correctly controlled heating with separate portions. Do not heat an ethanol-emulsion test or mix all reagents in one tube. Starch and reducing sugar use different tests.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Digestion and practical practice"
  },
  {
    "id": "aqa-digestion-completion-q11",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Bile and the digestive system",
    "specRefs": [
      "RP03"
    ],
    "q": "A student uses one dirty pipette for all tests, filters away an oily layer before testing for lipid, heats ethanol over a flame and calls a dark extract negative when no colour change is obvious. Evaluate and improve this procedure.",
    "answer": "Use separate clean pipettes and fresh portions to avoid contamination. Test a suitable portion containing the lipid rather than removing it. Keep ethanol/alcohol-containing stains away from flames and do not heat the emulsion test; use a water bath for Benedict’s, with eye protection and safe hot-tube handling. Use known positive/negative controls and a sample blank, and repeat masked/doubtful results before judging a dark sample.",
    "explain": "Five points: contamination control; representative lipid sample; flammability correction; appropriate heating/protection; controls and cautious interpretation. Food colour/turbidity can mask a reaction, so absence of an obvious change is not automatically a true negative.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Digestion and practical practice"
  },
  {
    "id": "aqa-digestion-completion-q12",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "From cells to organ systems",
    "specRefs": [
      "4.2.2.1"
    ],
    "q": "Explain why a protein-rich meal needs digestion before absorption and how absorbed products can be used by the body. Distinguish this from water absorption and egestion.",
    "answer": "Large insoluble protein molecules must be broken down by proteases to smaller soluble amino acids that can be absorbed across the small intestine into blood. Cells use amino acids to build new proteins; other digested products can build carbohydrates/lipids and some glucose is used in respiration. The large intestine absorbs water from remaining material, while egestion removes undigested material as faeces.",
    "explain": "Four points: protein breakdown to soluble amino acids; small-intestine absorption; rebuilding/metabolic use; distinction from large-intestine water absorption and egestion. Digestion is not simply moving unchanged large food molecules into blood.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Digestion and practical practice"
  }
];
const digestionBeforeLesson=activeLesson,digestionBeforeQuestions=activeQuestions;
activeLesson=function(s,c,t){const l=digestionBeforeLesson(s,c,t);if(!l||!cellCompletionPath(s,c)||t!=='Organisation')return l;const sections=l.sections.map(x=>DIGESTION_EXTENSIONS[x.title]?{...x,body:x.body+'\n\n'+DIGESTION_EXTENSIONS[x.title]}:x);return {...l,sections,learn:sections.map(x=>x.body).join('\n\n'),practicals:l.practicals.map(x=>DIGESTION_PRACTICALS[x.id]?{...x,...DIGESTION_PRACTICALS[x.id]}:x)};};
activeQuestions=function(s,c=choice(s)){const qs=digestionBeforeQuestions(s,c);return cellCompletionPath(s,c)?[...qs,...DIGESTION_QUESTIONS.map(q=>({...q,board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}))]:qs;};
const DIGESTION_PH_TIMES=[[4,180],[5,120],[6,90],[7,60],[8,120],[9,180]];
function digestionPHGraph(){const x=n=>70+(n-4)*55,y=t=>250-11000/t;return `<figure><figcaption>Illustrative amylase results at controlled temperature; same starch endpoint</figcaption><svg viewBox="0 0 440 325" role="img" aria-label="Relative rate against pH: fastest tested pH 7 with time 60 seconds; pH 4 and 9 take 180, pH 5 and 8 take 120, pH 6 takes 90 seconds"><path d="M70 30V250H380" stroke="#36566d" fill="none"/>${[0,.005,.01,.015,.02].map(n=>`<text x="12" y="${250-11000*n+4}" font-size="12">${n.toFixed(3)}</text><path d="M70 ${250-11000*n}H380" stroke="#d4dfe5"/>`).join('')}<polyline points="${DIGESTION_PH_TIMES.map(([a,b])=>x(a)+','+y(b).toFixed(2)).join(' ')}" stroke="#397e55" stroke-width="3" fill="none"/>${DIGESTION_PH_TIMES.map(([a,b])=>`<circle cx="${x(a)}" cy="${y(b)}" r="4" fill="#397e55"/><text x="${x(a)-3}" y="272" font-size="13">${a}</text>`).join('')}<text x="90" y="18" font-size="14">Relative rate, 1 / time (s⁻¹)</text><text x="205" y="303" font-size="14">pH (no unit)</text></svg><p>pH 4, 5, 6, 7, 8, 9; endpoint time 180, 120, 90, 60, 120, 180 s. Rates are inverse times; lines guide the eye, not proof of an exact curve between tested points.</p></figure>`;}
const digestionBeforeVisual=cellVisual;
cellVisual=function(type){return type==='digestion-ph-graph'?digestionPHGraph():digestionBeforeVisual(type);};
const digestionBeforeDiagrams=bioDiagramSection;
bioDiagramSection=function(topic){const previous=digestionBeforeDiagrams(topic);if(topic!=='Organisation'||!cellCompletionPath('Biology',choice('Biology')))return previous;const g=LAB_DATA.Biology;return previous+`<details class="card"><summary>Compare enzyme temperature and pH evidence</summary><h3>Existing Learning Lab temperature graph</h3><svg viewBox="0 0 440 245" role="img" aria-label="${g.aria}"><path d="M45 25V200H415" stroke="#36566d" fill="none"/><path d="${g.path}" stroke="#397e55" stroke-width="3" fill="none"/><text x="160" y="229">${g.x}</text><text x="60" y="18">${g.y}</text></svg><p>Qualitative pattern: activity rises towards an optimum, then falls as enzymes denature. No exact temperature can be read from this unnumbered sketch.</p>${digestionPHGraph()}<p>Predict how pH affects the active site, then use the practical questions to test your explanation.</p></details>`;};
const digestionBeforeSupport=biologySupportInventory;
biologySupportInventory=function(){return [...digestionBeforeSupport(),{id:'Biology|support|digestion-ph-graph',subject:'Biology',kind:'support',tier:'both',label:'RP04 amylase pH/relative-rate graph',fingerprint:auditFingerprint(digestionPHGraph()),studentVisible:true}];};
