// 커서 애니메이션
const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});
document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "20px");
    }
  });
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer3") {
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.setProperty("--size", "70px");
    }
  });
  
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "40px");
  });
});


//움직이는 원 애니메이션
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
(char, i) =>
`<span style= "transform:rotate(${i * 10.5}deg)">${char}</span>`
).join("")


// 처음으로 버튼
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
//
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});


// 내비메뉴 고정 
var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function(){
  if(window.pageYOffset >= menu.offsetTop){
    navbar.classList.add("stickys");
  }
    else{
    navbar.classList.remove("stickys");
  }
}


// 스킬메뉴 토글
$('.btn').hover(function(e) {
  e.preventDefault();
  
  $(".content").hide();
  $("#"+this.id).show();
});


// slide right
var observer = new IntersectionObserver(function(entries){
  
  entries.forEach(e =>{
      let element = e.target;
      if(e.isIntersecting === true){
          element.classList.remove("not-visible");
          element.classList.add("right");
      }else{
          element.classList.remove("right");
          element.classList.add("not-visible");
      }
  });
}, { threshold: [0] });
observer.observe(document.querySelector("#texbox"));
observer.observe(document.querySelector("#contact"));


// slide left
var observer = new IntersectionObserver(function(entries){

  entries.forEach(e =>{
      let element = e.target;
      if(e.isIntersecting === true){
          element.classList.remove("not-visible");
          element.classList.add("left");
      }else{
          element.classList.remove("left");
          element.classList.add("not-visible");
      }
  });
}, { threshold: [0] });
observer.observe(document.querySelector("#skill_effect"));
observer.observe(document.querySelector("#bye"));


// horizontal scroll
document.addEventListener('scroll', horizontalScroll);

let sticky = document.querySelector('.sticky');
let stickyParent = document.querySelector('.pofol_box');
let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;

function horizontalScroll(){
    let stickyPosition = sticky.getBoundingClientRect().top;
    if(stickyPosition > 1){
        return;
    }else{
        let scrolled = stickyParent.getBoundingClientRect().top;
        sticky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)* .8;
    }
}


// slide up
function reveal() {
  var reveals = document.querySelectorAll(".dim");

  for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("add");
      } else {
      reveals[i].classList.remove("add");
      }
  }
  }
  window.addEventListener("scroll", reveal);