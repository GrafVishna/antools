$(document).ready(function() {
  $('.burger__button').click(function(event) {
    $('.burger__button, .head-menu__links').toggleClass('active');
    $('body').toggleClass('lock');
  });
  // $('.head-menu__link').click(function(event) {
  //   $('.head-menu__open').toggleClass('active2');
  //   $('.head-menu__link').toggleClass('active2');
  // });
});

$(function() {
    $('.slider').slick({
        autoplay: true,
        variableWidth: true,
        dots: true,
    });
    $('.ingle-item').on('click', function() {
     $('.slider').slick('slickNext');
  });
    $('.ingle-item2').on('click', function() {
     $('.slider').slick('slickPrev');
  });
})

// $(document).ready(function() {
//   $('.block__title').click(function(event) {
//     $(this).toggleClass('active').next().slideToggle(300);
//   });
// });







// $(document).ready(function() {
//     $('.popular__ittem').hover(

//         function(){ $('.pop-like__btn').addClass('btn') },

//         function(){ $('.pop-like__btn').removeClass('btn') 
//     });
// });



  //       vertical: false,
  //       verticalSwiping: false,
  //       slidesToShow: 1,
  //       autoplay: false,
  //       responsive: [
  //   {
  //     breakpoint: 901,
  //       settings: {
  //       slidesToShow: 1,
  //       vertical: false,
  //       verticalSwiping: false,
  //       arrows : false,
  //       dots : true,
  //     }
  // }]