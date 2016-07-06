
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


  if (window.matchMedia('(max-width: 768px)').matches) {
    $('.slideMenuOpen').trigger('click');
  }

  /* auto complete form fields */

 
  var options = {
    data: [ {name: "Avionet", type: "air", icon: "http://lorempixel.com/100/50/transport/2"},
      {name: "Car", type: "ground", icon: "http://lorempixel.com/100/50/transport/8"},
      {name: "Motorbike", type: "ground", icon: "http://lorempixel.com/100/50/transport/10"},
      {name: "Plane", type: "air", icon: "http://lorempixel.com/100/50/transport/1"},
      {name: "Train", type: "ground", icon: "http://lorempixel.com/100/50/transport/6"}],

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
    alert('');
  }); 