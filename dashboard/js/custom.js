
// custom js files 

/*
	
	1. Slide Menu
	2. slide Menu Active Item

*/
  
/* 1. Slide Menu */

$('.slideMenuOpen').click(function() {

  if ($(this).children('i').hasClass('SlideMenu')) {
    $('.asideMenu').css({
      'left':'-200px'
    });
    $(this).children('i').removeClass('SlideMenu').addClass('openMenu');
  }
  else{
    $('.asideMenu').css({
      'left':'0px'
    });
    $(this).children('i').removeClass('openMenu').addClass('SlideMenu');
  }

});


  /* Slide menu active item */

  $('.mainListItems li').on('click', function(){

    $(this).addClass('activeState').siblings().removeClass('activeState');

  });