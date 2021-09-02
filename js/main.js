$(function () {
  $('.slider__box').slick({
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="../images/arrow-left.svg" alt="slider arrow-left">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="../images/arrow-right.svg" alt="slider arrow-right">',
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 896,
        settings: {
          arrows: false
        }
      }
    ]
  });

  $('.menu-btn').on('click', function () {
    $('.menu__list').toggleClass('active');
  });
});