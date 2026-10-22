/* Build 6.7: six additional varied questions for every mapped AQA Biology subsection. */
const BIOLOGY_DEEP_QUESTIONS=[];
function stableIndex(text,length){let n=0;for(const ch of text)n=(n*31+ch.charCodeAt(0))>>>0;return length?n%length:0;}
function rotatedOptions(answer,distractors,key){const pool=[answer,...distractors.filter(x=>x&&x!==answer)].slice(0,4);while(pool.length<4)pool.push(['A different process','An unrelated structure','No biological effect'][pool.length-1]);const shift=stableIndex(key,pool.length);return [...pool.slice(shift),...pool.slice(0,shift)];}
for(const [topic,sectionMap] of Object.entries(BIOLOGY_CARD_DATA)){
 const entries=Object.entries(sectionMap);
 for(const [title,card] of entries){
  const [back,,labels,keywords,tip]=card,worked=BIOLOGY_WORKED[topic]?.[title],tier=resolveLesson('Biology','aqa',topic,'higher')?.sections?.find(x=>x.title===title)?.tier||'both';
  const other=entries.filter(x=>x[0]!==title),summaryDistractors=other.slice(stableIndex(title,Math.max(1,other.length))).concat(other).slice(0,3).map(x=>x[1][0]);
  const term=keywords?.[0]||labels?.[0]||title,termDistractors=other.flatMap(x=>x[1][3]||[]).filter(Boolean).slice(0,3);
  const slug=(topic+'-'+title).toLowerCase().replace(/[^a-z0-9]+/g,'-');
  const base={subject:'Biology',topic,section:title,tier,course:'trilogy'};
  BIOLOGY_DEEP_QUESTIONS.push(
   {...base,id:'bio-deep-'+slug+'-summary',type:'mcq',q:`Which statement best summarises “${title}”?`,answer:back,options:rotatedOptions(back,summaryDistractors,slug+'summary'),explain:`The best summary is: ${back}`,level:1,marks:1,style:'Concept check'},
   {...base,id:'bio-deep-'+slug+'-keyword',type:'mcq',q:`Which key term is most closely linked to “${title}”?`,answer:term,options:rotatedOptions(term,termDistractors,slug+'keyword'),explain:`${term} is a key term for this lesson step. A strong answer also explains what it means in context.`,level:1,marks:1,style:'Vocabulary in context'},
   {...base,id:'bio-deep-'+slug+'-explain',type:'writing',q:`Explain “${title}” in two linked sentences.`,answer:back,explain:`Use the key words ${(keywords||[]).join(' and ')||term}, then link the process or structure to its effect.`,level:2,marks:3,style:'Explain and connect'},
   {...base,id:'bio-deep-'+slug+'-justify',type:'writing',q:worked?`${worked.prompt} A student answers: “${worked.answer}” Explain why that answer is correct.`:`A student gives this answer about ${title}: “${back}” Justify it using biological reasoning.`,answer:worked?worked.steps.join(' '):back,explain:'A strong justification states the fact, gives the biological reason and links it to the situation.',level:2,marks:3,style:'Apply and justify'},
   {...base,id:'bio-deep-'+slug+'-improve',type:'writing',q:`A student writes only “${term}”. Improve this into a complete answer about ${title}.`,answer:back,explain:`Naming a keyword alone is not enough. ${tip}`,level:2,marks:3,style:'Improve a weak answer'},
   {...base,id:'bio-deep-'+slug+'-grade9',type:'writing',q:`Write a Grade 8/9 response for this focus: ${tip}`,answer:back+(worked?` Example application: ${worked.answer}`:''),explain:'Top responses use precise terminology, a linked cause-and-effect chain and a relevant application or example.',level:3,marks:4,style:'Grade 8/9 response building'}
  );
 }
}
for(const q of BIOLOGY_DEEP_QUESTIONS)PACKS.Biology.aqa.questions.push(q);
