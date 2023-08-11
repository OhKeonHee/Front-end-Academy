$(function() {
    // Trigger = toggle-btn
    $('.trigger').click(function() {
      $(this).toggleClass('active');
      $('.gnb').toggleClass('active');
    });
    $('section, .menu a').click(function() {
      $('.gnb').removeClass('active');
      $('.trigger').removeClass('active');
    })
    // Bottom Buttons change = CSS Scroll
    $(window).scroll(function() {
      if($(window).scrollTop() > 50) {
        $('header, .gototop').addClass('active')
      } else {
        $('header, .gototop').removeClass('active')
      }
    });
  
    // Smooth Scrolling
    $('.menu a, .gototop').click(function(e) {
      $.scrollTo(this.hash || 0, 900);
    });
  
    // Slick Slider : Plan > History
    $('.history-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.project-inner').slick({
      dots: true
    });
  });