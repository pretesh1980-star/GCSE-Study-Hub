'use strict';
// 7.0.5Y: targeted shared coordination and separately gated Higher endocrine evidence.
const COORDINATION_EXTENSIONS={
  "Keeping conditions stable": "Homeostasis regulates internal conditions in response to internal and external changes, maintaining optimum conditions for enzyme action and all cell functions. Examples include blood glucose concentration, body temperature and water levels. Optimum means a suitable range, not that every value stays exactly constant. Automatic controls may use nervous or chemical responses. Receptors detect a stimulus/change; coordination centres such as the brain, spinal cord and pancreas receive and process information; effectors are muscles or glands that produce a corrective response. For a supplied temperature-control example, receptors detect a rise, a coordination centre processes it and sweat glands act to help restore suitable conditions. For glucose control the pancreas monitors the concentration and coordinates insulin release. Water level is another controlled condition: identify the detector, coordinator and response from a supplied model without assuming every system uses the same organs.",
  "Reflexes and the nervous system": "The central nervous system (CNS) is the brain and spinal cord. Neurones carry electrical impulses from receptors to the CNS and from it to effectors; muscles contract or glands secrete. A withdrawal reflex follows stimulus → receptor → sensory neurone → relay neurone in the CNS → motor neurone → effector → response. At synapses a chemical messenger diffuses across the gap and stimulates the next neurone. Long neurones connect distant structures; linked neurones and synapses form a coordinated route. Reflexes are rapid and automatic and do not involve the conscious part of the brain in producing the response, reducing the time before protection from harm. Information can still reach the brain: a reflex is not evidence that the brain never receives information. A damaged sensory pathway prevents a signal reaching the coordinator; a damaged motor pathway prevents the output reaching the muscle. Reaction time is the interval between a stimulus and the response, not the speed of the falling ruler.",
  "The endocrine system": "Glands secrete hormones directly into the bloodstream; blood carries them to target organs where they have effects. Compared with nervous impulses their effects are generally slower and longer-lasting. The pituitary at the base of the brain is a master gland: changes in body conditions cause it to release hormones that stimulate other glands to release hormones. This does not mean every gland is controlled identically. Locate the six required glands on the body diagram: pituitary in the brain; thyroid in the neck; adrenal glands above the kidneys; pancreas in the upper abdomen behind the stomach; ovaries in the pelvis on either side of the uterus; testes in the scrotum. The ovary and testis insets show alternative reproductive anatomy, not both in one person. Reuse the nervous-system route for comparisons and the insulin example for a hormone travelling in blood to target tissues.",
  "Blood glucose": "The pancreas monitors and controls blood glucose. When concentration is too high, insulin is released and causes glucose to move from the blood into cells. In liver and muscle cells excess glucose is converted to glycogen for storage. Glucose is the circulating sugar; glycogen is the storage carbohydrate. Use the existing glycogen explanation to link this with metabolism.\nIn Type 1 diabetes the pancreas does not produce sufficient insulin, so blood glucose can remain uncontrolled and high; insulin injections are the usual treatment in this specification. In Type 2, body cells respond inadequately to insulin. A carbohydrate-controlled diet and exercise are common approaches to management; individual treatment varies. Obesity increases risk of Type 2 diabetes but is not proof of its cause in an individual and does not mean everyone with obesity develops it. Evaluate evidence and recommendations without blame: association alone does not prove causation, and food access, disability, cost and support affect feasible choices. Curriculum comparisons are not individual diagnosis or treatment instructions.\nFor a glucose graph, read axes and units, compare initial values, peaks and return towards the starting range. An insulin response can lower concentration through uptake and storage. Persistently high readings in an illustrative comparison may be consistent with inadequate insulin action but cannot alone diagnose diabetes type or establish a treatment dose.",
  "Reaction-time investigations": "RP06 investigates the effect of a factor on human reaction time. A controlled ruler-drop comparison can use no distraction versus a simple spoken counting task. Record catching distance from the zero mark aligned with the fingers before release; a shorter distance generally means a shorter reaction time. Use the supplied distance-to-time conversion for each trial before averaging times. Distance is not time: the conversion is not linear. For example, 15 cm corresponds to about 0.175 s in the supplied lookup. Keep distance in cm and time in seconds, and use sensible precision. Compare means and spread and plot condition against mean reaction time; categories suit a bar chart. Investigate an unusual result using observation notes and repeat checks, retaining it unless there is a documented reason to exclude it. Order/practice, anticipation, small samples and apparatus alignment limit conclusions. Repeats reduce random variation but do not correct a consistent starting-position error.",
  "Hormonal feedback": "Higher: the pancreas also releases glucagon when glucose concentration is too low. It causes stored glycogen in the liver to be converted into glucose and released into blood. Insulin lowers an elevated concentration through uptake/storage; glucagon raises a low concentration through release from stores. As glucose returns towards the normal range, the corrective hormone response reduces. The two responses oppose the original disturbance in a negative feedback cycle; negative does not mean harmful or that the concentration must become zero. Apply the same change → corrective response → reduced stimulus reasoning to the separately explained thyroxine system; do not confuse glycogen with glucagon."
};
const COORDINATION_FEEDBACK="Higher only: adrenaline is secreted by adrenal glands during fear or stress. It increases heart rate and boosts delivery of oxygen and glucose to the brain and muscles, preparing the body for fight or flight. Adrenaline is a hormone carried in blood, not an electrical impulse. This stress response is not the thyroxine negative-feedback loop.\nThyroxine is released by the thyroid gland. It stimulates basal metabolic rate (the rate of the body's background metabolic activity) and is important for growth and development. Thyroxine levels are controlled by negative feedback. In a simple model, when thyroxine is low the pituitary supplies more thyroid-stimulating signal (TSH), the thyroid releases more thyroxine, and the level rises towards normal. As thyroxine rises, it inhibits further stimulating-signal release, reducing thyroid stimulation and preventing an unchecked rise. When the level falls, that inhibition is reduced. The feedback opposes the initial change; it maintains a range rather than permanently switching metabolism off. Use the diagram to predict that a thyroid unable to respond can leave thyroxine low despite increased pituitary stimulation. TSH is a label supplied to explain the model, not an extra separate memorisation requirement; detailed hypothalamic pathways are not required here.";
const COORDINATION_PRACTICAL={
  "aim": "AQA Trilogy required practical activity 6: plan and carry out an investigation into the effect of a factor on human reaction time.",
  "method": "Use a light ruler and a seated, consenting volunteer with forearm supported. Align the zero mark with the top of the thumb/finger gap. The partner holds the ruler vertically and releases after an unpredictable delay without a countdown; the participant catches it. Read the catching distance at the same finger reference, at eye level to reduce parallax. Compare no distraction with a simple spoken counting task as the chosen factor. Keep hand, hand gap, posture, instructions, ruler, release arrangement and room conditions consistent. Give equal familiarisation, alternate/counterbalance condition order, and allow rest. Take at least three trials per condition per participant and use several consenting participants, comparing paired results. Record distance and observation notes. Convert each distance with the same supplied conversion table, then calculate mean reaction time and spread. Do not mix distance units or convert a mean distance as if conversion were linear. Use a light ruler away from faces, keep the area clear and allow anyone to stop. Avoid harmful startle, sleep deprivation, medicines or stimulants as treatments; obtain consent, anonymise results and avoid ranking people publicly.",
  "controls": "Independent variable: distraction condition. Dependent measure: catching distance converted to reaction time. Control hand/position, ruler, release, practice, instructions and environment; counterbalance order and compare each person with themselves.",
  "example": "Illustrative paired trials: no distraction catches at 10,15,20 cm; distraction at 20,25,30 cm. Supplied times are 0.143,0.175,0.202,0.226,0.247 s for 10,15,20,25,30 cm respectively. Mean times are about 0.173 s and 0.225 s; the difference is about 0.052 s for this example only.",
  "pitfall": "A guessed release causes anticipation; changing hand height creates systematic error. Repeats alone cannot remove either. Investigate anomalies rather than deleting inconvenient results. Small samples and overlapping variation limit generalisation; the task measures this particular response, not overall intelligence or fitness."
};
const COORDINATION_QUESTIONS=[
  {
    "id": "aqa-coordination-completion-q01",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Keeping conditions stable",
    "specRefs": [
      "4.5.1"
    ],
    "q": "Explain why glucose, temperature and water levels need regulation. In a supplied model, sensor cells detect a rise in temperature, a brain centre processes it and sweat glands act. Identify receptor, coordinator and effector and explain why homeostasis does not mean an unchanging value.",
    "answer": "Suitable internal ranges maintain optimum enzyme action and cell functions. Glucose, temperature and water levels are controlled conditions. The sensor cells are receptors, the brain centre coordinates, and sweat glands are effectors producing a corrective response. Conditions vary within suitable limits as internal/external changes occur.",
    "explain": "Four criteria: function/enzymes; examples; correct three roles and correction; range rather than exact constancy. A receptor detects rather than performing the corrective response.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Coordination and response practice"
  },
  {
    "id": "aqa-coordination-completion-q02",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Reflexes and the nervous system",
    "specRefs": [
      "4.5.2"
    ],
    "q": "Sequence a withdrawal reflex from a painful stimulus to muscle contraction. Include the CNS and synapse, explain protection without a conscious decision, and predict the effect of a damaged motor neurone.",
    "answer": "Receptor → sensory neurone → relay neurone in the CNS → motor neurone → muscle effector → contraction. The CNS is brain and spinal cord. Electrical impulses travel along neurones; a chemical messenger crosses a synapse. The rapid automatic response does not wait for the conscious brain, reducing injury. A damaged motor neurone can prevent the output reaching the muscle even if the stimulus is detected.",
    "explain": "Five criteria: ordered route; CNS identity; electrical/chemical distinction; protective automatic response; damage prediction. A muscle is the effector, not a sensory neurone.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Coordination and response practice"
  },
  {
    "id": "aqa-coordination-completion-q03",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "The endocrine system",
    "specRefs": [
      "4.5.3.1"
    ],
    "q": "Name glands A–F on the supplied location diagram. Explain how the pituitary can cause another gland to act and compare the route and duration with nervous communication.",
    "answer": "A pituitary, B thyroid, C adrenal glands, D pancreas, E ovaries, F testes. Pituitary hormones enter blood and stimulate other glands to release hormones; blood carries hormones to target organs. Nervous signals travel along neurones and are usually rapid and brief; hormonal effects are generally slower and longer-lasting.",
    "explain": "Four criteria: six locations; pituitary-to-gland sequence; blood/target route; nervous comparison. E and F are alternative reproductive-anatomy insets; adrenal glands are above kidneys, not inside the brain.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Coordination and response practice",
    "visual": "coordination-glands"
  },
  {
    "id": "aqa-coordination-completion-q04",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Blood glucose",
    "specRefs": [
      "4.5.3.2"
    ],
    "q": "Use the illustrative glucose graph: compare the two curves after the meal and explain how insulin can account for return towards the starting range. State why the graph alone cannot diagnose diabetes type.",
    "answer": "Curve A peaks at 8 mmol/L at 30 min then falls to 5 at 120 min; B peaks at 12 at 60 min and remains at 10 at 120 min. Pancreatic insulin promotes glucose uptake into cells and storage as glycogen in liver/muscle cells, lowering concentration. B is consistent with inadequate insulin action, but the graph alone cannot distinguish insufficient insulin production from reduced cell response or establish a diagnosis.",
    "explain": "Four criteria: quantified peak/return comparison; pancreas/insulin; uptake and liver/muscle glycogen; diagnostic limitation. Insulin does not turn into glucose and these illustrative curves are not clinical cut-offs.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Coordination and response practice",
    "visual": "coordination-glucose"
  },
  {
    "id": "aqa-coordination-completion-q05",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Blood glucose",
    "specRefs": [
      "4.5.3.2"
    ],
    "q": "Compare Type 1 and Type 2 diabetes and their specification treatments. A survey links obesity with more Type 2 cases: evaluate a claim that every person with obesity will develop diabetes and suggest a fair way to support risk reduction.",
    "answer": "Type 1 involves insufficient insulin production and is normally treated with insulin injections. Type 2 involves cells responding inadequately to insulin; carbohydrate-controlled diet and exercise are common management approaches. Obesity is a risk factor, not certainty or proof of a single cause in an individual. Consider confounding and support access to suitable food/activity without blame, accounting for disability, cost and personal circumstances; individual care varies.",
    "explain": "Four criteria: causes distinguished; treatments linked; risk versus certainty/causation; practical socially/ethically aware recommendation. Do not infer a personal treatment dose or blame people for a condition.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Coordination and response practice"
  },
  {
    "id": "aqa-coordination-completion-q06",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Reaction-time investigations",
    "specRefs": [
      "RP06"
    ],
    "q": "Plan a fair, safe comparison of reaction time with and without a simple distraction using a ruler. Identify variables, reduce practice/anticipation bias, and explain why repeated trials alone are insufficient.",
    "answer": "Change distraction condition; measure catching distance and convert to time. Align ruler zero/fingers, release without warning, use the same hand/posture/ruler/instructions and equal familiarisation. Counterbalance condition order and rest; repeat within each consenting participant and include several participants. Compare paired means/spread. Use a light ruler away from faces, allow withdrawal and anonymise data. Repeats cannot fix consistent alignment errors or an unfair test order.",
    "explain": "Five criteria: variables/measurement; controlled setup; bias/order/repeats; safety/consent/privacy; systematic-error limitation. No stimulant or medicine experiments.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Coordination and response practice"
  },
  {
    "id": "aqa-coordination-completion-q07",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Reaction-time investigations",
    "specRefs": [
      "RP06",
      "4.5.2"
    ],
    "q": "Three reaction times already converted from catching distances are 0.16 s, 0.18 s and 0.20 s. Calculate the mean in seconds.",
    "answer": "0.18 s",
    "explain": "Mean = (0.16 + 0.18 + 0.20)/3 = 0.18 s, equivalent to 180 ms. A distance unit is not a time unit.",
    "marks": 2,
    "tier": "both",
    "type": "short",
    "level": 2,
    "style": "Coordination and response practice",
    "accepted": [
      "0.18",
      "0.18 s",
      "0.18 seconds",
      "180 ms",
      "180 milliseconds"
    ]
  },
  {
    "id": "aqa-coordination-completion-q08",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Reaction-time investigations",
    "specRefs": [
      "RP06",
      "4.5.2"
    ],
    "q": "Use the RP06 lookup/data. Convert each trial, calculate both mean times, draw a labelled comparison chart and evaluate the distraction conclusion. A note says the participant guessed one release: how should this be handled?",
    "answer": "Times without distraction are 0.143,0.175,0.202 s (mean about 0.173 s); with distraction 0.202,0.226,0.247 s (mean about 0.225 s). Mean difference is about 0.052 s. Plot condition horizontally and mean reaction time in seconds vertically, starting a bar-chart axis at zero. This example suggests slower responses with distraction but has few trials, overlap and only one participant. Investigate/repeat the guessed-release trial, document any justified exclusion and compare the conclusion; do not delete merely because it is inconvenient.",
    "explain": "Five criteria: per-trial conversion and means; difference/units; labelled appropriate chart; evidence limits; justified anomaly handling. Convert each distance first because the relationship is not linear.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Coordination and response practice",
    "visual": "coordination-reaction"
  },
  {
    "id": "aqa-coordination-completion-q09",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Hormonal feedback",
    "specRefs": [
      "4.5.3.2"
    ],
    "q": "Higher: explain how the body responds when blood glucose falls below its normal range, compare this with a rise, and explain why the corrective hormone response decreases as the range is restored.",
    "answer": "Low glucose stimulates pancreatic glucagon; liver glycogen is converted to glucose and released into blood. High glucose stimulates insulin, promoting uptake/storage as glycogen. Each response opposes the original disturbance. Returning towards normal reduces the stimulus and corrective secretion, limiting overshoot.",
    "explain": "Four criteria: pancreas/glucagon; glycogen conversion/release; insulin comparison; negative feedback/reduced stimulus. Glucagon is a hormone, glycogen a store.",
    "marks": 4,
    "tier": "higher",
    "type": "writing",
    "level": 3,
    "style": "Coordination and response practice"
  },
  {
    "id": "aqa-coordination-completion-q10",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Feedback systems",
    "specRefs": [
      "4.5.3.6"
    ],
    "q": "Higher: during a frightening event a person has a faster heartbeat. Explain the gland, hormone and coordinated benefits for the brain and muscles, and distinguish this response from a nerve impulse.",
    "answer": "Adrenal glands release adrenaline into blood during fear/stress. Heart rate rises and delivery of oxygen and glucose to brain and muscles increases, preparing fight or flight. This is hormonal transport in blood, not an electrical impulse travelling along a neurone.",
    "explain": "Three criteria: gland/hormone/stimulus; oxygen/glucose delivery and preparation; route distinction. Do not substitute thyroid/thyroxine or describe adrenaline as the thyroxine feedback signal.",
    "marks": 3,
    "tier": "higher",
    "type": "writing",
    "level": 3,
    "style": "Coordination and response practice"
  },
  {
    "id": "aqa-coordination-completion-q11",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Feedback systems",
    "specRefs": [
      "4.5.3.6"
    ],
    "q": "Higher: use the feedback diagram to explain the role of thyroxine and predict what happens to pituitary stimulation when thyroxine first falls and then rises towards normal.",
    "answer": "Thyroid thyroxine stimulates basal metabolic rate and supports growth/development. Low thyroxine reduces inhibition, so pituitary stimulating signal rises and promotes thyroid release. Rising thyroxine inhibits further stimulation, reducing release towards a suitable level. This opposes the disturbance rather than amplifying it or stopping all metabolism.",
    "explain": "Four criteria: source/roles; low-level response; rising-level inhibition; negative-feedback interpretation. TSH is the supplied label for the stimulating signal; detailed hypothalamic pathways are not demanded.",
    "marks": 4,
    "tier": "higher",
    "type": "writing",
    "level": 3,
    "style": "Coordination and response practice",
    "visual": "coordination-feedback"
  },
  {
    "id": "aqa-coordination-completion-q12",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Feedback systems",
    "specRefs": [
      "4.5.3.6"
    ],
    "q": "Higher: in an unfamiliar model a thyroid stops responding to the pituitary signal. Predict thyroxine and pituitary-signal changes and explain why giving a large permanent stimulating signal would not automatically restore normal control.",
    "answer": "Thyroxine can remain low despite increased pituitary stimulation because the thyroid cannot respond. Reduced thyroxine inhibition explains the higher stimulating signal. A larger fixed signal does not repair the unresponsive gland and does not adjust to the controlled level; normal feedback requires a working response and changing stimulation.",
    "explain": "Three criteria: low thyroxine/high signal prediction; feedback reason; failure of the proposed fixed-signal solution. This is a model interpretation, not a treatment recommendation.",
    "marks": 3,
    "tier": "higher",
    "type": "writing",
    "level": 3,
    "style": "Coordination and response practice",
    "visual": "coordination-feedback"
  }
];
const coordinationBeforeLesson=activeLesson,coordinationBeforeQuestions=activeQuestions;
activeLesson=function(s,c,t){const l=coordinationBeforeLesson(s,c,t);if(!l||!cellCompletionPath(s,c)||t!=='Homeostasis & Response')return l;const sections=l.sections.map(x=>COORDINATION_EXTENSIONS[x.title]?{...x,body:x.body+'\n\n'+COORDINATION_EXTENSIONS[x.title]}:x);sections.push({title:'Feedback systems',body:COORDINATION_FEEDBACK,tier:'higher'});return {...l,sections,learn:sections.map(x=>x.body).join('\n\n'),practicals:l.practicals.map(x=>x.id==='reaction'?{...x,...COORDINATION_PRACTICAL}:x)};};
activeQuestions=function(s,c=choice(s)){const qs=coordinationBeforeQuestions(s,c);return cellCompletionPath(s,c)?[...qs,...COORDINATION_QUESTIONS.filter(q=>q.tier!=='higher'||c.tier==='higher').map(q=>({...q,board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}))]:qs;};
const COORDINATION_DATA={glucose:[[0,5,5],[30,8,10],[60,6.5,12],[90,5.5,11],[120,5,10]],lookup:[[10,.143],[15,.175],[20,.202],[25,.226],[30,.247]],reaction:[[10,15,20],[20,25,30]]};
function coordinationGlands(){return `<figure><figcaption>Identify A–F: endocrine-gland positions (schematic, not to scale)</figcaption><svg viewBox="0 0 520 420" role="img" aria-label="Gland-location exercise: A in brain, B in neck, C above kidneys, D behind stomach in upper abdomen; E pelvic ovary and F scrotal testis in separate insets"><ellipse cx="180" cy="50" rx="28" ry="34" fill="none" stroke="currentColor"/><path d="M165 82V105L120 120L100 250L130 255L140 155V290L145 400H170L180 300L190 400H215L220 290V155L230 255L260 250L240 120L195 105V82" fill="none" stroke="currentColor"/><g fill="#397e55"><circle cx="180" cy="65" r="5"/><ellipse cx="180" cy="100" rx="10" ry="5"/><circle cx="156" cy="204" r="5"/><circle cx="204" cy="204" r="5"/><ellipse cx="180" cy="192" rx="19" ry="5"/></g><g font-size="16" fill="currentColor"><text x="220" y="65">A</text><text x="220" y="100">B</text><text x="260" y="210">C</text><text x="245" y="188">D</text><text x="320" y="260">Pelvic inset: E</text><text x="320" y="355">Scrotal inset: F</text></g><path d="M185 65H215 M190 100H215 M209 204H255 M200 192L240 184" stroke="currentColor"/><g fill="none" stroke="currentColor"><ellipse cx="365" cy="285" rx="14" ry="18"/><path d="M353 275L338 268 M377 275L392 268"/><ellipse cx="334" cy="270" rx="6" ry="4"/><ellipse cx="396" cy="270" rx="6" ry="4"/><ellipse cx="365" cy="384" rx="22" ry="24"/><ellipse cx="356" cy="384" rx="7" ry="13"/><ellipse cx="374" cy="384" rx="7" ry="13"/></g></svg><details><summary>Check gland locations</summary><p>A pituitary at the base of the brain; B thyroid in neck; C adrenal glands above kidneys; D pancreas behind stomach in upper abdomen; E ovaries beside uterus; F testes in scrotum. E and F show alternative anatomy, not both in one body.</p></details></figure>`;}
function coordinationGlucose(){return `<figure><figcaption>Illustrative blood glucose after a meal at 0 min; not diagnostic thresholds</figcaption><table><tr><th>Time/min</th><th>A / mmol/L</th><th>B / mmol/L</th></tr>${COORDINATION_DATA.glucose.map(r=>'<tr>'+r.map(v=>'<td>'+v+'</td>').join('')+'</tr>').join('')}</table><svg viewBox="0 0 490 310" role="img" aria-label="Glucose curve A peaks at 8 after 30 minutes then returns to 5; B peaks at 12 after 60 minutes and remains at 10 after 120 minutes"><path d="M60 30V245H440" stroke="currentColor" fill="none"/>${[0,30,60,90,120].map(n=>`<text x="${55+3*n}" y="264">${n}</text>`).join('')}${[0,4,8,12].map(n=>`<text x="32" y="${250-16*n}">${n}</text>`).join('')}${[1,2].map(c=>`<polyline points="${COORDINATION_DATA.glucose.map(r=>(60+r[0]*3)+','+(245-r[c]*16)).join(' ')}" fill="none" stroke="${c===1?'#397e55':'#aa3377'}" stroke-width="3" stroke-dasharray="${c===1?'none':'6 3'}"/>`).join('')}<text x="65" y="20">Glucose (mmol/L)</text><text x="100" y="289">Time (min); A solid, B dashed</text></svg></figure>`;}
function coordinationReaction(){const d=COORDINATION_DATA,means=d.reaction.map(r=>r.reduce((a,x)=>a+d.lookup.find(v=>v[0]===x)[1],0)/r.length);return `<figure><figcaption>RP06 illustrative conversion and paired trials</figcaption><p>Distance/cm → time/s: ${d.lookup.map(r=>r.join(' → ')).join('; ')}. Conversion values are supplied; deriving the fall equation is not required.</p><p>No distraction distances: ${d.reaction[0].join(', ')} cm. Distraction: ${d.reaction[1].join(', ')} cm.</p><details><summary>Check mean-time chart</summary><svg viewBox="0 0 480 320" role="img" aria-label="Mean reaction time approximately 0.173 seconds without distraction, 0.225 with distraction"><path d="M70 30V240H430" fill="none" stroke="currentColor"/>${[0,.1,.2,.3].map(n=>`<text x="30" y="${245-n*600}">${n.toFixed(1)}</text>`).join('')}${means.map((v,i)=>`<rect x="${120+160*i}" y="${240-v*600}" width="65" height="${v*600}" fill="#397e55"/>`).join('')}<text x="80" y="20">Mean reaction time (s)</text><text x="95" y="265">No distraction</text><text x="275" y="265">Distraction</text><text x="160" y="297">Condition</text></svg><p>Means ${means.map(x=>x.toFixed(3)).join(' and ')} s. Difference ${(means[1]-means[0]).toFixed(3)} s. Convert each trial first; these few trials do not establish a population effect.</p></details></figure>`;}
function coordinationFeedback(){return '<figure><figcaption>Higher: simplified thyroxine negative-feedback model</figcaption><p>Low thyroxine → less inhibition of pituitary → more stimulating signal (TSH) → thyroid releases more thyroxine → level rises.</p><p>Rising thyroxine ─| further pituitary stimulation → less thyroid stimulation → rise is limited. ─| means inhibits; the response opposes the change.</p><p>Adrenaline is a separate adrenal stress response; do not insert it into this thyroid loop.</p></figure>';}
const coordinationBeforeVisual=cellVisual;const COORDINATION_RESOURCES={glands:coordinationGlands,glucose:coordinationGlucose,reaction:coordinationReaction,feedback:coordinationFeedback};
cellVisual=function(t){return t.startsWith('coordination-')&&COORDINATION_RESOURCES[t.slice(13)]?COORDINATION_RESOURCES[t.slice(13)]():coordinationBeforeVisual(t);};
const coordinationBeforeDiagrams=bioDiagramSection;
bioDiagramSection=function(t){const previous=coordinationBeforeDiagrams(t),c=choice('Biology');return t==='Homeostasis & Response'&&cellCompletionPath('Biology',c)?previous+`<details class="card"><summary>Coordination diagrams and investigation data</summary>${coordinationGlands()}${coordinationGlucose()}${coordinationReaction()}${c.tier==='higher'?coordinationFeedback():''}</details>`:previous;};
const coordinationBeforeSupport=biologySupportInventory;
biologySupportInventory=function(){const section=activeLesson('Biology',{board:'aqa',tier:'foundation',courseContext:'trilogy'},'Homeostasis & Response')?.sections.find(x=>x.title==='The endocrine system');return [...coordinationBeforeSupport(),...Object.entries(COORDINATION_RESOURCES).map(([key,fn])=>({id:'Biology|support|coordination-'+key,subject:'Biology',kind:'support',tier:key==='feedback'?'higher':'both',label:'Coordination '+key+' resource',fingerprint:auditFingerprint(fn()),studentVisible:key!=='feedback'})),{id:'Biology|support|coordination-shared-endocrine',subject:'Biology',kind:'support',tier:'both',label:'Reviewed Foundation/shared endocrine lesson',fingerprint:auditFingerprint(section?.body||''),studentVisible:Boolean(section)}];};

// Minimal inherited distractor repair; no reproductive curriculum expansion.
BIOLOGY_FOUNDATION_VARIANTS["aqa-bio-step-homeostasis-response-3-1"]={
  "tier": "both",
  "source": {
    "q": "Which hormone helps maintain the uterine lining after ovulation?",
    "answer": "Progesterone",
    "explain": "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.",
    "options": [
      "Progesterone",
      "Amylase",
      "Adrenaline",
      "Bile"
    ]
  },
  "foundation": {
    "options": [
      "Progesterone",
      "Amylase",
      "Insulin",
      "Bile"
    ]
  },
  "reason": "7.0.5Y required Foundation endocrine safety check: replace inherited Higher-only hormone-name distractor with existing shared insulin; Higher original preserved."
};
