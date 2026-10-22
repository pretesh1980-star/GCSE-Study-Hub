/* Back history is tab-local presentation state. It never snapshots or restores assessment scores. */
let journeyBackStack=[], journeyNavigationDepth=0, journeyRestoring=false, journeyOsmosisView=false;
function journeyLocation(){return {page:state.page,subject:state.subject,topic:state.topic,step:typeof cellJourneySelection==='undefined'?null:cellJourneySelection,osmosis:journeyOsmosisView,context:JSON.stringify({choices:state.choices,course:state.scienceCourse})};}
function journeyLocationKey(x){return JSON.stringify([x.page,x.subject,x.topic,x.step,x.osmosis]);}
function journeyBackBar(){const a=app();if(!a||state.page==='home'||a.innerHTML.includes('id="journey-back"'))return;const html=`<nav id="journey-back" class="journey-back" aria-label="Page navigation"><button class="btn" onclick="journeyGoBack()">← Back</button><span>${journeyOsmosisView?'Biology / Cell Biology / Osmosis Lab':state.page==='lesson'?esc(state.subject)+' / '+esc(state.topic):'Study Hub'}</span></nav>`;if(a.insertAdjacentHTML)a.insertAdjacentHTML('afterbegin',html);else a.innerHTML=html+a.innerHTML;}
function journeyGoBack(){
 let prior=journeyBackStack.pop();journeyRestoring=true;
 try {
  session=null;testSession=null;journeyOsmosisView=false;state.lessonFocus=null;
  if(!prior){setPage(state.page==='lesson'?'subjects':'home');return;}
  // A previous assessment opens its chooser, never an old gradable question or submitted test.
  if(prior.page==='lesson'&&SUBJECTS[prior.subject]&&activeTopics(prior.subject).some(x=>x.id===prior.topic)){
   cellJourneySelection=prior.step;if(prior.step&&typeof cellJourneySave==='function')cellJourneySave(prior.step);openLesson(prior.subject,prior.topic);
   if(prior.osmosis&&choice(prior.subject).board==='aqa'&&prior.topic==='Cell Biology'&&state.scienceCourse==='trilogy'&&prior.context===JSON.stringify({choices:state.choices,course:state.scienceCourse}))otStart(false);
  }else setPage(['home','subjects','science','lab','papers','quiz','tests','progress','dentist','settings','audit'].includes(prior.page)?prior.page:'home');
 } finally {journeyRestoring=false;journeyBackBar();moveTop();}
}
function journeyWrapAction(name,fn){return function(...args){const outer=journeyNavigationDepth===0,before=outer?journeyLocation():null;journeyNavigationDepth++;
 try {if(name==='otStart')journeyOsmosisView=true;else if(['setPage','openLesson','openFeedbackLesson','startQuiz','startTopicSet','startSectionPractice','startTest'].includes(name))journeyOsmosisView=false;
  const result=fn.apply(this,args);
  if(outer&&!journeyRestoring&&journeyLocationKey(before)!==journeyLocationKey(journeyLocation())){journeyBackStack.push(before);if(journeyBackStack.length>50)journeyBackStack.shift();}
  return result;
 }finally {journeyNavigationDepth--;if(outer){journeyBackBar();const toggle=document.querySelector('.mobile-menu-toggle'),nav=document.getElementById('nav');if(toggle&&nav?.classList){toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu';nav.classList.remove('menu-open');}}}
};}
setPage=journeyWrapAction('setPage',setPage);
openLesson=journeyWrapAction('openLesson',openLesson);
openFeedbackLesson=journeyWrapAction('openFeedbackLesson',openFeedbackLesson);
startQuiz=journeyWrapAction('startQuiz',startQuiz);
startTopicSet=journeyWrapAction('startTopicSet',startTopicSet);
startSectionPractice=journeyWrapAction('startSectionPractice',startSectionPractice);
startTest=journeyWrapAction('startTest',startTest);
chooseCellJourney=journeyWrapAction('chooseCellJourney',chooseCellJourney);
otStart=journeyWrapAction('otStart',otStart);
for(const name of ['render','lesson','renderQuiz','otRender']){
 const fn=({render,lesson,renderQuiz,otRender})[name];
 const wrapped=function(...args){const value=fn.apply(this,args);journeyBackBar();return value;};
 if(name==='render')render=wrapped;else if(name==='lesson')lesson=wrapped;else if(name==='renderQuiz')renderQuiz=wrapped;else otRender=wrapped;
}
