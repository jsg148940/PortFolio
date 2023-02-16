// 실시간 시간
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1; 
let day = date.getDate();
let hour = date.getHours();
let min = date.getMinutes();
document.getElementById("dates").innerHTML =
  "(" + year + "." + month + "." + day + "&nbsp" + hour + ":" + min + "기준) / 출처 : Airkorea";


// 내비 메뉴
var nav = $('nav');
var navdown = $('.drop-down');
    
nav.mouseenter(function(){
    navdown.stop().animate({height:'530px'},1);
})
navdown.mouseleave(function(){ 
    navdown.stop().animate({height:'85px'},1);
})


// 이미지 슬라이더 핸들
const prev = document.querySelector('.slider_handle_left');
const next = document.querySelector('.slider_handle_right');
const slides = document.getElementsByClassName('slide');

let index = 0;
var slide = document.querySelectorAll(".slide");
let slideIndex = 0;

const showSlides = (n) => {
    
    if (n > slides.length - 1 ){ n = 0, slideIndex = n }
    if ( n < 0 ){ n = slides.length - 1; slideIndex = n}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
    slides[n].style.display = 'flex';
}

prev.addEventListener('click', () => showSlides(--slideIndex));
next.addEventListener('click', () => showSlides(++slideIndex));


// 이미지 슬라이더 자동
function changeSlide(){

  if(index<0){
    index = slide.length-1;
  }
  
  if(index>slide.length-1){
    index = 0;
  }
  
  for(let i=0;i<slide.length;i++){
    slide[i].style.display = "none";
  }
  
  slide[index].style.display= "block";
  index++;

  setTimeout(changeSlide,5000);
}

changeSlide();


// left 공지사항 롤링
jQuery(function($)
{
    var ticker = function()
    {
        timer = setTimeout(function(){
            $('#ticker li:first').animate( {marginTop: '-30px'}, 500, function()
            {
                $(this).detach().appendTo('ul#ticker').removeAttr('style');
            });
            ticker();
        }, 3000);         
      };

      $(document).on('click','.prev2',function(){
        $('#ticker li:last').hide().prependTo($('#ticker')).slideDown();
        clearTimeout(timer);
        ticker();
        if($('#pause').text() == 'Unpause'){
          $('#pause').text('Pause');
        };
      }); 
  
      $(document).on('click','.next2',function(){
            $('#ticker li:first').animate( {marginTop: '-20px'}, 400, function()
                    {
                        $(this).detach().appendTo('ul#ticker').removeAttr('style');
                    });
            clearTimeout(timer);
            ticker();
    
          });
          
    var tickerpause = function()
  {
    $('#pause').click(function(){
      $this = $(this);
      if($this.text() == 'Pause'){
        $this.text('Unpause');
        clearTimeout(timer);
      }
      else {
        ticker();
        $this.text('Pause');
      }
    });
   
  };
  tickerpause();

  var tickerover = function()
  {
    $('#ticker').mouseover(function(){
      clearTimeout(timer);
    });
    $('#ticker').mouseout(function(){
      ticker();
    });  
  };

  tickerover();
    ticker();
});



// right 공지사항 롤링
jQuery(function($)
{
    var ticker = function()
    {
        timer = setTimeout(function(){
            $('#ticker2 li:first').animate( {marginTop: '-20px'}, 500, function()
            {
                $(this).detach().appendTo('ul#ticker2').removeAttr('style');
            });
            ticker();
        }, 3000);         
      };

      $(document).on('click','.prev3',function(){
        $('#ticker2 li:last').hide().prependTo($('#ticker2')).slideDown();
        clearTimeout(timer);
        ticker();
        if($('#pause').text() == 'Unpause'){
          $('#pause').text('Pause');
        };
      }); 
  
      $(document).on('click','.next3',function(){
            $('#ticker2 li:first').animate( {marginTop: '-20px'}, 400, function()
                    {
                        $(this).detach().appendTo('ul#ticker2').removeAttr('style');
                    });
            clearTimeout(timer);
            ticker();
    
          });
          
    var tickerpause2 = function()
  {
    $('#pause').click(function(){
      $this = $(this);
      if($this.text() == 'Pause'){
        $this.text('Unpause');
        clearTimeout(timer);
      }
      else {
        ticker();
        $this.text('Pause');
      }
    });
   
  };
  tickerpause2();

  var tickerover = function()
  {
    $('#ticker2').mouseover(function(){
      clearTimeout(timer);
    });
    $('#ticker2').mouseout(function(){
      ticker();
    });  
  };

  tickerover();
    ticker();
});


// 공지사항 박스 toggle
$(".list_btn_left").click(function(){

  $('.list2').hide();
  $('.list1').show();
}); 

$(".list_btn_right").click(function(){

  $('.list1').hide();
  $('.list2').show();
}); 


// 이벤트 이미지 슬라이더 핸들
const prevbtn = document.querySelector('.control_btn_prev');
const nextbtn = document.querySelector('.control_btn_next');
const slides2 = document.getElementsByClassName('pics');

let index2 = 0;
var slide2 = document.querySelectorAll(".pics");
let slideIndex2 = 0;

const showSlide2 = (n) => {
    
    if (n > slides2.length - 1 ){ n = 0, slideIndex2 = n }
    if ( n < 0 ){ n = slides2.length - 1; slideIndex2 = n}
    for (i = 0; i < slides2.length; i++){
      slides2[i].style.display = 'none';
    }
    slides2[n].style.display = 'flex';
}

prevbtn.addEventListener('click', () => showSlide2(--slideIndex2));
nextbtn.addEventListener('click', () => showSlide2(++slideIndex2));



//이벤트 이미지 슬라이더 자동
function changeSlide2(){

  if(index2<0){
    index2 = slide2.length-1;
  }
  if(index2>slide2.length-1){
    index2 = 0;
  }
  for(let i=0;i<slide2.length;i++){
    slide2[i].style.display = "none";
  }
  
  slide2[index2].style.display= "block";
  index2++;

  setTimeout(changeSlide2,3000);
  
}
changeSlide2();



// 배너 자동 슬라이더
setInterval(fnSlide2, 2000);
function fnSlide2() {

  $(".sitemap_scroll > ul").animate({ "margin-left": "-260px" }, 1200, function () {
    $(".sitemap_scroll > ul").css({ "margin-left": "-8px" });
    $(".sitemap_scroll > ul li:first-child").insertAfter(".sitemap_scroll > ul li:last-child");
  });
};

function bottomCotrol(){
  $('.sitemap_controll_prev').click({})
}



// 반응형 메뉴
function toggleMenu(e) {

  e.classList.toggle("active");
  document.querySelector("aside").classList.toggle("active");
}



// 반응형 검색창
$(document).ready(function(){
  $('.search-btn').click(function () {

     if ($('.search-bar').is(':hidden')) {
         $('.search-bar').show();
         $('html').css({"pointer-events":"none"}).css({"overflow":"hidden"});
         $('.sss').css({"pointer-events":"all"});
     } else {
         $('.search-bar').hide();
         $('html').css({"filter":"none"}).css({"overflow":"scroll"});
     }
   }); 
 });

