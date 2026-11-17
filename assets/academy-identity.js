/* One academy promise across every language and page. */
(()=>{
 const copy={
 en:{slogan:'Experienced teaching. Personalised learning.',title:'Experienced teaching.<br><span>Personalised learning.</span>',intro:'Live online courses in Quran, Islamic Studies, Arabic and English. Diagnostic evaluations guide lessons tailored to each learner’s needs, level and goals.',label:'The Rawafid approach',heading:'Your needs shape every lesson.',steps:[['Understand','We begin with a diagnostic evaluation to identify strengths and learning needs.'],['Personalise','Lessons follow an individual plan, with content and pace tailored to the learner.'],['Support','Live teaching and feedback guide learning for as long as needed.']]},
 ar:{slogan:'خبرة في التعليم. تعلّم يناسبك.',title:'خبرة في التعليم.<br><span>تعلّم يناسبك.</span>',intro:'دورات مباشرة عبر الإنترنت في القرآن والدراسات الإسلامية والعربية والإنجليزية. توجه التقييمات التشخيصية دروسًا مصممة وفق احتياجات كل متعلم ومستواه وأهدافه.',label:'نهج روافد',heading:'احتياجاتك توجه كل درس.',steps:[['نفهم','نبدأ بتقييم تشخيصي لتحديد نقاط القوة والاحتياجات التعليمية.'],['نخصص','تتبع الدروس خطة فردية بمحتوى ووتيرة يناسبان المتعلم.'],['ندعم','يوجه التعليم المباشر والتغذية الراجعة التعلم طوال المدة اللازمة.']]},
 fr:{slogan:'Un enseignement expérimenté. Un apprentissage personnalisé.',title:'Un enseignement expérimenté.<br><span>Un apprentissage personnalisé.</span>',intro:'Cours en ligne et en direct de Coran, études islamiques, arabe et anglais. Les évaluations diagnostiques orientent des leçons adaptées aux besoins, au niveau et aux objectifs de chaque élève.',label:'L’approche Rawafid',heading:'Vos besoins orientent chaque leçon.',steps:[['Comprendre','Une évaluation diagnostique identifie les points forts et les besoins.'],['Personnaliser','Un programme individuel adapte le contenu et le rythme à chaque élève.'],['Accompagner','Les cours en direct et les retours guident l’apprentissage aussi longtemps que nécessaire.']]},
 es:{slogan:'Enseñanza con experiencia. Aprendizaje personalizado.',title:'Enseñanza con experiencia.<br><span>Aprendizaje personalizado.</span>',intro:'Cursos en directo de Corán, estudios islámicos, árabe e inglés. Las evaluaciones diagnósticas orientan lecciones adaptadas a las necesidades, el nivel y los objetivos de cada estudiante.',label:'El enfoque Rawafid',heading:'Tus necesidades orientan cada lección.',steps:[['Comprender','Una evaluación diagnóstica identifica fortalezas y necesidades de aprendizaje.'],['Personalizar','Un plan individual adapta el contenido y el ritmo a cada estudiante.'],['Acompañar','Las clases en directo y los comentarios guían el aprendizaje durante el tiempo necesario.']]}
 };
 function sync(){
 const lang=document.documentElement.lang||'en',t=copy[lang]||copy.en,hero=document.getElementById('approvedHero');
 if(hero){
 document.getElementById('aTitle').innerHTML=t.title;
 document.getElementById('aIntro').textContent=t.intro;
 let section=document.getElementById('academyIdentity');
 if(!section){section=document.createElement('section');section.id='academyIdentity';section.className='academy-identity';hero.after(section);}
 section.setAttribute('aria-labelledby','identityHeading');
 section.innerHTML=`<div class="identity-intro"><p>${t.label}</p><h2 id="identityHeading">${t.heading}</h2></div><div class="identity-steps">${t.steps.map((step,i)=>`<article><span aria-hidden="true">0${i+1}</span><h3>${step[0]}</h3><p>${step[1]}</p></article>`).join('')}</div>`;
 document.querySelector('footer [data-t="footer"]').textContent=t.slogan;
 document.title='Rawafid Online Academy | '+t.slogan;
 }else{const footer=document.querySelector('.footer-brand p');if(footer)footer.textContent=t.slogan;}
 }
 new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});sync();
})();
