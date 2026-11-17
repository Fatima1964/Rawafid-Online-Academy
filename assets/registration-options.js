(()=>{
const base='https://docs.google.com/forms/d/e/1FAIpQLScoxUtVEkl3o8Z7QdqWILB4t1KYG3ojnrYhp6BJ97invWNKrA/viewform';
const registration={
 en:{language:'English',entry:616607428,courses:['Quran & Tajweed','Islamic Studies','Arabic','English']},
 ar:{language:'العربية',entry:220238871,courses:['القرآن والتجويد','الدراسات الإسلامية','اللغة العربية','اللغة الإنجليزية']},
 fr:{language:'Français',entry:528615836,courses:['Coran et tajwid','Études islamiques','Arabe','Anglais']},
 es:{language:'Español',entry:432670804,courses:['Corán y tajwid','Estudios islámicos','Árabe','Inglés']}
};
// Questions live in Google Forms, so learners answer each question only once.
function registrationUrl(explicitCourse){
 const current=registration[document.documentElement.lang]||registration.en;
 const pageCourse=document.body.hasAttribute('data-programme')?Number(document.body.dataset.programme):null;
 const course=Number.isInteger(explicitCourse)?explicitCourse:pageCourse;
 const url=new URL(base);
 url.searchParams.set('usp','pp_url');
 url.searchParams.set('hl',registration[document.documentElement.lang]?document.documentElement.lang:'en');
 url.searchParams.set('entry.579942826',current.language);
 if(Number.isInteger(course)&&current.courses[course])url.searchParams.set('entry.'+current.entry,current.courses[course]);
 return url.toString();
}
window.openRegistration=function(course){window.open(registrationUrl(course),'_blank','noopener,noreferrer');};
document.addEventListener('click',event=>{
 const link=event.target.closest('a');
 if(!link||!link.href.startsWith(base))return;
 event.preventDefault();
 event.stopImmediatePropagation();
 window.open(registrationUrl(),'_blank','noopener,noreferrer');
},true);
const paths={email:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',whatsapp:'<path d="M20 11.5a8 8 0 0 1-12 7L3 20l1.5-5A8 8 0 1 1 20 11.5Z"/><path d="M8 7c0 5 4 8 8 8l1-2-3-1-1 1-2-2 1-1-2-3Z"/>',facebook:'<path d="M14 21v-9h3l.5-4H14V6c0-1 .5-2 2-2h2V1h-3c-4 0-5 2-5 5v2H7v4h3v9"/>'};
function contacts(){document.querySelectorAll('a[href^="mailto:"],a[href*="api.whatsapp.com/send"],a[href*="facebook.com/share/g/"]').forEach(a=>{const type=a.href.startsWith('mailto:')?'email':a.href.includes('whatsapp')?'whatsapp':'facebook',label={email:'Email',whatsapp:'WhatsApp',facebook:'Facebook'}[type];a.classList.add('contact-icon');a.setAttribute('aria-label',label);a.title=label;a.removeAttribute('data-t');const html=`<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[type]}</svg>`;if(!a.querySelector("svg")||a.dataset.contactKind!==type){a.innerHTML=html;a.dataset.contactKind=type;}});}
new MutationObserver(contacts).observe(document.body,{childList:true,subtree:true});contacts();
})();
