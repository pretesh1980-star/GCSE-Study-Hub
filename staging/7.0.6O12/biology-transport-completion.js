'use strict';
// Build 7.0.5R: four shared AQA Trilogy transport/RP02 units only.
const TRANSPORT_EXTENSIONS={
  "Diffusion and osmosis": "Diffusion is the spreading of gas particles or dissolved particles by random movement, producing net movement down a concentration gradient. Particles still move in both directions; at equal concentrations there is no net movement. Oxygen diffuses into respiring cells from a higher concentration outside; carbon dioxide can diffuse out where it is produced. Urea, a waste substance, diffuses from cells into blood plasma and is carried to the kidneys for excretion. A steeper concentration difference increases net movement; higher temperature increases particle motion; a larger membrane area permits more particles to cross at once. Diffusion does not require energy from respiration. Osmosis is specifically the net diffusion of water through a partially permeable membrane from a dilute solution to a more concentrated solution. The membrane permits water through but restricts some dissolved substances. In dilute surroundings, water can enter cells. A plant cell becomes turgid as its contents push against its supporting wall; an animal cell has no wall and may swell and burst in sufficiently dilute surroundings. In concentrated surroundings cells lose water and shrink; plant tissue may become less firm. These effects follow water movement, not movement of sugar into the cell. Percentage change in mass = (final mass − initial mass) / initial mass ×100. For 2.0 g becoming 2.3 g, change is +0.3 g and percentage change is +15%; for 2.5 g becoming 2.0 g, it is −20%. A negative sign records loss; a percentage is not a mass in grams. Mean rate of water uptake can be estimated from mass gain / time when other mass changes are negligible: 0.30 g in 20 min = 0.015 g/min = 15 mg/min. This is an average, not proof that uptake was constant. Blotting consistently reduces surface-water error. Plot solution concentration on the horizontal axis and percentage mass change on the vertical axis, with labels, units, a suitable even scale and both gains and losses. For example, results at 0, 2, 4 and 6 g sugar per 100 mL of final solution of +15%, +5%, −5% and −15% cross zero between 2 and 4, approximately 3 g/100 mL. Use an appropriate trend line and interpolate; do not force it through the origin. Near the zero-change concentration, the solution and tissue have no net water exchange under the conditions (approximately isotonic). Water still moves both ways. This estimates the tissue's equivalent solute concentration; it does not show cells have stopped all transport, identify each solute, or give an exact value beyond the data precision. Use more concentrations near the crossing to improve the estimate. Practise plotting the separate dataset below before viewing its graph.",
  "Active transport and exchange": "Active transport uses energy supplied by respiration to move dissolved substances from a lower concentration to a higher concentration, against the gradient. Root-hair cells can accumulate mineral ions from dilute soil water, helping healthy growth even when their internal ion concentration is greater. Small-intestine cells can absorb glucose from a lower concentration in the gut into blood with a higher glucose concentration; glucose supplies respiration. Diffusion alone cannot sustain uptake against that gradient. Compare the processes: diffusion can move dissolved substances or gases down their own gradients without energy from respiration; osmosis moves water across a partially permeable membrane from dilute to concentrated solution without energy from respiration; active transport moves substances against their gradient and requires respiration energy. Decide from the substance, membrane, direction and energy evidence rather than assuming every root-uptake process is active transport: water enters by osmosis. Exchange surfaces must meet demand. Alveoli in lungs have a large total area, thin walls, a good blood supply and ventilation; ventilation and blood flow maintain oxygen/carbon-dioxide gradients. Fish gill filaments and lamellae provide a large area and short diffusion path; blood flow and water moving over the gills maintain gas gradients. No detailed counter-current mechanism is needed here. Villi and microvilli increase small-intestine absorption area; a thin surface shortens the path and blood flow carries absorbed substances away. Root hairs increase contact area with soil for water and ion uptake. Thin leaves give a short gas pathway; stomata permit gas movement and air spaces expose a large area of mesophyll to gases. Photosynthesis can maintain inward carbon-dioxide and outward oxygen gradients; cells also respire, so direction depends on conditions. Plants do not have blood: do not transfer animal ventilation/blood-supply explanations uncritically to leaves and roots. In an unfamiliar organism, justify each adaptation using area, path length or maintenance of gradients rather than simply naming the organ. Use the existing Organisation lessons for alveoli, villi, leaf tissues and plant transport context.",
  "Surface-area-to-volume reasoning": "A single-celled organism often has a relatively large surface-area-to-volume ratio and a short distance from its surroundings to its interior, allowing diffusion to meet demand. As an organism grows, volume (and demand) increases faster than surface area, so specialised exchange surfaces and transport systems become necessary. Compare equal-volume shapes as well as different sizes. For a rectangular model, surface area = 2(length × width + length × height + width × height); volume = length × width × height. A cube with side 2 has area 24 and volume 8, so SA:V is 3:1. A flat 1 × 2 × 4 model also has volume 8 but area 2(2+4+8)=28, giving 3.5:1; it has more exchange area for the same volume and a shorter path across its thin dimension. Area uses squared units and volume cubed units; the ratio is conventionally reported as SA:V. Shape models simplify real organisms, whose surfaces may fold and whose cells differ in activity."
};
const TRANSPORT_PRACTICAL={
  "aim": "Investigate the effect of a range of salt or sugar concentrations on plant-tissue mass (AQA Trilogy required practical 2).",
  "method": "RP02 investigates how a range of salt or sugar solution concentrations affects the mass of plant tissue. Use the same type/source of plant tissue, for example potato cylinders cut with the same borer and trimmed to equal length; equal dimensions help control surface area and diffusion distance. A teacher prepares/carries out cutting or supervises use of a borer/scalpel on a safe surface; cut away from fingers, use eye protection as instructed and follow school sharps procedures. Do not taste laboratory materials; clean spills to prevent slips and wash hands. Label a range of known solution concentrations and use the same solution volume for each. Record concentration units consistently, such as g sugar per 100 mL final solution. Gently blot each sample in the same way, measure initial mass on a suitably precise balance and record dimensions if needed to check consistency. Immerse samples fully for the same time at the same temperature, using separate repeat samples at each concentration. Remove them, blot consistently without squeezing out internal water, and record final mass. Keep tissue source, dimensions, immersion time, temperature and solution volume controlled. Initial/final length can provide supplementary observations but does not replace the required mass measurements. Calculate final minus initial mass, then percentage change using initial mass as the denominator. This permits fairer comparison when initial masses differ slightly. Calculate each repeat's percentage change before taking a mean; record spread and investigate unexpected values. Plot mean percentage change against concentration, include negative results, and use an appropriate line/curve of best fit to estimate where it crosses zero. A point is not discarded merely for being inconvenient: investigate a recorded cause, repeat it, and explain any exclusion. More independent repeats improve reliability; closer concentration intervals near zero improve the concentration estimate. A finer balance may reduce measurement uncertainty; repeating an unchanged biased procedure does not remove its systematic error.",
  "controls": "Same tissue source and dimensions; equal solution volume, temperature and immersion time; consistent blotting and balance procedure. Independent repeat samples at each concentration; record and investigate anomalies.",
  "example": "Worked example: initial 2.0 g, final 2.3 g gives +0.3 g and +15%. Initial 2.5 g, final 2.0 g gives −0.5 g and −20%. If +0.30 g is gained in 20 minutes, mean water-uptake estimate = 0.015 g/min. Example graph: +15, +5, −5, −15% at 0, 2, 4, 6 g/100 mL crosses zero near 3 g/100 mL. This is an estimate under those conditions, not proof that water molecules stop moving.",
  "pitfall": "Use initial mass, not final mass, as the percentage denominator. Surface solution can inflate final mass. Plot concentration horizontally and percentage vertically; do not force the trend through the origin or extrapolate beyond the data without justification. Recording length alone does not complete this mass investigation."
};
const TRANSPORT_QUESTIONS=[
  {
    "id": "aqa-transport-completion-q01",
    "subject": "Biology",
    "topic": "Cell Biology",
    "section": "Diffusion and osmosis",
    "specRefs": [
      "4.1.3.1"
    ],
    "q": "A respiring cell has less oxygen but more carbon dioxide and urea than the surrounding blood plasma. Predict net movement of each substance, explain why, and explain how temperature and concentration difference affect diffusion rate.",
    "answer": "Oxygen diffuses into the cell; carbon dioxide and urea diffuse out into plasma, down each substance’s concentration gradient. Urea is carried to the kidneys for excretion. Higher temperature increases particle motion; a steeper gradient increases net movement. Diffusion requires no energy from respiration.",
    "explain": "Six points: oxygen direction; carbon-dioxide direction; urea direction and removal context; down-gradient explanation; temperature link; gradient-rate link. Molecules move randomly both ways: net movement is not every particle moving one way. Urea is not a gas exchanged at the lungs.",
    "marks": 6,
    "type": "writing",
    "tier": "both",
    "level": 2,
    "style": "Transport and practical practice"
  },
  {
    "id": "aqa-transport-completion-q02",
    "subject": "Biology",
    "topic": "Cell Biology",
    "section": "Surface-area-to-volume reasoning",
    "specRefs": [
      "4.1.3.1"
    ],
    "q": "Compare two equal-volume model organisms: a cube of side 2 mm and a flat box 1 × 2 × 4 mm. Calculate each surface area, volume and SA:V ratio. Which could exchange materials more readily without a transport system, and why is this only a model?",
    "answer": "Cube: area 24 mm², volume 8 mm³, SA:V 3:1. Flat box: area 28 mm², volume 8 mm³, ratio 3.5:1. The flatter model offers more area for the same volume and a shorter path across its thin dimension. Real organisms may have folds, different cell demands and internal transport.",
    "explain": "Five points: cube calculation; box calculation; both correct ratios; area/path explanation; model limitation. Do not confuse area with volume or assume greater size alone always gives a better ratio.",
    "marks": 5,
    "type": "writing",
    "tier": "both",
    "level": 2,
    "style": "Transport and practical practice"
  },
  {
    "id": "aqa-transport-completion-q03",
    "subject": "Biology",
    "topic": "Cell Biology",
    "section": "Active transport and exchange",
    "specRefs": [
      "4.1.3.1"
    ],
    "q": "Compare how lungs and fish gills maintain rapid gas exchange. Then explain one exchange adaptation each of the small intestine, a root hair and a leaf. An unfamiliar aquatic animal has thin folded outgrowths: predict their benefit without assuming it has blood.",
    "answer": "Lungs and gills have large surfaces and thin exchange barriers; blood flow and movement of air or water maintain gas concentration gradients. Intestinal villi/microvilli increase absorption area; root hairs increase uptake area from soil; leaves have stomata/air spaces and a short diffusion path. Thin folded outgrowths increase area and shorten diffusion distance; their transport mechanism needs separate evidence.",
    "explain": "Six points: animal large area/thin barrier; maintained gradients; one valid intestine link; root-hair link; leaf link; unfamiliar adaptation with justified limitation. Plants have no blood; gills exchange with water. Detailed counter-current flow is not required.",
    "marks": 6,
    "type": "writing",
    "tier": "both",
    "level": 2,
    "style": "Transport and practical practice"
  },
  {
    "id": "aqa-transport-completion-q04",
    "subject": "Biology",
    "topic": "Cell Biology",
    "section": "Diffusion and osmosis",
    "specRefs": [
      "4.1.3.2",
      "RP02"
    ],
    "q": "A blotted plant-tissue sample gains 0.36 g in 30 minutes. Assuming mass gain estimates water uptake, calculate the mean uptake rate in g/min.",
    "answer": "0.012 g/min",
    "explain": "Mean rate = mass gain / time = 0.36/30 = 0.012 g/min = 12 mg/min = 0.0002 g/s. It is an average, not an instantaneous rate. Surface water or other mass changes would weaken the assumption. A percentage or a mass without a time denominator is not the requested rate.",
    "marks": 2,
    "type": "short",
    "tier": "both",
    "level": 2,
    "style": "Transport and practical practice",
    "accepted": [
      "0.012",
      "0.012 g/min",
      "0.012 g min^-1",
      "0.012 g min⁻¹",
      "12 mg/min",
      "12 mg min^-1",
      "0.0002 g/s",
      "2e-4 g/s",
      "0.2 mg/s"
    ]
  },
  {
    "id": "aqa-transport-completion-q05",
    "subject": "Biology",
    "topic": "Cell Biology",
    "section": "Diffusion and osmosis",
    "specRefs": [
      "4.1.3.2",
      "RP02"
    ],
    "q": "Each sample initially has mass 2.50 g. At concentrations 0, 2, 4, 6 and 8 g sugar per 100 mL of final solution, final masses are 3.00, 2.80, 2.60, 2.40 and 2.20 g. Calculate all percentage changes, then sketch an appropriate graph on paper before checking. Specify both axes, units and the trend.",
    "answer": "The percentage changes are +20%, +12%, +4%, −4% and −12%. Plot concentration (g/100 mL) horizontally and percentage mass change (%) vertically using an even scale that includes losses. Plot (0,20), (2,12), (4,4), (6,−4), (8,−12) and an appropriate descending trend line.",
    "explain": "Five points: correct positive changes; correct negative changes; initial-mass denominator; axes/units/scales; plotted coordinates/trend. For example (2.40−2.50)/2.50 ×100 = −4%. Do not use final mass as denominator or put negative changes above zero. Compare your sketch to the separate graph-interpretation task.",
    "marks": 5,
    "type": "writing",
    "tier": "both",
    "level": 2,
    "style": "Transport and practical practice"
  },
  {
    "id": "aqa-transport-completion-q06",
    "subject": "Biology",
    "topic": "Cell Biology",
    "section": "Diffusion and osmosis",
    "specRefs": [
      "4.1.3.2",
      "RP02"
    ],
    "q": "Use the osmosis graph. Estimate the concentration giving zero percentage mass change. Explain water movement below and above this concentration, what zero means, and one way to improve the estimate.",
    "answer": "The trend crosses zero at about 5 g/100 mL, between the tested 4 and 6 concentrations. Below it tissue gains water; above it tissue loses water. Near zero there is no net water movement under these conditions, although water continues moving both ways. Test more closely spaced concentrations near 5, with repeats.",
    "explain": "Five points: estimate about 5 with concentration unit; gain/loss directions; correct net-movement meaning; interpolation rather than claiming a tested point; justified improvement. Accept a graph-reading estimate roughly 4.8–5.2 g/100 mL. Zero mass change does not show that all transport stops or that every cell solute is sugar.",
    "marks": 5,
    "type": "writing",
    "tier": "both",
    "level": 2,
    "style": "Transport and practical practice",
    "visual": "transport-osmosis-graph"
  },
  {
    "id": "aqa-transport-completion-q07",
    "subject": "Biology",
    "topic": "Cell Biology",
    "section": "Active transport and exchange",
    "specRefs": [
      "4.1.3.1",
      "4.1.3.2",
      "4.1.3.3"
    ],
    "q": "In the intestine glucose concentration is lower in the gut than in blood, yet glucose is absorbed. A root accumulates ions from dilute soil. Compare these processes with oxygen entering a cell and water entering a cell from dilute solution. An unfamiliar alga stops accumulating ions against their gradient when respiration is inhibited: explain the evidence.",
    "answer": "Gut glucose absorption and root mineral-ion uptake can use active transport against concentration gradients, powered by respiration. Glucose supports respiration and mineral ions support plant growth. Oxygen can diffuse down its gradient without energy from respiration. Water crosses a partially permeable membrane by osmosis from dilute to concentrated solution. Loss of energy supply explains reduced active ion uptake in the alga.",
    "explain": "Six points: gut against-gradient direction; root/biological advantage; respiration-energy requirement; diffusion comparison; osmosis including water/membrane/direction; unfamiliar energy-evidence application. Do not call root water uptake active transport or assume every movement requires respiration energy.",
    "marks": 6,
    "type": "writing",
    "tier": "both",
    "level": 2,
    "style": "Transport and practical practice"
  },
  {
    "id": "aqa-transport-completion-q08",
    "subject": "Biology",
    "topic": "Cell Biology",
    "section": "Diffusion and osmosis",
    "specRefs": [
      "RP02"
    ],
    "q": "Plan a fair investigation of how solution concentration affects potato mass. Include sample preparation, initial/final measurements, controlled variables, repeats and safety. Would measuring length alone complete this practical?",
    "answer": "Use equal-dimension samples from the same tissue source and teacher-supervised safe cutting. Label a range of known concentrations, use equal solution volumes, blot consistently and measure initial masses. Immerse separate repeats for equal time at equal temperature, then blot and measure final masses. Record percentage changes and compare means. Handle sharps under school procedures, avoid tasting samples and clean spills. Length alone does not replace mass measurements.",
    "explain": "Six points: appropriate range and prepared samples; initial/final mass; time/temperature/volume controls; consistent blotting; independent repeats; relevant linked safety plus required mass outcome. Equal dimensions help control surface area; percentage change helps compare small initial-mass differences.",
    "marks": 6,
    "type": "writing",
    "tier": "both",
    "level": 2,
    "style": "Transport and practical practice"
  },
  {
    "id": "aqa-transport-completion-q09",
    "subject": "Biology",
    "topic": "Cell Biology",
    "section": "Diffusion and osmosis",
    "specRefs": [
      "4.1.3.2",
      "RP02"
    ],
    "q": "Repeat percentage changes at one concentration are 12%, 11% and 35%. The 35% sample was recorded as not blotted before final weighing. Evaluate the results, estimate the mean of the two usable results, and propose improvements near the zero-change concentration.",
    "answer": "The unblotted surface solution can inflate final mass, explaining the anomalous 35%. Repeat that sample correctly; justify excluding the known flawed result rather than dropping an inconvenient value. The two usable values average 11.5%, but two repeats give limited evidence of spread. Use more independent repeats and closer concentration intervals near zero, with consistent blotting and suitable balance precision.",
    "explain": "Five points: recorded cause linked to inflated mass; justified repeat/exclusion; 11.5% mean; reliability limitation; specific improvements. An anomaly alone is not proof of an error. Repeats do not remove a consistently biased blotting procedure.",
    "marks": 5,
    "type": "writing",
    "tier": "both",
    "level": 2,
    "style": "Transport and practical practice"
  },
  {
    "id": "aqa-transport-completion-q10",
    "subject": "Biology",
    "topic": "Cell Biology",
    "section": "Diffusion and osmosis",
    "specRefs": [
      "4.1.3.2"
    ],
    "q": "Which statement correctly compares plant and animal cells placed in very dilute surroundings?",
    "answer": "Water can enter both by osmosis; a plant cell wall resists excessive expansion, while an animal cell may burst.",
    "explain": "Water, not sugar, moves by osmosis through a partially permeable membrane. The plant wall supports the cell; in concentrated surroundings both can lose water, with plant tissue becoming less firm. A wall does not stop all water entry.",
    "marks": 1,
    "type": "mcq",
    "tier": "both",
    "level": 2,
    "style": "Transport and practical practice",
    "options": [
      "Water can enter both by osmosis; a plant cell wall resists excessive expansion, while an animal cell may burst.",
      "Sugar always enters both cells by osmosis.",
      "A cell wall prevents all movement of water.",
      "Water leaves both cells because the surroundings are dilute."
    ]
  }
];
const transportBeforeLesson=activeLesson,transportBeforeQuestions=activeQuestions;
activeLesson=function(s,c,t){const l=transportBeforeLesson(s,c,t);if(!l||!cellCompletionPath(s,c)||t!=='Cell Biology')return l;const sections=l.sections.map(x=>TRANSPORT_EXTENSIONS[x.title]?{...x,body:x.body+'\n\n'+TRANSPORT_EXTENSIONS[x.title]}:x);return {...l,sections,learn:sections.map(x=>x.body).join('\n\n'),practicals:l.practicals.map(x=>x.id==='osmosis'?{...x,...TRANSPORT_PRACTICAL}:x)};};
activeQuestions=function(s,c=choice(s)){const qs=transportBeforeQuestions(s,c);return cellCompletionPath(s,c)?[...qs,...TRANSPORT_QUESTIONS.map(q=>({...q,board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}))]:qs;};
const TRANSPORT_GRAPH_DATA=[[0,20],[2,12],[4,4],[6,-4],[8,-12]];
function transportGraph(){const x=n=>75+n*42,y=n=>200-n*5;return `<figure><figcaption>Separate practice dataset: percentage mass change after immersion</figcaption><svg viewBox="0 0 470 335" role="img" aria-label="Osmosis graph: concentrations 0, 2, 4, 6, 8 g per 100 mL give percentage changes 20, 12, 4, minus 4, minus 12; the line crosses zero midway between 4 and 6"><path d="M75 65V275H430" fill="none" stroke="#354f65" stroke-width="2"/><path d="M75 200H430" stroke="#899fac" stroke-dasharray="4 4"/>${[-10,0,10,20].map(n=>`<text x="38" y="${y(n)+5}" font-size="13">${n}</text><path d="M70 ${y(n)}H430" stroke="#d1dce2"/>`).join('')}${[0,2,4,6,8].map(n=>`<text x="${x(n)-4}" y="292" font-size="13">${n}</text>`).join('')}<polyline points="${TRANSPORT_GRAPH_DATA.map(([a,b])=>x(a)+','+y(b)).join(' ')}" fill="none" stroke="#39865f" stroke-width="3"/>${TRANSPORT_GRAPH_DATA.map(([a,b])=>`<circle cx="${x(a)}" cy="${y(b)}" r="4" fill="#28593e"/>`).join('')}<text x="80" y="36" font-size="15">Percentage mass change (%)</text><text x="70" y="321" font-size="14">Sugar concentration (g per 100 mL final solution)</text></svg><p>Data: concentration 0, 2, 4, 6, 8 g/100 mL; mass change +20, +12, +4, −4, −12%.</p></figure>`;}
const transportBeforeVisual=cellVisual;
cellVisual=function(type){return type==='transport-osmosis-graph'?transportGraph():transportBeforeVisual(type);};
const transportBeforeDiagrams=bioDiagramSection;
bioDiagramSection=function(topic){const previous=transportBeforeDiagrams(topic);return topic==='Cell Biology'&&cellCompletionPath('Biology',choice('Biology'))?previous+`<details class="card"><summary>Osmosis graph practice — sketch before revealing</summary>${transportGraph()}<p>Read the zero crossing between the tested concentrations; explain what no net mass change means. Compare your reasoning with the practical questions.</p></details>`:previous;};
const transportBeforeSupport=biologySupportInventory;
biologySupportInventory=function(){return [...transportBeforeSupport(),{id:'Biology|support|transport-osmosis-graph',subject:'Biology',kind:'support',tier:'both',label:'RP02 plotted mass-change data',fingerprint:auditFingerprint(transportGraph()),studentVisible:true}];};
