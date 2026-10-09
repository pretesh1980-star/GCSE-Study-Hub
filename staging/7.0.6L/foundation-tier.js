'use strict';
const FOUNDATION_METADATA=new Map(SPEC_AUDIT_DATA.contentMetadata.map(m=>[m.id,m]));
function foundationPath(s,c=choice(s)){return ['Biology','Chemistry','Physics'].includes(s)&&c.board==='aqa'&&scienceCourse(c)==='trilogy'&&['foundation','unsure'].includes(c.tier);}
function foundationCurrent(id,text){const m=FOUNDATION_METADATA.get(id);return m&&auditFingerprint(text)===m.fingerprint?m:null;}
const originalActiveLesson=activeLesson,originalActiveQuestions=activeQuestions;
activeLesson=function(s,c,t){
 if(!foundationPath(s,c))return originalActiveLesson(s,c,t);
 const source=originalActiveLesson(s,{...c,tier:'higher'},t);if(!source)return null;
 const sections=(source.sections||[]).flatMap(section=>{
  const id=[s,t,section.title].join('|'),m=foundationCurrent(id,section.body||'');if(!m)return [];
  if(m.tier==='both')return [{...section,tier:'both',foundationAudited:true}];
  const split=FOUNDATION_SPLITS[id];
  return m.tier==='mixed'&&split?.sourceFingerprint===m.fingerprint?[{...section,...split,foundationAudited:true,foundationSplit:true}]:[];
 });
 const practicals=(source.practicals||[]).filter(practical=>foundationCurrent(s+'|practical|'+practical.id,['title','aim','method','controls','example','pitfall'].map(k=>String(practical[k]||'')).join('\n'))?.tier==='both').map(practical=>({...practical,tier:'both'}));
 return {...source,practicals,sections,learn:sections.map(x=>x.body).join('\n\n'),key:sections.slice(0,5).map(x=>x.displayTitle||x.title),visual:sections.map(x=>x.displayTitle||x.title).join(' → '),challenge:''};
};
activeQuestions=function(s,c=choice(s)){
 const targeted=s==='Biology'&&c.board==='aqa'&&scienceCourse(c)==='trilogy';
 if(!foundationPath(s,c))return originalActiveQuestions(s,c).map(q=>targeted&&REVIEWED_QUESTION_TIERS[q.id]?{...q,tier:REVIEWED_QUESTION_TIERS[q.id].tier}:q);
 return originalActiveQuestions(s,{...c,tier:'higher'}).filter(q=>{
  const m=foundationCurrent(q.id,['q','answer','explain'].map(k=>String(q[k]||'')).join('\n'));
  const review=(typeof BIOLOGY_FOUNDATION_VARIANTS!=='undefined'&&BIOLOGY_FOUNDATION_VARIANTS[q.id])||REVIEWED_QUESTION_TIERS[q.id];
  if(review)return m&&review.tier==='both'&&reviewedQuestionCurrent(q,review);
  return m?.tier==='both'&&!FOUNDATION_QUESTION_HOLDS[q.id];
 }).map(q=>({...q,...((typeof BIOLOGY_FOUNDATION_VARIANTS!=='undefined'&&BIOLOGY_FOUNDATION_VARIANTS[q.id]?.foundation)||REVIEWED_QUESTION_TIERS[q.id]?.foundation||{}),tier:'both',tierContext:c.tier}));
};
function foundationCards(s,c,t,l,sections){
 // Cards use only audited lesson text: never inherit unaudited recall/visual/feedback fields.
 return sections.map(section=>({front:section.title,displayFront:section.displayTitle||section.title,back:section.body,keywords:[],tip:'',tier:'both',foundationAudited:true,sourceId:[s,t,section.title].join('|')}));
}
function foundationWorkedAllowed(s,c,t,section){
 if(!foundationPath(s,c))return true;
 const id=[s,t,section.title].join('|');
 // Worked examples were not individually audited. Retain only reviewed section examples
 // whose question-derived source has no newly discovered Higher feedback hold.
 return !section.foundationSplit&&FOUNDATION_METADATA.get(id)?.tier==='both'&&!['Blood glucose','Reproductive hormones'].includes(section.title);
}
function foundationCleanupReport(){
 const originalIssues=SPEC_AUDIT_DATA.contentMetadata.filter(m=>m.declaredTier==='unassigned'||m.tier!==m.declaredTier);
 const resolved=originalIssues.filter(m=>m.tier!=='mixed'&&m.tier!=='unreviewed'||m.kind==='lesson'&&FOUNDATION_SPLITS[m.id]);
 return {baseline:originalIssues.length,resolved:resolved.length+Object.keys(REVIEWED_QUESTION_TIERS).length,unresolved:originalIssues.length-resolved.length+Object.keys(FOUNDATION_QUESTION_HOLDS).length-Object.keys(REVIEWED_QUESTION_TIERS).length,newlyFound:Object.keys(FOUNDATION_QUESTION_HOLDS).length,splitLessons:Object.keys(FOUNDATION_SPLITS).length};
}

function reviewedQuestionCurrent(q,review){return ['q','answer','explain','options'].every(k=>JSON.stringify(q[k]??null)===JSON.stringify(review.source[k]));}
