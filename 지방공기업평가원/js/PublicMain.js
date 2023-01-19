// 실시간 시간
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let hour = date.getHours();
let min = date.getMinutes();
document.getElementById("dates").innerHTML =
    "(" + year + "." + month + "." + day + "&nbsp" + hour + ":" + min + "기준) / 출처 : Airkorea";


// 내비 드롭다운 메뉴
const $firstmenu = $('.dropdown');
const $header = $('.dropdown');
    
$firstmenu.mouseenter(function(){
    $header.stop().animate({height:'530px'},1);
})
.mouseleave(function(){ 
    $header.stop().animate({height:'90px'},1);
})


// // 검색창 토글
// $(".fa-magnifying-glass").click(function(){
//     $('.viewport_side2').toggleClass("active")
// });
// $(".fa-magnifying-glass").click(function(){
//     $(this).toggleClass("active");
//   });

// //viewport menu toggle
// $('.fa-bars').click(function(){
//     $('.viewport_side').toggle().animate({left:'0px'});
// });

// $('.magnifying > i').click(function(){
//     $('.viewport_side2').toggle().toggleClass("emphasized");
// });

// $(function(){
//     $("#rel_site").on("change", function(){  
//         $(".txt").text($(this).val());
//     });
// });

// 이미지 슬라이더
const prev = document.querySelector('.left_arrow');
const next = document.querySelector('.right_arrow');
const slides = document.getElementsByClassName('slider_image');
let index = 0;
var slides2 = document.querySelectorAll(".slider_image");
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
    index = slides2.length-1;
  }
  
  if(index>slides2.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides2.length;i++){
    slides2[i].style.display = "none";
  }
  
  slides2[index].style.display= "block";
  
  index++;
  
  setTimeout(changeSlide,5000);
  
}

changeSlide();



// 뷰포드 자동 이미지 슬라이더
// function changeSlide(){

//     if(index<0){
//       index = slides2.length-1;
//     }
    
//     if(index>slides2.length-1){
//       index = 0;
//     }
    
//     for(let i=0;i<slides2.length;i++){
//       slides2[i].style.display = "none";
//     }
    
//     slides2[index].style.display= "block";
    
//     index++;
    
//     setTimeout(changeSlide,5000);
    
//   }
  
//   changeSlide();


// setInterval(function(){
//     $('.slide_image2 :first-child').fadeOut() 
//     .next().fadeIn().end(1000) 
//     .appendTo('.slide_image2'); },5000);


// 공지사항 자동 슬라이더
// first
$(document).ready(function(){
    var height =  $(".notice_first").height();
    var num = $(".first_list li").length;
    var max = height * num;
    var move = 0;
    function noticeRolling(){
        move += height;
        $(".first_list").animate({"top":-move},600,function(){
            if( move >= max ){
                $(this).css("top",0);
                move = 0;
            };
        });
    };
    noticeRollingOff = setInterval(noticeRolling,2000);
    $(".first_list").append($(".first_list li").first().clone());
});	

// second
$(document).ready(function(){
    var height =  $(".notice_second").height();
    var num = $(".second_list li").length;
    var max = height * num;
    var move = 0;
    function noticeRolling(){
        move += height;
        $(".second_list").animate({"top":-move},600,function(){
            if( move >= max ){
                $(this).css("top",0);
                move = 0;
            };
        });
    };
    noticeRollingOff = setInterval(noticeRolling,2000);
    $(".second_list").append($(".second_list li").first().clone());

    // $(".rolling_stop").click(function(){
    //     clearInterval(noticeRollingOff);
    // });
    // $(".rolling_start").click(function(){
    //     noticeRollingOff = setInterval(noticeRolling,1000);
    // });
});	


// 공지사항 박스 
$(".left").click(function(){
    $('.btnboard').hide();
    $('.board').show();
}); 
$(".right").click(function(){
    $('.board').hide();
    $('.btnboard').show();
}); 



// 행사 이미지 자동 슬라이더
// setInterval(fnSlide, 3000);
// function fnSlide() {
//   $(".event_slider >ul").animate({ "margin-left": "-420px" }, 1200, function () {
//     $(".event_slider >ul").css({ "margin-left": "-1px" });
//     $(".event_slider >ul li:first-child").insertAfter(".event_slider >ul li:last-child");
//   });
// };


// 배너 자동 슬라이더
setInterval(fnSlide2, 2000);
function fnSlide2() {
  $(".slider_bottom_banner >ul").animate({ "margin-left": "-260px" }, 600, function () {
    $(".slider_bottom_banner >ul").css({ "margin-left": "-8px" });
    $(".slider_bottom_banner >ul li:first-child").insertAfter(".slider_bottom_banner >ul li:last-child");
  });
};