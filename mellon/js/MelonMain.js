// smooth scroll
customScrollable = $("body");

var scrollTo = 0;
var scrollTop = 0;

function scrollTick() {
  requestAnimationFrame(scrollTick); 
  
  if (!touchDown) {
    scrollTop -= (scrollTop - scrollTo) / 8;
    customScrollable.scrollTop(scrollTop);
  }
}

customScrollable.on("DOMMouseWheel mousewheel", function(event) {
  event.preventDefault();
  scrollTop = customScrollable.scrollTop()
  
  var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
  scrollTo = scrollTop - (delta * 180);
});

var touchDown = false;
var scrolling = false;
var scrollDelta = 0;
customScrollable.on("touchstart touchend touchmove", function(event) {
  event.preventDefault();
  
  if (event.type == "touchstart") {
    touchDown = true;
    
    
    
    touchStart = {
      x: event.originalEvent.touches[0].clientX,
      y: event.originalEvent.touches[0].clientY
    }
  }
  if (event.type == "touchmove" && touchDown) {
    currPos = {
      x: event.originalEvent.touches[0].clientX,
      y: event.originalEvent.touches[0].clientY
    }
    if (Math.abs(currPos.y - touchStart.y) > 10 || scrolling) {
      scrolling = true;

      scrollDelta = currPos.y - touchStart.y;
      touchStart = {
        x: currPos.x,
        y: currPos.y
      }
      
      var st = customScrollable.scrollTop() - scrollDelta;

      scrollTop = st;
      scrollTo = st;
      customScrollable.scrollTop( st );
    }
  }
  if (event.type == "touchend" && event.originalEvent.touches.length == 0) {
    scrolling = false;
    touchDown = false;
   
    console.log(scrollDelta);
    scrollTo = scrollTop - scrollDelta * 10;
  }
});

scrollTick();


// slide left menu
function toggleMenu(e) {
  e.classList.toggle("active");
  document.querySelector(".sidebar").classList.toggle("active");
}

// 음악차트 rolling
setInterval(fnSlide, 3000);
function fnSlide() {
  $(".chart_rollig >ul").animate({ "margin-top": "-30px" }, 1000, function () {
    $(".chart_rollig >ul").css({ "margin-top": "-2px" });
    $(".chart_rollig >ul >li:first-child").insertAfter(".chart_rollig >ul >li:last-child");
  });
};

// 음악차트 slide up
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#navi').outerHeight();
$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
  
    if (st > lastScrollTop && st > navbarHeight){
        $('#navi').css('opacity',0);
    } else {
        if($(window).scrollTop() == 0) {
          $('#navi').css('opacity',1);
        }
    }
    
    lastScrollTop = st;
}

// 공지 슬라이더
setInterval(function(){ 
  $('.text_slider >ul>li:first-child').show() 
  .next().fadeIn().end(1000) 
  .appendTo('.text_slider >ul'); },4000);

setInterval(function(){ 
  $('.image_slider >ul>li:first-child').hide() 
  .next().fadeIn().end(1000) 
  .appendTo('.image_slider >ul'); },4000);