
$(document).ready(function () {
    $(".dws-progress-bar").circularProgress({
        color: "#ee5673",
        line_width: 17,
        height: "350px",
        width: "350px",
        percent: 0,
        // counter_clockwise: true,
        starting_position: 25
    }).circularProgress('animate', 100, 2000);
});

$(window).on('load', function () {
   var $preloader = $('#preloader');
   $preloader.delay(1800).fadeOut('slow');
});



const mq = window.matchMedia( "(min-width: 1100px)" );
const mc = window.matchMedia( "(min-width: 776px)" );

$(document).on('ready', function() {
          $(".lazy").slick({
            lazyLoad: 'ondemand', // ondemand progressive anticipated
            infinite: true
          });
        });

if (mq.matches) {window.onload = function () {
     $("#menu").show("drop", { direction: "right" }, 500);
     $(".logo").show("drop", { direction: "left" }, 500);
};
}else{
    $(".logo").show("drop", { direction: "left" }, 500);
    $(".icon_menu").show("drop", { direction: "right" }, 500);

}



$(function() {
    scrolllinks = $("a[href^=#]"),
    scrolllinks.click(function(e){
      var shref = $(this).attr("href"),
          offTop = shref === "#" ? 0 : $(shref).offset().top;
      $('html, body').stop().animate({ 
          scrollTop: offTop
      }, 1500);
      e.preventDefault();
    });
});


$(function () {
	$('.icon_menu').click(function () {
		$('.menu').slideToggle('show');
    $("#header").addClass("active");
	});
  $(window).resize(function() {      
      $('.menu').removeAttr('style');
  });
});

if (mq.matches) {
  $(document).ready(function (){
     $(".menu_items").hover(function() {
        $(this).stop().animate({ backgroundColor: "#fff",}, 400);
        $(this).children('.menu_item').css({ color: "#f5586"});
        $(this).children('.menu_button').css({background:"url(img/top.png)"});
        },function() {
        $(this).stop().animate({ backgroundColor: "rgba(183, 3, 3, 0)", color:"#fff" }, 400);
        $(this).children('.menu_button').css({background:"url(img/down.png)"});
        $(this).children('.menu_item').css({ color: "#fff"});
    });
 }); 
 $(document).ready(function(){
    $('.menu_items').hover(function(){
        if(!$(this).children('.submenu').hasClass('show')){
            $(this).children('.submenu').addClass('show');
            
        } else {
            $(this).children('.submenu').removeClass('show').next('.submenu').slideUp();
        }
    });
});
} else {
  $(document).ready(function(){
    $('#menu #menupush').click(function(){
        if(!$(this,'.submenu').hasClass('show')){
            $('#menu #menupush').removeClass('show').css({background:"url(img/down_b.png) no-repeat center center"}).next('.submenu').slideUp(100); 
            $(this).css({background:"url(img/top_b.png) no-repeat center center"});
            $(this,'.submenu').addClass('show');
            $(this).next('.submenu').slideDown(500);
        } else {
            $(this,'.submenu').removeClass('show').next('.submenu').slideUp();
            $(this).css({background:"url(img/down_b.png) no-repeat center center"});
        }
    });
});
}


if (mq.matches) {
   $(document).ready(function(){
    $('.submenu_item').hover(function(){
        if(!$(this).children('.sub_submenu').hasClass('show')){
            $(this).children('.sub_submenu').addClass('show');
            $(this).children('.sub_menu_button').css({background:"url(img/left.png)"});
            
        } else {
            $(this).children('.sub_submenu').removeClass('show').next('.submenu').slideUp();
            $(this).children('.sub_menu_button').css({background:"url(img/right.png)"});
        }
    });
});
} else {
  if (mc.matches) {
    $(document).ready(function(){
    $('#menu_item #menup').click(function(){
        if(!$(this,'.sub_submenu').hasClass('show')){
            $('#menu_item #menup').removeClass('show').css({background:"url(img/right_w.png)"}).next('.sub_submenu').slideUp(100); 
            $(this).css({background:"url(img/left_b.png)"});
            $(this,'.sub_submenu').addClass('show');
            $(this).next('.sub_submenu').slideDown(500);
        } else {
            $(this,'.sub_submenu').removeClass('show').next('.sub_submenu').slideUp();
            $(this).css({background:"url(img/right_w.png)"});
        }
    });
});
  
} else {
$(document).ready(function(){
    $('#menu_item #menup').click(function(){
        if(!$(this,'.sub_submenu').hasClass('show')){
            $('#menu_item #menup').removeClass('show').css({background:"url(img/down_b.png) no-repeat center center"}).next('.sub_submenu').slideUp(100); 
            $(this).css({background:"url(img/top_b.png) no-repeat center center"});
            $(this,'.sub_submenu').addClass('show');
            $(this).next('.sub_submenu').slideDown(500);
        } else {
            $(this,'.sub_submenu').removeClass('show').next('.sub_submenu').slideUp();
            $(this).css({background:"url(img/down_b.png) no-repeat center center"});
        }
    });
});
}
}
$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").addClass("active");
    }
    else {
        $("#header").removeClass("active");
    }
});

$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#backTop").addClass("red");
    }
    else {
        $("#backTop").removeClass("red");
    }
});


$(document).ready(function () {
    $(".icon").click(function () {
        $(".menu").fadeToggle(500);
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");
    });
});









