'use strict';
// 7.0.5V: six shared AQA Trilogy infection/defence units only.
const INFECTION_EXTENSIONS={
  "Pathogens and transmission": "Communicable means infectious disease can spread between organisms, including plants as well as animals. A pathogen is a disease-causing microorganism: the four groups here are bacteria, viruses, fungi and protists. Not every microorganism causes disease. Bacteria may multiply rapidly and produce toxins that damage tissues. Viruses reproduce inside living host cells and damage those cells; do not describe them as independently dividing bacterial cells. Some fungi spread by spores; malaria is caused by a protist, not the mosquito carrying it.\nMatch prevention to the route. Direct contact can transfer pathogens between infected and susceptible organisms; sexual contact is one example. Indirect spread can involve contaminated food, drinking water, equipment, air droplets or vectors. Hand hygiene and cleaning shared equipment reduce transfer; hygienic food preparation and safe treated water reduce ingestion of pathogens. Limiting contact with infectious individuals through appropriate isolation reduces opportunities for spread. Cough/sneeze hygiene reduces release of infectious droplets. Removing infected plant material and cleaning equipment can reduce transfer between plants. Preventing vector breeding or bites interrupts vector-borne transmission. Vaccination can reduce disease spread by reducing the susceptible population; the detailed immune-memory curriculum remains in its existing separate section. A measure suitable for contaminated water does not necessarily stop an airborne infection. More transmission can increase cases in a population, but contact patterns, susceptibility and multiple controls affect the outcome; no control should be assumed perfectly effective without evidence.",
  "Disease examples": "Viral examples. Measles spreads by inhaling droplets from coughs and sneezes. Fever and a red skin rash are characteristic symptoms; serious complications can be fatal. Vaccinating young children helps prevent measles; reducing infectious contact also reduces spread. A rash alone is not enough to identify a disease in real life. HIV can initially cause a flu-like illness. It is transmitted by sexual contact or exchange of infected body fluids such as blood when needles are shared, not by the measles droplet route. Unless controlled with antiretroviral drugs, HIV attacks immune cells. Late-stage infection (AIDS) occurs when damage to immunity leaves the body unable to deal adequately with other infections or cancers. Antiretroviral control is not the same as curing HIV; HIV infection does not automatically mean a person already has AIDS. Barrier protection and avoiding shared needles reduce relevant transmission routes; no treatment dose or individual medical advice is required here. Tobacco mosaic virus (TMV) affects plants including tobacco and tomatoes. Mosaic discolouration reduces photosynthesis, so less sugar is made for growth. Contact with infected material, for example through contaminated handling tools, can transfer it; hygiene and limiting contact with infected material help control this route. TMV is viral, not rose black spot fungus.\nBacterial examples. Salmonella bacteria are ingested in contaminated food, including food prepared unhygienically. Their multiplication and toxins cause fever, abdominal cramps, vomiting and diarrhoea. Food hygiene, avoiding transfer from raw to ready-to-eat food and adequate cooking reduce spread. The specification describes poultry vaccination in the UK as a control that reduces Salmonella entering the food chain; it does not remove the need for hygiene. Gonorrhoea is bacterial and spreads by sexual contact. Symptoms include thick yellow or green discharge from the penis or vagina and pain when urinating. It was readily treated with penicillin before many resistant strains appeared. Appropriate antibiotic treatment and barrier contraception such as condoms help control spread, but do not assume every antibiotic or penicillin will work against every strain. Antibiotics are medicines, not natural immune defences. Detailed resistance mechanisms and drug development remain outside this batch.\nFungal example. Rose black spot causes purple or black leaf spots, often followed by yellowing and early leaf fall. Reduced photosynthesis limits sugar production and growth. The fungus spreads via wind or water. Fungicides and removal and destruction of affected leaves reduce infection sources; simply leaving infected leaves beside plants can permit further spread. A fungicide targets fungal disease: do not assume it controls a virus such as TMV. Evaluate controls against the route and evidence, rather than treating all plant diseases alike.\nProtist example. Malaria is caused by a protist whose life cycle includes a mosquito. The mosquito is a vector: it can acquire the pathogen when feeding on an infected person and transmit it to another person through a bite. The vector and pathogen are different organisms. Malaria can cause recurrent fever and can be fatal. Mosquito nets reduce bites; preventing mosquitoes breeding, for example by reducing suitable standing-water breeding sites, reduces vector numbers. Nets and breeding control interrupt different parts of transmission and can complement each other; neither guarantees that all infections cease. Full life-cycle stage names are not needed.",
  "Defences and immunity": "Non-specific defences act against a range of pathogens rather than recognising one matching antigen. Intact skin is a physical barrier; clotting helps seal wounds. Nose hairs and mucus trap particles and pathogens. Mucus in the trachea and bronchi traps them, and cilia move mucus towards the throat to be swallowed rather than allowing it to remain deep in the airways. Stomach acid provides a chemical barrier that kills many swallowed pathogens. Mucus, cilia and acid are not pathogen-specific antibodies, and no barrier is completely impenetrable.\nIf pathogens enter tissues, white blood cells help defend the body in distinct ways. In phagocytosis a cell engulfs and digests a pathogen. Other white cells produce antibodies that bind specifically to matching antigens; binding can help target pathogens for destruction, so it is wrong to say every antibody directly kills every pathogen in the same way. Antitoxins neutralise toxins released by pathogens; neutralising a toxin is different from engulfing the organism that made it. Antibodies are not the same as antibiotics: antibiotics are medicines supplied from outside this natural defence system. In an unfamiliar scenario identify whether the problem is a breached barrier, a pathogen within tissues or its toxin, then link the appropriate response to its action. Reuse the existing immune-response sequence diagram for the pathogen/white-cell/antibody steps; its memory-cell endpoint belongs to the existing later vaccination material and is not expanded here."
};
const INFECTION_QUESTIONS=[
  {
    "id": "aqa-infection-completion-q01",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Pathogens and transmission",
    "specRefs": [
      "4.3.1.1"
    ],
    "q": "Four supplied observations describe A: organisms multiplying and releasing toxins; B: agents reproducing inside host cells; C: a spore-spreading fungus; D: a malaria-like protist carried by an insect. Identify each pathogen group and explain why the insect is not the pathogen in D.",
    "answer": "A bacteria; B viruses; C fungi; D protists. The insect carries/transmits the protist and is the vector, while the protist causes the disease. Bacteria can damage tissue through toxins; viruses damage host cells in which they reproduce.",
    "explain": "Five criteria: four correct groups; pathogen/vector distinction with damage mechanisms. These are supplied identifying observations, not a claim that every toxin-producing organism must be bacterial or every insect carries malaria.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Pathogens and defences practice"
  },
  {
    "id": "aqa-infection-completion-q02",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Pathogens and transmission",
    "specRefs": [
      "4.3.1.1"
    ],
    "q": "An unfamiliar disease spreads in drinking water, another by cough droplets, and a plant infection is transferred by shared cutting tools. For each choose and explain a suitable control. Why would one measure not necessarily stop all three outbreaks?",
    "answer": "Treat drinking water to remove/kill pathogens before ingestion. Reduce infectious contact and use cough/sneeze hygiene to reduce droplet exposure; appropriate isolation limits transmission opportunities. Clean tools and limit contact with infected plant material to reduce transfer between plants. Each route differs, so a water treatment cannot prevent all droplet or tool transmission; effectiveness also depends on contacts, susceptibility and correct use.",
    "explain": "Four criteria: one justified control per route; route-specific and population-level limitation. Hygiene is not just naming a cleaner: explain which transfer step is interrupted. Plants as well as animals can acquire infectious disease.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Pathogens and defences practice"
  },
  {
    "id": "aqa-infection-completion-q03",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Disease examples",
    "specRefs": [
      "4.3.1.1",
      "4.3.1.2"
    ],
    "q": "In a supplied measles outbreak, several unprotected pupils develop fever and a red rash after close exposure to coughs. Explain the route and seriousness, and compare reducing infectious contact with vaccination as prevention.",
    "answer": "Measles is viral and spreads when droplets from coughs/sneezes are inhaled. Fever and red rash fit the supplied case; complications can be serious or fatal. Reducing infectious contact limits exposure now, while vaccination helps prevent measles and reduces susceptibility in the population. Neither is a reason to diagnose any rash as measles from symptoms alone.",
    "explain": "Four criteria: virus/droplet route; specified symptoms; potential complications; complementary prevention actions. No detailed vaccine-memory mechanism or treatment advice is required.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Pathogens and defences practice"
  },
  {
    "id": "aqa-infection-completion-q04",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Disease examples",
    "specRefs": [
      "4.3.1.2"
    ],
    "q": "A report describes initial flu-like illness after HIV infection, then control with antiretroviral drugs. Explain why HIV and AIDS are not interchangeable labels. Give two relevant transmission routes and explain a prevention measure for each.",
    "answer": "HIV is the virus; without successful control it damages immune cells. AIDS is late-stage severe immune damage, leaving vulnerability to other infections/cancers. Early infection may cause flu-like illness but does not itself mean AIDS. Sexual contact can transmit HIV, reduced by barrier protection; blood transfer through shared needles can transmit it, reduced by avoiding shared needles. Antiretrovirals control infection rather than imply a cure.",
    "explain": "Five criteria: immune-cell damage; late-stage distinction and consequences; initial illness/control; two route-linked prevention measures. Do not substitute coughing for the specified HIV routes or claim all infected people immediately have AIDS.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Pathogens and defences practice"
  },
  {
    "id": "aqa-infection-completion-q05",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Disease examples",
    "specRefs": [
      "4.3.1.2",
      "4.3.1.4"
    ],
    "q": "Plant A has TMV mosaic discolouration; plant B has rose black spot with yellowing and early leaf fall. Explain why both may grow slowly, distinguish their pathogen types, and explain why the same fungicide cannot be assumed effective for both.",
    "answer": "TMV is viral; rose black spot is fungal. Mosaic damage reduces photosynthesis in A; damaged/lost leaves reduce photosynthesis in B. Less sugar is produced for growth. A fungicide acts against fungi and cannot be assumed to control a virus; controls must match the pathogen and transmission route.",
    "explain": "Four criteria: both pathogen types; each leaf effect linked to photosynthesis; reduced sugar/growth; justified treatment distinction. Do not describe mineral deficiency as the supplied cause or assume all leaf diseases are fungal.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Pathogens and defences practice"
  },
  {
    "id": "aqa-infection-completion-q06",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Disease examples",
    "specRefs": [
      "4.3.1.1",
      "4.3.1.3"
    ],
    "q": "Salmonella cases follow a meal where raw-poultry utensils also touched ready-to-eat food. Explain transmission and symptoms, including toxins. Why are food hygiene and poultry vaccination complementary rather than alternatives?",
    "answer": "Bacteria transfer from contaminated food/equipment and are swallowed. Multiplication and toxins can cause fever, cramps, vomiting and diarrhoea. Separate clean utensils, hygienic preparation and adequate cooking reduce ingestion. Poultry vaccination reduces infection entering the food chain, but does not guarantee uncontaminated food or replace safe handling.",
    "explain": "Four criteria: ingestion/cross-contamination; bacterial toxins and specified symptoms; justified food controls; vaccination limitation/complementarity. Do not call Salmonella a virus or say toxins are white-cell antibodies.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Pathogens and defences practice"
  },
  {
    "id": "aqa-infection-completion-q07",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Disease examples",
    "specRefs": [
      "4.3.1.3"
    ],
    "q": "A supplied gonorrhoea case has painful urination and yellow/green discharge. Explain its type and transmission, and compare barrier prevention with antibiotic treatment when penicillin resistance is reported.",
    "answer": "Gonorrhoea is bacterial and spreads by sexual contact. The symptoms match the supplied case. Condoms provide a barrier reducing transmission; appropriate antibiotic treatment controls bacterial infection, but a resistant strain may not respond to penicillin. Do not assume any antibiotic works for every strain.",
    "explain": "Four criteria: bacterium/sexual route; symptoms; barrier action; antibiotic/resistance qualification. Antibiotics are not natural white-cell products. This is a curriculum case, not a diagnosis or a prescription.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Pathogens and defences practice"
  },
  {
    "id": "aqa-infection-completion-q08",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Disease examples",
    "specRefs": [
      "4.3.1.1",
      "4.3.1.4"
    ],
    "q": "A nursery reports black/purple spots and early leaf drop on roses. In an illustrative comparison, 6 of 20 plants develop new symptoms after infected leaves are removed/destroyed, versus 12 of 20 where fallen leaves remain. Explain a mechanism for control, another control, and one limit to the evidence.",
    "answer": "Rose black spot is fungal, spreading by wind/water. Removing and destroying affected leaves reduces sources for further spread; fungicides can also help. Fewer new symptomatic plants in the removal group is consistent with reduced transmission, not proof of complete prevention. Differences in watering, initial infection or conditions could confound a small comparison; use comparable groups and repeats.",
    "explain": "Four criteria: fungal route; source-removal mechanism; fungicide; data-based qualified conclusion/limitation. Six cases remain, so zero transmission is not supported. Leaves left nearby may still spread the fungus. Data are invented for interpretation.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Pathogens and defences practice"
  },
  {
    "id": "aqa-infection-completion-q09",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Disease examples",
    "specRefs": [
      "4.3.1.1",
      "4.3.1.5"
    ],
    "q": "In a malaria-affected area, a programme combines mosquito nets with removal of suitable standing-water breeding sites. Trace transmission from an infected person to another person and explain why the two measures target different steps. Include health effects and a limitation.",
    "answer": "A mosquito acquires the malarial protist when feeding on an infected person and can transmit it through a later bite. The protist is the pathogen; the mosquito is its vector and part of its life cycle. Malaria causes recurrent fever and may be fatal. Nets reduce bites; breeding-site control reduces mosquito numbers. Remaining mosquitoes, missed sites or ineffective net use mean neither measure guarantees no cases.",
    "explain": "Five criteria: acquisition and transmission; pathogen/vector distinction; fever/severity; both correctly linked controls; realistic limitation. Mosquitoes do not create malaria simply because water is present. Detailed life-cycle stages are not required.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Pathogens and defences practice"
  },
  {
    "id": "aqa-infection-completion-q10",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Defences and immunity",
    "specRefs": [
      "4.3.1.6"
    ],
    "q": "A supplied case has damaged airway cilia but mucus is still produced; another has a skin cut. Explain the roles of skin, nose, trachea/bronchi and stomach in non-specific defence and why mucus alone may not clear the airways effectively.",
    "answer": "Intact skin blocks entry and clots help seal a cut. Nose hairs and mucus trap particles/pathogens. Tracheal/bronchial mucus traps them and cilia move it towards the throat for swallowing, so damaged cilia impair clearance even with mucus present. Stomach acid kills many swallowed pathogens. These are non-specific physical/chemical defences, not recognition of matching antigens.",
    "explain": "Five criteria: skin/clot barrier; nose hairs/mucus; airway trapping and ciliary movement; acid; consequence and non-specific distinction. Cilia move mucus rather than acting as antibiotics; stomach acid does not kill every possible pathogen.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Pathogens and defences practice"
  },
  {
    "id": "aqa-infection-completion-q11",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Defences and immunity",
    "specRefs": [
      "4.3.1.6"
    ],
    "q": "A pathogen passes a barrier and releases a toxin. Explain how phagocytosis, antibodies and antitoxins provide different responses. Correct the claims “all antibodies kill every pathogen directly” and “antibiotics are made by our white blood cells”.",
    "answer": "Phagocytes engulf and digest pathogens. Antibodies bind matching antigens and help target pathogens for destruction; specificity means one antibody does not bind every pathogen equally, and binding is not always direct killing. Antitoxins neutralise toxins, rather than engulfing the organism. Antibiotics are medicines, not the body’s white-cell defence products.",
    "explain": "Four criteria: engulfment/digestion; specific antibody binding and qualified action; toxin neutralisation; antibiotic distinction. Do not interchange toxin and antigen, or claim antitoxins physically swallow bacteria.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Pathogens and defences practice"
  }
];
const infectionBeforeLesson=activeLesson,infectionBeforeQuestions=activeQuestions;
activeLesson=function(s,c,t){const l=infectionBeforeLesson(s,c,t);if(!l||!cellCompletionPath(s,c)||t!=='Infection & Response')return l;const sections=l.sections.map(x=>INFECTION_EXTENSIONS[x.title]?{...x,body:x.body+'\n\n'+INFECTION_EXTENSIONS[x.title]}:x);return {...l,sections,learn:sections.map(x=>x.body).join('\n\n')};};
activeQuestions=function(s,c=choice(s)){const qs=infectionBeforeQuestions(s,c);return cellCompletionPath(s,c)?[...qs,...INFECTION_QUESTIONS.map(q=>({...q,board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}))]:qs;};
