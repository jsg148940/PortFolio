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


// 내비메뉴 고정 
var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function(){
  if(window.pageYOffset >= menu.offsetTop){
    navbar.classList.add("sticky");
  }
    else{
    navbar.classList.remove("sticky");
  }
}

// 스킬메뉴 토글
$(".btn").on("click",function(e) {
  e.preventDefault();
  $(".content").hide();
  $("#"+this.id).show();
});


//
"use strict"

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
        sticky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*0.85;
    
    }
}