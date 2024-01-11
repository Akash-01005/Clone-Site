let menu=document.querySelector(".menu");
let cl=document.querySelector(".close");
let links=document.querySelector(".nav-links");
menu.addEventListener("click",()=>{
    links.classList.add("nav-show");
    menu.style.display="none";
    cl.style.display="block";
});
cl.addEventListener("click",()=>{
    links.classList.add("nav-close");
    menu.style.display="block";
    cl.style.display="none";
})