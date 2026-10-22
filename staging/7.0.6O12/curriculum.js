/* Build 5 content contract: stable topic ids reference shared lessons; packs may
   override lessons, add questions, and organise topics independently. */
const BOARD_NAMES = {common:"I'm not sure yet — common core", aqa:'AQA', edexcel:'Pearson Edexcel', ocr:'OCR'};
const TIERED = ['Biology','Chemistry','Physics','Maths','French'];
const QUALIFICATIONS = {
 Biology:{aqa:['8461','Biology'],edexcel:['1BI0','Biology'],ocr:['J247','Biology A — Gateway']},
 Chemistry:{aqa:['8462','Chemistry'],edexcel:['1CH0','Chemistry'],ocr:['J248','Chemistry A — Gateway']},
 Physics:{aqa:['8463','Physics'],edexcel:['1PH0','Physics'],ocr:['J249','Physics A — Gateway']},
 Maths:{aqa:['8300','Mathematics'],edexcel:['1MA1','Mathematics'],ocr:['J560','Mathematics']},
 'English Language':{aqa:['8700','English Language'],edexcel:['1EN0','English Language (2015)'],ocr:['J351','English Language']},
 'English Literature':{aqa:['8702','English Literature'],edexcel:['1ET0','English Literature'],ocr:['J352','English Literature']},
 Geography:{aqa:['8035','Geography'],edexcel:['1GA0','Geography A'],ocr:['J383','Geography A — Geographical Themes']},
 History:{aqa:['8145','History'],edexcel:['1HI0','History'],ocr:['J410','History A — Explaining the Modern World']},
 French:{aqa:['8652','French (first exams 2026)'],edexcel:['1FR1','French (first exams 2026)']}
};
const SOURCES = {
 Biology:{aqa:'https://www.aqa.org.uk/subjects/biology/gcse/biology-8461/specification/subject-content',edexcel:'https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Specification/gcse-biology-spec.pdf',ocr:'https://www.ocr.org.uk/qualifications/gcse/gateway-science-suite-biology-a-j247-from-2016/'},
 Maths:{aqa:'https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300',edexcel:'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.html',ocr:'https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/'},
 French:{aqa:'https://www.aqa.org.uk/subjects/french/gcse/french-8652/specification/scheme-of-assessment',edexcel:'https://qualifications.pearson.com/content/dam/pdf/GCSE/French/2024/specification-and-sample-assessments/gq000023-gcse-french-specification-2024-issue-2.pdf'}
};
// Board-neutral skills replace assumed set texts and optional history studies.
const COMMON_TOPICS = {...SUBJECTS, History:['Source Skills','Interpretations'], Geography:['Natural Hazards','Fieldwork & Geographical Skills']};
const EXTRA_LESSONS = {
 'History|Source Skills':{learn:'A source is evidence produced in a particular context. Infer what it suggests, use a precise detail, and consider its origin and purpose when judging usefulness. A biased source can still be useful.',key:['inference','provenance','purpose'],visual:'Detail → inference → contextual knowledge → judgement',challenge:'Explain how the purpose of a source can affect its usefulness.'},
 'History|Interpretations':{learn:'An interpretation is an account of the past. Compare the arguments of two accounts, then consider the evidence selected and the questions their authors ask.',key:['interpretation','evidence','argument'],visual:'Account A ↔ evidence ↔ Account B',challenge:'Why might historians use the same evidence to reach different conclusions?'},
 'English Language|Language Analysis':{learn:'Choose a short quotation, identify a precise language choice and explain what it suggests in context. Naming a technique alone does not explain its effect.',key:['quotation','connotation','effect'],visual:'Evidence → word choice → meaning → effect',challenge:'Explain two possible effects of the phrase “the street swallowed him”.'},
 'English Language|Creative Writing':{learn:'Build a clear viewpoint and a controlled sequence. Use specific detail and vary sentence length deliberately. Check punctuation and paragraphing.',key:['viewpoint','structure','detail'],visual:'Opening → development → turning point → ending',challenge:'Write a short opening where a familiar place feels unfamiliar.'},
 'Geography|Fieldwork & Geographical Skills':{learn:'Start with an enquiry question. Choose a sampling method, collect data consistently and consider risk. Use the data to reach a conclusion and explain limitations such as sample size.',key:['sampling','reliability','enquiry'],visual:'Question → method → data → conclusion → evaluation',challenge:'Explain how a small sample can limit a geographical conclusion.'},
 'French|Identity':{learn:'Use je suis to describe yourself and j’ai for age: J’ai quinze ans. Give an opinion with a reason: J’aime le sport parce que c’est amusant.',key:['je suis','j’ai','parce que'],visual:'Identity → opinion → reason',challenge:'Introduce yourself and justify an opinion in French.'}
};
function sharedLesson(s,t){return EXTRA_LESSONS[s+'|'+t] || LESSONS[s]?.[t];}
const PACKS = {};
for(const s of Object.keys(SUBJECTS)){
 PACKS[s]={};
 PACKS[s].common={id:'common',title:'Common GCSE skills',topics:COMMON_TOPICS[s].map(t=>({id:t,title:t,unit:'Shared material'})),overrides:{},questions:[],note:'Shared starter material. This is not a complete specification. Optional texts and historical studies need your school’s choices.'};
 for(const [b,[code,name]] of Object.entries(QUALIFICATIONS[s])) PACKS[s][b]={id:code,title:name+' · '+code,topics:COMMON_TOPICS[s].map(t=>({id:t,title:t,unit:'Shared starter topic'})),overrides:{},questions:[],source:SOURCES[s]?.[b],note:'Shared starter lessons in this qualification. Full board mapping and question coverage are still to be added.'};
}
function mapTopics(s,b,units){PACKS[s][b].topics=units.flatMap(([unit,...topics])=>topics.map(t=>({id:t,title:t,unit})));}
mapTopics('Biology','aqa',[
 ['4.1 Cell biology','Cell Biology'],['4.2 Organisation','Organisation'],['4.3 Infection and response','Infection & Response'],['4.4 Bioenergetics','Bioenergetics'],['4.5 Homeostasis and response','Homeostasis & Response'],['4.6 Inheritance, variation and evolution','Inheritance'],['4.7 Ecology','Ecology']]);
