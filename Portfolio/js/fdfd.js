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


// // 스킬메뉴 토글
// $('.btn .p').on("click",function(e) {
//   e.preventDefault();

//   // var divname= this.name;ss
//   $(".content").hide();
//   // $("#"+this.id).show();
// });



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