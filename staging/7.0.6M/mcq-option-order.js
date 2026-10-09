 'use strict';
function applicableMCQ(q){return typeof q.answer==='string'&&Array.isArray(q.options)&&q.options.length===4&&q.options.every(o=>typeof o==='string')&&new Set(q.options).size===4&&q.options.filter(o=>o===q.answer).length===1;}
function mcqVariantKey(q){return JSON.stringify([q.subject,q.id,q.q,q.answer,[...q.options].sort(),q.explain??null]);}
function prepareMCQ(q){if(!applicableMCQ(q))return q;const order=MCQ_OPTION_ORDERS[mcqVariantKey(q)];if(!Array.isArray(order)||order.length!==4||new Set(order).size!==4||!order.every(o=>q.options.includes(o)))return q;return order.every((o,i)=>o===q.options[i])?q:{...q,options:[...order]};}
