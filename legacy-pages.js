
const btn=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-nav');
if(btn&&nav){btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(o))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}))}
document.querySelectorAll('[data-expand]').forEach(btn=>btn.addEventListener('click',()=>{const target=document.getElementById(btn.dataset.expand);target.hidden=!target.hidden;btn.textContent=target.hidden?'Read full story':'Close story'}));
