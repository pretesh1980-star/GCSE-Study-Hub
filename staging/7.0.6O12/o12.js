'use strict';
const $=id=>document.getElementById(id),qs=O12.questions;
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let tier,attempt,blocked=false,lastRaw=null,pendingRaw=null;
const key=()=>`studyhub_o12_phase1c_v1_${tier}`;
function valid(a,t){return a&&a.version===1&&a.tier===t&&Number.isFinite(a.started)&&a.started>0&&Number.isInteger(a.index)&&a.index>=0&&a.index<qs.length&&a.answers&&typeof a.answers==='object'&&!Array.isArray(a.answers)&&a.review&&typeof a.review==='object'&&qs.every(q=>(a.answers[q.id]===undefined||typeof a.answers[q.id]==='string'&&(q.mode!=='auto'||q['options'+t].includes(a.answers[q.id])))&&(a.review[q.id]===undefined||q.mode==='review'&&Number.isInteger(a.review[q.id])&&a.review[q.id]>=0&&a.review[q.id]<=q.marks))&&(!a.submitted||Number.isFinite(a.submitted));}
function notice(msg,error=false){$('save').textContent=msg;$('save').className=error?'warning':'';}
// A save is confirmed only after writing and reading back the same snapshot.
// pendingRaw lets a retry recognise our own write if its verification read failed.
function storageWarning(error,reading=false){
 const full=error?.name==='QuotaExceededError'||error?.code===22||error?.code===1014;
 notice((full?'Browser storage is full. ':reading?'Browser storage cannot be read or checked. ':'Browser storage is blocked or unavailable. ')+'Your latest changes are not confirmed saved. Keep this page open and download a recovery file before leaving.',true);
}
function conflict(){blocked=true;notice('This paper changed in another tab. This tab is read-only. Download a recovery file to keep these answers, then reload to see the latest saved paper.',true);render();return false;}
function persist(){
 if(blocked)return false;
 let current;
 try{current=localStorage.getItem(key());}catch(error){storageWarning(error,true);return false;}
 if(current!==lastRaw){
  if(pendingRaw!==null&&current===pendingRaw){lastRaw=current;pendingRaw=null;}
  else return conflict();
 }
 const raw=JSON.stringify(attempt);
 try{localStorage.setItem(key(),raw);pendingRaw=raw;}catch(error){storageWarning(error);return false;}
 let verified;
 try{verified=localStorage.getItem(key());}catch(error){storageWarning(error,true);return false;}
 if(verified!==raw){
  pendingRaw=null;
  if(verified!==lastRaw)return conflict();
  notice('The browser did not keep your latest changes. Keep this page open and download a recovery file before leaving.',true);return false;
 }
 lastRaw=raw;pendingRaw=null;
 notice('Saved on this browser · '+new Date().toLocaleTimeString());return true;
}
function load(){
 tier=$('tier').value;blocked=false;pendingRaw=null;let a;
 try{lastRaw=localStorage.getItem(key());}catch{
  blocked=true;notice('Browser storage is blocked or unavailable. O12 cannot check for an existing paper. Nothing has been overwritten. Once storage is available, choose Start / resume again or restore a recovery file.',true);return;
 }
 if(lastRaw!==null){
  try{a=JSON.parse(lastRaw);if(!valid(a,tier))throw Error();}catch{
   blocked=true;notice('The saved paper has an invalid or unsupported format. It has not been overwritten. Restore a valid recovery file to continue.',true);return;
  }
 }
 attempt=a||{version:1,tier,started:Date.now(),index:0,answers:{},review:{},submitted:null};
 $('paper').hidden=false;$('tier').disabled=true;$('start').disabled=true;persist();render();
}
function answered(q){return !!attempt.answers[q.id]?.trim();}
function visual(id){const v=O12.visuals[id];return `<figure><figcaption>${escapeHTML(v.title)}</figcaption><img src="o12-approved/visuals/${id}.svg" alt="${escapeHTML(v.alt)}">${v.tableHeaders?`<table><caption>${escapeHTML(v.title)} · text data</caption><thead><tr>${v.tableHeaders.map(x=>`<th scope="col">${escapeHTML(x)}</th>`).join('')}</tr></thead><tbody>${v.tableRows.map(r=>`<tr>${r.map((x,i)=>`<${i?'td':'th scope="row"'}>${escapeHTML(x)}</${i?'td':'th'}>`).join('')}</tr>`).join('')}</tbody></table>`:`<details><summary>Text alternative</summary><p>${escapeHTML(v.alt)}</p></details>`}</figure>`;}
function render(){const q=qs[attempt.index],locked=!!attempt.submitted||blocked;
$('paper-title').textContent=tier+' A · 40 marks';$('progress').textContent=qs.filter(answered).length+' / 24 parts answered · 7 question groups';$('bar').value=qs.filter(answered).length;
$('nav').innerHTML=qs.map((x,i)=>`<button data-index="${i}" ${i===attempt.index?'aria-current="step"':''} aria-label="Question ${x.id}${answered(x)?', answered':', unanswered'}">${x.id}${answered(x)?' ✓':''}</button>`).join('');
$('nav').querySelectorAll('button').forEach(b=>b.onclick=()=>move(Number(b.dataset.index)));
$('question').innerHTML=`<h2>Question ${q.id} · ${q.marks} mark${q.marks===1?'':'s'}</h2><p id="prompt">${escapeHTML(q[tier])}</p>${q['visualIds'+tier].map(visual).join('')}${q.mode==='auto'?`<fieldset ${locked?'disabled':''}><legend>Choose one answer for ${q.id}</legend>${q['options'+tier].map((o,i)=>`<label class="option"><input type="radio" name="answer" value="${i}" ${attempt.answers[q.id]===o?'checked':''}> ${escapeHTML(o)}</label>`).join('')}<button id="clear" type="button">Clear selection</button></fieldset>`:`<label for="answer">Your answer and working for ${q.id}</label><textarea id="answer" ${locked?'readonly':''}>${escapeHTML(attempt.answers[q.id]||'')}</textarea><small>Human/self-reviewed · no automatic written-answer grading.</small>`}`;
if(q.mode==='auto'){$('question').querySelectorAll('input').forEach(el=>el.onchange=()=>{attempt.answers[q.id]=q['options'+tier][Number(el.value)];persist();updateProgress();});$('clear').onclick=()=>{delete attempt.answers[q.id];persist();render();};}else $('answer').oninput=e=>{if(!locked){attempt.answers[q.id]=e.target.value;persist();updateProgress();}};
$('prev').disabled=attempt.index===0;$('next').disabled=attempt.index===23;$('submit').disabled=locked;$('results').hidden=!attempt.submitted;if(attempt.submitted)results();tick();}
function updateProgress(){const n=qs.filter(answered).length;$('progress').textContent=n+' / 24 parts answered · 7 question groups';$('bar').value=n;const b=$('nav').querySelector(`[data-index="${attempt.index}"]`),q=qs[attempt.index];b.textContent=q.id+(answered(q)?' ✓':'');b.setAttribute('aria-label',`Question ${q.id}, ${answered(q)?'answered':'unanswered'}`);}
function move(i){attempt.index=i;persist();render();$('question').focus();}
function tick(){if(!attempt)return;const end=attempt.submitted||Date.now(),secs=Math.max(0,2700-Math.floor((end-attempt.started)/1000));$('timer').textContent=attempt.submitted?'Submitted · answers locked':secs?`Advisory time remaining: ${Math.floor(secs/60)}:${String(secs%60).padStart(2,'0')} · elapsed time includes time away`:'45 minutes reached — you may continue and submit when ready.';}
function score(){return qs.filter(q=>q.mode==='auto').reduce((s,q)=>s+(attempt.answers[q.id]===q['correctOption'+tier]?q.marks:0),0);}
function results(){const reviewed=qs.filter(q=>q.mode==='review'),done=reviewed.filter(q=>Number.isInteger(attempt.review[q.id])),sum=done.reduce((s,q)=>s+attempt.review[q.id],0);
$('results').innerHTML=`<h2>Your paper review · ${tier} A</h2><p>You have finished the paper. Use the feedback to find one thing you understand well and one thing to revisit.</p><p>Automatically checked answers: <b>${score()} / 11</b>.</p><p>Written answers reviewed: <b>${done.length} / ${reviewed.length} parts</b>. ${done.length?`Marks from those reviewed answers: <b>${sum} / ${done.reduce((s,q)=>s+q.marks,0)}</b>.`:'Written-answer marks are pending review (29 marks available).'}</p><p>${done.length===reviewed.length?`Provisional self/teacher-reviewed total: ${score()+sum} / 40.`:'Overall total pending human review. Unreviewed answers are not treated as zero.'} This is not a GCSE grade or lesson mastery score.</p><p>Use the approved guidance to judge each whole response, including method credit and valid alternatives. Marks entered here may be self-assessed or teacher-reviewed; the app does not verify who entered them. Ask a teacher to check any uncertain marks.</p>${qs.map(q=>`<section><h3>${q.id} · ${escapeHTML(q.objective)}</h3><p>Your answer: ${escapeHTML(attempt.answers[q.id]||'(blank)')}</p>${q.mode==='auto'?`<p>${attempt.answers[q.id]===q['correctOption'+tier]?'Correct':'Not credited'} · ${escapeHTML(q['marking'+tier])}</p>`:`<pre>${escapeHTML(q['guide'+tier])}</pre><label>Self/teacher-reviewed mark for ${q.id} <select data-review="${q.id}" ${blocked?'disabled':''}><option value="">Pending review</option>${Array.from({length:q.marks+1},(_,i)=>`<option value="${i}" ${attempt.review[q.id]===i?'selected':''}>${i} / ${q.marks}</option>`).join('')}</select></label>`}<p>Revise: ${q.lesson.split('/').map(id=>`<a href="index.html?o12lesson=${id}" target="_blank" rel="noopener">${id} lesson</a>`).join(' · ')}</p></section>`).join('')}<p><a href="o12-approved/${tier}-A-Marking-Guide.md">Full approved marking guide</a></p>`;
$('results').querySelectorAll('select').forEach(el=>el.onchange=()=>{if(el.value==='')delete attempt.review[el.dataset.review];else attempt.review[el.dataset.review]=Number(el.value);persist();results();});}
$('start').onclick=load;$('prev').onclick=()=>move(attempt.index-1);$('next').onclick=()=>move(attempt.index+1);
$('submit').onclick=()=>{$('confirm').hidden=false;$('missing').textContent=qs.filter(q=>!answered(q)).length+' unanswered parts.';$('confirm-submit').focus();};$('cancel-submit').onclick=()=>{$('confirm').hidden=true;$('submit').focus();};
$('confirm-submit').onclick=()=>{if(blocked||attempt.submitted)return;attempt.submitted=Date.now();persist();$('confirm').hidden=true;render();$('results').tabIndex=-1;$('results').focus();};
$('export').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify(attempt,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download=`O12-${tier}-recovery.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('import').onchange=async e=>{
 try{
  const f=e.target.files[0];if(!f)return;
  let a;
  try{if(f.size>2000000)throw Error();a=JSON.parse(await f.text());if(!['Foundation','Higher'].includes(a.tier)||!valid(a,a.tier))throw Error();}
  catch{notice('This recovery file is invalid or unsupported. No saved papers or lesson records were changed.',true);return;}
  const restoreKey=`studyhub_o12_phase1c_v1_${a.tier}`;let previous;
  try{previous=localStorage.getItem(restoreKey);}catch{notice('Browser storage is blocked or unavailable. Recovery cannot safely check the existing paper. Nothing has been overwritten. Keep the recovery file and try again when storage is available.',true);return;}
  if(!confirm('Restore this recovery file? It will replace the saved O12 '+a.tier+' paper in this browser.'))return;
  const raw=JSON.stringify(a);
  try{
   if(localStorage.getItem(restoreKey)!==previous){notice('The saved paper changed while you were restoring. No replacement was made. Check the latest paper before trying again.',true);return;}
  }catch{notice('Browser storage cannot be checked. Recovery has not replaced the saved paper. Keep the recovery file and try again when storage is available.',true);return;}
  try{localStorage.setItem(restoreKey,raw);}catch(error){
   notice((error?.name==='QuotaExceededError'||error?.code===22||error?.code===1014?'Browser storage is full. ':'Browser storage is blocked or unavailable. ')+'The recovery file could not be saved. Keep the file and try again when storage is available.',true);return;
  }
  try{if(localStorage.getItem(restoreKey)!==raw)throw Error();}
  catch{notice('Recovery could not be verified as saved. Keep the recovery file and try again when storage is available. This page has not reloaded.',true);return;}
  location.reload();
 }finally{e.target.value='';}
};
window.addEventListener('pagehide',()=>{if(attempt)persist();});document.addEventListener('visibilitychange',()=>{if(document.hidden&&attempt)persist();});window.addEventListener('storage',e=>{if(attempt&&e.key===key()&&e.newValue!==lastRaw){blocked=true;notice('Paper changed in another tab. Reload before continuing; this tab is read-only.',true);render();}});setInterval(tick,1000);
