'use strict';
// Offline only. Run tests and review the resulting data diff before packaging.
const fs=require('fs'),path=require('path'),crypto=require('crypto'),{boot,inventory,sets,diagnostics}=require('./mcq-quality.cjs');
const data=sets(inventory(boot()));let seed,positions;for(seed=0;seed<100000;seed++){positions=new Map([...data.variants.keys()].map(k=>[k,crypto.createHash('sha256').update(seed+'|'+k).digest()[0]%4]));if(!diagnostics(data,positions).length)break;}if(seed===100000)throw Error('No passing plan; review scope/tolerances rather than silently weakening checks.');
const orders={};for(const [k,q]of data.variants){const options=q.options.filter(o=>o!==q.answer);options.splice(positions.get(k),0,q.answer);orders[k]=options;}
fs.writeFileSync(path.join(__dirname,'../mcq-option-order-data.js'),"'use strict';\n// Stored presentation orders; generated offline with seed "+seed+". No runtime randomness.\nconst MCQ_OPTION_ORDERS="+JSON.stringify(orders,null,2)+';\n');console.log(`Stored ${data.variants.size} variant orders; seed ${seed}; ${data.groups.length} groups and ${data.sequences.length} sequences pass. No curriculum fields changed.`);
