/* O3a: presentation destinations only. No score, answer or storage-key changes. */
let cellLessonView='dashboard',cellRouteDepth=0,cellRouteRestoring=false;
function cellNavigationApplies(){return state.page==='lesson'&&cellJourneyApplies(state.subject,choice(state.subject),state.topic);}
function cellNavigationFocus(target){const el=document.querySelector?.(target);if(el){el.setAttribute('tabindex','-1');el.focus?.({preventScroll:true});}if(typeof window!=='undefined')window.scrollTo?.({top:0,left:0,behavior:'auto'});}
// Preserve the canonical rendered content, including practical and source links.
const cellNavigationPanel=cellJourneyPanel;
cellJourneyPanel=function(s,c,t,sections){const html=cellNavigationPanel(s,c,t,sections);if(!cellJourneyApplies(s,c,t))return html;
 const m=CELL_JOURNEY.find(x=>x.id===cellJourneySelection),interactive=['cells','structures','specialised','microscopy'].includes(m.id);
 const start=html.indexOf('<article id="cell-journey-current"'),end=html.indexOf('</article>',start)+10;
 if(start<0||end<10)return html;
 const original=html.slice(start,end),aboutStart=original.indexOf('<details class="journey-info">'),aboutEnd=original.indexOf('</details>',aboutStart)+10;
 const about=original.slice(aboutStart,aboutEnd).replace('Why this matters &amp; what you’ll need','About this lesson').replace('</details>',`<p><b>Specification:</b> ${esc(m.spec)}</p></details>`);
 const practiceStart=original.indexOf('<details class="journey-practice">'),navStart=original.indexOf('<nav class="actions journey-neighbour-buttons"');
 const notes=original.slice(aboutEnd,practiceStart>=0?practiceStart:navStart);
 const practice=practiceStart>=0?original.slice(practiceStart,navStart).replace('Existing practice for these source lessons','Extra practice').replace('<p>These question sets','<p>Existing practice for these source lessons. These question sets'):'';
 const neighbours=original.slice(navStart,original.lastIndexOf('</article>')).replace("setPage('subjects')","cellJourneyLibrary()");
 const panel=`<article id="cell-journey-current" class="cell-lesson-introduction" tabindex="-1"><p class="eyebrow">MILESTONE ${CELL_JOURNEY.indexOf(m)+1} OF 12 · ${esc(label(s,c))}</p><h2 id="cell-lesson-title" tabindex="-1">${esc(m.name)}</h2><p class="cell-lesson-hook">${esc(CELL_HOOKS[m.id])}</p><button class="btn primary" onclick="${interactive?'cellJourneyOpenCard('+arg(m.id)+')':'cellRevisionStart()'}">${interactive?'Start exploring':'Start Learning'} →</button>${about}<details id="cell-revision-notes" class="cell-lesson-notes" ontoggle="if(this.open &amp;&amp; typeof specialisedMarkAssisted==='function')specialisedMarkAssisted()"><summary>Revision notes</summary>${notes}</details>${practice}${neighbours}</article>`;
 if(cellLessonView==='revision')return `<section class="card cell-revision-lesson" aria-label="${esc(m.name)} lesson">${panel}</section>`;
 return (html.slice(0,start)+`<details class="cell-selected-lesson"><summary>About the selected lesson · ${esc(m.name)}</summary>${panel}</details>`+html.slice(end)).replace('<h2>Welcome to Cell Biology!</h2>','<h2 id="cell-dashboard-title" tabindex="-1">Welcome to Cell Biology!</h2>');
};
const cellNavigationLesson=lesson;
lesson=function(a){const result=cellNavigationLesson(a);if(cellNavigationApplies()){
 a.innerHTML=a.innerHTML.replace('<button class="text-button" onclick="setPage(\'subjects\')">← Learning library</button>',cellLessonView==='dashboard'?'<button class="text-button" onclick="setPage(\'subjects\')">← Subjects</button>':'<button class="text-button" onclick="cellJourneyLibrary()">← Learning Library</button>');
 }return result;};
function cellJourneyLibrary(){return cellNavigationAction(()=>{openLesson('Biology','Cell Biology');cellNavigationFocus('#cell-dashboard-title');});}
function cellJourneyOpenCard(id,introduction=true){if(!cellNavigationApplies()||!CELL_JOURNEY.some(x=>x.id===id))return;
 return cellNavigationAction(()=>{chooseCellJourney(id);
 if(id==='cells'){cellsOpen();const d=cellsData();if(introduction&&!(d.assessment&&!d.assessment.done)){cellsScene(0);cellsPhase(0,false);}cellNavigationFocus('#cells-title');}
 else if(id==='structures'){structuresOpen();const d=structuresData();if(introduction&&!(d.assessment&&!d.assessment.done))structuresScene(0);cellNavigationFocus('.structures-tutor h2');}
 else if(id==='specialised'){specialisedOpen();const d=specialisedData();if(introduction&&!(d.assessment&&!d.assessment.done))specialisedScene(0);cellNavigationFocus('.specialised-tutor h2');}
 else if(id==='microscopy'){microscopeOpen();cellNavigationFocus('#microscope-title');}
 else{cellLessonView='revision';lesson(app());cellNavigationFocus('#cell-lesson-title');}
 });}
