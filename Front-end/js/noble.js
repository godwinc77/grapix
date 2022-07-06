const home_click = document.getElementById("home-click")
const gallery_click = document.getElementById("gallery-click")
const rates_click = document.getElementById("rates-click")
const potraits_click = document.getElementById("potraits-click")
const services_click = document.getElementById("services-click")
const about_click = document.getElementById("about-click")
const home_con = document.getElementsByClassName("home")[0]
const gallery_con = document.getElementsByClassName("gallery")[0]
const rates_con = document.getElementsByClassName("rates")[0]
const potraits_con= document.getElementsByClassName("potraits")[0]
const service_con = document.getElementsByClassName("service")[0]
const nav_list= document.getElementsByClassName("nav-list")[0]
const bios_word= document.getElementById("bios-word")

const right= document.getElementsByClassName("right")[0]
const down= document.getElementsByClassName("down")[0]
const session_text_info = document.getElementsByClassName("session-text-info")[0]
const package = document.getElementsByClassName("package")[0]
const studio_package = document.getElementsByClassName("studio-package")[0]
const outdoor_package = document.getElementsByClassName("outdoor-package")[0]
const studio_click = document.getElementById("studio-click")
const outdoor_click = document.getElementById("outdoor-click")
const click1 = document.getElementsByClassName("click1")[0]
const click2 = document.getElementsByClassName("click2")[0]
const select1 = document.getElementsByClassName("session-select")[0]
const select2 = document.getElementsByClassName("session-select")[1]
const select3 = document.getElementsByClassName("session-select")[2]
const select4 = document.getElementsByClassName("session-select")[3]
const square1 = document.getElementsByClassName("square")[0]
const square2 = document.getElementsByClassName("square")[1]
const square3 = document.getElementsByClassName("square")[2]
const square4 = document.getElementsByClassName("square")[3]
const screen = document.getElementById("screen")
const squareicon = document.getElementsByClassName("square")
function openpackage(){
  right.style.display ="none"
  down.style.display ="flex"
  session_text_info.style.display ="block"
}
function closepackage(){
  right.style.display ="flex"
  down.style.display ="none"
  session_text_info.style.display ="none"
}
function opensession(){
  click1.style.display = "block"
  click2.style.display = "none"
  package.style.display = "block"
  studio_package.style.display = "block"
  studio_package.style.display = "flex"
  outdoor_package.style.display = "none"
  square4.style.display ="none"
  square3.style.display ="none"
} 
function openoutdoor(){
  click1.style.display = "none"
  click2.style.display = "block"
  package.style.display = "block"
  studio_package.style.display = "none"
  outdoor_package.style.display = "block"
  outdoor_package.style.display = "flex"
  square1.style.display ="none"
  square2.style.display ="none"
}
function selectsession1(){
  square1.style.display ="block"
  square2.style.display ="none"
  screens()

}
function selectsession2(){
  square2.style.display ="block"
  square1.style.display ="none"
}
function selectsession3(){
  square3.style.display ="block" 
  square4.style.display ="none"
}
function selectsession4(){
  square4.style.display ="block"
  square3.style.display ="none"
}
function screens(){
  for (let i in squareicon){
    if (squareicon[i].style.display=== "block"){
      screen.style.display ==="none"
    }
    else{
      screen.style.display ==="block"
    }
  }

}

right.addEventListener("click",openpackage )
down.addEventListener("click",closepackage )
studio_click.addEventListener("click",opensession)
outdoor_click.addEventListener("click", openoutdoor)
select1.addEventListener("click",selectsession1)
select2.addEventListener("click",selectsession2)
select3.addEventListener("click",selectsession3)
select4.addEventListener("click",selectsession4)




let slideIndex = 1;
showSlides(1);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function openhome(){
  home_con.style.display ="block"
  closegallery()
  closerates()
  closepotraits()
  closeservices()
    
}
function closehome(){
  home_con.style.display ="none"
}
function biogallery(){
  opengallery()
}
function opengallery(){
  gallery_con.style.display ="block"
  closerates()
  closepotraits()
  closeservices()
  closehome()

}
function closegallery(){
  gallery_con.style.display ="none"
}
function openrates(){
  rates_con.style.display ="block"
  rates_con.style.display ="flex"
  closegallery()
  closepotraits()
  closeservices()
  closehome()
}
function closerates(){
  rates_con.style.display ="none"
}

function openpotraits(){
  potraits_con.style.display ="block"
  closegallery()
  closerates()
  closeservices()
  closehome()
}
function closepotraits(){
  potraits_con.style.display ="none"

}
function openservices(){
  service_con.style.display ="block"
  closegallery()
  closerates()
  closepotraits()
  closehome()
}
function closeservices(){
  service_con.style.display ="none"

}

home_click.addEventListener("click", openhome)
gallery_click.addEventListener("click", opengallery)
rates_click.addEventListener("click", openrates)
potraits_click.addEventListener("click", openpotraits)
services_click.addEventListener("click", openservices)
bios_word.addEventListener("click",biogallery)
