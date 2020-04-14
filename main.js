
$(document).ready(function(){

  var close;

  slideImgAutomatic();

  $('.next').click(function(){

    clearInterval(close);

    var imgActive = $('img.active');
    var nav = $('.nav i.select');
    var imgIdx = imgActive.index();


    if (imgActive.hasClass('last')) {

      $('img.first').css({"left": "800px"});
      imgActive.animate({
        left: '-800px'
      }, 1100, function () {
        imgActive.removeClass('active');
        $('img.first').addClass('active');
        $('img').not('.first').css({"left": "800px"});
        nav.removeClass('select');
        $('.nav i.first').addClass('select');

      });

      $('img.first').animate({
        left: 0
      }, 900, function () {
        slideImgAutomatic();
      });

    } else {

      $('img').not('.active').css({"left": "800px"});
        imgActive.animate({
          left: '-800px'
        }, 1100, function () {
          imgActive.removeClass('active');
          imgActive.next().addClass('active');
          nav.removeClass('select');
          nav.next().addClass('select');

        });

        imgActive.next().animate({
          left: 0
        }, 900, function () {
          slideImgAutomatic();
        });
      }

  });



  $('.prev').click(function(){

    clearInterval(close);

    var imgActive = $('img.active');
    var nav = $('.nav i.select');

    if (imgActive.hasClass('first')) {

      $('img.last').css({"left": "-800px"});
      imgActive.animate({
        left: '800px'
      }, 1100, function () {
        imgActive.removeClass('active');
        $('img.last').addClass('active');
        $('img').not('.last').css({"left": "-1000px"});
        nav.removeClass('select');
        $('.nav i.last').addClass('select');

      });

      $('img.last').animate({
        left: 0
      }, 900, function () {
          slideImgAutomatic();
      });

    } else {

      $('img').not('.active').css({"left": "-800px"});
      imgActive.animate({
        left: '800px'
      }, 1100, function () {
        imgActive.removeClass('active');
        imgActive.prev().addClass('active');
        nav.removeClass('select');
        nav.prev().addClass('select');

      });

      imgActive.prev().animate({
        left: 0
      }, 900, function () {
        slideImgAutomatic();
      });
    }
  });

  $('.nav i').click(function(){

    clearInterval(close);

    var nav = $('.nav i');
    var idx = $(this).index();
    var imgActive = $('img.active');
    var ball = $(this);

    if (idx > $('.nav i.select').index()){

      $('img').not('.active').css({"left": "800px"});
      imgActive.animate({
        left: '-800px'
      }, 1100, function () {
        imgActive.removeClass('active');
        $('img').eq(idx).addClass('active');
        ball.siblings().removeClass('select');
        ball.addClass('select');
        slideImgAutomatic();
      });

      $('img').eq(idx).animate({
        left: 0
      }, 900);

    } else {

      $('img').not('.active').css({"left": "-800px"});
      imgActive.animate({
        left: '800px'
      }, 1100, function () {
        imgActive.removeClass('active');
        $('img').eq(idx).addClass('active');
        ball.siblings().removeClass('select');
        ball.addClass('select');
        slideImgAutomatic();
      });

      $('img').eq(idx).animate({
        left: 0
      }, 900);
    }

  });




  function slideImgAutomatic () {

     close = setInterval(function  () {

     var imgActive = $('img.active');
     var nav = $('.nav i.select');

     if (imgActive.hasClass('last')) {

       $('img.first').css({"left": "800px"});
       imgActive.animate({
         left: '-800px'
       }, 1100, function () {
         imgActive.removeClass('active');
         $('img.first').addClass('active');
         $('img').not('.first').css({"left": "800px"});
         nav.removeClass('select');
         $('.nav i.first').addClass('select');
       });

       $('img.first').animate({
         left: 0
       }, 900);

     } else {
       $('img').not('.active').css({"left": "800px"});
         imgActive.animate({
           left: '-800px'
         }, 1100, function () {
           imgActive.removeClass('active');
           imgActive.next().addClass('active');
           nav.removeClass('select');
           nav.next().addClass('select');

         });

         imgActive.next().animate({
           left: 0
         }, 900);
       }
   }, 3000);

  }

});
