$('.slider-block').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,

  prevArrow: $('.slider-left'),
  nextArrow: $('.slider-right'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        infinite: true,
        slidesToShow: 4,
        variableWidth: true,
    
      }
    },
    {
      breakpoint: 1100,
      settings: {
        infinite: true,
        slidesToShow: 3,
        variableWidth: true,
        
      }
    },
    {
      breakpoint: 1000,
      settings: {
        infinite: true,
        slidesToShow: 1,
        
        variableWidth: true,
    
      }
    }
  ]
});