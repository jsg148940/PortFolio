// 메뉴
$(".navigation li").hover(function() {
  var isHovered = $(this).is(":hover");
  if (isHovered) {
    $(this).children("ul").stop().slideDown(300);
  } else {
    $(this).children("ul").stop().slideUp(100);
  }
});


// 음악 차트 롤링
setInterval(fnSlide, 3000);
function fnSlide() {
  $(".chart_rollig >ul").animate({ "margin-top": "-30px" }, 1000, function () {
    $(".chart_rollig >ul").css({ "margin-top": "-2px" });
    $(".chart_rollig >ul >li:first-child").insertAfter(".chart_rollig >ul >li:last-child");
  });
};


// 공지 슬라이더
setInterval(function(){ 
  $('.text_slider >ul>li:first-child').show() 
  .next().fadeIn().end(1000) 
  .appendTo('.text_slider >ul'); },4000);

setInterval(function(){ 
  $('.image_slider >ul>li:first-child').hide() 
  .next().fadeIn().end(1000) 
  .appendTo('.image_slider >ul'); },4000);


//viewport menu set
$('.hambeger_menu i').click(function(){
  $('.viewport_side').css({'display':'block'}).animate({ left:'0px'});
});
$('.slide_top i').click(function(){
  $('.viewport_side').animate({left:'-900px'});
});


// 사라지는 이펙트
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

//
function preventScroll(e){
  e.preventDefault();
  e.stopPropagation();

  return false;
}

function disable(){
document.querySelector('.viewport_side').addEventListener('wheel', preventScroll);
}

function enable(){
  document.querySelector('.viewport_side').removeEventListener('wheel', preventScroll);
}

document.querySelector('.slide_top i').addEventListener('click', disable);