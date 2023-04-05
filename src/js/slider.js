const swiperPartners = new Swiper('.trusted__swiper', {
    // Optional parameters
    slidesPerView: 6,
    spaceBetween: 10,
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
    slidesPerGroup: 6,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    //   dynamicBullets: true,
    },

    breakpoints: {
      // when window width is >= 200px
      200: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 20
      }
    }
  });

  const swiperComments = new Swiper('.comments__swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.comments__next',
      prevEl: '.comments__prev',
      top: 0,
    },
  });

  const swiperAwards = new Swiper('.award__swiper', {
    slidesPerView: 7,
    spaceBetween: 10,
    loop: true,
    effect: 'slide',
    slidesPerGroup: 7,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      // when window width is >= 200px
      200: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      // when window width is >= 576px
      576: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 20
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 7,
        slidesPerGroup: 7,
        spaceBetween: 20
      }
    }
  });