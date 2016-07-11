
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
      $('.mainListItems a li span').hide();
      $('.mainListItems').css({
        'width':'46px'
      });
      $('.mainListItems').css({
        'float':'right'
      });
    }
    else{
      $('.asideMenu').css({
        'left':'0px'
      });
      $(this).children('i').removeClass('openMenu').addClass('SlideMenu');
      $('.mainListItems a li span').show();
      $('.mainListItems').css({
        'width':'100%'
      });
      $('.mainListItems').css({
        'float':'left'
      });
    }
  });


  /* Slide menu active item */

  $('.mainListItems a li').on('click', function(){
    $('.mainListItems a li').removeClass()
    $(this).addClass('activeState');
  });

  /* auto complete form fields */

 
  var options = {
    data: [ {name: "Book of Denzen", type: "James Butler", icon: "http://lorempixel.com/100/50/transport/2"},
      {name: "Fundamentals of jQuery", type: "Ray Jay", icon: "http://lorempixel.com/100/50/transport/8"},
      {name: "Angular JS 2", type: "Daniel James", icon: "http://lorempixel.com/100/50/transport/10"},
      {name: "AngularJS", type: "Raymond", icon: "http://lorempixel.com/100/50/transport/1"}],

    getValue: "name",

    template: {
      type: "description",
      fields: {
        description: "type"
      }
    }
  };

  $("#basics").easyAutocomplete(options);

  $('.easy-autocomplete-container').on('click', function(){

    $('#bookTitle').children('input').val('Fundamentals of jQuery');
    $('#categories').children('input').val('Fundamentals');
    $('#price').children('input').val(100);

  }); 

  // search page item active 

  $('.itemDescriptionAndReviews ul a').on('click', function(e){
    e.preventDefault();
  })

  $('.itemDescriptionAndReviews ul li a').on('click', function(){
    $('.itemDescriptionAndReviews ul li a').removeClass('activateStatus')
    $(this).addClass('activateStatus');
  });

  // $(window).resize(function(){
  //   if ($(window).width() <= 800){  
  //     $('.slideMenuOpen').click(function(){
  //       if($(this).children('i').hasClass('SlideMenu')){
  //         $('.mainBody').css({
  //           'margin-left':'100px'
  //         });
  //       }
  //     });
  //   }
  // });

