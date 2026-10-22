'use strict';
const ECOLOGY_FIELD_EXTENSIONS={
  "Communities and ecosystems": "Levels of ecological organisation: an individual is one organism; a population is individuals of one species in an area; a community contains the populations of different species; an ecosystem is their interaction with the non-living environment. Organisms obtain materials needed for survival and reproduction from their surroundings and other organisms. Plants compete for light, space, water and mineral ions; animals compete for food, mates and territory. Interdependence includes food, shelter, pollination and seed dispersal. Removing one species can affect several linked populations: fewer pollinators can reduce seed production, which can reduce food for seed-eating birds. A stable community has species and environmental factors in balance, with population sizes fairly constant overall, although short-term fluctuations occur.\nIllustrative pollinator-removal observations: year 0/1/2, insect visits per hour 30/15/5, seed production per plant 100/70/30, seed-eating birds 40/34/20. All decrease, with bird numbers responding through food availability. The association supports an interdependence explanation but does not alone rule out weather or another shared cause; use controls and repeated observations.",
  "Competition and adaptation": "Abiotic factors are non-living: light intensity, temperature, moisture, soil pH and mineral content, wind intensity and direction, carbon dioxide available to plants, and dissolved oxygen available to aquatic animals. A change can alter survival, growth and reproduction. Less light can reduce photosynthesis; unsuitable pH can limit plant growth; low dissolved oxygen can restrict aerobic respiration in fish. Wind affects water loss and dispersal. Effects depend on the organism and the range: hotter is not always better. Biotic factors include food availability, new predators, new pathogens and competition. A competing species can reduce another population so far that too few individuals remain to breed successfully.\nIllustrative paired field observations: light intensity 100/300/500 arbitrary units, plant counts per equal area 2/7/12. Abundance rises with light in this dataset; light could increase photosynthesis, but moisture or soil may also differ. In a separate pond before/after a new predator arrives, prey counts fall from 80 to 35. Increased predation is plausible; identical sampling effort, disease observations and repeated ponds help evaluate other explanations.\nStructural adaptations are physical features, such as a thick waxy cuticle reducing water loss. Behavioural adaptations are actions, such as sheltering in a burrow during the hottest part of a desert day. Functional adaptations are physiological processes, such as producing concentrated urine to conserve water. Explain feature → effect → survival/reproduction under the given conditions, rather than merely naming a feature. Extremophiles live in very high temperature, pressure or salt concentration; some bacteria at deep-sea vents tolerate extreme conditions. This does not mean all bacteria are extremophiles or that a desert mammal is necessarily one.",
  "Food chains and biomass": "Photosynthetic organisms produce the biomass supporting food chains: plants and algae synthesise glucose and other molecules using light. A chain begins with a producer, eaten by a primary consumer, which may be eaten by a secondary then tertiary consumer. In grass → grasshopper → frog → snake, grass is the producer, grasshopper primary, frog secondary and snake tertiary; arrows show feeding transfer towards the eater. A predator kills/eats another animal, its prey. In a stable predator-prey model, prey numbers rise first; more prey supports more predators after a delay. Increased predation then reduces prey, followed by fewer predators as food declines, allowing prey to recover. The populations cycle rather than remaining exactly fixed. Real data may also reflect disease, migration or weather.\nIllustrative time-series for plotting: month 0/1/2/3/4/5/6; prey 20/40/60/40/20/30/50; predators 5/8/15/20/12/7/10. Plot time on a horizontal axis 0–6 months and population on a vertical axis 0–60 individuals, equal increments and separate labelled lines/key. The prey peak at month 2 precedes the predator peak at month 3; the example does not prove predation is the only cause.",
  "Sampling and fieldwork": "For abundance across a habitat, mark axes along two sides, generate random coordinate pairs within the habitat boundaries and place equal-area quadrats there. Identify a common plant consistently and use a fixed boundary rule (include top/left edge, exclude bottom/right); count all target plants in each quadrat including zero counts. Never choose only patches containing plants. Sample enough representative locations and repeat independently to reduce the effect of patchiness. For a gradient, lay a tape from shade to open ground, place quadrats at regular specified intervals (a belt transect), record distance, target counts and light intensity at each position, and repeat parallel transects. Keep quadrat area and counting rules constant; record moisture/pH and time where relevant. Random area sampling estimates total population; systematic transects show distribution along a factor gradient.\nWorked data: five 0.25 m² quadrats contain 2, 4, 4, 5, 10 plants. Mean = (2+4+4+5+10)/5 = 5 plants per quadrat; median = 4 (middle of sorted values); mode = 4 (most frequent). Density = 5/0.25 = 20 plants/m². In a 20 m² habitat the estimate is 20 × 20 = 400 plants. Keep areas in the same units and report an estimate, not an exact census. Keep an unusual valid observation rather than deleting it to improve agreement.\nPlot distribution data using the environmental variable (or distance) on the horizontal axis and abundance on the vertical axis. Choose equal, labelled scales with units that include every value. Illustrative transect: distance 0/2/4/6/8 m, light 100/200/300/400/500 arbitrary units, plant counts 2/3/7/9/12 per 0.25 m². A scatter graph of light against count tests association; a distance-count graph shows distribution. More plants occur at brighter positions here, but correlation alone does not prove light caused this: repeat transects, measure other factors and avoid claiming the whole habitat follows one line.\nRP7 safety and care: obtain site permission and teacher supervision; assess uneven/slippery ground, weather, sharp litter, water edges and allergies; wear suitable footwear, wash hands and avoid touching unknown organisms or disturbing habitats. Do not eat collected material. Results are limited by identification/counting errors, non-representative placement, patchiness and seasonal/time changes. Increase representative sample size and repeat on comparable occasions; use the same identification guide and protocol."
};
const ECOLOGY_FIELD_QUESTIONS=[
  {
    "id": "aqa-ecology-field-q01",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Communities and ecosystems",
    "specRefs": [
      "4.7.1.1"
    ],
    "q": "A single oak, all oaks in a wood, the wood’s species and the species interacting with soil/water are four organisation levels. Name them; explain how removing pollinators may affect seed-eating birds and what makes a community stable.",
    "answer": "Individual, population, community, ecosystem. Fewer pollinators can reduce plant seed production, reducing bird food and survival/reproduction. Species and environmental factors in balance keep populations fairly constant overall.",
    "explain": "Link both interactions, including pollination and food. Fairly constant does not mean no seasonal fluctuations; the ecosystem includes non-living conditions.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Ecology and fieldwork practice"
  },
  {
    "id": "aqa-ecology-field-q02",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Communities and ecosystems",
    "specRefs": [
      "4.7.1.1",
      "4.7.1.3"
    ],
    "q": "Year 0/1/2 observations: insect visits/hour 30/15/5; seeds/plant 100/70/30; birds 40/34/20. Interpret the changes and propose an interdependence explanation. Why does this alone not prove cause? Give plant and animal competition resources.",
    "answer": "All three measures decrease. Reduced pollination could reduce seeds and then bird food. Weather or another factor could affect all three; compare controls/repeats. Plants compete for light, space, water and mineral ions; animals for food, mates and territory.",
    "explain": "Use the data and a causal chain, then distinguish association from proof. Resources are not the same for plants and animals.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Ecology and fieldwork practice"
  },
  {
    "id": "aqa-ecology-field-q03",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Competition and adaptation",
    "specRefs": [
      "4.7.1.2"
    ],
    "q": "List the abiotic factor range, then interpret plant counts 2/7/12 at light 100/300/500 units in equal areas. Suggest a mechanism and a confounder. Explain why low pond oxygen can reduce fish abundance.",
    "answer": "Light, temperature, moisture, soil pH/minerals, wind intensity/direction, plant CO2 and aquatic oxygen. Counts increase with light; photosynthesis may support growth, but moisture/soil could differ. Low oxygen limits aerobic respiration in fish and can reduce survival.",
    "explain": "Include the less obvious factors, use the supplied direction of change and qualify the mechanism. Oxygen is a non-living factor, not a predator.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Ecology and fieldwork practice"
  },
  {
    "id": "aqa-ecology-field-q04",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Competition and adaptation",
    "specRefs": [
      "4.7.1.3"
    ],
    "q": "Prey counts fall from 80 to 35 after a new predator arrives. Explain this possible effect and three other biotic pressures, including competition leaving too few individuals to breed. Suggest a way to test the explanation.",
    "answer": "Predation could increase prey deaths. Less food can reduce survival/reproduction; a new pathogen can kill individuals; competitors can reduce resources and numbers below those sufficient to breed. Repeat comparable sampling and compare similar ponds without the new predator, checking disease and food.",
    "explain": "Do not assert a single cause from before/after data. Keep sampling effort constant and distinguish living pressures from temperature or oxygen.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Ecology and fieldwork practice"
  },
  {
    "id": "aqa-ecology-field-q05",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Competition and adaptation",
    "specRefs": [
      "4.7.1.4"
    ],
    "q": "An unfamiliar desert mammal has a thick waxy skin, shelters underground at midday and produces concentrated urine. Classify and explain each adaptation. Explain extremophiles with a deep-sea example.",
    "answer": "Waxy skin is structural and reduces water loss; burrowing at midday is behavioural and avoids heat; concentrated urine is functional and conserves water. Extremophiles tolerate extreme temperature, pressure or salt conditions, such as bacteria at deep-sea vents.",
    "explain": "For each supplied feature link category to effect in this habitat. Do not assume every bacterium is an extremophile or every adaptation is structural.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Ecology and fieldwork practice"
  },
  {
    "id": "aqa-ecology-field-q06",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Food chains and biomass",
    "specRefs": [
      "4.7.2.1"
    ],
    "q": "For grass → grasshopper → frog → snake, identify producer and consumer levels. Explain the origin of biomass and arrow direction. Describe how predator and prey populations can cycle in a stable community.",
    "answer": "Grass produces biomass by photosynthesis; grasshopper is primary, frog secondary and snake tertiary consumer. Arrows point from food to eater. More prey supports more predators after a delay; predation reduces prey, food shortage reduces predators, then prey can recover.",
    "explain": "Name all levels and explain the delay and both decreases. A stable community can contain cycles rather than exactly constant populations.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Ecology and fieldwork practice"
  },
  {
    "id": "aqa-ecology-field-q07",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Food chains and biomass",
    "specRefs": [
      "4.7.2.1"
    ],
    "q": "Plot these illustrative data using a labelled pair of lines: months 0–6, prey 20/40/60/40/20/30/50 and predators 5/8/15/20/12/7/10. Specify scales and key, compare peaks, explain the lag and give a limitation.",
    "answer": "Horizontal axis time 0–6 months at equal increments; vertical axis population 0–60 individuals at equal increments; plot every pair accurately and label lines/key. Prey peak 60 at month 2 precedes predator peak 20 at month 3. More food supports later predator increase; subsequent prey decline may reduce predator food. Other factors can affect populations.",
    "explain": "Self-check each plotted coordinate and units. These are illustrative populations; correlation and a lag do not prove predation is the sole cause.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Ecology and fieldwork practice"
  },
  {
    "id": "aqa-ecology-field-q08",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Sampling and fieldwork",
    "specRefs": [
      "4.7.2.1",
      "RP07"
    ],
    "q": "Five 0.25 m² quadrats contain 2,4,4,5,10 plants in a 20 m² habitat. Calculate mean, median, mode, density and population estimate; explain why it is an estimate and whether 10 should automatically be discarded.",
    "answer": "Mean 25/5 = 5 plants/quadrat, median 4, mode 4. Density 5/0.25 = 20 plants/m²; estimated population 20 × 20 = 400 plants. Samples may not represent a patchy habitat; a valid high count is not automatically an error and should not simply be discarded.",
    "explain": "Sort to find the median; do not use 5 as the mode. Divide by quadrat area before multiplying by habitat area; sample counts have no area units themselves.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Ecology and fieldwork practice"
  },
  {
    "id": "aqa-ecology-field-q09",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Sampling and fieldwork",
    "specRefs": [
      "RP07"
    ],
    "q": "Plan RP7 to estimate a common plant population across a habitat, including unbiased placement, boundary rules, measurements/calculation, repeats, safety and an improvement for patchy plants.",
    "answer": "Mark habitat axes; use random coordinate pairs and equal-area quadrats; identify the target with a guide; count all plants including zeros with a fixed edge rule. Record quadrat/habitat areas; mean count divided by quadrat area times habitat area estimates population. Sample many representative positions. Assess uneven ground/litter/water/weather, use permission/supervision and wash hands; avoid habitat damage. Increase representative sampling/repeats for patchiness.",
    "explain": "Random means generated positions, not selecting attractive patches. An area estimate needs compatible areas and representative data. Practical teaching supports planning and evaluation alongside supervised fieldwork.",
    "marks": 6,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Ecology and fieldwork practice"
  },
  {
    "id": "aqa-ecology-field-q10",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Sampling and fieldwork",
    "specRefs": [
      "4.7.2.1",
      "RP07"
    ],
    "q": "Investigate the effect of light on plant distribution using transects. At distances 0/2/4/6/8 m, light is 100/200/300/400/500 units and counts 2/3/7/9/12 per 0.25 m². Describe method, graph axes, pattern, controls and causal limitation.",
    "answer": "Lay a tape along shade-to-open gradient; sample with equal quadrats at regular distances, measure light/count plants with fixed rules; repeat parallel transects and record moisture/pH/time. Plot light horizontally and count per quadrat vertically with labelled equal scales, or distance against count for distribution. Counts increase at brighter positions; photosynthesis is plausible but other factors may covary, so this association is not proof.",
    "explain": "A systematic transect answers a gradient question; random sampling estimates whole-habitat abundance. Keep quadrat area and identification constant, record confounders and repeat.",
    "marks": 5,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Ecology and fieldwork practice"
  },
  {
    "id": "aqa-ecology-field-q11",
    "subject": "Biology",
    "topic": "Ecology",
    "section": "Sampling and fieldwork",
    "specRefs": [
      "RP07"
    ],
    "q": "A student places quadrats only where plants are obvious, counts edge plants differently, omits zero counts and reports 400 plants as an exact total. Evaluate each issue and propose corrections.",
    "answer": "Choosing visible patches and omitting zeros biases the mean upwards; use random coordinates and retain zeros. Inconsistent edges change counts; use a fixed include/exclude rule. Sampling gives an estimate, not an exact census. Repeat many representative quadrats and report uncertainty/patchiness.",
    "explain": "Explain the direction of bias where justified and connect each improvement to its problem; repeated biased sampling does not fix biased placement.",
    "marks": 4,
    "tier": "both",
    "type": "writing",
    "level": 2,
    "style": "Ecology and fieldwork practice"
  }
];
const ecologyFieldBeforeLesson=activeLesson,ecologyFieldBeforeQuestions=activeQuestions;
activeLesson=function(s,c,t){const l=ecologyFieldBeforeLesson(s,c,t);if(!l||!cellCompletionPath(s,c)||t!=='Ecology')return l;const sections=l.sections.map(x=>ECOLOGY_FIELD_EXTENSIONS[x.title]?{...x,body:x.body+'\n\n'+ECOLOGY_FIELD_EXTENSIONS[x.title]}:x);const practicals=(l.practicals||[]).map(x=>x.id==='fieldwork'?{...x,aim:x.aim+' Measure population size and investigate light effects on distribution (Trilogy RP7).',method:x.method+' '+ECOLOGY_FIELD_EXTENSIONS['Sampling and fieldwork'],controls:x.controls+' Repeat parallel transects; record moisture/pH and timing.',pitfall:x.pitfall+' Use site permission/supervision, assess ground/weather/litter/water risks, wash hands and minimise habitat disturbance.'}:x);return {...l,sections,practicals,learn:sections.map(x=>x.body).join('\n\n')};};
activeQuestions=function(s,c=choice(s)){const qs=ecologyFieldBeforeQuestions(s,c);return cellCompletionPath(s,c)?[...qs,...ECOLOGY_FIELD_QUESTIONS.map(q=>({...q,board:'aqa',spec:'8464',tierContext:c.tier,courseContext:'trilogy'}))]:qs;};

const ecologyFieldBeforeSupport=biologySupportInventory;
biologySupportInventory=function(){const section=activeLesson('Biology',{board:'aqa',tier:'foundation',courseContext:'trilogy'},'Ecology')?.sections.find(s=>s.title==='Food chains and biomass');return [...ecologyFieldBeforeSupport(),{id:'Biology|support|ecology-shared-food-chain',subject:'Biology',kind:'support',tier:'both',label:'Reviewed shared food-chain and predator-prey lesson',fingerprint:auditFingerprint(section?.body||''),studentVisible:Boolean(section)}];};
