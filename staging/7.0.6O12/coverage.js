'use strict';
// Inventory of registered content, not a specification-completeness audit.
function coveragePathways(){return Object.keys(PACKS).flatMap(subject=>Object.keys(PACKS[subject]).flatMap(board=>(TIERED.includes(subject)?['foundation','higher','unsure']:['none']).flatMap(tier=>(board==='aqa'&&['Biology','Chemistry','Physics'].includes(subject)?Object.keys(SCIENCE_COURSES):['none']).map(course=>({subject,board,tier,course})))));}
function coverageRow(path){
 const {subject,board,tier,course}=path,c={board,tier,courseContext:course},pack=PACKS[subject][board];
 const questions=activeQuestions(subject,c),topics=activeTopics(subject,c);
 const preview=course==='synergy'||course==='unsure';
 const trilogy=board==='aqa'&&course==='trilogy';
 const details=topics.map(topic=>{
  const lesson=activeLesson(subject,c,topic.id),qs=questions.filter(q=>q.topic===topic.id);
  const available=Boolean(lesson&&(lesson.sections?.some(x=>String(x.body||'').trim())||String(lesson.learn||'').trim()));
  const mapped=board!=='common'&&!preview&&!/shared|starter/i.test(topic.unit||'')&&Boolean(topic.unit);
  const reasons=[];
  if(!available)reasons.push('Revision lesson missing');
  if(!qs.length)reasons.push('Practice questions missing');
  if(!mapped)reasons.push(board==='common'?'Common-core content; no board mapping':preview?'Course mapping incomplete':'No board-specific topic mapping');
  if(available&&!lesson.sections?.length)reasons.push('Short starter lesson');
  if(trilogy&&tier!=='higher')reasons.push('See the Foundation specification-point audit; legacy student tier tags may differ from audited eligibility.');
  const status=!available?'missing':mapped&&qs.length&&lesson.sections?.length&&!(trilogy&&tier!=='higher')?'mapped':'partial';
  return {id:topic.id,unit:topic.unit,status,lesson:available,sections:lesson?.sections?.length||0,questions:qs.length,higherQuestions:qs.filter(q=>q.tier==='higher').length,practicals:lesson?.practicals?.length||0,reasons};
 });
 const counts={mapped:0,partial:0,missing:0};details.forEach(t=>counts[t.status]++);
 const gaps=[];
 if(preview)gaps.push(course==='synergy'?'Synergy theme mapping incomplete':'Science course unconfirmed');
 if(TIERED.includes(subject)&&tier!=='higher')gaps.push('Tier filtering uses existing tags; completeness is unverified');
 if(!details.length)gaps.push('No registered topics');
 if(details.some(t=>!t.questions))gaps.push('Some registered topics have no practice questions');
 if(details.some(t=>!t.lesson))gaps.push('Some registered topics have no revision lesson');
 return {...path,qualification:trilogy?SCIENCE_COURSES.trilogy.code:course==='synergy'?SCIENCE_COURSES.synergy.code:pack.id,counts,topics:details.length,lessons:details.filter(t=>t.lesson).length,questions:questions.length,missingPractice:details.filter(t=>!t.questions).length,higherTaggedQuestions:questions.filter(q=>q.tier==='higher').length,status:!details.length||counts.missing===details.length?'missing':counts.partial||counts.missing?'partial':'mapped',note:revisionPathwayNote(subject,c),gaps,details};
}
function coverageReport(){return coveragePathways().map(coverageRow);}
