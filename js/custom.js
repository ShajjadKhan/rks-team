const mobileMenu = document.querySelector(".mobileMenu");
const span = document.querySelector(".menuBtn");
const menus = document.querySelector(".menus");


mobileMenu.addEventListener("click", function(){
  span.classList.toggle("activeMenus")
  menus.classList.toggle("activeMenu")
})

// filterable img gallery 
// dark mode toggle

const sun = document.querySelector(".sun");
sun.addEventListener("click", function(){
  document.querySelector('.banner2').classList.toggle("active");
  document.querySelector('.banner1').classList.toggle("active");
  document.querySelector('.sunIcon').classList.toggle("fa-moon");
  const body = document.querySelector("body");

  body.classList.toggle("light")
})
