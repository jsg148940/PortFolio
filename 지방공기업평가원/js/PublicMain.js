// 실시간 시간
let today = new Date();   
let year = today.getFullYear();
let month = today.getMonth() + 1;  
let date = today.getDate(); 
let day = today.getDay();  
let hour = today.getHours();
let min = today.getMinutes();
document.write('<p class="date">'+'('+ year + '.' + month + '.' + date + '&nbsp'+ hour + ':'+min +'기준) / 출처 : Airkorea' + '</p>')



$(document).ready(function(){

    //search bar toggle
    $(".fa-magnifying-glass").click(function(){
        $('.viewport_side2').toggleClass("active")
    });
    // $(".fa-magnifying-glass").click(function(){
    //     $(this).toggleClass("active");
    //   });

    // viewport menu toggle
    $('.fa-bars').click(function(){
        $('.viewport_side').toggle().animate({left:'0px'});
    });
    
    $('.magnifying > i').click(function(){
        $('.viewport_side2').toggle().toggleClass("emphasized");
    });

    $(function(){
        $("#rel_site").on("change", function(){  
            $(".txt").text($(this).val());
        });
    });


    // drop menu set
    var $firstmenu = $('.drop_down'),
        $header = $('.drop_down');
        
    $firstmenu.mouseenter(function(){
    $header.stop().animate({height:'530px'},1);
    })
    .mouseleave(function(){ 
        $header.stop().animate({height:'100px'},1);
    })


    // auto slider main images
    setInterval(function(){ 
    $('.slide_image :first-child').fadeOut() 
    .next().fadeIn().end(1000) 
    .appendTo('.slide_image'); },5000);

    // auto slider main images
    setInterval(function(){ 
    $('.slide_image2 :first-child').fadeOut() 
    .next().fadeIn().end(1000) 
    .appendTo('.slide_image2'); },5000);
        

    // notice board toggle
    $(".number1").click(function(){
        $('.noticebox2').hide();
        $('.noticebox1').show();
    }); 
    $(".number2").click(function(){
        $('.noticebox1').hide();
        $('.noticebox2').show();
    }); 
    

});


// notice board rolling list
// 1
$(document).ready(function(){
    var height =  $(".notice").height();
    var num = $(".list1 li").length;
    var max = height * num;
    var move = 0;
    function noticeRolling(){
        move += height;
        $(".list1").animate({"top":-move},600,function(){
            if( move >= max ){
                $(this).css("top",0);
                move = 0;
            };
        });
    };
    noticeRollingOff = setInterval(noticeRolling,2000);
    $(".list1").append($(".list1 li").first().clone());

    // $(".list1").click(function(){
    //     clearInterval(noticeRollingOff);
    // });
    // $(".rolling_start").click(function(){
    //     noticeRollingOff = setInterval(noticeRolling,1000);
    // });
});	

// 2
$(document).ready(function(){
    var height =  $(".notice2").height();
    var num = $(".list2 li").length;
    var max = height * num;
    var move = 0;
    function noticeRolling(){
        move += height;
        $(".list2").animate({"top":-move},600,function(){
            if( move >= max ){
                $(this).css("top",0);
                move = 0;
            };
        });
    };
    noticeRollingOff = setInterval(noticeRolling,2000);
    $(".list2").append($(".rolling li").first().clone());

    // $(".rolling_stop").click(function(){
    //     clearInterval(noticeRollingOff);
    // });
    // $(".rolling_start").click(function(){
    //     noticeRollingOff = setInterval(noticeRolling,1000);
    // });
});	


// main image slider
setInterval(fnSlide, 3000);
function fnSlide() {
  $(".silderBottom >ul").animate({ "margin-left": "-420px" }, 1200, function () {
    $(".silderBottom >ul").css({ "margin-left": "-1px" });
    $(".silderBottom >ul li:first-child").insertAfter(".silderBottom >ul li:last-child");
  });
};


// banner image slider
setInterval(fnSlide2, 2000);
function fnSlide2() {
  $(".slider_bottom_banner >ul").animate({ "margin-left": "-260px" }, 600, function () {
    $(".slider_bottom_banner >ul").css({ "margin-left": "-8px" });
    $(".slider_bottom_banner >ul li:first-child").insertAfter(".slider_bottom_banner >ul li:last-child");
  });
};