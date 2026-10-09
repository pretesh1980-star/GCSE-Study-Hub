/* Original AQA 8300 starter lessons and practice. Stable topic IDs preserve progress. */
const AQA_MATHS=PACKS.Maths.aqa;
const MATHS_SOURCE='https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/specification/subject-content';
AQA_MATHS.source=MATHS_SOURCE;
AQA_MATHS.note='AQA GCSE Mathematics 8300 starter course. Paper 1 is non-calculator; Papers 2 and 3 allow a calculator. Foundation and Higher share core content; Higher adds extension work. This is original practice, not a complete specification or an official AQA paper.';
AQA_MATHS.questions.find(q=>q.id==='aqa-quadratic').tier='both';
const MATHS_UNITS={
 Number:['3.1 · Number',[
  ['Fractions and percentages','To add fractions, use a common denominator. For 1/3 + 1/6, rewrite 1/3 as 2/6, giving 3/6 = 1/2. A percentage is parts per hundred: 15% of 80 = 0.15 × 80 = 12.'],
  ['Powers and standard form','An index tells you how many times a number is multiplied by itself. 2³ = 8. Standard form is a × 10ⁿ where 1 ≤ a < 10; 46,000 = 4.6 × 10⁴. Check whether moving the decimal point should make the number larger or smaller.'],
  ['Estimate and check','Round the numbers to one significant figure for a quick estimate. For 49 × 21, use 50 × 20 ≈ 1000. An estimate helps catch a misplaced decimal point; it does not replace the exact answer.'],
  ['Higher · surds and exact values','√12 = √(4 × 3) = 2√3. Keep surds in exact form when the question asks for an exact answer; a rounded decimal is an approximation.']]],
 Algebra:['3.2 · Algebra',[
  ['Expressions and substitution','Like terms have the same letter powers: 3x + 5x = 8x, while x² and x are unlike terms. If x = 4, then 2x + 3 = 11. Substitute with brackets when the value is negative.'],
  ['Equations','Keep both sides balanced. For 3x + 7 = 22, subtract 7 from each side, then divide by 3 to get x = 5. Check by replacing x in the original equation.'],
  ['Expand and factorise','3(x + 2) = 3x + 6. Factorising reverses expansion: 6x + 9 = 3(2x + 3). Multiplying back is a quick check.'],
  ['Factorising quadratics','For x² − 5x + 6 = 0, find two numbers that multiply to 6 and add to −5: −2 and −3. So (x − 2)(x − 3) = 0 and x = 2 or x = 3.']]],
 'Ratio & Proportion':['3.3 · Ratio, proportion and rates of change',[
  ['Sharing in a ratio','To share £35 in the ratio 2:5, count 7 parts. Each part is £5, so the shares are £10 and £25. Add them to check the total.'],
  ['Unit rates and proportion','If 4 tickets cost £28, one costs £7 and 6 cost £42. Write the units beside each step so you know whether to multiply or divide.'],
  ['Percentage change','For a 20% increase, multiply by 1.20. For a 20% decrease, multiply by 0.80. Reverse percentages need the original multiplier: if £60 is after a 20% decrease, the original was £60 ÷ 0.80 = £75.'],
  ['Inverse proportion','If y is inversely proportional to x, xy is constant. When x = 2 and y = 12, the constant is 24, so at x = 3, y = 8.']]],
 Geometry:['3.4 · Geometry and measures',[
  ['Angle facts','Angles on a straight line add to 180°, around a point to 360°, and inside a triangle to 180°. Name the fact you use, then write an equation.'],
  ['Area and volume','Rectangle area = length × width. Triangle area = 1/2 × base × perpendicular height. A prism volume = cross-sectional area × length. Convert units before calculating.'],
  ['Pythagoras and similarity','In a right-angled triangle, a² + b² = c² where c is the hypotenuse. Similar shapes have matching angles and proportional sides; an enlargement scale factor multiplies lengths.'],
  ['Right-triangle trigonometry','Use sine, cosine or tangent to connect a right triangle angle to side lengths. For example, if opposite = 6 and hypotenuse = 10, sin θ = 0.6 and θ = sin⁻¹(0.6) ≈ 36.9°.']]],
 Probability:['3.5 · Probability',[
  ['The probability scale','Probabilities run from 0 (impossible) to 1 (certain). With equally likely outcomes, probability = favourable outcomes ÷ total outcomes.'],
  ['Complement and sample spaces','The probability of an event not happening is 1 minus its probability. A two-way table or sample space helps list possible outcomes without missing any.'],
  ['Two-step events','For independent events, multiply along a path. Two fair coin tosses have four equally likely outcomes, so two heads has probability 1/2 × 1/2 = 1/4.'],
  ['Dependent events','Without replacement, the second probability changes after the first draw. A bag with 3 red and 2 blue counters gives P(two red) = 3/5 × 2/4 = 3/10.']]],
 Statistics:['3.6 · Statistics',[
  ['Averages','The mean is total ÷ number of values. The median is the middle ordered value. The mode is most frequent. Choose the measure that best represents the data.'],
  ['Spread','Range = largest − smallest. Data sets with the same mean can have very different ranges. A large outlier can strongly affect the mean.'],
  ['Charts and interpretation','Read the scale and units before interpreting a chart. Correlation means variables move together; it does not by itself prove that one causes the other.'],
  ['Estimating from grouped data','For grouped data, use each class midpoint to estimate the mean: add midpoint × frequency, then divide by total frequency. It is an estimate because exact values are unknown.']]],
 Graphs:['3.2 · Algebra: graphs',[
  ['Coordinates and straight lines','A point (x, y) gives horizontal and vertical positions. In y = mx + c, m is the gradient and c is the y-intercept. For y = 2x + 1, the line crosses the y-axis at 1.'],
  ['Gradient','Gradient = change in y ÷ change in x. From (1, 3) to (3, 7), the gradient is (7 − 3) ÷ (3 − 1) = 2. Include units for real-life rates.'],
  ['Reading graphs','An intersection solves both equations at once. On a distance–time graph, gradient gives speed; a horizontal section means the distance is unchanged.'],
  ['Higher · perpendicular lines','For non-vertical perpendicular straight lines, the gradients multiply to −1. A line with gradient 2 is perpendicular to a line with gradient −1/2.']]],
 Vectors:['3.4 · Geometry: vectors',[
  ['Magnitude and direction','A vector tells you a displacement, including direction. In a column vector, the top number is horizontal movement and the bottom number is vertical movement.'],
  ['Adding vectors','Add matching components: (2, 3) + (1, −1) = (3, 2). Draw the second arrow from the head of the first as a visual check.'],
  ['Subtracting and scaling','Subtract matching components. Multiplying (2, −1) by 3 gives (6, −3), a movement three times as long in the same direction.'],
  ['Higher · vector reasoning','If a journey can be written in two different ways, equate the vector expressions. A proof should show the relationship for any values, not just one sketch.']]]
};
MATHS_UNITS.Algebra[1].push(['Higher · completing the square','x² + 6x + 5 = (x + 3)² − 4. Half the coefficient of x to get 3, then adjust the constant. Expanding your answer checks it.']);
MATHS_UNITS['Ratio & Proportion'][1].push(['Higher · gradient at a point','For a curved distance–time graph, draw a tangent at the point. Estimate its gradient using two well-spaced points on that tangent; this gives the instantaneous speed there.']);
MATHS_UNITS.Geometry[1].push(['Higher · sine rule','The sine rule relates a side to the sine of its opposite angle: a/sin A = b/sin B. Label opposite pairs before substituting; check that the longest side faces the largest angle.']);
MATHS_UNITS.Probability[1].push(['Higher · conditional probability','Conditional probability uses a restricted group. If 4 of 10 pupils play football and 3 of those 4 also swim, then P(swims | plays football) = 3/4. The denominator is the group already known to play football.']);
MATHS_UNITS.Statistics[1].push(['Higher · histograms','For a histogram with unequal class widths, bar area represents frequency. Frequency density = frequency ÷ class width, so the vertical axis is frequency density, not frequency.']);
for(const [topic,[unit,parts]] of Object.entries(MATHS_UNITS)){
 const old=AQA_MATHS.overrides[topic]||sharedLesson('Maths',topic);
 const sections=parts.map(([title,body])=>({title,body,tier:title.startsWith('Higher ·')?'higher':'both'}));
 const row=AQA_MATHS.topics.find(t=>t.id===topic);row.unit=unit;
 AQA_MATHS.overrides[topic]={...old,sections,learn:sections.filter(s=>s.tier==='both').map(s=>s.body).join('\n\n'),ref:unit,source:MATHS_SOURCE,minutes:9,challenge:'Try a practice question, show each step, and check whether your answer is reasonable.'};
}
function mathsQ(topic,id,q,answer,explain,extra={}){
 AQA_MATHS.questions.push({id:'aqa-maths-'+id,subject:'Maths',topic,q,answer,explain,type:'short',level:1,tier:'both',marks:2,style:'AQA 8300 original practice',...extra});
}
mathsQ('Number','fraction-add','Calculate 1/3 + 1/6 in its simplest form.','1/2','1/3 = 2/6, so the total is 3/6 = 1/2.',{accepted:['1/2','0.5']});
mathsQ('Number','percentage','Find 15% of 80.','12','10% is 8 and 5% is 4, so 15% is 12.');
mathsQ('Number','standard','Write 46,000 in standard form.','4.6 × 10⁴','Move the decimal point four places left: 4.6 × 10⁴.',{type:'mcq',options:['4.6 × 10⁴','46 × 10³','4.6 × 10³','0.46 × 10⁴']});
mathsQ('Number','estimate','Estimate 49 × 21 by rounding each number to one significant figure.','1000','50 × 20 = 1000.',{accepted:['1000','1,000']});
mathsQ('Number','surd','Simplify √12 exactly.','2√3','√12 = √4 × √3 = 2√3.',{tier:'higher',level:3,accepted:['2√3','2sqrt3']});
mathsQ('Algebra','substitute','Find 2x + 3 when x = 4.','11','2 × 4 + 3 = 11.');
mathsQ('Algebra','linear2','Solve 3x + 7 = 22.','5','Subtract 7, then divide by 3.',{accepted:['5','x=5']});
mathsQ('Algebra','expand','Expand 3(x + 2).','3x+6','Multiply both terms in the bracket by 3.',{accepted:['3x+6','6+3x']});
mathsQ('Algebra','factor','Factorise 6x + 9 fully.','3(2x+3)','The highest common factor is 3.');
mathsQ('Algebra','quadratic2','Solve x² − 9 = 0. Give both solutions.','−3 and 3','x² = 9, so x = −3 or x = 3.',{accepted:['-3,3','3,-3','-3and3','3and-3','x=-3orx=3']});
mathsQ('Ratio & Proportion','share','Share £35 in the ratio 2:5. What is the smaller share in pounds?','10','There are 7 parts, each worth £5. The smaller share is 2 × £5 = £10.',{accepted:['10','£10']});
mathsQ('Ratio & Proportion','unit','Four tickets cost £28. What do six tickets cost in pounds?','42','One ticket costs £7, so six cost £42.',{accepted:['42','£42']});
mathsQ('Ratio & Proportion','increase','Increase £50 by 20%. Give the new price in pounds.','60','20% of £50 is £10; £50 + £10 = £60.',{accepted:['60','£60']});
mathsQ('Ratio & Proportion','reverse','A price is £60 after a 20% reduction. What was its original price in pounds?','75','£60 is 80% of the original, so divide by 0.8.',{accepted:['75','£75']});
mathsQ('Ratio & Proportion','inverse','y is inversely proportional to x. When x = 2, y = 12. Find y when x = 3.','8','xy = 24, so y = 24 ÷ 3 = 8.',{level:2});
mathsQ('Geometry','straight','Two angles on a straight line are 65° and x°. Find x.','115','Angles on a straight line total 180°.',{accepted:['115','115°']});
mathsQ('Geometry','triangle','A triangle has angles 50° and 60°. Find its third angle.','70','180 − 50 − 60 = 70.',{accepted:['70','70°']});
mathsQ('Geometry','area','Find the area of a triangle with base 8 cm and perpendicular height 5 cm, in cm².','20','Area = 1/2 × 8 × 5 = 20 cm².',{accepted:['20','20cm²','20cm2']});
mathsQ('Geometry','pythagoras','A right triangle has shorter sides 3 cm and 4 cm. Find its hypotenuse in cm.','5','3² + 4² = 25, so the hypotenuse is 5 cm.',{accepted:['5','5cm']});
mathsQ('Geometry','trig','In a right triangle, opposite = 6 and hypotenuse = 10. Find sin θ.','0.6','sin θ = opposite ÷ hypotenuse = 6/10.',{level:2,accepted:['0.6','3/5','6/10']});
mathsQ('Probability','die','What is the probability of rolling an even number on a fair six-sided die?','1/2','There are 3 even outcomes out of 6.',{accepted:['1/2','0.5','3/6']});
mathsQ('Probability','complement','If P(rain) = 0.3, what is P(no rain)?','0.7','The two outcomes total 1; 1 − 0.3 = 0.7.',{accepted:['0.7','7/10']});
mathsQ('Probability','two-coins','Two fair coins are tossed. What is the probability of two heads?','1/4','1/2 × 1/2 = 1/4.',{accepted:['1/4','0.25']});
mathsQ('Probability','certain','Which number represents a certain event?','1','A certain event has probability 1.');
mathsQ('Probability','without-replacement','A bag has 3 red and 2 blue counters. Two are drawn without replacement. What is P(two red)?','3/10','3/5 × 2/4 = 6/20 = 3/10.',{level:2,accepted:['3/10','0.3']});
mathsQ('Statistics','mean','Find the mean of 2, 4, 6 and 8.','5','The total is 20; divide by 4.');
mathsQ('Statistics','median','Find the median of 7, 2, 9, 4 and 5.','5','Order the values 2, 4, 5, 7, 9; the middle is 5.');
mathsQ('Statistics','range','Find the range of 4, 6, 10 and 15.','11','15 − 4 = 11.');
mathsQ('Statistics','mode','Find the mode of 2, 3, 3, 5 and 7.','3','3 appears most often.');
mathsQ('Statistics','grouped','Class intervals 0–10 and 10–20 have frequencies 2 and 4. Estimate the mean using midpoints.','11.67','(5 × 2 + 15 × 4) ÷ 6 = 70 ÷ 6 ≈ 11.67.',{level:2,accepted:['11.67','11.7','70/6','35/3']});
mathsQ('Graphs','intercept','In y = 2x + 1, what is the y-intercept?','1','The constant term is the value of y when x = 0.');
mathsQ('Graphs','gradient','Find the gradient of the line through (1, 3) and (3, 7).','2','(7 − 3) ÷ (3 − 1) = 2.');
mathsQ('Graphs','evaluate','For y = 3x − 2, find y when x = 4.','10','3 × 4 − 2 = 10.');
mathsQ('Graphs','distance','On a distance–time graph, a line rises by 100 m in 20 s. Find the speed in m/s.','5','Speed is the gradient: 100 ÷ 20 = 5 m/s.',{accepted:['5','5m/s']});
mathsQ('Graphs','perpendicular','What is the gradient of a line perpendicular to one with gradient 2?','-1/2','Perpendicular gradients multiply to −1.',{tier:'higher',level:3,accepted:['-1/2','−1/2','-0.5','−0.5']});
mathsQ('Vectors','add','Find (2, 3) + (1, −1) as a column vector.','(3,2)','Add matching components: 2 + 1 = 3 and 3 + (−1) = 2.',{accepted:['(3,2)','3,2','(3;2)']});
mathsQ('Vectors','scale','Find 3(2, −1) as a column vector.','(6,-3)','Multiply each component by 3.',{accepted:['(6,-3)','6,-3','(6;−3)','(6;-3)']});
mathsQ('Vectors','subtract','Find (5, 4) − (2, 1) as a column vector.','(3,3)','Subtract matching components.',{accepted:['(3,3)','3,3','(3;3)']});
mathsQ('Vectors','direction','Which vector moves 4 units right and 2 units down?','(4,-2)','Right is positive horizontally; down is negative vertically.',{type:'mcq',options:['(4,-2)','(-4,2)','(4,2)','(-2,4)']});
mathsQ('Vectors','combination','If a = (2, 1) and b = (1, 3), find 2a − b.','(3,-1)','2a = (4, 2). Subtract b to get (3, −1).',{level:2,accepted:['(3,-1)','3,-1','(3;−1)','(3;-1)']});
mathsQ('Algebra','completing-square','Complete the square: x² + 6x + 5 = (x + 3)² + c. Find c.','-4','(x + 3)² = x² + 6x + 9, so c = −4.',{tier:'higher',level:3,accepted:['-4','−4']});
mathsQ('Ratio & Proportion','tangent-gradient','A tangent to a distance–time curve passes through (2 s, 6 m) and (5 s, 18 m). Estimate the speed at the point of tangency in m/s.','4','The tangent gradient is (18 − 6) ÷ (5 − 2) = 4 m/s.',{tier:'higher',level:3,accepted:['4','4m/s']});
mathsQ('Geometry','sine-rule','In a triangle, side a = 6 is opposite 30° and side b is opposite 90°. Use the sine rule to find b.','12','6/sin 30° = b/sin 90°. Since sin 30° = 1/2 and sin 90° = 1, b = 12.',{tier:'higher',level:3});
mathsQ('Probability','conditional','Of 10 pupils, 4 play football. Three of those 4 also swim. What is P(swims | plays football)?','3/4','The condition restricts the group to the 4 football players; 3 swim.',{tier:'higher',level:3,accepted:['3/4','0.75']});
mathsQ('Statistics','frequency-density','A histogram class has width 5 and frequency 20. Find its frequency density.','4','Frequency density = 20 ÷ 5 = 4.',{tier:'higher',level:3});
mathsQ('Vectors','midpoint-proof','OA = a and OB = b. M is the midpoint of AB. Express OM in terms of a and b.','(a+b)/2','AM = (b − a)/2, so OM = a + (b − a)/2 = (a + b)/2.',{tier:'higher',level:3,accepted:['(a+b)/2','1/2(a+b)','(b+a)/2']});

