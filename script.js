const sections=document.querySelectorAll("main section[id]");
const links=document.querySelectorAll("nav a");
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id));}})},{rootMargin:"-25% 0px -65% 0px"});
sections.forEach(s=>observer.observe(s));