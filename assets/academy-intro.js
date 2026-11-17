(()=>{
 const intro=document.getElementById('flyIntro'),convoy=intro.querySelector('.intro-convoy'),caption=document.getElementById('introCaption'),skip=document.getElementById('skipIntro'),replay=document.getElementById('replayIntro'),motion=matchMedia('(prefers-reduced-motion:reduce)'),key='rawafid-welcome-seen';
 let animation,timer,sloganTimer,run=0;
 function seen(){try{return sessionStorage.getItem(key)==='1';}catch{return false;}}
 function remember(){try{sessionStorage.setItem(key,'1');}catch{}}
 function finish(){run++;clearTimeout(timer);clearTimeout(sloganTimer);if(animation){animation.cancel();animation=null;}document.documentElement.classList.remove('intro-playing');document.documentElement.classList.add('academy-ready');if(!motion.matches)document.documentElement.classList.add('page-enter');intro.classList.add('finished');intro.setAttribute('aria-hidden','true');skip.tabIndex=-1;}
 function start(manual=false){
 finish();remember();if(motion.matches&&!manual)return;
 const ticket=++run;document.documentElement.classList.remove('academy-ready','page-enter');document.documentElement.classList.add('intro-playing');intro.classList.remove('finished');intro.removeAttribute('aria-hidden');skip.tabIndex=0;skip.textContent='Skip intro →';caption.textContent='Rawafid Online Academy';
 intro.querySelector('.academy-banner').classList.remove('slogan');intro.querySelector('.academy-banner strong').innerHTML='Rawafid<br><span>Online Academy</span>';
 // Reduced-motion Replay shows a still welcome for ten seconds, with Skip available.
 timer=setTimeout(()=>{if(ticket===run)finish();},10000);
 if(manual)skip.focus({preventScroll:true});if(motion.matches)return;
 const offset=innerWidth/2+convoy.offsetWidth/2+40;
 animation=convoy.animate([{transform:`translate(calc(-50% + ${offset}px),-50%)`},{transform:`translate(calc(-50% - ${offset}px),-50%)`}],{duration:10000,iterations:1,easing:'linear',fill:'both'});
 sloganTimer=setTimeout(()=>{if(ticket===run){caption.textContent='Experienced teaching. Personalised learning.';intro.querySelector('.academy-banner').classList.add('slogan');intro.querySelector('.academy-banner strong').innerHTML='Experienced Teachers.<br><span>Confident Learners.</span>';}},5000);
 }
 skip.onclick=()=>{finish();replay.focus({preventScroll:true});};replay.onclick=()=>start(true);
 motion.addEventListener('change',()=>{if(motion.matches)finish();});
 if(seen()||motion.matches){remember();finish();}else start();
})();