const MATHS_VISUALS={
 Number:['Fractions are pieces of the same whole','Two sixths plus one sixth makes three sixths: one half.',`<rect x="20" y="58" width="300" height="66" rx="12" fill="#eef3fb"/><rect x="20" y="58" width="100" height="66" rx="12" fill="#6f8fd7"/><rect x="120" y="58" width="50" height="66" fill="#e8a078"/><path d="M70 58v66m100-66v66m50-66v66m50-66v66" stroke="white" stroke-width="3"/><text x="43" y="97">1/3</text><text x="127" y="97">1/6</text><text x="185" y="97">= 1/2</text>`],
 Algebra:['Balance both sides','Solve 3x + 7 = 22 by doing the same thing to each side.',`<rect x="25" y="52" width="130" height="78" rx="18" fill="#e6ebfa"/><rect x="185" y="52" width="130" height="78" rx="18" fill="#fbece2"/><path d="M36 145h268M170 40v112" stroke="#48617f" stroke-width="3"/><text x="52" y="98">3x + 7</text><text x="221" y="98">22</text><text x="102" y="173">−7 from both → 3x = 15 → x = 5</text>`],
 'Ratio & Proportion':['Seven equal parts','A 2:5 share of £35 means each block is worth £5.',`<rect x="20" y="65" width="80" height="64" rx="10" fill="#6f8fd7"/><rect x="106" y="65" width="80" height="64" rx="10" fill="#6f8fd7"/><rect x="192" y="65" width="32" height="64" rx="7" fill="#e8a078"/><rect x="230" y="65" width="32" height="64" rx="7" fill="#e8a078"/><rect x="268" y="65" width="32" height="64" rx="7" fill="#e8a078"/><rect x="306" y="65" width="32" height="64" rx="7" fill="#e8a078"/><rect x="344" y="65" width="32" height="64" rx="7" fill="#e8a078"/><text x="57" y="105">£5</text><text x="143" y="105">£5</text><text x="24" y="159">2 parts = £10</text><text x="218" y="159">5 parts = £25</text>`],
 Geometry:['A triangle has 180° inside','Use the two known angles to find the missing one.',`<path d="M45 145L195 35L345 145Z" fill="#e6ebfa" stroke="#6f8fd7" stroke-width="4"/><path d="M70 145a25 25 0 0 1 10-19M310 145a25 25 0 0 0-10-19" fill="none" stroke="#e8a078" stroke-width="3"/><text x="77" y="137">50°</text><text x="262" y="137">60°</text><text x="173" y="70">70°</text><text x="71" y="176">180° − 50° − 60° = 70°</text>`],
 Probability:['List the possible outcomes','Two fair coins have four equally likely results.',`<g fill="#e6ebfa"><rect x="30" y="43" width="140" height="52" rx="12"/><rect x="200" y="43" width="140" height="52" rx="12"/><rect x="30" y="105" width="140" height="52" rx="12"/><rect x="200" y="105" width="140" height="52" rx="12"/></g><rect x="30" y="43" width="140" height="52" rx="12" fill="#a8d8bc"/><text x="83" y="77">H H</text><text x="253" y="77">H T</text><text x="83" y="139">T H</text><text x="253" y="139">T T</text><text x="122" y="180">P(two heads) = 1/4</text>`],
 Statistics:['See the average and the spread','The four values 2, 4, 6, 8 have mean 5.',`<path d="M35 150H350M35 150V35" stroke="#48617f" stroke-width="3"/><g fill="#6f8fd7"><rect x="65" y="120" width="42" height="30" rx="5"/><rect x="125" y="96" width="42" height="54" rx="5"/><rect x="185" y="72" width="42" height="78" rx="5"/><rect x="245" y="48" width="42" height="102" rx="5"/></g><g><text x="79" y="170">2</text><text x="139" y="170">4</text><text x="199" y="170">6</text><text x="259" y="170">8</text></g><path d="M175 44v110" stroke="#e8a078" stroke-width="3" stroke-dasharray="6 5"/><text x="178" y="43">mean 5</text>`],
 Graphs:['Gradient is rise over run','From (1, 3) to (3, 7), rise = 4 and run = 2, so gradient = 2.',`<path d="M40 155H355M40 155V25" stroke="#48617f" stroke-width="3"/><path d="M75 135L305 35" stroke="#6f8fd7" stroke-width="4"/><circle cx="135" cy="109" r="6" fill="#e8a078"/><circle cx="255" cy="57" r="6" fill="#e8a078"/><path d="M135 109H255V57" fill="none" stroke="#e8a078" stroke-width="3" stroke-dasharray="5 4"/><text x="175" y="129">run 2</text><text x="262" y="89">rise 4</text><text x="92" y="99">(1,3)</text><text x="265" y="48">(3,7)</text>`],
 Vectors:['Follow the arrows head to tail','(2, 3) + (1, −1) = (3, 2).',`<defs><marker id="math-arrow" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto"><path d="M0 0L8 3L0 6Z" fill="#6f8fd7"/></marker></defs><path d="M40 145H350M40 145V30" stroke="#b5c3d5" stroke-width="2"/><path d="M75 130L215 50" stroke="#6f8fd7" stroke-width="5" marker-end="url(#math-arrow)"/><path d="M215 50L300 90" stroke="#e8a078" stroke-width="5" marker-end="url(#math-arrow)"/><path d="M75 130L300 90" stroke="#73aa88" stroke-width="3" stroke-dasharray="7 5"/><text x="108" y="72">(2,3)</text><text x="257" y="46">(1,−1)</text><text x="171" y="144">(3,2)</text>`]
};
function mathsVisual(topic){const item=MATHS_VISUALS[topic];if(!item)return '';return `<figure class="maths-visual"><div class="maths-visual-title">${esc(item[0])}</div><svg viewBox="0 0 400 200" role="img" aria-label="${esc(item[1])}" preserveAspectRatio="xMidYMid meet">${item[2]}</svg><figcaption>${esc(item[1])}</figcaption></figure>`;}
const MATHS_QUICK={
 Number:['A fraction is a piece of a whole.','For 1/3 + 1/6, make the pieces the same size first: 2/6 + 1/6.','That makes 3/6, which is 1/2.'],
 Algebra:['An equation is like a balanced scale.','To solve 3x + 7 = 22, take 7 from both sides.','Then 3x = 15, so x = 5. Put 5 back in to check.'],
 'Ratio & Proportion':['A ratio splits something into equal parts.','For £35 shared 2:5, there are 7 parts, so each is £5.','The shares are £10 and £25. Add them to check.'],
 Geometry:['A triangle has 180° of angles inside.','If two angles are 50° and 60°, add them to get 110°.','The missing angle is 180° − 110° = 70°.'],
 Probability:['Probability tells you how likely something is, from 0 to 1.','Two coins can land HH, HT, TH or TT.','Only one result is two heads, so the chance is 1/4.'],
 Statistics:['The mean is an even share of the total.','Add 2, 4, 6 and 8 to get 20.','Share 20 between four values: the mean is 5.'],
 Graphs:['Gradient tells you how steep a line is.','Count how far up it goes, then how far across.','Rise 4 and run 2 gives gradient 4 ÷ 2 = 2.'],
 Vectors:['A vector is a movement with direction.','Add the across numbers together, then the up/down numbers.','(2, 3) + (1, −1) = (3, 2).']
};
const MATHS_VIDEOS={
 Number:['lalcQLW6MWE','Fractions: addition and subtraction','https://corbettmaths.com/2012/08/21/fractions-addition-and-subtraction/'],
 Algebra:['30S7WxKcPwg','Solving equations','https://corbettmaths.com/2012/08/24/solving-equations/'],
 'Ratio & Proportion':['cflZnf9H5l4','Sharing in a ratio','https://corbettmaths.com/2013/03/03/ratio-sharing-the-total/'],
 Geometry:['QEsjIeSnEHU','Angles in a triangle','https://corbettmaths.com/2012/08/10/angles-in-a-triangle/'],
 Probability:['ur_hHjLrBNo','Probability basics','https://corbettmaths.com/2013/06/15/probability/'],
 Statistics:['x8oPXIrLMc0','The mean','https://corbettmaths.com/2012/08/02/the-mean/'],
 Graphs:['oxOiuqUfWKA','Distance–time graphs','https://corbettmaths.com/2013/05/25/travel-graphs/'],
 Vectors:['h02d922Q5wk','Column vectors','https://corbettmaths.com/2017/09/25/column-vectors/']
};
function lessonVideo(s,board,topic){if(s!=='Maths'||board!=='aqa')return null;const [id,title,page]=MATHS_VIDEOS[topic]||[];return id?{id,title,page}:null;}
const MATHS_WORKED={
 Number:[
  ['What is 3/4 of 28?',['Divide 28 by 4 to find one quarter: 7.','Multiply 7 by 3.'],'21'],
  ['Work out 2/5 + 1/10.',['Make the denominators match: 2/5 = 4/10.','Add the numerators: 4/10 + 1/10 = 5/10.','Simplify.'],'1/2'],
  ['Increase £80 by 15%.',['10% of £80 is £8; 5% is £4.','Add £12 to the original £80.'],'£92']],
 Algebra:[
  ['Solve 4x − 3 = 17.',['Add 3 to both sides: 4x = 20.','Divide both sides by 4.','Check: 4 × 5 − 3 = 17.'],'x = 5'],
  ['Expand 2(3x + 4).',['Multiply 2 by 3x.','Multiply 2 by 4.','Add the terms.'],'6x + 8'],
  ['Find the next term: 5, 8, 11, 14, …',['The sequence goes up by 3 each time.','Add 3 to 14.'],'17']],
 'Ratio & Proportion':[
  ['Share 48 sweets in the ratio 1:3.',['There are 4 parts in total.','Each part is 48 ÷ 4 = 12.','The larger share is 3 × 12.'],'12 and 36'],
  ['A £50 coat is 20% off. What is the sale price?',['20% of £50 is £10.','Take £10 from £50.'],'£40'],
  ['A car travels 120 miles in 2 hours. Find its average speed.',['Speed = distance ÷ time.','120 ÷ 2 = 60.'],'60 miles per hour']],
 Geometry:[
  ['A triangle has angles 42° and 68°. Find the third.',['Angles in a triangle add to 180°.','42 + 68 = 110.','180 − 110 = 70.'],'70°'],
  ['Find the area of a rectangle 7 cm by 4 cm.',['Area = length × width.','7 × 4 = 28.'],'28 cm²'],
  ['A right triangle has short sides 5 cm and 12 cm. Find the long side.',['Use Pythagoras: 5² + 12² = c².','25 + 144 = 169.','√169 = 13.'],'13 cm']],
 Probability:[
  ['A fair die is rolled. Find P(number greater than 4).',['The winning results are 5 and 6: two outcomes.','There are six equally likely outcomes.','Probability = 2/6, simplified.'],'1/3'],
  ['A bag has 3 red and 7 blue counters. Find P(red).',['There are 10 counters altogether.','Three are red.'],'3/10'],
  ['A fair coin is tossed twice. Find P(two tails).',['P(tail) on each toss is 1/2.','Multiply independent probabilities: 1/2 × 1/2.'],'1/4']],
 Statistics:[
  ['Find the mean of 4, 6 and 8.',['Add the values: 4 + 6 + 8 = 18.','Divide by the number of values: 18 ÷ 3.'],'6'],
  ['Find the median of 9, 2, 7, 4, 5.',['Put them in order: 2, 4, 5, 7, 9.','The middle value is the median.'],'5'],
  ['Find the range of 3, 8, 8 and 12.',['Find the largest and smallest values: 12 and 3.','Subtract: 12 − 3.'],'9']],
 Graphs:[
  ['Find y when x = 3 in y = 2x + 4.',['Replace x with 3.','2 × 3 + 4 = 10.'],'10'],
  ['Find the gradient from (1, 2) to (4, 8).',['Rise = 8 − 2 = 6.','Run = 4 − 1 = 3.','Gradient = rise ÷ run.'],'2'],
  ['Where does y = 3x − 5 cross the y-axis?',['At the y-axis, x = 0.','Then y = 3 × 0 − 5.'],'(0, −5)']],
 Vectors:[
  ['Add (3, 2) and (−1, 4).',['Add the horizontal parts: 3 + (−1) = 2.','Add the vertical parts: 2 + 4 = 6.'],'(2, 6)'],
  ['Subtract (1, 2) from (5, 7).',['Subtract matching parts: 5 − 1 = 4.','Then 7 − 2 = 5.'],'(4, 5)'],
  ['Multiply (2, −3) by 2.',['Double each part: 2 × 2 = 4.','Then −3 × 2 = −6.'],'(4, −6)']]
};

