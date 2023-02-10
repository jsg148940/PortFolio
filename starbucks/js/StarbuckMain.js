// 마우스휠 자동 스크롤
window.onload = function () {
var elm = ".page";
$(elm).each(function (index) {
    
    $(this).on("mousewheel DOMMouseScroll", function (e) {
        e.preventDefault();
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            // if (window.opera) delta = -delta;
        } 
        else if (event.detail)
            delta = -event.detail / 6;
        var moveTop = $(window).scrollTop();
        var elmSelecter = $(elm).eq(index);

        if (delta < 0) {
            if ($(elmSelecter).next() != undefined) {
                try{
                    moveTop = $(elmSelecter).next().offset().top;
                }catch(e){}
            }

        } else {
            if ($(elmSelecter).prev() != undefined) {
                try{
                    moveTop = $(elmSelecter).prev().offset().top;
                }catch(e){}
            }
        }

        $("html,body").stop().animate({
            scrollTop: moveTop + 'px'
        }, {
            duration: 800, complete: function () {
            }
        });
    });
});
}


// slide up
function reveal() {
    var reveals = document.querySelectorAll(".reward");

for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("add");
    } else {
    reveals[i].classList.remove("add");
    }
}
}
window.addEventListener("scroll", reveal);


// slide down
var observer1 = new IntersectionObserver(function(entries){
    entries.forEach(e =>{
        let element = e.target;
        if(e.isIntersecting === true){
            element.classList.remove("not-visible");
            element.classList.add("down");
        }else{
            element.classList.remove("down");
            element.classList.add("not-visible");
        }
    });
  }, { threshold: [0] });
  
  observer1.observe(document.querySelector("#video-text"));

// slide right
var observer1 = new IntersectionObserver(function(entries){
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

observer1.observe(document.querySelector("#slogan"));
observer1.observe(document.querySelector("#product-box"));
observer1.observe(document.querySelector("#intro-text"));

// slide left
var observer1 = new IntersectionObserver(function(entries){
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
  
  observer1.observe(document.querySelector("#new_menu"));
  observer1.observe(document.querySelector("#new-bean"));
  observer1.observe(document.querySelector("#intro-image"));




  //
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");
  const menuBtn = document.querySelector(".menu-btn");
  const menuItems = document.querySelector(".menu-items");
  const expandBtn = document.querySelectorAll(".expand-btn");
  
  function toggle() {
    // disable overflow body
    body.classList.toggle("overflow");
    // dark background
    overlay.classList.toggle("overlay--active");
    // add open class
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
  }
  
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
  });
  
  window.onkeydown = function (event) {
    const key = event.key; // const {key} = event; in ES6+
    const active = menuItems.classList.contains("open");
    if (key === "Escape" && active) {
      toggle();
    }
  };
  
  document.addEventListener("click", (e) => {
    let target = e.target,
      its_menu = target === menuItems || menuItems.contains(target),
      its_hamburger = target === menuBtn,
      menu_is_active = menuItems.classList.contains("open");
    if (!its_menu && !its_hamburger && menu_is_active) {
      toggle();
    }
  });
  
  // mobile menu expand
  expandBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("open");
    });
  });