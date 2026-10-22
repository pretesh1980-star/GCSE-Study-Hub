'use strict';
const coverageEscape=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const coverageLabels={mapped:'Mapped/available',partial:'Starter/partial',missing:'Missing'};
const coverageRows=coverageReport();
function coverageOptions(id,values,label){document.getElementById(id).innerHTML='<option value="">All</option>'+values.map(v=>`<option value="${coverageEscape(v)}">${coverageEscape(label(v))}</option>`).join('');}
coverageOptions('subject',Object.keys(PACKS),v=>v);
coverageOptions('board',Object.keys(BOARD_NAMES),v=>BOARD_NAMES[v]);
coverageOptions('tier',['foundation','higher','unsure','none'],v=>v==='none'?'Untiered':v==='unsure'?'Not sure yet':v);
coverageOptions('course',['none',...Object.keys(SCIENCE_COURSES)],v=>v==='none'?'Not applicable':SCIENCE_COURSES[v].name);
coverageOptions('status',Object.keys(coverageLabels),v=>coverageLabels[v]);
function renderCoverage(){
 const rows=coverageRows.filter(row=>['subject','board','tier','course','status'].every(key=>!document.getElementById(key).value||(key==='status'?row.counts[document.getElementById(key).value]>0:row[key]===document.getElementById(key).value)));
 document.getElementById('summary').textContent=`${rows.length} pathways · ${rows.filter(r=>r.status==='mapped').length} mapped/available · ${rows.filter(r=>r.status==='partial').length} starter/partial · ${rows.filter(r=>r.status==='missing').length} missing. Counts overlap across tiers and courses; do not sum them as unique content.`;
 document.getElementById('results').innerHTML=rows.length?rows.map(row=>`<details><summary><strong>${coverageEscape(row.subject)} · ${coverageEscape(BOARD_NAMES[row.board])}</strong> · ${coverageEscape(row.tier)} · ${coverageEscape(row.course==='none'?'Course not applicable':SCIENCE_COURSES[row.course].name)} <span class="${row.status}">${coverageLabels[row.status]}</span></summary><p>Qualification: ${coverageEscape(row.qualification)}. ${row.topics} topics: ${row.counts.mapped} mapped/available, ${row.counts.partial} starter/partial, ${row.counts.missing} missing lessons. ${row.questions} practice questions; ${row.missingPractice} topics without practice.</p><p>${coverageEscape(row.note)}</p>${row.gaps.length?`<ul>${row.gaps.map(g=>`<li>${coverageEscape(g)}</li>`).join('')}</ul>`:''}<div class="table-wrap"><table><thead><tr><th>Topic / mapping</th><th>Classification</th><th>Sections</th><th>Questions</th><th>Practical entries</th><th>Gaps / limitations</th></tr></thead><tbody>${row.details.map(t=>`<tr><td>${coverageEscape(t.id)}<br><small>${coverageEscape(t.unit)}</small></td><td>${coverageLabels[t.status]}</td><td>${t.sections}</td><td>${t.questions}</td><td>${t.practicals}</td><td>${t.reasons.map(coverageEscape).join('; ')||'Mapped lesson and practice present; full specification coverage unverified'}</td></tr>`).join('')}</tbody></table></div></details>`).join(''):'<p>No pathways match these filters.</p>';
}
for(const key of ['subject','board','tier','course','status'])document.getElementById(key).addEventListener('change',renderCoverage);
renderCoverage();
