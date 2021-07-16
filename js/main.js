$(document) .ready(function() {
   /*Sidebar Menu*/
   "use strict";

   $(".preloader-wrap").delay(1500).fadeOut('slow');

   var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoHeight: true,
    controls: false,
    nav: false,
    autoplayButtonOutput: false,
    autoplayTimeout: 5000,
    autoplay: true
   });

   /*Swiper*/
var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 4000,
  },
});


   /*Navigation*/
   $(function() {
   $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $(window).scroll(function() {
    var nav = $('.navbar');
    var top = 200;
    if ($(window).scrollTop() >= top) {

        nav.addClass('inbody');

    } else {
        nav.removeClass('inbody');
    }
  }); 

  $('body').scrollspy({ target: '.navbar' })
    
 
  
  /*Magnific Popup*/
   $(function() {
    $('div.item-wrap,.gallery').magnificPopup({delegate: 'a', 
      type: 'image',
      gallery: {
        enabled: true
      },
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
   });

   $(function() {
      $('.selector').animatedHeadline({
        animationType: 'loading-bar'
      });
   })

}); 
});

