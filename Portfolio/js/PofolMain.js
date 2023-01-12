// Adding scroll event listener
document.addEventListener('scroll', horizontalScroll);

//Selecting Elements
let sticky = document.querySelector('.sticky');
let stickyParent = document.querySelector('.sticky-parent');

let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;

//Scroll function 
function horizontalScroll(){

    //Checking whether the sticky element has entered into view or not
    let stickyPosition = sticky.getBoundingClientRect().top;
    if(stickyPosition > 1){
        return;
    }else{
        let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
        sticky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*0.90;
    
    }
}

//마우스포인트 애니매이션
const cursor = document.querySelector(".CursorEffect");
document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.displye = "block";
});

document.addEventListener("mouseover", () =>{
  cursor.style.displye = "none";
});

//움직이는 원 애니메이션
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
(char, i) =>
`<span style= "transform:rotate(${i * 10.5}deg)">${char}</span>`
).join("")

//Fade in 
$(window).scroll(function() {
  var windowBottom = $(this).scrollTop() + $(this).innerHeight();
  $(".about_me").each(function() {
    var objectBottom = $(this).offset().top + $(this).outerHeight();
    
    if (objectBottom < windowBottom) { 
      if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
    } else { 
      if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
    }
  });
}).scroll();
  
// 내비메뉴 고정 
var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function(){
  if(this.window.pageYOffset >= menu.offestTop){
    navbar.classList.add("sticky");
  }
  else{
    navbar.classList.remove("sticky");
  }
}
//메뉴 앵커
$("#main").click(function(){
  $('html,body').animate({
    scrollTop:$((this).attr('href')).offset().top
  },5000);
  return false;
  });
  $("#aboutme").click(function(){
    $('html,body').animate({
      scrollTop:$((this).attr('href')).offset().tops
    },5000);
    return false;
  }); 
  $("#pofolsite").click(function(){
    $('html,body').animate({
      scrollTop:$((this).attr('href')).offset().top
    },5000);
    return false;
  });
  $("#sitmap").click(function(){
    $('html,body').animate({
      scrollTop:$((this).attr('href')).offset().top
    },5000);
    return false;
  });

// 스킬메뉴 토글
$(".btn").on("click",function(e) {
  e.preventDefault();
  $(".content").hide();
  $("#"+this.id).show();
});

// // 처음으로 가기 애니메이션
// $(window).scroll(function() {
//   var windowBottom = $(this).scrollTop() + $(this).innerHeight();
//   $(".fa-square-caret-up").each(function() {
//     var objectBottom = $(this).offset().top + $(this).outerHeight();
    
//     if (objectBottom < windowBottom) { 
//       if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
//     } else {
//       if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
//     }
//   });
// }).scroll();

//
$(window).scroll(function() {
  var windowBottom = $(this).scrollTop() + $(this).innerHeight();
  $(".about_me").each(function() {
    var objectBottom = $(this).offset().top + $(this).outerHeight();
    
    if (objectBottom < windowBottom) { 
      if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
    } else { 
      if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
    }
  });
}).scroll();

// // fade to top
// function reveal() {
//   var reveals = document.querySelectorAll(".about_me");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 100;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("add2");
//     } else {
//       reveals[i].classList.remove("add2");
//     }
//   }
// }
// window.addEventListener("scroll", reveal);

// // back to top button set
// const backToTop = document.getElementById('backtotop');
// const checkScroll=()=>{
//   let pageOffset = window.pageYOffset;

//   if(pageYOffset !== 0){
//       backToTop.classList.add('show');  
//   }else{
//       backToTop.classList.remove('show'); 
//   }
// }
// const moveBackToTop=()=>{
//     if(window.pageYOffset > 0 ){
//         window.scrollTo({top:0, behavior:"smooth"});
//     }
// }
// window.addEventListener('scroll', checkScroll);
// backToTop.addEventListener('click',moveBackToTop);
