/* O12 adds an entry point; original lesson and mastery code is preserved. */
(function(){
if(typeof document.createElement!=='function')return;
const link=document.createElement('a');link.href='o12.html';link.className='btn';link.textContent='O12 · Cell Biology examination (AQA Trilogy)';link.style.cssText='display:block;margin:12px;text-align:center';document.body.insertBefore(link,document.body.firstChild);
const id=new URLSearchParams(location.search).get('o12lesson');
const map={O2:'structures',O3:'specialised',O4:'microscopy',O5:'rp01',O6:'division',O7:'diffusion',O8:'exchange',O9:'osmosis',O10:'rp02',O11:'active'};
if(map[id]&&typeof cellJourneyOpenCard==='function'){if(cellJourneyApplies('Biology',choice('Biology'),'Cell Biology')){openLesson('Biology','Cell Biology');cellJourneyOpenCard(map[id]);}else{const note=document.createElement('p');note.textContent='For the O12 revision lesson, choose AQA Combined Science: Trilogy in Biology, then open Cell Biology. Your existing course settings are preserved.';link.after(note);}}
})();
