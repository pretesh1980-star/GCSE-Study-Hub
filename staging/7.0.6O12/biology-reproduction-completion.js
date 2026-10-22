'use strict';
// 7.0.5Z targeted reproductive curriculum; existing tier architecture retained.
const REPRODUCTION_EXTENSIONS={
  "Reproductive hormones": "At puberty reproductive hormones cause secondary sex characteristics to develop, such as changes in body shape, body hair and voice. Oestrogen is the main female reproductive hormone, produced by the ovaries. Testosterone is the main male reproductive hormone, produced by the testes, and stimulates sperm production. From puberty eggs begin to mature and one is released approximately every 28 days; this release is ovulation. Cycle length varies: 28 days is a model, not a rule for every person.\nFSH from the pituitary causes an egg to mature in the ovary. LH from the pituitary stimulates egg release. Oestrogen and progesterone from the ovary help maintain the uterus lining. Distinguish maturation (development of the egg), ovulation (release), fertilisation (fusion of gametes) and implantation (an embryo attaching to the uterus lining). The uterus is not where eggs are produced. These hormone roles are shared content; the detailed interaction model and hormone-level graph are in the Higher section.",
  "Reproduction and hormones": "Contraception controls fertility using hormonal or non-hormonal methods. In the specification model, oral contraceptive hormones inhibit FSH production so no eggs mature. Progesterone-based contraception inhibits maturation/release of eggs. The specification groups injections, implants and skin patches as hormone-delivery methods; their duration depends on the method. Real contraceptives use progestogens: the patch contains oestrogen as well as progestogen and is changed weekly, so do not infer that every listed method is progesterone-only or works for months from a single application.\nBarrier methods such as condoms and diaphragms prevent sperm reaching an egg. Spermicidal agents kill or disable sperm. The specification describes intrauterine devices as preventing implantation or releasing a hormone; distinguish that exam model from the fuller mechanism: copper devices also prevent fertilisation, and hormone-releasing systems release progestogen. These devices are placed in the uterus, not used as an external barrier. Avoid claiming that all coils contain hormones or act only after fertilisation.\nAbstaining from intercourse when an egg may be in the oviduct aims to avoid fertilisation; estimating fertile times is uncertain because cycles vary. Surgical male or female sterilisation blocks the route of sperm or eggs; it is intended as a permanent method, not a way to change hormone levels or remove the need for sperm and egg to meet.\nEvaluate methods using mechanism, correct/consistent use, duration, reversibility, possible unwanted effects, access, cost and personal preferences. A daily pill requires remembering doses; barriers must be used correctly each time; longer-acting methods reduce repeated-use demands but need professional provision; surgery involves a procedure and is unsuitable if future fertility is wanted. No method should be described as a universal best choice or guaranteed to work for everyone. Scientific evidence helps compare pregnancy prevention, but consent, beliefs, relationships, affordability and values also matter. Pregnancy prevention is distinct from protection against sexually transmitted infections. Fictional comparison data in practice tasks are not current clinical success rates or personal recommendations.",
  "Hormones, feedback and fertility": "Higher menstrual-cycle control: FSH from the pituitary stimulates follicle/egg maturation and oestrogen production. Oestrogen helps develop the uterus lining and inhibits FSH; a high oestrogen level stimulates an LH surge, which triggers ovulation. After ovulation, progesterone maintains the lining and inhibits FSH and LH. If pregnancy does not occur, progesterone and oestrogen fall and the lining breaks down; reduced inhibition allows FSH to rise towards the next cycle. The effect of oestrogen depends on the stage/level, so it is incorrect to say it always inhibits every hormone. Use the model graph to identify trends, peaks and sequence, then explain them with these roles. Relative units show each hormone's pattern, not equal concentrations across different hormones.\nHigher fertility treatment: a fertility drug containing FSH and LH can stimulate egg maturation and release, after which fertilisation may occur in the usual way. This is not automatically IVF. In IVF, FSH and LH stimulate maturation of several eggs; eggs are collected and fertilised with sperm in the laboratory. Fertilised eggs divide and develop into embryos. In the specification sequence one or two embryos, at the tiny-ball-of-cells stage, are transferred into the uterus. Transfer does not guarantee implantation or a live birth. Improvements in microscopy have enabled eggs and developing embryos to be observed and handled during IVF.\nTreatment can offer a chance of a genetically related child, but may be physically and emotionally stressful, may require repeated attempts and can be costly. Success is not guaranteed and success rates are not high in the specification account; do not attach an unsupported universal percentage. Multiple births increase risks for the mother and babies. Transferring more embryos is not automatically the safest or best choice. Patients and doctors may weigh chance of success, health risks, procedures, emotional demands and costs differently. Access/funding and decisions about unused embryos raise social and ethical questions; evidence informs but does not determine everyone's values. Use a clearly defined denominator when comparing success, such as live-birth cycles divided by all started cycles. Different patient groups and outcome definitions limit direct comparisons; pregnancy, implantation and live birth are not interchangeable measures."
};
const REPRODUCTION_QUESTIONS=[
  {
    "id": "aqa-reproduction-completion-q01",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Reproductive hormones",
    "specRefs": [
      "4.5.3.3"
    ],
    "q": "Explain the roles and sources of FSH, LH, oestrogen, progesterone and testosterone. Distinguish egg maturation from ovulation and explain what changes at puberty and why a 28-day cycle is only a model.",
    "answer": "Pituitary FSH stimulates egg maturation in the ovary; pituitary LH triggers release (ovulation). Ovarian oestrogen and progesterone maintain the uterus lining. Testes produce testosterone, which stimulates sperm production. Reproductive hormones cause secondary sex characteristics at puberty; eggs begin maturing and are released approximately every 28 days, with variation between people/cycles.",
    "explain": "Five criteria: FSH/source; LH/source and maturation versus release; ovarian hormones/lining; testosterone/source/sperm; puberty and variable cycle timing. Eggs develop in ovaries, not the uterus.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Reproduction and fertility practice"
  },
  {
    "id": "aqa-reproduction-completion-q02",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Reproduction and hormones",
    "specRefs": [
      "4.5.3.4"
    ],
    "q": "Explain how oral contraceptives and progesterone-based methods prevent pregnancy in the specification model. Compare a daily pill with an implant and correct the claim that every hormonal delivery method lasts for years after one use.",
    "answer": "Oral contraceptive hormones inhibit FSH so eggs do not mature. Progesterone-based methods inhibit egg maturation/release. A daily pill depends on regular use, while an implant supplies hormone over a longer period and needs professional provision. Durations differ; a patch is replaced regularly, not used once for years, and real patches contain oestrogen and progestogen.",
    "explain": "Four criteria: pill/FSH mechanism; maturation/release inhibition; practical pill/implant comparison; duration/formulation correction. This shared contraceptive mechanism is required without analysing the Higher menstrual-cycle feedback graph.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Reproduction and fertility practice"
  },
  {
    "id": "aqa-reproduction-completion-q03",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Reproduction and hormones",
    "specRefs": [
      "4.5.3.4"
    ],
    "q": "Compare condoms/diaphragms, spermicides, intrauterine devices, avoiding intercourse at fertile times and male/female sterilisation. Give each mechanism and one reason why the methods should not be treated as interchangeable.",
    "answer": "Condoms/diaphragms block sperm from reaching an egg; spermicides kill or disable sperm. The specification describes intrauterine devices as preventing implantation or releasing hormone; copper devices also prevent fertilisation and not all devices contain hormone. Avoiding intercourse when an egg may be in the oviduct aims to avoid fertilisation but timing varies. Sterilisation blocks sperm/egg routes and is intended to be permanent. Methods differ in correct-use demands, reversibility, access and suitability; they are not all hormone treatments.",
    "explain": "Five criteria: barriers; spermicide; intrauterine model with qualification; timing/uncertainty; surgical route/permanence and a justified comparison. Do not describe sterilisation as removal of all reproductive hormones.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Reproduction and fertility practice"
  },
  {
    "id": "aqa-reproduction-completion-q04",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Reproduction and hormones",
    "specRefs": [
      "4.5.3.4"
    ],
    "q": "Fictional study: method A has 8 pregnancies in 200 users and B has 6 in 300 over the same year. Calculate both pregnancy proportions and evaluate a claim that B must be the right choice for every person.",
    "answer": "A: 8/200 ×100 = 4%; B: 6/300 ×100 = 2%. B has the lower observed proportion, but different groups, adherence, uncertainty and study design affect comparison. Consider correct-use demands, unwanted effects, reversibility, access/cost, consent and personal values. Scientific results alone cannot establish a universally right choice; these fictional figures are not real method effectiveness rates.",
    "explain": "Four criteria: both calculations with denominators; correct observed comparison; evidence limitations; personal/social/ethical evaluation. Raw counts alone are misleading because group sizes differ.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Reproduction and fertility practice"
  },
  {
    "id": "aqa-reproduction-completion-q05",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Hormones, feedback and fertility",
    "specRefs": [
      "4.5.3.3"
    ],
    "q": "Higher: use the hormone graph/table to identify the LH peak, the preceding oestrogen rise and the later progesterone peak. Explain the FSH–oestrogen–LH sequence and what progesterone does after ovulation.",
    "answer": "In this model LH peaks on day 14, oestrogen peaks on day 13 and progesterone peaks on day 21. FSH stimulates egg maturation and oestrogen production; oestrogen inhibits FSH but high oestrogen stimulates an LH surge, triggering ovulation. Progesterone maintains the lining after ovulation and inhibits FSH/LH.",
    "explain": "Four criteria: graph peaks/order; FSH/oestrogen production; inhibition versus high-level LH stimulation; progesterone/lining and inhibition. Relative units compare patterns, not absolute hormone concentrations or an exact cycle for every person.",
    "marks": 4,
    "tier": "higher",
    "type": "writing",
    "level": 3,
    "style": "Reproduction and fertility practice",
    "visual": "reproduction-cycle"
  },
  {
    "id": "aqa-reproduction-completion-q06",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Hormones, feedback and fertility",
    "specRefs": [
      "4.5.3.3"
    ],
    "q": "Higher: predict the effect of an absent LH surge and explain why falling progesterone and oestrogen near the end of a non-pregnant model cycle allow another cycle to begin.",
    "answer": "Without an LH surge ovulation may not be triggered even if an egg has matured. Falling ovarian hormones allow the uterus lining to break down and reduce inhibition of FSH, allowing further egg maturation in the next cycle. This distinguishes maturation, release and hormone inhibition.",
    "explain": "Three criteria: LH/ovulation prediction; lining response; reduced inhibition and renewed FSH. Do not claim that FSH directly triggers release or that oestrogen always stimulates every other hormone.",
    "marks": 3,
    "tier": "higher",
    "type": "writing",
    "level": 3,
    "style": "Reproduction and fertility practice"
  },
  {
    "id": "aqa-reproduction-completion-q07",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Hormones, feedback and fertility",
    "specRefs": [
      "4.5.3.5"
    ],
    "q": "Higher: distinguish fertility-drug treatment followed by usual fertilisation from IVF. Sequence the IVF stages, explain the roles of FSH/LH and microscopy, and identify what is not guaranteed after transfer.",
    "answer": "FSH/LH fertility drugs stimulate maturation/release so fertilisation may occur in the usual way. IVF uses hormones to mature several eggs, collects eggs, fertilises them with sperm in a laboratory, allows fertilised eggs to divide into embryos, and transfers one or two tiny balls of cells into the uterus in the specification sequence. Microscopy supports observation/handling of eggs and embryos. Embryo transfer does not guarantee implantation, pregnancy or live birth.",
    "explain": "Five criteria: distinction from fertility drugs alone; hormones/several eggs; laboratory fertilisation; development/transfer sequence; microscopy and limits. An unfertilised egg is not the embryo transferred in this account.",
    "marks": 5,
    "tier": "higher",
    "type": "writing",
    "level": 3,
    "style": "Reproduction and fertility practice"
  },
  {
    "id": "aqa-reproduction-completion-q08",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Hormones, feedback and fertility",
    "specRefs": [
      "4.5.3.5"
    ],
    "q": "Higher: fictional IVF cohort A has 24 cycles resulting in a live birth out of 80 started cycles. What percentage of started cycles resulted in a live birth?",
    "answer": "30%",
    "explain": "24/80 ×100 = 30%. The denominator is started cycles, not eggs collected or embryos transferred. These fictional data are not a current clinical success rate.",
    "marks": 2,
    "tier": "higher",
    "type": "short",
    "level": 3,
    "style": "Reproduction and fertility practice",
    "accepted": [
      "30",
      "30%",
      "30 percent",
      "30 per cent"
    ]
  },
  {
    "id": "aqa-reproduction-completion-q09",
    "subject": "Biology",
    "topic": "Homeostasis & Response",
    "section": "Hormones, feedback and fertility",
    "specRefs": [
      "4.5.3.5"
    ],
    "q": "Higher: fictional cohort A has 24 live-birth cycles/80 started cycles, including 1 multiple birth; B has 35/100, including 7 multiple births. Evaluate a claim that the higher success proportion means B is automatically preferable. Include patient/doctor perspectives and two reasons comparisons may be limited.",
    "answer": "A is 30% and B 35% live-birth cycles per started cycle. Multiple births are 1/24 (about 4.2%) and 7/35 (20%) of live-birth cycles, a different denominator. B has the higher observed success but also more multiple births proportionally, which carry risks for babies/mother. Groups may differ in age/clinical circumstances and the samples are limited, so this does not prove a treatment caused the difference. Patients/doctors must weigh chance of a child, physical/emotional stress, risks, repeated attempts, costs/access and ethical concerns about embryos; personal values differ.",
    "explain": "Five criteria: success comparison; multiple-birth denominators/risk; evidence limitations; benefit versus physical/emotional/economic burdens; reasoned patient/doctor/ethical judgement. Do not treat implantation or pregnancy as identical to live birth, or use these invented rates as predictions.",
    "marks": 5,
    "tier": "higher",
    "type": "writing",
    "level": 3,
    "style": "Reproduction and fertility practice"
  }
];
const reproductionBeforeLesson=activeLesson,reproductionBeforeQuestions=activeQuestions;
activeLesson=function(s,c,t){const l=reproductionBeforeLesson(s,c,t);if(!l||!cellCompletionPath(s,c)||t!=='Homeostasis & Response')return l;const sections=l.sections.map(x=>REPRODUCTION_EXTENSIONS[x.title]?{...x,body:x.body+'\n\n'+REPRODUCTION_EXTENSIONS[x.title]}:x);return {...l,sections,learn:sections.map(x=>x.body).join('\n\n')};};
activeQuestions=function(s,c=choice(s)){const qs=reproductionBeforeQuestions(s,c);return cellCompletionPath(s,c)?[...qs,...REPRODUCTION_QUESTIONS.filter(q=>q.tier!=='higher'||c.tier==='higher').map(q=>({...q,board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}))]:qs;};
const REPRODUCTION_CYCLE=[[1,4,2,2,1],[5,6,2,3,1],[10,4,3,7,1],[13,2,10,10,2],[14,2,12,8,3],[21,2,2,5,10],[28,4,2,2,1]];
function reproductionCycle(){const names=['FSH','LH','Oestrogen','Progesterone'];return `<figure><figcaption>Higher: illustrative menstrual-cycle hormone patterns</figcaption><p>Day 1 marks the start of menstruation. Each hormone uses relative units: compare its pattern, not absolute amounts between hormones. This is a simplified 28-day model, not measurements or a personal prediction.</p><table><tr><th>Day</th>${names.map(n=>'<th>'+n+'</th>').join('')}</tr>${REPRODUCTION_CYCLE.map(r=>'<tr>'+r.map(v=>'<td>'+v+'</td>').join('')+'</tr>').join('')}</table><svg viewBox="0 0 540 380" role="img" aria-label="Model hormone curves: oestrogen peak day 13, LH peak day 14, progesterone peak day 21; FSH higher early and rising again at end"><path d="M60 35V255H490" fill="none" stroke="currentColor"/>${[1,7,14,21,28].map(n=>`<text x="${55+n*15}" y="277">${n}</text>`).join('')}${[0,4,8,12].map(n=>`<text x="30" y="${260-n*16}">${n}</text>`).join('')}${names.map((n,i)=>`<polyline points="${REPRODUCTION_CYCLE.map(r=>(60+r[0]*15)+','+(255-r[i+1]*16)).join(' ')}" fill="none" stroke="${['#4477aa','#aa3377','#228833','#997700'][i]}" stroke-width="3" stroke-dasharray="${['none','7 3','2 3','8 3 2 3'][i]}"/>`).join('')}<text x="65" y="20">Relative hormone level</text><text x="245" y="303">Day of model cycle</text><text x="65" y="330">FSH: solid blue; LH: dashed purple</text><text x="65" y="355">Oestrogen: dotted green; progesterone: dash-dot ochre</text></svg></figure>`;}
const reproductionBeforeVisual=cellVisual;
cellVisual=function(t){return t==='reproduction-cycle'?reproductionCycle():reproductionBeforeVisual(t);};
const reproductionBeforeDiagrams=bioDiagramSection;
bioDiagramSection=function(t){const previous=reproductionBeforeDiagrams(t),c=choice('Biology');return t==='Homeostasis & Response'&&cellCompletionPath('Biology',c)&&c.tier==='higher'?previous+`<details class="card"><summary>Reproductive hormone graph (Higher)</summary>${reproductionCycle()}</details>`:previous;};
const reproductionBeforeSupport=biologySupportInventory;
biologySupportInventory=function(){return [...reproductionBeforeSupport(),{id:'Biology|support|reproduction-cycle',subject:'Biology',kind:'support',tier:'higher',label:'Higher menstrual-cycle hormone graph',fingerprint:auditFingerprint(reproductionCycle()),studentVisible:false}];};