/* More original practice: varied recall, worked calculations and applications. */
const MATHS_MORE={
 Number:[
 ['fraction-of','Find 3/4 of 28.','21','Divide 28 by 4 to get 7, then multiply by 3.'],
 ['fraction-sum','Calculate 2/5 + 1/10. Give a simplified fraction.','1/2','2/5 = 4/10; 4/10 + 1/10 = 5/10 = 1/2.',{accepted:['1/2','0.5']}],
 ['fraction-subtract','Calculate 7/8 − 1/4.','5/8','1/4 = 2/8, so 7/8 − 2/8 = 5/8.',{accepted:['5/8','0.625']}],
 ['fraction-times','Calculate 2/3 of 9.','6','One third of 9 is 3; two thirds is 6.'],
 ['percent-of','Find 45% of 200.','90','10% is 20 and 5% is 10: 40% + 5% = 80 + 10.'],
 ['decimal-fraction','Write 0.375 as a fraction in simplest form.','3/8','0.375 = 375/1000. Divide top and bottom by 125.'],
 ['standard-value','Write 3.2 × 10³ as an ordinary number.','3200','10³ = 1000, so 3.2 × 1000 = 3200.',{accepted:['3200','3,200']}],
 ['negative-add','Calculate −4 + 9.','5','Start at −4 and move 9 places right on a number line.'],
 ['hcf','Find the highest common factor of 18 and 24.','6','Factors shared by 18 and 24 include 1, 2, 3 and 6.'],
 ['indices','Calculate 2³ × 2².','32','Add powers with the same base: 2⁵ = 32.'],
 ['surd50','Simplify √50 exactly.','5√2','√50 = √25 × √2 = 5√2.',{tier:'higher',level:3,accepted:['5√2','5sqrt2']}]
 ],
 Algebra:[
 ['collect','Simplify 7x − 2x.','5x','Subtract the coefficients: 7 − 2 = 5.'],
 ['collect2','Simplify 5x + 2x − 3.','7x-3','Combine the x terms and leave the constant.',{accepted:['7x-3','-3+7x']}],
 ['solve5','Solve 5x − 4 = 21.','5','Add 4 to get 5x = 25; divide by 5.',{accepted:['5','x=5']}],
 ['expand4','Expand 4(x − 3).','4x-12','Multiply both x and −3 by 4.'],
 ['factor8','Factorise 8x + 12 fully.','4(2x+3)','Take out the highest common factor, 4.'],
 ['sequence','Find the nth term of 4, 7, 10, 13, …','3n+1','The common difference is 3, so start with 3n. At n = 1, add 1 to get 4.'],
 ['solve-fraction','Solve x/3 + 2 = 7.','15','Subtract 2 to get x/3 = 5, then multiply by 3.',{accepted:['15','x=15']}],
 ['sub-negative','Find x² + 3 when x = −2.','7','(−2)² = 4, then add 3.'],
 ['simultaneous','Solve 2x + y = 11 and x − y = 1. Give x,y.','4,3','Add the equations to get 3x = 12; x = 4, then y = 3.',{accepted:['4,3','x=4,y=3','x=4andy=3'],level:2}]
 ],
 'Ratio & Proportion':[
 ['simplify-ratio','Simplify the ratio 12:18.','2:3','Divide both parts by their highest common factor, 6.'],
 ['share64','Share 64 in the ratio 3:5. What is the smaller share?','24','There are 8 parts, each worth 8. The smaller share is 3 × 8.'],
 ['recipe','A recipe needs 200 g of flour for 4 people. How much for 6 people in grams?','300','One person needs 50 g, so six need 300 g.',{accepted:['300','300g']}],
 ['discount','A £90 item is reduced by 10%. What is the new price in pounds?','81','10% of £90 is £9; subtract it from £90.',{accepted:['81','£81']}],
 ['increase25','Increase 80 by 25%.','100','25% is one quarter of 80, or 20. Add to 80.'],
 ['speed','A cyclist travels 150 km in 3 hours. Find average speed in km/h.','50','Speed = distance ÷ time = 150 ÷ 3.',{accepted:['50','50km/h']}],
 ['unit-price','Four notebooks cost £12. What is the price of one in pounds?','3','Divide the total cost by four.',{accepted:['3','£3']}],
 ['direct','y is directly proportional to x. When x = 2, y = 6. Find y when x = 7.','21','The multiplier is 3, so y = 3x.'],
 ['inverse2','y is inversely proportional to x. When x = 2, y = 12. Find y when x = 4.','6','xy stays at 24, so y = 24 ÷ 4.',{level:2}]
 ],
 Geometry:[
 ['perimeter','Find the perimeter of a 6 cm by 4 cm rectangle, in cm.','20','Add all four sides: 6 + 4 + 6 + 4.',{accepted:['20','20cm']}],
 ['triangle-area','Find the area of a triangle with base 10 cm and height 7 cm, in cm².','35','Area = 1/2 × 10 × 7.',{accepted:['35','35cm²','35cm2']}],
 ['around-point','Angles around a point are 120°, 90° and x°. Find x.','150','Angles around a point total 360°; subtract 210°.',{accepted:['150','150°']}],
 ['quadrilateral','Three angles in a quadrilateral are 90°, 80° and 100°. Find the fourth.','90','A quadrilateral totals 360°; the known angles total 270°.',{accepted:['90','90°']}],
 ['circle-circumference','Find the circumference of a circle of radius 5 cm. Give the exact answer in terms of π, in cm.','10π','Circumference = 2πr = 2π × 5.',{accepted:['10π','10pi','10πcm','10picm']}],
 ['cuboid-volume','Find the volume of a cuboid measuring 3 cm by 4 cm by 5 cm, in cm³.','60','Volume = 3 × 4 × 5.',{accepted:['60','60cm³','60cm3']}],
 ['similar-scale','A side of 4 cm is enlarged by scale factor 3. What is its new length in cm?','12','Multiply the original length by 3.',{accepted:['12','12cm']}],
 ['pythagoras2','A right triangle has shorter sides 6 cm and 8 cm. Find the hypotenuse in cm.','10','6² + 8² = 100, and √100 = 10.',{accepted:['10','10cm']}],
 ['semicircle-angle','What is the angle in a semicircle?','90°','A triangle drawn from the diameter to a point on the circle has a right angle there.',{tier:'higher',level:3,type:'mcq',options:['90°','45°','180°','60°']}]
 ],
 Probability:[
 ['spinner','A spinner has 3 equal red sectors and 2 equal blue sectors. Find P(red).','3/5','Three of five equally likely sectors are red.',{accepted:['3/5','0.6']}],
 ['complement2','If P(late) = 0.2, find P(not late).','0.8','The two probabilities add to 1.',{accepted:['0.8','4/5']}],
 ['prime-die','A fair die is rolled. Find P(prime number).','1/2','The prime faces are 2, 3 and 5: three of six.',{accepted:['1/2','0.5','3/6']}],
 ['coin-die','A fair coin and a fair die are used. Find P(head and six).','1/12','Independent probabilities multiply: 1/2 × 1/6.',{accepted:['1/12']}],
 ['expected','A fair coin is tossed 30 times. How many heads would you expect?','15','30 × 1/2 = 15. Actual results can differ.'],
 ['two-green','A bag has 2 green and 3 yellow counters. Two are drawn without replacement. Find P(two green).','1/10','2/5 × 1/4 = 2/20 = 1/10.',{level:2,accepted:['1/10','0.1']}],
 ['sum-one','Four outcomes have probabilities 0.1, 0.3, 0.2 and p. Find p.','0.4','All outcomes must total 1; the known probabilities total 0.6.'],
 ['mutually-exclusive','Can one fair die roll be both a 2 and a 5?','No','These events cannot happen together on one roll.',{type:'mcq',options:['No','Yes','Only on two rolls','Only if the die is unfair']}],
 ['conditional2','In a group, 5 pupils wear glasses and 3 of those 5 are left-handed. Find P(left-handed | wears glasses).','3/5','The condition restricts the group to the five pupils wearing glasses.',{tier:'higher',level:3,accepted:['3/5','0.6']}]
 ],
 Statistics:[
 ['mean2','Find the mean of 3, 5, 7 and 9.','6','The total is 24; divide by four.'],
 ['median-even','Find the median of 8, 1, 3 and 7.','5','Order: 1, 3, 7, 8. The middle two average to (3 + 7) ÷ 2.'],
 ['mode2','Find the mode of 4, 4, 5 and 6.','4','The mode is the value appearing most often.'],
 ['range-negative','Find the range of −2, 3 and 9.','11','Highest minus lowest = 9 − (−2) = 11.'],
 ['mean-total','Five values have a mean of 6. What is their total?','30','Total = mean × number of values = 6 × 5.'],
 ['frequency-mean','The value 1 occurs twice and 3 occurs four times. Find the mean to 2 decimal places.','2.33','Total = 1 × 2 + 3 × 4 = 14; frequency total = 6; 14 ÷ 6 ≈ 2.33.',{accepted:['2.33'],level:2}],
 ['outlier','Which average is usually most affected by one very large outlier?','Mean','The mean uses every value, so one extreme value shifts it.',{type:'mcq',options:['Mean','Median','Mode','None of them']}],
 ['correlation','A scatter graph rises from left to right. What correlation does it show?','Positive','As one variable rises, the other tends to rise.',{type:'mcq',options:['Positive','Negative','None','Impossible to tell']}],
 ['frequency-density2','A histogram class has width 4 and frequency 12. Find frequency density.','3','Frequency density = frequency ÷ class width = 12 ÷ 4.',{tier:'higher',level:3}]
 ],
 Graphs:[
 ['evaluate2','Find y when x = 5 in y = 2x + 3.','13','Substitute 5: 2 × 5 + 3 = 13.'],
 ['evaluate-negative','Find y when x = 2 in y = −x + 4.','2','−2 + 4 = 2.'],
 ['gradient2','Find the gradient through (0, 1) and (2, 5).','2','Rise = 4, run = 2, gradient = 4 ÷ 2.'],
 ['intercept-negative','What is the y-intercept of y = 5x − 7?','-7','At x = 0, y = −7.',{accepted:['-7','−7']}],
 ['coordinate-move','Move 3 units right from (2, 4). Give the new coordinate.','(5,4)','Right increases the x-coordinate only.',{accepted:['(5,4)','5,4']}],
 ['yaxis-value','For y = 3x + 1, find y when x = 0.','1','3 × 0 + 1 = 1.'],
 ['speed-graph','A straight distance–time line rises by 60 m in 15 s. Find speed in m/s.','4','Speed is gradient: 60 ÷ 15.',{accepted:['4','4m/s']}],
 ['horizontal-gradient','What is the gradient of a horizontal line?','0','Its rise is zero, so rise ÷ run = 0.'],
 ['perpendicular2','Find the gradient perpendicular to a line with gradient −4.','1/4','Perpendicular gradients multiply to −1, so −4 × 1/4 = −1.',{tier:'higher',level:3,accepted:['1/4','0.25']}]
 ],
 Vectors:[
 ['add2','Find (1, 2) + (3, 4).','(4,6)','Add horizontal parts, then vertical parts.',{accepted:['(4,6)','4,6']}],
 ['add-negative','Find (5, −1) + (−2, 3).','(3,2)','5 − 2 = 3 and −1 + 3 = 2.',{accepted:['(3,2)','3,2']}],
 ['double','Find 2(1, 4).','(2,8)','Multiply each component by 2.',{accepted:['(2,8)','2,8']}],
 ['subtract-negative','Find (−3, 2) − (1, −1).','(-4,3)','−3 − 1 = −4; 2 − (−1) = 3.',{accepted:['(-4,3)','(−4,3)','-4,3','−4,3']}],
 ['translation','A translation vector (2, −3) moves a shape which way?','2 right and 3 down','Positive horizontal is right; negative vertical is down.',{type:'mcq',options:['2 right and 3 down','2 left and 3 up','2 right and 3 up','3 right and 2 down']}],
 ['displacement','A is (1, 2) and B is (4, 6). Find the vector from A to B.','(3,4)','Subtract A from B: (4 − 1, 6 − 2).',{accepted:['(3,4)','3,4']}],
 ['zero-vector','Find (2, −5) + (−2, 5).','(0,0)','The components cancel.',{accepted:['(0,0)','0,0']}],
 ['half-vector','Find half of (6, 10).','(3,5)','Divide each component by 2.',{accepted:['(3,5)','3,5']}],
 ['midpoint2','OA = a and OB = b. M is the midpoint of AB. Which is OM?','(a+b)/2','The midpoint position vector is the average of the endpoint position vectors.',{tier:'higher',level:3,type:'mcq',options:['(a+b)/2','a+b','(a-b)/2','2a+b']}]
 ]
};
for(const [topic,items] of Object.entries(MATHS_MORE))for(const [id,q,answer,explain,extra={}] of items)mathsQ(topic,'more-'+id,q,answer,explain,extra);

