$(document).ready(function(){
  // drop down menu
  $('.Name').mouseenter(function(){
    $('.NavMenu ul').slideDown();
  });
  $('.NavMenu').mouseleave(function(){
    $('.NavMenu ul').slideUp();
  });


  // auto slider images
  setInterval(function(){ 
    $('.NewAlbum_image >ul>li:first-child').fadeOut() 
    .next().fadeIn().end(1000) 
    .appendTo('.NewAlbum_image >ul'); },4000);

  setInterval(function(){ 
    $('.NewAlbum_text >ul>li:first-child').fadeOut('') 
    .next().fadeIn().end(100) 
    .appendTo('.NewAlbum_text >ul'); },4000);


  // viewport menu set
  $('.fa-bars').click(function(){
    $('.viewport_side').css({'display':'block'}).animate({ left:'0px'});
  });
  $('.fa-xmark').click(function(){
    $('.viewport_side').animate({left:'-900px'});
  });

    //top rolling list
  $(document).ready(function(){
    var height =  $(".chart_silder").height();
    var num = $(".rolling li").length;
    var max = height * num;
    var move = 0;
    function noticeRolling(){
      move += height;
      $(".rolling").animate({"top":-move},600,function(){
        if( move >= max ){
          $(this).css("top",0);
          move = 0;
        };
      });
    };
    noticeRollingOff = setInterval(noticeRolling,1000);
    $(".rolling").append($(".rolling li").first().clone());
  
    $(".rolling_stop").click(function(){
      clearInterval(noticeRollingOff);
    });
    $(".rolling_start").click(function(){
      noticeRollingOff = setInterval(noticeRolling,1000);
    });
  });	

  


});