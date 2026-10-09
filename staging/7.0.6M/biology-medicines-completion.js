'use strict';
// 7.0.5W: shared AQA Trilogy vaccination/medicines/resistance units.
const MEDICINES_EXTENSIONS={
  "Vaccination and antibiotics": "Vaccination prepares a response before later exposure. In the specification model, small quantities of dead or inactive pathogens introduce antigens that stimulate white blood cells to produce matching antibodies. Immune memory allows a faster production of the correct antibodies if the same pathogen enters again, often preventing illness before it develops. Antibody concentration need not stay permanently at its maximum: it is the capacity for a rapid specific response that matters. A vaccine does not directly kill pathogens, is not an antibiotic, and is not a treatment for an infection already established in this model. If a large proportion of a population is immunised, fewer susceptible hosts can sustain transmission, reducing spread and helping protect others. Protection is not absolute for every individual. Evaluate global vaccination by considering prevented illness/deaths, reduced spread, access, cost, distribution and uptake; uneven coverage can leave transmission opportunities. No named vaccine schedule or detailed side-effect list is required.\nAntibiotics such as penicillin kill susceptible bacteria and have greatly reduced deaths from bacterial infections. Different bacteria may require different antibiotics; resistance can make an otherwise useful antibiotic ineffective. Antibiotics do not kill viruses, which reproduce inside host cells and lack the bacterial targets of these medicines. Drugs that attack viral reproduction can also damage host cells, making safe antiviral development difficult; this does not mean antiviral medicines never exist. Painkillers relieve symptoms such as pain but do not kill the infecting pathogen. Feeling better is not evidence that an infection has been eliminated. Distinguish prevention by vaccination, treatment of susceptible bacteria by an appropriate antibiotic, and symptom relief by a painkiller. This is treatment-principle reasoning, not a prescription. The linked resistance explanation below supplies the selection mechanism once rather than repeating it in each disease example.\nResistance and selection: bacteria reproduce rapidly, and random mutations can produce variation, including strains resistant to an antibiotic. A resistant variant can exist before exposure. The antibiotic provides selection pressure: susceptible bacteria are killed, resistant ones survive and reproduce, passing on resistance so their proportion increases. This is natural selection, not individual bacteria choosing or acquiring a useful mutation because they need it. Resistant strains can spread between people; a treatment that no longer kills them can fail, making infection harder to control. MRSA is an example of antibiotic-resistant bacteria, not a virus or proof that every antibiotic fails. Reuse Inheritance → Selection and evolution for the general variation/survival/reproduction sequence.\nReducing resistance requires avoiding inappropriate antibiotic prescribing (especially for viral infections), following prescribed treatment rather than self-adjusting it, restricting agricultural antibiotic use and infection-control measures such as hygiene and reducing transfer between patients. The specification includes completing prescribed courses; this means adherence to the prescribed plan and any updated clinician instructions, not a claim that every course guarantees all bacteria die. Do not infer from this that patients should choose their own dose or duration. Preventing infections reduces opportunities for both spread and antibiotic use. Developing new antibiotics is slow and costly and may not keep pace with emerging resistant strains, so new drugs alone are not a sufficient strategy.",
  "Developing medicines": "Drug origins: traditionally useful chemicals were extracted from plants and microorganisms. Digitalis, a heart drug, originated from foxgloves; aspirin originated from willow; Alexander Fleming discovered penicillin from Penicillium mould. Many modern drugs are synthesised by chemists in the pharmaceutical industry, sometimes starting from a plant-derived chemical. Natural origin does not establish safety, purity or a suitable dose, and a plant extract is not automatically equivalent to a tested medicine.\nA candidate medicine must be investigated for toxicity (harmful effects), efficacy (whether it works) and suitable dose (an amount balancing benefit and harm). Preclinical testing uses laboratory cells, tissues and live animals before clinical testing in humans; results in one model cannot guarantee the same outcome in people. Clinical trials use healthy volunteers and patients as appropriate. Very low doses are used initially to assess safety; if sufficiently safe, further trials evaluate effectiveness and find an optimum dose. Increasing dose can increase adverse effects without adding useful benefit, so the highest tested dose is not automatically best. Testing reduces uncertainty but does not prove a drug can never cause harm.\nIn a suitable placebo-controlled trial, the comparison looks like treatment but lacks the active medicine, helping separate its effect from expectations and other influences. Use a placebo only where appropriate; a comparison may need existing treatment instead. Random allocation reduces systematic differences between groups. In double-blind trials neither participants nor the people assessing outcomes know who receives each treatment, reducing expectation and assessment bias. These measures are different: randomisation is not blinding, and a placebo is not an extra active drug. Keep groups comparable, measure specified outcomes over the same time, consider sample size and variation, record adverse effects and investigate dropouts. Publish testing/trial results after scrutiny by peer review: independent experts examine methods, evidence and conclusions, rather than simply accepting an advertisement. Peer review can identify weaknesses but is not a guarantee that a result is correct.",
  "Interpreting evidence": "For drug-trial evidence, compare proportions as well as counts when group sizes differ and assess benefit alongside adverse effects. For example, 30 of 100 improved with a placebo and 50 of 100 with a candidate drug: the difference is 20 percentage points, or a relative increase of (50−30)/30 × 100 ≈ 66.7% compared with the placebo improvement rate. This one comparison does not prove universal benefit; check random allocation, blinding, follow-up, withdrawals and variation. Small differences or small samples can be uncertain. A lower dose with similar benefit and fewer harmful effects may be preferable in supplied evidence, but the trial does not license personal prescribing. For resistance data, distinguish number from proportion: 2 resistant bacteria among 100 is 2%, while 40 among 50 is 80%. A rise in resistant proportion can occur when susceptible bacteria are killed, followed by reproduction of survivors; it does not establish that each bacterium changed itself. Use the existing percentage-reduction question and placebo/double-blind explanations to practise calculation and fair comparison."
};
const MEDICINES_QUESTIONS=[
  {
    "id": "aqa-medicines-completion-q01",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Vaccination and antibiotics",
    "specRefs": [
      "4.3.1.7"
    ],
    "q": "A supplied vaccine contains inactive pathogen material. Antibody levels rise and later fall; on exposure to the same pathogen months later, the response is faster. Explain the pattern and correct the claim that protection requires antibodies to stay permanently at their maximum.",
    "answer": "Antigens in inactive material stimulate white blood cells to produce matching antibodies. Immune memory supports a faster specific antibody response on later exposure, often preventing illness before it develops. Antibody levels can fall without losing all capacity to respond rapidly. The vaccine prepares immunity rather than directly killing pathogens or treating an established infection.",
    "explain": "Four criteria: antigen/white-cell stimulation; specific antibodies; faster later response despite falling levels; prevention versus direct killing/treatment. A vaccine is not an antibiotic and protection is not guaranteed for every person.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Vaccines, medicines and resistance practice"
  },
  {
    "id": "aqa-medicines-completion-q02",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Vaccination and antibiotics",
    "specRefs": [
      "4.3.1.7"
    ],
    "q": "Two regions have similar populations but vaccination reaches most people in one and leaves several poorly served communities in the other. Explain possible differences in spread and evaluate expanding global vaccination, including benefits and practical limitations.",
    "answer": "High coverage reduces susceptible hosts and transmission opportunities, helping protect others as well as vaccinated individuals. Gaps in coverage can sustain spread. Wider access can prevent illness/deaths and reduce transmission, but cost, distribution, access and uptake affect delivery; no vaccine guarantees every individual remains uninfected. Compare coverage patterns and other influences before claiming vaccination alone explains every regional difference.",
    "explain": "Four criteria: individual/population mechanism; effect of coverage gaps; benefits; practical/evidence limitations. Do not claim vaccination cures already infected people or instantly eliminates disease worldwide.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Vaccines, medicines and resistance practice"
  },
  {
    "id": "aqa-medicines-completion-q03",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Vaccination and antibiotics",
    "specRefs": [
      "4.3.1.8"
    ],
    "q": "Case A has a confirmed viral infection and pain; case B has a bacterium susceptible to one antibiotic but resistant to another. Compare what an antibiotic and a painkiller can achieve, and explain why safely targeting a virus is difficult.",
    "answer": "A painkiller can reduce pain in either case without killing pathogens. Antibiotics do not kill the virus in A; it reproduces inside host cells, making it difficult to target without harming host tissues. An appropriate antibiotic can kill susceptible bacteria in B, while the resistant strain may survive the other drug. Relief of symptoms does not show the pathogen is gone.",
    "explain": "Four criteria: symptom relief versus pathogen removal; antibiotic/virus distinction; host-cell difficulty; specific susceptibility. This compares medicine functions, not personal prescribing. Do not infer that no antiviral drug can ever work.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Vaccines, medicines and resistance practice"
  },
  {
    "id": "aqa-medicines-completion-q04",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Developing medicines",
    "specRefs": [
      "4.3.1.9"
    ],
    "q": "A plant chemical is proposed as a medicine. Use the origins of digitalis, aspirin and penicillin to explain why this is plausible but does not prove safety. Outline the sequence from candidate discovery to clinical dose testing.",
    "answer": "Digitalis originated from foxgloves, aspirin from willow, and Fleming discovered penicillin from Penicillium mould. Modern drugs are often synthesised, sometimes from a natural starting chemical. Natural origin does not prove safety or dose. Preclinical cells/tissues/live-animal tests investigate toxicity and efficacy; clinical trials use healthy volunteers/patients as appropriate, initially at very low doses, then further effectiveness/optimum-dose tests if sufficiently safe.",
    "explain": "Five criteria: three correct origins/discovery; modern synthesis; natural-safety limitation; preclinical scope; clinical low-dose progression. Do not confuse the mould with a plant or assume animal results guarantee human outcomes.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Vaccines, medicines and resistance practice"
  },
  {
    "id": "aqa-medicines-completion-q05",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Developing medicines",
    "specRefs": [
      "4.3.1.9"
    ],
    "q": "A developer advertises a drug using an unblinded volunteer comparison: participants chose their group and only successes were reported. Propose improvements involving randomisation, a suitable control, double blinding, reporting and peer review.",
    "answer": "Randomly allocate participants to reduce systematic group differences. Use an appropriate placebo or existing-treatment comparison; in a suitable double-blind trial neither participants nor outcome assessors know allocation. Define outcomes/follow-up, report adverse effects, withdrawals and unsuccessful results, and use adequate samples. Publish after independent peer review of methods/evidence/conclusions; this scrutiny is not a guarantee of correctness.",
    "explain": "Five criteria: random allocation; suitable comparison; both parties blinded; complete reliable reporting; peer-review purpose/limit. A placebo is not another dose of active drug; randomisation alone does not remove expectation bias.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Vaccines, medicines and resistance practice"
  },
  {
    "id": "aqa-medicines-completion-q06",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Interpreting evidence",
    "specRefs": [
      "4.3.1.9"
    ],
    "q": "Illustrative trial groups each contain 100 people: placebo 30 improved/2 adverse effects; low dose 50 improved/4 adverse effects; high dose 52 improved/18 adverse effects. Evaluate benefit, toxicity and dose choice, and state what further evidence is needed.",
    "answer": "Low dose improves 20 percentage points more than placebo; high dose adds only 2 points over low dose but reports 14 more adverse-effect cases per 100. The lower dose looks a better benefit/harm balance in these supplied data, but sample variation and severity/duration of effects matter. Check randomisation, blinding, comparable follow-up, withdrawals and repeat/larger trials before a confident conclusion.",
    "explain": "Four criteria: quantified benefit comparison; harm comparison; qualified dose judgement; reliability/uncertainty evidence. Improved and adverse-effect groups may overlap, so do not subtract them to invent a net success count. These are invented trial data, not treatment advice.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Vaccines, medicines and resistance practice"
  },
  {
    "id": "aqa-medicines-completion-q07",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Vaccination and antibiotics",
    "specRefs": [
      "4.6.3.4"
    ],
    "q": "Before an antibiotic is applied, a population contains a few resistant bacteria. After exposure susceptible numbers fall and descendants of survivors dominate. Explain the causal sequence and reject the claim that bacteria deliberately mutate because they need resistance.",
    "answer": "Random mutation produces inherited variation; resistant variants can exist before treatment. The antibiotic is selection pressure, killing susceptible bacteria. Resistant survivors reproduce rapidly and pass on resistance, increasing their proportion; they can spread to new hosts. The population evolves through differential survival/reproduction, not deliberate adaptation of each bacterium.",
    "explain": "Five criteria: prior random variation; selection pressure/susceptible death; resistant survival; reproduction/inheritance; population change/spread. Antibiotics do not cause a useful mutation on demand. This is natural selection, not vaccination or immune memory in bacteria.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Vaccines, medicines and resistance practice"
  },
  {
    "id": "aqa-medicines-completion-q08",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Interpreting evidence",
    "specRefs": [
      "4.6.3.4"
    ],
    "q": "A sampled bacterial population contains 40 resistant bacteria among 50 in total. Calculate the percentage resistant.",
    "answer": "80%",
    "explain": "40/50 × 100 = 80%. This is a proportion of the sampled population, not 80 bacteria or proof that 80% of individual bacteria mutated during treatment. Compare sampling and time points before inferring how the population changed.",
    "marks": 2,
    "tier": "both",
    "type": "short",
    "level": 2,
    "style": "Vaccines, medicines and resistance practice",
    "accepted": [
      "80",
      "80%",
      "80 percent",
      "80 per cent"
    ]
  },
  {
    "id": "aqa-medicines-completion-q09",
    "subject": "Biology",
    "topic": "Infection & Response",
    "section": "Vaccination and antibiotics",
    "specRefs": [
      "4.3.1.8",
      "4.6.3.4"
    ],
    "q": "A hospital proposes relying only on new antibiotics to control a resistant strain such as MRSA. Evaluate this proposal and explain how appropriate prescribing, prescribed-treatment adherence, infection control and agricultural-use restrictions can contribute.",
    "answer": "New antibiotics are costly and slow to develop and may not keep pace with new resistant strains. Avoiding inappropriate use, such as against viruses, reduces unnecessary selection pressure; following prescribed treatment means following the plan and updated clinician instructions rather than self-adjusting it. Hygiene and limiting transfer reduce spread; restricting agricultural use reduces unnecessary antibiotic exposure. MRSA resistance makes treatment harder but does not imply every antibiotic fails.",
    "explain": "Five criteria: new-drug limitation; appropriate prescribing/selection; qualified adherence; infection control/spread; agricultural exposure. Do not promise that every course kills every bacterium or that patients should decide their own duration. Prevention and multiple controls complement drug development.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Vaccines, medicines and resistance practice"
  }
];
const medicinesBeforeLesson=activeLesson,medicinesBeforeQuestions=activeQuestions;
activeLesson=function(s,c,t){const l=medicinesBeforeLesson(s,c,t);if(!l||!cellCompletionPath(s,c)||t!=='Infection & Response')return l;const sections=l.sections.map(x=>MEDICINES_EXTENSIONS[x.title]?{...x,body:x.body+'\n\n'+MEDICINES_EXTENSIONS[x.title]}:x);return {...l,sections,learn:sections.map(x=>x.body).join('\n\n')};};
activeQuestions=function(s,c=choice(s)){const qs=medicinesBeforeQuestions(s,c);return cellCompletionPath(s,c)?[...qs,...MEDICINES_QUESTIONS.map(q=>({...q,board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}))]:qs;};