mapTopics('Biology','edexcel',[
 ['Topic 1 · Key concepts in biology','Cell Biology'],['Topic 2 · Cells and control','Cells and Control'],['Topic 3 · Genetics','Inheritance'],['Topic 4 · Natural selection and genetic modification','Natural Selection'],['Topic 5 · Health, disease and medicines','Infection & Response'],['Topic 6 · Plant structures and functions','Bioenergetics'],['Topic 7 · Animal coordination and homeostasis','Homeostasis & Response'],['Topic 8 · Exchange and transport in animals','Organisation'],['Topic 9 · Ecosystems and material cycles','Ecology']]);
mapTopics('Biology','ocr',[
 ['B1 · Cell level systems','Cell Biology','Bioenergetics'],['B2 · Scaling up','Organisation'],['B3 · Organism level systems','Homeostasis & Response'],['B4 · Community level systems','Ecology'],['B5 · Genes, inheritance and selection','Inheritance'],['B6 · Global challenges','Infection & Response']]);
for(const b of ['aqa','edexcel','ocr']) PACKS.Biology[b].note='Separate Biology starter pack, not Combined Science. Unit mapping plus a microscopy lesson and original practical questions; full specification coverage remains incomplete.';
PACKS.Biology.edexcel.overrides['Cells and Control']={learn:'Mitosis produces genetically identical cells for growth and repair. Cell differentiation produces specialised structures. In nervous coordination, receptors detect a stimulus and signals travel through neurones to effectors.',key:['mitosis','differentiation','neurone'],visual:'Stimulus → receptor → sensory neurone → CNS → motor neurone → effector',challenge:'Explain how cell division and differentiation have different roles in growth.'};
PACKS.Biology.edexcel.overrides['Natural Selection']={learn:'Individuals in a population vary. Those with inherited features that improve survival and reproduction are more likely to pass on their alleles. Across generations those alleles can become more common.',key:['variation','selection','allele'],visual:'Variation → selection pressure → reproduction → changing population',challenge:'Explain how antibiotic resistance can spread through a bacterial population.'};
const microscopy={
 aqa:['4.1.1.5 · Microscopy / required practical 1','Prepare a thin specimen on a slide, add a suitable stain and lower a coverslip carefully. Start with a low-power objective, focus, then increase magnification. Draw clear outlines and label visible structures. Magnification = image size ÷ real size; use the same units.','AQA required-practical preparation: labelled drawings and magnification'],
 edexcel:['1.6 · Core practical: microscopy','Use a light microscope to observe plant and animal cells. Start at low power and produce labelled biological drawings. A scale bar represents a real distance: divide the measured bar length by the stated distance to find magnification. Convert millimetres to micrometres before dividing.','Edexcel core-practical preparation: biological drawings and scale bars'],
 ocr:['B1.1 · Cell structures / practical skills','Use a microscope to compare cell structures. Magnification makes an image larger; resolution is the ability to distinguish nearby points. A larger image does not necessarily show more detail. Explain the limits of a light microscope when comparing observations.','OCR Gateway practical preparation: cell observations and resolution']
};
for(const [b,[ref,learn,style]] of Object.entries(microscopy)){
 PACKS.Biology[b].overrides['Cell Biology']={...LESSONS.Biology['Cell Biology'],learn:LESSONS.Biology['Cell Biology'].learn+'\n\n'+learn,ref,style};
}
function addQ(s,b,topic,id,q,answer,explain,extra={}){PACKS[s][b].questions.push({id,subject:s,topic,q,answer,explain,type:'short',level:1,tier:'both',marks:1,...extra});}
addQ('Biology','aqa','Cell Biology','aqa-micro','A cell image is 24 mm long. The real cell is 0.06 mm long. Calculate the magnification.','400','24 ÷ 0.06 = 400. Magnification has no unit.',{accepted:['400','400x','x400','×400','400×'],style:'Calculation',marks:2});
addQ('Biology','edexcel','Cell Biology','edexcel-scale','A scale bar labelled 20 micrometres measures 10 mm on a drawing. Calculate the magnification.','500','10 mm = 10,000 micrometres; 10,000 ÷ 20 = 500.',{accepted:['500','500x','x500','×500','500×'],style:'Scale-bar calculation',marks:2});
addQ('Biology','ocr','Cell Biology','ocr-resolution','An image is enlarged but two nearby points still cannot be distinguished. Which property limits the detail?','Resolution','Resolution determines whether two nearby points can be distinguished.',{type:'mcq',options:['Resolution','Image size','Paper size','Drawing colour'],style:'Practical application'});
for(const b of ['aqa','edexcel','ocr']) {
 addQ('Biology',b,'Cell Biology',b+'-drawing','Describe two features of a useful biological drawing.','Clear, unbroken outlines; accurate proportions; labels pointing to visible structures.','Compare your response with the model. Award one mark for each valid feature, up to two.',{type:'writing',marks:2,style:microscopy[b][2]});
}
// Maths has shared national content, but paper arrangements differ by board.
const mathsNotes={aqa:'8300: Paper 1 is non-calculator; Papers 2 and 3 allow a calculator.',edexcel:'1MA1: Paper 1 is non-calculator; Papers 2 and 3 allow a calculator.',ocr:'J560: the middle paper in each tier is non-calculator; the first and third allow a calculator.'};
for(const b of ['aqa','edexcel','ocr']){
 PACKS.Maths[b].note=mathsNotes[b]+' Starter algebra practice is included, not a full course.';
 PACKS.Maths[b].overrides.Algebra={...LESSONS.Maths.Algebra,ref:QUALIFICATIONS.Maths[b][0]+' · Algebra',learn:'Combine like terms by adding coefficients. To solve a linear equation, apply the same inverse operation to both sides. For 2x + 5 = 17, subtract 5 then divide by 2 to get x = 6.\n\n'+mathsNotes[b],challenge:'Solve 3x + 7 = 22 and check by substitution.'};
 const n={aqa:4,edexcel:5,ocr:6}[b];
 addQ('Maths',b,'Algebra',b+'-linear',`Solve ${n}x + 3 = ${n*3+3}.`,'3',`Subtract 3 and divide by ${n}. x = 3.`,{accepted:['3','x=3'],marks:2,style:'Non-calculator practice'});
 addQ('Maths',b,'Algebra',b+'-quadratic','Solve x² − 5x + 6 = 0. Give both solutions.','2,3','Factorise: (x − 2)(x − 3) = 0, so x = 2 or x = 3.',{accepted:['2,3','3,2','2and3','3and2','x=2orx=3'],tier:'higher',level:3,marks:3,style:'Higher algebra'});
}
for(const b of ['aqa','edexcel']){
 PACKS.French[b].note='Current French specification, first assessed in 2026. Identity starter lesson and writing practice only; vocabulary lists, audio and full theme coverage remain to be added.';
 PACKS.French[b].overrides.Identity={...EXTRA_LESSONS['French|Identity'],ref:QUALIFICATIONS.French[b][0],learn:EXTRA_LESSONS['French|Identity'].learn+'\n\n'+(b==='aqa'?'AQA: identity sits within People and lifestyle. Practise short sentences and develop each requested point with relevant detail.':'Edexcel: practise communicating in formal and informal contexts. Match your greeting and closing to the recipient.')};
 addQ('French',b,'Identity',b+'-identity',b==='aqa'?'Write five short French sentences introducing yourself and your interests.':'Write a short informal message to a French friend introducing yourself and your interests.','Je m’appelle Alex. J’ai quinze ans. Je suis anglais. J’aime le sport. Je joue au football avec mes amis.','Check meaning, verb forms and agreement. This is a short self-assessed exercise, not the complete official writing task.',{type:'writing',marks:5,style:b==='aqa'?'Short-sentence preparation':'Informal writing preparation'});
}
const BASE_QUESTIONS=QUESTIONS.map((q,i)=>({...q,id:'build4-'+i,tier:'both',marks:q.type==='writing'?2:1,style:'Shared practice'}));
BASE_QUESTIONS.find(q=>q.subject==='Maths'&&q.topic==='Probability').accepted=['1/2','0.5','50%'];
function tierAllows(item,tier){return item.tier!=='higher'||tier==='higher';}
function resolveTopics(s,b){return PACKS[s][b].topics;}
function resolveLesson(s,b,t,tier){let l=PACKS[s][b].overrides[t]||sharedLesson(s,t);if(!l)return null;
 const sections=l.sections?.filter(section=>tierAllows(section,tier));
 return {...l,sections,learn:sections?sections.map(section=>section.body).join('\n\n'):l.learn,
 challenge:l.sections?l.challenge:TIERED.includes(s)&&tier!=='higher'?'Explain the key idea in your own words and give an example.':l.challenge};}
