;(function ($) {
  'use strict'

  // Preloader
  $(window).on('load', function () {
    $('.preloader').fadeOut(500)
  })

  // Search Popup
  $('.header_search').on('click', function () {
    $('.search_popup').addClass('open')
  })
  $('.search_close_btn, .search-popup-overlay').on('click', function () {
    $('.search_popup').removeClass('open')
  })

  // Hamburger / Offcanvas
  $('.hamburgerBtn, .hamburger_close_btn, .body-overlay').on('click', function () {
    $('.hamburger-area, .body-overlay').toggleClass('open')
  })

  // Sticky Header - add header bg on scroll
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop()
    if (scroll > 100) {
      $('.tj-header-area.header-5').css('background', 'rgba(255,255,255,0.98)')
    } else {
      $('.tj-header-area.header-5').css('background', 'transparent')
    }
  })

  // Pricing Tab Toggle
  $('.pricing-tab ul li button').on('click', function () {
    var $this = $(this)
    $this.closest('ul').find('button').removeClass('active')
    $this.addClass('active')

    var isYearly = $this.hasClass('yearly')
    $('.pricing-card').each(function () {
      var $price = $(this).find('.price-number')
      var $period = $(this).find('.period')
      if ($price.length) {
        var yearPrice = $price.data('year-price')
        var monthPrice = $price.data('month-price')
        $price.text(isYearly ? yearPrice : monthPrice)
        $period.text(isYearly ? $period.data('year-period') : $period.data('month-period'))
      }
    })
  })

  // Set background images from data-bg-image
  $('[data-bg-image]').each(function () {
    var bg = $(this).data('bg-image')
    if (bg) {
      $(this).css('background-image', 'url(' + bg + ')')
    }
  })

  // Back to Top
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
      $('#back_to_top').addClass('show')
    } else {
      $('#back_to_top').removeClass('show')
    }
  })
  $('#back_to_top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500)
  })

  // Venobox Video
  if ($.fn.venobox) {
    $('.video-popup').venobox()
  }

  // Swiper - Case Study
  if (typeof Swiper !== 'undefined') {
    new Swiper('.h5-case-study-slider', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      pagination: {
        el: '.swiper_pagination',
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    })

    // Testimonial Slider
    new Swiper('.tj-testimonial-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper_pagination.testimonial-pagination',
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2 },
      },
    })

    // Marquee Slider
    new Swiper('.marquee-slider', {
      slidesPerView: 'auto',
      loop: true,
      speed: 3000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      allowTouchMove: false,
    })
  }

  // Odometer Counter
  if (typeof odometer !== 'undefined') {
    $('.odometer').each(function () {
      var count = $(this).data('count')
      if (count) {
        setTimeout(function () {
          $(this).text(count)
        }.bind(this), 300)
      }
    })
  }

  // WOW Animation
  if (typeof WOW !== 'undefined') {
    new WOW({ offset: 50, mobile: false }).init()
  }

  // Lenis Smooth Scroll
  if (typeof Lenis !== 'undefined') {
    var lenis = new Lenis({
      duration: 0.35,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)) },
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.15,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }

  // GSAP Text Animation for .text-anim (fallback without SplitText)
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.utils.toArray('.sec-title').forEach(function (el) {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
      })
    })
  }

})(jQuery)
