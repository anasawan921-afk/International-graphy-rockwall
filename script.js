const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
// MOBILE MENU

const menu=document.querySelector(".menu-toggle");

const nav=document.querySelector("nav ul");

menu.onclick=()=>{

nav.classList.toggle("active");

};


// SCROLL ANIMATION

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

const height=window.innerHeight;

if(top<height-100){

sec.classList.add("reveal");

sec.classList.add("active");

}

});

});
