  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop: true,
      dots:false,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 4
        }
      }
    });
  });
