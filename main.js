
$(document).ready(function(){

  var close;

  slideImgAutomatic();

  $('.next').click(function(){
    clearInterval(close);
    var imgActive = $('img.active');

    if (imgActive.hasClass('last')) {

      $('img.first').css({"left": "800px"});
      imgActive.animate({
        left: '-800px'
      }, 920, function () {
        imgActive.removeClass('active');
        $('img.first').addClass('active');
        $('img').not('.first').css({"left": "800px"});
      });

      $('img.first').animate({
        left: 0
      }, 800, function () {
        slideImgAutomatic();
      });

    } else {
        imgActive.animate({
          left: '-800px'
        }, 920, function () {
          imgActive.removeClass('active');
          imgActive.next().addClass('active');

        });

        imgActive.next().animate({
          left: 0
        }, 800, function () {
          slideImgAutomatic();
        });
      }

  });



  $('.prev').click(function(){
    clearInterval(close);
    var imgActive = $('img.active');
    if (imgActive.hasClass('first')) {
      $('img.last').css({"left": "-1000px"});
      imgActive.animate({
        left: '1000px'
      }, 920, function () {
        imgActive.removeClass('active');
        $('img.last').addClass('active');
        $('img').not('.last').css({"left": "-1000px"});
      });

      $('img.last').animate({
        left: 0
      }, 800, function () {
          slideImgAutomatic();
      });
    } else {
      imgActive.animate({
        left: '800px'
      }, 920, function () {
        imgActive.removeClass('active');
        imgActive.prev().addClass('active');

      });

      imgActive.prev().animate({
        left: 0
      }, 800, function () {
        slideImgAutomatic();
      });
    }
  });


  function slideImgAutomatic () {
     close = setInterval(function  () {
     var imgActive = $('img.active');

     if (imgActive.hasClass('last')) {

       $('img.first').css({"left": "800px"});
       imgActive.animate({
         left: '-800px'
       }, 920, function () {
         imgActive.removeClass('active');
         $('img.first').addClass('active');
         $('img').not('.first').css({"left": "800px"});
       });

       $('img.first').animate({
         left: 0
       }, 800);

     } else {
         imgActive.animate({
           left: '-800px'
         }, 920, function () {
           imgActive.removeClass('active');
           imgActive.next().addClass('active');

         });

         imgActive.next().animate({
           left: 0
         }, 800);
       }
   }, 3000);

  }



});
