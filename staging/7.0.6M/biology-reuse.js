'use strict';
// Build 7.0.5O: explicit Biology-only reuse metadata. No new curriculum text.
const BIOLOGY_STANDALONE_REPAIRS = {
  "build4-0": {
    "section": "Inside a cell",
    "tier": "both"
  },
  "bio2-ribosome": {
    "section": "Inside a cell",
    "tier": "both"
  },
  "build4-1": {
    "section": "Pathogens and transmission",
    "tier": "both"
  },
  "bio2-transmission": {
    "section": "Pathogens and transmission",
    "tier": "both"
  },
  "aqa-micro": {
    "section": "Microscopes and scale",
    "tier": "both"
  },
  "bio2-micro": {
    "section": "Microscopes and scale",
    "tier": "both"
  },
  "aqa-drawing": {
    "section": "Your board \u00b7 microscopy",
    "tier": "both"
  },
  "bio2-bacteria": {
    "section": "Bacteria and specialised cells",
    "tier": "both"
  },
  "bio2-osmosis": {
    "section": "Diffusion and osmosis",
    "tier": "both"
  },
  "bio2-osmosis-percent": {
    "section": "Diffusion and osmosis",
    "tier": "both"
  },
  "bio2-active": {
    "section": "Active transport and exchange",
    "tier": "both"
  },
  "bio2-surface": {
    "section": "Active transport and exchange",
    "tier": "both"
  },
  "bio2-mitosis": {
    "section": "Division and stem cells",
    "tier": "both"
  },
  "bio2-stem": {
    "section": "Division and stem cells",
    "tier": "both"
  },
  "bio2-lipase": {
    "section": "Enzymes and digestion",
    "tier": "both"
  },
  "bio2-denature": {
    "section": "Enzymes and digestion",
    "tier": "both"
  },
  "bio2-bile": {
    "section": "Bile and the digestive system",
    "tier": "both"
  },
  "bio2-villi": {
    "section": "From cells to organ systems",
    "tier": "both"
  },
  "bio2-valve": {
    "section": "The heart and blood",
    "tier": "both"
  },
  "bio2-plant-transport": {
    "section": "Transport in plants",
    "tier": "both"
  },
  "bio2-transpiration": {
    "section": "Transport in plants",
    "tier": "both"
  },
  "bio2-heart-risk": {
    "section": "Gas exchange and health",
    "tier": "both"
  },
  "bio2-virus": {
    "section": "Vaccination and antibiotics",
    "tier": "both"
  },
  "bio2-vaccine": {
    "section": "Vaccination and antibiotics",
    "tier": "both"
  },
  "bio2-resistance": {
    "section": "Vaccination and antibiotics",
    "tier": "both"
  },
  "bio2-placebo": {
    "section": "Developing medicines",
    "tier": "both"
  },
  "bio2-double-blind": {
    "section": "Developing medicines",
    "tier": "both"
  },
  "bio2-trial-percent": {
    "section": "Interpreting evidence",
    "tier": "both"
  },
  "bio2-photo-gas": {
    "section": "Photosynthesis",
    "tier": "both"
  },
  "bio2-glucose-use": {
    "section": "Photosynthesis",
    "tier": "both"
  },
  "bio2-night": {
    "section": "Aerobic respiration",
    "tier": "both"
  },
  "bio2-limit": {
    "section": "Limiting factors",
    "tier": "higher"
  },
  "bio2-rate": {
    "section": "Measuring a biological rate",
    "tier": "both"
  },
  "bio2-bubbles": {
    "section": "Measuring a biological rate",
    "tier": "both"
  },
  "bio2-anaerobic": {
    "section": "Anaerobic respiration",
    "tier": "both"
  },
  "bio2-ferment": {
    "section": "Anaerobic respiration",
    "tier": "both"
  },
  "bio2-effector": {
    "section": "Keeping conditions stable",
    "tier": "both"
  },
  "bio2-reflex": {
    "section": "Reflexes and the nervous system",
    "tier": "both"
  },
  "bio2-synapse": {
    "section": "Reflexes and the nervous system",
    "tier": "both"
  },
  "bio2-insulin": {
    "section": "Blood glucose",
    "tier": "both"
  },
  "bio2-diabetes": {
    "section": "Blood glucose",
    "tier": "both"
  },
  "bio2-signals": {
    "section": "The endocrine system",
    "tier": "both"
  },
  "bio2-reaction": {
    "section": "Reaction-time investigations",
    "tier": "both"
  },
  "bio2-allele": {
    "section": "DNA, genes and chromosomes",
    "tier": "both"
  },
  "bio2-cross": {
    "section": "Genetic crosses",
    "tier": "both"
  },
  "bio2-probability": {
    "section": "Genetic crosses",
    "tier": "both"
  },
  "bio2-meiosis": {
    "section": "Sexual and asexual reproduction",
    "tier": "both"
  },
  "bio2-twins": {
    "section": "Variation and mutation",
    "tier": "both"
  },
  "bio2-selection": {
    "section": "Selection and evolution",
    "tier": "both"
  },
  "bio2-breeding": {
    "section": "Selective breeding and genetic engineering",
    "tier": "both"
  },
  "bio2-fossils": {
    "section": "Evidence and classification",
    "tier": "both"
  },
  "bio2-abiotic": {
    "section": "Competition and adaptation",
    "tier": "both"
  },
  "bio2-quadrat": {
    "section": "Sampling and fieldwork",
    "tier": "both"
  },
  "bio2-population": {
    "section": "Sampling and fieldwork",
    "tier": "both"
  },
  "bio2-transect": {
    "section": "Sampling and fieldwork",
    "tier": "both"
  },
  "bio2-carbon": {
    "section": "Carbon, water and decay",
    "tier": "both"
  },
  "bio2-decay": {
    "section": "Carbon, water and decay",
    "tier": "both"
  },
  "bio2-biodiversity": {
    "section": "Evaluating interventions",
    "tier": "both"
  },
  "bio2-inverse-square": {
    "section": "Interacting limiting factors",
    "tier": "higher"
  },
  "bio2-feedback": {
    "section": "Hormonal feedback",
    "tier": "higher"
  },
  "bio2-ovulation": {
    "section": "Reproductive hormones",
    "tier": "higher"
  }
};
const BIOLOGY_TRILOGY_PRACTICAL_NUMBERS={microscopy:1,osmosis:2,food:3,enzymes:4,photosynthesis:5,reaction:6,fieldwork:7};
const biologyBeforeReuseLesson=activeLesson,biologyBeforeReuseQuestions=activeQuestions;
function biologyTrilogy(c){return c.board==='aqa'&&scienceCourse(c)==='trilogy';}
activeLesson=function(s,c,t){const lesson=biologyBeforeReuseLesson(s,c,t);if(s!=='Biology'||!biologyTrilogy(c)||!lesson)return lesson;return {...lesson,practicals:(lesson.practicals||[]).map(p=>BIOLOGY_TRILOGY_PRACTICAL_NUMBERS[p.id]?{...p,ref:'Required practical '+BIOLOGY_TRILOGY_PRACTICAL_NUMBERS[p.id],refs:{...p.refs,aqa:'Required practical '+BIOLOGY_TRILOGY_PRACTICAL_NUMBERS[p.id]}}:p)};};
activeQuestions=function(s,c=choice(s)){const items=biologyBeforeReuseQuestions(s,c);if(s!=='Biology'||!biologyTrilogy(c))return items;const existing=new Set(items.map(q=>q.id));const recovered=resolveQuestions('Biology','aqa','higher').filter(q=>BIOLOGY_STANDALONE_REPAIRS[q.id]&&!existing.has(q.id)&&tierAllows(BIOLOGY_STANDALONE_REPAIRS[q.id],c.tier)).map(q=>({...q,...BIOLOGY_STANDALONE_REPAIRS[q.id],board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}));return [...items,...recovered];};
// Only the shared gene-to-amino-acid demand is reused for Foundation.
const BIOLOGY_FOUNDATION_VARIANTS={
 // 7.0.5P: shared hormone-role question; replace only non-Foundation distractors.
 "aqa-bio-step-homeostasis-response-3-0":{"tier": "both", "source": {"q": "Which hormone triggers ovulation?", "answer": "LH", "explain": "FSH matures an egg; LH triggers ovulation; oestrogen and progesterone control the uterine lining.", "options": ["ADH", "Insulin", "Glucagon", "LH"]}, "foundation": {"options": ["FSH", "Insulin", "Oestrogen", "LH"]}},
 'aqa-bio-step-inheritance-8-0':{tier:'both',source:{"q": "What does the order of DNA bases help determine?", "answer": "Amino-acid sequence", "explain": "The order of DNA bases codes for amino acids; amino-acid order affects protein shape.", "options": ["Amino-acid sequence", "Only body temperature", "Food-chain direction", "The size of every organ"]},foundation:{explain:'The order of DNA bases codes for amino acids.'}}
};
// References into existing activities. Values are read from their original source objects.
function biologySupportInventory(){
 const rows=[];
 const add=(key,label,value,refs)=>{if(value)rows.push({id:'Biology|support|'+key,subject:'Biology',kind:'support',tier:'both',label,refs,fingerprint:auditFingerprint(JSON.stringify(value)),studentVisible:true});};
 if(typeof EQUATION_TRAINER!=='undefined')for(const [name,refs]of [['Magnification',['4.1.1.5','RP01']],['Rate',['4.4.1.2','RP05']],['Percentage',['4.6.1.4']],['Percentage change',['4.4.2.2']]])add('equation-'+name,'Learning Lab equation: '+name,EQUATION_TRAINER.find(x=>x[0]==='Biology'&&x[2]===name),refs);
 if(typeof PRACTICAL_SIM!=='undefined')for(const [name,refs]of [['Microscopy',['RP01']],['Osmosis',['RP02']],['Photosynthesis',['RP05']]])add('practical-'+name,'Learning Lab practical design: '+name,PRACTICAL_SIM.find(x=>x.s==='Biology'&&x.title===name),refs);
 if(typeof SPOT_MISTAKES!=='undefined')add('insulin-glycogen','Learning Lab misconception: insulin and glycogen storage',SPOT_MISTAKES.find(x=>x.s==='Biology'&&x.claim.includes('Insulin')),['4.5.3.2']);
 if(typeof LAB_DATA!=='undefined')add('enzyme-graph','Learning Lab enzyme-temperature graph',LAB_DATA.Biology,['4.2.2.1']);
 if(typeof BIO_DIAGRAMS!=='undefined')for(const [id,refs]of [['animal-cell',['4.1.1.2']],['bacterium',['4.1.1.1','4.1.1.2']],['osmosis',['4.1.3.2','RP02']],['organisation',['4.2.1']],['immunity',['4.3.1.6','4.3.1.7']],['photosynthesis',['4.4.1.1']],['reflex',['4.5.2']],['dna',['4.1.2.1','4.6.1.3']],['food-chain',['4.7.2.1']],['leaf-tissues',['4.2.3.1']],['hormone-pathway',['4.5.3.1']],['sex-inheritance',['4.6.1.6']]])add('diagram-'+id,'Existing revision diagram: '+id,Object.values(BIO_DIAGRAMS).flat().find(x=>x.id===id),refs);
 return rows;
}
