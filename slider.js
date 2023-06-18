$('.second_div_about_us_two_image').slick(
    {
        
        autoplay:true,
        autoplaySpeed: 1000,
        arrows:false
    }
);


$('.bblank').slick({
    autoplay:true,
    arrows:false,
    autoplaySpeed:750,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    
  });