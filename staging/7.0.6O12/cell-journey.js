/* Presentation only: canonical content, question IDs and grading rules stay unchanged. */
const CELL_JOURNEY = [
 {
  "id": "cells",
  "name": "What are cells?",
  "why": "Cells are the smallest living building blocks. Understanding them helps explain how your body grows and how plants stay alive.",
  "prior": "Living things need materials and energy; no earlier Cell Biology lesson is needed.",
  "demonstrate": "Identify cells as living units and explain why an organism needs them.",
  "next": "Cell structures and cell types",
  "sources": [
   "Inside a cell"
  ],
  "spec": "4.1 overview; introductory link to 4.2.1"
 },
 {
  "id": "structures",
  "name": "Cell structures and cell types",
  "why": "A membrane controls exchange, and other structures do particular jobs. Comparing plant, animal and bacterial cells helps explain why antibiotics can target bacteria.",
  "prior": "Cells are living building blocks.",
  "demonstrate": "Name the structures, link each to its function and compare eukaryotic and prokaryotic cells.",
  "next": "Specialised cells",
  "sources": [
   "Inside a cell",
   "Bacteria and specialised cells"
  ],
  "spec": "4.1.1.1–4.1.1.2"
 },
 {
  "id": "specialised",
  "name": "Specialised cells",
  "why": "A sperm tail enables movement; root hairs increase absorption. Linking structure to function explains how different cells support an organism.",
  "prior": "Cell structures and plant, animal and bacterial differences.",
  "demonstrate": "Explain how adaptations suit a cell to its job, including an unfamiliar example.",
  "next": "Microscopy",
  "sources": [
   "Bacteria and specialised cells"
  ],
  "spec": "4.1.1.3; differentiation developed at milestone 6"
 },
 {
  "id": "microscopy",
  "name": "Microscopy",
  "why": "Microscopes turn tiny structures into visible evidence. Magnification and scale let you estimate the real size of a cell rather than guessing from a picture.",
  "prior": "Recognise cell structures and specialised cells.",
  "demonstrate": "Distinguish magnification from resolution; use units, scale and the magnification equation.",
  "next": "Required Practical 1: Microscopy",
  "sources": [
   "Microscopes and scale"
  ],
  "spec": "4.1.1.5; size skills in 4.1.1.1"
 },
 {
  "id": "rp01",
  "name": "Required Practical 1: Microscopy",
  "why": "Careful focusing, drawing and labelling produce useful evidence about cells. These skills prepare you to observe real tissue with your teacher.",
  "prior": "Microscope theory, cell structures, magnification and scale.",
  "demonstrate": "Describe a safe method, draw and label observations, calculate magnification and evaluate observation errors.",
  "next": "Chromosomes, cell division and stem cells",
  "sources": [
   "Your board · microscopy"
  ],
  "spec": "RP01 attached to 4.1.1.2; 4.1.1.5"
 },
 {
  "id": "division",
  "name": "Chromosomes, cell division and stem cells",
  "why": "New cells let you grow and repair damaged tissue. Chromosomes explain how genetic information is copied, while stem cells explain possible treatments and their risks.",
  "prior": "Nucleus and DNA as genetic material; structures and specialised cell functions.",
  "demonstrate": "Explain chromosomes, the cell cycle and mitosis; distinguish division from differentiation and evaluate stem-cell uses.",
  "next": "Diffusion",
  "sources": [
   "Division and stem cells"
  ],
  "spec": "4.1.1.4; 4.1.2.1–4.1.2.3"
 },
 {
  "id": "diffusion",
  "name": "Diffusion",
  "why": "Oxygen reaches cells and wastes leave by diffusion. Understanding random particle movement explains why substances spread without a pump.",
  "prior": "Cell membranes; the particle and concentration introduction below.",
  "demonstrate": "Describe net movement down a concentration gradient and explain factors affecting diffusion.",
  "next": "Surface area and exchange",
  "sources": [
   "Diffusion and osmosis"
  ],
  "spec": "4.1.3.1"
 },
 {
  "id": "exchange",
  "name": "Surface area and exchange",
  "why": "A large animal needs specialised exchange surfaces to supply all its cells. Surface-area-to-volume reasoning explains why lungs and gills have large, thin surfaces.",
  "prior": "Diffusion, concentration gradients and cell size.",
  "demonstrate": "Calculate and compare surface-area-to-volume ratios; explain how exchange adaptations support diffusion.",
  "next": "Osmosis",
  "sources": [
   "Surface-area-to-volume reasoning",
   "Active transport and exchange"
  ],
  "spec": "4.1.3.1"
 },
 {
  "id": "osmosis",
  "name": "Osmosis",
  "why": "Water movement can make plant cells firm or cause them to lose water. Osmosis explains wilting plants and why potato tissue changes mass in different solutions.",
  "prior": "Diffusion, concentration gradients, cell membranes and exchange.",
  "demonstrate": "Explain net water movement through a partially permeable membrane and predict effects on plant and animal cells.",
  "next": "Required Practical 2: Osmosis",
  "sources": [
   "Diffusion and osmosis"
  ],
  "spec": "4.1.3.2"
 },
 {
  "id": "rp02",
  "name": "Required Practical 2: Osmosis",
  "why": "Comparing potato mass in different solutions tests an osmosis prediction. Fair measurements and graphs help distinguish a real effect from experimental error.",
  "prior": "Osmosis theory and its predictions about water movement.",
  "demonstrate": "Plan controlled measurements and repeats; calculate percentage mass change, interpret graphs and evaluate errors.",
  "next": "Active transport",
  "sources": [
   "Diffusion and osmosis",
   "Osmosis in plant tissue practical"
  ],
  "spec": "RP02 attached to 4.1.3.2"
 },
 {
  "id": "active",
  "name": "Active transport",
  "why": "Roots absorb minerals even from dilute soil, and the gut absorbs glucose against a gradient. These jobs require cells to use energy.",
  "prior": "Diffusion, osmosis and the respiration-energy introduction below.",
  "demonstrate": "Compare active transport with diffusion and osmosis; explain mineral and glucose uptake and their energy requirement.",
  "next": "Cell Biology assessment",
  "sources": [
   "Active transport and exchange"
  ],
  "spec": "4.1.3.3"
 },
 {
  "id": "assessment",
  "name": "Cell Biology assessment",
  "why": "Explaining ideas without reading a model answer reveals what you understand and what needs another look. This brings cell structures, growth and transport together.",
  "prior": "All eleven earlier milestones; revisit any freely before answering.",
  "demonstrate": "Answer independently before revealing models, review mistakes and practise weaker areas. Opening a lesson never awards mastery.",
  "next": "Organisation: cells to tissues, organs and organ systems",
  "sources": [
   "Existing Cell Biology module test and mixed practice"
  ],
  "spec": "Review of 4.1.1–4.1.3"
 }
];

