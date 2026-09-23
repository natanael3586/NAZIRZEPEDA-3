document.addEventListener('DOMContentLoaded',()=>{
  document.documentElement.classList.add('js-ready');
  const button=document.getElementById('menuButton');
  const menu=document.getElementById('mobileMenu');
  if(button&&menu){button.addEventListener('click',()=>{const open=menu.classList.toggle('open');button.setAttribute('aria-expanded',open?'true':'false');button.innerHTML=open?'<i class="fa-solid fa-xmark"></i>':'<i class="fa-solid fa-bars"></i>';});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');button.setAttribute('aria-expanded','false');button.innerHTML='<i class="fa-solid fa-bars"></i>';}));}
  const items=[...document.querySelectorAll('.reveal')];
  if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target);}})},{threshold:.12});items.forEach((el,i)=>{el.style.animationDelay=(Math.min(i,8)*70)+'ms';io.observe(el);});}else items.forEach(el=>el.classList.add('show'));
  const form=document.getElementById('contact-form');
  if(form){form.addEventListener('submit',e=>{e.preventDefault();const box=document.getElementById('form-success');box.classList.add('show');form.reset();setTimeout(()=>box.classList.remove('show'),6000);});}
});
