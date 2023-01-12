$(document).ready(function() {
  // 오토 스크롤
  $(".container").each(function () {
      $(this).on("mousewheel DOMMouseScroll", function (e) {
          e.preventDefault();
          var delta = 0;
          if (!event) event = window.event;
          if (event.wheelDelta) {
              delta = event.wheelDelta / 120;
              if (window.opera) delta = -delta;
          } else if (event.detail) delta = -event.detail / 3;
          var moveTop = null;

          if (delta < 0) {
              if ($(this).next() != undefined) {
                  moveTop = $(this).next().offset().top;
              }
          } else {
              if ($(this).prev() != undefined) {
                  moveTop = $(this).prev().offset().top;
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

  // 드롭메뉴
  var $firstmenu = $('header'),
  $header = $('header');
  $firstmenu.mouseenter(function(){
    $header.stop().animate({height:'360px'},100);
    
  })
  .mouseleave(function(){ 
    $header.stop().animate({height:'100px'},100);
  })

  // back to top button set
  const backToTop = document.getElementById('backtotop');
  const checkScroll=()=>{
    let pageOffset = window.pageYOffset;

    if(pageYOffset !== 0){
        backToTop.classList.add('show');  
    }else{
        backToTop.classList.remove('show'); 
    }
  }
  const moveBackToTop=()=>{
    if(window.pageYOffset > 0 ){
        window.scrollTo({top:0, behavior:"smooth"});
    }
  }
  window.addEventListener('scroll', checkScroll);
  backToTop.addEventListener('click',moveBackToTop);


  // viewport set
  $('.fa-ellipsis-vertical').click(function(){
    $('.viewport_menu').animate({right:'0px'}).css({'display':'block'});
  });

  $('.fa-x').click(function(){
    $('.viewport_menu').animate({left:'600px'}).css({'display':'none'});
  });

  
  // fade in events
  // page2 fade in
  function reveal() {
    var reveals = document.querySelectorAll(".rewardcard");
  
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

  // fade in right 
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

  // fade in left 
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


  // fade in
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".new_coffee").each(function() {
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {
          $(this).fadeTo(1000,1);
          $(this).animate({'transform':'transform(500px)'});
        }
      } 
      else {
        if ($(this).css("opacity")==1) {
          $(this).fadeTo(1000,0);
        }
      }
    });
  }).scroll();


  // auto image slide
  setInterval(fnSlide, 3000);
  function fnSlide() {
    $("#slide_image >ul").animate({ "margin-left": "-1200px" }, 1200, function () {
      $("#slide_image >ul").css({ "margin-left": "-8px" });
      $("#slide_image >ul >li:first-child").insertAfter("#slide_image >ul >li:last-child");
    });
  };



});




  

