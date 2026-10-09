'use strict';
const ECOLOGY_IMPACT_EXTENSIONS={
  "Carbon, water and decay": "Materials move repeatedly between living (biotic) and non-living (abiotic) components; this recycling supplies building blocks for future organisms. Carbon-cycle pathway: atmospheric carbon dioxide → photosynthesis → plant/algal organic molecules → feeding → animal molecules. Plants, animals and microorganisms respire, returning carbon dioxide to the atmosphere. Dead organisms and waste → decomposing microorganisms; decomposers respire and return carbon dioxide, and decomposition releases mineral ions into soil for root uptake and new growth. Carbon in fuels returns as carbon dioxide during combustion. Plants both photosynthesise and respire; feeding transfers carbon rather than creating it. Carbon atoms are recycled, while energy flows through the ecosystem and is transferred to the surroundings.\nWater-cycle pathway: seas/lakes → evaporation → water vapour → cooling/condensation → clouds → precipitation → fresh water on land → surface runoff or infiltration/groundwater → rivers → seas. Plants absorb water through roots and lose water vapour through transpiration; animals obtain water by drinking/feeding and return it through respiration and excretion. Fresh water is needed by plants and land animals; continuous evaporation and precipitation replenish it. Infiltration enters the ground; runoff flows over it. Nitrogen-cycle detail is not required in this Trilogy unit.\nInterpret the labelled diagrams: identify the reservoir at each end of an arrow and the process on the arrow. Photosynthesis removes atmospheric CO2, respiration adds it; decomposer respiration differs from mineral-ion release to soil. Evaporation is liquid → gas, condensation gas → liquid; clouds are condensed droplets/ice rather than invisible vapour. Predict that fewer decomposers can slow recycling and reduce mineral availability; do not claim matter is destroyed.",
  "Biodiversity and food security": "For this Trilogy section, biodiversity means the variety of different species on Earth or in an ecosystem, rather than the number of individuals of just one species. A diverse ecosystem can offer alternative food sources, shelter and ways of maintaining the physical environment, reducing dependence on any single species and supporting stability. Loss of one food species may be buffered by alternatives, but this does not guarantee immunity to every disturbance. Humans rely on functioning ecosystems for food and other resources; maintaining biodiversity supports the future of our species. Many human activities reduce biodiversity; conservation seeks to reduce these effects.\nIllustrative comparison: communities A and B each contain 100 individual organisms, but A has 2 species and B has 8. B has greater species richness; equal total individuals does not imply equal biodiversity. If a consumer in A relies on only one food species while a consumer in B has three suitable alternatives, removal of one food source may have a greater impact in A. State the supplied food relationships; richness alone does not prove the exact response.",
  "Human impacts and biodiversity": "Population growth and higher standards of living generally increase resource use and waste production. Poorly managed waste causes pollution: sewage, fertiliser and toxic chemicals in water; smoke and acidic gases in air; landfill and toxic chemicals on land. Pollutants can kill plants and animals and reduce species diversity. For example, fertiliser entering water can cause algal growth; subsequent decomposition consumes oxygen, reducing survival of aquatic animals. Sewage decomposition also uses oxygen; toxic chemicals can directly harm organisms. Do not assume all water pollution has the same mechanism.\nBuilding, quarrying, farming and dumping waste reduce land available as habitats. Removing peat for garden compost destroys a habitat for plants, animals and microorganisms. Drained peat can decay and peat can burn, releasing stored carbon as carbon dioxide. Cheap compost/food-production benefits conflict with habitat preservation and lower emissions; compare alternatives, cost and evidence, rather than treating every choice as cost-free.\nLarge-scale tropical deforestation creates land for cattle and rice fields and crops for biofuels. Removing trees destroys habitats and food relationships, can reduce biodiversity and leaves fewer plants removing carbon dioxide by photosynthesis. Burning or decomposition of removed biomass releases CO2; lost roots can increase erosion. Cattle and rice cultivation can also contribute methane. Biofuels can displace fossil fuels, but clearing forest has habitat and carbon costs, so renewable does not automatically mean harmless.\nIncreasing carbon dioxide and methane contribute to global warming. Biological consequences can include changed species distributions and migration, altered flowering/breeding times, loss of suitable habitats and changed food availability; some species benefit in one area while others decline or cannot move fast enough. Illustrative regional observations: mean temperature anomaly 0/0.5/1.0 °C and mean first flowering day 120/115/110. Earlier flowering is associated with greater anomaly; this small dataset alone does not establish global causation or every species' response. Climate conclusions use multiple independent lines of evidence and systematic reviews of thousands of peer-reviewed publications. Uncertainty about local timing, magnitude, interacting causes or incomplete sampling does not by itself negate the wider scientific consensus. Distinguish measurement uncertainty from a claim that all outcomes are equally likely.",
  "Evaluating interventions": "Positive human interactions include endangered-species breeding programmes, protection and regeneration of rare habitats, field margins and hedgerows around single-crop agricultural fields, government measures reducing deforestation and CO2 emissions, and recycling rather than landfill. Explain the mechanism: breeding can increase numbers/genetic representation but needs suitable habitat and careful management; habitat protection preserves food/shelter and regeneration restores them; margins/hedges add habitat and resources but use productive land; reduced deforestation preserves species and carbon uptake; reduced CO2 emissions limits climate pressure; recycling reduces waste/resource extraction but requires collection, energy and funding. Negative interactions such as pollution, habitat clearance and greenhouse-gas emissions must be evaluated alongside these positive actions.\nWorked illustrative choice: habitat restoration costs £20,000 and supports 12 target species after two years; a captive breeding programme costs £15,000 and raises one endangered population from 20 to 35; hedgerows cost £5,000, reduce cropped area by 2%, and support 8 target species. These different outcomes are not interchangeable. The population increase is 15/20 × 100 = 75%, which does not alone measure ecosystem biodiversity. A £25,000 budget can fund restoration plus hedgerows, or breeding plus hedgerows; choose according to the conservation aim, local needs and evidence. Consider jobs, food production, land access, money and long-term maintenance; identify uncertainties such as monitoring method and species overlap. A justified answer may favour a different option when the stated priority differs."
};
const ECOLOGY_IMPACT_QUESTIONS=[
  {
    "id": "aqa-ecology-impact-q01",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Carbon, water and decay",
    "specRefs": [
      "4.7.2.2"
    ],
    "q": "Use the carbon-cycle diagram. Trace carbon from atmosphere to a herbivore and back; explain how decomposing microorganisms return both CO2 and mineral ions and why plants and future organisms benefit.",
    "answer": "Photosynthesis fixes atmospheric CO2 into plant molecules; feeding transfers carbon to the herbivore. Plant, animal and decomposer respiration return CO2 to the atmosphere; dead material/waste is decomposed and mineral ions return to soil for plant root uptake. Recycling supplies future organisms with building blocks.",
    "explain": "Follow each labelled arrow and distinguish gas returned by respiration from mineral ions in soil. Plants also respire; carbon is recycled rather than destroyed.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Materials cycles and human impacts practice",
    "visual": "ecology-carbon-cycle"
  },
  {
    "id": "aqa-ecology-impact-q02",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Carbon, water and decay",
    "specRefs": [
      "4.7.2.2"
    ],
    "q": "Use the water-cycle diagram to explain how sea water can become fresh water available to a land plant and return to sea. Distinguish evaporation, condensation, infiltration, runoff and transpiration.",
    "answer": "Evaporation makes vapour; cooling condenses it into cloud droplets, then precipitation supplies fresh water on land. Water infiltrates soil for root uptake; transpiration returns vapour from leaves. Runoff and groundwater feed rivers returning to sea. Evaporation is liquid to gas, condensation gas to liquid; infiltration is into ground and runoff over ground.",
    "explain": "Name processes, directions and plant use, not just reservoirs. Fresh water is replenished continuously; clouds contain condensed droplets/ice.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Materials cycles and human impacts practice",
    "visual": "ecology-water-cycle"
  },
  {
    "id": "aqa-ecology-impact-q03",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Carbon, water and decay",
    "specRefs": [
      "4.7.2.2"
    ],
    "q": "A student says animals create carbon when feeding, plants never release CO2, decomposers return only energy, and minerals disappear forever. Correct each claim and predict an effect of reduced decomposition.",
    "answer": "Feeding transfers existing carbon in molecules; plants respire and release CO2 as well as taking it up by photosynthesis. Decomposers respire returning CO2 and release mineral ions to soil. Materials are recycled as future building blocks; energy flows and is transferred to surroundings. Less decomposition can slow mineral recycling and plant growth.",
    "explain": "Distinguish matter cycling from energy flow. Reduced mineral availability is a plausible effect; do not require a nitrogen cycle.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Materials cycles and human impacts practice"
  },
  {
    "id": "aqa-ecology-impact-q04",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Biodiversity and food security",
    "specRefs": [
      "4.7.3.1"
    ],
    "q": "Two communities each have 100 organisms; A has 2 species and B has 8. A consumer has one food species in A and three suitable alternatives in B. Compare biodiversity and predicted stability after one food species is lost; explain human dependence and a limitation.",
    "answer": "B has greater species richness despite equal individual counts. Alternative foods can reduce dependence on one species and buffer its loss, supporting stability. Humans rely on ecosystem resources and functions, so maintaining biodiversity matters. Actual outcomes depend on food relationships and other conditions, not richness alone.",
    "explain": "Use the supplied alternatives to explain the mechanism. Biodiversity is species variety; neither population size nor guaranteed stability is the definition.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Materials cycles and human impacts practice"
  },
  {
    "id": "aqa-ecology-impact-q05",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Human impacts and biodiversity",
    "specRefs": [
      "4.7.3.2"
    ],
    "q": "Explain why population growth and rising living standards can increase pollution. Give specified sources in water, air and land, and connect two to biodiversity loss with mechanisms.",
    "answer": "More resources are used and more waste produced; poor handling increases pollution. Water sources include sewage, fertiliser and toxic chemicals; air smoke/acidic gases; land landfill/toxic chemicals. Toxic chemicals can kill organisms; sewage/algal decomposition can use dissolved oxygen, killing aquatic animals and reducing species diversity.",
    "explain": "Give all three environments and causal links, not just the word pollution. Different pollutants need different explanations.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Materials cycles and human impacts practice"
  },
  {
    "id": "aqa-ecology-impact-q06",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Human impacts and biodiversity",
    "specRefs": [
      "4.7.3.3"
    ],
    "q": "Describe four land uses that reduce habitat. Evaluate peat compost extraction, including habitat, decay/burning, carbon and the conflict with affordable compost for food production.",
    "answer": "Building, quarrying, farming and dumping waste reduce habitat area. Peat extraction destroys habitat for plants, animals and microorganisms; decay or burning releases CO2. Cheap compost may support food production, but biodiversity/emissions costs favour protecting peat and assessing substitutes, affordability and evidence.",
    "explain": "Connect habitat loss to species variety and stored carbon to CO2. Explain both pressures and justify a decision rather than claiming an option has no costs.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Materials cycles and human impacts practice"
  },
  {
    "id": "aqa-ecology-impact-q07",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Human impacts and biodiversity",
    "specRefs": [
      "4.7.3.4"
    ],
    "q": "A tropical forest is cleared for cattle, rice and biofuel crops. Identify these deforestation drivers and evaluate habitat, atmospheric carbon and economic/energy effects. Is renewable fuel automatically harmless?",
    "answer": "Cattle/rice fields and biofuel crops need land. Clearance destroys habitat/food relationships and can reduce biodiversity; fewer trees take up CO2 and burning/decay releases it. Farming provides food/income and biofuel may replace fossil fuel, but forest clearance has habitat/carbon costs; renewable is not automatically harmless.",
    "explain": "Use the specified drivers and distinguish reduced uptake from increased release. A conclusion should balance supplied benefits against ecological costs.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Materials cycles and human impacts practice"
  },
  {
    "id": "aqa-ecology-impact-q08",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Human impacts and biodiversity",
    "specRefs": [
      "4.7.3.5"
    ],
    "q": "Temperature anomalies 0/0.5/1.0 °C correspond to flowering days 120/115/110 in an illustrative region. Interpret the trend, name two warming gases and explain possible biological consequences and why these data alone do not establish global causation.",
    "answer": "Flowering is earlier by 10 days across the supplied 1.0 °C anomaly range. Increasing CO2 and methane contribute to warming; species ranges, breeding/flowering times, food availability and habitat suitability can change. The small regional association may have confounders and does not establish global causation or every species response.",
    "explain": "Describe both variables and units; avoid reversing day number and date. Regional data must be placed alongside wider evidence and uncertainty.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Materials cycles and human impacts practice"
  },
  {
    "id": "aqa-ecology-impact-q09",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Human impacts and biodiversity",
    "specRefs": [
      "4.7.3.5"
    ],
    "q": "Evaluate the claim: because future local species responses are uncertain, there is no scientific consensus about global warming. What evidence supports consensus and what kinds of uncertainty can remain?",
    "answer": "Consensus reflects systematic reviews of thousands of peer-reviewed publications and multiple lines of evidence. Local response magnitude/timing, interacting causes and incomplete sampling can remain uncertain. Such limits do not erase the broader conclusion; evaluate evidence quality and distinguish a specific uncertain prediction from the established wider pattern.",
    "explain": "Do not treat one small dataset as the entire evidence base or uncertainty as proof that every claim is equally supported.",
    "marks": 3,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Materials cycles and human impacts practice"
  },
  {
    "id": "aqa-ecology-impact-q10",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Evaluating interventions",
    "specRefs": [
      "4.7.3.6"
    ],
    "q": "Explain how five conservation approaches can reduce human impacts: endangered-species breeding, rare-habitat protection/regeneration, field margins/hedges, government reductions in deforestation/CO2 emissions, and recycling. Give relevant trade-offs.",
    "answer": "Breeding supports endangered numbers but needs habitat/management; protection/regeneration preserves/restores resources; margins/hedges add habitat around monocultures but reduce cropped area; government deforestation/emission measures preserve habitat/carbon uptake and limit climate pressure but can affect jobs/costs; recycling reduces landfill/resource extraction but needs energy, collection and funds.",
    "explain": "Use mechanisms specific to each programme, include both government actions, and recognise competing social/economic pressures.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Materials cycles and human impacts practice"
  },
  {
    "id": "aqa-ecology-impact-q11",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Evaluating interventions",
    "specRefs": [
      "4.7.3.6",
      "4.7.3.1"
    ],
    "q": "Restoration costs £20,000/supports 12 target species; breeding costs £15,000/raises one endangered population 20→35; hedges cost £5,000/support 8 target species but reduce cropped land 2%. With £25,000, choose and justify a plan for habitat diversity, calculate the breeding percentage rise, and explain why outcomes cannot simply be added as species totals.",
    "answer": "Restoration plus hedges costs £25,000 and can improve habitat diversity, with a cropped-area/maintenance trade-off; breeding plus hedges costs £20,000 and may suit an endangered-species priority. Breeding increase is (35−20)/20 × 100 = 75%, an individual-population change rather than species richness. Species may overlap between sites; different measures and aims cannot simply be added.",
    "explain": "Credit a justified alternative linked to the stated aim and budget. Divide the increase by the initial population, check overlap and consider monitoring/long-term costs.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Materials cycles and human impacts practice"
  },
  {
    "id": "aqa-ecology-impact-q12",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Evaluating interventions",
    "specRefs": [
      "4.7.3.6"
    ],
    "q": "A farm clears hedges and pollutes a stream, then claims captive breeding alone cancels the harm. Explain negative and positive interactions, assess this claim and propose better evidence for a combined conservation plan.",
    "answer": "Clearance removes habitat/resources and pollution can kill organisms, reducing biodiversity. Breeding can protect one endangered population but does not automatically restore habitats or water quality. Combine pollution reduction, hedgerow/rare-habitat protection or regeneration and appropriate breeding; compare before/after species data with controls, costs, crop impacts and long-term survival.",
    "explain": "Positive action does not prove equal compensation for unrelated harm. Relate interventions to mechanisms and evaluate conflicting pressures with evidence.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Materials cycles and human impacts practice"
  }
];
const ecologyImpactBeforeLesson=activeLesson,ecologyImpactBeforeQuestions=activeQuestions;
activeLesson=function(s,c,t){const l=ecologyImpactBeforeLesson(s,c,t);if(!l||!cellCompletionPath(s,c)||t!=='Ecology')return l;const sections=l.sections.map(x=>ECOLOGY_IMPACT_EXTENSIONS[x.title]?{...x,body:x.body+'\n\n'+ECOLOGY_IMPACT_EXTENSIONS[x.title]}:x);return {...l,sections,learn:sections.map(x=>x.body).join('\n\n')};};
activeQuestions=function(s,c=choice(s)){const qs=ecologyImpactBeforeQuestions(s,c);return cellCompletionPath(s,c)?[...qs,...ECOLOGY_IMPACT_QUESTIONS.map(q=>({...q,board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}))]:qs;};
// Accessible schematic diagrams and illustrative graph answer checks.
function ecologyCycle(kind){
 const carbon=kind==='carbon',nodes=carbon?[['Atmospheric CO₂',350,40],['Plant / algal carbon',150,150],['Animal carbon',550,150],['Dead material / waste',550,280],['Microorganisms',150,280],['Soil mineral ions',350,380]]:[['Sea / lakes',80,40],['Water vapour',300,40],['Cloud droplets',540,40],['Precipitation',540,180],['Fresh water on land',300,180],['Plant roots / leaves',80,180],['Rivers / groundwater',300,340]];
 const edges=carbon?[[0,1,'photosynthesis'],[1,2,'feeding'],[2,0,'respiration'],[1,0,'plant respiration'],[2,3,'death / waste'],[1,3,'death / waste'],[3,4,'decomposition'],[4,0,'respiration'],[4,5,'mineral release'],[5,1,'root uptake']]:[[0,1,'evaporation'],[1,2,'condensation'],[2,3,'falling rain / snow'],[3,4,'fresh-water supply'],[4,5,'root uptake'],[5,1,'transpiration'],[4,6,'runoff / infiltration'],[6,0,'return to sea']];
 // Diagram lines have arrowheads and each process is also spelled out below for small screens.
 const id='ecology-'+kind+'-arrow';return `<figure><figcaption>${carbon?'Carbon and mineral recycling':'Water cycle'} — schematic, not to scale</figcaption><svg style="width:100%;height:auto" viewBox="0 0 720 430" role="img" aria-label="${carbon?'Photosynthesis transfers atmospheric carbon into plants; feeding to animals; respiration returns carbon dioxide. Decomposition returns carbon dioxide and soil mineral ions.':'Evaporation, condensation and precipitation supply fresh water; plant uptake, transpiration, runoff and groundwater return water through the cycle.'}"><defs><marker id="${id}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#467c67"/></marker></defs>${edges.map(([a,b])=>{const [,x,y]=nodes[a],[,u,v]=nodes[b],dx=u-x,dy=v-y,len=Math.hypot(dx,dy),gap=Math.min(75/Math.abs(dx/len),20/Math.abs(dy/len))+9;return `<path d="M${x+dx/len*gap} ${y+dy/len*gap} L${u-dx/len*gap} ${v-dy/len*gap}" stroke="#467c67" fill="none" marker-end="url(#${id})"/>`;}).join('')}${nodes.map(([label,x,y])=>`<rect x="${x-75}" y="${y-20}" width="150" height="40" rx="8" fill="#eef6f1" stroke="#467c67"/><text x="${x}" y="${y+4}" text-anchor="middle" font-size="12" fill="#183d2f">${label}</text>`).join('')}</svg><ol>${edges.map(([a,b,label])=>`<li>${nodes[a][0]} → <b>${label}</b> → ${nodes[b][0]}</li>`).join('')}</ol>${carbon?'<p>Combustion of fuels also returns carbon dioxide. Mineral ions are recycled separately from carbon; energy flows rather than cycles.</p>':'<p>Runoff travels over land; infiltration enters the ground. Clouds contain condensed droplets or ice. Animals take up and return water too.</p>'}</figure>`;
}
function ecologyPredatorGraph(){const prey=[20,40,60,40,20,30,50],predator=[5,8,15,20,12,7,10];return `<figure><figcaption>Illustrative predator–prey populations</figcaption><svg style="width:100%;height:auto" viewBox="0 0 480 330" role="img" aria-label="Prey peak 60 at month 2; predators peak 20 at month 3. Prey peak precedes predator peak."><path d="M60 35V255H420" fill="none" stroke="#294754"/>${[0,1,2,3,4,5,6].map(n=>`<text x="${60+n*55}" y="278">${n}</text>`).join('')}${[0,20,40,60].map(n=>`<text x="30" y="${259-n*3.4}">${n}</text>`).join('')}<polyline points="${prey.map((y,x)=>`${60+x*55},${255-y*3.4}`).join(' ')}" fill="none" stroke="#287a56" stroke-width="3"/><polyline points="${predator.map((y,x)=>`${60+x*55},${255-y*3.4}`).join(' ')}" fill="none" stroke="#8a4282" stroke-dasharray="6 4" stroke-width="3"/><text x="60" y="20">Population (individuals)</text><text x="190" y="308">Time (months)</text></svg><p>Key: solid green = prey; dashed purple = predators. Prey: 20,40,60,40,20,30,50. Predators: 5,8,15,20,12,7,10. The supplied data illustrate a lag; real communities have other influences.</p></figure>`;}
const ecologyImpactBeforeVisual=cellVisual;
cellVisual=function(type){return type==='ecology-carbon-cycle'?ecologyCycle('carbon'):type==='ecology-water-cycle'?ecologyCycle('water'):type==='ecology-predator-graph'?ecologyPredatorGraph():ecologyImpactBeforeVisual(type);};
const ecologyImpactBeforeDiagrams=bioDiagramSection;
bioDiagramSection=function(topic){const prior=ecologyImpactBeforeDiagrams(topic);if(topic!=='Ecology'||!cellCompletionPath('Biology',choice('Biology')))return prior;return prior+`<section class="card"><h3>Ecology models and graph checks</h3>${ecologyPredatorGraph()}${ecologyCycle('carbon')}${ecologyCycle('water')}</section>`;};
const ecologyImpactBeforeSupport=biologySupportInventory;
biologySupportInventory=function(){const section=activeLesson('Biology',{board:'aqa',tier:'foundation',courseContext:'trilogy'},'Ecology')?.sections.find(s=>s.title==='Biodiversity and food security');return [...ecologyImpactBeforeSupport(),{id:'Biology|support|ecology-shared-biodiversity',subject:'Biology',kind:'support',tier:'both',label:'Reviewed shared biodiversity teaching',fingerprint:auditFingerprint(section?.body||''),studentVisible:Boolean(section)},...['carbon','water','predator'].map(k=>({id:'Biology|support|ecology-'+k+'-diagram',subject:'Biology',kind:'support',tier:'both',label:'Ecology '+k+' model',fingerprint:auditFingerprint(k==='predator'?ecologyPredatorGraph():ecologyCycle(k)),studentVisible:true}))];};
