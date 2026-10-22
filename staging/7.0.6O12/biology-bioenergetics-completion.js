'use strict';
// 7.0.5X: shared content and separately audited Higher extensions.
const BIOENERGETICS_EXTENSIONS={
  "Photosynthesis": "Word equation: carbon dioxide + water → glucose + oxygen, with light supplying energy. Recognise CO₂ as carbon dioxide, H₂O as water, O₂ as oxygen and C₆H₁₂O₆ as glucose. Photosynthesis is endothermic: energy is transferred from the surroundings to chloroplasts by light, absorbed by chlorophyll. Energy is transferred, not created, and light is an energy input rather than a chemical product. This specification requires the word equation and recognition of these symbols; balancing a symbol equation is not an additional assessment demand here.\nGlucose has several uses: respiration transfers energy; conversion to insoluble starch provides storage; conversion to fats or oils stores material/energy; cellulose strengthens cell walls. Glucose and nitrate ions absorbed from soil are used to form amino acids for protein synthesis. Nitrate supplies nitrogen: glucose alone does not supply every element needed for protein. These are different uses, not names for the same process. Reuse the existing glucose-use question and the metabolism explanation for how synthesis and breakdown connect.",
  "Limiting factors": "Shared single-factor investigation: with other conditions controlled, greater light intensity generally increases photosynthesis rate over part of the range. Increasing carbon dioxide concentration can also increase rate. Temperature increases usually speed enzyme-controlled reactions up to a suitable range, but high temperatures can denature enzymes and reduce rate. Less chlorophyll means less light can be absorbed and can reduce photosynthesis. Read a single-factor graph by naming the changed variable, rate units, rise/fall/plateau and numerical values; a plateau means no further rate increase over the tested range. Do not assume a straight-line relationship continues beyond measurements. The separate Higher section covers deciding between interacting limits and greenhouse economics.",
  "Aerobic respiration": "Cellular respiration is exothermic: it transfers energy for living processes and occurs continuously in living cells, including plants in light and darkness. Word equation: glucose + oxygen → carbon dioxide + water. Recognise glucose C₆H₁₂O₆, oxygen O₂, carbon dioxide CO₂ and water H₂O. Energy transferred supports chemical reactions building larger molecules, movement and maintaining body temperature where applicable. Respiration is a set of cellular reactions, whereas breathing moves air. Do not say energy is made or that only animal cells respire.",
  "Anaerobic respiration": "In muscles the word equation is glucose → lactic acid. Without sufficient oxygen, glucose is incompletely oxidised, so much less energy is transferred per glucose molecule than aerobically. In plant and yeast cells the word equation is glucose → ethanol + carbon dioxide. This anaerobic process in yeast is fermentation: carbon dioxide makes bread dough rise and ethanol is used in alcoholic-drink production. Compare oxygen requirement, products and relative energy transfer explicitly: muscle anaerobic respiration does not produce ethanol, and yeast fermentation does not produce lactic acid in this specification model. Both aerobic and anaerobic respiration transfer energy; neither is photosynthesis.",
  "Exercise and metabolism": "During exercise muscles need more energy. Heart rate, breathing rate and breath volume increase, delivering more oxygenated blood to muscles for respiration. When oxygen delivery is insufficient, muscles respire anaerobically, incompletely oxidising glucose and accumulating lactic acid, creating an oxygen debt. During prolonged vigorous activity muscles become fatigued and contract less efficiently. The detailed recovery mechanism is confined to the Higher recovery section.\nMetabolism is the sum of all reactions in cells or the body, including both building and breaking down molecules. Respiration transfers energy for continual enzyme-controlled synthesis. Glucose can be converted to starch for plant storage, glycogen for storage in animals, and cellulose for plant cell walls. One glycerol molecule and three fatty acid molecules form a lipid molecule. Plants use glucose and nitrate ions to make amino acids, which join to form proteins. Excess proteins are broken down, and the nitrogen-containing waste is converted to urea for excretion; this is not the same as passing undigested food out of the gut. Respiration itself is a metabolic reaction. Reuse the existing glycogen-storage explanation in Homeostasis and the digestion enzymes/products lesson rather than treating these reactions as isolated lists.",
  "Measuring a biological rate": "RP05 uses an aquatic photosynthetic organism such as pondweed to investigate light intensity. Record oxygen collected per unit time; calculate rate = volume/time and rearrange as volume = rate × time or time = volume/rate. Use consistent units, repeats and a mean. Bubble count is a useful proxy but unequal bubble size makes gas volume preferable; some gas dissolves or escapes and the plant also respires, so collected oxygen is an estimate of photosynthetic activity. Plot light intensity on the horizontal axis and mean rate on the vertical axis, with labelled units, uniform scales and the observed range. The shared worked data below practise a single-factor graph; Higher students also have a separate interacting-factor resource.",
  "Interacting limiting factors": "Higher only: compare curves differing in carbon dioxide or temperature as well as light intensity. At low light, increasing carbon dioxide or temperature may do little because light limits the rate. At high light, a higher rate after adding carbon dioxide indicates carbon dioxide had limited it; compare otherwise matched curves to isolate the change. Temperature effects depend on enzyme activity and excessive heat can lower rate. For a point-source model I ∝ 1/d², so I₂/I₁ = (d₁/d₂)². Use the same distance units; this predicts light intensity, not necessarily the identical ratio of photosynthesis rates. Real lamps and background light limit the model. Reuse the existing inverse-square question.\nIn greenhouses, extra lighting, heating or carbon dioxide may improve yield only when relevant conditions permit. Profit gain = extra crop income − extra running costs. For illustrative choices, £40 additional income at £20 cost adds £20 profit; £70 income at £60 cost adds only £10 profit. The greatest rate or yield is not automatically the best profit. Use measured response and costs, avoid spending on a factor that currently does not increase yield, and recognise that prices/conditions can change."
};
const BIOENERGETICS_RECOVERY="Higher only: blood flowing through exercising muscles carries lactic acid to the liver, where it is converted back to glucose. Oxygen debt is the extra oxygen needed after exercise to react with accumulated lactic acid and remove it from cells, in the specification wording. Heart and breathing activity can remain raised during recovery as extra oxygen is supplied. Compare recovery readings with resting values rather than assuming oxygen demand stops at the instant exercise ends. The term EPOC and detailed biochemical pathways are not additional requirements in this specification.";
const BIOENERGETICS_PRACTICAL={
  "aim": "AQA Trilogy required practical 5: investigate the effect of light intensity on photosynthesis using an aquatic organism such as pondweed.",
  "method": "Use a suitable healthy aquatic shoot of consistent length in water with a controlled carbon dioxide supply, for example the same sodium hydrogencarbonate concentration. A lamp provides light; change its distance or use measured light-intensity settings, recording distance/intensity rather than assuming a change is exact. Keep the organism, water volume and temperature constant; use an LED/cool lamp or heat shield/water bath as appropriate and measure temperature so lamp heating is not mistaken for a light effect. Allow equilibration after each setting. Collect released oxygen over a fixed measured period with suitable gas-volume apparatus, or count bubbles as a stated proxy. Record at least three repeats per setting, reset measurement apparatus consistently and investigate unusual readings. Keep carbon dioxide concentration, background light and measurement time controlled. Record units and calculate rate and mean rate. With bubble counts, explicitly evaluate unequal sizes; a gas syringe or suitable collection arrangement measures volume more directly but may lose gas or have limited resolution. Wear eye protection when handling solutions, keep electrical lamps/leads away from water, avoid hot-lamp burns, and follow teacher guidance for glassware and cutting plant material. Do not release non-native aquatic material into the environment.",
  "controls": "Change light intensity/distance only; control temperature, carbon dioxide supply, aquatic shoot/leaf area, water volume, measurement period and background light. Repeat and compare spread; check leaks and timing rather than discarding inconvenient results.",
  "example": "Illustrative volumes at light intensities 10, 20, 30, 40 arbitrary units: repeats [4,6,5], [8,10,9], [12,14,13], [12,14,13] cm³, each over 5 min. Mean rates are 1.0, 1.8, 2.6 and 2.6 cm³/min. These invented values practise processing, not a promised yield from every shoot.",
  "pitfall": "Water temperature can rise when the lamp approaches. Bubble number is not oxygen volume unless bubble size is known and consistent. Gas collection estimates net oxygen output under the conditions. Foundation interprets a single-factor graph; Higher inverse-square/interacting-factor work is in its separately gated section."
};
const BIOENERGETICS_QUESTIONS=[
  {
    "id": "aqa-bioenergetics-completion-q01",
    "subject": "Biology",
    "topic": "Bioenergetics",
    "section": "Photosynthesis",
    "specRefs": [
      "4.4.1.1"
    ],
    "q": "Write the photosynthesis word equation, identify CO₂, H₂O, O₂ and C₆H₁₂O₆, and explain why photosynthesis is endothermic.",
    "answer": "Carbon dioxide + water → glucose + oxygen. CO₂ is carbon dioxide, H₂O water, O₂ oxygen, C₆H₁₂O₆ glucose. Light transfers energy from the surroundings to chloroplasts, where chlorophyll absorbs it; the reaction takes in energy.",
    "explain": "Three criteria: correct reactants/products; all four symbol meanings; light-energy transfer/endothermic explanation. Light is not a chemical product and energy is not created. A balanced symbol equation is not demanded here.",
    "marks": 3,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Photosynthesis, respiration and metabolism practice"
  },
  {
    "id": "aqa-bioenergetics-completion-q02",
    "subject": "Biology",
    "topic": "Bioenergetics",
    "section": "Photosynthesis",
    "specRefs": [
      "4.4.1.3",
      "4.4.2.3"
    ],
    "q": "A plant has glucose available but too few nitrate ions. Explain all five specified uses of photosynthetic glucose and why protein production may be restricted despite the glucose supply.",
    "answer": "Glucose is used in respiration, converted to insoluble starch for storage, fats/oils for storage, and cellulose for cell walls. Glucose and nitrate ions are used to make amino acids for proteins. Nitrates supply nitrogen, so glucose alone cannot provide everything required for amino-acid/protein synthesis.",
    "explain": "Six criteria: five distinct uses and the nitrate/nitrogen explanation. Starch and cellulose have different functions; nitrate ions do not supply light energy.",
    "marks": 6,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Photosynthesis, respiration and metabolism practice"
  },
  {
    "id": "aqa-bioenergetics-completion-q03",
    "subject": "Biology",
    "topic": "Bioenergetics",
    "section": "Limiting factors",
    "specRefs": [
      "4.4.1.2"
    ],
    "q": "Describe the effects on photosynthesis of changing light intensity alone, carbon dioxide concentration alone, temperature alone, or chlorophyll amount. A single-factor graph rises and then levels off: describe what the plateau shows without inventing a continued rise.",
    "answer": "With other conditions controlled, light or carbon dioxide increases can raise rate over a range. Temperature increases can speed enzyme-controlled reactions up to a suitable range; excessive heat can denature enzymes and reduce rate. Less chlorophyll reduces light absorption and can reduce photosynthesis. The plateau shows no further rate increase over the tested range.",
    "explain": "Five criteria: light; carbon dioxide; temperature including high-temperature decline; chlorophyll/absorption; plateau description. This shared task does not require selecting an interacting limiting factor from multiple curves.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Photosynthesis, respiration and metabolism practice"
  },
  {
    "id": "aqa-bioenergetics-completion-q04",
    "subject": "Biology",
    "topic": "Bioenergetics",
    "section": "Measuring a biological rate",
    "specRefs": [
      "4.4.1.2",
      "RP05"
    ],
    "q": "Use the shared RP05 data. Calculate mean volume and rate at each light intensity, plot a labelled graph, and describe the observed pattern and one limit to the conclusion.",
    "answer": "Mean volumes at 10,20,30,40 units are 5,9,13,13 cm³ in 5 min, so rates are 1.0,1.8,2.6,2.6 cm³/min. Plot light intensity (arbitrary units) horizontally and mean oxygen rate (cm³/min) vertically with uniform scales. The rate rises then levels between 30 and 40. Do not extrapolate an unlimited rise or assume the exact same values for every plant.",
    "explain": "Four criteria: means/rates; axes/units/scales and points; pattern; limitation. A volume is not a rate until divided by time. Repeats show spread; investigate anomalies rather than automatically deleting them.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Photosynthesis, respiration and metabolism practice",
    "visual": "bioenergetics-shared-data"
  },
  {
    "id": "aqa-bioenergetics-completion-q05",
    "subject": "Biology",
    "topic": "Bioenergetics",
    "section": "Measuring a biological rate",
    "specRefs": [
      "4.4.1.2",
      "RP05"
    ],
    "q": "At a constant oxygen collection rate of 2.4 cm³/min, how long is needed to collect 12 cm³? Give the time in minutes.",
    "answer": "5 min",
    "explain": "Time = volume/rate = 12/2.4 = 5 min, equivalent to 300 s. Do not give cm³/min as the unit of time or multiply volume by rate.",
    "marks": 2,
    "tier": "both",
    "type": "short",
    "level": 2,
    "style": "Photosynthesis, respiration and metabolism practice",
    "accepted": [
      "5",
      "5 min",
      "5 minutes",
      "5.0 min",
      "300 s",
      "300 seconds"
    ]
  },
  {
    "id": "aqa-bioenergetics-completion-q06",
    "subject": "Biology",
    "topic": "Bioenergetics",
    "section": "Measuring a biological rate",
    "specRefs": [
      "RP05"
    ],
    "q": "Plan the pondweed light-intensity investigation, including oxygen measurement, controls, repeats and safety. Explain why changing lamp distance could introduce a second variable.",
    "answer": "Use the same healthy aquatic shoot and controlled carbon dioxide supply. Change lamp distance/intensity, allow equilibration, and measure oxygen volume over equal timed intervals (or count bubbles as a proxy). Repeat each setting and calculate means/rates. Control temperature, shoot size, background light and water/solution conditions; monitor temperature because lamp heating can change it. Keep electrical equipment away from water, avoid hot lamps and use teacher-guided cutting/glass handling.",
    "explain": "Six criteria: aquatic setup/light change; equilibration/measurement; repeats/processing; other controls; temperature confound; suitable safety. Changing distance is not permission to let temperature or carbon dioxide vary.",
    "marks": 6,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Photosynthesis, respiration and metabolism practice"
  },
  {
    "id": "aqa-bioenergetics-completion-q07",
    "subject": "Biology",
    "topic": "Bioenergetics",
    "section": "Measuring a biological rate",
    "specRefs": [
      "RP05"
    ],
    "q": "Two groups count the same number of bubbles but one has larger bubbles. Evaluate the comparison, suggest a better measurement and explain two remaining limitations or reliability improvements.",
    "answer": "Equal bubble counts need not mean equal oxygen volume. Collect gas volume over equal times using suitable apparatus. Check leaks/collection resolution and allow equilibration; some oxygen dissolves or escapes and respiration affects net collection. Repeat, calculate means and examine spread, keeping temperature and carbon dioxide controlled.",
    "explain": "Four criteria: unequal-size limitation; volume/time improvement; two justified limitations/improvements. A larger bubble count is not automatically a greater gas volume; repeats do not remove a leak or consistent temperature drift.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Photosynthesis, respiration and metabolism practice"
  },
  {
    "id": "aqa-bioenergetics-completion-q08",
    "subject": "Biology",
    "topic": "Bioenergetics",
    "section": "Aerobic respiration",
    "specRefs": [
      "4.4.2.1"
    ],
    "q": "Compare aerobic respiration, anaerobic respiration in muscles and fermentation in yeast/plants using word equations, oxygen requirement, products and relative energy transfer. Explain two uses of the transferred energy and the economic roles of fermentation.",
    "answer": "Aerobic: glucose + oxygen → carbon dioxide + water. Muscle anaerobic: glucose → lactic acid. Yeast/plant anaerobic: glucose → ethanol + carbon dioxide. Anaerobic processes do not require oxygen and incomplete oxidation transfers much less energy per glucose than aerobic respiration. Respiration is exothermic and continuous in living cells; energy supports movement, building molecules or maintaining temperature. Yeast CO₂ raises bread dough and ethanol is used in alcoholic drinks.",
    "explain": "Seven criteria: three equations; oxygen/relative-energy comparison with incomplete oxidation; exothermic/continuous nature; two energy uses; fermentation products linked to uses. Respiration is not breathing and plant cells also respire at night.",
    "marks": 7,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Photosynthesis, respiration and metabolism practice"
  },
  {
    "id": "aqa-bioenergetics-completion-q09",
    "subject": "Biology",
    "topic": "Bioenergetics",
    "section": "Exercise and metabolism",
    "specRefs": [
      "4.4.2.2"
    ],
    "q": "Illustrative readings before/during exercise are heart rate 70/140 beats per minute, breathing rate 12/24 breaths per minute and breath volume 0.5/1.0 litres. Explain all three changes and predict what happens if oxygen delivery still cannot meet demand during prolonged vigorous activity.",
    "answer": "Each reading increases: faster circulation and more frequent/deeper breaths supply muscles with more oxygenated blood for increased respiration and energy demand. If oxygen is insufficient, anaerobic respiration incompletely oxidises glucose, lactic acid accumulates and an oxygen debt arises. Prolonged vigorous activity can cause fatigue and less efficient contraction.",
    "explain": "Four criteria: all three increases including breath volume; oxygen/energy link; anaerobic/lactic-acid/debt response; fatigue. These are illustrative data, not clinical thresholds. Detailed liver/recovery chemistry is reserved for Higher.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Photosynthesis, respiration and metabolism practice"
  },
  {
    "id": "aqa-bioenergetics-completion-q10",
    "subject": "Biology",
    "topic": "Bioenergetics",
    "section": "Exercise and metabolism",
    "specRefs": [
      "4.4.2.3"
    ],
    "q": "Classify these as metabolic synthesis or breakdown and state the materials/functions: glucose to starch/glycogen/cellulose; lipid formation; amino acids to protein; respiration; excess protein to urea. Explain why metabolism is more than digestion.",
    "answer": "Synthesis: glucose forms plant storage starch, animal storage glycogen or structural cellulose; glycerol plus three fatty acids forms lipid; amino acids form protein (plants make amino acids using glucose and nitrates). Respiration breaks down fuel and transfers energy for enzyme-controlled reactions. Excess protein breakdown leads to urea for excretion. Metabolism includes all these building and breakdown reactions in cells/body, not just digestion in the gut.",
    "explain": "Six criteria: three carbohydrate roles; lipid components/ratio; amino-acid/protein/nitrate link; respiration/energy; urea/excretion; sum-of-reactions distinction. Urea is not undigested food and plants do not store glucose as animal glycogen.",
    "marks": 6,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Photosynthesis, respiration and metabolism practice"
  },
  {
    "id": "aqa-bioenergetics-completion-q11",
    "subject": "Biology",
    "topic": "Bioenergetics",
    "section": "Interacting limiting factors",
    "specRefs": [
      "4.4.1.2"
    ],
    "q": "Use the Higher curves. At high light compare low CO₂/20°C with high CO₂/20°C, then high CO₂/20°C with high CO₂/30°C. Explain the limits indicated and why low-light curves coincide. Evaluate greenhouse options giving £40 extra income for £20 cost versus £70 income for £60 cost.",
    "answer": "At high light the CO₂ change raises rate from 2 to 4, indicating CO₂ limitation in the first conditions. At high CO₂, warming from 20 to 30°C raises rate from 4 to 6 under these conditions, indicating a temperature effect. At low light all rates are 1 because light limits the response. Added profits are £20 and £10, so the first option gives greater profit despite lower extra income; rate/yield alone does not determine profit.",
    "explain": "Five criteria: controlled CO₂ comparison; controlled temperature comparison; low-light interpretation; correct profit calculations; qualified economic choice. These illustrative curves do not mean 30°C is always optimal or that extra heat always increases profit.",
    "marks": 5,
    "tier": "higher",
    "type": "writing",
    "level": 3,
    "style": "Photosynthesis, respiration and metabolism practice",
    "visual": "bioenergetics-higher-data"
  },
  {
    "id": "aqa-bioenergetics-completion-q12",
    "subject": "Biology",
    "topic": "Bioenergetics",
    "section": "Higher recovery after exercise",
    "specRefs": [
      "4.4.2.2"
    ],
    "q": "After vigorous exercise, breathing remains above its resting level during recovery. Explain oxygen debt using the specification account of lactic acid transport and conversion.",
    "answer": "Extra oxygen is needed after exercise to react with accumulated lactic acid and remove it from cells. Blood transports lactic acid from muscles to the liver, where it is converted back into glucose. Continued raised breathing and circulation support extra oxygen delivery during recovery.",
    "explain": "Three criteria: extra-oxygen debt definition; blood-to-liver transport and glucose conversion; recovery observation link. Do not say lactic acid is breathed out as a gas. Detailed biochemical pathways or EPOC terminology are not required.",
    "marks": 3,
    "tier": "higher",
    "type": "writing",
    "level": 3,
    "style": "Photosynthesis, respiration and metabolism practice"
  }
];
const bioenergeticsBeforeLesson=activeLesson,bioenergeticsBeforeQuestions=activeQuestions;
activeLesson=function(s,c,t){const l=bioenergeticsBeforeLesson(s,c,t);if(!l||!cellCompletionPath(s,c)||t!=='Bioenergetics')return l;const sections=l.sections.map(x=>BIOENERGETICS_EXTENSIONS[x.title]?{...x,body:x.body+'\n\n'+BIOENERGETICS_EXTENSIONS[x.title]}:x);sections.push({title:'Higher recovery after exercise',body:BIOENERGETICS_RECOVERY,tier:'higher'});return {...l,sections,learn:sections.map(x=>x.body).join('\n\n'),practicals:l.practicals.map(x=>x.id==='photosynthesis'?{...x,...BIOENERGETICS_PRACTICAL}:x)};};
activeQuestions=function(s,c=choice(s)){const qs=bioenergeticsBeforeQuestions(s,c);return cellCompletionPath(s,c)?[...qs,...BIOENERGETICS_QUESTIONS.filter(q=>q.tier!=='higher'||c.tier==='higher').map(q=>({...q,board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}))]:qs;};
const BIOENERGETICS_DATA={time:5,shared:[[10,4,6,5],[20,8,10,9],[30,12,14,13],[40,12,14,13]],higher:[[10,1,1,1],[20,2,3,4],[30,2,4,6],[40,2,4,6]]};
function bioenergeticsSharedData(){const d=BIOENERGETICS_DATA,r=d.shared.map(([x,...v])=>[x,v.reduce((a,b)=>a+b,0)/v.length/d.time]);return `<figure><figcaption>RP05 illustrative oxygen volumes (cm³), three repeats over ${d.time} min</figcaption><table><thead><tr><th>Light (arbitrary units)</th><th>1</th><th>2</th><th>3</th></tr></thead><tbody>${d.shared.map(a=>'<tr>'+a.map(v=>'<td>'+v+'</td>').join('')+'</tr>').join('')}</tbody></table><details><summary>Check your mean-rate graph</summary><svg viewBox="0 0 480 300" role="img" aria-label="Mean photosynthesis rate rises from 1 to 1.8 to 2.6 then remains 2.6 cubic centimetres per minute"><path d="M60 30V235H420" fill="none" stroke="#36566d"/>${[0,10,20,30,40].map(n=>`<text x="${60+n*8-3}" y="256">${n}</text>`).join('')}${[0,1,2,3].map(n=>`<text x="30" y="${239-n*60}">${n}</text>`).join('')}<polyline points="${r.map(([x,y])=>(60+x*8)+','+(235-y*60)).join(' ')}" fill="none" stroke="#397e55" stroke-width="3"/><text x="65" y="20">Mean oxygen rate (cm³/min)</text><text x="110" y="285">Light intensity (arbitrary units)</text></svg><p>Mean rates: ${r.map(a=>a[1].toFixed(1)).join(', ')} cm³/min. Lines join tested points; no unmeasured trend is established.</p></details></figure>`;}
function bioenergeticsHigherData(){return `<figure><figcaption>Higher: illustrative interacting-factor curves</figcaption><p>Each column uses the same light values; compare otherwise matched conditions. Rates in cm³/min.</p><table><thead><tr><th>Light units</th><th>Low CO₂, 20°C</th><th>High CO₂, 20°C</th><th>High CO₂, 30°C</th></tr></thead><tbody>${BIOENERGETICS_DATA.higher.map(a=>'<tr>'+a.map(v=>'<td>'+v+'</td>').join('')+'</tr>').join('')}</tbody></table><svg viewBox="0 0 490 350" role="img" aria-label="Three curves coincide at low light; at high light rates plateau at 2,4,6 for low carbon dioxide 20 degrees, high carbon dioxide 20 degrees, high carbon dioxide 30 degrees"><path d="M60 30V245H430" fill="none" stroke="#36566d"/>${[0,10,20,30,40].map(n=>`<text x="${60+n*8-3}" y="267">${n}</text>`).join('')}${[0,2,4,6].map(n=>`<text x="30" y="${249-n*30}">${n}</text>`).join('')}${[1,2,3].map((c,i)=>`<polyline points="${BIOENERGETICS_DATA.higher.map(a=>(60+a[0]*8)+','+(245-a[c]*30)).join(' ')}" fill="none" stroke="${['#4477aa','#aa3377','#228833'][i]}" stroke-width="3" stroke-dasharray="${['none','6 3','2 3'][i]}"/>`).join('')}<text x="65" y="20">Oxygen rate (cm³/min)</text><text x="140" y="294">Light (arbitrary units)</text><text x="65" y="321" font-size="12">Solid: low CO₂/20°C; dashed: high CO₂/20°C</text><text x="65" y="340" font-size="12">Dotted: high CO₂/30°C</text></svg></figure>`;}
const bioenergeticsBeforeVisual=cellVisual;
cellVisual=function(type){return type==='bioenergetics-shared-data'?bioenergeticsSharedData():type==='bioenergetics-higher-data'?bioenergeticsHigherData():bioenergeticsBeforeVisual(type);};
const bioenergeticsBeforeDiagrams=bioDiagramSection;
bioDiagramSection=function(topic){const previous=bioenergeticsBeforeDiagrams(topic),c=choice('Biology');if(topic!=='Bioenergetics'||!cellCompletionPath('Biology',c))return previous;return previous+`<details class="card"><summary>Photosynthesis investigation data</summary>${bioenergeticsSharedData()}${c.tier==='higher'?bioenergeticsHigherData():''}</details>`;};
const bioenergeticsBeforeSupport=biologySupportInventory;
biologySupportInventory=function(){return [...bioenergeticsBeforeSupport(),...['shared','higher'].map(t=>({id:'Biology|support|bioenergetics-'+t+'-data',subject:'Biology',kind:'support',tier:t==='shared'?'both':'higher',label:'Bioenergetics '+t+' data/graph',fingerprint:auditFingerprint(t==='shared'?bioenergeticsSharedData():bioenergeticsHigherData()),studentVisible:true}))];};
// Direct evidence for the reviewed Foundation extract, without relabelling its mixed Higher source.
const bioenergeticsSupportWithGraphs=biologySupportInventory;
biologySupportInventory=function(){const section=activeLesson('Biology',{board:'aqa',tier:'foundation',courseContext:'trilogy'},'Bioenergetics')?.sections.find(s=>s.title==='Limiting factors');return [...bioenergeticsSupportWithGraphs(),{id:'Biology|support|bioenergetics-foundation-limiting',subject:'Biology',kind:'support',tier:'both',label:'Reviewed shared limiting-factor lesson extract',fingerprint:auditFingerprint(section?.body||''),studentVisible:Boolean(section)}];};
