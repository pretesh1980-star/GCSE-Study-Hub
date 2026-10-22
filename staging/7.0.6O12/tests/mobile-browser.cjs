const {chromium,webkit,devices}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 const url=process.env.HUB_URL||'http://127.0.0.1:8877';
 fs.mkdirSync('test-results',{recursive:true});
 for(const [name,engine] of [['chromium',chromium],['webkit',webkit]]){
  const browser=await engine.launch({headless:true});
  const context=await browser.newContext({...devices['iPhone 13'],defaultBrowserType:undefined});
  const page=await context.newPage(); const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(url);
  const labels=await page.locator('#nav button').allTextContents();
  for(const width of [320,375,390,414,768,820]){
   await page.setViewportSize({width,height:844});
   const menu=page.getByRole('button',{name:'Menu',exact:true});
   await menu.click();
   assert.equal(await menu.getAttribute('aria-expanded'),'true');
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
   const bounds=await page.locator('#nav button').evaluateAll(nodes=>nodes.map(el=>{
    const r=el.getBoundingClientRect(); return {label:el.textContent,w:r.width,h:r.height,left:r.left,right:r.right,sw:el.scrollWidth,cw:el.clientWidth};
   }));
   for(const b of bounds){assert(b.h>=44,JSON.stringify(b));assert(b.left>=0&&b.right<=width,JSON.stringify(b));assert(b.sw<=b.cw+1,JSON.stringify(b));}
   await page.keyboard.press('Escape');
   assert.equal(await menu.getAttribute('aria-expanded'),'false');
   assert(await menu.evaluate(el=>el===document.activeElement));
  }
  await page.setViewportSize({width:390,height:844});
  await page.getByRole('button',{name:'Menu',exact:true}).click();
  await page.screenshot({path:`test-results/${name}-mobile-menu.png`});
  for(const label of labels){
   if(await page.getByRole('button',{name:'Menu',exact:true}).isVisible())await page.getByRole('button',{name:'Menu',exact:true}).click();
   const button=page.locator('#nav button').filter({hasText:label.trim()});
   await button.click();
   assert.equal(await page.locator('.mobile-menu-toggle').getAttribute('aria-expanded'),'false');
   assert(await page.locator('#app').innerText());
  }
  await page.getByRole('button',{name:'Menu',exact:true}).click();
  await page.getByRole('button',{name:'Subjects',exact:true}).click();
  await page.evaluate(()=>openLesson('Biology','Cell Biology'));
  const video=page.locator('video').first();await video.scrollIntoViewIfNeeded();
  assert.equal(await video.locator('track').count(),0);
  assert.equal(await video.evaluate(v=>v.textTracks.length),0);
  assert.equal(await video.evaluate(v=>v.muted),false);
  assert.equal(await video.locator('source').getAttribute('src'),'media/osmosis-explainer-clear-subtitles.mp4');
  await video.evaluate(async v=>{v.load();await v.play();});
  await page.waitForFunction(()=>document.querySelector('video').currentTime>0.5);
  assert.equal(await video.evaluate(v=>v.textTracks.length),0);
  const media=await video.evaluate(v=>({duration:v.duration,width:v.videoWidth,height:v.videoHeight,muted:v.muted}));
  assert(media.duration>10&&media.width===960&&media.height===720);assert.equal(media.muted,false);
  await video.evaluate(v=>{v.pause();v.currentTime=8;});
  await page.waitForFunction(()=>Math.abs(document.querySelector('video').currentTime-8)<0.2);
  await page.screenshot({path:`test-results/${name}-mobile-video.png`});
  // Verify real form autosave and reload restoration on the unchanged storage namespace.
  await page.getByRole('button',{name:'Start osmosis journey →',exact:true}).click();
  await page.locator('#pre').fill('Water crosses a partially permeable membrane.');
  await page.reload();await page.evaluate(()=>openLesson('Biology','Cell Biology'));
  await page.getByRole('button',{name:/^(Start|Continue) osmosis journey →$/,exact:true}).click();
  assert.equal(await page.locator('#pre').inputValue(),'Water crosses a partially permeable membrane.');
  await page.setViewportSize({width:1280,height:900});
  assert.equal(await page.locator('.mobile-menu-toggle').isVisible(),false);
  for(const label of labels)assert(await page.locator('#nav button').filter({hasText:label.trim()}).isVisible());
  assert.deepEqual(errors,[]);
  console.log(`${name}: ${labels.length} navigation actions, six mobile widths, keyboard closure/focus, desktop navigation, video playback/seeking with zero native caption tracks, narration unmuted, osmosis autosave/reload; no page errors. Media: ${JSON.stringify(media)}`);
  await browser.close();
 }
})().catch(e=>{console.error(e);process.exit(1)});
