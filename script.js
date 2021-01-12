$(document).ready(function () {
  $(window).scroll(function () {
    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });
  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $('html').css('scrollBehavior', 'auto');
  });

  // Typed
  var typed = new Typed('.typing', {
    strings: ['coder', 'reader'],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
  });

  var typed = new Typed('.typing-2', {
    strings: ['coder', 'reader'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoPlayTimeOut: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 1,
        nav: false,
      },
    },
  });
});
