
// custom js files 

/*
	
	1. Slide Menu
	
*/

  // $('.SlideMenu').on('click', function () {

  //   $('.asideMenu').css({
  //     'left':'-190px'
  //   });

  //   $('.slideMenuOpen').empty();
  //   $('.slideMenuOpen').html('<i class="fa fa-arrow-circle-right openMenu" aria-hidden="true"></i>');

  // });

  // $('.openMenu').on('click', function() {
  //   $('.asideMenu').css({
  //     'left':'0px'
  //   });
  //   $('.slideMenuOpen').empty();
  //   $('.slideMenuOpen').html('<i class="fa fa-align-justify SlideMenu" aria-hidden="true"></i>');
  // });


  
$('.slideMenuOpen').click(function() {

  if ($(this).children('i').hasClass('SlideMenu')) {
    $('.asideMenu').css({
      'left':'-200px'
    });
    $(this).empty();
    $(this).html('<i class="fa fa-arrow-circle-right openMenu" aria-hidden="true"></i>');
  }
  else{
    $('.asideMenu').css({
      'left':'0px'
    });
    $(this).empty();
    $(this).html('<i class="fa fa-align-justify SlideMenu" aria-hidden="true"></i>');
  }

});