let cellJourneySelection=null,cellJourneySelectionContext=null;
const CELL_JOURNEY_KEY=KEY+'_cellJourneyN_stage1';
function cellJourneyApplies(s,c,t){return s==='Biology'&&c.board==='aqa'&&scienceCourse(c)==='trilogy'&&t==='Cell Biology';}
function cellJourneyContext(){const c=choice('Biology');return JSON.stringify([c.board,c.tier,scienceCourse(c)]);}
function cellJourneySaved(){try{const x=JSON.parse(localStorage.getItem(CELL_JOURNEY_KEY)||'{}');return x&&typeof x==='object'&&!Array.isArray(x)?x:{};}catch{return {};}}
function cellJourneyResume(){const id=cellJourneySaved()[cellJourneyContext()];return CELL_JOURNEY.some(x=>x.id===id)?id:'cells';}
function cellJourneySave(id){if(!CELL_JOURNEY.some(x=>x.id===id))return;try{const x=cellJourneySaved();x[cellJourneyContext()]=id;localStorage.setItem(CELL_JOURNEY_KEY,JSON.stringify(x));}catch{/* Reading stays available when storage is unavailable. */}}
function cellJourneyOrder(s,c,t,sections){return sections;}
function cellJourneySteps(){return CELL_JOURNEY;}
// Every range has exactly one owner. Slicing preserves the original text verbatim.
function cellJourneyParts(sections){const parts=[];
 function add(section,cuts,owners,headings){const text=section.body;let starts=[0],last=0;for(const marker of cuts){const n=text.indexOf(marker,last);if(n<0)throw new Error('Missing journey boundary: '+section.title+' / '+marker);starts.push(n);last=n+marker.length;}starts.push(text.length);owners.forEach((id,i)=>parts.push({id,source:section.title,start:starts[i],end:starts[i+1],heading:headings[i],text:text.slice(starts[i],starts[i+1])}));}
 for(const s of sections){switch(s.title){
 case 'Inside a cell':add(s,[],['structures'],['Structures and cell types']);break;
 case 'Bacteria and specialised cells':add(s,['Specialised cells have','Not every plant cell','Specialisation links'],['structures','specialised','structures','specialised'],['Bacterial cells','Adaptations','Plant-cell comparison','Structures suited to jobs']);break;
 case 'Microscopes and scale':add(s,[],['microscopy'],['Microscope theory and scale']);break;
 case 'Your board · microscopy':add(s,[],['rp01'],['Method, observations and scale']);break;
 case 'Division and stem cells':add(s,['For the existing DNA explanation','The three overall cell-cycle stages','Division increases cell number;','A stem cell is undifferentiated:'],['division','division','division','division','division'],['Summary: growth and repair','Chromosomes and DNA','The cell cycle and mitosis','Differentiation','Stem cells and their uses']);break;
 case 'Diffusion and osmosis':add(s,['Osmosis is the net','Diffusion is the spreading','Osmosis is specifically','Percentage change in mass'],['diffusion','osmosis','diffusion','osmosis','rp02'],['Diffusion overview','Water movement overview','Particle movement and diffusion','Osmosis and cells','Analysing mass changes and graphs']);break;
 case 'Surface-area-to-volume reasoning':add(s,[],['exchange'],['Surface-area-to-volume reasoning']);break;
 case 'Active transport and exchange':add(s,['Thin exchange surfaces','Active transport uses energy','Exchange surfaces must meet demand.'],['active','exchange','active','exchange'],['Transport against a gradient','Why exchange surfaces are needed','Active transport and comparisons','Exchange adaptations']);break;
 default:parts.push({id:'assessment',source:s.title,start:0,end:s.body.length,heading:s.title,text:s.body});
 }}return parts;
}
function chooseCellJourney(id){const c=choice(state.subject);if(!cellJourneyApplies(state.subject,c,state.topic)||!CELL_JOURNEY.some(x=>x.id===id))return;cellJourneySelection=id;cellJourneySelectionContext=cellJourneyContext();cellJourneySave(id);state.lessonFocus=null;lesson(app());moveTop();}
function cellJourneyPractical(id,lesson,parts){if(!['rp01','rp02'].includes(id))return '';const p=lesson.practicals?.find(x=>x.id===(id==='rp01'?'microscopy':'osmosis'));if(!p)return '';const methodAlready=parts.some(x=>x.text.includes(p.method));return `<section class="journey-practical"><h4>Preparing for the physical required practical</h4><p>${esc(p.aim)}</p><p>Review the theory in the previous milestone. Follow your teacher’s safety instructions in the laboratory. Reading this guidance or using the Osmosis Lab does not complete the physical required practical.</p>${methodAlready?'':`<h4>Experimental method</h4><p class="journey-body">${esc(p.method)}</p>`}<h4>Controls and fair comparisons</h4><p>${esc(p.controls)}</p><h4>Analysing results and evaluating errors</h4><p>${esc(p.example)}</p><p>${esc(p.pitfall)}</p></section>`;}
// Read existing per-tier lesson evidence; never infer completion from visits or percentages.
function cellJourneyEvidence(id){
 const r=record('Biology'),intro=id==='cells',structures=id==='structures';
 if(!intro&&!structures)return {completed:false,score:null,started:false};
 const data=intro?r.cellsLesson:r.cellStructuresLesson,a=data?.assessment;
 const questions=intro?(typeof CELLS_CHECKS!=='undefined'?[...CELLS_CHECKS,...CELLS_LEGACY_CHECKS]:[]):(typeof STRUCTURE_CHECKS!=='undefined'?STRUCTURE_CHECKS:[]);
 const concepts=intro?['definition','importance','number','levels']:['functions','plant','bacterial'];
 const graded=questions.filter(q=>r.seen?.[q.id]?.count>0);
 const complete=concepts.every(c=>graded.filter(q=>q.concept===c).length>=(intro?1:2));
 const key='Cell Biology|'+(intro?'What are cells?':'Cell structures and types');
 return {completed:complete,score:r.sectionMastery?.[key]||0,started:Boolean(data||graded.length),practiceOnly:!!a?.practiceOnly};
}
function cellJourneyActivity(id){if(id==='cells'){const d=record('Biology').cellsLesson;return d?.assessment?.done?'Next recommended activity: review your check, then explore cell structures.':d?.scene>0?'Next recommended activity: continue your saved discovery.':'Next recommended activity: take a journey beneath your skin.';}if(id==='structures'){const d=record('Biology').cellStructuresLesson;return d?.assessment?.done?'Next recommended activity: review your check, then discover specialised cells.':d?.scene===1?'Next recommended activity: solve your Cell Detectives mysteries.':d?.scene===2?'Next recommended activity: show what you understand independently.':'Next recommended activity: explore the numbered cell diagrams.';}return 'Next recommended activity: '+CELL_JOURNEY.find(x=>x.id===id).demonstrate;}
function cellJourneyStart(){if(cellJourneySelection==='cells')return cellsOpen();if(cellJourneySelection==='structures')return structuresOpen();if(cellJourneySelection==='assessment')return startTest('Biology','Cell Biology');document.getElementById('journey-learning-content')?.scrollIntoView?.({block:'start'});}
function cellJourneyPanel(s,c,t,sections){if(!cellJourneyApplies(s,c,t))return '';const steps=CELL_JOURNEY;
 const focused=state.lessonFocus?.subject===s&&state.lessonFocus?.topic===t&&state.lessonFocus?.section;
 const focusId=focused&&steps.find(x=>x.sources.includes(focused))?.id;
 const selected=focusId||(cellJourneySelectionContext===cellJourneyContext()?cellJourneySelection:null)||cellJourneyResume();const i=Math.max(0,steps.findIndex(x=>x.id===selected)),m=steps[i],previous=steps[i-1],next=steps[i+1];cellJourneySelection=m.id;cellJourneySelectionContext=cellJourneyContext();
 const l=activeLesson(s,c,t),parts=cellJourneyParts(sections).filter(x=>x.id===m.id);
 // Teach chromosomes before the cell-cycle explanation; retain the old summary as a recap.
 if(m.id==='division')parts.sort((a,b)=>['Chromosomes and DNA','The cell cycle and mitosis','Differentiation','Stem cells and their uses','Summary: growth and repair'].indexOf(a.heading)-['Chromosomes and DNA','The cell cycle and mitosis','Differentiation','Stem cells and their uses','Summary: growth and repair'].indexOf(b.heading));
 const primer=m.id==='cells'?(typeof cellsEntry==='function'?cellsEntry():'<h4>Start here</h4><p>A cell is the basic living unit of an organism. Some organisms consist of one cell; multicellular organisms contain many cells. Cells need materials and energy to carry out their jobs. Next, identify the structures that make those jobs possible.</p>'):m.id==='diffusion'?'<h4>Before diffusion: particles and concentration</h4><p>Substances are made of particles. Particles in gases and solutions move randomly in all directions. Concentration means the amount of a substance in a given volume. A concentration gradient is a difference in concentration between two places. Random movement can produce more particles moving from the higher-concentration side to the lower-concentration side overall: this is net movement.</p>':m.id==='active'?'<h4>Before active transport: energy from respiration</h4><p>Respiration releases energy from glucose in cells. Energy transferred by respiration powers cell processes; mitochondria are the site of aerobic respiration. Moving a substance against its concentration gradient requires this energy supply. Compare that with diffusion and osmosis, which do not require energy from respiration.</p>':'';
 const banks=m.sources.filter(title=>questionPool(s,t).some(q=>q.section===title));
 const teaching=parts.map(x=>`<section class="journey-teaching"><h4>${esc(x.heading)}</h4><p class="journey-body">${esc(x.text)}</p></section>`).join('');
 const assessment=m.id==='assessment'?`<h4>Final Cell Biology assessment</h4><p>Try the existing written module test independently before revealing its model answers. It samples existing questions; it is not a comprehensive certification of every specification point. Mixed practice and reviewing mistakes support further revision.</p><div class="actions"><button class="btn primary" onclick="startTest('Biology','Cell Biology')">Start Cell Biology assessment →</button><button class="btn" onclick="startTopicSet('Biology','Cell Biology',10)">Mixed Cell Biology practice →</button></div>`:'';
 const info=cellJourneyEvidence(m.id),done=steps.filter(x=>cellJourneyEvidence(x.id).completed).length;
 const entry=m.id==='structures'&&typeof structuresEntry==='function'?structuresEntry():m.id==='specialised'&&typeof specialisedEntry==='function'?specialisedEntry():primer;
 const sourceTeaching=['structures','specialised'].includes(m.id)?`<details ontoggle="if(this.open &amp;&amp; typeof specialisedMarkAssisted==='function')specialisedMarkAssisted()"><summary>Original revision explanations</summary>${teaching}</details>`:teaching;
 return `<section class="card cell-journey" aria-label="Cell Biology learning journey"><header class="journey-welcome"><div class="eyebrow">YOUR CELL BIOLOGY JOURNEY · ${esc(label(s,c))}</div><h2>Welcome to Cell Biology!</h2><p>Ready to discover the tiny world that makes life possible?</p></header><div class="journey-dashboard"><div><p class="eyebrow">CURRENT MILESTONE · ${i+1} OF 12</p><h3>${esc(m.name)}</h3><p>${esc(cellJourneyActivity(m.id))}</p><button class="btn primary journey-start" onclick="cellJourneyStart()">Continue learning →</button></div><aside aria-label="Journey progress"><b>${done} / 12 milestones with an independent check recorded</b><progress max="12" value="${done}" aria-label="Milestones with recorded independent checks">${done} / 12</progress><p>${info.completed?'✓ Independent check completed':info.started?'Your discoveries are saved':'Your next discovery starts here'}</p>${info.score!==null?`<p>Lesson mastery: <b>${info.score}% · ${esc(status(info.score))}</b></p>`:''}<p class="muted">Completed and mastered are different achievements.</p></aside></div>${cellJourneyCards(i)}<details class="journey-info"><summary>How your progress works</summary><p>Lesson mastery uses your saved independent answers. Practice and exploring help you learn without changing that score. Completing a check is an achievement; Secure still means at least 85% mastery.</p><p>The journey count includes saved independent checks in the three interactive lessons. Other milestones retain their existing revision and assessment records; visits are never counted as completion. Whole-topic Cell Biology mastery stays separate.</p></details><article id="cell-journey-current" tabindex="-1"><p class="eyebrow">CELL BIOLOGY · MILESTONE ${i+1} OF 12</p><details class="journey-info"><summary>Why this matters &amp; what you’ll need</summary><h4>Why am I learning this?</h4><p>${esc(m.why)}</p><h4>What should I already understand?</h4><p>${esc(m.prior)}</p><p class="journey-neighbours"><b>Previous:</b> ${esc(previous?.name||'Start of Cell Biology')}<br><b>Next recommended:</b> ${esc(m.next)}</p><h4>What should I demonstrate?</h4><p>${esc(m.demonstrate)}</p><p class="coverage">Demonstrate understanding through existing practice and assessment. The existing scoring and independent Osmosis Lab checks are unchanged; visiting a milestone is not evidence of mastery.</p></details>${['cells','structures','specialised'].includes(m.id)?`<details class="journey-info" ontoggle="if(this.open &amp;&amp; typeof specialisedMarkAssisted==='function')specialisedMarkAssisted()"><summary>Lesson preview &amp; quick explanation</summary>${entry}</details>`:entry}<div id="journey-learning-content">${sourceTeaching}${cellJourneyPractical(m.id,l,parts)}${m.id==='osmosis'?osmosisEntry(s,c,t):''}${assessment}</div>${banks.length?`<details class="journey-practice"><summary>Existing practice for these source lessons</summary><p>These question sets use the original subsection identifiers. Some sets cover more than one milestone; they are not separate mastery records for the new milestones.</p><div class="actions">${banks.map(title=>`<button class="btn" onclick="startSectionPractice(${arg(t)},${arg(title)})">${esc(title)} · practise →</button>`).join('')}</div></details>`:''}<nav class="actions journey-neighbour-buttons" aria-label="Adjacent Cell Biology milestones">${previous?`<button class="btn" onclick="chooseCellJourney(${arg(previous.id)})">← ${esc(previous.name)}</button>`:'<button class="btn" onclick="setPage(\'subjects\')">← Learning library</button>'}${next?`<button class="btn" onclick="chooseCellJourney(${arg(next.id)})">Next: ${esc(next.name)} →</button>`:'<button class="btn" onclick="openLesson(\'Biology\',\'Organisation\')">Continue to Organisation · revision access →</button>'}</nav></article></section>`;
}
const cellJourneyOpenLesson=openLesson;
openLesson=function(s,t){if(cellJourneyApplies(s,choice(s),t)){cellJourneySelection=cellJourneyResume();cellJourneySelectionContext=cellJourneyContext();}else cellJourneySelection=null;return cellJourneyOpenLesson(s,t);};
const cellJourneyHome=home;
home=function(a){cellJourneyHome(a);const c=choice('Biology'),id=cellJourneySaved()[cellJourneyContext()],m=CELL_JOURNEY.find(x=>x.id===id);if(cellJourneyApplies('Biology',c,'Cell Biology')&&m){const html=`<section class="card journey-resume"><h3>Continue learning · Cell Biology</h3><p>Resume milestone ${CELL_JOURNEY.indexOf(m)+1} of 12: ${esc(m.name)}. Next recommended: ${esc(m.next)}.</p><button class="btn primary" onclick="openLesson('Biology','Cell Biology')">Resume Cell Biology →</button></section>`;if(a.insertAdjacentHTML)a.insertAdjacentHTML('afterbegin',html);else a.innerHTML=html+a.innerHTML;}};

// Refresh the initial home rendered before this presentation script loaded.
if(state.page==='home')home(app());
