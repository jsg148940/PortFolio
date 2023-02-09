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