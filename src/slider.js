$(document).ready(function () {
  $('.review-slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'review-slider__dots',
    speed: 500,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    swipe: true,
  });
});