/* Tap-to-reveal revision cards. Higher cards focus on reasoning and full method. */
const MATHS_CARDS={
 Number:[
 ['How do I find a fraction of an amount?','Divide by the denominator, then multiply by the numerator.','3/4 of 28: 28 ÷ 4 × 3 = 21.',['numerator','denominator'],'Write the division and multiplication so your method is visible.'],
 ['What does standard form mean?','Write a number as a × 10ⁿ, with 1 ≤ a < 10.','46,000 = 4.6 × 10⁴.',['standard form','index'],'Check whether the power makes your number bigger or smaller.'],
 ['Higher: how do I keep an answer exact?','Leave surds or π in exact form when asked. Simplify a surd by taking out square factors.','√50 = √25 × √2 = 5√2.',['exact value','surd'],'Show why your simplification works; avoid rounding too early.','higher']],
 Algebra:[
 ['How do I solve an equation?','Keep both sides balanced: do the same operation to each side.','3x + 7 = 22 → 3x = 15 → x = 5.',['equation','inverse operation'],'Substitute your result back into the original equation.'],
 ['What is factorising?','Rewrite an expression as a product. It reverses expansion.','6x + 9 = 3(2x + 3).',['factor','expand'],'Expand your answer to check every term.'],
 ['Higher: how do I show both quadratic roots?','Factorise or complete the square, then state every solution.','x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0 → x = 2 or 3.',['quadratic','roots'],'Write both roots and check each in the original equation.','higher']],
 'Ratio & Proportion':[
 ['How do I share in a ratio?','Add the ratio parts, find one part, then multiply.','£35 in 2:5 → 7 parts → £5 each → £10 and £25.',['ratio','part'],'Check your shares add back to the original total.'],
 ['How do I calculate a percentage change?','Use a multiplier: 1.20 for a 20% rise, 0.80 for a 20% fall.','£50 increased by 20% = £50 × 1.20 = £60.',['percentage','multiplier'],'State whether your answer is the change or the new total.'],
 ['Higher: how do I interpret a curved rate?','Draw a tangent at the point and estimate its gradient.','A tangent rising 12 m over 3 s gives 4 m/s at that point.',['tangent','gradient','instantaneous rate'],'Use well-spaced points on the tangent and include units.','higher']],
 Geometry:[
 ['Which angle facts should I know?','A straight line is 180°, a full turn is 360°, and a triangle is 180°.','Triangle: 50° + 60° + x = 180°, so x = 70°.',['angle','triangle'],'Name the angle fact beside your calculation.'],
 ['How do I use Pythagoras?','In a right triangle, the two shorter sides squared add to the longest side squared.','3² + 4² = 25, so the hypotenuse is 5.',['right angle','hypotenuse'],'Identify the hypotenuse before substituting.'],
 ['Higher: when do I use the sine rule?','Use it when you know an opposite side–angle pair in a non-right triangle.','a/sin A = b/sin B. Label each side opposite its matching angle.',['sine rule','opposite'],'Draw a clear diagram and check the largest side faces the largest angle.','higher']],
 Probability:[
 ['How do I find a simple probability?','Count successful outcomes and divide by all equally likely outcomes.','Even number on a fair die: 3/6 = 1/2.',['outcome','equally likely'],'List outcomes first to avoid missing one.'],
 ['What does without replacement change?','After the first item is taken, both the total and one category count can change.','Two red from 3 red, 2 blue: 3/5 × 2/4 = 3/10.',['without replacement','dependent events'],'Update the second fraction before multiplying.'],
 ['Higher: what is conditional probability?','Only count the group named after “given that”.','3 of 4 football players swim → P(swims | football) = 3/4.',['conditional','given that'],'Write the restricted group clearly; the denominator is not everyone.','higher']],
 Statistics:[
 ['Mean, median or mode?','Mean uses all values; median is the middle; mode is most common.','2, 4, 6, 8 → mean 5, median 5.',['mean','median','mode'],'Choose the average that suits the data, especially if there is an outlier.'],
 ['What is range?','Largest value minus smallest value. It measures spread.','For 4, 6, 10, 15: range = 15 − 4 = 11.',['range','spread'],'Compare both a centre measure and spread when judging two groups.'],
 ['Higher: what does a histogram height mean?','With unequal class widths, height is frequency density; area represents frequency.','Frequency 20, width 5 → density 4.',['histogram','frequency density'],'Label axes and use area when class widths differ.','higher']],
 Graphs:[
 ['What do m and c mean in y = mx + c?','m is gradient; c is where the line crosses the y-axis.','y = 2x + 1 has gradient 2 and y-intercept 1.',['gradient','intercept'],'Check by substituting x = 0.'],
 ['How do I find gradient from two points?','Divide the change in y by the change in x.','(1,3) to (3,7): (7 − 3) ÷ (3 − 1) = 2.',['rise','run','gradient'],'Show both differences and include units in a real-life graph.'],
 ['Higher: what do perpendicular gradients do?','For non-vertical perpendicular lines, their gradients multiply to −1.','Gradient 2 is perpendicular to gradient −1/2.',['perpendicular','negative reciprocal'],'Check by multiplying the two gradients.','higher']],
 Vectors:[
 ['What is a vector?','A movement with size and direction. Column components give across and up/down.','(2, −3) means 2 right and 3 down.',['vector','component'],'Keep the horizontal and vertical parts in the same order.'],
 ['How do I combine vectors?','Add or subtract matching components.','(2,3) + (1,−1) = (3,2).',['resultant','component'],'Draw arrows head to tail as a check.'],
 ['Higher: how do I prove a vector result?','Write a complete path using given vectors, then simplify it to show the relationship.','If M is midpoint of AB, OM = a + 1/2(b − a) = (a + b)/2.',['midpoint','position vector'],'Show the vector chain; a diagram alone is not a proof.','higher']]
};
