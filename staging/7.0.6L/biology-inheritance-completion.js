'use strict';
// 7.0.6A: targeted inheritance completion, shared and Higher evidence separated.
const INHERITANCE_EXTENSIONS={
  "DNA, genes and chromosomes": "The genetic material in the nucleus is DNA, a polymer made of two strands forming a double helix. DNA is organised into chromosomes. A gene is a small section of DNA on a chromosome; in the specification model it codes for a particular amino-acid sequence to make a specific protein. Alleles are different versions of a gene. The genome is the entire genetic material of an organism, not just one gene or the genes for visible features. Reuse the existing DNA diagram and the earlier chromosome explanation: genes are parts of DNA, not structures bigger than chromosomes.\nUnderstanding the human genome helps search for genes linked to diseases, understand and develop treatments for inherited disorders, and trace past human migration patterns by comparing inherited genetic information between populations. A genetic association is evidence to investigate, not proof of a single cause of every disease; environmental influences and multiple genes can also matter. Migration studies concern patterns in populations, not a precise complete life history for an individual.",
  "Sexual and asexual reproduction": "Sexual reproduction joins male and female gametes: sperm and egg in animals; male gametes carried in pollen and egg cells in flowering plants. Mixing genetic information produces variety. Meiosis forms non-identical gametes. Asexual reproduction has one parent and no fusion of gametes or mixing between parents; mitosis produces genetically identical offspring (clones), apart from mutations.\nIn reproductive organs, genetic information is copied before meiosis, then the cell divides twice to form four genetically different gametes with one set of chromosomes. Meiosis halves the chromosome number: a human body cell has 46, a gamete 23. Fusion at fertilisation restores 46. If an organism's body cells have 12 chromosomes, its gametes have 6 and the fertilised cell has 12. The fertilised cell then divides by mitosis to increase cell number; embryonic cells differentiate as development proceeds. Copying DNA does not mean each final gamete has twice the normal chromosome number. Named meiotic stages are not required; reuse the existing cell-cycle/mitosis explanation rather than treating embryonic growth as further meiosis.",
  "Genetic crosses": "A gamete is a reproductive cell with one chromosome set. A chromosome contains DNA; a gene is a section of DNA and an allele a version of a gene. Genotype means the alleles present; phenotype means the expressed characteristic. In a simple diploid single-gene model, AA is homozygous dominant, Aa heterozygous and aa homozygous recessive. A dominant allele is expressed with one copy, while a recessive allele is expressed only without a dominant allele (two recessive copies here). Dominant does not mean better, stronger or more common. Fur colour in mice is one single-gene example; red-green colour blindness is another specified example, but its sex-linked pattern is not the same as this autosomal worked model. Most phenotype features involve multiple genes, often interacting with environment.\nFoundation and Higher both complete and interpret a supplied Punnett square and family tree. With A and a already supplied as gamete headings for each Aa parent, combine one allele from each heading: AA, Aa, Aa, aa. The genotype ratio is 1:2:1; dominant:recessive phenotype ratio 3:1; probabilities 3/4 and 1/4. Among 100 offspring the expected numbers are 75 and 25, not a guaranteed result. Each fertilisation is a new event. Use supplied family information to infer possible genotypes; an unaffected sibling of a recessive affected child may be AA or Aa. Do not invent certainty where the evidence gives alternatives. The separate Higher section teaches constructing a new single-gene cross from parental descriptions.",
  "Inherited disorders and screening": "Polydactyly means extra fingers or toes and is caused by a dominant allele in the specification model. Cystic fibrosis is a disorder of cell membranes caused by a recessive allele. A heterozygous carrier of the recessive allele does not show that recessive condition in the simple model. Use the supplied family tree and shared cross template: two unaffected parents with an affected recessive child must each supply a recessive allele, making them carriers; another unaffected child could have one or no copies of that allele.\nEmbryo screening can identify particular inherited alleles and may reduce the chance of a child having a tested disorder, but it does not test every cause of ill health or guarantee an outcome. Given information, weigh possible reduction of suffering and informed reproductive choices against cost/access, test limitations and ethical views about selecting or not using embryos. Respect different family values and concerns about discrimination against people living with conditions. Gene therapy is another possible approach to alleviating some inherited disorders, not a guarantee that every disorder can be cured. Scientific evidence informs these judgements but does not settle every social or ethical question.",
  "Sex chromosomes and inheritance": "In the simplified GCSE model, ordinary human body cells have 23 pairs: 22 autosomal pairs plus one pair of sex chromosomes. XX is the female pattern and XY the male pattern in this model. Eggs supply X; sperm supply X or Y. Carry out the sex-inheritance cross: put X and X for the egg possibilities and X and Y for sperm; the four combinations are XX, XY, XX, XY, giving a 1:1 ratio and probability 1/2 for each. Repeated X headings reflect the same type of egg, not eggs containing two X chromosomes. Three previous XX outcomes do not alter the next fertilisation's probability. This models chromosome inheritance rather than all aspects of sex development or gender. Reuse the existing sex-inheritance diagram.",
  "Variation and mutation": "Variation means differences between individuals in a population. Inherited genes, developmental environment or their interaction can influence phenotype. A scar is an environmental example; a simple inherited allele can affect a trait; height commonly involves many genes and conditions such as nutrition. There is usually extensive genetic variation within a species. Compare the same genotype in different environments and different genotypes in the same environment to separate possible influences; avoid inferring causes from uncontrolled comparisons.\nGenetic variants arise from mutations, which occur continuously rather than because an organism needs a feature. Most variants have no effect on phenotype, some influence phenotype and very few determine phenotype. A new phenotype is rare. If a rare new phenotype suits changed environmental conditions, individuals with it may reproduce more successfully and the species can change relatively rapidly over generations. This is the scope of this variation point, not a claim that every mutation is beneficial, harmful, or immediately visible.",
  "Selective breeding and genetic engineering": "Selective breeding (artificial selection) means humans choosing plants/animals for desired inherited characteristics. Start with a mixed population, select parents showing the desired characteristic, breed them, select suitable offspring and breed those; repeat over many generations until the desired characteristic is consistently shown. Humans have used it for thousands of years in crops and domesticated animals. Required examples include disease-resistant food crops, animals producing more meat or milk, gentle domestic dogs and large or unusual flowers. Selection for one feature also passes on other genes. Repeated breeding of close relatives can reduce genetic diversity and increase inherited defects or susceptibility to disease. Weigh usefulness/appearance and food production against health, welfare and resilience; selecting the most extreme appearance is not automatically best.\nGenetic engineering modifies a genome by introducing a gene from another organism to give a desired characteristic. At shared level, genes can be cut out from chromosomes and transferred to other cells; detailed enzymes/vectors are taught separately for Higher. Examples include crops with disease resistance or bigger/better fruit, crops resistant to insects or herbicides, and bacteria engineered to produce human insulin for treating diabetes. GM crops generally aim for improved yields, but results depend on conditions. Evaluate useful production and possible reductions in crop losses against effects on wild flowers and insects, gene spread, costs/access and evidence about the particular application. People may raise questions about long-term food effects; a concern is not proof of harm, and safety should be judged from evidence rather than blanket claims. Medical research explores genetic modification for some inherited disorders; this does not establish a universal cure. Compare selective breeding (choosing parents over generations) with introducing a gene, not with an imaginary process in which organisms choose to mutate."
};
const INHERITANCE_HIGHER={
  "Constructing genetic crosses": "Higher: construct a new single-gene Punnett square from a description. Define an allele key, identify parental genotypes, work out the allele in each possible gamete, arrange these as row/column headings and combine one allele from each parent in every cell. For a heterozygous dominant Tt parent crossed with a recessive tt parent, gametes are T/t and t/t; cells Tt, tt, Tt, tt give half dominant and half recessive phenotypes. State genotype/phenotype probabilities separately and justify expected numbers using probability × number of offspring; outcomes are not guaranteed. Completing an already headed diagram is shared content; constructing this new diagram is the Higher demand. The explicitly required XX/XY sex cross remains shared.",
  "Genetic engineering techniques": "Higher: enzymes isolate the required gene, which is inserted into a vector, usually a bacterial plasmid or a virus. The vector introduces the gene into the required cells. Genes are transferred into plant, animal or microorganism cells at an early developmental stage so the organism develops with the desired characteristic. Follow the purpose of each step: the vector carries genetic material; it is not the desired protein. In an insulin example, the introduced human gene enables bacteria to produce the useful substance; the bacteria do not become human organisms.\nInterpret a supplied technique by checking the desired gene, effective delivery and evidence of the intended characteristic. Distinguish gene transfer from making genetically identical clones: a clone need not have an introduced gene. Evaluate genetic engineering and cloning applications with evidence about benefit, unintended effects, genetic diversity, welfare, access and social/ethical views. Detailed enzyme names, a full cloning protocol and molecular machinery beyond these specification steps are not required."
};
const INHERITANCE_QUESTIONS=[
  {
    "id": "aqa-inheritance-completion-q01",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Sexual and asexual reproduction",
    "specRefs": [
      "4.6.1.1"
    ],
    "q": "Compare sexual and asexual reproduction in terms of parents, gametes, cell division and genetic similarity. Include both animal and flowering-plant gametes.",
    "answer": "Sexual reproduction fuses gametes from two parents, mixing information: sperm/egg in animals and male gametes carried in pollen/egg cells in flowering plants. Meiosis forms non-identical gametes. Asexual reproduction has one parent, no gamete fusion or mixing, and uses mitosis to produce clones apart from mutations.",
    "explain": "Four criteria: fusion/mixing; both organism examples; meiosis/variation; asexual parent/no fusion/mitosis/clones. Pollen carries male gametes; it is not an egg.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Inheritance and genetic technology practice"
  },
  {
    "id": "aqa-inheritance-completion-q02",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Sexual and asexual reproduction",
    "specRefs": [
      "4.6.1.2",
      "4.6.1.1"
    ],
    "q": "Sequence meiosis, fertilisation and early embryo growth for an organism with 12 chromosomes in its body cells. State final gamete number, chromosome numbers and how later specialised cells arise.",
    "answer": "Genetic information is copied, then the cell divides twice into four genetically different gametes, each with 6 chromosomes. Two gametes fuse, restoring 12 in the fertilised cell. Mitosis increases embryo cell number while maintaining chromosome number; cells then differentiate.",
    "explain": "Four criteria: copying then two divisions/four gametes; genetic difference and halving; fertilisation restores 12; mitosis then differentiation. Named meiotic stages are not required; meiosis is not the process of embryo growth.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Inheritance and genetic technology practice"
  },
  {
    "id": "aqa-inheritance-completion-q03",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "DNA, genes and chromosomes",
    "specRefs": [
      "4.6.1.3"
    ],
    "q": "Explain the relationship between DNA, a chromosome, a gene, a protein and the genome. Give all three specified uses of understanding the human genome and one limit to conclusions from genetic comparisons.",
    "answer": "DNA is a two-stranded double-helix polymer organised into chromosomes. A gene is a small DNA section coding for an amino-acid sequence in a specific protein. The genome is all the genetic material. Uses: finding disease-linked genes, understanding/treating inherited disorders, and tracing past human migration. Association need not show a sole disease cause; multiple genes/environment matter, and population migration evidence is not a complete individual history.",
    "explain": "Four criteria: structure/relationships; gene→amino acids/protein; all three genome uses; justified limitation. A genome is not just one chromosome or the genes for visible traits.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Inheritance and genetic technology practice"
  },
  {
    "id": "aqa-inheritance-completion-q04",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Genetic crosses",
    "specRefs": [
      "4.6.1.4"
    ],
    "q": "Complete the supplied Aa × Aa Punnett square using its gamete headings. Label homozygous/heterozygous genotypes, state genotype and phenotype ratios, and explain why the result is not a rule for every family or every trait.",
    "answer": "Completed cells are AA, Aa, Aa, aa. AA/aa are homozygous, Aa heterozygous. Genotype ratio 1:2:1; dominant:recessive phenotype ratio 3:1 in this single-gene model. Genotype is alleles, phenotype the expressed characteristic. Probabilities do not guarantee a sequence of births; most characteristics involve multiple genes.",
    "explain": "Four criteria: four combinations; terminology; both ratios; probability/polygenic limitation. Dominant means expressed with one copy here, not better or necessarily common.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Inheritance and genetic technology practice",
    "visual": "inheritance-cross"
  },
  {
    "id": "aqa-inheritance-completion-q05",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Inherited disorders and screening",
    "specRefs": [
      "4.6.1.4",
      "4.6.1.5"
    ],
    "q": "Interpret the supplied recessive-disorder family tree. Infer the two unaffected parents’ genotypes and the possibilities for their unaffected child K. Contrast cystic fibrosis with polydactyly.",
    "answer": "The affected child is aa, so each unaffected parent must carry a and is Aa. Unaffected K can be AA or Aa; the diagram does not decide which. Cystic fibrosis is a recessive disorder of cell membranes; polydactyly is extra fingers/toes caused by a dominant allele in the specification model.",
    "explain": "Four criteria: parents Aa with reason; K possibilities/uncertainty; cystic-fibrosis phenotype/recessive; polydactyly phenotype/dominant. An unaffected carrier is not the same as a person with no recessive allele.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Inheritance and genetic technology practice",
    "visual": "inheritance-family"
  },
  {
    "id": "aqa-inheritance-completion-q06",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Inherited disorders and screening",
    "specRefs": [
      "4.6.1.5"
    ],
    "q": "A hypothetical embryo test detects one specified inherited allele but cannot test every disorder. Evaluate its use, including a possible benefit, a scientific limitation and economic/social/ethical considerations.",
    "answer": "Testing may help a family make informed choices and reduce the risk of a tested disorder/suffering. It cannot guarantee a healthy child or exclude untested conditions. Consider test uncertainty, cost/access, views about selecting/unused embryos, reproductive choice and avoiding discrimination against people living with conditions. Different families may weigh these differently; possible gene therapy is not a guaranteed cure.",
    "explain": "Four criteria: linked benefit; limitation; economic/social considerations; respectful ethical judgement. Give reasons from the supplied information, not a claim that science alone decides the right choice.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Inheritance and genetic technology practice"
  },
  {
    "id": "aqa-inheritance-completion-q07",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Sex chromosomes and inheritance",
    "specRefs": [
      "4.6.1.6"
    ],
    "q": "Carry out the simplified XX × XY sex-inheritance cross. State body-cell chromosome pairs, gametes, offspring ratio/probability, and whether three previous XX children alter the next probability.",
    "answer": "Body cells have 23 pairs: 22 autosomal pairs and one sex-chromosome pair. Egg gametes carry X; sperm carry X or Y. The square gives XX, XY, XX, XY: 1:1, with 1/2 (50%) each. Previous children do not alter the next fertilisation probability.",
    "explain": "Four criteria: 22+1 pairs; gametes/cross; ratio/probability; independence. Each gamete has one sex chromosome, not an XX or XY pair. This specified sex cross is shared content.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Inheritance and genetic technology practice"
  },
  {
    "id": "aqa-inheritance-completion-q08",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Genetic crosses",
    "specRefs": [
      "4.6.1.4"
    ],
    "q": "The supplied completed cross has equally likely cells AA, Aa, Aa and aa, where A is dominant. What percentage of offspring is expected to show the dominant phenotype?",
    "answer": "75%",
    "explain": "Three of four cells have at least one A: 3/4 ×100 = 75%. This is an expected proportion, not a guarantee for four births.",
    "marks": 2,
    "tier": "both",
    "type": "short",
    "level": 2,
    "style": "Inheritance and genetic technology practice",
    "accepted": [
      "75",
      "75%",
      "75 percent",
      "75 per cent"
    ]
  },
  {
    "id": "aqa-inheritance-completion-q09",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Variation and mutation",
    "specRefs": [
      "4.6.2.1"
    ],
    "q": "Use the seedling table to explain genetic, environmental and combined influences on phenotype. Explain why mutations do not occur because plants need to grow taller and what most genetic variants do to phenotype.",
    "answer": "At the same water level B is taller than A (8 versus 6 cm; 14 versus 10 cm), consistent with a genetic contribution. Extra water increases both, showing an environmental effect; the difference between genotypes changes, illustrating interaction in this dataset. Mutations occur continuously, not to meet a need. Most variants have no phenotype effect, some influence it and very few determine it; rare useful phenotypes may matter after environmental change. The illustrative table alone does not exclude other uncontrolled influences.",
    "explain": "Four criteria: controlled genetic comparison; environmental/combined comparison; mutation origin/frequency of effects; evidence limitation. Height is often polygenic and environmentally influenced, not automatically a one-gene trait.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Inheritance and genetic technology practice",
    "visual": "inheritance-variation"
  },
  {
    "id": "aqa-inheritance-completion-q10",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Selective breeding and genetic engineering",
    "specRefs": [
      "4.6.2.3"
    ],
    "q": "Plan selective breeding for a disease-resistant crop or higher-milk-yield animal over several generations. Evaluate a proposal to breed only a few closely related individuals with the strongest desired feature.",
    "answer": "Choose suitable parents from a mixed population, breed them, select offspring with the desired inherited feature and breed these repeatedly over many generations. The feature may improve production, but close-relative breeding reduces diversity and can increase inherited defects/disease susceptibility. Consider welfare, health and resilience alongside yield, using a wider range of suitable parents where possible.",
    "explain": "Four criteria: initial parent selection; offspring selection/repetition; benefit; inbreeding/diversity and ethical evaluation. Selecting parents differs from deliberately inserting a new gene.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Inheritance and genetic technology practice"
  },
  {
    "id": "aqa-inheritance-completion-q11",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Selective breeding and genetic engineering",
    "specRefs": [
      "4.6.2.4",
      "4.6.2.3"
    ],
    "q": "Compare selective breeding with engineering bacteria to produce human insulin and crops resistant to insects or herbicides. Evaluate two potential benefits and two concerns without assuming all applications are good or bad.",
    "answer": "Selective breeding chooses parents over generations; genetic engineering introduces a gene from another organism into a genome. A human insulin gene can enable useful insulin production in bacteria; resistant crops may reduce losses/increase yield. Consider effects on wild flowers/insects, gene spread, access/cost and application-specific evidence. Concerns about food effects need evidence, not automatic conclusions of harm. Medical gene modification may help some inherited disorders but is not a universal cure.",
    "explain": "Four criteria: process distinction; insulin/crop applications; justified benefits; specific concerns and evidence-based judgement. An engineered bacterium is not a human and breeding does not directly insert a chosen gene.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Inheritance and genetic technology practice"
  },
  {
    "id": "aqa-inheritance-completion-q12",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Constructing genetic crosses",
    "specRefs": [
      "4.6.1.4"
    ],
    "q": "Higher: in a simple model tall is dominant T and short recessive t. Construct a cross between a heterozygous tall parent and a short parent. Predict genotypes, phenotype ratio and expected short offspring among 60.",
    "answer": "Parents Tt × tt; gametes T/t and t/t. Constructed cells Tt, tt, Tt, tt give half heterozygous tall and half homozygous recessive short: 1:1. Expected short offspring = 1/2 ×60 = 30, not a guaranteed number.",
    "explain": "Four criteria: parental genotypes/key; gametes/headings and constructed square; genotypes/phenotype ratio; expected number and limitation.",
    "marks": 4,
    "tier": "higher",
    "type": "writing",
    "level": 3,
    "style": "Inheritance and genetic technology practice"
  },
  {
    "id": "aqa-inheritance-completion-q13",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Genetic engineering techniques",
    "specRefs": [
      "4.6.2.4"
    ],
    "q": "Higher: explain the main steps for engineering cells to produce a useful protein and justify using a vector and an early developmental stage. Identify two kinds of vector.",
    "answer": "Enzymes isolate the required gene; insert it into a vector such as a bacterial plasmid or a virus; the vector transfers it into required cells. Early-stage transfer allows the developing organism to have the desired characteristic. The gene supplies instructions for the useful protein; the vector is a carrier, not the protein itself.",
    "explain": "Four criteria: enzyme isolation; insertion/vector types; delivery and early stage; gene-versus-protein purpose. Detailed enzyme names are not required.",
    "marks": 4,
    "tier": "higher",
    "type": "writing",
    "level": 3,
    "style": "Inheritance and genetic technology practice"
  },
  {
    "id": "aqa-inheritance-completion-q14",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Genetic engineering techniques",
    "specRefs": [
      "4.6.2.4"
    ],
    "q": "Higher: a proposed crop technique places the desired gene in a vector but supplies no evidence it reached crop cells. Evaluate the claim that resistant plants are guaranteed, and distinguish this from cloning one existing resistant plant.",
    "answer": "Vector preparation alone does not show successful delivery or development of the desired trait; check transfer to appropriate early cells and evidence of resistance. Cloning copies existing genetic information, whereas the described engineering introduces a gene; a clone need not be engineered. Weigh crop benefits against unintended effects, diversity, welfare/access and environmental evidence rather than assuming success or universal safety.",
    "explain": "Three criteria: missing delivery/trait evidence; cloning-versus-engineering distinction; reasoned benefits/risks/ethical evaluation.",
    "marks": 3,
    "tier": "higher",
    "type": "writing",
    "level": 3,
    "style": "Inheritance and genetic technology practice"
  }
];
const inheritanceBeforeLesson=activeLesson,inheritanceBeforeQuestions=activeQuestions;
activeLesson=function(s,c,t){const l=inheritanceBeforeLesson(s,c,t);if(!l||!cellCompletionPath(s,c)||t!=='Inheritance')return l;const sections=l.sections.map(x=>INHERITANCE_EXTENSIONS[x.title]?{...x,body:x.body+'\n\n'+INHERITANCE_EXTENSIONS[x.title]}:x);for(const [title,body]of Object.entries(INHERITANCE_HIGHER))sections.push({title,body,tier:'higher'});return {...l,sections,learn:sections.map(x=>x.body).join('\n\n')};};
activeQuestions=function(s,c=choice(s)){const qs=inheritanceBeforeQuestions(s,c);return cellCompletionPath(s,c)?[...qs,...INHERITANCE_QUESTIONS.filter(q=>q.tier!=='higher'||c.tier==='higher').map(q=>({...q,board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}))]:qs;};
function inheritanceCross(){return '<figure><figcaption>Complete this supplied Aa × Aa template; A is dominant</figcaption><table><tr><th>Gametes</th><th>A</th><th>a</th></tr><tr><th>A</th><td>AA</td><td>?</td></tr><tr><th>a</th><td>?</td><td>?</td></tr></table><p>Combine one allele from the row and one from the column. Identify genotype and phenotype ratios.</p></figure>';}
function inheritanceFamily(){return '<figure><figcaption>Supplied recessive-disorder family tree; shaded = affected</figcaption><svg viewBox="0 0 440 240" role="img" aria-label="Two unaffected parents have one affected child J and one unaffected child K; the condition is recessive"><rect x="105" y="25" width="30" height="30" fill="none" stroke="currentColor"/><circle cx="280" cy="40" r="15" fill="none" stroke="currentColor"/><path d="M135 40H265 M200 40V100 M120 100H280 M120 100V145 M280 100V145" fill="none" stroke="currentColor"/><circle cx="120" cy="160" r="15" fill="#444" stroke="currentColor"/><rect x="265" y="145" width="30" height="30" fill="none" stroke="currentColor"/><g fill="currentColor"><text x="85" y="80">Unaffected</text><text x="250" y="80">Unaffected</text><text x="80" y="205">J: affected aa</text><text x="245" y="205">K: unaffected</text></g></svg><p>Squares/circles distinguish family members; shading shows the trait. Infer genotypes, not certainty about an untested allele.</p></figure>';}
const INHERITANCE_VARIATION=[['A',6,10],['B',8,14]];
function inheritanceVariation(){return `<figure><figcaption>Illustrative seedling heights/cm after the same growing period</figcaption><table><tr><th>Genotype group</th><th>Low water</th><th>Adequate water</th></tr>${INHERITANCE_VARIATION.map(r=>'<tr>'+r.map(v=>'<td>'+v+'</td>').join('')+'</tr>').join('')}</table><p>Groups grown under otherwise matched conditions; values are illustrative. Compare like conditions and consider missing repeats/sample information.</p></figure>`;}
const INHERITANCE_RESOURCES={cross:inheritanceCross,family:inheritanceFamily,variation:inheritanceVariation};
const inheritanceBeforeVisual=cellVisual;
cellVisual=function(t){return t?.startsWith('inheritance-')&&INHERITANCE_RESOURCES[t.slice(12)]?INHERITANCE_RESOURCES[t.slice(12)]():inheritanceBeforeVisual(t);};
const inheritanceBeforeDiagrams=bioDiagramSection;
bioDiagramSection=function(t){const previous=inheritanceBeforeDiagrams(t),c=choice('Biology');return t==='Inheritance'&&cellCompletionPath('Biology',c)?previous+`<details class="card"><summary>Inheritance templates and evidence</summary>${inheritanceCross()}${inheritanceFamily()}${inheritanceVariation()}</details>`:previous;};
const inheritanceBeforeSupport=biologySupportInventory;
biologySupportInventory=function(){return [...inheritanceBeforeSupport(),...Object.entries(INHERITANCE_RESOURCES).map(([key,fn])=>({id:'Biology|support|inheritance-'+key,subject:'Biology',kind:'support',tier:'both',label:'Inheritance '+key+' resource',fingerprint:auditFingerprint(fn()),studentVisible:true}))];};
