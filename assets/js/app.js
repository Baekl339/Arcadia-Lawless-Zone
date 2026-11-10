const navButtons=[...document.querySelectorAll('.nav-btn')];
function showPage(id){document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===id));navButtons.forEach(b=>b.classList.toggle('active',b.dataset.page===id));window.scrollTo({top:0,behavior:'smooth'});history.replaceState(null,'','#'+id)}
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.go)));
navButtons.forEach(b=>b.addEventListener('click',()=>showPage(b.dataset.page)));
const grid=document.getElementById('character-grid');
function renderCards(filter='all'){
 const list=CHARACTERS.filter(c=>filter==='all'||c.faction===filter);
 grid.innerHTML=list.map(c=>`<button class="character-card" data-character="${c.id}">
 <div class="character-photo"><img src="assets/images/${c.image}" alt="${c.name}" loading="lazy"><div class="photo-shade"></div><span class="card-file">FILE / ${String(CHARACTERS.indexOf(c)+1).padStart(2,'0')}</span></div>
 <div class="card-body"><div class="card-faction">${c.faction.toUpperCase()}</div><div class="card-name">${c.name}</div><div class="card-role">${c.role}</div><div class="card-bottom"><span>${c.age} · ${c.height}</span><b>OPEN FILE ↗</b></div></div></button>`).join('');
 grid.querySelectorAll('[data-character]').forEach(el=>el.addEventListener('click',()=>openProfile(el.dataset.character)));
}
document.querySelectorAll('.filter').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));renderCards(b.dataset.filter)}));
const modal=document.getElementById('modal');
function setText(id,value){document.getElementById(id).textContent=value||''}
function openProfile(id){
 const c=CHARACTERS.find(x=>x.id===id);if(!c)return;
 setText('modal-roman',c.roman+' // PERSONNEL RECORD');
 setText('modal-name',c.name);setText('modal-role',c.faction+' / '+c.role);
 document.getElementById('modal-image').src='assets/images/'+c.image;
 document.getElementById('modal-image').alt=c.name;
 document.getElementById('modal-stats').innerHTML=[c.age,c.origin,c.height,c.build].map(x=>`<span>${x}</span>`).join('');
 setText('modal-appearance',c.appearance);
 document.getElementById('modal-personality').innerHTML=c.personality.map(p=>{const i=p.indexOf(':');return `<div class="personality-item"><b>${p.slice(0,i+1)}</b>${p.slice(i+1)}</div>`}).join('');
 setText('modal-speech',c.speech);setText('modal-background',c.background);setText('modal-ability',c.ability);setText('modal-ability-detail',c.ability_detail);
 const extras=[c.secret,c.extra].filter(Boolean);document.getElementById('secret-section').style.display=extras.length?'block':'none';
 setText('modal-secret',c.secret);setText('modal-extra',c.extra);
 modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';document.querySelector('.modal-close').focus();
}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
modal.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal()});
renderCards();
const initial=location.hash.replace('#','');if(['home','world','personnel'].includes(initial))showPage(initial);
