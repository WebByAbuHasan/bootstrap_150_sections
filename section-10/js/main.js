$('.product-list').masonry({
    // set itemSelector so .grid-sizer is not used in layout
    // itemSelector: '.grid-item',
    // // use element for option
    // columnWidth: '.grid-sizer',
    percentPosition: true
  })

  $(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        autoplay: false,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
            }
    });
});