function cellRevisionStart(){if(!cellNavigationApplies()||cellLessonView!=='revision')return;if(cellJourneySelection==='assessment')return startTest('Biology','Cell Biology');
 const notes=document.getElementById('cell-revision-notes');if(!notes)return;notes.open=true;
 // Open the preserved original explanations, not quizzes or optional model answers.
 for(const el of notes.querySelectorAll?.('details')||[]){if(el.querySelector('summary')?.textContent==='Original revision explanations')el.open=true;}
 const heading=notes.querySelector?.('.journey-teaching h4')||notes;heading.setAttribute('tabindex','-1');heading.focus?.({preventScroll:true});
 // A student-requested move to the visible teaching, with no smooth transition.
 notes.scrollIntoView?.({block:'start',behavior:'auto'});
}
const cellNavigationChoose=chooseCellJourney;
chooseCellJourney=function(id){cellLessonView='dashboard';return cellNavigationChoose(id);};
const cellNavigationOpen=openLesson;
openLesson=function(s,t){cellLessonView='dashboard';const result=cellNavigationAction(()=>cellNavigationOpen(s,t));if(cellNavigationApplies())cellNavigationFocus('#cell-dashboard-title');return result;};
cellJourneyStart=function(){return cellJourneyOpenCard(cellJourneySelection,false);};
// One existing exit control per interactive lesson, consistently named Learning Library.
for(const entry of ['cellsRender','structuresRender','specialisedRender']){
 const original=({cellsRender,structuresRender,specialisedRender})[entry];
 const wrapped=function(...args){const result=original.apply(this,args);const a=app();if((entry==='cellsRender'&&cellsActive)||(entry==='structuresRender'&&structuresActive)||(entry==='specialisedRender'&&specialisedActive))a.innerHTML=a.innerHTML.replace(/<button class="text-button" onclick="(?:cellsExit|structuresExit|specialisedExit)\(\)">[^<]*<\/button>/,'<button class="text-button" onclick="cellJourneyLibrary()">← Learning Library</button>');return result;};
 if(entry==='cellsRender')cellsRender=wrapped;else if(entry==='structuresRender')structuresRender=wrapped;else specialisedRender=wrapped;
}
/* Scoped native history stores destinations only; saved assessment state remains authoritative. */
function cellNavigationLocation(){if(!cellNavigationApplies()){if(state.page==='lesson')return {kind:'page',page:'lesson',subject:state.subject,topic:state.topic};return {kind:'page',page:['home','subjects','science','lab','papers','tests','progress','dentist','settings','audit'].includes(state.page)?state.page:'quiz'};}
 return {kind:journeyOsmosisView?'osmosis':cellsActive||structuresActive||specialisedActive||microscopeActive?'interactive':cellLessonView,step:cellJourneySelection,context:cellJourneyContext()};}
function cellNavigationKey(route){return JSON.stringify([route.kind,route.step,route.page,route.subject,route.topic,route.context]);}
function cellNavigationURL(route){if(typeof location==='undefined')return '';const base=location.pathname+location.search;
 return base+(route.kind==='page'?'':route.kind==='dashboard'?'#cell-biology':route.kind==='osmosis'?'#cell-biology/osmosis-lab':route.kind==='revision'?'#cell-biology/revision/'+route.step:'#cell-biology/'+route.step);}
function cellNavigationWrite(replace=false){if(typeof window==='undefined'||!window.history?.pushState||cellRouteRestoring)return;const route=cellNavigationLocation(),before=window.history.state?.studyHubNavigation;
 if(!replace&&before&&cellNavigationKey(before)===cellNavigationKey(route))return;
 const saved={...(window.history.state||{}),studyHubNavigation:route};window.history[replace?'replaceState':'pushState'](saved,'',cellNavigationURL(route));}
function cellNavigationAction(fn){cellRouteDepth++;try{return fn();}finally{cellRouteDepth--;if(!cellRouteDepth)cellNavigationWrite();}}
const cellNavigationPage=setPage;setPage=function(p){return cellNavigationAction(()=>cellNavigationPage(p));};
const cellNavigationOsmosis=otStart;otStart=function(delayed){return cellNavigationAction(()=>cellNavigationOsmosis(delayed));};
const cellNavigationBack=journeyGoBack;journeyGoBack=function(){return cellNavigationAction(()=>cellNavigationBack());};
function cellNavigationRestore(route){if(!route)return;cellRouteRestoring=true;try{
 if(route.kind==='page'){if(route.page==='lesson')openLesson(route.subject,route.topic);else setPage(route.page);return;}
 openLesson('Biology','Cell Biology');
 if(!cellNavigationApplies()||route.context&&route.context!==cellJourneyContext())return;
 if(CELL_JOURNEY.some(x=>x.id===route.step))chooseCellJourney(route.step);
 if(route.kind==='revision'&&route.step==='microscopy'){microscopeActive=false;cellLessonView='revision';lesson(app());cellNavigationFocus('#cell-lesson-title');}
 else if(route.kind==='interactive'||route.kind==='revision')cellJourneyOpenCard(route.step,false);
 else if(route.kind==='osmosis')otStart(false);
 else cellNavigationFocus('#cell-dashboard-title');
 }finally{cellRouteRestoring=false;}}
if(typeof window!=='undefined'&&window.history?.pushState){
 window.history.scrollRestoration='manual';
 window.addEventListener('popstate',event=>{const route=event.state?.studyHubNavigation;if(route&&cellNavigationKey(route)!==cellNavigationKey(cellNavigationLocation()))cellNavigationRestore(route);});
 const hash=window.location.hash.match(/^#cell-biology(?:\/(revision\/)?(cells|structures|specialised|microscopy|rp01|division|diffusion|exchange|osmosis|rp02|active|assessment|osmosis-lab))?$/);
 if(hash){const id=hash[2]||cellJourneyResume();cellNavigationRestore({kind:hash[2]==='osmosis-lab'?'osmosis':hash[1]?'revision':hash[2]?'interactive':'dashboard',step:id,context:cellJourneyContext()});}
 cellNavigationWrite(true);
}
