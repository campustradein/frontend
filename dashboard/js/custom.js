
// custom js files 

/*
	
	1. Slide Menu
	2. slide Menu Active Item

*/
  
  /* 1. Slide Menu */

  var activeStateItem = 0;

  $('.slideMenuOpen').click(function() {

    if ($(this).children('i').hasClass('SlideMenu')) {
      $('.asideMenu').css({
        'left':'-193px'
      });
      $(this).children('i').removeClass('SlideMenu').addClass('openMenu');
      $('.mainListItems li a').hide();
      $('.mainListItems').css({
        'width':'46px'
      });
      $('.mainListItems').css({
        'float':'right'
      })
    }
    else{
      $('.asideMenu').css({
        'left':'0px'
      });
      $(this).children('i').removeClass('openMenu').addClass('SlideMenu');
      $('.mainListItems li a').show();
      $('.mainListItems').css({
        'width':'100%'
      });
      $('.mainListItems').css({
        'float':'left'
      });
    }

  });


  /* Slide menu active item */

  $('.mainListItems li').on('click', function(){

    $(this).addClass('activeState').siblings().removeClass('activeState');

  });


  // if (window.matchMedia('(max-width: 480px)').matches) {
  //   $('.slideMenuOpen').click();
  // }

  /* add a book automatically after submitting a form */

  $('#addBookForm').submit(function(e){
    e.preventDefault();
    $('#addNewBook').append( "<p>Test</p>" );
  });