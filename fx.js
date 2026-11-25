/* =========================================================
   ÂM THANH & HIỆU ỨNG · Ngọn lửa ở Alexandria
   - Âm thanh tổng hợp bằng Web Audio, không cần file.
   - Mỗi ảnh nền có một lớp âm nền và một lớp hạt (bụi, khói, tàn lửa...).
   - Gắn vào game bằng cách bọc các hàm có sẵn (setBg, spend, addEv...).
   ========================================================= */
(() => {
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const store = { get(k,d){ try{ const v=localStorage.getItem(k); return v===null?d:JSON.parse(v); }catch(e){ return d; } },
                set(k,v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} } };

/* ---------------- ÂM THANH ---------------- */
let ctx=null, master, amb, sfx, NB={};
let muted = store.get('alex_mute', false);
function initAudio(){
  if(ctx){ if(ctx.state==='suspended') ctx.resume(); return; }
  const AC = window.AudioContext || window.webkitAudioContext; if(!AC) return;
  ctx = new AC();
  master = ctx.createGain(); master.gain.value = muted ? 0 : 0.8; master.connect(ctx.destination);
  amb = ctx.createGain(); amb.gain.value = 0.55; amb.connect(master);
  sfx = ctx.createGain(); sfx.gain.value = 0.7; sfx.connect(master);
  const len = ctx.sampleRate*3;
  const mk = f => { const b=ctx.createBuffer(1,len,ctx.sampleRate), d=b.getChannelData(0); f(d); return b; };
  NB.white = mk(d=>{ for(let i=0;i<d.length;i++) d[i]=Math.random()*2-1; });
  NB.brown = mk(d=>{ let l=0; for(let i=0;i<d.length;i++){ l=(l+0.02*(Math.random()*2-1))/1.02; d[i]=l*3.5; } });
  NB.pink = mk(d=>{ let b0=0,b1=0,b2=0; for(let i=0;i<d.length;i++){ const w=Math.random()*2-1; b0=0.997*b0+w*0.029; b1=0.985*b1+w*0.032; b2=0.95*b2+w*0.048; d[i]=(b0+b1+b2+w*0.05)*1.6; } });
  if(curScene) scene(curScene, true);
}
const T = () => ctx.currentTime;
function noise(type='white', loop=true){ const s=ctx.createBufferSource(); s.buffer=NB[type]; s.loop=loop; if(loop) s.loopStart=Math.random(); return s; }
function filt(type, f, q=1){ const n=ctx.createBiquadFilter(); n.type=type; n.frequency.value=f; n.Q.value=q; return n; }
function gain(v=0){ const g=ctx.createGain(); g.gain.value=v; return g; }
function env(g, t, a, peak, d, end=0.0001){ g.gain.cancelScheduledValues(t); g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(peak,t+a); g.gain.exponentialRampToValueAtTime(end,t+a+d); }
function tone(freq, dur, {type='sine', vol=0.2, at=0, a=0.005, to=null, bus=sfx}={}){
  if(!ctx) return; const t=T()+at; const o=ctx.createOscillator(); o.type=type; o.frequency.setValueAtTime(freq,t);
  if(to) o.frequency.exponentialRampToValueAtTime(to, t+dur);
  const g=gain(); env(g,t,a,vol,dur); o.connect(g).connect(bus); o.start(t); o.stop(t+a+dur+0.05);
}
function burst(dur, {f=2000, type='bandpass', q=1, vol=0.2, at=0, a=0.003, noiseType='white', bus=sfx, sweep=null}={}){
  if(!ctx) return; const t=T()+at; const s=noise(noiseType,false); const fl=filt(type,f,q);
  if(sweep){ fl.frequency.setValueAtTime(sweep[0],t); fl.frequency.exponentialRampToValueAtTime(sweep[1],t+dur*0.5); fl.frequency.exponentialRampToValueAtTime(sweep[2]||sweep[0],t+dur); }
  const g=gain(); env(g,t,a,vol,dur); s.connect(fl).connect(g).connect(bus); s.start(t, Math.random()*2); s.stop(t+a+dur+0.05);
}

/* Âm nền: mỗi lớp trả về hàm dừng */
const L = {
  waves(v){ const s=noise('brown'), f=filt('lowpass',520), g=gain(v*0.5), lfo=ctx.createOscillator(), lg=gain(v*0.35);
    lfo.frequency.value=0.09; lfo.connect(lg).connect(g.gain); s.connect(f).connect(g); s.start(); lfo.start();
    const s2=noise('pink'), f2=filt('highpass',1800), g2=gain(v*0.06), l2=ctx.createOscillator(), lg2=gain(v*0.05);
    l2.frequency.value=0.09; l2.connect(lg2).connect(g2.gain); s2.connect(f2).connect(g2); s2.start(); l2.start();
    return {outs:[g,g2], stop(){ [s,lfo,s2,l2].forEach(n=>n.stop()); }}; },
  wind(v){ const s=noise('pink'), f=filt('bandpass',600,0.8), g=gain(v*0.35), lfo=ctx.createOscillator(), lg=gain(260);
    lfo.frequency.value=0.05; lfo.connect(lg).connect(f.frequency); s.connect(f).connect(g); s.start(); lfo.start();
    return {outs:[g], stop(){ s.stop(); lfo.stop(); }}; },
  room(v){ const s=noise('brown'), f=filt('lowpass',170), g=gain(v*0.4); s.connect(f).connect(g); s.start(); return {outs:[g], stop(){ s.stop(); }}; },
  traffic(v){ const s=noise('brown'), f=filt('lowpass',260), g=gain(v*0.45); s.connect(f).connect(g); s.start(); return {outs:[g], stop(){ s.stop(); }}; },
  crowd(v){ const s=noise('white'), out=gain(v*0.5); const bands=[330,560,820,1150,1600].map(fr=>{ const b=filt('bandpass',fr,5), g=gain(0.05); s.connect(b).connect(g).connect(out); return {b,g,fr}; });
    s.start(); const id=setInterval(()=>{ const t=T(); bands.forEach(x=>{ x.g.gain.setTargetAtTime(Math.random()*0.5,t,0.08); x.b.frequency.setTargetAtTime(x.fr*(0.85+Math.random()*0.3),t,0.1); }); },140);
    return {outs:[out], stop(){ clearInterval(id); s.stop(); }}; },
  fire(v){ const out=gain(1), s=noise('brown'), f=filt('lowpass',130), g=gain(v*0.5); s.connect(f).connect(g).connect(out); s.start();
    let on=true; const tick=()=>{ if(!on) return; burst(0.006+Math.random()*0.02,{f:1800+Math.random()*3000,type:'highpass',vol:v*(0.05+Math.random()*0.18),bus:out}); setTimeout(tick, 25+Math.random()*140); }; tick();
    return {outs:[out], stop(){ on=false; s.stop(); }}; },
  cicadas(v){ const out=gain(0), o=ctx.createOscillator(), am=ctx.createOscillator(), amg=gain(0.5), base=gain(0.5);
    o.frequency.value=4300; am.frequency.value=48; am.connect(amg).connect(base.gain); o.connect(base).connect(out); o.start(); am.start();
    let on=true; const cyc=()=>{ if(!on) return; const t=T(), d=2+Math.random()*4; out.gain.setTargetAtTime(v*0.05,t,0.6); out.gain.setTargetAtTime(0.0001,t+d,0.8); setTimeout(cyc,(d+1.5+Math.random()*3)*1000); }; cyc();
    return {outs:[out], stop(){ on=false; o.stop(); am.stop(); }}; },
  crickets(v){ const out=gain(1); let on=true;
    const cyc=()=>{ if(!on) return; for(let i=0;i<3;i++) tone(4100,0.03,{vol:v*0.05,at:i*0.07,bus:out}); setTimeout(cyc,700+Math.random()*700); }; cyc();
    return {outs:[out], stop(){ on=false; }}; },
  birds(v){ const out=gain(1); let on=true;
    const cyc=()=>{ if(!on) return; const n=1+Math.floor(Math.random()*3), f=2200+Math.random()*1600; for(let i=0;i<n;i++) tone(f,0.09,{vol:v*0.05,at:i*0.13,to:f*1.35,bus:out}); setTimeout(cyc,1200+Math.random()*3500); }; cyc();
    return {outs:[out], stop(){ on=false; }}; },
  drips(v){ const out=gain(1); let on=true; const cyc=()=>{ if(!on) return; tone(1300,0.14,{vol:v*0.08,to:520,bus:out}); setTimeout(cyc,3500+Math.random()*6000); }; setTimeout(cyc,1500);
    return {outs:[out], stop(){ on=false; }}; },
  creak(v){ const out=gain(1); let on=true; const cyc=()=>{ if(!on) return; const t=T(); const o=ctx.createOscillator(); o.type='sawtooth'; o.frequency.setValueAtTime(95,t); o.frequency.linearRampToValueAtTime(140+Math.random()*40,t+0.7);
      const b=filt('bandpass',700,6), g=gain(); env(g,t,0.15,v*0.05,0.6); o.connect(b).connect(g).connect(out); o.start(t); o.stop(t+0.9); setTimeout(cyc,4000+Math.random()*7000); }; setTimeout(cyc,2000);
    return {outs:[out], stop(){ on=false; }}; },
  tick(v){ const out=gain(1); const id=setInterval(()=>burst(0.01,{f:3500,vol:v*0.06,bus:out}),1000); return {outs:[out], stop(){ clearInterval(id); }}; },
  sizzle(v){ const s=noise('white'), f=filt('highpass',3500), g=gain(v*0.04); s.connect(f).connect(g); s.start(); const fire=L.fire(v*0.4);
    return {outs:[g,...fire.outs], stop(){ s.stop(); fire.stop(); }}; },
};
const AMB = {
  den:{wind:.6,cicadas:.5}, den_thang:{wind:.5,cicadas:.5},
  ben_tay:{waves:.8,crowd:.3,fire:.3}, cong:{crowd:.6,waves:.25,drips:.6}, hien_cot:{crowd:.22,cicadas:.3,wind:.25},
  hanh_lang:{room:.7,drips:.5}, phong_doc:{room:.7,drips:.35}, phong_nikanor:{room:.6,crowd:.08}, phong_dorion:{room:.6},
  day_kho:{fire:.8,wind:.45,waves:.2}, trong_kho:{fire:.45,room:.5}, trai:{crowd:.8,waves:.45,fire:.15},
  nha_lys:{room:.5,crowd:.12}, ben_dong_ngay:{waves:.8,creak:.6}, ben_dong:{waves:.6,creak:.6,fire:.12},
  san_trong:{cicadas:.35,wind:.25}, san_dem:{crickets:.7,fire:.35,crowd:.1},
  phong_na:{traffic:.4,birds:.35}, ban_an:{room:.5,tick:.7}, bep:{sizzle:.6,room:.35}, cong_vien:{birds:.6,traffic:.25,wind:.25}, san_bong_ro:{wind:.45,birds:.25},
};
let curScene=null, curLayers=[];
function scene(id, force){
  if(id===curScene && !force) { fxScene(id); return; }
  curScene=id; fxScene(id);
  if(!ctx) return;
  const t=T(); const old=curLayers; curLayers=[];
  old.forEach(l=>{ l.bus.gain.setTargetAtTime(0.0001,t,0.5); setTimeout(()=>{ try{ l.stop(); l.bus.disconnect(); }catch(e){} },2500); });
  const spec=AMB[id]||{};
  for(const k in spec){ const bus=gain(0.0001); bus.connect(amb); const lay=L[k](spec[k]); lay.outs.forEach(o=>o.connect(bus)); bus.gain.setTargetAtTime(1,t+0.2,0.7); curLayers.push({bus, stop:lay.stop}); }
}

/* Hiệu ứng âm */
const SFX = {
  tick(){ burst(0.02,{f:2600,q:2,vol:0.12}); tone(520,0.05,{vol:0.05}); },
  drop(at=0){ tone(1500,0.13,{vol:0.13,to:480,at}); burst(0.02,{f:3000,vol:0.03,at}); },
  paper(){ burst(0.28,{f:3200,q:0.8,vol:0.12,a:0.02}); burst(0.18,{f:2200,q:0.8,vol:0.08,at:0.12}); },
  chime(){ [784,1175,1568].forEach((f,i)=>tone(f,1.3,{vol:0.07,at:0.05+i*0.07})); },
  pencil(){ for(let i=0;i<4;i++) burst(0.05,{f:4200,q:3,vol:0.05,at:i*0.07}); },
  whoosh(){ burst(0.6,{type:'bandpass',q:0.7,vol:0.12,a:0.15,noiseType:'pink',sweep:[300,2200,300]}); },
  steps(){ for(let i=0;i<3;i++){ tone(85,0.12,{vol:0.12,at:i*0.2,to:60}); burst(0.05,{f:500,type:'lowpass',vol:0.05,at:i*0.2}); } },
  portal(){ [523,659,784,1047].forEach((f,i)=>tone(f,1.6,{vol:0.05,a:0.5,at:i*0.08})); burst(1.4,{type:'bandpass',q:1,vol:0.1,a:0.5,noiseType:'pink',sweep:[400,3000,600]}); },
  good(){ [659,831,988].forEach((f,i)=>tone(f,0.6,{vol:0.08,at:i*0.08})); },
  bad(){ tone(120,0.25,{vol:0.15,to:80}); burst(0.12,{f:300,type:'lowpass',vol:0.06}); },
  impact(){ tone(70,0.5,{vol:0.3,to:40}); burst(0.25,{f:900,type:'lowpass',vol:0.18}); burst(0.5,{f:2600,q:0.6,vol:0.05,at:0.05}); },
  scratch(){ for(let i=0;i<6;i++) burst(0.08,{f:2600+Math.random()*1200,q:4,vol:0.06,at:i*0.1}); },
  rumble(){ tone(46,2.6,{vol:0.25,a:1.2}); burst(2.8,{f:120,type:'lowpass',vol:0.2,a:1.2,noiseType:'brown'}); setTimeout(()=>SFX.bell(),1800); },
  bell(){ [1,2.76,5.4,8.93].forEach((m,i)=>tone(330*m,3-i*0.5,{vol:0.07/(i+1),a:0.003})); },
  gong(){ [1,1.47,2.31,3.08].forEach((m,i)=>tone(88*m,4.5-i*0.7,{vol:0.16/(i+1),a:0.01})); },
  win(){ [349,440,523,698].forEach((f,i)=>tone(f,3.2,{vol:0.06,a:0.9,at:i*0.15})); setTimeout(()=>SFX.bell(),900); },
};
const play = (k,...a) => { if(ctx && !muted) try{ SFX[k](...a); }catch(e){} };

/* ---------------- HIỆU ỨNG HÌNH ---------------- */
const stage = document.getElementById('stage');
const cv = document.createElement('canvas'); cv.id='fx'; cv.className='layer'; cv.setAttribute('aria-hidden','true');
document.getElementById('bg').after(cv);
const ov = document.createElement('div'); ov.id='fxo'; ov.setAttribute('aria-hidden','true'); stage.appendChild(ov);
const g2 = cv.getContext('2d'); let W=0,H=0,DPR=1;
function resize(){ DPR=Math.min(1.5,devicePixelRatio||1); W=stage.clientWidth; H=stage.clientHeight; cv.width=W*DPR; cv.height=H*DPR; g2.setTransform(DPR,0,0,DPR,0,0); }
addEventListener('resize',resize); resize();

const R=(a,b)=>a+Math.random()*(b-a);
const KIND = {
  dust:  {n:30, spawn:()=>({x:R(0,1),y:R(0,1),r:R(1,2.8),vx:R(-.02,.02),vy:R(-.015,.01),a:R(.3,.8),glow:1,c:'255,238,200',life:R(6,14)})},
  ghost: {n:14, box:[.08,.22,.2,.62], spawn:b=>({x:R(b[0],b[1]),y:R(b[2],b[3]),r:R(1.2,3),vx:R(-.008,.008),vy:R(-.03,-.01),a:R(.4,.9),glow:1,c:'200,225,255',life:R(3,7)})},
  smoke: {n:12, spawn:()=>({x:R(-.1,.9),y:R(.55,1.1),r:R(60,150),vx:R(.01,.035),vy:R(-.04,-.02),a:R(.09,.18),c:'70,66,66',life:R(10,20),soft:1})},
  steam: {n:10, box:[.5,.66,.22,.4], spawn:b=>({x:R(b[0],b[1]),y:b[3],r:R(8,20),vx:R(-.004,.006),vy:R(-.03,-.018),a:R(.06,.14),c:'255,250,240',life:R(2,4),soft:1})},
  embers:{n:24, spawn:b=>({x:b?R(b[0],b[1]):R(0,1),y:b?R(b[2],b[3]):R(.75,1.05),r:R(1.3,3),vx:R(-.01,.025),vy:R(-.11,-.05),a:R(.75,1),glow:1,c:'255,150,60',life:R(2,5),flick:1})},
  leaves:{n:8, spawn:()=>({x:R(.4,1.1),y:R(-.1,.2),r:R(3,5),vx:R(-.04,-.015),vy:R(.03,.06),a:R(.6,.9),c:'150,110,40',life:R(10,18),leaf:1,rot:R(0,6)})},
};
const VFX = {
  den:{dust:20,ghost:12}, den_thang:{dust:20,ghost:26}, ben_tay:{smoke:12,embers:10}, cong:{smoke:6},
  hien_cot:{dust:20}, hanh_lang:{dust:14}, phong_doc:{dust:45}, phong_nikanor:{dust:14,steam:5}, phong_dorion:{dust:16},
  day_kho:{smoke:18,embers:30}, trong_kho:{dust:24,embers:8}, trai:{smoke:10}, nha_lys:{dust:20},
  ben_dong:{embers:10,flick:1}, san_trong:{dust:10}, san_dem:{embers:14,flick:1}, phong_na:{dust:10},
  bep:{steam:10}, ban_an:{steam:6}, san_bong_ro:{leaves:8},
};
let parts=[], flick=0, cfg={};
function fxScene(id){
  cfg = VFX[id]||{}; flick = cfg.flick?1:0; parts=[];
  if(RM) return;
  for(const k in cfg){ if(!KIND[k]) continue; const K=KIND[k]; for(let i=0;i<cfg[k];i++){ const p=K.spawn(K.box); p.k=k; p.t=R(0,p.life); parts.push(p); } }
  if(id==='day_kho') parts.forEach(p=>{ if(p.k==='embers'){ p.box=[.03,.33,.45,.62]; } });
  if(id==='bep') parts.forEach(p=>{ if(p.k==='steam'){ p.box=[.56,.66,.22,.36]; } });
  if(id==='ban_an') parts.forEach(p=>{ if(p.k==='steam'){ p.box=[.58,.68,.5,.62]; } });
}
let last=performance.now();
function frame(now){
  const dt=Math.min(.05,(now-last)/1000); last=now;
  g2.clearRect(0,0,W,H);
  if(flick && !RM){ const a=0.10+0.05*Math.sin(now/90)+0.04*Math.sin(now/37)+Math.random()*0.03;
    const gr=g2.createRadialGradient(W*.5,H*1.05,H*.1,W*.5,H*1.05,H*1.1); gr.addColorStop(0,`rgba(255,150,60,${a})`); gr.addColorStop(1,'rgba(255,150,60,0)'); g2.fillStyle=gr; g2.fillRect(0,0,W,H); }
  for(const p of parts){
    p.t+=dt; if(p.t>p.life){ const K=KIND[p.k]; Object.assign(p,K.spawn(p.box||K.box),{t:0}); }
    p.x+=p.vx*dt; p.y+=p.vy*dt;
    const life=p.t/p.life, fade=Math.sin(Math.PI*life);
    let a=p.a*fade; if(p.flick) a*=0.6+0.4*Math.random();
    const x=p.x*W, y=p.y*H;
    if(p.soft){ const gr=g2.createRadialGradient(x,y,0,x,y,p.r); gr.addColorStop(0,`rgba(${p.c},${a})`); gr.addColorStop(1,`rgba(${p.c},0)`); g2.fillStyle=gr; g2.beginPath(); g2.arc(x,y,p.r,0,7); g2.fill(); p.r+=dt*6; }
    else if(p.leaf){ p.rot+=dt*1.5; p.x+=Math.sin(now/600+p.r)*0.0006; g2.save(); g2.translate(x,y); g2.rotate(p.rot); g2.fillStyle=`rgba(${p.c},${a})`; g2.beginPath(); g2.ellipse(0,0,p.r*1.8,p.r*.8,0,0,7); g2.fill(); g2.restore(); }
    else { if(p.glow){ const gr=g2.createRadialGradient(x,y,0,x,y,p.r*4); gr.addColorStop(0,`rgba(${p.c},${a*0.35})`); gr.addColorStop(1,`rgba(${p.c},0)`); g2.fillStyle=gr; g2.beginPath(); g2.arc(x,y,p.r*4,0,7); g2.fill(); }
      g2.fillStyle=`rgba(${p.c},${a})`; g2.beginPath(); g2.arc(x+Math.sin(now/900+p.r*9)*2,y,p.r,0,7); g2.fill(); }
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

function overlay(cls, ms){ if(RM) return; ov.className=''; void ov.offsetWidth; ov.className=cls; setTimeout(()=>{ if(ov.className===cls) ov.className=''; },ms); }
function shake(power='s'){ if(RM) return; stage.classList.remove('shake','shake-l'); void stage.offsetWidth; stage.classList.add(power==='l'?'shake-l':'shake'); }
function droplet(i){ if(RM) return; const c=document.getElementById('clock'); if(!c) return; const r=c.getBoundingClientRect(), s=stage.getBoundingClientRect();
  const d=document.createElement('div'); d.className='drip'; d.style.left=(r.left-s.left+r.width*0.22)+'px'; d.style.top=(r.bottom-s.top-6)+'px'; d.style.animationDelay=(i*0.12)+'s'; stage.appendChild(d); setTimeout(()=>d.remove(),1400); }
function glow(el){ if(!el||RM) return; el.classList.remove('fx-glow'); void el.offsetWidth; el.classList.add('fx-glow'); }

/* ---------------- GẮN VÀO GAME ---------------- */
const wrap = (name, before, after) => { const f=window[name]; if(typeof f!=='function') return; window[name]=function(...a){ if(before) before(...a); const r=f.apply(this,a); if(after) after(...a); return r; }; };
wrap('setBg', null, id=>scene(id));
wrap('spend', n=>{ if(!n || !S?.inCity) return; for(let i=0;i<Math.min(n,4);i++){ play('drop',i*0.14); droplet(i); } setTimeout(()=>glow(document.getElementById('clock')),50); });
wrap('addEv', id=>{ if(!EVIDENCE[id]||S.ev.includes(id)) return; play('paper'); setTimeout(()=>play('chime'),150); setTimeout(()=>glow(document.getElementById('b-note')),60); });
wrap('addNote', id=>{ if(!NOTES[id]||S.notes.includes(id)) return; play('pencil'); setTimeout(()=>glow(document.getElementById('b-note')),60); });
wrap('openMap', ()=>play('paper'));
wrap('openNote', ()=>play('paper'));
wrap('travel', id=>{ if(S.loc!==id){ play('steps'); setTimeout(()=>play('whoosh'),250); } });
wrap('pick', ()=>play('tick'));
wrap('enterCity', ()=>{ play('portal'); overlay('portal',1600); });
wrap('startTurtle', ()=>{ play('rumble'); overlay('turtle',3200); });
wrap('showFail', ()=>{ play('gong'); shake('l'); overlay('fail',2600); });
wrap('showEnd', ()=>{ play('win'); overlay('win',3500); });
wrap('mgDone', ()=>play('good'));
wrap('logAct', t=>{
  if(typeof t!=='string') return;
  if(t.startsWith('Đối chất: đánh đổ')){ play('impact'); shake('l'); }
  else if(t.startsWith('Đối chất: đưa sai')){ play('bad'); shake('s'); }
  else if(t.startsWith('Viết tên lên mai rùa')) play('scratch');
});
wrap('restart', null, ()=>overlay('portal',1600));
/* Phản hồi đúng/sai trong minigame */
const mgb=document.getElementById('mg-body'); let lastFb='';
new MutationObserver(()=>{ if(!MG || MG.kind==='doichat' || MG.kind==='ten') return; const fb=mgb.querySelector('.fb.good,.fb.bad'); if(!fb) return; const key=fb.className+fb.textContent; if(key===lastFb) return; lastFb=key;
  if(fb.classList.contains('bad')){ play('bad'); const card=mgb.querySelector('.shake'); if(!card) shake('s'); } else play('good'); }).observe(mgb,{subtree:true,childList:true,characterData:true});

/* Nút âm thanh */
const btn=document.createElement('button'); btn.className='tbtn'; btn.id='b-snd'; btn.setAttribute('aria-pressed', String(!muted));
const label=()=>{ btn.innerHTML=`${muted?'Âm thanh: tắt':'Âm thanh: bật'} <kbd>S</kbd>`; btn.setAttribute('aria-pressed', String(!muted)); };
label(); document.getElementById('tools').appendChild(btn);
function toggle(){ muted=!muted; store.set('alex_mute',muted); label(); initAudio(); if(master) master.gain.setTargetAtTime(muted?0:0.8,T(),0.1); }
btn.onclick=toggle;
document.addEventListener('keydown',e=>{ if((e.key==='s'||e.key==='S') && !e.target.closest('input,textarea')) toggle(); });
/* Trình duyệt chỉ cho phát âm thanh sau một cú bấm của người chơi */
['pointerdown','keydown'].forEach(ev=>addEventListener(ev,initAudio,{once:false,passive:true}));
window.FX={scene, play, shake, overlay};
})();
