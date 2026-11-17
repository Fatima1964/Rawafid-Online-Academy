const policyLabels={"en": "Policies", "ar": "السياسات", "fr": "Politiques", "es": "Políticas"};
const footerLabels={"en": ["Contact", "Email · Primary contact", "Chat on WhatsApp ↗", "Facebook group ↗"], "ar": ["تواصل معنا", "البريد الإلكتروني · وسيلة التواصل الأساسية", "تواصل عبر واتساب ↗", "مجموعة فيسبوك ↗"], "fr": ["Contact", "E-mail · Contact principal", "Discuter sur WhatsApp ↗", "Groupe Facebook ↗"], "es": ["Contacto", "Correo · Contacto principal", "Chatear por WhatsApp ↗", "Grupo de Facebook ↗"]};
const slugs=['quran-tajweed','islamic-studies','arabic','english'];
const programme=Number(document.body.dataset.programme);
const formUrl='https://docs.google.com/forms/d/e/1FAIpQLScoxUtVEkl3o8Z7QdqWILB4t1KYG3ojnrYhp6BJ97invWNKrA/viewform';
function renderProgramme(language){
 const l=Object.hasOwn(pageCopy,language)?language:'en',t=content[l],p=pageCopy[l];
 document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';
 document.title=t['subject'+programme]+' | Rawafid Online Academy';
 document.getElementById('language').value=l;
 document.querySelector('.brand').href='../index.html?lang='+l;
 const f=footerLabels[l];
 const home='../index.html?lang='+l+'#programmes';
 document.getElementById('page').innerHTML=`<a class="back" href="${home}">${p.home}</a><section class="hero"><div><p class="eyebrow">${t.live}</p><h1>${t['subject'+programme]}</h1><p class="intro">${t.descs[programme]}</p><a class="button" href="#enquire">${t.register} ↗</a></div><div class="emblem" aria-hidden="true">${['۞','✧','ض','Aa'][programme]}</div></section><section class="card personalised"><h2>${p.personalTitle}</h2><p>${p.personalText}</p></section><div class="layout"><div><section class="card"><p class="eyebrow">01</p><h2>${p.learn}</h2><p>${p.goalnote}</p><ul class="outcomes">${outcomes[l][programme].map(x=>`<li>${x}</li>`).join('')}</ul></section><section class="card"><p class="eyebrow">02</p><h2>${p.who}</h2><div class="chips">${t.filters.slice(1).map(x=>`<span>${x}</span>`).join('')}</div><p>${p.ages}</p></section><section class="card"><p class="eyebrow">03</p><h2>${p.levels}</h2><div class="levels">${p.paths.map((x,i)=>`<article><span>0${i+1}</span><h3>${x}</h3><p>${p.steps[i]}</p></article>`).join('')}</div><p>${p.placement}</p></section><section class="card"><h2>${p.ready}</h2><p>${p.prepare}</p></section></div><aside><section class="card details"><h2>${p.details}</h2><dl>${p.labels.map((x,i)=>`<div><dt>${x}</dt><dd>${p.values[i]}</dd></div>`).join('')}</dl></section><section class="card register" id="enquire"><h2>${p.next}</h2><p>${p.notice}</p><a class="button" href="${formUrl}" target="_blank" rel="noopener noreferrer">${t.register} ↗</a></section></aside></div><section class="related"><h2>${p.other}</h2><nav>${slugs.map((slug,i)=>i===programme?'':`<a class="card" href="${slug}.html?lang=${l}">${t['subject'+i]} ↗</a>`).join('')}</nav></section><footer><div class="footer-contact"><h2>${f[0]}</h2><a href="mailto:Fatima.farhat@rawafidschool.com"><small>${f[1]}</small><span dir="ltr">Fatima.farhat@rawafidschool.com</span></a><a href="https://api.whatsapp.com/send?phone=96181523381" target="_blank" rel="noopener noreferrer">${f[2]}</a><a href="https://www.facebook.com/share/g/1RHBYvghb4/" target="_blank" rel="noopener noreferrer">${f[3]}</a></div><p><a href="../policies.html?lang=${l}">${policyLabels[l]}</a></p><p>Rawafid Online Academy · ${t.live}</p></footer>`;
 renderAcademyChrome(l,"../");
 const url=new URL(location.href);url.searchParams.set('lang',l);history.replaceState(null,'',url);
}
document.getElementById('language').addEventListener('change',e=>renderProgramme(e.target.value));
renderProgramme(new URLSearchParams(location.search).get('lang'));
