/* Course-aware AQA science presentation. Trilogy has a mapped revision library; other views remain previews. */
const SCIENCE_COURSES={
 unsure:{name:'Not sure yet',code:'',note:'Science course still to confirm. The current library includes separate-science content and is not an exam checklist.'},
 trilogy:{name:'Combined Science: Trilogy',code:'8464',note:'Higher revision mapped across all 24 AQA Trilogy topic areas, six papers and 21 required practicals.',url:'https://www.aqa.org.uk/subjects/science/gcse/science-8464/specification/specification-at-a-glance'},
 synergy:{name:'Combined Science: Synergy',code:'8465',note:'Four papers grouped by connected science themes. Current lessons are shared-concept revision, not full 8465 coverage.',url:'https://www.aqa.org.uk/subjects/science/gcse/science-8465/specification/specification-at-a-glance'},
 separate:{name:'Separate sciences',code:'8461 / 8462 / 8463',note:'Separate Biology, Chemistry and Physics qualifications. The current packs are revision starters, not complete specifications.',url:'https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/specification-at-a-glance'}
};
const SCIENCE_PAPERS={
 trilogy:[
  ['Biology Paper 1','Cell biology · Organisation · Infection and response · Bioenergetics','1 hour 15 minutes · 70 marks'],
  ['Biology Paper 2','Homeostasis and response · Inheritance, variation and evolution · Ecology','1 hour 15 minutes · 70 marks'],
  ['Chemistry Paper 1','Atomic structure · Bonding · Quantitative chemistry · Chemical changes · Energy changes','1 hour 15 minutes · 70 marks'],
  ['Chemistry Paper 2','Rates · Organic chemistry · Chemical analysis · Atmosphere · Using resources','1 hour 15 minutes · 70 marks'],
  ['Physics Paper 1','Energy · Electricity · Particle model · Atomic structure','1 hour 15 minutes · 70 marks'],
  ['Physics Paper 2','Forces · Waves · Magnetism and electromagnetism','1 hour 15 minutes · 70 marks']
 ],
 synergy:[
  ['Paper 1 · Life and environmental sciences','Building blocks · Transport over larger distances · Interactions with the environment · Explaining change','1 hour 45 minutes · 100 marks'],
  ['Paper 2 · Life and environmental sciences','The same four themes, with greater emphasis on analysis, evaluation and practical work','1 hour 45 minutes · 100 marks'],
  ['Paper 3 · Physical sciences','Building blocks for understanding · Interactions over small and large distances · Movement and interactions · Guiding Spaceship Earth','1 hour 45 minutes · 100 marks'],
  ['Paper 4 · Physical sciences','The same four themes, with greater emphasis on analysis, evaluation and practical work','1 hour 45 minutes · 100 marks']
 ]
};
/* These AQA 8461 sections have separate-Biology material. Exclude them from the combined/unknown preview. */
const BIO_SEPARATE_ONLY_SECTIONS={
 'Infection & Response':['Plant disease and defence','Monoclonal antibodies'],
 'Homeostasis & Response':['Plant responses','Temperature and water balance','The eye','Hormones, feedback and fertility','Regulating water balance','Plant growth regulators'],
 'Inheritance':['Evolution and its evidence'],
 'Ecology':['Transfer efficiency']
};
const BIO_TRILOGY_PRACTICALS=new Set(['microscopy','osmosis','food','enzymes','photosynthesis','reaction','fieldwork']);
function scienceCourse(c){const course=c?.courseContext??state.scienceCourse;return SCIENCE_COURSES[course]?course:'unsure';}
function scienceIsCombinedPreview(s,b,c){return s==='Biology'&&b==='aqa'&&['trilogy','synergy'].includes(scienceCourse(c));}
function scienceSectionAllowed(topic,section,c){if(c?.board==='aqa'&&c.courseContext==='trilogy'&&c.tier==='higher'&&section.title==='Hormones, feedback and fertility')return true;return !(BIO_SEPARATE_ONLY_SECTIONS[topic]||[]).includes(section.title);}
function activeTopics(s,c=choice(s)){
 const trilogy=c.board==='aqa'&&scienceCourse(c)==='trilogy'&&TRILOGY_TOPICS[s];
 const topics=trilogy?trilogyTopics(s):resolveTopics(s,c.board);
 return topics.filter(t=>tierAllows(t,c.tier)).map(t=>c.board==='aqa'&&scienceCourse(c)==='synergy'&&['Biology','Chemistry','Physics'].includes(s)?{...t,unit:'Shared-concept preview · not a Synergy specification order'}:t);
}
function revisionPathwayNote(s,c=choice(s)){
 if(c.board==='common')return 'Common GCSE revision — no exam board selected. These shared starter topics are not a complete specification.';
 if(c.board==='aqa'&&['Biology','Chemistry','Physics'].includes(s)){
  if(scienceCourse(c)==='synergy')return 'Synergy shared-concept preview. Full theme mapping is not yet available; this list is not a specification checklist.';
  if(scienceCourse(c)==='unsure')return 'Science course not confirmed. This starter library includes separate-science topics; confirm your course before using it as an exam checklist.';
  if(scienceCourse(c)==='trilogy')return c.tier==='higher'?'AQA Trilogy revision topics in specification order.':'AQA Trilogy topic order. Higher-tagged material is hidden; Foundation coverage has not been fully audited.';
 }
 return PACKS[s][c.board].note;
}
function activeLesson(s,c,t){if(!activeTopics(s,c).some(topic=>topic.id===t))return null;if(c.board==='aqa'&&scienceCourse(c)==='trilogy'&&TRILOGY_LESSONS[s]){const l=trilogyLesson(s,t);if(!l)return null;const sections=l.sections.filter(section=>tierAllows(section,c.tier));return {...l,sections,learn:sections.map(section=>section.body).join('\n\n')};}const lesson=resolveLesson(s,c.board,t,c.tier);if(!lesson||!scienceIsCombinedPreview(s,c.board,c))return lesson;const sections=(lesson.sections||[]).filter(section=>scienceSectionAllowed(t,section,{...c,courseContext:scienceCourse(c)}));const practicals=scienceCourse(c)==='synergy'?[]:(lesson.practicals||[]).filter(p=>BIO_TRILOGY_PRACTICALS.has(p.id));return {...lesson,sections,practicals,learn:sections.map(x=>x.body).join('\n\n')};}
function activeQuestions(s,c=choice(s)){if(c.board==='aqa'&&scienceCourse(c)==='trilogy'&&TRILOGY_QUESTIONS[s])return TRILOGY_QUESTIONS[s].filter(q=>tierAllows(q,c.tier)).map(q=>({...q,board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}));const questions=resolveQuestions(s,c.board,c.tier);const filtered=scienceIsCombinedPreview(s,c.board,c)?questions.filter(q=>q.section&&scienceSectionAllowed(q.topic,{title:q.section},{...c,courseContext:scienceCourse(c)})):questions;return filtered.map(q=>({...q,courseContext:s==='Biology'||s==='Chemistry'||s==='Physics'?scienceCourse(c):'none'}));}
function scienceLessonNotice(s,c){if(!['Biology','Chemistry','Physics'].includes(s)||c.board!=='aqa')return '';const mode=scienceCourse();return `<p class="course-check-note">${esc(SCIENCE_COURSES[mode].note)}</p>`;}
function sciencePackName(s,c){if(c.board==='aqa'&&['Biology','Chemistry','Physics'].includes(s)&&['trilogy','synergy'].includes(scienceCourse()))return `${s} · ${SCIENCE_COURSES[scienceCourse()].code}`;return PACKS[s][c.board].title;}
function scienceCoursePicker(id='science-course'){const mode=scienceCourse();return `<label for="${id}">AQA science course<select id="${id}" onchange="changeScienceCourse(this.value)">${Object.entries(SCIENCE_COURSES).map(([key,item])=>`<option value="${key}" ${mode===key?'selected':''}>${esc(item.name)}${item.code?' · '+esc(item.code):''}</option>`).join('')}</select></label>`;}
function scienceCourseOverview(a){const mode=scienceCourse(),course=SCIENCE_COURSES[mode],papers=SCIENCE_PAPERS[mode];a.innerHTML=`${pageHeading('Your science course.','Choose the course when the school confirms its code.')}<section class="card science-course-hero"><div class="eyebrow">AQA SCIENCE</div><h3>${esc(course.name)}${course.code?' · '+esc(course.code):''}</h3>${scienceCoursePicker()}<p>${esc(course.note)}</p>${course.url?`<a href="${esc(course.url)}" target="_blank" rel="noopener noreferrer">See the official AQA course ↗</a>`:''}</section>${papers?`<div class="section-heading"><h3>Paper guide</h3></div><div class="grid">${papers.map(([title,topics,details])=>`<section class="card science-paper"><h3>${esc(title)}</h3><p>${esc(topics)}</p><small>${esc(details)}</small></section>`).join('')}</div>`:`<section class="card science-paper" style="margin-top:16px"><h3>What to study for now</h3><p>Use the shared-concept lessons in Subjects. Ask the school for the GCSE science course name or code: 8464, 8465, or separate science entries.</p></section>`}<section class="card science-course-next"><h3>Continue learning</h3><p>Lessons and progress remain available when you switch course views. The current library is still being checked against each specification.</p><button class="btn primary" onclick="setPage('subjects')">Explore science lessons →</button> <button class="btn" onclick="setPage('audit')">Open Biology specification audit →</button></section>`;}
