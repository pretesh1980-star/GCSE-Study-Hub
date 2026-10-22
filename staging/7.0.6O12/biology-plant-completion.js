'use strict';
// Build 7.0.5U: shared AQA Trilogy 4.2.3.1–4.2.3.2 only.
const PLANT_EXTENSIONS={
  "Leaf tissues and their jobs": "A leaf is an organ: different tissues cooperate in photosynthesis, gas exchange and transport. Epidermal tissue covers and protects it; the thin, transparent upper epidermis lets light reach palisade mesophyll. A waxy cuticle reduces evaporation from the surface. Closely packed palisade cells near the upper surface contain many chloroplasts, so absorb light for photosynthesis. Spongy mesophyll has spaces between cells that allow carbon dioxide to reach photosynthesising cells and oxygen to leave; its moist cell surfaces support diffusion. The thin leaf provides a short diffusion path and its broad surface intercepts light. Veins contain xylem bringing water/mineral ions and phloem carrying dissolved sugars to other parts. Guard cells surround stomatal pores in the epidermis: changing their shape opens or closes the pore, regulating gas exchange and water loss. An open stoma admits carbon dioxide but also lets water vapour escape; closure conserves water but can limit carbon dioxide entry. Gas movement depends on concentration gradients, not a permanently one-way valve. Use the existing leaf cross-section activity; its vein symbol represents vascular tissue, not an individual cell. Both xylem and phloem occur in a vein even though the original activity asks only for the xylem label.\nMeristem tissue is found at growing tips of roots and shoots. Its undifferentiated cells divide and can differentiate into specialised tissues, allowing growth. Reuse Cell Biology → Division and stem cells for differentiation, and Bacteria and specialised cells for xylem/phloem cell adaptations; these explanations are not separate new lessons. A mature palisade cell's main role is photosynthesis, whereas meristem cells provide new cells for growth.\nObserve a prepared transverse leaf section with the existing microscope method: start at low power, locate the surface layers, palisade band, irregular spongy region and vein, then use higher power as appropriate. Draw clear outlines in proportion with a title, straight label lines and the supplied scale/magnification; identify only visible structures. A schematic shows the tissue arrangement but does not replace observation of a real section. Distinguish a stomatal pore from the pair of guard cells around it; the existing stylised drawing is not detailed evidence for every individual cell.",
  "Transport in plants": "Roots, stems and leaves form an organ system. Root hairs give a large surface area in contact with soil water. Water enters by osmosis through a partially permeable membrane; mineral ions can enter against their concentration gradient by active transport using energy from respiration. Reuse Cell Biology → Active transport and exchange for the mechanisms and comparison. Xylem forms continuous hollow tubes with no living contents obstructing flow, and walls strengthened with lignin to support them and resist collapse. It carries water and mineral ions from roots through stems to leaves in the transpiration stream. Phloem consists of elongated cells with pores in their end walls, allowing sap containing dissolved sugars to pass from cell to cell. Translocation moves sugars from sources such as photosynthesising leaves to places of use or storage, including roots, growing shoots and fruits. Depending on source and destination, transport can be upward or downward in different phloem tubes. It is not restricted to roots-to-leaves, and not the same as transpiration. Detailed phloem transport mechanisms are not required.\nTranspiration is water loss from leaves: water evaporates from moist cell surfaces into air spaces, then water vapour diffuses out through stomata. Water lost is replaced through xylem from roots. With other factors controlled, higher temperature usually increases evaporation and diffusion; lower humidity gives a steeper water-vapour gradient; air movement removes humid air next to the leaf; brighter light usually opens stomata for gas exchange, increasing water loss. In darkness many plants close stomata. Severe water shortage can cause stomatal closure even in bright light, so trends are conditional, not unlimited rules. Guard cells regulate pore opening; closing stomata can reduce both transpiration and carbon dioxide entry for photosynthesis. If water loss exceeds uptake, cells lose turgor and leaves may wilt.\nA bubble potometer estimates transpiration by measuring water uptake, not water vapour loss directly. Use a healthy leafy shoot cut under water and assemble the water-filled apparatus under water to avoid unwanted air entering xylem. Seal joints so they are airtight and watertight. Introduce one measurement bubble into the calibrated capillary, allow the shoot to equilibrate, record the starting bubble position and time its movement. Use a reservoir to reset the bubble if provided. Change one factor at a time, use equal time intervals, repeat readings and calculate a mean. Keep shoot/leaf area, other environmental factors and capillary cross-section constant. For light investigations control lamp heating; measure humidity/temperature rather than assuming they are constant. Keep electrical equipment away from water and use teacher supervision for cutting shoots and handling glass. Check leaks before collecting data. Some absorbed water is retained for growth or used in photosynthesis, so uptake is an estimate of loss, especially if plant water storage is changing. An air leak or blocked xylem invalidates the estimate; repetitions alone do not correct those faults.\nDistance/time (mm/min) compares uptake in the same capillary; it is not a volume rate unless cross-sectional area is included. Volume = capillary area × bubble distance; for a circular bore area = πr². Volume/time in mm³/min estimates uptake. Example: area 0.5 mm² and movement 12 mm in 3 min gives 6 mm³ and 2 mm³/min. Divide volume rate by measured leaf area if comparing different sized shoots; keep whether one-sided or total leaf area was measured consistent. Record repeats and spread, investigate anomalies, and plot the numerical factor on the horizontal axis against mean rate on the vertical axis with units and a sensible uniform scale. Lines guide the eye between tested values, not beyond them.\nFor stomatal distribution, use teacher-provided safe epidermal impressions or prepared epidermal peels from upper and lower surfaces. Observe at the same magnification with a calibrated field area. Select several positions randomly or systematically across each surface, sample several leaves/plants, and avoid selecting only visibly crowded fields. Use a consistent boundary-count rule, for example count pores touching top/left edges but not bottom/right. Count stomatal pores, not each guard cell as a separate stoma. Calculate mean count = total counts / number of fields, then density = mean count / field area (stomata/mm²). Estimate total stomata as density × surface area only if the sample represents that surface; upper and lower surfaces may differ. A rectangular sampled area is length × width; a circular field is πr². To compare leaves fairly use density rather than counts from different sized fields. Not all species have identical stomatal distributions. Draw and label the pore and surrounding pair of guard cells from observation; do not infer a whole species' distribution from one field."
};
const PLANT_QUESTIONS=[
  {
    "id": "aqa-plant-completion-q01",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Leaf tissues and their jobs",
    "specRefs": [
      "4.2.3.1"
    ],
    "q": "Use the existing leaf cross-section schematic. Draw a labelled outline showing epidermis, palisade and spongy mesophyll, vein and a stoma with guard cells. Explain how the tissues cooperate in photosynthesis and gas exchange, including both transport tissues in the vein.",
    "answer": "A transparent upper epidermis allows light through; palisade cells with many chloroplasts absorb it. Spongy air spaces allow gas diffusion; stomata admit carbon dioxide, with guard cells regulating the pore and water loss. Xylem supplies water/mineral ions and phloem carries dissolved sugars from the leaf. Draw the layers in order, the vein in the leaf, and distinguish a pore from its surrounding guard cells; add clear labels and a supplied scale if present.",
    "explain": "Six criteria: correct labelled tissue arrangement; epidermis/light; palisade/chloroplasts; spongy air spaces; guard-cell/pore function; both vascular functions. The existing vein symbol is simplified and labels xylem only: it does not mean phloem is absent. A schematic is not a real microscope observation.",
    "marks": 6,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Plant tissues and transport practice",
    "visual": "plant-leaf-reuse"
  },
  {
    "id": "aqa-plant-completion-q02",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Leaf tissues and their jobs",
    "specRefs": [
      "4.2.3.1"
    ],
    "q": "A growing root tip is damaged, while a mature leaf remains green. Explain which tissue at the tip supplies new cells and why an intact palisade layer does not perform the same growth role. Where else is this growing tissue found?",
    "answer": "Meristem tissue at the root tip contains undifferentiated cells that divide and differentiate to form new tissues. It is also present at growing shoot tips. Mature palisade cells are specialised for photosynthesis with many chloroplasts; this is different from producing new cells at a meristem.",
    "explain": "Three criteria: root-tip meristem division/differentiation; shoot-tip location; contrast with photosynthetic palisade function. Do not imply meristems transport sugars or that every green cell is a meristem.",
    "marks": 3,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Plant tissues and transport practice"
  },
  {
    "id": "aqa-plant-completion-q03",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Transport in plants",
    "specRefs": [
      "4.2.3.2"
    ],
    "q": "Predict and explain the usual effect on transpiration of separately raising temperature, raising humidity, increasing air movement and increasing light intensity. State an important limit to the light prediction.",
    "answer": "Higher temperature usually increases evaporation and diffusion. Higher humidity reduces the water-vapour gradient and lowers loss. Air movement removes humid air near the leaf, maintaining the gradient and increasing loss. Brighter light usually opens stomata and increases loss; water shortage may close stomata even in bright light.",
    "explain": "Five criteria: each of four correctly linked factor effects; conditional stomatal response. Hold other variables constant. Increased humidity does not increase the gradient, and roots do not actively pump water vapour out of stomata.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Plant tissues and transport practice"
  },
  {
    "id": "aqa-plant-completion-q04",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Transport in plants",
    "specRefs": [
      "4.2.3.2"
    ],
    "q": "Plan a potometer comparison of water uptake at different light intensities. Include preparation, measurement, controls, repeats, safety and why the result estimates rather than directly measures transpiration.",
    "answer": "Cut the shoot and assemble under water, fill the apparatus and seal joints; check leaks. Introduce a measurement bubble, allow equilibration and time its movement in a calibrated capillary; reset and repeat at each light intensity. Keep leaf area, temperature, humidity, airflow and capillary area constant, controlling lamp heating. Calculate mean rates. Handle glass/cutting safely under supervision and keep electricity away from water. Uptake includes water retained or used by the plant, so it estimates water loss rather than measuring vapour directly.",
    "explain": "Six criteria: sound water-filled preparation/seals; timed bubble measurement/equilibration; one changed factor and controls; repeats/means; relevant safety; uptake-versus-loss limitation. Air leaks are faults, not biological transpiration; repeats cannot remove a systematic leak.",
    "marks": 6,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Plant tissues and transport practice"
  },
  {
    "id": "aqa-plant-completion-q05",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Transport in plants",
    "specRefs": [
      "4.2.3.2"
    ],
    "q": "Use the humidity data resource. Calculate the mean distance/time rate at each humidity, plot a labelled graph and describe/explain the trend. Explain why the same capillary and equal timing matter, and identify a limitation of extrapolating beyond the data.",
    "answer": "At 20, 40, 60 and 80% humidity, mean distances are 12, 10, 8 and 4 mm in 10 min, giving 1.2, 1.0, 0.8 and 0.4 mm/min. Plot humidity (%) horizontally and mean bubble rate (mm/min) vertically on uniform scales. Rate decreases as humidity increases because the vapour gradient decreases. Same capillary area and timing make the rates comparable; distance rate is not volume rate. Tested conditions do not establish an exact response outside the range.",
    "explain": "Five criteria: four means/rates; labelled axes/scales and correct plotted values; gradient explanation; fair comparison/units; cautious range limitation. Compare your graph with the worked plot in the resource. These are illustrative results, not a universal plant response curve.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Plant tissues and transport practice",
    "visual": "plant-uptake-data"
  },
  {
    "id": "aqa-plant-completion-q06",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Transport in plants",
    "specRefs": [
      "4.2.3.2"
    ],
    "q": "A potometer capillary has internal radius 0.5 mm. A bubble moves 8 mm in 4 min. Using π = 3.14, calculate water uptake rate in mm³/min.",
    "answer": "1.57 mm³/min",
    "explain": "Area = 3.14 × 0.5² = 0.785 mm²; volume = 0.785 × 8 = 6.28 mm³; rate = 6.28/4 = 1.57 mm³/min. Equivalent to 0.00157 mL/min. The 2 mm/min distance rate is not the volume rate. Use radius, not diameter, in πr².",
    "marks": 3,
    "tier": "both",
    "type": "short",
    "level": 2,
    "style": "Plant tissues and transport practice",
    "accepted": [
      "1.57",
      "1.57 mm³/min",
      "1.57 mm^3/min",
      "1.57 mm3/min",
      "1.57 mm³ min⁻¹",
      "1.57 mm3 min^-1",
      "0.00157 ml/min"
    ]
  },
  {
    "id": "aqa-plant-completion-q07",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Transport in plants",
    "specRefs": [
      "4.2.3.2"
    ],
    "q": "Three sampled fields on one leaf surface contain 12, 16 and 20 stomata. Each field has area 0.25 mm². Calculate the mean stomatal density in stomata/mm².",
    "answer": "64 stomata/mm²",
    "explain": "Mean count = (12+16+20)/3 = 16 per field. Density = 16/0.25 = 64 stomata/mm². Count pores, not two guard cells for each pore. A count per field is not a density until divided by field area.",
    "marks": 2,
    "tier": "both",
    "type": "short",
    "level": 2,
    "style": "Plant tissues and transport practice",
    "accepted": [
      "64",
      "64 stomata/mm²",
      "64 stomata/mm^2",
      "64 stomata/mm2",
      "64 per mm²",
      "64 per mm2",
      "64 mm^-2",
      "64 mm⁻²"
    ]
  },
  {
    "id": "aqa-plant-completion-q08",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Transport in plants",
    "specRefs": [
      "4.2.3.1",
      "4.2.3.2"
    ],
    "q": "Design an investigation comparing stomata on upper and lower leaf surfaces. Explain sampling and counting. For a representative density of 64 stomata/mm² on a 20 mm by 15 mm lower surface, estimate total lower-surface stomata and state why this cannot automatically give the whole-leaf total.",
    "answer": "Use prepared peels or safe teacher-provided impressions from both surfaces, the same magnification and calibrated field area. Sample multiple random/systematic positions and several leaves/plants; use a consistent edge rule and count pores once. Calculate means and densities and draw a pore with its two guard cells. Lower area = 20 × 15 = 300 mm²; estimated total = 64 × 300 = 19200. Upper density and area need separate evidence; distributions may vary within/between leaves or species.",
    "explain": "Five criteria: suitable observation and calibration; representative repeated sampling; consistent pore/edge counting; correct area and estimate; qualification and upper-surface distinction. One crowded field is biased; a pair of guard cells is one stoma. Rectangle dimensions are a supplied model of the surface.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Plant tissues and transport practice"
  },
  {
    "id": "aqa-plant-completion-q09",
    "subject": "Biology",
    "topic": "Organisation",
    "section": "Transport in plants",
    "specRefs": [
      "4.2.3.1",
      "4.2.3.2"
    ],
    "q": "On a hot dry day a plant closes stomata; water loss had exceeded uptake. Another shoot has damaged phloem but intact xylem. Explain the first plant’s response and predict which transport process is directly disrupted in the second. Link each to structure and substance.",
    "answer": "Closing stomata reduces water-vapour loss but may restrict carbon dioxide entry and photosynthesis; loss exceeding uptake reduces turgor and may cause wilting. Root hairs absorb water by osmosis and mineral ions by active transport; hollow lignified xylem carries these upward. Damaged phloem disrupts translocation of dissolved sugars through elongated cells with end-wall pores to places of use/storage, even if xylem water supply continues.",
    "explain": "Five criteria: water-saving/gas-entry trade-off; turgor/wilting; distinct uptake mechanisms; xylem structure/substances/direction; phloem structure/sugar translocation. Translocation is not evaporation, xylem does not carry sugars from leaves, and stomatal closure does not guarantee zero water loss.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Plant tissues and transport practice"
  }
];
const plantBeforeLesson=activeLesson,plantBeforeQuestions=activeQuestions;
activeLesson=function(s,c,t){const l=plantBeforeLesson(s,c,t);if(!l||!cellCompletionPath(s,c)||t!=='Organisation')return l;const sections=l.sections.map(x=>PLANT_EXTENSIONS[x.title]?{...x,body:x.body+'\n\n'+PLANT_EXTENSIONS[x.title]}:x);return {...l,sections,learn:sections.map(x=>x.body).join('\n\n')};};
activeQuestions=function(s,c=choice(s)){const qs=plantBeforeQuestions(s,c);return cellCompletionPath(s,c)?[...qs,...PLANT_QUESTIONS.map(q=>({...q,board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}))]:qs;};
function plantLeafReuse(){return `<figure><figcaption>Existing leaf cross-section schematic — use the Organisation label activity to check tissue positions</figcaption>${bioDiagramArt('leaf')}<p>Top to bottom: upper epidermis, palisade band, spongy tissue with air spaces, lower epidermis with a stoma. The vein symbol represents vascular tissues: both xylem and phloem, although the existing activity asks for the xylem label only. Draw guard cells around a pore using the description; this stylised sketch does not show every cellular detail.</p></figure>`;}
const PLANT_UPTAKE_DATA={minutes:10,rows:[[20,10,12,14],[40,8,10,12],[60,6,8,10],[80,2,4,6]]};
function plantUptakeData(){const d=PLANT_UPTAKE_DATA,rates=d.rows.map(([h,...v])=>[h,v.reduce((a,b)=>a+b,0)/v.length/d.minutes]);return `<figure><figcaption>Illustrative potometer humidity investigation — same shoot/capillary, other factors controlled</figcaption><table><caption>Bubble distance (mm) in ${d.minutes} minutes for three repeats</caption><thead><tr><th>Humidity (%)</th><th>Repeat 1</th><th>Repeat 2</th><th>Repeat 3</th></tr></thead><tbody>${d.rows.map(r=>'<tr>'+r.map(x=>'<td>'+x+'</td>').join('')+'</tr>').join('')}</tbody></table><details><summary>Check the mean-rate graph after plotting your own</summary><svg viewBox="0 0 500 325" role="img" aria-label="Humidity versus mean bubble distance rate; 20 percent 1.2, 40 percent 1.0, 60 percent 0.8, 80 percent 0.4 millimetres per minute"><path d="M65 35V250H445" stroke="#36566d" fill="none"/>${[0,20,40,60,80,100].map(n=>`<text x="${65+n*3.5-5}" y="274" font-size="12">${n}</text>`).join('')}${[0,.4,.8,1.2].map(n=>`<text x="29" y="${254-n*150}" font-size="12">${n.toFixed(1)}</text><path d="M65 ${250-n*150}H435" stroke="#d4dfe5"/>`).join('')}<polyline points="${rates.map(([h,r])=>(65+h*3.5)+','+(250-r*150)).join(' ')}" fill="none" stroke="#397e55" stroke-width="2"/>${rates.map(([h,r])=>`<circle cx="${65+h*3.5}" cy="${250-r*150}" r="4" fill="#397e55"/>`).join('')}<text x="65" y="20" font-size="14">Mean bubble rate (mm/min)</text><text x="190" y="304" font-size="14">Humidity (%)</text></svg><p>Means: ${rates.map(([h,r])=>h+'%: '+r.toFixed(1)+' mm/min').join('; ')}. Distance/time is a proxy for uptake only for the same capillary area. Uptake estimates transpiration; it is not a direct measurement of water vapour loss. Lines guide the eye between tested conditions; these invented teaching data are not a universal response.</p></details></figure>`;}
const plantBeforeVisual=cellVisual;
cellVisual=function(type){return type==='plant-leaf-reuse'?plantLeafReuse():type==='plant-uptake-data'?plantUptakeData():plantBeforeVisual(type);};
const plantBeforeDiagrams=bioDiagramSection;
bioDiagramSection=function(topic){const previous=plantBeforeDiagrams(topic);if(topic!=='Organisation'||!cellCompletionPath('Biology',choice('Biology')))return previous;return previous+`<details class="card"><summary>Plant transport investigation and data</summary><p>Reuse the leaf label activity above and Cell Biology explanations for specialised cells, osmosis and active transport. Apply them to the plant questions and investigate uptake below.</p>${plantUptakeData()}</details>`;};
const plantBeforeSupport=biologySupportInventory;
biologySupportInventory=function(){return [...plantBeforeSupport(),{id:'Biology|support|plant-uptake-data',subject:'Biology',kind:'support',tier:'both',label:'Plant potometer humidity table and mean-rate graph',fingerprint:auditFingerprint(plantUptakeData()),studentVisible:true}];};
