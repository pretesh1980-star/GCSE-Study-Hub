'use strict';
// 7.0.6B: five shared specification units; extend existing sections only.
const EVOLUTION_EXTENSIONS={
  "Selection and evolution": "Evolution is change in the inherited characteristics of a population over time through natural selection, sometimes resulting in new species. The theory states that all living species evolved from simple life forms first present more than three billion years ago. Reuse the variation and mutation explanation: variants arise without organisms choosing or needing them. In a changed environment, individuals with an advantageous inherited phenotype may survive and reproduce more successfully. They pass alleles to offspring; over many generations the population changes. Individuals do not evolve a needed feature during their lifetime and acquired changes are not automatically inherited.\nFor example, a storm separates a seed-eating population onto two islands with different seeds. Existing inherited variation affects feeding success. Different variants can be favoured on each island; successful individuals leave more offspring. If the populations eventually become so different that they can no longer interbreed to produce fertile offspring, they constitute two species. Separation alone does not establish new species; inability to produce fertile offspring is the stated criterion.\nExtinction means no individuals of a species remain alive anywhere, not merely disappearance from one area. Rapid environmental change may remove suitable conditions or food; new predators may increase deaths, new diseases may kill susceptible individuals, and competitors may reduce access to resources. Catastrophic events can destroy populations and habitats. Several pressures may act together. If deaths exceed successful reproduction until no individuals remain, the species is extinct. A decline or a local absence alone is insufficient evidence of global extinction. Apply these mechanisms to supplied evidence rather than assuming every population can adapt fast enough.",
  "Evidence and classification": "Evolution by natural selection is widely accepted because several lines of evidence support it. Genes demonstrate how inherited characteristics pass to offspring, providing the inheritance mechanism. Fossils record organisms from the past and show changes and similarities over time. The evolution of antibiotic resistance in bacteria is observed evidence of selection changing populations; reuse the existing resistant-bacteria teaching and practice. Antibiotics select resistant variants rather than teaching bacteria to resist. Each line has a different role: genes alone do not give a complete fossil history, and one resistant population does not reconstruct every ancestral relationship.\nFossils are remains or traces of organisms from millions of years ago found in rocks. Formation can involve parts not decaying because a condition needed for decay is absent, replacement of parts by minerals as they decay, or preserved traces such as footprints, burrows and rootlet traces. For example, oxygen-poor burial may limit decay; mineral replacement preserves a record of structure; a footprint records activity without preserving the animal's body. Many early organisms were soft-bodied and left few traces. Geological activity destroyed many traces that did form. The record is incomplete, so scientists cannot be certain exactly how life began. A missing fossil is not proof that an organism never existed. Compare dated fossils to identify how much or how little structures changed; gaps prevent a continuous history and a similar fossil need not be a direct ancestor.\nWorked illustrative fossil table: layer A, 120 million years old, shell with 4 ridges; B, 80 million years, shell with 4 ridges; C, 40 million years, shell with 6 ridges. A is oldest. The sampled shells show little change in this feature from A to B and a difference by C; three specimens do not establish every intermediate or an exact ancestor-descendant chain. Read ages and features separately, checking units and sampling limitations.\nCarl Linnaeus grouped organisms by structure and characteristics in the hierarchy kingdom, phylum, class, order, family, genus, species. A binomial name gives genus and species, for example Homo sapiens; genus begins with a capital and the species part is lower case. Organisms sharing a genus are grouped more closely than organisms sharing only a family; use all the supplied evidence rather than appearance alone.\nImproved microscopes revealed internal structures; improved understanding of biochemical processes and chemical analysis supplied new evidence for classification. Carl Woese proposed the three-domain system: Archaea, Bacteria and Eukaryota. In the specification description Archaea are primitive bacteria often associated with extreme environments, but they form a distinct domain from Bacteria (true bacteria). Eukaryota includes protists, fungi, plants and animals. Not every archaeon lives in an extreme environment. Domains are not three animal kingdoms. Revising classification in response to evidence is a strength of scientific models.\nEvolutionary trees represent proposed relationships using current classification evidence for living organisms and fossil evidence for extinct organisms. A branch point represents a common ancestor; a more recent shared branch indicates a closer relationship. In the tree (C,(A,B)), A and B share a more recent ancestor than either does with C. This does not mean modern A evolved from modern B, or that branch length measures time unless a scale is supplied. Similar DNA/biochemical evidence can support closer relationships; fossil evidence adds past organisms. New evidence may change a proposed tree."
};
const EVOLUTION_QUESTIONS=[
  {
    "id": "aqa-evolution-completion-q01",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Selection and evolution",
    "specRefs": [
      "4.6.2.2"
    ],
    "q": "A storm separates one species of seed-eating birds onto islands with hard versus soft seeds. Explain how inherited variation and natural selection could change the populations, and state what evidence would establish two species.",
    "answer": "Existing inherited variants affect feeding success in each environment. Better-suited individuals survive and reproduce more, passing alleles to offspring. Over generations different inherited phenotypes become common. Two species are established if the populations can no longer interbreed to produce fertile offspring; island separation alone is insufficient.",
    "explain": "Link variation → different survival/reproduction → inheritance → generations; then give the fertile-offspring criterion. Do not claim need caused a directed mutation.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Evolution and classification practice"
  },
  {
    "id": "aqa-evolution-completion-q02",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Evidence and classification",
    "specRefs": [
      "4.6.3.1",
      "4.6.2.2"
    ],
    "q": "Evaluate these claims: fossils alone explain inheritance; genes alone reveal every past organism; antibiotic treatment makes each bacterium learn resistance. Explain how the three corrected lines of evidence support evolution and state the broad timescale for common ancestry.",
    "answer": "Fossils show past organisms and change but not by themselves the inheritance mechanism. Genes pass characteristics to offspring but do not supply a complete history of past organisms. Antibiotics select resistant variants that survive and reproduce; bacteria do not learn resistance. Together these support evolution by natural selection from simple life forms first present more than three billion years ago.",
    "explain": "Credit distinct roles for fossils, genes and observed resistance, plus common ancestry/timescale. Reuse the resistant-bacteria explanation rather than inventing purposeful adaptation.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Evolution and classification practice"
  },
  {
    "id": "aqa-evolution-completion-q03",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Evidence and classification",
    "specRefs": [
      "4.6.3.2"
    ],
    "q": "Match three fossil examples to formation processes: an undecayed part buried where a decay condition is absent; a shell whose original material was replaced by minerals; a preserved footprint. Explain two reasons the early fossil record is incomplete and what this limits.",
    "answer": "The first is preservation because conditions for decay are absent; the second is mineral replacement during decay; the footprint is a preserved trace. Early soft-bodied life left few traces and geological activity destroyed many traces. Consequently the record cannot give a complete sequence or certainty about exactly how life began.",
    "explain": "Include all three processes, soft bodies and geological destruction. A footprint is evidence of activity, not the preserved body; absence of a fossil is not proof of absence of life.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Evolution and classification practice"
  },
  {
    "id": "aqa-evolution-completion-q04",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Evidence and classification",
    "specRefs": [
      "4.6.3.2"
    ],
    "q": "Illustrative fossil table: A:120 million years/4 shell ridges; B:80 million years/4 ridges; C:40 million years/6 ridges. Order oldest to youngest, describe what changed and remained similar, and evaluate the claim that this proves every intermediate and that A was the direct ancestor of C.",
    "answer": "Oldest to youngest A, B, C. The ridge count stayed at four in A and B, then is six in C. This sampled feature shows similarity followed by change, but three specimens and gaps cannot establish every intermediate or prove a direct ancestor-descendant relationship. Other fossils and evidence are needed.",
    "explain": "Read age units and compare the specified feature; do not confuse a greater age with a younger fossil or turn a limited sample into a complete evolutionary history.",
    "marks": 3,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Evolution and classification practice"
  },
  {
    "id": "aqa-evolution-completion-q05",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Selection and evolution",
    "specRefs": [
      "4.6.3.3"
    ],
    "q": "A species occurs only on one island. Drought reduces its food; a new competitor uses the remaining food; an introduced predator and disease increase deaths. A storm destroys its last breeding site. Explain how these factors could cause extinction, and distinguish a declining population from extinction.",
    "answer": "Environmental change and competition reduce resources and reproduction; predation and disease increase deaths; the catastrophic storm removes the last breeding habitat. Combined losses can exceed successful reproduction until no individuals remain alive. Decline alone is not extinction; disappearance from one area is not global extinction unless no individuals exist elsewhere.",
    "explain": "Use the given mechanisms, not just a list of labels. The scenario states the species occurs only here. Adaptation is not guaranteed to keep pace.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Evolution and classification practice"
  },
  {
    "id": "aqa-evolution-completion-q06",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Evidence and classification",
    "specRefs": [
      "4.6.4"
    ],
    "q": "Put kingdom, genus, order, species, family, class and phylum in the Linnaean hierarchy. In the supplied fictional names Luma alba, Luma rubra and Nera alba, which pair shares a genus? Explain the two parts of a binomial and why sharing the second word alone is insufficient.",
    "answer": "Kingdom, phylum, class, order, family, genus, species. Luma alba and Luma rubra share genus Luma. A binomial contains genus then species; the complete two-word name identifies the species. Luma alba and Nera alba have different genera, so sharing alba alone does not establish that they are the same species.",
    "explain": "Credit ordered hierarchy, correct pair and two-part interpretation. Names are fictional classification examples; genus is capitalised and the species part lower case.",
    "marks": 3,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Evolution and classification practice"
  },
  {
    "id": "aqa-evolution-completion-q07",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Evidence and classification",
    "specRefs": [
      "4.6.4"
    ],
    "q": "Describe why classification developed beyond structure-based groupings. Name the scientist associated with the traditional system and the scientist associated with three domains; name those domains and place plants, fungi, animals and protists.",
    "answer": "Linnaeus grouped by structure/characteristics. Improved microscopes revealed internal structures and biochemical understanding/chemical analysis supplied evidence for revised relationships. Woese proposed Archaea, Bacteria and Eukaryota. Plants, fungi, animals and protists belong to Eukaryota. Archaea form a distinct domain from true Bacteria; many are associated with extreme conditions, not all.",
    "explain": "Credit evidence-driven revision, both scientists, all three domains and Eukaryota groups. Domains are not three animal kingdoms; change in a model need not mean the earlier observations were fabricated.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Evolution and classification practice"
  },
  {
    "id": "aqa-evolution-completion-q08",
    "subject": "Biology",
    "topic": "Inheritance",
    "section": "Evidence and classification",
    "specRefs": [
      "4.6.4",
      "4.6.3.2"
    ],
    "q": "A supplied tree is (C,(A,B)): A and B join at one branch point, which joins C at an earlier branch. A and B have more similar DNA sequences than either has with C. Interpret the closest relationship, explain why A did not necessarily evolve from modern B, and state how fossil data and new biochemical evidence could affect the tree. No time scale is given.",
    "answer": "A and B share a more recent common ancestor and are more closely related; DNA similarity supports this. Both branch from an ancestor, not necessarily from one another. Fossils provide evidence about extinct organisms and past features; new biochemical evidence may revise proposed relationships. Without a time scale branch lengths do not give exact divergence dates.",
    "explain": "Use branch points and the supplied evidence, not left-to-right position. Modern species are not automatically ancestors of their neighbours; trees are evidence-based models.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Evolution and classification practice"
  }
];
const evolutionBeforeLesson=activeLesson,evolutionBeforeQuestions=activeQuestions;
activeLesson=function(s,c,t){const l=evolutionBeforeLesson(s,c,t);if(!l||!cellCompletionPath(s,c)||t!=='Inheritance')return l;const sections=l.sections.map(x=>EVOLUTION_EXTENSIONS[x.title]?{...x,body:x.body+'\n\n'+EVOLUTION_EXTENSIONS[x.title]}:x);return {...l,sections,learn:sections.map(x=>x.body).join('\n\n')};};
activeQuestions=function(s,c=choice(s)){const qs=evolutionBeforeQuestions(s,c);return cellCompletionPath(s,c)?[...qs,...EVOLUTION_QUESTIONS.map(q=>({...q,board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}))]:qs;};
