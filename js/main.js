$(document).ready( function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100 )
        $('header').addClass('scroll')
        else 
        $('header').removeClass('scroll')
    })

    $('.btn-colapse-xs').click(function() {
        $(this).toggleClass('open')
        $('.nav-menu ').slideToggle()
    })

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
        pauseOnDotsHover: false
      })

})