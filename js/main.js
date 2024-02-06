$(document).ready( function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100 )
        $('header').addClass('scroll')
        else 
        $('header').removeClass('scroll')
    })

    $('.btn-colapse-xs').click(function() {
        $(this).toggleClass('open')
        $('.nav-menu').slideToggle()
    })

    $('header .nav-menu li a').click(function() {
        if($(window).width() < 1026) {
            $('.btn-colapse-xs').toggleClass('open')
            $('.nav-menu').slideUp()
        }
    })
    
    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href')); 
        $('html, body').animate({
            scrollTop: $section.offset().top
        }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);

    $('.slide-top-bg').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        dots: false,
        arrows: false
      })

      $('.box-img-project ul').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true,
        arrows: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: true
                }
            }
        ]
      })

      $('.gallery-list ul').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
      })

      AOS.init({
        once: true,
        disable: 'mobile'
      });

})