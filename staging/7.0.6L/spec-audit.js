'use strict';
function auditFingerprint(text){let hash=2166136261;for(let i=0;i<text.length;i++)hash=Math.imul(hash^text.charCodeAt(i),16777619);return (hash>>>0).toString(16).padStart(8,'0');}
// Explicit context: never load, change or save a student's selected pathway.
function auditInventory(dataset){
 const items=new Map(),context={board:dataset.board,tier:'higher',courseContext:dataset.course};
 for(const subject of Object.keys(dataset.sources)){
  for(const topic of activeTopics(subject,context)){
   const lesson=activeLesson(subject,context,topic.id);
   for(const section of lesson?.sections||[]){const id=[subject,topic.id,section.title].join('|');items.set(id,{id,kind:'lesson',subject,topic:topic.id,label:section.title,fingerprint:auditFingerprint(section.body||'')});}
   for(const practical of lesson?.practicals||[]){const id=subject+'|practical|'+practical.id;items.set(id,{id,kind:'practical',subject,topic:topic.id,label:practical.title,fingerprint:auditFingerprint(['title','aim','method','controls','example','pitfall'].map(k=>String(practical[k]||'')).join('\n'))});}
  }
  for(const q of activeQuestions(subject,context)){items.set(q.id,{id:q.id,kind:'question',subject,topic:q.topic,label:q.q,accepted:q.accepted||[],fingerprint:auditFingerprint(['q','answer','explain'].map(k=>String(q[k]||'')).join('\n'))});}
 }
 const visible=new Set(),foundation={board:dataset.board,tier:'foundation',courseContext:dataset.course};
 for(const subject of Object.keys(dataset.sources)){
  for(const topic of activeTopics(subject,foundation)){
   const lesson=activeLesson(subject,foundation,topic.id);
   for(const section of lesson?.sections||[])visible.add([subject,topic.id,section.title].join('|'));
   for(const practical of lesson?.practicals||[])visible.add(subject+'|practical|'+practical.id);
  }
  for(const q of activeQuestions(subject,foundation))visible.add(q.id);
 }
 for(const [id,item]of items)item.studentVisible=visible.has(id);
 if(typeof biologySupportInventory==='function')for(const item of biologySupportInventory())items.set(item.id,item);
 return items;
}
function specificationAudit(dataset=SPEC_AUDIT_DATA){
 const inventory=auditInventory(dataset),metadata=new Map(dataset.contentMetadata.map(m=>[m.id,m]));
 const resolve=id=>{const meta=metadata.get(id),item=inventory.get(id);const current=Boolean(meta&&item&&meta.fingerprint===item.fingerprint);const hold=typeof FOUNDATION_QUESTION_HOLDS!=='undefined'?FOUNDATION_QUESTION_HOLDS[id]:null;const reviewed=typeof REVIEWED_QUESTION_TIERS!=='undefined'?REVIEWED_QUESTION_TIERS[id]:null;const effectiveTier=reviewed?.tier||hold?.tier||meta?.tier;return {id,label:item?.label||meta?.section||id,kind:meta?.kind||'unknown',tier:effectiveTier||'unreviewed',current,studentVisible:Boolean(item?.studentVisible),foundationReady:current&&effectiveTier==='both',foundationEvidence:current&&['both','mixed'].includes(effectiveTier),reason:!item?'Linked content is missing':!meta?'No reviewed tier metadata':!current?'Content changed since this audit; re-review required':reviewed?.reason||hold?.reason||meta.reason};};
 const points=dataset.points.map(point=>{
  const lessons=point.lessonRefs.map(resolve),questions=point.questionRefs.map(resolve);
  const hasLesson=lessons.some(x=>x.foundationEvidence),hasQuestions=questions.some(x=>x.foundationEvidence);
  const support=(point.supportRefs||[]).map(resolve),higherLessons=(point.higherLessonRefs||[]).map(resolve),higherQuestions=(point.higherQuestionRefs||[]).map(resolve);
  const readyLesson=lessons.some(x=>x.foundationReady),readyQuestions=questions.some(x=>x.foundationReady);
  const complete=point.review==='complete'&&readyLesson&&readyQuestions&&[...lessons,...questions,...support].every(x=>x.current&&x.foundationReady);
  const status=complete?'covered':hasLesson||hasQuestions?'partial':'missing';
  return {...point,lessons,questions,support,higherLessons,higherQuestions,hasLesson,hasQuestions,readyLesson,readyQuestions,status,presence:hasLesson?(hasQuestions?'both':'lessons-only'):(hasQuestions?'questions-only':'neither')};
 });
 const totals=Object.fromEntries(Object.keys(dataset.sources).map(subject=>{const rows=points.filter(p=>p.subject===subject);return [subject,{total:rows.length,covered:rows.filter(p=>p.status==='covered').length,partial:rows.filter(p=>p.status==='partial').length,missing:rows.filter(p=>p.status==='missing').length}];}));
 const issues=[];
 for(const meta of dataset.contentMetadata){const evidence=resolve(meta.id);if(!evidence.current)issues.push({id:meta.id,subject:meta.subject,type:'stale-reference',reason:evidence.reason});else if(meta.declaredTier==='unassigned'||meta.tier!==meta.declaredTier)issues.push({id:meta.id,subject:meta.subject,type:'tier-metadata',declared:meta.declaredTier,audited:meta.tier,reason:meta.reason});}
 for(const [id,item]of inventory){if(!metadata.has(id))issues.push({id,subject:item.subject,type:'unreviewed',reason:'New content has no audit metadata.'});if(item.accepted?.length&&item.accepted.some(a=>/ N$/.test(a))&&item.accepted.some(a=>/ W$/.test(a))&&item.accepted.some(a=>/ m\/s$/.test(a)))issues.push({id,subject:item.subject,type:'answer-units',reason:'Answer aliases accept incompatible units; existing behaviour retained for separate correction.'});}
 const cleanup=typeof foundationCleanupReport==='function'?foundationCleanupReport():null;
 const resolvedIssues=[];
 if(cleanup){
  for(let i=issues.length-1;i>=0;i--){const issue=issues[i],m=metadata.get(issue.id);
   if(issue.type==='tier-metadata'&&m&&(m.tier!=='mixed'&&m.tier!=='unreviewed'||m.kind==='lesson'&&FOUNDATION_SPLITS[m.id]||typeof REVIEWED_QUESTION_TIERS!=='undefined'&&REVIEWED_QUESTION_TIERS[m.id])){resolvedIssues.push({...issue,resolution:'Enforced in AQA Trilogy Foundation; original Higher content retained.'});issues.splice(i,1);}
  }
  for(const [id,hold]of Object.entries(FOUNDATION_QUESTION_HOLDS)){if(typeof REVIEWED_QUESTION_TIERS!=='undefined'&&REVIEWED_QUESTION_TIERS[id]){resolvedIssues.push({id,subject:metadata.get(id)?.subject,type:'tier-metadata',resolution:REVIEWED_QUESTION_TIERS[id].reason});continue;}issues.push({id,subject:metadata.get(id)?.subject,type:'tier-metadata',declared:metadata.get(id)?.declaredTier,audited:hold.tier,reason:hold.reason});}
 }
 const higherPoints=(dataset.biologyHigherPoints||[]).map(p=>{const lessons=p.lessonRefs.map(resolve),questions=p.questionRefs.map(resolve),support=(p.supportRefs||[]).map(resolve);const all=[...lessons,...questions,...support],hasLesson=lessons.some(e=>e.current),hasQuestions=questions.some(e=>e.current);const complete=p.review==='complete'&&hasLesson&&hasQuestions&&all.every(e=>e.current&&e.tier==='higher'&&!e.studentVisible);return {...p,lessons,questions,support,status:complete?'covered':hasLesson||hasQuestions?'partial':'missing',presence:hasLesson?(hasQuestions?'both':'lessons-only'):(hasQuestions?'questions-only':'neither')};});
 const biologyRows=points.filter(p=>p.subject==='Biology');
 const higherOnly=higherPoints.filter(p=>p.status==='covered').length;
 // Covered includes adequately covered Higher-only units; higherOnly is a subset, not an extra category.
 const biologyCoverage={total:biologyRows.length+higherPoints.length,covered:biologyRows.filter(p=>p.status==='covered').length+higherOnly,partial:biologyRows.filter(p=>p.status==='partial').length+higherPoints.filter(p=>p.status==='partial').length,missing:biologyRows.filter(p=>p.status==='missing').length+higherPoints.filter(p=>p.status==='missing').length,higherOnly,higherPoints};
 const biologyTierConcerns=(dataset.biologyTierConcernReviews||[]).map(r=>{const c={board:'aqa',tier:'foundation',courseContext:'trilogy'},q=activeQuestions('Biology',c).find(q=>q.id===r.id);return {...r,status:q&&JSON.stringify(q.options)===JSON.stringify(r.foundationOptions)?'resolved':'review-required'};});
 return {dataset,points,totals,issues,resolvedIssues,cleanup,biologyCoverage,biologyTierConcerns};
}
