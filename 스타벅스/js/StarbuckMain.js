// 마우스휠 자동 스크롤
window.onload = function () {
  var elm = ".container";
  $(elm).each(function (index) {
    
      $(this).on("mousewheel DOMMouseScroll", function (e) {
          e.preventDefault();
          var delta = 0;
          if (!event) event = window.event;
          if (event.wheelDelta) {
              delta = event.wheelDelta / 120;
              if (window.opera) delta = -delta;
          } 
          else if (event.detail)
              delta = -event.detail / 3;
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


// page2 리워드
function reveal() {
var reveals = document.querySelectorAll(".reward_image img");

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

    
// page3  fade in
function reveal5() {
    var reveals = document.querySelectorAll(".new");
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 200;
    
        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("add");
        } else {
        reveals[i].classList.remove("add");
        }
    }
    }
    window.addEventListener("scroll", reveal5);


// page4 
function reveal2() {
    var reveals = document.querySelectorAll(".toraja_info");

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
    window.addEventListener("scroll", reveal2);

function reveal3() {
    var reveals = document.querySelectorAll(".toraja");

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
    window.addEventListener("scroll", reveal3);


// page5 이미지 슬라이드
setInterval(fnSlide, 4000);

function fnSlide() {
$("#slide_image >ul").animate({ "margin-left": "-1280px" }, 1280, function () {
    $("#slide_image >ul").css({ "margin-left": "-3px" });
    $("#slide_image >ul >li:first-child").insertAfter("#slide_image >ul >li:last-child");
});
};


// 반응형 메뉴 설정
$('.fa-ellipsis-vertical').click(function(){
$('.viewport_menu').animate({right:'0px'}).css({'display':'block'});
});

$('.fa-x').click(function(){
$('.viewport_menu').animate({left:'600px'}).css({'display':'none'});
});

  