function resolveQuestions(s,b,tier){const pack=PACKS[s][b],ids=new Set(pack.topics.map(t=>t.id));return [...BASE_QUESTIONS.filter(q=>q.subject===s),...pack.questions].filter(q=>ids.has(q.topic)&&tierAllows(q,tier)).map(q=>({...q,board:b,spec:pack.id,tierContext:tier}));}
// English packs organise the same transferable skills around distinct papers.
const ENGLISH_PAPERS={
 aqa:[['Paper 1 · Creative reading and writing','Reading Skills','Language Analysis','Creative Writing'],['Paper 2 · Viewpoints and perspectives','Non-fiction','Persuasive Writing'],['Across both papers','Accuracy']],
 edexcel:[['Paper 1 · Fiction and imaginative writing','Reading Skills','Language Analysis','Creative Writing'],['Paper 2 · Non-fiction and transactional writing','Non-fiction','Persuasive Writing'],['Across both papers','Accuracy']],
 ocr:[['Component 01 · Communicating information and ideas','Non-fiction','Persuasive Writing'],['Component 02 · Exploring effects and impact','Reading Skills','Language Analysis','Creative Writing'],['Across both components','Accuracy']]
};
const ENGLISH_SOURCES={aqa:'https://www.aqa.org.uk/subjects/english/gcse/english-8700/specification/specification-at-a-glance',edexcel:'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-language-2015.html',ocr:'https://www.ocr.org.uk/qualifications/gcse/english-language-j351-from-2015/specification-at-a-glance/'};
for(const b of ['aqa','edexcel','ocr']){
 mapTopics('English Language',b,ENGLISH_PAPERS[b]);const p=PACKS['English Language'][b];p.source=ENGLISH_SOURCES[b];p.note='Paper organisation with original short writing practice. Full reading extracts, paper timing and official marking are not included.';
 const task={aqa:['Describe a deserted station as a storm approaches.','Descriptive writing preparation'],edexcel:['Write the opening of a story about an unexpected arrival.','Imaginative writing preparation'],ocr:['Write the opening of a story in which a familiar place has changed.','Exploring effects and impact preparation']}[b];
 p.overrides['Creative Writing']={...EXTRA_LESSONS['English Language|Creative Writing'],ref:QUALIFICATIONS['English Language'][b][0],learn:EXTRA_LESSONS['English Language|Creative Writing'].learn+'\n\nPractice focus: '+task[1]+'. Plan for the particular task before writing; check that every paragraph develops its purpose.',challenge:task[0]};
 addQ('English Language',b,'Creative Writing',b+'-writing',task[0],'Use a clear viewpoint, specific sensory details and a controlled sequence. Check sentence boundaries and punctuation.','Self-assess whether your opening establishes a setting and develops the task clearly. These practice marks are not the official paper allocation.',{type:'writing',marks:3,style:task[1]});
}
// Focused science additions. Unmapped modules explicitly remain shared starters.
const scienceFocus={
 Chemistry:{topic:'Atomic Structure',refs:{aqa:'4.1 · Atomic structure and the periodic table',edexcel:'Topic 1 · Key concepts in chemistry',ocr:'C1.2 · Atomic structure'},
 lessons:{aqa:'Isotopes have identical proton numbers but different neutron numbers. The atomic number gives protons; subtract it from the mass number to find neutrons.',edexcel:'Relative atomic mass is a weighted mean. Multiply each isotope mass by its percentage abundance, add the results and divide by 100.',ocr:'Evidence can change models. The nuclear model explains why most alpha particles pass through foil while a few are strongly deflected: atoms are mostly empty space with a small, dense, positive nucleus.'},
 questions:{aqa:['An atom has mass number 23 and atomic number 11. How many neutrons does it contain?','12','23 − 11 = 12 neutrons.'],edexcel:['An element has isotopes of mass 10 (20%) and mass 11 (80%). Calculate its relative atomic mass.','10.8','(10 × 20 + 11 × 80) ÷ 100 = 10.8.'],ocr:['Most alpha particles pass straight through thin foil. What does this suggest about an atom?','It is mostly empty space','Most trajectories do not encounter the tiny nucleus.']}
 },
 Physics:{topic:'Electricity',refs:{aqa:'4.2 · Electricity',edexcel:'Topic 10 · Electricity and circuits',ocr:'P3 · Electricity'},
 lessons:{aqa:'To find resistance, measure current through a component and potential difference across it. Connect the ammeter in series and the voltmeter in parallel. Use R = V ÷ I.',edexcel:'A current–potential difference investigation uses several readings. Keep a fixed resistor at a steady temperature; a straight line through the origin shows current is proportional to potential difference.',ocr:'Charge is conserved in a circuit. In a series circuit the current is the same at every point. At a junction the total current entering equals the total current leaving.'},
 questions:{aqa:['A resistor has 6 V across it and a current of 0.5 A. Calculate its resistance in ohms.','12','R = V ÷ I = 6 ÷ 0.5 = 12 ohms.'],edexcel:['A fixed resistor carries 0.2 A at 4 V. At the same temperature, what current in amperes flows at 8 V?','0.4','Doubling potential difference doubles current when resistance is constant.'],ocr:['A current of 0.7 A enters a junction. One branch carries 0.2 A. What current in amperes flows in the other branch?','0.5','0.7 − 0.2 = 0.5 A, because charge is conserved.']}
 }
};
for(const [s,f] of Object.entries(scienceFocus))for(const b of ['aqa','edexcel','ocr']){
 const p=PACKS[s][b];p.topics.find(t=>t.id===f.topic).unit=f.refs[b];p.overrides[f.topic]={...LESSONS[s][f.topic],ref:f.refs[b],learn:LESSONS[s][f.topic].learn+'\n\n'+f.lessons[b]};
 p.note=`Separate ${s} starter pack. ${f.topic} has a mapped lesson and original practice; other modules remain shared starters, not a full board specification.`;
 p.source=b==='edexcel'?`https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Specification/gcse-${s.toLowerCase()}-spec.pdf`:b==='ocr'?`https://www.ocr.org.uk/qualifications/gcse/gateway-science-suite-${s.toLowerCase()}-a-${p.id.toLowerCase()}-from-2016/`:`https://www.aqa.org.uk/subjects/${s.toLowerCase()}/gcse/${s.toLowerCase()}-${p.id}/specification/subject-content`;
 const [q,answer,explain]=f.questions[b];addQ(s,b,f.topic,b+'-'+s.toLowerCase()+'-focus',q,answer,explain,{marks:2,style:f.refs[b],...(s==='Chemistry'&&b==='ocr'?{type:'mcq',options:[answer,'It has no nucleus','Its electrons are positive','Its mass is evenly spread']}:{})});
}
