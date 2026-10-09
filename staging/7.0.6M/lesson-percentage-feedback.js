/* Pure percentage-change feedback. No DOM, persistence or lesson-specific IDs.
 * record is returned as a copy; callers retain responsibility for transfer/evidence.
 * pair=true accepts starting mass followed by a percentage. */
function lessonPercentageParse(text,pair){const n='[+−-]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)';const match=String(text).trim().match(new RegExp(pair?'^('+n+')\\s*(?:g)?\\s*[,;]\\s*('+n+')\\s*%$':'^('+n+')\\s*%$'));if(!match)return null;const values=match.slice(1).map(x=>Number(x.replace('−','-')));return values.every(Number.isFinite)?{denominator:pair?values[0]:null,value:values[pair?1:0]}:null;}
function lessonPercentageNumber(n){return String(Number(n.toFixed(2)));}
function lessonPercentageSigned(n){return (n>0?'+':'')+lessonPercentageNumber(n);}
function lessonPercentageFeedback(q,text,pair,record){
 const r={...record},answer=lessonPercentageParse(text,pair);
 const delta=Number((q.final-q.initial).toFixed(6)),expected=delta/q.initial*100,gain=delta>0,sign=gain?'positive':'negative';
 if(!answer){r.invalid=true;r.correct=false;r.message=pair?'Write the starting mass, then your percentage, like 5, −12%.':'Write one percentage, like +12% or −12%.';}
 else{r.invalid=false;const denominatorOK=!pair||answer.denominator===q.initial;const valueOK=Math.abs(answer.value-expected)<=0.0050001;
 if(denominatorOK&&valueOK){r.correct=true;r.message=`Correct: ${lessonPercentageSigned(expected)}%. ${pair?'You used the initial mass as the denominator.':'The denominator is the initial mass.'} ${r.assisted?'This is assisted practice, not independent evidence. Complete a fresh transfer calculation without hints.':'This calculation was answered without hints; it does not award Study Hub mastery.'}`;}
 else{r.correct=false;r.wrong++;r.assisted=true;const wrongSign=answer.value!==0&&Math.sign(answer.value)!==Math.sign(delta);const finalDenominator=!denominatorOK||Math.abs(answer.value-delta/q.final*100)<0.06;const missingHundred=Math.abs(answer.value-delta/q.initial)<0.005;const mistake=wrongSign?`The mass ${gain?'increased':'decreased'}, so the percentage must be ${sign}.`:finalDenominator?'Use the initial mass as the denominator, not the final mass.':missingHundred?'Convert the fraction to a percentage by multiplying by 100.':`You have ${answer.value===0?'not yet shown the change': 'the '+sign+' direction'}. Check the change and calculation.`;
 if(r.wrong===1)r.message=`Hint 1: ${mistake} What is final mass minus initial mass?`;
 else if(r.wrong===2)r.message=`Hint 2: ${mistake} The change is ${q.final.toFixed(1)} − ${q.initial.toFixed(1)} = ${lessonPercentageSigned(delta)} g. Divide by the starting mass, ${q.initial.toFixed(1)} g, then multiply by 100. Try again.`;
 else{r.revealed=true;r.message=`Worked explanation: (${q.final.toFixed(1)} − ${q.initial.toFixed(1)}) ÷ ${q.initial.toFixed(1)} × 100 = ${lessonPercentageSigned(expected)}%. The ${gain?'gain':'loss'} gives a ${sign} result. This revealed answer cannot count as independent evidence. Enter it to finish this practice, then answer a fresh transfer calculation.`;}
 }}
 return r;
}
