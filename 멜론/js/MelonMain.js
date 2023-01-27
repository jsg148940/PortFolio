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


// viewport menu set
$('.fa-bars').click(function(){
  $('.viewport_side').css({'display':'block'}).animate({ left:'0px'});
});
$('.fa-xmark').click(function(){
  $('.viewport_side').animate({left:'-900px'});
});

//
document.addEventListener('scroll', horizontalScroll);

let sticky = document.querySelector('.hot_list');
let stickyParent = document.querySelector('.pofol_box');
let scrollWidth = sticky.scrollWidth;
let verticalScrollHeight = stickyParent.getBoundingClientRect().height-sticky.getBoundingClientRect().height;

function horizontalScroll(){

    let stickyPosition = sticky.getBoundingClientRect().top;
    if(stickyPosition > 1){
        return;
    }else{
        let scrolled = stickyParent.getBoundingClientRect().top;
        sticky.scrollLeft =(scrollWidth/verticalScrollHeight)*(-scrolled)*0.80;
    
    }
}
